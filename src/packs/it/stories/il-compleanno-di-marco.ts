import type { Checkpoint, ListeningItem, ReadingText, Story, WordHelp } from "@/core/content";
import type { WritingTask } from "@/core/writing";
import { a1, gaps, heard, line, mc, order, pf, s, tf } from "../units/helpers";

/**
 * A1 unit 4 as one story in four episodes (Matteo, 17 Nov 2026): the same
 * people all week. Emma has just moved in above Bar Margherita; Marco the
 * barista never stops talking; Signora Rita lets slip that Sunday is his
 * birthday.
 */
export const ilCompleanno: Story = {
  id: "il-compleanno-di-marco",
  title: "Il compleanno di Marco",
  titleTranslation: "Marco's birthday",
  intro:
    "Emma has just moved into Via del Pratello. Downstairs is Bar Margherita, and Marco, the barista who never stops talking. One week, four episodes, the same people all through the unit.",
};

/** Help shared by every episode. */
const storyWords: Record<string, WordHelp> = {
  bassi: { meaning: "Bassi (a surname)" },
  nero: { meaning: "black" },
  lavagna: { meaning: "blackboard (the menu board in a bar)" },
  corretto: { meaning: "\"corrected\": coffee with a drop of spirits" },
  torna: { meaning: "goes back, comes back", base: "tornare" },
  guarda: { meaning: "looks at", base: "guardare" },
  occhi: { meaning: "eyes", base: "occhio" },
  ride: { meaning: "laughs", base: "ridere" },
  dà: { meaning: "gives", base: "dare" },
  gli: { meaning: "to him; the (plural)" },
  freddo: { meaning: "cold" },
  devi: { meaning: "you have to", base: "dovere" },
  carta: { meaning: "paper; card" },
  bevete: { meaning: "you (all) drink", base: "bere" },
  lo: { meaning: "it, him; the" },
  studia: { meaning: "studies", base: "studiare" },
  studi: { meaning: "you study", base: "studiare" },
  finestra: { meaning: "window" },
  così: { meaning: "so, like this; this way" },
  vede: { meaning: "sees", base: "vedere" },
  capelli: { meaning: "hair", base: "capello" },
  bianchi: { meaning: "white", base: "bianco" },
  siede: { meaning: "sits down (si siede)", base: "sedersi" },
  difficile: { meaning: "difficult" },
  vieni: { meaning: "come! (to tu)", base: "venire" },
  piano: { meaning: "quietly, softly; slowly" },
  compleanno: { meaning: "birthday", local: "Buon compleanno! or Tanti auguri!" },
  nessuno: { meaning: "nobody, no one" },
  pieno: { meaning: "full" },
  migliore: { meaning: "best (il migliore = the best one)" },
  prima: { meaning: "first; before (prima di = before)" },
  idea: { meaning: "idea" },
  entrano: { meaning: "go in, come in", base: "entrare" },
  torta: { meaning: "cake" },
  cioccolato: { meaning: "chocolate" },
  auguri: { meaning: "best wishes (tanti auguri = happy birthday)", local: "Tanti auguri! works for birthdays, weddings, any good news." },
  regalo: { meaning: "present, gift" },
  moka: { meaning: "moka pot (the stovetop coffee maker)" },
  niente: { meaning: "nothing" },
  insieme: { meaning: "together" },
  cantano: { meaning: "sing", base: "cantare" },
  volta: { meaning: "time (per una volta = for once)" },
  rosso: { meaning: "red" },
  sapete: { meaning: "you (all) know", base: "sapere" },
  fuori: { meaning: "outside (fuori dalla finestra = out of the window)" },
  legge: { meaning: "reads", base: "leggere" },
  alta: { meaning: "high, loud (ad alta voce = out loud)", base: "alto" },
  voce: { meaning: "voice" },
  caro: { meaning: "dear (to start a card or letter)", local: "Caro to a man, Cara to a woman, Cari to several" },
  simpatico: { meaning: "nice, likeable", local: "Not 'sympathetic': simpatico = fun to be with" },
  cuori: { meaning: "hearts", base: "cuore" },
  abbraccio: { meaning: "hug (un abbraccio = love, at the end of a card)" },
  taglia: { meaning: "cuts", base: "tagliare" },
  pezzi: { meaning: "pieces, slices", base: "pezzo" },
  festa: { meaning: "party; holiday" },
  offro: { meaning: "I'm paying (offro io = my treat)", base: "offrire", local: "Offro io! is how Italians insist on paying." },
  solo: { meaning: "only, just; alone" },
  vuole: { meaning: "wants", base: "volere" },
  bicchiere: { meaning: "glass" },
  questo: { meaning: "this" },
  pensionati: { meaning: "pensioners, retired people", base: "pensionato" },
};

const story = { level: "A1" as const, words: storyWords };

export const barTexts: ReadingText[] = [
  {
    ...story,
    id: "bar-1-la-nuova-vicina",
    title: "La nuova vicina",
    titleTranslation: "The new neighbour",
    grammar: ["vorrei", "tu-lei", "present-are"],
    paragraphs: [
      [
        s("Il Bar Margherita è all'angolo di via del Pratello, sotto la casa di Emma.", "Bar Margherita is on the corner of Via del Pratello, below Emma's flat."),
        s("Il barista si chiama Marco.", "The barista is called Marco."),
        s("È napoletano e parla sempre: con i clienti, con i colleghi, anche con la macchina del caffè!", "He's from Naples and he never stops talking: to the customers, to his colleagues, even to the coffee machine!"),
        s("Lunedì mattina Emma entra per la prima volta.", "On Monday morning Emma goes in for the first time."),
      ],
      [
        s("\"Buongiorno! Che cosa desidera?\" chiede Marco.", "\"Good morning! What would you like?\" Marco asks."),
        s("\"Buongiorno. Vorrei un cappuccino e un cornetto, per favore.\"", "\"Good morning. I'd like a cappuccino and a croissant, please.\""),
        s("\"Un cornetto vuoto o con la crema?\" \"Con la crema, grazie.\"", "\"A plain croissant or with custard?\" \"With custard, thanks.\""),
        s("Marco prepara il cappuccino e disegna un cuore nella schiuma.", "Marco makes the cappuccino and draws a heart in the foam."),
        s("\"Ecco qua. Lei non è italiana, vero?\" \"No, sono irlandese. Abito qui sopra.\"", "\"Here you are. You're not Italian, are you?\" \"No, I'm Irish. I live upstairs.\""),
        s("\"Ah, la nuova vicina! Allora siamo amici. Io sono Marco, e da oggi ci diamo del tu!\"", "\"Ah, the new neighbour! Then we're friends. I'm Marco, and from today we use tu!\""),
      ],
      [
        s("Al banco c'è un signore con un caffè piccolo e nero.", "At the counter there's a man with a small black coffee."),
        s("\"È un espresso?\" chiede Emma.", "\"Is that an espresso?\" Emma asks."),
        s("\"Qui si dice solo caffè\", risponde Marco. \"È piccolo, forte e caldo. Il signor Bassi lo beve in piedi, in un minuto, ogni mattina.\"", "\"Here we just say caffè,\" Marco answers. \"It's small, strong and hot. Signor Bassi drinks it standing up, in one minute, every morning.\""),
        s("Sulla lavagna ci sono tanti tipi di caffè: macchiato, lungo, corretto.", "On the board there are lots of kinds of coffee: macchiato, lungo, corretto."),
        s("\"Il caffè lungo ha più acqua, e il corretto ha un po' di grappa. Il signor Bassi lo prende solo la domenica!\"", "\"A caffè lungo has more water, and a corretto has a little grappa. Signor Bassi only has one on Sundays!\""),
        s("Emma paga alla cassa: due euro e settanta.", "Emma pays at the till: two euros seventy."),
        s("\"Grazie, Marco. A domani!\" \"A domani, Emma!\"", "\"Thanks, Marco. See you tomorrow!\" \"See you tomorrow, Emma!\""),
      ],
    ],
    tasks: [
      mc("Why does Marco say \"we're friends\"?", ["Emma lives right above the bar", "Emma is from Naples too", "Emma works at the bar"], 0),
      tf("Alla fine Marco e Emma usano il tu.", "In the end Marco and Emma use tu.", true),
      mc("If Emma wants what Signor Bassi has, what should she order?", ["Un caffè", "Un caffè lungo", "Un latte"], 0),
      tf("Il signor Bassi beve il caffè corretto ogni mattina.", "Signor Bassi drinks a caffè corretto every morning.", false),
    ],
  },
  {
    ...story,
    id: "bar-2-le-regole-del-bar",
    title: "Le regole del bar",
    titleTranslation: "The rules of the bar",
    grammar: ["questions", "present-are", "articles"],
    paragraphs: [
      [
        s("Martedì, dopo pranzo, Emma torna al bar con Giulia e Karim.", "On Tuesday, after lunch, Emma goes back to the bar with Giulia and Karim."),
        s("In questo bar prima paghi alla cassa e prendi lo scontrino, poi ordini al banco.", "In this bar you first pay at the till and take the receipt, then you order at the counter."),
        s("\"Io vorrei un cappuccino\", dice Emma.", "\"I'd like a cappuccino,\" says Emma."),
        s("Marco la guarda con gli occhi grandi: \"Un cappuccino? Dopo pranzo?\"", "Marco looks at her with big eyes: \"A cappuccino? After lunch?\""),
      ],
      [
        s("Giulia ride. \"Gli italiani bevono il cappuccino la mattina, a colazione, quasi mai dopo pranzo. Dopo pranzo si prende un caffè.\"", "Giulia laughs. \"Italians drink cappuccino in the morning, at breakfast, almost never after lunch. After lunch you have a coffee.\""),
        s("\"Va bene, allora un caffè macchiato: un caffè con un po' di latte.\"", "\"OK, then a caffè macchiato: a coffee with a little milk.\""),
        s("Karim, invece, chiede un latte.", "Karim, on the other hand, asks for a latte."),
        s("Marco gli dà un bicchiere di latte freddo.", "Marco gives him a glass of cold milk."),
        s("\"Ma io vorrei un caffè con tanto latte!\" \"Allora devi chiedere un latte macchiato\", dice Giulia.", "\"But I'd like a coffee with lots of milk!\" \"Then you have to ask for a latte macchiato,\" says Giulia."),
      ],
      [
        s("Emma vuole un tavolo, ma Karim dice: \"Al banco costa poco, più o meno un euro e venti. Al tavolo costa di più!\"", "Emma wants a table, but Karim says: \"At the counter it's cheap, about one euro twenty. At a table it costs more!\""),
        s("Allora bevono il caffè in piedi, al banco, in pochi minuti.", "So they drink their coffee standing up, at the counter, in a few minutes."),
        s("Emma chiede a Marco un bicchiere di carta, per portare via il caffè.", "Emma asks Marco for a paper cup, to take her coffee away."),
        s("\"Da portare via? No, no, no\", dice Marco. \"In Italia il caffè si beve al bar, con calma, e si parla un po' con il barista!\"", "\"To take away? No, no, no,\" says Marco. \"In Italy you drink coffee at the bar, calmly, and chat a little with the barista!\""),
        s("\"Con calma? Ma voi lo bevete in pochi minuti!\" Questa volta ride Marco.", "\"Calmly? But you drink it in a few minutes!\" This time it's Marco who laughs."),
      ],
    ],
    tasks: [
      mc("Why is Marco surprised by Emma's first order?", ["A cappuccino after lunch isn't done", "She wants to pay at the table", "She orders in English"], 0),
      mc("Why does Karim get a glass of milk?", ["In Italy \"latte\" just means milk", "Marco is playing a joke on him", "There's no more coffee"], 0),
      tf("Se bevi il caffè al tavolo, costa di più.", "If you drink your coffee at a table, it costs more.", true),
      mc("What's funny about Marco's \"con calma\"?", ["Italians drink their coffee in a few minutes", "Marco is always in a hurry", "Emma drinks very slowly"], 0),
    ],
  },
  {
    ...story,
    id: "bar-3-un-venerdi-al-bar",
    title: "Un venerdì al bar",
    titleTranslation: "A Friday at the bar",
    grammar: ["present-are", "questions", "plurals"],
    paragraphs: [
      [
        s("Venerdì Emma studia al bar tutto il giorno, a un tavolo vicino alla finestra.", "On Friday Emma studies at the bar all day, at a table by the window."),
        s("Così vede che per gli italiani il bar non è solo un posto per bere il caffè.", "That's how she sees that for Italians the bar isn't just a place to drink coffee."),
        s("La mattina presto le persone fanno colazione prima del lavoro.", "Early in the morning people have breakfast before work."),
        s("A metà mattina arrivano gli impiegati per una pausa.", "Mid-morning, office workers arrive for a break."),
        s("Dopo pranzo molti prendono un caffè, per non dormire in ufficio!", "After lunch many have a coffee, so as not to fall asleep at the office!"),
      ],
      [
        s("Il pomeriggio i pensionati giocano a carte e parlano di calcio.", "In the afternoon pensioners play cards and talk about football."),
        s("Una signora con i capelli bianchi si siede vicino a Emma: è la signora Rita, una cliente di Marco.", "A lady with white hair sits down next to Emma: it's Signora Rita, one of Marco's customers."),
        s("\"Studi l'italiano?\" \"Sì, ma è difficile.\" \"Allora vieni al bar ogni giorno: qui si parla tanto!\"", "\"Are you studying Italian?\" \"Yes, but it's difficult.\" \"Then come to the bar every day: people talk a lot here!\""),
        s("Poi Rita parla piano: \"Domenica è il compleanno di Marco. Ma lui non lo dice a nessuno.\"", "Then Rita speaks softly: \"Sunday is Marco's birthday. But he doesn't tell anyone.\""),
      ],
      [
        s("La sera, dalle sei alle nove, c'è l'aperitivo: un bicchiere di vino o uno spritz, con patatine, olive e piccoli panini.", "In the evening, from six to nine, there's aperitivo: a glass of wine or a spritz, with crisps, olives and little sandwiches."),
        s("Il bar è pieno. Il barista conosce tutti, e tutti conoscono il barista.", "The bar is full. The barista knows everyone, and everyone knows the barista."),
        s("\"Quanti bar ci sono in Italia? Più di centomila!\" dice Rita. \"Ma il migliore è questo.\"", "\"How many bars are there in Italy? More than a hundred thousand!\" says Rita. \"But the best one is this one.\""),
        s("Prima di tornare a casa, Emma compra due biglietti dell'autobus alla cassa: il Bar Margherita è anche una tabaccheria.", "Before going home, Emma buys two bus tickets at the till: Bar Margherita is a tobacconist too."),
        s("E ha un'idea per domenica.", "And she has an idea for Sunday."),
      ],
    ],
    tasks: [
      order("Put Emma's day at the bar in order.", "Breakfast before work", "A break mid-morning", "Coffee after lunch", "Cards in the afternoon", "Aperitivo in the evening"),
      mc("Who tells Emma about Marco's birthday?", ["Signora Rita", "Marco himself", "Giulia"], 0),
      tf("Marco dice a tutti che domenica è il suo compleanno.", "Marco tells everyone that Sunday is his birthday.", false),
      mc("Why does Rita tell Emma to come to the bar every day?", ["People talk a lot there: good for her Italian", "It's cheaper than eating at home", "Marco needs help at the till"], 0),
    ],
  },
  {
    ...story,
    id: "bar-4-tanti-auguri-marco",
    title: "Tanti auguri, Marco!",
    titleTranslation: "Happy birthday, Marco!",
    grammar: ["present-are", "questions", "tu-lei"],
    paragraphs: [
      [
        s("Domenica mattina Emma, Giulia e Karim entrano al bar alle nove.", "On Sunday morning Emma, Giulia and Karim go into the bar at nine."),
        s("Giulia ha una torta al cioccolato, Karim ha un biglietto e Emma ha un regalo: una moka piccola.", "Giulia has a chocolate cake, Karim has a card and Emma has a present: a small moka pot."),
        s("Marco prepara i caffè e non vede niente.", "Marco is making coffees and doesn't notice a thing."),
        s("Poi tutti insieme dicono: \"Tanti auguri, Marco!\"", "Then all together they say: \"Happy birthday, Marco!\""),
        s("Anche Rita e il signor Bassi cantano, e il signor Bassi per una volta beve il caffè con calma.", "Rita and Signor Bassi sing too, and for once Signor Bassi drinks his coffee calmly."),
      ],
      [
        s("Marco è rosso. \"Ma come lo sapete?\"", "Marco goes red. \"But how do you know?\""),
        s("Emma guarda Rita, e Rita guarda fuori dalla finestra.", "Emma looks at Rita, and Rita looks out of the window."),
        s("Marco legge il biglietto ad alta voce: \"Caro Marco, tanti auguri! Sei il barista più simpatico di Bologna. Grazie per i cuori nella schiuma. Un abbraccio, Emma, Giulia e Karim.\"", "Marco reads the card out loud: \"Dear Marco, happy birthday! You're the nicest barista in Bologna. Thanks for the hearts in the foam. Love, Emma, Giulia and Karim.\""),
        s("\"Una moka per un barista napoletano? Perfetto!\"", "\"A moka pot for a barista from Naples? Perfect!\""),
      ],
      [
        s("Giulia taglia la torta. Karim prende tre pezzi.", "Giulia cuts the cake. Karim takes three pieces."),
        s("\"Ma tu non sei a dieta?\" chiede Marco. \"Oggi no: è una festa!\"", "\"Aren't you on a diet?\" Marco asks. \"Not today: it's a party!\""),
        s("Emma vuole pagare alla cassa, ma Marco dice: \"Oggi niente scontrino. Offro io!\"", "Emma wants to pay at the till, but Marco says: \"No receipt today. My treat!\""),
        s("\"E un cappuccino dopo pranzo?\" chiede Emma. \"Per te, Emma, anche alle sei di sera. Ma solo oggi!\"", "\"And a cappuccino after lunch?\" Emma asks. \"For you, Emma, even at six in the evening. But only today!\""),
        s("E tu, quando vai al bar? E che cosa ordini?", "And you, when do you go to the bar? And what do you order?"),
      ],
    ],
    tasks: [
      mc("Why is Marco so surprised?", ["He never told anyone about his birthday", "His friends are late", "The cake is for someone else"], 0),
      tf("Alla fine Emma paga alla cassa.", "In the end Emma pays at the till.", false),
      mc("What does \"Oggi no: è una festa!\" tell you about Karim?", ["He forgets his diet for the party", "He doesn't like chocolate", "He has to leave early"], 0),
      mc("Why does Marco add \"Ma solo oggi!\"?", ["A cappuccino after lunch is still not done", "The machine closes at six", "Cappuccino is very expensive"], 0),
    ],
  },
];

/** A scene from the same week to listen to: the plan for Sunday. */
export const laSorpresa: ListeningItem = {
  id: "la-sorpresa",
  level: "A1",
  title: "La sorpresa",
  titleTranslation: "The surprise",
  kind: "dialogue",
  situation: "Friday night in the kitchen. Emma tells Giulia and Karim what Rita said.",
  grammar: ["present-are", "questions"],
  lines: [
    line("Emma", "Ragazzi, domenica è il compleanno di Marco!", "Guys, Sunday is Marco's birthday!"),
    line("Giulia", "Davvero? Allora io preparo una torta al cioccolato.", "Really? Then I'll make a chocolate cake."),
    line("Karim", "E io compro un biglietto. Tu cosa porti, Emma?", "And I'll buy a card. What are you bringing, Emma?"),
    line("Emma", "Un regalo. Forse una moka piccola?", "A present. Maybe a small moka pot?"),
    line("Karim", "Una moka per un barista? Ma dai!", "A moka pot for a barista? Come on!"),
    line("Giulia", "No, è un'idea carina. Così fa il caffè anche a casa.", "No, it's a sweet idea. That way he can make coffee at home too."),
    line("Emma", "Allora domenica alle nove, al bar. E niente parole con Marco!", "So Sunday at nine, at the bar. And not a word to Marco!"),
  ],
  gist: { prompt: "What are they doing?", options: ["Planning a surprise for Marco", "Ordering at the bar", "Cleaning the kitchen"], answer: 0 },
  details: [
    { prompt: "What does Giulia make?", options: ["A chocolate cake", "Coffee", "Sandwiches"], answer: 0 },
    { prompt: "When do they meet at the bar?", options: ["Sunday at nine", "Saturday at nine", "Sunday at six"], answer: 0 },
  ],
  tasks: [
    tf("Karim compra il regalo.", "Karim buys the present.", false),
    heard(5, ["carina", "cucina", "cassa"], 0),
    gaps(1, "preparo", "torta"),
  ],
  dictation: [2, 6],
  words: {
    ragazzi: { meaning: "guys, you lot (ragazzo = boy)" },
    davvero: { meaning: "really" },
    forse: { meaning: "maybe, perhaps" },
    carina: { meaning: "sweet, nice, pretty", base: "carino" },
    parole: { meaning: "words", base: "parola" },
    porti: { meaning: "you bring", base: "portare" },
  },
};

/** Writing that joins the story: a card of your own. */
export const unBiglietto: WritingTask = a1({
  id: "w-un-biglietto-per-marco",
  title: "Un biglietto per Marco",
  titleTranslation: "A card for Marco",
  form: "message",
  situation: "It's Marco's birthday. Write him your own card: you're a customer at Bar Margherita too.",
  points: [
    pf("Start the card", "Caro … ,", "caro"),
    pf("Wish him a happy birthday", "Tanti … !", "auguri"),
    pf("Say something nice about him", "Sei … .", "sei", "simpatico"),
    pf("Thank him for something", "Grazie per … .", "grazie"),
    pf("Say what you'd like at the bar with him", "Vorrei … .", "vorrei"),
    pf("Sign off", "Un abbraccio, …", "abbraccio"),
  ],
  model:
    "Caro Marco, tanti auguri! Sei sempre simpatico con tutti i clienti. Grazie per il cappuccino di ogni mattina e per i cuori nella schiuma. Vorrei bere uno spritz con te all'aperitivo, dopo il lavoro. Un abbraccio, Sara",
});

/** The end of the unit: the Monday after. */
export const barCheckpoint: Checkpoint = {
  title: "Il lunedì dopo",
  titleTranslation: "The Monday after",
  text: [
    [
      s("Lunedì mattina Emma scende al bar.", "On Monday morning Emma goes down to the bar."),
      s("Sulla porta c'è un biglietto di Marco.", "On the door there's a note from Marco."),
      s("\"Cari clienti, oggi il bar apre alle dieci: il barista dorme! Grazie a tutti per la festa. Emma, Giulia e Karim: domenica vi invito a pranzo a casa mia. Pasta alla napoletana! Marco\"", "\"Dear customers, today the bar opens at ten: the barista is sleeping! Thanks, everyone, for the party. Emma, Giulia and Karim: on Sunday I'm inviting you to lunch at my place. Neapolitan pasta! Marco\""),
    ],
    [s("Emma ride e scrive subito a Giulia.", "Emma laughs and writes to Giulia straight away.")],
  ],
  textTasks: [
    tf("Lunedì il bar apre alle sei e mezza.", "On Monday the bar opens at half past six.", false),
    mc("Why does the bar open late today?", ["Marco is sleeping after the party", "It's a holiday", "The coffee machine is broken"], 0),
    mc("What is Marco inviting them to?", ["Lunch at his place on Sunday", "An aperitivo at the bar", "A trip to Naples"], 0),
  ],
  listening: {
    situation: "Giulia leaves Emma a voice message about Sunday.",
    lines: [
      line("Giulia", "Ciao Emma, sono Giulia!", "Hi Emma, it's Giulia!"),
      line("Giulia", "Hai visto il biglietto di Marco? Domenica pranzo da lui, all'una.", "Have you seen Marco's note? Lunch at his place on Sunday, at one."),
      line("Giulia", "Io porto il vino, e Karim porta il dolce, se non lo mangia prima!", "I'm bringing the wine, and Karim's bringing dessert, if he doesn't eat it first!"),
      line("Giulia", "Marco abita in via Saragozza, al numero dodici.", "Marco lives in Via Saragozza, at number twelve."),
      line("Giulia", "E tu cosa porti? A dopo, ciao!", "And what are you bringing? See you later, bye!"),
    ],
    questions: [
      { prompt: "What time is lunch?", options: ["At one", "At twelve", "At nine"], answer: 0 },
      { prompt: "What is Giulia bringing?", options: ["Wine", "Dessert", "Bread"], answer: 0 },
      { prompt: "Where does Marco live?", options: ["Via Saragozza 12", "Via del Pratello 12", "Via Saragozza 2"], answer: 0 },
    ],
  },
  write: {
    situation: "Write a short reply to Marco's note: thank him, say you'll come, say what you'll bring.",
    points: [
      { prompt: "Thank him for something", frame: "Grazie per … !" },
      { prompt: "Say you'll come on Sunday", frame: "Domenica … !" },
      { prompt: "Say what you'll bring", frame: "Io porto … ." },
    ],
    model: "Grazie per la festa e per il biglietto, Marco! Domenica vengo con piacere! Io porto le olive e il pane.",
    modelTranslation: "Thanks for the party and for the note, Marco! I'd love to come on Sunday! I'll bring olives and bread.",
  },
  words: {
    scende: { meaning: "goes down", base: "scendere" },
    porta: { meaning: "door; brings (portare)" },
    biglietto: { meaning: "note, card; ticket" },
    cari: { meaning: "dear (to several people)", base: "caro" },
    apre: { meaning: "opens", base: "aprire" },
    dorme: { meaning: "sleeps", base: "dormire" },
    festa: { meaning: "party" },
    invito: { meaning: "I invite", base: "invitare" },
    napoletana: { meaning: "Neapolitan (alla napoletana = Naples style)", base: "napoletano" },
    ride: { meaning: "laughs", base: "ridere" },
    scrive: { meaning: "writes", base: "scrivere" },
    subito: { meaning: "straight away" },
    visto: { meaning: "seen (hai visto = have you seen)", base: "vedere" },
    lui: { meaning: "him; he (da lui = at his place)" },
    porto: { meaning: "I bring", base: "portare" },
    dolce: { meaning: "dessert; sweet" },
    mangia: { meaning: "eats", base: "mangiare" },
    prima: { meaning: "first; before" },
    saragozza: { meaning: "Saragozza (a street in Bologna)" },
    porti: { meaning: "you bring", base: "portare" },
    dopo: { meaning: "after, later (a dopo = see you later)" },
    lo: { meaning: "it, him" },
  },
};
