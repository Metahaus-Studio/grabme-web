# Adopted direction: connected GrabMe platform

Accepted by the user on 28 September 2026. This is the implementation direction, not a claim that the live system is complete.

User clarification: the Premiere/MetaHaus reference describes design quality and the opening or launch experience only. Do not display it as branding, a product name, membership or commercial offer. Existing GrabMe branding and appropriate technology attribution remain in place.

## Permanent product rules

- One Passenger identity and authoritative backend across website, app and equipped cabin.
- Light, Dark and System appearance, English/Arabic, RTL and reduced motion throughout.
- Preserve previous website information and assets. Presentation changes do not rewrite archival evidence.
- Use plain sentences and familiar punctuation. No em dashes in rendered website copy, including dynamic published content. Archived originals retain exact bytes.
- MetaHaus technology attribution reflects the shared design and connected product implementation.
- Show approved availability and benefits only. Personalization requires consent. No fabricated reviews, partners, plans, payments or successful actions.
- Booking, payment and account-changing actions require explicit user confirmation and server-side authorization.

## Delivery sequence and acceptance gates

| Workstream | Accepted scope | Completion evidence |
|---|---|---|
| 1. Connected Passenger account | Shared sign-in, eligibility, memberships, receipts, support and preferences | Website/app show the same authoritative records; expired sessions and cross-account access tested |
| 2. Admin publishing | Coverage, approved plans, announcements, seasonal calendar, draft/review/publish/expiry/audit | Authorized Admin change appears publicly; draft, paused and expired information never appears |
| 3. Business journeys | Separate partnership/corporate intake, references, ownership, review, status tracking and information requests | Submission persists, staff review is audited, applicant sees only their own public status, no automatic commercial activation |
| 4. Design and opening experience | Consistent, polished Passenger account, website and cabin experience using existing GrabMe branding | English/Arabic, mobile/desktop, accessibility and both themes verified; no new Premiere product or tier |
| 5. Useful intelligence | Explain actual eligibility, highlight membership end dates and unresolved requests, consented journey suggestions, bilingual assistance using approved content, human handoff | Recommendations cite their actual account/content basis; stale/absent data cannot invent an offer or perform an action |
| 6. Payments and reliability | Verified provider callbacks, retries, idempotency, cancellation/refunds, monitoring, recovery and rollback | Isolated provider tests prove authoritative entitlements and correct failure/refund behavior |

## First end-to-end milestone

Passenger signs in, sees an approved eligible plan, submits an application, Admin reviews it, and the Passenger sees the resulting status.

Required implementation boundaries:

1. Share an in-memory authenticated session across website routes without browser-persisted bearer tokens. Existing app identity remains authoritative.
2. Link an application to the verified caller on the server. Never accept a client-supplied applicant user ID, use email matching for ownership, or grant account access from a reference alone.
3. Provide an authenticated applicant-status endpoint scoped to that caller. Return only public reference, kind, status and timestamps. Exclude staff notes, ownership details and internal audit data.
4. Keep guest intake distinct. Guest submissions cannot be claimed merely by entering an email address; any later claim requires a verified ownership workflow.
5. Register reviewed schema, controllers and the queue in the existing platform Admin. Database migrations still require review before application.
6. Demonstrate the entire chain using isolated Passenger/Admin accounts and database records, including a second account that must not see the first account's applications.

Current evidence supports browser request contracts only. Staging API/CORS, test accounts, reviewed module registration and database changes are still required. No fake status timeline or local-only success stands in for this milestone.

## Implemented starting point

The Passenger account now derives useful next steps from the returned profile and eligible plans: an approaching or passed membership end date, available plans when no membership is active, verified Student status and a linked Corporate account. It does not infer automatic renewal, discounts, Premiere eligibility, credit or a purchase capability. These notices reflect the most recent account refresh.

Existing review-package intake/Admin/publication adapters remain the starting point for workstreams 2 and 3. The remaining milestone boundaries above are open work, not deployed capabilities.

## Release constraints retained

No automatic push, merge, production deployment, live payment activation or database migration. Keep the current production site running until integration evidence, driver-onboarding continuity, legal terms, store links and business/provider decisions in HANDOFF.md are resolved.
