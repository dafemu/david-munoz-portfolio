import { useEffect } from 'react';

/**
 * Scrolls to the section named in the URL fragment once, after mount.
 *
 * The browser resolves a fragment while parsing the document, which for a
 * client-rendered app is before any section exists — so opening a shared
 * "…/#projects" link landed at the top of the page with the right URL and the
 * wrong position. Running it again after React has committed puts the target
 * on screen; `scroll-margin-top` still clears the sticky header.
 */
export const useHashLanding = (): void => {
  useEffect(() => {
    const { hash } = window.location;
    if (hash.length <= 1) return;

    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target === null) return;

    /* Next frame, so the first paint has settled and the offset is final. */
    const frameId = requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
    });

    return () => cancelAnimationFrame(frameId);
  }, []);
};
