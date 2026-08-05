import type { SiteConfig } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  brandName: 'DFMB',
  heroSectionId: 'top',
  navigation: [
    { sectionId: 'about', label: '01 / about' },
    { sectionId: 'experience', label: '02 / experience' },
    { sectionId: 'projects', label: '03 / projects' },
    { sectionId: 'personal-projects', label: '04 / personal' },
    { sectionId: 'stack', label: '05 / stack' },
  ],
  contactNavLabel: 'contact',
  skipLinkLabel: 'Skip to content',
  footer: {
    /* Derived for the same reason the years of experience are: a stale year in
       the footer is the cheapest possible tell that a site is unmaintained. */
    copyright: `© ${new Date().getFullYear()} DAVID F. MUÑOZ BARCO`,
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
  'personal-projects',
  'stack',
  'contact',
] as const;
