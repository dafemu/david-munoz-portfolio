import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import { BlockCursor } from '../BlockCursor';
import './Logo.css';

export interface LogoProps extends WithClassName {
  readonly name: string;
  readonly href: string;
}

/**
 * Wordmark plus the caret that recurs through the page — hero, section labels,
 * location — as the site's mark. It replaced a full stop, which said nothing.
 */
export const Logo = ({ name, href, className }: LogoProps) => (
  <a className={cx('logo', className)} href={href}>
    {name}
    <BlockCursor className="logo__caret" />
  </a>
);
