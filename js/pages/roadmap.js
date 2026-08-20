import DATA from '../data.js';
import { t, renderRoadmapCategory } from '../components.js';

function renderRoadmap() {
  const main = document.querySelector('main');
  if (!main) return;
  
  const springBootHtml = DATA.roadmap.springBoot.map(cat => renderRoadmapCategory(cat)).join('');
  const svelteHtml = DATA.roadmap.svelte.map(cat => renderRoadmapCategory(cat)).join('');
  
  main.innerHTML = `
    <section class="hero hero--page">
      <h1 class="hero__name">${t('roadmap.title')}</h1>
      <p class="hero__description">${t('roadmap.subtitle') || 'My learning journey organized by technology.'}</p>
    </section>
    
    <div class="roadmap-tabs" role="tablist" aria-label="${t('roadmap.title')} sections">
      <button class="roadmap-tab roadmap-tab--active" role="tab" aria-selected="true" aria-controls="panel-springboot" id="tab-springboot" data-tab="springboot">${t('roadmap.springBoot')}</button>
      <button class="roadmap-tab" role="tab" aria-selected="false" aria-controls="panel-svelte" id="tab-svelte" data-tab="svelte">${t('roadmap.svelte')}</button>
    </div>
    
    <div class="roadmap-panels">
      <div class="roadmap-panel roadmap-panel--active" role="tabpanel" id="panel-springboot" aria-labelledby="tab-springboot">
        ${springBootHtml}
      </div>
      <div class="roadmap-panel" role="tabpanel" id="panel-svelte" aria-labelledby="tab-svelte" hidden>
        ${svelteHtml}
      </div>
    </div>
  `;
  
  bindTabEvents();
}

function bindTabEvents() {
  const tabs = document.querySelectorAll('.roadmap-tab');
  const panels = document.querySelectorAll('.roadmap-panel');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;
      
      tabs.forEach(t => {
        t.classList.remove('roadmap-tab--active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => {
        p.classList.remove('roadmap-panel--active');
        p.hidden = true;
      });
      
      tab.classList.add('roadmap-tab--active');
      tab.setAttribute('aria-selected', 'true');
      
      const targetPanel = document.getElementById(`panel-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add('roadmap-panel--active');
        targetPanel.hidden = false;
      }
    });
    
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const index = Array.from(tabs).indexOf(tab);
        const nextIndex = e.key === 'ArrowRight' ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
        tabs[nextIndex].focus();
        tabs[nextIndex].click();
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderRoadmap);
} else {
  renderRoadmap();
}

window.addEventListener('langchange', renderRoadmap);