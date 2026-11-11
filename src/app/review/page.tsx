import type { Metadata } from "next";
import { Review } from "@/components/review/review";

export const metadata: Metadata = { title: "Review · Mozaik" };

export default function ReviewPage() {
  return (
    <main>
      <Review />
    </main>
  );
}
