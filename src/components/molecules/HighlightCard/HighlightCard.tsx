import { Text } from '@/components/atoms';
import { useRevealOnScroll } from '@/hooks';
import type { Highlight, WithClassName } from '@/types';
import { cx } from '@/utils';
import './HighlightCard.css';

export interface HighlightCardProps extends WithClassName {
  readonly highlight: Highlight;
  readonly revealIndex?: number;
}

export const HighlightCard = ({ highlight, revealIndex = 0, className }: HighlightCardProps) => {
  const reveal = useRevealOnScroll<HTMLDivElement>(revealIndex);

  return (
    <div
      className={cx('highlight-card', reveal.className, className)}
      ref={reveal.ref}
      style={reveal.style}
    >
      <p className="highlight-card__label">{highlight.label}</p>
      <Text variant="card">{highlight.description}</Text>
    </div>
  );
};
