"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { nextActivity } from "@/core/course";
import type { LanguagePack } from "@/core/language-pack";
import { mixedReview, mixId, unitForMix } from "@/core/mix";
import { getPack } from "@/core/registry";
import { useCourseProgress } from "@/lib/progress/use-course-progress";
import { NextActivityLink } from "@/components/course/next-activity-link";
import { ExerciseRunner } from "./grammar-lesson";

/** The grammar mix of a unit: old and new points shuffled, no hints about which is which. */
export function GrammarMixView({ lang, id }: { lang: string; id: string }) {
  const pack = getPack(lang) as LanguagePack;
  const unit = unitForMix(pack, id)!;
  const items = useMemo(() => mixedReview(pack, unit), [pack, unit]);
  const progress = useCourseProgress(pack);
  const [mode, setMode] = useState<"intro" | "practise" | "done">("intro");
  const [score, setScore] = useState(0);
  const points = [...new Map(items.map((i) => [i.point.id, i.point])).values()];
  const own = points.filter((p) => p.unit === unit.id);
  const earlier = points.filter((p) => p.unit !== unit.id);

  return (
    <article className="grammar">
      <Link href={`/course/${lang}/${unit.id}`} className="back-link">
        Back to {unit.titleTranslation}
      </Link>
      <header className="unit-page-head">
        <p className="reader-unit">
          <span className="level-tag">{unit.level}</span>
          Grammar
        </p>
        <h1 className="page-title">Grammar mix</h1>
        <p className="lede">
          {items.length} exercises from this unit and earlier ones, mixed up. Nothing tells you which pattern each one is: that&apos;s the point.
        </p>
      </header>

      {mode === "intro" ? (
        <section className="step-body">
          <p>From this unit: {own.map((p) => p.title).join(", ")}.</p>
          {earlier.length ? <p>Coming back: {earlier.map((p) => p.title).join(", ")}.</p> : null}
          <button type="button" className="button" onClick={() => setMode("practise")}>
            Start the mix
          </button>
        </section>
      ) : null}

      {mode === "practise" ? (
        <ExerciseRunner
          lang={lang}
          seed={id}
          exercises={items.map((i) => i.exercise)}
          sources={items.map((i) => ({ title: i.point.title, href: `/grammar/${lang}/${i.point.id}` }))}
          onDone={(right) => {
            setScore(right);
            setMode("done");
            progress.markGrammar(mixId(unit));
          }}
        />
      ) : null}

      {mode === "done" ? (
        <section className="step-body">
          <h2 className="done-title">
            {score} of {items.length} right
          </h2>
          <p className="lede">
            {score / items.length >= 0.8
              ? "Old and new, all in place."
              : "Mixing patterns is harder than doing them one by one. The lesson names after each answer show where to look again."}
          </p>
          <div className="button-row">
            <NextActivityLink pack={pack} next={nextActivity(pack, { kind: "grammar", id: mixId(unit) })} onDone={() => progress.markGrammar(mixId(unit))} />
          </div>
        </section>
      ) : null}
    </article>
  );
}
