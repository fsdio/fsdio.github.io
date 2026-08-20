import { renderHero, renderMission, renderTechFocus, renderRecentLearning, renderFeaturedProjects } from '../components.js';

function renderHome() {
  const main = document.querySelector('main');
  if (!main) return;
  
  main.innerHTML = `
    ${renderHero()}
    <div class="home-content">
      ${renderMission()}
      ${renderTechFocus()}
      ${renderRecentLearning(3)}
      ${renderFeaturedProjects(2)}
    </div>
  `;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderHome);
} else {
  renderHome();
}