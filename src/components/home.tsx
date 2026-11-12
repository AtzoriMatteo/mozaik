"use client";

import Link from "next/link";
import { isDue, isLearned } from "@/core/srs";
import { useSavedWords } from "@/lib/saved-words/use-saved-words";
import { useCourseProgress } from "@/lib/progress/use-course-progress";
import { Greeting } from "./greeting";
import { LanguagePicker } from "./language-picker";
import { useLearningLanguage } from "./learning-language";
import { Mosaic } from "./mosaic";
import { useNow } from "@/lib/use-now";

export function Home() {
  const { pack } = useLearningLanguage();
  const saved = useSavedWords(pack?.code ?? null);
  const progress = useCourseProgress(pack);
  const now = useNow();
  if (!pack) return <LanguagePicker />;

  const learned = saved.words.filter((w) => isLearned(w.stage)).length;
  const due =
    now !== null && saved.reviewReady
      ? saved.words.filter((w) => isDue(w.dueAt, new Date(now))).length
      : 0;

  return (
    <>
      <Greeting pack={pack} />

      <section className="mosaic-block" aria-labelledby="mosaic-heading">
        <h2 id="mosaic-heading" className="sr-only">Your {pack.name} mosaic</h2>
        <Mosaic learned={learned} />
        <p className="mosaic-caption">
          {learned === 0
            ? "Your mosaic is empty. Every word you learn fills a tile."
            : `${learned} ${learned === 1 ? "word" : "words"} learned.`}
          {saved.words.length > learned
            ? ` ${saved.words.length - learned} more on the way.`
            : ""}
        </p>
      </section>

      {/* One obvious next action: review if words are waiting, otherwise read. */}
      <div className="button-row">
        {due > 0 ? (
          <Link href="/review" className="button">
            Review {due} {due === 1 ? "word" : "words"}
          </Link>
        ) : null}
        <Link
          href={progress.next?.href ?? "/course"}
          className={due > 0 ? "button button-quiet" : "button"}
        >
          {progress.started ? "Continue the course" : "Start the course"}
        </Link>
      </div>
    </>
  );
}
