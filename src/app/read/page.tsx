import type { Metadata } from "next";
import { TextList } from "@/components/reader/text-list";

export const metadata: Metadata = { title: "Read · Mozaik" };

export default function ReadPage() {
  return (
    <main>
      <TextList />
    </main>
  );
}
