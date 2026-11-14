import type { Metadata } from "next";
import { PlanHub } from "@/components/plan/plan-hub";

export const metadata: Metadata = { title: "Plan · Mozaik" };

export default function PlanPage() {
  return (
    <main>
      <PlanHub />
    </main>
  );
}
