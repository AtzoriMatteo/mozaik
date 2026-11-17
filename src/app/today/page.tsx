import type { Metadata } from "next";
import { Today } from "@/components/story/today";

export const metadata: Metadata = { title: "Today · Mozaik" };

export default function TodayPage() {
  return (
    <main>
      <Today />
    </main>
  );
}
