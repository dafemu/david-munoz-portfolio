import type { HeroStat, WithClassName } from '@/types';
import { cx } from '@/utils';
import './StatList.css';

export interface StatListProps extends WithClassName {
  readonly stats: readonly HeroStat[];
}

export const StatList = ({ stats, className }: StatListProps) => (
  <dl className={cx('stat-list', className)}>
    {stats.map((stat) => (
      <div className="stat-list__item" key={stat.id}>
        <dt className="stat-list__value">{stat.value}</dt>
        <dd className="stat-list__label">{stat.label}</dd>
      </div>
    ))}
  </dl>
);
