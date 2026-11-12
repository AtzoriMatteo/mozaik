"use client";

/**
 * Record from the microphone and turn it into what Whisper expects:
 * mono Float32 audio at 16 kHz. Also keeps the original recording so the
 * learner can play it back next to the model voice.
 */

export type Recording = { audio16k: Float32Array; url: string; peak: number; rms: number };

export function micSupported(): boolean {
  return typeof navigator !== "undefined" && !!navigator.mediaDevices?.getUserMedia && typeof MediaRecorder !== "undefined";
}

/**
 * Starts recording. `done` resolves when recording ends, either because
 * `stop()` was called or because `maxMs` passed.
 */
export async function startRecording(maxMs = 8000): Promise<{ stop: () => void; done: Promise<Recording> }> {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: { echoCancellation: true, noiseSuppression: true, channelCount: 1 },
  });
  const recorder = new MediaRecorder(stream);
  const chunks: Blob[] = [];
  recorder.ondataavailable = (e) => {
    if (e.data.size) chunks.push(e.data);
  };

  const done = new Promise<Recording>((resolve, reject) => {
    recorder.onstop = async () => {
      stream.getTracks().forEach((t) => t.stop());
      try {
        resolve(await toRecording(new Blob(chunks, { type: recorder.mimeType })));
      } catch (e) {
        reject(e);
      }
    };
  });

  const stop = () => {
    if (recorder.state !== "inactive") recorder.stop();
  };
  recorder.start();
  window.setTimeout(stop, maxMs);
  return { stop, done };
}

async function toRecording(blob: Blob): Promise<Recording> {
  const ctx = new AudioContext();
  const decoded = await ctx.decodeAudioData(await blob.arrayBuffer());
  void ctx.close();

  const offline = new OfflineAudioContext(1, Math.ceil(decoded.duration * 16000), 16000);
  const src = offline.createBufferSource();
  src.buffer = decoded;
  src.connect(offline.destination);
  src.start();
  const rendered = await offline.startRendering();
  const audio16k = rendered.getChannelData(0).slice();

  let peak = 0;
  let sum = 0;
  for (const v of audio16k) {
    const a = Math.abs(v);
    if (a > peak) peak = a;
    sum += v * v;
  }
  const rms = Math.sqrt(sum / Math.max(1, audio16k.length));
  return { audio16k, url: URL.createObjectURL(blob), peak, rms };
}

/** Too quiet to be speech (nothing said, or the mic is muted). */
export function isSilent(r: Recording): boolean {
  return r.peak < 0.04 || r.rms < 0.005;
}
