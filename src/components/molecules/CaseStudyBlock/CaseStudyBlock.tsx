import type { ReactNode } from 'react';
import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './CaseStudyBlock.css';

export interface CaseStudyBlockProps extends WithClassName {
  readonly label: string;
  /** Any content: a paragraph, a bullet list, or something added later. */
  readonly children: ReactNode;
}

/** A labelled section inside a case study card. */
export const CaseStudyBlock = ({ label, children, className }: CaseStudyBlockProps) => (
  <div className={cx('case-study-block', className)}>
    <p className="case-study-block__label">{label}</p>
    <div className="case-study-block__content">{children}</div>
  </div>
);
