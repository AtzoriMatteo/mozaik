import type { Checkpoint, ListeningItem, ListeningLine, ReadingText, Sentence, Story, WordHelp } from "@/core/content";
import type { WritingTask } from "@/core/writing";

const s = (text: string, translation: string): Sentence => ({ text, translation });
const l = (speaker: string, text: string, translation: string): ListeningLine => ({ speaker, text, translation });

/**
 * A1 unit 2 as a story (Matteo, 18 Nov 2026: less about one Italian student,
 * more people). Marta from Kraków moves into the flat above Ruth's bakery on
 * the Oude Vest and meets the street.
 */
export const martaIsNieuw: Story = {
  id: "marta-is-nieuw",
  title: "Marta is nieuw",
  titleTranslation: "Marta is new",
  intro:
    "Marta from Poland has just moved to Leiden, into the flat above the bakery on the Oude Vest. Her first week: a letter to her sister, the neighbours, a language buddy and a parcel.",
};

const storyWords: Record<string, WordHelp> = {
  marta: { meaning: "Marta (a Polish name)" },
  nowak: { meaning: "Nowak (a Polish surname)" },
  krakau: { meaning: "Kraków (a city in Poland)" },
  polen: { meaning: "Poland" },
  pools: { meaning: "Polish (the language)" },
  ania: { meaning: "Ania (a Polish name)" },
  dorp: { meaning: "village" },
  ruik: { meaning: "(I) smell", base: "ruiken" },
  tikt: { meaning: "taps", base: "tikken" },
  armen: { meaning: "arms", base: "arm" },
  zwaait: { meaning: "waves", base: "zwaaien" },
  docent: { meaning: "teacher" },
  hond: { meaning: "dog" },
  meneer: { meaning: "man, gentleman; Mr" },
  portugees: { meaning: "Portuguese" },
  receptie: { meaning: "reception desk" },
  hotel: { meaning: "hotel" },
  bakkerij: { meaning: "bakery" },
  ruth: { meaning: "Ruth (a name)" },
  sanne: { meaning: "Sanne (a Dutch name)" },
  taalmaatje: { meaning: "language buddy", closer: "taal (language) + maatje (buddy)" },
  basisschool: { meaning: "primary school", closer: "basis (base) + school" },
  pim: { meaning: "Pim (a name)" },
  pakketje: { meaning: "a parcel", base: "pakket" },
  pakket: { meaning: "parcel" },
  bezorger: { meaning: "delivery person", closer: "from bezorgen, to deliver" },
  hoelang: { meaning: "how long" },
  buurvrouw: { meaning: "neighbour (a woman)" },
  buurman: { meaning: "neighbour (a man)" },
  drieën: { meaning: "met z'n drieën = the three of us/them" },
  groningen: { meaning: "Groningen (a city in the north)" },
  geneeskunde: { meaning: "medicine (the subject)" },
  breestraat: { meaning: "Breestraat (a street in Leiden)" },
  lui: { meaning: "lazy" },
  lief: { meaning: "sweet, kind" },
  wakker: { meaning: "awake" },
  bel: { meaning: "doorbell; bell" },
  fijn: { meaning: "nice, pleasant" },
  meestal: { meaning: "usually" },
  talen: { meaning: "languages", base: "taal" },
  hobby: { meaning: "hobby" },
  "hobby's": { meaning: "hobbies", base: "hobby" },
  zus: { meaning: "sister" },
  rome: { meaning: "Rome" },
};

const story = { level: "A1" as const, words: storyWords };

export const martaTexts: ReadingText[] = [
  {
    ...story,
    id: "marta-1-nieuw-in-leiden",
    title: "Nieuw in Leiden",
    titleTranslation: "New in Leiden",
    grammar: ["pronouns-subject", "present-regular", "zijn-hebben", "adjective-e", "conjunctions"],
    paragraphs: [
      [
        s("Lieve Ania,", "Dear Ania,"),
        s("Hoe gaat het met jou? Met mij gaat het goed!", "How are you? I'm fine!"),
        s("Ik woon nu een week in Leiden. Leiden is een mooie stad met veel grachten, bruggen en fietsen.", "I've been living in Leiden for a week now. Leiden is a beautiful city with lots of canals, bridges and bikes."),
        s("Ik woon in een oud huis in het centrum, boven een bakkerij. Elke ochtend ruik ik vers brood!", "I live in an old house in the centre, above a bakery. Every morning I smell fresh bread!"),
      ],
      [
        s("Ik werk bij de receptie van een groot hotel, dichtbij het station.", "I work at the reception of a big hotel, near the station."),
        s("Mijn collega's spreken Engels met mij, maar ik wil Nederlands leren.", "My colleagues speak English with me, but I want to learn Dutch."),
        s("Op maandag en woensdag heb ik les. De les is leuk, maar soms ook moeilijk.", "On Monday and Wednesday I have class. The class is fun, but sometimes hard too."),
        s("Ik spreek nog niet veel Nederlands, maar ik leer elke dag een beetje.", "I don't speak much Dutch yet, but I learn a bit every day."),
      ],
      [
        s("Leiden is groot voor mij. Ons dorp bij Krakau is heel klein, hè?", "Leiden is big for me. Our village near Kraków is really small, isn't it?"),
        s("Mijn buurvrouw is een oude dame, mevrouw De Vries. Ze is heel aardig, en ze heeft een kat.", "My neighbour is an old lady, Mrs De Vries. She's very kind, and she has a cat."),
        s("Mijn buurman aan de andere kant is een oude meneer met een grote hond.", "My neighbour on the other side is an old man with a big dog."),
        s("In het huis naast mij wonen drie studenten. Ik ken ze nog niet.", "In the house next to me live three students. I don't know them yet."),
        s("Veel liefs, en de groeten aan mama! Marta", "Lots of love, and say hi to Mum! Marta"),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "Who is Ania, probably?", options: ["Someone in Marta's family in Poland", "Marta's Dutch teacher", "Her new neighbour"], answer: 0 },
      { kind: "choice", prompt: "Why does Marta want to learn Dutch if her colleagues speak English?", options: ["She wants to live here, not just work here", "Her boss asks her to", "Her colleagues don't speak English well"], answer: 0 },
      { kind: "truefalse", statement: "Marta komt uit een grote stad.", translation: "Marta comes from a big city.", answer: false },
      { kind: "truefalse", statement: "Marta kent de studenten naast haar al.", translation: "Marta already knows the students next door.", answer: false },
    ],
  },
  {
    ...story,
    id: "marta-2-de-buren",
    title: "De buren",
    titleTranslation: "The neighbours",
    grammar: ["pronouns-subject", "jij-inversion", "questions", "possessives", "graag-liever"],
    paragraphs: [
      [
        s("Zaterdag belt Marta aan bij nummer twaalf, met een taart van de bakker.", "On Saturday Marta rings the bell at number twelve, with a cake from the baker's."),
        s("Een jonge vrouw doet open. \"Hoi! Ben jij de nieuwe buurvrouw?\"", "A young woman opens the door. \"Hi! Are you the new neighbour?\""),
        s("\"Ja, dat ben ik. Ik ben Marta, ik woon boven de bakkerij.\"", "\"Yes, that's me. I'm Marta, I live above the bakery.\""),
        s("\"Welkom! Ik ben Noor. Kom binnen! Wil je ook koffie?\"", "\"Welcome! I'm Noor. Come in! Would you like coffee too?\""),
        s("\"Nee, dank je. Ik drink liever thee.\"", "\"No, thanks. I'd rather have tea.\""),
      ],
      [
        s("In de keuken zitten twee jongens. Noor stelt ze voor.", "Two young men are sitting in the kitchen. Noor introduces them."),
        s("\"Dit is Bram. Hij werkt in een café in de Breestraat. En dit is Luca. Hij komt uit Italië.\"", "\"This is Bram. He works in a café in the Breestraat. And this is Luca. He's from Italy.\""),
        s("\"Ik ben drieëntwintig jaar en ik ben student\", zegt Luca. \"Ik studeer biologie aan de universiteit van Leiden.\"", "\"I'm twenty-three and I'm a student,\" says Luca. \"I study biology at Leiden University.\""),
        s("Noor komt uit Groningen. Ze studeert geneeskunde en werkt soms in het ziekenhuis.", "Noor is from Groningen. She studies medicine and sometimes works at the hospital."),
        s("\"Wonen jullie hier met z'n drieën?\" vraagt Marta. \"Ja\", zegt Bram. \"Noor kookt, Luca kookt, en ik ben lui!\"", "\"Do the three of you live here together?\" Marta asks. \"Yes,\" says Bram. \"Noor cooks, Luca cooks, and I'm lazy!\""),
      ],
      [
        s("Dan tikt er iemand op het raam. Een oude dame met een kat in haar armen zwaait.", "Then someone taps on the window. An old lady with a cat in her arms waves."),
        s("\"Dat is onze buurvrouw, mevrouw De Vries\", zegt Noor. \"Ze ziet alles. Ze is heel lief.\"", "\"That's our neighbour, Mrs De Vries,\" says Noor. \"She sees everything. She's very sweet.\""),
        s("\"Hoelang woont u hier al?\" vraagt Marta later aan mevrouw De Vries. \"Vijftig jaar, kind!\"", "\"How long have you lived here?\" Marta asks Mrs De Vries later. \"Fifty years, dear!\""),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "Why does Marta bring a cake?", options: ["To say hello as a new neighbour", "It's Noor's birthday", "She works at the bakery"], answer: 0 },
      { kind: "choice", prompt: "What does Bram's joke tell you?", options: ["He doesn't cook at home", "He's a cook at the café", "He's always tired"], answer: 0 },
      { kind: "truefalse", statement: "Marta wil graag koffie.", translation: "Marta would like coffee.", answer: false },
      { kind: "choice", prompt: "\"Ze ziet alles.\" What does Noor mean?", options: ["Mrs De Vries notices everything in the street", "Mrs De Vries has very good glasses", "Mrs De Vries watches a lot of TV"], answer: 0 },
    ],
  },
  {
    ...story,
    id: "marta-3-een-taalmaatje",
    title: "Een taalmaatje",
    titleTranslation: "A language buddy",
    grammar: ["present-regular", "zijn-hebben", "conjunctions", "questions"],
    paragraphs: [
      [
        s("Ingrid, de docent, heeft een tip: \"Zoek een taalmaatje!\"", "Ingrid, the teacher, has a tip: \"Find a language buddy!\""),
        s("Een taalmaatje is iemand die Nederlands spreekt en met jou wil oefenen.", "A language buddy is someone who speaks Dutch and wants to practise with you."),
        s("Op een website leest Marta dit profiel:", "On a website Marta reads this profile:"),
      ],
      [
        s("Hallo! Ik heet Sanne de Wit. Ik ben zesentwintig jaar en ik woon in Leiden.", "Hi! My name is Sanne de Wit. I'm twenty-six and I live in Leiden."),
        s("Ik ben lerares op een basisschool. Ik werk met kinderen van zes en zeven jaar.", "I'm a teacher at a primary school. I work with children of six and seven."),
        s("Ik spreek Nederlands, Engels en een beetje Spaans.", "I speak Dutch, English and a bit of Spanish."),
        s("Ik wil graag Pools leren, want de familie van mijn vriend komt uit Polen.", "I'd like to learn Polish, because my boyfriend's family is from Poland."),
        s("Mijn hobby's zijn koken, lezen en fietsen. Ik heb een kat, Pim. Hij is lui, maar heel lief.", "My hobbies are cooking, reading and cycling. I have a cat, Pim. He's lazy, but very sweet."),
        s("We kunnen koffie drinken in een café of samen wandelen. Stuur me een bericht!", "We can have coffee in a café or go for a walk together. Send me a message!"),
      ],
      [
        s("Marta lacht. Pools! Dat is perfect.", "Marta laughs. Polish! That's perfect."),
        s("Ze schrijft meteen: \"Hoi Sanne, ik ben Marta en ik kom uit Polen. Ik spreek Pools en Engels, en een beetje Nederlands.\"", "She writes straight away: \"Hi Sanne, I'm Marta and I'm from Poland. I speak Polish and English, and a bit of Dutch.\""),
        s("Een uur later komt het antwoord: \"Wat leuk! Hoe gaat het met je Nederlands? Zullen we dinsdag koffie drinken?\"", "An hour later the answer comes: \"How nice! How's your Dutch going? Shall we have coffee on Tuesday?\""),
        s("Meestal praten ze een half uur Nederlands en een half uur Pools. Twee talen, één koffie: fijn!", "Usually they talk Dutch for half an hour and Polish for half an hour. Two languages, one coffee: lovely!"),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "Why is Sanne a perfect match for Marta?", options: ["Sanne wants to learn Polish", "Sanne lives next door", "Sanne works in a hotel"], answer: 0 },
      { kind: "truefalse", statement: "Sanne werkt op een universiteit.", translation: "Sanne works at a university.", answer: false },
      { kind: "choice", prompt: "How do they use their time together?", options: ["Half Dutch, half Polish", "Only Dutch", "Only English"], answer: 0 },
      { kind: "choice", prompt: "Who suggests meeting on Tuesday?", options: ["Sanne", "Marta", "Ingrid"], answer: 0 },
    ],
  },
  {
    ...story,
    id: "marta-4-een-pakketje",
    title: "Een pakketje",
    titleTranslation: "A parcel",
    grammar: ["verb-second", "jij-inversion", "demonstratives", "questions"],
    paragraphs: [
      [
        s("Maandag om zeven uur 's ochtends staat Marta voor de deur. Ze moet om acht uur in het hotel zijn.", "On Monday at seven in the morning Marta is at her front door. She has to be at the hotel at eight."),
        s("Ruth staat al in de bakkerij. \"Goedemorgen! Ben jij altijd zo vroeg wakker?\"", "Ruth is already in the bakery. \"Good morning! Are you always up this early?\""),
        s("\"Ja, ik begin om acht uur. Wat doe je vandaag?\" \"Brood bakken, net als elke dag!\"", "\"Yes, I start at eight. What are you doing today?\" \"Baking bread, like every day!\""),
      ],
      [
        s("'s Avonds is Marta weer thuis. Dan gaat de bel.", "In the evening Marta is home again. Then the doorbell rings."),
        s("Het is mevrouw De Vries, met een grote doos.", "It's Mrs De Vries, with a big box."),
        s("\"Marta Nowak? Is dat jouw naam?\" \"Ja, dat ben ik.\"", "\"Marta Nowak? Is that your name?\" \"Yes, that's me.\""),
        s("\"Dit pakketje is voor jou. De bezorger komt om twee uur, en jij bent niet thuis. Dus hij geeft het aan mij.\"", "\"This parcel is for you. The delivery man comes at two, and you're not home. So he gives it to me.\""),
      ],
      [
        s("Marta is verbaasd. In Polen gaat een pakketje terug naar het postkantoor.", "Marta is surprised. In Poland a parcel goes back to the post office."),
        s("In Nederland geeft de bezorger het vaak aan de buren. Heel normaal!", "In the Netherlands the delivery person often gives it to the neighbours. Completely normal!"),
        s("In de doos zit een cadeau van haar zus Ania: een foto van hun dorp, en Poolse koekjes.", "In the box there's a present from her sister Ania: a photo of their village, and Polish biscuits."),
        s("\"Wilt u een koekje, mevrouw De Vries?\" \"Graag, kind! En zeg maar jij.\"", "\"Would you like a biscuit, Mrs De Vries?\" \"Yes please, dear! And you can say jij to me.\""),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "Why does Mrs De Vries have Marta's parcel?", options: ["Marta wasn't home when it came", "She ordered it for Marta", "The parcel was for her"], answer: 0 },
      { kind: "choice", prompt: "Who is Ania?", options: ["Marta's sister", "Marta's colleague", "Mrs De Vries's cat"], answer: 0 },
      { kind: "truefalse", statement: "In Polen geeft de bezorger een pakketje ook vaak aan de buren.", translation: "In Poland the delivery person often gives a parcel to the neighbours too.", answer: false },
      { kind: "choice", prompt: "What does \"zeg maar jij\" tell you at the end?", options: ["They're becoming friends: Marta can drop the polite u", "Mrs De Vries is angry", "Marta must speak louder"], answer: 0 },
    ],
  },
];

/** Listening from the story: Marta at the town's language café. */
export const martaListening: ListeningItem = {
  id: "marta-en-sanne",
  level: "A1",
  title: "Marta en Sanne",
  titleTranslation: "Marta and Sanne",
  kind: "dialogue",
  situation: "Tuesday. Marta and Sanne meet for the first time, at a café near the station.",
  grammar: ["questions", "pronouns-subject", "present-regular"],
  lines: [
    l("Sanne", "Hoi! Ben jij Marta?", "Hi! Are you Marta?"),
    l("Marta", "Ja! En jij bent Sanne. Leuk je te ontmoeten!", "Yes! And you're Sanne. Nice to meet you!"),
    l("Sanne", "Wat wil je drinken? Koffie?", "What would you like to drink? Coffee?"),
    l("Marta", "Nee, ik drink liever thee. Met melk, alsjeblieft.", "No, I'd rather have tea. With milk, please."),
    l("Sanne", "Met melk? Dat doen Nederlanders nooit!", "With milk? Dutch people never do that!"),
    l("Marta", "In Polen ook niet. Maar ik werk met veel Engelsen in het hotel.", "Nor in Poland. But I work with lots of English people at the hotel."),
    l("Sanne", "Haha. Oké, we beginnen in het Nederlands. Waar woon je?", "Haha. OK, let's start in Dutch. Where do you live?"),
    l("Marta", "Op de Oude Vest, boven de bakker.", "On the Oude Vest, above the baker's."),
  ],
  gist: { prompt: "What's happening?", options: ["Two language buddies meet for the first time", "Marta orders at the bakery", "A job interview"], answer: 0 },
  details: [
    { prompt: "What does Marta drink?", options: ["Tea with milk", "Coffee", "Water"], answer: 0 },
    { prompt: "Why does Marta drink it like that?", options: ["She works with English people", "It's how they drink it in Poland", "Sanne recommends it"], answer: 0 },
  ],
  tasks: [
    { kind: "truefalse", statement: "Nederlanders drinken vaak thee met melk.", translation: "Dutch people often drink tea with milk.", answer: false },
    { kind: "heard", line: 7, options: ["bakker", "bank", "brug"], answer: 0 },
    { kind: "gaps", line: 3, words: ["liever", "thee"] },
  ],
  dictation: [2, 6],
  words: {
    ontmoeten: { meaning: "to meet" },
    engelsen: { meaning: "English people" },
    marta: { meaning: "Marta (a name)" },
    sanne: { meaning: "Sanne (a name)" },
  },
};

/** Writing that joins the story: write to someone new in your street. */
export const martaWriting: WritingTask = {
  id: "w-een-kaartje-voor-de-buren",
  level: "A1",
  title: "Een kaartje voor de buren",
  titleTranslation: "A card for the neighbours",
  form: "message",
  situation: "You've just moved into the Oude Vest, like Marta. Write a short card to put through your neighbours' doors.",
  points: [
    { prompt: "Greet them", frame: "Beste … ,", cues: ["beste", "buren"] },
    { prompt: "Say who you are", frame: "Ik ben … .", cues: ["ben", "heet"] },
    { prompt: "Say where you're from", frame: "Ik kom uit … .", cues: ["kom", "uit"] },
    { prompt: "Say where you live now", frame: "Ik woon nu op nummer … .", cues: ["woon", "nummer"] },
    { prompt: "Say what you do", frame: "Ik werk … / Ik studeer … .", cues: ["werk", "studeer"] },
    { prompt: "Invite them for something", frame: "Zullen we … ?", cues: ["koffie", "thee", "zullen"] },
  ],
  model:
    "Beste buren, ik ben Sara. Ik kom uit Spanje, uit een klein dorp bij Valencia. Ik woon nu op nummer zeven, naast de bakker. Ik werk in een hotel, en op maandag en woensdag heb ik les Nederlands. Mijn Nederlands is nog niet goed, maar ik leer elke dag een beetje. Zullen we zaterdag samen koffie drinken? Groetjes, Sara",
};

/** The end of the unit: a note from the language class. */
export const martaCheckpoint: Checkpoint = {
  title: "Een nieuwe cursist",
  titleTranslation: "A new course member",
  text: [
    [
      s("Woensdag is er een nieuwe cursist in de les. Ingrid vraagt: \"Wie bent u?\"", "On Wednesday there's a new student in class. Ingrid asks: \"Who are you?\""),
      s("\"Ik heet Daniel. Ik kom uit Mexico, maar ik woon nu in Leiden. Ik ben kok in een restaurant. Ik spreek Spaans en Engels.\"", "\"My name is Daniel. I'm from Mexico, but I live in Leiden now. I'm a cook in a restaurant. I speak Spanish and English.\""),
      s("Marta zit naast hem. Na de les zegt ze: \"Hoi, ik ben Marta. Wil je ook een taalmaatje?\"", "Marta is sitting next to him. After class she says: \"Hi, I'm Marta. Would you like a language buddy too?\""),
    ],
  ],
  textTasks: [
    { kind: "truefalse", statement: "Daniel werkt in een hotel.", translation: "Daniel works in a hotel.", answer: false },
    { kind: "choice", prompt: "Which languages does Daniel speak?", options: ["Spanish and English", "Polish and English", "Dutch and Spanish"], answer: 0 },
    { kind: "choice", prompt: "Why does Marta talk to Daniel?", options: ["She wants to help him, like Sanne helps her", "She wants a job in his restaurant", "He sits in her place"], answer: 0 },
  ],
  listening: {
    situation: "Daniel leaves Marta a voice message.",
    lines: [
      l("Daniel", "Hoi Marta, met Daniel, uit de les.", "Hi Marta, it's Daniel, from class."),
      l("Daniel", "Ja, ik wil graag een taalmaatje!", "Yes, I'd like a language buddy!"),
      l("Daniel", "Ik werk van dinsdag tot zaterdag, maar op maandag ben ik vrij.", "I work from Tuesday to Saturday, but on Monday I'm free."),
      l("Daniel", "Zullen we maandag koffie drinken? Of thee, natuurlijk!", "Shall we have coffee on Monday? Or tea, of course!"),
    ],
    questions: [
      { prompt: "When is Daniel free?", options: ["On Monday", "On Saturday", "On Wednesday"], answer: 0 },
      { prompt: "Why does he say \"of thee, natuurlijk\"?", options: ["He knows Marta prefers tea", "He doesn't like coffee", "The café has no coffee"], answer: 0 },
    ],
  },
  write: {
    situation: "Answer Daniel: say hello, say when you're free, and ask him something.",
    points: [
      { prompt: "Say hello", frame: "Hoi Daniel, … !" },
      { prompt: "Say when you're free", frame: "Op … ben ik vrij." },
      { prompt: "Ask him a question", frame: "… ?" },
    ],
    model: "Hoi Daniel, leuk! Op maandag ben ik ook vrij, na vier uur. Hoelang woon je al in Leiden?",
    modelTranslation: "Hi Daniel, great! I'm free on Monday too, after four. How long have you been living in Leiden?",
  },
  words: {
    cursist: { meaning: "course participant, student (of a course)" },
    daniel: { meaning: "Daniel (a name)" },
    mexico: { meaning: "Mexico" },
    kok: { meaning: "cook" },
    ingrid: { meaning: "Ingrid (a name)" },
    marta: { meaning: "Marta (a name)" },
    taalmaatje: { meaning: "language buddy" },
    hoelang: { meaning: "how long" },
  },
};
