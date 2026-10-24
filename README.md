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

## Current design/content revision

The header logo is centered between the navigation groups. H1 tops out at 64px (40px mobile); supporting copy uses brand green, with cream reversed copy on green. Primary actions use green pills and a darker-green hover. The footer has a true repeating radial-gradient scalloped top edge.

The mock product catalog and invented illustration placeholders have been removed. Shop currently links to the owner's actual Etsy shop, https://www.etsy.com/shop/DillweedandDirt. Product photos, prices and maker details have not been imported: the research environment could not access Etsy. Do not claim the linked inventory is synchronized. Real product imagery and verified maker copy remain necessary to finish the site's content. Contact/newsletter forms are still explicitly labeled demos and are not connected to delivery services.

## Newsletter-first navigation update

The current site has Home, Maker and Contact pages. All Shop navigation points directly to https://www.etsy.com/shop/DillweedandDirt. The internal shop page was removed; Vercel redirects /shop and /shop.html to Etsy for old bookmarks.

The homepage primary CTA leads to the shared footer newsletter form. The cream signup panel sits within the green scalloped footer on all pages. A single newsletter form appears per page; Contact keeps its separate contact-message demo. Newsletter submission still validates locally without storing/sending addresses; connect an approved provider, accurate privacy notice and consent/unsubscribe flow before enabling real subscriptions.

## Klaviyo integration

Newsletter demos have been replaced with the owner-supplied embedded form `VphHay`. `assets/klaviyo-init.js` initializes the supplied public queue and loads Klaviyo.js once per page for public account `VfNGDm`. There is one embed on each page: in the homepage hero and in the Maker/Contact footers. Klaviyo owns field rendering, validation, consent, list selection and subscription outcomes; local demo handlers apply only to the separate Contact message form. The original design's form styles should be configured in Klaviyo, without a second copy of the site's title/subcopy.

Loading/failure text is shown if the embed cannot render (including network blockers). No private key is included. Update form styles and publishing/targeting in Klaviyo; the site provides only the embed mount and surrounding layout.

Local validation covered the supplied account URL, one embed/script per page, absence of demo interception, simulated external load failure/render lifecycle and responsive overflow. The development environment blocked static.klaviyo.com, so the actual remote form and subscription delivery were not verified. After Vercel deployment, verify the form is published and targets the live domain, submit an authorized test address, complete any double opt-in confirmation, and verify membership in the intended Klaviyo list. Publish an accurate privacy notice reflecting the site's actual tracking and subscription behavior before launch.

Klaviyo loading now uses the supplied async script tag directly in every page's HTML, rather than dynamically injecting it. The local initializer installs the public queue and watches the embed only for loading/failure feedback; it waits for DOM readiness and does not submit newsletter data. This improves installation visibility but does not establish that Klaviyo has verified tracking or that live subscription delivery works.

## Embedded form presentation

Site CSS is scoped to `.klaviyo-form-VphHay` and overrides the provider's default container, email field, label and button presentation to match the existing cream/green design. A small render adapter suppresses only the exact stock heading “Sign up for our newsletter” while an email field is present. It preserves consent text, validation and post-submit messages; it does not replace submission handlers. Because this uses provider markup, recheck when changing the Klaviyo template. Prefer removing that duplicate heading block in the Klaviyo editor for long-term content ownership. Local representative-markup tests cover inline-style overrides, responsive width, consent visibility and post-submit content; actual live Klaviyo markup remains externally unverified from this environment.

## Simplified Contact and consistent footer

Contact is now a single “Say hello” section with Instagram and Etsy links. The unconnected contact-form demo and competing newsletter prompt were removed. All three pages use identical compact footer markup and `.footer-compact` styles: scalloped green edge, cream logo artwork without a box, Maker/Contact links and Instagram/Etsy icons. Newsletter signup remains only in the homepage hero; Klaviyo scripts are loaded only where that embed exists. Browser checks covered footer equality and responsive layout on all pages.

## Eyebrow typography

Added a dedicated eyebrow role: DM Sans 600, 12px/20px, uppercase with 0.12em tracking. `.eyebrow` styles the homepage studio-list label and Maker page label; the `.label` alias remains compatible with older content. Body text, form labels and navigation retain their existing styles. The font is the existing bundled DM Sans variable font.
