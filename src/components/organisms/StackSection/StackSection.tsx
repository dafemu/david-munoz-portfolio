import { SectionLabel } from '@/components/atoms';
import { StackGroupList } from '@/components/molecules';
import type { StackGroup, WithClassName } from '@/types';
import { cx } from '@/utils';
import './StackSection.css';

export interface StackSectionProps extends WithClassName {
  readonly sectionId: string;
  readonly label: string;
  readonly groups: readonly StackGroup[];
}

export const StackSection = ({ sectionId, label, groups, className }: StackSectionProps) => (
  <section className={cx('stack', className)} id={sectionId}>
    <SectionLabel className="stack__label">{label}</SectionLabel>
    <div className="stack__groups">
      {groups.map((group, index) => (
        <StackGroupList key={group.id} group={group} revealIndex={index} />
      ))}
    </div>
  </section>
);
