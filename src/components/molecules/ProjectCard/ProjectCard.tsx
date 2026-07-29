import { Heading, Text } from '@/components/atoms';
import { TagList } from '@/components/molecules/TagList';
import { useRevealOnScroll } from '@/hooks';
import type { Project, WithClassName } from '@/types';
import { cx } from '@/utils';
import './ProjectCard.css';

export interface ProjectCardProps extends WithClassName {
  readonly project: Project;
  readonly revealIndex?: number;
}

export const ProjectCard = ({ project, revealIndex = 0, className }: ProjectCardProps) => {
  const reveal = useRevealOnScroll<HTMLAnchorElement>(revealIndex);
  const isExternal = project.href.startsWith('http');

  return (
    <a
      className={cx('project-card', reveal.className, className)}
      ref={reveal.ref}
      style={reveal.style}
      href={project.href}
      {...(isExternal ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      <span className="project-card__shot">
        <span className="project-card__shot-label">{project.shotLabel}</span>
      </span>
      <span className="project-card__body">
        <span className="project-card__header">
          <Heading level="h3" variant="card">
            {project.name}
          </Heading>
          <span className="project-card__year">{project.year}</span>
        </span>
        <Text variant="card">{project.blurb}</Text>
        <TagList tags={project.tags} size="sm" />
        <span className="project-card__action">{project.action}</span>
      </span>
    </a>
  );
};
