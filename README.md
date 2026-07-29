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
│  │                ScrollProgressBar, Heading, Text, BulletList, StackChip,
│  │                LocationBadge, PageBackdrop
│  ├─ molecules/    NavMenu, AvailabilityBadge, StatList, TagList, ProfileCard,
│  │                HighlightCard, ExperienceItem, CaseStudyBlock,
│  │                AdditionalEngagementList, StackGroupList, ContactChannels,
│  │                HeroActions
│  ├─ organisms/    SiteHeader, HeroSection, AboutSection, ExperienceSection,
│  │                CaseStudyCard, ProjectsSection, StackSection,
│  │                ContactSection, SiteFooter
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
| `caseStudies.data.ts`| Throughline, 5 case studies, "Also worth knowing"    |
| `stack.data.ts`      | Technology groups                                    |
| `contact.data.ts`    | Email, LinkedIn, phone                               |

### Years of experience

The figure is **computed, never hardcoded**: `current year − 2018`, set in
`src/utils/experience.ts` via `CAREER_START_YEAR`. It feeds both the hero paragraph and the
"YEARS OF EXPERIENCE" stat. The "COMPANIES" stat is derived from `EXPERIENCE_ENTRIES.length`.

## Color system — "Ink & Ember"

Six named colors in `src/styles/tokens/colors.css` carry the whole system; every other
color token derives from them.

| Token             | Hex       | Role                                            |
| ----------------- | --------- | ----------------------------------------------- |
| `--color-ink`     | `#0D111C` | Base canvas                                     |
| `--color-slate`   | `#1A2133` | Cards, header, surfaces                         |
| `--color-bone`    | `#EDF1FA` | Primary text                                    |
| `--color-mist`    | `#B6C0D6` | Secondary text — lead, bio, blurbs              |
| `--color-signal`  | `#5AD8E6` | **Interactive**: links, CTAs, hover, focus      |
| `--color-ember`   | `#F5B971` | **Taxonomy**: section labels, chips, block labels |

Plus two derived steps: `--color-slate-raised` (`#242D45`) for chips and hover fills, and
`--color-mist-dim` (`#95A1BA`) for metadata.

The two accents are semantic, not decorative. **Signal marks what you can act on; Ember marks
what something is.** Keep that split when adding components — it is what gives the page its
hierarchy.

### Accessibility

All 47 text/background pairs in the UI pass WCAG AA; 46 of them reach AAA. The weakest pair is
6.18:1 (case study sector metadata on a card). Re-run the audit after changing any color token.

Small monospace type has a raised floor (`--fs-mono-xs: 11px`, `--fs-mono-sm: 12px`) and reduced
tracking (`--ls-section: 0.14em`), because WCAG contrast ratios model neither size nor letter
spacing — labels that measured 10:1 were still hard to read at 10px with `0.18em` tracking.

## Legacy

The original Claude Design export is archived in `_legacy/` for reference and is not part of
the build.
