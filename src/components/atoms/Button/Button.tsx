import type { ReactNode } from 'react';
import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './Button.css';

/** Visual variants; new looks are added here without touching consumers. */
export type ButtonVariant = 'primary' | 'outline' | 'pill' | 'nav';

export interface ButtonProps extends WithClassName {
  readonly href: string;
  readonly variant: ButtonVariant;
  readonly children: ReactNode;
  readonly isExternal?: boolean;
}

export const Button = ({ href, variant, children, isExternal = false, className }: ButtonProps) => (
  <a
    className={cx('button', `button--${variant}`, className)}
    href={href}
    {...(isExternal ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
  >
    {children}
  </a>
);
