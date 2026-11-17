import type { UnitContent } from "./types";
import { avondTexts, italiaanseAvond } from "../stories/italiaanse-avond";
import { avondCheckpoint } from "../stories/italiaanse-avond-more";

export const eten: UnitContent = {
  id: "a1-eten",
  level: "A1",
  title: "Eten en boodschappen",
  titleTranslation: "Food and shopping",
  story: italiaanseAvond,
  canDo: [
    "Buy food at a market or shop and ask what it costs",
    "Understand prices and amounts",
    "Follow and give simple cooking instructions",
  ],
  // The unit is one story: its texts are the episodes (Matteo, 17 Nov 2026).
  texts: avondTexts,
  sequence: [
    "avond-1-een-plan",
    "voicemail-van-fatima",
    "er-is",
    "avond-2-in-de-supermarkt",
    "omroep-supermarkt",
    "demonstratives",
    "de-vries-belt",
    "avond-3-op-de-markt",
    "bij-de-kaaskraam",
    "diminutives",
    "write",
    "avond-4-eet-smakelijk",
    "words",
    "check",
  ],
  checkpoint: avondCheckpoint,
};

export const dagEnTijd: UnitContent = {
  id: "a1-dag-en-tijd",
  level: "A1",
  title: "Dag en tijd",
  titleTranslation: "Days and time",
  canDo: [
    "Describe your daily routine",
    "Tell the time, including Dutch 'half' times",
    "Make an appointment: suggest a day, time and place",
  ],
  texts: [
    {
      id: "een-gewone-dag",
      level: "A1",
      title: "Een gewone dag",
      titleTranslation: "An ordinary day",
      grammar: ["separable-verbs", "verb-second", "time-numbers", "present-regular", "conjunctions"],
      paragraphs: [
        [
          {
            text: "Luca staat elke dag om zeven uur op. Opstaan is niet makkelijk, want hij is geen ochtendmens.",
            translation: "Luca gets up at seven every day. Getting up isn't easy, because he isn't a morning person.",
          },
          {
            text: "Eerst gaat hij douchen. Daarna ontbijt hij: brood met boter en kaas, een ei en een kopje koffie met melk, zonder suiker.",
            translation: "First he has a shower. Then he has breakfast: bread with butter and cheese, an egg and a cup of coffee with milk, no sugar.",
          },
          {
            text: "Om half negen fietst hij naar de universiteit.",
            translation: "At half past eight he cycles to the university.",
          },
          {
            text: "Het is tien minuten fietsen. Als het hard regent, neemt hij de bus. Die stopt bijna voor de deur.",
            translation: "It's a ten-minute bike ride. If it's raining hard, he takes the bus. It stops almost outside the door.",
          },
        ],
        [
          {
            text: "'s Ochtends heeft hij les. Het eerste uur is biologie, het tweede uur is scheikunde.",
            translation: "In the morning he has class. The first hour is biology, the second hour is chemistry.",
          },
          {
            text: "Om twaalf uur eet hij met andere studenten in de kantine.",
            translation: "At twelve he eats with other students in the canteen.",
          },
          {
            text: "Veel Nederlandse studenten nemen hun lunch van huis mee: twee boterhammen en een appel.",
            translation: "Many Dutch students bring their lunch from home: two sandwiches and an apple.",
          },
          {
            text: "Luca vindt dat een beetje saai, maar hij doet het nu ook. Het is goedkoop!",
            translation: "Luca finds that a bit boring, but he does it now too. It's cheap!",
          },
        ],
        [
          {
            text: "'s Middags gaat hij naar de bibliotheek. Daar leest hij en schrijft hij.",
            translation: "In the afternoon he goes to the library. There he reads and writes.",
          },
          {
            text: "Om vijf uur komt hij thuis. Soms doet hij eerst boodschappen.",
            translation: "At five he comes home. Sometimes he does the shopping first.",
          },
          {
            text: "'s Avonds kookt hij, kijkt hij een film of belt hij met zijn familie.",
            translation: "In the evening he cooks, watches a film or calls his family.",
          },
          {
            text: "Om elf uur gaat hij naar bed. Hij is dan meestal heel moe, en hij slaapt de hele nacht.",
            translation: "At eleven he goes to bed. By then he's usually very tired, and he sleeps through the night.",
          },
        ],
        [
          {
            text: "Op vrijdag is het anders.",
            translation: "On Fridays it's different.",
          },
          {
            text: "Dan gaat hij met vrienden naar het café van Bram.",
            translation: "Then he goes to Bram's café with friends.",
          },
          {
            text: "Ze drinken een biertje en praten tot laat.",
            translation: "They have a beer and talk until late.",
          },
          {
            text: "En op zaterdag? Dan staat hij nooit vroeg op!",
            translation: "And on Saturdays? Then he never gets up early!",
          },
        ],
      ],
    },
    {
      id: "een-afspraak",
      level: "A1",
      title: "Een afspraak",
      titleTranslation: "An appointment",
      grammar: ["modal-verbs", "questions", "time-numbers", "gaan-future", "separable-verbs"],
      paragraphs: [
        [
          {
            text: "Fatima zit naast Luca in de taalles.",
            translation: "Fatima sits next to Luca in Dutch class.",
          },
          {
            text: "Ze komt uit Marokko en ze woont al een jaar in Den Haag.",
            translation: "She's from Morocco and she's been living in The Hague for a year.",
          },
          {
            text: "Na de les praten ze nog even.",
            translation: "After class they chat for a bit.",
          },
        ],
        [
          {
            text: "\"Zullen we samen Nederlands oefenen?\" vraagt Fatima.",
            translation: "\"Shall we practise Dutch together?\" asks Fatima.",
          },
          {
            text: "\"Goed idee! Wanneer kun jij?\"",
            translation: "\"Good idea! When can you do it?\"",
          },
          {
            text: "\"Ik kan op dinsdag of donderdag. Op maandag en woensdag moet ik werken.\"",
            translation: "\"I can do Tuesday or Thursday. On Mondays and Wednesdays I have to work.\"",
          },
          {
            text: "\"Donderdag kan ik niet, dan heb ik voetbal. Dinsdag is goed. Hoe laat?\"",
            translation: "\"I can't do Thursday, I have football then. Tuesday is good. What time?\"",
          },
          {
            text: "\"Om kwart over vier? Na mijn werk.\"",
            translation: "\"At quarter past four? After my work.\"",
          },
          {
            text: "\"Prima. Waar spreken we af?\"",
            translation: "\"Fine. Where shall we meet?\"",
          },
          {
            text: "\"In de bibliotheek? Daar is het rustig.\"",
            translation: "\"In the library? It's quiet there.\"",
          },
          {
            text: "\"Welke bibliotheek? Er zijn er twee.\" \"De grote, bij het station. Ik kom met de trein uit Den Haag. Ik heb een kaartje voor de hele maand.\"",
            translation: "\"Which library? There are two.\" \"The big one, by the station. I'm coming by train from The Hague. I have a ticket for the whole month.\"",
          },
          { text: "\"Oké, tot dinsdag dan!\"", translation: "\"Okay, see you Tuesday then!\"" },
        ],
        [
          {
            text: "Thuis schrijft Luca de afspraak in zijn agenda: dinsdag 14 januari, kwart over vier, bibliotheek, Fatima.",
            translation: "At home Luca writes the appointment in his diary: Tuesday 14 January, quarter past four, library, Fatima.",
          },
          {
            text: "Hij wil het niet vergeten.",
            translation: "He doesn't want to forget it.",
          },
        ],
        [
          {
            text: "Op dinsdag is Luca te vroeg. Hij is er al om vier uur.",
            translation: "On Tuesday Luca is too early. He's already there at four.",
          },
          {
            text: "Hij wacht en wacht. Om half vijf belt hij Fatima.",
            translation: "He waits and waits. At half past four he calls Fatima.",
          },
          {
            text: "\"Waar ben je?\" \"Sorry! Mijn trein heeft vertraging. Ik ben er over tien minuten.\"",
            translation: "\"Where are you?\" \"Sorry! My train is delayed. I'll be there in ten minutes.\"",
          },
          {
            text: "\"Geen probleem. Ik wacht op je. Tot straks!\"",
            translation: "\"No problem. I'll wait for you. See you in a bit!\"",
          },
          {
            text: "Typisch Nederland, denkt Luca: de trein is weer te laat.",
            translation: "Typical Netherlands, Luca thinks: the train is late again.",
          },
        ],
      ],
    },
  ],
};
