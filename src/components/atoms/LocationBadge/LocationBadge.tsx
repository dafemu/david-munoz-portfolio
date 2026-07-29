import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './LocationBadge.css';

export interface LocationBadgeProps extends WithClassName {
  readonly label: string;
}

export const LocationBadge = ({ label, className }: LocationBadgeProps) => (
  <span className={cx('location-badge', className)}>{label}</span>
);
