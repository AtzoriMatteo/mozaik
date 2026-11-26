import type { WritingPoint, WritingTask } from "@/core/writing";

/**
 * Library writing at A2: the texts people write once daily life in Italy gets
 * going (emails to a landlord, a shop or a manager, notes to neighbours, a
 * report form, reviews, diary pages, short stories about the past). Every
 * point has a sentence frame and cue words; every task has a model answer of
 * the long length that covers each point.
 */
const pf = (prompt: string, frame: string, ...cues: string[]): WritingPoint => ({ prompt, frame, cues });
const t = (topic: string, x: Omit<WritingTask, "level" | "topic">): WritingTask => ({ ...x, level: "A2", topic, id: `lib-a2-${x.id}` });

export const writingA2: WritingTask[] = [
  // ---------- About me ----------
  t("About me", {
    id: "quando-ero-piccolo",
    title: "Quando ero piccolo",
    titleTranslation: "When I was little",
    form: "story",
    situation: "Your Italian class is making a magazine about childhood. Write your page.",
    points: [
      pf("Say where you grew up", "Sono cresciuto/a a … .", "cresciuto", "cresciuta"),
      pf("Describe your house then", "Abitavamo in una casa … con … .", "abitavamo"),
      pf("Say what you played", "Dopo la scuola giocavo spesso a … .", "giocavo"),
      pf("Say who your best friend was", "Il mio migliore amico / La mia migliore amica era … .", "migliore"),
      pf("Tell one thing that happened", "Un giorno … .", "giorno"),
      pf("Say what's different now", "Adesso … , ma da piccolo/a … .", "adesso"),
    ],
    model:
      "Sono cresciuto in un piccolo paese in Irlanda, vicino al mare. Abitavamo in una vecchia casa bianca con un giardino pieno di pecore dei vicini. Avevo due sorelle e dormivamo tutti e tre nella stessa camera. Dopo la scuola giocavo spesso a calcio in strada con i bambini del quartiere. Il mio migliore amico era Liam. Abitava nella casa accanto e stavamo sempre insieme. Un giorno siamo andati in spiaggia da soli, senza dire niente ai genitori. Siamo rimasti fuori tutto il pomeriggio e mia madre era arrabbiatissima. Per una settimana non potevo uscire, ma per me è stata comunque una bella giornata. Adesso vivo in un appartamento a Bologna e vedo il mare solo d'estate. Liam abita ancora nel paese. Quando torno a casa, beviamo sempre una birra insieme, come una volta.",
  }),
  t("About me", {
    id: "primo-giorno-in-italia",
    title: "Il mio primo giorno in Italia",
    titleTranslation: "My first day in Italy",
    form: "story",
    situation: "A blog for newcomers asks readers about their first day in the country. Tell yours (real or imagined).",
    points: [
      pf("Say when and how you arrived", "Sono arrivato/a … , con … .", "arrivato", "arrivata"),
      pf("Say what you saw first", "La prima cosa che ho visto è stata … .", "visto"),
      pf("Say what was strange", "Mi è sembrato strano che … .", "strano"),
      pf("Say what went wrong", "Poi c'è stato un problema: … .", "problema"),
      pf("Say who helped you", "Per fortuna … mi ha aiutato/a.", "aiutato", "aiutata"),
      pf("Say how you felt at the end of the day", "La sera ero … .", "sera"),
    ],
    model:
      "Sono arrivata a Roma un martedì di settembre, con un volo da Berlino. La prima cosa che ho visto è stata una fila lunghissima di taxi bianchi e tanta gente che parlava ad alta voce. Faceva ancora caldo, trenta gradi! Mi è sembrato strano che al bar tutti bevessero il caffè in piedi, in due minuti. Poi c'è stato un problema: la mia carta non funzionava alla macchinetta dei biglietti del treno. Ero lì con la valigia e non sapevo cosa fare. Per fortuna una signora anziana mi ha aiutata. Mi ha spiegato a gesti e in inglese che potevo comprare il biglietto in tabaccheria. Poi ho preso il treno per Trastevere e ho trovato la mia stanza. La sera ero stanca, ma anche felice e un po' orgogliosa. Ce l'avevo fatta!",
  }),
  t("About me", {
    id: "fra-cinque-anni",
    title: "Fra cinque anni",
    titleTranslation: "In five years",
    form: "description",
    situation: "Your tutor at the language school asks about your plans for the next five years. Write them down.",
    points: [
      pf("Say where you want to live", "Fra cinque anni vorrei vivere a … .", "vivere"),
      pf("Say what work you want to do", "Mi piacerebbe lavorare come … , perché … .", "lavorare"),
      pf("Say what you want to learn", "Prima voglio imparare … .", "imparare"),
      pf("Say what you need to do for that", "Per questo devo … .", "devo"),
      pf("Say what you're afraid of", "Ho paura di … / che … .", "paura"),
      pf("Say what you're looking forward to", "Non vedo l'ora di … .", "ora"),
    ],
    model:
      "Fra cinque anni vorrei vivere ancora in Italia, ma non più in una stanza in affitto. Sogno un piccolo appartamento con un balcone, magari a Torino o a Verona. Mi piacerebbe lavorare come infermiere in un ospedale, perché mi piace aiutare le persone. Nel mio paese ho già studiato per questo lavoro, ma qui il mio diploma non basta. Prima voglio imparare bene l'italiano, fino al livello B2. Per questo devo studiare ogni giorno e fare un esame ufficiale. Devo anche far riconoscere il mio titolo di studio, e non è semplice. Ho paura che ci voglia molto tempo e di non passare l'esame. Però sono anche molto curioso del futuro. Non vedo l'ora di cominciare il mio primo giorno di lavoro e di parlare con i pazienti in italiano.",
  }),

  // ---------- People ----------
  t("People", {
    id: "la-mia-migliore-amica",
    title: "La mia migliore amica",
    titleTranslation: "My best friend",
    form: "description",
    situation: "A magazine asks readers: tell us about a friend who matters to you.",
    points: [
      pf("Say who it is and how long you've known them", "… è il mio migliore amico / la mia migliore amica da … anni.", "anni"),
      pf("Say how you met", "Ci siamo conosciuti/e … .", "conosciute", "conosciuti"),
      pf("Describe what they look like", "È … e ha … .", "ha"),
      pf("Describe their character", "È molto … , ma a volte … .", "sincera", "sincero", "simpatica", "simpatico"),
      pf("Say what you do together", "Insieme … spesso … .", "insieme"),
      pf("Say why they matter to you", "È importante per me perché … .", "importante"),
    ],
    model:
      "Giulia è la mia migliore amica da dodici anni. Ci siamo conosciute al liceo a Napoli. Eravamo vicine di banco a chimica e non capivamo niente tutte e due. Giulia è bassa e ha i capelli neri e ricci, che di solito porta legati. Ride fortissimo, così forte che la gente sull'autobus si gira a guardarla. È molto sincera e a volte un po' impaziente, ma non dimentica mai un compleanno. Insieme andiamo spesso a camminare sul lungomare la domenica, e una volta al mese cuciniamo l'una per l'altra. Lei fa il ragù più buono che conosco. Adesso vive a Milano, quindi ci sentiamo molto al telefono. È importante per me perché mi dice sempre la verità, anche quando non la voglio sentire.",
  }),

  // ---------- Daily life ----------
  t("Daily life", {
    id: "una-brutta-giornata",
    title: "Una brutta giornata",
    titleTranslation: "A bad day",
    form: "diary",
    situation: "Write in your diary about a day when everything went wrong.",
    points: [
      pf("Say what happened in the morning", "Stamattina … .", "stamattina"),
      pf("Say what went wrong at work or school", "Al lavoro / A scuola è andato tutto storto: … .", "lavoro", "scuola"),
      pf("Say how you reacted", "Sono diventato/a molto … .", "diventata", "diventato"),
      pf("Say who you told", "L'ho raccontato a … .", "raccontato"),
      pf("Say what made it a bit better", "Per fortuna … .", "fortuna"),
      pf("Say what you'll do differently tomorrow", "Domani … .", "domani"),
    ],
    model:
      "Che giornata! Stamattina la sveglia non ha suonato e mi sono svegliata alle otto e mezza. Non ho avuto tempo per fare colazione e sono andata alla stazione in bici, sotto la pioggia. Naturalmente il treno era appena partito. Al lavoro poi è andato tutto storto. Sono arrivata tardi a una riunione importante e il mio computer non si accendeva. Sono diventata molto nervosa e non ho detto quasi niente. Durante la pausa l'ho raccontato alla mia collega Sara. Lei ha riso e mi ha detto che anche lei conosce giornate così. Per fortuna la sera è andata meglio. La mia coinquilina aveva preparato una zuppa e abbiamo guardato un film insieme. Domani metto due sveglie e prendo l'ombrello. E vado a letto presto!",
  }),
  t("Daily life", {
    id: "reclamo-pacco",
    title: "Un reclamo per un pacco",
    titleTranslation: "A complaint about a parcel",
    form: "email",
    situation: "You ordered something online and it arrived broken. Write to the shop's customer service.",
    points: [
      pf("Say what you ordered and when", "Il … ho ordinato … .", "ordinato"),
      pf("Give your order number", "Il numero dell'ordine è … .", "numero"),
      pf("Say what the problem is", "Purtroppo … .", "purtroppo"),
      pf("Say what you already did", "Ho già … , ma … .", "già"),
      pf("Say what you want them to do", "Vorrei … . Potete … ?", "vorrei"),
      pf("Say how they can reach you", "Potete contattarmi al … .", "contattarmi"),
    ],
    model:
      "Gentili signori, il 3 novembre ho ordinato sul vostro sito una macchina per il caffè. Il numero dell'ordine è 48213. Il pacco doveva arrivare il 6 novembre, ma è arrivato solo una settimana dopo. Purtroppo la scatola era bagnata e la macchina era rotta: la caraffa di vetro era in tre pezzi. Ho già fatto delle foto e ho chiamato due volte il servizio clienti, ma nessuno mi ha risposto. Per questo sono molto deluso, perché è un regalo per il compleanno di mio padre e il compleanno è la settimana prossima. Vorrei una macchina nuova, oppure il rimborso. Potete anche dirmi come posso rimandarvi la macchina rotta? Non voglio pagare la spedizione. Potete contattarmi al 333 1234567 o a questo indirizzo email. Spero di ricevere presto una vostra risposta. Cordiali saluti, Amir Haddad",
  }),
  t("Daily life", {
    id: "bici-rubata",
    title: "Denuncia: bicicletta rubata",
    titleTranslation: "Report: bike stolen",
    form: "form",
    situation: "Your bike was stolen. Fill in the box 'Descrizione dei fatti' on the online report form, in full sentences.",
    points: [
      pf("Say when and where it happened", "Il … , tra le … e le … , la mia bici era … .", "era"),
      pf("Describe the bike", "È una bici … , con … .", "bici"),
      pf("Say how it was locked", "Era chiusa con … .", "chiusa", "lucchetto"),
      pf("Say what you found when you came back", "Quando sono tornato/a, … .", "tornato", "tornata"),
      pf("Say whether anyone saw anything", "Nessuno ha visto niente. / … ha visto … .", "visto"),
      pf("Say what you've done so far", "Ho già … .", "già"),
    ],
    model:
      "Venerdì 14 novembre, tra le nove e le diciassette e trenta, la mia bici era parcheggiata nella rastrelliera davanti alla stazione di Padova, dal lato del centro. È una bici da donna nera, con la sella rossa e un cestino davanti. Dietro c'è un adesivo di una squadra di calcio. Era chiusa con un lucchetto a catena, ma non era legata alla rastrelliera. Quando sono tornata, la sera, la bici non c'era più. Per terra c'era solo un pezzo della catena. Nessuno ha visto niente, credo. Ho chiesto al signore del bar vicino alla stazione, ma lui non sapeva niente. Ho già guardato sui gruppi di bici rubate della città, ma la mia non c'è. Il numero del telaio è AB123456.",
  }),
  t("Daily life", {
    id: "centro-senza-auto",
    title: "Un centro senza auto?",
    titleTranslation: "A car-free centre?",
    form: "opinion",
    situation: "The local paper asks readers: should the historic centre be closed to cars? Write your opinion.",
    points: [
      pf("Say what you think", "Secondo me … .", "secondo"),
      pf("Give a first reason", "Prima di tutto … .", "prima"),
      pf("Give a second reason", "Inoltre … .", "inoltre"),
      pf("Say what people on the other side say", "Alcune persone dicono che … .", "alcune", "dicono"),
      pf("Answer them", "Ma … .", "ma"),
      pf("End with your conclusion", "Per questo … .", "questo"),
    ],
    model:
      "Secondo me il centro storico della nostra città deve diventare tutto pedonale. Prima di tutto adesso è pericoloso per chi va a piedi o in bici. Nelle strade strette passano macchine, motorini e bambini insieme, e quasi ogni settimana c'è un incidente. Inoltre l'aria in centro è sporca e c'è sempre rumore. Senza auto la città diventa più tranquilla e più sana. E poi abbiamo più spazio per alberi, panchine e tavolini dei bar. Alcune persone dicono che i negozi perdono clienti se le macchine non possono più entrare. Ma in molte città succede il contrario: quando le strade sono più tranquille, la gente resta più a lungo e compra di più. Naturalmente servono buoni autobus e parcheggi vicino al centro, per gli anziani e per le persone con disabilità. Per questo dico: chiudiamo il centro alle auto, ma con intelligenza.",
  }),

  // ---------- Home ----------
  t("Home", {
    id: "affittare-una-stanza",
    title: "Affittare una stanza",
    titleTranslation: "Renting a room",
    form: "email",
    situation: "You found an ad for a room. Write to the landlord.",
    points: [
      pf("Say where you saw the ad", "Ho visto il suo annuncio su … .", "annuncio"),
      pf("Say who you are and what you do", "Mi chiamo … , ho … anni e … .", "chiamo"),
      pf("Say why the room suits you", "La stanza mi sembra … , perché … .", "perché"),
      pf("Ask about the rent and costs", "Quanto costa l'affitto, con le spese di … ?", "affitto"),
      pf("Ask one more question", "Posso … ? / Devo … ?", "posso", "devo"),
      pf("Ask to come and see it", "Posso venire a vedere la stanza … ?", "vedere"),
    ],
    model:
      "Gentile signor Rossi, ho visto il suo annuncio su Idealista per la stanza in via San Vitale. Mi chiamo Sofia, ho ventiquattro anni e vengo dal Portogallo. Faccio un master in Biologia all'Università di Bologna e lavoro due sere alla settimana in un bar. La stanza mi sembra perfetta, perché è vicina all'università e ha molta luce. Sono una persona tranquilla, non fumo e tengo sempre pulita la cucina. Quanto costa l'affitto, con le spese di luce, gas e acqua? E devo pagare una caparra? Posso anche tenere la bici in cortile? La uso tutti i giorni per andare a lezione. Posso venire a vedere la stanza questa settimana? Sono libera mercoledì e venerdì dopo le quattro. Cordiali saluti, Sofia Pereira",
  }),
  t("Home", {
    id: "biglietto-per-i-vicini",
    title: "Un biglietto per i vicini",
    titleTranslation: "A note for the neighbours",
    form: "message",
    situation: "You're having a birthday party on Saturday. Write the note you'll stick up by the building's front door.",
    points: [
      pf("Say who you are", "Siamo … , del … piano.", "piano"),
      pf("Say what's happening and when", "Sabato … facciamo una festa.", "festa"),
      pf("Say until what time", "Finiamo verso … .", "verso"),
      pf("Apologise for the noise", "Scusate se … .", "scusate"),
      pf("Invite them", "Anche voi siete i benvenuti!", "benvenuti"),
      pf("Say what to do if it's too loud", "Se la musica è troppo alta, suonate pure / scriveteci al … .", "suonate", "scriveteci"),
    ],
    model:
      "Cari vicini, siamo Tom e Aylin, del terzo piano, interno 12. Sabato 6 dicembre compio trent'anni, e per questo la sera facciamo una festa a casa nostra. Vengono più o meno venti persone. Cominciamo alle otto e finiamo verso l'una di notte. Dopo l'una spegniamo la musica, promesso. Scusate se ci sarà un po' di confusione sulle scale e davanti al portone. Chiediamo ai nostri amici di non lasciare le bici nell'ingresso e di non fumare sulle scale. Anche voi siete i benvenuti, naturalmente! C'è tanto da mangiare e da bere, e non dovete portare niente. Se la musica è troppo alta, suonate pure alla porta, o scriveteci al 347 9876543. Abbassiamo subito il volume, senza problemi. Grazie e a presto, Tom e Aylin",
  }),
  t("Home", {
    id: "il-trasloco",
    title: "Il giorno del trasloco",
    titleTranslation: "Moving day",
    form: "diary",
    situation: "You moved into a new place today. Write about the day in your diary.",
    points: [
      pf("Say where you moved from and to", "Oggi ho traslocato da … a … .", "traslocato"),
      pf("Say who helped you", "Mi hanno aiutato … .", "aiutato"),
      pf("Say what was hardest", "La cosa più difficile è stata … .", "difficile"),
      pf("Say what went wrong", "Purtroppo … .", "purtroppo"),
      pf("Describe the new place", "Il mio nuovo appartamento è … , con … .", "nuovo"),
      pf("Say how you feel tonight", "Adesso sono … , ma … .", "adesso"),
    ],
    model:
      "Oggi finalmente ho traslocato, dalla mia piccola stanza da studente a Pisa a un appartamento a Firenze. Mi hanno aiutato mio fratello e due amici. Avevamo noleggiato un furgone e alle otto di mattina abbiamo cominciato a portare giù gli scatoloni. La cosa più difficile è stata il divano. La mia vecchia stanza era al terzo piano senza ascensore e le scale erano strettissime. Dopo un'ora ce l'abbiamo fatta. Purtroppo è anche successo un piccolo disastro: una scatola di piatti è caduta dal furgone. Il mio nuovo appartamento è luminoso e tranquillo, con una cucina piccola e un balcone che dà sul giardino. Dalla finestra vedo un parco. Adesso sono stanco e sono seduto per terra tra gli scatoloni, con una pizza. Ma sono anche molto contento. Domani sistemo tutto.",
  }),

  // ---------- Food and shops ----------
  t("Food and shops", {
    id: "ricetta-del-mio-paese",
    title: "Una ricetta del mio paese",
    titleTranslation: "A recipe from my country",
    form: "description",
    situation: "Your Italian class is making a cookbook. Write down a dish from your country or family.",
    points: [
      pf("Say what the dish is and where it's from", "… è un piatto tipico di … .", "piatto"),
      pf("Say when people eat it", "Di solito lo mangiamo … .", "mangiamo"),
      pf("List what you need", "Per … persone servono: … .", "servono"),
      pf("Explain the first steps", "Prima … .", "prima"),
      pf("Explain how to finish it", "Poi … . Alla fine … .", "poi", "fine"),
      pf("Give a tip", "Un consiglio: … .", "consiglio"),
    ],
    model:
      "La shakshuka è un piatto tipico del Nord Africa e del Medio Oriente. Mia nonna era tunisina e la preparava ogni domenica. Di solito la mangiamo a colazione o a pranzo, con il pane fresco. Per quattro persone servono: sei uova, quattro pomodori o una scatola di pelati, due peperoni, una cipolla, due spicchi d'aglio, olio d'oliva, cumino, paprica e sale. Prima tagliate la cipolla, l'aglio e i peperoni a pezzetti. Li fate cuocere cinque minuti nell'olio, in una padella grande. Poi aggiungete i pomodori e le spezie e lasciate cuocere tutto per dieci minuti a fuoco basso. Alla fine fate sei piccoli buchi nel sugo e in ogni buco rompete un uovo. Coprite la padella e aspettate circa otto minuti. Un consiglio: mangiatela direttamente dalla padella, con un bel pezzo di pane!",
  }),
  t("Food and shops", {
    id: "recensione-ristorante",
    title: "La recensione di un ristorante",
    titleTranslation: "A restaurant review",
    form: "opinion",
    situation: "You ate out last week. Write a review for a restaurant website.",
    points: [
      pf("Say where you went and with whom", "La settimana scorsa sono andato/a con … a … .", "andata", "andato"),
      pf("Describe the place", "Il locale è … : … .", "locale"),
      pf("Say what you ate", "Ho preso come primo … e come secondo … .", "preso"),
      pf("Say what was good", "Il cibo era … . Il servizio era … .", "buono", "gentile"),
      pf("Say what could be better", "Meno bene … .", "meno"),
      pf("Give a score and your advice", "Gli do … , perché … .", "do"),
    ],
    model:
      "La settimana scorsa sono andata con il mio ragazzo all'Osteria da Lina, una piccola trattoria a Trastevere. Il locale è accogliente e non molto grande: ci sono solo dieci tavoli, con le tovaglie a quadri e foto in bianco e nero alle pareti. Si sentiva una musica tranquilla. Ho preso come primo una cacio e pepe e come secondo i saltimbocca alla romana. Il mio ragazzo ha scelto le polpette al sugo. Il cibo era davvero buono e fresco, e le porzioni erano abbondanti. Anche il servizio era molto gentile: il cameriere ci ha spiegato tutti i piatti del giorno. Meno bene l'attesa: abbiamo aspettato quasi quaranta minuti per il primo, e più tardi la musica era troppo alta. Non è neanche economico: abbiamo speso settanta euro in due. Gli do quattro stelle su cinque, perché il cibo vale l'attesa. Ma prenotate!",
  }),
  t("Food and shops", {
    id: "cambiare-un-cappotto",
    title: "Cambiare un cappotto",
    titleTranslation: "Exchanging a coat",
    form: "email",
    situation: "You bought a coat online and it doesn't fit. Write to the shop to exchange it.",
    points: [
      pf("Say what you bought and when", "La settimana scorsa ho comprato … .", "comprato"),
      pf("Say what's wrong with it", "Purtroppo è troppo … .", "troppo"),
      pf("Say what you'd like instead", "Vorrei cambiarlo con … .", "cambiarlo"),
      pf("Ask how to send it back", "Come posso rimandare … ?", "rimandare"),
      pf("Ask about the cost", "Devo pagare … ?", "pagare"),
      pf("Thank them and sign off", "Grazie in anticipo per … .", "grazie"),
    ],
    model:
      "Buongiorno, la settimana scorsa ho comprato nel vostro negozio online un cappotto blu, taglia M. Il numero dell'ordine è 77301. Il cappotto è bello e caldo, ma purtroppo è troppo piccolo. Le maniche sono corte e non riesco a chiuderlo bene quando porto un maglione. Vorrei cambiarlo con lo stesso cappotto in taglia L. Se la taglia L non c'è più, vorrei il rimborso. Come posso rimandare il cappotto? Devo stampare io un'etichetta, o me la mandate voi? Non l'ho mai messo e ha ancora il cartellino. Devo pagare qualcosa per la spedizione? Sul vostro sito non ho trovato informazioni su questo. Ho bisogno del cappotto abbastanza presto, perché a dicembre vado in montagna. Grazie in anticipo per il vostro aiuto. Cordiali saluti, Jonas Weber",
  }),

  // ---------- Out and about ----------
  t("Out and about", {
    id: "mi-sono-perso",
    title: "Mi sono perso",
    titleTranslation: "I got lost",
    form: "story",
    situation: "Write a short story for your class about a time you got lost.",
    points: [
      pf("Say where you were going", "Dovevo andare a … .", "dovevo"),
      pf("Say what went wrong", "Ma dopo … .", "ma"),
      pf("Say where you ended up", "All'improvviso ero in … .", "improvviso"),
      pf("Say who you asked for help", "Ho chiesto la strada a … .", "chiesto"),
      pf("Say how you got there in the end", "Alla fine … .", "fine"),
      pf("Say what you do differently since then", "Da allora … sempre … .", "allora"),
    ],
    model:
      "L'anno scorso, una domenica, dovevo andare al compleanno di una collega a Venezia. Non conoscevo ancora bene la città, ma avevo l'indirizzo sul telefono. Ma dopo dieci minuti la batteria si è scaricata. Ho continuato a camminare e pensavo di ricordare la strada. Dopo mezz'ora all'improvviso ero in un campo piccolissimo, senza uscita, davanti a un canale, e non c'era nessuno. In più ha cominciato a piovere. Vicino a un ponte finalmente ho visto un signore con un cane. Gli ho chiesto la strada e lui ha riso: ero andato proprio dalla parte sbagliata. Mi ha accompagnato fino al vaporetto e mi ha spiegato dove scendere. Alla fine sono arrivato alla festa con un'ora e mezza di ritardo, bagnato ma contento. Da allora porto sempre una batteria esterna.",
  }),
  t("Out and about", {
    id: "gita-con-i-colleghi",
    title: "Una gita con i colleghi",
    titleTranslation: "A day out with colleagues",
    form: "email",
    situation: "You're organising a team day out. Write the email to your colleagues.",
    points: [
      pf("Say what the plan is", "Venerdì … andiamo a … .", "andiamo"),
      pf("Say where and when you meet", "Ci troviamo alle … davanti a … .", "troviamo"),
      pf("Say what the programme is", "Prima … . Poi … .", "prima", "poi"),
      pf("Say what people need to bring", "Portate … , perché … .", "portate"),
      pf("Ask about food wishes", "Non mangiate carne o avete un'allergia? Fatemelo sapere.", "allergia", "carne"),
      pf("Ask them to reply by a date", "Mi dite entro … se venite?", "entro"),
    ],
    model:
      "Ciao a tutti, ci siamo quasi: venerdì 12 giugno andiamo in gita con tutto l'ufficio! Quest'anno andiamo sul Lago di Garda, a Sirmione. Ci troviamo alle otto e mezza davanti all'ufficio. Lì ci aspetta un pullman, che in un'ora e mezza ci porta al lago. Prima facciamo un giro in barca di due ore con una guida. Poi pranziamo in una trattoria sul lago, e il pomeriggio è libero per fare il bagno o visitare il castello. Verso le sei ripartiamo, e alle otto siamo di nuovo in città. Portate il costume, la crema solare e scarpe comode, perché si cammina parecchio! Non mangiate carne o avete un'allergia? Fatemelo sapere, così avviso la trattoria. Mi dite entro il 1° giugno se venite? Io non vedo l'ora! Un abbraccio, Chiara",
  }),
  t("Out and about", {
    id: "sono-in-ritardo",
    title: "Sono in ritardo",
    titleTranslation: "I'm running late",
    form: "message",
    situation: "Your train is stuck. Send a message to the friend you're meeting for dinner.",
    points: [
      pf("Say where you are and what happened", "Sono sul treno vicino a … , e … .", "treno"),
      pf("Say how late you'll be", "Credo di arrivare con … di ritardo.", "ritardo"),
      pf("Ask them to do something meanwhile", "Intanto puoi … ?", "intanto"),
      pf("Say what to order for you", "Ordina per me … .", "ordina"),
      pf("Offer another plan", "Se diventa troppo tardi, possiamo anche … .", "se"),
      pf("Apologise and make it up to them", "Scusami! Offro io … .", "scusami", "scusa"),
    ],
    model:
      "Ciao Lucia, brutte notizie! Sono sul treno vicino a Firenze e siamo fermi da venti minuti. Il capotreno dice che c'è un guasto sulla linea, e nessuno sa quanto ci vuole. Credo di arrivare con un'ora di ritardo, forse di più. Intanto puoi andare al ristorante e sederti al nostro tavolo? Così non perdiamo la prenotazione. Il ristorante è sempre pieno il sabato sera, lo sai. Ordina per me un calice di vino bianco e la zuppa del giorno, tanto prendo sempre quella. Se diventa troppo tardi, possiamo anche vederci un'altra sera. Per esempio venerdì della settimana prossima. Dimmi tu, per me va bene tutto. Scusami, scusami, scusami! Offro io il dolce. Ti scrivo appena il treno riparte, e ti chiamo quando arrivo in stazione. Baci, Mila",
  }),

  // ---------- Work and study ----------
  t("Work and study", {
    id: "candidatura-lavoretto",
    title: "Candidatura per un lavoretto",
    titleTranslation: "Applying for a part-time job",
    form: "email",
    situation: "A bakery is looking for weekend staff. Write to apply.",
    points: [
      pf("Say which job you're applying for", "Vi scrivo per l'annuncio di … .", "annuncio"),
      pf("Say who you are", "Mi chiamo … , ho … anni e … .", "chiamo"),
      pf("Say what experience you have", "Ho già lavorato come … .", "lavorato"),
      pf("Say why you want this job", "Vorrei lavorare da voi perché … .", "perché"),
      pf("Say when you can work", "Posso lavorare … .", "posso"),
      pf("Ask for an interview", "Sarei felice di fare un colloquio.", "colloquio"),
    ],
    model:
      "Gentile signora Bianchi, vi scrivo per l'annuncio di lavoro nel fine settimana. Ho visto il cartello ieri sulla vetrina del vostro forno. Mi chiamo Diego Fernández, ho ventuno anni e studio Architettura al Politecnico di Milano. Vivo in Italia da un anno e parlo spagnolo, inglese e abbastanza bene l'italiano. Ho già lavorato come commesso in una panetteria a Siviglia, per due estati. Lì ho imparato a servire i clienti in modo veloce e gentile, anche quando c'è tanta gente. Vorrei lavorare da voi perché amo il pane e perché così posso parlare di più in italiano. Posso lavorare il sabato e la domenica, e durante le vacanze anche in settimana. Sarei felice di fare un colloquio. Potete chiamarmi al 340 1122334. Cordiali saluti, Diego Fernández",
  }),
  t("Work and study", {
    id: "chiedere-ferie",
    title: "Chiedere qualche giorno di ferie",
    titleTranslation: "Asking for time off",
    form: "email",
    situation: "Write to your manager to ask for a few days off.",
    points: [
      pf("Say which days you want off", "Vorrei prendere ferie da … a … .", "ferie"),
      pf("Give the reason", "Mia / Mio … , e per questo … .", "questo"),
      pf("Say how your work will be ready", "Il mio lavoro per … sarà … .", "pronto", "finito"),
      pf("Say who can take over", "… può sostituirmi per … .", "sostituirmi"),
      pf("Say whether you're reachable", "In quei giorni (non) sarò raggiungibile … .", "raggiungibile"),
      pf("Ask for an answer", "Puoi / Può farmi sapere se … ?", "sapere"),
    ],
    model:
      "Ciao Marco, vorrei prendere ferie da giovedì 15 a martedì 20 maggio. Mia sorella si sposa in Marocco, e per questo vorrei andare qualche giorno a Casablanca con la mia famiglia. Quest'anno ho ancora tanti giorni di ferie. Il mio lavoro per il progetto con il Comune sarà quasi finito: ti mando la relazione entro mercoledì 14. Elena può sostituirmi per la riunione con il cliente di lunedì. Conosce bene il progetto e ne abbiamo già parlato insieme. In quei giorni non sarò raggiungibile per email, ma in caso di emergenza puoi chiamarmi o mandarmi un messaggio. Puoi farmi sapere entro questa settimana se va bene? Così prenoto i biglietti dell'aereo, che diventano più cari ogni giorno. Grazie mille! Un saluto, Youssef",
  }),
  t("Work and study", {
    id: "valutazione-corso",
    title: "Valutazione del corso",
    titleTranslation: "Course feedback form",
    form: "form",
    situation: "Your Italian course is ending. Fill in the open questions of the feedback form.",
    points: [
      pf("Say what you liked most", "La cosa che mi è piaciuta di più è … .", "piaciuta"),
      pf("Say what you learned", "Ho imparato a … .", "imparato"),
      pf("Say what was difficult", "Per me è stato difficile … .", "difficile"),
      pf("Say what could be better", "Sarebbe meglio se … .", "meglio"),
      pf("Say how you'll keep practising", "Dopo il corso … .", "dopo"),
      pf("Say whether you'd recommend it", "Consiglierei (non consiglierei) il corso, perché … .", "consiglierei"),
    ],
    model:
      "La cosa che mi è piaciuta di più sono state le conversazioni in piccoli gruppi. Parlavamo di cose vere, come i vicini, il lavoro e il cibo italiano, e avevo sempre meno paura di parlare. Ho imparato a prendere un appuntamento dal medico, a compilare un modulo e a scrivere una email al mio capo. Per me è stato difficile usare il passato prossimo e l'imperfetto, e scegliere tra essere e avere. Anche le doppie, come in anno e nonno, sono ancora difficili da pronunciare. Sarebbe meglio se ci fossero più ascolti con persone vere, non solo con attori. A volte le lezioni erano anche troppo veloci. Dopo il corso vado ogni settimana a un caffè linguistico in biblioteca e leggo ogni giorno un articolo su un giornale online. Consiglierei il corso, perché l'insegnante era paziente e il gruppo era molto simpatico.",
  }),

  // ---------- Health ----------
  t("Health", {
    id: "appuntamento-dal-medico",
    title: "Un appuntamento dal medico",
    titleTranslation: "An appointment with the doctor",
    form: "email",
    situation: "Your knee has hurt for weeks. Write to your family doctor's surgery to ask for an appointment.",
    points: [
      pf("Say who you are", "Mi chiamo … , sono nato/a il … .", "chiamo"),
      pf("Say what's wrong", "Da … ho male a … .", "male"),
      pf("Say how it started and how it is now", "È cominciato … . Adesso … .", "cominciato"),
      pf("Say what you've tried", "Ho già provato … , ma … .", "provato"),
      pf("Ask for an appointment", "Posso avere un appuntamento … ?", "appuntamento"),
      pf("Say when you can come", "Posso venire … .", "venire"),
    ],
    model:
      "Gentile dottoressa Ferri, mi chiamo Elena Popescu, sono nata il 12 marzo 1995 e sono una sua paziente. Da circa due settimane ho male al ginocchio destro. È cominciato dopo una lunga camminata in montagna. All'inizio faceva solo un po' male, ma adesso va peggio. Fare le scale mi fa male e di notte a volte mi sveglio per il dolore. Il ginocchio è anche un po' gonfio. Ho già provato a prendere la tachipirina e a mettere il ghiaccio, ma non basta. Adesso non faccio più sport. Posso avere un appuntamento nei prossimi giorni? Non è urgentissimo, ma vorrei capire che cosa ho. Posso venire tutte le mattine prima delle dieci, e il venerdì tutto il giorno. Grazie e cordiali saluti, Elena Popescu",
  }),
  t("Health", {
    id: "vivere-sano",
    title: "Vivere sano",
    titleTranslation: "Living healthily",
    form: "description",
    situation: "A health magazine asks readers: what do you do to stay healthy? Write your answer, honestly.",
    points: [
      pf("Say what you eat on a normal day", "In una giornata normale mangio … .", "mangio"),
      pf("Say how you move", "Mi muovo soprattutto … .", "muovo"),
      pf("Say how you sleep", "Di solito dormo … , ma … .", "dormo"),
      pf("Say what isn't so healthy", "Non è molto sano … .", "sano"),
      pf("Say how you relax", "Per rilassarmi … .", "rilassarmi"),
      pf("Say what you want to change", "Dal … voglio … .", "voglio"),
    ],
    model:
      "In una giornata normale mangio abbastanza sano. La mattina prendo uno yogurt con frutta e cereali, e a pranzo un panino con il formaggio e un'insalata. La sera di solito cucino io, con tante verdure. Mi muovo soprattutto in bici: ogni giorno faccio venti minuti per andare al lavoro e venti per tornare. Il sabato vado in piscina con un'amica. Di solito dormo sette ore, ma durante la settimana vado spesso a letto troppo tardi. Non è molto sano il mio rapporto con il telefono. La sera, a letto, guardo video per ore. E bevo troppi caffè al lavoro, anche cinque al giorno. Per rilassarmi cammino nel bosco o ascolto musica. Dal mese prossimo voglio spegnere il telefono alle dieci e bere più acqua.",
  }),

  // ---------- Free time ----------
  t("Free time", {
    id: "la-vacanza-piu-bella",
    title: "La mia vacanza più bella",
    titleTranslation: "My best holiday",
    form: "story",
    situation: "Write about your best holiday ever for the class blog.",
    points: [
      pf("Say where and when you went", "… anni fa sono andato/a in … .", "fa"),
      pf("Say who you went with and how", "Sono partito/a con … , in … .", "partita", "partito"),
      pf("Say where you stayed", "Dormivamo in … .", "dormivamo"),
      pf("Say what you did", "Abbiamo … molto.", "abbiamo"),
      pf("Tell the best moment", "Il momento più bello è stato … .", "momento"),
      pf("Say why you'll never forget it", "Non lo dimenticherò mai, perché … .", "dimenticherò"),
    ],
    model:
      "Tre anni fa sono andata in Sicilia, d'estate. Sono partita con la mia migliore amica Hanna, in treno e poi in traghetto. Dormivamo in un piccolo bed and breakfast a Siracusa e due notti in una casetta vicino al mare, alle isole Eolie. Abbiamo camminato molto, abbiamo fatto il bagno ogni giorno e abbiamo mangiato granite a colazione. Abbiamo anche visto il vulcano Stromboli di notte, con il fuoco rosso. Il momento più bello è stato l'ultima sera. Eravamo sedute su uno scoglio, il sole scendeva nel mare e non c'era nessuno. Solo noi, il mare e il vulcano in lontananza. Hanna e io non abbiamo detto niente per un'ora. Non lo dimenticherò mai, perché lì mi sono sentita libera e tranquilla. L'anno prossimo ci torniamo: ce lo siamo promesse.",
  }),
  t("Free time", {
    id: "sagra-di-paese",
    title: "La sagra del paese",
    titleTranslation: "The village food festival",
    form: "diary",
    situation: "You went to your first sagra (a village food festival). Write about it in your diary tonight.",
    points: [
      pf("Say where you were and with whom", "Oggi sono stato/a a … , con … .", "stata", "stato"),
      pf("Describe what you saw", "Dappertutto … .", "dappertutto"),
      pf("Say what you bought", "Al mercatino ho comprato … .", "comprato"),
      pf("Say what you ate and drank", "Abbiamo mangiato … e bevuto … .", "mangiato"),
      pf("Say what surprised you", "Mi ha sorpreso che … .", "sorpreso"),
      pf("Say whether you'll go again", "L'anno prossimo … .", "prossimo"),
    ],
    model:
      "Oggi sono stata alla sagra del tartufo di un piccolo paese vicino ad Alba, con i miei coinquilini. Dappertutto c'erano luci, bancarelle e lunghi tavoli di legno nella piazza, e dalla chiesa suonava una banda. Al mercatino ho comprato un barattolo di miele e un vecchio libro di ricette per cinque euro. Il mio coinquilino ha comprato un salame enorme! Abbiamo mangiato tajarin al tartufo e carne cruda, e abbiamo bevuto un bicchiere di vino rosso della zona. Mi ha sorpreso che tutti, anche i nonni e i bambini, ballassero insieme in piazza fino a mezzanotte. Una signora mi ha preso per mano e mi ha insegnato a ballare il liscio. Mi ha sorpreso anche quanto fossero gentili tutti, nonostante la confusione. L'anno prossimo ci torno di sicuro, magari per aiutare in cucina!",
  }),
  t("Free time", {
    id: "un-libro-da-consigliare",
    title: "Un libro da consigliare",
    titleTranslation: "A book to recommend",
    form: "opinion",
    situation: "A book club website asks readers to recommend a book or film they loved. Write yours.",
    points: [
      pf("Say what it is and who made it", "Il mio consiglio è … , un libro / film di … .", "libro", "film"),
      pf("Say what it's about", "Parla di … .", "parla"),
      pf("Say who the main character is", "Il / La protagonista è … .", "protagonista"),
      pf("Say what you liked", "Mi è piaciuto che … .", "piaciuto"),
      pf("Say what you liked less", "Mi è piaciuto meno … .", "meno"),
      pf("Say who should read or watch it", "Lo consiglio a chi … .", "consiglio"),
    ],
    model:
      "Il mio consiglio è Io non ho paura, un libro di Niccolò Ammaniti. C'è anche un bel film di Gabriele Salvatores, ma il libro è ancora meglio. Parla di un'estate molto calda del 1978, in un piccolo paese del Sud. Un gruppo di bambini gioca tutto il giorno nei campi di grano. Un giorno uno di loro trova un buco nella terra, e dentro c'è un segreto terribile. Il protagonista è Michele, un bambino di nove anni, ed è lui che racconta la storia. Mi è piaciuto che vediamo tutto con gli occhi di un bambino: è semplice da leggere, ma fa paura. Mi è piaciuto meno l'inizio, un po' lento. Lo consiglio a chi ama le storie brevi e piene di suspense, e a chi vuole leggere il primo romanzo in italiano.",
  }),
];
