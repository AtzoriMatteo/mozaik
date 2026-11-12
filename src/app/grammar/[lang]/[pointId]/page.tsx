import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPack, listPacks } from "@/core/registry";
import { GrammarLessonView } from "@/components/grammar/grammar-lesson";

type Params = { lang: string; pointId: string };

export function generateStaticParams(): Params[] {
  return listPacks().flatMap((pack) =>
    pack.grammar.filter((g) => g.lesson && g.unit).map((g) => ({ lang: pack.code, pointId: g.id })),
  );
}

const find = ({ lang, pointId }: Params) =>
  getPack(lang)?.grammar.find((g) => g.id === pointId && g.lesson && g.unit);

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const point = find(await params);
  return { title: point ? `${point.title} · Mozaik` : "Mozaik" };
}

export default async function GrammarRoute({ params }: { params: Promise<Params> }) {
  const p = await params;
  if (!find(p)) notFound();
  return (
    <main>
      <GrammarLessonView lang={p.lang} pointId={p.pointId} />
    </main>
  );
}
