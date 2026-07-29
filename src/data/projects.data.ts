import type { Project } from '@/types';

export const PROJECTS_INTRO =
  'Selected work. Replace each card with your own project, screenshot and links.';

export const PROJECTS: readonly Project[] = [
  {
    id: 'project-one',
    name: 'Project one',
    year: '2025',
    href: '#projects',
    shotLabel: 'PROJECT SCREENSHOT · 16:10',
    blurb:
      'One or two lines on the problem, your role and the outcome — what got faster, clearer or more reusable.',
    tags: ['Next.js', 'TypeScript', 'GraphQL'],
    action: 'View case study →',
  },
  {
    id: 'project-two',
    name: 'Project two',
    year: '2024',
    href: '#projects',
    shotLabel: 'PROJECT SCREENSHOT · 16:10',
    blurb:
      'A design system, a microfrontend or an internal tool. Mention scale: components shipped, teams using it.',
    tags: ['React', 'Storybook', 'Design System'],
    action: 'View repository →',
  },
  {
    id: 'project-three',
    name: 'Project three',
    year: '2023',
    href: '#projects',
    shotLabel: 'PROJECT SCREENSHOT · 16:10',
    blurb:
      'A side project or experiment. Good place to show something playful you built on your own.',
    tags: ['Angular', 'AWS', 'Jest'],
    action: 'Live demo →',
  },
];
