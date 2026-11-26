import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPack, listPacks } from "@/core/registry";
import { findLibraryPrompt, libraryPrompts } from "@/core/library";
import { WritingTaskView } from "@/components/writing/writing";

type Params = { lang: string; taskId: string };

export function generateStaticParams(): Params[] {
  return listPacks().flatMap((p) => libraryPrompts(p).map((t) => ({ lang: p.code, taskId: t.id })));
}

const find = ({ lang, taskId }: Params) => {
  const pack = getPack(lang);
  return pack ? findLibraryPrompt(pack, taskId) : undefined;
};

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const task = find(await params);
  return { title: task ? `${task.titleTranslation} · Library · Mozaik` : "Mozaik" };
}

export default async function LibraryWritingRoute({ params }: { params: Promise<Params> }) {
  const p = await params;
  if (!find(p)) notFound();
  return (
    <main>
      <WritingTaskView lang={p.lang} taskId={p.taskId} />
    </main>
  );
}
