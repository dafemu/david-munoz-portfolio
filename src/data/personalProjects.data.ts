import type {
  PersonalProject,
  PersonalProjectLinkLabels,
  PersonalProjectsIntro,
} from '@/types';

/**
 * Framing that keeps a reviewer from reading these as client work. The case
 * studies above are confidential engagements; everything here is self-directed.
 */
export const PERSONAL_PROJECTS_INTRO: PersonalProjectsIntro = {
  heading: 'Personal Projects',
  note: "Projects I've built on my own time to explore ideas and technologies — not client work.",
};

export const PERSONAL_PROJECT_LINK_LABELS: PersonalProjectLinkLabels = {
  liveDemo: 'Live Demo',
  liveDemoPending: 'Demo coming soon',
  github: 'GitHub',
  githubPending: 'Repo coming soon',
};

export const PERSONAL_PROJECTS: readonly PersonalProject[] = [
  {
    id: 'campus-academic-admin',
    title: 'Campus',
    domain: 'EdTech · Academic admin panel',
    stack: ['Angular 15', 'TypeScript', 'NgRx', 'Angular Material', 'RxJS', 'SCSS'],
    pitch:
      "Admin panel to manage a training center's students, faculty, and course catalog from a single place, with role-based access between view-only and edit permissions.",
    highlights: [
      'Modular architecture with lazy-loaded routes per domain (students, courses, teachers, auth)',
      'NgRx as single source of truth (actions, reducers, selectors, effects)',
      'Custom SCSS design system theming Angular Material — not an off-the-shelf theme',
      'Full CRUD across three related entities, WCAG AA accessible, responsive',
    ],
    liveDemoUrl: '',
    githubUrl: '',
    mediaType: 'gif',
    mediaAspect: 'wide',
    mediaTodo:
      'GIF (~8s): navigate to students → filter/search → open a record → edit → save. A static table screenshot undersells the CRUD depth.',
  },
  {
    id: 'brokenchains-ecommerce',
    title: 'BROKENCHAINS',
    domain: 'Retail / Fashion · Sneaker e-commerce',
    stack: [
      'React 18',
      'React Router v6',
      'Context API',
      'Firebase Firestore v9',
      'Bootstrap 5',
    ],
    pitch:
      'Full online store — filterable catalog, product page, cart persisted across routes, and checkout that generates a real order — with Firestore as the entire backend.',
    highlights: [
      'Container/presentational split: containers own data access, components stay pure',
      'Cart state via Context API (deliberate choice over Redux for this scope)',
      'Live stock updates via onSnapshot on the product detail page',
      'Atomic checkout: order document + stock decrement via increment() in the same transaction',
    ],
    liveDemoUrl: '',
    githubUrl: '',
    mediaType: 'gif',
    mediaAspect: 'wide',
    mediaTodo:
      'GIF of the full flow: browse → filter → product → add to cart → checkout → order confirmation. The real-time stock update only reads in motion. Also the top priority to deploy and link.',
  },
  {
    id: 'vebt-debt-management',
    title: 'Vebt',
    domain: 'Fintech · Personal debt management',
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Expo Router',
      'AsyncStorage',
      'Expo Notifications',
      'RevenueCat',
      'WidgetKit/Swift',
    ],
    pitch:
      'Mobile app to track and pay down personal debts without an account or internet connection, showing progress, due dates, and payoff strategies clearly.',
    highlights: [
      'Feature-based architecture, file-based navigation (Expo Router)',
      'Local-first: all data in AsyncStorage, no backend/sync in v1',
      'Supports fixed and revolving debts, minimum/extra payments, payoff projections',
      'Native iOS widgets (WidgetKit) + preventive notifications + Free/Pro monetization (RevenueCat)',
    ],
    liveDemoUrl: '',
    githubUrl: '',
    mediaType: 'gif',
    mediaAspect: 'portrait',
    mediaTodo:
      'Screen-recording GIF inside a phone device frame: add a debt → see progress → get a payoff projection. Mobile only, so no browser demo link.',
    secondaryMediaTodo:
      'Separate shot of the iOS widget on a home screen — a distinctive native feature, so give it its own frame instead of burying it in the main GIF.',
  },
  {
    id: 'momentum-90-habits',
    title: 'Momentum 90',
    domain: 'Productivity / Wellbeing · Habit tracking OS',
    stack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'Recharts',
      'pdf-lib',
    ],
    pitch:
      'Personal dashboard turning daily habits, reading, and personal-development challenges into measurable routines, with visual progress tracking and consistency scoring.',
    highlights: [
      'Full-stack Next.js App Router with Server Components for data-heavy views',
      'Prisma + PostgreSQL modeling day logs, habits, books, challenges, usage events',
      'Interactive dashboard: streaks, energy, hydration, sleep, reading — charts and heatmaps',
      'Automatic challenge logic, reading sync, PDF export for books/challenges',
    ],
    liveDemoUrl: '',
    githubUrl: '',
    mediaType: 'screenshot',
    mediaAspect: 'wide',
    mediaTodo:
      'Screenshot of the main dashboard with the heatmap and charts visible — a better single image here than a GIF. Seed realistic sample data first; empty states undersell the charts.',
  },
];
