"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { tipOrder, tipsFor, type TipPlace } from "@/core/tips";
import type { LanguagePack } from "@/core/language-pack";

const noop = () => () => {};
const KEY = "mozaik:tips-seen";

function readSeen(): Record<string, number> {
  try {
    return JSON.parse(window.localStorage.getItem(KEY) ?? "{}") as Record<string, number>;
  } catch {
    return {};
  }
}

function markSeen(id: string) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify({ ...readSeen(), [id]: Date.now() }));
  } catch {
    // Storage unavailable: tips just won't remember what you've seen.
  }
}

/**
 * One learning tip, picked from the ones you haven't seen in the longest
 * time, so every visit brings something new; "Another tip" moves on.
 * Rendered in the browser only.
 */
export function LearningTip({ pack, place }: { pack: LanguagePack | null; place: TipPlace }) {
  const client = useSyncExternalStore(noop, () => true, () => false);
  // Fixed for this visit: which tips were seen when, and a shuffle seed.
  const [visit] = useState(() => (typeof window === "undefined" ? null : { seen: readSeen(), seed: Math.random() }));
  const [offset, setOffset] = useState(0);
  const tips = tipsFor(place, pack?.tips);
  const order = visit ? tipOrder(tips, visit.seen, visit.seed) : [];
  const tip = order.length ? order[offset % order.length] : null;

  useEffect(() => {
    if (tip) markSeen(tip.id);
  }, [tip]);

  if (!client || !tip) return null;
  return (
    <aside className="learning-tip" aria-label="Learning tip">
      <span className="learning-tip-mark" aria-hidden="true">i</span>
      <div>
        <p className="learning-tip-label">Tip</p>
        <p className="learning-tip-text">{tip.text}</p>
      </div>
      {tips.length > 1 ? (
        <button type="button" className="learning-tip-more" onClick={() => setOffset((o) => o + 1)}>
          Another tip
        </button>
      ) : null}
    </aside>
  );
}
