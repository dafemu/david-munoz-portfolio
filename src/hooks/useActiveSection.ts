import { useEffect, useState } from 'react';

/** Fraction of the viewport a section must cross to become active. */
const DEFAULT_ACTIVATION_RATIO = 0.45;

/**
 * Scroll spy: returns the id of the last section whose top edge has crossed
 * the activation line.
 *
 * Driven by a single IntersectionObserver whose root box is collapsed to a
 * zero-height line at the activation point, rather than by a scroll listener.
 * The previous version called `getBoundingClientRect()` once per tracked
 * section on every scroll event — six forced layout reads per event, on the
 * main thread, during the one interaction that has to stay smooth.
 *
 * Each entry carries its own `boundingClientRect`, measured by the observer,
 * so positions are tracked without ever reading layout ourselves. A section's
 * position relative to the line can only flip by crossing it, and crossing
 * always fires an entry — so the recorded offsets stay accurate for the
 * comparison even between callbacks.
 */
export const useActiveSection = (
  sectionIds: readonly string[],
  activationRatio: number = DEFAULT_ACTIVATION_RATIO,
): string | null => {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const sectionKey = sectionIds.join('|');

  useEffect(() => {
    const ids = sectionKey.split('|');
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    /** Last known top offset per section id. */
    const topOffsets = new Map<string, number>();

    const resolveActiveSection = (): void => {
      const activationLine = window.innerHeight * activationRatio;
      const active = ids.reduce<string | null>((current, id) => {
        const top = topOffsets.get(id);
        return top !== undefined && top < activationLine ? id : current;
      }, null);

      setActiveSectionId(active);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          topOffsets.set(entry.target.id, entry.boundingClientRect.top);
        }
        resolveActiveSection();
      },
      {
        /* Collapses the root to a line at the activation point: a section
           intersects only while it spans that line. */
        rootMargin: `-${activationRatio * 100}% 0px -${(1 - activationRatio) * 100}% 0px`,
      },
    );

    for (const element of elements) observer.observe(element);

    return () => observer.disconnect();
  }, [sectionKey, activationRatio]);

  return activeSectionId;
};
