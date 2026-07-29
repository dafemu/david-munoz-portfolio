import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './NavLink.css';

export interface NavLinkProps extends WithClassName {
  readonly href: string;
  readonly label: string;
  readonly isActive: boolean;
}

export const NavLink = ({ href, label, isActive, className }: NavLinkProps) => (
  <a
    className={cx('nav-link', isActive && 'nav-link--active', className)}
    href={href}
    aria-current={isActive ? 'true' : undefined}
  >
    {label}
  </a>
);
