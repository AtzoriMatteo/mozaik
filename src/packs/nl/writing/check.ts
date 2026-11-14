import type { Lexicon } from "@/core/content";
import type { Token } from "@/core/language-pack";
import type { WritingIssue } from "@/core/writing";
import {
  ADJECTIVES, ADJECTIVES_E, NON_PRESENT, COMPARATIVES, COMPARE, DAYS, DE_NOUNS, HEBBEN, HEBBEN_FORMS, HET_NOUNS,
  IRREGULAR_VERBS, isNumberWord, MONTHS, QUESTION_WORDS, SLOT_ONE_WORDS, SUBJECTS, ZIJN, ZIJN_FORMS,
} from "./data";

/**
 * Grammar checks for A1 Dutch writing. Each rule targets a mistake learners
 * really make (many from English, Italian or Spanish habits) and links to
 * the lesson that explains it. Rules stay quiet when unsure: a missed
 * mistake is better than a wrong correction.
 */

type W = { text: string; norm: string; start: number; end: number };
/** A clause: words, and whether it starts a new sentence (not just after a colon). */
type Clause = W[] & { afterColon?: boolean };

const CONJUNCTIONS = new Set(["en", "maar", "of", "want"]);
const DETERMINERS = new Set(["de", "het", "deze", "dit", "die", "dat", "mijn", "jouw", "je", "zijn", "haar", "ons", "onze", "hun", "uw", "elke"]);
const PEOPLE = new Set(["ik", "jij", "je", "u", "hij", "zij", "ze", "wij", "we", "jullie"]);
const TO_ZIJN: Record<string, string> = { heb: "ben", hebt: "bent", heeft: "is", hebben: "zijn" };
const TO_HEBBEN: Record<string, string> = { ben: "heb", bent: "hebt", is: "heeft", zijn: "hebben" };

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const keepCase = (original: string, replacement: string) =>
  /^\p{Lu}/u.test(original) ? cap(replacement) : replacement;

function sentences(tokens: Token[]): Clause[] {
  const out: Clause[] = [[]];
  let pos = 0;
  for (const t of tokens) {
    const start = pos;
    pos += t.text.length;
    if (t.kind === "word") out[out.length - 1].push({ text: t.text, norm: t.normalized, start, end: pos });
    else if (t.kind === "punctuation" && /[.!?:;]/.test(t.text)) {
      const next: Clause = [];
      if (/[:;]/.test(t.text)) next.afterColon = true;
      out.push(next);
    }
  }
  return out.filter((s) => s.length > 0);
}

export function makeChecker(lexicon: Lexicon, tokenize: (text: string) => Token[]) {
  const base = (w: string) => lexicon[w]?.base?.toLowerCase();
  /** Is `form` a form of the verb `inf` (or the infinitive itself)? */
  const formOf = (form: string, inf: string) => form === inf || base(form) === inf;
  const isVerbInf = (b: string | undefined) => !!b && /(en|n)$/.test(b) && b.length > 2;
  const finiteVerb = (w: string) =>
    IRREGULAR_VERBS.has(w) ||
    (isVerbInf(base(w)) && base(w) !== w && !w.endsWith("en") && w !== `${base(w)}s` && !/^ge/.test(w));
  // -je words are diminutives (het-words), except adjective forms like vrije, blije.
  const isDiminutive = (w: string) => w.endsWith("je") && !!lexicon[w] && !ADJECTIVES_E.has(w);
  const isNoun = (w: string) => HET_NOUNS.has(w) || DE_NOUNS.has(w) || isDiminutive(w);
  const isHet = (w: string) => HET_NOUNS.has(w) || (isDiminutive(w) && !DE_NOUNS.has(w));
  /** Simple past or a participle: werkte, praatten, vond, besteld. Agreement is a present-tense rule. */
  const isPast = (w: string) =>
    NON_PRESENT.has(w) || (/(de|te|den|ten)$/.test(w) && isVerbInf(base(w)) && base(w) !== w);
  const isNumber = (w: string) => /^\d+$/.test(w) || isNumberWord(w);
  const comparative = (adj: string) =>
    COMPARE[adj] ?? (adj.endsWith("r") ? `${adj}der` : `${(ADJECTIVES[adj] ?? adj).replace(/e$/, "")}er`);

  /** The right finite form of a regular verb for a person, from what the lexicon knows. */
  function formFor(verb: string, person: string): string | null {
    const inf = isVerbInf(base(verb)) ? base(verb)! : isVerbInf(verb) && lexicon[verb] ? verb : null;
    if (!inf) return null;
    if (person === "pl") return inf;
    // Present-tense forms only: no participles (ge…), plurals or past forms.
    const forms = Object.keys(lexicon).filter(
      (k) => formOf(k, inf) && k !== inf && !k.endsWith("en") && !NON_PRESENT.has(k) && !/(de|te)$/.test(k) && (!k.startsWith("ge") || inf.startsWith("ge")),
    );
    // The stem is the form without -t; only verbs like zitten have a stem ending in t.
    const stem = forms.find((f) => !f.endsWith("t")) ?? forms.find((f) => forms.every((g) => g === f || !g.startsWith(f)));
    if (!stem) return null;
    if (person === "1s") return stem;
    const withT = stem.endsWith("t") ? stem : `${stem}t`;
    return forms.includes(withT) ? withT : null;
  }

  const GREETINGS = new Set(["beste", "geachte", "hoi", "hallo", "lieve", "dag", "hey", "hé", "goedemorgen", "goedemiddag", "goedenavond"]);

  return function check(text: string): WritingIssue[] {
    const issues: WritingIssue[] = [];
    const add = (a: W, b: W, i: Omit<WritingIssue, "start" | "end" | "source">) =>
      issues.push({ start: a.start, end: b.end, source: "mozaik", ...i });

    for (const s of sentences(tokenize(text))) {
      const first = s[0];

      /* ---------- capitals ---------- */
      if (!s.afterColon && /^\p{Ll}/u.test(first.text) && first.norm !== "'s" && first.norm !== "'t") {
        add(first, first, { kind: "style", message: "Start a sentence with a capital letter.", fix: cap(first.text), lesson: "spelling" });
      }
      s.forEach((w, i) => {
        if (i === 0) return;
        if ((DAYS.includes(w.norm) || MONTHS.includes(w.norm)) && /^\p{Lu}/u.test(w.text)) {
          add(w, w, { kind: "spelling", message: "Days and months have no capital letter in Dutch.", fix: w.norm, lesson: "dates-ordinals" });
        }
        // "Beste Marloes, Ik wil…": in a letter the line after the greeting starts with a capital.
        const afterGreeting = GREETINGS.has(first.norm) && i <= 4 && text.slice(s[i - 1].end, w.start).includes(",");
        if (w.text === "Ik" && !afterGreeting) add(w, w, { kind: "spelling", message: "ik only has a capital at the start of a sentence (not like English I).", fix: "ik", lesson: "pronouns-subject" });
      });

      /* ---------- word order: verb second ---------- */
      let k = 0;
      if (CONJUNCTIONS.has(s[0].norm)) k = 1;
      const opener = s[k];
      if (opener && !SUBJECTS[opener.norm] && (SLOT_ONE_WORDS.has(opener.norm) || QUESTION_WORDS.has(opener.norm))) {
        for (let j = k + 1; j < Math.min(s.length - 1, k + 6); j++) {
          if (finiteVerb(s[j].norm)) break; // the verb is already in place
          if (PEOPLE.has(s[j].norm) && j > k && finiteVerb(s[j + 1].norm)) {
            // "Morgen ik heb" → "Morgen heb ik"; with jij the -t drops.
            const subj = s[j];
            let verb = s[j + 1].norm;
            if (subj.norm === "jij" || subj.norm === "je") verb = jijForm(verb) ?? verb;
            add(subj, s[j + 1], {
              kind: "grammar",
              message: QUESTION_WORDS.has(opener.norm)
                ? `After a question word the verb comes next: ${opener.text} ${verb} ${subj.norm}…`
                : `The verb is always in second place. After "${s.slice(k, j).map((w) => w.text).join(" ")}" comes the verb, then the subject.`,
              fix: `${verb} ${subj.text}`,
              lesson: "verb-second",
            });
            break;
          }
          if (!["'s", "op", "in", "om", "na", "voor", "bij", "met", "de", "het", "een", "elke", "elk", "half", "kwart", "over", "uur"].includes(s[j].norm) && !isNumber(s[j].norm) && !DAYS.includes(s[j].norm) && !MONTHS.includes(s[j].norm) && !/^(ochtends|middags|avonds|nachts|week|weekend|zomer|winter|lente|herfst|dag|maand|jaar|les|werk|school)$/.test(s[j].norm)) break;
        }
      }

      /* ---------- jij after the verb: no -t ---------- */
      s.forEach((w, i) => {
        const next = s[i + 1];
        if (!next || next.norm !== "jij") return;
        if (i > 0 && !QUESTION_WORDS.has(s[i - 1].norm) && !SLOT_ONE_WORDS.has(s[i - 1].norm)) return;
        const fixed = jijForm(w.norm);
        if (fixed && fixed !== w.norm) {
          add(w, w, { kind: "grammar", message: "When jij comes after the verb, the -t drops: woon jij, werk jij.", fix: keepCase(w.text, fixed), lesson: "jij-inversion" });
        }
      });

      /* ---------- subject + verb agreement ---------- */
      s.forEach((subj, i) => {
        const person = SUBJECTS[subj.norm];
        const v = s[i + 1];
        if (!person || !v) return;
        // Only the normal order: subject first (or after en/maar/of/want).
        if (i > 0 && !CONJUNCTIONS.has(s[i - 1].norm) && !(i === 1 && s[0].norm === "dus")) return;
        if (subj.norm === "het" && i > 0) return;
        // "Het werk is zwaar": het is the article of a het-noun here, not the subject.
        if (subj.norm === "het" && HET_NOUNS.has(v.norm)) return;
        let want: string | null = null;
        if (ZIJN_FORMS.has(v.norm)) {
          if (person === "3?") want = v.norm === "is" || v.norm === "zijn" ? null : "is";
          else if (person === "2f") want = v.norm === "bent" || v.norm === "is" ? null : "bent";
          else want = ZIJN[person] === v.norm ? null : ZIJN[person];
        } else if (HEBBEN_FORMS.has(v.norm)) {
          if (person === "3?") want = v.norm === "heeft" || v.norm === "hebben" ? null : "heeft";
          else if (person === "2f") want = v.norm === "hebt" || v.norm === "heeft" ? null : "hebt";
          else want = HEBBEN[person] === v.norm ? null : HEBBEN[person];
        } else if (person !== "3?" && !IRREGULAR_VERBS.has(v.norm) && !isPast(v.norm)) {
          const p = person === "2f" ? "3s" : person === "2s" ? "3s" : person;
          const right = formFor(v.norm, p);
          if (right && right !== v.norm && finiteOrInf(v.norm)) want = right;
        }
        if (want) {
          add(v, v, {
            kind: "grammar",
            message: `With ${subj.norm} the verb is ${want}.`,
            fix: keepCase(v.text, want),
            lesson: ZIJN_FORMS.has(v.norm) || HEBBEN_FORMS.has(v.norm) ? "zijn-hebben" : "present-regular",
          });
        }
      });

      /* ---------- word pairs ---------- */
      s.forEach((w, i) => {
        const n1 = s[i + 1];
        const n2 = s[i + 2];
        if (!n1) return;

        // niet een → geen
        if (w.norm === "niet" && n1.norm === "een") {
          add(w, n1, { kind: "grammar", message: "Dutch says geen instead of niet een.", fix: keepCase(w.text, "geen"), lesson: "negation" });
        }

        // de/het with the wrong noun; deze/dit too
        const noun = isNoun(n1.norm) ? n1 : n2 && (ADJECTIVES[n1.norm] || ADJECTIVES_E.has(n1.norm)) && isNoun(n2.norm) ? n2 : null;
        if (noun) {
          if (w.norm === "de" && isHet(noun.norm)) add(w, w, { kind: "grammar", message: `${noun.norm} is a het-word: het ${noun.norm}.`, fix: keepCase(w.text, "het"), lesson: "articles" });
          // "is het lente", "dat het griep is": there het is the subject, not an article.
          const hetIsSubject = i > 0 && (finiteVerb(s[i - 1].norm) || ["dat", "of", "als", "want", "dus"].includes(s[i - 1].norm));
          if (w.norm === "het" && DE_NOUNS.has(noun.norm) && !hetIsSubject) add(w, w, { kind: "grammar", message: `${noun.norm} is a de-word: de ${noun.norm}.`, fix: keepCase(w.text, "de"), lesson: "articles" });
          if (w.norm === "deze" && isHet(noun.norm)) add(w, w, { kind: "grammar", message: `With het-words use dit: dit ${noun.norm}.`, fix: keepCase(w.text, "dit"), lesson: "demonstratives" });
          if (w.norm === "dit" && DE_NOUNS.has(noun.norm)) add(w, w, { kind: "grammar", message: `With de-words use deze: deze ${noun.norm}.`, fix: keepCase(w.text, "deze"), lesson: "demonstratives" });
        }

        // adjective endings
        if (n2 && isNoun(n2.norm)) {
          const bare = ADJECTIVES[n1.norm] ? n1.norm : null;
          const withE = ADJECTIVES_E.get(n1.norm);
          if (DETERMINERS.has(w.norm) && bare) {
            add(n1, n1, { kind: "grammar", message: `After ${w.norm}, an adjective before a noun gets -e: ${w.norm} ${ADJECTIVES[bare]} ${n2.norm}.`, fix: ADJECTIVES[bare], lesson: "adjective-e" });
          }
          if ((w.norm === "een" || w.norm === "geen") && withE && isHet(n2.norm)) {
            add(n1, n1, { kind: "grammar", message: `${w.norm} + a het-word: no -e (${w.norm} ${withE} ${n2.norm}).`, fix: withE, lesson: "adjective-e" });
          }
          if ((w.norm === "een" || w.norm === "geen") && bare && DE_NOUNS.has(n2.norm)) {
            add(n1, n1, { kind: "grammar", message: `${w.norm} + a de-word: the adjective gets -e (${w.norm} ${ADJECTIVES[bare]} ${n2.norm}).`, fix: ADJECTIVES[bare], lesson: "adjective-e" });
          }
        }

        // ik heb 25 jaar → ik ben 25 (jaar)
        if (HEBBEN_FORMS.has(w.norm) && n2 && isNumber(n1.norm) && n2.norm === "jaar") {
          add(w, w, { kind: "grammar", message: "In Dutch you ARE an age: Ik ben 25 (jaar). Not hebben.", fix: keepCase(w.text, TO_ZIJN[w.norm]), lesson: "zijn-hebben" });
        }
        // ik ben honger → ik heb honger; ik ben koud → ik heb het koud
        const prev = s[i - 1];
        if (ZIJN_FORMS.has(w.norm) && prev && ["ik", "jij", "je", "u", "wij", "we", "jullie"].includes(prev.norm)) {
          if (n1.norm === "honger" || n1.norm === "dorst") {
            add(w, w, { kind: "grammar", message: `Dutch HAS ${n1.norm}: ik heb ${n1.norm}.`, fix: keepCase(w.text, TO_HEBBEN[w.norm]), lesson: "zijn-hebben" });
          }
          if ((n1.norm === "koud" || n1.norm === "warm") && (!n2 || !isNoun(n2.norm))) {
            add(w, n1, { kind: "grammar", message: `For how you feel: ik heb het ${n1.norm}. (Ik ben ${n1.norm} means your body is ${n1.norm} to touch.)`, fix: `${TO_HEBBEN[w.norm]} het ${n1.norm}`, lesson: "het-subject" });
          }
        }

        // in maandag → op maandag; op mei → in mei; op 8 uur → om 8 uur
        if (w.norm === "in" && DAYS.includes(n1.norm)) add(w, w, { kind: "grammar", message: `Days take op: op ${n1.norm}.`, fix: keepCase(w.text, "op"), lesson: "prepositions" });
        if (w.norm === "op" && MONTHS.includes(n1.norm)) add(w, w, { kind: "grammar", message: `Months take in: in ${n1.norm}.`, fix: keepCase(w.text, "in"), lesson: "prepositions" });
        // "in drie uur" is a duration (within three hours), so for in only half/kwart is flagged.
        if ((w.norm === "op" || w.norm === "in") && (isNumber(n1.norm) || n1.norm === "half" || n1.norm === "kwart")) {
          const clock = n1.norm === "half" || n1.norm === "kwart";
          const uur = clock || (w.norm === "op" && s.slice(i + 1, i + 5).some((x) => x.norm === "uur"));
          if (uur) add(w, w, { kind: "grammar", message: "Clock times take om: om acht uur, om half negen.", fix: keepCase(w.text, "om"), lesson: "time-numbers" });
        }

        // "niet meer" / "nooit meer" means "no longer": not a comparison.
        const noLonger = (k: number) => w.norm === "meer" && k > 0 && ["niet", "nooit", "geen"].includes(s[k - 1].norm);
        // groter als → groter dan
        const afterMeer = i > 0 && s[i - 1].norm === "meer" && (ADJECTIVES[w.norm] || COMPARE[w.norm]);
        if ((COMPARATIVES.has(w.norm) || afterMeer) && n1.norm === "als" && !noLonger(i)) {
          add(n1, n1, { kind: "grammar", message: "After a comparing word, 'than' is dan: groter dan.", fix: "dan", lesson: "comparatives" });
        }
        // meer mooi → mooier
        if (w.norm === "meer" && !noLonger(i) && (ADJECTIVES[n1.norm] || COMPARE[n1.norm]) && !(n2 && isNoun(n2.norm))) {
          add(w, n1, { kind: "grammar", message: `Dutch adds -er instead of meer: ${comparative(n1.norm)}.`, fix: comparative(n1.norm), lesson: "comparatives" });
        }
      });
    }

    // One issue per span; the first rule wins.
    const out: WritingIssue[] = [];
    for (const i of issues.sort((a, b) => a.start - b.start)) {
      if (!out.some((o) => i.start < o.end && o.start < i.end)) out.push(i);
    }
    return out;
  };

  /** werkt → werk, bent → ben, hebt → heb; null if it isn't a -t form. */
  function jijForm(verb: string): string | null {
    if (verb === "bent") return "ben";
    if (verb === "hebt") return "heb";
    if (verb === "kunt") return "kun";
    if (verb === "wilt") return "wil";
    if (!verb.endsWith("t")) return null;
    const stem = verb.slice(0, -1);
    const inf = base(verb) ?? base(stem);
    if (!inf || !lexicon[stem] || !formOf(stem, inf)) return null;
    return stem;
  }

  function finiteOrInf(w: string) {
    return finiteVerb(w) || (isVerbInf(w) && !!lexicon[w] && !isNoun(w) && Object.keys(lexicon).some((k) => base(k) === w));
  }
}
