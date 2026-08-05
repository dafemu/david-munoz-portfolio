import { useEffect, useState } from 'react';

/**
 * Subscribes to a media query. Used instead of a CSS breakpoint where the
 * markup itself must change — the compact header renders a drawer rather than
 * hiding the desktop nav, so there is never a second set of focusable links
 * sitting invisible in the DOM.
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handleChange = (event: MediaQueryListEvent): void => setMatches(event.matches);

    /* Re-sync in case the viewport changed between render and subscription. */
    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', handleChange);

    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
};
