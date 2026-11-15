import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPack, listPacks } from "@/core/registry";
import { UnitVocab } from "@/components/vocab/unit-vocab";

type Params = { lang: string; unitId: string };

export function generateStaticParams(): Params[] {
  return listPacks().flatMap((p) => p.units.map((u) => ({ lang: p.code, unitId: u.id })));
}

export const metadata: Metadata = { title: "Words · Mozaik" };

export default async function UnitWordsRoute({ params }: { params: Promise<Params> }) {
  const { lang, unitId } = await params;
  if (!getPack(lang)?.units.some((u) => u.id === unitId)) notFound();
  return (
    <main>
      <UnitVocab lang={lang} unitId={unitId} />
    </main>
  );
}
