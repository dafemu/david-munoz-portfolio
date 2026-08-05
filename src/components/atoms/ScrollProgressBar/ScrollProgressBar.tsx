import { useEffect, useRef } from 'react';
import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './ScrollProgressBar.css';

/**
 * Writes scroll completion straight to its own CSS custom property.
 *
 * Deliberately not driven by React state: progress changes on every scroll
 * frame, and routing that through `useState` re-rendered the whole header —
 * logo, nav links and contact button — dozens of times a second to move a
 * 2px bar. The value never needs to exist in the render tree, so it doesn't.
 */
export const ScrollProgressBar = ({ className }: WithClassName) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId = 0;

    const applyProgress = (): void => {
      frameId = 0;
      const root = document.documentElement;
      const scrollable = Math.max(1, root.scrollHeight - root.clientHeight);
      barRef.current?.style.setProperty('--scroll-progress', `${root.scrollTop / scrollable}`);
    };

    /* Coalesces bursts of scroll events into a single write per frame. */
    const scheduleUpdate = (): void => {
      if (frameId === 0) frameId = requestAnimationFrame(applyProgress);
    };

    applyProgress();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      if (frameId !== 0) cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  return <div className={cx('scroll-progress-bar', className)} ref={barRef} aria-hidden="true" />;
};
