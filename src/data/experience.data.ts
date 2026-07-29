import type { ExperienceEntry, ResumeLink } from '@/types';

export const EXPERIENCE_ENTRIES: readonly ExperienceEntry[] = [
  {
    id: 'capgemini',
    period: 'DEC 2025 — PRESENT',
    role: 'Software Engineer · Frontend',
    company: 'Capgemini',
    blurb:
      'UI components for an enterprise travel and booking platform. Implemented Server-Driven UI patterns and integrated conversational AI with Kore.ai for flight and hotel reservation flows.',
    tags: ['React', 'TypeScript', 'SDUI', 'GraphQL', 'AWS'],
  },
  {
    id: 'masglobal',
    period: 'JUL — DEC 2025',
    role: 'Mid-Senior Frontend Developer',
    company: 'MasGlobal Consulting',
    blurb:
      'Applications focused on performance and scalability, with reusable interfaces in Material UI and a Microfrontends architecture on an Nx monorepo.',
    tags: ['Next.js', 'Redux', 'Zod', 'Nx', 'Material UI'],
  },
  {
    id: 'publicis',
    period: 'MAY 2022 — JUL 2025',
    role: 'Experience Technology Engineer',
    company: 'Publicis Global Delivery',
    blurb:
      'Built design systems with BEM and Storybook ensuring a consistent, reusable architecture, integrating GraphQL and Apollo with unit tests in Jest.',
    tags: ['React', 'Next.js', 'Storybook', 'Apollo', 'Jest'],
  },
  {
    id: 'banco-occidente',
    period: 'MAY 2021 — MAY 2022',
    role: 'Edge Front-end Developer',
    company: 'Banco de Occidente',
    blurb:
      'Internal credit-card processing web app built with Angular, RxJS and NgRx under a Microfrontends architecture on AWS infrastructure.',
    tags: ['Angular', 'NgRx', 'RxJS', 'Karma', 'AWS'],
  },
  {
    id: 'coomeva',
    period: 'JUN 2019 — MAY 2021',
    role: 'National Development Analyst',
    company: 'Coomeva EPS',
    blurb:
      'Developed and analyzed solutions with Angular, JavaScript, TypeScript and PL/SQL, ensuring quality through functional, stress and regression testing.',
    tags: ['Angular', 'PHP', 'PL/SQL', 'Bootstrap'],
  },
  {
    id: 'webmaster',
    period: '2018 — 2019',
    role: 'Webmaster / Web Designer',
    company: 'Municipal Council of Cali · Colgate Palmolive',
    blurb:
      'Designed and developed sites with WordPress and managed content in Adobe Experience Manager, including migration and template creation.',
    tags: ['WordPress', 'AEM', 'CSS'],
  },
];

export const RESUME_LINK: ResumeLink = {
  label: 'Download full résumé ↓',
  href: '/cv/CV-David-Munoz-Barco.pdf',
};
