import { SectionLabel, Text } from '@/components/atoms';
import { PersonalProjectCard } from '@/components/organisms/PersonalProjectCard';
import type {
  PersonalProject,
  PersonalProjectLinkLabels,
  PersonalProjectsIntro,
  WithClassName,
} from '@/types';
import { cx } from '@/utils';
import './PersonalProjectsSection.css';

export interface PersonalProjectsSectionProps extends WithClassName {
  readonly sectionId: string;
  readonly label: string;
  readonly intro: PersonalProjectsIntro;
  readonly projects: readonly PersonalProject[];
  readonly linkLabels: PersonalProjectLinkLabels;
}

/**
 * Sits after the professional case studies and never mixes with them: its own
 * heading, an explicit disclaimer, and a two-column grid of compact cards.
 */
export const PersonalProjectsSection = ({
  sectionId,
  label,
  intro,
  projects,
  linkLabels,
  className,
}: PersonalProjectsSectionProps) => (
  <section className={cx('personal-projects', className)} id={sectionId}>
    <SectionLabel className="personal-projects__label" as="div">
      {label}
    </SectionLabel>
    <div className="personal-projects__content">
      <header className="personal-projects__intro">
        <h2 className="personal-projects__heading">{intro.heading}</h2>
        <Text variant="note" className="personal-projects__note">
          {intro.note}
        </Text>
      </header>
      <div className="personal-projects__grid">
        {projects.map((project, index) => (
          <PersonalProjectCard
            key={project.id}
            project={project}
            linkLabels={linkLabels}
            revealIndex={index}
          />
        ))}
      </div>
    </div>
  </section>
);
