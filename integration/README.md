# Platform integration review package

These additions target **grabme-platform**, not the static website runtime. They are intentionally isolated here because the main platform checkout has active app/backend work. They have not been installed, migrated or deployed. Integration is incomplete until the main task reviews and wires them into the existing modules and Admin UI.

1. Review `schema.prisma.fragment` and generate a migration against the main task's current schema. No migration is applied by this package.
2. Place `website.contract.ts`, `website.service.ts`, and `website.controller.ts` in `backend/api/src/website/`.
3. Register `WebsiteService`, `PublicWebsiteController`, and `AdminWebsiteController` in existing `AdminModule` (which already supplies Prisma, JWT, AdminAuthGuard). Keep the global throttler enabled.
4. Embed `WebsiteApplications.tsx` into the existing authorized Admin navigation. Pass the existing authenticated API client; do not create another login or public admin dashboard.
5. Review website legal terms, application privacy/retention, staff roles, and approved service content. Keep `WEBSITE_INTAKE_ENABLED` off until review and migration are complete.
6. Set the website's `NEXT_PUBLIC_PASSENGER_API_URL` to the verified staging API. Permit only the preview origin through backend CORS. Enable application submission only after the full browser → API → database → Admin flow passes with isolated test data.

Application approval changes review status only. It never creates a CorporateAccount, merchant partnership, employee invitation, membership or payment entitlement. Existing CorporateAccount and employee Admin flows remain authoritative.

Publication records contain bilingual content, explicit service availability and links only. No customer records or secrets belong in public content. The shared seasonal calendar still needs an approved backend endpoint; keep the everyday theme until then.

Required validation before release: concurrent idempotent submissions; key reuse with changed payload; 429 response; unauthorized and non-ADMIN queue access; nonexistent/inactive owner; stale revision conflict; append-only audit; no organization activation on approval; unpublished/expired content never publicly returned; provider failures and lost responses; isolated DB cleanup. Unit contract tests do not replace these integration tests.
