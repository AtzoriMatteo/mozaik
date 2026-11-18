import type { Unit } from "@/core/content";
import { a1, gaps, heard, line, mc, order, pf, s, tf } from "./helpers";

/**
 * A1 unit 11: health. The body (le mani, le braccia), mi fa male / mi fanno
 * male, stare (sto male, stia a letto). Lead: Giulia, ill the weekend before
 * her exam. Culture: the colpo d'aria, wet hair, the chemist's, the duty
 * pharmacy, exams graded out of 30 and the lode.
 */
export const salute: Unit = {
  id: "it-a1-salute",
  level: "A1",
  title: "La salute",
  titleTranslation: "Health",
  look: { motif: "olive", glaze: "copper" },
  canDo: [
    "Say what hurts: mi fa male la testa, mi fanno male le orecchie",
    "Talk to a doctor and a pharmacist about simple problems",
    "Understand simple advice: stia a letto, beva molta acqua",
    "Know some Italian beliefs about health, and how exams are graded",
  ],
  story: {
    id: "giulia-sta-male",
    title: "Giulia sta male",
    titleTranslation: "Giulia is ill",
    intro:
      "Giulia has an important exam on Monday. On Friday evening her head hurts, her throat hurts, and the whole street has an opinion about why. Four episodes: a diagnosis from Rita, a real one from the doctor, a pharmacy and an exam.",
  },
  texts: [
    {
      id: "giulia-1-il-colpo-d-aria",
      level: "A1",
      title: "Il colpo d'aria",
      titleTranslation: "A chill",
      grammar: ["fa-male", "stare", "body-plurals"],
      paragraphs: [
        [
          s("Venerdì sera Giulia torna a casa presto. Ha freddo e le fa male la testa.", "On Friday evening Giulia comes home early. She's cold and her head hurts."),
          s("\"Come stai?\" chiede Emma. \"Sto male. Mi fa male la gola e mi fanno male le orecchie.\"", "\"How are you?\" Emma asks. \"I feel ill. My throat hurts and my ears hurt.\""),
          s("Emma le misura la febbre: trentotto e due.", "Emma takes her temperature: thirty-eight point two."),
        ],
        [
          s("Dopo cinque minuti suona il campanello. È la signora Rita, con una pentola di brodo caldo.", "Five minutes later the doorbell rings. It's Signora Rita, with a pot of hot broth."),
          s("\"Ho visto Giulia dal balcone. È il colpo d'aria! Ieri sei uscita con i capelli bagnati, vero?\"", "\"I saw Giulia from the balcony. It's a chill! Yesterday you went out with wet hair, didn't you?\""),
          s("Emma ride. In Irlanda tutti escono con i capelli bagnati, anche d'inverno.", "Emma laughs. In Ireland everyone goes out with wet hair, even in winter."),
          s("Ma Rita è seria: \"E tu, Emma, metti le pantofole! In casa non si sta a piedi nudi!\"", "But Rita is serious: \"And you, Emma, put your slippers on! You don't go barefoot at home!\""),
        ],
        [
          s("Emma non dice niente e mette le pantofole.", "Emma says nothing and puts her slippers on."),
          s("Giulia beve il brodo e va a letto. \"Lunedì ho l'esame. Devo stare bene!\"", "Giulia drinks the broth and goes to bed. \"I've got my exam on Monday. I have to be well!\""),
        ],
      ],
      tasks: [
        mc("What does Rita think caused Giulia's illness?", ["Going out with wet hair: a colpo d'aria", "Bad food", "Studying too much"], 0),
        tf("Giulia ha trentasei di febbre.", "Giulia has a temperature of thirty-six.", false),
        mc("Why does Emma laugh?", ["In Ireland people go out with wet hair all the time", "Rita's broth is cold", "Giulia is joking"], 0),
        mc("Why does Rita tell Emma to wear slippers?", ["She thinks bare feet at home make you ill", "The floor is dirty", "It's polite"], 0),
      ],
    },
    {
      id: "giulia-2-dal-medico",
      level: "A1",
      title: "Dal medico",
      titleTranslation: "At the doctor's",
      grammar: ["fa-male", "stare", "imperative"],
      paragraphs: [
        [
          s("Sabato mattina Giulia sta ancora male. Va dal suo medico di famiglia, la dottoressa Ferri, con Emma.", "On Saturday morning Giulia still feels ill. She goes to her family doctor, Dr Ferri, with Emma."),
          s("In sala d'attesa ci sono sei persone. Un signore tossisce, un bambino piange.", "In the waiting room there are six people. A man is coughing, a child is crying."),
          s("Dopo un'ora tocca a Giulia. \"Buongiorno. Cosa si sente?\"", "After an hour it's Giulia's turn. \"Good morning. How are you feeling?\""),
        ],
        [
          s("\"Mi fa male la gola, mi fanno male le orecchie e ho la febbre da ieri sera.\"", "\"My throat hurts, my ears hurt and I've had a temperature since last night.\""),
          s("La dottoressa guarda la gola e le orecchie. \"È l'influenza. Non è grave.\"", "The doctor looks at her throat and ears. \"It's flu. It's not serious.\""),
          s("\"Stia a letto due o tre giorni, beva molta acqua e prenda questo per la febbre, tre volte al giorno.\"", "\"Stay in bed for two or three days, drink lots of water and take this for the temperature, three times a day.\""),
          s("\"Ma lunedì ho un esame all'università!\" \"Lunedì? No, signorina. Lunedì lei sta a casa.\"", "\"But I've got an exam at the university on Monday!\" \"Monday? No, young lady. On Monday you're staying at home.\""),
        ],
        [
          s("Fuori Giulia è triste. Ma Emma dice: \"In Italia ci sono molti appelli, no? Puoi fare l'esame tra due settimane!\"", "Outside Giulia is sad. But Emma says: \"In Italy there are several exam dates, aren't there? You can take the exam in two weeks!\""),
          s("\"È vero. Ma io ho studiato per lunedì!\"", "\"That's true. But I studied for Monday!\""),
          s("\"Allora adesso studi per lunedì tra due settimane.\"", "\"Then now you study for Monday in two weeks.\""),
        ],
      ],
      tasks: [
        mc("What does the doctor say Giulia has?", ["Flu, nothing serious", "A colpo d'aria", "An ear infection that needs hospital"], 0),
        tf("Giulia deve prendere la medicina due volte al giorno.", "Giulia has to take the medicine twice a day.", false),
        mc("Why can Giulia still pass the exam?", ["Italian exams have several dates (appelli)", "The doctor writes to the university", "The exam is online"], 0),
        order("Put the visit in order.", "The waiting room", "Giulia says what hurts", "The doctor looks at her throat", "The advice", "Emma's idea"),
      ],
    },
    {
      id: "giulia-3-in-farmacia",
      level: "A1",
      title: "In farmacia",
      titleTranslation: "At the chemist's",
      grammar: ["stare", "body-plurals", "partitive"],
      paragraphs: [
        [
          s("Emma va in farmacia per le medicine. Fuori c'è una croce verde che si accende.", "Emma goes to the chemist's for the medicine. Outside there's a green cross that lights up."),
          s("La farmacista, la dottoressa Neri, dà le medicine e dice: \"Le prenda dopo i pasti, non a stomaco vuoto.\"", "The pharmacist, Dr Neri, gives her the medicine and says: \"Take it after meals, not on an empty stomach.\""),
          s("\"E se Giulia sta male di notte?\" \"C'è sempre una farmacia di turno, aperta anche di notte. Guardi il cartello sulla porta.\"", "\"And if Giulia feels ill at night?\" \"There's always a duty pharmacy, open at night too. Look at the sign on the door.\""),
        ],
        [
          s("A casa, la cucina di Giulia è piena di rimedi. Ognuno porta il suo.", "At home, Giulia's kitchen is full of remedies. Everyone brings their own."),
          s("Il nonno Wei porta lo zenzero: \"Tè allo zenzero, tre tazze al giorno!\"", "Grandpa Wei brings ginger: \"Ginger tea, three cups a day!\""),
          s("Amadou porta il miele e i limoni. Karim porta il tè alla menta, come fa suo padre.", "Amadou brings honey and lemons. Karim brings mint tea, the way his father makes it."),
          s("Emma prepara il suo rimedio irlandese: latte caldo con il miele.", "Emma makes her Irish remedy: hot milk with honey."),
        ],
        [
          s("Giulia guarda il tavolo: brodo, zenzero, miele, limoni, menta, latte e le medicine.", "Giulia looks at the table: broth, ginger, honey, lemons, mint, milk and the medicine."),
          s("\"Grazie a tutti! Ma devo bere tutto questo?\" \"Sì!\" rispondono tutti insieme.", "\"Thanks, everyone! But do I have to drink all this?\" \"Yes!\" they all answer together."),
        ],
      ],
      tasks: [
        mc("When should Giulia take the medicine?", ["After meals", "Before breakfast", "Only at night"], 0),
        mc("What is a farmacia di turno?", ["A chemist's on duty, open at night and on holidays", "A chemist's that's always closed", "A hospital"], 0),
        tf("Karim porta lo zenzero.", "Karim brings the ginger.", false),
        mc("What does the table of remedies show?", ["Each neighbour brings a remedy from their own family or country", "Giulia likes tea", "The pharmacist sent them"], 0),
      ],
    },
    {
      id: "giulia-4-trenta-e-lode",
      level: "A1",
      title: "Trenta e lode",
      titleTranslation: "Thirty cum laude",
      grammar: ["stare", "passato-prossimo", "passato-essere"],
      paragraphs: [
        [
          s("Due settimane dopo Giulia sta benissimo. Oggi c'è l'appello di storia dell'arte.", "Two weeks later Giulia is perfectly well. Today is the history of art exam."),
          s("Il voto va da diciotto a trenta. Diciotto basta per passare. Con un esame perfetto, il professore dà trenta e lode.", "The grade goes from eighteen to thirty. Eighteen is enough to pass. For a perfect exam, the professor gives thirty cum laude."),
          s("E una cosa strana per Emma: se il voto non ti piace, puoi rifiutarlo e rifare l'esame!", "And a strange thing for Emma: if you don't like the grade, you can refuse it and take the exam again!"),
        ],
        [
          s("Giulia è entrata nell'aula alle nove. È uscita alle dieci meno un quarto.", "Giulia went into the room at nine. She came out at quarter to ten."),
          s("Emma, Karim e Rita aspettano fuori. \"Allora? Com'è andata?\"", "Emma, Karim and Rita are waiting outside. \"So? How did it go?\""),
          s("Giulia non dice niente. Poi alza le mani e grida: \"Trenta e lode!\"", "Giulia says nothing. Then she raises her hands and shouts: \"Thirty cum laude!\""),
        ],
        [
          s("La sera festeggiano al Bar Margherita. Marco offre lo spritz a tutti.", "In the evening they celebrate at Bar Margherita. Marco buys everyone a spritz."),
          s("Rita alza il bicchiere: \"Brava Giulia! Vedi? È merito del mio brodo!\"", "Rita raises her glass: \"Well done, Giulia! You see? It's thanks to my broth!\""),
          s("\"E dello zenzero!\" dice il nonno Wei. \"E del miele!\" dice Amadou. Giulia ride: \"È merito di tutta la via!\"", "\"And the ginger!\" says Grandpa Wei. \"And the honey!\" says Amadou. Giulia laughs: \"It's thanks to the whole street!\""),
        ],
      ],
      tasks: [
        mc("What does \"trenta e lode\" mean?", ["The top grade, with distinction", "A pass", "A fail"], 0),
        tf("Con diciotto non passi l'esame.", "With eighteen you don't pass the exam.", false),
        mc("What surprises Emma about Italian exams?", ["You can refuse a grade and take the exam again", "They're written", "They last a day"], 0),
        mc("Why does everyone say it's thanks to them?", ["Each one brought a remedy when Giulia was ill", "They studied with Giulia", "They paid for the exam"], 0),
      ],
    },
  ],
  sequence: [
    "giulia-1-il-colpo-d-aria", "fa-male", "una-telefonata-al-medico",
    "giulia-2-dal-medico", "stare",
    "giulia-3-in-farmacia", "la-farmacia-di-turno", "body-plurals",
    "write", "giulia-4-trenta-e-lode", "words", "check",
  ],
  listening: [
    {
      id: "una-telefonata-al-medico",
      level: "A1",
      title: "Una telefonata al medico",
      titleTranslation: "A call to the doctor",
      kind: "dialogue",
      situation: "Saturday, eight in the morning. Giulia calls the doctor's surgery.",
      grammar: ["fa-male", "stare", "time"],
      lines: [
        line("Segretaria", "Studio medico Ferri, buongiorno.", "Dr Ferri's surgery, good morning."),
        line("Giulia", "Buongiorno, sono Giulia Romano. Sto male da ieri sera.", "Good morning, it's Giulia Romano. I've been ill since last night."),
        line("Segretaria", "Cosa si sente?", "What's wrong?"),
        line("Giulia", "Ho la febbre, e mi fa male la gola.", "I've got a temperature, and my throat hurts."),
        line("Segretaria", "La dottoressa riceve fino alle dodici. Può venire alle dieci?", "The doctor sees patients until twelve. Can you come at ten?"),
        line("Giulia", "Sì, grazie. Porto la tessera sanitaria?", "Yes, thanks. Shall I bring my health card?"),
        line("Segretaria", "Sì, sempre. A dopo!", "Yes, always. See you later!"),
      ],
      gist: { prompt: "Why does Giulia call?", options: ["To see the doctor", "To buy medicine", "To cancel her exam"], answer: 0 },
      details: [
        { prompt: "What time is the appointment?", options: ["Ten", "Twelve", "Eight"], answer: 0 },
        { prompt: "What should Giulia bring?", options: ["Her health card", "Her exam papers", "Some broth"], answer: 0 },
      ],
      tasks: [
        tf("Giulia sta male da una settimana.", "Giulia has been ill for a week.", false),
        heard(5, ["tessera", "terrazza", "testa"], 0),
        gaps(3, "febbre", "gola"),
      ],
      dictation: [1, 3],
      words: {
        studio: { meaning: "surgery, office; study" },
        romano: { meaning: "Romano (a surname)" },
        riceve: { meaning: "sees (patients)", base: "ricevere" },
        dodici: { meaning: "twelve" },
        tessera: { meaning: "card (tessera sanitaria = health card)" },
        sanitaria: { meaning: "health (adjective)", base: "sanitario" },
      },
    },
    {
      id: "la-farmacia-di-turno",
      level: "A1",
      title: "La farmacia di turno",
      titleTranslation: "The duty pharmacy",
      kind: "voicemail",
      situation: "Sunday night. Emma calls the chemist's and gets a recorded message.",
      grammar: ["time", "imperative"],
      lines: [
        line("Segretaria", "Farmacia Neri. La farmacia è chiusa.", "Neri pharmacy. The pharmacy is closed."),
        line("Segretaria", "Siamo aperti dal lunedì al sabato, dalle otto e mezza alle sette e mezza.", "We're open Monday to Saturday, from half past eight to half past seven."),
        line("Segretaria", "Questa notte la farmacia di turno è la Farmacia Centrale, in Piazza Maggiore.", "Tonight the duty pharmacy is the Farmacia Centrale, in Piazza Maggiore."),
        line("Segretaria", "Per le emergenze, chiami il centododici.", "For emergencies, call one one two."),
      ],
      gist: { prompt: "What does the message say?", options: ["Which pharmacy is open tonight", "That the pharmacy is open", "How to take a medicine"], answer: 0 },
      details: [
        { prompt: "Which pharmacy is open tonight?", options: ["Farmacia Centrale, Piazza Maggiore", "Farmacia Neri", "None"], answer: 0 },
        { prompt: "What number is for emergencies?", options: ["112", "113", "118"], answer: 0 },
      ],
      tasks: [
        tf("La Farmacia Neri è aperta la domenica.", "Neri pharmacy is open on Sundays.", false),
        heard(2, ["turno", "treno", "tutto"], 0),
        gaps(1, "lunedì", "sabato"),
      ],
      dictation: [0, 2],
      words: {
        neri: { meaning: "Neri (a surname)" },
        aperti: { meaning: "open", base: "aperto" },
        turno: { meaning: "turn, shift (di turno = on duty)" },
        emergenze: { meaning: "emergencies", base: "emergenza" },
        chiami: { meaning: "call (to Lei)", base: "chiamare" },
        centododici: { meaning: "one hundred and twelve (112, the emergency number)" },
      },
    },
  ],
  writing: [
    a1({
      id: "w-sto-male",
      title: "Sto male",
      titleTranslation: "I'm ill",
      form: "message",
      situation: "You're ill and can't go to work or class tomorrow. Write a message to your boss or teacher.",
      points: [
        pf("Greet them politely", "Buongiorno, … .", "buongiorno", "gentile"),
        pf("Say you're ill", "Mi dispiace, sto male.", "sto", "male"),
        pf("Say what hurts", "Mi fa male … .", "fa", "fanno", "male"),
        pf("Say since when", "… da … .", "da", "ieri"),
        pf("Say what the doctor said", "Il medico dice: … .", "medico", "letto", "stare"),
        pf("Say when you'll be back", "Torno … .", "torno", "lunedì", "presto"),
      ],
      model:
        "Buongiorno, professoressa. Mi dispiace, domani non posso venire a lezione, perché sto male. Mi fa male la testa e mi fanno male le orecchie. Ho la febbre da ieri sera. Il medico dice che devo stare a letto due giorni e bere molta acqua. Torno a lezione lunedì. Cordiali saluti, Tom",
    }),
    a1({
      id: "w-un-rimedio",
      title: "Il rimedio della mia famiglia",
      titleTranslation: "My family's remedy",
      form: "description",
      situation: "Like the neighbours in the story, tell Giulia about a remedy from your family or country.",
      points: [
        pf("Say when you use it", "Quando ho … , … .", "quando", "febbre", "male"),
        pf("Say what it is", "Il rimedio della mia famiglia è … .", "rimedio", "famiglia"),
        pf("Say what you need", "Ci vuole / ci vogliono … .", "vuole", "vogliono"),
        pf("Say how to make it", "Prima … , poi … .", "prima", "poi"),
        pf("Say who taught you", "Me lo ha insegnato … . / Lo fa sempre … .", "nonna", "madre", "padre"),
        pf("Say if it works", "Funziona? … !", "funziona"),
      ],
      model:
        "Quando ho mal di gola, preparo il rimedio della mia famiglia: latte caldo con il miele e un po' di cannella. Ci vuole una tazza di latte e un cucchiaio di miele. Prima scaldo il latte, poi metto il miele e la cannella. Lo fa sempre mia nonna in Irlanda. Funziona? Non lo so, ma è buonissimo!",
    }),
  ],
  checkpoint: {
    title: "Il libretto",
    titleTranslation: "The record book",
    text: [
      [
        s("La sera Giulia scrive a sua nonna Pina.", "In the evening Giulia writes to her grandma Pina."),
        s("\"Cara nonna, ho fatto l'esame di storia dell'arte: trenta e lode! Due settimane fa sono stata male, ho avuto la febbre e ho perso il primo appello. Ma tutta la via mi ha aiutato: brodo, zenzero, miele, menta. Domenica vengo a pranzo da te. Mi fai le tagliatelle? Un bacio, Giulia\"", "\"Dear Grandma, I've taken my history of art exam: thirty cum laude! Two weeks ago I was ill, I had a temperature and I missed the first exam date. But the whole street helped me: broth, ginger, honey, mint. On Sunday I'm coming to lunch at yours. Will you make me tagliatelle? A kiss, Giulia\""),
      ],
    ],
    textTasks: [
      tf("Giulia ha fatto l'esame al primo appello.", "Giulia took the exam on the first date.", false),
      mc("What grade did Giulia get?", ["Thirty cum laude", "Eighteen", "Twenty-eight"], 0),
      mc("What does Giulia ask her grandma?", ["To make tagliatelle on Sunday", "To send broth", "To come to Bologna"], 0),
    ],
    listening: {
      situation: "Grandma Pina leaves Giulia a voice message.",
      lines: [
        line("Nonna", "Giulia, tesoro, sono la nonna!", "Giulia, darling, it's Grandma!"),
        line("Nonna", "Trenta e lode! Brava, brava!", "Thirty cum laude! Well done, well done!"),
        line("Nonna", "Domenica faccio le tagliatelle, certo. Porta anche le tue amiche.", "On Sunday I'll make tagliatelle, of course. Bring your friends too."),
        line("Nonna", "E mi raccomando: niente capelli bagnati!", "And remember: no wet hair!"),
      ],
      questions: [
        { prompt: "Who can come to lunch?", options: ["Giulia and her friends", "Only Giulia", "The whole street"], answer: 0 },
        { prompt: "What advice does Grandma give?", options: ["No wet hair", "Study more", "Eat less"], answer: 0 },
      ],
    },
    write: {
      situation: "Answer Grandma Pina: thank her, say who's coming and promise something.",
      points: [
        { prompt: "Thank her", frame: "Grazie, nonna, … !" },
        { prompt: "Say who's coming", frame: "Domenica vengo con … ." },
        { prompt: "Promise something", frame: "… !" },
      ],
      model: "Grazie, nonna, sei la migliore! Domenica vengo con Emma e Ana. Niente capelli bagnati, promesso!",
      modelTranslation: "Thanks, Grandma, you're the best! On Sunday I'm coming with Emma and Ana. No wet hair, promise!",
    },
    words: {
      libretto: { meaning: "record book (where Italian students' grades are written)" },
      pina: { meaning: "Pina (a name)" },
      storia: { meaning: "history; story" },
      arte: { meaning: "art" },
      stata: { meaning: "been (sono stata = I was)", base: "essere" },
      avuto: { meaning: "had", base: "avere" },
      perso: { meaning: "lost, missed", base: "perdere" },
      appello: { meaning: "exam date, exam session" },
      aiutato: { meaning: "helped", base: "aiutare" },
      fai: { meaning: "you make", base: "fare" },
      tesoro: { meaning: "darling (lit. treasure)" },
      amiche: { meaning: "friends (women)", base: "amica" },
      raccomando: { meaning: "mi raccomando = remember, please", base: "raccomandare" },
      bagnati: { meaning: "wet", base: "bagnato" },
      migliore: { meaning: "best" },
      promesso: { meaning: "promised; promise!", base: "promettere" },
    },
  },
};
