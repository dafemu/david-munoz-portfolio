import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, RefObject } from 'react';

const ROOT_MARGIN = '0px 0px -12% 0px';
const THRESHOLD = 0.08;
/** The original cycled its stagger every four elements. */
const STAGGER_CYCLE = 4;
const STAGGER_STEP_SECONDS = 0.07;

export interface RevealBinding<TElement extends HTMLElement> {
  readonly ref: RefObject<TElement | null>;
  /** BEM state classes to append to the element's own block class. */
  readonly className: string;
  /** Carries the staggered delay as a custom property. */
  readonly style: CSSProperties;
}

/**
 * Reveals an element the first time it enters the viewport. `revealIndex`
 * reproduces the staggered entrance of the original page.
 */
export const useRevealOnScroll = <TElement extends HTMLElement = HTMLDivElement>(
  revealIndex = 0,
): RevealBinding<TElement> => {
  const ref = useRef<TElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (element === null) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting !== true) return;
        setIsRevealed(true);
        observer.unobserve(entry.target);
      },
      { rootMargin: ROOT_MARGIN, threshold: THRESHOLD },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const delaySeconds = (revealIndex % STAGGER_CYCLE) * STAGGER_STEP_SECONDS;

  return {
    ref,
    className: isRevealed ? 'reveal reveal--visible' : 'reveal',
    style: { '--reveal-delay': `${delaySeconds}s` } as CSSProperties,
  };
};
