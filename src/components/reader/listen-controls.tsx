"use client";

import { useEffect, useState } from "react";
import { speak, useHasVoice } from "@/components/speak-button";

/**
 * "Listen" for a whole text, using the device's own voice (free, private).
 * Normal or slow speed; tap again to stop.
 */
export function ListenControls({ lang, sentences }: { lang: string; sentences: string[] }) {
  const hasVoice = useHasVoice(lang);
  const [playing, setPlaying] = useState(false);
  const [slow, setSlow] = useState(false);

  // Stop speaking when leaving the page.
  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  if (!hasVoice) return null;

  function play() {
    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }
    setPlaying(true);
    speak(lang, sentences.join(" "), slow ? 0.7 : 0.9);
    const poll = window.setInterval(() => {
      if (!window.speechSynthesis.speaking) {
        setPlaying(false);
        window.clearInterval(poll);
      }
    }, 400);
  }

  return (
    <div className="listen-controls">
      <button type="button" className="chip" onClick={play} aria-pressed={playing}>
        {playing ? "Stop" : "Listen to the text"}
      </button>
      <label className="slow-toggle">
        <input type="checkbox" checked={slow} onChange={(e) => setSlow(e.target.checked)} />
        Slow
      </label>
    </div>
  );
}
