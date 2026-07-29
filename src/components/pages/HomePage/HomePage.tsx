import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SiteFooter,
  SiteHeader,
  StackSection,
} from '@/components/organisms';
import { PortfolioTemplate } from '@/components/templates';
import {
  ABOUT_CONTENT,
  ADDITIONAL_ENGAGEMENTS,
  CASE_STUDIES,
  CASE_STUDIES_THROUGHLINE,
  CASE_STUDY_BLOCK_LABELS,
  CONTACT_CONTENT,
  EXPERIENCE_ENTRIES,
  HERO_CONTENT,
  RESUME_LINK,
  SITE_CONFIG,
  STACK_GROUPS,
  TRACKED_SECTION_IDS,
} from '@/data';
import { useHeroStats, useYearsOfExperience } from '@/hooks';

const CONTACT_SECTION_ID = 'contact';

/** Section headings, kept beside the page that composes them. */
const SECTION_LABELS = {
  about: '01 / ABOUT',
  experience: '02 / EXPERIENCE',
  projects: '03 / PROJECTS',
  stack: '04 / STACK',
  contact: '05 / CONTACT',
} as const;

/** The only place where content sources meet presentation components. */
export const HomePage = () => {
  const yearsOfExperience = useYearsOfExperience();
  const heroStats = useHeroStats();

  return (
    <PortfolioTemplate
      header={
        <SiteHeader
          brandName={SITE_CONFIG.brandName}
          brandSuffix={SITE_CONFIG.brandSuffix}
          heroSectionId={SITE_CONFIG.heroSectionId}
          navigation={SITE_CONFIG.navigation}
          contactLabel={SITE_CONFIG.contactNavLabel}
          contactSectionId={CONTACT_SECTION_ID}
          trackedSectionIds={TRACKED_SECTION_IDS}
        />
      }
      footer={<SiteFooter config={SITE_CONFIG.footer} />}
    >
      <HeroSection
        sectionId={SITE_CONFIG.heroSectionId}
        content={HERO_CONTENT}
        experienceHighlight={`${yearsOfExperience}+ years`}
        stats={heroStats}
        showAvailability={SITE_CONFIG.features.showAvailability}
        showStats={SITE_CONFIG.features.showStats}
      />
      <AboutSection sectionId="about" label={SECTION_LABELS.about} content={ABOUT_CONTENT} />
      <ExperienceSection
        sectionId="experience"
        label={SECTION_LABELS.experience}
        entries={EXPERIENCE_ENTRIES}
        resume={RESUME_LINK}
      />
      <ProjectsSection
        sectionId="projects"
        label={SECTION_LABELS.projects}
        throughline={CASE_STUDIES_THROUGHLINE}
        caseStudies={CASE_STUDIES}
        blockLabels={CASE_STUDY_BLOCK_LABELS}
        additionalEngagements={ADDITIONAL_ENGAGEMENTS}
      />
      <StackSection sectionId="stack" label={SECTION_LABELS.stack} groups={STACK_GROUPS} />
      <ContactSection
        sectionId={CONTACT_SECTION_ID}
        label={SECTION_LABELS.contact}
        content={CONTACT_CONTENT}
      />
    </PortfolioTemplate>
  );
};
