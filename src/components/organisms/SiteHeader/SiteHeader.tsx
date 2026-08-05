import { useCallback, useEffect, useState } from 'react';
import { Logo, MenuToggle, ScrollProgressBar } from '@/components/atoms';
import { NavDrawer, NavMenu } from '@/components/molecules';
import { useActiveSection, useMediaQuery } from '@/hooks';
import type { NavigationItem, WithClassName } from '@/types';
import { COMPACT_NAV_QUERY, cx } from '@/utils';
import './SiteHeader.css';

/** Ties the toggle's aria-controls to the drawer it opens. */
const NAV_DRAWER_ID = 'site-nav-drawer';

const MENU_LABELS = {
  open: 'Open menu',
  close: 'Close menu',
  drawerTitle: 'Site navigation',
} as const;

export interface SiteHeaderProps extends WithClassName {
  readonly brandName: string;
  readonly heroSectionId: string;
  readonly navigation: readonly NavigationItem[];
  readonly contactLabel: string;
  readonly contactSectionId: string;
  /** Sections tracked by the scroll spy, in document order. */
  readonly trackedSectionIds: readonly string[];
}

export const SiteHeader = ({
  brandName,
  heroSectionId,
  navigation,
  contactLabel,
  contactSectionId,
  trackedSectionIds,
  className,
}: SiteHeaderProps) => {
  const activeSectionId = useActiveSection(trackedSectionIds);
  const isCompact = useMediaQuery(COMPACT_NAV_QUERY);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen((isOpen) => !isOpen), []);

  /* Growing past the breakpoint while the drawer is open would leave it
     stranded over a layout that already shows the full nav. */
  useEffect(() => {
    if (!isCompact) setIsMenuOpen(false);
  }, [isCompact]);

  return (
    <header className={cx('site-header', className)}>
      <ScrollProgressBar />
      <Logo name={brandName} href={`#${heroSectionId}`} />

      {isCompact ? (
        <>
          <MenuToggle
            isOpen={isMenuOpen}
            controls={NAV_DRAWER_ID}
            onToggle={toggleMenu}
            openLabel={MENU_LABELS.open}
            closeLabel={MENU_LABELS.close}
          />
          <NavDrawer
            id={NAV_DRAWER_ID}
            isOpen={isMenuOpen}
            items={navigation}
            activeSectionId={activeSectionId}
            contactLabel={contactLabel}
            contactSectionId={contactSectionId}
            title={MENU_LABELS.drawerTitle}
            onClose={closeMenu}
          />
        </>
      ) : (
        <NavMenu
          items={navigation}
          activeSectionId={activeSectionId}
          contactLabel={contactLabel}
          contactSectionId={contactSectionId}
        />
      )}
    </header>
  );
};
