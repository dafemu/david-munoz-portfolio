/** A portfolio project card. */
export interface Project {
  readonly id: string;
  readonly name: string;
  readonly year: string;
  readonly href: string;
  /** Placeholder caption shown in the 16:10 thumbnail slot. */
  readonly shotLabel: string;
  readonly blurb: string;
  readonly tags: readonly string[];
  readonly action: string;
}
