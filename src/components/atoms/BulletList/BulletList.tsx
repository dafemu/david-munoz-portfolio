import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './BulletList.css';

export interface BulletListProps extends WithClassName {
  readonly items: readonly string[];
}

export const BulletList = ({ items, className }: BulletListProps) => (
  <ul className={cx('bullet-list', className)}>
    {items.map((item) => (
      <li className="bullet-list__item" key={item}>
        {item}
      </li>
    ))}
  </ul>
);
