# Indian Helping Trust — React + Vite

A standalone marketing site for **Indian Helping Trust** ("Action towards empowerment"),
rebuilt from the original WordPress backup. **No WordPress, PHP, or Elementor dependencies.**

## Stack
- React 18 + Vite 5
- React Router 6
- Tailwind CSS 3

## Getting started
```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure
```
src/
├── assets/       Brand logo + placeholder photos (copied from the WP backup)
├── components/   Navbar, Footer, Hero, cards, carousel, icons, CTA
├── pages/        Home, About, Programs, GetInvolved (donate), Contact, NotFound
├── data/site.js  ALL site content/copy — edit here to change text
└── styles         (Tailwind via index.css)
```

## Notes on content
The original WordPress backup was a *Kaynvox* e-commerce demo whose branding had been
swapped to Indian Helping Trust — it contained **no real charity content**. This app uses
the real IHT logo/palette with **placeholder charity copy** in `src/data/site.js`, ready
for you to replace with real text and photos.

## To make it production-ready
- **Donations:** the form in `pages/GetInvolved.jsx` is UI-only. Wire a provider
  (Razorpay / Stripe / Instamojo).
- **Contact form:** `pages/Contact.jsx` is UI-only. Connect EmailJS, Formspree, or a backend.
- Replace placeholder copy, photos, contact details and social links in `src/data/site.js`.
