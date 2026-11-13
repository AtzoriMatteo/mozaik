import type { Glaze, Motif, Unit } from "@/core/content";
import { familie, kennismaken } from "./a1-people";
import { dagEnTijd, eten } from "./a1-daily";
import { wonen, werkEnStudie } from "./a1-places";
import { gezondheid, vrijeTijd } from "./a1-life";
import { feestdagen, kleren } from "./a1-new-units";
import { basis } from "./a1-basis";
import {
  fatimasProfiel,
  gezondLeven,
  inDeSupermarkt,
  inHetZiekenhuis,
  kamerTeHuur,
  lucasWeek,
  mailVanGiulia,
  vrijeTijdText,
} from "./a1-more-texts";
import { tasksA1 } from "./tasks-a1";
import type { UnitContent } from "./types";
import { listeningA1 } from "../listening/a1";
import { listeningA1More } from "../listening/a1-more";
import { listeningNewUnits } from "../listening/a1-new-units";
import { listeningBasis } from "../listening/a1-basis";
import { listeningTasksA1 } from "../listening/tasks-a1";
import { speakingA1 } from "../speaking/a1";

/** Each unit's tile: a hand-painted motif and one of the polychrome glazes. */
const LOOK: Record<string, { motif: Motif; glaze: Glaze }> = {
  "a1-kennismaken": { motif: "tulip", glaze: "cobalt" },
  "a1-familie": { motif: "birds", glaze: "manganese" },
  "a1-eten": { motif: "cheese", glaze: "ochre" },
  "a1-dag-en-tijd": { motif: "clock", glaze: "copper" },
  "a1-wonen": { motif: "gable", glaze: "iron" },
  "a1-werk-en-studie": { motif: "book", glaze: "cobalt" },
  "a1-gezondheid": { motif: "herb", glaze: "copper" },
  "a1-vrije-tijd": { motif: "windmill", glaze: "manganese" },
};

/** The third text of each of the first eight units. */
const MORE_TEXTS = {
  "a1-kennismaken": fatimasProfiel,
  "a1-familie": mailVanGiulia,
  "a1-eten": inDeSupermarkt,
  "a1-dag-en-tijd": lucasWeek,
  "a1-wonen": kamerTeHuur,
  "a1-werk-en-studie": inHetZiekenhuis,
  "a1-gezondheid": gezondLeven,
  "a1-vrije-tijd": vrijeTijdText,
} as const;

const listening = { ...listeningA1 };
for (const [id, items] of Object.entries({ ...listeningA1More, ...listeningNewUnits, ...listeningBasis })) {
  listening[id] = [...(listening[id] ?? []), ...items];
}

function assemble(u: UnitContent): Unit {
  const extra = MORE_TEXTS[u.id as keyof typeof MORE_TEXTS];
  return {
    ...u,
    look: u.look ?? LOOK[u.id],
    texts: [...u.texts, ...(extra ? [extra] : [])].map((t) => ({ ...t, tasks: t.tasks ?? tasksA1[t.id] })),
    listening: (listening[u.id] ?? []).map((l) => ({ ...l, tasks: l.tasks ?? listeningTasksA1[l.id] })),
    speaking: speakingA1[u.id],
  };
}

/** The Dutch course, in suggested order. */
export const units: readonly Unit[] = [
  basis,
  kennismaken,
  familie,
  eten,
  dagEnTijd,
  wonen,
  werkEnStudie,
  gezondheid,
  vrijeTijd,
  kleren,
  feestdagen,
].map(assemble);
