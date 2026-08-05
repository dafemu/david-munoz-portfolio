import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './MenuToggle.css';

export interface MenuToggleProps extends WithClassName {
  readonly isOpen: boolean;
  /** DOM id of the drawer this button controls. */
  readonly controls: string;
  readonly onToggle: () => void;
  readonly openLabel: string;
  readonly closeLabel: string;
}

/**
 * Hamburger that morphs into a close icon. Two bars rather than the usual
 * three: with three, the middle one has to be faded out to form the cross,
 * which reads as a swap; two bars rotate into the X as one continuous move.
 */
export const MenuToggle = ({
  isOpen,
  controls,
  onToggle,
  openLabel,
  closeLabel,
  className,
}: MenuToggleProps) => (
  <button
    className={cx('menu-toggle', isOpen && 'menu-toggle--open', className)}
    type="button"
    onClick={onToggle}
    aria-expanded={isOpen}
    aria-controls={controls}
    aria-label={isOpen ? closeLabel : openLabel}
  >
    <span className="menu-toggle__bars" aria-hidden="true">
      <span className="menu-toggle__bar" />
      <span className="menu-toggle__bar" />
    </span>
  </button>
);
