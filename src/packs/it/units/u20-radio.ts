import type { Unit } from "@/core/content";
import { a2, gaps, heard, line, mc, order, pf, s, tf } from "./helpers";

/**
 * A2 unit 8: the neighbourhood radio. Linking words (però, invece, quindi,
 * infatti, anche se), the passive (è stato inaugurato, viene chiuso),
 * bisogna and è importante + infinitive. Lead: Karim, who starts Radio
 * Pratello with Davide and Nicolò. Culture: local news, advice for new
 * students, radio phone-ins.
 */
export const radio: Unit = {
  id: "it-a2-radio",
  level: "A2",
  title: "Radio Pratello",
  titleTranslation: "Radio Pratello",
  look: { motif: "sun", glaze: "copper" },
  canDo: [
    "Link your ideas: però, invece, quindi, infatti, anche se",
    "Understand local news in the passive: è stato inaugurato, viene chiuso",
    "Give advice and rules: bisogna…, è importante…",
    "Follow a short radio programme",
  ],
  story: {
    id: "karim-alla-radio",
    title: "Karim alla radio",
    titleTranslation: "Karim on the radio",
    intro:
      "November. The neighbourhood is starting its own little radio and needs a presenter, and Karim says yes. Davide makes the posters, Nicolò from Emma's class turns out to be a sound genius, and every Thursday at nine Via del Pratello is on air.",
  },
  texts: [
    {
      id: "karim-5-in-onda",
      level: "A2",
      title: "In onda!",
      titleTranslation: "On air!",
      grammar: ["connettivi", "passato-prossimo"],
      paragraphs: [
        [
          s("Radio Pratello è piccola: ha uno studio di dieci metri quadrati, due microfoni e un computer vecchio. Però ha tante idee.", "Radio Pratello is small: it has a ten-square-metre studio, two microphones and an old computer. But it has lots of ideas."),
          s("Karim non ha mai parlato alla radio, quindi è molto nervoso. Davide invece è tranquillo: \"Parla come parli al bar. Infatti la radio è un bar senza caffè.\"", "Karim has never spoken on the radio, so he's very nervous. Davide, on the other hand, is calm: \"Talk the way you talk at the bar. In fact the radio is a bar without coffee.\""),
        ],
        [
          s("Il tecnico è Nicolò, lo studente silenzioso di Emma. Non parla molto, ma sa fare tutto con i cavi e la musica.", "The sound technician is Nicolò, Emma's quiet student. He doesn't talk much, but he can do anything with cables and music."),
          s("Giovedì alle nove la luce rossa si accende. Anche se ha le mani fredde, Karim comincia: \"Buonasera, Bologna! Questa è Radio Pratello.\"", "On Thursday at nine the red light comes on. Even though his hands are cold, Karim begins: \"Good evening, Bologna! This is Radio Pratello.\""),
        ],
        [
          s("Il primo ospite è Rita. Doveva parlare cinque minuti, invece parla per mezz'ora: di Gino, del Pratello di una volta, del giardino.", "The first guest is Rita. She was meant to speak for five minutes; instead she talks for half an hour: about Gino, the Pratello of the old days, the garden."),
          s("Alla fine arrivano dodici messaggi di ascoltatori. Non sono molti, però per una radio di quartiere è un successo.", "At the end twelve messages arrive from listeners. That's not many, but for a neighbourhood radio it's a success."),
        ],
      ],
      tasks: [
        mc("Why is Karim nervous?", ["He's never spoken on the radio", "The computer is broken", "Rita is late"], 0),
        tf("Nicolò parla molto.", "Nicolò talks a lot.", false),
        mc("How long does Rita talk?", ["Half an hour", "Five minutes", "An hour"], 0),
        tf("Dodici messaggi sono un successo per Radio Pratello.", "Twelve messages are a success for Radio Pratello.", true),
      ],
    },
    {
      id: "karim-6-il-notiziario",
      level: "A2",
      title: "Il notiziario del quartiere",
      titleTranslation: "The neighbourhood news",
      grammar: ["passivo", "connettivi"],
      paragraphs: [
        [
          s("Ogni giovedì Karim legge le notizie del quartiere. Le scrive con Lin, che sa sempre tutto.", "Every Thursday Karim reads the neighbourhood news. He writes it with Lin, who always knows everything."),
          s("\"Prima notizia: il nuovo campo da basket del giardino è stato inaugurato sabato dalla sindaca. Sono stati piantati anche dodici alberi.\"", "\"First item: the new basketball court in the garden was opened on Saturday by the mayor. Twelve trees have been planted too.\""),
        ],
        [
          s("\"Seconda notizia: da lunedì la strada davanti alla scuola viene chiusa alle macchine dalle otto alle nove. Quindi, genitori, accompagnate i bambini a piedi!\"", "\"Second item: from Monday the street in front of the school will be closed to cars from eight to nine. So, parents, walk your children to school!\""),
          s("\"Terza notizia: la vecchia bottega del calzolaio è stata comprata da un giovane artigiano. Infatti tra un mese il quartiere avrà di nuovo un calzolaio.\"", "\"Third item: the old shoemaker's workshop has been bought by a young craftsman. In fact, in a month's time the neighbourhood will have a shoemaker again.\""),
        ],
        [
          s("\"E infine: la coppa della squadra di Davide è stata rubata dal Bar Margherita!\" Silenzio in studio.", "\"And finally: the cup of Davide's team has been stolen from Bar Margherita!\" Silence in the studio."),
          s("\"Anzi no\", ride Karim. \"È stata presa da Marco per pulirla. Falso allarme, Bologna!\"", "\"Actually no,\" laughs Karim. \"It was taken by Marco to clean it. False alarm, Bologna!\""),
          s("Nicolò mette una canzone, e in studio tutti ridono per cinque minuti.", "Nicolò puts on a song, and in the studio everyone laughs for five minutes."),
        ],
      ],
      tasks: [
        order("Put the news in order.", "The basketball court was opened", "The school street closes to cars", "The shoemaker's workshop was bought", "The cup was 'stolen'"),
        mc("Who opened the basketball court?", ["The mayor", "Rita", "Lin"], 0),
        tf("La coppa è stata rubata davvero.", "The cup was really stolen.", false),
        mc("What will the neighbourhood have again?", ["A shoemaker", "A cinema", "A market"], 0),
      ],
    },
    {
      id: "karim-7-consigli-per-studenti",
      level: "A2",
      title: "Consigli per nuovi studenti",
      titleTranslation: "Advice for new students",
      grammar: ["bisogna", "si-impersonale", "connettivi"],
      paragraphs: [
        [
          s("La terza puntata è dedicata agli studenti che arrivano a Bologna. Karim invita Ana ed Emma, che conoscono bene il problema.", "The third episode is about students who arrive in Bologna. Karim invites Ana and Emma, who know the problem well."),
          s("\"Per trovare casa bisogna cominciare presto\", dice Ana. \"A settembre è quasi impossibile. È importante leggere bene il contratto, anche se è lungo e noioso.\"", "\"To find a place you need to start early,\" says Ana. \"In September it's almost impossible. It's important to read the contract carefully, even if it's long and boring.\""),
        ],
        [
          s("Emma parla della lingua: \"Non bisogna avere paura di sbagliare. Io sbagliavo sempre, però la gente mi capiva lo stesso.\"", "Emma talks about the language: \"You mustn't be afraid of making mistakes. I made mistakes all the time, but people understood me anyway.\""),
          s("\"È utile anche fare amicizia con i vicini\", aggiunge. \"Infatti io ho imparato più italiano al bar che a lezione!\"", "\"It's also useful to make friends with the neighbours,\" she adds. \"In fact I learnt more Italian at the bar than in class!\""),
        ],
        [
          s("Poi telefona un ascoltatore: un ragazzo spagnolo, appena arrivato. \"Cosa bisogna fare il primo giorno?\"", "Then a listener calls: a Spanish boy who's just arrived. \"What should you do on the first day?\""),
          s("Karim non ha dubbi: \"Bisogna prendere un caffè al Bar Margherita. Lì si comincia a conoscere Bologna.\"", "Karim has no doubts: \"You need to have a coffee at Bar Margherita. That's where you start to get to know Bologna.\""),
          s("Il ragazzo ride: \"Perfetto, ci vado subito!\"", "The boy laughs: \"Perfect, I'm going right now!\""),
        ],
      ],
      tasks: [
        mc("What's Ana's advice for finding a place?", ["Start early and read the contract", "Wait until September", "Ask Rita"], 0),
        tf("Emma ha imparato più italiano a lezione che al bar.", "Emma learnt more Italian in class than at the bar.", false),
        mc("Who calls the radio?", ["A Spanish boy who's just arrived", "Rita", "The mayor"], 0),
        tf("Secondo Emma, bisogna avere paura di sbagliare.", "According to Emma, you should be afraid of making mistakes.", false),
      ],
    },
  ],
  sequence: [
    "karim-5-in-onda", "la-pubblicita", "connettivi",
    "karim-6-il-notiziario", "passivo", "intervista-a-wei",
    "karim-7-consigli-per-studenti", "bisogna",
    "write", "words", "check",
  ],
  listening: [
    {
      id: "la-pubblicita",
      level: "A2",
      title: "La pubblicità",
      titleTranslation: "The advert",
      kind: "announcement",
      situation: "An advert on Radio Pratello, read by Davide.",
      grammar: ["bisogna", "connettivi"],
      lines: [
        line("Davide", "Hai fame, ma non hai tempo per cucinare?", "Are you hungry, but haven't got time to cook?"),
        line("Davide", "Non bisogna andare lontano: c'è il negozio di Lin, in via del Pratello.", "You don't need to go far: there's Lin's shop, on Via del Pratello."),
        line("Davide", "È piccolo, però c'è tutto: frutta, pane, e i ravioli del nonno Wei.", "It's small, but it has everything: fruit, bread, and Grandpa Wei's dumplings."),
        line("Davide", "Infatti, chi li prova una volta, torna sempre.", "In fact, anyone who tries them once always comes back."),
        line("Davide", "Aperto tutti i giorni, anche la domenica!", "Open every day, Sundays too!"),
      ],
      gist: { prompt: "What is this?", options: ["An advert for Lin's shop", "A recipe", "The news"], answer: 0 },
      details: [
        { prompt: "Who makes the dumplings?", options: ["Grandpa Wei", "Lin", "Davide"], answer: 0 },
        { prompt: "When is the shop open?", options: ["Every day", "Monday to Friday", "Only in the morning"], answer: 0 },
      ],
      tasks: [
        tf("Il negozio è chiuso la domenica.", "The shop is closed on Sundays.", false),
        heard(2, ["ravioli", "raviolini", "ragù"], 0),
        gaps(3, "prova", "torna"),
      ],
      dictation: [1, 3],
    },
    {
      id: "intervista-a-wei",
      level: "A2",
      title: "Intervista a Wei",
      titleTranslation: "An interview with Wei",
      kind: "dialogue",
      situation: "Karim interviews Grandpa Wei about his shop.",
      grammar: ["passivo", "da-tempo"],
      lines: [
        line("Karim", "Signor Wei, quando è stato aperto il negozio?", "Mr Wei, when was the shop opened?"),
        line("Wei", "È stato aperto trent'anni fa, da me e da mia moglie.", "It was opened thirty years ago, by me and my wife."),
        line("Karim", "E il nome? Chi l'ha scelto?", "And the name? Who chose it?"),
        line("Wei", "È stato scelto da mia nipote Lin. Aveva tre anni e voleva chiamarlo Il Gatto!", "It was chosen by my granddaughter Lin. She was three and wanted to call it The Cat!"),
        line("Karim", "E cosa è cambiato in trent'anni?", "And what has changed in thirty years?"),
        line("Wei", "Tutto, però i clienti sono gli stessi. Anzi, ora sono anche amici.", "Everything, but the customers are the same. Actually, now they're friends too."),
      ],
      gist: { prompt: "What's the interview about?", options: ["The history of Wei's shop", "Wei's health", "The garden"], answer: 0 },
      details: [
        { prompt: "When was the shop opened?", options: ["Thirty years ago", "Ten years ago", "Last year"], answer: 0 },
        { prompt: "Who chose the name?", options: ["Lin, aged three", "Wei's wife", "Karim"], answer: 0 },
      ],
      tasks: [
        tf("Il negozio è stato aperto da Wei e da sua moglie.", "The shop was opened by Wei and his wife.", true),
        heard(5, ["stessi", "tessuti", "stessa"], 0),
        gaps(3, "scelto", "nipote"),
      ],
      dictation: [1, 5],
    },
  ],
  writing: [
    a2({
      id: "w-una-notizia",
      title: "Una notizia",
      titleTranslation: "A news item",
      form: "story",
      situation: "Write a short news item about something that happened in your street or town.",
      points: [
        pf("Say what was done, in the passive", "… è stato / è stata … .", "stato", "stata"),
        pf("Say by whom", "… da … .", "da"),
        pf("Add a detail with infatti", "Infatti … .", "infatti"),
        pf("Add a contrast with però", "Però … .", "però"),
      ],
      model:
        "Ieri in via del Pratello è stato aperto un nuovo bar. È stato aperto da due studenti di Bologna. Infatti tutti i camerieri sono studenti. Il caffè è buono, però è un po' caro.",
    }),
    a2({
      id: "w-consigli",
      title: "Consigli",
      titleTranslation: "Advice",
      form: "message",
      situation: "A friend is moving to your city. Give them advice.",
      points: [
        pf("Say what they need to do first", "Bisogna … .", "bisogna"),
        pf("Say something important", "È importante … .", "importante"),
        pf("Say what they don't need to worry about", "Non bisogna … .", "non bisogna"),
        pf("Link two ideas", "… , anche se … .", "anche se"),
      ],
      model:
        "Ciao Marco! Bisogna cercare casa subito: a settembre è quasi impossibile. È importante leggere bene il contratto, anche se è lungo. Non bisogna avere paura di sbagliare: la gente è gentile!",
    }),
  ],
  checkpoint: {
    title: "Cento ascoltatori",
    titleTranslation: "A hundred listeners",
    text: [
      [
        s("Dopo un mese Radio Pratello ha cento ascoltatori ogni giovedì. Il programma è stato ascoltato anche a Torino, dalla famiglia di Karim.", "After a month Radio Pratello has a hundred listeners every Thursday. The programme has been heard in Turin too, by Karim's family."),
        s("\"Tuo padre è orgoglioso\", gli scrive la mamma. \"Però parli troppo veloce!\"", "\"Your father is proud,\" his mum writes to him. \"But you talk too fast!\""),
        s("Anche se è stanco, Karim è felice. Quindi decide: la prossima puntata sarà dedicata alle mamme che ascoltano.", "Even though he's tired, Karim is happy. So he decides: the next episode will be dedicated to the mums who listen."),
      ],
    ],
    textTasks: [
      tf("Il programma è stato ascoltato a Torino.", "The programme has been heard in Turin.", true),
      mc("What does Karim's mum say?", ["His father is proud, but Karim talks too fast", "The radio is boring", "He should study more"], 0),
      mc("Who will the next episode be dedicated to?", ["Mums who listen", "Students", "Rita"], 0),
    ],
    listening: {
      situation: "Nicolò leaves Karim a message.",
      lines: [
        line("Nicolò", "Karim, sono Nicolò.", "Karim, it's Nicolò."),
        line("Nicolò", "Giovedì non posso venire, però ho preparato tutta la musica.", "I can't come on Thursday, but I've prepared all the music."),
        line("Nicolò", "Il file è stato salvato sul computer, nella cartella Radio.", "The file has been saved on the computer, in the Radio folder."),
        line("Nicolò", "Bisogna solo premere il tasto verde. Facile!", "You just need to press the green button. Easy!"),
      ],
      questions: [
        { prompt: "Why is Nicolò calling?", options: ["He can't come, but the music is ready", "He wants to leave the radio", "The computer is broken"], answer: 0 },
        { prompt: "What does Karim need to do?", options: ["Press the green button", "Call Nicolò", "Buy new music"], answer: 0 },
      ],
    },
    write: {
      situation: "Send a message to Radio Pratello for the next episode.",
      points: [
        { prompt: "Say who you are", frame: "Ciao Radio Pratello, sono … ." },
        { prompt: "Say what you like, with però", frame: "Mi piace … , però … ." },
        { prompt: "Give some advice", frame: "Bisogna … !" },
      ],
      model: "Ciao Radio Pratello, sono Emma. Mi piace il programma, però è troppo corto! Bisogna fare due puntate alla settimana!",
      modelTranslation: "Hi Radio Pratello, it's Emma. I like the programme, but it's too short! You need to do two episodes a week!",
    },
  },
};
