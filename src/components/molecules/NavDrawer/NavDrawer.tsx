import { useEffect } from 'react';
import type { CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/atoms';
import { useFocusTrap } from '@/hooks';
import type { NavigationItem, WithClassName } from '@/types';
import { cx } from '@/utils';
import './NavDrawer.css';

export interface NavDrawerProps extends WithClassName {
  /** Must match the `aria-controls` of the button that opens this drawer. */
  readonly id: string;
  readonly isOpen: boolean;
  readonly items: readonly NavigationItem[];
  readonly activeSectionId: string | null;
  readonly contactLabel: string;
  readonly contactSectionId: string;
  readonly title: string;
  readonly onClose: () => void;
}

/**
 * Compact-viewport navigation. Stays mounted so it can animate both ways, and
 * is made `inert` while closed so its links never sit invisibly in the tab
 * order — the reason the desktop nav is swapped out rather than hidden.
 *
 * Rendered through a portal because the header it belongs to has a
 * `backdrop-filter`, and that makes the header a containing block for fixed
 * descendants: left in place, the drawer would size and position itself
 * against the header rather than the viewport.
 */
export const NavDrawer = ({
  id,
  isOpen,
  items,
  activeSectionId,
  contactLabel,
  contactSectionId,
  title,
  onClose,
  className,
}: NavDrawerProps) => {
  const panelRef = useFocusTrap<HTMLDivElement>(isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') onClose();
    };

    /* Locking the body keeps the page behind the overlay from scrolling. */
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return createPortal(
    <div className={cx('nav-drawer', isOpen && 'nav-drawer--open', className)} inert={!isOpen}>
      <div className="nav-drawer__overlay" onClick={onClose} aria-hidden="true" />
      <div
        className="nav-drawer__panel"
        id={id}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <nav className="nav-drawer__nav">
          {items.map((item, index) => (
            <a
              key={item.sectionId}
              className={cx(
                'nav-drawer__link',
                activeSectionId === item.sectionId && 'nav-drawer__link--active',
              )}
              href={`#${item.sectionId}`}
              aria-current={activeSectionId === item.sectionId ? 'true' : undefined}
              onClick={onClose}
              style={{ '--drawer-index': index } as CSSProperties}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-drawer__cta" style={{ '--drawer-index': items.length } as CSSProperties}>
          <Button href={`#${contactSectionId}`} variant="nav" onClick={onClose}>
            {contactLabel}
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
};
