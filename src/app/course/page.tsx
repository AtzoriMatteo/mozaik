import type { Metadata } from "next";
import { CourseOverview } from "@/components/course/course-overview";

export const metadata: Metadata = { title: "Course · Mozaik" };

export default function CoursePage() {
  return (
    <main>
      <CourseOverview />
    </main>
  );
}
