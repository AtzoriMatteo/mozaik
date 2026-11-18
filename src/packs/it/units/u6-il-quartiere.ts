import type { Unit } from "@/core/content";
import { a1, gaps, heard, line, mc, order, pf, s, tf } from "./helpers";

/**
 * A1 unit 6: home and neighbourhood. C'è / ci sono, prepositions with the
 * article (nel, sul, dal), the imperative for directions. Lead: Signora
 * Rita, born in this building eighty-two years ago, and Hiro, the new
 * neighbour from Japan.
 */
export const quartiere: Unit = {
  id: "it-a1-quartiere",
  level: "A1",
  title: "Casa e quartiere",
  titleTranslation: "Home and neighbourhood",
  look: { motif: "column", glaze: "copper" },
  canDo: [
    "Describe a home: the rooms, what's in them and where",
    "Say what there is in a street: c'è, ci sono",
    "Ask the way and understand simple directions",
    "Give directions to a friend (tu) and to a stranger (Lei)",
  ],
  story: {
    id: "la-via-di-rita",
    title: "La via di Rita",
    titleTranslation: "Rita's street",
    intro:
      "Signora Rita was born in Emma's building eighty-two years ago and knows everyone on Via del Pratello. This week a new neighbour arrives: Hiro, who makes violins. Four episodes, one street.",
  },
  texts: [
    {
      id: "rita-1-la-casa-di-rita",
      level: "A1",
      title: "La casa di Rita",
      titleTranslation: "Rita's flat",
      grammar: ["c-e-ci-sono", "prepositions-articulated", "adjective-agreement"],
      paragraphs: [
        [
          s("La signora Rita abita al primo piano, sotto Emma, Giulia e Karim.", "Signora Rita lives on the first floor, below Emma, Giulia and Karim."),
          s("Ha ottantadue anni ed è nata in questa casa.", "She's eighty-two and she was born in this building."),
          s("Oggi invita Emma a prendere un caffè.", "Today she invites Emma for a coffee."),
        ],
        [
          s("La casa di Rita è piccola ma luminosa.", "Rita's flat is small but bright."),
          s("C'è un ingresso stretto, poi c'è il soggiorno con un grande divano verde.", "There's a narrow hall, then there's the living room with a big green sofa."),
          s("Sul divano c'è un gatto grigio. Si chiama Pavarotti, perché la sera canta!", "On the sofa there's a grey cat. He's called Pavarotti, because he sings in the evening!"),
          s("In cucina ci sono tante piante e un vecchio tavolo di legno.", "In the kitchen there are lots of plants and an old wooden table."),
          s("Sul tavolo ci sono le foto della famiglia e una moka.", "On the table there are family photos and a moka pot."),
          s("La camera da letto è in fondo al corridoio, vicino al bagno.", "The bedroom is at the end of the corridor, near the bathroom."),
        ],
        [
          s("\"Quante stanze ci sono?\" chiede Emma. \"Tre, più la cucina e il bagno. E il balcone, il mio posto preferito!\"", "\"How many rooms are there?\" Emma asks. \"Three, plus the kitchen and the bathroom. And the balcony, my favourite place!\""),
          s("Dal balcone si vede tutta la via: il bar di Marco, la sartoria di Amadou, i portici.", "From the balcony you can see the whole street: Marco's bar, Amadou's tailor's shop, the porticoes."),
          s("\"Da qui vedo tutto\", dice Rita. \"Proprio tutto!\"", "\"I see everything from here,\" says Rita. \"Absolutely everything!\""),
        ],
      ],
      tasks: [
        mc("Why is the cat called Pavarotti?", ["He sings in the evening", "He's very big", "He's from Modena"], 0),
        tf("La camera da letto di Rita è vicino alla cucina.", "Rita's bedroom is near the kitchen.", false),
        mc("Why is the balcony Rita's favourite place?", ["She can see the whole street from there", "It's the biggest room", "Pavarotti sleeps there"], 0),
        mc("\"Da qui vedo tutto. Proprio tutto!\" What does this tell you about Rita?", ["She knows everything that happens in the street", "She has very good eyes", "She never goes out"], 0),
      ],
    },
    {
      id: "rita-2-un-nuovo-vicino",
      level: "A1",
      title: "Un nuovo vicino",
      titleTranslation: "A new neighbour",
      grammar: ["imperative", "c-e-ci-sono", "prepositions-articulated"],
      paragraphs: [
        [
          s("Lunedì arriva un nuovo vicino al secondo piano: Hiro, un ragazzo giapponese.", "On Monday a new neighbour arrives on the second floor: Hiro, a young Japanese man."),
          s("Hiro fa il liutaio: costruisce violini in un piccolo laboratorio vicino all'università.", "Hiro is a luthier: he makes violins in a small workshop near the university."),
          s("Martedì mattina incontra Rita sulle scale.", "On Tuesday morning he meets Rita on the stairs."),
          s("\"Buongiorno, signora. Scusi, c'è un ufficio postale qui vicino?\"", "\"Good morning, madam. Excuse me, is there a post office near here?\""),
        ],
        [
          s("\"Sì, certo. Esca dal portone e giri a destra. Vada dritto fino alla piazza.\"", "\"Yes, of course. Go out of the main door and turn right. Go straight on to the square.\""),
          s("\"In piazza c'è una chiesa. L'ufficio postale è a sinistra della chiesa, accanto alla farmacia.\"", "\"In the square there's a church. The post office is to the left of the church, next to the chemist's.\""),
          s("\"Grazie mille! E c'è anche un supermercato?\"", "\"Thanks very much! And is there a supermarket too?\""),
          s("\"Il supermercato è lontano. Ma in fondo alla via c'è il negozio dei Chen: hanno tutto!\"", "\"The supermarket is far. But at the end of the street there's the Chens' shop: they have everything!\""),
        ],
        [
          s("Hiro ringrazia e va. Dopo dieci minuti è di nuovo davanti al portone.", "Hiro thanks her and goes. Ten minutes later he's back in front of the main door."),
          s("\"Signora, scusi... a destra o a sinistra?\"", "\"Excuse me, madam... right or left?\""),
          s("Rita ride: \"Andiamo insieme. Anch'io devo andare in piazza.\"", "Rita laughs: \"Let's go together. I have to go to the square too.\""),
        ],
      ],
      tasks: [
        order("Put Rita's directions in order.", "Go out of the main door", "Turn right", "Go straight on to the square", "The post office is next to the chemist's"),
        mc("Why is Hiro back after ten minutes?", ["He can't remember right or left", "The post office is closed", "He forgets his keys"], 0),
        tf("Il supermercato è vicino alla casa di Rita.", "The supermarket is near Rita's building.", false),
        mc("What does Hiro do for a living?", ["He makes violins", "He plays in an orchestra", "He studies at the university"], 0),
      ],
    },
    {
      id: "rita-3-sotto-i-portici",
      level: "A1",
      title: "Sotto i portici",
      titleTranslation: "Under the porticoes",
      grammar: ["c-e-ci-sono", "prepositions-articulated", "plurals"],
      paragraphs: [
        [
          s("Rita e Hiro camminano sotto i portici.", "Rita and Hiro walk under the porticoes."),
          s("\"A Bologna ci sono quasi quaranta chilometri di portici\", dice Rita. \"Quando piove, non serve l'ombrello!\"", "\"In Bologna there are almost forty kilometres of porticoes,\" says Rita. \"When it rains, you don't need an umbrella!\""),
          s("Nella via ci sono un'osteria, due bar, una sartoria, una libreria e il negozio dei Chen.", "In the street there's an osteria, two bars, a tailor's shop, a bookshop and the Chens' shop."),
          s("\"La sera nell'osteria ci sono sempre tanti studenti. È un po' rumorosa.\"", "\"In the evening there are always lots of students in the osteria. It's a bit noisy.\""),
        ],
        [
          s("Davanti alla farmacia c'è una panchina. Lì ci sono sempre tre signori anziani: parlano di calcio e guardano la gente.", "In front of the chemist's there's a bench. There are always three old men there: they talk about football and watch people."),
          s("\"E dov'è il parco?\" chiede Hiro. \"Il parco è dietro la chiesa, a cinque minuti.\"", "\"And where's the park?\" Hiro asks. \"The park is behind the church, five minutes away.\""),
          s("All'ufficio postale c'è la fila, ma Rita conosce tutti: la farmacista, il postino, i signori sulla panchina.", "At the post office there's a queue, but Rita knows everyone: the chemist, the postman, the men on the bench."),
        ],
        [
          s("Tutti dicono: \"Buongiorno, signora Rita!\"", "Everyone says: \"Good morning, Signora Rita!\""),
          s("\"Signora, ma lei è la sindaca della via!\" ride Hiro.", "\"Madam, you're the mayor of the street!\" Hiro laughs."),
          s("\"Quasi\", risponde Rita. \"Dopo ottantadue anni, conosco ogni porta.\"", "\"Almost,\" Rita answers. \"After eighty-two years, I know every door.\""),
        ],
      ],
      tasks: [
        mc("Why don't you need an umbrella in Bologna?", ["The porticoes cover the streets", "It never rains", "Everyone takes the bus"], 0),
        tf("Il parco è davanti alla farmacia.", "The park is in front of the chemist's.", false),
        mc("Why does Hiro call Rita \"la sindaca della via\"?", ["Everybody knows her and greets her", "She works at the town hall", "She's very strict"], 0),
        mc("Who sits on the bench?", ["Three old men", "Students", "The postman"], 0),
      ],
    },
    {
      id: "rita-4-la-festa-nel-cortile",
      level: "A1",
      title: "La festa nel cortile",
      titleTranslation: "The party in the courtyard",
      grammar: ["prepositions-articulated", "c-e-ci-sono", "gender"],
      paragraphs: [
        [
          s("Sabato sera c'è una festa nel cortile: è per Hiro, il nuovo vicino.", "On Saturday evening there's a party in the courtyard: it's for Hiro, the new neighbour."),
          s("Nel cortile c'è un lungo tavolo con una tovaglia rossa.", "In the courtyard there's a long table with a red tablecloth."),
          s("Ogni vicino porta qualcosa: Marco porta il vino, Emma un pane irlandese, Giulia le tagliatelle della nonna, Amadou un dolce al cocco.", "Every neighbour brings something: Marco brings wine, Emma Irish bread, Giulia her grandma's tagliatelle, Amadou a coconut cake."),
          s("Sul tavolo ci sono anche le candele, e tra due alberi ci sono le luci colorate.", "On the table there are candles too, and between two trees there are coloured lights."),
        ],
        [
          s("Dopo cena Hiro prende il violino e suona.", "After dinner Hiro picks up his violin and plays."),
          s("Tutti sono in silenzio. Anche Pavarotti, il gatto di Rita, è sul balcone e ascolta.", "Everyone is silent. Even Pavarotti, Rita's cat, is on the balcony, listening."),
          s("Poi Pavarotti comincia a cantare. Tutti ridono.", "Then Pavarotti starts to sing. Everyone laughs."),
          s("\"Brava, Pavarotti!\" dice Karim. \"No, bravo! È un maschio!\" risponde Rita.", "\"Brava, Pavarotti!\" says Karim. \"No, bravo! He's a boy!\" Rita answers."),
        ],
        [
          s("A mezzanotte la festa finisce.", "At midnight the party ends."),
          s("\"Grazie, signora Rita\", dice Hiro. \"Adesso questa è la mia casa.\"", "\"Thank you, Signora Rita,\" says Hiro. \"Now this is my home.\""),
          s("\"E questa è la tua famiglia\", risponde Rita. \"Un po' rumorosa, ma buona!\"", "\"And this is your family,\" Rita answers. \"A bit noisy, but good!\""),
        ],
      ],
      tasks: [
        mc("Why is there a party?", ["To welcome Hiro", "It's Rita's birthday", "It's a holiday"], 0),
        mc("Why does Rita correct Karim: \"No, bravo!\"?", ["Pavarotti is a male cat, so bravo, not brava", "Karim says it too loudly", "The cat sings badly"], 0),
        tf("Amadou porta il vino.", "Amadou brings the wine.", false),
        mc("What does Rita mean by \"questa è la tua famiglia\"?", ["The neighbours are like a family for Hiro now", "Hiro's family is coming", "Rita is Hiro's grandmother"], 0),
      ],
    },
  ],
  sequence: [
    "rita-1-la-casa-di-rita", "c-e-ci-sono", "scusi-dov-e",
    "rita-2-un-nuovo-vicino", "imperative",
    "rita-3-sotto-i-portici", "prepositions-articulated",
    "la-lista-della-festa", "write", "rita-4-la-festa-nel-cortile", "words", "check",
  ],
  listening: [
    {
      id: "scusi-dov-e",
      level: "A1",
      title: "Scusi, dov'è...?",
      titleTranslation: "Excuse me, where is...?",
      kind: "dialogue",
      situation: "A tourist stops Karim under the porticoes.",
      grammar: ["imperative", "questions", "prepositions-articulated"],
      lines: [
        line("Turista", "Scusi, dov'è Piazza Maggiore?", "Excuse me, where's Piazza Maggiore?"),
        line("Karim", "È qui vicino, a dieci minuti a piedi.", "It's near here, ten minutes on foot."),
        line("Karim", "Vada dritto fino al semaforo, poi giri a sinistra.", "Go straight on to the traffic lights, then turn left."),
        line("Turista", "A sinistra al semaforo. E poi?", "Left at the lights. And then?"),
        line("Karim", "Poi prenda la seconda strada a destra. La piazza è davanti a lei.", "Then take the second street on the right. The square is in front of you."),
        line("Turista", "Grazie mille, molto gentile!", "Thanks very much, very kind!"),
        line("Karim", "Prego! Ah, e sotto i portici, non serve l'ombrello!", "You're welcome! Oh, and under the porticoes you don't need an umbrella!"),
      ],
      gist: { prompt: "What does the tourist want?", options: ["Directions to Piazza Maggiore", "A good restaurant", "An umbrella"], answer: 0 },
      details: [
        { prompt: "Where do you turn left?", options: ["At the traffic lights", "At the church", "At the second street"], answer: 0 },
        { prompt: "How far is the square?", options: ["Ten minutes on foot", "Two minutes", "Half an hour"], answer: 0 },
      ],
      tasks: [
        tf("La piazza è a destra della seconda strada.", "The square is right of the second street.", false),
        heard(2, ["semaforo", "sabato", "sedia"], 0),
        gaps(4, "seconda", "destra"),
      ],
      dictation: [2, 4],
      words: {
        turista: { meaning: "tourist" },
        semaforo: { meaning: "traffic lights" },
        maggiore: { meaning: "main, bigger (Piazza Maggiore = Bologna's main square)" },
        prenda: { meaning: "take (to Lei)", base: "prendere" },
      },
    },
    {
      id: "la-lista-della-festa",
      level: "A1",
      title: "La lista della festa",
      titleTranslation: "The party list",
      kind: "dialogue",
      situation: "Thursday. Rita and Emma plan the party for Hiro.",
      grammar: ["c-e-ci-sono", "questions"],
      lines: [
        line("Rita", "Allora, Emma: sabato sera, nel cortile. Ci sono i tavoli?", "So, Emma: Saturday evening, in the courtyard. Are there tables?"),
        line("Emma", "Sì, ci sono due tavoli in cantina. E le sedie?", "Yes, there are two tables in the cellar. And chairs?"),
        line("Rita", "Le sedie ci sono, ma sono vecchie. Va bene lo stesso.", "There are chairs, but they're old. They'll do."),
        line("Emma", "E da mangiare? Marco porta il vino, Giulia le tagliatelle...", "And food? Marco's bringing wine, Giulia tagliatelle..."),
        line("Rita", "C'è anche il dolce di Amadou. E tu cosa porti?", "There's Amadou's cake too. And what are you bringing?"),
        line("Emma", "Un pane irlandese! È la ricetta di mia nonna.", "An Irish bread! It's my grandma's recipe."),
      ],
      gist: { prompt: "What are they doing?", options: ["Planning the party", "Cleaning the courtyard", "Cooking together"], answer: 0 },
      details: [
        { prompt: "Where are the tables?", options: ["In the cellar", "In Rita's flat", "At Marco's bar"], answer: 0 },
        { prompt: "What is Emma bringing?", options: ["Irish bread", "Tagliatelle", "Wine"], answer: 0 },
      ],
      tasks: [
        tf("Le sedie sono nuove.", "The chairs are new.", false),
        heard(1, ["cantina", "cucina", "camera"], 0),
        gaps(4, "dolce", "porti"),
      ],
      dictation: [1, 4],
      words: {
        cantina: { meaning: "cellar" },
        sedie: { meaning: "chairs", base: "sedia" },
        vecchie: { meaning: "old", base: "vecchio" },
        ricetta: { meaning: "recipe" },
        porti: { meaning: "you bring", base: "portare" },
      },
    },
  ],
  writing: [
    a1({
      id: "w-la-mia-casa",
      title: "La mia casa",
      titleTranslation: "My home",
      form: "description",
      situation: "An Italian friend is coming to stay. Describe your home so they know what to expect.",
      points: [
        pf("Say where you live and on which floor", "Abito in … , al … piano.", "abito", "piano"),
        pf("Say how many rooms there are", "Ci sono … stanze.", "ci sono", "stanze"),
        pf("Describe one room with c'è / ci sono", "Nel soggiorno c'è … .", "c'è", "soggiorno", "cucina", "camera"),
        pf("Say where something is", "Sul tavolo … .", "sul", "nel", "accanto", "vicino"),
        pf("Say what's near your home", "Vicino a casa mia c'è … .", "vicino", "c'è", "ci sono"),
        pf("Say what you like best", "Il mio posto preferito è … .", "preferito", "posto"),
      ],
      model:
        "Abito in un appartamento in centro, al terzo piano. Non c'è l'ascensore! Ci sono tre stanze: il soggiorno, la camera da letto e una piccola cucina. Nel soggiorno c'è un divano blu e ci sono tante piante. Sul tavolo c'è sempre un libro. Vicino a casa mia c'è un parco e ci sono due bar. Il mio posto preferito è il balcone.",
    }),
    a1({
      id: "w-come-arrivare",
      title: "Come arrivare da me",
      titleTranslation: "How to get to my place",
      form: "message",
      situation: "A friend is coming to your place for the first time. Send directions from the station.",
      points: [
        pf("Start the message", "Ciao … !", "ciao"),
        pf("Say where to start", "Esci dalla stazione e … .", "esci", "stazione"),
        pf("Give a direction with gira or vai", "Vai dritto fino a … , poi gira a … .", "vai", "gira", "dritto", "destra", "sinistra"),
        pf("Say what they'll see", "C'è … .", "c'è", "ci sono"),
        pf("Say which door and floor", "Il portone è … . Abito al … piano.", "portone", "piano"),
        pf("Say goodbye", "A presto!", "presto", "ciao"),
      ],
      model:
        "Ciao Sara! Esci dalla stazione e prendi la strada a destra. Vai dritto fino alla piazza, poi gira a sinistra. C'è una chiesa e accanto c'è una farmacia. Casa mia è dopo la farmacia: il portone è verde. Abito al secondo piano. A presto!",
    }),
  ],
  checkpoint: {
    title: "Un biglietto nella cassetta",
    titleTranslation: "A note in the letterbox",
    text: [
      [
        s("Lunedì Emma trova un biglietto nella cassetta della posta.", "On Monday Emma finds a note in the letterbox."),
        s("\"Cari vicini, grazie per la festa! Sabato il mio laboratorio è aperto per tutti, dalle dieci all'una. È in via Zamboni, al numero ventidue, al piano terra. Dalla nostra via: andate dritto fino a Piazza Maggiore, poi girate a sinistra. Ci sono caffè e musica! Hiro\"", "\"Dear neighbours, thank you for the party! On Saturday my workshop is open to everyone, from ten to one. It's on Via Zamboni, at number twenty-two, on the ground floor. From our street: go straight on to Piazza Maggiore, then turn left. There'll be coffee and music! Hiro\""),
      ],
    ],
    textTasks: [
      tf("Il laboratorio di Hiro è aperto sabato pomeriggio.", "Hiro's workshop is open on Saturday afternoon.", false),
      mc("Where do you turn left?", ["At Piazza Maggiore", "At the church", "At Via Zamboni 22"], 0),
      mc("Why does Hiro write to the neighbours?", ["To thank them and invite them to his workshop", "To complain about the noise", "To ask for help moving"], 0),
    ],
    listening: {
      situation: "Rita leaves Emma a voice message.",
      lines: [
        line("Rita", "Emma, cara, sono Rita.", "Emma, dear, it's Rita."),
        line("Rita", "Sabato vieni con me da Hiro?", "Are you coming with me to Hiro's on Saturday?"),
        line("Rita", "Io non cammino veloce. Partiamo alle dieci meno un quarto, davanti al portone.", "I don't walk fast. Let's leave at quarter to ten, in front of the main door."),
        line("Rita", "Porto Pavarotti? No, no, scherzo! Ciao, cara!", "Shall I bring Pavarotti? No, no, I'm joking! Bye, dear!"),
      ],
      questions: [
        { prompt: "When and where do they meet?", options: ["9:45, in front of the main door", "10:00, at the workshop", "9:15, at the bar"], answer: 0 },
        { prompt: "Why do they leave early?", options: ["Rita doesn't walk fast", "The workshop opens early", "Rita wants a coffee first"], answer: 0 },
      ],
    },
    write: {
      situation: "Answer Rita: say yes, say you'll be at the door, and add something nice.",
      points: [
        { prompt: "Say yes", frame: "Sì, signora Rita, … !" },
        { prompt: "Say when you'll be at the door", frame: "Sono davanti al portone alle … ." },
        { prompt: "Add something nice", frame: "… !" },
      ],
      model: "Sì, signora Rita, vengo volentieri! Sono davanti al portone alle dieci meno un quarto. Porto io i cornetti per tutti!",
      modelTranslation: "Yes, Signora Rita, I'd love to come! I'll be in front of the main door at quarter to ten. I'll bring croissants for everyone!",
    },
    words: {
      trova: { meaning: "finds", base: "trovare" },
      cassetta: { meaning: "box (cassetta della posta = letterbox)" },
      posta: { meaning: "post, mail" },
      zamboni: { meaning: "Zamboni (a street in Bologna's university area)" },
      ventidue: { meaning: "twenty-two" },
      terra: { meaning: "ground; earth (piano terra = ground floor)" },
      nostra: { meaning: "our", base: "nostro" },
      andate: { meaning: "go (to several people)", base: "andare" },
      girate: { meaning: "turn (to several people)", base: "girare" },
      cammino: { meaning: "I walk", base: "camminare" },
      veloce: { meaning: "fast" },
      partiamo: { meaning: "let's leave; we leave", base: "partire" },
      scherzo: { meaning: "I'm joking", base: "scherzare" },
      volentieri: { meaning: "gladly, I'd love to" },
    },
  },
};
