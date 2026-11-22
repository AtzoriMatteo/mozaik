import type { Checkpoint, ListeningItem, ListeningLine, ReadingText, Sentence, Story, WordHelp } from "@/core/content";
import type { WritingTask } from "@/core/writing";

const s = (text: string, translation: string): Sentence => ({ text, translation });
const l = (speaker: string, text: string, translation: string): ListeningLine => ({ speaker, text, translation });

/**
 * A1 unit 7 as a story: Fatima from the Dutch class finds a weekend job at
 * Ruth's bakery, and on her first Saturday meets the whole street.
 */
export const fatimaZoektWerk: Story = {
  id: "fatima-zoekt-werk",
  title: "Fatima zoekt werk",
  titleTranslation: "Fatima looks for work",
  intro:
    "Fatima is in the same Dutch class as Luca and Kwame, and she needs a weekend job. Ruth's bakery needs someone. One week: the class, the advert, the interview and a first Saturday behind the counter.",
};

const storyWords: Record<string, WordHelp> = {
  ingrid: { meaning: "Ingrid (a name)" },
  kwame: { meaning: "Kwame (a name)" },
  ruth: { meaning: "Ruth (a name)" },
  verschillende: { meaning: "different, various", base: "verschillend" },
  lerares: { meaning: "teacher (a woman)" },
  streng: { meaning: "strict" },
  lichaam: { meaning: "body" },
  buik: { meaning: "belly, stomach" },
  kind: { meaning: "child" },
  teksten: { meaning: "texts", base: "tekst" },
  tekst: { meaning: "text" },
  burcht: { meaning: "castle (De Burcht: Leiden's old castle, and the café's name)" },
  kort: { meaning: "short; sinds kort = recently" },
  extra: { meaning: "extra" },
  verdienen: { meaning: "to earn" },
  gezocht: { meaning: "wanted (in an advert)", base: "zoeken" },
  verkoper: { meaning: "shop assistant, salesperson" },
  ervaring: { meaning: "experience" },
  nodig: { meaning: "necessary; nodig hebben = to need" },
  langs: { meaning: "langskomen = to drop by" },
  dicht: { meaning: "closed, shut" },
  bijbaan: { meaning: "side job, part-time job", closer: "bij (extra) + baan (job)" },
  baan: { meaning: "job" },
  oom: { meaning: "uncle" },
  dertien: { meaning: "thirteen" },
  verkopen: { meaning: "to sell" },
  schoonmaken: { meaning: "to clean", closer: "schoon (clean) + maken (make)" },
  schoon: { meaning: "clean" },
  vloer: { meaning: "floor" },
  vies: { meaning: "dirty; disgusting" },
  beginnen: { meaning: "to begin, to start" },
  schort: { meaning: "apron" },
  gepensioneerd: { meaning: "retired" },
  kapper: { meaning: "hairdresser" },
  hiernaast: { meaning: "next door", closer: "hier (here) + naast (next to)" },
  geneeskunde: { meaning: "medicine (the subject)", closer: "genezen (to heal) + kunde (knowledge)" },
  ziekenhuis: { meaning: "hospital", closer: "zieken (sick people) + huis (house)" },
  dienst: { meaning: "shift" },
  wisselgeld: { meaning: "change (money back)", closer: "wissel (exchange) + geld (money)" },
  teveel: { meaning: "too much" },
  eerlijk: { meaning: "honest" },
  vraag: { meaning: "question" },
  kantoor: { meaning: "office" },
  marokko: { meaning: "Morocco" },
  alles: { meaning: "everything" },
  briefje: { meaning: "a note", base: "brief" },
  zaterdagochtend: { meaning: "Saturday morning" },
  tafeltje: { meaning: "a little table", base: "tafel" },
  help: { meaning: "(I) help", base: "helpen" },
  broodjes: { meaning: "rolls", base: "broodje" },
  fouten: { meaning: "mistakes", base: "fout" },
  twijfelt: { meaning: "hesitates", base: "twijfelen" },
};

const story = { level: "A1" as const, words: storyWords };

export const werkTexts: ReadingText[] = [
  {
    ...story,
    id: "werk-1-in-de-taalles",
    title: "In de taalles",
    titleTranslation: "In Dutch class",
    grammar: ["articles", "questions", "plurals", "conjunctions"],
    paragraphs: [
      [
        s("De taalles is op maandag en woensdag van zeven tot negen uur 's avonds.", "Dutch class is on Monday and Wednesday from seven to nine in the evening."),
        s("In de klas zitten twaalf studenten uit tien verschillende landen: Fatima, Luca, Kwame en nog negen anderen.", "There are twelve students from ten different countries in the class: Fatima, Luca, Kwame and nine others."),
        s("De lerares heet Ingrid. Ze is aardig, maar ook streng.", "The teacher is called Ingrid. She's nice, but strict too."),
        s("\"In de les spreken we alleen Nederlands. Geen Engels!\"", "\"In class we only speak Dutch. No English!\""),
      ],
      [
        s("Vandaag leren ze woorden over het lichaam: het hoofd, de hand, de buik.", "Today they're learning words for the body: the head, the hand, the belly."),
        s("Dan lezen ze een tekst over een kind van zes jaar.", "Then they read a text about a six-year-old child."),
        s("Kwame leest hardop, maar bij het woord kind twijfelt hij: de of het?", "Kwame reads out loud, but at the word kind he hesitates: de or het?"),
        s("\"Nee, Kwame. Het is het kind, niet de kind\", zegt Ingrid.", "\"No, Kwame. It's het kind, not de kind,\" says Ingrid."),
        s("Kwame zucht. De en het: dat is echt moeilijk.", "Kwame sighs. De and het: that's really hard."),
      ],
      [
        s("Na de les praten Fatima en Luca nog even.", "After class Fatima and Luca chat for a bit."),
        s("Luca werkt sinds kort in café De Burcht, samen met Bram.", "Luca has recently started working at café De Burcht, with Bram."),
        s("\"Ik zoek ook een bijbaan\", zegt Fatima. \"Ik werk in een hotel, maar ik wil wat extra geld verdienen, want alles is duur.\"", "\"I'm looking for a side job too,\" says Fatima. \"I work in a hotel, but I want to earn a bit of extra money, because everything is expensive.\""),
        s("\"Kijk eens bij de bakker in onze straat\", zegt Luca. \"Ruth zoekt iemand.\"", "\"Have a look at the baker's in our street,\" says Luca. \"Ruth is looking for someone.\""),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "What does Ingrid tell Kwame?", options: ["Kind is a het-word", "He reads too fast", "He mustn't speak English"], answer: 0 },
      { kind: "truefalse", statement: "In de les mogen ze Engels spreken.", translation: "They can speak English in class.", answer: false },
      { kind: "choice", prompt: "Why does Fatima want a side job?", options: ["She wants extra money: everything is expensive", "She has no work at all", "She wants to practise Dutch"], answer: 0 },
      { kind: "choice", prompt: "How does Luca know Ruth is looking for someone?", options: ["Ruth lives in his street", "He reads it online", "Ingrid tells him"], answer: 0 },
    ],
  },
  {
    ...story,
    id: "werk-2-verkoper-gezocht",
    title: "Verkoper gezocht",
    titleTranslation: "Shop assistant wanted",
    grammar: ["modal-verbs", "imperative", "negation", "time-numbers"],
    paragraphs: [
      [
        s("Zaterdagochtend fietst Fatima naar de Oude Vest.", "On Saturday morning Fatima cycles to the Oude Vest."),
        s("Op het raam van de bakker hangt een briefje: Verkoper gezocht! Voor zaterdag en zondag. Ervaring is handig, maar niet nodig. Vraag het aan Ruth.", "On the baker's window there's a note: Shop assistant wanted! For Saturday and Sunday. Experience is handy, but not necessary. Ask Ruth."),
        s("In de winkel is het druk. Er staan zes mensen voor de toonbank.", "It's busy in the shop. There are six people at the counter."),
      ],
      [
        s("Eindelijk is Fatima aan de beurt.", "Finally it's Fatima's turn."),
        s("\"Goedemorgen. Ik wil graag een bruin brood. En ik heb een vraag: is de baan nog vrij?\"", "\"Good morning. I'd like a brown loaf. And I have a question: is the job still free?\""),
        s("Ruth lacht. \"Ja, hij is nog vrij! Maar nu heb ik geen tijd. Kijk maar: zes klanten!\"", "Ruth laughs. \"Yes, it's still free! But I don't have time now. Look: six customers!\""),
        s("\"Kom maandag om twee uur langs. Dan is de winkel dicht en kunnen we rustig praten.\"", "\"Come by on Monday at two. The shop is closed then and we can talk in peace.\""),
      ],
      [
        s("Fatima schrijft het in haar agenda: maandag, twee uur, bakker.", "Fatima writes it in her diary: Monday, two o'clock, baker's."),
        s("Op maandag zijn veel winkels in Nederland 's ochtends dicht. Dat vindt Fatima nog steeds raar.", "On Mondays many shops in the Netherlands are closed in the morning. Fatima still finds that strange."),
        s("Thuis oefent ze: \"Goedemiddag, ik ben Fatima. Ik wil graag bij u werken.\"", "At home she practises: \"Good afternoon, I'm Fatima. I'd like to work for you.\""),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "Can Fatima get the job without experience?", options: ["Yes: experience is handy but not necessary", "No: she needs experience", "The advert doesn't say"], answer: 0 },
      { kind: "choice", prompt: "Why does Ruth want to talk on Monday?", options: ["The shop is closed then, so there's time", "She's free all Monday morning", "Fatima can't come on Sunday"], answer: 0 },
      { kind: "truefalse", statement: "Fatima koopt een wit brood.", translation: "Fatima buys a white loaf.", answer: false },
      { kind: "choice", prompt: "Why does Fatima practise at home?", options: ["She's nervous about the interview", "Ingrid asks her to", "She's learning a song"], answer: 0 },
    ],
  },
  {
    ...story,
    id: "werk-3-het-gesprek",
    title: "Het gesprek",
    titleTranslation: "The interview",
    grammar: ["questions", "jij-inversion", "modal-verbs", "separable-verbs"],
    paragraphs: [
      [
        s("Maandag om twee uur zit Fatima met Ruth aan een tafeltje in de lege winkel.", "On Monday at two Fatima is sitting with Ruth at a little table in the empty shop."),
        s("\"Heb je ervaring in een winkel?\" vraagt Ruth.", "\"Do you have experience in a shop?\" Ruth asks."),
        s("\"Ja, in Marokko help ik elke zomer in de winkel van mijn oom. Ik kan goed met mensen praten.\"", "\"Yes, in Morocco I help in my uncle's shop every summer. I'm good at talking to people.\""),
        s("\"Mooi. Kun je op zaterdag en zondag werken?\"", "\"Good. Can you work on Saturday and Sunday?\""),
        s("\"Ja, dat kan. Hoeveel uur per week is het?\"", "\"Yes, I can. How many hours a week is it?\""),
        s("\"Tien uur: zaterdag van zeven tot één, en zondag van acht tot twaalf. Je krijgt dertien euro per uur.\"", "\"Ten hours: Saturday from seven to one, and Sunday from eight to twelve. You get thirteen euros an hour.\""),
      ],
      [
        s("\"Wat moet ik doen?\"", "\"What do I have to do?\""),
        s("\"Brood verkopen, koffie maken en de winkel schoonmaken. Om één uur is de vloer altijd vies!\"", "\"Sell bread, make coffee and clean the shop. At one o'clock the floor is always dirty!\""),
        s("\"Dat is geen probleem. Wanneer kan ik beginnen?\"", "\"That's no problem. When can I start?\""),
        s("\"Zaterdag! Om zeven uur. Vroeg, hè?\"", "\"Saturday! At seven. Early, isn't it?\""),
      ],
      [
        s("Fatima fietst blij naar huis. Een baan bij de bakker, in de straat van Luca!", "Fatima cycles home happy. A job at the baker's, in Luca's street!"),
        s("Ze stuurt meteen een bericht naar Luca: \"Ik heb de baan! Zaterdag begin ik.\"", "She sends Luca a message straight away: \"I've got the job! I start on Saturday.\""),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "Why does Fatima mention her uncle's shop?", options: ["To show she has experience", "Because she wants to go back", "Because her uncle is a baker in Leiden"], answer: 0 },
      { kind: "choice", prompt: "How much does Fatima earn in a week?", options: ["130 euros", "100 euros", "156 euros"], answer: 0 },
      { kind: "truefalse", statement: "Op zondag werkt Fatima zes uur.", translation: "On Sunday Fatima works six hours.", answer: false },
      { kind: "order", prompt: "Put the interview in order.", items: ["Ruth asks about experience", "Ruth asks about the weekend", "Fatima asks about the hours", "Fatima asks what she has to do", "Ruth says when she starts"] },
    ],
  },
  {
    ...story,
    id: "werk-4-de-eerste-zaterdag",
    title: "De eerste zaterdag",
    titleTranslation: "The first Saturday",
    grammar: ["present-regular", "negation", "imperative", "conjunctions"],
    paragraphs: [
      [
        s("Zaterdag om zeven uur staat Fatima in de bakkerij, met een wit schort.", "On Saturday at seven Fatima is standing in the bakery, in a white apron."),
        s("De eerste klant is mevrouw De Vries. \"Ik werk niet meer, ik ben gepensioneerd. Maar ik sta nog steeds vroeg op!\"", "The first customer is Mrs De Vries. \"I don't work any more, I'm retired. But I still get up early!\""),
        s("Dan komt Kwame. Hij is leraar, maar vandaag is hij vrij. Hij koopt twee broodjes en een krentenbol.", "Then Kwame comes in. He's a teacher, but today he's off. He buys two rolls and a currant bun."),
        s("Om acht uur komt de kapper van hiernaast. \"Op zaterdag is het bij mij heel druk. Op maandag ben ik dicht.\"", "At eight the hairdresser from next door comes in. \"On Saturdays I'm very busy. On Mondays I'm closed.\""),
      ],
      [
        s("Om negen uur staat Noor voor de toonbank. Ze studeert geneeskunde en werkt twee dagen per week in het ziekenhuis.", "At nine Noor is at the counter. She studies medicine and works two days a week at the hospital."),
        s("\"Vandaag heb ik een lange dienst. Een groot brood, alsjeblieft!\"", "\"I've got a long shift today. A big loaf, please!\""),
        s("Fatima geeft Noor het brood en het wisselgeld: vijftien euro.", "Fatima gives Noor the bread and the change: fifteen euros."),
        s("\"Fatima, dat is veel te veel! Ik betaal met tien euro, en het brood kost drie euro.\"", "\"Fatima, that's far too much! I'm paying with ten euros, and the bread costs three euros.\""),
        s("Fatima wordt rood. \"Sorry! Zeven euro terug.\"", "Fatima goes red. \"Sorry! Seven euros back.\""),
      ],
      [
        s("Om één uur is de winkel leeg, en de vloer is vies. Fatima maakt alles schoon.", "At one the shop is empty, and the floor is dirty. Fatima cleans everything."),
        s("\"Hoe was het?\" vraagt Ruth.", "\"How was it?\" Ruth asks."),
        s("\"Leuk! Maar ik moet nog veel leren. Vooral rekenen!\"", "\"Fun! But I've still got lots to learn. Especially maths!\""),
        s("\"Iedereen maakt fouten. Jij bent eerlijk en aardig, en de klanten vinden je leuk. Tot morgen!\"", "\"Everyone makes mistakes. You're honest and kind, and the customers like you. See you tomorrow!\""),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "Why does Noor say \"dat is veel te veel\"?", options: ["Fatima gives her too much change", "The bread is too expensive", "The loaf is too big"], answer: 0 },
      { kind: "truefalse", statement: "Mevrouw De Vries werkt nog elke dag.", translation: "Mrs De Vries still works every day.", answer: false },
      { kind: "choice", prompt: "Why is the hairdresser's busy on Saturdays?", options: ["People have time at the weekend", "It's closed on Sundays", "It's cheap on Saturdays"], answer: 0 },
      { kind: "choice", prompt: "What does Ruth think of Fatima's first day?", options: ["Good: mistakes happen and customers like her", "Bad: she makes too many mistakes", "She doesn't say"], answer: 0 },
    ],
  },
];

/** Listening from the story: Fatima tells her mother on the phone. */
export const werkListening: ListeningItem = {
  id: "fatima-belt-haar-moeder",
  level: "A1",
  title: "Fatima belt haar moeder",
  titleTranslation: "Fatima calls her mother",
  kind: "dialogue",
  situation: "Monday evening, after the interview. Fatima calls her mother, who speaks Dutch with her for practice.",
  grammar: ["questions", "time-numbers"],
  lines: [
    l("Moeder", "Hallo, schat! Hoe was het gesprek?", "Hello, love! How was the interview?"),
    l("Fatima", "Heel goed, mama. Ik heb de baan!", "Very good, Mum. I've got the job!"),
    l("Moeder", "Wat goed! Wat moet je doen?", "How great! What do you have to do?"),
    l("Fatima", "Brood verkopen en koffie maken. En de vloer schoonmaken.", "Sell bread and make coffee. And clean the floor."),
    l("Moeder", "En wanneer werk je?", "And when do you work?"),
    l("Fatima", "Op zaterdag en zondag. Op zaterdag begin ik om zeven uur.", "On Saturday and Sunday. On Saturday I start at seven."),
    l("Moeder", "Om zeven uur? Jij? Jij bent toch geen ochtendmens!", "At seven? You? But you're not a morning person!"),
  ],
  gist: { prompt: "What's the call about?", options: ["Fatima's new job", "Fatima's Dutch class", "A trip to Morocco"], answer: 0 },
  details: [
    { prompt: "Which days does Fatima work?", options: ["Saturday and Sunday", "Monday and Wednesday", "Every day"], answer: 0 },
    { prompt: "Why is her mother surprised?", options: ["Fatima isn't a morning person", "The pay is low", "Fatima can't make coffee"], answer: 0 },
  ],
  tasks: [
    { kind: "truefalse", statement: "Fatima moet ook de winkel schoonmaken.", translation: "Fatima also has to clean the shop.", answer: true },
    { kind: "heard", line: 5, options: ["zeven", "zeventien", "negen"], answer: 0 },
    { kind: "gaps", line: 3, words: ["verkopen", "koffie"] },
  ],
  dictation: [1, 5],
  words: {
    schat: { meaning: "darling, love (lit. treasure)" },
    mama: { meaning: "mum" },
    ochtendmens: { meaning: "morning person" },
  },
};

/** Writing that joins the story: apply for a job in the street. */
export const werkWriting: WritingTask = {
  id: "w-een-baan-in-de-straat",
  level: "A1",
  title: "Een baan in de straat",
  titleTranslation: "A job in the street",
  form: "email",
  situation: "Café De Burcht is looking for someone for the weekend. Write a short email to Kees, the boss.",
  points: [
    { prompt: "Greet him and say why you're writing", frame: "Beste Kees, ik wil graag … .", cues: ["werken", "baan", "bijbaan"] },
    { prompt: "Say who you are", frame: "Ik heet … en ik woon in … .", cues: ["heet", "woon"] },
    { prompt: "Say what experience you have", frame: "Ik heb ervaring in … .", cues: ["ervaring"] },
    { prompt: "Say what you can do well", frame: "Ik kan goed … .", cues: ["kan", "goed"] },
    { prompt: "Say when you can work", frame: "Ik kan op … werken.", cues: ["zaterdag", "zondag", "kan"] },
    { prompt: "Ask a question about the job", frame: "Hoeveel … ?", cues: ["hoeveel", "uur", "euro"] },
  ],
  model:
    "Beste Kees, ik wil graag in uw café werken. Ik heet Sara en ik woon in Leiden, dichtbij het station. Ik heb ervaring in een winkel: in Spanje werk ik elke zomer bij mijn oom. Ik kan goed koffie maken, en ik praat graag met mensen. Ik kan op zaterdag en zondag werken, de hele dag. Hoeveel uur per week is het? Met vriendelijke groet, Sara",
};

/** The end of the unit: next week's hours. */
export const werkCheckpoint: Checkpoint = {
  title: "Het rooster",
  titleTranslation: "The rota",
  text: [
    [
      s("Zondag na het werk geeft Ruth Fatima een briefje.", "On Sunday after work Ruth gives Fatima a note."),
      s("\"Volgende week: zaterdag van zeven tot één, zondag van acht tot twaalf. Zondag komt er een grote groep: veertig broodjes! Kun je dan om half acht beginnen? Op maandagmiddag is de bakker dicht. Ruth\"", "\"Next week: Saturday from seven to one, Sunday from eight to twelve. On Sunday a big group is coming: forty rolls! Can you start at half past seven then? On Monday afternoon the bakery is closed. Ruth\""),
    ],
  ],
  textTasks: [
    { kind: "truefalse", statement: "Zondag moet Fatima vroeger beginnen.", translation: "On Sunday Fatima has to start earlier.", answer: true },
    { kind: "choice", prompt: "Why does Ruth ask her to come early on Sunday?", options: ["A big group wants forty rolls", "Ruth is ill", "The bakery opens earlier every Sunday"], answer: 0 },
    { kind: "choice", prompt: "When is the bakery closed?", options: ["On Monday afternoon", "Saturday and Sunday", "All day on Monday and Tuesday"], answer: 0 },
  ],
  listening: {
    situation: "Luca leaves Fatima a voice message.",
    lines: [
      l("Luca", "Hoi Fatima, met Luca!", "Hi Fatima, it's Luca!"),
      l("Luca", "Gefeliciteerd met je baan!", "Congratulations on your job!"),
      l("Luca", "Zaterdag werk ik ook, in het café, van twee tot zeven.", "I'm working on Saturday too, at the café, from two to seven."),
      l("Luca", "Kom je na je werk een kop koffie drinken? Ik betaal!", "Will you come for a cup of coffee after work? I'm paying!"),
      l("Luca", "Tot zaterdag!", "See you Saturday!"),
    ],
    questions: [
      { prompt: "When does Luca work on Saturday?", options: ["From two to seven", "From seven to one", "From ten to four"], answer: 0 },
      { prompt: "What does Luca offer?", options: ["A coffee at the café", "Help at the bakery", "A lift home"], answer: 0 },
    ],
  },
  write: {
    situation: "Write a short answer to Ruth's note.",
    points: [
      { prompt: "Say yes to Sunday", frame: "Zondag … ." },
      { prompt: "Say what time you'll be there", frame: "Ik ben er om … ." },
      { prompt: "Ask Ruth a question", frame: "… ?" },
    ],
    model: "Zondag is goed. Ik ben er om half acht. Moet ik ook koffie maken voor de groep?",
    modelTranslation: "Sunday is fine. I'll be there at half past seven. Do I have to make coffee for the group too?",
  },
  words: {
    ruth: { meaning: "Ruth (a name)" },
    veertig: { meaning: "forty" },
    briefje: { meaning: "a note", base: "brief" },
    groep: { meaning: "group" },
    broodjes: { meaning: "rolls", base: "broodje" },
    dicht: { meaning: "closed" },
    gefeliciteerd: { meaning: "congratulations" },
  },
};
