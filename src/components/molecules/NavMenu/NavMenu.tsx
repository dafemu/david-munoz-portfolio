import { Button, NavLink } from '@/components/atoms';
import type { NavigationItem, WithClassName } from '@/types';
import { cx } from '@/utils';
import './NavMenu.css';

export interface NavMenuProps extends WithClassName {
  readonly items: readonly NavigationItem[];
  readonly activeSectionId: string | null;
  readonly contactLabel: string;
  readonly contactSectionId: string;
}

export const NavMenu = ({
  items,
  activeSectionId,
  contactLabel,
  contactSectionId,
  className,
}: NavMenuProps) => (
  <nav className={cx('nav-menu', className)}>
    {items.map((item) => (
      <NavLink
        key={item.sectionId}
        href={`#${item.sectionId}`}
        label={item.label}
        isActive={activeSectionId === item.sectionId}
      />
    ))}
    <Button href={`#${contactSectionId}`} variant="nav">
      {contactLabel}
    </Button>
  </nav>
);
