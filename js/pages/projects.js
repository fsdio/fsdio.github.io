import DATA from '../data.js';
import { t, renderProjectCard } from '../components.js';

function renderProjects() {
  const main = document.querySelector('main');
  if (!main) return;
  
  const projectsHtml = DATA.projects.map(renderProjectCard).join('');
  
  main.innerHTML = `
    <section class="hero hero--page">
      <h1 class="hero__name">${t('project.title')}</h1>
      <p class="hero__description">${t('project.subtitle') || 'Real implementations from my learning journey.'}</p>
    </section>
    
    <div class="projects-grid" role="list">
      ${projectsHtml}
    </div>
  `;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderProjects);
} else {
  renderProjects();
}

window.addEventListener('langchange', renderProjects);