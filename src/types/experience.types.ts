/** A single role in the career timeline. */
export interface ExperienceEntry {
  readonly id: string;
  readonly period: string;
  readonly role: string;
  readonly company: string;
  readonly blurb: string;
  readonly tags: readonly string[];
}

export interface ResumeLink {
  readonly label: string;
  readonly href: string;
}
