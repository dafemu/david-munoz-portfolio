import { StatusDot } from '@/components/atoms';
import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './AvailabilityBadge.css';

export interface AvailabilityBadgeProps extends WithClassName {
  readonly label: string;
}

export const AvailabilityBadge = ({ label, className }: AvailabilityBadgeProps) => (
  <p className={cx('availability-badge', className)}>
    <StatusDot />
    {label}
  </p>
);
