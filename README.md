# David F. Muñoz Barco — Portfolio

Portfolio migrated from a static Claude Design export to **React 19 + TypeScript + Vite**, using
**Atomic Design** for component structure and **BEM** for styling.

## Running locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default <http://localhost:5173>).

| Script              | Purpose                                    |
| ------------------- | ------------------------------------------ |
| `npm run dev`       | Dev server with hot reload                 |
| `npm run build`     | Type-check (`tsc -b`) and build to `dist/` |
| `npm run preview`   | Serve the production build locally         |
| `npm run typecheck` | Type-check only                            |

## Architecture

```
src/
├─ components/
│  ├─ atoms/        Logo, NavLink, Button, SectionLabel, Tag, StatusDot,
│  │                ScrollProgressBar, Heading, Text, StackChip,
│  │                LocationBadge, PageBackdrop
│  ├─ molecules/    NavMenu, AvailabilityBadge, StatList, TagList, ProfileCard,
│  │                HighlightCard, ExperienceItem, ProjectCard, StackGroupList,
│  │                ContactChannels, HeroActions
│  ├─ organisms/    SiteHeader, HeroSection, AboutSection, ExperienceSection,
│  │                ProjectsSection, StackSection, ContactSection, SiteFooter
│  ├─ templates/    PortfolioTemplate
│  └─ pages/        HomePage
├─ data/            All copy and content — the only place to edit text
├─ types/           Prop and content interfaces
├─ hooks/           useScrollProgress, useActiveSection, useRevealOnScroll,
│                   useYearsOfExperience, useHeroStats
├─ utils/           cx (class names), experience calculation
└─ styles/
   ├─ tokens/       colors, typography, spacing, radius, motion (CSS variables)
   └─ base/         reset, global, animations
```

Each component lives in its own folder with `Component.tsx`, `Component.css` and `index.ts`.
CSS classes follow `block__element--modifier`; every value comes from a token in `src/styles/tokens/`.

## Editing content

No copy is hardcoded in JSX. Everything lives in `src/data/`:

| File                 | Contains                                            |
| -------------------- | --------------------------------------------------- |
| `site.config.ts`     | Brand, navigation, footer, content feature flags     |
| `hero.data.ts`       | Headline, intro copy, CTAs, photo, stat labels       |
| `about.data.ts`      | Statement, bio, the three capability cards           |
| `experience.data.ts` | Career timeline and résumé link                      |
| `projects.data.ts`   | Project cards                                        |
| `stack.data.ts`      | Technology groups                                    |
| `contact.data.ts`    | Email, LinkedIn, phone                               |

### Years of experience

The figure is **computed, never hardcoded**: `current year − 2018`, set in
`src/utils/experience.ts` via `CAREER_START_YEAR`. It feeds both the hero paragraph and the
"YEARS OF EXPERIENCE" stat. The "COMPANIES" stat is derived from `EXPERIENCE_ENTRIES.length`.

### Theming

The whole palette derives from one token. Change `--color-accent` in
`src/styles/tokens/colors.css` to retint the site; the original alternatives were
`#5fe0e6`, `#8ea2ff`, `#b6e26a` and `#ff9f6e`.

## Legacy

The original Claude Design export is archived in `_legacy/` for reference and is not part of
the build.
