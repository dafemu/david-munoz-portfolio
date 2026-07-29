import { Tag } from '@/components/atoms';
import type { TagSize } from '@/components/atoms/Tag';
import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './TagList.css';

export interface TagListProps extends WithClassName {
  readonly tags: readonly string[];
  readonly size?: TagSize;
}

export const TagList = ({ tags, size = 'md', className }: TagListProps) => (
  <ul className={cx('tag-list', `tag-list--${size}`, className)}>
    {tags.map((tag) => (
      <li key={tag}>
        <Tag size={size}>{tag}</Tag>
      </li>
    ))}
  </ul>
);
