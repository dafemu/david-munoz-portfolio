import { Heading, Text, TypedLines } from '@/components/atoms';
import { AvailabilityBadge, HeroActions, ProfileCard, StatList } from '@/components/molecules';
import type { HeroContent, HeroStat, WithClassName } from '@/types';
import { cx } from '@/utils';
import './HeroSection.css';

export interface HeroSectionProps extends WithClassName {
  readonly sectionId: string;
  readonly content: HeroContent;
  /** Rendered inside the intro copy, e.g. "8+ years". */
  readonly experienceHighlight: string;
  readonly stats: readonly HeroStat[];
  readonly showAvailability: boolean;
  readonly showStats: boolean;
}

export const HeroSection = ({
  sectionId,
  content,
  experienceHighlight,
  stats,
  showAvailability,
  showStats,
  className,
}: HeroSectionProps) => (
  <section className={cx('hero', className)} id={sectionId}>
    <div className="hero__intro">
      {showAvailability && <AvailabilityBadge label={content.availabilityLabel} />}
      <Heading level="h1" variant="display">
        {content.nameLines[0]}
        <br />
        {content.nameLines[1]}
      </Heading>
      <TypedLines
        className="hero__role"
        lines={content.roleLines}
        label={content.roleLines.join('. ')}
      />
      <Text variant="lead">
        {content.introBefore}
        <strong className="hero__highlight">{experienceHighlight}</strong>
        {content.introAfter}
      </Text>
      <HeroActions actions={content.actions} />
      {showStats && <StatList stats={stats} />}
    </div>
    <ProfileCard photo={content.photo} locationLabel={content.locationLabel} />
  </section>
);
