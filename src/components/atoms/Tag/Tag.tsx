import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './Tag.css';

export type TagSize = 'sm' | 'md';

export interface TagProps extends WithClassName {
  readonly children: string;
  readonly size?: TagSize;
}

export const Tag = ({ children, size = 'md', className }: TagProps) => (
  <span className={cx('tag', `tag--${size}`, className)}>{children}</span>
);
