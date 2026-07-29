import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './StatusDot.css';

export type StatusDotProps = WithClassName;

export const StatusDot = ({ className }: StatusDotProps) => (
  <span className={cx('status-dot', className)} aria-hidden="true" />
);
