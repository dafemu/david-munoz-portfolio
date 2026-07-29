import { Text } from '@/components/atoms';
import { useRevealOnScroll } from '@/hooks';
import type { AdditionalEngagementsContent, WithClassName } from '@/types';
import { cx } from '@/utils';
import './AdditionalEngagementList.css';

export interface AdditionalEngagementListProps extends WithClassName {
  readonly content: AdditionalEngagementsContent;
  readonly revealIndex?: number;
}

/** Compact list of secondary engagements — deliberately lower hierarchy than the cards. */
export const AdditionalEngagementList = ({
  content,
  revealIndex = 0,
  className,
}: AdditionalEngagementListProps) => {
  const reveal = useRevealOnScroll<HTMLDivElement>(revealIndex);

  return (
    <div
      className={cx('additional-engagements', reveal.className, className)}
      ref={reveal.ref}
      style={reveal.style}
    >
      <h3 className="additional-engagements__heading">{content.heading}</h3>
      <Text variant="note">{content.intro}</Text>
      <ul className="additional-engagements__list">
        {content.items.map((item) => (
          <li className="additional-engagements__item" key={item.id}>
            <p className="additional-engagements__title">
              {item.title}
              <span className="additional-engagements__context">{item.context}</span>
            </p>
            <p className="additional-engagements__description">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
