/** A single role in the career timeline. */
export interface ExperienceEntry {
  readonly id: string;
  readonly period: string;
  readonly role: string;
  readonly company: string;
  readonly blurb: string;
  readonly tags: readonly string[];
  /** Marks the live role — its node on the timeline is the only lit one. */
  readonly isCurrent?: boolean;
}

export interface ResumeLink {
  readonly label: string;
  readonly href: string;
}
