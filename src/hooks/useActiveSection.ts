import { useEffect, useState } from 'react';

/** Fraction of the viewport a section must cross to become active. */
const DEFAULT_ACTIVATION_RATIO = 0.45;

/**
 * Scroll spy: returns the id of the last section whose top edge has crossed
 * the activation line, matching the original threshold behaviour.
 */
export const useActiveSection = (
  sectionIds: readonly string[],
  activationRatio: number = DEFAULT_ACTIVATION_RATIO,
): string | null => {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const sectionKey = sectionIds.join('|');

  useEffect(() => {
    const ids = sectionKey.split('|');

    const resolveActiveSection = (): void => {
      const activationLine = window.innerHeight * activationRatio;
      const active = ids.reduce<string | null>((current, id) => {
        const element = document.getElementById(id);
        const hasCrossed = element !== null && element.getBoundingClientRect().top < activationLine;
        return hasCrossed ? id : current;
      }, null);

      setActiveSectionId(active);
    };

    resolveActiveSection();
    window.addEventListener('scroll', resolveActiveSection, { passive: true });
    window.addEventListener('resize', resolveActiveSection);

    return () => {
      window.removeEventListener('scroll', resolveActiveSection);
      window.removeEventListener('resize', resolveActiveSection);
    };
  }, [sectionKey, activationRatio]);

  return activeSectionId;
};
