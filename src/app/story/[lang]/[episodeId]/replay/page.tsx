import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPack, listPacks } from "@/core/registry";
import { allEpisodes, findEpisode } from "@/core/story";
import { EpisodeView } from "@/components/story/episode";

type Params = { lang: string; episodeId: string };

export function generateStaticParams(): Params[] {
  return listPacks().flatMap((pack) => allEpisodes(pack).map((e) => ({ lang: pack.code, episodeId: e.id })));
}

const find = ({ lang, episodeId }: Params) => {
  const pack = getPack(lang);
  return pack ? findEpisode(pack, episodeId) : undefined;
};

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const f = find(await params);
  return { title: f ? `Replay: ${f.episode.title} · Mozaik` : "Mozaik" };
}

export default async function ReplayPage({ params }: { params: Promise<Params> }) {
  const p = await params;
  if (!find(p)) notFound();
  return (
    <main>
      <EpisodeView lang={p.lang} episodeId={p.episodeId} replay />
    </main>
  );
}
