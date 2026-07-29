/** Shared primitives reused across component prop interfaces. */

/** Every presentational component accepts a className so parents can position it. */
export interface WithClassName {
  readonly className?: string;
}

/** Anchors that leave the site open in a new tab with safe rel attributes. */
export type LinkTarget = '_self' | '_blank';
