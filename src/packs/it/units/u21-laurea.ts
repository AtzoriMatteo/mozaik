import type { Unit } from "@/core/content";
import { a2, gaps, heard, line, mc, order, pf, s, tf } from "./helpers";

/**
 * A2 unit 9: Karim's graduation. quello and bello before a noun (quel
 * vestito, un bel giorno), molto / tanto / troppo as adjectives that agree,
 * tutto + article. Lead: Karim, who said in A1 he'd finish engineering
 * "next year". Culture: the Italian laurea (each student defends alone, the
 * laurel crown, red confetti, the papiro, "Dottore, dottore!").
 */
export const laurea: Unit = {
  id: "it-a2-laurea",
  level: "A2",
  title: "Dottore!",
  titleTranslation: "Doctor!",
  look: { motif: "laurel", glaze: "iron" },
  canDo: [
    "Point things out: quel vestito, quella corona, quei professori",
    "Say how much: tanta gente, molti dolci, troppe pagine",
    "Talk about the whole group: tutta la famiglia, tutti gli amici",
    "Congratulate someone on a big day",
  ],
  story: {
    id: "la-laurea-di-karim",
    title: "La laurea di Karim",
    titleTranslation: "Karim's graduation",
    intro:
      "December. A year ago Karim said he'd finish engineering \"next year\", and he's kept his word: his thesis is done. His parents are coming from Turin, his aunt from Casablanca, and the whole of Via del Pratello is invited. Emma is about to find out why an Italian laurea is a party, not a ceremony.",
  },
  texts: [
    {
      id: "karim-8-la-tesi",
      level: "A2",
      title: "La tesi è finita",
      titleTranslation: "The thesis is done",
      grammar: ["molto-tanto-troppo", "tutto"],
      paragraphs: [
        [
          s("Dicembre. Karim scrive la tesi da sei mesi, e finalmente è finita: centoventi pagine sui treni del futuro.", "December. Karim has been writing his thesis for six months, and at last it's finished: a hundred and twenty pages on the trains of the future."),
          s("\"Troppe pagine\", dice Giulia. \"Nessuno le legge tutte!\" Karim ride, ma è molto nervoso: la laurea è il diciotto dicembre.", "\"Too many pages,\" says Giulia. \"Nobody reads them all!\" Karim laughs, but he's very nervous: the graduation is on the eighteenth of December."),
        ],
        [
          s("Emma non capisce. \"In Irlanda la laurea è una cerimonia con tanti studenti insieme. Qui invece?\"", "Emma doesn't understand. \"In Ireland graduation is a ceremony with lots of students together. And here?\""),
          s("\"Qui ogni studente presenta la sua tesi da solo, davanti ai professori e a tutta la famiglia\", spiega Giulia. \"E poi c'è la festa. Una festa enorme.\"", "\"Here each student presents their thesis alone, in front of the professors and the whole family,\" Giulia explains. \"And then there's the party. A huge party.\""),
        ],
        [
          s("Karim fa i conti: arrivano i genitori da Torino, la zia Fatima da Casablanca e tutti gli amici del Pratello. Sono più di quaranta persone.", "Karim does the sums: his parents are coming from Turin, Aunt Fatima from Casablanca, and all his friends from the Pratello. That's more than forty people."),
          s("\"Quanta gente!\" dice. \"Tanta gente, tanto cibo e troppo vino\", risponde Marco dal bar. \"Lascia fare a me.\"", "\"So many people!\" he says. \"Lots of people, lots of food and too much wine,\" Marco answers from the bar. \"Leave it to me.\""),
        ],
      ],
      tasks: [
        mc("What is Karim's thesis about?", ["The trains of the future", "The history of Bologna", "Italian bridges"], 0),
        tf("Secondo Giulia, nessuno legge tutte le pagine.", "According to Giulia, nobody reads all the pages.", true),
        mc("How is an Italian graduation different?", ["Each student presents their thesis alone", "There are no professors", "Families can't come"], 0),
        tf("La zia di Karim arriva da Torino.", "Karim's aunt is coming from Turin.", false),
      ],
    },
    {
      id: "karim-9-la-proclamazione",
      level: "A2",
      title: "Centodieci e lode",
      titleTranslation: "Full marks with honours",
      grammar: ["quello-bello", "tutto"],
      paragraphs: [
        [
          s("Il diciotto dicembre l'aula è piena. In prima fila ci sono Youssef e Anna, i genitori di Karim, con quel sorriso nervoso che hanno tutti i genitori.", "On the eighteenth of December the lecture hall is full. In the front row are Youssef and Anna, Karim's parents, with that nervous smile all parents have."),
          s("Karim ha un bel vestito blu e una bella cravatta rossa, un regalo di Davide.", "Karim is wearing a nice blue suit and a nice red tie, a present from Davide."),
        ],
        [
          s("Presenta la tesi in venti minuti. Parla dei treni del futuro, ma anche di Gino, il marito di Rita, che lavorava alla ferrovia. Rita, in quarta fila, piange.", "He presents his thesis in twenty minutes. He talks about the trains of the future, but also about Gino, Rita's husband, who worked on the railway. Rita, in the fourth row, cries."),
          s("Poi i professori fanno tre domande, e Karim risponde a tutte.", "Then the professors ask three questions, and Karim answers them all."),
        ],
        [
          s("Alla fine il presidente si alza: \"Karim, la proclamo dottore in ingegneria, con centodieci e lode!\"", "At the end the chair stands up: \"Karim, I declare you a graduate in engineering, with full marks and honours!\""),
          s("Tutti applaudono. Giulia mette sulla testa di Karim la corona d'alloro, e gli amici cantano: \"Dottore, dottore!\"", "Everyone claps. Giulia puts the laurel crown on Karim's head, and his friends sing: \"Dottore, dottore!\""),
          s("Youssef abbraccia il figlio e dice solo: \"Che bel giorno.\"", "Youssef hugs his son and says only: \"What a beautiful day.\""),
        ],
      ],
      tasks: [
        order("Put it in order.", "Karim presents his thesis", "The professors ask questions", "The chair declares him a graduate", "Giulia puts the crown on his head"),
        mc("Who gave Karim the tie?", ["Davide", "His father", "Giulia"], 0),
        tf("Rita piange perché Karim parla di Gino.", "Rita cries because Karim talks about Gino.", true),
        mc("What do his friends sing?", ["\"Dottore, dottore!\"", "\"Tanti auguri!\"", "\"Bravo, Karim!\""], 0),
      ],
    },
    {
      id: "karim-10-il-papiro",
      level: "A2",
      title: "Il papiro",
      titleTranslation: "The papiro",
      grammar: ["molto-tanto-troppo", "quello-bello", "tutto"],
      paragraphs: [
        [
          s("La festa è al Bar Margherita. Marco ha preparato tantissimo: tante lasagne, molti dolci e troppe bottiglie di spumante.", "The party is at Bar Margherita. Marco has made a huge amount: lots of lasagne, many cakes and too many bottles of sparkling wine."),
          s("Anna, la mamma di Karim, porta i confetti rossi: per la laurea i confetti sono rossi, per il matrimonio sono bianchi.", "Anna, Karim's mum, brings red sugared almonds: for a graduation they're red, for a wedding they're white."),
        ],
        [
          s("Poi arriva il momento del papiro. È un grande foglio con un disegno di Karim e una poesia piena di scherzi sulla sua vita da studente.", "Then comes the moment of the papiro. It's a big sheet of paper with a drawing of Karim and a poem full of jokes about his life as a student."),
          s("Karim deve leggerlo ad alta voce, in piedi su una sedia. Tutto il bar ride, e la zia Fatima fa cento foto.", "Karim has to read it out loud, standing on a chair. The whole bar laughs, and Aunt Fatima takes a hundred photos."),
        ],
        [
          s("\"Ti ricordi quel ragazzo che arrivava sempre tardi al bar?\" dice Rita a Emma. \"Adesso è dottore!\"", "\"Do you remember that boy who was always late to the bar?\" Rita says to Emma. \"Now he's a graduate!\""),
          s("A mezzanotte Karim è stanco ma felice. \"Grazie a tutti\", dice. \"Siete la mia seconda famiglia.\"", "At midnight Karim is tired but happy. \"Thank you, everyone,\" he says. \"You're my second family.\""),
        ],
      ],
      tasks: [
        mc("What colour are graduation confetti?", ["Red", "White", "Blue"], 0),
        tf("Karim legge il papiro al tavolo.", "Karim reads the papiro at the table.", false),
        mc("What is on the papiro?", ["A drawing of Karim and a poem full of jokes", "His marks", "A photo of his family"], 0),
        tf("Per Karim, gli amici del Pratello sono una seconda famiglia.", "For Karim, his friends from the Pratello are a second family.", true),
      ],
    },
  ],
  sequence: [
    "karim-8-la-tesi", "il-messaggio-di-anna", "molto-tanto-troppo",
    "karim-9-la-proclamazione", "quello-bello", "la-corona-d-alloro",
    "karim-10-il-papiro", "tutto",
    "write", "words", "check",
  ],
  listening: [
    {
      id: "il-messaggio-di-anna",
      level: "A2",
      title: "Il messaggio della mamma",
      titleTranslation: "Mum's message",
      kind: "voicemail",
      situation: "Karim's mum leaves him a voice message the day before his graduation.",
      grammar: ["molto-tanto-troppo", "tutto"],
      lines: [
        line("Anna", "Karim, sono la mamma. Siamo sul treno.", "Karim, it's Mum. We're on the train."),
        line("Anna", "Arriviamo alle sei, tutti e tre: io, papà e la zia Fatima.", "We arrive at six, all three of us: me, Dad and Aunt Fatima."),
        line("Anna", "Papà ha comprato troppi regali, come sempre.", "Dad has bought too many presents, as always."),
        line("Anna", "La zia è molto emozionata: è la prima laurea della famiglia!", "Your aunt is very excited: it's the first degree in the family!"),
        line("Anna", "Stasera mangia qualcosa e dormi, mi raccomando.", "Tonight eat something and get some sleep, please."),
      ],
      gist: { prompt: "Why is Anna calling?", options: ["To say they're on their way", "To say they can't come", "To ask about the thesis"], answer: 0 },
      details: [
        { prompt: "Who is coming?", options: ["Mum, Dad and Aunt Fatima", "Only Mum", "Mum and Dad"], answer: 0 },
        { prompt: "Why is the aunt excited?", options: ["It's the first degree in the family", "It's her first time in Italy", "It's her birthday"], answer: 0 },
      ],
      tasks: [
        tf("Il papà di Karim ha comprato pochi regali.", "Karim's dad has bought few presents.", false),
        heard(2, ["troppi", "tanti", "molti"], 0),
        gaps(3, "molto", "emozionata"),
      ],
      dictation: [1, 4],
    },
    {
      id: "la-corona-d-alloro",
      level: "A2",
      title: "La corona d'alloro",
      titleTranslation: "The laurel crown",
      kind: "dialogue",
      situation: "Giulia buys a laurel crown at the florist's.",
      grammar: ["quello-bello"],
      lines: [
        line("Fioraio", "Buongiorno! Cosa desidera?", "Good morning! What would you like?"),
        line("Giulia", "Una corona d'alloro, per una laurea.", "A laurel crown, for a graduation."),
        line("Fioraio", "Questa piccola o quella grande?", "This small one or that big one?"),
        line("Giulia", "Quella grande. E posso avere anche quei nastri rossi?", "The big one. And can I have those red ribbons too?"),
        line("Fioraio", "Certo. Che bella idea! Per chi è?", "Of course. What a nice idea! Who's it for?"),
        line("Giulia", "Per un amico. Domani diventa dottore in ingegneria.", "For a friend. Tomorrow he graduates in engineering."),
        line("Fioraio", "Allora tanti auguri al dottore!", "Then congratulations to the doctor!"),
      ],
      gist: { prompt: "What does Giulia buy?", options: ["A laurel crown with red ribbons", "Red roses", "A plant"], answer: 0 },
      details: [
        { prompt: "Which crown does she choose?", options: ["The big one", "The small one", "Neither"], answer: 0 },
        { prompt: "When is the graduation?", options: ["Tomorrow", "Today", "Next week"], answer: 0 },
      ],
      tasks: [
        tf("Giulia sceglie la corona piccola.", "Giulia chooses the small crown.", false),
        heard(3, ["quei", "quelli", "questi"], 0),
        gaps(4, "bella", "idea"),
      ],
      dictation: [3, 6],
    },
  ],
  writing: [
    a2({
      id: "w-una-bella-festa",
      title: "Una bella festa",
      titleTranslation: "A great party",
      form: "story",
      situation: "Describe a party or celebration you went to.",
      points: [
        pf("Say whose party it was", "Era la festa di … .", "festa"),
        pf("Say who came, with tutti or tutta", "C'erano tutti … .", "tutti", "tutta", "tutto"),
        pf("Say how much there was, with tanto or troppo", "C'era tanto … / C'erano troppi … .", "tanto", "tanta", "tanti", "tante", "troppo", "troppa", "troppi", "troppe"),
        pf("Say what it was like, with bello", "È stata una bella … .", "bella", "bello", "bel"),
      ],
      model:
        "Sabato era la festa di laurea di mia cugina. C'erano tutti gli zii, i cugini e tutti i suoi amici. C'era tanto cibo e troppi dolci! Abbiamo cantato e ballato fino a mezzanotte. È stata una bella festa.",
    }),
    a2({
      id: "w-auguri-dottore",
      title: "Auguri, dottore!",
      titleTranslation: "Congratulations, doctor!",
      form: "message",
      situation: "A friend has just graduated. Write them a card.",
      points: [
        pf("Congratulate them", "Tanti auguri, … !", "auguri"),
        pf("Say something nice about the day", "Che bel … ! / Che bella … !", "bel", "bella"),
        pf("Say what you remember about them", "Mi ricordo quel … / quella … .", "quel", "quella", "quei", "quelle"),
        pf("Say what comes next", "Adesso … .", "adesso"),
      ],
      model:
        "Tanti auguri, dottore! Che bel giorno! Mi ricordo quel primo esame: eri così nervoso. Adesso sei ingegnere. Siamo molto orgogliosi di te!",
    }),
  ],
  checkpoint: {
    title: "Il giorno dopo",
    titleTranslation: "The day after",
    text: [
      [
        s("Il giorno dopo la laurea, Karim dorme fino a mezzogiorno. Sul tavolo ci sono ancora la corona, quel papiro terribile e tanti confetti rossi.", "The day after the graduation, Karim sleeps until midday. On the table there are still the crown, that terrible papiro and lots of red confetti."),
        s("Scrive un messaggio a tutti: \"Grazie per quella bella festa! Adesso però devo cercare lavoro.\"", "He writes a message to everyone: \"Thanks for that great party! Now, though, I need to look for a job.\""),
        s("Due minuti dopo risponde Davide: \"Dottore, prima il caffè!\"", "Two minutes later Davide answers: \"Doctor, coffee first!\""),
      ],
    ],
    textTasks: [
      tf("Karim si alza presto il giorno dopo.", "Karim gets up early the next day.", false),
      mc("What does Karim need to do now?", ["Look for a job", "Write another thesis", "Go back to Turin"], 0),
      mc("What does Davide say?", ["Coffee first", "Congratulations", "See you tonight"], 0),
    ],
    listening: {
      situation: "Lin leaves Karim a message.",
      lines: [
        line("Lin", "Karim, sono Lin. Tanti auguri, dottore!", "Karim, it's Lin. Congratulations, doctor!"),
        line("Lin", "Il nonno Wei ha un regalo per te: tutti i ravioli che vuoi, per un mese.", "Grandpa Wei has a present for you: all the dumplings you want, for a month."),
        line("Lin", "Passa al negozio quando vuoi. Ma non troppo presto: il nonno dorme!", "Come by the shop whenever you like. But not too early: Grandpa's asleep!"),
      ],
      questions: [
        { prompt: "What is Wei's present?", options: ["All the dumplings Karim wants for a month", "A new suit", "A book"], answer: 0 },
        { prompt: "When shouldn't Karim come?", options: ["Too early", "In the evening", "On Sunday"], answer: 0 },
      ],
    },
    write: {
      situation: "Write to Karim to congratulate him.",
      points: [
        { prompt: "Congratulate him", frame: "Tanti auguri, … !" },
        { prompt: "Say what you liked about the party", frame: "Che bella … !" },
        { prompt: "Say what everyone thinks", frame: "Tutti … ." },
      ],
      model: "Tanti auguri, dottore! Che bella festa! Tutti dicono che il tuo papiro era il più divertente.",
      modelTranslation: "Congratulations, doctor! What a great party! Everyone says your papiro was the funniest.",
    },
  },
};
