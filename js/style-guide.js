/* ============================================================
   STELA LOIANE STUDIO — style-guide.js
   ============================================================ */

(function () {
  const demo = document.querySelector('[data-sg-navbar-demo]');
  const toggle = document.querySelector('[data-sg-navbar-toggle]');
  const menu = document.querySelector('[data-sg-navbar-menu]');

  if (!demo || !toggle || !menu) return;

  const setOpen = (nextState) => {
    demo.classList.toggle('is-open', nextState);
    toggle.setAttribute('aria-expanded', String(nextState));
  };

  toggle.addEventListener('click', () => {
    const isOpen = !demo.classList.contains('is-open');
    setOpen(isOpen);
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  if (window.location.hash === '#menu-open') {
    setOpen(true);
  }
})();
