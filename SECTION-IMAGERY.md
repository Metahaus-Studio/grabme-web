# Section-specific imagery

Each of the 42 photo placements has its own image. This includes page introductions, homepage cards and features, six ride detail cards, and every selectable ride/cabin panel. No scene key or source image is shared between different sections. The `/admin/drivers` information route remains an alias of the Mission Control information page.

The existing white waterfront car is reserved for the homepage hero, the corrected black-car passenger-entry scene for the homepage driver invitation, and the original cabin image for the homepage Connect introduction. Thirty-nine newly generated editorial photographs cover the other placements. Cars remain white or black; imagery is illustrative.

`src/lib/editorial-scenes.ts` is the explicit scene registry with bilingual alt text. Components request a specific section key rather than a generic city/people/cabin fallback. Mobile uses 640px WebP variants through picture sources; desktop uses 1440px WebP. Original website archive and original user assets remain unchanged.

`tools/verify-image-uniqueness.cjs` checks source-file hashes, registry coverage, rendered image loading, and image ownership across all canonical pages and interactive panel states. Its results are saved to `evidence/image-uniqueness-audit.json`.

Final result: 42 unique files, 42 unique section assignments, zero browser errors. Production build and TypeScript passed. Three contact sheets and desktop/mobile screenshots were visually inspected. Lint has only the three pre-existing legacy image warnings. No push or deployment was performed.
