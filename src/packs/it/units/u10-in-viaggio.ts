import type { Unit } from "@/core/content";
import { a1, gaps, heard, line, mc, order, pf, s, tf } from "./helpers";

/**
 * A1 unit 10: travel. Tickets and trains, a / in with places and transport,
 * the passato prossimo with essere (sono partito, è arrivata). Lead: Marco,
 * the barista, goes home to Naples for his mother's seventieth. Culture: the
 * caffè sospeso, validating regional tickets, the tombola and the smorfia.
 */
export const viaggio: Unit = {
  id: "it-a1-viaggio",
  level: "A1",
  title: "In viaggio",
  titleTranslation: "Travelling",
  look: { motif: "sun", glaze: "copper" },
  canDo: [
    "Buy a train ticket and understand station announcements",
    "Say where you go and how: a Napoli, in Italia, in treno, a piedi",
    "Say where you went: sono andato, sono partita, siamo arrivati",
    "Know a few customs from Naples: the caffè sospeso, the tombola",
  ],
  story: {
    id: "marco-torna-a-napoli",
    title: "Marco torna a Napoli",
    titleTranslation: "Marco goes home to Naples",
    intro:
      "Marco has made coffee on Via del Pratello for five years. This weekend the bar is closed: his mother turns seventy, and the whole family is waiting in Naples. Four episodes: a ticket, a train, a city, and the way back.",
  },
  texts: [
    {
      id: "marco-1-il-biglietto",
      level: "A1",
      title: "Il biglietto",
      titleTranslation: "The ticket",
      grammar: ["places-transport", "numbers-big", "time"],
      paragraphs: [
        [
          s("Sulla porta del Bar Margherita c'è un cartello: \"Chiuso da venerdì a lunedì. Il barista va dalla mamma!\"", "On the door of Bar Margherita there's a sign: \"Closed from Friday to Monday. The barista is going to his mum's!\""),
          s("Giovedì sera Marco va alla stazione di Bologna Centrale con Emma.", "On Thursday evening Marco goes to Bologna Centrale station with Emma."),
          s("\"Buonasera. Un biglietto per Napoli, andata e ritorno, per favore.\"", "\"Good evening. A return ticket to Naples, please.\""),
          s("\"Con il Frecciarossa o con il regionale?\" chiede l'impiegato.", "\"On the Frecciarossa or the regional train?\" the clerk asks."),
        ],
        [
          s("\"Quanto costano?\" \"Il Frecciarossa ci mette tre ore e mezza e costa novanta euro. Con i regionali ci vogliono nove ore, ma costa quaranta euro.\"", "\"How much are they?\" \"The Frecciarossa takes three and a half hours and costs ninety euros. With the regional trains it takes nine hours, but it costs forty euros.\""),
          s("Marco guarda Emma. \"Nove ore? No, grazie. La mamma non aspetta!\"", "Marco looks at Emma. \"Nine hours? No, thanks. Mum won't wait!\""),
          s("Prende il Frecciarossa: partenza domani alle otto e quindici, binario sei.", "He takes the Frecciarossa: leaving tomorrow at quarter past eight, platform six."),
        ],
        [
          s("Fuori dalla stazione Emma chiede: \"Ma perché non vai in aereo?\"", "Outside the station Emma asks: \"But why don't you fly?\""),
          s("\"In aereo? Per Napoli? Con il treno arrivo in centro, e mia madre abita a cinque minuti dalla stazione.\"", "\"Fly? To Naples? By train I arrive in the centre, and my mother lives five minutes from the station.\""),
          s("\"E mi raccomando, Emma: se un giorno prendi il regionale, devi convalidare il biglietto prima di salire. Altrimenti paghi la multa!\"", "\"And listen, Emma: if you ever take a regional train, you have to validate your ticket before you get on. Otherwise you pay a fine!\""),
        ],
      ],
      tasks: [
        mc("Why does Marco choose the Frecciarossa?", ["It's much faster, and his mum is waiting", "It's cheaper", "The regional train is cancelled"], 0),
        tf("Il biglietto del Frecciarossa costa quaranta euro.", "The Frecciarossa ticket costs forty euros.", false),
        mc("Why doesn't Marco fly?", ["The train arrives in the centre, near his mother's house", "He's afraid of flying", "There are no flights"], 0),
        mc("What must you do with a regional ticket?", ["Validate it before you get on", "Show it at the station door", "Buy it on the train"], 0),
      ],
    },
    {
      id: "marco-2-in-treno",
      level: "A1",
      title: "In treno",
      titleTranslation: "On the train",
      grammar: ["passato-essere", "places-transport", "passato-prossimo"],
      paragraphs: [
        [
          s("Venerdì mattina il treno è partito alle otto e quindici, in orario.", "On Friday morning the train left at quarter past eight, on time."),
          s("Accanto a Marco c'è una signora anziana con una borsa enorme. Va a Napoli dalla figlia.", "Next to Marco there's an elderly lady with an enormous bag. She's going to Naples to her daughter's."),
          s("Dopo Firenze la signora apre la borsa: dentro ci sono panini, frittata, frutta e una torta.", "After Florence the lady opens her bag: inside there are sandwiches, frittata, fruit and a cake."),
          s("\"Giovanotto, ha mangiato? Prenda un panino!\" \"No, grazie, signora...\" \"Prenda, prenda! È troppo magro!\"", "\"Young man, have you eaten? Take a sandwich!\" \"No, thank you, madam...\" \"Take one, take one! You're too thin!\""),
        ],
        [
          s("Marco mangia un panino, poi un pezzo di frittata, poi la torta.", "Marco eats a sandwich, then a piece of frittata, then the cake."),
          s("Parlano di tutto: della famiglia, del lavoro, del calcio. La signora è nata a Napoli, ma vive a Milano da quarant'anni.", "They talk about everything: family, work, football. The lady was born in Naples, but she's lived in Milan for forty years."),
          s("\"Lei è napoletano? Si sente!\" \"E lei? Dopo quarant'anni a Milano, parla ancora come una napoletana!\"", "\"Are you from Naples? I can tell!\" \"And you? After forty years in Milan, you still talk like someone from Naples!\""),
        ],
        [
          s("Alle undici e quarantacinque il treno è arrivato a Napoli Centrale.", "At quarter to twelve the train arrived at Napoli Centrale."),
          s("Marco è sceso dal treno con la pancia piena. \"Arrivederci, signora! E grazie per il pranzo!\"", "Marco got off the train with a full belly. \"Goodbye, madam! And thanks for lunch!\""),
          s("\"Saluti alla mamma! E mangi, eh!\"", "\"Say hello to your mum! And eat, eh!\""),
        ],
      ],
      tasks: [
        mc("Why does the lady insist that Marco eats?", ["She thinks he's too thin", "She has too much food", "Marco is hungry"], 0),
        tf("La signora vive a Napoli.", "The lady lives in Naples.", false),
        mc("What's funny about \"parla ancora come una napoletana\"?", ["After forty years in Milan she still has her Naples accent", "She doesn't speak Italian", "She's from Milan"], 0),
        mc("Was the train late?", ["No: it left on time and arrived at 11:45", "Yes, an hour late", "We don't know"], 0),
      ],
    },
    {
      id: "marco-3-napoli",
      level: "A1",
      title: "Napoli",
      titleTranslation: "Naples",
      grammar: ["passato-essere", "numbers-big", "c-e-ci-sono"],
      paragraphs: [
        [
          s("Prima di andare dalla mamma, Marco entra in un bar vicino alla stazione.", "Before going to his mum's, Marco goes into a bar near the station."),
          s("\"Un caffè, e un caffè sospeso\", dice al barista. Paga due caffè, ma ne beve uno.", "\"A coffee, and a caffè sospeso,\" he tells the barista. He pays for two coffees, but drinks one."),
          s("Il caffè sospeso è una vecchia tradizione di Napoli: paghi un caffè in più, per una persona che non ha soldi.", "The caffè sospeso is an old Naples tradition: you pay for an extra coffee, for someone who has no money."),
          s("Dopo dieci minuti entra un signore. \"C'è un sospeso?\" \"Sì, c'è!\" E il signore beve il caffè di Marco.", "Ten minutes later a man comes in. \"Is there a sospeso?\" \"Yes, there is!\" And the man drinks Marco's coffee."),
        ],
        [
          s("A casa della mamma c'è tutta la famiglia: tre sorelle, due cognati, sette nipoti e una zia di novantadue anni.", "At his mum's house the whole family is there: three sisters, two brothers-in-law, seven nephews and nieces, and an aunt of ninety-two."),
          s("La mamma piange quando lo vede. \"Marco! Sei venuto! E sei magro!\"", "His mum cries when she sees him. \"Marco! You came! And you're thin!\""),
          s("Per pranzo c'è il ragù, cotto per sei ore, e poi la torta per i settant'anni.", "For lunch there's ragù, cooked for six hours, and then the cake for her seventieth."),
        ],
        [
          s("La sera giocano a tombola. Ogni numero ha un significato: è la smorfia napoletana.", "In the evening they play tombola. Every number has a meaning: it's the Neapolitan smorfia."),
          s("Lo zio legge i numeri: \"Novanta, la paura! Quarantasette, il morto che parla! Uno, l'Italia!\"", "Uncle reads out the numbers: \"Ninety, fear! Forty-seven, the dead man who talks! One, Italy!\""),
          s("Alla fine vince la zia di novantadue anni, come ogni anno.", "In the end the ninety-two-year-old aunt wins, like every year."),
        ],
      ],
      tasks: [
        mc("What is a caffè sospeso?", ["A coffee you pay for in advance for someone who can't afford one", "A very strong coffee", "A coffee you drink later"], 0),
        mc("Why does a stranger drink Marco's second coffee?", ["Marco paid it as a sospeso, for someone without money", "The barista made a mistake", "He's Marco's uncle"], 0),
        tf("Nella smorfia, ogni numero ha un significato.", "In the smorfia, every number has a meaning.", true),
        mc("What do you think: is the aunt good at tombola or lucky?", ["The text doesn't say, but she wins every year", "She never plays", "She loses every year"], 0),
      ],
    },
    {
      id: "marco-4-il-ritorno",
      level: "A1",
      title: "Il ritorno",
      titleTranslation: "The way back",
      grammar: ["passato-essere", "passato-prossimo", "places-transport"],
      paragraphs: [
        [
          s("Lunedì sera Marco è tornato a Bologna. Martedì mattina il bar è di nuovo aperto.", "On Monday evening Marco came back to Bologna. On Tuesday morning the bar is open again."),
          s("Sul bancone c'è un vassoio di sfogliatelle, i dolci di Napoli. \"Per tutti, offre la mamma!\"", "On the counter there's a tray of sfogliatelle, the pastries from Naples. \"For everyone, Mum's treat!\""),
          s("\"Allora, com'è andata?\" chiede Rita.", "\"So, how did it go?\" Rita asks."),
        ],
        [
          s("\"Benissimo! Sono partito venerdì e sono arrivato a mezzogiorno. In treno ho conosciuto una signora: mi ha dato da mangiare per tre ore!\"", "\"Really well! I left on Friday and arrived at midday. On the train I met a lady: she fed me for three hours!\""),
          s("\"Sabato siamo andati al mare, a Mergellina, e domenica siamo stati tutti a casa della mamma.\"", "\"On Saturday we went to the seaside, to Mergellina, and on Sunday we were all at Mum's.\""),
          s("\"E la tombola?\" chiede Emma. \"Ha vinto la zia, naturalmente.\"", "\"And the tombola?\" Emma asks. \"My aunt won, of course.\""),
        ],
        [
          s("Poi Marco scrive qualcosa su un foglio e lo attacca alla cassa: \"Qui si può lasciare un caffè sospeso.\"", "Then Marco writes something on a sheet and sticks it to the till: \"You can leave a caffè sospeso here.\""),
          s("Amadou è il primo. Paga due caffè e ne beve uno.", "Amadou is the first. He pays for two coffees and drinks one."),
          s("\"Benvenuto a Napoli, via del Pratello!\" ride Marco.", "\"Welcome to Naples, Via del Pratello!\" Marco laughs."),
        ],
      ],
      tasks: [
        mc("What are sfogliatelle?", ["Pastries from Naples", "A kind of coffee", "Neapolitan biscuits for dogs"], 0),
        tf("Domenica Marco è andato al mare.", "On Sunday Marco went to the seaside.", false),
        mc("Why does Marco put a sign on the till?", ["He brings the caffè sospeso to his bar in Bologna", "The bar is closing", "He wants a holiday"], 0),
        order("Put Marco's trip in order.", "He buys the ticket", "He eats on the train", "Caffè sospeso and family lunch", "The seaside on Saturday", "Back at the bar"),
      ],
    },
  ],
  sequence: [
    "marco-1-il-biglietto", "in-partenza", "places-transport",
    "marco-2-in-treno", "passato-essere",
    "marco-3-napoli", "una-telefonata-da-napoli",
    "write", "marco-4-il-ritorno", "words", "check",
  ],
  listening: [
    {
      id: "in-partenza",
      level: "A1",
      title: "In partenza",
      titleTranslation: "Departing",
      kind: "announcement",
      situation: "Announcements at Bologna Centrale station.",
      grammar: ["time", "numbers-big", "places-transport"],
      lines: [
        line("Spreker", "Il treno Frecciarossa per Napoli Centrale delle otto e quindici è in partenza dal binario sei.", "The Frecciarossa to Napoli Centrale at 8:15 is leaving from platform six."),
        line("Spreker", "Il treno regionale per Rimini delle otto e venti è in ritardo di dieci minuti.", "The regional train to Rimini at 8:20 is ten minutes late."),
        line("Spreker", "Il treno per Firenze delle otto e trenta parte dal binario tre, invece del binario cinque.", "The train to Florence at 8:30 leaves from platform three, instead of platform five."),
        line("Spreker", "Si ricorda ai signori viaggiatori di convalidare il biglietto prima di salire sul treno.", "Passengers are reminded to validate their ticket before getting on the train."),
      ],
      gist: { prompt: "Where are you?", options: ["At a train station", "At an airport", "On a bus"], answer: 0 },
      details: [
        { prompt: "Which train is late?", options: ["The regional train to Rimini", "The Frecciarossa to Naples", "The train to Florence"], answer: 0 },
        { prompt: "Which platform does the Florence train leave from?", options: ["Three", "Five", "Six"], answer: 0 },
      ],
      tasks: [
        tf("Il treno per Napoli parte dal binario sei.", "The train to Naples leaves from platform six.", true),
        heard(1, ["ritardo", "ritorno", "regalo"], 0),
        gaps(0, "binario", "sei"),
      ],
      dictation: [0, 1],
      words: {
        partenza: { meaning: "departure (in partenza = leaving)" },
        binario: { meaning: "platform; track" },
        regionale: { meaning: "regional (train)" },
        rimini: { meaning: "Rimini (a seaside town)" },
        ritardo: { meaning: "delay (in ritardo = late)" },
        firenze: { meaning: "Florence" },
        parte: { meaning: "leaves, departs", base: "partire" },
        ricorda: { meaning: "reminds (si ricorda = passengers are reminded)", base: "ricordare" },
        viaggiatori: { meaning: "travellers, passengers", base: "viaggiatore" },
        convalidare: { meaning: "to validate (a ticket)" },
        salire: { meaning: "to get on; to go up" },
        frecciarossa: { meaning: "Frecciarossa ('red arrow', Italy's high-speed train)" },
      },
    },
    {
      id: "una-telefonata-da-napoli",
      level: "A1",
      title: "Una telefonata da Napoli",
      titleTranslation: "A call from Naples",
      kind: "dialogue",
      situation: "Saturday. Emma calls Marco to see how it's going.",
      grammar: ["passato-essere", "passato-prossimo"],
      lines: [
        line("Emma", "Ciao Marco! Sei arrivato bene?", "Hi Marco! Did you get there OK?"),
        line("Marco", "Sì, benissimo! Sono arrivato ieri a mezzogiorno.", "Yes, really well! I arrived yesterday at midday."),
        line("Emma", "E oggi cosa avete fatto?", "And what did you do today?"),
        line("Marco", "Siamo andati al mare con i nipoti. Abbiamo mangiato la pizza fritta!", "We went to the seaside with the kids. We ate fried pizza!"),
        line("Emma", "Pizza fritta? Esiste?", "Fried pizza? That exists?"),
        line("Marco", "A Napoli esiste tutto! Ti porto le sfogliatelle, va bene?", "In Naples everything exists! I'll bring you sfogliatelle, OK?"),
      ],
      gist: { prompt: "What's the call about?", options: ["Marco's weekend in Naples", "A problem with the train", "The bar"], answer: 0 },
      details: [
        { prompt: "Where did they go today?", options: ["To the seaside", "To the cinema", "To the station"], answer: 0 },
        { prompt: "What did they eat?", options: ["Fried pizza", "Ragù", "Sfogliatelle"], answer: 0 },
      ],
      tasks: [
        tf("Marco è arrivato a Napoli oggi.", "Marco arrived in Naples today.", false),
        heard(3, ["fritta", "fresca", "frutta"], 0),
        gaps(1, "arrivato", "ieri"),
      ],
      dictation: [1, 3],
      words: {
        ieri: { meaning: "yesterday" },
        fatto: { meaning: "done, made", base: "fare" },
        andati: { meaning: "gone (siamo andati = we went)", base: "andare" },
        fritta: { meaning: "fried", base: "fritto" },
        esiste: { meaning: "exists", base: "esistere" },
        sfogliatelle: { meaning: "sfogliatelle (shell-shaped pastries from Naples)", base: "sfogliatella" },
        arrivato: { meaning: "arrived", base: "arrivare" },
      },
    },
  ],
  writing: [
    a1({
      id: "w-un-viaggio",
      title: "Un viaggio",
      titleTranslation: "A trip",
      form: "story",
      situation: "Tell a friend about a short trip you took.",
      points: [
        pf("Say where you went", "Sabato sono andato / andata a … .", "sono", "andato", "andata"),
        pf("Say how you travelled", "Sono partito / partita in … .", "treno", "autobus", "aereo", "macchina"),
        pf("Say when you arrived", "Sono arrivato / arrivata alle … .", "arrivato", "arrivata"),
        pf("Say what you did", "Ho visitato / ho mangiato … .", "ho", "visitato", "mangiato"),
        pf("Say one thing you saw", "Ho visto … .", "visto"),
        pf("Say when you came back", "Sono tornato / tornata … .", "tornato", "tornata"),
      ],
      model:
        "Sabato sono andata a Firenze. Sono partita in treno alle otto e sono arrivata alle nove meno dieci. Ho visitato il centro e ho mangiato in una trattoria vicino al Duomo. Ho visto il Ponte Vecchio: bellissimo! Sono tornata a Bologna la sera, molto stanca ma contenta.",
    }),
    a1({
      id: "w-un-biglietto-per-il-treno",
      title: "Alla biglietteria",
      titleTranslation: "At the ticket office",
      form: "story",
      situation: "Write a short scene: you buy a train ticket at the station.",
      points: [
        pf("Greet and ask for a ticket", "Buongiorno, un biglietto per … .", "biglietto", "per"),
        pf("Say one way or return", "Solo andata / andata e ritorno.", "andata", "ritorno"),
        pf("Ask when the train leaves", "A che ora parte … ?", "parte", "che ora"),
        pf("Ask about the platform", "Da quale binario … ?", "binario"),
        pf("Ask the price", "Quanto costa?", "quanto", "costa"),
        pf("Thank and say goodbye", "Grazie, arrivederci!", "grazie"),
      ],
      model:
        "\"Buongiorno, un biglietto per Verona, per favore.\" \"Solo andata?\" \"No, andata e ritorno.\" \"Ecco.\" \"A che ora parte il prossimo treno?\" \"Parte alle dieci e venti.\" \"Da quale binario?\" \"Parte dal binario quattro.\" \"Quanto costa?\" \"Trentadue euro.\" \"Posso pagare con la carta?\" \"Certo.\" \"Grazie, arrivederci!\"",
    }),
  ],
  checkpoint: {
    title: "Una cartolina da Napoli",
    titleTranslation: "A postcard from Naples",
    text: [
      [
        s("Una settimana dopo, al bar arriva una cartolina con il Vesuvio.", "A week later a postcard with Vesuvius arrives at the bar."),
        s("\"Caro Marco, grazie per la visita! Il viaggio è stato bello? Qui tutti parlano ancora di te. La zia dice che l'anno prossimo vince lei, ma tu devi venire a Natale. Ti aspettiamo! Un bacio grande, mamma. P.S. Mangia!\"", "\"Dear Marco, thank you for coming! Was the journey nice? Here everyone is still talking about you. Auntie says she'll win next year, but you have to come at Christmas. We're waiting for you! A big kiss, Mum. P.S. Eat!\""),
      ],
    ],
    textTasks: [
      tf("La mamma vuole vedere Marco a Natale.", "His mum wants to see Marco at Christmas.", true),
      mc("What does the aunt say?", ["She'll win the tombola again next year", "She wants to come to Bologna", "She's ill"], 0),
      mc("Why does the postcard end with \"Mangia!\"?", ["His mother always thinks he's too thin", "She sends him food", "It's a Naples greeting"], 0),
    ],
    listening: {
      situation: "Marco calls his mum back.",
      lines: [
        line("Marco", "Ciao mamma, ho ricevuto la cartolina!", "Hi Mum, I got the postcard!"),
        line("Marco", "Sì, a Natale vengo. Parto il ventitré dicembre, in treno.", "Yes, I'm coming at Christmas. I'm leaving on the twenty-third of December, by train."),
        line("Marco", "E questa volta vengo con un'amica: Emma, la ragazza irlandese.", "And this time I'm coming with a friend: Emma, the Irish girl."),
        line("Marco", "No, mamma, è solo un'amica! Sì, mangio. Ciao!", "No, Mum, she's just a friend! Yes, I'm eating. Bye!"),
      ],
      questions: [
        { prompt: "When is Marco leaving for Christmas?", options: ["On 23 December", "On 25 December", "On 13 December"], answer: 0 },
        { prompt: "Who is coming with him?", options: ["Emma", "Rita", "Nobody"], answer: 0 },
      ],
    },
    write: {
      situation: "You're Emma. Write Marco's mum a short message before Christmas.",
      points: [
        { prompt: "Greet her", frame: "Gentile signora, … !" },
        { prompt: "Say when you arrive", frame: "Arriviamo il … ." },
        { prompt: "Say something kind", frame: "… ." },
      ],
      model: "Gentile signora, grazie per l'invito! Arriviamo il ventitré dicembre con il treno di mezzogiorno. Marco mangia tanto, è vero!",
      modelTranslation: "Dear Signora, thank you for the invitation! We arrive on 23 December on the midday train. Marco eats a lot, it's true!",
    },
    words: {
      cartolina: { meaning: "postcard" },
      vesuvio: { meaning: "Vesuvius (the volcano above Naples)" },
      visita: { meaning: "visit" },
      viaggio: { meaning: "journey, trip" },
      stato: { meaning: "been (è stato = was)", base: "essere" },
      prossimo: { meaning: "next" },
      natale: { meaning: "Christmas" },
      aspettiamo: { meaning: "we're waiting for", base: "aspettare" },
      bacio: { meaning: "kiss" },
      ricevuto: { meaning: "received", base: "ricevere" },
      parto: { meaning: "I leave", base: "partire" },
      ventitré: { meaning: "twenty-three" },
      dicembre: { meaning: "December" },
      irlandese: { meaning: "Irish" },
      un: { meaning: "a, an" },
      ps: { meaning: "P.S." },
      p: { meaning: "P (in P.S.)" },
      s: { meaning: "S (in P.S.)" },
    },
  },
};
