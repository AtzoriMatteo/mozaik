import type { Unit } from "@/core/content";
import { a1, gaps, heard, line, mc, order, pf, s, tf } from "./helpers";

/**
 * A1 unit 12: holidays and memories. Dates and seasons, avere or essere in
 * the past, un anno fa. Lead: Emma again, closing the A1 year: Christmas in
 * Naples, New Year in Bologna, the Befana. Culture: panettone or pandoro,
 * the presepe, the Vigilia fish dinner, the Vecchione, lentils, the Befana.
 */
export const feste: Unit = {
  id: "it-a1-feste",
  level: "A1",
  title: "Le feste",
  titleTranslation: "Holidays",
  look: { motif: "laurel", glaze: "ochre" },
  canDo: [
    "Say dates and when things happen: il 25 dicembre, a gennaio, in inverno",
    "Tell what you did, choosing avere or essere: ho mangiato, sono andata",
    "Say how long ago: un anno fa",
    "Know how Italians celebrate Christmas, New Year and the Befana, and some lesser-known customs",
  ],
  story: {
    id: "il-primo-inverno-di-emma",
    title: "Il primo inverno di Emma",
    titleTranslation: "Emma's first winter",
    intro:
      "A year ago Emma arrived on Via del Pratello knowing nobody. This winter she spends Christmas in Naples with Marco's family, New Year in Piazza Maggiore, and the sixth of January with a very strange present. The last unit of A1.",
  },
  texts: [
    {
      id: "emma-1-natale-con-i-tuoi",
      level: "A1",
      title: "Natale con i tuoi",
      titleTranslation: "Christmas with your family",
      grammar: ["dates", "c-e-ci-sono", "piacere"],
      paragraphs: [
        [
          s("A dicembre via del Pratello è piena di luci. Sotto i portici ci sono i mercatini di Natale.", "In December Via del Pratello is full of lights. Under the porticoes there are Christmas markets."),
          s("Al Bar Margherita c'è una grande discussione: panettone o pandoro?", "At Bar Margherita there's a big debate: panettone or pandoro?"),
          s("\"Il panettone è più buono, con l'uvetta e i canditi!\" dice Rita. \"Il pandoro è meglio, senza niente dentro!\" dice Karim. Ogni anno è la stessa discussione.", "\"Panettone is better, with raisins and candied fruit!\" says Rita. \"Pandoro is better, with nothing inside!\" says Karim. Every year it's the same debate."),
        ],
        [
          s("Emma quest'anno non può tornare in Irlanda: il biglietto costa troppo.", "This year Emma can't go back to Ireland: the ticket costs too much."),
          s("\"In Italia diciamo: Natale con i tuoi, Pasqua con chi vuoi\", spiega Giulia. \"A Natale si sta con la famiglia.\"", "\"In Italy we say: Christmas with your family, Easter with whoever you like,\" Giulia explains. \"At Christmas you're with your family.\""),
          s("\"Ma la mia famiglia è a Dublino!\" Marco sorride. \"Allora vieni a Napoli con me. Mia madre ti aspetta dal mese scorso!\"", "\"But my family is in Dublin!\" Marco smiles. \"Then come to Naples with me. My mother has been expecting you since last month!\""),
        ],
        [
          s("Il ventitré dicembre Emma e Marco partono in treno.", "On the twenty-third of December Emma and Marco leave by train."),
          s("A Napoli Marco la porta in via San Gregorio Armeno, la strada dei presepi.", "In Naples Marco takes her to Via San Gregorio Armeno, the street of nativity scenes."),
          s("Ci sono migliaia di statuine: Gesù, Maria, i pastori, ma anche calciatori, cantanti e politici!", "There are thousands of little figures: Jesus, Mary, the shepherds, but also footballers, singers and politicians!"),
          s("Emma compra una statuina per Rita: un piccolo barista con una moka. È Marco.", "Emma buys a figure for Rita: a little barista with a moka pot. It's Marco."),
        ],
      ],
      tasks: [
        mc("What's the debate at the bar about?", ["Which Christmas cake is better: panettone or pandoro", "Where to spend Christmas", "The price of the lights"], 0),
        mc("What does \"Natale con i tuoi, Pasqua con chi vuoi\" mean?", ["Christmas is for family; Easter you can spend with anyone", "Christmas and Easter are both for family", "Easter is more important"], 0),
        tf("Emma va in Irlanda per Natale.", "Emma goes to Ireland for Christmas.", false),
        mc("Why is the figure Emma buys funny?", ["It looks like Marco", "It's a footballer", "It's very big"], 0),
      ],
    },
    {
      id: "emma-2-la-vigilia",
      level: "A1",
      title: "La Vigilia",
      titleTranslation: "Christmas Eve",
      grammar: ["passato-scelta", "passato-essere", "passato-prossimo", "dates"],
      paragraphs: [
        [
          s("Il ventisei dicembre Emma scrive nel suo diario.", "On the twenty-sixth of December Emma writes in her diary."),
          s("Il ventiquattro sera, la Vigilia, siamo stati a casa della mamma di Marco. Eravamo in diciotto!", "On the evening of the twenty-fourth, Christmas Eve, we were at Marco's mum's house. There were eighteen of us!"),
          s("Alla Vigilia, a Napoli, non si mangia la carne: solo pesce. Abbiamo mangiato gli spaghetti alle vongole, il baccalà fritto e il capitone, una specie di grande anguilla.", "On Christmas Eve, in Naples, people don't eat meat: only fish. We ate spaghetti with clams, fried salt cod and capitone, a kind of big eel."),
          s("Io ho assaggiato il capitone. Non mi è piaciuto molto, ma non l'ho detto!", "I tasted the capitone. I didn't like it much, but I didn't say so!"),
        ],
        [
          s("Dopo cena abbiamo giocato a tombola. La zia di novantadue anni ha vinto, naturalmente.", "After dinner we played tombola. The ninety-two-year-old aunt won, of course."),
          s("A mezzanotte i bambini hanno messo Gesù Bambino nel presepe. Prima di mezzanotte il presepe è senza Gesù!", "At midnight the children put Baby Jesus in the nativity scene. Before midnight the nativity has no Jesus!"),
          s("Poi molti sono andati a messa. Io sono rimasta a casa con la zia e abbiamo mangiato gli struffoli, palline di miele.", "Then many went to Mass. I stayed at home with the aunt and we ate struffoli, little honey balls."),
        ],
        [
          s("Il venticinque c'è stato un altro pranzo: quattro ore! Ho mangiato troppo.", "On the twenty-fifth there was another lunch: four hours! I ate too much."),
          s("La mamma di Marco mi ha dato un regalo: una sciarpa rossa, fatta a mano. \"È per il freddo di Bologna!\"", "Marco's mum gave me a present: a red scarf, handmade. \"It's for the cold in Bologna!\""),
          s("Ho chiamato mia madre a Dublino e ho pianto un po', ma di felicità.", "I called my mother in Dublin and cried a bit, but from happiness."),
        ],
      ],
      tasks: [
        mc("Why is there no meat on Christmas Eve?", ["In Naples it's a fish-only evening", "Marco's mum is vegetarian", "The shops are closed"], 0),
        tf("A Emma è piaciuto molto il capitone.", "Emma liked the capitone a lot.", false),
        mc("Why is Baby Jesus put in the nativity scene at midnight?", ["Tradition: before Christmas the nativity has no Jesus yet", "The children forgot", "He was broken"], 0),
        mc("Why did Emma cry?", ["She was happy, after calling her mother", "She was sad to be away", "The food was too spicy"], 0),
      ],
    },
    {
      id: "emma-3-capodanno",
      level: "A1",
      title: "Capodanno",
      titleTranslation: "New Year's Eve",
      grammar: ["dates", "c-e-ci-sono", "passato-essere"],
      paragraphs: [
        [
          s("Il trentuno dicembre Emma è tornata a Bologna. Capodanno si passa con gli amici.", "On the thirty-first of December Emma came back to Bologna. New Year's Eve you spend with friends."),
          s("A cena, da Giulia, ci sono le lenticchie e il cotechino. \"Le lenticchie portano soldi\", spiega Giulia. \"Più ne mangi, più soldi hai nell'anno nuovo!\"", "At dinner, at Giulia's, there are lentils and cotechino. \"Lentils bring money,\" Giulia explains. \"The more you eat, the more money you'll have in the new year!\""),
          s("Karim ne mangia tre piatti. \"Io voglio diventare ricco!\"", "Karim eats three plates. \"I want to get rich!\""),
          s("Poi Giulia dà a Emma un pacchetto: dentro c'è della biancheria rossa. \"A Capodanno si porta qualcosa di rosso. Porta fortuna!\"", "Then Giulia gives Emma a little package: inside there's red underwear. \"At New Year you wear something red. It brings luck!\""),
        ],
        [
          s("Alle undici e mezza vanno tutti in Piazza Maggiore. La piazza è piena di gente.", "At half past eleven they all go to Piazza Maggiore. The square is full of people."),
          s("In mezzo alla piazza c'è il Vecchione: un grande pupazzo, alto come una casa. È il simbolo dell'anno vecchio.", "In the middle of the square there's the Vecchione: a big puppet, as tall as a house. It's the symbol of the old year."),
          s("A mezzanotte tutti contano: \"Dieci, nove, otto...\" e il Vecchione brucia. Con lui brucia tutto il brutto dell'anno.", "At midnight everyone counts: \"Ten, nine, eight...\" and the Vecchione burns. Everything bad about the year burns with it."),
          s("\"Buon anno!\" Tutti si abbracciano e si baciano. Emma bacia tutti: Giulia, Karim, Marco, anche un signore sconosciuto.", "\"Happy New Year!\" Everyone hugs and kisses. Emma kisses everyone: Giulia, Karim, Marco, even a man she doesn't know."),
        ],
      ],
      tasks: [
        mc("Why do Italians eat lentils at New Year?", ["They're said to bring money", "They're cheap", "Because of the cold"], 0),
        mc("What is the Vecchione?", ["A big puppet burnt at midnight in Piazza Maggiore", "An old man in the square", "A New Year's cake"], 0),
        tf("A Capodanno si porta qualcosa di verde.", "At New Year you wear something green.", false),
        mc("Why does Karim eat three plates of lentils?", ["He wants to be rich", "He's very hungry", "He loves lentils"], 0),
      ],
    },
    {
      id: "emma-4-un-anno-fa",
      level: "A1",
      title: "Un anno fa",
      titleTranslation: "A year ago",
      grammar: ["passato-prossimo", "passato-essere", "fa-ago"],
      paragraphs: [
        [
          s("Il sei gennaio è l'Epifania. Arriva la Befana, una vecchia signora su una scopa.", "The sixth of January is Epiphany. The Befana arrives, an old lady on a broom."),
          s("Porta le caramelle ai bambini buoni e il carbone ai bambini cattivi. Ma oggi il carbone è di zucchero!", "She brings sweets to good children and coal to naughty ones. But nowadays the coal is made of sugar!"),
          s("La mattina Emma trova una calza davanti alla porta. Dentro ci sono caramelle, e c'è anche un pezzo di carbone. C'è un biglietto: \"Per la ragazza con i capelli bagnati. La Befana\"", "In the morning Emma finds a stocking in front of her door. Inside there are sweets, and there's a piece of coal too. There's a note: \"For the girl with wet hair. The Befana\""),
          s("Emma ride. Sa benissimo chi è la Befana di via del Pratello.", "Emma laughs. She knows perfectly well who the Befana of Via del Pratello is."),
        ],
        [
          s("La sera Emma guarda le foto dell'anno sul telefono.", "In the evening Emma looks at the year's photos on her phone."),
          s("Un anno fa è arrivata a Bologna con una valigia e tre parole di italiano.", "A year ago she arrived in Bologna with a suitcase and three words of Italian."),
          s("Ha conosciuto Giulia e Karim, ha bevuto mille cappuccini da Marco, ha festeggiato il suo compleanno.", "She met Giulia and Karim, drank a thousand cappuccinos at Marco's, celebrated his birthday."),
          s("Amadou le ha accorciato i jeans, Rita le ha insegnato le pantofole, Lin le ha venduto il sale, Davide l'ha portata ai concerti.", "Amadou shortened her jeans, Rita taught her about slippers, Lin sold her the salt, Davide took her to concerts."),
        ],
        [
          s("Prima di dormire scrive nel diario, in italiano: \"Un anno fa non conoscevo nessuno. Adesso ho una via intera.\"", "Before sleeping she writes in her diary, in Italian: \"A year ago I didn't know anyone. Now I have a whole street.\""),
          s("Poi spegne la luce. Domani mattina, al bar, Marco le prepara un cappuccino con un cuore nella schiuma, come il primo giorno.", "Then she turns off the light. Tomorrow morning, at the bar, Marco will make her a cappuccino with a heart in the foam, like the first day."),
        ],
      ],
      tasks: [
        mc("What does the Befana bring to naughty children?", ["Coal (today made of sugar)", "Nothing", "Vegetables"], 0),
        mc("Who is the Befana of Via del Pratello, probably?", ["Rita: she's the one who talks about wet hair", "Marco", "Giulia's grandma"], 0),
        tf("Emma è arrivata a Bologna con tante parole di italiano.", "Emma arrived in Bologna with lots of Italian words.", false),
        order("Put Emma's year in order.", "She arrives with a suitcase", "Marco's birthday", "Christmas in Naples", "The Vecchione burns", "The Befana's stocking"),
      ],
    },
  ],
  sequence: [
    "emma-1-natale-con-i-tuoi", "al-mercatino", "dates",
    "emma-2-la-vigilia", "auguri-da-dublino", "passato-scelta",
    "emma-3-capodanno", "fa-ago",
    "write", "emma-4-un-anno-fa", "words", "check",
  ],
  listening: [
    {
      id: "al-mercatino",
      level: "A1",
      title: "Al mercatino",
      titleTranslation: "At the Christmas market",
      kind: "dialogue",
      situation: "Emma looks for presents at the Christmas market under the porticoes.",
      grammar: ["quantities", "numbers-big", "questions"],
      lines: [
        line("Venditrice", "Buonasera! Cerca un regalo?", "Good evening! Are you looking for a present?"),
        line("Emma", "Sì, per una signora anziana. Le piacciono i gatti.", "Yes, for an elderly lady. She likes cats."),
        line("Venditrice", "Ecco: una tazza con un gatto. Costa dodici euro.", "Here: a mug with a cat. It costs twelve euros."),
        line("Emma", "Bella! E per un ragazzo che ama il jazz?", "Lovely! And for a young man who loves jazz?"),
        line("Venditrice", "Questo calendario con i musicisti jazz. Quindici euro.", "This calendar with jazz musicians. Fifteen euros."),
        line("Emma", "Li prendo tutti e due. Può fare un pacchetto regalo?", "I'll take both. Can you gift-wrap them?"),
        line("Venditrice", "Certo. Ventisette euro, con il pacchetto gratis.", "Of course. Twenty-seven euros, with free wrapping."),
      ],
      gist: { prompt: "What is Emma doing?", options: ["Buying Christmas presents", "Selling things", "Buying food"], answer: 0 },
      details: [
        { prompt: "Who is the mug for, probably?", options: ["Rita, who has a cat", "Davide", "Marco"], answer: 0 },
        { prompt: "How much does Emma pay?", options: ["27 euros", "12 euros", "15 euros"], answer: 0 },
      ],
      tasks: [
        tf("Il pacchetto regalo costa due euro.", "The gift wrapping costs two euros.", false),
        heard(4, ["calendario", "cartolina", "candela"], 0),
        gaps(2, "tazza", "gatto"),
      ],
      dictation: [1, 5],
      words: {
        venditrice: { meaning: "seller (a woman)" },
        mercatino: { meaning: "little market (mercatino di Natale = Christmas market)", base: "mercato" },
        ama: { meaning: "loves", base: "amare" },
        musicisti: { meaning: "musicians", base: "musicista" },
        tutti: { meaning: "all (tutti e due = both)" },
        pacchetto: { meaning: "little package (pacchetto regalo = gift wrap)" },
        gratis: { meaning: "free" },
        ventisette: { meaning: "twenty-seven" },
      },
    },
    {
      id: "auguri-da-dublino",
      level: "A1",
      title: "Auguri da Dublino",
      titleTranslation: "Greetings from Dublin",
      kind: "dialogue",
      situation: "Christmas Day. Emma's mum calls her from Dublin.",
      grammar: ["passato-prossimo", "passato-essere"],
      lines: [
        line("Madre", "Buon Natale, tesoro! Hai mangiato bene?", "Merry Christmas, darling! Have you eaten well?"),
        line("Emma", "Troppo, mamma! Ieri sera abbiamo mangiato solo pesce, e oggi abbiamo mangiato per quattro ore.", "Too much, Mum! Last night we only ate fish, and today we've eaten for four hours."),
        line("Madre", "Quattro ore? E siete andati a messa?", "Four hours? And did you go to Mass?"),
        line("Emma", "Loro sono andati. Io sono rimasta con la zia di Marco.", "They went. I stayed with Marco's aunt."),
        line("Madre", "Qui è come sempre: il tacchino, il pudding e la pioggia.", "Here it's like always: the turkey, the pudding and the rain."),
        line("Emma", "Mi mancate. L'anno prossimo vengo a casa, promesso.", "I miss you. Next year I'll come home, promise."),
      ],
      gist: { prompt: "What are they talking about?", options: ["Their Christmas in Naples and in Dublin", "Emma's job", "A train ticket"], answer: 0 },
      details: [
        { prompt: "Who stayed at home during Mass?", options: ["Emma, with Marco's aunt", "Marco", "Emma's mother"], answer: 0 },
        { prompt: "What's Christmas like in Dublin?", options: ["Turkey, pudding and rain", "Fish and tombola", "Snow and skiing"], answer: 0 },
      ],
      tasks: [
        tf("Emma è andata a messa.", "Emma went to Mass.", false),
        heard(4, ["tacchino", "taccuino", "tavolino"], 0),
        gaps(5, "prossimo", "casa"),
      ],
      dictation: [3, 5],
      words: {
        madre: { meaning: "mother" },
        messa: { meaning: "Mass (church service)" },
        rimasta: { meaning: "stayed", base: "rimanere" },
        tacchino: { meaning: "turkey" },
        pudding: { meaning: "(Christmas) pudding" },
        pioggia: { meaning: "rain" },
        mancate: { meaning: "mi mancate = I miss you (all)", base: "mancare" },
        siete: { meaning: "you (plural) are", base: "essere" },
      },
    },
  ],
  writing: [
    a1({
      id: "w-la-mia-festa-preferita",
      title: "La mia festa preferita",
      titleTranslation: "My favourite holiday",
      form: "description",
      situation: "An Italian friend asks about a holiday from your country or family. Describe it, with a custom they might not know.",
      points: [
        pf("Say which holiday and when", "La mia festa preferita è … , il … .", "festa", "preferita"),
        pf("Say who you spend it with", "La passo con … .", "passo", "famiglia", "amici"),
        pf("Say what you eat", "Mangiamo … .", "mangiamo"),
        pf("Describe a custom", "C'è una tradizione: … .", "tradizione", "c'è"),
        pf("Say what you did last time", "L'anno scorso ho / sono … .", "scorso", "ho", "sono"),
        pf("Say why you like it", "Mi piace perché … .", "piace", "perché"),
      ],
      model:
        "La mia festa preferita è il Capodanno cinese, a gennaio o a febbraio. La passo con la mia famiglia. Mangiamo i ravioli e il pesce. C'è una tradizione: i nonni danno ai bambini una busta rossa con i soldi. L'anno scorso sono andata a casa dei nonni e ho ricevuto tre buste! Mi piace perché tutta la famiglia è insieme.",
    }),
    a1({
      id: "w-il-mio-anno",
      title: "Il mio anno",
      titleTranslation: "My year",
      form: "story",
      situation: "Like Emma, look back at the last year. What did you do?",
      points: [
        pf("Say where you were a year ago", "Un anno fa … .", "fa"),
        pf("Say something you did with avere", "Ho … .", "ho"),
        pf("Say somewhere you went with essere", "Sono andato / andata … .", "sono", "andato", "andata"),
        pf("Say someone you met", "Ho conosciuto … .", "conosciuto"),
        pf("Say something you learned", "Ho imparato … .", "imparato"),
        pf("Say how you feel now", "Adesso … .", "adesso"),
      ],
      model:
        "Un anno fa sono partito da Lisbona con una valigia e tre parole di italiano. Quest'anno ho cominciato un corso di italiano e ho letto il mio primo libro in italiano. A luglio sono andato in Sicilia con due amici. Ho conosciuto tante persone simpatiche. Ho imparato a fare il caffè con la moka! Adesso sono contento e voglio continuare.",
    }),
  ],
  checkpoint: {
    title: "Il biglietto di Rita",
    titleTranslation: "Rita's card",
    text: [
      [
        s("Il sette gennaio Emma trova un altro biglietto sotto la porta.", "On the seventh of January Emma finds another card under the door."),
        s("\"Cara Emma, sì, la Befana sono io. Un anno fa sei arrivata con una valigia enorme e io ti ho visto dal balcone. Adesso parli italiano, e qualche volta anche bolognese! Buon anno, cara. Però, mi raccomando, i capelli asciutti! La tua vicina, Rita\"", "\"Dear Emma, yes, I'm the Befana. A year ago you arrived with an enormous suitcase and I saw you from the balcony. Now you speak Italian, and sometimes even Bolognese! Happy New Year, dear. But please, dry hair! Your neighbour, Rita\""),
      ],
    ],
    textTasks: [
      tf("Rita ha visto Emma il primo giorno.", "Rita saw Emma on her first day.", true),
      mc("Who was the Befana?", ["Rita", "Giulia", "Marco"], 0),
      mc("What does Rita ask Emma, again?", ["To dry her hair", "To visit her", "To speak Bolognese"], 0),
    ],
    listening: {
      situation: "Marco leaves Emma a voice message.",
      lines: [
        line("Marco", "Emma, buon anno! Sono Marco.", "Emma, happy New Year! It's Marco."),
        line("Marco", "Mia madre ha chiamato: vuole sapere quando torni a Napoli.", "My mum called: she wants to know when you're coming back to Naples."),
        line("Marco", "Le ho detto: a Pasqua! Natale con i tuoi, Pasqua con chi vuoi, no?", "I told her: at Easter! Christmas with your family, Easter with whoever you like, right?"),
        line("Marco", "Ah, e domani al bar il cappuccino lo offro io. Ciao!", "Oh, and tomorrow at the bar the cappuccino's on me. Bye!"),
      ],
      questions: [
        { prompt: "When should Emma go back to Naples?", options: ["At Easter", "In the summer", "Next Christmas"], answer: 0 },
        { prompt: "What does Marco offer?", options: ["A cappuccino tomorrow", "A train ticket", "A panettone"], answer: 0 },
      ],
    },
    write: {
      situation: "Answer Rita's card: thank her, say one thing you did this year, and wish her something.",
      points: [
        { prompt: "Thank her", frame: "Cara Rita, … !" },
        { prompt: "Say one thing you did this year", frame: "Quest'anno ho … ." },
        { prompt: "Wish her something", frame: "Buon … !" },
      ],
      model: "Cara Rita, grazie per la calza e per tutto! Quest'anno ho imparato l'italiano, ma anche le pantofole. Buon anno, e lunga vita a Pavarotti!",
      modelTranslation: "Dear Rita, thank you for the stocking and for everything! This year I learned Italian, but also about slippers. Happy New Year, and long live Pavarotti!",
    },
    words: {
      sette: { meaning: "seven" },
      gennaio: { meaning: "January" },
      biglietto: { meaning: "card, note; ticket" },
      befana: { meaning: "the Befana (the old lady who brings sweets on 6 January)" },
      valigia: { meaning: "suitcase" },
      bolognese: { meaning: "the Bologna dialect; from Bologna" },
      asciutti: { meaning: "dry", base: "asciutto" },
      detto: { meaning: "said", base: "dire" },
      pasqua: { meaning: "Easter" },
      offro: { meaning: "it's on me", base: "offrire" },
      torni: { meaning: "you come back", base: "tornare" },
      vicina: { meaning: "neighbour (a woman)" },
      però: { meaning: "but, however" },
      qualche: { meaning: "some (qualche volta = sometimes)" },
    },
  },
};
