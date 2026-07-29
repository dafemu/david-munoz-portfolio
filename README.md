# David F. Muñoz Barco — Software Engineer Portfolio

A personal portfolio showcasing my professional experience, selected case studies, technical capabilities, and approach to building scalable digital products.

Built with **React 19, TypeScript, and Vite**, with a strong focus on component architecture, maintainability, accessibility, and responsive design.

## Live Demo

[View the portfolio](https://dafemu.github.io/david-munoz-portfolio/)

## Overview

This project serves as both my professional portfolio and a practical demonstration of how I structure modern frontend applications.

Key engineering decisions include:

- Component organization based on Atomic Design
- Strict TypeScript models for components and content
- BEM conventions for predictable CSS architecture
- Centralized design tokens for visual consistency
- Content separated from presentation components
- Responsive and accessible user interfaces
- Derived professional metrics instead of hardcoded values

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 19 |
| Language | TypeScript |
| Build tool | Vite |
| Styling | CSS, BEM |
| Architecture | Atomic Design |
| Design system | CSS custom properties and semantic tokens |
| Code quality | TypeScript compiler and ESLint |

## Architecture

The application follows a component-driven architecture inspired by Atomic Design.

```text
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── pages/
├── data/
├── hooks/
├── styles/
│   ├── base/
│   └── tokens/
├── types/
└── utils/
```

### Component structure

Each component is colocated with its styles and public export:

```text
Component/
├── Component.tsx
├── Component.css
└── index.ts
```

The component layers have clearly defined responsibilities:

| Layer | Responsibility |
| --- | --- |
| Atoms | Fundamental UI elements such as buttons, headings, tags, and labels |
| Molecules | Small combinations of atoms with a specific responsibility |
| Organisms | Complete interface sections such as the hero, experience, and projects |
| Templates | Page-level composition and layout |
| Pages | Application entry points |

## Content Architecture

Portfolio content is separated from JSX and centralized in `src/data/`.

```text
src/data/
├── site.config.ts
├── hero.data.ts
├── about.data.ts
├── experience.data.ts
├── caseStudies.data.ts
├── stack.data.ts
└── contact.data.ts
```

This approach keeps presentation components reusable and makes portfolio content easier to maintain without modifying the UI implementation.

Professional metrics are also derived from source data. For example, years of experience are calculated using `CAREER_START_YEAR`, while the number of companies is derived from the experience collection.

## Styling and Design System

The styling architecture combines:

- BEM naming conventions
- Component-scoped stylesheets
- Semantic CSS custom properties
- Reusable typography, spacing, radius, and motion tokens

CSS classes follow the convention:

```css
.block {}
.block__element {}
.block--modifier {}
```

Visual values are centralized under:

```text
src/styles/tokens/
```

This prevents isolated styling decisions and keeps the interface consistent as the project evolves.

## Color System

The portfolio uses a semantic color system called **Ink & Ember**.

| Token | Value | Purpose |
| --- | --- | --- |
| `--color-ink` | `#0D111C` | Main background |
| `--color-slate` | `#1A2133` | Cards and elevated surfaces |
| `--color-bone` | `#EDF1FA` | Primary text |
| `--color-mist` | `#B6C0D6` | Secondary text |
| `--color-signal` | `#5AD8E6` | Interactive elements |
| `--color-ember` | `#F5B971` | Labels and taxonomy |

The accent colors have distinct responsibilities:

- **Signal** identifies actions, links, focus states, and interactive elements.
- **Ember** identifies categories, section labels, and descriptive metadata.

## Accessibility

The interface was designed with accessibility as a core requirement.

The implementation includes:

- WCAG-compliant color contrast
- Visible keyboard focus states
- Semantic HTML structure
- Readable minimum font sizes
- Responsive layouts
- Accessible interactive controls
- Reduced reliance on color as the only visual indicator

Color combinations should be audited again whenever the design tokens are modified.

## Running Locally

Clone the repository:

```bash
git clone https://github.com/dafemu/david-munoz-portfolio.git
cd david-munoz-portfolio
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display the local development URL, typically:

```text
http://localhost:5173
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Type-check and generate the production build |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run TypeScript validation without building |

## Production Build

Generate the production-ready application with:

```bash
npm run build
```

The compiled application will be generated in:

```text
dist/
```

## Author

**David Fernando Muñoz Barco**

Software Engineer specializing in frontend development with React and TypeScript, currently expanding into full-stack systems and AI-powered product development.

- Portfolio: [YOUR_PORTFOLIO_URL](https://dafemu.github.io/david-munoz-portfolio/)
- LinkedIn: [YOUR_LINKEDIN_URL](https://www.linkedin.com/in/david-munoz-barco-004714121/)
- GitHub: [github.com/dafemu](https://github.com/dafemu)
- Email: [YOUR_EMAIL](mailto:david.f.do@hotmail.com)