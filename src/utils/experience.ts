/** The year David started working professionally. */
export const CAREER_START_YEAR = 2018;

/**
 * Years of professional experience, derived rather than hardcoded so the
 * figure stays accurate without edits: current year − CAREER_START_YEAR.
 */
export const calculateYearsOfExperience = (
  startYear: number = CAREER_START_YEAR,
  today: Date = new Date(),
): number => Math.max(0, today.getFullYear() - startYear);
