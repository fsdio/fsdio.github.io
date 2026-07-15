const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const backToTop = document.querySelector('.back-to-top');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('nav__menu--open');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('nav__menu--open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Buka menu navigasi');
  });
});

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

document.querySelectorAll('.section, .hero, .social').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

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
