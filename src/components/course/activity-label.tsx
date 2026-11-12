import { activityLabel, type Activity } from "@/core/course";

/** Renders "read <Dutch title>" with the right language tag on the title. */
export function ActivityLabel({ activity, lang }: { activity: Pick<Activity, "kind" | "title">; lang: string }) {
  const l = activityLabel(activity);
  return (
    <>
      {l.verb ? `${l.verb} ` : null}
      {l.inTargetLanguage ? <span lang={lang}>{l.title}</span> : l.title}
    </>
  );
}
