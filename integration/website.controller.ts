import { Body, Controller, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { AdminRole } from '@prisma/client';
import { AdminAuthGuard, type AdminRequest } from '../admin/admin-auth.guard';
import { AdminRoles } from '../admin/admin-auth.decorators';
import { WebsiteService } from './website.service';
@Controller('website')
export class PublicWebsiteController {
    constructor(private readonly website: WebsiteService) { }
    @Get('content')
    content() { return this.website.publicContent(); }
    @Post('applications')
    @Throttle({ default: { limit: 3, ttl: 60000 } })
    submit(
    @Body()
    body: unknown) { return this.website.submit(body); }
}
@Controller('admin/website')
@UseGuards(AdminAuthGuard)
@AdminRoles(AdminRole.ADMIN)
export class AdminWebsiteController {
    constructor(private readonly website: WebsiteService) { }
    @Get('applications')
    list(
    @Query('cursor')
    cursor?: string) { return this.website.list(cursor); }
    @Get('applications/:id/history')
    history(
    @Param('id')
    id: string) { return this.website.history(id); }
    @Post('applications/:id/review')
    review(
    @Param('id')
    id: string, 
    @Req()
    req: AdminRequest, 
    @Body()
    body: unknown) { return this.website.review(id, req.adminUser!.id, body); }
    @Post('content/drafts')
    draft(
    @Req()
    req: AdminRequest, 
    @Body()
    body: unknown) { return this.website.draft(req.adminUser!.id, body); }
    @Post('content/:id/publish')
    publish(
    @Param('id')
    id: string, 
    @Req()
    req: AdminRequest) { return this.website.publish(id, req.adminUser!.id); }
}
