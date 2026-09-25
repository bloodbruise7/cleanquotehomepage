# thecleanquote.com — Marketing Site

Static marketing site for [thecleanquote.com](https://thecleanquote.com), built with
[Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/) and deployed
to **Cloudflare Workers** via Workers Builds (config in `wrangler.jsonc`).

The app itself lives at <https://app.thecleanquote.com>. Trial links go directly to
`https://app.thecleanquote.com/Signup`; login links go to the app root. These URLs
are shared in `src/site.ts`.

## Pages

| URL                                  | Source                                          |
| ------------------------------------ | ----------------------------------------------- |
| `/`                                  | `src/pages/index.astro` (landing page)          |
| `/sms-consent/`                      | `src/pages/sms-consent/index.astro`             |
| `/privacy-policy/`                   | `src/pages/privacy-policy/index.astro`          |
| `/terms-and-conditions/`             | `src/pages/terms-and-conditions/index.astro`    |

## Brand & design system

The site keeps the app's Poppins typography, navy `#003366`, orange `#FF8C00`, and
pill buttons. The homepage adds warm orange, pale blue and mint sections, larger
product previews and a keyboard-accessible booking tour. Layout and responsive
rules live in `src/styles/homepage.css`; shared tokens remain in `tailwind.config.mjs`.

- `src/components/Logo.astro` — the flat text wordmark ("Clean" navy + "Quote" orange).
  No image logo is used anywhere on the site.
- `public/favicon.svg` (+ PNG sizes) — navy rounded square with an orange check.
- `src/components/Icon.astro` — inline [Lucide](https://lucide.dev) icons via `lucide-static`
  (no emoji, no icon PNGs).
- `src/components/Nav.astro`, `Footer.astro`, `LegalPage.astro` — shared chrome.
- `src/site.ts` — shared URLs and class tokens (`BTN_PRIMARY`, `EYEBROW`, `CARD`, …).

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the site to ./dist
npm run preview  # build, then serve locally with wrangler
```

## Deploy — Cloudflare Workers

Pushes to `main` build and deploy through Workers Builds (`npm run build`, then
`npx wrangler deploy`); other branches get a preview version (`npx wrangler versions upload`).
`wrangler.jsonc` must stay in the repo — preview builds fail without it. The Worker name is
`cleanquotehomepage` and serves `dist/` as static assets via the `@astrojs/cloudflare` adapter.

Astro is configured with `trailingSlash: 'ignore'` and `build.format: 'directory'`, so
each route is emitted as `<route>/index.html` and both `/sms-consent` and `/sms-consent/`
resolve.

## Static assets

The homepage uses four `public/images/demo-*.webp` images captured from actual
CleanQuote React components running locally with fictional fixtures. No production
customer records are used. See `scripts/product-captures/README.md` for provenance
and capture instructions. Older screenshots and SMS consent evidence assets remain
available for existing references.

The latest homepage research and implementation evidence are in `docs/notes/`.
The older `cleanquote-feature-summary.md` is historical; verify capabilities against
current app code before changing claims. The widget emails a tailored estimate,
eligible approved quotes can offer online booking, and example prices are fictional.
The competitor comparison uses dated official sources and regular monthly team
plans, without claiming feature parity or universally lowest pricing.
