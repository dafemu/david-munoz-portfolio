# Case Studies — Portafolio David Muñoz Barco

> Redactados en inglés para que combinen con el tono de tu portafolio actual. Si prefieres español, dime y los traduzco manteniendo el mismo nivel técnico.

## The throughline

Across every role, the pattern is consistent: I keep getting brought in when a company needs to **modernize an existing product's design and accessibility** — building or extending a design system to make that modernization scalable, rather than a one-off redesign. The 5 case studies below are ordered to tell that story, from design-system-as-product, through accessibility-driven redesigns, to applying those same principles across very different stacks and architectures.

---

## Case Study 01 — Authorable Component Library for a Healthcare Client

**Sector:** Healthcare · **Stack:** Next.js, DotCMS

**The challenge**
A healthcare client needed their own team to author and publish web pages without depending on engineers for every content change — but strictly using components that matched their exact design system and templates.

**My approach**
- Built a full library of components in Next.js, adapted precisely to the client's design specifications and page templates.
- Integrated the components with DotCMS so non-technical users could assemble pages themselves using only approved, on-brand building blocks.

**Outcome**
Gave a non-technical team the ability to self-serve page creation while guaranteeing every page stayed on-brand and consistent — reducing engineering dependency for routine content updates.

---

## Case Study 02 — Accessible Redesign for a Retail Platform

**Sector:** Retail · **Stack:** Next.js, React, Storybook

**The challenge**
A retail company needed several web pages redesigned with new visuals and functionality — with a strong emphasis on accessibility, which had not been a priority in the previous version.

**My approach**
- Rebuilt key pages using Next.js and React, documenting reusable components in Storybook.
- Applied accessibility best practices throughout: semantic HTML, keyboard navigation, ARIA attributes, and color contrast compliance.
- Worked closely with design to ensure the new visual direction didn't compromise accessibility.

**Outcome**
Redesigned pages that were both visually updated and meaningfully more accessible — a concrete example of balancing design ambition with inclusive UX.

---

## Case Study 03 — Digitizing a Manual, Paper-Based Sales Process

**Sector:** Banking / financial services · **Stack:** Angular, TypeScript, RxJS, NgRx, SASS

**The challenge**
Commercial advisors were selling credit cards through a manual, paper-heavy process, prone to errors and slow to process.

**My approach**
- Built the advisor-facing tool in Angular with RxJS/NgRx for reactive state management, replacing physical paperwork with a guided digital flow.
- Followed Design System / Atomic Design principles (documented in Storybook) to keep the UI consistent with the bank's broader digital products, even on a completely different stack than my other design-system work.
- Wrote unit/integration tests (Karma, Jasmine) to protect a flow directly tied to financial transactions.

**Outcome**
Replaced a fully manual, paper-based process with a guided digital flow for advisors — later evolved into a self-service MVP so customers could apply without an advisor at all.

---

## Case Study 04 — Micro-Frontend Architecture for a Parking & Reservations Platform

**Sector:** Mobility / large-scale consumer platform · **Stack:** React, Next.js, TypeScript, NX monorepo, pnpm, Redux, React Hook Form, Zod, Material UI

**The challenge**
A large-scale parking management platform needed to support parking search, future reservations, and subscriptions — features owned by different teams — without duplicated logic or inconsistent UI.

**My approach**
- Worked within a micro-frontend architecture in an NX monorepo (pnpm), so features could be developed and deployed independently while sharing a common design language.
- Translated Figma designs into accessible, production-ready components with Material UI, implementing complex forms with React Hook Form + Zod.
- Managed cross-cutting application state with Redux, and focused on UX polish: bug fixes and edge-case handling based on real usage feedback.

**Outcome**
A consistent user experience for search, reservations, and subscriptions across independently-deployed frontend modules.

---

## Case Study 05 — AI-Powered Travel Booking Experience with SDUI

**Sector:** Global financial services (travel & booking platform) · **Stack:** React, TypeScript, SCSS/LESS, Kore.ai (conversational AI), AWS

**The challenge**
A global financial services company wanted to let customers book flights and hotels through a conversational, AI-assisted experience instead of a traditional multi-step form flow.

**My approach**
- Built UI components in React + TypeScript that render dynamically based on Server-Driven UI (SDUI) responses, so the interface adapts to what the conversation/booking flow needs at each step — the most architecturally advanced application of "design system as a scalable system" across my career so far.
- Integrated a conversational chatbot (Kore.ai) into the booking journey, handling UI state transitions between chat and traditional form-based interactions.
- Worked within a cloud-native setup on AWS with multiple local backend services running in parallel.

**Outcome**
A booking experience that blends conversational AI with structured, dynamically-rendered UI, reducing friction in a traditionally form-heavy flow.

---

## Also worth knowing

A few more engagements that didn't make the top 5 but round out the picture:

- **Conversational Chatbot UI (Healthcare, Vue.js + AWS):** Built a custom chat interface from scratch on top of an AWS bot service for a healthcare client.
- **Content Platform & Sales Enablement App (Pharma, AEM + React):** Managed AEM content/styling and built a JSON-driven iPad app for a pharma sales team to present treatment info.
- **Self-Service MVP (Banking, React):** Evolved the advisor tool above (Case Study 03) into a customer-facing self-service flow, removing the advisor from the process entirely.

---

## Tips for using these on the portfolio

1. Lead the Projects section with the "throughline" framing above — it turns 5 separate jobs into one coherent narrative about design systems + accessibility, which is exactly what a UX/UI Engineer interviewer wants to hear.
2. For visuals, use simple generic diagrams instead of screenshots: a component-to-page authoring diagram (case 01), an accessibility before/after checklist (case 02), a micro-frontend architecture diagram (case 04), an SDUI flow diagram (case 05). These represent the pattern, not the client's actual designs, so they're safe to create yourself.
3. Keep the "Also worth knowing" section as a compact list (not full cards) — it shows breadth without diluting the main narrative.
