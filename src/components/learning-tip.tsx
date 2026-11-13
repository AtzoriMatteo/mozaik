"use client";

import { useState, useSyncExternalStore } from "react";
import { pickTip, tipsFor, type TipPlace } from "@/core/tips";
import type { LanguagePack } from "@/core/language-pack";

const noop = () => () => {};
const today = () => Math.floor(Date.now() / 86_400_000);

/**
 * One learning tip, the same all day for a given place, with a way to see
 * another. Rendered in the browser only, so the day can't mismatch the
 * server's.
 */
export function LearningTip({ pack, place }: { pack: LanguagePack | null; place: TipPlace }) {
  const day = useSyncExternalStore(noop, today, () => -1);
  const [offset, setOffset] = useState(0);
  if (day < 0) return null;
  const tips = tipsFor(place, pack?.tips);
  const tip = pickTip(tips, day, place, offset);
  if (!tip) return null;
  return (
    <aside className="learning-tip" aria-label="Learning tip">
      <p className="learning-tip-text">
        <span className="learning-tip-mark" aria-hidden="true" />
        {tip.text}
      </p>
      {tips.length > 1 ? (
        <button type="button" className="learning-tip-more" onClick={() => setOffset((o) => o + 1)}>
          Another tip
        </button>
      ) : null}
    </aside>
  );
}
