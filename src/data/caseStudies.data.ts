import type {
  AdditionalEngagementsContent,
  CaseStudy,
  CaseStudyBlockLabels,
  Throughline,
} from '@/types';

/** Narrative that frames the five case studies as one story. */
export const CASE_STUDIES_THROUGHLINE: Throughline = {
  before:
    'Across every role, the pattern is consistent: I keep getting brought in when a company needs to ',
  highlight: "modernize an existing product's design and accessibility",
  after:
    ' — building or extending a design system to make that modernization scalable, rather than a one-off redesign. The 5 case studies below are ordered to tell that story, from design-system-as-product, through accessibility-driven redesigns, to applying those same principles across very different stacks and architectures.',
};

export const CASE_STUDY_BLOCK_LABELS: CaseStudyBlockLabels = {
  challenge: 'THE CHALLENGE',
  approach: 'MY APPROACH',
  outcome: 'OUTCOME',
};

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    id: 'authorable-component-library',
    order: '01',
    title: 'Authorable Component Library for a Healthcare Client',
    sector: 'Healthcare',
    stack: ['Next.js', 'DotCMS'],
    challenge:
      'A healthcare client needed their own team to author and publish web pages without depending on engineers for every content change — but strictly using components that matched their exact design system and templates.',
    approach: [
      "Built a full library of components in Next.js, adapted precisely to the client's design specifications and page templates.",
      'Integrated the components with DotCMS so non-technical users could assemble pages themselves using only approved, on-brand building blocks.',
    ],
    outcome:
      'Gave a non-technical team the ability to self-serve page creation while guaranteeing every page stayed on-brand and consistent — reducing engineering dependency for routine content updates.',
  },
  {
    id: 'accessible-retail-redesign',
    order: '02',
    title: 'Accessible Redesign for a Retail Platform',
    sector: 'Retail',
    stack: ['Next.js', 'React', 'Storybook'],
    challenge:
      'A retail company needed several web pages redesigned with new visuals and functionality — with a strong emphasis on accessibility, which had not been a priority in the previous version.',
    approach: [
      'Rebuilt key pages using Next.js and React, documenting reusable components in Storybook.',
      'Applied accessibility best practices throughout: semantic HTML, keyboard navigation, ARIA attributes, and color contrast compliance.',
      "Worked closely with design to ensure the new visual direction didn't compromise accessibility.",
    ],
    outcome:
      'Redesigned pages that were both visually updated and meaningfully more accessible — a concrete example of balancing design ambition with inclusive UX.',
  },
  {
    id: 'digitized-sales-process',
    order: '03',
    title: 'Digitizing a Manual, Paper-Based Sales Process',
    sector: 'Banking / financial services',
    stack: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'SASS'],
    challenge:
      'Commercial advisors were selling credit cards through a manual, paper-heavy process, prone to errors and slow to process.',
    approach: [
      'Built the advisor-facing tool in Angular with RxJS/NgRx for reactive state management, replacing physical paperwork with a guided digital flow.',
      "Followed Design System / Atomic Design principles (documented in Storybook) to keep the UI consistent with the bank's broader digital products, even on a completely different stack than my other design-system work.",
      'Wrote unit/integration tests (Karma, Jasmine) to protect a flow directly tied to financial transactions.',
    ],
    outcome:
      'Replaced a fully manual, paper-based process with a guided digital flow for advisors — later evolved into a self-service MVP so customers could apply without an advisor at all.',
  },
  {
    id: 'micro-frontend-parking-platform',
    order: '04',
    title: 'Micro-Frontend Architecture for a Parking & Reservations Platform',
    sector: 'Mobility / large-scale consumer platform',
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'NX monorepo',
      'pnpm',
      'Redux',
      'React Hook Form',
      'Zod',
      'Material UI',
    ],
    challenge:
      'A large-scale parking management platform needed to support parking search, future reservations, and subscriptions — features owned by different teams — without duplicated logic or inconsistent UI.',
    approach: [
      'Worked within a micro-frontend architecture in an NX monorepo (pnpm), so features could be developed and deployed independently while sharing a common design language.',
      'Translated Figma designs into accessible, production-ready components with Material UI, implementing complex forms with React Hook Form + Zod.',
      'Managed cross-cutting application state with Redux, and focused on UX polish: bug fixes and edge-case handling based on real usage feedback.',
    ],
    outcome:
      'A consistent user experience for search, reservations, and subscriptions across independently-deployed frontend modules.',
  },
  {
    id: 'sdui-travel-booking',
    order: '05',
    title: 'AI-Powered Travel Booking Experience with SDUI',
    sector: 'Global financial services (travel & booking platform)',
    stack: ['React', 'TypeScript', 'SCSS/LESS', 'Kore.ai', 'AWS'],
    challenge:
      'A global financial services company wanted to let customers book flights and hotels through a conversational, AI-assisted experience instead of a traditional multi-step form flow.',
    approach: [
      'Built UI components in React + TypeScript that render dynamically based on Server-Driven UI (SDUI) responses, so the interface adapts to what the conversation/booking flow needs at each step — the most architecturally advanced application of "design system as a scalable system" across my career so far.',
      'Integrated a conversational chatbot (Kore.ai) into the booking journey, handling UI state transitions between chat and traditional form-based interactions.',
      'Worked within a cloud-native setup on AWS with multiple local backend services running in parallel.',
    ],
    outcome:
      'A booking experience that blends conversational AI with structured, dynamically-rendered UI, reducing friction in a traditionally form-heavy flow.',
  },
];

export const ADDITIONAL_ENGAGEMENTS: AdditionalEngagementsContent = {
  heading: 'Also worth knowing',
  intro: "A few more engagements that didn't make the top 5 but round out the picture:",
  items: [
    {
      id: 'chatbot-ui',
      title: 'Conversational Chatbot UI',
      context: 'Healthcare, Vue.js + AWS',
      description:
        'Built a custom chat interface from scratch on top of an AWS bot service for a healthcare client.',
    },
    {
      id: 'content-platform-sales-app',
      title: 'Content Platform & Sales Enablement App',
      context: 'Pharma, AEM + React',
      description:
        'Managed AEM content/styling and built a JSON-driven iPad app for a pharma sales team to present treatment info.',
    },
    {
      id: 'self-service-mvp',
      title: 'Self-Service MVP',
      context: 'Banking, React',
      description:
        'Evolved the advisor tool above (Case Study 03) into a customer-facing self-service flow, removing the advisor from the process entirely.',
    },
  ],
};
