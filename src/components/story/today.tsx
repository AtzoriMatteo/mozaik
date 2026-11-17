"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import type { LanguagePack } from "@/core/language-pack";
import { buildSession, REVIEW_KINDS } from "@/core/review-items";
import { minutesOn } from "@/core/plan";
import { allEpisodes, findEpisode, SESSION_LENGTHS, sessionSteps, type SessionLength } from "@/core/story";
import { LanguagePicker } from "@/components/language-picker";
import { useLearningLanguage } from "@/components/learning-language";
import { SessionRunner, type Session } from "@/components/review/review";
import { useProgress } from "@/lib/progress/use-read-texts";
import { useReview } from "@/lib/review/use-review";
import { useReviewSettings } from "@/lib/review/use-review-settings";
import { usePlan } from "@/lib/plan/use-plan";
import { markReviewDone, readLength, useDayLog, writeLength } from "@/lib/today";
import { useNow } from "@/lib/use-now";
import { dayKey } from "./episode";

const lengthLabel = (l: SessionLength) => (l === null ? "No limit" : `${l} min`);
const lengthValue = (l: SessionLength) => (l === null ? "none" : String(l));
const parseLength = (v: string | null): SessionLength | undefined =>
  v === "none" ? null : SESSION_LENGTHS.find((l) => l !== null && String(l) === v);

/** The session length closest to the minutes planned for today. */
function fromPlan(minutes: number): SessionLength {
  return SESSION_LENGTHS.filter((l): l is 5 | 10 | 15 | 30 => l !== null).reduce((best, l) =>
    Math.abs(l - minutes) < Math.abs(best - minutes) ? l : best,
  );
}

type StepView = { id: string; title: string; detail: string; minutes: number; done: boolean; action: React.ReactNode };

/**
 * Today (trial): one short session in a set order, as long as you choose.
 * Review first, then the next story episode; longer sessions add a replay of
 * the last episode (fluency) and another episode. No streaks, no guilt: what
 * you don't do is simply there tomorrow.
 */
export function Today() {
  const { pack } = useLearningLanguage();
  if (!pack) return <LanguagePicker />;
  return <TodayFor pack={pack} />;
}

function TodayFor({ pack }: { pack: LanguagePack }) {
  const { settings: reviewSettings } = useReviewSettings();
  const review = useReview(pack, reviewSettings);
  const plan = usePlan(pack.code);
  const clock = useNow();
  const log = useDayLog();
  const done = useProgress("story", pack.code);
  const replays = useProgress("replay", pack.code);
  const stored = useSyncExternalStore(
    (l) => {
      window.addEventListener("storage", l);
      return () => window.removeEventListener("storage", l);
    },
    readLength,
    () => null,
  );
  const [picked, setPicked] = useState<SessionLength | undefined>(undefined);
  const [session, setSession] = useState<Session | null>(null);

  const episodes = allEpisodes(pack);
  if (episodes.length === 0) {
    return <p className="lede">There&apos;s no story for this language yet.</p>;
  }
  if (!review.loaded || clock === null) return <p className="lede">Getting today ready…</p>;

  const planMinutes = plan.settings ? minutesOn(plan.settings, new Date(clock).getDay()) : null;
  const length: SessionLength = picked !== undefined ? picked : (parseLength(stored) ?? (planMinutes ? fromPlan(planMinutes) : 15));
  const { steps, reviewCards } = sessionSteps(length);

  if (session) {
    return (
      <SessionRunner
        pack={pack}
        session={session}
        settings={reviewSettings}
        rate={review.rate}
        graduate={review.graduate}
        stageOf={(id) => review.schedules.get(id)?.stage ?? 0}
        error={review.error}
        onEnd={() => {
          markReviewDone();
          setSession(null);
        }}
      />
    );
  }

  const now = new Date(clock);
  const mixKinds = REVIEW_KINDS.filter((k) => reviewSettings.mix[k]);
  const cards = buildSession(review.items, review.schedules, {
    kinds: new Set(mixKinds),
    size: reviewCards,
    newPerDay: reviewSettings.newPerDay,
    now,
  });

  const firstUnread = episodes.find((e) => !done.doneIds.has(e.id));
  const todaysId = log.episode ?? firstUnread?.id;
  const todays = todaysId ? findEpisode(pack, todaysId) : undefined;
  const previous = todays && todays.index > 0 ? todays.story.episodes[todays.index - 1] : undefined;
  const replayId = previous ? `${previous.id}@${dayKey(clock)}` : null;
  const another = log.more ? findEpisode(pack, log.more) : episodes.find((e) => !done.doneIds.has(e.id) && e.id !== todaysId);

  const all: Record<string, StepView | null> = {
    review: {
      id: "review",
      title: "Review",
      detail: log.review ? "Done for today." : cards.length ? `${cards.length} cards from what you've read.` : "Nothing due: you're up to date.",
      minutes: Math.max(1, Math.round(cards.length * 0.4)),
      done: !!log.review || cards.length === 0,
      action: (
        <button type="button" className="button" onClick={() => setSession({ items: cards, label: "Review" })}>
          Start review
        </button>
      ),
    },
    episode: todays
      ? {
          id: "episode",
          title: `Episode ${todays.index + 1}: ${todays.episode.title}`,
          detail: `${todays.story.title}. Read it while you hear it, then a few questions and one thing to notice.`,
          minutes: length !== null && length <= 5 ? 4 : 7,
          done: !!log.episode,
          action: (
            <Link href={`/story/${pack.code}/${todays.episode.id}`} className="button">
              Read episode {todays.index + 1}
            </Link>
          ),
        }
      : null,
    replay:
      previous && replayId
        ? {
            id: "replay",
            title: `Replay: ${previous.title}`,
            detail: "The last episode again, straight through, no stopping. Easy on purpose: it builds speed.",
            minutes: 2,
            done: replays.doneIds.has(replayId),
            action: (
              <Link href={`/story/${pack.code}/${previous.id}/replay`} className="button">
                Replay it
              </Link>
            ),
          }
        : null,
    more: another
      ? {
          id: "more",
          title: "One more episode",
          detail: `${"episode" in another ? another.episode.title : another.title}, if you're enjoying it.`,
          minutes: 7,
          done: !!log.more,
          action: (
            <Link href={`/story/${pack.code}/${"episode" in another ? another.episode.id : another.id}`} className="button">
              Keep reading
            </Link>
          ),
        }
      : null,
  };
  const list = steps.map((s) => all[s]).filter((s): s is StepView => !!s);
  const nextStep = list.find((s) => !s.done);
  const total = list.reduce((n, s) => n + s.minutes, 0);

  return (
    <div className="today">
      <p className="today-trial">Trial: the story way of learning, with episode 1–4 of “{episodes.length ? findEpisode(pack, episodes[0].id)!.story.title : ""}”.</p>
      <h1 className="page-title">Today</h1>

      <div className="today-length" role="group" aria-label="Session length">
        {SESSION_LENGTHS.map((l) => (
          <button
            key={lengthValue(l)}
            type="button"
            className="chip"
            aria-pressed={l === length}
            onClick={() => {
              setPicked(l);
              writeLength(lengthValue(l));
            }}
          >
            {lengthLabel(l)}
          </button>
        ))}
      </div>
      <p className="today-meta">
        {planMinutes && stored === null && picked === undefined ? `From your plan: ${planMinutes} min. ` : null}
        About {total} min{length !== null && total > length + 2 ? " (a bit over: stop whenever you like)" : ""}.
      </p>

      <ol className="today-steps">
        {list.map((s) => (
          <li key={s.id} data-state={s.done ? "done" : s === nextStep ? "now" : "later"}>
            <div className="today-step-head">
              <span className="today-tick" aria-hidden="true">{s.done ? "✓" : ""}</span>
              <h2>{s.title}</h2>
              <span className="today-min">{s.minutes} min</span>
            </div>
            <p>{s.detail}</p>
            {s === nextStep ? s.action : null}
            {!s.done && s !== nextStep ? <div className="today-later">{s.action}</div> : null}
          </li>
        ))}
      </ol>

      {!nextStep ? (
        <div className="today-done">
          <h2>That&apos;s today.</h2>
          <p>Stop here, or keep going if you feel like it. Nothing is lost either way.</p>
          <div className="button-row">
            <Link href="/review" className="button button-quiet">More review</Link>
            <Link href="/course" className="button button-quiet">The course</Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
