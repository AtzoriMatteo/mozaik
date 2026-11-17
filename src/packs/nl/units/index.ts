import type { Glaze, Motif, Unit } from "@/core/content";
import { familie, kennismaken } from "./a1-people";
import { dagEnTijd, eten } from "./a1-daily";
import { wonen, werkEnStudie } from "./a1-places";
import { gezondheid, vrijeTijd } from "./a1-life";
import { feestdagen, kleren } from "./a1-new-units";
import { basis } from "./a1-basis";
import { unitsA2 } from "./a2";
import { nederland } from "./a1-nederland";
import {
  auMijnKnie,
  kuntUDatHerhalen,
  opDeFiets,
  waarKomJeVandaan,
  watVoorWerk,
} from "./a1-culture-texts";
import type { ListeningItem, ReadingText } from "@/core/content";
import type { WritingTask } from "@/core/writing";
import { avondListening, avondWriting } from "../stories/italiaanse-avond-more";
import { weekListening, weekWriting } from "../stories/een-drukke-week";
import { buurmanListening, buurmanWriting } from "../stories/een-nieuwe-buurman";
import { werkListening, werkWriting } from "../stories/fatima-zoekt-werk";
import {
  fatimasProfiel,
  gezondLeven,
  mailVanGiulia,
  vrijeTijdText,
} from "./a1-more-texts";
import { tasksA1 } from "./tasks-a1";
import type { UnitContent } from "./types";
import { listeningA1 } from "../listening/a1";
import { listeningA1More } from "../listening/a1-more";
import { listeningNewUnits } from "../listening/a1-new-units";
import { listeningBasis } from "../listening/a1-basis";
import { listeningCulture } from "../listening/a1-culture";
import { listeningTasksA1 } from "../listening/tasks-a1";
import { speakingA1 } from "../speaking/a1";
import { writingA1 } from "../writing/a1";
import { writingCulture } from "../writing/a1-culture";
import { teachNl } from "../teach";
import { writingTargetA2 } from "../writing/a2-target";

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
  "a1-gezondheid": gezondLeven,
  "a1-vrije-tijd": vrijeTijdText,
} as const;

/** Culture texts added later, after a unit's own texts. */
const CULTURE_TEXTS: Record<string, ReadingText[]> = {
  "a1-basis": [kuntUDatHerhalen],
  "a1-kennismaken": [waarKomJeVandaan],
  "a1-werk-en-studie": [watVoorWerk],
  "a1-gezondheid": [auMijnKnie],
  "a1-vrije-tijd": [opDeFiets],
};

const listening = { ...listeningA1 };
for (const [id, items] of Object.entries({ ...listeningA1More, ...listeningNewUnits, ...listeningBasis })) {
  listening[id] = [...(listening[id] ?? []), ...items];
}
for (const [id, items] of Object.entries(listeningCulture)) {
  listening[id] = [...(listening[id] ?? []), ...items];
}

/** Story units: their listening and a writing topic come from the story too. */
const STORY: Record<string, { listening: ListeningItem[]; writing: WritingTask[] }> = {
  "a1-eten": { listening: avondListening, writing: [avondWriting] },
  // Unit 5 keeps its listening (other people on other days) and adds a scene from the story.
  "a1-dag-en-tijd": { listening: [weekListening, ...(listening["a1-dag-en-tijd"] ?? [])], writing: [weekWriting] },
  "a1-wonen": { listening: [buurmanListening, ...(listening["a1-wonen"] ?? [])], writing: [buurmanWriting] },
  "a1-werk-en-studie": { listening: [werkListening, ...(listening["a1-werk-en-studie"] ?? [])], writing: [werkWriting] },
};

function assemble(u: UnitContent): Unit {
  const story = STORY[u.id];
  const extra = story ? undefined : MORE_TEXTS[u.id as keyof typeof MORE_TEXTS];
  return {
    ...u,
    look: u.look ?? LOOK[u.id],
    texts: [...u.texts, ...(extra ? [extra] : []), ...(CULTURE_TEXTS[u.id] ?? [])].map((t) => ({ ...t, tasks: t.tasks ?? tasksA1[t.id] })),
    listening: (story?.listening ?? listening[u.id] ?? []).map((l) => ({ ...l, tasks: l.tasks ?? listeningTasksA1[l.id] })),
    speaking: speakingA1[u.id],
    writing: [...(story?.writing ?? []), ...(writingA1[u.id] ?? []), ...(writingCulture[u.id] ?? [])],
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
  nederland,
  feestdagen,
]
  .map(assemble)
  .concat(unitsA2)
  .map((u) => (teachNl[u.id] ? { ...u, teach: [...(u.teach ?? []), ...teachNl[u.id]] } : u))
  .map((u) => ({
    ...u,
    writing: u.writing?.map((t) => {
      const target = writingTargetA2[t.id];
      if (!target) return t;
      return {
        ...t,
        situationTarget: target.situation,
        points: t.points.map((p, i) => ({ ...p, promptTarget: target.prompts[i] })),
      };
    }),
  }));
