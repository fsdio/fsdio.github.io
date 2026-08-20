import DATA from './data.js';
import I18N from './i18n.js';

let currentLang = 'en';

export function setLang(lang) {
  currentLang = lang;
}

export function getLang() {
  return currentLang;
}

export function t(keyPath) {
  const keys = keyPath.split('.');
  let obj = I18N[currentLang];
  for (const k of keys) {
    if (!obj) return keyPath;
    obj = obj[k];
  }
  return obj ?? keyPath;
}

export function renderProgressBar(percent) {
  const filled = Math.round(percent / 100 * 20);
  const empty = 20 - filled;
  const bar = '█'.repeat(filled) + '░'.repeat(empty);
  return `<div class="progress-bar" role="progressbar" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100" aria-label="${t('mission.progressLabel')}: ${percent}%"><span class="progress-bar__fill" style="width:${percent}%"></span><span class="progress-bar__text">${bar} ${percent}%</span></div>`;
}

export function renderStatusBadge(status) {
  const statusMap = {
    completed: { class: 'status--completed', label: t('status.completed') },
    'in-progress': { class: 'status--in-progress', label: t('status.inProgress') },
    planned: { class: 'status--planned', label: t('status.planned') }
  };
  const s = statusMap[status] || statusMap.planned;
  return `<span class="status-badge ${s.class}" data-status="${status}">${s.label}</span>`;
}

export function renderTechBadge(tech) {
  return `<span class="tech-badge">${tech}</span>`;
}

export function renderNav(currentPage = 'home') {
  const navItems = [
    { href: 'index.html', key: 'home', label: t('nav.home') },
    { href: 'roadmap.html', key: 'roadmap', label: t('nav.roadmap') },
    { href: 'projects.html', key: 'projects', label: t('nav.projects') },
    { href: 'learning.html', key: 'learning', label: t('nav.learning') },
    { href: 'about.html', key: 'about', label: t('nav.about') }
  ];
  const links = navItems.map(item => 
    `<li><a href="${item.href}" class="nav__link ${item.key === currentPage ? 'nav__link--active' : ''}" data-page="${item.key}">${item.label}</a></li>`
  ).join('');
  return `
    <div class="page-container">
      <nav class="nav" aria-label="${t('nav.home')}">
        <span class="nav__logo">RS</span>
        <button class="nav__toggle" aria-label="${t('nav.home')}" aria-expanded="false">
          <span class="nav__toggle-bar"></span>
          <span class="nav__toggle-bar"></span>
          <span class="nav__toggle-bar"></span>
        </button>
        <ul class="nav__menu">${links}</ul>
        ${renderLangSwitcher()}
      </nav>
    </div>
  `;
}

export function renderLangSwitcher() {
  return `
    <div class="lang-switcher" role="group" aria-label="${t('nav.language') || 'Language'}">
      <label class="lang-switcher__option ${currentLang === 'en' ? 'is-active' : ''}">
        <input type="radio" name="lang" value="en" ${currentLang === 'en' ? 'checked' : ''}>
        <span>${t('lang.en')}</span>
      </label>
      <label class="lang-switcher__option ${currentLang === 'id' ? 'is-active' : ''}">
        <input type="radio" name="lang" value="id" ${currentLang === 'id' ? 'checked' : ''}>
        <span>${t('lang.id')}</span>
      </label>
    </div>
  `;
}

export function renderFooter() {
  return `<footer class="footer"><p class="footer__copy">&copy; ${new Date().getFullYear()} ${t('footer.copyright')}.</p></footer>`;
}

export function renderHero() {
  const p = DATA.profile;
  return `
    <section id="hero" class="hero">
      <h1 class="hero__name">${p.name}</h1>
      <p class="hero__title">${p.role}</p>
      <p class="hero__description">${p.description}</p>
      <p class="hero__focus">${p.focus}</p>
      <div class="hero__actions">
        <a href="roadmap.html" class="btn btn--primary">${t('hero.viewRoadmap')}</a>
        <a href="${p.links.github}" class="btn btn--secondary" target="_blank" rel="noopener">${t('hero.github')}</a>
      </div>
    </section>
  `;
}

export function renderMission() {
  const m = DATA.profile.mission;
  return `
    <section class="mission">
      <h2 class="mission__title">${t('mission.title')}</h2>
      <p class="mission__description">${m.title}</p>
      ${renderProgressBar(m.progress)}
      <p class="mission__meta">${t('mission.started')}: ${m.started}</p>
    </section>
  `;
}

export function renderTechFocus() {
  const tech = DATA.profile.techStack.map(renderTechBadge).join('');
  return `
    <section class="tech-focus">
      <h2 class="tech-focus__title">${t('tech.title')}</h2>
      <div class="tech-focus__list">${tech}</div>
    </section>
  `;
}

export function renderRecentLearning(limit = 3) {
  const entries = DATA.learningLog.slice(0, limit);
  const items = entries.map(entry => `
    <article class="learning-entry">
      <time class="learning-entry__date" datetime="${entry.date}">${formatDate(entry.date)}</time>
      <h3 class="learning-entry__title">${entry.title}</h3>
      <p class="learning-entry__desc">${entry.description}</p>
      <div class="learning-entry__tags">${entry.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}</div>
    </article>
  `).join('');
  return `
    <section class="recent-learning">
      <div class="recent-learning__header">
        <h2 class="recent-learning__title">${t('recent.title')}</h2>
        <a href="learning.html" class="link link--inline">${t('recent.viewLog')}</a>
      </div>
      <div class="recent-learning__list">${items}</div>
    </section>
  `;
}

export function renderFeaturedProjects(limit = 2) {
  const projects = DATA.projects.slice(0, limit);
  const cards = projects.map(p => `
    <article class="project-card">
      <header class="project-card__header">
        <h3 class="project-card__title">${p.title}</h3>
        ${renderStatusBadge(p.status)}
      </header>
      <p class="project-card__desc">${p.description}</p>
      <div class="project-card__meta">
        <div class="project-card__techs">${p.technologies.map(renderTechBadge).join('')}</div>
        <div class="project-card__concepts">${p.concepts.map(c => `<span class="concept-badge">${c}</span>`).join('')}</div>
      </div>
      <footer class="project-card__footer">
        <a href="${p.githubUrl}" class="btn btn--ghost" target="_blank" rel="noopener">${t('featured.github')}</a>
        <a href="projects.html#${p.id}" class="btn btn--ghost">${t('featured.detail')}</a>
      </footer>
    </article>
  `).join('');
  return `
    <section class="featured-projects">
      <div class="featured-projects__header">
        <h2 class="featured-projects__title">${t('featured.title')}</h2>
        <a href="projects.html" class="link link--inline">${t('featured.viewAll') || 'View All'}</a>
      </div>
      <div class="featured-projects__grid">${cards}</div>
    </section>
  `;
}

export function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function groupLearningByMonth(entries) {
  const groups = {};
  for (const entry of entries) {
    const date = new Date(entry.date + 'T00:00:00');
    const key = date.toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', { year: 'numeric', month: 'long' });
    if (!groups[key]) groups[key] = [];
    groups[key].push(entry);
  }
  return groups;
}

export function renderRoadmapCategory(category, lang) {
  const items = category.items.map(item => `
    <li class="roadmap-item" data-id="${item.id}">
      <span class="roadmap-item__status">${getStatusIcon(item.status)}</span>
      <span class="roadmap-item__title">${item.title}</span>
      ${renderStatusBadge(item.status)}
    </li>
  `).join('');
  return `
    <section class="roadmap-category">
      <h3 class="roadmap-category__title">${category.category}</h3>
      <ul class="roadmap-category__list">${items}</ul>
    </section>
  `;
}

function getStatusIcon(status) {
  const icons = { completed: '✓', 'in-progress': '→', planned: '○' };
  return `<span class="roadmap-icon roadmap-icon--${status}">${icons[status] || '○'}</span>`;
}

export function renderProjectCard(project) {
  return `
    <article class="project-card" id="${project.id}">
      <header class="project-card__header">
        <h3 class="project-card__title">${project.title}</h3>
        ${renderStatusBadge(project.status)}
      </header>
      <p class="project-card__desc">${project.description}</p>
      <div class="project-card__meta">
        <div class="project-card__techs">${project.technologies.map(renderTechBadge).join('')}</div>
        <div class="project-card__concepts">${project.concepts.map(c => `<span class="concept-badge">${c}</span>`).join('')}</div>
      </div>
      <footer class="project-card__footer">
        <a href="${project.githubUrl}" class="btn btn--primary" target="_blank" rel="noopener">${t('project.github') || 'GitHub'}</a>
      </footer>
    </article>
  `;
}

export function renderLearningEntry(entry) {
  return `
    <article class="learning-entry">
      <time class="learning-entry__date" datetime="${entry.date}">${formatDate(entry.date)}</time>
      <h3 class="learning-entry__title">${entry.title}</h3>
      <p class="learning-entry__desc">${entry.description}</p>
      <div class="learning-entry__tags">${entry.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}</div>
    </article>
  `;
}

export function renderAbout() {
  const p = DATA.profile;
  const expBadges = ['Java', 'Backend Engineering', 'REST API', 'SOAP', 'LDAP', 'PostgreSQL', 'Docker', 'CI/CD', 'Enterprise Integration'].map(renderTechBadge).join('');
  const exploreBadges = ['Spring Boot', 'Svelte', 'Event-driven architecture', 'Observability', 'Cloud-native deployment'].map(renderTechBadge).join('');
  return `
    <section class="about">
      <h2 class="about__title">${t('about.title')}</h2>
      <p class="about__intro">I'm ${p.name}, a ${p.role} focused on building and understanding enterprise backend systems.</p>
      
      <div class="about__section">
        <h3 class="about__section-title">${t('about.experience')}</h3>
        <div class="about__badges">${expBadges}</div>
      </div>
      
      <div class="about__section">
        <h3 class="about__section-title">${t('about.exploring')}</h3>
        <div class="about__badges">${exploreBadges}</div>
      </div>
      
      <div class="about__links">
        <a href="${p.links.github}" class="btn btn--primary" target="_blank" rel="noopener">GitHub</a>
        <a href="${p.links.linkedin}" class="btn btn--secondary" target="_blank" rel="noopener">LinkedIn</a>
        <a href="#" class="btn btn--ghost">CV</a>
      </div>
      
      <blockquote class="about__philosophy">${t('about.philosophy')}</blockquote>
    </section>
  `;
}