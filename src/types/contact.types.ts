/** A secondary contact channel rendered as a pill link. */
export interface ContactChannel {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly external: boolean;
}

export interface ContactContent {
  readonly headline: string;
  readonly description: string;
  readonly email: string;
  readonly channels: readonly ContactChannel[];
}
