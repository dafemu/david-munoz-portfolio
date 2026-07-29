import { BulletList, Heading, Text } from '@/components/atoms';
import { CaseStudyBlock, TagList } from '@/components/molecules';
import { useRevealOnScroll } from '@/hooks';
import type { CaseStudy, CaseStudyBlockLabels, WithClassName } from '@/types';
import { cx } from '@/utils';
import './CaseStudyCard.css';

export interface CaseStudyCardProps extends WithClassName {
  readonly caseStudy: CaseStudy;
  readonly blockLabels: CaseStudyBlockLabels;
  readonly revealIndex?: number;
}

export const CaseStudyCard = ({
  caseStudy,
  blockLabels,
  revealIndex = 0,
  className,
}: CaseStudyCardProps) => {
  const reveal = useRevealOnScroll<HTMLElement>(revealIndex);

  return (
    <article
      className={cx('case-study-card', reveal.className, className)}
      ref={reveal.ref}
      style={reveal.style}
    >
      <header className="case-study-card__header">
        <span className="case-study-card__order">{caseStudy.order}</span>
        <Heading level="h3" variant="role" className="case-study-card__title">
          {caseStudy.title}
        </Heading>
        <p className="case-study-card__sector">{caseStudy.sector}</p>
      </header>

      <TagList className="case-study-card__stack" tags={caseStudy.stack} size="sm" />

      <div className="case-study-card__blocks">
        <CaseStudyBlock label={blockLabels.challenge}>
          <Text variant="card">{caseStudy.challenge}</Text>
        </CaseStudyBlock>
        <CaseStudyBlock label={blockLabels.approach}>
          <BulletList items={caseStudy.approach} />
        </CaseStudyBlock>
        <CaseStudyBlock label={blockLabels.outcome} className="case-study-card__outcome">
          <Text variant="card">{caseStudy.outcome}</Text>
        </CaseStudyBlock>
      </div>
    </article>
  );
};
