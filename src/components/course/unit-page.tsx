"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { minutesToRead } from "@/core/content";
import { getPack } from "@/core/registry";
import type { LanguagePack } from "@/core/language-pack";
import { activities, unitGrammar } from "@/core/course";
import { ActivityLabel } from "./activity-label";
import { useCourseProgress } from "@/lib/progress/use-course-progress";
import { SkillGlyph, UnitTile, type Skill } from "@/components/unit-tile";
import { resourcesFor } from "@/core/resources";

const KIND_LABEL = {
  dialogue: "Dialogue",
  monologue: "Monologue",
  announcement: "Announcement",
  voicemail: "Voicemail",
} as const;

/** One unit: its tile and goals, then a section per skill. */
export function UnitPage({ lang, unitId }: { lang: string; unitId: string }) {
  const pack = getPack(lang) as LanguagePack;
  const unit = pack.units.find((u) => u.id === unitId)!;
  const progress = useCourseProgress(pack);
  const nextHere = activities(pack).find((a) => a.unit.id === unit.id && !progress.isDone(a)) ?? null;
  const grammar = unitGrammar(pack, unit);
  const look = unit.look ?? { motif: "tulip" as const, glaze: "cobalt" as const };
  const n = pack.units.indexOf(unit) + 1;
  const beyond = resourcesFor(pack, unit.level).filter((r) => r.units?.includes(unit.id));

  return (
    <article className="unit-page" data-glaze={look.glaze}>
      <Link href="/course" className="back-link">All units</Link>

      <header className="unit-hero">
        <UnitTile motif={look.motif} glaze={look.glaze} className="unit-hero-art" />
        <div className="unit-hero-text">
          <p className="reader-unit">
            <span className="level-tag">{unit.level}</span>
            Unit {n} of {pack.units.length}
          </p>
          <h1 className="page-title unit-title" lang={lang}>
            <span className="unit-num unit-num-big" aria-hidden="true">{n}</span>
            {unit.title}
          </h1>
          <p className="reader-subtitle">{unit.titleTranslation}</p>
        </div>
      </header>

      <section className="can-do-box" aria-labelledby="can-do-title">
        <h2 id="can-do-title">After this unit you can</h2>
        <ul>
          {unit.canDo.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      {nextHere ? (
        <Link href={nextHere.href} className="button continue-button">
          <span className="capitalize">
            <ActivityLabel activity={nextHere} lang={lang} />
          </span>
        </Link>
      ) : null}

      <SkillSection skill="read" title="Reading">
        {unit.texts.map((t) => (
          <Row
            key={t.id}
            href={`/read/${lang}/${t.id}`}
            title={t.title}
            titleLang={lang}
            meta={[t.titleTranslation, `${minutesToRead(t)} min`, t.tasks?.length ? `${t.tasks.length} questions` : ""]}
            done={progress.isDone({ kind: "read", id: t.id })}
          />
        ))}
      </SkillSection>

      <SkillSection skill="listen" title="Listening">
        {unit.listening.map((l) => (
          <Row
            key={l.id}
            href={`/listen/${lang}/${l.id}`}
            title={l.title}
            titleLang={lang}
            meta={[l.titleTranslation, KIND_LABEL[l.kind]]}
            done={progress.isDone({ kind: "listen", id: l.id })}
          />
        ))}
      </SkillSection>

      {grammar.length > 0 ? (
        <SkillSection skill="grammar" title="Grammar">
          {grammar.map((g) => (
            <Row
              key={g.id}
              href={`/grammar/${lang}/${g.id}`}
              title={g.title}
              meta={[g.summary]}
              done={progress.isDone({ kind: "grammar", id: g.id })}
            />
          ))}
        </SkillSection>
      ) : null}

      {unit.speaking ? (
        <SkillSection skill="speak" title="Speaking">
          <Row
            href={`/speak/${lang}/${unit.id}`}
            title="Speaking practice"
            meta={[
              `Sounds: ${unit.speaking.sounds.map((id) => pack.sounds.find((s) => s.id === id)?.title).join(", ")}`,
              `${unit.speaking.shadowing.length} sentences to say`,
            ]}
            done={progress.isDone({ kind: "speak", id: unit.id })}
          />
        </SkillSection>
      ) : null}

      {beyond.length > 0 ? (
        <SkillSection skill="beyond" title="Beyond the course">
          {beyond.map((r) => (
            <li key={r.id}>
              <a href={r.url} className="activity-row" target="_blank" rel="noopener noreferrer">
                <span className="activity-title">{r.title}</span>
                <span className="activity-meta">
                  <span>{r.how}</span>
                </span>
              </a>
            </li>
          ))}
          <li>
            <Link href={`/beyond/${lang}`} className="activity-row activity-row-more">
              <span className="activity-title">Everything for {unit.level}</span>
            </Link>
          </li>
        </SkillSection>
      ) : null}
    </article>
  );
}

function SkillSection({ skill, title, children }: { skill: Skill; title: string; children: ReactNode }) {
  return (
    <section className="skill-section" data-skill={skill} aria-labelledby={`${skill}-title`}>
      <h2 id={`${skill}-title`}>
        <SkillGlyph skill={skill} />
        {title}
      </h2>
      <ol className="activity-list">{children}</ol>
    </section>
  );
}

function Row({
  href,
  title,
  titleLang,
  meta,
  done,
}: {
  href: string;
  title: string;
  titleLang?: string;
  meta: string[];
  done: boolean;
}) {
  return (
    <li>
      <Link href={href} className="activity-row" data-done={done || undefined}>
        <span className="activity-title" lang={titleLang}>{title}</span>
        <span className="activity-meta">
          {meta.filter(Boolean).map((m) => (
            <span key={m}>{m}</span>
          ))}
        </span>
        {done ? (
          <span className="activity-done">
            <span className="sr-only">Done</span>
          </span>
        ) : null}
      </Link>
    </li>
  );
}
