"use client";

import { VerdictLine, verdictFromScore } from "@/components/exercises/verdict";
import { dictionaryLabel, isVerb, lemmaFor } from "@/core/dictionary";
import { LearningTip } from "@/components/learning-tip";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Verdict } from "@/core/answers";
import { checkDictation, type DictationResult } from "@/core/dictation";
import type { CefrLevel, LanguagePack } from "@/core/language-pack";
import {
  buildSession, checkProduced, countItems, introducedToday, REVIEW_KINDS, wordCardFor, type CardDirection, type ProduceVerdict,
  type GrammarItem, type ListenItem, type ReviewItem, type ReviewKind, type SpeakItem, type WordItem,
} from "@/core/review-items";
import { describeWait, REVIEW_RESULTS, type ReviewResult } from "@/core/srs";
import { LanguagePicker } from "@/components/language-picker";
import { useLearningLanguage } from "@/components/learning-language";
import { NewWordsSession, WordStats } from "./new-words";
import { SpeakButton } from "@/components/speak-button";
import { ExerciseCard, correctAnswer } from "@/components/grammar/grammar-lesson";
import { ModelGate, PracticeCard } from "@/components/speaking/speaking-practice";
import { useAsr, WHISPER_LANGUAGE } from "@/lib/asr/use-asr";
import { useReview } from "@/lib/review/use-review";
import { useReviewSettings, type ReviewSettings } from "@/lib/review/use-review-settings";
import { speak, useHasVoice } from "@/lib/speech";
import { useNow } from "@/lib/use-now";

export const KIND_LABEL: Record<ReviewKind, string> = {
  word: "My words",
  grammar: "Grammar",
  listen: "Listening",
  speak: "Speaking",
};

type Session = { items: ReviewItem[]; label: string };

export function Review() {
  const { pack } = useLearningLanguage();
  const { settings, update, reset } = useReviewSettings();
  const review = useReview(pack, settings);
  const clock = useNow();
  const [session, setSession] = useState<Session | null>(null);
  const [meeting, setMeeting] = useState(false);

  if (!pack) return <LanguagePicker />;
  if (!review.loaded || clock === null) return <p className="lede">Loading your reviews…</p>;

  const now = new Date(clock);

  if (meeting) {
    return (
      <NewWordsSession
        pack={pack}
        words={review.newWords.slice(0, settings.newWordsSize)}
        onMeet={review.meet}
        onEnd={() => setMeeting(false)}
      />
    );
  }

  if (session) {
    return (
      <SessionRunner
        pack={pack}
        session={session}
        settings={settings}
        rate={review.rate}
        graduate={review.graduate}
        stageOf={(id) => review.schedules.get(id)?.stage ?? 0}
        error={review.error}
        onEnd={() => setSession(null)}
      />
    );
  }

  const startedToday = introducedToday(review.schedules, now);
  const allowanceLeft = Math.max(0, settings.newPerDay - startedToday);
  const start = (kinds: ReviewKind[], label: string, extraNew = 0) =>
    setSession({
      label,
      items: buildSession(review.items, review.schedules, {
        kinds: new Set(kinds),
        size: settings.size,
        newPerDay: Math.max(settings.newPerDay, startedToday) + extraNew,
        now,
      }),
    });

  const mixKinds = REVIEW_KINDS.filter((k) => settings.mix[k]);
  const mixed = buildSession(review.items, review.schedules, {
    kinds: new Set(mixKinds),
    size: settings.size,
    newPerDay: settings.newPerDay,
    now,
  });
  const counts = countItems(review.items, review.schedules, now);
  const nextDue = [...review.schedules.values()]
    .map((s) => s.dueAt)
    .filter((d) => new Date(d).getTime() > clock)
    .sort()[0];

  return (
    <div className="review-hub">
      <h1 className="page-title">Review</h1>

      {!review.ready ? <SetupNeeded /> : null}

      <NewWordsBox
        count={review.newWords.length}
        size={settings.newWordsSize}
        levels={settings.newWordLevels.filter((l) => pack.levels.includes(l))}
        onStart={() => setMeeting(true)}
      />

      {review.items.length === 0 ? (
        <div className="stack-loose">
          <p className="lede">
            Your review fills up as you go: words you save while reading or don&apos;t know in New words,
            exercises from grammar you learned, lines you listened to.
          </p>
          <Link href="/course" className="button button-quiet">Go to the course</Link>
        </div>
      ) : (
        <>
          <section className="review-main" aria-labelledby="start-title">
            <h2 id="start-title" className="sr-only">Mixed review</h2>
            {mixed.length > 0 ? (
              <>
                <button
                  type="button"
                  className="button review-start"
                  onClick={() => setSession({ items: mixed, label: "Mixed review" })}
                >
                  Start review
                </button>
                <p className="review-main-meta">
                  {mixed.length} {mixed.length === 1 ? "card" : "cards"}, about {Math.max(1, Math.round(mixed.length * 0.4))} min.
                  Mixes {mixKinds.map((k) => KIND_LABEL[k].toLowerCase()).join(", ")}.
                </p>
              </>
            ) : (
              <div className="stack-loose">
                <p className="lede">
                  All caught up for today{nextDue ? `. Next review ${describeWhen(nextDue, clock)}` : ""}.
                </p>
                {mixKinds.some((k) => counts[k].fresh > 0) ? (
                  <button type="button" className="button button-quiet" onClick={() => start(mixKinds, "Extra", 5)}>
                    Learn 5 more new cards
                  </button>
                ) : null}
              </div>
            )}
          </section>

          <section className="focus-modes" aria-labelledby="focus-title">
            <h2 id="focus-title">Or focus on one part</h2>
            <div className="focus-row">
              {REVIEW_KINDS.map((k) => {
                const available = counts[k].due + Math.min(counts[k].fresh, allowanceLeft);
                return (
                  <button
                    key={k}
                    type="button"
                    className="focus-chip"
                    disabled={available === 0}
                    onClick={() => start([k], KIND_LABEL[k])}
                  >
                    <span>{KIND_LABEL[k]}</span>
                    <span className="focus-count">
                      {counts[k].due > 0
                        ? `${counts[k].due} due`
                        : available > 0
                          ? `${Math.min(counts[k].fresh, allowanceLeft)} new`
                          : counts[k].fresh > 0
                            ? "more tomorrow"
                            : "nothing yet"}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

        </>
      )}

      <WordStats
        pack={pack}
        items={review.items}
        schedules={review.schedules}
        graduated={review.graduated}
        onUndo={review.ungraduate}
      />

      <LearningTip pack={pack} place="review" />

      <SettingsPanel settings={settings} update={update} reset={reset} levels={pack.levels} name={pack.name} />
    </div>
  );
}

function SetupNeeded() {
  return (
    <div className="notice-box">
      <p>
        <strong>One setup step left.</strong> Until the database update is done, review progress is
        kept on this device only. Claude has the exact text to run in Supabase.
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------- */

function SettingsPanel({
  settings,
  update,
  reset,
  levels,
  name,
}: {
  settings: ReviewSettings;
  update: (p: Partial<ReviewSettings>) => void;
  reset: () => void;
  levels: readonly CefrLevel[];
  name: string;
}) {
  return (
    <details className="settings-panel">
      <summary>Customise review</summary>
      <div className="settings-body">
        <Segmented
          label="Cards per session"
          value={settings.size}
          options={[5, 10, 20]}
          onChange={(size) => update({ size })}
        />
        <Segmented
          label="New words per session"
          value={settings.newWordsSize}
          options={[10, 20, 30]}
          onChange={(newWordsSize) => update({ newWordsSize })}
        />
        <fieldset className="setting">
          <legend>New words come from</legend>
          {levels.map((l) => (
            <label key={l} className="check">
              <input
                type="checkbox"
                checked={settings.newWordLevels.includes(l)}
                onChange={(e) =>
                  update({
                    newWordLevels: e.target.checked
                      ? [...settings.newWordLevels, l]
                      : settings.newWordLevels.filter((x) => x !== l),
                  })
                }
              />
              {l}
            </label>
          ))}
          {levels.length === 1 ? <small className="setting-note">More levels appear here as they&apos;re added.</small> : null}
        </fieldset>
        <Segmented
          label="New grammar and listening cards per day"
          value={settings.newPerDay}
          options={[0, 5, 10, 20]}
          onChange={(newPerDay) => update({ newPerDay })}
        />

        <fieldset className="setting">
          <legend>Mixed review includes</legend>
          {REVIEW_KINDS.map((k) => (
            <label key={k} className="check">
              <input
                type="checkbox"
                checked={settings.mix[k]}
                onChange={(e) => update({ mix: { ...settings.mix, [k]: e.target.checked } })}
              />
              {KIND_LABEL[k]}
              {k === "speak" ? <small> (needs the microphone)</small> : null}
            </label>
          ))}
        </fieldset>

        <fieldset className="setting">
          <legend>Word cards go</legend>
          {directions(name).map((d) => (
            <label key={d.id} className="check">
              <input type="radio" name="direction" checked={settings.direction === d.id} onChange={() => update({ direction: d.id })} />
              {d.label}
              <small> {d.hint}</small>
            </label>
          ))}
        </fieldset>

        <fieldset className="setting">
          <legend>Word cards in My words</legend>
          <label className="check">
            <input
              type="checkbox"
              checked={settings.recallCards}
              onChange={(e) => update({ recallCards: e.target.checked })}
            />
            Recall cards: see the meaning, find the word
          </label>
          <label className="check">
            <input
              type="checkbox"
              checked={settings.listenCards}
              onChange={(e) => update({ listenCards: e.target.checked })}
            />
            Listening cards: hear the word, know its meaning
          </label>
        </fieldset>

        <button type="button" className="link-button" onClick={reset}>
          Back to the defaults
        </button>
      </div>
    </details>
  );
}

const directions = (name: string): { id: CardDirection; label: string; hint: string }[] => [
  { id: "mixed", label: "Both ways, step by step", hint: `(${name} with its sentence, then the word alone, then English → you type the ${name})` },
  { id: "nl-en", label: `${name} → English only`, hint: "" },
  { id: "en-nl", label: `English → ${name} only`, hint: `(you type the ${name})` },
];

function Segmented({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: number;
  options: number[];
  onChange: (v: number) => void;
}) {
  return (
    <fieldset className="setting">
      <legend>{label}</legend>
      <div className="segmented" role="radiogroup">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            role="radio"
            aria-checked={value === o}
            className="segment"
            onClick={() => onChange(o)}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

/* ---------------------------------------------------------------- */

function SessionRunner({
  pack,
  session,
  settings,
  rate,
  graduate,
  stageOf,
  error,
  onEnd,
}: {
  pack: LanguagePack;
  session: Session;
  settings: ReviewSettings;
  rate: (item: ReviewItem, r: ReviewResult) => Promise<void>;
  graduate: (itemId: string) => Promise<void>;
  stageOf: (id: string) => number;
  error: string | null;
  onEnd: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [tally, setTally] = useState({ good: 0, total: 0 });
  const item = session.items[index];

  const answer = (r: ReviewResult) => {
    void rate(item, r);
    setTally((t) => ({ good: t.good + (r === "again" ? 0 : 1), total: t.total + 1 }));
    setIndex((i) => i + 1);
  };

  const graduateItem = () => {
    void graduate(item.id);
    setTally((t) => ({ good: t.good + 1, total: t.total + 1 }));
    setIndex((i) => i + 1);
  };

  if (!item) {
    return (
      <div>
        <h1 className="page-title">Done for now</h1>
        <p className="lede">
          {tally.total > 0
            ? `${tally.good} of ${tally.total} came back to you. The rest will return sooner, that's how it sticks.`
            : "Nothing to review in this part right now."}
        </p>
        <button type="button" className="button" onClick={onEnd}>
          Back to Review
        </button>
      </div>
    );
  }

  return (
    <div>
      <p className="review-progress" aria-live="polite">
        <span>
          {session.label}: {index + 1} of {session.items.length}
          <span className="kind-tag">{KIND_LABEL[item.kind]}</span>
        </span>
        <button type="button" className="link-button" onClick={onEnd}>
          Stop for now
        </button>
      </p>
      <div className="session-meter" aria-hidden="true">
        <span style={{ width: `${(index / session.items.length) * 100}%` }} />
      </div>

      {item.kind === "word" ? (
        <WordCard
          key={item.id}
          pack={pack}
          item={item}
          stage={stageOf(item.id)}
          settings={settings}
          onAnswer={answer}
          onGraduate={graduateItem}
        />
      ) : item.kind === "grammar" ? (
        <GrammarCard key={item.id} lang={pack.code} item={item} onAnswer={answer} />
      ) : item.kind === "listen" ? (
        <ListenCard key={item.id} pack={pack} item={item} stage={stageOf(item.id)} onAnswer={answer} />
      ) : (
        <SpeakCard key={item.id} pack={pack} item={item} onAnswer={answer} />
      )}
      {error ? <p className="error" role="alert">{error}</p> : null}
    </div>
  );
}

/* ---------------------------------------------------------------- */

const RATINGS: { result: ReviewResult; label: string; hint: string }[] = [
  { result: "again", label: "Again", hint: "Didn't know it" },
  { result: "hard", label: "Hard", hint: "Knew it, with effort" },
  { result: "good", label: "Good", hint: "Knew it" },
  { result: "easy", label: "Easy", hint: "Knew it instantly" },
];

function RatingRow({ stage, onAnswer }: { stage: number; onAnswer: (r: ReviewResult) => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey || e.target instanceof HTMLInputElement) return;
      if (["1", "2", "3", "4"].includes(e.key)) onAnswer(REVIEW_RESULTS[Number(e.key) - 1]);
      else if (e.key === " " || e.key === "Enter") onAnswer("good");
      else return;
      e.preventDefault();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onAnswer]);

  return (
    <>
      <p className="review-question">How well did you know it?</p>
      <div className="rating-row" role="group" aria-label="Rate how well you knew it">
        {RATINGS.map((r, i) => (
          <button
            key={r.result}
            type="button"
            className={r.result === "good" ? "rating rating-main" : "rating"}
            onClick={() => onAnswer(r.result)}
            title={`${r.hint} (key ${i + 1})`}
          >
            <span className="rating-label">{r.label}</span>
            <span className="rating-wait">{describeWait(stage, r.result, new Date())}</span>
          </button>
        ))}
      </div>
      <p className="shortcut-hint">Keys 1–4, or Space for Good</p>
    </>
  );
}

function useRevealKey(revealed: boolean, reveal: () => void) {
  useEffect(() => {
    if (revealed) return;
    function onKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement) return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        reveal();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [revealed, reveal]);
}

function WordCard({
  pack,
  item,
  stage,
  settings,
  onAnswer,
  onGraduate,
}: {
  pack: LanguagePack;
  item: WordItem;
  stage: number;
  settings: ReviewSettings;
  onAnswer: (r: ReviewResult) => void;
  onGraduate: () => void;
}) {
  const lang = pack.code;
  const hasVoice = useHasVoice(lang);
  const kind = wordCardFor(stage, item.id, {
    direction: settings.direction,
    recall: settings.recallCards,
    listen: settings.listenCards && hasVoice,
  });
  const [revealed, setRevealed] = useState(false);
  const reveal = () => setRevealed(true);
  useRevealKey(revealed || kind === "produce", reveal);
  const tokens = pack.tokenize(item.sentence);
  const target = targetTokens(tokens, item.word);
  const first = Math.min(...target);
  const targetText = tokens.filter((_, i) => target.has(i)).map((t) => t.text).join("");
  const lemma = lemmaFor(item);
  const dictionary = dictionaryLabel(pack, lemma);

  if (kind === "produce") return <ProduceCard key={item.id} pack={pack} item={item} onAnswer={onAnswer} onGraduate={onGraduate} />;

  return (
    <section className="review-card" aria-label="Word card">
      {kind === "listen" && !revealed ? (
        <>
          <p className="review-prompt">Listen. What does the word mean?</p>
          <div className="button-row listen-big">
            <button type="button" className="button" onClick={() => speak(lang, item.surface, 0.8)}>
              Play the word
            </button>
            <button type="button" className="button button-quiet" onClick={() => speak(lang, item.sentence, 0.85)}>
              Play the sentence
            </button>
          </div>
        </>
      ) : kind === "word" && !revealed ? (
        <>
          <p className="review-prompt">What does this word mean?</p>
          <p className="review-solo" lang={lang}>
            {dictionary}
          </p>
        </>
      ) : (
        <>
          <p className="review-prompt">
            {kind === "recall" && !revealed ? (
              <>
                Which word means <strong>{item.meaning}</strong>?
              </>
            ) : (
              "What does the highlighted word mean?"
            )}
          </p>
          <p className="review-sentence" lang={lang}>
            {tokens.map((tok, i) => {
              if (!target.has(i)) return <span key={i}>{tok.text}</span>;
              if (kind === "recall" && !revealed) {
                // One gap for the whole word or phrase.
                if (i !== first) return null;
                return (
                  <span
                    key={i}
                    className="review-gap"
                    aria-label="missing word"
                    style={{ width: `${Math.max(3, targetText.length) * 0.62}em` }}
                  />
                );
              }
              return <mark key={i} className="review-target">{tok.text}</mark>;
            })}
          </p>
        </>
      )}

      {!revealed ? (
        <button type="button" className="button" onClick={reveal}>
          Show answer
        </button>
      ) : (
        <>
          <WordAnswer pack={pack} item={item} showSentence={kind === "listen" || kind === "word"} />
          <RatingRow stage={stage} onAnswer={onAnswer} />
          <GraduateButton onGraduate={onGraduate} />
        </>
      )}
    </section>
  );
}

/** Which tokens of the sentence are the card's word, or all the tokens of a saved phrase. */
function targetTokens(tokens: { kind: string; normalized?: string }[], word: string): Set<number> {
  const parts = word.split(" ");
  const out = new Set<number>();
  const wordAt = tokens.map((t, i) => (t.kind === "word" ? i : -1)).filter((i) => i >= 0);
  for (let w = 0; w + parts.length <= wordAt.length; w++) {
    if (parts.every((p, k) => tokens[wordAt[w + k]].normalized === p)) {
      for (let i = wordAt[w]; i <= wordAt[w + parts.length - 1]; i++) out.add(i);
      if (parts.length > 1) break;
    }
  }
  return out;
}

function WordAnswer({ pack, item, showSentence }: { pack: LanguagePack; item: WordItem; showSentence: boolean }) {
  const lang = pack.code;
  const dictionary = dictionaryLabel(pack, lemmaFor(item));
  return (
    <div className="review-answer">
      <p className="review-word">
        <span lang={lang}>{dictionary}</span>
        <SpeakButton lang={lang} text={dictionary} label={`Hear ${dictionary}`} />
      </p>
      {item.surface.toLowerCase() !== lemmaFor(item) ? (
        <p className="review-met-as">
          In the sentence: <span lang={lang}>{item.surface}</span>
        </p>
      ) : null}
      <p className="review-meaning">{item.meaning}</p>
      {showSentence ? (
        <p className="example-translation" lang={lang}>
          {item.sentence}
        </p>
      ) : null}
      {item.translation ? <p className="example-translation">{item.translation}</p> : null}
    </div>
  );
}

function GraduateButton({ onGraduate }: { onGraduate: () => void }) {
  return (
    <button type="button" className="graduate-button" onClick={onGraduate}>
      Too easy: I know this one for good
      <small>It won&apos;t come back. Undo anytime under Graduated words.</small>
    </button>
  );
}

/** English → type the target word. Nouns with their article. */
function ProduceCard({
  pack,
  item,
  onAnswer,
  onGraduate,
}: {
  pack: LanguagePack;
  item: WordItem;
  onAnswer: (r: ReviewResult) => void;
  onGraduate: () => void;
}) {
  const lang = pack.code;
  const lemma = lemmaFor(item);
  const article = pack.nounArticle?.(lemma) ?? null;
  const [typed, setTyped] = useState("");
  const [result, setResult] = useState<ProduceVerdict | null>(null);
  const hint = article ? "a noun: give it with its article" : isVerb(pack, lemma) ? "a verb: give the infinitive" : null;

  const check = (giveUp = false) => {
    const r = giveUp ? { verdict: "wrong" as const } : checkProduced(typed, lemma, article, pack.articles);
    setResult(r);
    speak(lang, dictionaryLabel(pack, lemma), 0.85);
  };

  return (
    <section className="review-card" aria-label={`Word card: say it in ${pack.name}`}>
      <p className="review-prompt">How do you say this in {pack.name}?</p>
      <p className="review-solo review-solo-en">{item.meaning}</p>
      {hint ? <p className="review-hint">{hint}</p> : null}
      {!result ? (
        <form
          className="produce-form"
          onSubmit={(e) => {
            e.preventDefault();
            check();
          }}
        >
          <input
            className="produce-input"
            lang={lang}
            autoFocus
            autoComplete="off"
            autoCapitalize="none"
            spellCheck={false}
            aria-label={`Your answer in ${pack.name}`}
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
          />
          <div className="button-row">
            <button type="submit" className="button" disabled={!typed.trim()}>
              Check
            </button>
            <button type="button" className="button button-quiet" onClick={() => check(true)}>
              I don&apos;t know
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="feedback" role="status" data-verdict={result.verdict}>
            <VerdictLine verdict={result.verdict} label={result.verdict === "wrong" && !typed.trim() ? "Here it is" : undefined} />
            {result.note ? <p>{result.note}</p> : null}
            {typed.trim() && result.verdict !== "right" ? (
              <p className="produce-yours">
                You wrote: <span lang={lang}>{typed}</span>
              </p>
            ) : null}
          </div>
          <WordAnswer pack={pack} item={item} showSentence />
          <button type="button" className="button" autoFocus onClick={() => onAnswer(verdictToResult(result.verdict))}>
            Continue
          </button>
          <p className="shortcut-hint">
            {result.verdict === "right" ? "Comes back in a while." : result.verdict === "almost" ? "Comes back a bit sooner." : "Back to the first step: you'll see it again soon."}
          </p>
          <GraduateButton onGraduate={onGraduate} />
        </>
      )}
    </section>
  );
}

function NewWordsBox({
  count,
  size,
  levels,
  onStart,
}: {
  count: number;
  size: number;
  levels: readonly CefrLevel[];
  onStart: () => void;
}) {
  return (
    <section className="new-words-box" aria-labelledby="new-words-title">
      <div>
        <h2 id="new-words-title">New words</h2>
        <p>
          {count > 0
            ? `${count} ${levels.join(" + ")} words to meet, most common first. Tap the ones you know; the rest go into My words.`
            : `You've met every ${levels.join(" + ")} word. Well done.`}
        </p>
      </div>
      {count > 0 ? (
        <button type="button" className="button" onClick={onStart}>
          Meet {Math.min(size, count)} new words
        </button>
      ) : null}
    </section>
  );
}

const verdictToResult = (v: Verdict): ReviewResult => (v === "right" ? "good" : v === "almost" ? "hard" : "again");

function GrammarCard({ lang, item, onAnswer }: { lang: string; item: GrammarItem; onAnswer: (r: ReviewResult) => void }) {
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  return (
    <section className="review-card">
      <p className="review-prompt">Grammar: {item.pointTitle}</p>
      <ExerciseCard lang={lang} seed={item.id} exercise={item.exercise} verdict={verdict} onCheck={setVerdict} />
      {verdict ? (
        <div className="feedback" role="status" data-verdict={verdict}>
          <VerdictLine verdict={verdict} label={verdict === "almost" ? "Almost: check the accents" : undefined} />
          <p>
            <span className="feedback-answer" lang={lang}>{correctAnswer(item.exercise)}</span>
          </p>
          <p className="example-translation">{item.exercise.translation}</p>
          <button type="button" className="button" autoFocus onClick={() => onAnswer(verdictToResult(verdict))}>
            Continue
          </button>
        </div>
      ) : null}
    </section>
  );
}

function ListenCard({
  pack,
  item,
  stage,
  onAnswer,
}: {
  pack: LanguagePack;
  item: ListenItem;
  stage: number;
  onAnswer: (r: ReviewResult) => void;
}) {
  const lang = pack.code;
  const hasVoice = useHasVoice(lang);
  const [typed, setTyped] = useState("");
  const [result, setResult] = useState<DictationResult | null>(null);
  const [revealed, setRevealed] = useState(!hasVoice);

  return (
    <section className="review-card">
      <p className="review-prompt">
        {hasVoice ? "Listen and understand. Type what you hear, or just show the text." : "Read it and check you understand."}
      </p>
      {hasVoice ? (
        <div className="button-row">
          <button type="button" className="button button-quiet" onClick={() => speak(lang, item.text, 0.9)}>
            Play
          </button>
          <button type="button" className="button button-quiet" onClick={() => speak(lang, item.text, 0.7)}>
            Slow
          </button>
        </div>
      ) : null}

      {!revealed && !result ? (
        <>
          <div className="field dictation-field">
            <label htmlFor="listen-typed">What do you hear? (optional)</label>
            <input
              id="listen-typed"
              lang={lang}
              value={typed}
              autoComplete="off"
              spellCheck={false}
              onChange={(e) => setTyped(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && typed.trim()) setResult(checkDictation(item.text, typed));
              }}
            />
          </div>
          <div className="button-row">
            <button
              type="button"
              className="button"
              onClick={() => (typed.trim() ? setResult(checkDictation(item.text, typed)) : setRevealed(true))}
            >
              {typed.trim() ? "Check" : "Show the text"}
            </button>
          </div>
        </>
      ) : null}

      {result ? (
        <div className="feedback" role="status" data-verdict={verdictFromScore(result.score)}>
          <VerdictLine verdict={verdictFromScore(result.score)} />
          <p className="diff" lang={lang}>
            {result.parts.map((p, i) => (
              <span key={i} className={`diff-${p.kind}`}>
                {p.kind === "extra" ? p.typed : p.word}
              </span>
            ))}
          </p>
          <p className="example-translation">{item.translation}</p>
          <button
            type="button"
            className="button"
            autoFocus
            onClick={() => onAnswer(result.score >= 0.95 ? "good" : result.score >= 0.6 ? "hard" : "again")}
          >
            Continue
          </button>
        </div>
      ) : revealed ? (
        <>
          <div className="review-answer">
            <p className="review-meaning" lang={lang}>{item.text}</p>
            <p className="example-translation">{item.translation}</p>
          </div>
          <RatingRow stage={stage} onAnswer={onAnswer} />
        </>
      ) : null}
    </section>
  );
}

function SpeakCard({ pack, item, onAnswer }: { pack: LanguagePack; item: SpeakItem; onAnswer: (r: ReviewResult) => void }) {
  const asr = useAsr(WHISPER_LANGUAGE[pack.code] ?? pack.code);
  const [score, setScore] = useState<ReviewResult | null>(null);

  if (asr.status.state !== "ready") {
    return (
      <section className="review-card">
        <ModelGate status={asr.status} onLoad={asr.load} />
        <button type="button" className="link-button" onClick={() => onAnswer("hard")}>
          Skip this card
        </button>
      </section>
    );
  }

  const step = item.contrast
    ? ({ kind: "pair", sound: pack.sounds.find((s) => s.id === item.soundId)!, target: item.text, contrast: item.contrast } as const)
    : ({ kind: "shadow", sentence: { text: item.text, translation: item.translation ?? "" } } as const);

  return (
    <PracticeCard
      lang={pack.code}
      step={step}
      sounds={pack.sounds}
      transcribe={asr.transcribe}
      onScored={setScore}
      nextLabel="Continue"
      onNext={() => onAnswer(score ?? "hard")}
    />
  );
}

function describeWhen(iso: string, now: number): string {
  const minutes = Math.round((new Date(iso).getTime() - now) / 60_000);
  if (minutes < 60) return `in ${Math.max(1, minutes)} min`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `in ${hours} ${hours === 1 ? "hour" : "hours"}`;
  const days = Math.round(hours / 24);
  return days === 1 ? "tomorrow" : `in ${days} days`;
}
