import { BulletList, Button, Heading, Text } from '@/components/atoms';
import { TagList } from '@/components/molecules';
import { useRevealOnScroll } from '@/hooks';
import type { PersonalProject, PersonalProjectLinkLabels, WithClassName } from '@/types';
import { cx } from '@/utils';
import './PersonalProjectCard.css';

/** Short mono badge naming the capture still owed, shown on the media slot. */
const MEDIA_TYPE_LABELS = {
  gif: 'GIF',
  screenshot: 'SCREENSHOT',
  video: 'VIDEO',
} as const;

export interface PersonalProjectCardProps extends WithClassName {
  readonly project: PersonalProject;
  readonly linkLabels: PersonalProjectLinkLabels;
  readonly revealIndex?: number;
}

/**
 * Deliberately lighter than CaseStudyCard: no Challenge/Approach/Outcome
 * structure, so a reviewer reads these as side projects at a glance.
 */
export const PersonalProjectCard = ({
  project,
  linkLabels,
  revealIndex = 0,
  className,
}: PersonalProjectCardProps) => {
  const reveal = useRevealOnScroll<HTMLElement>(revealIndex);
  const hasLiveDemo = Boolean(project.liveDemoUrl);
  const hasRepo = Boolean(project.githubUrl);

  return (
    <article
      className={cx('personal-project-card', reveal.className, className)}
      ref={reveal.ref}
      style={reveal.style}
    >
      {/* TODO: replace this slot with the real media — see mediaTodo in personalProjects.data.ts */}
      <div
        className={cx(
          'personal-project-card__media',
          `personal-project-card__media--${project.mediaAspect}`,
        )}
      >
        <span className="personal-project-card__media-badge">
          {MEDIA_TYPE_LABELS[project.mediaType]} PENDING
        </span>
        <p className="personal-project-card__media-todo">TODO: {project.mediaTodo}</p>
        {project.secondaryMediaTodo !== undefined && (
          <p className="personal-project-card__media-todo personal-project-card__media-todo--secondary">
            TODO: {project.secondaryMediaTodo}
          </p>
        )}
      </div>

      <header className="personal-project-card__header">
        <Heading level="h3" variant="card" className="personal-project-card__title">
          {project.title}
        </Heading>
        <p className="personal-project-card__domain">{project.domain}</p>
      </header>

      <Text variant="card" className="personal-project-card__pitch">
        {project.pitch}
      </Text>

      <TagList className="personal-project-card__stack" tags={project.stack} size="sm" />

      <BulletList className="personal-project-card__highlights" items={project.highlights} />

      <footer className="personal-project-card__actions">
        <Button
          variant="ghost"
          href={project.liveDemoUrl ?? ''}
          isExternal
          isDisabled={!hasLiveDemo}
        >
          {hasLiveDemo ? linkLabels.liveDemo : linkLabels.liveDemoPending}
        </Button>
        <Button variant="ghost" href={project.githubUrl ?? ''} isExternal isDisabled={!hasRepo}>
          {hasRepo ? linkLabels.github : linkLabels.githubPending}
        </Button>
      </footer>
    </article>
  );
};
