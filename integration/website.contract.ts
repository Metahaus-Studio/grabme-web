import { z } from 'zod';
const text = (min: number, max: number) => z.string().trim().min(min).max(max).refine(v => !/[\u0000-\u001f\u007f]/.test(v), 'Control characters are not allowed');
export const applicationSchema = z.object({
    idempotencyKey: z.string().uuid(), kind: z.enum(['PARTNERSHIP', 'CORPORATE']),
    category: z.enum(['retail', 'rewards', 'hospitality', 'advertising', 'other', 'corporate']),
    company: text(2, 150), contact: text(2, 100), email: z.string().trim().email().max(254).transform(v => v.toLowerCase()),
    locations: text(2, 300), interest: z.string().trim().min(10).max(2000),
    teamSize: z.number().int().min(1).max(1000000).optional(), volume: z.number().int().min(0).max(10000000).optional(), campaign: text(5, 500).optional(),
    consent: z.literal(true), consentVersion: z.literal('website-intake-v1'), website: z.literal('').default(''),
}).strict().superRefine((v, ctx) => {
    if (v.kind === 'CORPORATE' && (v.category !== 'corporate' || !v.teamSize))
        ctx.addIssue({ code: 'custom', message: 'Corporate category and team size required' });
    if (v.kind === 'PARTNERSHIP' && v.category === 'corporate')
        ctx.addIssue({ code: 'custom', message: 'Partnership category required' });
    if (v.category === 'advertising' && !v.campaign)
        ctx.addIssue({ code: 'custom', message: 'Campaign goals required' });
});
export const reviewSchema = z.object({ revision: z.number().int().min(0), status: z.enum(['RECEIVED', 'IN_REVIEW', 'NEEDS_INFORMATION', 'APPROVED', 'REJECTED']), ownerId: z.string().uuid().nullable(), note: z.string().trim().min(1).max(2000) }).strict();
const bilingual = z.object({ en: text(1, 300), ar: text(1, 300) }).strict();
const trustedLink = z.string().url().refine(v => {try{return new URL(v).protocol === 'https:'}catch{return false}});
export const publicationSchema = z.object({ expiresAt: z.string().datetime(), content: z.object({ headline: bilingual, coverage: bilingual, services: z.array(z.object({ id: z.enum(['standard', 'premium', 'friend', 'assistance', 'grocery', 'airport', 'scheduling']), status: z.enum(['AVAILABLE', 'LIMITED', 'UNAVAILABLE']), details: bilingual }).strict()).max(7), appStore: trustedLink.optional(), playStore: trustedLink.optional(), supportUrl: trustedLink.optional() }).strict() }).strict().superRefine((v, ctx) => { if (new Set(v.content.services.map(s => s.id)).size !== v.content.services.length)
    ctx.addIssue({ code: 'custom', message: 'Duplicate service IDs' }); if (Date.parse(v.expiresAt) <= Date.now())
    ctx.addIssue({ code: 'custom', message: 'Expiry must be in the future' }); });
