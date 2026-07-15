# Portfolio Landing Page — Backend Developer

## Tujuan
Landing page satu halaman (single-page) portofolio personal sebagai backend developer, di-deploy ke GitHub Pages (`rahmat-sunjani.github.io`).

---

## Struktur File

```
/
├── index.html          # Entry point — semantic HTML5
├── assets/
│   ├── images/
│   │   ├── profile.webp       # Foto programmer (WebP)
│   │   ├── profile.jpg        # Fallback JPEG
│   │   └── exp-*.webp         # Foto pengalaman (WebP + lazy load)
│   └── fonts/                 # (opsional) custom fonts
├── css/
│   └── style.css              # BEM + CSS Custom Properties
└── js/
    └── index.js               # Vanilla JS ES modules
```

---

## Konten Halaman (urutan)

1. **Hero / Intro** — Nama, title "Backend Developer", foto, tagline
2. **Social Links** — LinkedIn, GitHub, Email (icon + text)
3. **Bio Singkat** — Paragraf deskripsi diri
4. **Skills** — Tech stack backend (icons/simbol, grup berdasarkan kategori)
5. **Experience** — Timeline kartu: foto high-class, judul, deskripsi
6. **Documents** — (opsional) link ke CV/portfolio PDF
7. **Footer** — Copyright, back-to-top

---

## Design System

### Warna (CSS Custom Properties)
- `--color-primary`
- `--color-secondary`
- `--color-bg`
- `--color-surface`
- `--color-text`
- `--color-text-muted`
- `--color-accent`

### Tipografi (Compact)
- Font: system-ui stack atau Inter (self-hosted)
- Scale: modular scale (1.25 ratio), base `14px`
- Line-height: body `1.5`, heading `1.2`, small `1.4`
- Heading margin-bottom: `0.35em` (bukan default `0.67em`)

### Spacing (Compact — Zero Waste)
- Base unit: **4px** — dominan pakai `4px`, `8px`, `12px`, hindari `24px+` kecuali antar section
- Container max-width: **720px** (tipikal landing page terlalu lebar)
- Section padding: `32px 16px`, section margin-bottom: `24px`
- Gap antar komponen: `8px`–`12px`, maksimal `16px`

| Token | Value | Usage |
|---|---|---|
| `--space-xs` | 4px | Ikon, badge padding, dot |
| `--space-sm` | 8px | Gap item, button padding |
| `--space-md` | 12px | Card padding, section gap |
| `--space-lg` | 16px | Section padding horizontal |
| `--space-xl` | 24px | Margin antar section |

> **Prinsip:** Setiap `px` harus berfungsi. Jika bisa pakai `8px`, jangan `16px`.

### Komponen (Spacing Compact)
- **Card** (Experience): `padding: 12px`, `gap: 8px`, `border-radius: 6px`
- **Skill badges**: `padding: 4px 8px`, `gap: 4px`, `font-size: 0.8rem`
- **Social links**: `gap: 8px`, icon `24px`, label `font-size: 0.85rem`
- **Timeline**: line `2px`, dot `10px`, gap `8px`, item padding `8px 0`
- **Back-to-top**: compact `36px` lingkaran, icon `16px`
- **Nav**: `padding: 8px 16px`, hamburger icon `24px`

---

## Responsive (Compact)

- **Mobile-first** — base styles untuk mobile, `min-width` breakpoints
- Breakpoints: 480px, 768px, 1024px
- Layout: Flexbox + CSS Grid
- Nav: hamburger menu di mobile
- **Spacing responsive:** mobile `padding: 0 12px`, tablet/desktop `padding: 0 16px`
- Tidak boleh ada horizontal scroll atau overflow — setiap `px` terpakai

---

## Performa & Optimasi Gambar

### Format & Fallback
- Foto profil: WebP + `<picture>` fallback JPEG
- Foto experience: WebP, dikompres (quality 75-80%)
- `loading="lazy"` pada semua gambar di bawah fold
- `width` + `height` atribut untuk mencegah CLS (Cumulative Layout Shift)

### Strategi Responsive Images
- `srcset` untuk variasi ukuran (jika diperlukan)

---

## Aksesibilitas

- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Alt text deskriptif pada semua gambar
- Skip-to-content link
- Kontras warna cukup (WCAG AA minimum)
- Fokus style visible untuk keyboard navigation
- `role` dan `aria-label` sesuai kebutuhan

---

## SEO

- `<title>` + `<meta description>` relevan
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- Twitter Card tags
- JSON-LD structured data (Person + profile URL)
- Canonical URL

---

## JavaScript

- Vanilla JS — tanpa framework/library eksternal
- ES Modules (`type="module"`)
- Fitur:
  - Smooth scroll navigasi
  - Scroll-triggered reveal animation
  - Back-to-top button
  - Hamburger menu toggle

## Animasi

- CSS `transition` untuk hover state, scroll reveal
- `@keyframes` minimal untuk entrance animation
- `prefers-reduced-motion` respect

---

## Deployment

- **Platform:** GitHub Pages (`rahmat-sunjani.github.io`) — user site
- **Source:** `main` branch, root folder (Settings → Pages → Source)
- **Trigger:** Push ke `main` langsung live — tidak perlu GitHub Actions
- **CNAME:** (optional) custom domain via file `CNAME`

---

## Code Quality

- CSS: BEM naming convention
- JS: Modular functions, reusable
- README.md dokumentasi cara develop, struktur, dan kontribusi
- Comments minimal — kode self-documenting

---

## Non-Goals (tetap fokus)

- ❌ Tidak pakai framework JS (React/Vue/Angular)
- ❌ Tidak pakai CSS framework (Tailwind/Bootstrap)
- ❌ Tidak pakai build tool (Webpack/Vite) — HTML + CSS + JS vanilla sudah cukup
- ❌ Tidak ada backend/server — murni static site
