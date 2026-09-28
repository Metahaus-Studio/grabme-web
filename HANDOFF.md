# GrabMe passenger-first website: review checkpoint

## Status

The connected-platform direction is adopted in `SMART-SYSTEM-ROADMAP.md`. The user clarified that the Premiere/MetaHaus reference concerns design quality and the launch experience only, not public branding or a new commercial tier. Visible website copy uses ordinary punctuation without em dashes. Historical records retain their original bytes; the previous-site reader adapts punctuation only at display time. Account guidance now derives next steps from returned membership dates and eligibility, with no invented benefits or automatic actions.

**Working local website preview; not a production-ready connected-platform release.** The original production site has not been deployed over, pushed, merged or changed. No DNS, provider activation, real payment, application submission, customer export or database migration was performed.

Website repository: `https://github.com/Metahaus-Studio/grabme-web`.
Isolated checkout: `C:\Users\User\grabme-platform\website-workspace`.
Branch: `codex/passenger-first-website`.
Original source: `5c78be7d9ea62c53daa8c7b811fbce3f4082e399`, matching local clean checkout and GitHub main when inspected.
Framework: Next.js 16.2.6, React 19.2.4; static export. Source workflow deploys `out/` to GitHub Pages on pushes to `main`, using the `github-pages` environment. Actual hosting dashboard/domain settings and production commit identity still need owner verification; the live public pages were captured independently.

## Open the preview

The current preview runs at `http://127.0.0.1:3190`.

```powershell
Set-Location 'C:\Users\User\grabme-platform\website-workspace'
npm run build
node tools/serve.mjs
```

The local checkout reuses the existing website's installed dependencies through a node_modules junction. A fresh checkout should run `npm ci` instead. Preview uses no private environment file. Appearance supports Light, Dark and System, persists between pages/reloads, responds to OS changes, and works with Arabic/RTL.

## Preservation

- `archive/current-site-2026-09-28.pdf`: rendered visual record of every public page, desktop/mobile, URL and capture date. **Not a functional backup.**
- `archive/*-desktop.png`, `*-mobile.png`: page screenshots. Separate mobile menu, Arabic driver form and native validation captures preserve interactive states without submitting.
- `archive/driver-form-fields.json`: all 31 original driver form controls, field names, requirements, options and placeholders.
- `archive/*-public-text.txt`, `inventory.json`: original public text, links, HTTP status, capture metadata.
- `archive/source-5c78be7.zip`: original tracked source, content and assets. SHA-256 `E55C3FA745B889ED3AF28F3897598F52F6DD573BB0A914ECFA5D7C0C92A5BAE0`. No .env or private customer records.
- `CONTENT-PRESERVATION.md`: route-by-route mapping and qualified historical claims. `/previous-site` exposes all original public text with a historical availability notice; 12 equality checks ensure the stored text matches the captures exactly.
- Source/assets are recoverable from original Git history and the ZIP. Existing public URLs are retained, including a safe public explanation at `/admin/drivers`; private staff authorization must use the platform Admin.

## Implemented website

Passenger-first homepage; original dimensional route/cabin artwork; approved shared neutral/green color basis; responsive layout; English/Arabic; RTL; reduced motion; accessible native labels, focus states and skip link; light/dark/system modes; retained public routes; GrabClub distinction between paid subscriptions, earned eligibility, promotional credit and points; separate corporate and partnership flows; account and service-content adapters; privacy/terms/deletion information clearly marked where approval is pending; sitemap, metadata and preview noindex.

Passenger adapter matches existing OTP and `/users/me` contracts. It does not create a separate identity. Tokens stay in memory; logout/reload clears them. Eligible plans, current membership, membership end date (not falsely called renewal), Student/Corporate eligibility, and paginated wallet activity use existing responses. Wallet entries are not presented as receipts or points. No subscription activation endpoint is called.

Intake adapter supports conditional questions, bounded fields, consent, honeypot, in-flight duplicate protection and an idempotency key retained on failed retries. It is off by default. Preview validates locally and explicitly reports that nothing was submitted. A connected acknowledgment requires a backend reference, never a local success fabrication.

`integration/` contains **review-only** platform additions: strict contracts, Prisma model fragment, persistent intake service, guarded Admin controllers, append-only application audit, optimistic review revisions, owner validation, bilingual publication draft/second-review approval, and an Admin React Native queue component matching `apps/admin-app` conventions. These files are not registered in the platform, typechecked against a regenerated Prisma client, migrated, or deployed. Contract tests pass; real database/authorization/concurrency behavior remains unverified. No separate dashboard was created.

The existing shared seasonal calendar contract was inspected; no published backend endpoint was identified. Website remains everyday neutral. Seasonal calendar transport/lease integration is still required.

## Evidence and limitations

- Production build and TypeScript pass.
- ESLint passes with three inherited unused legacy image warnings; no errors.
- `evidence/route-audit.json`: public route/desktop/mobile checks, internal link checks, menu, RTL, form preview, disconnected account state; no browser page errors.
- `evidence/appearance-preservation-audit.json`: dark layouts at 1440/390/360 widths, saved Light/Dark preferences, live System preference change, Arabic dark view, reduced motion, and 12 exact public-text comparisons.
- `evidence/account-contract-audit.json`: **intercepted fixtures**, covering OTP payloads, Bearer-scoped reads, membership/plan/wallet rendering, expired-session cleanup, memory-only token, application retry key and acknowledgment boundary. No live backend claim.
- `tools/integration-contract.test.cjs`: 12 contract tests (consent, spam field, corporate team size, advertising goals, strict fields, review revision/note, bilingual/future publication, duplicate services, HTTPS links).
- Archive PDF was reopened and every page rendered; full-page sample and contact sheets visually inspected.

**Not demonstrated:** website → live backend database → authorized Admin → Passenger app. Staging API/CORS, isolated accounts and reviewed schema registration are needed. Cross-company authorization, real OTP delivery, staff roles, database idempotency/concurrency, safe uploads, payment callbacks/refunds, receipts, subscription cancellation, points/achievements, organization invitations and entitlement synchronization remain release gates.

## Owners and decisions

| Blocker | Required owner / decision |
|---|---|
| Staging URL, allowed preview origin, isolated Passenger/Admin accounts | Backend/platform owner |
| Intake models/module/Admin navigation registration and migration review | Main app task + database reviewer |
| Legacy driver intake continuity and document protection | Driver onboarding/backend owner; verify private storage, type/size checks, access controls and clean up failed uploads before release |
| Legacy website Admin password | Security/backend owner: original uses a public client-side password check; verify actual Supabase RLS/storage authorization and credential rotation needs. Replacement build no longer injects that password. |
| Subscription activation grants membership without confirmed payment | Backend/payments owner: gate authority on verified payment; website never invokes current activation route |
| Whish and card merchant approval; one-time vs recurring capability | GrabMe S.A.L; Jean-Loup Haddad coordinates onboarding/settlement; legal signing authority must be confirmed |
| Plan prices/currency/benefits, renewal, cancellation, refund terms | GrabMe commercial and legal owners |
| Operating coverage, Priority/Luxury/assistance/grocery/airport/scheduling availability | Operations owner; publish approved bilingual content |
| Public App Store / Play Store URLs | Passenger release owner; source had no verified URLs |
| Website privacy, terms, deletion route, application retention | Legal/privacy owner |
| Shared seasonal calendar endpoint, publication/expiry contract | Admin/platform owner |

Coordination message sent to the existing “Implement GrabMe addon requirements” chat. Its active platform files and test processes were not edited or interrupted.

## Production and rollback plan

1. Review the diff, source archive and content-preservation map. Complete the blockers above in staging with isolated data.
2. Review and apply database changes through the main task's approved migration workflow. Keep intake flags off until backend/Admin evidence passes. Do not use unreviewed draft files as a migration.
3. Configure public API URL/CORS, approved store links/content, privacy and terms. Enable indexing only for an approved release. Review repository variables used by the existing GitHub Pages workflow.
4. Obtain the user's production authorization before merging/pushing main or running a production deployment. The branch push below does not match the current `main` deployment trigger.
5. Record last-known-good Pages deployment artifact and current main SHA before release. Deploy the reviewed main revision via existing Pages workflow; verify retained routes, themes, languages, account recovery, applications and app entitlements.
6. If verification fails, disable new intake/payment feature flags, redeploy the saved last-known-good artifact, and preserve application records/audit. Do not roll back by deleting new data. If the old artifact is unavailable, rebuild original revision `5c78be7d...` with authorized original environment configuration. Re-deploying its legacy staff page requires the separate access-control review.

## User-performed push

Review the final local checkpoint first. **Do not push main or merge yet.**

```powershell
Set-Location 'C:\Users\User\grabme-platform\website-workspace'
git status --short
git log -3 --oneline
git remote -v
git diff 5c78be7d9ea62c53daa8c7b811fbce3f4082e399..HEAD --stat
git push --set-upstream origin codex/passenger-first-website
```

This command pushes only the review branch. No push or merge has been performed by Codex.

Regression follow-up: see REGRESSION-AUDIT.md. Restored driver navigation/home/contact journey, all 31 original form controls, and guarded original Supabase adapter. Store buttons restored with explicit pending state because original source contained no listing URLs. Live production was observed to already show the earlier replacement, so no circular fallback link is used. Driver intake remains disabled until staging and authorized Admin review pass. No deployment performed by this change.

Visual and interaction follow-up: see EXPERIENCE-UPDATE.md. Added local editorial WebP imagery, revised to white/black fleet direction and passenger entering the rear seat; interactive ride/cabin selectors, accessible availability dialogs, contextual card actions, help accordion, and connected page navigation. Build, 80 route/theme/language checks, 62 internal paths/anchors and 40 desktop/mobile route checks passed. No deployment or live-service activation.
