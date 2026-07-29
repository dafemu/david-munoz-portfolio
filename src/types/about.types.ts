/** One of the three capability cards in the About section. */
export interface Highlight {
  readonly id: string;
  readonly label: string;
  readonly description: string;
}

export interface AboutContent {
  readonly statement: string;
  readonly bio: string;
  readonly highlights: readonly Highlight[];
}
