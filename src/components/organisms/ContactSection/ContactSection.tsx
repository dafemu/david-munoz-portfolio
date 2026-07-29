import { Heading, SectionLabel, Text } from '@/components/atoms';
import { ContactChannels } from '@/components/molecules';
import { useRevealOnScroll } from '@/hooks';
import type { ContactContent, WithClassName } from '@/types';
import { cx } from '@/utils';
import './ContactSection.css';

export interface ContactSectionProps extends WithClassName {
  readonly sectionId: string;
  readonly label: string;
  readonly content: ContactContent;
}

export const ContactSection = ({ sectionId, label, content, className }: ContactSectionProps) => {
  const reveal = useRevealOnScroll<HTMLDivElement>(1);

  return (
    <section className={cx('contact', className)} id={sectionId}>
      <SectionLabel as="div" className="contact__label">
        {label}
      </SectionLabel>
      <div className={cx('contact__body', reveal.className)} ref={reveal.ref} style={reveal.style}>
        <Heading level="h2" variant="display-sm" className="contact__headline">
          {content.headline}
        </Heading>
        <Text variant="contact" className="contact__description">
          {content.description}
        </Text>
        <a className="contact__email" href={`mailto:${content.email}`}>
          {content.email}
        </a>
        <ContactChannels channels={content.channels} />
      </div>
    </section>
  );
};
