import DATA from '../data.js';
import { t, renderLearningEntry, groupLearningByMonth, formatDate } from '../components.js';

function renderLearning() {
  const main = document.querySelector('main');
  if (!main) return;
  
  const groups = groupLearningByMonth(DATA.learningLog);
  const monthsHtml = Object.entries(groups).map(([month, entries]) => `
    <section class="learning-month">
      <h2 class="learning-month__title">${month}</h2>
      <div class="learning-month__entries">
        ${entries.map(renderLearningEntry).join('')}
      </div>
    </section>
  `).join('');
  
  main.innerHTML = `
    <section class="hero hero--page">
      <h1 class="hero__name">${t('learning.title')}</h1>
      <p class="hero__description">${t('learning.subtitle') || 'Chronological engineering journal.'}</p>
    </section>
    
    <div class="learning-log">
      ${monthsHtml}
    </div>
  `;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderLearning);
} else {
  renderLearning();
}

window.addEventListener('langchange', renderLearning);