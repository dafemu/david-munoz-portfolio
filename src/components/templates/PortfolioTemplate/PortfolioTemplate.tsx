import type { ReactNode } from 'react';
import { PageBackdrop } from '@/components/atoms';
import './PortfolioTemplate.css';

export interface PortfolioTemplateProps {
  readonly header: ReactNode;
  readonly footer: ReactNode;
  readonly children: ReactNode;
}

/** Page shell: decorative backdrop plus the centred content column. */
export const PortfolioTemplate = ({ header, footer, children }: PortfolioTemplateProps) => (
  <div className="portfolio-template">
    <PageBackdrop />
    <div className="portfolio-template__container">
      {header}
      <main className="portfolio-template__main">{children}</main>
      {footer}
    </div>
  </div>
);
