import type { Unit } from "@/core/content";
import { a1, gaps, heard, line, mc, order, pf, s, tf } from "./helpers";

/**
 * A1 unit 5: a day. Present tense of -ere and -ire verbs, reflexive verbs,
 * telling the time. Via del Pratello as one street with a different lead per
 * unit (Matteo, 18 Nov 2026): here Amadou Diop, the tailor from Senegal.
 */
export const giornata: Unit = {
  id: "it-a1-giornata",
  level: "A1",
  title: "La giornata",
  titleTranslation: "The day",
  look: { motif: "clock", glaze: "ochre" },
  canDo: [
    "Say what time it is and when things happen",
    "Describe your day: when you get up, work, eat and go to bed",
    "Use -ere and -ire verbs: prendo, leggo, apro, finisco",
    "Use reflexive verbs: mi sveglio, mi alzo, mi vesto",
  ],
  story: {
    id: "la-giornata-di-amadou",
    title: "La giornata di Amadou",
    titleTranslation: "Amadou's day",
    intro:
      "Amadou Diop is a tailor from Senegal with a little shop on Via del Pratello, across from Bar Margherita. He gets up at six, every day, even when he doesn't have to. One week, four episodes.",
  },
  texts: [
    {
      id: "amadou-1-la-sveglia",
      level: "A1",
      title: "La sveglia alle sei",
      titleTranslation: "The alarm at six",
      grammar: ["reflexive", "present-ere-ire", "time"],
      paragraphs: [
        [
          s("Amadou Diop ha quarantacinque anni e fa il sarto.", "Amadou Diop is forty-five and he's a tailor."),
          s("Viene dal Senegal, ma vive a Bologna da vent'anni.", "He's from Senegal, but he's lived in Bologna for twenty years."),
          s("La sua sartoria è in via del Pratello, di fronte al Bar Margherita.", "His tailor's shop is on Via del Pratello, across from Bar Margherita."),
        ],
        [
          s("Amadou si sveglia ogni mattina alle sei.", "Amadou wakes up every morning at six."),
          s("Si alza subito, si lava e si veste: camicia bianca e pantaloni blu.", "He gets up straight away, washes and gets dressed: a white shirt and blue trousers."),
          s("Alle sei e mezza fa colazione: un caffè e pane con il burro.", "At half past six he has breakfast: a coffee and bread and butter."),
          s("Poi legge le notizie sul telefono e scrive un messaggio a sua figlia Awa.", "Then he reads the news on his phone and writes a message to his daughter Awa."),
          s("Awa ha ventidue anni e studia medicina a Dakar.", "Awa is twenty-two and studies medicine in Dakar."),
        ],
        [
          s("Alle sette e un quarto Amadou prende l'autobus.", "At quarter past seven Amadou takes the bus."),
          s("Alle otto apre la sartoria e accende la radio.", "At eight he opens the shop and turns on the radio."),
          s("Lavora tutto il giorno: accorcia pantaloni, ripara giacche, cuce vestiti per le feste.", "He works all day: he shortens trousers, mends jackets, sews clothes for parties."),
          s("A mezzogiorno chiude per un'ora e mangia un panino al bar di Marco.", "At noon he closes for an hour and eats a sandwich at Marco's bar."),
          s("La sera finisce alle sette e torna a casa a piedi. Va a letto presto, alle dieci e mezza.", "In the evening he finishes at seven and walks home. He goes to bed early, at half past ten."),
        ],
      ],
      tasks: [
        tf("Amadou apre la sartoria alle sette e un quarto.", "Amadou opens the shop at quarter past seven.", false),
        mc("Why is the shop closed between twelve and one?", ["Amadou is having lunch at Marco's bar", "Amadou is on the bus", "Amadou is writing to Awa"], 0),
        mc("How does Amadou get home in the evening?", ["On foot", "By bus", "By bike"], 0),
        order("Put Amadou's morning in order.", "He wakes up", "He gets dressed", "He has breakfast", "He takes the bus", "He opens the shop"),
      ],
    },
    {
      id: "amadou-2-i-jeans-di-emma",
      level: "A1",
      title: "I jeans di Emma",
      titleTranslation: "Emma's jeans",
      grammar: ["time", "questions", "present-ere-ire"],
      paragraphs: [
        [
          s("Martedì mattina Emma entra in sartoria con un paio di jeans.", "On Tuesday morning Emma comes into the shop with a pair of jeans."),
          s("\"Buongiorno! Questi jeans sono troppo lunghi. Può accorciarli?\"", "\"Good morning! These jeans are too long. Can you shorten them?\""),
          s("\"Certo. Il camerino è lì, a destra.\"", "\"Of course. The fitting room is there, on the right.\""),
          s("Amadou guarda e misura. \"Tre centimetri. Va bene?\" \"Perfetto!\"", "Amadou looks and measures. \"Three centimetres. All right?\" \"Perfect!\""),
        ],
        [
          s("\"Quando sono pronti?\" \"Sono pronti giovedì pomeriggio, dopo le quattro.\"", "\"When will they be ready?\" \"They'll be ready on Thursday afternoon, after four.\""),
          s("\"Giovedì ho lezione di italiano fino alle cinque e mezza. Posso venire alle sei?\"", "\"On Thursday I have Italian class until half past five. Can I come at six?\""),
          s("\"Alle sei va bene. Io chiudo alle sette.\"", "\"Six is fine. I close at seven.\""),
          s("\"E quanto costa?\" \"Dodici euro.\"", "\"And how much is it?\" \"Twelve euros.\""),
        ],
        [
          s("Sul muro ci sono molte foto: il mare, una grande famiglia, una ragazza con un camice bianco.", "On the wall there are lots of photos: the sea, a big family, a girl in a white coat."),
          s("\"Chi è?\" chiede Emma. \"È mia figlia Awa. Studia medicina a Dakar. Diventa dottoressa!\"", "\"Who's that?\" Emma asks. \"That's my daughter Awa. She studies medicine in Dakar. She's going to be a doctor!\""),
          s("Amadou sorride. È molto orgoglioso.", "Amadou smiles. He's very proud."),
          s("\"E lei? Lavora qui vicino?\" chiede Amadou. \"Sì, lavoro a casa, qui sopra. Sono grafica: comincio alle nove e finisco alle cinque.\"", "\"And you? Do you work near here?\" Amadou asks. \"Yes, I work from home, just upstairs. I'm a graphic designer: I start at nine and finish at five.\""),
        ],
      ],
      tasks: [
        mc("Why doesn't Emma come on Thursday at four?", ["She has Italian class until half past five", "The shop is closed", "The jeans aren't ready"], 0),
        tf("I jeans costano venti euro.", "The jeans cost twenty euros.", false),
        mc("Who is the girl in the white coat?", ["Amadou's daughter, a future doctor", "A nurse from the street", "Emma's sister"], 0),
        mc("What does \"Diventa dottoressa!\" tell you about Amadou?", ["He's proud of Awa", "He's worried about Awa", "He wants to be a doctor"], 0),
      ],
    },
    {
      id: "amadou-3-una-telefonata",
      level: "A1",
      title: "Una telefonata a Dakar",
      titleTranslation: "A call to Dakar",
      grammar: ["reflexive", "time", "present-ere-ire"],
      paragraphs: [
        [
          s("Il mercoledì sera Amadou chiama Awa in video.", "On Wednesday evenings Amadou video-calls Awa."),
          s("In Italia sono le nove, ma a Dakar sono le otto: c'è un'ora di differenza.", "In Italy it's nine, but in Dakar it's eight: there's an hour's difference."),
          s("\"Ciao papà! Come stai?\" \"Bene, tesoro. E tu? Studi tanto?\"", "\"Hi Dad! How are you?\" \"Fine, darling. And you? Are you studying hard?\""),
          s("\"Sì, tantissimo! La mattina ho lezione dalle otto all'una, e il pomeriggio studio in biblioteca.\"", "\"Yes, loads! In the morning I have class from eight to one, and in the afternoon I study in the library.\""),
        ],
        [
          s("\"E ti svegli presto?\" \"Mi sveglio alle sette... e mezza!\"", "\"And do you wake up early?\" \"I wake up at seven... thirty!\""),
          s("Amadou ride: \"Io mi alzo alle sei, lo sai!\"", "Amadou laughs: \"I get up at six, you know!\""),
          s("\"Lo so, papà. Tu non dormi mai!\"", "\"I know, Dad. You never sleep!\""),
          s("Poi Awa chiede: \"Papà, in agosto vengo a Bologna. Va bene?\"", "Then Awa asks: \"Dad, I'm coming to Bologna in August. Is that OK?\""),
          s("\"Certo! Tre settimane insieme!\"", "\"Of course! Three weeks together!\""),
        ],
        [
          s("Dopo la telefonata, Amadou scrive sul calendario, in grande: AGOSTO, AWA.", "After the call, Amadou writes on the calendar, in big letters: AUGUST, AWA."),
          s("Prende un libro, legge due pagine e chiude gli occhi.", "He picks up a book, reads two pages and closes his eyes."),
          s("Poi spegne la luce e dorme. Sono le dieci e mezza, come sempre.", "Then he turns off the light and sleeps. It's half past ten, as always."),
        ],
      ],
      tasks: [
        mc("When it's ten o'clock in Bologna, what time is it in Dakar?", ["Nine", "Eleven", "Ten"], 0),
        tf("Awa si sveglia alle sei, come suo padre.", "Awa wakes up at six, like her father.", false),
        mc("What does \"Tu non dormi mai!\" mean here?", ["She's teasing him for getting up so early", "Amadou has trouble sleeping", "Awa is worried about him"], 0),
        mc("Why does Amadou write AGOSTO, AWA on the calendar?", ["Awa is coming to visit in August", "It's Awa's birthday", "He's going to Dakar"], 0),
      ],
    },
    {
      id: "amadou-4-il-sabato",
      level: "A1",
      title: "Il sabato",
      titleTranslation: "Saturday",
      grammar: ["present-ere-ire", "reflexive", "time"],
      paragraphs: [
        [
          s("Il sabato la sartoria chiude all'una.", "On Saturdays the shop closes at one."),
          s("Il pomeriggio Amadou non lavora: va al mercato e compra pesce, riso e verdure.", "In the afternoon Amadou doesn't work: he goes to the market and buys fish, rice and vegetables."),
          s("La sera cucina il thieboudienne, il piatto più famoso del Senegal.", "In the evening he cooks thieboudienne, the most famous dish in Senegal."),
          s("Invita i vicini: Emma, Giulia e Karim. Anche Marco viene, ma tardi, perché chiude il bar alle otto e mezza.", "He invites the neighbours: Emma, Giulia and Karim. Marco comes too, but late, because he closes the bar at half past eight."),
        ],
        [
          s("Karim mangia tre piatti. \"Ma non sei a dieta?\" chiede Giulia. \"Il sabato no!\"", "Karim eats three plates. \"Aren't you on a diet?\" Giulia asks. \"Not on Saturdays!\""),
          s("Alle undici gli amici vanno a casa. Emma e Giulia sono stanche.", "At eleven the friends go home. Emma and Giulia are tired."),
          s("\"Domani dormo fino alle dieci!\" dice Amadou. \"Tu? Impossibile!\" risponde Marco.", "\"Tomorrow I'm sleeping until ten!\" says Amadou. \"You? Impossible!\" Marco answers."),
        ],
        [
          s("Domenica mattina, alle sei, Amadou apre gli occhi.", "On Sunday morning, at six, Amadou opens his eyes."),
          s("Non c'è la sveglia, non c'è il lavoro. Ma si sveglia lo stesso. Come sempre.", "There's no alarm, there's no work. But he wakes up anyway. As always."),
          s("Allora si alza, prepara il caffè e scrive ad Awa: \"Buongiorno, tesoro!\"", "So he gets up, makes coffee and writes to Awa: \"Good morning, darling!\""),
        ],
      ],
      tasks: [
        mc("Why does Marco arrive late?", ["He closes the bar at half past eight", "He forgets the time", "He's at the market"], 0),
        tf("Karim mangia poco perché è a dieta.", "Karim eats little because he's on a diet.", false),
        mc("Why does Marco say \"Impossibile!\"?", ["He knows Amadou always wakes up at six", "Amadou has to work on Sunday", "Marco wants to sleep at Amadou's"], 0),
        mc("Was Marco right?", ["Yes: Amadou wakes at six anyway", "No: Amadou sleeps until ten", "We don't know"], 0),
      ],
    },
  ],
  sequence: [
    "amadou-1-la-sveglia", "alla-fermata", "reflexive",
    "amadou-2-i-jeans-di-emma", "time",
    "amadou-3-una-telefonata", "che-ore-sono", "present-ere-ire",
    "write", "amadou-4-il-sabato", "words", "check",
  ],
  listening: [
    {
      id: "alla-fermata",
      level: "A1",
      title: "Alla fermata",
      titleTranslation: "At the bus stop",
      kind: "dialogue",
      situation: "Seven in the morning. Amadou waits for the bus and meets Signora Lucia, who lives above the bar.",
      grammar: ["time", "reflexive", "questions"],
      lines: [
        line("Lucia", "Buongiorno, Amadou! Sempre così presto?", "Good morning, Amadou! Always this early?"),
        line("Amadou", "Buongiorno, signora Lucia. Sì, mi alzo sempre alle sei.", "Good morning, Signora Lucia. Yes, I always get up at six."),
        line("Lucia", "Io invece mi sveglio alle sei, ma resto a letto fino alle otto!", "I wake up at six too, but I stay in bed until eight!"),
        line("Amadou", "E oggi? Dove va così presto?", "And today? Where are you going so early?"),
        line("Lucia", "Dal medico. L'appuntamento è alle sette e mezza.", "To the doctor. The appointment is at half past seven."),
        line("Amadou", "Allora prendiamo lo stesso autobus. Eccolo!", "Then we're taking the same bus. Here it is!"),
      ],
      gist: { prompt: "Where are they?", options: ["At the bus stop", "In the tailor's shop", "At the bar"], answer: 0 },
      details: [
        { prompt: "Why is Lucia up early today?", options: ["She has a doctor's appointment", "She works early", "She always gets up at six"], answer: 0 },
        { prompt: "What does Lucia usually do at six?", options: ["Wakes up but stays in bed", "Gets up and has breakfast", "Goes to the bar"], answer: 0 },
      ],
      tasks: [
        tf("Lucia e Amadou prendono lo stesso autobus.", "Lucia and Amadou take the same bus.", true),
        heard(4, ["medico", "mercato", "mare"], 0),
        gaps(1, "alzo", "sei"),
      ],
      dictation: [1, 4],
      words: {
        resto: { meaning: "I stay", base: "restare" },
        invece: { meaning: "instead; on the other hand" },
        eccolo: { meaning: "here it is (ecco + lo)" },
        appuntamento: { meaning: "appointment" },
      },
    },
    {
      id: "che-ore-sono",
      level: "A1",
      title: "Che ore sono?",
      titleTranslation: "What time is it?",
      kind: "dialogue",
      situation: "Friday evening. Emma and Karim want to go to the cinema.",
      grammar: ["time", "questions"],
      lines: [
        line("Emma", "Karim, che ore sono?", "Karim, what time is it?"),
        line("Karim", "Sono le otto meno un quarto.", "It's quarter to eight."),
        line("Emma", "Le otto meno un quarto? Il film comincia alle otto!", "Quarter to eight? The film starts at eight!"),
        line("Karim", "Tranquilla, il cinema è a dieci minuti.", "Relax, the cinema is ten minutes away."),
        line("Emma", "Dieci minuti a piedi o in bici?", "Ten minutes on foot or by bike?"),
        line("Karim", "Ehm... in bici. Andiamo, presto!", "Erm... by bike. Let's go, quick!"),
      ],
      gist: { prompt: "What's the problem?", options: ["They might be late for the film", "The cinema is closed", "Karim has no bike"], answer: 0 },
      details: [
        { prompt: "What time is it?", options: ["7:45", "8:15", "8:45"], answer: 0 },
        { prompt: "How far is the cinema?", options: ["Ten minutes by bike", "Ten minutes on foot", "Half an hour"], answer: 0 },
      ],
      tasks: [
        tf("Il film comincia alle otto e mezza.", "The film starts at half past eight.", false),
        heard(2, ["comincia", "cucina", "camicia"], 0),
        gaps(1, "otto", "quarto"),
      ],
      dictation: [0, 1],
      words: {
        meno: { meaning: "minus, less (le otto meno un quarto = quarter to eight)" },
        tranquilla: { meaning: "relax, don't worry (to a woman)", base: "tranquillo" },
        cinema: { meaning: "cinema" },
        bici: { meaning: "bike (short for bicicletta)" },
        ehm: { meaning: "erm" },
      },
    },
  ],
  writing: [
    a1({
      id: "w-la-mia-giornata",
      title: "La mia giornata",
      titleTranslation: "My day",
      form: "description",
      situation: "A new friend asks what a normal day is like for you. Tell them, from morning to night.",
      points: [
        pf("Say when you wake up and get up", "Mi sveglio alle … e mi alzo alle … .", "sveglio", "alzo"),
        pf("Say what you have for breakfast", "A colazione prendo … .", "colazione", "prendo", "bevo", "mangio"),
        pf("Say when you start work or school", "Alle … vado al lavoro / a scuola.", "lavoro", "scuola", "università", "comincio"),
        pf("Say what you do at lunch", "A pranzo … .", "pranzo", "mangio"),
        pf("Say what you do in the evening", "La sera … .", "sera", "leggo", "scrivo", "cucino"),
        pf("Say when you go to bed", "Vado a letto alle … .", "letto", "dormo"),
      ],
      model:
        "Mi sveglio alle sette, ma mi alzo alle sette e un quarto. A colazione prendo un tè e pane con il burro. Alle otto e mezza vado al lavoro in autobus. A pranzo mangio un panino al bar con una collega. Finisco alle cinque e mezza. La sera cucino, leggo un po' e scrivo a mia madre. Vado a letto alle undici.",
    }),
    a1({
      id: "w-in-sartoria",
      title: "In sartoria",
      titleTranslation: "At the tailor's",
      form: "message",
      situation: "You have a jacket that needs mending. Write a message to Amadou's shop.",
      points: [
        pf("Greet him politely", "Buongiorno, signor … .", "buongiorno", "signor"),
        pf("Say what the problem is", "Ho una giacca … .", "giacca", "pantaloni", "lunghi", "lunga"),
        pf("Ask if he can fix it", "Può … ?", "può", "riparare", "accorciare"),
        pf("Ask when it will be ready", "Quando … ?", "quando", "pronta", "pronti"),
        pf("Say when you can come", "Posso venire … alle … .", "posso", "venire", "alle"),
        pf("Thank him and say goodbye", "Grazie, arrivederci!", "grazie", "arrivederci"),
      ],
      model:
        "Buongiorno, signor Diop. Ho una giacca blu, ma è troppo lunga. Può accorciare la giacca? Quando è pronta? Lavoro fino alle sei, ma posso venire martedì alle sei e un quarto, o sabato mattina. Quanto costa? Grazie, arrivederci! Ana",
    }),
  ],
  checkpoint: {
    title: "Il cartello sulla porta",
    titleTranslation: "The sign on the door",
    text: [
      [
        s("Giovedì sera Emma va in sartoria, ma sulla porta c'è un cartello.", "On Thursday evening Emma goes to the tailor's, but there's a sign on the door."),
        s("Sartoria Diop. Dal lunedì al venerdì: dalle otto a mezzogiorno e dall'una alle sette. Il sabato: dalle otto all'una. La domenica: chiuso. In agosto la sartoria è chiusa: arriva mia figlia!", "Diop Tailoring. Monday to Friday: from eight to twelve and from one to seven. Saturday: from eight to one. Sunday: closed. In August the shop is closed: my daughter is coming!"),
        s("Sono le sei e dieci. La porta è aperta, e Amadou è dentro, con i jeans pronti.", "It's ten past six. The door is open, and Amadou is inside, with the jeans ready."),
      ],
    ],
    textTasks: [
      tf("Il sabato pomeriggio la sartoria è aperta.", "On Saturday afternoon the shop is open.", false),
      mc("Why is the shop closed in August?", ["Awa is coming to visit", "Amadou goes to Dakar", "It's too hot"], 0),
      mc("Can Emma pick up her jeans now?", ["Yes: it's ten past six and the shop is open until seven", "No: the shop is closed", "No: the jeans aren't ready"], 0),
    ],
    listening: {
      situation: "Amadou leaves Ana, a new customer, a voice message.",
      lines: [
        line("Amadou", "Buongiorno, sono Amadou, della sartoria in via del Pratello.", "Good morning, it's Amadou, from the tailor's on Via del Pratello."),
        line("Amadou", "La sua giacca è pronta.", "Your jacket is ready."),
        line("Amadou", "Può venire domani dopo le quattro. Io chiudo alle sette.", "You can come tomorrow after four. I close at seven."),
        line("Amadou", "Costa quindici euro. Arrivederci!", "It costs fifteen euros. Goodbye!"),
      ],
      questions: [
        { prompt: "When can Ana collect the jacket?", options: ["Tomorrow between four and seven", "Today after four", "Tomorrow morning"], answer: 0 },
        { prompt: "How much is it?", options: ["Fifteen euros", "Twelve euros", "Fifty euros"], answer: 0 },
      ],
    },
    write: {
      situation: "Answer Amadou: thank him, say when you're coming, and ask him something.",
      points: [
        { prompt: "Thank him", frame: "Grazie, signor … !" },
        { prompt: "Say when you're coming", frame: "Vengo domani alle … ." },
        { prompt: "Ask him a question", frame: "… ?" },
      ],
      model: "Grazie, signor Diop! Vengo domani alle cinque e mezza. Posso pagare con la carta?",
      modelTranslation: "Thank you, Mr Diop! I'll come tomorrow at half past five. Can I pay by card?",
    },
    words: {
      cartello: { meaning: "sign, notice" },
      aperta: { meaning: "open", base: "aperto" },
      chiusa: { meaning: "closed", base: "chiuso" },
      dentro: { meaning: "inside" },
      arriva: { meaning: "arrives, is coming", base: "arrivare" },
      quindici: { meaning: "fifteen" },
    },
  },
};
