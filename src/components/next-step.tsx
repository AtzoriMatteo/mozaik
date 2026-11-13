"use client";

import Link, { useLinkStatus } from "next/link";
import type { ReactNode } from "react";
import { SkillGlyph, type Skill } from "@/components/unit-tile";

/**
 * The one obvious next action, drawn as a glazed tile set into a cobalt
 * slab: a small tile showing what kind of work is next, the action itself,
 * and a quiet line saying where it sits in the course.
 */
export function NextStep({
  href,
  skill,
  children,
  detail,
  quiet,
  onClick,
}: {
  href: string;
  skill: Skill;
  children: ReactNode;
  detail?: ReactNode;
  quiet?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link href={href} className="next-step" data-quiet={quiet || undefined} onClick={onClick}>
      <Inset skill={skill} />
      <span className="next-step-text">
        <span className="next-step-label">{children}</span>
        {detail ? <span className="next-step-detail">{detail}</span> : null}
      </span>
    </Link>
  );
}

/** Lives inside the Link so it can show when a click is still loading. */
function Inset({ skill }: { skill: Skill }) {
  const { pending } = useLinkStatus();
  return (
    <span className="next-step-tile" data-pending={pending || undefined}>
      <SkillGlyph skill={skill} />
    </span>
  );
}
