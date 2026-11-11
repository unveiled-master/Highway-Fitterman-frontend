# FixAm web

Start with `instructions.txt` (full project hand-off). Designs and the design system are in `docs/`.

React + TypeScript + Vite. `npm install && npm run dev`.

```
public/               static files served as-is (favicon)
src/
  assets/             imported images (add when needed)
  components/         reusable UI: Icon, Registry, Num, SectionHead
    forms/            form controls (PhoneField)
  data/               static data and helpers (landing content, account types, GH₵ formatter)
  layout/             shared page layouts (AuthLayout)
  landing/            landing page: Landing.tsx, components/ (one per section), styles/landing.css
  pages/              route-level screens: Login, Signup, Verify
  services/           API clients (add with the first API call)
  styles/             shared styles (auth.css)
  App.tsx main.tsx App.css index.css   app setup and global styles
```

Routes: `/` landing, `/login`, `/signup`, `/verify`, `/providers`, `/artisan/verify`. Page-specific styles go in `src/pages/styles/*.module.css`.
