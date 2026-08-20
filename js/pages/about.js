import { t, renderAbout } from '../components.js';

function renderAboutPage() {
  const main = document.querySelector('main');
  if (!main) return;
  
  main.innerHTML = `
    <section class="hero hero--page">
      <h1 class="hero__name">${t('about.title')}</h1>
    </section>
    
    ${renderAbout()}
  `;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderAboutPage);
} else {
  renderAboutPage();
}