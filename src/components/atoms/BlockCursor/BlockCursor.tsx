import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './BlockCursor.css';

export interface BlockCursorProps extends WithClassName {
  /** Blinks when idle; sits solid while text is actively being typed. */
  readonly isBlinking?: boolean;
}

/**
 * The site's recurring mark: after the logo, on the hero's typed lines, beside
 * the location. Drawn as a box rather than set as the "▍" glyph so it never
 * depends on a font shipping that character.
 */
export const BlockCursor = ({ isBlinking = true, className }: BlockCursorProps) => (
  <span
    className={cx('block-cursor', isBlinking && 'block-cursor--blinking', className)}
    aria-hidden="true"
  />
);
