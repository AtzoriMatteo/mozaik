import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPack, listPacks } from "@/core/registry";
import { ListeningExercise } from "@/components/listening/listening-exercise";

type Params = { lang: string; itemId: string };

export function generateStaticParams(): Params[] {
  return listPacks().flatMap((pack) =>
    pack.units.flatMap((u) => u.listening.map((l) => ({ lang: pack.code, itemId: l.id }))),
  );
}

const find = ({ lang, itemId }: Params) =>
  getPack(lang)?.units.flatMap((u) => u.listening).find((l) => l.id === itemId);

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const item = find(await params);
  return { title: item ? `${item.title} · Mozaik` : "Mozaik" };
}

export default async function ListenRoute({ params }: { params: Promise<Params> }) {
  const p = await params;
  if (!find(p)) notFound();
  return (
    <main>
      <ListeningExercise lang={p.lang} itemId={p.itemId} />
    </main>
  );
}
