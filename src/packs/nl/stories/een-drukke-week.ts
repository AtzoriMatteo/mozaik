import type { Checkpoint, ListeningItem, ListeningLine, ReadingText, Sentence, Story, WordHelp } from "@/core/content";
import type { WritingTask } from "@/core/writing";

const s = (text: string, translation: string): Sentence => ({ text, translation });
const l = (speaker: string, text: string, translation: string): ListeningLine => ({ speaker, text, translation });

/**
 * A1 unit 5 as a story (Matteo, 17 Nov 2026): one street, a different person
 * in the lead each unit. Here: Ruth Pinas from the bakery and her son Jayden,
 * with Luca from across the street, and his trouble with "half vier".
 */
export const eenDrukkeWeek: Story = {
  id: "een-drukke-week",
  title: "Een drukke week",
  titleTranslation: "A busy week",
  intro:
    "Ruth Pinas lives across the street from Luca and starts work at the bakery at half past five. Her son Jayden is twelve, and not a morning person. One week, four episodes, and a Dutch way of telling the time that catches Luca out.",
};

const storyWords: Record<string, WordHelp> = {
  maandagavond: { meaning: "Monday evening" },
  ruth: { meaning: "Ruth (a name)" },
  pinas: { meaning: "Pinas (a Surinamese surname)" },
  jayden: { meaning: "Jayden (a name)" },
  suriname: { meaning: "Suriname (a country in South America, Dutch until 1975)" },
  ochtendmens: { meaning: "morning person", closer: "ochtend (morning) + mens (person)" },
  wekker: { meaning: "alarm clock", closer: "from wekken, to wake" },
  mam: { meaning: "mum" },
  eindelijk: { meaning: "finally, at last" },
  douche: { meaning: "shower" },
  douchen: { meaning: "to have a shower" },
  bakkerij: { meaning: "bakery (the shop and the place where bread is baked)" },
  niemand: { meaning: "nobody" },
  aan: { meaning: "on; to (aanbellen = ring the bell)" },
  tandarts: { meaning: "dentist", closer: "tand (tooth) + arts (doctor)" },
  eng: { meaning: "scary" },
  scheikunde: { meaning: "chemistry", closer: "scheiden (to separate) + kunde (knowledge)" },
  biologie: { meaning: "biology" },
  agenda: { meaning: "diary, planner", local: "Not just a meeting list: it's the paper or phone planner" },
  vergeten: { meaning: "to forget" },
  rustig: { meaning: "quiet, calm" },
  assistente: { meaning: "assistant (a woman)" },
  klok: { meaning: "clock" },
  meneer: { meaning: "sir; Mr" },
  dertig: { meaning: "thirty" },
  rood: { meaning: "red" },
  keer: { meaning: "time (dit keer = this time; nog een keer = once more)" },
  biertje: { meaning: "a (small) beer", base: "bier" },
  gek: { meaning: "crazy, strange" },
  eerder: { meaning: "earlier", base: "vroeg" },
  uitslapen: { meaning: "to sleep in", closer: "uit (out) + slapen (sleep): sleep till you're done" },
  films: { meaning: "films", base: "film" },
  film: { meaning: "film, movie" },
  saai: { meaning: "boring" },
  fout: { meaning: "wrong; a mistake" },
  zoon: { meaning: "son" },
  hagelslag: { meaning: "chocolate sprinkles (on bread)", local: "A Dutch breakfast classic, even for adults" },
  regent: { meaning: "it rains, it's raining", base: "regenen" },
  kwartier: { meaning: "quarter of an hour" },
  breestraat: { meaning: "Breestraat (Leiden's main shopping street)" },
  opschrijven: { meaning: "to write down" },
  schrijft: { meaning: "writes", base: "schrijven" },
  tegenover: { meaning: "opposite, across from" },
  wist: { meaning: "knew", base: "weten" },
  voetbal: { meaning: "football" },
  probleem: { meaning: "problem" },
};

const story = { level: "A1" as const, words: storyWords };

export const weekTexts: ReadingText[] = [
  {
    ...story,
    id: "week-1-vroeg-op",
    title: "Vroeg op",
    titleTranslation: "Up early",
    grammar: ["separable-verbs", "verb-second", "time-numbers", "present-regular", "conjunctions"],
    paragraphs: [
      [
        s("Ruth Pinas woont tegenover Luca, op nummer elf.", "Ruth Pinas lives across from Luca, at number eleven."),
        s("Ze komt uit Suriname en ze werkt bij de bakker in de straat.", "She's from Suriname and she works at the baker's in the street."),
        s("Haar wekker gaat om half vijf.", "Her alarm goes off at half past four."),
        s("Om vijf uur staat ze op, en om half zes begint haar werk.", "At five she gets up, and at half past five her work starts."),
        s("Vroeg opstaan is niet moeilijk voor Ruth, want ze is een echt ochtendmens.", "Getting up early isn't hard for Ruth, because she's a real morning person."),
      ],
      [
        s("Haar zoon Jayden is twaalf. Hij is geen ochtendmens.", "Her son Jayden is twelve. He isn't a morning person."),
        s("Om zeven uur belt Ruth hem vanuit de bakkerij: \"Jayden, opstaan!\"", "At seven Ruth calls him from the bakery: \"Jayden, get up!\""),
        s("\"Ja, mam. Straks!\"", "\"Yes, mum. In a minute!\""),
        s("Om kwart over zeven belt ze weer: \"Jayden! Douchen, nu!\"", "At quarter past seven she calls again: \"Jayden! Shower, now!\""),
        s("Om half acht staat hij eindelijk onder de douche.", "At half past seven he's finally standing under the shower."),
      ],
      [
        s("Jayden ontbijt snel: brood met boter en hagelslag, en een glas melk.", "Jayden has a quick breakfast: bread with butter and chocolate sprinkles, and a glass of milk."),
        s("In zijn tas doet hij twee boterhammen en een appel.", "In his bag he puts two sandwiches and an apple."),
        s("Om acht uur fietst hij naar school. Het is een kwartier fietsen.", "At eight he cycles to school. It's a quarter of an hour by bike."),
        s("Als het hard regent, neemt hij de bus. Maar de bus is vaak te laat, en dan is Jayden ook te laat.", "If it's raining hard, he takes the bus. But the bus is often late, and then Jayden is late too."),
        s("Om drie uur is de school uit. Dan gaat hij naar de bibliotheek, want thuis is niemand.", "At three school is out. Then he goes to the library, because there's nobody at home."),
        s("Ruth komt om vier uur thuis. Ze is moe, maar blij.", "Ruth comes home at four. She's tired, but happy."),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "Why does Ruth wake her son by phone?", options: ["She's already at work when he has to get up", "He has no alarm clock", "She wants to talk about school"], answer: 0 },
      { kind: "truefalse", statement: "Jayden staat graag vroeg op.", translation: "Jayden likes getting up early.", answer: false },
      { kind: "choice", prompt: "Why does Jayden go to the library after school?", options: ["There's nobody at home until four", "He has a class there", "His friends work there"], answer: 0 },
      { kind: "choice", prompt: "It's pouring with rain. What will probably happen?", options: ["Jayden takes the bus and is late", "Jayden cycles faster", "Jayden stays at home"], answer: 0 },
    ],
  },
  {
    ...story,
    id: "week-2-een-afspraak",
    title: "Een afspraak voor donderdag",
    titleTranslation: "An appointment for Thursday",
    grammar: ["modal-verbs", "questions", "jij-inversion", "separable-verbs", "negation"],
    paragraphs: [
      [
        s("Op maandagavond belt Ruth bij Luca aan.", "On Monday evening Ruth rings Luca's doorbell."),
        s("\"Hoi Luca, mag ik iets vragen? Jayden heeft donderdag een afspraak bij de tandarts, om half vier. Maar ik moet tot vier uur werken.\"", "\"Hi Luca, can I ask something? Jayden has a dentist's appointment on Thursday, at half past three. But I have to work until four.\""),
        s("\"En ik ga met hem mee?\"", "\"And I go with him?\""),
        s("\"Graag! Kun jij donderdag?\"", "\"Please! Can you do Thursday?\""),
      ],
      [
        s("Luca kijkt in zijn agenda.", "Luca looks in his diary."),
        s("\"Donderdag heb ik 's ochtends les: eerst biologie, dan scheikunde. Maar 's middags ben ik vrij.\"", "\"On Thursday I have class in the morning: first biology, then chemistry. But in the afternoon I'm free.\""),
        s("\"Zullen we om drie uur afspreken? Dan haal ik Jayden op bij de bibliotheek.\"", "\"Shall we say three o'clock? Then I'll pick Jayden up at the library.\""),
        s("\"Perfect. De tandarts is in de Breestraat, tien minuten fietsen.\"", "\"Perfect. The dentist is in the Breestraat, ten minutes by bike.\""),
        s("\"Wil hij wel gaan?\"", "\"Does he want to go?\""),
        s("\"Nee, natuurlijk niet!\" Ruth lacht. \"Hij vindt de tandarts eng.\"", "\"No, of course not!\" Ruth laughs. \"He finds the dentist scary.\""),
      ],
      [
        s("Luca schrijft de afspraak in zijn agenda: donderdag, half vier, tandarts, Jayden.", "Luca writes the appointment in his diary: Thursday, half past three, dentist, Jayden."),
        s("Hij wil het niet vergeten.", "He doesn't want to forget it."),
        s("\"Bedankt, Luca! Gaan we vrijdag naar het café van Bram? Ik betaal!\"", "\"Thanks, Luca! Shall we go to Bram's café on Friday? I'm paying!\""),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "Why does Ruth need Luca's help?", options: ["She's at work when Jayden goes to the dentist", "She doesn't know where the dentist is", "Jayden is ill"], answer: 0 },
      { kind: "truefalse", statement: "Luca heeft donderdagmiddag les.", translation: "Luca has class on Thursday afternoon.", answer: false },
      { kind: "choice", prompt: "Where will Luca pick Jayden up?", options: ["At the library", "At school", "At the bakery"], answer: 0 },
      { kind: "choice", prompt: "What does Ruth's laugh tell you?", options: ["Jayden really doesn't want to go", "Jayden loves the dentist", "Ruth thinks Luca is funny"], answer: 0 },
    ],
  },
  {
    ...story,
    id: "week-3-half-vier",
    title: "Half vier",
    titleTranslation: "Half four",
    grammar: ["time-numbers", "questions", "negation", "modal-verbs"],
    paragraphs: [
      [
        s("Donderdag om drie uur zit Luca met Jayden in de bibliotheek. Het is daar rustig.", "On Thursday at three Luca is sitting with Jayden in the library. It's quiet there."),
        s("Jayden leest een boek over voetbal. Luca leest voor zijn studie.", "Jayden reads a book about football. Luca reads for his studies."),
        s("Om tien over drie vraagt Jayden: \"Moeten we niet gaan?\"", "At ten past three Jayden asks: \"Shouldn't we go?\""),
        s("\"Nee hoor, de afspraak is om half vier. Dat is half vijf, toch? We hebben nog tijd.\"", "\"No, the appointment is at half four. That's half past four, right? We've still got time.\""),
        s("Jayden zegt niets. Hij wil niet naar de tandarts.", "Jayden says nothing. He doesn't want to go to the dentist."),
      ],
      [
        s("Om kwart over vier fietsen ze naar de Breestraat.", "At quarter past four they cycle to the Breestraat."),
        s("De assistente kijkt op de klok: \"Jayden Pinas? Je afspraak is om half vier. Nu is het half vijf!\"", "The assistant looks at the clock: \"Jayden Pinas? Your appointment is at half three. It's half past four now!\""),
        s("\"Half vier is toch half vijf?\" vraagt Luca.", "\"Isn't half vier half past four?\" Luca asks."),
        s("\"Nee, meneer. In het Nederlands is half vier een half uur voor vier uur: drie uur dertig.\"", "\"No, sir. In Dutch, half vier is half an hour before four: three thirty.\""),
      ],
      [
        s("Luca wordt rood. In het Engels is het anders, en in het Italiaans ook.", "Luca goes red. In English it's different, and in Italian too."),
        s("En Jayden? Hij lacht: \"Ik weet het al een uur!\"", "And Jayden? He laughs: \"I've known for an hour!\""),
        s("De tandarts heeft volgende week weer tijd: woensdag om kwart voor drie.", "The dentist has time again next week: Wednesday at quarter to three."),
        s("Dit keer schrijft Luca het goed op: kwart voor drie, dus een kwartier voor drie uur.", "This time Luca writes it down properly: quarter to three, so a quarter of an hour before three."),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "Why are they late?", options: ["Luca thinks \"half vier\" means half past four", "The bus is late", "Jayden can't find his bike"], answer: 0 },
      { kind: "truefalse", statement: "Jayden weet het: ze zijn te laat.", translation: "Jayden knows: they're late.", answer: true },
      { kind: "choice", prompt: "Why does Jayden say nothing at ten past three?", options: ["He'd rather not go to the dentist", "He's reading and doesn't hear", "He thinks Luca is right"], answer: 0 },
      { kind: "choice", prompt: "What time is the new appointment?", options: ["14:45", "15:15", "13:45"], answer: 0 },
    ],
  },
  {
    ...story,
    id: "week-4-vrijdagavond",
    title: "Vrijdagavond",
    titleTranslation: "Friday evening",
    grammar: ["gaan-future", "diminutives", "het-subject", "separable-verbs"],
    paragraphs: [
      [
        s("Op vrijdag is het anders. Ruth werkt maar tot twaalf uur.", "On Fridays it's different. Ruth only works until twelve."),
        s("'s Middags doet ze boodschappen, en 's avonds gaat ze met Luca en Noor naar het café van Bram.", "In the afternoon she does the shopping, and in the evening she goes to Bram's café with Luca and Noor."),
        s("Ze drinken een biertje en praten tot laat.", "They have a beer and talk until late."),
        s("Ruth hoort het verhaal van de tandarts en lacht hard.", "Ruth hears the story of the dentist and laughs out loud."),
      ],
      [
        s("\"Half vier, half vijf... Het is moeilijk, hè?\"", "\"Half four, half five... It's hard, isn't it?\""),
        s("\"Moeilijk? Het is gek!\" zegt Luca. \"In het Nederlands is alles een half uur eerder!\"", "\"Hard? It's crazy!\" says Luca. \"In Dutch everything is half an hour earlier!\""),
        s("\"Niet alles\", zegt Noor. \"Kwart over vier is gewoon kwart over vier.\"", "\"Not everything,\" says Noor. \"Quarter past four is just quarter past four.\""),
        s("\"Wat gaan jullie morgen doen?\" vraagt Bram.", "\"What are you going to do tomorrow?\" asks Bram."),
        s("\"Morgen ga ik uitslapen\", zegt Ruth. \"Op zaterdag sta ik nooit vroeg op!\"", "\"Tomorrow I'm going to sleep in,\" says Ruth. \"On Saturdays I never get up early!\""),
        s("\"En Jayden gaat de hele dag films kijken. Hij vindt lezen saai.\"", "\"And Jayden is going to watch films all day. He finds reading boring.\""),
      ],
      [
        s("Om half twaalf fietsen ze naar huis.", "At half past eleven they cycle home."),
        s("Thuis kijkt Luca nog één keer in zijn agenda: woensdag, kwart voor drie, tandarts.", "At home Luca looks in his diary one more time: Wednesday, quarter to three, dentist."),
        s("Hij zet ook een wekker in zijn telefoon, om twee uur.", "He also sets an alarm on his phone, at two."),
        s("Hij wil het niet nog een keer fout doen.", "He doesn't want to get it wrong again."),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "What does Noor mean?", options: ["Only the \"half\" times work differently", "Dutch time is always earlier", "Luca is right"], answer: 0 },
      { kind: "truefalse", statement: "Ruth staat zaterdag om vijf uur op.", translation: "Ruth gets up at five on Saturday.", answer: false },
      { kind: "choice", prompt: "Why does Luca set an alarm for two o'clock?", options: ["So he isn't late on Wednesday", "He has a class at two", "Ruth asks him to"], answer: 0 },
      { kind: "order", prompt: "Put Ruth's Friday in order.", items: ["Work until twelve", "Shopping", "A beer at Bram's café", "Cycling home"] },
    ],
  },
];

/** Listening from the same week: Ruth phones the dentist. */
export const weekListening: ListeningItem = {
  id: "ruth-belt-de-tandarts",
  level: "A1",
  title: "Ruth belt de tandarts",
  titleTranslation: "Ruth phones the dentist",
  kind: "dialogue",
  situation: "Monday morning, before Ruth asks Luca. She phones the dentist to make an appointment for Jayden.",
  grammar: ["time-numbers", "modal-verbs", "questions"],
  lines: [
    l("Assistente", "Tandartspraktijk Breestraat, goedemorgen.", "Breestraat dental practice, good morning."),
    l("Ruth", "Goedemorgen, met Ruth Pinas. Ik wil graag een afspraak maken voor mijn zoon.", "Good morning, this is Ruth Pinas. I'd like to make an appointment for my son."),
    l("Assistente", "Dat kan. Kan hij dinsdag om tien uur?", "That's possible. Can he come on Tuesday at ten?"),
    l("Ruth", "Nee, dan is hij op school. Kan het na drie uur?", "No, he's at school then. Can it be after three?"),
    l("Assistente", "Donderdag om half vier?", "Thursday at half past three?"),
    l("Ruth", "Half vier... Dat is goed. Dank u wel!", "Half past three... That's fine. Thank you!"),
    l("Assistente", "Graag gedaan. Tot donderdag!", "You're welcome. See you Thursday!"),
  ],
  gist: { prompt: "Why does Ruth call?", options: ["To make an appointment for Jayden", "To cancel an appointment", "To ask about the price"], answer: 0 },
  details: [
    { prompt: "Why can't Jayden go on Tuesday at ten?", options: ["He's at school", "He has football", "Ruth has to work"], answer: 0 },
    { prompt: "When is the appointment?", options: ["Thursday at 15:30", "Thursday at 16:30", "Tuesday at 15:30"], answer: 0 },
  ],
  tasks: [
    { kind: "truefalse", statement: "Ruth wil een afspraak voor zichzelf.", translation: "Ruth wants an appointment for herself.", answer: false },
    { kind: "heard", line: 3, options: ["school", "station", "stad"], answer: 0 },
    { kind: "gaps", line: 1, words: ["afspraak", "zoon"] },
  ],
  dictation: [3, 4],
  words: {
    tandartspraktijk: { meaning: "dental practice", closer: "tandarts + praktijk (practice)" },
    zichzelf: { meaning: "herself, himself, itself" },
    ruth: { meaning: "Ruth (a name)" },
    pinas: { meaning: "Pinas (a surname)" },
    breestraat: { meaning: "Breestraat (a street in Leiden)" },
  },
};

/** Writing that joins the story: Luca's message to Ruth after Thursday. */
export const weekWriting: WritingTask = {
  id: "w-bericht-aan-ruth",
  level: "A1",
  title: "Een bericht aan Ruth",
  titleTranslation: "A message to Ruth",
  form: "message",
  situation: "You're Luca, back from the dentist on Thursday. Tell Ruth what happened and when the new appointment is.",
  points: [
    { prompt: "Greet Ruth", frame: "Hoi Ruth, … !", cues: ["hoi", "ruth"] },
    { prompt: "Say there's a problem", frame: "We zijn … .", cues: ["laat", "probleem"] },
    { prompt: "Say what you thought 'half vier' was", frame: "Voor mij is half vier … .", cues: ["half"] },
    { prompt: "Say how Jayden finds it", frame: "Jayden vindt het … .", cues: ["jayden", "vindt"] },
    { prompt: "Give the new day and time", frame: "De nieuwe afspraak is op … om … .", cues: ["afspraak", "woensdag", "kwart"] },
    { prompt: "Say sorry and sign off", frame: "Sorry! … , Luca", cues: ["sorry", "groetjes"] },
  ],
  model:
    "Hoi Ruth, ik heb een probleem! We zijn vandaag te laat bij de tandarts. Voor mij is half vier half vijf, maar dat is fout: in het Nederlands is half vier een half uur voor vier uur. Jayden vindt het grappig, hij lacht de hele tijd. De nieuwe afspraak is op woensdag om kwart voor drie. Dan ben ik op tijd, echt! Sorry! Groetjes, Luca",
};

/** The end of the unit: Wednesday, the second try. */
export const weekCheckpoint: Checkpoint = {
  title: "Woensdag, de tweede keer",
  titleTranslation: "Wednesday, the second time",
  text: [
    [
      s("Woensdagochtend ligt er een briefje van Ruth onder de deur.", "On Wednesday morning there's a note from Ruth under the door."),
      s("\"Hoi Luca! Vandaag is de tandarts, om kwart voor drie. Jayden is om half twee uit school. Kun jij hem om twee uur bij de bibliotheek ophalen? Ik ben om vier uur thuis. Dank je wel! Ruth\"", "\"Hi Luca! The dentist is today, at quarter to three. Jayden is out of school at half past one. Can you pick him up at the library at two? I'm home at four. Thank you! Ruth\""),
      s("Luca lacht. Zijn wekker staat al op twee uur.", "Luca laughs. His alarm is already set for two."),
    ],
  ],
  textTasks: [
    { kind: "truefalse", statement: "De afspraak is om half drie.", translation: "The appointment is at half past two.", answer: false },
    { kind: "choice", prompt: "Where and when does Luca pick Jayden up?", options: ["At the library at two", "At school at half past one", "At home at four"], answer: 0 },
    { kind: "choice", prompt: "Why does Luca laugh?", options: ["He's ready this time: his alarm is already set", "Ruth makes a mistake", "Jayden is ill"], answer: 0 },
  ],
  listening: {
    situation: "A voice message from the dentist's assistant arrives on Luca's phone.",
    lines: [
      l("Assistente", "Goedemorgen, dit is de tandartspraktijk in de Breestraat.", "Good morning, this is the dental practice in the Breestraat."),
      l("Assistente", "Dit is een bericht voor Jayden Pinas.", "This is a message for Jayden Pinas."),
      l("Assistente", "De afspraak van vandaag is om kwart voor drie, niet om drie uur.", "Today's appointment is at quarter to three, not at three."),
      l("Assistente", "Komt u alstublieft tien minuten eerder.", "Please come ten minutes early."),
      l("Assistente", "Tot straks!", "See you later!"),
    ],
    questions: [
      { prompt: "What time is the appointment?", options: ["14:45", "15:00", "14:15"], answer: 0 },
      { prompt: "What should they do?", options: ["Come ten minutes early", "Call back", "Bring a letter"], answer: 0 },
    ],
  },
  write: {
    situation: "Answer Ruth's note: say yes, say when you'll be at the library, and ask her something.",
    points: [
      { prompt: "Say yes", frame: "Hoi Ruth, … !" },
      { prompt: "Say when you'll be at the library", frame: "Ik ben om … bij de bibliotheek." },
      { prompt: "Ask Ruth a question", frame: "… ?" },
    ],
    model: "Hoi Ruth, dat is goed! Ik ben om twee uur bij de bibliotheek. Gaan we vrijdag weer naar het café van Bram?",
    modelTranslation: "Hi Ruth, that's fine! I'll be at the library at two. Shall we go to Bram's café again on Friday?",
  },
  words: {
    woensdagochtend: { meaning: "Wednesday morning" },
    briefje: { meaning: "a note", base: "brief" },
    ruth: { meaning: "Ruth (a name)" },
    jayden: { meaning: "Jayden (a name)" },
    pinas: { meaning: "Pinas (a surname)" },
    tandarts: { meaning: "dentist" },
    tandartspraktijk: { meaning: "dental practice" },
    breestraat: { meaning: "Breestraat (a street in Leiden)" },
    wekker: { meaning: "alarm clock" },
    eerder: { meaning: "earlier", base: "vroeg" },
  },
};
