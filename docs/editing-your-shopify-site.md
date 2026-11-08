# Editing your Shopify site

The unpublished **Dillweed & Dirt — editable content** theme adds visual editor controls while preserving the original appearance by default. It is a duplicate of the published custom theme, so saved homepage/contact settings are retained. No files in the published theme were changed.

Open https://admin.shopify.com/store/8cy7mc-3v/themes/189579591779/editor

- **About biography:** select Pages → About in the page selector, then the About biography section. Edit the eyebrow, heading, opening biography, and five remaining paragraphs. A blank biography paragraph is hidden. Line breaks are supported; text is escaped.
- **Header and navigation:** select this section on any page. Edit Home/About/Shop/Contact labels and destinations. Empty destinations keep the original links. Optionally select left and right Shopify menus to replace those links; menus support nested links. Manage the selected menus under Content → Menus. There is also a Show cart link toggle.
- **Footer and social links:** edit About/Contact labels and destinations, select a footer menu, and edit Instagram/Etsy URLs. Clear a social URL to hide that icon.
- **Theme settings → Brand and design:** change logo, header logo width, text/button/footer color, button hover color, cream/lilac backgrounds, desktop heading size, and heading/body font choices. Leave the logo empty to retain the original artwork. Color changes require a contrast check; the original defaults retain the established palette.
- **Home newsletter** and **Contact form** retain their existing editor controls. Products, prices and stock stay in Products; newsletter delivery stays in Klaviyo.

Review the unpublished theme, then publish it from Online Store → Themes. Shopify connector tools cannot publish themes. Changing settings in this draft does not affect the live site until it is published. After publication, saving edits in the published theme updates the live site.

Validation: Shopify AI Toolkit theme validation passed for every changed file. Local LiquidJS/Chromium checks covered the default and edited biography/menu/color states at phone and desktop widths, text escaping, hidden social links, nested navigation, and no horizontal overflow. These are local rendering checks; final Shopify editor behavior and live storefront remain to be reviewed in Shopify.
