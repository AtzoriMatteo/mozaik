import { redirect } from "next/navigation";

/** The reading list now lives in the course, unit by unit. */
export default function ReadPage() {
  redirect("/course");
}
