/* ============================================================
   STELA LOIANE STUDIO — main.js
   ============================================================ */

/* ----------------------------------------------------------
   NAVBAR — scroll effect + menu mobile
---------------------------------------------------------- */
(function () {
  const navbar = document.querySelector('.navbar');
  const pageWrapper = document.querySelector('.page-wrapper');
  const toggle = document.querySelector('.navbar__toggle');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');
  const menuOverlay = document.querySelector('.navbar__menu-overlay');
  const mobileLinks = document.querySelectorAll('.navbar__mobile-menu a');
  const desktopBreakpoint = window.matchMedia('(min-width: 768px)');
  const rootElement = document.documentElement;
  let lockedScrollY = 0;

  const lockScroll = () => {
    lockedScrollY = window.scrollY || window.pageYOffset || 0;
    rootElement.classList.add('menu-open');
    document.body.classList.add('menu-open');
    document.body.style.top = `-${lockedScrollY}px`;
  };

  const unlockScroll = () => {
    rootElement.classList.remove('menu-open');
    document.body.classList.remove('menu-open');
    document.body.style.top = '';
    window.scrollTo(0, lockedScrollY);
  };

  const setMenuState = (isOpen) => {
    if (!toggle || !mobileMenu) return;
    mobileMenu.classList.toggle('is-open', isOpen);
    toggle.classList.toggle('is-open', isOpen);
    navbar?.classList.toggle('is-menu-open', isOpen);
    pageWrapper?.classList.toggle('is-menu-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));

    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
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

    menuOverlay?.addEventListener('click', () => {
      setMenuState(false);
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

/* ----------------------------------------------------------
   PROCEDIMENTO CAROUSEL
---------------------------------------------------------- */
(function () {
  document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
    const track   = carousel.querySelector('.procedimento-carousel__track');
    const counter = carousel.querySelector('.carousel-nav__counter');
    const btnPrev = carousel.querySelector('.carousel-arrow[aria-label="Anterior"]');
    const btnNext = carousel.querySelector('.carousel-arrow[aria-label="Próximo"]');

    if (!track || !btnPrev || !btnNext) return;

    const cards = track.querySelectorAll('.procedimento-card');
    const total = cards.length;
    let current = 0;

    function goTo(index) {
      current = index;
      track.style.transform = 'translateX(-' + (100 * current) + '%)';
      if (counter) counter.textContent = (current + 1) + '/' + total;
      btnPrev.disabled = current === 0;
      btnNext.disabled = current === total - 1;
    }

    btnPrev.addEventListener('click', function () { if (current > 0) goTo(current - 1); });
    btnNext.addEventListener('click', function () { if (current < total - 1) goTo(current + 1); });

    // Estado inicial
    goTo(0);
  });
})();

/* ----------------------------------------------------------
   AGENDAMENTO — redirecionamento para WhatsApp
---------------------------------------------------------- */
(function () {
  const form = document.querySelector('.agendamento__form');
  if (!form) return;

  const telefoneInput = form.querySelector('[name="telefone"], [name="whatsapp"], #telefone');
  const formatarCelular = (valor) => {
    const digitos = String(valor || '').replace(/\D/g, '').slice(0, 11);
    if (!digitos) return '';
    if (digitos.length <= 2) return `(${digitos}`;
    if (digitos.length <= 7) return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
    return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
  };

  if (telefoneInput) {
    telefoneInput.addEventListener('input', () => {
      telefoneInput.value = formatarCelular(telefoneInput.value);
    });

    telefoneInput.addEventListener('blur', () => {
      telefoneInput.value = formatarCelular(telefoneInput.value);
    });

    telefoneInput.value = formatarCelular(telefoneInput.value);
  }

  const dataInput = form.querySelector('[name="data"]');
  if (dataInput) {
    const hoje = new Date();
    const timezoneOffsetMs = hoje.getTimezoneOffset() * 60000;
    const hojeLocalIso = new Date(hoje.getTime() - timezoneOffsetMs).toISOString().split('T')[0];
    dataInput.setAttribute('min', hojeLocalIso);
    const dateWrap = dataInput.closest('.form-field__date-wrap');

    const syncDatePlaceholderState = () => {
      if (!dateWrap) return;
      dateWrap.classList.toggle('is-empty', !dataInput.value);
    };

    syncDatePlaceholderState();

    const openDatePicker = () => {
      if (typeof dataInput.showPicker === 'function') {
        try {
          dataInput.showPicker();
        } catch (error) {
          dataInput.focus();
        }
      } else {
        dataInput.focus();
      }
    };

    dataInput.addEventListener('click', openDatePicker);
    dataInput.addEventListener('focus', openDatePicker);
    dataInput.addEventListener('focus', () => {
      dateWrap?.classList.add('is-focused');
    });
    dataInput.addEventListener('blur', () => {
      dateWrap?.classList.remove('is-focused');
      syncDatePlaceholderState();
    });
    dataInput.addEventListener('input', syncDatePlaceholderState);
    dataInput.addEventListener('change', syncDatePlaceholderState);
    dataInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openDatePicker();
      }
    });

    if (dateWrap) {
      dateWrap.addEventListener('click', (event) => {
        if (event.target !== dataInput) {
          openDatePicker();
        }
      });
    }
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const getFieldValue = (selectors) => {
      for (const selector of selectors) {
        const field = form.querySelector(selector);
        if (field && typeof field.value === 'string') {
          return field.value.trim();
        }
      }
      return '';
    };

    const nome = getFieldValue(['[name="nome"]', '#nome']);
    const whatsapp = getFieldValue(['[name="whatsapp"]', '[name="telefone"]', '#telefone']);
    const email = getFieldValue(['[name="email"]', '#email']);
    const data = getFieldValue(['[name="data"]', '#data']);
    const horarioSelecionado = form.querySelector('.horario-btn.is-selected');
    const horario = horarioSelecionado ? horarioSelecionado.textContent.trim() : getFieldValue(['[name="horario"]', '#horario']);
    const dataFormatada = /^\d{4}-\d{2}-\d{2}$/.test(data)
      ? data.split('-').reverse().join('/')
      : data;

    const mensagem = `Olá! Gostaria de agendar um horário.\n\n------------------------\n\n*Nome:* ${nome}\n*WhatsApp:* ${whatsapp}\n*E-mail:* ${email}\n\n📅 *Data:* ${dataFormatada}\n⏰ *Horário:* ${horario}`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    const urlWhatsapp = `https://wa.me/5511985129005?text=${mensagemCodificada}`;

    window.location.href = urlWhatsapp;
  });
})();
