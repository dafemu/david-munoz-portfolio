import type { CSSProperties } from 'react';
import { useMediaQuery, useTypedSequence } from '@/hooks';
import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import { BlockCursor } from '../BlockCursor';
import './TypedLines.css';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export interface TypedLinesProps extends WithClassName {
  readonly lines: readonly string[];
  /** Read out to assistive tech in place of the animated characters. */
  readonly label: string;
}

/**
 * Types a block of lines out on mount.
 *
 * The animated characters are hidden from assistive tech and the full text is
 * exposed once, as a single string — a caret walking through a live region
 * would be read letter by letter. Every line is in the DOM from the first
 * frame, so the block reserves its full height and nothing below it shifts.
 */
export const TypedLines = ({ lines, label, className }: TypedLinesProps) => {
  const prefersReducedMotion = useMediaQuery(REDUCED_MOTION_QUERY);
  const { typedLines, caretLineIndex, isComplete } = useTypedSequence(lines, !prefersReducedMotion);

  return (
    <p
      className={cx('typed-lines', className)}
      style={{ '--typed-line-count': lines.length } as CSSProperties}
    >
      <span className="typed-lines__label">{label}</span>
      <span aria-hidden="true">
        {typedLines.map((typed, index) => (
          <span
            className={cx(
              'typed-lines__line',
              /* Everything after the first line hangs off it as a branch. */
              index > 0 && 'typed-lines__line--branch',
              typed.length === 0 && 'typed-lines__line--pending',
            )}
            key={lines[index]}
          >
            {typed}
            {index === caretLineIndex && <BlockCursor isBlinking={isComplete} />}
          </span>
        ))}
      </span>
    </p>
  );
};
