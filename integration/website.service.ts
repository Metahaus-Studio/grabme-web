import { BadRequestException, ConflictException, Injectable, NotFoundException, ServiceUnavailableException } from '@nestjs/common';
import { createHash } from 'node:crypto';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { applicationSchema, reviewSchema, publicationSchema } from './website.contract';
@Injectable()
export class WebsiteService {
    constructor(private readonly prisma: PrismaService) { }
    async submit(body: unknown) {
        if (process.env.WEBSITE_INTAKE_ENABLED !== 'true')
            throw new ServiceUnavailableException('Applications are not open');
        const parsed = applicationSchema.safeParse(body);
        if (!parsed.success)
            throw new BadRequestException('Invalid application fields');
        const { idempotencyKey, consent, website, ...data } = parsed.data;
        const payloadHash = createHash('sha256').update(JSON.stringify(data)).digest('hex');
        try {
            const application = await this.prisma.websiteApplication.create({ data: { ...data, idempotencyKey, payloadHash, audit: { create: { action: 'SUBMITTED', note: 'Applicant consent recorded', nextStatus: 'RECEIVED' } } } });
            return { reference: application.id, status: application.status };
        }
        catch (error) {
            if (!(error instanceof Prisma.PrismaClientKnownRequestError) || error.code !== 'P2002')
                throw error;
            const existing = await this.prisma.websiteApplication.findUnique({ where: { idempotencyKey } });
            if (!existing || existing.payloadHash !== payloadHash)
                throw new ConflictException('Idempotency key reused with different fields');
            return { reference: existing.id, status: 'RECEIVED' };
        }
    }
    async list(cursor?: string) {
        if (cursor && (!/^[\da-f-]{36}$/i.test(cursor) || !await this.prisma.websiteApplication.findUnique({ where: { id: cursor } })))
            throw new BadRequestException('Invalid cursor');
        const records = await this.prisma.websiteApplication.findMany({ take: 51, orderBy: [{ createdAt: 'desc' }, { id: 'desc' }], ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}), select: { id: true, kind: true, category: true, company: true, contact: true, email: true, locations: true, interest: true, teamSize: true, volume: true, campaign: true, status: true, ownerId: true, revision: true, createdAt: true, consentVersion: true } });
        return { items: records.slice(0, 50), nextCursor: records.length > 50 ? records[49].id : null };
    }
    async history(id: string) { return this.prisma.websiteApplicationAudit.findMany({ where: { applicationId: id }, orderBy: [{ createdAt: 'asc' }, { id: 'asc' }] }); }
    async review(id: string, actorId: string, body: unknown) {
        const parsed = reviewSchema.safeParse(body);
        if (!parsed.success)
            throw new BadRequestException('Invalid review');
        const { revision, note, ...change } = parsed.data;
        return this.prisma.$transaction(async (tx) => {
            if (change.ownerId && !await tx.adminUser.findFirst({ where: { id: change.ownerId, active: true, role: { in: ['ADMIN', 'SUPER_ADMIN'] } } }))
                throw new BadRequestException('Active authorized owner required');
            const current = await tx.websiteApplication.findUnique({ where: { id } });
            if (!current)
                throw new NotFoundException();
            const updated = await tx.websiteApplication.updateMany({ where: { id, revision }, data: { ...change, revision: { increment: 1 } } });
            if (updated.count !== 1)
                throw new ConflictException('Review changed. Refresh before saving.');
            await tx.websiteApplicationAudit.create({ data: { applicationId: id, actorId, action: 'REVIEWED', note, previousStatus: current.status, nextStatus: change.status } });
            // This is a review decision only. Commercial provisioning is a separate authorized workflow.
            return { id, ...change, revision: revision + 1 };
        });
    }
    async publicContent() { const publication = await this.prisma.websitePublication.findFirst({ where: { state: 'PUBLISHED' }, orderBy: { publishedAt: 'desc' }, select: { id: true, content: true, expiresAt: true } }); return publication && publication.expiresAt > new Date() ? publication : null; }
    async draft(actorId: string, body: unknown) { const result = publicationSchema.safeParse(body); if (!result.success)
        throw new BadRequestException('Invalid bilingual publication'); return this.prisma.websitePublication.create({ data: { createdBy: actorId, content: result.data.content, expiresAt: new Date(result.data.expiresAt) } }); }
    async publish(id: string, actorId: string) { const draft = await this.prisma.websitePublication.findUnique({ where: { id } }); if (!draft || draft.state !== 'DRAFT' || draft.expiresAt <= new Date())
        throw new BadRequestException('Valid draft required'); if (draft.createdBy === actorId)
        throw new BadRequestException('A second authorized reviewer must approve publication'); const result = await this.prisma.websitePublication.updateMany({ where: { id, state: 'DRAFT' }, data: { state: 'PUBLISHED', approvedBy: actorId, publishedAt: new Date() } }); if (result.count !== 1)
        throw new ConflictException('Publication changed'); return { id, state: 'PUBLISHED' }; }
}
