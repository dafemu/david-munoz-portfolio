import type { CSSProperties } from 'react';
import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './ScrollProgressBar.css';

export interface ScrollProgressBarProps extends WithClassName {
  /** Completion from 0 to 1. */
  readonly progress: number;
}

export const ScrollProgressBar = ({ progress, className }: ScrollProgressBarProps) => (
  <div
    className={cx('scroll-progress-bar', className)}
    style={{ '--scroll-progress': progress } as CSSProperties}
    aria-hidden="true"
  />
);
