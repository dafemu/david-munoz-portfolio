import { Heading, Text } from '@/components/atoms';
import { TagList } from '@/components/molecules/TagList';
import { useRevealOnScroll } from '@/hooks';
import type { ExperienceEntry, WithClassName } from '@/types';
import { cx } from '@/utils';
import './ExperienceItem.css';

export interface ExperienceItemProps extends WithClassName {
  readonly entry: ExperienceEntry;
  readonly revealIndex?: number;
}

export const ExperienceItem = ({ entry, revealIndex = 0, className }: ExperienceItemProps) => {
  const reveal = useRevealOnScroll<HTMLLIElement>(revealIndex);

  return (
    <li
      className={cx('experience-item', reveal.className, className)}
      ref={reveal.ref}
      style={reveal.style}
    >
      <p className="experience-item__period">{entry.period}</p>
      <div className="experience-item__body">
        <div className="experience-item__title">
          <Heading level="h3" variant="role" className="experience-item__role">
            {entry.role}
          </Heading>
          <span className="experience-item__company">· {entry.company}</span>
        </div>
        <Text variant="blurb">{entry.blurb}</Text>
        <TagList tags={entry.tags} size="md" />
      </div>
    </li>
  );
};
