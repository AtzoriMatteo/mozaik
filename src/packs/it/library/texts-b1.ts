import type { ReadingText } from "@/core/content";
import { mc, s, tf } from "../units/helpers";

type LibraryText = ReadingText & { topic: string };

/** Library texts at B1: no unit, any order. Articles and stories without dialogue. */
export const textsB1: LibraryText[] = [
  {
    id: "lib-b1-la-sagra-del-paese",
    level: "B1",
    topic: "Italian life",
    title: "La sagra del paese",
    titleTranslation: "The village food festival",
    grammar: [],
    paragraphs: [
      [
        s("In Italia, dalla primavera all'autunno, quasi ogni paese organizza la sua sagra. È una festa dedicata a un prodotto tipico della zona: il tartufo, le castagne, il pesce, perfino la cipolla.", "In Italy, from spring to autumn, almost every village organises its own sagra. It's a festival dedicated to a typical local product: truffles, chestnuts, fish, even onions."),
        s("Per tre o quattro sere la piazza si riempie di tavoli lunghi, luci colorate e musica dal vivo.", "For three or four evenings the square fills with long tables, coloured lights and live music."),
      ],
      [
        s("A cucinare non sono i ristoranti, ma i volontari del paese. Le nonne preparano la pasta fatta in casa, gli uomini stanno alla griglia e i ragazzi portano i piatti ai tavoli.", "It isn't the restaurants that cook, but the village volunteers. The grandmothers make the homemade pasta, the men stand at the grill and the young people carry the plates to the tables."),
        s("I prezzi sono bassi e il cibo è ottimo, quindi arriva gente anche dai paesi vicini. Con i soldi raccolti si paga, per esempio, il nuovo tetto della chiesa o la squadra di calcio dei bambini.", "Prices are low and the food is excellent, so people come from the neighbouring villages too. The money raised pays, for example, for the church's new roof or the children's football team."),
      ],
      [
        s("Molte sagre sono nate negli anni sessanta e settanta, quando tanti giovani lasciavano la campagna per lavorare in città. La sagra era un modo per tornare a casa almeno una volta all'anno.", "Many sagre began in the sixties and seventies, when lots of young people were leaving the countryside to work in the cities. The sagra was a way of coming home at least once a year."),
        s("Oggi c'è chi critica le sagre perché alcune vendono prodotti che non hanno niente a che fare con il territorio. Ma per chi vive in un piccolo paese, restano il momento più bello dell'estate.", "Today some people criticise sagre because some of them sell products that have nothing to do with the area. But for those who live in a small village, they remain the best moment of the summer."),
      ],
      [
        s("Prendiamo la sagra del tartufo di un piccolo paese delle Langhe, in Piemonte. Il paese ha seicento abitanti, ma nel fine settimana della sagra arrivano più di diecimila persone.", "Take the truffle sagra of a small village in the Langhe, in Piedmont. The village has six hundred inhabitants, but on the sagra weekend more than ten thousand people arrive."),
        s("Per mesi i volontari preparano tutto: chiedono i permessi al comune, montano le tende, comprano i tavoli e organizzano i turni in cucina. Chi non sa cucinare lava i piatti o lavora alla cassa.", "For months the volunteers prepare everything: they ask the council for permits, put up the marquees, buy the tables and organise the kitchen shifts. Those who can't cook wash up or work at the till."),
      ],
      [
        s("Alla sagra si mangia seduti uno accanto all'altro, anche con persone che non si conoscono. Si chiacchiera, si passa il vino, e alla fine della serata qualcuno comincia sempre a ballare il liscio.", "At the sagra you eat sitting next to each other, even with people you don't know. You chat, you pass the wine, and at the end of the evening someone always starts dancing the liscio."),
        s("Per molti turisti stranieri è il modo migliore per conoscere la vera cucina italiana: niente menù turistici, ma i piatti che le famiglie del posto preparano da generazioni.", "For many foreign tourists it's the best way to get to know real Italian cooking: no tourist menus, but the dishes the local families have made for generations."),
      ],
    ],
    tasks: [
      mc("What is a sagra about?", ["A typical local product", "A saint's life", "A football match"], 0),
      tf("Alla sagra cucinano i ristoranti del paese.", "At the sagra the village restaurants do the cooking.", false),
      mc("What is the money raised used for?", ["Things the village needs", "The volunteers' wages", "A trip abroad"], 0),
      tf("Molte sagre sono nate quando i giovani lasciavano la campagna.", "Many sagre began when young people were leaving the countryside.", true),
    ],
  },
  {
    id: "lib-b1-la-riunione-di-condominio",
    level: "B1",
    topic: "Neighbours",
    title: "La riunione di condominio",
    titleTranslation: "The residents' meeting",
    grammar: [],
    paragraphs: [
      [
        s("In Italia molte persone vivono in condominio, cioè in un palazzo con tanti appartamenti. Le scale, il cortile e il tetto sono di tutti, e per decidere come gestirli c'è la riunione di condominio.", "In Italy many people live in a condominio, that is, a building with lots of flats. The stairs, the courtyard and the roof belong to everyone, and to decide how to manage them there's the residents' meeting."),
        s("Si fa una o due volte all'anno, di solito la sera, e la guida l'amministratore, una persona pagata da tutti i proprietari.", "It's held once or twice a year, usually in the evening, and it's led by the administrator, a person paid by all the owners."),
      ],
      [
        s("Nel palazzo di Paola, a Torino, l'ultima riunione è durata tre ore. Il problema era l'ascensore: è vecchio, si rompe spesso e cambiarlo costa quarantamila euro.", "In Paola's building, in Turin, the last meeting lasted three hours. The problem was the lift: it's old, it often breaks down and replacing it costs forty thousand euros."),
        s("Chi abita al primo piano non voleva pagare, perché non usa mai l'ascensore. Chi abita al sesto piano, invece, non poteva più aspettare: una signora anziana non esce di casa da due settimane.", "Those who live on the first floor didn't want to pay, because they never use the lift. Those on the sixth floor, on the other hand, couldn't wait any longer: an elderly lady hasn't left her home for two weeks."),
      ],
      [
        s("Dopo molte discussioni, qualcuno ha proposto una soluzione: chi abita più in alto paga di più, come prevede anche la legge. Alla fine hanno votato quasi tutti a favore.", "After a lot of discussion, someone proposed a solution: those who live higher up pay more, as the law also provides. In the end almost everyone voted in favour."),
        s("Paola è uscita stanca ma contenta. Le riunioni di condominio hanno una brutta fama in Italia, e spesso finiscono in litigi. Questa volta, però, i vicini si sono ascoltati.", "Paola came out tired but happy. Residents' meetings have a bad reputation in Italy, and they often end in quarrels. This time, though, the neighbours listened to each other."),
      ],
      [
        s("Nelle riunioni si discute di tutto: chi deve pulire le scale, dove si mettono le biciclette, se si può tenere un cane, a che ora si possono fare lavori rumorosi.", "At the meetings everything is discussed: who has to clean the stairs, where the bikes go, whether you can keep a dog, at what time noisy work can be done."),
        s("Le regole sono scritte nel regolamento di condominio, un documento che pochi hanno letto davvero. Quando nasce un problema, però, tutti lo cercano nel cassetto.", "The rules are written in the building regulations, a document few people have really read. When a problem comes up, though, everyone looks for it in the drawer."),
      ],
      [
        s("Il signor Bruno, che abita al terzo piano da quarant'anni, dice che una volta era diverso. I vicini si conoscevano tutti, si prestavano lo zucchero e i bambini giocavano insieme in cortile.", "Mr Bruno, who has lived on the third floor for forty years, says it used to be different. The neighbours all knew each other, lent each other sugar and the children played together in the courtyard."),
        s("Oggi molti appartamenti sono in affitto, la gente cambia spesso e qualcuno non conosce nemmeno il nome del vicino di pianerottolo. Per questo, secondo lui, le riunioni sono importanti: sono l'unico momento in cui ci si vede tutti.", "Today many flats are rented, people move often and some don't even know the name of the neighbour across the landing. That's why, according to him, the meetings are important: they're the only time everyone sees each other."),
      ],
    ],
    tasks: [
      mc("Who leads the meeting?", ["The administrator, paid by the owners", "The oldest resident", "The mayor"], 0),
      tf("Chi abita al primo piano voleva pagare subito.", "The people on the first floor wanted to pay straight away.", false),
      mc("What was the solution?", ["Those who live higher up pay more", "Nobody pays", "They sell the building"], 0),
      tf("Secondo il testo, le riunioni di condominio finiscono spesso in litigi.", "According to the text, residents' meetings often end in quarrels.", true),
    ],
  },
  {
    id: "lib-b1-volontaria-al-banco-alimentare",
    level: "B1",
    topic: "Society",
    title: "Volontaria al banco alimentare",
    titleTranslation: "Volunteering at the food bank",
    grammar: [],
    paragraphs: [
      [
        s("Ogni sabato mattina Graziella, sessantotto anni, va al supermercato del suo quartiere a Bari. Non per fare la spesa, ma per chiedere agli altri di farla per chi non può.", "Every Saturday morning Graziella, sixty-eight, goes to the supermarket in her neighbourhood in Bari. Not to do her shopping, but to ask others to do it for those who can't."),
        s("È una volontaria del banco alimentare. Sta all'ingresso con un sacchetto giallo e una lista: pasta, olio, latte, scatolette di tonno, cibo per bambini.", "She's a volunteer at the food bank. She stands at the entrance with a yellow bag and a list: pasta, oil, milk, tins of tuna, baby food."),
      ],
      [
        s("I clienti comprano qualcosa in più e glielo lasciano all'uscita. Poi i volontari portano tutto in un magazzino, dove il cibo viene diviso e mandato alle associazioni che aiutano le famiglie povere.", "The customers buy something extra and leave it with her at the exit. Then the volunteers take everything to a warehouse, where the food is divided up and sent to the charities that help poor families."),
        s("Il banco alimentare raccoglie anche il cibo che i supermercati e le aziende non riescono a vendere, ma che è ancora buono. Così si aiutano le persone e si spreca di meno.", "The food bank also collects food that supermarkets and companies can't sell but that is still good. That way people are helped and less is wasted."),
      ],
      [
        s("Graziella ha cominciato dopo la pensione. All'inizio si vergognava a fermare gli sconosciuti, ma ha scoperto che la maggior parte delle persone è generosa.", "Graziella started after she retired. At first she was embarrassed to stop strangers, but she found out that most people are generous."),
        s("La cosa che la colpisce di più è che spesso danno di più quelli che hanno di meno. Un ragazzo, una volta, le ha lasciato un pacco di pasta e le ha detto che due anni prima anche la sua famiglia riceveva quei sacchetti.", "What strikes her most is that those who have least often give most. Once a young man left her a packet of pasta and told her that two years earlier his family had received those bags too."),
      ],
      [
        s("In Italia il banco alimentare aiuta ogni anno centinaia di migliaia di persone. La raccolta più grande si fa un sabato di novembre, in migliaia di supermercati in tutto il paese, con l'aiuto di decine di migliaia di volontari.", "In Italy the food bank helps hundreds of thousands of people every year. The biggest collection takes place on a Saturday in November, in thousands of supermarkets all over the country, with the help of tens of thousands of volunteers."),
        s("Molti volontari sono studenti delle scuole superiori o pensionati, ma ci sono anche intere famiglie che passano la giornata insieme davanti a un supermercato.", "Many volunteers are secondary school students or pensioners, but there are also whole families who spend the day together outside a supermarket."),
      ],
      [
        s("Non tutti sono d'accordo con questo sistema. Alcuni pensano che in un paese ricco nessuno dovrebbe avere bisogno di aiuto per mangiare, e che lo Stato dovrebbe fare di più.", "Not everyone agrees with this system. Some think that in a rich country nobody should need help to eat, and that the state should do more."),
        s("Graziella capisce queste critiche, ma ogni sabato vede le persone in fila e le borse che si riempiono. Finché qualcuno avrà bisogno, dice, lei sarà lì, con il suo sacchetto giallo.", "Graziella understands these criticisms, but every Saturday she sees the people queuing and the bags filling up. As long as someone needs help, she says, she'll be there, with her yellow bag."),
      ],
    ],
    tasks: [
      mc("What does Graziella do at the supermarket?", ["She asks customers to buy food for others", "She does her own shopping", "She works at the till"], 0),
      tf("Il banco alimentare butta il cibo che i supermercati non vendono.", "The food bank throws away the food supermarkets don't sell.", false),
      mc("What surprised Graziella?", ["Most people are generous", "Nobody wanted to help", "The food was bad"], 0),
      tf("La famiglia del ragazzo aveva ricevuto aiuto dal banco alimentare.", "The young man's family had received help from the food bank.", true),
    ],
  },
];
