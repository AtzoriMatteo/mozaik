import type { Checkpoint, ListeningItem, ListeningLine, ReadingText, Sentence, Story, WordHelp } from "@/core/content";
import type { WritingTask } from "@/core/writing";

const s = (text: string, translation: string): Sentence => ({ text, translation });
const l = (speaker: string, text: string, translation: string): ListeningLine => ({ speaker, text, translation });

/**
 * A1 unit 3 as a story (Matteo, 18 Nov 2026: less about one Italian
 * student). The Yilmaz family at number 9: Yusuf runs the clothes shop on
 * the corner; his parents came from Turkey fifty years ago; his sister Ayşe
 * lives in Istanbul.
 */
export const deFamilieYilmaz: Story = {
  id: "de-familie-yilmaz",
  title: "De familie Yilmaz",
  titleTranslation: "The Yilmaz family",
  intro:
    "Yusuf Yilmaz runs the clothes shop on the corner of the Oude Vest. Three generations, two countries, one very loud Sunday call, and Grandpa Ahmet's eightieth birthday, Dutch style.",
};

const storyWords: Record<string, WordHelp> = {
  yusuf: { meaning: "Yusuf (a name)" },
  yilmaz: { meaning: "Yilmaz (a Turkish surname)" },
  elif: { meaning: "Elif (a Turkish name)" },
  emre: { meaning: "Emre (a Turkish name)" },
  defne: { meaning: "Defne (a Turkish name)" },
  ahmet: { meaning: "Ahmet (a Turkish name)" },
  fatma: { meaning: "Fatma (a Turkish name)" },
  ayşe: { meaning: "Ayşe (a Turkish name)" },
  can: { meaning: "Can (a Turkish name; say 'jan')" },
  istanbul: { meaning: "Istanbul" },
  turkije: { meaning: "Turkey" },
  turks: { meaning: "Turkish" },
  kledingwinkel: { meaning: "clothes shop", closer: "kleding (clothes) + winkel (shop)" },
  kleding: { meaning: "clothes, clothing" },
  hoek: { meaning: "corner" },
  verpleegkundige: { meaning: "nurse" },
  slim: { meaning: "clever", local: "Not 'slim'! Thin is dun." },
  verlegen: { meaning: "shy" },
  achtendertig: { meaning: "thirty-eight" },
  negenenzeventig: { meaning: "seventy-nine" },
  linzensoep: { meaning: "lentil soup", closer: "linzen (lentils) + soep (soup)" },
  zonder: { meaning: "without" },
  vriendin: { meaning: "(female) friend; girlfriend" },
  luid: { meaning: "loud" },
  laptop: { meaning: "laptop" },
  drukt: { meaning: "presses", base: "drukken" },
  knop: { meaning: "button" },
  tekening: { meaning: "drawing" },
  mist: { meaning: "misses", base: "missen" },
  nieuws: { meaning: "news" },
  verdrietig: { meaning: "sad" },
  tante: { meaning: "aunt" },
  knuffel: { meaning: "hug, cuddle" },
  maanden: { meaning: "months", base: "maand" },
  kring: { meaning: "circle" },
  kringverjaardag: { meaning: "circle birthday party", closer: "kring (circle) + verjaardag (birthday)", local: "Chairs in a circle, coffee and cake, and you congratulate everyone in the family" },
  gefeliciteerd: { meaning: "congratulations", local: "At a Dutch birthday you say it to the whole family too: Gefeliciteerd met je vader!" },
  zichzelf: { meaning: "himself, herself" },
  hart: { meaning: "heart" },
  halve: { meaning: "half", base: "half" },
  ziet: { meaning: "sees; ziet er ... uit = looks ...", base: "zien" },
  lerares: { meaning: "teacher (a woman)" },
  middelbare: { meaning: "secondary (middelbare school = secondary school)", base: "middelbaar" },
  cadeautjes: { meaning: "little presents", base: "cadeau" },
  jas: { meaning: "coat" },
  lastig: { meaning: "tricky, awkward" },
  liefs: { meaning: "love (veel liefs = lots of love)" },
  mail: { meaning: "email" },
  slapen: { meaning: "to sleep" },
  stoelen: { meaning: "chairs", base: "stoel" },
};

const story = { level: "A1" as const, words: storyWords };

export const familieTexts: ReadingText[] = [
  {
    ...story,
    id: "familie-1-de-familie-yilmaz",
    title: "De familie Yilmaz",
    titleTranslation: "The Yilmaz family",
    grammar: ["possessives", "articles", "plurals", "zijn-hebben"],
    paragraphs: [
      [
        s("Ik ben Yusuf Yilmaz en ik ben achtendertig. Ik heb een kledingwinkel op de hoek van de Oude Vest.", "I'm Yusuf Yilmaz and I'm thirty-eight. I have a clothes shop on the corner of the Oude Vest."),
        s("Mijn vrouw heet Elif. Ze is verpleegkundige in het ziekenhuis, en soms werkt ze 's nachts.", "My wife is called Elif. She's a nurse at the hospital, and sometimes she works at night."),
        s("We hebben twee kinderen, een zoon en een dochter. Hun namen zijn Emre en Defne.", "We have two children, a son and a daughter. Their names are Emre and Defne."),
        s("Emre is acht. Hij is slim, maar hij praat de hele dag! Defne is vijf. Ze is lief, maar een beetje verlegen.", "Emre is eight. He's clever, but he talks all day! Defne is five. She's sweet, but a bit shy."),
      ],
      [
        s("Mijn ouders komen uit Turkije. Mijn vader heet Ahmet en mijn moeder heet Fatma.", "My parents are from Turkey. My father is called Ahmet and my mother is called Fatma."),
        s("Ze wonen al vijftig jaar in Nederland, nu twee straten van ons.", "They've lived in the Netherlands for fifty years, now two streets away from us."),
        s("Mijn vader is negenenzeventig. Elke dag fietst hij naar de markt.", "My father is seventy-nine. Every day he cycles to the market."),
        s("Mijn moeder kookt elke zondag soep voor de hele familie: linzensoep, zonder vlees.", "My mother cooks soup for the whole family every Sunday: lentil soup, without meat."),
      ],
      [
        s("Ik heb ook een zus, Ayşe. Ze woont in Istanbul, samen met een vriendin.", "I also have a sister, Ayşe. She lives in Istanbul, with a friend."),
        s("Ik zie haar niet vaak, maar we bellen elke week.", "I don't see her often, but we call every week."),
        s("Mijn familie is niet groot, maar wel gezellig. En heel luid!", "My family isn't big, but it's cosy. And very loud!"),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "Why are the children with Grandma every Sunday, probably?", options: ["She cooks soup for the whole family", "Elif works on Sundays", "They go to the market"], answer: 0 },
      { kind: "truefalse", statement: "De ouders van Yusuf wonen in Turkije.", translation: "Yusuf's parents live in Turkey.", answer: false },
      { kind: "choice", prompt: "\"Mijn familie is niet groot, maar wel gezellig. En heel luid!\" What does Yusuf mean?", options: ["Few people, but lots of noise and warmth", "His family is very big", "His family is quiet"], answer: 0 },
      { kind: "choice", prompt: "Who is Ayşe?", options: ["Yusuf's sister", "Yusuf's wife", "Yusuf's daughter"], answer: 0 },
    ],
  },
  {
    ...story,
    id: "familie-2-hoor-je-mij",
    title: "Hoor je mij?",
    titleTranslation: "Can you hear me?",
    grammar: ["object-pronouns", "questions", "gaan-future", "possessives"],
    paragraphs: [
      [
        s("Zondagavond belt de familie met Ayşe in Istanbul. Iedereen zit voor de laptop.", "On Sunday evening the family calls Ayşe in Istanbul. Everyone is sitting in front of the laptop."),
        s("\"Hoor je mij? Ik zie jullie niet!\"", "\"Can you hear me? I can't see you!\""),
        s("Emre drukt op een knop. \"En nu?\" \"Ja! Hallo allemaal!\"", "Emre presses a button. \"And now?\" \"Yes! Hello everyone!\""),
        s("Defne laat haar tekening zien: de hele familie, met opa op de fiets.", "Defne shows her drawing: the whole family, with Grandpa on his bike."),
        s("\"Wat mooi, Defne! En wie is dat, naast opa?\" \"Dat ben ik!\"", "\"How lovely, Defne! And who's that, next to Grandpa?\" \"That's me!\""),
      ],
      [
        s("Dan praat opa. \"Ayşe, wanneer kom je naar huis? Je moeder mist je.\"", "Then Grandpa speaks. \"Ayşe, when are you coming home? Your mother misses you.\""),
        s("\"In de zomer, papa. En ik heb nieuws: ik heb een vriend. Hij heet Can.\"", "\"In the summer, Dad. And I have news: I have a boyfriend. His name is Can.\""),
        s("Iedereen kijkt naar de laptop. Het is even stil.", "Everyone looks at the laptop. For a moment it's quiet."),
        s("\"Komt hij ook mee?\" vraagt Elif. \"Misschien. Hij is een beetje verlegen.\"", "\"Is he coming too?\" Elif asks. \"Maybe. He's a bit shy.\""),
      ],
      [
        s("Na het gesprek is Defne verdrietig. \"Ik wil tante Ayşe echt zien, niet op de laptop!\"", "After the call Defne is sad. \"I want to really see Auntie Ayşe, not on the laptop!\""),
        s("Elif geeft haar een knuffel. \"Nog zes maanden. En papa gaat haar morgen weer bellen. Dan mag jij iets zeggen.\"", "Elif gives her a hug. \"Six more months. And Daddy is going to call her again tomorrow. Then you can say something.\""),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "Why is it quiet for a moment?", options: ["Everyone is surprised by Ayşe's news", "The laptop stops working", "Grandpa is asleep"], answer: 0 },
      { kind: "truefalse", statement: "Can is al bij de familie in Leiden.", translation: "Can is already with the family in Leiden.", answer: false },
      { kind: "choice", prompt: "Why is Defne sad?", options: ["She misses her aunt and wants to see her for real", "Nobody likes her drawing", "She can't talk to Ayşe tomorrow"], answer: 0 },
      { kind: "choice", prompt: "When will Ayşe come, probably?", options: ["In about six months, in the summer", "Tomorrow", "At Christmas"], answer: 0 },
    ],
  },
  {
    ...story,
    id: "familie-3-opa-wordt-tachtig",
    title: "Opa wordt tachtig",
    titleTranslation: "Grandpa turns eighty",
    grammar: ["reflexive", "separable-verbs", "possessives", "object-pronouns"],
    paragraphs: [
      [
        s("Zaterdag wordt opa Ahmet tachtig. Het feest is bij Yusuf thuis.", "On Saturday Grandpa Ahmet turns eighty. The party is at Yusuf's."),
        s("In de woonkamer staan twintig stoelen in een grote kring. Dat is een kringverjaardag: heel Nederlands!", "In the living room there are twenty chairs in a big circle. That's a circle birthday: very Dutch!"),
        s("Iedereen geeft opa een hand en zegt: \"Gefeliciteerd!\" En dan ook aan Yusuf, Elif en de kinderen: \"Gefeliciteerd met je vader! Gefeliciteerd met je opa!\"", "Everyone shakes Grandpa's hand and says: \"Congratulations!\" And then to Yusuf, Elif and the children too: \"Congratulations on your father! Congratulations on your grandpa!\""),
        s("Opa is tachtig, maar hij voelt zich nog jong.", "Grandpa is eighty, but he still feels young."),
      ],
      [
        s("Ook de buren komen. Mevrouw De Vries heeft bloemen, Marta heeft Poolse koekjes, en Bram neemt een taart mee uit het café.", "The neighbours come too. Mrs De Vries has flowers, Marta has Polish biscuits, and Bram brings a cake from the café."),
        s("Marta zit naast opa. \"Uw Nederlands is heel goed!\"", "Marta is sitting next to Grandpa. \"Your Dutch is very good!\""),
        s("\"Na vijftig jaar, hè! En u?\" \"Ik leer het nog. Noor helpt me met mijn Nederlands.\"", "\"After fifty years, eh! And you?\" \"I'm still learning it. Noor helps me with my Dutch.\""),
        s("Opa lacht om zichzelf: \"Ik spreek Nederlands met de buren, maar Turks met mijn kleinkinderen. En met mijn vrouw praat ik alleen over eten!\"", "Grandpa laughs at himself: \"I speak Dutch with the neighbours, but Turkish with my grandchildren. And with my wife I only talk about food!\""),
      ],
      [
        s("Om negen uur gaan de gasten naar huis. Opa zit moe maar blij in zijn stoel.", "At nine the guests go home. Grandpa sits in his chair, tired but happy."),
        s("\"Jouw familie is groot!\" zegt mevrouw De Vries tegen Yusuf. \"Nee hoor\", lacht hij. \"Dat is de halve straat!\"", "\"Your family is big!\" Mrs De Vries says to Yusuf. \"Oh no,\" he laughs. \"That's half the street!\""),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "Why do the guests also congratulate Yusuf and the children?", options: ["At a Dutch birthday you congratulate the whole family", "It's their birthday too", "They're the hosts"], answer: 0 },
      { kind: "truefalse", statement: "Opa spreekt Turks met zijn kleinkinderen.", translation: "Grandpa speaks Turkish with his grandchildren.", answer: true },
      { kind: "choice", prompt: "What does Yusuf's joke at the end mean?", options: ["Many guests are neighbours, not family", "His family is really huge", "Half of the guests leave early"], answer: 0 },
      { kind: "order", prompt: "Put the party in order.", items: ["The chairs are put in a circle", "Everyone congratulates the family", "Marta talks with Grandpa", "The guests go home"] },
    ],
  },
  {
    ...story,
    id: "familie-4-een-mail-uit-istanbul",
    title: "Een mail uit Istanbul",
    titleTranslation: "An email from Istanbul",
    grammar: ["possessives", "separable-verbs", "questions", "time-numbers"],
    paragraphs: [
      [
        s("Op maandag krijgt Yusuf een mail van zijn zus.", "On Monday Yusuf gets an email from his sister."),
        s("Hoi Yusuf, bedankt voor de foto's van het feest! Papa ziet er goed uit, en jullie stoelen in een kring zijn grappig.", "Hi Yusuf, thanks for the photos of the party! Dad looks good, and your chairs in a circle are funny."),
        s("Hier gaat alles goed. Mijn werk is druk, maar leuk: ik ben lerares Engels op een middelbare school.", "Everything is fine here. My work is busy but fun: I'm an English teacher at a secondary school."),
      ],
      [
        s("Can is heel aardig. Hij is kok in een restaurant en hij kookt elke avond voor mij.", "Can is very nice. He's a cook in a restaurant and he cooks for me every evening."),
        s("Hij spreekt geen Nederlands en geen Duits, wel een beetje Engels. Dat is lastig met mama!", "He doesn't speak Dutch or German, but he speaks a bit of English. That's tricky with Mum!"),
        s("In juli komen we naar Leiden, voor drie weken. Kunnen we bij jullie slapen?", "In July we're coming to Leiden, for three weeks. Can we sleep at yours?"),
        s("We nemen cadeautjes mee voor Emre en Defne.", "We'll bring little presents for Emre and Defne."),
      ],
      [
        s("Hoe gaat het in de winkel? Stuur me een foto van de nieuwe kleding. Ik wil een jas uit Nederland!", "How's the shop going? Send me a photo of the new clothes. I want a coat from the Netherlands!"),
        s("Veel liefs, ook aan Elif en de kinderen. Ayşe", "Lots of love, to Elif and the children too. Ayşe"),
        s("Yusuf leest de mail twee keer en lacht. Juli! Dan moet hij een extra bed kopen.", "Yusuf reads the email twice and laughs. July! Then he has to buy an extra bed."),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "Why could Can have trouble with Yusuf's mother?", options: ["They don't share a language", "She doesn't like cooks", "She lives in Istanbul"], answer: 0 },
      { kind: "truefalse", statement: "Ayşe en Can komen een week naar Leiden.", translation: "Ayşe and Can are coming to Leiden for a week.", answer: false },
      { kind: "choice", prompt: "Why does Yusuf need an extra bed?", options: ["Ayşe and Can will sleep at his house", "Defne wants a new bed", "Grandpa is moving in"], answer: 0 },
      { kind: "choice", prompt: "What does Ayşe want from Yusuf's shop?", options: ["A coat", "A photo of the children", "A cake"], answer: 0 },
    ],
  },
];

/** Listening from the story: in Yusuf's shop. */
export const familieListening: ListeningItem = {
  id: "in-de-kledingwinkel",
  level: "A1",
  title: "In de kledingwinkel",
  titleTranslation: "In the clothes shop",
  kind: "dialogue",
  situation: "Monday afternoon. Marta comes into Yusuf's shop.",
  grammar: ["questions", "possessives", "object-pronouns"],
  lines: [
    l("Yusuf", "Hoi Marta! Bedankt voor de koekjes zaterdag. Mijn vader vindt ze heerlijk.", "Hi Marta! Thanks for the biscuits on Saturday. My father loves them."),
    l("Marta", "Graag gedaan! Je familie is heel aardig.", "You're welcome! Your family is very nice."),
    l("Yusuf", "Dank je. Kan ik je helpen?", "Thanks. Can I help you?"),
    l("Marta", "Ja, ik zoek een jas voor mijn zus. Ze komt in december uit Polen.", "Yes, I'm looking for a coat for my sister. She's coming from Poland in December."),
    l("Yusuf", "Een jas voor een zus? Dat vraagt mijn zus ook! Welke maat heeft ze?", "A coat for a sister? My sister asks for that too! What size is she?"),
    l("Marta", "Ze is net zo groot als ik.", "She's just as tall as me."),
    l("Yusuf", "Dan is deze blauwe goed. Wil je hem passen?", "Then this blue one is good. Would you like to try it on?"),
  ],
  gist: { prompt: "What does Marta want?", options: ["A coat for her sister", "A coat for herself", "A present for Grandpa"], answer: 0 },
  details: [
    { prompt: "When is Marta's sister coming?", options: ["In December", "In July", "On Saturday"], answer: 0 },
    { prompt: "Why does Yusuf laugh about it?", options: ["His sister wants a coat too", "The coat is too expensive", "Marta has no sister"], answer: 0 },
  ],
  tasks: [
    { kind: "truefalse", statement: "De zus van Marta is net zo groot als Marta.", translation: "Marta's sister is just as tall as Marta.", answer: true },
    { kind: "heard", line: 6, options: ["blauwe", "bruine", "grote"], answer: 0 },
    { kind: "gaps", line: 3, words: ["jas", "zus"] },
  ],
  dictation: [2, 3],
  words: {
    heerlijk: { meaning: "delicious, lovely" },
    maat: { meaning: "size" },
    passen: { meaning: "to try on; to fit" },
    yusuf: { meaning: "Yusuf (a name)" },
    marta: { meaning: "Marta (a name)" },
    jas: { meaning: "coat" },
    polen: { meaning: "Poland" },
  },
};

/** Writing that joins the story: answer Ayşe's email as Yusuf. */
export const familieWriting: WritingTask = {
  id: "w-mail-aan-ayse",
  level: "A1",
  title: "Een mail aan Ayşe",
  titleTranslation: "An email to Ayşe",
  form: "email",
  situation: "You're Yusuf. Answer your sister's email from Istanbul.",
  points: [
    { prompt: "Greet her and say how you are", frame: "Lieve Ayşe, met ons gaat het … .", cues: ["lieve", "gaat"] },
    { prompt: "React to her news about Can", frame: "Wat leuk, een vriend! Is Can … ?", cues: ["can", "vriend"] },
    { prompt: "Say yes about sleeping at your house", frame: "Jullie kunnen … .", cues: ["slapen", "kunnen"] },
    { prompt: "Say something about the children", frame: "Emre en Defne … .", cues: ["emre", "defne", "kinderen"] },
    { prompt: "Answer her question about the shop", frame: "In de winkel … .", cues: ["winkel", "jas", "kleding"] },
    { prompt: "Say goodbye", frame: "Veel liefs, …", cues: ["liefs", "groeten"] },
  ],
  model:
    "Lieve Ayşe, met ons gaat het goed! Wat leuk, een vriend! Is Can ook verlegen met mama? Natuurlijk kunnen jullie bij ons slapen, in de kamer van Emre. Emre en Defne praten elke dag over jullie, en Defne heeft een tekening voor Can. In de winkel is het druk. Ik heb een mooie blauwe jas voor jou! Veel liefs, ook van Elif, Yusuf",
};

/** The end of the unit: July. */
export const familieCheckpoint: Checkpoint = {
  title: "Juli",
  titleTranslation: "July",
  text: [
    [
      s("Op de deur van de kledingwinkel hangt een briefje.", "There's a note on the door of the clothes shop."),
      s("\"Vandaag is de winkel om vier uur dicht. Mijn zus komt uit Istanbul! Morgen zijn we weer open, van negen tot zes. Yusuf\"", "\"Today the shop closes at four. My sister is coming from Istanbul! Tomorrow we're open again, from nine to six. Yusuf\""),
      s("Mevrouw De Vries leest het en zegt tegen Marta: \"Dan is het vanavond weer luid op nummer negen!\"", "Mrs De Vries reads it and says to Marta: \"Then it'll be loud at number nine again tonight!\""),
    ],
  ],
  textTasks: [
    { kind: "truefalse", statement: "De winkel is morgen de hele dag dicht.", translation: "The shop is closed all day tomorrow.", answer: false },
    { kind: "choice", prompt: "Why does the shop close early?", options: ["Yusuf's sister is arriving", "Yusuf is ill", "It's a holiday"], answer: 0 },
    { kind: "choice", prompt: "What does Mrs De Vries expect?", options: ["A noisy family evening at number nine", "A quiet evening", "A party at her house"], answer: 0 },
  ],
  listening: {
    situation: "Ayşe leaves Yusuf a voice message from Schiphol airport.",
    lines: [
      l("Ayşe", "Hoi Yusuf, wij zijn er! We zijn op Schiphol.", "Hi Yusuf, we're here! We're at Schiphol."),
      l("Ayşe", "De trein naar Leiden gaat om tien over half vijf.", "The train to Leiden leaves at twenty to five."),
      l("Ayşe", "Can is moe, maar hij is ook heel blij.", "Can is tired, but very happy too."),
      l("Ayşe", "Kun je ons ophalen op het station? Tot straks!", "Can you pick us up at the station? See you soon!"),
    ],
    questions: [
      { prompt: "What time is their train?", options: ["16:40", "16:10", "17:10"], answer: 0 },
      { prompt: "What does Ayşe ask?", options: ["To be picked up at the station", "To book a taxi", "To close the shop"], answer: 0 },
    ],
  },
  write: {
    situation: "Send Ayşe a short message back.",
    points: [
      { prompt: "Welcome her", frame: "Welkom in … !" },
      { prompt: "Say you'll be at the station", frame: "Ik ben om … op het station." },
      { prompt: "Say who is waiting at home", frame: "Thuis … ." },
    ],
    model: "Welkom in Nederland! Ik ben om vijf uur op het station. Thuis zijn Elif, de kinderen en veel soep!",
    modelTranslation: "Welcome to the Netherlands! I'll be at the station at five. At home there's Elif, the children and lots of soup!",
  },
  words: {
    briefje: { meaning: "a note", base: "brief" },
    kledingwinkel: { meaning: "clothes shop" },
    istanbul: { meaning: "Istanbul" },
    yusuf: { meaning: "Yusuf (a name)" },
    ayşe: { meaning: "Ayşe (a name)" },
    can: { meaning: "Can (a name)" },
    schiphol: { meaning: "Schiphol (Amsterdam's airport)" },
    luid: { meaning: "loud" },
    pan: { meaning: "pot, pan" },
    wachten: { meaning: "to wait" },
    ophalen: { meaning: "to pick up" },
    elif: { meaning: "Elif (a name)" },
  },
};
