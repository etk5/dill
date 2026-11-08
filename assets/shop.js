(() => {
  const products = document.getElementById('products');
  const status = document.getElementById('shop-status');
  const cartButton = document.getElementById('open-cart');
  const pagination = document.querySelector('.shop-pagination');
  const previous = document.getElementById('previous-page');
  const next = document.getElementById('next-page');
  let loaded = false;
  let timeout;

  function startLoading() {
    status.hidden = false;
    status.textContent = 'Loading the shop…';
    previous.disabled = true;
    next.disabled = true;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      status.hidden = false;
      status.textContent = 'The shop is taking longer to load. Please refresh to try again, or contact us for help.';
    }, 15000);
  }

  function refreshStatus() {
    if (!loaded) return;
    const hasProducts = Boolean(products.querySelector('.shop-card'));
    status.hidden = hasProducts;
    if (!hasProducts) status.textContent = 'New pieces are on their way. Sign up on our homepage for shop updates.';
  }

  products.addEventListener('shopify-list-context-update', (event) => {
    loaded = true;
    clearTimeout(timeout);
    const { hasNextPage = false, hasPreviousPage = false } = event.detail || {};
    previous.disabled = !hasPreviousPage;
    next.disabled = !hasNextPage;
    pagination.hidden = !hasNextPage && !hasPreviousPage;
    refreshStatus();
  });
  new MutationObserver(refreshStatus).observe(products, { childList: true, subtree: true });
  cartButton.addEventListener('click', () => document.getElementById('cart').showModal());
  previous.addEventListener('click', () => { startLoading(); products.previousPage(); });
  next.addEventListener('click', () => { startLoading(); products.nextPage(); });
  customElements.whenDefined('shopify-cart').then(() => { cartButton.disabled = false; });
  document.getElementById('shopify-components').addEventListener('error', () => {
    clearTimeout(timeout);
    status.hidden = false;
    status.textContent = 'The shop could not load. Please refresh to try again, or contact us for help.';
  });
  startLoading();
})();
