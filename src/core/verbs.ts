/**
 * Verb tables: every tense of a verb, for the Handbook. Language packs supply
 * a `conjugate` function; the core only defines the shape.
 */

export type Person = { person: string; form: string };

export type Tense = {
  id: string;
  /** The tense's name in the language, e.g. "onvoltooid tegenwoordige tijd". */
  name: string;
  /** Plain English name, e.g. "Present". */
  english: string;
  /** When you use it, in one line. */
  use: string;
  forms: Person[];
};

export type VerbTables = {
  infinitive: string;
  /** Short English meaning, when the pack knows it. */
  meaning?: string;
  /** The helper for the perfect tenses, e.g. "hebben", "zijn" or "hebben / zijn". */
  auxiliary: string;
  participle: string;
  presentParticiple: string;
  /** Imperative forms: informal and polite. */
  imperative: { informal: string; polite: string };
  tenses: Tense[];
  /** Separable part (op in opbellen), when the verb splits. */
  separable?: string;
  reflexive: boolean;
  /** True when the verb has irregular forms. */
  irregular: boolean;
  /** False when the verb isn't in the pack's list and was conjugated by the regular rules. */
  known: boolean;
  /** Short notes for the learner (spelling changes, choice of helper, …). */
  notes: string[];
};
