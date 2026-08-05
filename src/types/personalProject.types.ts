/** How a personal project is best shown — drives the media slot's shape and label. */
export type PersonalProjectMediaType = 'gif' | 'screenshot' | 'video';

/** Frame proportion of the media slot: browser-shaped or phone-shaped. */
export type PersonalProjectMediaAspect = 'wide' | 'portrait';

/** A self-directed project shown in the Personal Projects section. */
export interface PersonalProject {
  readonly id: string;
  readonly title: string;
  /** Field the project lives in, e.g. "EdTech". */
  readonly domain: string;
  readonly stack: readonly string[];
  /** One or two lines: what it is, at a glance. */
  readonly pitch: string;
  readonly highlights: readonly string[];
  /** Empty until the project is deployed; the card renders a disabled button. */
  readonly liveDemoUrl?: string;
  /** Empty until the repository is public; the card renders a disabled button. */
  readonly githubUrl?: string;
  readonly mediaType: PersonalProjectMediaType;
  readonly mediaAspect: PersonalProjectMediaAspect;
  /**
   * Working note describing the capture still owed. Never rendered — it is a
   * reminder for whoever records the media, not copy for the visitor.
   */
  readonly mediaTodo: string;
  /** Second capture for projects whose story needs two frames (see Vebt's widget). */
  readonly secondaryMediaTodo?: string;
}

/** Heading and disclaimer that separate this section from the client case studies. */
export interface PersonalProjectsIntro {
  readonly heading: string;
  readonly note: string;
}

/** Button copy, kept out of the component so wording stays with the content layer. */
export interface PersonalProjectLinkLabels {
  readonly liveDemo: string;
  readonly liveDemoPending: string;
  readonly github: string;
  readonly githubPending: string;
}
