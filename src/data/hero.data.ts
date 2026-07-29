import profilePhoto from '@/assets/images/profile.png';
import type { HeroContent } from '@/types';

export const HERO_CONTENT: HeroContent = {
  availabilityLabel: 'AVAILABLE FOR NEW PROJECTS',
  nameLines: ['David Fernando', 'Muñoz Barco'],
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
  },
  locationLabel: '📍 Cali, Colombia',
};

/** Stat labels; their values are computed in useHeroStats. */
export const HERO_STAT_LABELS = {
  experience: 'YEARS OF EXPERIENCE',
  companies: 'COMPANIES · BANKING, RETAIL, TRAVEL',
  english: 'ENGLISH · GLOBAL TEAMS',
} as const;

export const ENGLISH_LEVEL = 'B2';
