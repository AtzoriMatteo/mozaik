/**
 * Short learning tips shown around the site. The point is the ones people
 * don't already know: how memory actually works, and patterns specific to
 * the language. Each tip says where it fits best.
 */

export type TipPlace = "home" | "course" | "review" | "read" | "listen" | "write";

export type LearningTip = {
  id: string;
  text: string;
  /** Where the tip is most useful; shown everywhere when left out. */
  places?: TipPlace[];
};

/** Tips that hold for any language. */
export const GENERAL_TIPS: readonly LearningTip[] = [
  {
    id: "guess-first",
    text: "Guess before you flip a card. Trying to recall a word, even if you get it wrong, makes it stick better than reading the answer again.",
    places: ["review", "home"],
  },
  {
    id: "hard-is-good",
    text: "A card you almost forgot is worth more than an easy one. That struggle is exactly when memory gets stronger, so a hard review isn't a failure.",
    places: ["review"],
  },
  {
    id: "out-loud",
    text: "Read under your breath. Words you have said, even in a whisper, are remembered better than words you only saw.",
    places: ["read", "course"],
  },
  {
    id: "chunks",
    text: "Learn chunks, not single words. A whole phrase like 'ik heb zin in…' (I feel like…) is ready to use; three loose words aren't.",
    places: ["review", "read"],
  },
  {
    id: "known-words",
    text: "Reading teaches you most when you already know about 95 words in 100. Much less than that and you're decoding, not reading.",
    places: ["read", "course"],
  },
  {
    id: "same-clip",
    text: "Play the same clip three times. First you catch words, then phrases, and by the third time you hear how the words run together.",
    places: ["listen"],
  },
  {
    id: "shadow-behind",
    text: "When you shadow, start a split second after the speaker, not at the same time. Copy the melody first; the sounds follow.",
    places: ["listen"],
  },
  {
    id: "inner-voice",
    text: "Describe what you're doing in your head while you cook or cycle. Where you get stuck shows you exactly which word to look up next.",
    places: ["home", "write"],
  },
  {
    id: "before-sleep",
    text: "A few minutes of review just before sleep works well: sleep helps fix what you practised last.",
    places: ["review", "home"],
  },
  {
    id: "phone-language",
    text: "Switch your phone to the language for a week. You already know where every button is, so the menus teach you words for free.",
    places: ["home", "course"],
  },
  {
    id: "same-language-subtitles",
    text: "Use subtitles in the language you're learning, not your own. You link each sound to how it's written, and that's half of listening.",
    places: ["listen", "home"],
  },
  {
    id: "write-what-you-know",
    text: "Write with the words you have. A short, correct text you can say out loud teaches more than a long one built with a translator.",
    places: ["write"],
  },
  {
    id: "stop-mid",
    text: "Stop while it's still going well. Ending a session mid-flow makes it easier to start the next one.",
    places: ["home", "course"],
  },
];

/** The tips for one place: the pack's own first, then general ones. */
export function tipsFor(place: TipPlace, packTips: readonly LearningTip[] = []): LearningTip[] {
  const fits = (t: LearningTip) => !t.places || t.places.includes(place);
  return [...packTips.filter(fits), ...GENERAL_TIPS.filter(fits)];
}

/** A stable pick for a given day and place; `offset` moves to the next one. */
export function pickTip(tips: readonly LearningTip[], day: number, place: TipPlace, offset = 0): LearningTip | null {
  if (tips.length === 0) return null;
  let h = 0;
  for (const c of place) h = (h * 31 + c.charCodeAt(0)) % 997;
  return tips[(day + h + offset) % tips.length];
}
