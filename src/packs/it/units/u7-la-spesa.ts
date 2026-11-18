import type { Unit } from "@/core/content";
import { a1, gaps, heard, line, mc, order, pf, s, tf } from "./helpers";

/**
 * A1 unit 7: food shopping. Quantities and prices, the partitive (del pane,
 * delle mele), the modal verbs potere, volere, dovere. Lead: Lin Chen, who
 * runs the shop at the end of Via del Pratello with her grandfather Wei.
 */
export const spesa: Unit = {
  id: "it-a1-spesa",
  level: "A1",
  title: "La spesa",
  titleTranslation: "Food shopping",
  look: { motif: "lemon", glaze: "ochre" },
  canDo: [
    "Buy food in a shop or at a market: quantities and prices",
    "Say 'some': del pane, della frutta, dei pomodori",
    "Say what you can, want and have to do: posso, voglio, devo",
    "Write a shopping list and plan a meal",
  ],
  story: {
    id: "il-negozio-dei-chen",
    title: "Il negozio dei Chen",
    titleTranslation: "The Chens' shop",
    intro:
      "Lin Chen was born in Bologna and runs the little shop at the end of Via del Pratello with her grandfather Wei, who came from China thirty years ago. This week Karim wants to cook his father's couscous. Four episodes, one street.",
  },
  texts: [
    {
      id: "lin-1-il-negozio",
      level: "A1",
      title: "Il negozio dei Chen",
      titleTranslation: "The Chens' shop",
      grammar: ["partitive", "quantities", "c-e-ci-sono"],
      paragraphs: [
        [
          s("In fondo a via del Pratello c'è un piccolo negozio di alimentari. Si chiama \"Da Lin\".", "At the end of Via del Pratello there's a small grocer's. It's called \"Da Lin\"."),
          s("Lin Chen ha ventotto anni ed è nata a Bologna. I suoi nonni vengono dalla Cina.", "Lin Chen is twenty-eight and was born in Bologna. Her grandparents come from China."),
          s("Lin parla italiano, cinese e un po' di dialetto bolognese, perché ascolta i clienti anziani!", "Lin speaks Italian, Chinese and a little Bolognese dialect, because she listens to the elderly customers!"),
        ],
        [
          s("Il negozio è piccolo, ma c'è tutto: frutta e verdura, pane, pasta, riso, latte, uova e formaggio.", "The shop is small, but it has everything: fruit and vegetables, bread, pasta, rice, milk, eggs and cheese."),
          s("Ci sono anche delle spezie da tutto il mondo e dei prodotti cinesi, africani e arabi.", "There are also spices from all over the world and Chinese, African and Arab products."),
          s("Il negozio è aperto tutti i giorni, dalle otto di mattina alle dieci di sera.", "The shop is open every day, from eight in the morning to ten at night."),
          s("Quando il supermercato è chiuso, tutta la via viene da Lin.", "When the supermarket is closed, the whole street comes to Lin's."),
        ],
        [
          s("Il nonno di Lin si chiama Wei. Ha settantacinque anni e lavora ancora la mattina, alla cassa.", "Lin's grandfather is called Wei. He's seventy-five and still works in the mornings, at the till."),
          s("Wei parla italiano con l'accento bolognese, e i clienti ridono sempre.", "Wei speaks Italian with a Bologna accent, and customers always laugh."),
          s("\"Nonno, perché parli come un bolognese?\" \"Perché vivo qui da trent'anni, cara!\"", "\"Grandpa, why do you talk like someone from Bologna?\" \"Because I've lived here for thirty years, dear!\""),
        ],
      ],
      tasks: [
        mc("Why does the whole street come to Lin's when the supermarket is closed?", ["Lin's shop is open every day until ten", "Lin's shop is cheaper", "The supermarket is far away"], 0),
        tf("Lin è nata in Cina.", "Lin was born in China.", false),
        mc("Why does Lin know some Bolognese dialect?", ["She listens to the elderly customers", "She studies it at university", "Her mother is from Bologna"], 0),
        mc("Why do customers laugh when Wei talks?", ["He has a strong Bologna accent", "He tells jokes", "He speaks Chinese"], 0),
      ],
    },
    {
      id: "lin-2-la-spesa-di-karim",
      level: "A1",
      title: "La spesa di Karim",
      titleTranslation: "Karim's shopping",
      grammar: ["quantities", "modal-verbs", "partitive"],
      paragraphs: [
        [
          s("Venerdì Karim entra nel negozio con una lista. Sabato vuole cucinare il cuscus di suo padre per tutti i vicini.", "On Friday Karim comes into the shop with a list. On Saturday he wants to cook his father's couscous for all the neighbours."),
          s("\"Ciao Lin! Mi servono delle verdure: un chilo di carote, mezzo chilo di zucchine e due cipolle.\"", "\"Hi Lin! I need some vegetables: a kilo of carrots, half a kilo of courgettes and two onions.\""),
          s("\"Ecco. Qualcos'altro?\" \"Sì: due etti di ceci, un chilo di cuscus e una bottiglia d'olio.\"", "\"Here you are. Anything else?\" \"Yes: two hundred grams of chickpeas, a kilo of couscous and a bottle of oil.\""),
        ],
        [
          s("\"E la carne?\" chiede Lin. \"La carne no. Giulia è vegetariana, e io devo pensare a tutti!\"", "\"And the meat?\" Lin asks. \"No meat. Giulia is vegetarian, and I have to think of everyone!\""),
          s("\"E le spezie? Per il cuscus ci vogliono le spezie giuste.\"", "\"And the spices? Couscous needs the right spices.\""),
          s("Lin prende un piccolo sacchetto dallo scaffale. \"Questo è ras el hanout. Viene dal Marocco, come tuo padre.\"", "Lin takes a little bag from the shelf. \"This is ras el hanout. It comes from Morocco, like your father.\""),
          s("Karim è contento. \"Perfetto! Quanto costa tutto?\" \"Sono diciotto euro e cinquanta.\"", "Karim is happy. \"Perfect! How much is everything?\" \"It's eighteen euros fifty.\""),
        ],
        [
          s("\"Posso pagare con la carta?\" \"Certo.\"", "\"Can I pay by card?\" \"Of course.\""),
          s("Al momento di uscire, Karim si ferma. \"Lin, sabato sera puoi venire anche tu? E tuo nonno?\"", "Just as he's leaving, Karim stops. \"Lin, can you come on Saturday evening too? And your grandfather?\""),
          s("\"Volentieri! Il nonno non mangia mai il cuscus. Ma vuole provare tutto.\"", "\"I'd love to! Grandpa has never eaten couscous. But he wants to try everything.\""),
        ],
      ],
      tasks: [
        mc("Why doesn't Karim buy meat?", ["Giulia is vegetarian", "Meat is too expensive", "The shop has no meat"], 0),
        mc("Why does Lin give Karim ras el hanout?", ["Couscous needs the right spices", "It's on offer", "Karim asks for it"], 0),
        tf("Karim paga con i contanti.", "Karim pays in cash.", false),
        order("Put Karim's shopping in order.", "Vegetables", "Chickpeas, couscous and oil", "The spices", "Paying", "The invitation"),
      ],
    },
    {
      id: "lin-3-al-mercato",
      level: "A1",
      title: "Al Mercato delle Erbe",
      titleTranslation: "At the Mercato delle Erbe",
      grammar: ["quantities", "partitive", "numbers-big"],
      paragraphs: [
        [
          s("Sabato mattina Lin e il nonno Wei vanno al Mercato delle Erbe, il mercato coperto di Bologna.", "On Saturday morning Lin and Grandpa Wei go to the Mercato delle Erbe, Bologna's covered market."),
          s("Qui comprano la frutta fresca per il negozio: delle mele, delle arance e dell'uva.", "Here they buy fresh fruit for the shop: some apples, some oranges and some grapes."),
          s("Il nonno conosce tutti i venditori. \"Buongiorno, Franco! Com'è la frutta oggi?\"", "Grandpa knows all the sellers. \"Good morning, Franco! How's the fruit today?\""),
          s("\"Bellissima, Wei! Le arance vengono dalla Sicilia. Costano due euro al chilo.\"", "\"Beautiful, Wei! The oranges come from Sicily. They cost two euros a kilo.\""),
        ],
        [
          s("\"Allora ne prendo venti chili. E vorrei dieci chili di mele, per favore.\"", "\"Then I'll take twenty kilos. And I'd like ten kilos of apples, please.\""),
          s("Franco scrive i numeri su un foglio. \"Le arance costano quaranta euro, le mele diciotto e l'uva venticinque. In tutto sono ottantatré euro.\"", "Franco writes the numbers on a sheet. \"The oranges cost forty euros, the apples eighteen and the grapes twenty-five. That's eighty-three in total.\""),
          s("\"Ottanta, va bene?\" chiede il nonno. Franco ride: \"Per te, Wei, ottanta!\"", "\"Eighty, all right?\" Grandpa asks. Franco laughs: \"For you, Wei, eighty!\""),
        ],
        [
          s("Lin è sorpresa. \"Nonno! In Italia non si contratta!\"", "Lin is surprised. \"Grandpa! In Italy people don't haggle!\""),
          s("\"No, cara. Con gli amici di trent'anni, sì, si contratta.\"", "\"No, dear. With friends of thirty years, yes, you do haggle.\""),
          s("Poi Wei compra anche del formaggio e del pane per la cena di Karim. \"Non possiamo andare a mani vuote!\"", "Then Wei also buys some cheese and some bread for Karim's dinner. \"We can't go empty-handed!\""),
        ],
      ],
      tasks: [
        mc("How much do the oranges cost?", ["Forty euros for twenty kilos", "Two euros in total", "Eighty euros"], 0),
        tf("Franco e Wei si conoscono da poco.", "Franco and Wei have only known each other a short time.", false),
        mc("Why does Franco accept eighty euros?", ["Wei is an old friend", "The fruit isn't fresh", "Lin asks him to"], 0),
        mc("Why does Wei buy cheese and bread?", ["To bring something to Karim's dinner", "For the shop", "For breakfast"], 0),
      ],
    },
    {
      id: "lin-4-la-cena-di-karim",
      level: "A1",
      title: "La cena di Karim",
      titleTranslation: "Karim's dinner",
      grammar: ["modal-verbs", "partitive", "quantities"],
      paragraphs: [
        [
          s("Sabato sera la cucina di Emma, Giulia e Karim è piena di gente.", "On Saturday evening Emma, Giulia and Karim's kitchen is full of people."),
          s("Ci sono anche Rita, Hiro, Amadou, Lin e il nonno Wei, con il pane e il formaggio.", "Rita, Hiro, Amadou, Lin and Grandpa Wei are there too, with the bread and the cheese."),
          s("Karim cucina da tre ore. La cucina ha un profumo buonissimo.", "Karim has been cooking for three hours. The kitchen smells wonderful."),
        ],
        [
          s("\"Possiamo mangiare?\" chiede Emma. \"Un momento! Devo assaggiare.\"", "\"Can we eat?\" Emma asks. \"Just a moment! I have to taste it.\""),
          s("Karim assaggia e diventa rosso. \"Oh no! Non c'è sale! E il sale è finito!\"", "Karim tastes it and goes red. \"Oh no! There's no salt! And we've run out of salt!\""),
          s("Lin si alza subito. \"Il negozio è a due minuti. Ho le chiavi!\"", "Lin gets up straight away. \"The shop is two minutes away. I've got the keys!\""),
          s("Dopo cinque minuti Lin torna con un pacco di sale. \"Ecco! E anche del peperoncino, per chi vuole.\"", "Five minutes later Lin comes back with a packet of salt. \"Here! And some chilli too, for anyone who wants it.\""),
        ],
        [
          s("Finalmente mangiano. Il nonno Wei vuole assaggiare tutto e prende tre piatti.", "At last they eat. Grandpa Wei wants to try everything and has three plates."),
          s("\"Buono, eh!\" dice in bolognese. Tutti ridono.", "\"Good, eh!\" he says in Bolognese. Everyone laughs."),
          s("\"Karim, devi venire a cucinare nel mio negozio!\" \"Solo se tu porti sempre il sale, Lin!\"", "\"Karim, you have to come and cook in my shop!\" \"Only if you always bring the salt, Lin!\""),
        ],
      ],
      tasks: [
        mc("What's the problem with the couscous?", ["There's no salt in it", "It's burnt", "There isn't enough"], 0),
        mc("How can Lin get salt so quickly?", ["She has the keys to her shop, two minutes away", "She has salt in her bag", "She asks Rita"], 0),
        tf("Il nonno Wei non vuole mangiare il cuscus.", "Grandpa Wei doesn't want to eat the couscous.", false),
        mc("What does Karim's last line mean?", ["A joke: he'll cook if Lin saves him with the salt again", "He wants to work in a shop", "He's angry with Lin"], 0),
      ],
    },
  ],
  sequence: [
    "lin-1-il-negozio", "al-banco-della-frutta", "partitive",
    "lin-2-la-spesa-di-karim", "quantities",
    "lin-3-al-mercato", "una-lista-per-telefono", "modal-verbs",
    "numbers-big", "write", "lin-4-la-cena-di-karim", "words", "check",
  ],
  listening: [
    {
      id: "al-banco-della-frutta",
      level: "A1",
      title: "Al banco della frutta",
      titleTranslation: "At the fruit stall",
      kind: "dialogue",
      situation: "Emma at a fruit stall at the market.",
      grammar: ["quantities", "partitive", "questions"],
      lines: [
        line("Fruttivendolo", "Buongiorno, signorina! Cosa desidera?", "Good morning, miss! What would you like?"),
        line("Emma", "Buongiorno. Vorrei un chilo di mele, per favore.", "Good morning. I'd like a kilo of apples, please."),
        line("Fruttivendolo", "Rosse o verdi?", "Red or green?"),
        line("Emma", "Rosse. E mezzo chilo di fragole. Quanto costano?", "Red. And half a kilo of strawberries. How much are they?"),
        line("Fruttivendolo", "Le fragole costano quattro euro al chilo. Altro?", "Strawberries are four euros a kilo. Anything else?"),
        line("Emma", "No, grazie. Quanto pago?", "No, thanks. How much do I owe you?"),
        line("Fruttivendolo", "Le mele due euro, le fragole due euro: quattro euro in tutto.", "Apples two euros, strawberries two euros: four euros in total."),
      ],
      gist: { prompt: "What is Emma doing?", options: ["Buying fruit", "Selling fruit", "Asking the way"], answer: 0 },
      details: [
        { prompt: "Which apples does Emma choose?", options: ["Red", "Green", "Yellow"], answer: 0 },
        { prompt: "How much does she pay in total?", options: ["Four euros", "Two euros", "Six euros"], answer: 0 },
      ],
      tasks: [
        tf("Emma compra un chilo di fragole.", "Emma buys a kilo of strawberries.", false),
        heard(3, ["fragole", "farmacia", "foglio"], 0),
        gaps(1, "chilo", "mele"),
      ],
      dictation: [1, 3],
      words: {
        fruttivendolo: { meaning: "greengrocer, fruit seller", closer: "frutta + vendere (to sell)" },
        signorina: { meaning: "miss (a young woman)" },
        fragole: { meaning: "strawberries", base: "fragola" },
        altro: { meaning: "other; anything else? (altro?)" },
        pago: { meaning: "I pay", base: "pagare" },
      },
    },
    {
      id: "una-lista-per-telefono",
      level: "A1",
      title: "Una lista per telefono",
      titleTranslation: "A list over the phone",
      kind: "dialogue",
      situation: "Saturday afternoon. Giulia calls Karim, who's at Lin's shop again.",
      grammar: ["modal-verbs", "partitive"],
      lines: [
        line("Giulia", "Karim, sei ancora da Lin? Devi comprare delle altre cose.", "Karim, are you still at Lin's? You need to buy some more things."),
        line("Karim", "Dimmi. Ho una penna.", "Tell me. I've got a pen."),
        line("Giulia", "Del pane per otto persone, e dell'acqua frizzante.", "Bread for eight people, and some sparkling water."),
        line("Karim", "Quante bottiglie?", "How many bottles?"),
        line("Giulia", "Sei. E non dimenticare il dolce! Rita vuole il gelato.", "Six. And don't forget dessert! Rita wants ice cream."),
        line("Karim", "Il gelato? A novembre?", "Ice cream? In November?"),
        line("Giulia", "Rita dice: il gelato si mangia sempre!", "Rita says: you can always eat ice cream!"),
      ],
      gist: { prompt: "Why does Giulia call?", options: ["To add things to the shopping list", "To cancel the dinner", "To ask for Lin's number"], answer: 0 },
      details: [
        { prompt: "How many bottles of water?", options: ["Six", "Eight", "Two"], answer: 0 },
        { prompt: "Who wants ice cream?", options: ["Rita", "Giulia", "Karim"], answer: 0 },
      ],
      tasks: [
        tf("Karim deve comprare del pane per otto persone.", "Karim has to buy bread for eight people.", true),
        heard(2, ["frizzante", "fragole", "fresca"], 0),
        gaps(4, "dolce", "gelato"),
      ],
      dictation: [2, 4],
      words: {
        dimmi: { meaning: "tell me (dire + mi)", base: "dire" },
        penna: { meaning: "pen" },
        frizzante: { meaning: "sparkling, fizzy" },
        dimenticare: { meaning: "to forget" },
        gelato: { meaning: "ice cream" },
        novembre: { meaning: "November" },
      },
    },
  ],
  writing: [
    a1({
      id: "w-la-lista-della-spesa",
      title: "La lista della spesa",
      titleTranslation: "The shopping list",
      form: "message",
      situation: "You're cooking dinner for friends. Your flatmate is at the shop: send them a message with what to buy.",
      points: [
        pf("Greet them and say why you're writing", "Ciao! Stasera cucino … .", "cucino", "stasera", "cena"),
        pf("Ask for vegetables with a quantity", "Mi serve un chilo di … .", "chilo", "mezzo", "etti"),
        pf("Ask for something with del / della / dei", "Prendi anche del … .", "del", "della", "dei", "delle"),
        pf("Ask for a bottle or a packet", "E una bottiglia di … .", "bottiglia", "pacco"),
        pf("Say what you mustn't forget", "Non dimenticare … !", "dimenticare"),
        pf("Say thanks", "Grazie mille!", "grazie"),
      ],
      model:
        "Ciao Marta! Stasera cucino la pasta con le verdure per sei persone. Mi serve un chilo di pomodori, mezzo chilo di zucchine e due cipolle. Prendi anche del formaggio e del pane fresco, per favore. Compra anche una bottiglia d'olio. Non dimenticare il dolce: Paolo vuole il gelato! Grazie mille!",
    }),
    a1({
      id: "w-una-cena-per-gli-amici",
      title: "Una cena per gli amici",
      titleTranslation: "A dinner for friends",
      form: "story",
      situation: "Like Karim, you cook a dish from your family for friends. Tell the story.",
      points: [
        pf("Say what you cook and why", "Sabato cucino … , il piatto di mia … .", "cucino", "piatto"),
        pf("Say what you need to buy", "Devo comprare … .", "devo", "comprare"),
        pf("Say where you go shopping", "Vado al … / da … .", "mercato", "negozio", "supermercato"),
        pf("Say who comes", "Vengono … .", "vengono", "amici"),
        pf("Say what goes wrong, or not", "Ma … !", "ma"),
        pf("Say how the evening ends", "Alla fine … .", "fine", "contenti"),
      ],
      model:
        "Sabato cucino la pasta al pomodoro, il piatto di mia nonna. Devo comprare un chilo di pomodori, delle cipolle, dell'olio e del formaggio. Vado al mercato la mattina presto. Vengono quattro amici: Lin, Hiro, Sara e Tom. Ma la sera la pasta è finita! Devo andare da Lin alle nove. Alla fine mangiamo alle dieci, ma tutti sono contenti.",
    }),
  ],
  checkpoint: {
    title: "Le offerte della settimana",
    titleTranslation: "This week's offers",
    text: [
      [
        s("Sulla porta del negozio di Lin c'è un foglio nuovo.", "There's a new sheet on the door of Lin's shop."),
        s("\"Offerte della settimana! Pasta: tre pacchi per due euro. Mele: un euro e cinquanta al chilo. Latte fresco: un euro al litro. Domenica il negozio chiude alle sei: il nonno Wei compie settantasei anni!\"", "\"This week's offers! Pasta: three packets for two euros. Apples: one euro fifty a kilo. Fresh milk: one euro a litre. On Sunday the shop closes at six: Grandpa Wei turns seventy-six!\""),
      ],
    ],
    textTasks: [
      tf("Tre pacchi di pasta costano tre euro.", "Three packets of pasta cost three euros.", false),
      mc("How much are two kilos of apples?", ["Three euros", "One euro fifty", "Two euros"], 0),
      mc("Why does the shop close early on Sunday?", ["It's Grandpa Wei's birthday", "There's a market", "Lin is on holiday"], 0),
    ],
    listening: {
      situation: "Lin leaves Emma a voice message.",
      lines: [
        line("Lin", "Ciao Emma, sono Lin!", "Hi Emma, it's Lin!"),
        line("Lin", "Domenica è il compleanno del nonno. Facciamo una piccola festa nel negozio, alle sette.", "Sunday is Grandpa's birthday. We're having a little party in the shop, at seven."),
        line("Lin", "Puoi portare qualcosa da bere? Il dolce lo fa Karim!", "Can you bring something to drink? Karim's making the dessert!"),
        line("Lin", "Il nonno vuole ancora il cuscus, ovviamente. Ciao!", "Grandpa wants couscous again, of course. Bye!"),
      ],
      questions: [
        { prompt: "What time is the party?", options: ["At seven", "At six", "At eight"], answer: 0 },
        { prompt: "What should Emma bring?", options: ["Something to drink", "The dessert", "Couscous"], answer: 0 },
      ],
    },
    write: {
      situation: "Answer Lin: say yes, say what you'll bring, and ask something.",
      points: [
        { prompt: "Say yes", frame: "Ciao Lin, … !" },
        { prompt: "Say what you'll bring", frame: "Porto … ." },
        { prompt: "Ask her something", frame: "… ?" },
      ],
      model: "Ciao Lin, vengo volentieri! Porto due bottiglie di vino e dell'acqua frizzante. Devo portare anche dei bicchieri?",
      modelTranslation: "Hi Lin, I'd love to come! I'll bring two bottles of wine and some sparkling water. Do I need to bring glasses too?",
    },
    words: {
      offerte: { meaning: "offers, deals", base: "offerta" },
      foglio: { meaning: "sheet (of paper)" },
      pacchi: { meaning: "packets", base: "pacco" },
      litro: { meaning: "litre" },
      compie: { meaning: "turns (an age)", base: "compiere" },
      settantasei: { meaning: "seventy-six" },
      facciamo: { meaning: "we make; we're having", base: "fare" },
      ovviamente: { meaning: "obviously, of course" },
      lin: { meaning: "Lin (a name)" },
    },
  },
};
