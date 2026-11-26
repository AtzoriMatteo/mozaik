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
    ],
    tasks: [
      mc("What does Graziella do at the supermarket?", ["She asks customers to buy food for others", "She does her own shopping", "She works at the till"], 0),
      tf("Il banco alimentare butta il cibo che i supermercati non vendono.", "The food bank throws away the food supermarkets don't sell.", false),
      mc("What surprised Graziella?", ["Most people are generous", "Nobody wanted to help", "The food was bad"], 0),
      tf("La famiglia del ragazzo aveva ricevuto aiuto dal banco alimentare.", "The young man's family had received help from the food bank.", true),
    ],
  },
  {
    id: "lib-b1-il-primo-giorno-in-ufficio",
    level: "B1",
    topic: "Work",
    title: "Il primo giorno in ufficio",
    titleTranslation: "The first day at the office",
    grammar: [],
    paragraphs: [
      [
        s("Il mese scorso Tomás ha cominciato a lavorare in un'agenzia di comunicazione a Milano. È argentino, ha studiato italiano all'università e vive in Italia da un anno, ma il primo giorno era comunque nervoso.", "Last month Tomás started working at a communications agency in Milan. He's Argentinian, studied Italian at university and has lived in Italy for a year, but on the first day he was nervous all the same."),
        s("Il capo lo ha presentato a tutti, e lui ha stretto la mano a venti persone. Alcune colleghe lo hanno salutato con due baci, e lui non sapeva se doveva fare lo stesso.", "The boss introduced him to everyone, and he shook hands with twenty people. Some colleagues greeted him with two kisses, and he didn't know whether he should do the same."),
      ],
      [
        s("La sorpresa più grande è arrivata alle undici: tutto l'ufficio è sceso al bar per il caffè. Si sta in piedi al bancone, si parla di calcio e di politica, e dopo dieci minuti si torna al lavoro.", "The biggest surprise came at eleven: the whole office went down to the bar for coffee. You stand at the counter, talk about football and politics, and after ten minutes you go back to work."),
        s("Tomás ha ordinato un cappuccino, e un collega gli ha spiegato ridendo che dopo pranzo nessuno lo prende. La mattina sì, il pomeriggio mai.", "Tomás ordered a cappuccino, and a colleague explained to him, laughing, that nobody has one after lunch. In the morning yes, in the afternoon never."),
      ],
      [
        s("Il lavoro vero e proprio è stato più facile del previsto. Le riunioni però erano lunghe e tutti parlavano nello stesso momento, così era difficile capire chi avesse deciso cosa.", "The work itself was easier than he expected. The meetings, though, were long and everyone talked at the same time, so it was hard to understand who had decided what."),
        s("La sera ha chiamato sua madre a Buenos Aires. Le ha detto che i colleghi erano simpatici e che a Milano si lavora tanto. Ma soprattutto le ha detto che il caffè, al bar sotto l'ufficio, era il migliore della sua vita.", "In the evening he called his mother in Buenos Aires. He told her his colleagues were nice and that people work a lot in Milan. But above all he told her that the coffee at the bar below the office was the best of his life."),
      ],
    ],
    tasks: [
      mc("What happened at eleven?", ["The whole office went to the bar for coffee", "There was a long meeting", "Tomás went home"], 0),
      tf("Secondo il collega, gli italiani prendono il cappuccino dopo pranzo.", "According to the colleague, Italians have cappuccino after lunch.", false),
      mc("What was hard about the meetings?", ["Everyone talked at the same time", "They were in English", "They were very short"], 0),
      tf("Tomás ha raccontato alla madre che il caffè era ottimo.", "Tomás told his mother the coffee was excellent.", true),
    ],
  },
];
