import type { ReactNode } from 'react';
import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './Button.css';

/** Visual variants; new looks are added here without touching consumers. */
export type ButtonVariant = 'primary' | 'outline' | 'pill' | 'nav' | 'ghost';

export interface ButtonProps extends WithClassName {
  readonly href: string;
  readonly variant: ButtonVariant;
  readonly children: ReactNode;
  readonly isExternal?: boolean;
  /** For destinations that don't exist yet — renders inert, never a dead link. */
  readonly isDisabled?: boolean;
}

export const Button = ({
  href,
  variant,
  children,
  isExternal = false,
  isDisabled = false,
  className,
}: ButtonProps) => {
  const classNames = cx(
    'button',
    `button--${variant}`,
    isDisabled && 'button--disabled',
    className,
  );

  /* A span rather than a disabled anchor: an <a> without href is not focusable
     anyway, and aria-disabled tells assistive tech why nothing happens. */
  if (isDisabled) {
    return (
      <span className={classNames} role="link" aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a
      className={classNames}
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      {children}
    </a>
  );
};
