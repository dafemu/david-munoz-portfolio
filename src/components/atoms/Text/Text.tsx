import type { ReactNode } from 'react';
import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './Text.css';

export type TextVariant = 'lead' | 'body' | 'blurb' | 'card' | 'note' | 'contact';

export interface TextProps extends WithClassName {
  readonly variant: TextVariant;
  readonly children: ReactNode;
}

export const Text = ({ variant, children, className }: TextProps) => (
  <p className={cx('text', `text--${variant}`, className)}>{children}</p>
);
