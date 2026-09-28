# Imagery and interaction update

Added three coordinated editorial campaign visuals, optimized as local WebP assets, with English/Arabic alt text and visible illustrative-image captions. Homepage, ride cards and page introductions now use the visuals; legal/operational pages use a compact treatment. Existing original images and archive remain intact.

Ride preferences switch a live illustrated panel and link to the relevant ride or airport information. Connect offers Journey, Entertainment and Work selectors. Cards have contextual next steps; business and driver calls to action target the correct forms. Footer-style next-journey links connect all information pages. Help questions expand to answers and relevant routes.

Store, unconfigured account, and unconfigured driver buttons open native accessible dialogs with clear status and next steps. They support Escape, close controls and focus return. These actions do not fabricate store links, book rides, send OTPs or submit applications. Busy operations still disable duplicate requests, and preview document uploads remain disabled.

Fixed the pre-existing offscreen honeypot causing RTL horizontal overflow. Reduced-motion preferences remain honored. Shared theme tokens preserve light/dark appearance.

Validation includes production build/TypeScript, lint, rendered image and link checks, all internal anchor destinations, no nested interactive controls, selectors, dialogs, keyboard focus, help accordion, Arabic/English and both themes. See `evidence/experience-audit.json` and the experience screenshots for final results. Browser verification uses the existing Playwright fallback because agent-browser is not installed.

No deployment, backend activation, schema changes, or production submissions are included.

User fleet correction: final image references use city-white.webp and people-black.webp. Pickup composition now places the driver on the opposite side of the open rear door with the passenger entering. Final browser audit passed 80 checks and all 62 internal targets with zero browser errors; the separate 40 desktop/mobile route checks passed.
