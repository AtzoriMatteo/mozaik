"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import type { OutMessage } from "./asr.worker";

/**
 * On-device speech recognition, shared by every speaking screen.
 * The worker (and model) are created once per page load, on demand.
 */

export type AsrStatus =
  | { state: "idle" }
  | { state: "loading"; loaded: number; total: number }
  | { state: "ready"; device: "webgpu" | "wasm" }
  | { state: "error"; message: string };

let worker: Worker | null = null;
let status: AsrStatus = { state: "idle" };
const listeners = new Set<() => void>();
const pending = new Map<number, { resolve: (t: string) => void; reject: (e: Error) => void }>();
let nextId = 1;

function setStatus(s: AsrStatus) {
  status = s;
  listeners.forEach((l) => l());
}

function getWorker(): Worker {
  if (worker) return worker;
  worker = new Worker(new URL("./asr.worker.ts", import.meta.url), { type: "module" });
  worker.onmessage = (e: MessageEvent<OutMessage>) => {
    const m = e.data;
    if (m.type === "progress") setStatus({ state: "loading", loaded: m.loaded, total: m.total });
    else if (m.type === "ready") setStatus({ state: "ready", device: m.device });
    else if (m.type === "result") {
      pending.get(m.id)?.resolve(m.text);
      pending.delete(m.id);
    } else if (m.type === "error") {
      if (m.id !== undefined) {
        pending.get(m.id)?.reject(new Error(m.message));
        pending.delete(m.id);
      } else {
        setStatus({ state: "error", message: m.message });
      }
    }
  };
  return worker;
}

export function useAsr(language: string) {
  const current = useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => status,
    () => status,
  );

  const load = useCallback(() => {
    if (status.state === "idle" || status.state === "error") {
      setStatus({ state: "loading", loaded: 0, total: 0 });
      getWorker().postMessage({ type: "load" });
    }
  }, []);

  const transcribe = useCallback(
    (audio: Float32Array) =>
      new Promise<string>((resolve, reject) => {
        const id = nextId++;
        pending.set(id, { resolve, reject });
        getWorker().postMessage({ type: "transcribe", id, audio, language }, [audio.buffer]);
      }),
    [language],
  );

  // If the model was downloaded before, warm it up straight away (it's cached).
  const warmed = useRef(false);
  useEffect(() => {
    if (warmed.current) return;
    warmed.current = true;
    try {
      if (window.localStorage.getItem("mozaik:asr-downloaded") === "1") load();
    } catch {
      // ignore
    }
  }, [load]);

  useEffect(() => {
    if (current.state === "ready") {
      try {
        window.localStorage.setItem("mozaik:asr-downloaded", "1");
      } catch {
        // ignore
      }
    }
  }, [current.state]);

  return { status: current, load, transcribe };
}

/** Whisper's language names for our pack codes. */
export const WHISPER_LANGUAGE: Record<string, string> = { nl: "dutch" };
