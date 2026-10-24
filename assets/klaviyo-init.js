// Public Klaviyo account ID and form ID; no private credentials are used here.
!function(){if(!window.klaviyo){window._klOnsite=window._klOnsite||[];try{window.klaviyo=new Proxy({},{get:function(n,i){return"push"===i?function(){var n;(n=window._klOnsite).push.apply(n,arguments)}:function(){for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];var t="function"==typeof o[o.length-1]?o.pop():void 0,e=new Promise((function(n){window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))}));return e}}})}catch(n){window.klaviyo=window.klaviyo||[],window.klaviyo.push=function(){var n;(n=window._klOnsite).push.apply(n,arguments)}}}}();

const newsletterEmbeds = [...document.querySelectorAll('.newsletter-embed')];
newsletterEmbeds.forEach(wrapper => {
  const mount = wrapper.querySelector('.klaviyo-form-VphHay');
  const status = wrapper.querySelector('.newsletter-load-status');
  let timeout;
  const observer = new MutationObserver(checkRendered);
  function checkRendered() {
    if (!mount.querySelector('input, form, iframe')) return;
    status.hidden = true;
    clearTimeout(timeout);
    observer.disconnect();
  }
  observer.observe(mount, {childList: true, subtree: true});
  timeout = setTimeout(() => {
    if (!status.hidden) status.textContent = 'The signup form hasn’t loaded. Please reload or check your content blocker.';
  }, 15000);
  checkRendered();
});

if (newsletterEmbeds.length && !document.getElementById('klaviyo-onsite')) {
  const script = document.createElement('script');
  script.id = 'klaviyo-onsite';
  script.async = true;
  script.src = 'https://static.klaviyo.com/onsite/js/VfNGDm/klaviyo.js?company_id=VfNGDm';
  script.addEventListener('error', () => {
    newsletterEmbeds.forEach(wrapper => {
      const status = wrapper.querySelector('.newsletter-load-status');
      if (!status.hidden) status.textContent = 'The signup form couldn’t load. Please reload or check your content blocker.';
    });
  });
  document.head.appendChild(script);
}
