import type { ReactNode } from 'react';
import { PageBackdrop } from '@/components/atoms';
import './PortfolioTemplate.css';

const MAIN_ID = 'main-content';

export interface PortfolioTemplateProps {
  readonly header: ReactNode;
  readonly footer: ReactNode;
  readonly children: ReactNode;
  readonly skipLinkLabel: string;
}

/** Page shell: decorative backdrop plus the centred content column. */
export const PortfolioTemplate = ({
  header,
  footer,
  children,
  skipLinkLabel,
}: PortfolioTemplateProps) => (
  <div className="portfolio-template">
    <a className="skip-link" href={`#${MAIN_ID}`}>
      {skipLinkLabel}
    </a>
    <PageBackdrop />
    <div className="portfolio-template__container">
      {header}
      {/* tabIndex -1 so the skip link can actually move focus here, not just scroll. */}
      <main className="portfolio-template__main" id={MAIN_ID} tabIndex={-1}>
        {children}
      </main>
      {footer}
    </div>
  </div>
);
