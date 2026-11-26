import type { ReadingText } from "@/core/content";
import { mc, s, tf } from "../units/helpers";

type LibraryText = ReadingText & { topic: string };

/** Long Library texts at A1 and A2: a whole story in one sitting. */
export const textsA: LibraryText[] = [
  {
    id: "lib-a1-una-giornata-a-roma",
    level: "A1",
    topic: "Travel",
    title: "Una giornata a Roma",
    titleTranslation: "A day in Rome",
    grammar: [],
    paragraphs: [
      [
        s("Sara abita a Napoli. Ha ventitré anni e studia all'università. Sabato va a Roma in treno. Il viaggio dura un'ora e dieci minuti.", "Sara lives in Naples. She's twenty-three and studies at university. On Saturday she goes to Rome by train. The journey takes an hour and ten minutes."),
        s("Alla stazione Termini c'è tanta gente. Ci sono molti turisti con grandi valigie. Sara prende la metro e scende al Colosseo.", "At Termini station there are lots of people. There are many tourists with big suitcases. Sara takes the metro and gets off at the Colosseum."),
      ],
      [
        s("Prima prende un caffè in un piccolo bar. Il caffè costa un euro e venti. È buono e il barista è simpatico.", "First she has a coffee in a small bar. The coffee costs one euro twenty. It's good and the barista is nice."),
        s("Poi visita il Colosseo. È molto grande e molto vecchio: ha quasi duemila anni! Sara fa tante foto. Dopo due ore è stanca e ha caldo.", "Then she visits the Colosseum. It's very big and very old: it's almost two thousand years old! Sara takes lots of photos. After two hours she's tired and hot."),
      ],
      [
        s("All'una ha fame. Compra un pezzo di pizza bianca e una bottiglia d'acqua. Mangia in un parco vicino. Lì ci sono molte persone: i bambini giocano, un uomo suona la chitarra e due donne leggono un libro.", "At one o'clock she's hungry. She buys a piece of pizza bianca and a bottle of water. She eats in a park nearby. There are lots of people there: children are playing, a man is playing the guitar and two women are reading a book."),
        s("Il pomeriggio va a piedi a Fontana di Trevi. Lancia una moneta nell'acqua, perché chi lancia una moneta torna a Roma.", "In the afternoon she walks to the Trevi Fountain. She throws a coin into the water, because whoever throws a coin comes back to Rome."),
      ],
      [
        s("Alle sette cena con il suo amico Luca in una trattoria. Mangiano la carbonara e bevono un bicchiere di vino rosso. Luca abita a Roma e lavora in un negozio.", "At seven she has dinner with her friend Luca in a trattoria. They eat carbonara and drink a glass of red wine. Luca lives in Rome and works in a shop."),
        s("Alle dieci Sara è di nuovo in treno. È stanca, ma contenta. Il mese prossimo torna, perché vuole vedere ancora tante cose.", "At ten Sara is on the train again. She's tired, but happy. Next month she's going back, because she wants to see lots more."),
      ],
    ],
    tasks: [
      mc("How long does the train journey take?", ["An hour and ten minutes", "Three hours", "Ten minutes"], 0),
      tf("Il caffè costa cinque euro.", "The coffee costs five euros.", false),
      mc("Why does Sara throw a coin into the fountain?", ["So she'll come back to Rome", "To pay for a ticket", "For a friend"], 0),
      tf("Sara vuole tornare a Roma.", "Sara wants to come back to Rome.", true),
    ],
  },
  {
    id: "lib-a1-la-mia-nuova-vicina",
    level: "A1",
    topic: "People",
    title: "La mia nuova vicina",
    titleTranslation: "My new neighbour",
    grammar: [],
    paragraphs: [
      [
        s("Mi chiamo Franco e abito in un piccolo appartamento a Verona. Ho settant'anni. Mia moglie è morta e i miei figli abitano lontano, a Milano e in Germania.", "My name is Franco and I live in a small flat in Verona. I'm seventy. My wife has died and my children live far away, in Milan and in Germany."),
        s("Quindi abito da solo. A volte è tranquillo, a volte è un po' noioso.", "So I live alone. Sometimes it's peaceful, sometimes it's a bit boring."),
      ],
      [
        s("Il mese scorso arriva una nuova vicina. Si chiama Amina e viene dal Marocco. Ha trent'anni e ha due figli: un bambino di cinque anni e una bambina di otto.", "Last month a new neighbour arrives. Her name is Amina and she comes from Morocco. She's thirty and has two children: a boy of five and a girl of eight."),
        s("Il primo giorno aiuto con gli scatoloni. Sono pesanti! Amina mi dice grazie e mi offre un tè alla menta. Il tè è molto dolce e molto buono.", "The first day I help with the boxes. They're heavy! Amina says thank you and offers me a mint tea. The tea is very sweet and very nice."),
      ],
      [
        s("Adesso vedo Amina quasi ogni giorno. Lavora in una scuola vicino a casa. Il pomeriggio i bambini giocano in cortile. Fanno molto rumore, ma per me non è un problema. Mi piace sentirli.", "Now I see Amina almost every day. She works at a school near home. In the afternoon the children play in the courtyard. They make a lot of noise, but it's not a problem for me. I like hearing them."),
        s("La bambina si chiama Nora. Impara a leggere e ogni giorno mi legge un libro. Io la aiuto con le parole difficili.", "The girl is called Nora. She's learning to read and every day she reads me a book. I help her with the difficult words."),
      ],
      [
        s("La domenica a volte mangiamo insieme. Amina cucina il cuscus e io faccio il tiramisù. È una bella combinazione!", "On Sundays we sometimes eat together. Amina cooks couscous and I make tiramisù. It's a nice combination!"),
        s("Adesso non sono più così solo. Penso spesso: un buon vicino è meglio di un amico lontano.", "Now I'm not so alone any more. I often think: a good neighbour is better than a faraway friend."),
      ],
    ],
    tasks: [
      mc("Where do Franco's children live?", ["In Milan and in Germany", "In Verona", "In Morocco"], 0),
      tf("Amina offre a Franco un caffè.", "Amina offers Franco a coffee.", false),
      mc("What does Nora do every day?", ["She reads Franco a book", "She cooks", "She plays the guitar"], 0),
      tf("Adesso Franco è meno solo.", "Now Franco is less alone.", true),
    ],
  },
  {
    id: "lib-a1-al-mercato",
    level: "A1",
    topic: "Food",
    title: "Al mercato",
    titleTranslation: "At the market",
    grammar: [],
    paragraphs: [
      [
        s("Ogni mercoledì c'è il mercato in piazza a Bologna. Lucia ci va sempre a piedi. Porta due grandi borse.", "Every Wednesday there's a market in the square in Bologna. Lucia always walks there. She takes two big bags."),
        s("Il mercato comincia alle sette. Alle nove c'è già tanta gente. Ci sono quasi cento banchi con frutta, verdura, pesce, formaggio, pane e fiori.", "The market starts at seven. By nine there are already lots of people. There are almost a hundred stalls with fruit, vegetables, fish, cheese, bread and flowers."),
      ],
      [
        s("Prima Lucia va dal fruttivendolo. Compra patate, pomodori, cipolle e un cavolfiore. Tutto è fresco e non costa molto.", "First Lucia goes to the greengrocer. She buys potatoes, tomatoes, onions and a cauliflower. Everything is fresh and doesn't cost much."),
        s("Poi va al banco dei formaggi. Lì lavora Gianni. È sempre allegro. Lucia assaggia un pezzo di parmigiano e ne prende mezzo chilo.", "Then she goes to the cheese stall. Gianni works there. He's always cheerful. Lucia tastes a piece of parmesan and takes half a kilo."),
      ],
      [
        s("Al banco del pesce non compra pesce, ma un cartoccio di fritto misto. È pesce fritto, caldo e croccante. Lo mangia subito, in piedi.", "At the fish stall she doesn't buy fish, but a paper cone of fritto misto. It's fried fish, hot and crispy. She eats it straight away, standing up."),
        s("Poi piove un po'. Molte persone tornano a casa, ma Lucia no. Ha una giacca con il cappuccio.", "Then it rains a little. Lots of people go home, but Lucia doesn't. She has a jacket with a hood."),
      ],
      [
        s("Alla fine compra dei fiori: dieci tulipani a cinque euro. Sono gialli e rossi.", "At the end she buys some flowers: ten tulips for five euros. They're yellow and red."),
        s("A casa mette i tulipani sul tavolo. Cucina un minestrone con la verdura e mangia pane e formaggio. Che bella giornata!", "At home she puts the tulips on the table. She cooks a minestrone with the vegetables and eats bread and cheese. What a lovely day!"),
      ],
    ],
    tasks: [
      mc("When is the market?", ["Every Wednesday", "Every Sunday", "Every day"], 0),
      tf("Lucia compra pesce al banco del pesce.", "Lucia buys fish at the fish stall.", false),
      mc("What is fritto misto?", ["Fried fish, hot and crispy", "A kind of cheese", "A flower"], 0),
      tf("Quando piove, Lucia torna a casa.", "When it rains, Lucia goes home.", false),
    ],
  },
  {
    id: "lib-a2-un-weekend-alle-cinque-terre",
    level: "A2",
    topic: "Travel",
    title: "Un weekend alle Cinque Terre",
    titleTranslation: "A weekend in the Cinque Terre",
    grammar: [],
    paragraphs: [
      [
        s("L'anno scorso a maggio Davide e la sua ragazza Elena sono andati per un weekend alle Cinque Terre, in Liguria. Sono cinque piccoli paesi sul mare, costruiti sulle rocce.", "Last year in May Davide and his girlfriend Elena went to the Cinque Terre in Liguria for a weekend. They're five little villages by the sea, built on the rocks."),
        s("Venerdì pomeriggio hanno preso il treno per La Spezia e poi un treno regionale. Le macchine qui servono a poco: le strade sono strette e i parcheggi sono pochissimi.", "On Friday afternoon they took the train to La Spezia and then a regional train. Cars aren't much use here: the roads are narrow and there are hardly any car parks."),
      ],
      [
        s("Hanno dormito in una piccola pensione a Vernazza. La camera era semplice, ma dalla finestra si vedeva il porto. La colazione era ottima: focaccia calda, frutta e caffè.", "They slept in a small guesthouse in Vernazza. The room was simple, but from the window you could see the harbour. The breakfast was excellent: warm focaccia, fruit and coffee."),
        s("Sabato hanno camminato da un paese all'altro su un sentiero sopra il mare. Il sentiero sale e scende tra gli ulivi e le vigne. Era faticoso, ma il paesaggio era bellissimo.", "On Saturday they walked from one village to the next on a path above the sea. The path goes up and down among the olive trees and the vineyards. It was tiring, but the scenery was beautiful."),
      ],
      [
        s("A Corniglia, il paese più alto, hanno salito quasi quattrocento scalini. Dall'alto potevano vedere tutta la costa: il mare blu, le case colorate e le barche dei pescatori.", "In Corniglia, the highest village, they climbed almost four hundred steps. From the top they could see the whole coast: the blue sea, the colourful houses and the fishermen's boats."),
        s("Su queste colline la gente coltiva l'uva da secoli. Con l'uva fanno un vino bianco famoso, lo Sciacchetrà. I muretti di pietra che tengono la terra sono lunghi migliaia di chilometri.", "On these hills people have grown grapes for centuries. From the grapes they make a famous white wine, Sciacchetrà. The dry-stone walls that hold up the earth are thousands of kilometres long."),
      ],
      [
        s("Il pomeriggio sono andati in spiaggia a Monterosso. Elena voleva fare il bagno anche se l'acqua era fredda. È entrata in acqua e ha gridato: era gelata!", "In the afternoon they went to the beach in Monterosso. Elena wanted to swim even though the water was cold. She went into the water and shouted: it was freezing!"),
        s("La sera hanno mangiato le trofie al pesto, il piatto tipico della Liguria. Il pesto qui si fa con il basilico, i pinoli, il parmigiano e l'olio d'oliva, e si prepara a mano.", "In the evening they ate trofie al pesto, the typical dish of Liguria. Here pesto is made with basil, pine nuts, parmesan and olive oil, and it's prepared by hand."),
      ],
      [
        s("Domenica ha piovuto tutto il giorno. Sono rimasti in pensione, hanno giocato a carte e letto un libro. A pranzo hanno mangiato le acciughe fritte in una piccola osteria.", "On Sunday it rained all day. They stayed in the guesthouse, played cards and read a book. At lunch they ate fried anchovies in a little osteria."),
        s("Sul treno del ritorno Davide ha detto: torniamo in estate. Elena ha riso e ha risposto: solo se l'acqua è più calda.", "On the train back Davide said: let's come back in the summer. Elena laughed and answered: only if the water's warmer."),
      ],
    ],
    tasks: [
      mc("Why aren't cars much use in the Cinque Terre?", ["The roads are narrow and there's little parking", "Cars are forbidden", "There are no roads"], 0),
      tf("Il sentiero è tutto in piano.", "The path is completely flat.", false),
      mc("What is pesto made with in Liguria?", ["Basil, pine nuts, parmesan and olive oil", "Tomatoes and onions", "Fish and lemon"], 0),
      tf("Domenica faceva bel tempo.", "On Sunday the weather was nice.", false),
    ],
  },
  {
    id: "lib-a2-la-befana",
    // Only here: in the lexicon, nero would count as taught for the A1 grammar exercises.
    words: { nero: { meaning: "black" } },
    level: "A2",
    topic: "Italian life",
    title: "La Befana a casa Rossi",
    titleTranslation: "The Befana at the Rossi home",
    grammar: [],
    paragraphs: [
      [
        s("In Italia le feste di Natale finiscono il 6 gennaio, con l'Epifania. Per i bambini è una giornata speciale, perché la notte prima arriva la Befana.", "In Italy the Christmas holidays end on 6 January, with Epiphany. For children it's a special day, because the night before the Befana comes."),
        s("La Befana è una vecchia signora brutta ma gentile. Ha il naso lungo, un vestito nero pieno di toppe e una scopa. Vola sopra i tetti e scende dal camino.", "The Befana is an ugly but kind old lady. She has a long nose, a black dress full of patches and a broom. She flies over the roofs and comes down the chimney."),
      ],
      [
        s("A casa Rossi, a Firenze, Marco e Giulia aspettano la Befana da giorni. La sera del 5 gennaio appendono le calze al camino. Sul tavolo lasciano un mandarino e un bicchiere di vino per la vecchietta.", "At the Rossi home in Florence, Marco and Giulia have been waiting for the Befana for days. On the evening of 5 January they hang their stockings by the fireplace. On the table they leave a mandarin and a glass of wine for the little old lady."),
        s("Secondo la tradizione, la Befana porta caramelle e cioccolatini ai bambini buoni, e carbone ai bambini cattivi. Ma oggi il carbone è di zucchero, nero e dolce.", "According to tradition, the Befana brings sweets and chocolates to good children, and coal to naughty ones. But today the coal is made of sugar, black and sweet."),
      ],
      [
        s("La mattina dopo Marco corre in salotto. La sua calza è piena: cioccolatini, un'arancia, un piccolo gioco e un pezzo di carbone. Giulia ride: anche nella sua calza c'è il carbone!", "The next morning Marco runs into the living room. His stocking is full: chocolates, an orange, a little toy and a piece of coal. Giulia laughs: there's coal in her stocking too!"),
        s("Il papà dice che forse la Befana ha sentito i loro litigi di dicembre. I bambini si guardano e decidono di essere più buoni l'anno prossimo.", "Dad says that maybe the Befana heard their quarrels in December. The children look at each other and decide to be better next year."),
      ],
      [
        s("A pranzo arriva tutta la famiglia: i nonni, gli zii e i cugini. La nonna prepara i crostini toscani e la ribollita, una zuppa di pane e verdure. Per dolce ci sono i panforti e il vin santo.", "At lunchtime the whole family arrives: the grandparents, the aunts and uncles and the cousins. Grandma makes Tuscan crostini and ribollita, a soup of bread and vegetables. For dessert there's panforte and vin santo."),
        s("Il nonno racconta che quando era piccolo i regali erano pochi: un'arancia, qualche noce e, se era fortunato, un paio di calze nuove. I bambini non ci credono.", "Grandpa tells them that when he was little the presents were few: an orange, a few walnuts and, if he was lucky, a new pair of socks. The children can't believe it."),
      ],
      [
        s("Dopo pranzo la famiglia va in centro, dove in piazza c'è una festa con una Befana vera, cioè un attore vestito da Befana, che regala caramelle a tutti.", "After lunch the family goes into town, where there's a party in the square with a real Befana, that is, an actor dressed as the Befana, who gives sweets to everyone."),
        s("Si dice in Italia: l'Epifania tutte le feste porta via. La sera i bambini sono stanchi e un po' tristi, perché domani si torna a scuola.", "There's a saying in Italy: Epiphany takes all the holidays away. In the evening the children are tired and a bit sad, because tomorrow it's back to school."),
      ],
    ],
    tasks: [
      mc("When does the Befana come?", ["The night of 5 to 6 January", "On Christmas Eve", "On New Year's Eve"], 0),
      tf("La Befana è una signora giovane e bella.", "The Befana is a young and beautiful lady.", false),
      mc("What is the coal made of today?", ["Sugar", "Wood", "Chocolate"], 0),
      tf("Quando il nonno era piccolo, riceveva molti regali.", "When Grandpa was little, he got lots of presents.", false),
    ],
  },
  {
    id: "lib-a2-il-trasloco",
    level: "A2",
    topic: "Home",
    title: "Il trasloco",
    titleTranslation: "The move",
    grammar: [],
    paragraphs: [
      [
        s("Chiara e il suo ragazzo Paolo hanno abitato per quattro anni in un piccolo appartamento nel centro di Torino. Era carino, ma troppo piccolo: una camera, una cucina minuscola e niente balcone.", "Chiara and her boyfriend Paolo lived for four years in a small flat in the centre of Turin. It was nice, but too small: one bedroom, a tiny kitchen and no balcony."),
        s("Quando Chiara è rimasta incinta, hanno capito subito: avevano bisogno di una casa più grande.", "When Chiara got pregnant, they understood straight away: they needed a bigger home."),
      ],
      [
        s("Cercare casa non è facile. Ogni sera guardavano gli annunci su internet. Hanno visto quasi venti appartamenti.", "Looking for a home isn't easy. Every evening they looked at the ads online. They saw almost twenty flats."),
        s("Alcuni erano troppo cari, altri troppo lontani dal lavoro o molto vecchi. In uno la cucina era nel corridoio, in un altro il bagno non aveva la finestra.", "Some were too expensive, others too far from work or very old. In one the kitchen was in the corridor, in another the bathroom had no window."),
      ],
      [
        s("Dopo cinque mesi hanno trovato un appartamento a Moncalieri, vicino alla stazione. Ha tre camere, un balcone grande e una cantina per le biciclette. Non è nuovo, ma è luminoso e tranquillo.", "After five months they found a flat in Moncalieri, near the station. It has three bedrooms, a big balcony and a cellar for the bikes. It isn't new, but it's bright and quiet."),
        s("Hanno firmato il contratto e hanno ricevuto le chiavi un venerdì di marzo.", "They signed the contract and got the keys on a Friday in March."),
      ],
      [
        s("All'inizio c'era molto da fare. Paolo ha dipinto le pareti di bianco e suo padre ha cambiato il pavimento del soggiorno. Chiara ha cercato lampade e tende, perché non poteva sollevare cose pesanti.", "At first there was a lot to do. Paolo painted the walls white and his father changed the living-room floor. Chiara looked for lamps and curtains, because she couldn't lift heavy things."),
        s("Il giorno del trasloco sono venuti sei amici ad aiutare. Hanno noleggiato un furgone e hanno fatto tre viaggi. Il divano quasi non passava dalla porta, e le scale erano strette. Ma alle quattro tutto era dentro.", "On moving day six friends came to help. They hired a van and made three trips. The sofa almost didn't go through the door, and the stairs were narrow. But by four everything was inside."),
      ],
      [
        s("La sera hanno ordinato le pizze per tutti. Si sono seduti per terra tra gli scatoloni, perché le sedie erano ancora imballate.", "In the evening they ordered pizzas for everyone. They sat on the floor among the boxes, because the chairs were still packed."),
        s("Il giorno dopo una vicina ha bussato alla porta con una pianta e un biglietto: benvenuti nel palazzo! Chiara era felice. La casa non era ancora finita, ma sembrava già casa loro.", "The next day a neighbour knocked at the door with a plant and a card: welcome to the building! Chiara was happy. The flat wasn't finished yet, but it already felt like their home."),
      ],
      [
        s("Due mesi dopo è nata la loro figlia. L'hanno chiamata Sofia. La piccola camera accanto alla loro è diventata la sua, con le pareti gialle e un armadio pieno di peluche dei parenti.", "Two months later their daughter was born. They called her Sofia. The small room next to theirs became hers, with yellow walls and a wardrobe full of soft toys from the relatives."),
        s("A volte Chiara pensa ancora al centro di Torino, ai bar sotto casa e al rumore della città. Ma la sera, sul balcone, sente solo gli uccelli e sa che è stata la scelta giusta.", "Sometimes Chiara still thinks of the centre of Turin, the bars below the flat and the noise of the city. But in the evening, on the balcony, she only hears the birds and knows it was the right choice."),
      ],
    ],
    tasks: [
      mc("Why did Chiara and Paolo need a bigger home?", ["Chiara was pregnant", "Paolo got a new job", "The flat was sold"], 0),
      tf("Hanno trovato la nuova casa dopo una settimana.", "They found the new home after a week.", false),
      mc("Why didn't Chiara lift heavy things?", ["She was pregnant", "She was ill", "She was at work"], 0),
      tf("Una vicina ha portato una pianta e un biglietto.", "A neighbour brought a plant and a card.", true),
    ],
  },
];
