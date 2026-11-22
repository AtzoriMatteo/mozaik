import type { Unit } from "@/core/content";
import { a2, gaps, heard, line, mc, order, pf, s, tf } from "./helpers";

/**
 * A2 unit 10, the end of A2: Emma takes the B1 exam. A first look at the
 * congiuntivo after penso / credo / spero che (sia, abbia, vada), real
 * conditions with se + present or future, and stressed pronouns after a
 * preposition (per me, con te, da lei). Lead: Emma, two years after
 * arriving in Bologna. Culture: Italian language certificates, exam nerves,
 * in bocca al lupo.
 */
export const esame: Unit = {
  id: "it-a2-esame",
  level: "A2",
  title: "In bocca al lupo!",
  titleTranslation: "Good luck!",
  look: { motif: "olive", glaze: "ochre" },
  canDo: [
    "Give your opinion and hopes: penso che sia…, spero che vada bene",
    "Say what will happen if…: se passo l'esame, faccio una festa",
    "Use me, te, lui after a preposition: per me, con te, da lei",
    "Wish someone luck the Italian way",
  ],
  story: {
    id: "l-esame-di-emma",
    title: "L'esame di Emma",
    titleTranslation: "Emma's exam",
    intro:
      "February. Two years ago Emma arrived in Bologna with three words of Italian. Now she teaches at the Babele school, chats with the whole street and dreams in two languages. Mr Neri has an idea: why not get a certificate? The B1 exam is in four weeks.",
  },
  texts: [
    {
      id: "emma-14-l-idea-di-neri",
      level: "A2",
      title: "L'idea del signor Neri",
      titleTranslation: "Mr Neri's idea",
      grammar: ["congiuntivo", "pronomi-tonici"],
      paragraphs: [
        [
          s("Un lunedì di febbraio il signor Neri ferma Emma nel corridoio della scuola.", "One Monday in February Mr Neri stops Emma in the school corridor."),
          s("\"Emma, a marzo c'è l'esame di italiano B1. Penso che tu sia pronta. E credo che un certificato sia utile per il tuo lavoro qui.\"", "\"Emma, in March there's the B1 Italian exam. I think you're ready. And I believe a certificate is useful for your job here.\""),
        ],
        [
          s("Emma non è sicura. \"Per me il B1 è troppo difficile. Parlo bene al bar, ma la grammatica…\"", "Emma isn't sure. \"For me B1 is too hard. I speak well at the bar, but the grammar…\""),
          s("\"Secondo me ti sbagli\", risponde Neri. \"Ti sento parlare con gli studenti tutti i giorni. Ascolta: l'iscrizione costa cento euro, la paga la scuola.\"", "\"In my opinion you're wrong,\" Neri answers. \"I hear you talking to the students every day. Listen: registration costs a hundred euros, and the school will pay it.\""),
        ],
        [
          s("La sera Emma ne parla con Giulia. \"Neri pensa che io sia pronta. Tu che ne pensi?\"", "In the evening Emma talks about it with Giulia. \"Neri thinks I'm ready. What do you think?\""),
          s("\"Penso che abbia ragione\", dice Giulia. \"E poi studiamo insieme: io vengo con te in biblioteca, tu vieni con me al mercato. Affare fatto?\"", "\"I think he's right,\" says Giulia. \"And anyway we'll study together: I'll come with you to the library, you'll come with me to the market. Deal?\""),
          s("Emma ride. \"Affare fatto.\"", "Emma laughs. \"Deal.\""),
        ],
      ],
      tasks: [
        mc("What is Neri's idea?", ["That Emma takes the B1 exam", "That Emma teaches more classes", "That Emma changes school"], 0),
        tf("Emma deve pagare l'iscrizione.", "Emma has to pay the registration fee.", false),
        mc("Why does Emma think B1 is too hard?", ["The grammar", "The listening", "The price"], 0),
        tf("Giulia pensa che Neri abbia ragione.", "Giulia thinks Neri is right.", true),
      ],
    },
    {
      id: "emma-15-se-studi-con-me",
      level: "A2",
      title: "Se studi con me…",
      titleTranslation: "If you study with me…",
      grammar: ["se-reale", "pronomi-tonici", "congiuntivo"],
      paragraphs: [
        [
          s("Per quattro settimane tutto il Pratello aiuta Emma. Ognuno ha il suo metodo.", "For four weeks the whole of the Pratello helps Emma. Everyone has their own method."),
          s("Rita le fa domande sulla storia della via. \"Se rispondi bene, ti faccio i tortellini. Se sbagli, li mangio io!\"", "Rita asks her questions about the history of the street. \"If you answer right, I'll make you tortellini. If you get it wrong, I'll eat them!\""),
        ],
        [
          s("Karim prepara delle schede con i verbi irregolari. \"Se le studi tutte le sere, tra due settimane le saprai a memoria.\"", "Karim makes cards with the irregular verbs. \"If you study them every evening, in two weeks you'll know them by heart.\""),
          s("Davide invece è contro le schede. \"Per lui la grammatica è tutto. Per me no. Se vuoi parlare bene, parla!\" E la porta alla radio per un'intervista.", "Davide, on the other hand, is against the cards. \"For him grammar is everything. Not for me. If you want to speak well, speak!\" And he takes her to the radio for an interview."),
        ],
        [
          s("Il problema è lo scritto. Emma scrive come parla, cioè troppo veloce. Lin la aiuta con le lettere formali: \"Gentile signora… Distinti saluti…\"", "The problem is the written part. Emma writes the way she talks, that is, too fast. Lin helps her with formal letters: \"Dear Madam… Yours sincerely…\""),
          s("La sera prima dell'esame Emma è stanca. \"Credo che sia abbastanza\", dice Giulia. \"Se studi ancora, domani non ti ricordi niente. Vai a dormire.\"", "The evening before the exam Emma is tired. \"I think that's enough,\" says Giulia. \"If you study any more, tomorrow you won't remember a thing. Go to bed.\""),
        ],
      ],
      tasks: [
        mc("What does Rita promise?", ["Tortellini if Emma answers right", "A book", "A trip to the radio"], 0),
        tf("Davide pensa che le schede siano il metodo migliore.", "Davide thinks the cards are the best method.", false),
        mc("What is Emma's problem?", ["The written part", "The listening", "The oral exam"], 0),
        mc("What does Giulia tell her the evening before?", ["To go to bed", "To study all night", "To call her mum"], 0),
      ],
    },
    {
      id: "emma-16-il-risultato",
      level: "A2",
      title: "Il risultato",
      titleTranslation: "The result",
      grammar: ["congiuntivo", "se-reale", "pronomi-tonici"],
      paragraphs: [
        [
          s("La mattina dell'esame Rita aspetta Emma sulle scale. \"In bocca al lupo!\" \"Crepi!\" risponde Emma, come le ha insegnato Marco.", "On the morning of the exam Rita is waiting for Emma on the stairs. \"In bocca al lupo!\" \"Crepi!\" Emma answers, the way Marco taught her."),
          s("L'esame dura quattro ore: lettura, ascolto, scritto e orale. All'orale l'esaminatrice le chiede di parlare della sua città. Emma parla di via del Pratello per dieci minuti.", "The exam lasts four hours: reading, listening, writing and speaking. In the oral the examiner asks her to talk about her town. Emma talks about Via del Pratello for ten minutes."),
        ],
        [
          s("Poi tre settimane di attesa. Ogni mattina Emma controlla le email. \"Spero che arrivi oggi\", dice a Marco. \"Arriverà quando arriverà\", risponde lui, e le fa un cappuccino.", "Then three weeks of waiting. Every morning Emma checks her emails. \"I hope it comes today,\" she says to Marco. \"It'll come when it comes,\" he answers, and makes her a cappuccino."),
          s("Un venerdì, finalmente, arriva il risultato. Emma lo legge due volte. Ha passato l'esame, e all'orale ha preso il voto più alto.", "One Friday, at last, the result arrives. Emma reads it twice. She's passed the exam, and in the oral she got the highest mark."),
        ],
        [
          s("La sera, al Bar Margherita, ci sono tutti. Rita alza il bicchiere: \"A Emma, che due anni fa sapeva dire solo grazie e ciao!\"", "In the evening everyone is at Bar Margherita. Rita raises her glass: \"To Emma, who two years ago could only say grazie and ciao!\""),
          s("Emma guarda i suoi amici. \"Questo certificato non è per me. È per voi.\"", "Emma looks at her friends. \"This certificate isn't for me. It's for you.\""),
        ],
      ],
      tasks: [
        order("Put it in order.", "Rita wishes her luck", "Emma does the exam", "Three weeks of waiting", "The result arrives", "The party at the bar"),
        tf("Emma risponde \"Crepi!\" a Rita.", "Emma answers \"Crepi!\" to Rita.", true),
        mc("What does Emma talk about in the oral?", ["Via del Pratello", "Dublin", "Her job"], 0),
        tf("Emma non ha passato l'esame.", "Emma didn't pass the exam.", false),
      ],
    },
  ],
  sequence: [
    "emma-14-l-idea-di-neri", "la-telefonata-di-mary", "congiuntivo",
    "emma-15-se-studi-con-me", "se-reale", "le-istruzioni",
    "emma-16-il-risultato", "pronomi-tonici",
    "write", "words", "check",
  ],
  listening: [
    {
      id: "la-telefonata-di-mary",
      level: "A2",
      title: "La telefonata della mamma",
      titleTranslation: "Mum's phone call",
      kind: "dialogue",
      situation: "Emma's mum, who has started an evening class in Dublin, calls and tries out her Italian.",
      grammar: ["congiuntivo", "se-reale"],
      lines: [
        line("Mamma", "Ciao, tesoro! Ho imparato una nuova frase: in bocca al lupo!", "Hi, love! I've learnt a new phrase: in bocca al lupo!"),
        line("Emma", "Brava, mamma! Ma l'esame è tra due settimane.", "Well done, Mum! But the exam is in two weeks."),
        line("Mamma", "Lo so. Spero che tu dorma abbastanza.", "I know. I hope you're sleeping enough."),
        line("Emma", "Sì, sì. Giulia mi manda a letto alle undici.", "Yes, yes. Giulia sends me to bed at eleven."),
        line("Mamma", "Se passi, io e papà veniamo a Bologna a maggio.", "If you pass, Dad and I will come to Bologna in May."),
        line("Emma", "E se non passo?", "And if I don't pass?"),
        line("Mamma", "Veniamo lo stesso!", "We'll come anyway!"),
      ],
      gist: { prompt: "What is the call about?", options: ["The exam and a visit in May", "Emma's job", "Siobhan's news"], answer: 0 },
      details: [
        { prompt: "What phrase has Mum learnt?", options: ["In bocca al lupo", "Tanti auguri", "Buon appetito"], answer: 0 },
        { prompt: "What happens if Emma doesn't pass?", options: ["Her parents come anyway", "They don't come", "She takes it again in May"], answer: 0 },
      ],
      tasks: [
        tf("I genitori di Emma vengono a Bologna solo se lei passa l'esame.", "Emma's parents are coming to Bologna only if she passes.", false),
        heard(3, ["undici", "dieci", "dodici"], 0),
        gaps(4, "passi", "maggio"),
      ],
      dictation: [2, 4],
    },
    {
      id: "le-istruzioni",
      level: "A2",
      title: "Le istruzioni dell'esame",
      titleTranslation: "The exam instructions",
      kind: "announcement",
      situation: "The examiner reads the instructions before the exam starts.",
      grammar: ["se-reale", "bisogna"],
      lines: [
        line("Annuncio", "Buongiorno a tutti. L'esame comincia tra cinque minuti.", "Good morning, everyone. The exam starts in five minutes."),
        line("Annuncio", "Bisogna spegnere i telefoni e metterli nella borsa.", "Phones must be switched off and put in your bag."),
        line("Annuncio", "Se avete una domanda, alzate la mano.", "If you have a question, raise your hand."),
        line("Annuncio", "Se finite prima, potete uscire, ma in silenzio.", "If you finish early, you can leave, but quietly."),
        line("Annuncio", "La prova orale è nel pomeriggio, in aula tre.", "The oral test is in the afternoon, in room three."),
      ],
      gist: { prompt: "What is this?", options: ["Instructions before an exam", "An advert", "A train announcement"], answer: 0 },
      details: [
        { prompt: "What do you do if you have a question?", options: ["Raise your hand", "Leave the room", "Call the examiner"], answer: 0 },
        { prompt: "Where is the oral test?", options: ["In room three, in the afternoon", "In room five, in the morning", "Online"], answer: 0 },
      ],
      tasks: [
        tf("Si può uscire prima, in silenzio.", "You can leave early, quietly.", true),
        heard(1, ["spegnere", "spendere", "spingere"], 0),
        gaps(2, "domanda", "mano"),
      ],
      dictation: [1, 3],
    },
  ],
  writing: [
    a2({
      id: "w-la-mia-opinione",
      title: "La mia opinione",
      titleTranslation: "My opinion",
      form: "message",
      situation: "A friend asks if they should take a language exam. Give your opinion.",
      points: [
        pf("Give your opinion with penso che", "Penso che … sia … .", "penso che", "credo che"),
        pf("Say what will happen if they do it", "Se … , … .", "se"),
        pf("Say how you can help, with a stressed pronoun", "Studio con te / Per te … .", "con te", "per te", "con me"),
        pf("Say what you hope", "Spero che … .", "spero"),
      ],
      model:
        "Ciao Karim! Penso che l'esame sia una buona idea. Se lo passi, è più facile trovare lavoro. Se vuoi, studio con te il sabato. Spero che tu abbia un po' di tempo!",
    }),
    a2({
      id: "w-due-anni-dopo",
      title: "Due anni dopo",
      titleTranslation: "Two years on",
      form: "story",
      situation: "Write about how your life or your language has changed in the last two years.",
      points: [
        pf("Say what it was like before", "Due anni fa … .", "fa"),
        pf("Say what it's like now", "Adesso … .", "adesso"),
        pf("Say who helped you, with a stressed pronoun", "Senza di lui / di lei / di loro … .", "lui", "lei", "loro"),
        pf("Say a plan, with se", "Se … , … .", "se"),
      ],
      model:
        "Due anni fa non sapevo dire niente in italiano. Adesso parlo con tutti al bar. La mia amica Giulia mi ha aiutato molto: senza di lei non ce la facevo. Se passo l'esame, il prossimo anno studio per il B2.",
    }),
  ],
  checkpoint: {
    title: "Il certificato",
    titleTranslation: "The certificate",
    text: [
      [
        s("Emma mette il certificato in una cornice, vicino alla foto di Siobhan. \"Penso che sia la cosa più bella della mia stanza\", dice a Giulia.", "Emma puts the certificate in a frame, next to the photo of Siobhan. \"I think it's the most beautiful thing in my room,\" she says to Giulia."),
        s("Il lunedì dopo, il signor Neri la chiama. \"Se vuoi, da settembre ti do anche il corso di italiano per stranieri.\"", "The following Monday, Mr Neri calls her. \"If you like, from September I'll give you the Italian course for foreigners too.\""),
        s("Emma ci pensa un secondo. Insegnare italiano, lei? Sì. Perché no?", "Emma thinks about it for a second. Teach Italian, her? Yes. Why not?"),
      ],
    ],
    textTasks: [
      tf("Emma mette il certificato vicino alla foto di sua sorella.", "Emma puts the certificate next to the photo of her sister.", true),
      mc("What does Neri offer her?", ["The Italian course for foreigners", "More English classes", "A job in Dublin"], 0),
      mc("What does Emma decide?", ["To say yes", "To say no", "To think about it for a month"], 0),
    ],
    listening: {
      situation: "Emma's mum leaves her a voice message, in her new Italian.",
      lines: [
        line("Mamma", "Emma, sono la mamma. Ho saputo dell'esame. Brava!", "Emma, it's Mum. I heard about the exam. Well done!"),
        line("Mamma", "Se insegni italiano, la tua prima studentessa sono io.", "If you teach Italian, I'll be your first student."),
        line("Mamma", "Ma per me, lezioni gratis!", "But for me, free lessons!"),
      ],
      questions: [
        { prompt: "Who wants to be Emma's first student?", options: ["Mum", "Siobhan", "Rita"], answer: 0 },
        { prompt: "What does Mum want?", options: ["Free lessons", "A present", "A photo"], answer: 0 },
      ],
    },
    write: {
      situation: "Write to Emma to congratulate her.",
      points: [
        { prompt: "Congratulate her", frame: "Brava, Emma! … " },
        { prompt: "Give your opinion", frame: "Penso che … ." },
        { prompt: "Say what you'll do if…", frame: "Se … , … ." },
      ],
      model: "Brava, Emma! Penso che tu sia la migliore insegnante del Pratello. Se fai un corso, vengo anch'io!",
      modelTranslation: "Well done, Emma! I think you're the best teacher in the Pratello. If you run a course, I'll come too!",
    },
  },
};
