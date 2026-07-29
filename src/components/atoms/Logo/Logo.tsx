import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './Logo.css';

export interface LogoProps extends WithClassName {
  readonly name: string;
  readonly suffix: string;
  readonly href: string;
}

export const Logo = ({ name, suffix, href, className }: LogoProps) => (
  <a className={cx('logo', className)} href={href}>
    {name}
    <span className="logo__suffix">{suffix}</span>
  </a>
);
