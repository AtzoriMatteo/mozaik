"use client";

import Link from "next/link";
import { buildSession, REVIEW_KINDS } from "@/core/review-items";
import { currentLevel, mosaicActivities } from "@/core/mosaic";
import { useReview } from "@/lib/review/use-review";
import { useReviewSettings } from "@/lib/review/use-review-settings";
import { useCourseProgress } from "@/lib/progress/use-course-progress";
import { Greeting } from "./greeting";
import { LanguagePicker } from "./language-picker";
import { useLearningLanguage } from "./learning-language";
import { LevelMosaic } from "./level-mosaic";
import { useNow } from "@/lib/use-now";

export function Home() {
  const { pack } = useLearningLanguage();
  const { settings } = useReviewSettings();
  const review = useReview(pack, settings);
  const progress = useCourseProgress(pack);
  const now = useNow();
  if (!pack) return <LanguagePicker />;

  const level = currentLevel(pack, progress.isDone);
  const list = mosaicActivities(pack, level);
  const done = list.filter((a) => progress.isDone(a)).length;
  const due =
    now !== null && review.loaded
      ? buildSession(review.items, review.schedules, {
          kinds: new Set(REVIEW_KINDS.filter((k) => settings.mix[k])),
          size: settings.size,
          newPerDay: settings.newPerDay,
          now: new Date(now),
        }).length
      : 0;

  return (
    <>
      <Greeting pack={pack} />

      <section className="mosaic-block" aria-labelledby="mosaic-heading">
        <h2 id="mosaic-heading" className="sr-only">Your {level} mosaic</h2>
        <LevelMosaic lang={pack.code} level={level} done={done} total={list.length} />
      </section>

      {/* One obvious next action: review if cards are waiting, otherwise the course. */}
      <div className="button-row">
        {due > 0 ? (
          <Link href="/review" className="button">
            Review ({due} {due === 1 ? "card" : "cards"})
          </Link>
        ) : null}
        <Link
          href={progress.next?.href ?? "/course"}
          className={due > 0 ? "button button-quiet" : "button"}
        >
          {progress.started ? "Continue the course" : "Start the course"}
        </Link>
        {review.loaded && review.newWords.length > 0 ? (
          <Link href="/review" className="button button-quiet">
            Meet new words
          </Link>
        ) : null}
      </div>
    </>
  );
}
