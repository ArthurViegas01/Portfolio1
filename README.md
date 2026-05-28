# Arthur Viegas — Portfolio

Personal portfolio website built with React and Vite, deployed on Netlify.

**Live:** https://arthurviegas.netlify.app

---

## Stack

- **React 18** — UI
- **Vite 8** — build tool
- **EmailJS** — contact form
- **Swiper** — testimonials carousel
- **Boxicons / Unicons** — icons
- **CSS custom properties** — theming (light/dark mode)

## Features

- Bilingual (PT-BR / EN) via context-based i18n
- Responsive design
- Dark/light theme toggle
- Sections: Home, About, Skills, Work, Case Studies, Services, Qualification, Contact

## Local setup

```bash
npm install
cp .env.example .env.local   # fill in your EmailJS keys
npm run dev
```

Open http://localhost:5173

## Environment variables

| Variable | Description |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |

## Deploy

Deployed automatically via Netlify on push to `main`. Build config is in [`netlify.toml`](netlify.toml).
