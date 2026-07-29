import { SectionLabel, Text } from '@/components/atoms';
import { AdditionalEngagementList } from '@/components/molecules';
import { CaseStudyCard } from '@/components/organisms/CaseStudyCard';
import type {
  AdditionalEngagementsContent,
  CaseStudy,
  CaseStudyBlockLabels,
  Throughline,
  WithClassName,
} from '@/types';
import { cx } from '@/utils';
import './ProjectsSection.css';

export interface ProjectsSectionProps extends WithClassName {
  readonly sectionId: string;
  readonly label: string;
  readonly throughline: Throughline;
  readonly caseStudies: readonly CaseStudy[];
  readonly blockLabels: CaseStudyBlockLabels;
  readonly additionalEngagements: AdditionalEngagementsContent;
}

export const ProjectsSection = ({
  sectionId,
  label,
  throughline,
  caseStudies,
  blockLabels,
  additionalEngagements,
  className,
}: ProjectsSectionProps) => (
  <section className={cx('projects', className)} id={sectionId}>
    <SectionLabel className="projects__label">{label}</SectionLabel>
    <div className="projects__content">
      <Text variant="body" className="projects__throughline">
        {throughline.before}
        <strong className="projects__throughline-highlight">{throughline.highlight}</strong>
        {throughline.after}
      </Text>
      <div className="projects__list">
        {caseStudies.map((caseStudy, index) => (
          <CaseStudyCard
            key={caseStudy.id}
            caseStudy={caseStudy}
            blockLabels={blockLabels}
            revealIndex={index}
          />
        ))}
      </div>
      <AdditionalEngagementList content={additionalEngagements} />
    </div>
  </section>
);
