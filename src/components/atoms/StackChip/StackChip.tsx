import type { WithClassName } from '@/types';
import { cx } from '@/utils';
import './StackChip.css';

export interface StackChipProps extends WithClassName {
  readonly children: string;
}

export const StackChip = ({ children, className }: StackChipProps) => (
  <span className={cx('stack-chip', className)}>{children}</span>
);
