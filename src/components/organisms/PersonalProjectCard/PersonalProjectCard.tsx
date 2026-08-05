import { BulletList, Button, Heading, Text } from '@/components/atoms';
import { TagList } from '@/components/molecules';
import { useRevealOnScroll } from '@/hooks';
import type { PersonalProject, PersonalProjectLinkLabels, WithClassName } from '@/types';
import { cx } from '@/utils';
import './PersonalProjectCard.css';

/**
 * Placeholder wording for the media slot. The capture notes themselves live in
 * `mediaTodo` and stay out of the DOM — they are working notes, not content a
 * visitor should read.
 */
const MEDIA_PLACEHOLDER_LABELS = {
  gif: 'Walkthrough',
  screenshot: 'Preview',
  video: 'Walkthrough',
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
      {/* Reserves the exact space the real capture will take — see mediaTodo
          in personalProjects.data.ts for what each project still needs. */}
      <div
        className={cx(
          'personal-project-card__media',
          `personal-project-card__media--${project.mediaAspect}`,
        )}
        role="img"
        aria-label={`${MEDIA_PLACEHOLDER_LABELS[project.mediaType]} of ${project.title} — coming soon`}
      >
        <span className="personal-project-card__media-mark" aria-hidden="true">
          {project.title}
        </span>
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
