"use client";

import Link from "next/link";
import { getPack } from "@/core/registry";
import type { LanguagePack } from "@/core/language-pack";
import { RESOURCE_KIND_LABEL, resourcesFor, type Resource } from "@/core/resources";
import { useProgress } from "@/lib/progress/use-read-texts";
import { SkillGlyph } from "@/components/unit-tile";

const KINDS: Resource["kind"][] = ["watch", "listen", "read", "practise"];

/** Real material for the learner's level, grouped by what you do with it. */
export function BeyondPage({ lang }: { lang: string }) {
  const pack = getPack(lang) as LanguagePack;
  const { doneIds, toggle } = useProgress("beyond", pack.code);

  return (
    <article className="beyond">
      <Link href="/course" className="back-link">Course</Link>
      <h1 className="page-title">Beyond the course</h1>
      <p className="lede">
        Real {pack.name} made for people, not for textbooks. Everything here is free and opens on its own site;
        Mozaik doesn&apos;t embed players, so nobody tracks you here.
      </p>

      {pack.levels.map((level) => {
        const items = resourcesFor(pack, level);
        if (items.length === 0) return null;
        return (
          <section key={level} className="beyond-level" aria-labelledby={`beyond-${level}`}>
            <h2 id={`beyond-${level}`} className="level-heading">
              <span className="level-tag">{level}</span>
              What you can follow now
            </h2>
            {KINDS.map((kind) => {
              const list = items.filter((r) => r.kind === kind);
              if (list.length === 0) return null;
              return (
                <section key={kind} className="skill-section" data-skill="beyond">
                  <h3>
                    <SkillGlyph skill={kind === "watch" || kind === "listen" ? "listen" : kind === "read" ? "read" : "beyond"} />
                    {RESOURCE_KIND_LABEL[kind]}
                  </h3>
                  <ul className="resource-list">
                    {list.map((r) => {
                      const done = doneIds.has(r.id);
                      return (
                        <li key={r.id} className="resource" data-done={done || undefined}>
                          <div className="resource-main">
                            <a href={r.url} target="_blank" rel="noopener noreferrer" className="resource-title">
                              {r.title}
                            </a>
                            {r.by ? <span className="resource-by">{r.by}</span> : null}
                            {r.stretch ? <span className="resource-stretch">A bit above A1</span> : null}
                            <p className="resource-why">{r.why}</p>
                            <p className="resource-how">{r.how}</p>
                          </div>
                          <button
                            type="button"
                            className="resource-done"
                            aria-pressed={done}
                            onClick={() => toggle(r.id)}
                          >
                            {done ? "Tried it" : "Mark as tried"}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              );
            })}
          </section>
        );
      })}
    </article>
  );
}
