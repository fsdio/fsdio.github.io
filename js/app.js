import { setLang, getLang, t, renderNav, renderFooter, renderLangSwitcher } from './components.js';

const STORAGE_KEY = 'fsdio-lang';
const PAGES = ['home', 'roadmap', 'projects', 'learning', 'about'];

function detectPage() {
  const path = window.location.pathname;
  const file = path.split('/').pop() || 'index.html';
  const pageMap = {
    'index.html': 'home',
    'roadmap.html': 'roadmap',
    'projects.html': 'projects',
    'learning.html': 'learning',
    'about.html': 'about'
  };
  return pageMap[file] || 'home';
}

function initLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const browserLang = navigator.language.startsWith('id') ? 'id' : 'en';
  const lang = saved || browserLang;
  setLang(lang);
  document.documentElement.lang = lang === 'id' ? 'id' : 'en';
  return lang;
}

function updatePageTexts() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });
  
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const attr = el.dataset.i18nAttr;
    const key = el.dataset.i18nAttrKey;
    if (attr && key) {
      el.setAttribute(attr, t(key));
    }
  });
}

function renderHeader() {
  const header = document.querySelector('header.header');
  if (header) {
    const currentPage = detectPage();
    header.innerHTML = renderNav(currentPage);
    bindNavEvents();
    bindLangSwitcher();
  }
}

function renderFooterEl() {
  const footer = document.querySelector('footer.footer');
  if (footer) {
    footer.innerHTML = renderFooter();
  }
}

function bindNavEvents() {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('nav__menu--open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }
  
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('nav__menu--open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function bindLangSwitcher() {
  const radios = document.querySelectorAll('.lang-switcher input[name="lang"]');
  if (!radios.length) return;
  radios.forEach(r => {
    r.addEventListener('change', () => {
      if (r.checked) switchLanguage(r.value);
    });
  });
}

function switchLanguage(lang) {
  setLang(lang);
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang === 'id' ? 'id' : 'en';

  renderHeader();
  updatePageTexts();

  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  
  document.querySelectorAll('.section, .hero, .mission, .tech-focus, .recent-learning, .featured-projects, .roadmap-tabs, .roadmap-category, .projects-grid, .learning-month, .about').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

function initBackToTop() {
  const backToTop = document.querySelector('.back-to-top');
  if (!backToTop) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('back-to-top--visible');
    } else {
      backToTop.classList.remove('back-to-top--visible');
    }
  });
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.focus({ preventScroll: true });
      }
    });
  });
}

function init() {
  initLanguage();
  renderHeader();
  renderFooterEl();
  updatePageTexts();
  initScrollReveal();
  initBackToTop();
  initSmoothScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

export { initLanguage, switchLanguage, getLang, t, detectPage };