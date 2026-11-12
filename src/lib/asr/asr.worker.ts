/// <reference lib="webworker" />
/**
 * Speech recognition on the learner's own device (Whisper via
 * transformers.js). Runs in a worker so the page stays responsive.
 * The model is downloaded once from Hugging Face's CDN and cached by the
 * browser; audio never leaves the device.
 */
import { env, pipeline, type AutomaticSpeechRecognitionPipeline } from "@huggingface/transformers";

env.allowLocalModels = false;

export const MODEL_ID = "onnx-community/whisper-base";

type InMessage =
  | { type: "load" }
  | { type: "transcribe"; id: number; audio: Float32Array; language: string };

export type OutMessage =
  | { type: "progress"; loaded: number; total: number }
  | { type: "ready"; device: "webgpu" | "wasm" }
  | { type: "result"; id: number; text: string }
  | { type: "error"; id?: number; message: string };

let asr: Promise<AutomaticSpeechRecognitionPipeline> | null = null;
const files = new Map<string, { loaded: number; total: number }>();

async function pickDevice(): Promise<"webgpu" | "wasm"> {
  try {
    const gpu = (navigator as Navigator & { gpu?: { requestAdapter(): Promise<unknown> } }).gpu;
    if (gpu && (await gpu.requestAdapter())) return "webgpu";
  } catch {
    // fall through to WASM
  }
  return "wasm";
}

function load() {
  asr ??= (async () => {
    const device = await pickDevice();
    const p = (await pipeline("automatic-speech-recognition", MODEL_ID, {
      device,
      // Small downloads: quantised decoder; full-precision encoder on GPU for accuracy.
      dtype: device === "webgpu" ? { encoder_model: "fp32", decoder_model_merged: "q4" } : "q8",
      progress_callback: (info: { status: string; file?: string; loaded?: number; total?: number }) => {
        if (info.status === "progress" && info.file) {
          files.set(info.file, { loaded: info.loaded ?? 0, total: info.total ?? 0 });
          let loaded = 0;
          let total = 0;
          for (const f of files.values()) {
            loaded += f.loaded;
            total += f.total;
          }
          post({ type: "progress", loaded, total });
        }
      },
    })) as AutomaticSpeechRecognitionPipeline;
    post({ type: "ready", device });
    return p;
  })();
  asr.catch((e: Error) => {
    asr = null;
    post({ type: "error", message: e.message });
  });
  return asr;
}

function post(msg: OutMessage) {
  (self as unknown as DedicatedWorkerGlobalScope).postMessage(msg);
}

self.onmessage = async (e: MessageEvent<InMessage>) => {
  const msg = e.data;
  if (msg.type === "load") {
    void load();
    return;
  }
  try {
    const transcriber = await load();
    const out = await transcriber(msg.audio, { language: msg.language, task: "transcribe" });
    const text = Array.isArray(out) ? out.map((o) => o.text).join(" ") : out.text;
    post({ type: "result", id: msg.id, text: text.trim() });
  } catch (err) {
    post({ type: "error", id: msg.id, message: (err as Error).message });
  }
};
