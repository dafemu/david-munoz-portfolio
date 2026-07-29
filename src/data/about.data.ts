import type { AboutContent } from '@/types';

export const ABOUT_CONTENT: AboutContent = {
  statement:
    'I design and build interfaces that scale: consistent design systems, maintainable frontend architectures and experiences that feel fast.',
  bio: 'Multimedia Engineer with a postgraduate specialization in Project Management. I have worked across banking, retail and travel platforms inside multicultural, distributed teams, focused on code quality, testing and continuous improvement. Today I explore Server-Driven UI and AI-assisted development workflows.',
  highlights: [
    {
      id: 'architecture',
      label: 'ARCHITECTURE',
      description: 'SDUI, Microfrontends, Nx Monorepo, Atomic Design',
    },
    {
      id: 'quality',
      label: 'QUALITY',
      description: 'Jest, Jasmine, Karma, functional and regression testing',
    },
    {
      id: 'ai-cloud',
      label: 'AI & CLOUD',
      description: 'AWS, Kore.ai, Copilot, Claude Code, Cursor',
    },
  ],
};
