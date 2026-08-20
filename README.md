# Engineering Roadmap Portfolio

A personal engineering journey that happens to be a portfolio. This site is designed to be simple, technical, and maintainable — focused on making learning progress visible and motivating continuous engineering practice.

## Architecture

**No frameworks, no build tools** – plain HTML, CSS, and JavaScript running directly on GitHub Pages.

**Data-driven approach** – all content lives in `js/data.js` as a single JavaScript object.

**Bilingual support** – English and Indonesian with a dropdown selector.

**Static site** – no backend, no database, no authentication required.

---

## Structure

```
.
├── index.html          # Home page
├── roadmap.html        # Roadmap page  
├── projects.html       # Projects page
├── learning.html       # Learning Log page
├── about.html          # About page
├── css/
│   └── style.css       # Shared styles
├── js/
│   ├── data.js         # Centralized content data
│   ├── i18n.js         # Translations
│   ├── components.js   # Reusable UI components
│   ├── app.js          # Main application logic
│   └── pages/          # Page-specific JavaScript
├── .github/workflows/  # CI/CD for deployment
│   └── deploy.yml
└── README.md           # This file
```

---

## Navigation

Desktop: Top navigation bar with links to all five pages.

Mobile: Collapsible hamburger menu.

Language switcher: Dropdown to toggle between English and Indonesian.

---

## Adding New Content

### Roadmap Items

Edit `js/data.js` → `roadmap.springBoot[].items.push({...})` or `roadmap.svelte[].items.push({...})`:

```javascript
{
  id: "new-item",
  title: "New Roadmap Topic",
  status: "planned" // or "in-progress", "completed"
}
```

### Projects

Edit `js/data.js` → `projects.push({...})`:

```javascript
{
  id: "new-project",
  title: "New Project",
  description: "Brief description of the project",
  technologies: ["Spring Boot", "PostgreSQL"],
  concepts: ["Authentication", "Authorization"],
  githubUrl: "https://github.com/fsdio/new-project",
  status: "in-progress"
}
```

### Learning Log Entries

Edit `js/data.js` → `learningLog.unshift({...})` (newest first):

```javascript
{
  date: "2026-08-20",
  title: "New Learning Entry",
  description: "What you learned",
  tags: ["springboot", "mvc"]
}
```

### Updating Mission Progress

Edit `js/data.js` → `profile.mission.progress = XX`:

```javascript
profile.mission.progress = 75;
```

### Adding Translations

Edit `js/i18n.js` → add keys to both `en` and `id` objects.

---

## Design System

**Colors:** Dark-first with one accent color.
**Typography:** System fonts with monospace for code/tech.
**Layout:** Maximum width 720px for readability.
**Components:** Minimal, reusable components with BEM naming.

**No images** — visual indicators use typography, borders, progress bars, icons.

**Status indicators:**
- ✓ Completed
- → In Progress  
- ○ Planned

---

## Technology Stack

- **HTML5** – Semantic markup
- **CSS3** – Custom properties, Flexbox, Grid
- **JavaScript ES6+** – Vanilla, no external dependencies
- **GitHub Pages** – Static hosting

**Roadmap focuses on:** Spring Boot, Svelte, and enterprise backend technologies.

---

## Development

1. **Add new entries** directly to `js/data.js`
2. **Switch language** using the dropdown (persists in browser storage)
3. **View changes** immediately in browser (no build step)
4. **Commit and push** to `main` to deploy to GitHub Pages

**No development server required** – edit files directly and refresh browser.

---

## Deployment

**Automatic deployment:** Push to `main` branch → site goes live immediately

**GitHub Actions workflow:** Configured in `.github/workflows/deploy.yml`

**Base path:** All links use relative paths (`./roadmap.html`) for GitHub Pages compatibility

---

## Quality

- **Semantic HTML** with accessibility features
- **Keyboard navigation** support
- **Reduced motion** preference support
- **Responsive design** for desktop, tablet, and mobile
- **No external dependencies** — standalone implementation

---

## Future Enhancements

Consider adding:
- Interactive roadmap visualizations
- Project detail pages with more comprehensive descriptions
- Tag cloud for learning log entries
- Export functionality for roadmap data
- Performance monitoring

---

**Most important:** Keep it simple. This is a learning journey, not a marketing site.

View your engineering progress at any time.
