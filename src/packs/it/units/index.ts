import type { Unit } from "@/core/content";
import { ciao } from "./u1-ciao";
import { piacere } from "./u2-piacere";
import { famiglia } from "./u3-famiglia";
import { alBar } from "./u4-al-bar";
import { giornata } from "./u5-la-giornata";
import { quartiere } from "./u6-il-quartiere";
import { spesa } from "./u7-la-spesa";
import { tempoLibero } from "./u8-il-tempo-libero";
import { lavoro } from "./u9-il-lavoro";
import { viaggio } from "./u10-in-viaggio";
import { salute } from "./u11-la-salute";
import { feste } from "./u12-le-feste";
import { ricordi } from "./u13-ricordi";
import { casa } from "./u14-casa";
import { teachIt } from "../teach";
import { checkpointsIt } from "../checkpoints";

/** The Italian course, in suggested order. */
export const units: readonly Unit[] = [ciao, piacere, famiglia, alBar, giornata, quartiere, spesa, tempoLibero, lavoro, viaggio, salute, feste, ricordi, casa]
  .map((u) => (teachIt[u.id] ? { ...u, teach: [...(u.teach ?? []), ...teachIt[u.id]] } : u))
  .map((u) => (u.checkpoint || !checkpointsIt[u.id] ? u : { ...u, checkpoint: checkpointsIt[u.id] }));
