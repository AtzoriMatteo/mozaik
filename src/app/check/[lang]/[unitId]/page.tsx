import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPack, listPacks } from "@/core/registry";
import { CheckpointView } from "@/components/course/checkpoint";

type Params = { lang: string; unitId: string };

export function generateStaticParams(): Params[] {
  return listPacks().flatMap((pack) => pack.units.filter((u) => u.checkpoint).map((u) => ({ lang: pack.code, unitId: u.id })));
}

const find = ({ lang, unitId }: Params) => getPack(lang)?.units.find((u) => u.id === unitId && u.checkpoint);

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const unit = find(await params);
  return { title: unit ? `Checkpoint: ${unit.checkpoint!.title} · Mozaik` : "Mozaik" };
}

export default async function CheckpointPage({ params }: { params: Promise<Params> }) {
  const p = await params;
  if (!find(p)) notFound();
  return (
    <main>
      <CheckpointView lang={p.lang} unitId={p.unitId} />
    </main>
  );
}
