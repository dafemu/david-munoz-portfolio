/** A single entry in the header navigation. */
export interface NavigationItem {
  /** DOM id of the section this item points to, without the leading hash. */
  readonly sectionId: string;
  /** Rendered label, e.g. "01 / about". */
  readonly label: string;
}

/** Site-wide identity and structural configuration. */
export interface SiteConfig {
  readonly brandName: string;
  readonly navigation: readonly NavigationItem[];
  readonly contactNavLabel: string;
  readonly skipLinkLabel: string;
  readonly heroSectionId: string;
  readonly footer: FooterConfig;
  readonly features: FeatureFlags;
}

export interface FooterConfig {
  readonly copyright: string;
  readonly credit: string;
}

/** Content toggles that mirror the original component props. */
export interface FeatureFlags {
  readonly showAvailability: boolean;
  readonly showStats: boolean;
}
