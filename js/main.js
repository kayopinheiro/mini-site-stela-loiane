/* ============================================================
   STELA LOIANE STUDIO — main.js
   ============================================================ */

/* ----------------------------------------------------------
   NAVBAR — scroll effect + menu mobile
---------------------------------------------------------- */
(function () {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.navbar__toggle');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');
  const mobileLinks = document.querySelectorAll('.navbar__mobile-menu a');
  const desktopBreakpoint = window.matchMedia('(min-width: 768px)');

  const setMenuState = (isOpen) => {
    if (!toggle || !mobileMenu) return;
    mobileMenu.classList.toggle('is-open', isOpen);
    toggle.classList.toggle('is-open', isOpen);
    navbar?.classList.toggle('is-menu-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  // Scroll: adiciona classe is-scrolled
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Toggle menu mobile
  if (toggle && mobileMenu) {
    if (!mobileMenu.id) {
      mobileMenu.id = 'mobile-menu';
    }

    toggle.setAttribute('aria-controls', mobileMenu.id);

    toggle.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('is-open');
      setMenuState(isOpen);
    });

    // Fecha ao clicar em link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        setMenuState(false);
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setMenuState(false);
      }
    });

    desktopBreakpoint.addEventListener('change', (event) => {
      if (event.matches) {
        setMenuState(false);
      }
    });
  }
})();

/* ----------------------------------------------------------
   SCROLL REVEAL — [data-reveal]
---------------------------------------------------------- */
(function () {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Delay opcional via data-reveal-delay="200"
          const delay = entry.target.dataset.revealDelay || 0;
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, Number(delay));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach(el => observer.observe(el));
})();

/* ----------------------------------------------------------
   SMOOTH SCROLL — links âncora
---------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ----------------------------------------------------------
   HORÁRIOS — seleção de horário
---------------------------------------------------------- */
(function () {
  const grid = document.querySelector('.horarios__grid');
  if (!grid) return;

  grid.addEventListener('click', function (e) {
    const btn = e.target.closest('.horario-btn');
    if (!btn) return;

    // Remove seleção anterior
    grid.querySelectorAll('.horario-btn').forEach(b => {
      b.classList.remove('is-selected');
      b.setAttribute('aria-pressed', 'false');
    });

    // Seleciona o clicado
    btn.classList.add('is-selected');
    btn.setAttribute('aria-pressed', 'true');
  });

  // Acessibilidade: aria-pressed inicial
  grid.querySelectorAll('.horario-btn').forEach(btn => {
    btn.setAttribute('aria-pressed', 'false');
  });
})();
