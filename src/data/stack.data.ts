import type { StackGroup } from '@/types';

export const STACK_GROUPS: readonly StackGroup[] = [
  {
    id: 'languages',
    label: 'LANGUAGES & FRAMEWORKS',
    items: [
      'React',
      'Next.js',
      'Angular 8+',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'HTML',
      'CSS',
      'SCSS',
      'LESS',
    ],
  },
  {
    id: 'architecture',
    label: 'FRONTEND ARCHITECTURE',
    items: [
      'Server-Driven UI',
      'Microfrontends',
      'Nx Monorepo',
      'Design Systems',
      'Atomic Design',
      'BEM',
      'Storybook',
      'Material UI',
    ],
  },
  {
    id: 'testing',
    label: 'TESTING & QUALITY',
    items: ['Jest', 'Jasmine', 'Karma', 'Functional testing', 'Regression'],
  },
  {
    id: 'cloud-ai',
    label: 'CLOUD, AI & TOOLS',
    items: [
      'AWS',
      'GraphQL',
      'Apollo',
      'Git',
      'GitHub',
      'GitLab',
      'Kore.ai',
      'GitHub Copilot',
      'Claude Code',
      'Cursor',
      'Jira',
      'Scrum',
    ],
  },
];
