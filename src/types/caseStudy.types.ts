/** A detailed professional case study shown in the Projects section. */
export interface CaseStudy {
  readonly id: string;
  /** Two-digit sequence label, e.g. "01". */
  readonly order: string;
  readonly title: string;
  readonly sector: string;
  readonly stack: readonly string[];
  readonly challenge: string;
  readonly approach: readonly string[];
  readonly outcome: string;
}

/** A shorter engagement listed under "Also worth knowing". */
export interface AdditionalEngagement {
  readonly id: string;
  readonly title: string;
  /** Domain and stack summary, e.g. "Healthcare, Vue.js + AWS". */
  readonly context: string;
  readonly description: string;
}

export interface AdditionalEngagementsContent {
  readonly heading: string;
  readonly intro: string;
  readonly items: readonly AdditionalEngagement[];
}

/** Narrative intro, split around the emphasised phrase. */
export interface Throughline {
  readonly before: string;
  readonly highlight: string;
  readonly after: string;
}

/** Headings for the three blocks inside every case study card. */
export interface CaseStudyBlockLabels {
  readonly challenge: string;
  readonly approach: string;
  readonly outcome: string;
}
