import type { ContactContent } from '@/types';

export const CONTACT_CONTENT: ContactContent = {
  /* Echoes the case-study throughline instead of the usual "let's build
     something together" — it says what the work actually is. */
  headline: 'If your product needs to grow up, I’ve done this before',
  description:
    'Open to senior frontend roles, collaborations and projects where interface quality matters.',
  email: 'david.f.do@hotmail.com',
  channels: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/david-munoz-barco-004714121/',
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
