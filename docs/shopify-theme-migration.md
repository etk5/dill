# Shopify theme migration draft

The custom theme is installed as **Dillweed & Dirt — custom design draft**, theme ID `189579427939`, with role `UNPUBLISHED`. Horizon remains the main Shopify theme. The website domain and Vercel deployment are unchanged.

Preview: https://8cy7mc-3v.myshopify.com/?preview_theme_id=189579427939

Theme editor: https://admin.shopify.com/store/8cy7mc-3v/themes/189579427939/editor

## Included

- Existing logo, locally hosted fonts, palette, scalloped borders, newsletter homepage, maker biography, and footer.
- Native Shopify collection/product pages, variant selector, quantity, cart updates/removal, sold-out state, checkout submission, empty catalog/cart, password page, generic page, and 404.
- Native Shopify contact form replacing the old FormSubmit delivery route. Verify delivery to the store's notification recipient.
- Existing Klaviyo account and form identifiers preserved. The embedded provider still controls consent and delivery; configure form targeting for the Shopify preview/store domain and verify live signup.
- About page created at `/pages/about` using the custom `about` template. Existing `/pages/contact` already uses the `contact` template.
- Policies listed from the store's actual policies. No pickup address is added by this theme. Pickup remains disabled; $5 US shipping remains configured in Shopify.
- Source in `shopify-theme/`; installable ZIP in `theme-packages/dillweed-and-dirt.zip`. The ZIP root contains Shopify's theme directories directly.

## Validation

Shopify AI Toolkit theme checks passed across the theme, using its bundled fallback schemas because the environment could not fetch the remote docset. One non-error warning concerns the external Klaviyo script; that is the existing signup provider and cannot be served as a static Shopify asset.

Shopify accepted the import and reported `processing: false`, `processingFailed: false`, `UNPUBLISHED`.

Local LiquidJS visual renders of home/about/contact/empty cart at 390px and 1280px had no horizontal overflow and loaded both logo instances. These are local layout checks, not proof of Shopify form, cart, or checkout behavior. Live preview access was blocked by the environment proxy (HTTP CONNECT 403). No real or test products/orders were created.

## Before the domain move

1. Review the unpublished theme in Shopify on phone and desktop. Test newsletter submission, contact delivery, real product variants, sold-out behavior, cart updates/removal, and an authorized test checkout. Check navigation on the actual Shopify preview.
2. Review checkout branding, payment/payout readiness, and business policies. The current generated privacy policy refers to “My Store”; it also needs to accurately reflect Klaviyo and the chosen services. Do not add a private home address to public policies without the owner's decision.
3. Confirm domain cutover with the owner after preview review. Connect the existing domain in Shopify and obtain its exact current DNS instructions. DNS is managed by Squarespace. Preserve MX/TXT/email records; do not move nameservers or alter unrelated records.
4. Publish the approved custom theme and point only the needed apex/www records to Shopify. Verify DNS, the domain's primary/canonical redirect, and HTTPS certificate issuance for apex and www before declaring migration complete. Shopify manages certificate provisioning after correct domain connection.
5. Add redirects for `/maker`, `/maker.html`, `/contact`, `/contact.html`, `/shop`, `/shop.html`, and `/index.html` as appropriate. Keep Vercel available for rollback until Shopify hosting, TLS, and customer flows are verified.

The earlier headless Vercel integration draft (PR #1) is superseded by this full Shopify hosting approach and should not be merged for this migration.
