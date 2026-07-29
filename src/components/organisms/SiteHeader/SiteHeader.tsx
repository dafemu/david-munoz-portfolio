import { Logo, ScrollProgressBar } from '@/components/atoms';
import { NavMenu } from '@/components/molecules';
import { useActiveSection, useScrollProgress } from '@/hooks';
import type { NavigationItem, WithClassName } from '@/types';
import { cx } from '@/utils';
import './SiteHeader.css';

export interface SiteHeaderProps extends WithClassName {
  readonly brandName: string;
  readonly brandSuffix: string;
  readonly heroSectionId: string;
  readonly navigation: readonly NavigationItem[];
  readonly contactLabel: string;
  readonly contactSectionId: string;
  /** Sections tracked by the scroll spy, in document order. */
  readonly trackedSectionIds: readonly string[];
}

export const SiteHeader = ({
  brandName,
  brandSuffix,
  heroSectionId,
  navigation,
  contactLabel,
  contactSectionId,
  trackedSectionIds,
  className,
}: SiteHeaderProps) => {
  const scrollProgress = useScrollProgress();
  const activeSectionId = useActiveSection(trackedSectionIds);

  return (
    <header className={cx('site-header', className)}>
      <ScrollProgressBar progress={scrollProgress} />
      <Logo name={brandName} suffix={brandSuffix} href={`#${heroSectionId}`} />
      <NavMenu
        items={navigation}
        activeSectionId={activeSectionId}
        contactLabel={contactLabel}
        contactSectionId={contactSectionId}
      />
    </header>
  );
};
