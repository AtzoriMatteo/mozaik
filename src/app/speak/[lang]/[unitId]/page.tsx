import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPack, listPacks } from "@/core/registry";
import { SpeakingPractice } from "@/components/speaking/speaking-practice";

type Params = { lang: string; unitId: string };

export function generateStaticParams(): Params[] {
  return listPacks().flatMap((pack) =>
    pack.units.filter((u) => u.speaking).map((u) => ({ lang: pack.code, unitId: u.id })),
  );
}

const find = ({ lang, unitId }: Params) => getPack(lang)?.units.find((u) => u.id === unitId && u.speaking);

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const unit = find(await params);
  return { title: unit ? `Speaking: ${unit.title} · Mozaik` : "Mozaik" };
}

export default async function SpeakRoute({ params }: { params: Promise<Params> }) {
  const p = await params;
  if (!find(p)) notFound();
  return (
    <main>
      <SpeakingPractice lang={p.lang} unitId={p.unitId} />
    </main>
  );
}
