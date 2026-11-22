import type { Unit } from "@/core/content";
import { a2, gaps, heard, line, mc, order, pf, s, tf } from "./helpers";

/**
 * A2 unit 3: plans. The futuro semplice, the condizionale (advice, wishes,
 * polite requests), stare + gerundio. Lead: Emma, whose Italian course ends
 * in June: go home to Dublin, or stay? Everyone has an opinion. Culture:
 * looking for work in Italy, giving advice Italian-style, the weather forecast.
 */
export const progetti: Unit = {
  id: "it-a2-progetti",
  level: "A2",
  title: "Progetti",
  titleTranslation: "Plans",
  look: { motif: "sun", glaze: "cobalt" },
  canDo: [
    "Talk about plans and make guesses: a giugno tornerò, sarà stanco",
    "Give advice and say what you'd like: al posto tuo resterei, vorrei restare",
    "Ask for things politely: potrei venire giovedì?",
    "Say what someone is doing right now: sto scrivendo",
  ],
  story: {
    id: "emma-resta",
    title: "Emma resta?",
    titleTranslation: "Is Emma staying?",
    intro:
      "The Italian course ends in June. Kenji will go back to Japan, Ingrid will travel round Sicily. And Emma? Dublin, or Bologna? At Bar Margherita everyone has advice.",
  },
  texts: [
    {
      id: "emma-5-il-corso-finisce",
      level: "A2",
      title: "Il corso finisce",
      titleTranslation: "The course is ending",
      grammar: ["futuro", "dates"],
      paragraphs: [
        [
          s("È maggio. L'ultima lezione del corso sarà il trenta giugno, e Lucia fa una domanda alla classe: \"Cosa farete dopo il corso?\"", "It's May. The last lesson of the course will be on the thirtieth of June, and Lucia asks the class a question: \"What will you do after the course?\""),
          s("Kenji risponde per primo: \"Io tornerò a Tokyo. Lavorerò di nuovo in banca, ma cucinerò italiano tutte le sere!\"", "Kenji answers first: \"I'll go back to Tokyo. I'll work at the bank again, but I'll cook Italian every evening!\""),
        ],
        [
          s("\"Io farò un viaggio in Sicilia\", dice Ingrid. \"Partirò a luglio con mia sorella. Prenderemo il treno fino a Palermo.\"", "\"I'll take a trip to Sicily,\" says Ingrid. \"I'll leave in July with my sister. We'll take the train all the way to Palermo.\""),
          s("Fernanda vuole restare a Bologna, dove abita già da due anni: \"Mi iscriverò all'università. Studierò medicina, se tutto va bene.\"", "Fernanda wants to stay in Bologna, where she's already lived for two years: \"I'll enrol at the university. I'll study medicine, if all goes well.\""),
        ],
        [
          s("\"E tu, Emma?\" chiede Lucia. Emma guarda fuori dalla finestra.", "\"And you, Emma?\" asks Lucia. Emma looks out of the window."),
          s("\"Non lo so ancora. La mia famiglia mi aspetta a Dublino. Ma qui ho una casa, gli amici, il bar…\"", "\"I don't know yet. My family is waiting for me in Dublin. But here I've got a home, friends, the bar…\""),
          s("\"Ci penserai con calma\", sorride Lucia. \"Avrai tempo fino a giugno.\"", "\"You'll think about it calmly,\" Lucia smiles. \"You'll have time until June.\""),
        ],
      ],
      tasks: [
        mc("What will Kenji do?", ["Go back to Tokyo and work at the bank", "Travel round Sicily", "Study medicine"], 0),
        tf("Ingrid partirà da sola.", "Ingrid will leave on her own.", false),
        mc("What does Fernanda want to do?", ["Enrol at university in Bologna", "Go home", "Open a restaurant"], 0),
        tf("Emma sa già cosa farà.", "Emma already knows what she'll do.", false),
      ],
    },
    {
      id: "emma-6-al-posto-tuo",
      level: "A2",
      title: "Al posto tuo…",
      titleTranslation: "If I were you…",
      grammar: ["condizionale", "vorrei", "modal-verbs"],
      paragraphs: [
        [
          s("Al Bar Margherita Emma racconta tutto: il corso finisce, la famiglia la aspetta, ma lei vuole restare. Tutti hanno un consiglio.", "At Bar Margherita Emma tells them everything: the course is ending, her family is waiting for her, but she wants to stay. Everyone has a piece of advice."),
          s("\"Al posto tuo io resterei\", dice subito Rita. \"Bologna è la città più bella del mondo.\"", "\"If I were you I'd stay,\" Rita says straight away. \"Bologna is the most beautiful city in the world.\""),
          s("\"Dovresti insegnare inglese\", dice Marco. \"Le scuole di lingue cercano sempre insegnanti madrelingua.\"", "\"You should teach English,\" says Marco. \"Language schools are always looking for native-speaker teachers.\""),
        ],
        [
          s("Giulia non è d'accordo: \"Potresti fare un master. Con un master troveresti un lavoro migliore.\"", "Giulia doesn't agree: \"You could do a master's. With a master's you'd find a better job.\""),
          s("Karim invece è pratico: \"Io scriverei prima un buon curriculum. In Italia senza curriculum non si fa niente.\"", "Karim, on the other hand, is practical: \"I'd write a good CV first. In Italy you get nowhere without a CV.\""),
        ],
        [
          s("Emma beve il cappuccino e pensa. \"Vorrei restare, davvero. Ma mi servirebbe un lavoro, e non vorrei pesare sui miei genitori.\"", "Emma drinks her cappuccino and thinks. \"I'd like to stay, really. But I'd need a job, and I wouldn't want to be a burden on my parents.\""),
          s("Rita le prende la mano. \"Cara, un lavoro si trova. Un posto dove sei felice, invece, è più difficile.\"", "Rita takes her hand. \"Dear, a job can be found. A place where you're happy, on the other hand, is harder.\""),
        ],
      ],
      tasks: [
        mc("What does Marco suggest?", ["Teaching English", "Doing a master's", "Going home"], 0),
        mc("What does Karim think is the first step?", ["Writing a good CV", "Asking Rita", "Learning Bolognese"], 0),
        tf("Emma vorrebbe restare a Bologna.", "Emma would like to stay in Bologna.", true),
        mc("What does Rita mean at the end?", ["A place where you're happy is rarer than a job", "Jobs are hard to find", "Emma should go back to Dublin"], 0),
      ],
    },
    {
      id: "emma-7-cosa-stai-facendo",
      level: "A2",
      title: "Cosa stai facendo?",
      titleTranslation: "What are you doing?",
      grammar: ["stare-gerundio", "futuro"],
      paragraphs: [
        [
          s("Sabato sera Emma vuole andare al cinema. Chiama Giulia: \"Cosa stai facendo?\" \"Sto cucinando per i miei, mi dispiace!\"", "On Saturday evening Emma wants to go to the cinema. She calls Giulia: \"What are you doing?\" \"I'm cooking for my parents, sorry!\""),
          s("Prova con Karim. \"Sto studiando, ho l'esame lunedì.\" Marco sta lavorando al bar, e Ana sta dormendo: è stanchissima dopo il trasloco.", "She tries Karim. \"I'm studying, I've got an exam on Monday.\" Marco is working at the bar, and Ana is asleep: she's exhausted after the move."),
        ],
        [
          s("Allora Emma resta a casa. Apre il computer e comincia a scrivere il curriculum, in italiano.", "So Emma stays at home. She opens her computer and starts writing her CV, in Italian."),
          s("Alle dieci Rita bussa alla porta. \"Cosa stai facendo, cara? Ho visto la luce.\" \"Sto scrivendo il curriculum. È difficilissimo!\"", "At ten Rita knocks at the door. \"What are you doing, dear? I saw the light.\" \"I'm writing my CV. It's really difficult!\""),
        ],
        [
          s("Rita si siede e legge. \"Qui manca una cosa: parli tre lingue. Scrivilo!\"", "Rita sits down and reads. \"Something's missing here: you speak three languages. Write it down!\""),
          s("Proprio in quel momento arriva un messaggio di Marco: \"La scuola di lingue in via Saragozza sta cercando un'insegnante di inglese. Ti interessa?\"", "Right at that moment a message arrives from Marco: \"The language school on Via Saragozza is looking for an English teacher. Are you interested?\""),
          s("Emma e Rita si guardano. \"Lunedì manderò il curriculum\", dice Emma.", "Emma and Rita look at each other. \"On Monday I'll send my CV,\" says Emma."),
        ],
      ],
      tasks: [
        order("Put the evening in order.", "Emma calls her friends", "Emma starts writing her CV", "Rita knocks at the door", "A message arrives from Marco"),
        tf("Karim sta studiando.", "Karim is studying.", true),
        mc("Why is Ana not answering?", ["She's asleep, exhausted after the move", "She's at the cinema", "She's working"], 0),
        mc("What's missing from Emma's CV, according to Rita?", ["That she speaks three languages", "Her address", "A photo"], 0),
      ],
    },
  ],
  sequence: [
    "emma-5-il-corso-finisce", "le-previsioni", "futuro",
    "emma-6-al-posto-tuo", "condizionale", "alla-scuola-di-lingue",
    "emma-7-cosa-stai-facendo", "stare-gerundio",
    "write", "words", "check",
  ],
  listening: [
    {
      id: "le-previsioni",
      level: "A2",
      title: "Le previsioni del tempo",
      titleTranslation: "The weather forecast",
      kind: "announcement",
      situation: "The weather forecast on the radio, Friday evening.",
      grammar: ["futuro"],
      lines: [
        line("Radio", "Ed ecco le previsioni del tempo per il fine settimana.", "And here's the weather forecast for the weekend."),
        line("Radio", "Sabato al nord il cielo sarà nuvoloso e pioverà nel pomeriggio.", "On Saturday in the north the sky will be cloudy and it will rain in the afternoon."),
        line("Radio", "Al centro e al sud ci sarà il sole, con temperature fino a ventotto gradi.", "In the centre and south it will be sunny, with temperatures up to twenty-eight degrees."),
        line("Radio", "Domenica il tempo migliorerà anche al nord.", "On Sunday the weather will improve in the north too."),
        line("Radio", "A Bologna farà caldo: porterete gli occhiali da sole, non l'ombrello!", "In Bologna it will be hot: you'll take your sunglasses, not your umbrella!"),
      ],
      gist: { prompt: "What is this?", options: ["The weekend weather forecast", "Traffic news", "An advert for sunglasses"], answer: 0 },
      details: [
        { prompt: "What will Saturday be like in the north?", options: ["Cloudy, with rain in the afternoon", "Sunny and hot", "Snowy"], answer: 0 },
        { prompt: "And Sunday in Bologna?", options: ["Hot", "Rainy", "Cold"], answer: 0 },
      ],
      tasks: [
        tf("Domenica pioverà a Bologna.", "On Sunday it will rain in Bologna.", false),
        heard(2, ["ventotto", "diciotto", "trentotto"], 0),
        gaps(3, "migliorerà"),
      ],
      dictation: [1, 3],
    },
    {
      id: "alla-scuola-di-lingue",
      level: "A2",
      title: "Alla scuola di lingue",
      titleTranslation: "At the language school",
      kind: "dialogue",
      situation: "Emma calls the language school about the job.",
      grammar: ["condizionale", "vorrei"],
      lines: [
        line("Segretaria", "Scuola Babele, buongiorno.", "Babele school, good morning."),
        line("Emma", "Buongiorno. Vorrei sapere se cercate ancora un'insegnante di inglese.", "Good morning. I'd like to know if you're still looking for an English teacher."),
        line("Segretaria", "Sì. Potrebbe mandarci il curriculum?", "Yes. Could you send us your CV?"),
        line("Emma", "L'ho mandato ieri. Potrei passare a parlare con il direttore?", "I sent it yesterday. Could I come by and talk to the director?"),
        line("Segretaria", "Certo. Giovedì alle cinque le andrebbe bene?", "Of course. Would Thursday at five suit you?"),
        line("Emma", "Benissimo. Grazie mille, a giovedì.", "Very good. Thank you so much, see you on Thursday."),
      ],
      gist: { prompt: "What's the call about?", options: ["Emma asks about the English teacher job", "Emma enrols on a course", "Emma cancels a lesson"], answer: 0 },
      details: [
        { prompt: "What did Emma do yesterday?", options: ["She sent her CV", "She met the director", "She had a lesson"], answer: 0 },
        { prompt: "When is the meeting?", options: ["Thursday at five", "Tuesday at five", "Thursday at nine"], answer: 0 },
      ],
      tasks: [
        tf("La scuola non cerca più insegnanti.", "The school isn't looking for teachers any more.", false),
        heard(4, ["giovedì", "venerdì", "martedì"], 0),
        gaps(3, "passare", "direttore"),
      ],
      dictation: [1, 5],
    },
  ],
  writing: [
    a2({
      id: "w-i-miei-progetti",
      title: "I miei progetti",
      titleTranslation: "My plans",
      form: "description",
      situation: "Lucia asks the class: what will you do next year?",
      points: [
        pf("Say where you'll live", "L'anno prossimo abiterò … .", "abiterò"),
        pf("Say what you'll do for work or study", "Lavorerò / Studierò … .", "lavorerò", "studierò"),
        pf("Say a trip you'll take", "In estate andrò … .", "andrò"),
        pf("Say something you'd like to learn", "Vorrei imparare … .", "vorrei"),
        pf("Say how you'll practise Italian", "Per l'italiano … .", "italiano"),
      ],
      model:
        "L'anno prossimo abiterò ancora a Leiden. Studierò per il master e lavorerò il sabato in un bar. In estate andrò in Portogallo con due amici. Vorrei imparare a fare il pane. Per l'italiano guarderò un film italiano ogni settimana.",
    }),
    a2({
      id: "w-un-consiglio",
      title: "Un consiglio",
      titleTranslation: "A piece of advice",
      form: "message",
      situation: "A friend doesn't know whether to stay abroad or go home. Write them a message with your advice.",
      points: [
        pf("Say you understand", "Ti capisco: … .", "capisco"),
        pf("Say what you'd do", "Al posto tuo … .", "posto"),
        pf("Say what they should do", "Dovresti … .", "dovresti"),
        pf("Offer help", "Potrei … .", "potrei"),
      ],
      model:
        "Ti capisco: è difficile. Al posto tuo resterei ancora un anno. Dovresti parlare con la tua famiglia e scrivere un buon curriculum. Potrei leggere il tuo curriculum io, se vuoi!",
    }),
  ],
  checkpoint: {
    title: "Il colloquio",
    titleTranslation: "The interview",
    text: [
      [
        s("Giovedì alle cinque Emma è alla scuola Babele. Il direttore, il signor Neri, legge il curriculum.", "On Thursday at five Emma is at the Babele school. The director, Mr Neri, reads her CV."),
        s("\"Parla tre lingue? Molto bene. Potrebbe cominciare a settembre? Avrebbe tre classi, la sera.\"", "\"You speak three languages? Very good. Could you start in September? You'd have three classes, in the evening.\""),
        s("Emma sorride. \"Sì, potrei. Anzi, vorrei!\" Quella sera al bar tutti festeggiano. \"Allora resterai!\" dice Rita.", "Emma smiles. \"Yes, I could. In fact, I'd like to!\" That evening at the bar everyone celebrates. \"So you'll stay!\" says Rita."),
      ],
    ],
    textTasks: [
      tf("Emma comincerà a settembre.", "Emma will start in September.", true),
      mc("When will her classes be?", ["In the evening", "In the morning", "On Saturdays"], 0),
      mc("What does Rita say?", ["So you'll stay!", "Go back home!", "Be careful!"], 0),
    ],
    listening: {
      situation: "Emma leaves her mum a voice message.",
      lines: [
        line("Emma", "Mamma, ciao! Ho una notizia.", "Mum, hi! I've got some news."),
        line("Emma", "Da settembre insegnerò inglese in una scuola di Bologna.", "From September I'll be teaching English at a school in Bologna."),
        line("Emma", "Quindi resterò qui un altro anno.", "So I'll stay here another year."),
        line("Emma", "Ma ad agosto verrò a Dublino per due settimane, promesso!", "But in August I'll come to Dublin for two weeks, I promise!"),
      ],
      questions: [
        { prompt: "What's Emma's news?", options: ["She'll teach English in Bologna", "She's coming home for good", "She's starting a master's"], answer: 0 },
        { prompt: "When will she visit Dublin?", options: ["In August", "At Christmas", "In September"], answer: 0 },
      ],
    },
    write: {
      situation: "Congratulate Emma and tell her one thing she should do in her new job.",
      points: [
        { prompt: "Congratulate her", frame: "Brava, Emma! … ." },
        { prompt: "Give her advice", frame: "Dovresti … ." },
        { prompt: "Say goodbye", frame: "A presto!" },
      ],
      model: "Brava, Emma! Sono felice per te. Dovresti fare una festa con i tuoi studenti il primo giorno. A presto!",
      modelTranslation: "Well done, Emma! I'm happy for you. You should have a party with your students on the first day. See you soon!",
    },
  },
};
