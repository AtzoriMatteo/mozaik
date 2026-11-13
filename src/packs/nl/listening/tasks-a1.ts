import type { Task } from "@/core/content";
import { gaps, heard, orderNl, tf } from "../units/helpers";

/** Close-listening tasks for the first A1 listening items, keyed by item id. */
export const listeningTasksA1: Record<string, Task[]> = {
  "noor-over-haar-familie": [
    gaps(1, "ouders", "vader"),
    heard(6, ["tien", "twaalf", "twintig"], 1),
    tf("Noor gaat elke week naar huis.", "Noor goes home every week.", false),
  ],
  "bij-de-bakker": [
    heard(1, ["wit", "bruin", "rond"], 1),
    gaps(3, "half", "Gesneden"),
    orderNl("Put the lines in the order you hear them.", "Anders nog iets?", "Ja, vier croissants. Wat kosten die?", "Een euro vijfentwintig per stuk.", "Oké. Dat was het."),
  ],
  "op-het-perron": [
    heard(0, ["vier", "vijf", "zeven"], 1),
    tf("De sprinter stopt op alle stations.", "The sprinter stops at all stations.", true),
    gaps(1, "tien", "vertraging"),
  ],
  "een-voicemail": [
    heard(2, ["dinsdag", "donderdag", "zaterdag"], 1),
    gaps(4, "water"),
    tf("De verhuurder wil dat Luca terugbelt.", "The landlord wants Luca to call back.", true),
  ],
  "de-eerste-werkdag": [
    orderNl("What does Luca do first? Put it in order.", "de stoelen buiten zetten", "de koffiemachine klaarmaken", "pauze om één uur"),
    gaps(5, "half", "gratis"),
    tf("Luca moet afwassen.", "Luca has to do the dishes.", false),
  ],
  "bij-de-apotheek": [
    heard(1, ["hoofdpijn", "keelpijn", "buikpijn"], 1),
    gaps(4, "Twee", "eten"),
    tf("Het kost vijf euro negentig.", "It costs five euros ninety.", false),
  ],
  "het-weerbericht": [
    heard(2, ["twaalf", "twintig", "achttien"], 0),
    gaps(3, "zon", "warmer"),
    tf("Op zondag is er veel wind.", "On Sunday there's a lot of wind.", true),
  ],
};
