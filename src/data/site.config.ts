import type { SiteConfig } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  brandName: 'DFMB',
  brandSuffix: '.',
  heroSectionId: 'top',
  navigation: [
    { sectionId: 'about', label: '01 / about' },
    { sectionId: 'experience', label: '02 / experience' },
    { sectionId: 'projects', label: '03 / projects' },
    { sectionId: 'stack', label: '04 / stack' },
  ],
  contactNavLabel: 'contact',
  footer: {
    copyright: '© 2026 DAVID F. MUÑOZ BARCO',
    credit: 'DESIGNED & BUILT IN CALI, CO',
  },
  features: {
    showAvailability: true,
    showStats: true,
  },
};

/** Sections tracked by the scroll spy, in document order. */
export const TRACKED_SECTION_IDS = [
  'about',
  'experience',
  'projects',
  'stack',
  'contact',
] as const;
