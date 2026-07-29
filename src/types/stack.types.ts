/** A labelled cluster of technologies in the Stack section. */
export interface StackGroup {
  readonly id: string;
  readonly label: string;
  readonly items: readonly string[];
}
