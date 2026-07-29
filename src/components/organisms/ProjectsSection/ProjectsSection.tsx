import { SectionLabel, Text } from '@/components/atoms';
import { ProjectCard } from '@/components/molecules';
import type { Project, WithClassName } from '@/types';
import { cx } from '@/utils';
import './ProjectsSection.css';

export interface ProjectsSectionProps extends WithClassName {
  readonly sectionId: string;
  readonly label: string;
  readonly intro: string;
  readonly projects: readonly Project[];
}

export const ProjectsSection = ({
  sectionId,
  label,
  intro,
  projects,
  className,
}: ProjectsSectionProps) => (
  <section className={cx('projects', className)} id={sectionId}>
    <div className="projects__aside">
      <SectionLabel>{label}</SectionLabel>
      <Text variant="note">{intro}</Text>
    </div>
    <div className="projects__grid">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} revealIndex={index} />
      ))}
    </div>
  </section>
);
