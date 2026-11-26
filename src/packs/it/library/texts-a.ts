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
      [
        s("Un mese dopo Sara torna a Roma. Adesso vuole vedere un'altra città: non i monumenti, ma i quartieri dove vivono i romani.", "A month later Sara goes back to Rome. Now she wants to see another city: not the monuments, but the neighbourhoods where the Romans live."),
        s("Luca la aspetta alla stazione. Prendono il tram e vanno a Trastevere, un quartiere vecchio con strade strette e piccole piazze.", "Luca is waiting for her at the station. They take the tram and go to Trastevere, an old neighbourhood with narrow streets and little squares."),
      ],
      [
        s("La mattina c'è il mercato a Campo de' Fiori. C'è frutta, verdura, formaggio e tanti fiori. Sara compra delle pesche e un pezzo di pecorino per sua madre.", "In the morning there's the market at Campo de' Fiori. There's fruit, vegetables, cheese and lots of flowers. Sara buys some peaches and a piece of pecorino for her mother."),
        s("Luca compra due supplì. Il supplì è una palla di riso fritta con il pomodoro e la mozzarella dentro. Quando lo mangi, la mozzarella fa un filo lungo. Sara ride: è buonissimo!", "Luca buys two supplì. A supplì is a fried rice ball with tomato and mozzarella inside. When you eat it, the mozzarella makes a long string. Sara laughs: it's delicious!"),
      ],
      [
        s("Poi salgono sul Gianicolo, una collina sopra la città. La strada è lunga e c'è il sole, ma dall'alto si vede tutta Roma: le chiese, i tetti rossi e la cupola di San Pietro.", "Then they climb the Gianicolo, a hill above the city. The road is long and it's sunny, but from the top you can see the whole of Rome: the churches, the red roofs and the dome of St Peter's."),
        s("A mezzogiorno si sente un colpo forte. Sara ha paura! Luca spiega: è il cannone del Gianicolo. Spara ogni giorno a mezzogiorno, da più di cento anni.", "At noon there's a loud bang. Sara is frightened! Luca explains: it's the Gianicolo cannon. It fires every day at noon, and has done for more than a hundred years."),
      ],
      [
        s("La sera mangiano in una piccola pizzeria. La pizza romana è sottile e croccante. Bevono una birra e parlano fino a tardi.", "In the evening they eat in a small pizzeria. Roman pizza is thin and crispy. They drink a beer and talk until late."),
        s("Sul treno Sara pensa: i monumenti sono belli, ma questa Roma mi piace ancora di più. A casa dà il pecorino a sua madre. La madre chiede: quando ci torni? Sara ride: il mese prossimo, naturalmente.", "On the train Sara thinks: the monuments are beautiful, but I like this Rome even more. At home she gives the pecorino to her mother. Her mother asks: when are you going back? Sara laughs: next month, of course."),
      ],
    ],
    tasks: [
      mc("How long does the train journey take?", ["An hour and ten minutes", "Three hours", "Ten minutes"], 0),
      tf("Il caffè costa cinque euro.", "The coffee costs five euros.", false),
      mc("Why does Sara throw a coin into the fountain?", ["So she'll come back to Rome", "To pay for a ticket", "For a friend"], 0),
      tf("Sara vuole tornare a Roma.", "Sara wants to come back to Rome.", true),
      tf("A mezzogiorno spara il cannone del Gianicolo.", "At noon the Gianicolo cannon fires.", true),
      mc("What is a supplì?", ["A fried rice ball with tomato and mozzarella", "A kind of pizza", "A sweet"], 0),
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
      [
        s("A dicembre Amina si ammala. Ha la febbre e deve stare a letto per una settimana. I bambini devono andare a scuola, ma chi li porta?", "In December Amina falls ill. She has a fever and has to stay in bed for a week. The children have to go to school, but who takes them?"),
        s("Io dico: ci penso io. Ogni mattina alle otto sono davanti alla sua porta. Porto Nora e suo fratello Yassin a scuola. Sono dieci minuti a piedi.", "I say: I'll do it. Every morning at eight I'm at her door. I take Nora and her brother Yassin to school. It's a ten-minute walk."),
      ],
      [
        s("Yassin parla per tutta la strada. Racconta dei suoi amici, del calcio e della sua maestra. Nora è più silenziosa. Mi tiene la mano quando attraversiamo la strada.", "Yassin talks the whole way. He tells me about his friends, about football and about his teacher. Nora is quieter. She holds my hand when we cross the road."),
        s("A scuola non conosco nessuno, ma dopo qualche giorno gli altri genitori mi salutano. Una mamma mi chiede: lei è il nonno di Nora? Io dico: no, sono il vicino. Lei sorride e dice: è bello lo stesso.", "At school I don't know anyone, but after a few days the other parents say hello to me. A mother asks me: are you Nora's grandfather? I say: no, I'm the neighbour. She smiles and says: that's lovely all the same."),
      ],
      [
        s("Il pomeriggio cucino un brodo per Amina. Non sono un bravo cuoco, ma il brodo di verdure lo so fare. Me l'ha insegnato mia moglie, tanti anni fa.", "In the afternoon I cook a broth for Amina. I'm not a good cook, but I can make vegetable broth. My wife taught me, many years ago."),
        s("Amina dice che è il brodo più buono di Verona. Io so che non è vero, ma sono contento lo stesso.", "Amina says it's the best broth in Verona. I know it isn't true, but I'm happy all the same."),
      ],
      [
        s("Dopo una settimana Amina sta meglio. Viene alla mia porta con una grande scatola. Nella scatola c'è una sciarpa nuova. L'ha fatta lei, di colore blu, il mio colore preferito.", "After a week Amina is better. She comes to my door with a big box. In the box there's a new scarf. She made it herself, in blue, my favourite colour."),
        s("Adesso porto la sciarpa ogni giorno. Mio figlio mi telefona dalla Germania e chiede: come stai, papà? Io dico: bene, figlio mio. Davvero molto bene.", "Now I wear the scarf every day. My son phones me from Germany and asks: how are you, Dad? I say: well, my son. Really very well."),
      ],
    ],
    tasks: [
      mc("Where do Franco's children live?", ["In Milan and in Germany", "In Verona", "In Morocco"], 0),
      tf("Amina offre a Franco un caffè.", "Amina offers Franco a coffee.", false),
      mc("What does Nora do every day?", ["She reads Franco a book", "She cooks", "She plays the guitar"], 0),
      tf("Adesso Franco è meno solo.", "Now Franco is less alone.", true),
      mc("What does Franco do when Amina is ill?", ["He takes the children to school", "He calls a doctor", "He goes to Germany"], 0),
      tf("Amina regala a Franco una sciarpa fatta da lei.", "Amina gives Franco a scarf she made herself.", true),
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
      [
        s("Il mercoledì dopo Lucia non è sola. Viene anche la sua amica Ewa. Ewa è polacca e abita a Bologna solo da due mesi. Non conosce ancora il mercato.", "The next Wednesday Lucia isn't alone. Her friend Ewa comes too. Ewa is Polish and has only lived in Bologna for two months. She doesn't know the market yet."),
        s("Ewa è sorpresa. Anche in Polonia ci sono i mercati, ma non così. E non ha mai visto tanti tipi di formaggio.", "Ewa is surprised. There are markets in Poland too, but not like this. And she's never seen so many kinds of cheese."),
      ],
      [
        s("Al banco dei formaggi Gianni spiega: il parmigiano giovane è più morbido, quello stagionato è duro e forte. Dà a Ewa un pezzetto di ogni formaggio. A Ewa piace di più quello stagionato.", "At the cheese stall Gianni explains: young parmesan is softer, the aged one is hard and strong. He gives Ewa a little piece of each cheese. Ewa likes the aged one best."),
        s("Gianni le chiede di dove è. Poi dice: mio nonno andava in Polonia ogni anno. Diceva che era un paese bellissimo. Ewa è contenta e parlano per dieci minuti.", "Gianni asks her where she's from. Then he says: my grandfather went to Poland every year. He used to say it was a beautiful country. Ewa is pleased and they talk for ten minutes."),
      ],
      [
        s("Poi vanno dal fornaio. Ewa compra un grande pane scuro e Lucia compra le crescentine, il pane fritto di Bologna. Sono calde e morbide. Ne mangiano subito due.", "Then they go to the baker's. Ewa buys a big dark loaf and Lucia buys crescentine, Bologna's fried bread. They're warm and soft. They eat two straight away."),
        s("Ewa dice: anche in Polonia mangiamo tanto pane, ma questo non lo conosco. È buonissimo con il prosciutto! Lucia ride: a Bologna si mangia bene, è una regola.", "Ewa says: we eat a lot of bread in Poland too, but I don't know this one. It's delicious with ham! Lucia laughs: in Bologna you eat well, it's a rule."),
      ],
      [
        s("A casa cucinano insieme. Ewa prepara una zuppa polacca con le barbabietole, e Lucia fa un'insalata. Mangiano al tavolo con i tulipani.", "At home they cook together. Ewa makes a Polish beetroot soup, and Lucia makes a salad. They eat at the table with the tulips."),
        s("Dopo cena Ewa dice: la settimana prossima vengo di nuovo. Lucia dice: va bene, ma allora le borse le porti tu. Sono pesanti!", "After dinner Ewa says: next week I'm coming again. Lucia says: fine, but then you carry the bags. They're heavy!"),
      ],
    ],
    tasks: [
      mc("When is the market?", ["Every Wednesday", "Every Sunday", "Every day"], 0),
      tf("Lucia compra pesce al banco del pesce.", "Lucia buys fish at the fish stall.", false),
      mc("What is fritto misto?", ["Fried fish, hot and crispy", "A kind of cheese", "A flower"], 0),
      tf("Quando piove, Lucia torna a casa.", "When it rains, Lucia goes home.", false),
      tf("A Ewa piace di più il parmigiano giovane.", "Ewa likes the young parmesan best.", false),
      mc("What are crescentine?", ["Bologna's fried bread", "A kind of cheese", "Flowers"], 0),
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
      [
        s("Ad agosto sono tornati davvero, questa volta con la sorella di Davide, Marta, e i suoi due bambini. Hanno affittato una piccola casa a Levanto, un paese vicino, con un giardino e un barbecue.", "In August they really did go back, this time with Davide's sister, Marta, and her two children. They rented a little house in Levanto, a nearby town, with a garden and a barbecue."),
        s("D'estate le Cinque Terre sono molto diverse da maggio. Ci sono turisti dappertutto, e sui sentieri si cammina in fila. Ma se si parte presto la mattina, si è quasi soli.", "In summer the Cinque Terre are very different from May. There are tourists everywhere, and on the paths you walk in single file. But if you set off early in the morning, you're almost alone."),
      ],
      [
        s("I bambini, Giorgia e Tommaso, volevano andare al mare ogni giorno. Hanno cercato conchiglie, hanno nuotato tra gli scogli e hanno visto i pesci con la maschera. L'acqua adesso era calda, anche per Elena.", "The children, Giorgia and Tommaso, wanted to go to the sea every day. They looked for shells, swam among the rocks and saw fish with their masks. The water was warm now, even for Elena."),
        s("Un pomeriggio hanno visto dei delfini dalla barca. Il pescatore che guidava la barca ha spento il motore e tutti sono rimasti in silenzio. Tommaso ha detto che era il giorno più bello della sua vita.", "One afternoon they saw dolphins from the boat. The fisherman who was steering the boat turned off the engine and everyone stayed silent. Tommaso said it was the best day of his life."),
      ],
      [
        s("Davide voleva fare la vendemmia, e un contadino di Corniglia gli ha detto di sì. Per un giorno ha raccolto l'uva sulle terrazze sopra il mare, con un cesto sulle spalle. Il lavoro era faticosissimo: le vigne sono così ripide che a volte si usa un piccolo trenino.", "Davide wanted to help with the grape harvest, and a farmer in Corniglia said yes. For a day he picked grapes on the terraces above the sea, with a basket on his back. The work was exhausting: the vineyards are so steep that sometimes a little rack railway is used."),
        s("Il contadino gli ha raccontato che molti giovani hanno lasciato la terra per lavorare nel turismo. Se nessuno cura più i muretti, la montagna frana. Alla sera Davide è tornato stanco, sporco e molto contento.", "The farmer told him that many young people have left the land to work in tourism. If nobody looks after the walls any more, the mountainside collapses. In the evening Davide came back tired, dirty and very happy."),
      ],
      [
        s("Elena è rimasta con i bambini a Levanto. Sono andati a una scuola di cucina, dove Giorgia ha imparato a fare il pesto nel mortaio. Tommaso ha comprato una piccola barca di legno con i suoi soldi.", "Elena stayed in Levanto with the children. They went to a cookery school, where Giorgia learned to make pesto in a mortar. Tommaso bought a little wooden boat with his own money."),
        s("L'ultima sera hanno mangiato le acciughe sul terrazzo della casa. Il sole è tramontato tardi, rosso sopra il mare. Marta ha detto: l'anno prossimo di nuovo? E questa volta tutti hanno detto di sì, anche Elena.", "On the last evening they ate anchovies on the terrace of the house. The sun set late, red above the sea. Marta said: again next year? And this time everyone said yes, even Elena."),
      ],
    ],
    tasks: [
      mc("Why aren't cars much use in the Cinque Terre?", ["The roads are narrow and there's little parking", "Cars are forbidden", "There are no roads"], 0),
      tf("Il sentiero è tutto in piano.", "The path is completely flat.", false),
      mc("What is pesto made with in Liguria?", ["Basil, pine nuts, parmesan and olive oil", "Tomatoes and onions", "Fish and lemon"], 0),
      tf("Domenica faceva bel tempo.", "On Sunday the weather was nice.", false),
      mc("What did Davide do with a farmer?", ["He picked grapes", "He went fishing", "He built a wall"], 0),
      tf("Ad agosto Elena trovava l'acqua ancora troppo fredda.", "In August Elena still found the water too cold.", false),
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
      [
        s("Qualche settimana prima, a dicembre, la città era già piena di luci. In piazza c'era l'albero di Natale e in molte chiese c'era il presepe, con le statuine di Maria, Giuseppe, il bue e l'asinello.", "A few weeks earlier, in December, the city was already full of lights. In the square there was the Christmas tree and in many churches there was the nativity scene, with the little figures of Mary, Joseph, the ox and the donkey."),
        s("A Natale la famiglia Rossi aveva mangiato tutta insieme, per ore: i tortellini in brodo, l'arrosto e il panettone. Ma per Marco e Giulia il Natale era solo l'inizio. La festa più attesa doveva ancora arrivare.", "At Christmas the Rossi family had eaten all together, for hours: tortellini in broth, the roast and panettone. But for Marco and Giulia Christmas was only the beginning. The most awaited celebration was still to come."),
      ],
      [
        s("A scuola, prima delle vacanze, la maestra aveva raccontato la storia della Befana. Si dice che i Re Magi, in viaggio verso Betlemme, chiesero la strada a una vecchia signora e la invitarono ad andare con loro.", "At school, before the holidays, the teacher had told the story of the Befana. It's said that the Three Kings, on their way to Bethlehem, asked an old lady the way and invited her to go with them."),
        s("Lei disse di no, perché aveva troppo da fare in casa. Poi se ne pentì e partì da sola, con un sacco pieno di dolci, ma non trovò mai i Re Magi. Da allora, ogni anno, lascia un regalo in tutte le case dove ci sono bambini, sperando che uno di loro sia Gesù.", "She said no, because she had too much to do at home. Then she regretted it and set off alone, with a sack full of sweets, but she never found the Three Kings. Since then, every year, she leaves a present in every house where there are children, hoping that one of them is Jesus."),
      ],
      [
        s("Marco ha nove anni e comincia ad avere dei dubbi. Come può una vecchietta entrare in tutte le case d'Italia in una notte? E poi, la loro casa non ha nemmeno un camino vero, solo una stufa. Lo chiede al papà.", "Marco is nine and is starting to have doubts. How can an old lady get into every house in Italy in one night? And besides, their house doesn't even have a real chimney, just a stove. He asks his dad."),
        s("Il papà risponde soltanto: e tu cosa pensi? Marco ci pensa per tutto il giorno. La sera guarda il mandarino sul tavolo e decide che è meglio non pensarci troppo.", "His dad just answers: and what do you think? Marco thinks about it all day. In the evening he looks at the mandarin on the table and decides it's better not to think about it too much."),
      ],
      [
        s("Qualche giorno dopo l'Epifania, la nonna porta Giulia a fare una passeggiata. Le racconta che quando era piccola, in campagna, la Befana portava solo un'arancia e qualche castagna, e che erano i regali più belli del mondo.", "A few days after Epiphany, Grandma takes Giulia for a walk. She tells her that when she was little, in the countryside, the Befana only brought an orange and a few chestnuts, and that they were the best presents in the world."),
        s("Una sera di gennaio Marco dice alla mamma: lo so, siete voi. La mamma sorride. Marco aggiunge: ma non lo dico a Giulia. L'anno prossimo vi aiuto io. Così anch'io sarò un po' Befana.", "One evening in January Marco says to his mum: I know, it's you. His mum smiles. Marco adds: but I won't tell Giulia. Next year I'll help you. That way I'll be a bit of a Befana too."),
      ],
    ],
    tasks: [
      mc("When does the Befana come?", ["The night of 5 to 6 January", "On Christmas Eve", "On New Year's Eve"], 0),
      tf("La Befana è una signora giovane e bella.", "The Befana is a young and beautiful lady.", false),
      mc("What is the coal made of today?", ["Sugar", "Wood", "Chocolate"], 0),
      tf("Quando il nonno era piccolo, riceveva molti regali.", "When Grandpa was little, he got lots of presents.", false),
      mc("What does Marco decide at the end?", ["To keep the secret and help next year", "To tell Giulia", "To write to the Befana"], 0),
      tf("Secondo la storia, la Befana trovò i Re Magi.", "According to the story, the Befana found the Three Kings.", false),
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
      [
        s("Traslocare in Italia vuol dire anche tanta burocrazia. Chiara e Paolo hanno dovuto andare all'anagrafe del nuovo comune per cambiare la residenza. Pochi giorni dopo, un vigile è passato a controllare che abitassero davvero lì.", "Moving in Italy also means a lot of bureaucracy. Chiara and Paolo had to go to the registry office of the new town to change their residence. A few days later, a municipal officer came by to check that they really lived there."),
        s("Hanno dovuto anche cambiare il contratto della luce e del gas, chiedere internet e comunicare il nuovo indirizzo alla banca, al medico e al lavoro. Paolo ha scritto una lista di trenta cose da fare.", "They also had to change the electricity and gas contract, ask for internet and give their new address to the bank, the doctor and work. Paolo wrote a list of thirty things to do."),
      ],
      [
        s("Internet non ha funzionato per due settimane. Paolo doveva lavorare da casa, quindi ogni giorno andava con il computer al bar sotto casa. Il barista, Enzo, gli preparava il caffè e lo lasciava lavorare per ore.", "The internet didn't work for two weeks. Paolo had to work from home, so every day he went with his computer to the bar downstairs. The barista, Enzo, made him coffee and let him work for hours."),
        s("Chiara invece era contenta di scoprire il nuovo quartiere. Camminava lungo il fiume, guardava il castello sulla collina e comprava la frutta al mercato del sabato.", "Chiara, on the other hand, was happy to discover the new neighbourhood. She walked along the river, looked at the castle on the hill and bought fruit at the Saturday market."),
      ],
      [
        s("Nel palazzo hanno conosciuto presto i vicini. Sullo stesso pianerottolo abitano due anziani, Piero e Rosa, da quarant'anni. Piero sa tutto del palazzo: chi abita dove, chi trasloca e quando passa la raccolta della carta.", "They soon got to know the neighbours in the building. On the same landing live an elderly couple, Piero and Rosa, who have been there forty years. Piero knows everything about the building: who lives where, who's moving and when the paper collection comes."),
        s("Al piano di sopra abita una giovane famiglia con un bambino di un anno. La mamma, Priya, ha dato a Chiara tanti consigli: sull'ostetrica, sul pediatra e sul miglior asilo nido della zona.", "Upstairs lives a young family with a one-year-old. The mother, Priya, gave Chiara lots of advice: about the midwife, the paediatrician and the best nursery in the area."),
      ],
      [
        s("In estate il palazzo ha organizzato una cena in cortile. Ognuno ha portato qualcosa: Chiara una torta salata, Rosa le sue lasagne famose, Piero il vino di suo cugino e Priya i samosa.", "In the summer the building held a dinner in the courtyard. Everyone brought something: Chiara a savoury tart, Rosa her famous lasagne, Piero his cousin's wine and Priya samosas."),
        s("Sofia dormiva nel passeggino nonostante la musica. Quella sera Paolo ha detto: a Torino, dopo quattro anni, non conoscevamo i vicini. Qui, dopo quattro mesi, conosciamo tutto il palazzo.", "Sofia slept in her pushchair despite the music. That evening Paolo said: in Turin, after four years, we didn't know the neighbours. Here, after four months, we know the whole building."),
      ],
    ],
    tasks: [
      mc("Why did Chiara and Paolo need a bigger home?", ["Chiara was pregnant", "Paolo got a new job", "The flat was sold"], 0),
      tf("Hanno trovato la nuova casa dopo una settimana.", "They found the new home after a week.", false),
      mc("Why didn't Chiara lift heavy things?", ["She was pregnant", "She was ill", "She was at work"], 0),
      tf("Una vicina ha portato una pianta e un biglietto.", "A neighbour brought a plant and a card.", true),
      mc("Why did Paolo work at the bar?", ["The internet at home didn't work yet", "The bar was quieter than his office", "He didn't have a computer"], 0),
      tf("Dopo quattro mesi conoscono tutto il palazzo.", "After four months they know the whole building.", true),
    ],
  },
];
