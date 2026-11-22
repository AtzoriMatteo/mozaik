import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPack, listPacks } from "@/core/registry";
import { GrammarLessonView } from "@/components/grammar/grammar-lesson";
import { GrammarMixView } from "@/components/grammar/grammar-mix";
import { hasMix, mixId, unitForMix } from "@/core/mix";

type Params = { lang: string; pointId: string };

export function generateStaticParams(): Params[] {
  return listPacks().flatMap((pack) => [
    ...pack.grammar.filter((g) => g.lesson && g.unit).map((g) => ({ lang: pack.code, pointId: g.id })),
    ...pack.units.filter((u) => hasMix(pack, u)).map((u) => ({ lang: pack.code, pointId: mixId(u) })),
  ]);
}

const find = ({ lang, pointId }: Params) =>
  getPack(lang)?.grammar.find((g) => g.id === pointId && g.lesson && g.unit);

const findMix = ({ lang, pointId }: Params) => {
  const pack = getPack(lang);
  const unit = pack ? unitForMix(pack, pointId) : undefined;
  return pack && unit && hasMix(pack, unit) ? unit : undefined;
};

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = await params;
  const point = find(p);
  if (!point && findMix(p)) return { title: "Grammar mix · Mozaik" };
  return { title: point ? `${point.title} · Mozaik` : "Mozaik" };
}

export default async function GrammarRoute({ params }: { params: Promise<Params> }) {
  const p = await params;
  if (!find(p) && findMix(p)) {
    return (
      <main>
        <GrammarMixView lang={p.lang} id={p.pointId} />
      </main>
    );
  }
  if (!find(p)) notFound();
  return (
    <main>
      <GrammarLessonView lang={p.lang} pointId={p.pointId} />
    </main>
  );
}
