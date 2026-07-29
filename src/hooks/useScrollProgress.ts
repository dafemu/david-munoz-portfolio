import { useEffect, useState } from 'react';

/** Document scroll completion, from 0 (top) to 1 (bottom). */
export const useScrollProgress = (): number => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = (): void => {
      const root = document.documentElement;
      const scrollable = Math.max(1, root.scrollHeight - root.clientHeight);
      setProgress(root.scrollTop / scrollable);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return progress;
};
