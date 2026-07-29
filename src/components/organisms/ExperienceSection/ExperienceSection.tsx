import { SectionLabel } from '@/components/atoms';
import { ExperienceItem } from '@/components/molecules';
import type { ExperienceEntry, ResumeLink, WithClassName } from '@/types';
import { cx } from '@/utils';
import './ExperienceSection.css';

export interface ExperienceSectionProps extends WithClassName {
  readonly sectionId: string;
  readonly label: string;
  readonly entries: readonly ExperienceEntry[];
  readonly resume: ResumeLink;
}

export const ExperienceSection = ({
  sectionId,
  label,
  entries,
  resume,
  className,
}: ExperienceSectionProps) => (
  <section className={cx('experience', className)} id={sectionId}>
    <div className="experience__aside">
      <SectionLabel isSticky>{label}</SectionLabel>
    </div>
    <div className="experience__content">
      <ul className="experience__list">
        {entries.map((entry, index) => (
          <ExperienceItem key={entry.id} entry={entry} revealIndex={index} />
        ))}
      </ul>
      <a className="experience__resume" href={resume.href} target="_blank" rel="noreferrer noopener">
        {resume.label}
      </a>
    </div>
  </section>
);
