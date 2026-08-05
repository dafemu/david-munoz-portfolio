import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './LocationBadge.css';

export interface LocationBadgeProps extends WithClassName {
  readonly label: string;
}

/**
 * The pin is inline SVG rather than the 📍 emoji it replaced: emoji render as
 * someone else's artwork in someone else's colour, and read as clip art next
 * to type this deliberate.
 */
export const LocationBadge = ({ label, className }: LocationBadgeProps) => (
  <span className={cx('location-badge', className)}>
    <svg
      className="location-badge__pin"
      viewBox="0 0 12 12"
      width="12"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      aria-hidden="true"
    >
      <path d="M6 10.8S2 7.5 2 4.7a4 4 0 0 1 8 0c0 2.8-4 6.1-4 6.1Z" />
      <circle cx="6" cy="4.6" r="1.3" />
    </svg>
    {label}
  </span>
);
