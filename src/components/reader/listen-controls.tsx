"use client";

import { useEffect, useRef, useState } from "react";
import { playLines, useHasVoice } from "@/lib/speech";

/**
 * "Listen" for a whole text: recorded with a natural voice when available,
 * otherwise the device's own voice. Normal or slow speed; tap again to stop.
 */
export function ListenControls({
  lang,
  sentences,
  label = "Listen to the text",
  onLine,
}: {
  lang: string;
  sentences: string[];
  label?: string;
  /** The sentence being heard (its index), or null when playback ends. */
  onLine?: (i: number | null) => void;
}) {
  const hasVoice = useHasVoice(lang);
  const [playing, setPlaying] = useState(false);
  const [slow, setSlow] = useState(false);
  const stop = useRef<(() => void) | null>(null);

  // Stop when leaving the page.
  useEffect(() => () => stop.current?.(), []);
  const lineRef = useRef(onLine);
  useEffect(() => {
    lineRef.current = onLine;
  });

  if (!hasVoice) return null;

  function play() {
    if (playing) {
      stop.current?.();
      stop.current = null;
      setPlaying(false);
      lineRef.current?.(null);
      return;
    }
    setPlaying(true);
    stop.current = playLines(
      lang,
      sentences.map((text) => ({ text })),
      {
        rate: slow ? 0.7 : 0.9,
        onLine: (i) => {
          if (i === null) setPlaying(false);
          lineRef.current?.(i);
        },
      },
    );
  }

  return (
    <div className="listen-controls">
      <button type="button" className="chip" onClick={play} aria-pressed={playing}>
        {playing ? "Stop" : label}
      </button>
      <label className="slow-toggle">
        <input type="checkbox" checked={slow} onChange={(e) => setSlow(e.target.checked)} />
        Slow
      </label>
    </div>
  );
}
