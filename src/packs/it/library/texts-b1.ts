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
      [
        s("Per capire una sagra bisogna viverla dall'interno. Rosanna, cinquantadue anni, fa la volontaria alla sagra del tartufo da quando era ragazza. Quest'anno è la responsabile della cucina: venti persone, due forni e più di tremila piatti a sera.", "To understand a sagra you have to live it from the inside. Rosanna, fifty-two, has volunteered at the truffle sagra since she was a girl. This year she's in charge of the kitchen: twenty people, two ovens and more than three thousand plates an evening."),
        s("Il lavoro comincia a settembre, due mesi prima della festa. Si decide il menù, si ordinano gli ingredienti e si cercano i volontari. Il giorno prima dell'apertura, le donne del paese si trovano nella palestra della scuola per fare i tajarin, la pasta all'uovo tipica delle Langhe, a mano.", "The work begins in September, two months before the festival. They decide the menu, order the ingredients and look for volunteers. The day before it opens, the women of the village meet in the school gym to make tajarin, the typical egg pasta of the Langhe, by hand."),
      ],
      [
        s("Rosanna racconta che una volta la sagra era molto più semplice. C'erano dieci tavoli, una griglia e la banda del paese. Oggi ci sono i parcheggi con i vigili, i bagni chimici e perfino un sito internet con le prenotazioni.", "Rosanna says the sagra used to be much simpler. There were ten tables, a grill and the village band. Today there are car parks with traffic wardens, portable toilets and even a website with bookings."),
        s("Con il successo sono arrivati anche i problemi. Le regole sulla sicurezza e sull'igiene sono sempre più severe, e un piccolo paese deve fare gli stessi controlli di un ristorante. Alcune sagre hanno chiuso perché non c'erano più abbastanza volontari giovani.", "Success has brought problems too. The safety and hygiene rules are ever stricter, and a small village has to meet the same standards as a restaurant. Some sagre have closed because there were no longer enough young volunteers."),
      ],
      [
        s("C'è anche chi accusa le sagre di fare concorrenza sleale ai ristoranti, che pagano le tasse tutto l'anno. I ristoratori dicono che una sagra di tre giorni può portare via i clienti di un mese.", "Some also accuse sagre of unfair competition with restaurants, which pay taxes all year round. Restaurant owners say a three-day sagra can take away a month's worth of customers."),
        s("Per questo molte regioni hanno fatto nuove leggi: le sagre devono avere un legame vero con il territorio, e il cibo deve essere locale. La sagra della paella in un paese di montagna, insomma, non va più bene.", "That's why many regions have passed new laws: sagre must have a real link with the area, and the food must be local. A paella sagra in a mountain village, in short, is no longer allowed."),
      ],
      [
        s("L'ultima sera, dopo l'ultimo piatto, i volontari mangiano tutti insieme in cucina. Sono stanchi, hanno le mani che sanno di aglio e i piedi che fanno male. Ma ridono, si raccontano la serata e fanno già progetti per l'anno prossimo.", "On the last evening, after the last plate, the volunteers all eat together in the kitchen. They're tired, their hands smell of garlic and their feet hurt. But they laugh, tell each other about the evening and are already making plans for next year."),
        s("Rosanna guarda i ragazzi che lavano i piatti e pensa che la sagra non è solo una festa. È il momento in cui il paese si ricorda di essere una comunità. E per questo, finché avrà forza, lei sarà in cucina.", "Rosanna looks at the young people washing the dishes and thinks that the sagra isn't just a festival. It's the moment when the village remembers it is a community. And for that reason, as long as she has the strength, she'll be in the kitchen."),
      ],
      [
        s("Anche i turisti stranieri hanno scoperto le sagre. Molti le cercano su internet prima di partire, e ci sono siti che le elencano regione per regione. Per un viaggiatore è un modo diverso di conoscere l'Italia: invece di un museo, una piazza piena di famiglie, di nonni e di bambini che corrono tra i tavoli.", "Foreign tourists have discovered sagre too. Many look them up online before they travel, and there are websites listing them region by region. For a traveller it's a different way of getting to know Italy: instead of a museum, a square full of families, grandparents and children running between the tables."),
        s("Qualche consiglio per chi ci va la prima volta: arrivare presto, perché le file diventano lunghe; portare contanti, perché spesso non si può pagare con la carta; e non avere paura di sedersi accanto a degli sconosciuti. Alla fine della serata, probabilmente, non lo saranno più.", "Some advice for anyone going for the first time: arrive early, because the queues get long; bring cash, because you often can't pay by card; and don't be afraid to sit next to strangers. By the end of the evening, they probably won't be strangers any more."),
      ],
      [
        s("Ogni sagra ha anche la sua musica. Spesso c'è un'orchestra che suona il liscio, il ballo tradizionale delle feste di paese, con valzer, mazurche e polke. Le coppie anziane ballano con eleganza, i ragazzi ridono e provano a imitarle, e i bambini girano in tondo finché non cadono per terra.", "Every sagra has its own music too. There's often a band playing liscio, the traditional dance of village festivals, with waltzes, mazurkas and polkas. The elderly couples dance with elegance, the young people laugh and try to copy them, and the children spin round and round until they fall over."),
        s("Per molti emigrati, tornare alla sagra del proprio paese è un appuntamento fisso. C'è chi viene da Milano, chi dalla Germania, perfino chi dall'Argentina, dove tanti italiani partirono cento anni fa. Per qualche sera, la piazza ritrova tutti i suoi figli.", "For many emigrants, coming back to their village sagra is a fixed date. Some come from Milan, some from Germany, some even from Argentina, where so many Italians went a hundred years ago. For a few evenings, the square gets all its children back."),
      ],
    ],
    tasks: [
      mc("What is a sagra about?", ["A typical local product", "A saint's life", "A football match"], 0),
      tf("Alla sagra cucinano i ristoranti del paese.", "At the sagra the village restaurants do the cooking.", false),
      mc("What is the money raised used for?", ["Things the village needs", "The volunteers' wages", "A trip abroad"], 0),
      tf("Molte sagre sono nate quando i giovani lasciavano la campagna.", "Many sagre began when young people were leaving the countryside.", true),
      mc("Why have some sagre closed?", ["There weren't enough young volunteers", "Nobody came any more", "They were too cheap"], 0),
      tf("Secondo le nuove leggi, il cibo della sagra deve essere locale.", "Under the new laws, the sagra's food must be local.", true),
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
      [
        s("Il giorno dopo la riunione, Paola ha incontrato in ascensore la signora Teresa, la vicina anziana del sesto piano. Era uscita per la prima volta dopo due settimane, per andare dal medico e comprare il pane.", "The day after the meeting Paola met Mrs Teresa, the elderly neighbour from the sixth floor, in the lift. She had gone out for the first time in two weeks, to go to the doctor and buy bread."),
        s("Teresa le ha detto che durante quelle settimane l'aveva aiutata soprattutto un ragazzo del secondo piano, uno studente di Lecce. Le portava la spesa e le chiacchierava sulla porta. Paola non lo conosceva nemmeno di nome.", "Teresa told her that during those weeks it was mainly a boy from the second floor who had helped her, a student from Lecce. He brought her shopping and chatted with her at the door. Paola didn't even know his name."),
      ],
      [
        s("Quella sera Paola ha avuto un'idea. Ha scritto un biglietto e l'ha attaccato vicino alle cassette della posta: chi vuole, può lasciare qui il suo nome e il suo numero, per aiutarsi tra vicini. Nel giro di una settimana c'erano quindici nomi.", "That evening Paola had an idea. She wrote a note and stuck it up next to the letterboxes: whoever wants to can leave their name and number here, so neighbours can help each other. Within a week there were fifteen names."),
        s("È nato così un gruppo di messaggi del palazzo. All'inizio si scrivevano cose pratiche: l'acqua calda non funziona, qualcuno ha visto un pacco per il terzo piano? Poi sono arrivate anche altre cose: una ricetta, una foto del gatto, un invito a prendere un caffè in cortile.", "That's how a group chat for the building was born. At first people wrote practical things: the hot water isn't working, has anyone seen a parcel for the third floor? Then other things came too: a recipe, a photo of the cat, an invitation to have a coffee in the courtyard."),
      ],
      [
        s("Non tutto è stato facile. Una volta due vicini hanno litigato nel gruppo per il rumore di un cane, e i messaggi sono diventati sempre più duri. Paola ha dovuto chiedere a tutti di calmarsi e di parlarne di persona.", "Not everything was easy. Once two neighbours argued in the group about a dog's barking, and the messages got harsher and harsher. Paola had to ask everyone to calm down and talk about it in person."),
        s("Il signor Bruno, il più anziano del palazzo, ha detto ridendo che i litigi sono una tradizione del condominio italiano, come il caffè la mattina. Ma ha aggiunto che litigare va bene, se poi ci si saluta ancora per le scale.", "Mr Bruno, the oldest person in the building, said with a laugh that quarrels are a tradition of Italian blocks of flats, like coffee in the morning. But he added that arguing is fine, as long as people still say hello on the stairs afterwards."),
      ],
      [
        s("A primavera è arrivato il nuovo ascensore. Per festeggiare, i vicini hanno organizzato una piccola festa in cortile, con le torte di Teresa e la musica dello studente di Lecce, che suona la chitarra.", "In spring the new lift arrived. To celebrate, the neighbours held a little party in the courtyard, with Teresa's cakes and music from the student from Lecce, who plays the guitar."),
        s("Paola guardava i bambini che giocavano e pensava alla riunione di tre ore. Era stata lunga e faticosa, ma forse era servita a qualcosa di più di un ascensore.", "Paola watched the children playing and thought about the three-hour meeting. It had been long and tiring, but maybe it had been good for something more than a lift."),
      ],
      [
        s("Vivere in condominio ha anche i suoi vantaggi. Le spese per il tetto, la facciata o il riscaldamento centrale si dividono tra tutti, e così costano meno. In molti palazzi c'è un portiere che riceve i pacchi, controlla chi entra e conosce tutti per nome, anche se oggi i portieri sono sempre meno.", "Living in a block of flats has its advantages too. The costs of the roof, the façade or the central heating are shared between everyone, so they cost less. In many buildings there's a concierge who takes in parcels, keeps an eye on who comes in and knows everyone by name, although today there are fewer and fewer concierges."),
        s("Ci sono però anche spese su cui è difficile mettersi d'accordo. Rifare la facciata, per esempio, può costare decine di migliaia di euro. Chi vuole vendere l'appartamento vuole spendere poco; chi ci vuole vivere per sempre vuole lavori fatti bene. E l'amministratore deve trovare una soluzione per tutti.", "But there are also costs it's hard to agree on. Redoing the façade, for example, can cost tens of thousands of euros. Those who want to sell their flat want to spend little; those who want to live there forever want the work done well. And the administrator has to find a solution for everyone."),
      ],
      [
        s("In Italia esistono anche libri e programmi televisivi dedicati alle liti di condominio, e molti comici ci hanno fatto spettacoli interi. Le storie sono sempre le stesse: il vicino che stende i panni gocciolanti sul balcone di sotto, quello che parcheggia la bici nell'androne, quello che non paga mai le spese.", "In Italy there are even books and TV programmes about condominium quarrels, and many comedians have made whole shows about them. The stories are always the same: the neighbour who hangs dripping washing over the balcony below, the one who parks his bike in the entrance hall, the one who never pays the costs."),
        s("Paola ride quando le guarda, perché le riconosce tutte. Ma adesso, quando incontra un vicino sulle scale, sa come si chiama. E quando qualcuno ha un problema, sa a chi può chiedere aiuto. Per lei, è questa la vera differenza.", "Paola laughs when she watches them, because she recognises them all. But now, when she meets a neighbour on the stairs, she knows their name. And when someone has a problem, she knows who to ask for help. For her, that's the real difference."),
      ],
    ],
    tasks: [
      mc("Who leads the meeting?", ["The administrator, paid by the owners", "The oldest resident", "The mayor"], 0),
      tf("Chi abita al primo piano voleva pagare subito.", "The people on the first floor wanted to pay straight away.", false),
      mc("What was the solution?", ["Those who live higher up pay more", "Nobody pays", "They sell the building"], 0),
      tf("Secondo il testo, le riunioni di condominio finiscono spesso in litigi.", "According to the text, residents' meetings often end in quarrels.", true),
      mc("What did Paola put up by the letterboxes?", ["A note for neighbours to leave their names and numbers", "A complaint", "The meeting minutes"], 0),
      tf("Il gruppo di messaggi non ha mai avuto problemi.", "The group chat never had any problems.", false),
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
      [
        s("Una giornata di raccolta comincia presto. Alle otto Graziella e le altre volontarie arrivano al supermercato con le pettorine gialle, i volantini e una pila di scatoloni. Il direttore del negozio le saluta e offre loro un caffè.", "A collection day starts early. At eight Graziella and the other volunteers arrive at the supermarket with their yellow bibs, leaflets and a pile of boxes. The shop manager greets them and offers them a coffee."),
        s("Ogni volontaria ha un compito: chi dà i volantini all'ingresso, chi riceve i sacchetti all'uscita, chi divide il cibo negli scatoloni per tipo. Alla fine della giornata gli scatoloni sono più di cento, e un furgone li porta al magazzino.", "Each volunteer has a job: one hands out leaflets at the entrance, one takes the bags at the exit, one sorts the food into boxes by type. By the end of the day there are more than a hundred boxes, and a van takes them to the warehouse."),
      ],
      [
        s("Nel magazzino lavorano soprattutto pensionati e ragazzi del servizio civile. Controllano le date di scadenza, mettono da parte quello che è rotto e preparano i carichi per le associazioni: mense per i poveri, parrocchie, centri per le famiglie in difficoltà.", "Mostly pensioners and young people doing civil service work in the warehouse. They check the expiry dates, put aside whatever is broken and prepare the loads for the charities: soup kitchens, parishes, centres for families in difficulty."),
        s("Ogni associazione conosce le famiglie che aiuta. Sa chi ha bambini piccoli e ha bisogno di latte e pannolini, chi è anziano e vive da solo, chi ha perso il lavoro da poco e si vergogna a chiedere.", "Every charity knows the families it helps. It knows who has small children and needs milk and nappies, who is elderly and lives alone, who has recently lost their job and is ashamed to ask."),
      ],
      [
        s("Negli ultimi anni le richieste sono aumentate. La spesa, le bollette e gli affitti sono diventati più cari, e sempre più persone con un lavoro non arrivano alla fine del mese. È la cosa che a Graziella fa più male: vedere chi lavora tutto il giorno e ha comunque bisogno di aiuto.", "In recent years requests have increased. Groceries, bills and rents have got more expensive, and more and more people with a job can't make it to the end of the month. That's what hurts Graziella most: seeing people who work all day and still need help."),
        s("C'è anche un'altra cosa che la colpisce: lo spreco. In Italia ogni anno si buttano milioni di tonnellate di cibo ancora buono. Per questo il banco alimentare lavora anche con le mense delle scuole e delle aziende, per recuperare quello che avanza.", "There's another thing that strikes her: waste. In Italy millions of tonnes of food that's still good are thrown away every year. That's why the food bank also works with school and company canteens, to recover whatever is left over."),
      ],
      [
        s("Quando i nipoti le chiedono perché passa i sabati davanti a un supermercato, Graziella risponde: perché qualcuno lo deve fare. E perché anch'io ricevo qualcosa. Non parla del cibo, ma delle persone, delle storie e della sensazione di essere ancora utile.", "When her grandchildren ask her why she spends her Saturdays outside a supermarket, Graziella answers: because someone has to do it. And because I get something back too. She doesn't mean the food, but the people, the stories and the feeling of still being useful."),
        s("Spera che un giorno il banco alimentare non serva più. Fino ad allora, ogni sabato mattina, sarà all'ingresso del supermercato, con il suo sacchetto giallo e un sorriso per chi entra.", "She hopes that one day the food bank will no longer be needed. Until then, every Saturday morning, she'll be at the supermarket entrance, with her yellow bag and a smile for whoever comes in."),
      ],
      [
        s("Il banco alimentare in Italia è nato a Milano alla fine degli anni ottanta, dall'idea di un imprenditore e di un sacerdote. Avevano visto che le aziende buttavano tonnellate di cibo ancora buono, mentre molte famiglie non avevano abbastanza da mangiare. Così hanno pensato di unire le due cose.", "The food bank in Italy was born in Milan at the end of the eighties, from the idea of a businessman and a priest. They had seen that companies were throwing away tonnes of food that was still good, while many families didn't have enough to eat. So they thought of bringing the two together."),
        s("Oggi la rete ha magazzini in quasi tutte le regioni e lavora con migliaia di associazioni. Ma il cuore del sistema sono ancora i volontari come Graziella: persone normali che danno qualche ora del loro tempo, senza essere pagate.", "Today the network has warehouses in almost every region and works with thousands of charities. But the heart of the system is still volunteers like Graziella: ordinary people who give a few hours of their time, without being paid."),
      ],
      [
        s("Fare la volontaria ha cambiato anche la vita di Graziella. Dopo la pensione si sentiva sola: i figli abitavano lontano e il marito era morto da poco. Al banco alimentare ha trovato nuove amiche, e ogni sabato, dopo la raccolta, vanno insieme a mangiare una pizza.", "Volunteering has changed Graziella's life too. After she retired she felt lonely: her children lived far away and her husband had recently died. At the food bank she found new friends, and every Saturday, after the collection, they go for a pizza together."),
        s("Sua figlia, che vive a Torino, all'inizio era preoccupata: ti stanchi troppo, mamma. Adesso invece è lei a chiederle i volantini, per fare la raccolta anche nel suo quartiere. Graziella dice che è il regalo più bello che il banco alimentare le abbia fatto.", "Her daughter, who lives in Turin, was worried at first: you're tiring yourself out, Mum. Now, instead, she's the one asking for leaflets, to run a collection in her own neighbourhood too. Graziella says it's the best gift the food bank has given her."),
      ],
    ],
    tasks: [
      mc("What does Graziella do at the supermarket?", ["She asks customers to buy food for others", "She does her own shopping", "She works at the till"], 0),
      tf("Il banco alimentare butta il cibo che i supermercati non vendono.", "The food bank throws away the food supermarkets don't sell.", false),
      mc("What surprised Graziella?", ["Most people are generous", "Nobody wanted to help", "The food was bad"], 0),
      tf("La famiglia del ragazzo aveva ricevuto aiuto dal banco alimentare.", "The young man's family had received help from the food bank.", true),
      mc("What else does the food bank do against waste?", ["It works with school and company canteens", "It sells food cheaply", "It grows vegetables"], 0),
      tf("Negli ultimi anni le richieste di aiuto sono diminuite.", "In recent years requests for help have gone down.", false),
    ],
  },
];
