import { useMemo } from 'react';
import { ENGLISH_LEVEL, EXPERIENCE_ENTRIES, HERO_STAT_LABELS } from '@/data';
import type { HeroStat } from '@/types';
import { useYearsOfExperience } from './useYearsOfExperience';

/**
 * Builds the hero metrics from live sources instead of hardcoded figures:
 * years come from the career start year, companies from the timeline length.
 */
export const useHeroStats = (): readonly HeroStat[] => {
  const yearsOfExperience = useYearsOfExperience();

  return useMemo(
    () => [
      {
        id: 'experience',
        value: `${yearsOfExperience}+`,
        label: HERO_STAT_LABELS.experience,
      },
      {
        id: 'companies',
        value: `${EXPERIENCE_ENTRIES.length}`,
        label: HERO_STAT_LABELS.companies,
      },
      {
        id: 'english',
        value: ENGLISH_LEVEL,
        label: HERO_STAT_LABELS.english,
      },
    ],
    [yearsOfExperience],
  );
};
