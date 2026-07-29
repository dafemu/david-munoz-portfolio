import { Heading, SectionLabel, Text } from '@/components/atoms';
import { HighlightCard } from '@/components/molecules';
import { useRevealOnScroll } from '@/hooks';
import type { AboutContent, WithClassName } from '@/types';
import { cx } from '@/utils';
import './AboutSection.css';

export interface AboutSectionProps extends WithClassName {
  readonly sectionId: string;
  readonly label: string;
  readonly content: AboutContent;
}

export const AboutSection = ({ sectionId, label, content, className }: AboutSectionProps) => {
  const reveal = useRevealOnScroll<HTMLDivElement>(1);

  return (
    <section className={cx('about', className)} id={sectionId}>
      <SectionLabel className="about__label">{label}</SectionLabel>
      <div
        className={cx('about__content', reveal.className)}
        ref={reveal.ref}
        style={reveal.style}
      >
        <Heading level="h3" variant="statement">
          {content.statement}
        </Heading>
        <Text variant="body">{content.bio}</Text>
        <div className="about__highlights">
          {content.highlights.map((highlight, index) => (
            <HighlightCard key={highlight.id} highlight={highlight} revealIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
