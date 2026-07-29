import { Button } from '@/components/atoms';
import type { HeroAction, WithClassName } from '@/types';
import { cx } from '@/utils';
import './HeroActions.css';

export interface HeroActionsProps extends WithClassName {
  readonly actions: readonly HeroAction[];
}

export const HeroActions = ({ actions, className }: HeroActionsProps) => (
  <div className={cx('hero-actions', className)}>
    {actions.map((action) => (
      <Button key={action.label} href={action.href} variant={action.variant}>
        {action.label}
      </Button>
    ))}
  </div>
);
