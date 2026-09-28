# Website regression audit, 28 September 2026

Compared the original source revision 5c78be7, all 12 archived public pages, their link inventory, and the original driver form against the replacement.

| Journey | Finding and correction |
|---|---|
| Driver discovery | Restored primary navigation, homepage driver section, Apply as a driver CTA, and contact shortcut. |
| Driver application | Restored all 31 original controls, required flags, select values, six previous-platform choices, document requirements, and selfie capture. English/Arabic and light/dark supported. |
| Driver submission | Restored original Supabase `driver_applications` insert and `driver-documents` uploads behind explicit configuration. Preview remains disabled. Added pre-upload type/size checks, random object paths, duplicate-click guard, and honest uncertain-result state. |
| Store downloads | Original App Store/Google Play controls were buttons without URLs or handlers. Restored visible controls on homepage and download page. Approved published links enable them; missing links show availability text. No invented listings. |
| Contact journeys | Restored all six original clickable destinations, including direct driver application anchor. |
| Navigation | All original public routes retained; Airport and Connect added to footer. Original `/#download`, `/drivers#driver-application`, and `/grabme-connect#experience` anchors retained. |
| Information | Exact original text remains in the previous-site data and archive. Rendered punctuation normalized without changing source archive bytes. Original product topics remain in the relevant pages with availability qualifications. |
| Staff driver review | Original public browser-password Admin screen is not restored. Authorized application review remains a release dependency, not a publicly exposed database browser. |

## Remaining functional release gaps

Live inspection found the replacement already at grabmeapp.com, with no driver form. Linking back there would be circular, so that fallback was removed. This work did not deploy or submit real applications.

Before restoring live intake, verify existing Supabase project configuration, insert-only anonymous RLS, private document bucket, MIME/size policy, abuse protection, authorized Admin document access and review. Set `NEXT_PUBLIC_DRIVER_INTAKE_ENABLED=true` only after an isolated staging application reaches the authorized reviewer. GitHub workflow again passes the original public Supabase URL/anon-key secrets; it never restores the public Admin password.

No schema changes or migrations. Adapter uses the original fields and folders. Upload/insert is not transactional: interrupted writes may leave documents or an uncertain application. The UI does not retry automatically; server-side idempotency and orphan cleanup remain needed for stronger reliability. Do not enable before retention and support handling are agreed.

Real App Store and Google Play listing URLs are still missing. The original source cannot supply them. Existing published-content integration accepts approved store links.

## Validation

Production build and TypeScript; lint with only three existing legacy image warnings; 24 isolated unit/contract tests. Browser checks compare original fields and option values, both languages/themes at mobile and desktop sizes, all original archived internal destinations and anchors, current route links, and rendered copy. No production submissions or database writes were made.
