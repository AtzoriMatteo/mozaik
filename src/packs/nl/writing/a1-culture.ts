import type { WritingPoint, WritingTask } from "@/core/writing";

/**
 * Writing added with the culture material (November 2026): about your own
 * country, its food, and the Netherlands. Same shape as ./a1.ts: six points,
 * cue words, a model for the longest length.
 */

const p = (prompt: string, ...cues: string[]): WritingPoint => ({ prompt, cues });
const a1 = (t: Omit<WritingTask, "level">): WritingTask => ({ ...t, level: "A1" });

const DIRECTIONS = ["noorden", "zuiden", "oosten", "westen", "noordwesten", "noordoosten", "zuidwesten", "zuidoosten", "midden"];
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
        p("Say which country and city you come from", "kom", "vandaan"),
        p("Say which languages you speak", "spreek", "taal", "talen"),
        p("Say where your country lies", "ligt", ...DIRECTIONS, ...CONTINENTS),
        p("Say why you're learning Dutch", "leer", "omdat", "want", "daarom"),
        p("Say how long you've been in the Netherlands, or when you'd like to go", "sinds", "maanden", "jaar", "graag", "wil"),
        p("Say what you miss from home, or what you like here", "mis", "vind", "leuk", "lekker", "mooi"),
      ],
      model:
        "Hallo! Ik ben Ana en ik kom uit Portugal, uit Porto. Ik ben Portugese. Portugal ligt in het zuidwesten van Europa, naast Spanje. Ik spreek Portugees, Engels en een beetje Spaans. Nu leer ik Nederlands, want ik woon sinds januari in Rotterdam. Mijn man werkt hier in de haven. Rotterdam is een mooie stad, maar het weer is anders. Hier regent het veel en het waait vaak. Ik mis de zon, de zee en de koffie van mijn moeder. Maar ik vind de Nederlandse stroopwafels heel lekker! Groetjes, Ana",
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
        p("Name a typical dish from your country", "typisch", "gerecht", "eten"),
        p("Say what is in it", "zitten", "zit", "met"),
        p("Say when people eat it", "ontbijt", "lunch", "avond", "feest", "zondag", "winter", "zomer", "meestal", "vaak"),
        p("Say if it is easy or hard to make", "makkelijk", "moeilijk", "simpel"),
        p("Compare it with Dutch food", "dan", "Nederlands", "Nederlandse", "Nederlanders"),
        p("Invite someone to try it", "proef", "kom", "maak"),
      ],
      model:
        "Ik kom uit Turkije. Een typisch gerecht van ons is menemen. Daar zitten eieren, tomaten, paprika en uien in. We eten het meestal bij het ontbijt, vooral op zondag met de hele familie. Menemen is niet moeilijk. Je bakt de groente in een pan en daarna doe je de eieren erbij. Het eten in Turkije is pittiger dan het Nederlandse eten. Nederlanders eten bij het ontbijt brood met kaas, maar wij eten veel meer. Kom een keer bij mij ontbijten, dan maak ik menemen voor je. Proef maar, het is echt lekker!",
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
        p("Say where the country lies", "ligt", ...DIRECTIONS, ...CONTINENTS),
        p("Name the capital", "hoofdstad"),
        p("Say how many people live there", "wonen", "miljoen", "mensen"),
        p("Say which language or languages people speak", "spreken", "spreekt", "taal", "talen"),
        p("Say what the weather is like", "weer", "warm", "koud", "regent", "zon", "graden"),
        p("Say what the country is known for", "bekend", "beroemd", "typisch"),
      ],
      model:
        "Ik kom uit Canada. Canada is een heel groot land in het noorden van Amerika. In het zuiden liggen de Verenigde Staten. De hoofdstad is Ottawa, niet Toronto! Er wonen ongeveer veertig miljoen mensen. In Canada spreken we Engels en Frans. In Quebec spreken de meeste mensen Frans. De winter is heel lang en koud, vaak min twintig graden. De zomer is kort, maar warm. Canada is veel groter dan Nederland, maar er is ook veel leeg land. Canada is bekend om de natuur, de bossen en de meren. En om ahornsiroop op pannenkoeken!",
    }),
    a1({
      id: "w-ansichtkaart",
      title: "Een ansichtkaart",
      titleTranslation: "A postcard",
      form: "message",
      situation: "You're spending a weekend somewhere in the Netherlands. Write a postcard to a friend, a relative or your colleagues.",
      points: [
        p("Open the card: Lieve…, Hoi… or Beste…", "lieve", "lief", "hoi", "beste", "hallo"),
        p("Say where you are", "groeten", "uit", "ben", "zijn"),
        p("Say what you see", "zie", "zien", "staat", "staan", "er"),
        p("Say what you do there", "fiets", "fietsen", "loop", "lopen", "eet", "eten", "drink", "drinken", "ga", "gaan"),
        p("Say what the weather is like", "weer", "regent", "zon", "waait", "warm", "koud"),
        p("Close the card", "liefs", "groetjes", "gauw", "tot"),
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
        p("Say which city you're going to and when", "gaan", "zaterdag", "zondag", "morgen", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"),
        p("Say how you travel and how long it takes", "trein", "bus", "tram", "fiets", "duurt", "auto"),
        p("Say what you'll see or visit first", "eerst", "museum", "toren", "kerk", "zien"),
        p("Say what you'll do after that", "daarna", "dan", "later"),
        p("Say what to bring or wear", "neem", "mee", "trek", "aan", "nodig"),
        p("Say where and when you'll meet", "zien", "elkaar", "station", "uur", "half"),
      ],
      model:
        "Hoi Tom! Leuk dat je komt. Zaterdag gaan we naar Utrecht. Vanaf Amsterdam duurt dat met de trein maar een halfuur. Eerst klimmen we op de Domtoren. Dat is de hoogste kerktoren van Nederland. Je hebt een kaartje nodig, dus ik koop ze online. Daarna lopen we langs de grachten. In Utrecht zijn er cafés aan het water, onder de straat. Daar eten we pannenkoeken. Neem goede schoenen mee, want we lopen veel! En neem ook een regenjas mee. We zien elkaar om tien voor tien op het station, bij het grote bord. Tot zaterdag!",
    }),
  ],
};
