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
import { progetti } from "./u15-progetti";
import { quartiere as quartiereA2 } from "./u16-quartiere";
import { vacanza } from "./u17-vacanza";
import { sport } from "./u18-sport";
import { lavoro as lavoroA2 } from "./u19-lavoro";
import { radio } from "./u20-radio";
import { laurea } from "./u21-laurea";
import { teachIt } from "../teach";
import { checkpointsIt } from "../checkpoints";

/** The Italian course, in suggested order. */
export const units: readonly Unit[] = [ciao, piacere, famiglia, alBar, giornata, quartiere, spesa, tempoLibero, lavoro, viaggio, salute, feste, ricordi, casa, progetti, quartiereA2, vacanza, sport, lavoroA2, radio, laurea]
  .map((u) => (teachIt[u.id] ? { ...u, teach: [...(u.teach ?? []), ...teachIt[u.id]] } : u))
  .map((u) => (u.checkpoint || !checkpointsIt[u.id] ? u : { ...u, checkpoint: checkpointsIt[u.id] }));
