import profilePhoto from '@/assets/images/profile.webp';
import type { HeroContent } from '@/types';

export const HERO_CONTENT: HeroContent = {
  availabilityLabel: 'AVAILABLE FOR NEW PROJECTS',
  nameLines: ['David Fernando', 'Muñoz Barco'],
  /**
   * Typed out line by line under the name. The first line is the role; the
   * rest are its branches — the three things the case studies below argue.
   *
   * The "└─" connectors are drawn in CSS rather than written here: the box
   * drawing characters are absent from JetBrains Mono's web subset, so they
   * fell back to a system font and sat out of alignment with the text.
   */
  roleLines: ['frontend engineer', 'design systems', 'server-driven UI', 'accessibility'],
  introBefore: 'Frontend Developer with ',
  introAfter:
    ' building enterprise web applications with React, Next.js and Angular — Microfrontends, Server-Driven UI and Design Systems for distributed teams.',
  actions: [
    { label: 'View experience', href: '#experience', variant: 'primary' },
    { label: 'Get in touch', href: 'mailto:david.f.do@hotmail.com', variant: 'outline' },
  ],
  photo: {
    src: profilePhoto,
    alt: 'David Muñoz Barco',
    /* Intrinsic size of the 2x asset; the slot renders at 340px wide. */
    width: 680,
    height: 907,
  },
  locationLabel: 'Cali, Colombia',
};

/** Stat labels; their values are computed in useHeroStats. */
export const HERO_STAT_LABELS = {
  experience: 'YEARS OF EXPERIENCE',
  companies: 'COMPANIES · BANKING, RETAIL, TRAVEL',
  english: 'ENGLISH · GLOBAL TEAMS',
} as const;

export const ENGLISH_LEVEL = 'B2';
