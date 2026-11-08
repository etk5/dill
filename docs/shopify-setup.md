# Shopify storefront setup

This branch connects the existing static site to `8cy7mc-3v.myshopify.com` using Shopify Storefront Web Components. Shopify owns products, prices, availability, cart persistence, and checkout. No Admin API credential is used in the website. Existing Etsy social links remain; main Shop navigation becomes the local catalog. The homepage newsletter, biography, contact delivery, brand assets, and shared styles are preserved.

## Merchant setup

- Add real products in Shopify with photos, descriptions, prices, weights, inventory, and shipping requirements. Make products active and publish them to the channel available to this storefront; verify storefront visibility with a real product before launch.
- Complete Settings → Payments in Shopify, including identity and payout details. Enter sensitive financial information only in Shopify.
- Configure shipping origin, package dimensions, rates, and destinations under Shipping and delivery. Decide whether local pickup is offered.
- Review tax settings for the business's actual registrations and locations.
- Supply accurate shipping, returns, privacy, and terms policies. Do not substitute invented terms or shipping promises.
- Add the existing logo and brand colors to checkout. Keep the website domain on Vercel. No domain or DNS move is required for this integration.
- Confirm the regular Basic subscription price, promotional end date, and billing frequency in Shopify's billing screen; the connection only confirms the plan name, not promotional billing terms.

## Verification and launch

1. Review the branch preview on desktop and mobile. Confirm main Shop links resolve locally rather than redirect to Etsy.
2. With no published products, the shop should show its empty message. Block the component script to check the error/fallback message.
3. Add an actual product and confirm its image, description, price, variant selection, sold-out state, and pagination where applicable.
4. Add to cart, change quantity, remove items, reopen the cart, and follow checkout. Confirm shipping and tax behavior using authorized test payment mode; do not place an unintended live order.
5. Confirm order creation and notification delivery, then turn off payment test mode before accepting real orders.
6. Review indexing (`noindex, nofollow` is inherited from the existing site) and policy links when ready for public launch.
7. Merge the reviewed branch to main to use the existing Vercel deployment flow. This branch does not change DNS or production itself.

## Validation limits

JavaScript syntax and Git whitespace checks pass. Browser verification is recorded in the PR. This environment restricts outbound Shopify CDN/store access, so live catalog, cart, and checkout behavior must be verified on an environment allowed to reach Shopify. No catalog or orders existed to migrate. No product or sample inventory was created.

Reference: https://shopify.dev/docs/api/storefront-web-components/getting-started
