import { useMemo } from 'react';
import { CAREER_START_YEAR, calculateYearsOfExperience } from '@/utils';

/** Years of professional experience, recomputed once per mount. */
export const useYearsOfExperience = (startYear: number = CAREER_START_YEAR): number =>
  useMemo(() => calculateYearsOfExperience(startYear), [startYear]);
