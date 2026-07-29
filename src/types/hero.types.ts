/** A call-to-action rendered in the hero. */
export interface HeroAction {
  readonly label: string;
  readonly href: string;
  readonly variant: 'primary' | 'outline';
}

/** A single headline metric. `value` is optional because some stats are computed. */
export interface HeroStat {
  readonly id: string;
  readonly value?: string;
  readonly label: string;
}

export interface ProfilePhoto {
  readonly src: string;
  readonly alt: string;
}

export interface HeroContent {
  readonly availabilityLabel: string;
  /** Name split into the two lines of the original headline. */
  readonly nameLines: readonly [string, string];
  /** Intro copy split around the highlighted experience figure. */
  readonly introBefore: string;
  readonly introAfter: string;
  readonly actions: readonly HeroAction[];
  readonly photo: ProfilePhoto;
  readonly locationLabel: string;
}
