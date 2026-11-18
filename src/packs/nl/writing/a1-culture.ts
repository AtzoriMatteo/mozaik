import type { WritingPoint, WritingTask } from "@/core/writing";

/**
 * Writing added with the culture material (November 2026): about your own
 * country, its food, and the Netherlands. Same shape as ./a1.ts: six points,
 * cue words, a model for the longest length.
 */

const p = (prompt: string, ...cues: string[]): WritingPoint => ({ prompt, cues });
const pf = (prompt: string, frame: string, ...cues: string[]): WritingPoint => ({ prompt, frame, cues });
const a1 = (t: Omit<WritingTask, "level">): WritingTask => ({ ...t, level: "A1" });

const DIRECTIONS = ["noorden", "zuiden", "oosten", "westen", "noordwesten"];
const CONTINENTS = ["Europa", "Azië", "Afrika", "Amerika", "Australië", "naast"];

export const writingCulture: Record<string, WritingTask[]> = {
  "a1-kennismaken": [
    a1({
      id: "w-waar-kom-ik-vandaan",
      title: "Waar kom ik vandaan?",
      titleTranslation: "Where I'm from",
      form: "description",
      situation: "Your Dutch course has a wall where everyone introduces themselves. Write about where you come from.",
      points: [
        pf("Say which country and city you come from", "Ik kom uit …, uit … .", "kom", "uit", "vandaan"),
        pf("Say which languages you speak", "Ik spreek … .", "spreek", "taal"),
        pf("Say which country is next to yours", "… ligt naast … .", "ligt", "naast"),
        pf("Say why you're learning Dutch", "Nu leer ik Nederlands, want … .", "leer", "want"),
        pf("Say how long you've been in the Netherlands", "Ik woon sinds … in … .", "sinds", "maanden", "jaar", "weken"),
        pf("Say what you like here", "Ik vind … heel mooi.", "vind", "leuk", "mooi", "fijn"),
      ],
      model:
        "Hallo! Ik ben Ana en ik kom uit Portugal, uit Porto. Ik ben Portugese. Ik spreek Portugees, Engels en een beetje Spaans. Portugal ligt naast Spanje. Nu leer ik Nederlands, want ik woon en werk hier. Ik woon sinds januari in Rotterdam, met mijn man. Hier is het vaak koud en het waait veel. Maar ik vind Rotterdam heel mooi, en de mensen zijn aardig. Groeten, Ana",
    }),
  ],
  "a1-eten": [
    a1({
      id: "w-eten-uit-mijn-land",
      title: "Eten uit mijn land",
      titleTranslation: "Food from my country",
      form: "description",
      situation: "A Dutch food blog asks readers to share a typical dish from their country. Write about one.",
      points: [
        pf("Name a typical dish from your country", "Een typisch gerecht uit … is … .", "typisch", "gerecht", "eten"),
        pf("Say what is in it", "Er zitten … en … in.", "zitten", "zit", "met"),
        pf("Say when people eat it", "We eten het vaak op … .", "ontbijt", "lunch", "avond", "feest", "zondag", "winter", "zomer", "meestal", "vaak"),
        pf("Say if it is easy or hard to make", "Het is niet … .", "makkelijk", "moeilijk", "simpel"),
        pf("Say when people eat in the Netherlands and in your country", "Nederlanders eten om … uur, maar wij eten om … uur.", "nederlanders", "nederland"),
        pf("Invite someone to try it", "Kom een keer bij mij eten! Proef maar!", "proef", "kom", "maak"),
      ],
      model:
        "Ik kom uit Spanje. Een typisch gerecht uit Spanje is een grote pannenkoek van eieren en aardappels. Er zitten eieren, aardappels, uien, olie en een beetje zout in. We eten het vaak, ook op zondag met de hele familie. Het is niet moeilijk. Je bakt de aardappels en de uien in olie en daarna doe je de eieren in de pan. Nederlanders eten om zes uur warm, maar in Spanje eten we om negen of tien uur. Kom een keer bij mij eten, dan maak ik het voor je. Proef maar, het is echt lekker!",
    }),
  ],
  "a1-nederland": [
    a1({
      id: "w-mijn-land",
      title: "Mijn land",
      titleTranslation: "My country",
      form: "description",
      situation: "Your Dutch class is making a world map. Write a short text about your country (or a country you love).",
      points: [
        pf("Say where the country lies", "… ligt in het … van … .", "ligt", ...DIRECTIONS, ...CONTINENTS),
        pf("Name the capital", "De hoofdstad is … .", "hoofdstad"),
        pf("Say how many people live there", "Er wonen ongeveer … miljoen mensen.", "wonen", "miljoen", "mensen"),
        pf("Say which language or languages people speak", "In … spreken we … .", "spreken", "spreekt", "taal", "talen"),
        pf("Say what the weather is like", "De winter is … en de zomer is … .", "weer", "warm", "koud", "regent", "zon", "graden"),
        pf("Say what is typical of the country", "Typisch voor … zijn … .", "typisch", "mooi"),
      ],
      model:
        "Ik kom uit Canada. Canada is een heel groot land in het noorden van Amerika. In het zuiden liggen de Verenigde Staten. De hoofdstad is Ottawa, niet Toronto! Er wonen ongeveer veertig miljoen mensen. In Canada spreken we Engels en Frans. In Quebec spreken veel mensen Frans. De winter is heel lang en koud, vaak min twintig graden. De zomer is kort, maar warm. Canada is veel groter dan Nederland, maar er is ook veel leeg land. Typisch voor Canada zijn de natuur, de bossen en de meren. Canada is heel mooi in de zomer!",
    }),
    a1({
      id: "w-ansichtkaart",
      title: "Een ansichtkaart",
      titleTranslation: "A postcard",
      form: "message",
      situation: "You're spending a weekend somewhere in the Netherlands. Write a postcard to a friend, a relative or your colleagues.",
      points: [
        pf("Open the card: Lieve…, Hoi… or Beste…", "Lieve …, / Hoi …,", "lieve", "lief", "hoi", "beste", "hallo"),
        pf("Say where you are", "Groeten uit … ! Ik ben hier met … .", "groeten", "uit", "ben", "zijn"),
        pf("Say what you see", "Hier zie ik … .", "zie", "zien", "staat", "staan", "er"),
        pf("Say what you do there", "Vandaag … we … .", "fiets", "fietsen", "loop", "lopen", "eet", "eten", "drink", "drinken", "ga", "gaan"),
        pf("Say what the weather is like", "Het weer is … : het … .", "weer", "regent", "zon", "waait", "warm", "koud"),
        pf("Close the card", "Veel liefs en tot gauw, …", "liefs", "groetjes", "gauw", "tot"),
      ],
      model:
        "Lieve Sara, groeten uit Delft! Ik ben hier een weekend met mijn zus. Delft is een kleine, oude stad met mooie grachten. Op de markt staat een grote kerk, en in de winkels zie ik overal Delfts blauw. Vandaag lopen we door de stad en drinken we koffie aan het water. Morgen gaan we naar het museum van Vermeer. Hij is hier geboren. Het weer is niet zo goed. Het regent en het waait, maar het is toch gezellig. 's Avonds eten we pannenkoeken. Veel liefs en tot gauw, Nina",
    }),
    a1({
      id: "w-een-dagje-uit",
      title: "Een dagje uit",
      titleTranslation: "A day out",
      form: "message",
      situation: "A friend from abroad is visiting you. Send them a message with a plan for a day out in a Dutch city.",
      points: [
        pf("Say which city you're going to and when", "Zaterdag gaan we naar … .", "gaan", "zaterdag", "zondag", "morgen", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"),
        pf("Say how you travel and how long it takes", "Met de … duurt dat … .", "trein", "bus", "tram", "fiets", "duurt", "auto"),
        pf("Say what you'll see or visit first", "Eerst gaan we naar … .", "eerst", "museum", "toren", "kerk", "zien"),
        pf("Say what you'll do after that", "Daarna … we … .", "daarna", "dan", "later"),
        pf("Say what to bring or wear", "Neem … mee, want … .", "neem", "mee", "trek", "aan", "nodig"),
        pf("Say where and when you'll meet", "We zien elkaar om … bij … .", "zien", "elkaar", "station", "uur", "half"),
      ],
      model:
        "Hoi Tom! Wat leuk, je komt naar Nederland! Zaterdag gaan we naar Utrecht. Vanaf Amsterdam duurt dat met de trein maar een halfuur. Eerst gaan we naar de Domtoren. Die is heel hoog: honderdtwaalf meter! Je hebt een kaartje nodig, dus ik koop ze online. Daarna lopen we langs de grachten. In Utrecht zijn er cafés aan het water, onder de straat. Daar eten we pannenkoeken. Neem goede schoenen mee, want we lopen veel! En neem ook een regenjas mee. We zien elkaar om tien voor tien op het station, bij het grote bord. Tot zaterdag!",
    }),
  ],
};
