import type { Unit } from "@/core/content";
import { a2, gaps, heard, line, mc, pf, s, tf } from "./helpers";

/**
 * A2 unit 2: a home of her own. Direct object pronouns (lo, la, li, le), ne,
 * ci for places. Lead: Ana, who finds a flat on Via del Pratello and moves
 * in with everyone's help. Culture: house hunting in Bologna, flats without
 * a lift, Mercato delle Erbe, the housewarming.
 */
export const casa: Unit = {
  id: "it-a2-casa",
  level: "A2",
  title: "Una casa nuova",
  titleTranslation: "A new home",
  look: { motif: "column", glaze: "ochre" },
  canDo: [
    "Talk about a flat: rooms, furniture, rent",
    "Avoid repeating things with lo, la, li, le: Lo prendo!",
    "Talk about quantities with ne: Ne ho ventidue",
    "Say where you go and how with ci: Ci vado a piedi",
  ],
  story: {
    id: "ana-trasloca",
    title: "Ana trasloca",
    titleTranslation: "Ana moves house",
    intro:
      "Ana has a job, but she still lives in a noisy little room by the station. Then she finds an ad: a flat on Via del Pratello, third floor, a window over the roofs. And no lift.",
  },
  texts: [
    {
      id: "ana-5-cerco-casa",
      level: "A2",
      title: "Cerco casa",
      titleTranslation: "Looking for a flat",
      grammar: ["pronomi-diretti", "c-e-ci-sono"],
      paragraphs: [
        [
          s("Ana abita in una stanza piccola e rumorosa vicino alla stazione. Vuole un appartamento tutto suo.", "Ana lives in a small, noisy room near the station. She wants a flat all of her own."),
          s("Ogni sera guarda gli annunci sul telefono. Un annuncio le piace molto: \"Bilocale in via del Pratello, luminoso, terzo piano, 650 euro al mese.\"", "Every evening she looks at the ads on her phone. She really likes one ad: \"Two-room flat on Via del Pratello, bright, third floor, 650 euros a month.\""),
        ],
        [
          s("Sabato mattina lo visita con l'agente, il signor Ferri.", "On Saturday morning she sees it with the estate agent, Mr Ferri."),
          s("\"La cucina è piccola, ma la vede? C'è una finestra sui tetti.\" Ana la guarda e sorride: i tetti rossi di Bologna sono bellissimi.", "\"The kitchen is small, but do you see it? There's a window over the roofs.\" Ana looks at it and smiles: the red roofs of Bologna are beautiful."),
          s("\"E i mobili?\" \"Il letto e l'armadio li lascia il proprietario. Le sedie, invece, le deve comprare lei.\"", "\"And the furniture?\" \"The owner is leaving the bed and the wardrobe. The chairs, though, you have to buy.\""),
        ],
        [
          s("\"Il bagno è nuovo e c'è anche la lavatrice.\" Ana fa molte foto e le manda subito a Emma.", "\"The bathroom is new and there's a washing machine too.\" Ana takes lots of photos and sends them to Emma straight away."),
          s("Emma risponde in un minuto: \"Prendilo! Così siamo vicine di casa!\"", "Emma answers within a minute: \"Take it! Then we'll be neighbours!\""),
          s("La sera Ana chiama il signor Ferri: \"Buonasera, sono Ana Lima. L'appartamento lo prendo!\"", "In the evening Ana calls Mr Ferri: \"Good evening, it's Ana Souza. I'll take the flat!\""),
        ],
      ],
      tasks: [
        mc("Why does Ana want to move?", ["Her room is small and noisy", "It's too far from work", "It's too expensive"], 0),
        tf("Il letto lo lascia il proprietario.", "The owner is leaving the bed.", true),
        mc("What's special about the kitchen?", ["A window over the roofs", "It's very big", "It's brand new"], 0),
        tf("Ana manda le foto a Giulia.", "Ana sends the photos to Giulia.", false),
      ],
    },
    {
      id: "ana-6-il-trasloco",
      level: "A2",
      title: "Il trasloco",
      titleTranslation: "Moving day",
      grammar: ["ne", "pronomi-diretti", "quantities"],
      paragraphs: [
        [
          s("Il trasloco è sabato. Ana ha tante scatole: libri, piatti, vestiti, e le sue piante.", "The move is on Saturday. Ana has lots of boxes: books, plates, clothes, and her plants."),
          s("Alle nove arrivano gli amici: Karim, Marco e Davide.", "At nine her friends arrive: Karim, Marco and Davide."),
          s("\"Quante scatole hai?\" chiede Karim. \"Ne ho ventidue!\" \"Ventidue? E l'ascensore?\" \"Non c'è.\"", "\"How many boxes have you got?\" Karim asks. \"Twenty-two!\" \"Twenty-two? And the lift?\" \"There isn't one.\""),
        ],
        [
          s("Karim e Marco portano le scatole al terzo piano. Davide non può fare le scale, ma ha un'idea: controlla la lista dal cortile.", "Karim and Marco carry the boxes up to the third floor. Davide can't do the stairs, but he has an idea: he checks the list from the courtyard."),
          s("\"Quante scatole mancano?\" chiede Davide. \"Ne mancano tre!\" risponde Marco dalla finestra.", "\"How many boxes are left?\" Davide asks. \"Three more!\" Marco answers from the window."),
          s("Le piante le porta Ana, una per una. Sono delicate e non le dà a nessuno.", "Ana carries the plants herself, one by one. They're delicate and she won't give them to anyone."),
        ],
        [
          s("Alla fine sono tutti stanchi e hanno fame. Rita sale piano piano con una teglia di lasagne.", "In the end they're all tired and hungry. Rita slowly comes up with a tray of lasagne."),
          s("\"Ne volete un po'?\" \"Sì, grazie!\"", "\"Would you like some?\" \"Yes, please!\""),
          s("\"Ne prendo ancora un po'\", dice Ana. \"Queste lasagne sono le migliori di Bologna.\"", "\"I'll have a bit more,\" says Ana. \"This lasagne is the best in Bologna.\""),
        ],
      ],
      tasks: [
        mc("How many boxes does Ana have?", ["Twenty-two", "Twelve", "Two"], 0),
        tf("Nel palazzo c'è l'ascensore.", "There's a lift in the building.", false),
        mc("What does Davide do?", ["He checks the list from the courtyard", "He carries boxes", "He cooks"], 0),
        tf("Rita porta le lasagne.", "Rita brings the lasagne.", true),
      ],
    },
    {
      id: "ana-7-cara-mamma",
      level: "A2",
      title: "Cara mamma",
      titleTranslation: "Dear Mum",
      grammar: ["ci-luogo", "ne", "c-e-ci-sono"],
      paragraphs: [
        [
          s("Cara mamma, finalmente ho una casa mia! È in via del Pratello, vicino a Emma. Ti mando le foto.", "Dear Mum, at last I have a home of my own! It's on Via del Pratello, near Emma. I'm sending you the photos."),
          s("La cucina è piccola, ma c'è una finestra sui tetti. La mattina ci entra il sole.", "The kitchen is small, but there's a window over the roofs. In the morning the sun comes in."),
          s("In cucina ho messo le tue foto e la tua ricetta del pão de queijo. Non è facile da fare qui!", "In the kitchen I've put up your photos and your pão de queijo recipe. It isn't easy to make here!"),
        ],
        [
          s("Lo studio è in centro: ci vado a piedi, ci vogliono dieci minuti.", "The office is in the centre: I walk there, it takes ten minutes."),
          s("Il sabato vado al mercato delle Erbe e ci compro frutta e verdura.", "On Saturdays I go to the Mercato delle Erbe and buy fruit and vegetables there."),
          s("Non è come il mercato di Recife, ma ci sono dei pomodori buonissimi. Ne compro sempre troppi!", "It isn't like the market in Recife, but there are wonderful tomatoes. I always buy too many!"),
        ],
        [
          s("La sera spesso vado al Bar Margherita. Ci trovo sempre qualcuno: Rita, Karim, Davide.", "In the evening I often go to Bar Margherita. I always find someone there: Rita, Karim, Davide."),
          s("Il mese prossimo vieni a Bologna? Ti porto sui colli: ci andiamo in autobus e mangiamo all'aperto.", "Will you come to Bologna next month? I'll take you up the hills: we'll go there by bus and eat outside."),
        ],
        [
          s("Un bacio grande,", "A big kiss,"),
        ],
        [
          s("Ana", "Ana"),
        ],
      ],
      tasks: [
        mc("How does Ana get to work?", ["On foot, in ten minutes", "By bus", "By bike"], 0),
        tf("Il mercato delle Erbe è come il mercato di Recife.", "The Mercato delle Erbe is like the market in Recife.", false),
        mc("Who does Ana find at the bar?", ["Rita, Karim and Davide", "Her mother", "Her boss"], 0),
        tf("Ana invita sua madre a Bologna.", "Ana invites her mother to Bologna.", true),
      ],
    },
  ],
  sequence: [
    "ana-5-cerco-casa", "l-agenzia", "pronomi-diretti",
    "ana-6-il-trasloco", "ne", "da-lin-per-la-casa",
    "ana-7-cara-mamma", "ci-luogo",
    "write", "words", "check",
  ],
  listening: [
    {
      id: "l-agenzia",
      level: "A2",
      title: "L'agenzia",
      titleTranslation: "The estate agent",
      kind: "dialogue",
      situation: "Ana calls the estate agent about the flat in the ad.",
      grammar: ["pronomi-diretti", "modal-verbs"],
      lines: [
        line("Ferri", "Agenzia Casa Bella, buongiorno, sono Ferri.", "Casa Bella estate agency, good morning, Ferri speaking."),
        line("Ana", "Buongiorno, chiamo per il bilocale in via del Pratello. È ancora libero?", "Good morning, I'm calling about the two-room flat on Via del Pratello. Is it still free?"),
        line("Ferri", "Sì, è libero. Lo vuole vedere?", "Yes, it's free. Would you like to see it?"),
        line("Ana", "Sì, volentieri. Posso vederlo sabato mattina?", "Yes, gladly. Can I see it on Saturday morning?"),
        line("Ferri", "Certo. Alle dieci va bene? Ci vediamo davanti al portone, numero quaranta.", "Of course. Is ten o'clock all right? We'll meet in front of the main door, number forty."),
        line("Ana", "Perfetto. A sabato, allora.", "Perfect. See you on Saturday, then."),
      ],
      gist: { prompt: "What's the call about?", options: ["Ana makes an appointment to see a flat", "Ana pays the rent", "Ana complains about the flat"], answer: 0 },
      details: [
        { prompt: "When will she see it?", options: ["Saturday at ten", "Friday at ten", "Saturday at four"], answer: 0 },
        { prompt: "Where do they meet?", options: ["In front of the main door, number forty", "At the agency", "At the bar"], answer: 0 },
      ],
      tasks: [
        tf("Il bilocale non è più libero.", "The flat isn't free any more.", false),
        heard(2, ["libero", "libro", "litro"], 0),
        gaps(4, "dieci", "portone"),
      ],
      dictation: [2, 5],
    },
    {
      id: "da-lin-per-la-casa",
      level: "A2",
      title: "Da Lin",
      titleTranslation: "At Lin's",
      kind: "dialogue",
      situation: "Ana buys a few things for the empty flat at Lin's shop.",
      grammar: ["ne", "pronomi-diretti"],
      lines: [
        line("Lin", "Ciao Ana! Allora, la casa nuova?", "Hi Ana! So, the new flat?"),
        line("Ana", "Bellissima, ma è vuota! Mi servono dei piatti e dei bicchieri.", "Beautiful, but it's empty! I need some plates and glasses."),
        line("Lin", "Piatti ne ho pochi, ma bicchieri ne ho tanti. Quanti ne vuoi?", "I've only got a few plates, but lots of glasses. How many do you want?"),
        line("Ana", "Ne prendo sei. E le candele? Le hai?", "I'll take six. And candles? Have you got any?"),
        line("Lin", "Sì, le trovi lì, vicino alla cassa.", "Yes, you'll find them there, near the till."),
        line("Ana", "Perfetto. Così stasera ceniamo a lume di candela, perché la luce non c'è ancora!", "Perfect. So tonight we'll have dinner by candlelight, because the electricity isn't on yet!"),
      ],
      gist: { prompt: "What's happening?", options: ["Ana buys things for her new flat", "Lin is moving house", "Ana is returning a present"], answer: 0 },
      details: [
        { prompt: "How many glasses does Ana take?", options: ["Six", "Two", "Ten"], answer: 0 },
        { prompt: "Why does she need candles?", options: ["The electricity isn't on yet", "For a party", "As a present"], answer: 0 },
      ],
      tasks: [
        tf("Lin ha tanti piatti.", "Lin has lots of plates.", false),
        heard(2, ["bicchieri", "biglietti", "biscotti"], 0),
        gaps(3, "candele"),
      ],
      dictation: [1, 3],
    },
  ],
  writing: [
    a2({
      id: "w-la-mia-casa",
      title: "La mia casa",
      titleTranslation: "My home",
      form: "description",
      situation: "Ana wants to see where you live. Describe your home.",
      points: [
        pf("Say where it is", "Abito in … , a … .", "abito"),
        pf("Say how many rooms there are", "Ci sono … stanze: … .", "ci sono"),
        pf("Describe your favourite room", "La mia stanza preferita è … .", "preferita"),
        pf("Say something you like about it", "Mi piace perché … .", "piace"),
        pf("Say how you get to work or school", "Al lavoro / A scuola ci vado … .", "ci vado"),
      ],
      model:
        "Abito in un piccolo appartamento a Leiden, vicino alla stazione. Ci sono tre stanze: la cucina, la camera e il bagno. La mia stanza preferita è la cucina, perché è luminosa e c'è un tavolo grande. Mi piace perché dalla finestra vedo le barche. All'università ci vado in bici: ci vogliono dieci minuti.",
    }),
    a2({
      id: "w-invito-festa",
      title: "Vieni alla festa?",
      titleTranslation: "Come to the party?",
      form: "message",
      situation: "You've moved. Invite a friend to your housewarming and ask them to bring something.",
      points: [
        pf("Say you've moved", "Ho una casa nuova in … !", "casa"),
        pf("Invite them: day and time", "Vieni alla festa … alle … ?", "festa"),
        pf("Ask them to bring something", "Puoi portare … ? Io non ne ho.", "portare", "ne"),
        pf("Say how to get there", "Ci arrivi con … .", "ci"),
      ],
      model:
        "Ciao Marta! Ho una casa nuova in via del Pratello! Vieni alla festa sabato alle otto? Puoi portare dei bicchieri? Io ne ho solo due. Ci arrivi con l'autobus 20 dalla stazione. A sabato!",
    }),
  ],
  checkpoint: {
    title: "La festa in casa nuova",
    titleTranslation: "The housewarming",
    text: [
      [
        s("Venerdì Ana fa una festa nella casa nuova. Invita tutti: Emma, Giulia, Karim, Davide, Rita e anche il signor Ferri.", "On Friday Ana has a party in her new flat. She invites everyone: Emma, Giulia, Karim, Davide, Rita and Mr Ferri too."),
        s("\"Il vino lo porto io!\" dice Karim. \"E le sedie?\" chiede Giulia. \"Ne ho solo due, ma c'è il pavimento!\" ride Ana.", "\"I'll bring the wine!\" says Karim. \"And the chairs?\" asks Giulia. \"I've only got two, but there's the floor!\" Ana laughs."),
        s("Alla fine Rita porta la torta, e ne mangiano tutti due pezzi.", "In the end Rita brings the cake, and everyone eats two pieces."),
      ],
    ],
    textTasks: [
      tf("Ana ha tante sedie.", "Ana has lots of chairs.", false),
      mc("Who brings the wine?", ["Karim", "Rita", "Mr Ferri"], 0),
      mc("How many pieces of cake does everyone eat?", ["Two", "One", "None"], 0),
    ],
    listening: {
      situation: "Ana leaves Emma a voice message before the party.",
      lines: [
        line("Ana", "Emma, ciao! Sono Ana.", "Emma, hi! It's Ana."),
        line("Ana", "Stasera vado al mercato. Ci vieni anche tu?", "I'm going to the market this evening. Are you coming too?"),
        line("Ana", "Devo comprare la frutta per la festa.", "I have to buy fruit for the party."),
        line("Ana", "Ci vediamo alle sei sotto casa.", "Let's meet at six outside the building."),
      ],
      questions: [
        { prompt: "Where is Ana going?", options: ["To the market", "To work", "To the station"], answer: 0 },
        { prompt: "When do they meet?", options: ["At six", "At seven", "At five"], answer: 0 },
      ],
    },
    write: {
      situation: "Answer Ana's invitation: say you're coming and what you'll bring.",
      points: [
        { prompt: "Say thank you and that you're coming", frame: "Grazie, Ana! … ." },
        { prompt: "Say what you'll bring", frame: "… lo / la / li / le porto io!" },
        { prompt: "Say goodbye", frame: "A venerdì!" },
      ],
      model: "Grazie, Ana! Vengo volentieri. Il dolce lo porto io! A venerdì!",
      modelTranslation: "Thanks, Ana! I'd love to come. I'll bring the dessert! See you on Friday!",
    },
  },
};
