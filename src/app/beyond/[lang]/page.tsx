import { redirect } from "next/navigation";
import { listPacks } from "@/core/registry";

type Params = { lang: string };

export function generateStaticParams(): Params[] {
  return listPacks().map((pack) => ({ lang: pack.code }));
}

/** "Beyond the course" is now part of the Library. */
export default async function BeyondRoute({ params }: { params: Promise<Params> }) {
  const { lang } = await params;
  redirect(`/library/${lang}`);
}
