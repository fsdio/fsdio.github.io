# Refactor Existing Project into a Simple Engineering Roadmap Portfolio

You are working on an **existing project**. Your task is to **refactor the existing project comprehensively** into a clean, simple, developer-oriented personal engineering roadmap and portfolio website.

## IMPORTANT RULES

1. **First inspect the entire existing project before modifying anything.**

   * Identify the current framework and version.
   * Identify the current routing structure.
   * Identify the current styling approach.
   * Identify existing reusable components.
   * Identify the current build/deployment configuration.
   * Identify what can be reused instead of rewritten.
   * Do not blindly replace the existing architecture.

2. **Preserve the existing technology stack unless there is a strong technical reason to change it.**

3. The website must remain **simple and maintainable**.

   * No unnecessary animations.
   * No unnecessary dependencies.
   * No CMS.
   * No database.
   * No authentication.
   * No backend.
   * No image-heavy design.
   * No unnecessary API calls.
   * No over-engineering.

4. **No images are required.**

   * Do not create image assets.
   * Do not use stock images.
   * Do not create decorative illustrations.
   * Use typography, spacing, borders, icons, progress indicators, and code-like elements instead.

5. The website is primarily a **learning progress tracker + developer portfolio**, not a marketing website.

6. The website must support deployment to:

   `https://USERNAME.github.io/`

   Therefore, the implementation must correctly handle GitHub Pages static hosting.

---

# PRIMARY GOAL

Transform the current project into a personal engineering website with these five primary pages:

1. Home
2. Roadmap
3. Projects
4. Learning Log
5. About

The website should communicate:

> "This is my engineering journey. I am continuously learning, implementing, documenting, and improving."

The website should not pretend that everything is already mastered.

Progress should be represented honestly using statuses such as:

* Completed
* In Progress
* Planned

---

# PAGE 1 — HOME

Create a clean landing page.

## Hero

Show:

* Name
* Role
* Short professional description
* Current learning focus
* Links to Roadmap and GitHub

Example structure:

```text
RAHMAT SUNJANI

Backend Engineer

Building things,
understanding how they work.

Java • Spring Boot • Svelte • Enterprise Backend

[ View Roadmap ] [ GitHub ]
```

Do not use a large profile image.

---

## Current Mission

Create a prominent but simple section:

```text
CURRENT MISSION

Master Spring Boot through
hands-on enterprise projects.

Progress
████████████░░░░░░░░ 62%

Started: August 2026
```

The progress value must come from centralized data rather than being duplicated throughout the application.

---

## Technology Focus

Show a concise list of technologies.

Example:

```text
CORE

Java
Spring Boot
Jooby
Svelte
PostgreSQL
REST
SOAP
LDAP
Docker
CI/CD
```

Do not display dozens of technologies just for appearance.

---

## Latest Progress

Display the latest learning milestones.

Example:

```text
RECENTLY LEARNED

✓ Spring MVC
✓ Dependency Injection
→ Spring Data JPA

[ View Learning Log ]
```

---

## Featured Projects

Display a small number of projects.

Each project should contain:

* Project name
* Technologies
* Short description
* Main concept
* GitHub link
* Detail link

---

# PAGE 2 — ROADMAP

This is the **main page of the website**.

The roadmap should be the central learning navigation.

Provide tabs or sections for:

* Spring Boot
* Svelte
* Optional future technologies

Do not implement unnecessary complex visualization.

A clean vertical roadmap/timeline is preferred.

---

# SPRING BOOT ROADMAP

Organize the roadmap into conceptual groups.

## Spring Core

* IoC / Dependency Injection
* ApplicationContext
* Bean lifecycle
* Component scanning
* Configuration
* Profiles
* ConfigurationProperties

## Spring Web

* Spring MVC
* Controller
* Request / Response
* DTO
* Validation
* Exception Handling
* REST API design

## Data

* Spring Data JPA
* Hibernate fundamentals
* Repository
* Entity mapping
* Transactions
* Flyway
* Query optimization

## Security

* Authentication
* Authorization
* Password hashing
* SecurityFilterChain
* JWT
* Role-based access
* OAuth2
* OIDC

## Integration

* REST Client
* RestClient
* HTTP Interface
* SOAP
* LDAP
* Kafka
* External service integration

## Resilience

* Timeout
* Retry
* Circuit Breaker
* Idempotency
* Error handling

## Async

* @Async
* CompletableFuture
* Scheduling
* Background processing
* Event-driven architecture

## Testing

* JUnit
* Mockito
* Controller testing
* Integration testing
* Testcontainers

## Observability

* Logging
* Structured logging
* Actuator
* Metrics
* OpenTelemetry
* Distributed tracing
* Trace ID

## Deployment

* Docker
* Docker Compose
* CI/CD
* Kubernetes
* OKD

---

# STATUS SYSTEM

Every roadmap item must support:

```text
completed
in-progress
planned
```

Use visual indicators:

```text
✓ Completed
→ In Progress
○ Planned
```

Do not hardcode roadmap status inside multiple components.

Use a centralized data structure.

Example conceptual structure:

```javascript
{
  id: "spring-mvc",
  title: "Spring MVC",
  category: "Spring Web",
  status: "completed",
  githubUrl: "...",
  projectUrl: "...",
  description: "...",
  concepts: [...]
}
```

This allows the roadmap to become data-driven.

---

# ROADMAP DETAIL

When a roadmap item is clicked, show a detail page or detail section.

Example:

```text
ROADMAP
/
SPRING BOOT
/
SECURITY
/
JWT AUTHENTICATION

Status
✓ Completed

Objective

Understand JWT authentication
with Spring Security.

Concepts

• Authentication
• Authorization
• SecurityFilterChain
• JWT
• Role-based access

Implementation

[ View GitHub ]

Related Project

[ Authentication Lab ]
```

Do not create pages manually for every topic.

Create a reusable roadmap-detail mechanism driven by data.

---

# PAGE 3 — PROJECTS

This page showcases actual implementations.

Important distinction:

**Roadmap = what I am learning.**

**Projects = what I built.**

Create a clean project grid/list.

Initial example projects:

## Authentication Lab

Technology:

* Spring Boot
* Spring Security
* Svelte
* PostgreSQL

Concepts:

* Authentication
* Authorization
* JWT
* Role management

---

## Integration Hub

Technology:

* Spring Boot
* REST
* SOAP
* LDAP

Concepts:

* External API integration
* Legacy SOAP integration
* LDAP
* Error handling

---

## Transaction System

Technology:

* Spring Boot
* PostgreSQL
* JPA

Concepts:

* Transaction management
* Rollback
* Business rules
* Persistence

Projects should be data-driven.

Example:

```javascript
{
  id: "authentication-lab",
  title: "Authentication Lab",
  description: "...",
  technologies: [
    "Spring Boot",
    "Spring Security",
    "Svelte",
    "PostgreSQL"
  ],
  concepts: [
    "JWT",
    "Authentication",
    "Authorization"
  ],
  githubUrl: "...",
  status: "completed"
}
```

---

# PAGE 4 — LEARNING LOG

This is an engineering journal, not a traditional blog.

Display milestones chronologically.

Example:

```text
AUGUST 2026

20 AUG

Started Spring Boot Roadmap

Created the initial Spring Boot
learning environment and roadmap.

#springboot #learning


22 AUG

Understanding IoC

Learned how Spring ApplicationContext
manages application beans.

#spring-core #ioc


25 AUG

Spring MVC

Implemented the first REST API
and compared the request lifecycle
with Jooby.

#spring-mvc #backend
```

Keep entries concise.

The learning log should be easy to update.

Use centralized data.

Example:

```javascript
{
  date: "2026-08-20",
  title: "Started Spring Boot Roadmap",
  description: "...",
  tags: ["springboot", "learning"]
}
```

---

# PAGE 5 — ABOUT

Keep this page professional but personal.

Content:

```text
ABOUT

I'm Rahmat Sunjani,
a Backend Engineer focused on
building and understanding
enterprise backend systems.
```

Include:

## Experience / Focus

* Java
* Backend Engineering
* REST API
* SOAP
* LDAP
* PostgreSQL
* Docker
* CI/CD
* Enterprise Integration

## Currently Exploring

* Spring Boot
* Svelte
* Event-driven architecture
* Observability
* Cloud-native deployment

Include links:

* GitHub
* LinkedIn
* CV

Add a short engineering philosophy:

```text
I don't want to just know
how to use a framework.

I want to understand
why it works.
```

---

# DESIGN DIRECTION

Use a:

* dark-first
* minimal
* technical
* documentation-inspired
* developer-oriented

visual style.

Think:

```text
GitHub
+
Linear
+
Developer Documentation
```

Do not copy these websites.

Use them only as conceptual inspiration.

---

# UI RULES

## Typography

Use a modern readable sans-serif for normal text.

Use monospace selectively for:

* technology names
* statuses
* code
* technical metadata
* roadmap identifiers

Do not make the entire website monospace.

---

## Colors

Use a mostly monochrome palette with one accent color.

Do not use many colorful cards.

Status colors should be subtle.

The website should feel calm and technical.

---

## Layout

Use generous spacing.

Avoid dense dashboards.

Avoid excessive rounded cards.

Avoid unnecessary shadows.

Avoid excessive gradients.

Avoid excessive animations.

---

# RESPONSIVE DESIGN

The website must work well on:

* Desktop
* Laptop
* Tablet
* Mobile

Desktop navigation:

```text
RS

Home
Roadmap
Projects
Learning
About
```

Mobile navigation can collapse into a menu.

Roadmap must remain readable on small screens.

---

# GITHUB PAGES REQUIREMENTS

This is critical.

The website will be deployed to:

```text
https://USERNAME.github.io/
```

Make sure the project works correctly under GitHub Pages.

## Requirements

1. Static deployment must work.

2. Do not require a backend server.

3. Do not depend on server-side rendering at runtime.

4. Configure the framework's base path correctly if the repository deployment requires one.

5. Assets must resolve correctly when hosted through GitHub Pages.

6. Internal links must not assume `/` is always the deployment root if the framework configuration requires a base path.

7. Ensure direct navigation to pages does not result in broken asset paths.

8. Ensure the production build can be deployed to GitHub Pages.

9. Provide a GitHub Actions workflow if the existing project does not already have one.

10. Do not introduce unnecessary hosting infrastructure.

---

# CONTENT ARCHITECTURE

Centralize website content.

Do not scatter roadmap/project/log data across UI components.

Prefer a structure similar to:

```text
src/
├── data/
│   ├── roadmap/
│   ├── projects/
│   ├── learning-log/
│   └── profile/
│
├── components/
│   ├── layout/
│   ├── roadmap/
│   ├── projects/
│   ├── learning/
│   └── common/
│
├── routes/
│   ├── home/
│   ├── roadmap/
│   ├── projects/
│   ├── learning/
│   └── about/
│
└── styles/
```

Adapt this to the existing framework rather than blindly copying it.

---

# IMPORTANT ARCHITECTURAL PRINCIPLE

Do NOT create excessive components.

A component should exist because:

* it is reused,
* it has meaningful behavior,
* or it represents a meaningful UI concept.

Do not create components such as:

```text
SmallText
TinyCard
SmallIcon
GenericWrapper
SimpleBox
```

unless they actually provide value.

Prefer clear components such as:

```text
RoadmapSection
RoadmapItem
ProjectCard
LearningEntry
ProgressBar
Navigation
```

---

# ACCESSIBILITY

Implement:

* semantic HTML
* keyboard navigation
* visible focus states
* appropriate heading hierarchy
* accessible buttons
* accessible links
* sufficient text contrast
* reduced-motion support if animations are used

---

# PERFORMANCE

Keep the site lightweight.

Avoid:

* unnecessary JavaScript
* unnecessary libraries
* large assets
* image dependencies
* runtime API calls for static content

The roadmap, projects, and learning log should preferably be statically rendered/generated.

---

# SEO / METADATA

Add appropriate:

* page titles
* descriptions
* canonical metadata if appropriate
* Open Graph metadata
* favicon
* basic social preview metadata

Do not over-engineer SEO.

---

# DEVELOPMENT PROCESS

Before modifying files:

1. Inspect the current repository.
2. Identify framework and build system.
3. Identify existing routes/components/styles.
4. Identify GitHub Pages compatibility.
5. Identify reusable code.
6. Create a concise refactoring plan.
7. Then implement the refactor.

Do not delete working functionality without understanding it first.

---

# QUALITY CHECK

After implementation:

1. Run the project's formatter.
2. Run linting if available.
3. Run tests if available.
4. Run production build.
5. Verify static output.
6. Verify GitHub Pages base path.
7. Verify all internal links.
8. Verify assets.
9. Verify mobile layout.
10. Verify there are no console errors.

If something is broken, fix it before considering the task complete.

---

# FINAL DELIVERABLE

The final result should feel like:

```text
A personal engineering journey
that happens to be a portfolio.
```

It should be:

* simple
* technical
* honest
* maintainable
* responsive
* static-hosting friendly
* easy to update
* focused on progress

Most importantly:

**Do not turn this into an over-designed portfolio website.**

The purpose is to make learning progress visible and motivate continuous engineering practice.

The website should make it easy for someone to:

```text
Discover me
    ↓
See what I am learning
    ↓
Explore the roadmap
    ↓
Open a project
    ↓
Read the implementation
    ↓
Visit GitHub
```

Before finishing, provide a concise summary of:

* what was changed,
* what existing code was reused,
* what architecture was chosen,
* how GitHub Pages deployment works,
* and how future roadmap/project/learning data should be added.
