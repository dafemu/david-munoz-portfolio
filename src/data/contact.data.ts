import type { ContactContent } from '@/types';

export const CONTACT_CONTENT: ContactContent = {
  headline: 'Let’s build something together',
  description:
    'Open to senior frontend roles, collaborations and projects where interface quality matters.',
  email: 'david.f.do@hotmail.com',
  channels: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/david-munoz-barco',
      external: true,
    },
    {
      id: 'phone',
      label: '+57 313 743 8968',
      href: 'tel:+573137438968',
      external: false,
    },
  ],
};
