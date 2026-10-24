# Dillweed & Dirt — four-page design prototype

Combines the revised ink/lilac/cream design direction with Home, Maker, Shop and Contact. Contact includes separate message and newsletter form demos. The homepage contains no Etsy checkout disclaimer.

Open index.html directly or run `python3 -m http.server 8080 --bind 127.0.0.1` from this directory for local review. No package installation or build required. Fonts are bundled with their OFL licenses. All navigation uses real HTML pages.

This is a reviewable prototype, not a live storefront. Draft brand copy and illustration remain provisional. Maker biography, photographs, actual product listings and policies must be supplied. Catalog illustrations are explicitly labeled; listing buttons are disabled. Form demos validate locally and send/store nothing. No analytics, commerce or newsletter service is connected.

Before launch: replace placeholders and illustration with authentic content where appropriate; connect actual purchase links and a maintainable catalog; configure form/email delivery and subscription consent; publish accurate privacy information; validate real purchases, forms, accessibility and responsive behavior; review hosting and domain cutover. No DNS or publication changes have been made.

## Deploy to Vercel

1. In Vercel, choose Add New → Project and import `etk5/dill` from GitHub. Grant the Vercel GitHub integration access to this repository if requested.
2. Use Framework Preset **Other**, Root Directory **./**, no build or install command, and Output Directory **.**. The committed vercel.json supplies these settings.
3. Deploy and review the assigned `.vercel.app` URL. No custom domain is needed for this stage.
4. The four paths are `/`, `/maker`, `/shop`, `/contact`. Existing `.html` links are supported by Vercel's clean-URL redirects.
5. Main-branch pushes update the production URL. Branch pull requests can receive separate preview deployments through the Vercel integration. The dashboard supports redeploying a previous known-good deployment if needed.

The prototype pages currently request no indexing. This is not access control: anyone with the address may be able to visit. Remove the robots noindex directive only when final content is approved for public launch. Review Vercel's current plan terms and permitted commercial use before running the business site there; do not assume a free plan covers the store.

## Long-term maintenance

- Photos, shared CSS and local fonts: `assets/`.
- Home: `index.html`; maker story: `maker.html`; catalog: `shop.html`; contact/newsletter: `contact.html`; behavior: `assets/site.js`.
- This version has no visual CMS. Edit the files through GitHub or a development checkout, review a Vercel preview, then merge approved changes to main.
- Connect contact and newsletter providers before launch; never commit private keys. Any future server-side secrets belong in Vercel project environment settings.
- Keep Etsy as the stock source of truth if that purchase path is selected. Decide how mirrored catalog information is maintained before publishing actual stock claims.
- For the custom domain, add `dillweedanddirt.store` and `www.dillweedanddirt.store` in Vercel first. Use the exact DNS records Vercel supplies in Squarespace, preserve email records, and verify HTTPS and canonical routing. Do not guess fixed DNS values. Existing domain connection has not been changed.
