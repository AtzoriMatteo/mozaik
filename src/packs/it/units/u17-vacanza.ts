import type { Unit } from "@/core/content";
import { a2, gaps, heard, line, mc, order, pf, s, tf } from "./helpers";

/**
 * A2 unit 5: a summer visit. Commands with pronouns (dammi, siediti, non
 * preoccuparti), commands with Lei (prenda, giri, mi dica), combined pronouns
 * (me lo, te lo, glielo). Lead: Emma, whose sister Siobhan visits from London;
 * a weekend in Florence. Culture: hotel check-in, museum rules, gift-wrapping.
 */
export const vacanza: Unit = {
  id: "it-a2-vacanza",
  level: "A2",
  title: "Arriva Siobhan",
  titleTranslation: "Siobhan's coming",
  look: { motif: "sun", glaze: "ochre" },
  canDo: [
    "Tell a friend what to do, with pronouns: dammi, siediti, non preoccuparti",
    "Understand and use polite commands with Lei: prenda, giri, mi dica",
    "Say who gets what without repeating: te lo do, glielo compriamo",
    "Check in at a hotel and ask for directions",
  ],
  story: {
    id: "siobhan-in-italia",
    title: "Siobhan in Italia",
    titleTranslation: "Siobhan in Italy",
    intro:
      "July. Emma's sister Siobhan comes from London for a week: her first time in Italy. She doesn't speak Italian, so Emma does all the talking: in Bologna, on the train, and in a little hotel in Florence.",
  },
  texts: [
    {
      id: "emma-8-arriva-siobhan",
      level: "A2",
      title: "Arriva Siobhan",
      titleTranslation: "Siobhan arrives",
      grammar: ["imperativo-pronomi", "imperative"],
      paragraphs: [
        [
          s("Sabato mattina Emma aspetta sua sorella alla stazione. Il treno da Milano arriva con venti minuti di ritardo.", "On Saturday morning Emma waits for her sister at the station. The train from Milan arrives twenty minutes late."),
          s("Siobhan scende con una valigia enorme. \"Ciao! Dammi la valigia\", dice Emma. \"No, aspetta, è pesantissima. Prendila tu dall'altra parte.\"", "Siobhan gets off with a huge suitcase. \"Hi! Give me the suitcase,\" says Emma. \"No, wait, it's really heavy. You take it from the other side.\""),
        ],
        [
          s("A casa Giulia e Karim hanno preparato il pranzo. \"Siediti, Siobhan! Mangia, mangia!\" dice Giulia in inglese.", "At home Giulia and Karim have made lunch. \"Sit down, Siobhan! Eat, eat!\" says Giulia in English."),
          s("Siobhan chiede a Emma, in inglese, come si dice thank you. \"Grazie\", risponde Emma. \"Dillo con un sorriso e va benissimo.\"", "Siobhan asks Emma, in English, how to say thank you. \"Grazie,\" Emma answers. \"Say it with a smile and it's perfect.\""),
          s("Dopo pranzo Karim prende le chiavi. \"Andiamo in centro. Ma mettiti le scarpe comode: a Bologna si cammina tanto!\"", "After lunch Karim takes the keys. \"Let's go into the centre. But put on comfortable shoes: in Bologna you walk a lot!\""),
        ],
        [
          s("Sotto i portici Siobhan fa mille foto. \"Emma, fammi una foto con tua sorella davanti alle Due Torri!\" dice Karim.", "Under the porticoes Siobhan takes a thousand photos. \"Emma, take a photo of me with your sister in front of the Two Towers!\" says Karim."),
          s("La sera, al Bar Margherita, Rita le prende le mani. \"Che bella ragazza! Emma, dille che è la benvenuta.\"", "In the evening, at Bar Margherita, Rita takes her hands. \"What a lovely girl! Emma, tell her she's very welcome.\""),
          s("\"Non preoccuparti\", ride Emma. \"L'ha capito benissimo.\"", "\"Don't worry,\" Emma laughs. \"She's understood perfectly.\""),
        ],
      ],
      tasks: [
        mc("Why does Emma tell Siobhan to take the other side?", ["The suitcase is very heavy", "Emma's hands are full", "The train is leaving"], 0),
        tf("Il treno arriva in orario.", "The train arrives on time.", false),
        mc("What does Karim tell Siobhan to put on?", ["Comfortable shoes", "A jacket", "Sunglasses"], 0),
        tf("Siobhan parla bene l'italiano.", "Siobhan speaks Italian well.", false),
      ],
    },
    {
      id: "emma-9-a-firenze",
      level: "A2",
      title: "Un fine settimana a Firenze",
      titleTranslation: "A weekend in Florence",
      grammar: ["imperativo-lei", "prepositions-articulated"],
      paragraphs: [
        [
          s("Venerdì le due sorelle prendono il treno per Firenze. In albergo la signora alla reception è molto gentile.", "On Friday the two sisters take the train to Florence. At the hotel the woman at reception is very kind."),
          s("\"Buonasera. Mi dia un documento, per favore. Ecco le chiavi: prenda l'ascensore e salga al terzo piano.\"", "\"Good evening. Give me an ID, please. Here are the keys: take the lift and go up to the third floor.\""),
          s("\"Scusi, per andare agli Uffizi?\" chiede Emma. \"Esca dall'albergo, vada dritto fino al fiume e poi giri a sinistra. Sono dieci minuti a piedi.\"", "\"Excuse me, how do we get to the Uffizi?\" Emma asks. \"Leave the hotel, go straight on to the river and then turn left. It's ten minutes on foot.\""),
        ],
        [
          s("Agli Uffizi c'è una lunga fila. Un custode spiega le regole: \"Non tocchi i quadri, non mangi nelle sale e spenga il telefono, per favore.\"", "At the Uffizi there's a long queue. A guard explains the rules: \"Don't touch the paintings, don't eat in the rooms, and switch off your phone, please.\""),
          s("Siobhan resta mezz'ora davanti alla Venere di Botticelli. Dice che è più bella che nei libri.", "Siobhan stays half an hour in front of Botticelli's Venus. She says it's more beautiful than in the books."),
        ],
        [
          s("La sera mangiano in una trattoria vicino al fiume. Il cameriere consiglia: \"Provi la bistecca alla fiorentina. Ma la prenda al sangue, come si fa qui!\"", "In the evening they eat in a trattoria near the river. The waiter recommends: \"Try the Florentine steak. But have it rare, as people do here!\""),
          s("Siobhan non capisce niente, ma fa sì con la testa. \"Le piace l\'idea\", dice Emma al cameriere. \"Ce la porti al sangue, allora!\"", "Siobhan doesn't understand a word, but she nods. \"She likes the idea,\" Emma tells the waiter. \"Bring it to us rare, then!\""),
        ],
      ],
      tasks: [
        order("Put their day in order.", "They check in at the hotel", "They ask the way to the Uffizi", "They queue at the museum", "They eat steak in a trattoria"),
        mc("How do they get to the Uffizi?", ["Straight on to the river, then left", "By bus", "Right, then straight on"], 0),
        tf("Agli Uffizi si può mangiare nelle sale.", "You can eat in the rooms at the Uffizi.", false),
        mc("How should the steak be cooked, says the waiter?", ["Rare", "Well done", "Grilled with cheese"], 0),
      ],
    },
    {
      id: "emma-10-il-regalo",
      level: "A2",
      title: "Il regalo per la mamma",
      titleTranslation: "The present for Mum",
      grammar: ["pronomi-combinati", "pronomi-indiretti"],
      paragraphs: [
        [
          s("L'ultimo giorno le sorelle cercano un regalo per la mamma. In una piccola bottega di pelle vedono una borsa marrone, semplice e bellissima.", "On the last day the sisters look for a present for their mum. In a little leather workshop they see a brown bag, simple and beautiful."),
          s("\"Gliela compriamo?\" chiede Emma. Siobhan dice di sì: la pagano a metà.", "\"Shall we buy it for her?\" Emma asks. Siobhan says yes: they'll pay half each."),
        ],
        [
          s("L'artigiano, un signore anziano con gli occhiali, sorride. \"È per un regalo? Ve la incarto, allora.\"", "The craftsman, an elderly man with glasses, smiles. \"Is it a present? Then I'll wrap it for you.\""),
          s("Mentre la incarta, racconta: \"Questa borsa l'ho fatta io, a mano. Mio padre me l'ha insegnato quando avevo dodici anni.\"", "While he wraps it, he tells them: \"I made this bag myself, by hand. My father taught me when I was twelve.\""),
          s("\"Può scrivere un biglietto?\" chiede Emma. \"Certo, glielo scrivo io. Come si chiama la mamma?\" \"Mary.\"", "\"Can you write a card?\" Emma asks. \"Of course, I'll write it for you. What's your mum called?\" \"Mary.\""),
        ],
        [
          s("Alla stazione Siobhan abbraccia la sorella e le dice, in inglese, che tornerà a Natale. \"Me lo prometti?\" chiede Emma. Siobhan ride: \"Te lo prometto!\" Sono le uniche parole italiane che ha imparato.", "At the station Siobhan hugs her sister and tells her, in English, that she'll come back at Christmas. \"Do you promise?\" Emma asks. Siobhan laughs: \"I promise!\" They're the only Italian words she's learnt."),
          s("La borsa la porta Siobhan a Dublino e gliela dà lei. Il biglietto, invece, glielo legge Emma al telefono.", "Siobhan takes the bag to Dublin and gives it to her herself. The card, though, Emma will read to her on the phone."),
        ],
      ],
      tasks: [
        mc("What do they buy for their mum?", ["A brown leather bag", "A scarf", "A painting"], 0),
        tf("L'artigiano ha comprato la borsa a Milano.", "The craftsman bought the bag in Milan.", false),
        mc("Who taught the craftsman?", ["His father", "His teacher", "Nobody"], 0),
        tf("Siobhan porterà la borsa a Dublino.", "Siobhan will take the bag to Dublin.", true),
      ],
    },
  ],
  sequence: [
    "emma-8-arriva-siobhan", "in-treno-per-firenze", "imperativo-pronomi",
    "emma-9-a-firenze", "imperativo-lei", "alla-reception",
    "emma-10-il-regalo", "pronomi-combinati",
    "write", "words", "check",
  ],
  listening: [
    {
      id: "in-treno-per-firenze",
      level: "A2",
      title: "In treno per Firenze",
      titleTranslation: "On the train to Florence",
      kind: "announcement",
      situation: "Announcements on the high-speed train from Bologna to Florence.",
      grammar: ["imperativo-lei", "imperative"],
      lines: [
        line("Treno", "Signori passeggeri, benvenuti a bordo del treno per Roma, con fermata a Firenze.", "Ladies and gentlemen, welcome aboard the train to Rome, stopping at Florence."),
        line("Treno", "Arriveremo a Firenze Santa Maria Novella alle dieci e trentacinque.", "We'll arrive at Florence Santa Maria Novella at ten thirty-five."),
        line("Treno", "Vi preghiamo di tenere i bagagli vicino a voi.", "Please keep your luggage close to you."),
        line("Treno", "Il bar si trova nella carrozza numero tre.", "The bar is in carriage number three."),
        line("Treno", "Prima di scendere, controllate di avere tutto con voi. Buon viaggio!", "Before getting off, check that you have everything with you. Have a good journey!"),
      ],
      gist: { prompt: "What is this?", options: ["Announcements on a train", "A hotel welcome", "A museum audio guide"], answer: 0 },
      details: [
        { prompt: "When does the train arrive in Florence?", options: ["At 10:35", "At 10:15", "At 11:35"], answer: 0 },
        { prompt: "Where is the bar?", options: ["In carriage three", "In carriage one", "There isn't one"], answer: 0 },
      ],
      tasks: [
        tf("Il treno finisce il viaggio a Firenze.", "The train ends its journey in Florence.", false),
        heard(3, ["tre", "sei", "sette"], 0),
        gaps(4, "scendere", "controllate"),
      ],
      dictation: [2, 4],
    },
    {
      id: "alla-reception",
      level: "A2",
      title: "Alla reception",
      titleTranslation: "At reception",
      kind: "dialogue",
      situation: "Emma checks in at a small hotel in Florence.",
      grammar: ["imperativo-lei", "pronomi-combinati"],
      lines: [
        line("Receptionist", "Buonasera, prego, si accomodi. Mi dica.", "Good evening, please, have a seat. How can I help?"),
        line("Emma", "Buonasera, abbiamo una prenotazione a nome Walsh. Una camera doppia, due notti.", "Good evening, we have a booking under the name Byrne. A double room, two nights."),
        line("Receptionist", "Sì, eccola. Mi dia un documento, per favore. Ecco le chiavi: ve le lascio qui.", "Yes, here it is. Give me an ID, please. Here are the keys: I'll leave them here for you."),
        line("Emma", "Grazie. A che ora è la colazione?", "Thank you. What time is breakfast?"),
        line("Receptionist", "Dalle sette alle dieci, al primo piano. Se avete bisogno di qualcosa, mi chiami pure.", "From seven to ten, on the first floor. If you need anything, just call me."),
        line("Emma", "Perfetto. E il wifi? Ci può dare la password?", "Perfect. And the wifi? Could you give us the password?"),
        line("Receptionist", "Certo, ve la scrivo sul biglietto.", "Of course, I'll write it on the card for you."),
      ],
      gist: { prompt: "What's happening?", options: ["Emma checks in at a hotel", "Emma books a table", "Emma complains about the room"], answer: 0 },
      details: [
        { prompt: "How long are they staying?", options: ["Two nights", "One night", "A week"], answer: 0 },
        { prompt: "When is breakfast?", options: ["From seven to ten", "From eight to eleven", "At nine only"], answer: 0 },
      ],
      tasks: [
        tf("La colazione è al primo piano.", "Breakfast is on the first floor.", true),
        heard(1, ["doppia", "singola", "tripla"], 0),
        gaps(6, "scrivo", "biglietto"),
      ],
      dictation: [3, 5],
    },
  ],
  writing: [
    a2({
      id: "w-istruzioni",
      title: "Le istruzioni per un amico",
      titleTranslation: "Instructions for a friend",
      form: "message",
      situation: "A friend is staying in your flat while you're away. Tell them what to do.",
      points: [
        pf("Tell them where the keys are", "Le chiavi? Prendile … .", "prendile"),
        pf("Tell them to water the plants", "Dai l'acqua alle piante … .", "piante"),
        pf("Tell them what not to do", "Non … .", "non"),
        pf("Tell them to make themselves at home", "Fai come a casa tua!", "casa"),
      ],
      model:
        "Ciao Marta! Le chiavi? Prendile dalla signora del primo piano. Dai l'acqua alle piante ogni due giorni. Non aprire la finestra della cucina: non si chiude bene. Il caffè è nell'armadio: prendilo pure. Fai come a casa tua!",
    }),
    a2({
      id: "w-una-cartolina-da-firenze",
      title: "Una cartolina",
      titleTranslation: "A postcard",
      form: "message",
      situation: "Write a postcard from a weekend away.",
      points: [
        pf("Say where you are", "Saluti da … !", "saluti"),
        pf("Say what you saw", "Ieri abbiamo visto … .", "abbiamo"),
        pf("Say what you ate", "Abbiamo mangiato … .", "mangiato"),
        pf("Say what you bought and for whom", "Ti ho comprato … : te lo porto … .", "te lo"),
      ],
      model:
        "Saluti da Firenze! Ieri abbiamo visto gli Uffizi: la Venere di Botticelli è bellissima. Abbiamo mangiato la bistecca alla fiorentina. Ti ho comprato un piccolo regalo: te lo porto sabato!",
    }),
  ],
  checkpoint: {
    title: "La telefonata alla mamma",
    titleTranslation: "The call to Mum",
    text: [
      [
        s("Domenica sera Emma chiama la mamma a Dublino. Siobhan è già a casa e le ha dato la borsa.", "On Sunday evening Emma calls her mum in Dublin. Siobhan is already home and has given her the bag."),
        s("\"È bellissima! Chi me l'ha comprata?\" \"Te l'abbiamo comprata insieme. E c'è anche un biglietto: leggilo!\"", "\"It's beautiful! Who bought it for me?\" \"We bought it for you together. And there's a card too: read it!\""),
        s("La mamma lo legge e ride. \"È in italiano! Me lo traduci tu?\"", "Mum reads it and laughs. \"It's in Italian! Will you translate it for me?\""),
      ],
    ],
    textTasks: [
      tf("Siobhan ha dato la borsa alla mamma.", "Siobhan has given the bag to their mum.", true),
      mc("Who bought the bag?", ["Emma and Siobhan together", "Siobhan alone", "The craftsman"], 0),
      mc("Why can't Mum read the card?", ["It's in Italian", "It's too small", "She hasn't got her glasses"], 0),
    ],
    listening: {
      situation: "The craftsman from Florence leaves Emma a voice message.",
      lines: [
        line("Artigiano", "Buongiorno, signorina, sono il signor Paoli, di Firenze.", "Good morning, miss, it's Mr Paoli, from Florence."),
        line("Artigiano", "Ha dimenticato gli occhiali da sole nel mio negozio.", "You forgot your sunglasses in my shop."),
        line("Artigiano", "Mi dica: glieli mando a Bologna per posta?", "Tell me: shall I post them to you in Bologna?"),
        line("Artigiano", "Mi richiami quando può. Arrivederla!", "Call me back when you can. Goodbye!"),
      ],
      questions: [
        { prompt: "What did Emma forget?", options: ["Her sunglasses", "Her phone", "Her bag"], answer: 0 },
        { prompt: "What does Mr Paoli offer?", options: ["To post them to Bologna", "To keep them for her", "To bring them himself"], answer: 0 },
      ],
    },
    write: {
      situation: "Reply to Mr Paoli: thank him and ask him to post the glasses.",
      points: [
        { prompt: "Greet him formally", frame: "Gentile signor Paoli, … ." },
        { prompt: "Ask him to send them", frame: "Me li mandi a … , per favore." },
        { prompt: "Thank him", frame: "Grazie mille, … ." },
      ],
      model: "Gentile signor Paoli, grazie! Me li mandi in via del Pratello 12, Bologna, per favore. Grazie mille, Emma Walsh",
      modelTranslation: "Dear Mr Paoli, thank you! Please send them to Via del Pratello 12, Bologna. Many thanks, Emma Walsh",
    },
  },
};
