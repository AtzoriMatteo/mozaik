import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPack, listPacks } from "@/core/registry";
import { WritingTaskView } from "@/components/writing/writing";

type Params = { lang: string; unitId: string; taskId: string };

export function generateStaticParams(): Params[] {
  return listPacks().flatMap((p) =>
    p.units.flatMap((u) => (u.writing ?? []).map((t) => ({ lang: p.code, unitId: u.id, taskId: t.id }))),
  );
}

const find = ({ lang, unitId, taskId }: Params) =>
  getPack(lang)?.units.find((u) => u.id === unitId)?.writing?.find((t) => t.id === taskId);

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const task = find(await params);
  return { title: task ? `${task.titleTranslation} · Mozaik` : "Mozaik" };
}

export default async function WritingTaskRoute({ params }: { params: Promise<Params> }) {
  const p = await params;
  if (!find(p)) notFound();
  return (
    <main>
      <WritingTaskView lang={p.lang} unitId={p.unitId} taskId={p.taskId} />
    </main>
  );
}
