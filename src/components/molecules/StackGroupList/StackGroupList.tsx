import { StackChip } from '@/components/atoms';
import { useRevealOnScroll } from '@/hooks';
import type { StackGroup, WithClassName } from '@/types';
import { cx } from '@/utils';
import './StackGroupList.css';

export interface StackGroupListProps extends WithClassName {
  readonly group: StackGroup;
  readonly revealIndex?: number;
}

export const StackGroupList = ({ group, revealIndex = 0, className }: StackGroupListProps) => {
  const reveal = useRevealOnScroll<HTMLDivElement>(revealIndex);

  return (
    <div
      className={cx('stack-group', reveal.className, className)}
      ref={reveal.ref}
      style={reveal.style}
    >
      <p className="stack-group__label">{group.label}</p>
      <ul className="stack-group__items">
        {group.items.map((item) => (
          <li key={item}>
            <StackChip>{item}</StackChip>
          </li>
        ))}
      </ul>
    </div>
  );
};
