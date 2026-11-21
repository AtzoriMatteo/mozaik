import type { Unit } from "@/core/content";
import { a2, gaps, heard, line, mc, order, pf, s, tf } from "./helpers";

/**
 * A2 unit 4: the neighbourhood changes. Comparatives and superlatives,
 * indirect object pronouns (mi, ti, gli, le), the relative che. Lead: Lin,
 * whose street must choose between a car park and a garden. Culture: the
 * piazzetta, neighbourhood meetings, writing to the council, signatures.
 */
export const quartiere: Unit = {
  id: "it-a2-quartiere",
  level: "A2",
  title: "Il quartiere cambia",
  titleTranslation: "The neighbourhood is changing",
  look: { motif: "laurel", glaze: "cobalt" },
  canDo: [
    "Compare things and give your opinion: è più utile di…, è meglio",
    "Say who you give, write or say something to: gli scriviamo, le diamo",
    "Join ideas with che: il giardino che vogliamo",
    "Follow a neighbourhood discussion and take part",
  ],
  story: {
    id: "la-piazzetta",
    title: "La piazzetta",
    titleTranslation: "The little square",
    intro:
      "Behind Lin's shop there's a little square with two benches and a lot of weeds. The council wants to change it: a car park, or a garden? For the first time Via del Pratello has to decide something together.",
  },
  texts: [
    {
      id: "lin-5-l-avviso",
      level: "A2",
      title: "L'avviso",
      titleTranslation: "The notice",
      grammar: ["che-relativo", "comparativi"],
      paragraphs: [
        [
          s("Una mattina sul muro del negozio di Lin c'è un avviso del Comune.", "One morning there's a notice from the council on the wall of Lin's shop."),
          s("\"La piazzetta che si trova dietro via del Pratello cambierà. I cittadini che abitano nel quartiere possono scegliere: un parcheggio o un giardino.\"", "\"The little square behind Via del Pratello will change. The residents who live in the neighbourhood can choose: a car park or a garden.\""),
        ],
        [
          s("Lin legge l'avviso due volte. La piazzetta è il posto che preferisce: ci gioca a carte con il nonno Wei la domenica.", "Lin reads the notice twice. The little square is her favourite place: she plays cards there with her grandpa Wei on Sundays."),
          s("Il nonno invece è contento: \"Un parcheggio! I clienti che vengono in macchina non trovano mai posto.\"", "Her grandpa, though, is happy: \"A car park! The customers who come by car can never find a space.\""),
          s("\"Nonno, ma un giardino è più bello di un parcheggio!\" \"Più bello, sì. Ma meno utile.\"", "\"Grandpa, but a garden is more beautiful than a car park!\" \"More beautiful, yes. But less useful.\""),
        ],
        [
          s("La sera Lin ne parla al bar. Davide è subito d'accordo con lei: \"Il quartiere ha già troppe macchine. È la via più rumorosa di Bologna!\"", "In the evening Lin talks about it at the bar. Davide agrees with her straight away: \"The neighbourhood already has too many cars. It's the noisiest street in Bologna!\""),
          s("Rita ha un'idea: \"Facciamo una riunione. Tutti quelli che abitano qui devono dire la loro.\"", "Rita has an idea: \"Let's have a meeting. Everyone who lives here has to have their say.\""),
        ],
      ],
      tasks: [
        mc("What does the notice say?", ["Residents can choose between a car park and a garden", "The shop will close", "The street will be closed to cars"], 0),
        tf("Il nonno Wei vuole un giardino.", "Grandpa Wei wants a garden.", false),
        mc("Why does Lin love the little square?", ["She plays cards there with her grandpa", "It's near the station", "There's a market"], 0),
        tf("Rita vuole fare una riunione.", "Rita wants to have a meeting.", true),
      ],
    },
    {
      id: "lin-6-la-riunione",
      level: "A2",
      title: "La riunione",
      titleTranslation: "The meeting",
      grammar: ["comparativi", "che-relativo"],
      paragraphs: [
        [
          s("Giovedì sera il Bar Margherita è pieno. Ci sono più persone che sedie, e Marco porta le sedie del cortile.", "On Thursday evening Bar Margherita is full. There are more people than chairs, and Marco brings the chairs from the courtyard."),
          s("Il primo a parlare è il signor Bassi: \"Un parcheggio costa meno di un giardino, e per i negozi è più comodo.\"", "The first to speak is Mr Bassi: \"A car park costs less than a garden, and it's more convenient for the shops.\""),
        ],
        [
          s("Poi parla Ana, che è architetta: \"Ho fatto due progetti. Il giardino è un po' più caro, ma è anche il più sano: meno rumore, più aria pulita, più ombra d'estate.\"", "Then Ana speaks, who's an architect: \"I've made two plans. The garden is a bit more expensive, but it's also the healthiest: less noise, cleaner air, more shade in summer.\""),
          s("Davide aggiunge: \"Per me un giardino senza scale è meglio di qualsiasi parcheggio. Potrei finalmente andare al parco sotto casa.\"", "Davide adds: \"For me a garden with no steps is better than any car park. I could finally go to a park right under my home.\""),
        ],
        [
          s("Alla fine parla Rita, la persona più anziana della via: \"Quando ero giovane, in quella piazzetta c'era un orto. Era il posto più allegro del quartiere.\"", "At the end Rita speaks, the oldest person in the street: \"When I was young there was a vegetable garden in that little square. It was the happiest place in the neighbourhood.\""),
          s("Votano. Ventotto per il giardino, nove per il parcheggio. Anche il nonno Wei, alla fine, alza la mano per il giardino.", "They vote. Twenty-eight for the garden, nine for the car park. Even Grandpa Wei, in the end, raises his hand for the garden."),
        ],
      ],
      tasks: [
        order("Who speaks first, and who last?", "Mr Bassi", "Ana", "Davide", "Rita"),
        mc("Why does Mr Bassi want a car park?", ["It costs less and it's convenient for shops", "It's healthier", "Rita wants one"], 0),
        tf("Il giardino costa meno del parcheggio.", "The garden costs less than the car park.", false),
        mc("How does the vote end?", ["Twenty-eight for the garden, nine for the car park", "It's a draw", "The car park wins"], 0),
      ],
    },
    {
      id: "lin-7-scriviamo-alla-sindaca",
      level: "A2",
      title: "Scriviamo alla sindaca",
      titleTranslation: "Let's write to the mayor",
      grammar: ["pronomi-indiretti", "passato-prossimo"],
      paragraphs: [
        [
          s("Il giardino ha vinto, ma il Comune deve saperlo. \"Scriviamo alla sindaca\", dice Karim. \"Le mandiamo una lettera con tutte le firme.\"", "The garden has won, but the council has to know. \"Let's write to the mayor,\" says Karim. \"We'll send her a letter with all the signatures.\""),
          s("Lin scrive la lettera, Emma le corregge l'italiano e Karim le presta la sua penna migliore.", "Lin writes the letter, Emma corrects her Italian and Karim lends her his best pen."),
        ],
        [
          s("Il nonno Wei vuole firmare per primo. Lin gli dà la penna e lui scrive il suo nome in italiano e in cinese.", "Grandpa Wei wants to sign first. Lin gives him the pen and he writes his name in Italian and in Chinese."),
          s("\"E a Rita cosa diciamo?\" chiede Emma. \"Le diciamo grazie\", risponde Lin. \"L'idea dell'orto è sua.\"", "\"And what shall we tell Rita?\" Emma asks. \"We'll tell her thank you,\" Lin answers. \"The vegetable garden idea is hers.\""),
        ],
        [
          s("Due settimane dopo arriva una risposta. La sindaca ci scrive: \"Gentili cittadini, vi ringrazio per la lettera. Il giardino si farà, e ci sarà anche un piccolo orto.\"", "Two weeks later an answer arrives. The mayor writes to us: \"Dear residents, I thank you for your letter. The garden will be made, and there'll be a little vegetable garden too.\""),
          s("Lin corre dal nonno. \"Nonno, ti leggo la lettera!\" Wei ascolta, poi sorride: \"Allora mi compri dei semi di pomodoro?\"", "Lin runs to her grandpa. \"Grandpa, I'll read you the letter!\" Wei listens, then smiles: \"So will you buy me some tomato seeds?\""),
        ],
      ],
      tasks: [
        mc("Why do they write to the mayor?", ["To tell her the garden won, with signatures", "To complain about the noise", "To ask for a car park"], 0),
        tf("Wei firma per primo.", "Wei signs first.", true),
        mc("How does Wei sign?", ["In Italian and in Chinese", "Only in Chinese", "With a drawing"], 0),
        tf("Nel giardino ci sarà anche un orto.", "There'll be a vegetable garden too.", true),
      ],
    },
  ],
  sequence: [
    "lin-5-l-avviso", "radio-pratello", "che-relativo",
    "lin-6-la-riunione", "comparativi", "al-telefono-col-comune",
    "lin-7-scriviamo-alla-sindaca", "pronomi-indiretti",
    "write", "words", "check",
  ],
  listening: [
    {
      id: "radio-pratello",
      level: "A2",
      title: "Radio Pratello",
      titleTranslation: "Radio Pratello",
      kind: "dialogue",
      situation: "A student radio asks people in the street: car park or garden?",
      grammar: ["comparativi"],
      lines: [
        line("Giornalista", "Buonasera, siamo Radio Pratello. Parcheggio o giardino?", "Good evening, this is Radio Pratello. Car park or garden?"),
        line("Signora", "Giardino! Ho due nipoti, e il parco è troppo lontano.", "Garden! I've got two grandchildren, and the park is too far."),
        line("Ragazzo", "Per me è uguale. Io vado in bici, è più veloce della macchina.", "It's all the same to me. I go by bike, it's faster than the car."),
        line("Signore", "Parcheggio. Sono vecchio e la macchina mi serve più del giardino.", "Car park. I'm old and I need the car more than the garden."),
        line("Giornalista", "Grazie a tutti! Il risultato giovedì, dopo la riunione.", "Thanks, everyone! The result on Thursday, after the meeting."),
      ],
      gist: { prompt: "What's happening?", options: ["A radio asks people what they prefer", "A council meeting", "An advert for a car park"], answer: 0 },
      details: [
        { prompt: "Why does the woman want a garden?", options: ["Her grandchildren need a park nearby", "She hates cars", "She's a gardener"], answer: 0 },
        { prompt: "What does the young man think?", options: ["He doesn't mind: he cycles", "He wants a car park", "He wants a garden"], answer: 0 },
      ],
      tasks: [
        tf("Il signore vuole un giardino.", "The man wants a garden.", false),
        heard(2, ["veloce", "vicino", "vecchio"], 0),
        gaps(1, "nipoti", "lontano"),
      ],
      dictation: [1, 4],
    },
    {
      id: "al-telefono-col-comune",
      level: "A2",
      title: "Al telefono con il Comune",
      titleTranslation: "On the phone to the council",
      kind: "dialogue",
      situation: "Lin calls the council to ask where to send the letter.",
      grammar: ["pronomi-indiretti", "condizionale"],
      lines: [
        line("Impiegato", "Comune di Bologna, buongiorno.", "Bologna council, good morning."),
        line("Lin", "Buongiorno. Vorrei mandare una lettera alla sindaca. Mi può dire l'indirizzo?", "Good morning. I'd like to send a letter to the mayor. Can you tell me the address?"),
        line("Impiegato", "Certo. Le do l'indirizzo email: è più veloce della posta.", "Of course. I'll give you the email address: it's faster than the post."),
        line("Lin", "Ma abbiamo quaranta firme sulla carta.", "But we've got forty signatures on paper."),
        line("Impiegato", "Allora le può portare all'ufficio in Piazza Maggiore. Siamo aperti dalle nove all'una.", "Then you can bring them to the office in Piazza Maggiore. We're open from nine to one."),
        line("Lin", "Perfetto, le porto domani. Grazie!", "Perfect, I'll bring them tomorrow. Thank you!"),
      ],
      gist: { prompt: "What does Lin want to know?", options: ["Where to send the letter to the mayor", "When the garden opens", "How to vote"], answer: 0 },
      details: [
        { prompt: "Why can't Lin just email?", options: ["The signatures are on paper", "She hasn't got a computer", "The mayor doesn't read emails"], answer: 0 },
        { prompt: "When is the office open?", options: ["From nine to one", "All day", "In the afternoon"], answer: 0 },
      ],
      tasks: [
        tf("Lin porterà le firme domani.", "Lin will take the signatures tomorrow.", true),
        heard(3, ["firme", "forme", "ferme"], 0),
        gaps(4, "ufficio", "aperti"),
      ],
      dictation: [1, 3],
    },
  ],
  writing: [
    a2({
      id: "w-il-mio-quartiere",
      title: "Il mio quartiere",
      titleTranslation: "My neighbourhood",
      form: "opinion",
      situation: "Radio Pratello asks: what would you change in your neighbourhood?",
      points: [
        pf("Say where you live", "Abito in un quartiere … .", "quartiere"),
        pf("Compare it with another place", "È più … di … .", "più"),
        pf("Say the best thing about it", "La cosa più bella è … .", "più"),
        pf("Say what you'd change", "Io cambierei … .", "cambierei"),
        pf("Say who you'd write to", "Scriverei al sindaco e gli direi … .", "gli"),
      ],
      model:
        "Abito in un quartiere vicino all'università. È più tranquillo del centro, ma meno allegro. La cosa più bella è il parco, che è grande e verde. Io cambierei le strade: ci sono troppe macchine. Scriverei al sindaco e gli direi: meno macchine, per favore!",
    }),
    a2({
      id: "w-una-lettera-al-comune",
      title: "Una lettera al Comune",
      titleTranslation: "A letter to the council",
      form: "email",
      situation: "Write a short formal email to the council about something in your street.",
      points: [
        pf("Greet formally", "Gentile sindaca / Gentile sindaco, … .", "gentile"),
        pf("Say who you are", "Sono … e abito in … .", "abito"),
        pf("Say the problem", "Le scrivo perché … .", "le scrivo"),
        pf("Say what you'd like", "Vorremmo … .", "vorremmo"),
        pf("Close formally", "Cordiali saluti, … .", "saluti"),
      ],
      model:
        "Gentile sindaca, sono Lin Chen e abito in via del Pratello. Le scrivo perché la piazzetta dietro il mio negozio è brutta e senza luce. Vorremmo un giardino con delle panchine e un piccolo orto. Cordiali saluti, Lin Chen",
    }),
  ],
  checkpoint: {
    title: "Il giardino",
    titleTranslation: "The garden",
    text: [
      [
        s("In primavera la piazzetta è diventata un giardino. Ci sono alberi, panchine e un orto che cura il nonno Wei.", "In spring the little square has become a garden. There are trees, benches and a vegetable garden that Grandpa Wei looks after."),
        s("Lin dice a Emma: \"È più bello di come lo immaginavo!\" Rita si siede sulla panchina più vicina all'orto e chiude gli occhi.", "Lin tells Emma: \"It's more beautiful than I imagined!\" Rita sits on the bench closest to the vegetable garden and closes her eyes."),
        s("\"Gino mi diceva sempre: un quartiere senza alberi è come una casa senza finestre.\"", "\"Gino always told me: a neighbourhood without trees is like a house without windows.\""),
      ],
    ],
    textTasks: [
      tf("Il nonno Wei cura l'orto.", "Grandpa Wei looks after the vegetable garden.", true),
      mc("What does Lin say about the garden?", ["It's more beautiful than she imagined", "It's too small", "It's noisy"], 0),
      mc("What did Gino use to say?", ["A neighbourhood without trees is like a house without windows", "Cars are useful", "Gardens are expensive"], 0),
    ],
    listening: {
      situation: "Lin leaves Davide a voice message.",
      lines: [
        line("Lin", "Davide, ciao! Sono Lin.", "Davide, hi! It's Lin."),
        line("Lin", "Domenica facciamo la festa del giardino. Ti aspettiamo alle undici.", "On Sunday we're having the garden party. We'll expect you at eleven."),
        line("Lin", "Il nonno ti vuole regalare i primi pomodori dell'orto.", "Grandpa wants to give you the first tomatoes from the garden."),
        line("Lin", "Sono più piccoli di quelli del mercato, ma molto più buoni!", "They're smaller than the ones at the market, but much tastier!"),
      ],
      questions: [
        { prompt: "When is the garden party?", options: ["Sunday at eleven", "Saturday at eleven", "Sunday evening"], answer: 0 },
        { prompt: "What does Wei want to give Davide?", options: ["The first tomatoes from the garden", "A plant", "A chair"], answer: 0 },
      ],
    },
    write: {
      situation: "Write a short message to Lin about the new garden.",
      points: [
        { prompt: "Say what you think of it", frame: "Il giardino è più … di … !" },
        { prompt: "Say what you'll bring to the party", frame: "Ti porto … ." },
        { prompt: "Say goodbye", frame: "A domenica!" },
      ],
      model: "Il giardino è più bello di un parco! Ti porto una torta per la festa. A domenica!",
      modelTranslation: "The garden is more beautiful than a park! I'll bring you a cake for the party. See you on Sunday!",
    },
  },
};
