// Public Klaviyo account ID and form ID; no private credentials are used here.
!function(){if(!window.klaviyo){window._klOnsite=window._klOnsite||[];try{window.klaviyo=new Proxy({},{get:function(n,i){return"push"===i?function(){var n;(n=window._klOnsite).push.apply(n,arguments)}:function(){for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];var t="function"==typeof o[o.length-1]?o.pop():void 0,e=new Promise((function(n){window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))}));return e}}})}catch(n){window.klaviyo=window.klaviyo||[],window.klaviyo.push=function(){var n;(n=window._klOnsite).push.apply(n,arguments)}}}}();

// Observe load failures before the following async Klaviyo script is parsed.
let onsiteFailed = false;
document.addEventListener('error', event => {
  if (event.target.id !== 'klaviyo-onsite') return;
  onsiteFailed = true;
  document.querySelectorAll('.newsletter-load-status').forEach(status => {
    if (!status.hidden) status.textContent = 'The signup form couldn’t load. Please reload or check your content blocker.';
  });
}, true);

function watchNewsletterEmbeds() {
  document.querySelectorAll('.newsletter-embed').forEach(wrapper => {
    const mount = wrapper.querySelector('.klaviyo-form-VphHay');
    const status = wrapper.querySelector('.newsletter-load-status');
    let timeout;
    const observer = new MutationObserver(checkRendered);
    function checkRendered() {
      const hasConfirmation = styleNewsletterConfirmation(mount);
      if (!mount.querySelector('input, form, iframe') && !hasConfirmation) return;
      status.hidden = true;
      clearTimeout(timeout);
      // Match the embed to the surrounding design after Klaviyo renders/re-renders.
      tidyInitialSignup(mount);
    }
    observer.observe(mount, {childList: true, subtree: true, characterData: true});
    if (onsiteFailed) status.textContent = 'The signup form couldn’t load. Please reload or check your content blocker.';
    timeout = setTimeout(() => {
      if (!status.hidden && !onsiteFailed) status.textContent = 'The signup form hasn’t loaded. Please reload or check your content blocker.';
    }, 15000);
    checkRendered();
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', watchNewsletterEmbeds, {once: true});
} else {
  watchNewsletterEmbeds();
}

// Hide only Klaviyo's stock duplicate heading, and only during email collection.
// Consent, validation, links and post-submit confirmation content stay intact.
function tidyInitialSignup(mount) {
  const defaultHeading = 'sign up for our newsletter';
  const normalize = element => element.textContent.trim().replace(/\s+/g, ' ').toLowerCase();
  mount.querySelectorAll('[data-dd-duplicate-heading]').forEach(element => {
    element.removeAttribute('data-dd-duplicate-heading');
  });
  if (!mount.querySelector('input[type="email"]')) return;
  mount.querySelectorAll('h1,h2,h3,h4,p,span,div').forEach(element => {
    if (normalize(element) !== defaultHeading) return;
    if ([...element.children].some(child => normalize(child) === defaultHeading)) return;
    const component = element.closest('[data-testid="form-component"]');
    const target = component && !component.querySelector('input,button,a') ? component : element;
    target.setAttribute('data-dd-duplicate-heading', '');
    const row = target.closest('[data-testid="form-row"]');
    if (row && !row.querySelector('input,button,a') && normalize(row) === defaultHeading) {
      row.setAttribute('data-dd-duplicate-heading', '');
    }
  });
}

// Presentation only: identify the provider's existing confirmation, never infer a
// subscription from an empty mount or manufacture a success message.
function styleNewsletterConfirmation(mount) {
  const normalize = element => element.textContent.trim().replace(/\s+/g, ' ').toLowerCase();
  const isConfirmationTitle = element => /^(?:(?:thanks|thank you) for subscribing|you['’]re on the list)[!.]?$/.test(normalize(element));
  const title = [...mount.querySelectorAll('h1,h2,h3,h4,p,span,div')].find(element =>
    isConfirmationTitle(element) && ![...element.children].some(isConfirmationTitle)
  );
  const emailVisible = [...mount.querySelectorAll('input[type="email"]')].some(input => input.getClientRects().length > 0);
  const confirmedView = Boolean(title && !emailVisible);
  mount.classList.toggle('newsletter-confirmation', confirmedView);
  mount.querySelectorAll('[data-dd-confirmation-title]').forEach(element => element.removeAttribute('data-dd-confirmation-title'));
  if (!confirmedView) return false;
  const component = title.closest('[data-testid="form-component"]');
  (component || title).setAttribute('data-dd-confirmation-title', '');
  return true;
}
