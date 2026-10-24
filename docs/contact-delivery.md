# Contact email delivery

The contact page now has two visitor fields: reply email and message. It submits a standard HTTPS POST to FormSubmit for the recipient address supplied by Erica. It does not use mailto, claim local demo success, or subscribe the visitor to Klaviyo. FormSubmit controls its anti-spam challenge, processing and confirmation page. Native browser validation requires an email and a message. A hidden honeypot and a fixed subject are included. No private API key or email password is used.

## Owner activation required

After deployment, Erica should submit a clearly marked test through the real contact page, look for FormSubmit's activation email (including spam), and activate delivery to her receiving address. Then submit a second test and check actual delivery and reply-to behavior. Until this succeeds, forwarding is not verified. The development environment blocks formsubmit.co, so no live request/activation/delivery was tested here.

The configured recipient appears in the public form action, as required by FormSubmit's email-address setup. If the activation instructions provide an opaque recipient endpoint, replace the action with that endpoint after the owner supplies it; do not invent one. The site uses FormSubmit's normal confirmation page rather than a spoofable local sent=1 success message. If this service is replaced later, retain the required email/message fields and the existing design.
