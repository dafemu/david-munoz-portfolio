import type { FooterConfig, WithClassName } from '@/types';
import { cx } from '@/utils';
import './SiteFooter.css';

export interface SiteFooterProps extends WithClassName {
  readonly config: FooterConfig;
}

export const SiteFooter = ({ config, className }: SiteFooterProps) => (
  <footer className={cx('site-footer', className)}>
    <span>{config.copyright}</span>
    <span>{config.credit}</span>
  </footer>
);
