import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

/** Everything that can hold focus inside the trapped container. */
const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

/**
 * Confines Tab focus to a container while `isActive`, and hands focus back to
 * whatever held it before. Attach the returned ref to the element to trap.
 */
export const useFocusTrap = <TElement extends HTMLElement = HTMLDivElement>(
  isActive: boolean,
): RefObject<TElement | null> => {
  const containerRef = useRef<TElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!isActive || container === null) return;

    /* Captured before moving focus so it can be restored on close. */
    const previouslyFocused = document.activeElement as HTMLElement | null;

    const getFocusable = (): HTMLElement[] =>
      Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));

    /* preventScroll throughout: moving focus must never move the viewport.
       Without it, restoring focus to the trigger on close scrolled the page
       back to the trigger — which cancelled the very anchor navigation the
       user had just tapped a link to make. */
    getFocusable()[0]?.focus({ preventScroll: true });

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key !== 'Tab') return;

      const focusable = getFocusable();
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      /* Nothing to focus: keep focus where it is rather than letting it escape. */
      if (first === undefined || last === undefined) {
        event.preventDefault();
        return;
      }

      const active = document.activeElement;
      const isLeavingBackwards = event.shiftKey && (active === first || !container.contains(active));
      const isLeavingForwards = !event.shiftKey && active === last;

      if (isLeavingBackwards) {
        event.preventDefault();
        last.focus({ preventScroll: true });
      } else if (isLeavingForwards) {
        event.preventDefault();
        first.focus({ preventScroll: true });
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [isActive]);

  return containerRef;
};
