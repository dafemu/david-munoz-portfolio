import { useRevealOnScroll } from '@/hooks';
import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './SectionLabel.css';

export interface SectionLabelProps extends WithClassName {
  readonly children: string;
  /** Renders as a heading by default; `div` for sections with their own h2. */
  readonly as?: 'h2' | 'div';
  readonly isSticky?: boolean;
}

export const SectionLabel = ({
  children,
  as: Tag = 'h2',
  isSticky = false,
  className,
}: SectionLabelProps) => {
  const reveal = useRevealOnScroll<HTMLHeadingElement>(0);

  return (
    <Tag
      className={cx('section-label', isSticky && 'section-label--sticky', reveal.className, className)}
      ref={reveal.ref}
      style={reveal.style}
    >
      {children}
    </Tag>
  );
};
