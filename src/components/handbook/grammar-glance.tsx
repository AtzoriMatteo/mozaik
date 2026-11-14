"use client";

import Link from "next/link";
import { useState } from "react";
import { Block } from "@/components/grammar/grammar-lesson";
import { useLearningLanguage } from "@/components/learning-language";

/**
 * Every grammar point on one page: its one-line summary and its key table or
 * sentence pattern, with a link to the full lesson.
 */
export function GrammarGlance() {
  const { pack } = useLearningLanguage();
  const [level, setLevel] = useState<"all" | "A1" | "A2">("all");
  if (!pack) return null;
  const points = pack.grammar.filter((g) => g.lesson && g.unit && (level === "all" || g.level === level));

  return (
    <div className="handbook-tables">
      <div className="handbook-filter">
        <div className="handbook-levels" role="group" aria-label="Level">
          {(["all", "A1", "A2"] as const).map((l) => (
            <button key={l} type="button" className="plan-chip" aria-pressed={level === l} onClick={() => setLevel(l)}>
              {l === "all" ? "All" : l}
            </button>
          ))}
        </div>
      </div>
      <nav className="handbook-contents" aria-label="On this page">
        {points.map((g) => (
          <a key={g.id} href={`#${g.id}`}>
            {g.title}
          </a>
        ))}
      </nav>
      {points.map((g) => {
        const key = g.lesson!.blocks.filter((b) => b.kind === "table" || b.kind === "slots").slice(0, 2);
        return (
          <section key={g.id} id={g.id} className="handbook-table grammar-glance" aria-labelledby={`${g.id}-title`}>
            <h2 id={`${g.id}-title`}>
              {g.title} <span className="level-tag">{g.level}</span>
            </h2>
            <p className="handbook-intro">{g.summary}</p>
            {key.map((b, i) => (
              <Block key={i} block={b} lang={pack.code} />
            ))}
            <p>
              <Link href={`/grammar/${pack.code}/${g.id}`}>Full lesson and exercises</Link>
            </p>
          </section>
        );
      })}
    </div>
  );
}
