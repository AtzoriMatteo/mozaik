import type { Unit } from "@/core/content";
import { a2, gaps, heard, line, mc, order, pf, s, tf } from "./helpers";

/**
 * A2 unit 7: Emma the teacher. The trapassato prossimo (era già cominciata),
 * relative cui (la classe in cui insegno), reported speech (dice che…).
 * Lead: Emma, in her first weeks at the Babele language school. Culture:
 * adult evening classes, colleagues, the first pay slip, office small talk.
 */
export const lavoro: Unit = {
  id: "it-a2-lavoro",
  level: "A2",
  title: "La prof",
  titleTranslation: "The teacher",
  look: { motif: "column", glaze: "copper" },
  canDo: [
    "Say what had already happened: quando sono arrivata, la lezione era già cominciata",
    "Describe people and places with cui: la classe in cui insegno, il collega con cui pranzo",
    "Report what someone said: il direttore dice che…, mi ha detto che…",
    "Talk about your job and your colleagues",
  ],
  story: {
    id: "emma-insegna",
    title: "Emma insegna",
    titleTranslation: "Emma teaches",
    intro:
      "October. Emma has three evening classes of English at the Babele school: nurses, a pensioner, a chef, a teenager who never speaks. Now she's on the other side of the desk, and her Italian has to work for real.",
  },
  texts: [
    {
      id: "emma-11-il-primo-giorno",
      level: "A2",
      title: "Il primo giorno",
      titleTranslation: "The first day",
      grammar: ["trapassato", "imperfetto-passato"],
      paragraphs: [
        [
          s("Il primo giorno di lavoro Emma esce di casa presto. Ma l'autobus si ferma per un guasto, e lei deve correre sotto la pioggia.", "On her first day at work Emma leaves home early. But the bus stops because of a breakdown, and she has to run in the rain."),
          s("Quando arriva alla scuola, sono le sette e dieci. La lezione era già cominciata: il direttore aveva aperto l'aula e aveva fatto entrare gli studenti.", "When she arrives at the school, it's ten past seven. The lesson had already started: the director had opened the classroom and let the students in."),
        ],
        [
          s("\"Scusate il ritardo!\" dice Emma, bagnata dalla testa ai piedi. Gli studenti ridono, ma gentilmente.", "\"Sorry I'm late!\" says Emma, wet from head to toe. The students laugh, but kindly."),
          s("Una signora le porge un fazzoletto. \"Si chiama Teresa, è infermiera\", spiega il direttore. \"Aveva già fatto un corso, l'anno scorso, ma ha dimenticato tutto.\"", "A woman hands her a tissue. \"Her name is Teresa, she's a nurse,\" the director explains. \"She'd already done a course last year, but she's forgotten everything.\""),
        ],
        [
          s("Emma scrive alla lavagna: My name is Emma. I am from Dublin. Poi chiede a ognuno di presentarsi.", "Emma writes on the board: My name is Emma. I am from Dublin. Then she asks everyone to introduce themselves."),
          s("Alla fine della lezione, Emma si accorge che non aveva mai parlato in italiano per due ore di seguito. È stanchissima, ma felice.", "At the end of the lesson Emma realises she'd never spoken Italian for two hours in a row. She's exhausted, but happy."),
        ],
      ],
      tasks: [
        mc("Why is Emma late?", ["The bus broke down", "She overslept", "She got lost"], 0),
        tf("Quando Emma arriva, gli studenti sono ancora fuori.", "When Emma arrives, the students are still outside.", false),
        mc("Who is Teresa?", ["A nurse who'd done a course before", "The director's wife", "Another teacher"], 0),
        tf("Emma aveva già parlato italiano per due ore di seguito.", "Emma had already spoken Italian for two hours in a row.", false),
      ],
    },
    {
      id: "emma-12-i-miei-studenti",
      level: "A2",
      title: "I miei studenti",
      titleTranslation: "My students",
      grammar: ["cui", "che-relativo"],
      paragraphs: [
        [
          s("Dopo un mese Emma conosce bene i suoi studenti. Scrive una mail a Kenji, il suo compagno di corso che è tornato a Tokyo, per raccontarglieli.", "After a month Emma knows her students well. She writes an email to Kenji, her classmate who has gone back to Tokyo, to tell him about them."),
          s("\"La classe in cui insegno il martedì è la mia preferita. È un gruppo piccolo, con cui si ride molto.\"", "\"The class I teach on Tuesdays is my favourite. It's a small group, one you laugh a lot with.\""),
        ],
        [
          s("\"C'è Teresa, l'infermiera di cui ti ho parlato: vuole lavorare in un ospedale a Londra. C'è Ugo, un cuoco che ha settant'anni e studia per parlare con i nipoti in Australia.\"", "\"There's Teresa, the nurse I told you about: she wants to work in a hospital in London. There's Ugo, a seventy-year-old cook who's studying so he can talk to his grandchildren in Australia.\""),
          s("\"E poi c'è Nicolò, un ragazzo di diciassette anni che non parla mai. Il motivo per cui viene a lezione è un mistero.\"", "\"And then there's Nicolò, a seventeen-year-old boy who never speaks. Why he comes to the lessons is a mystery.\""),
        ],
        [
          s("\"Ieri però è successa una cosa bellissima. Ho chiesto a tutti la canzone a cui sono più legati, e Nicolò ha alzato la mano.\"", "\"Yesterday, though, something lovely happened. I asked everyone which song they're most attached to, and Nicolò put his hand up.\""),
          s("\"Ha cantato una canzone degli U2, in inglese perfetto! Il paese da cui vengo è famoso per la musica, gli ho detto. E lui ha sorriso per la prima volta.\"", "\"He sang a U2 song, in perfect English! The country I come from is famous for its music, I told him. And he smiled for the first time.\""),
        ],
      ],
      tasks: [
        mc("Why is Ugo learning English?", ["To talk to his grandchildren in Australia", "For his job", "To travel to London"], 0),
        tf("Nicolò parla molto in classe.", "Nicolò talks a lot in class.", false),
        mc("What happened yesterday?", ["Nicolò sang a U2 song", "Teresa left the course", "Ugo cooked for everyone"], 0),
        tf("La classe del martedì è la preferita di Emma.", "The Tuesday class is Emma's favourite.", true),
      ],
    },
    {
      id: "emma-13-cosa-ha-detto",
      level: "A2",
      title: "Cosa ha detto?",
      titleTranslation: "What did he say?",
      grammar: ["discorso-indiretto", "passato-prossimo"],
      paragraphs: [
        [
          s("A fine ottobre il direttore, il signor Neri, chiama Emma nel suo ufficio. Emma è un po' preoccupata: forse ha fatto qualcosa di sbagliato?", "At the end of October the director, Mr Neri, calls Emma into his office. Emma is a bit worried: maybe she's done something wrong?"),
          s("La sera al bar racconta tutto a Rita. \"Mi ha detto che gli studenti sono contenti e che molti vogliono continuare.\"", "In the evening at the bar she tells Rita everything. \"He told me the students are happy and that many want to carry on.\""),
        ],
        [
          s("\"E poi?\" chiede Rita. \"Ha detto che a gennaio apre un nuovo corso, per bambini, e mi ha chiesto se voglio insegnare anche lì.\"", "\"And then?\" asks Rita. \"He said that in January a new course is starting, for children, and he asked me if I want to teach there too.\""),
          s("\"E tu cosa gli hai risposto?\" \"Gli ho detto che non ho mai insegnato ai bambini, ma che voglio provare.\"", "\"And what did you answer?\" \"I told him I've never taught children, but that I want to try.\""),
        ],
        [
          s("Marco porta due cioccolate calde. \"Ho sentito tutto. Dico che ci vuole una festa!\"", "Marco brings two hot chocolates. \"I heard everything. I say we need a party!\""),
          s("Rita alza la tazza. \"Gino diceva sempre che il lavoro migliore è quello in cui impari qualcosa ogni giorno.\"", "Rita raises her cup. \"Gino always said that the best job is one where you learn something every day.\""),
        ],
      ],
      tasks: [
        order("What did Mr Neri say, in order?", "The students are happy", "Many want to carry on", "A children's course starts in January", "Does Emma want to teach there?"),
        mc("What did Emma answer?", ["She's never taught children, but she wants to try", "No, she's too busy", "She needs to ask Siobhan"], 0),
        tf("Emma era preoccupata prima dell'incontro.", "Emma was worried before the meeting.", true),
        mc("What did Gino use to say?", ["The best job is one where you learn every day", "Work is not important", "Never work in the evening"], 0),
      ],
    },
  ],
  sequence: [
    "emma-11-il-primo-giorno", "il-messaggio-di-teresa", "trapassato",
    "emma-12-i-miei-studenti", "cui", "in-sala-insegnanti",
    "emma-13-cosa-ha-detto", "discorso-indiretto",
    "write", "words", "check",
  ],
  listening: [
    {
      id: "il-messaggio-di-teresa",
      level: "A2",
      title: "Il messaggio di Teresa",
      titleTranslation: "Teresa's message",
      kind: "voicemail",
      situation: "Teresa leaves Emma a voice message before the second lesson.",
      grammar: ["trapassato", "passato-prossimo"],
      lines: [
        line("Teresa", "Ciao Emma, sono Teresa, del corso del martedì.", "Hi Emma, it's Teresa, from the Tuesday course."),
        line("Teresa", "Stasera non posso venire: mi hanno cambiato il turno in ospedale.", "I can't come tonight: they've changed my shift at the hospital."),
        line("Teresa", "Avevo già fatto i compiti, che peccato!", "I'd already done my homework, what a shame!"),
        line("Teresa", "Te li mando per email, così me li correggi.", "I'll send it to you by email, so you can correct it for me."),
        line("Teresa", "Ci vediamo giovedì. Ciao!", "See you on Thursday. Bye!"),
      ],
      gist: { prompt: "Why is Teresa calling?", options: ["She can't come to the lesson tonight", "She wants to leave the course", "She's lost her book"], answer: 0 },
      details: [
        { prompt: "Why can't she come?", options: ["Her shift has changed", "She's ill", "Her car broke down"], answer: 0 },
        { prompt: "What will she send Emma?", options: ["Her homework", "A photo", "The money"], answer: 0 },
      ],
      tasks: [
        tf("Teresa non aveva fatto i compiti.", "Teresa hadn't done her homework.", false),
        heard(1, ["turno", "treno", "tempo"], 0),
        gaps(3, "email", "correggi"),
      ],
      dictation: [1, 3],
    },
    {
      id: "in-sala-insegnanti",
      level: "A2",
      title: "In sala insegnanti",
      titleTranslation: "In the staff room",
      kind: "dialogue",
      situation: "Emma meets a colleague in the staff room.",
      grammar: ["cui", "discorso-indiretto"],
      lines: [
        line("Paolo", "Tu sei la nuova insegnante di inglese? Io sono Paolo, insegno spagnolo.", "Are you the new English teacher? I'm Paolo, I teach Spanish."),
        line("Emma", "Piacere, Emma. Mi hanno detto che sei qui da tanti anni.", "Nice to meet you, Emma. They told me you've been here for years."),
        line("Paolo", "Dieci! Questa è la stanza in cui passo metà della mia vita.", "Ten! This is the room where I spend half my life."),
        line("Emma", "C'è un posto vicino in cui si mangia bene a pranzo?", "Is there a place nearby where you can eat well at lunchtime?"),
        line("Paolo", "Sì, la trattoria all'angolo, quella da cui viene questo profumo.", "Yes, the trattoria on the corner, the one this smell is coming from."),
        line("Emma", "Allora domani ci andiamo insieme?", "So shall we go there together tomorrow?"),
      ],
      gist: { prompt: "What's happening?", options: ["Emma meets a new colleague", "Emma has a job interview", "Emma complains to the director"], answer: 0 },
      details: [
        { prompt: "What does Paolo teach?", options: ["Spanish", "English", "Italian"], answer: 0 },
        { prompt: "How long has he worked there?", options: ["Ten years", "Two years", "One month"], answer: 0 },
      ],
      tasks: [
        tf("La trattoria è lontana dalla scuola.", "The trattoria is far from the school.", false),
        heard(2, ["metà", "meta", "mese"], 0),
        gaps(4, "angolo", "profumo"),
      ],
      dictation: [2, 3],
    },
  ],
  writing: [
    a2({
      id: "w-il-mio-lavoro",
      title: "Il mio lavoro",
      titleTranslation: "My job",
      form: "description",
      situation: "Describe your job or your studies to a new colleague.",
      points: [
        pf("Say what you do and where", "Lavoro / Studio … .", "lavoro", "studio"),
        pf("Describe the place, with cui", "È un posto in cui … .", "cui"),
        pf("Describe a colleague, with che", "Ho un collega che … .", "che"),
        pf("Say what you like most", "La cosa che mi piace di più è … .", "piace"),
      ],
      model:
        "Studio all'università di Leiden. È un posto in cui si lavora molto, ma con calma. Ho un amico che viene dal Portogallo e che mi aiuta sempre con la matematica. La cosa che mi piace di più è la biblioteca, in cui passo i pomeriggi.",
    }),
    a2({
      id: "w-cosa-mi-ha-detto",
      title: "Cosa mi ha detto",
      titleTranslation: "What they told me",
      form: "message",
      situation: "Tell a friend about a conversation you had: report what the other person said.",
      points: [
        pf("Say who you talked to", "Ieri ho parlato con … .", "parlato"),
        pf("Report what they said", "Mi ha detto che … .", "detto che"),
        pf("Report a question they asked", "Mi ha chiesto se … .", "chiesto se"),
        pf("Say what you answered", "Gli / Le ho risposto che … .", "risposto"),
      ],
      model:
        "Ieri ho parlato con la mia professoressa. Mi ha detto che il mio progetto è buono, ma troppo lungo. Mi ha chiesto se voglio presentarlo a maggio, all'università. Le ho risposto che ci devo pensare, ma che sono molto contento!",
    }),
  ],
  checkpoint: {
    title: "La prima busta paga",
    titleTranslation: "The first pay slip",
    text: [
      [
        s("A fine mese Emma riceve la prima busta paga. Non aveva mai guadagnato soldi in Italia.", "At the end of the month Emma receives her first pay slip. She'd never earned money in Italy before."),
        s("Con i primi soldi compra un regalo per Rita: un libro di fotografie di Bologna, quella in cui Rita era giovane.", "With her first money she buys Rita a present: a book of photographs of Bologna, the Bologna in which Rita was young."),
        s("Rita sfoglia il libro e dice che ha riconosciuto il negozio di sua madre. \"Mi hai fatto il regalo più bello dell'anno\", aggiunge.", "Rita leafs through the book and says she's recognised her mother's shop. \"You've given me the best present of the year,\" she adds."),
      ],
    ],
    textTasks: [
      tf("Emma aveva già lavorato in Italia.", "Emma had already worked in Italy.", false),
      mc("What does Emma buy Rita?", ["A book of photos of old Bologna", "A cake", "A scarf"], 0),
      mc("What does Rita recognise?", ["Her mother's shop", "Gino", "Bar Margherita"], 0),
    ],
    listening: {
      situation: "Mr Neri leaves Emma a voice message.",
      lines: [
        line("Neri", "Buongiorno Emma, sono Neri.", "Good morning Emma, it's Neri."),
        line("Neri", "Volevo dirle che i genitori dei bambini hanno già chiamato.", "I wanted to tell you that the children's parents have already called."),
        line("Neri", "Il corso di gennaio è pieno: dodici bambini, il sabato mattina.", "The January course is full: twelve children, on Saturday mornings."),
        line("Neri", "Mi ha detto Paolo che lei canta bene. Le servirà!", "Paolo told me you sing well. You'll need it!"),
      ],
      questions: [
        { prompt: "How many children are on the course?", options: ["Twelve", "Ten", "Twenty"], answer: 0 },
        { prompt: "When is the course?", options: ["On Saturday mornings", "On Tuesday evenings", "Every day"], answer: 0 },
      ],
    },
    write: {
      situation: "Write to Kenji and report what Mr Neri said.",
      points: [
        { prompt: "Report the news", frame: "Il direttore mi ha detto che … ." },
        { prompt: "Say how you feel", frame: "Sono … ." },
        { prompt: "Say goodbye", frame: "Un bacio, Emma" },
      ],
      model: "Il direttore mi ha detto che il corso per bambini è pieno! Sono contenta, ma un po' preoccupata. Un bacio, Emma",
      modelTranslation: "The director told me the children's course is full! I'm happy, but a bit worried. Love, Emma",
    },
  },
};
