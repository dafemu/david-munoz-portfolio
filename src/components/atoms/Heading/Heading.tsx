import type { ReactNode } from 'react';
import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './Heading.css';

export type HeadingLevel = 'h1' | 'h2' | 'h3';
export type HeadingVariant = 'display' | 'display-sm' | 'statement' | 'role' | 'card';

export interface HeadingProps extends WithClassName {
  readonly level: HeadingLevel;
  readonly variant: HeadingVariant;
  readonly children: ReactNode;
}

export const Heading = ({ level: Tag, variant, children, className }: HeadingProps) => (
  <Tag className={cx('heading', `heading--${variant}`, className)}>{children}</Tag>
);
