# Edkins Homes Realty

Luxury real estate marketing site — React 18 + TypeScript + Vite.

Motto: "Transforming the world through the lens of planning."
Logo: the client's official logo image, used exactly. Source in
src/assets/logo-original.jpg; rendered transparent version in src/assets/logo.png.

## Run it

    npm install
    npm run dev

Open the local URL Vite prints. Production build:

    npm run build
    npm run preview

## Architecture

- src/main.tsx — React entry (renders App into #root).
- src/App.tsx — section composition.
- src/components/*.tsx — one component per section (Navbar, Hero, Properties,
  Land, About, Services, Process, Stats, Testimonials, Team, CTA, Contact,
  Footer, Logo).
- src/data.ts — listings, land listings (Nigeria), testimonials, team, nav
  links, image URLs.
- src/styles.css — full design system (CSS variables, responsive breakpoints).

Note: property/land/team image URLs are hosted static assets on user.uploads.dev
(see src/data.ts). This is the same source that runs the live Perchance site.
