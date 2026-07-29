# Personal / Practice Projects — Portafolio David Muñoz Barco

> Estos son proyectos personales / vibe-coded, separados claramente del trabajo profesional
> con clientes. Formato más corto que los case studies de experiencia laboral: qué es, cómo se
> ve, con qué se hizo — sin el detalle de negocio de un cliente real.

---

## Campus — Academic Admin Panel

**Domain:** EdTech · **Stack:** Angular 15, TypeScript, NgRx, Angular Material, RxJS, SCSS

Admin panel to manage a training center's students, faculty, and course catalog from a
single place, with role-based access between view-only and edit permissions.

- Modular architecture with lazy-loaded routes per domain (students, courses, teachers, auth)
- NgRx as single source of truth (actions, reducers, selectors, effects)
- Custom SCSS design system theming Angular Material — not an off-the-shelf theme
- Full CRUD across three related entities, WCAG AA accessible, responsive

**Presentation recommendation:** This is a dashboard/admin tool — the value is in the
information architecture and interaction, not a single hero shot. Deploy a live demo (with a
read-only demo login if there's auth) and record a short GIF (~8s) showing: navigate to
students → filter/search → open a record → edit → save. A static screenshot of just the
table view undersells the CRUD depth you actually built.

---

## BROKENCHAINS — Sneaker E-commerce with Real-Time Catalog

**Domain:** Retail / Fashion (streetwear, Colombian market) · **Stack:** React 18, React Router v6, Context API, Firebase Firestore v9, Bootstrap 5

Full online store — filterable catalog, product page, cart persisted across routes, and
checkout that generates a real order — with Firestore as the entire backend (no custom server).

- Container/presentational split: containers own data access, components stay pure
- Cart state via Context API (deliberate choice over Redux for this scope)
- Live stock updates via `onSnapshot` on the product detail page
- Atomic checkout: order document + stock decrement via `increment()` in the same transaction

**Presentation recommendation:** This is the strongest candidate for a **live demo** — retail
UX is exactly what a UX/UI reviewer wants to click through themselves. Prioritize: deploy it,
link "View live demo" prominently. Record a GIF of the full flow (browse → filter → product →
add to cart → checkout → order confirmation) since the real-time stock update is a technical
detail that only shows in motion, not in a screenshot.

---

## Vebt — Smart Personal Debt Management

**Domain:** Fintech / Personal finance · **Stack:** React Native, Expo, TypeScript, Expo Router, AsyncStorage, Expo Notifications, RevenueCat, WidgetKit/Swift

Mobile app to track and pay down personal debts without requiring an account or internet
connection, showing progress, due dates, and payoff strategies clearly.

- Feature-based architecture, file-based navigation (Expo Router)
- Local-first: all data in AsyncStorage, no backend/sync in v1
- Supports fixed and revolving debts, minimum/extra payments, payoff projections
- Native iOS widgets (WidgetKit) + preventive notifications + Free/Pro monetization (RevenueCat)

**Presentation recommendation:** This is mobile, so no browser demo link — instead:
(1) a short screen-recording GIF inside a **phone device frame**, showing the core loop (add a
debt → see progress → get a payoff projection), and (2) a **separate shot of the iOS widget**
on a home screen, since that's a distinctive native feature most portfolio apps don't have —
don't bury it inside the main GIF, give it its own frame.

---

## Momentum 90 — Personal Habit & Productivity OS

**Domain:** Personal productivity / wellbeing · **Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Recharts, pdf-lib

Personal dashboard turning daily habits, reading, and personal-development challenges into
measurable routines, with visual progress tracking and consistency scoring.

- Full-stack Next.js App Router with Server Components for data-heavy views
- Prisma + PostgreSQL modeling day logs, habits, books, challenges, usage events
- Interactive dashboard: streaks, energy, hydration, sleep, reading — charts and heatmaps
- Automatic challenge logic, reading sync, PDF export for books/challenges

**Presentation recommendation:** Dashboards live and die by their data viz — a static
screenshot of the main dashboard (with the heatmap and charts visible) is actually your best
single image here, more so than a GIF. Pair it with a live demo if you can seed it with
realistic sample data (empty-state dashboards look sad and undersell the charts).

---

## Suggested layout for the portfolio section

```
[Personal / Practice Projects]
  ↓ shorter cards than the professional case studies — no "Challenge/Approach/Outcome"
    headers, just: title, one-line pitch, stack chips, [Live Demo] [GitHub] buttons,
    and the GIF/screenshot per the recommendations above.
```

Keep this section visually distinct (e.g., a slightly different card style or a clear
"Personal Projects" heading) so a reviewer never confuses these with confidential client work.
