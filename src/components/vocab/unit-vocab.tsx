"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getPack } from "@/core/registry";
import { unitNumber, type LanguagePack } from "@/core/language-pack";
import { courseWordId } from "@/core/review-items";
import { isGraduated, isLearned } from "@/core/srs";
import { unitExpressions, unitWords, WORD_GROUPS, type UnitWord } from "@/core/unit-words";
import { useReview } from "@/lib/review/use-review";
import { useReviewSettings } from "@/lib/review/use-review-settings";
import { SpeakButton } from "@/components/speak-button";
import { NewWordsSession } from "@/components/review/new-words";

type Status = "known" | "learned" | "learning" | "new";
const STATUS_LABEL: Record<Status, string> = {
  known: "Known for good",
  learned: "Learned",
  learning: "Learning",
  new: "",
};

/**
 * A unit's word list, like the vocabulary page at the end of a textbook
 * chapter: key words first, grouped, each with its meaning, sound and the
 * sentence it came from. "Practise these" turns the new ones into cards.
 */
export function UnitVocab({ lang, unitId }: { lang: string; unitId: string }) {
  const pack = getPack(lang) as LanguagePack;
  const unit = pack.units.find((u) => u.id === unitId)!;
  const { settings } = useReviewSettings();
  const review = useReview(pack, settings);
  const [practising, setPractising] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { n } = unitNumber(pack, unit);

  const words = useMemo(() => unitWords(pack, unit), [pack, unit]);
  const expressions = useMemo(() => unitExpressions(pack, unit), [pack, unit]);
  const key = words.filter((w) => w.core);
  const more = words.filter((w) => !w.core);

  const status = (w: UnitWord): Status => {
    const stage = review.schedules.get(courseWordId(w.lemma))?.stage;
    if (stage === undefined) return "new";
    if (isGraduated(stage)) return "known";
    return isLearned(stage) ? "learned" : "learning";
  };
  const fresh = key.filter((w) => status(w) === "new");

  if (practising) {
    return (
      <NewWordsSession pack={pack} words={fresh.slice(0, 20)} onMeet={review.meet} onEnd={() => setPractising(false)} />
    );
  }

  const list = (items: UnitWord[]) =>
    WORD_GROUPS.map((g) => {
      const inGroup = items.filter((w) => w.group === g.id);
      if (inGroup.length === 0) return null;
      return (
        <section key={g.id} className="vocab-group">
          <h3>{g.title}</h3>
          <ul className="vocab-list">
            {inGroup.map((w) => {
              const s = review.loaded ? status(w) : "new";
              const expanded = open === w.lemma;
              return (
                <li key={w.lemma} data-status={s}>
                  <div className="vocab-row">
                    <button
                      type="button"
                      className="vocab-word"
                      lang={lang}
                      aria-expanded={expanded}
                      onClick={() => setOpen(expanded ? null : w.lemma)}
                    >
                      {w.label}
                    </button>
                    <span className="vocab-meaning">{w.meaning}</span>
                    <SpeakButton lang={lang} text={w.label} label={`Hear ${w.label}`} />
                  </div>
                  {STATUS_LABEL[s] ? <span className="vocab-status">{STATUS_LABEL[s]}</span> : null}
                  {expanded ? (
                    <div className="vocab-example">
                      <p lang={lang}>
                        {pack.tokenize(w.sentence).map((tok, i) =>
                          tok.kind === "word" && tok.normalized === w.word ? <mark key={i}>{tok.text}</mark> : <span key={i}>{tok.text}</span>,
                        )}
                        <SpeakButton lang={lang} text={w.sentence} label="Hear the sentence" />
                      </p>
                      {w.translation ? <p className="example-translation">{w.translation}</p> : null}
                      {pack.lexicon[w.lemma]?.closer ? <p className="vocab-note">{pack.lexicon[w.lemma].closer}</p> : null}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>
      );
    });

  return (
    <article className="vocab-page">
      <Link href={`/course/${lang}/${unit.id}`} className="back-link">Back to {unit.titleTranslation}</Link>
      <header className="unit-page-head">
        <p className="reader-unit">
          <span className="level-tag">{unit.level}</span>
          Unit {n} · Words
        </p>
        <h1 className="page-title" lang={lang}>{unit.title}</h1>
        <p className="lede">
          The words this unit uses most. Key words come first: those are the ones worth knowing for the level. Tap a word to
          see it in its sentence.
        </p>
      </header>

      {key.length > 0 ? (
        <div className="vocab-practise">
          {fresh.length > 0 ? (
            <>
              <button type="button" className="button" onClick={() => setPractising(true)} disabled={!review.loaded}>
                Practise these words
              </button>
              <p className="setting-note">
                {fresh.length} key {fresh.length === 1 ? "word" : "words"} you haven&apos;t met yet
                {fresh.length > 20 ? " (20 at a time)" : ""}. Ones you know graduate; new ones go into My words.
              </p>
            </>
          ) : review.loaded ? (
            <p className="setting-note">You&apos;ve met every key word of this unit. They come back in Review.</p>
          ) : null}
        </div>
      ) : null}

      <section className="skill-section" data-skill="words" aria-labelledby="key-words">
        <h2 id="key-words">Key words <small className="count">{key.length}</small></h2>
        {list(key)}
      </section>

      {expressions.length > 0 ? (
        <section className="skill-section" data-skill="words" aria-labelledby="expressions">
          <h2 id="expressions">Expressions <small className="count">{expressions.length}</small></h2>
          <ul className="vocab-list">
            {expressions.map(({ expression, sentence, translation }) => (
              <li key={expression.phrase}>
                <div className="vocab-row">
                  <span className="vocab-word" lang={lang}>{expression.phrase}</span>
                  <span className="vocab-meaning">{expression.meaning}</span>
                  <SpeakButton lang={lang} text={expression.phrase} label={`Hear ${expression.phrase}`} />
                </div>
                <div className="vocab-example">
                  <p lang={lang}>{sentence}</p>
                  <p className="example-translation">{translation}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {more.length > 0 ? (
        <section className="skill-section" data-skill="words" aria-labelledby="more-words">
          <h2 id="more-words">Also in this unit <small className="count">{more.length}</small></h2>
          {showAll ? (
            list(more)
          ) : (
            <button type="button" className="button button-quiet" onClick={() => setShowAll(true)}>
              Show {more.length} more words
            </button>
          )}
        </section>
      ) : null}
    </article>
  );
}
