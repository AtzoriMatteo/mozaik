import type { WritingPoint, WritingTask } from "@/core/writing";

/**
 * Library writing at A1: real little texts people write in their first months
 * (profiles, notes, messages, postcards, forms). Every point has a sentence
 * frame and cue words; every task has a model answer of the long length that
 * covers each point and passes the checker.
 */
const pf = (prompt: string, frame: string, ...cues: string[]): WritingPoint => ({ prompt, frame, cues });
const t = (topic: string, x: Omit<WritingTask, "level" | "topic">): WritingTask => ({ ...x, level: "A1", topic, id: `lib-a1-${x.id}` });

export const writingA1: WritingTask[] = [
  // ---------- About me ----------
  t("About me", {
    id: "profilo-app",
    title: "Il mio profilo",
    titleTranslation: "My profile",
    form: "description",
    situation: "You've joined a language-exchange app. Write the short profile other people will see.",
    points: [
      pf("Say your name and where you're from", "Mi chiamo … e sono di … .", "chiamo", "sono"),
      pf("Say how old you are and where you live", "Ho … anni e abito a … .", "anni", "abito"),
      pf("Say what you do", "Lavoro come … . / Studio … .", "lavoro", "studio", "studente", "studentessa"),
      pf("Say which languages you speak", "Parlo … e un po' di italiano.", "parlo"),
      pf("Say what you like doing", "Nel tempo libero mi piace … .", "piace", "libero"),
      pf("Say what you're looking for", "Cerco qualcuno per parlare italiano.", "cerco"),
    ],
    model:
      "Ciao! Mi chiamo Hannah e sono di Amburgo, in Germania. Ho ventisei anni e abito a Bologna da tre mesi, vicino all'università. Lavoro come grafica in una piccola agenzia. Parlo tedesco e inglese, e un po' di italiano. Nel tempo libero mi piace andare in bicicletta, cucinare e guardare film. Vado anche spesso ai concerti. Cerco qualcuno per parlare italiano una volta alla settimana, magari al bar. In cambio posso aiutarti con il tedesco o con l'inglese. Scrivimi pure, rispondo sempre la sera. A presto!",
  }),
  t("About me", {
    id: "foto-famiglia",
    title: "Una foto della mia famiglia",
    titleTranslation: "A photo of my family",
    form: "description",
    situation: "Your Italian class asks everyone to bring a family photo. Write what people will see on yours.",
    points: [
      pf("Say where and when the photo is from", "Questa foto è di … , a … .", "foto"),
      pf("Say who is on it", "Nella foto ci sono mio … e mia … .", "ci", "sono"),
      pf("Describe one person", "Mia … ha i capelli … e gli occhi … .", "capelli", "occhi"),
      pf("Say how old someone is", "Mio … ha … anni.", "anni"),
      pf("Say what someone does", "Mio … lavora in … . / Mia … va a scuola.", "lavora", "scuola"),
      pf("Say when you see them", "Vedo la mia famiglia … .", "vedo"),
    ],
    model:
      "Questa foto è dell'estate scorsa, a casa dei miei genitori in Polonia. Nella foto ci sono mio padre, mia madre, mio fratello e mia sorella. Mia madre ha i capelli corti e grigi e gli occhi azzurri. Ride sempre. Mio fratello ha quindici anni e mia sorella ne ha ventidue. Mio padre lavora in una fabbrica e mio fratello va ancora a scuola. Mia sorella studia medicina a Cracovia. Vedo la mia famiglia due volte all'anno, a Natale e d'estate. Mi mancano tanto.",
  }),
  t("About me", {
    id: "la-mia-settimana",
    title: "La mia settimana",
    titleTranslation: "My week",
    form: "description",
    situation: "A new friend asks what your week looks like. Write it for them.",
    points: [
      pf("Say when you work or study", "Dal lunedì al … lavoro / studio.", "lunedì", "lavoro", "studio"),
      pf("Say what time you start and stop", "Comincio alle … e finisco alle … .", "comincio", "finisco"),
      pf("Say what you do on one evening", "Il … sera … .", "sera"),
      pf("Say what you do at the weekend", "Nel fine settimana … .", "settimana", "weekend"),
      pf("Say which day you like best", "Il mio giorno preferito è … , perché … .", "preferito", "perché"),
      pf("Say when you have time to meet", "Ho tempo il … .", "tempo"),
    ],
    model:
      "Dal lunedì al giovedì lavoro in un ufficio in centro a Milano. Comincio alle nove e finisco alle sei. Vado al lavoro con la metro. Il martedì sera vado a lezione di italiano, e il giovedì sera faccio sport in palestra. Nel fine settimana dormo tanto e faccio la spesa al mercato. La domenica telefono a mia madre. Il mio giorno preferito è il venerdì, perché non lavoro e spesso vado a cena fuori con gli amici. Ho tempo il venerdì o il sabato.",
  }),

  // ---------- Home ----------
  t("Home", {
    id: "la-mia-stanza",
    title: "La mia stanza",
    titleTranslation: "My room",
    form: "description",
    situation: "Your friend abroad wants to know what your new room in Italy is like.",
    points: [
      pf("Say where the room is", "La mia stanza è in un appartamento a … .", "stanza", "appartamento"),
      pf("Say how big it is", "La stanza è … .", "grande", "piccola"),
      pf("Say what furniture there is", "C'è un … e una … .", "c'è", "letto", "tavolo"),
      pf("Say what's on the wall or by the window", "Sul muro c'è … . / Vicino alla finestra … .", "muro", "finestra"),
      pf("Say who you live with", "Abito con … .", "abito"),
      pf("Say what you like or don't like", "La stanza mi piace, ma … .", "piace", "ma"),
    ],
    model:
      "La mia stanza è in un vecchio appartamento a Padova, al terzo piano. La stanza non è grande, ma è luminosa. C'è un letto, un tavolo, una sedia e un piccolo armadio. Vicino alla finestra c'è una pianta e sul muro c'è una foto della mia città. Abito con altri tre studenti, due ragazze e un ragazzo. Dividiamo la cucina e il bagno. La stanza mi piace molto, ma non c'è l'ascensore e d'inverno fa un po' freddo. L'anno prossimo cerco una stanza più grande.",
  }),
  t("Home", {
    id: "biglietto-vicini",
    title: "Un biglietto per i vicini",
    titleTranslation: "A note for the neighbours",
    form: "message",
    situation: "You're having a few friends over on Saturday evening. Leave a friendly note for your neighbours.",
    points: [
      pf("Greet them and say who you are", "Cari vicini, sono … dell'interno … .", "cari", "vicini", "sono"),
      pf("Say what's happening and when", "Sabato sera faccio una … .", "sera", "festa", "cena"),
      pf("Say until when", "Finisce verso l'una / le … .", "finisce", "verso"),
      pf("Say sorry for the noise", "Scusate se c'è un po' di rumore.", "scusate", "rumore"),
      pf("Give your phone number", "Se la musica è troppo alta, chiamatemi: … .", "chiamatemi", "chiamate"),
      pf("Close the note", "Grazie e a presto, …", "grazie", "presto"),
    ],
    model:
      "Cari vicini, sono Sofia dell'interno dodici, al secondo piano. Abito qui da settembre. Sabato sera faccio una piccola festa per il mio compleanno. Vengono una decina di amici. Comincia alle otto e finisce verso l'una. Scusate se c'è un po' di rumore. Se la musica è troppo alta, chiamatemi o bussate alla porta: il mio numero è 347 123 4567. Siete invitati anche voi per una fetta di torta! La faccio io, con le mele del mercato. Grazie e a presto, Sofia",
  }),
  t("Home", {
    id: "qualcosa-rotto",
    title: "Si è rotto qualcosa",
    titleTranslation: "Something has broken",
    form: "message",
    situation: "Something in your rented flat is broken. Send a short message to your landlord.",
    points: [
      pf("Greet the landlord and say who you are", "Buongiorno, sono … dell'appartamento in via … .", "buongiorno", "sono"),
      pf("Say what is broken", "Il / la … non funziona.", "funziona", "rotto", "rotta"),
      pf("Say since when", "Da … non funziona più.", "da"),
      pf("Say why it's a problem", "È un problema perché … .", "problema", "perché"),
      pf("Say when you're home", "Sono a casa il … .", "casa"),
      pf("Ask for help and thank them", "Può mandare qualcuno? Grazie mille.", "può", "grazie"),
    ],
    model:
      "Buongiorno signor Ferri, sono Ahmed dell'appartamento in via Garibaldi 8, al primo piano. Il riscaldamento nella mia camera non funziona. Da lunedì non funziona più e la stanza è molto fredda. È un problema perché lavoro da casa e la sera fa davvero freddo. Adesso dormo con due maglioni e bevo tè tutto il giorno. Anche la mia vicina ha lo stesso problema. Sono a casa il mercoledì e il giovedì, tutto il giorno. Può mandare qualcuno a controllare? Grazie mille. Cordiali saluti, Ahmed",
  }),

  // ---------- Food and shops ----------
  t("Food and shops", {
    id: "lista-spesa",
    title: "La spesa per sabato",
    titleTranslation: "Shopping for Saturday",
    form: "message",
    situation: "Your flatmate is going to the supermarket. Send a message with what you need for a dinner on Saturday.",
    points: [
      pf("Say why you need things", "Sabato cucino per … .", "cucino", "sabato"),
      pf("Ask for vegetables, with amounts", "Puoi comprare un chilo di … ?", "chilo", "comprare", "grammi"),
      pf("Ask for something to drink", "E due bottiglie di … , per favore.", "bottiglie", "bottiglia"),
      pf("Say what you don't need", "Abbiamo ancora … , quindi non serve.", "ancora", "serve"),
      pf("Say where the money is", "I soldi sono sul … .", "soldi"),
      pf("Thank them", "Grazie mille!", "grazie"),
    ],
    model:
      "Ciao Giulia! Sabato cucino per i miei genitori, arrivano dalla Spagna. Puoi comprare un chilo di patate, quattro pomodori e una cipolla grande? E mezzo chilo di pollo, per favore. E due bottiglie di vino rosso, non troppo caro. Abbiamo ancora il riso e l'olio, quindi non serve. Il pane lo compro io domani mattina. I soldi sono sul tavolo della cucina, venti euro. Grazie mille! Naturalmente sei invitata anche tu a cena. Mia madre fa la sua famosa tortilla.",
  }),
  t("Food and shops", {
    id: "ordine-pasticceria",
    title: "Un ordine in pasticceria",
    titleTranslation: "An order at the pastry shop",
    form: "message",
    situation: "It's a colleague's birthday tomorrow. Order a cake and pastries from the pastry shop by message.",
    points: [
      pf("Greet the shop", "Buongiorno, … .", "buongiorno", "salve"),
      pf("Say what you want to order", "Vorrei ordinare una … .", "vorrei", "ordinare"),
      pf("Say for how many people", "È per … persone.", "persone"),
      pf("Say when you'll collect it", "Passo a prenderla domani alle … .", "passo", "prenderla"),
      pf("Ask what it costs", "Quanto costa?", "quanto", "costa"),
      pf("End politely", "Grazie mille, cordiali saluti, …", "grazie", "saluti"),
    ],
    model:
      "Buongiorno, vorrei ordinare una torta per domani. È per il compleanno di una collega. È per dodici persone. Vorrei una torta al cioccolato, non troppo dolce, perché la mia collega non ama molto lo zucchero. Vorrei anche dodici paste mignon, miste. Potete scrivere sulla torta 'Auguri Ilaria'? Passo a prenderla domani alle otto e mezza, prima del lavoro. Quanto costa? Posso pagare con la carta? Se è possibile, vorrei anche delle candeline e una scatola grande per portare tutto in ufficio. Grazie mille, cordiali saluti, Tomás",
  }),
  t("Food and shops", {
    id: "piatto-preferito",
    title: "Il mio piatto preferito",
    titleTranslation: "My favourite dish",
    form: "description",
    situation: "Your class is making a recipe book with dishes from everyone's country. Write about yours.",
    points: [
      pf("Say what the dish is and where it's from", "Il mio piatto preferito è … , un piatto di … .", "piatto", "preferito"),
      pf("Say what's in it", "Dentro ci sono … e … .", "dentro", "ci"),
      pf("Say who makes it", "Lo prepara sempre mia … .", "prepara"),
      pf("Say when people eat it", "Lo mangiamo … .", "mangiamo"),
      pf("Say how it tastes", "È … e … .", "buono", "buonissimo", "dolce", "salato", "piccante", "caldo"),
      pf("Say if you can make it yourself", "Lo so fare anch'io. / Non lo so fare.", "so", "fare"),
    ],
    model:
      "Il mio piatto preferito sono i pierogi, un piatto tipico della Polonia. Sono come dei piccoli ravioli. Dentro ci sono patate e formaggio, oppure carne o frutta. Li prepara sempre mia nonna, con le mani, cento alla volta. Li mangiamo soprattutto a Natale e la domenica, con il burro e la cipolla. Sono caldi, morbidi e buonissimi. Lo so fare anch'io, ma è lungo e non sono mai buoni come quelli della nonna. In Italia a volte li mangio in un ristorante polacco.",
  }),

  // ---------- Out and about ----------
  t("Out and about", {
    id: "la-strada-di-casa",
    title: "La strada per casa mia",
    titleTranslation: "The way to my house",
    form: "message",
    situation: "A friend is visiting you for the first time. Send them directions from the station.",
    points: [
      pf("Say how to leave the station", "Esci dalla stazione e … .", "esci", "stazione"),
      pf("Say which way to walk", "Vai dritto e poi giri a destra / a sinistra.", "dritto", "destra", "sinistra"),
      pf("Say what they pass", "Passi davanti a … .", "passi", "davanti"),
      pf("Say how long it takes", "Sono … minuti a piedi.", "minuti", "piedi"),
      pf("Describe the building", "Casa mia è al numero … , con il portone … .", "numero", "portone"),
      pf("Say what to do if they're lost", "Se non trovi la strada, chiamami.", "chiamami"),
    ],
    model:
      "Ciao Anna! Esci dalla stazione dall'uscita principale e attraversa la piazza. Vai dritto fino al ponte e poi giri a sinistra. Passi davanti a un grande supermercato e a una chiesa. Al bar all'angolo giri a destra: quella è la mia via, via dei Fiori. Sono circa dieci minuti a piedi. Casa mia è al numero diciotto, con il portone verde e una bici davanti. Io abito al secondo piano. Se non trovi la strada, chiamami. Posso anche venire a prenderti alla stazione. A dopo!",
  }),
  t("Out and about", {
    id: "spostare-appuntamento",
    title: "Spostare un appuntamento",
    titleTranslation: "Moving a meeting",
    form: "message",
    situation: "You can't make it to coffee with a friend tomorrow. Send a message to change the plan.",
    points: [
      pf("Say sorry and that you can't come", "Scusa, domani non posso.", "scusa", "posso"),
      pf("Say why", "Devo … .", "devo"),
      pf("Suggest another day", "Puoi il … ?", "puoi"),
      pf("Suggest a time", "Alle … ?", "alle"),
      pf("Suggest a place", "Ci vediamo al … ?", "vediamo"),
      pf("End warmly", "A presto!", "presto", "baci", "abbraccio"),
    ],
    model:
      "Ciao Marco, scusa, domani non posso venire a prendere il caffè. Devo lavorare fino alle sei, perché una collega è malata. Mi dispiace tanto! Puoi il venerdì? Oppure il sabato mattina? Alle dieci per me va bene, o anche alle undici. Ci vediamo al nuovo bar vicino al mercato? Fanno una torta di mele buonissima. Questa volta offro io, perché è colpa mia. Fammi sapere! Ho proprio voglia di vederti e di sentire le novità del tuo nuovo lavoro. A presto! Un abbraccio, Mira",
  }),
  t("Out and about", {
    id: "invito-picnic",
    title: "Un invito",
    titleTranslation: "An invitation",
    form: "message",
    situation: "You're organising a picnic in the park. Invite your classmates.",
    points: [
      pf("Say what you're organising", "Organizzo un … .", "organizzo", "picnic"),
      pf("Say when", "Domenica … alle … .", "domenica", "alle"),
      pf("Say where", "Al parco … , vicino a … .", "parco", "vicino"),
      pf("Say what people should bring", "Portate qualcosa da mangiare o da bere.", "portate"),
      pf("Say what happens if it rains", "Se piove, … .", "piove"),
      pf("Ask them to reply", "Mi dite se venite?", "venite", "dite"),
    ],
    model:
      "Ciao a tutti! Organizzo un picnic per la nostra classe. È domenica dodici giugno alle due. Ci troviamo al parco della Montagnola, vicino alla fontana grande. Portate qualcosa da mangiare o da bere, per esempio frutta, un'insalata o un piatto del vostro paese. Io porto una coperta grande, i bicchieri e un pallone. Se piove, andiamo a casa mia, che è vicina. Mi dite se venite entro venerdì? Così so quante persone vengono. Potete portare anche un amico. A domenica! Yuki",
  }),

  // ---------- Work and study ----------
  t("Work and study", {
    id: "sono-malato",
    title: "Sono malato",
    titleTranslation: "I'm ill",
    form: "email",
    situation: "You're ill and can't go to work or to your course today. Write a short email.",
    points: [
      pf("Greet the person", "Gentile … ,", "gentile", "cara", "caro"),
      pf("Say you're ill", "Oggi sono malato / malata.", "malato", "malata"),
      pf("Say what's wrong", "Ho … .", "febbre", "influenza", "mal"),
      pf("Say what you're doing about it", "Resto a casa e … .", "resto", "casa"),
      pf("Say when you hope to be back", "Spero di tornare … .", "spero", "tornare"),
      pf("Close the email", "Cordiali saluti, …", "saluti"),
    ],
    model:
      "Gentile dottoressa Conti, oggi sono malata. Ho la febbre e un forte mal di testa, e stanotte non ho dormito. Quindi oggi non posso venire in ufficio. Resto a casa e bevo molto tè. Domani vado dal medico, se non sto meglio. La mia collega Laura sa cosa bisogna fare oggi per il cliente di Torino. Spero di tornare giovedì. Ho il telefono con me, quindi può chiamarmi se serve. Mi scusi per il disturbo e grazie per la comprensione. Cordiali saluti, Paula",
  }),
  t("Work and study", {
    id: "iscrizione-corso",
    title: "L'iscrizione a un corso",
    titleTranslation: "Signing up for a course",
    form: "form",
    situation: "Fill in the sign-up form for an Italian course. Write each line as a full sentence where you can.",
    points: [
      pf("Give your name", "Nome: … . Mi chiamo … .", "nome", "chiamo"),
      pf("Give your address", "Indirizzo: … . Abito in via … .", "indirizzo", "abito"),
      pf("Give your phone number and email", "Il mio numero è … e la mia email è … .", "numero", "email"),
      pf("Say how long you've studied", "Studio italiano da … mesi.", "studio", "mesi"),
      pf("Say which days you can come", "Posso venire il … e il … .", "posso"),
      pf("Say why you want to learn", "Voglio imparare l'italiano perché … .", "perché", "voglio"),
    ],
    model:
      "Nome: Li Wei. Mi chiamo Li Wei e sono cinese. Indirizzo: via Roma 5, Firenze. Abito in via Roma, al numero cinque, vicino al Duomo. Il mio numero è 333 987 6543 e la mia email è liwei@mail.it. Studio italiano da tre mesi, con un'applicazione e un libro. Posso venire il lunedì e il mercoledì, dopo le sei. Voglio imparare l'italiano perché lavoro qui e voglio parlare con i miei colleghi. Più tardi voglio anche leggere il giornale e capire la radio.",
  }),
  t("Work and study", {
    id: "giornata-lavoro",
    title: "La mia giornata di lavoro",
    titleTranslation: "My working day",
    form: "description",
    situation: "Your Italian teacher asks everyone to describe a normal working or study day.",
    points: [
      pf("Say what your job or study is", "Sono … . / Studio … .", "sono", "studio"),
      pf("Say how you get there", "Vado al lavoro in … .", "vado", "bici", "treno", "autobus", "macchina"),
      pf("Say what you do in the morning", "La mattina … .", "mattina"),
      pf("Say where and what you eat for lunch", "A pranzo mangio … .", "pranzo"),
      pf("Say what you do in the afternoon", "Il pomeriggio … .", "pomeriggio"),
      pf("Say what you like about it", "Il mio lavoro mi piace perché … .", "piace", "perché"),
    ],
    model:
      "Sono infermiera in un ospedale di Roma. Vado al lavoro in autobus, ci metto mezz'ora. La mattina aiuto i pazienti a lavarsi e a fare colazione, e do le medicine. A pranzo mangio un panino o un'insalata alla mensa con le mie colleghe. È un momento piacevole. Il pomeriggio parlo con i medici e con le famiglie dei pazienti. Il mio lavoro mi piace perché aiuto le persone. Però è anche faticoso, perché a volte lavoro di notte e poi dormo di giorno.",
  }),

  // ---------- Free time ----------
  t("Free time", {
    id: "cartolina",
    title: "Una cartolina",
    titleTranslation: "A postcard",
    form: "message",
    situation: "You're on a short trip in Italy. Write a postcard to your Italian teacher.",
    points: [
      pf("Greet them", "Cara / Caro … ,", "cara", "caro"),
      pf("Say where you are", "Sono a … .", "sono"),
      pf("Say who you're with", "Sono qui con … .", "con"),
      pf("Say what the weather is like", "Il tempo è … . / Fa … .", "tempo", "fa"),
      pf("Say what you do every day", "Ogni giorno … .", "ogni", "giorno"),
      pf("Say when you're back and close", "A presto! Saluti, …", "presto", "saluti"),
    ],
    model:
      "Cara Elena, sono a Napoli per un fine settimana! Sono qui con la mia amica Lisa. Dormiamo in un piccolo albergo vicino al mare. Il tempo è bellissimo: fa caldo, ci sono venticinque gradi e c'è sempre il sole. Ogni giorno camminiamo per i vicoli del centro e prendiamo un caffè al bar. Ieri abbiamo mangiato la pizza più buona della mia vita! La gente parla veloce, ma capisco tante cose. Domani andiamo a Pompei con il treno. A presto, ci vediamo a lezione! Saluti, Leon",
  }),
  t("Free time", {
    id: "il-mio-weekend",
    title: "Il mio fine settimana",
    titleTranslation: "My weekend",
    form: "description",
    situation: "On Monday your class talks about the weekend. Write about a normal weekend for you.",
    points: [
      pf("Say what you do on Saturday morning", "Il sabato mattina … .", "sabato"),
      pf("Say where you go", "Vado a / al … .", "vado"),
      pf("Say who you see", "Vedo … .", "vedo", "amici"),
      pf("Say what you do on Sunday", "La domenica … .", "domenica"),
      pf("Say what you like best", "La cosa più bella è … .", "bella"),
      pf("Say what you never do", "Nel fine settimana non … mai.", "mai"),
    ],
    model:
      "Il sabato mattina dormo fino alle nove. Poi faccio colazione con un cappuccino e un cornetto. Dopo vado al mercato e compro la frutta, la verdura e dei fiori. Il pomeriggio vedo spesso i miei amici. Facciamo una passeggiata in centro o andiamo al cinema. La domenica cucino per tutta la settimana e telefono alla mia famiglia. La cosa più bella è la colazione del sabato, perché ho tempo. Nel fine settimana non lavoro mai e non guardo quasi mai il telefono. È molto rilassante.",
  }),
  t("Free time", {
    id: "palestra",
    title: "Una domanda alla palestra",
    titleTranslation: "A question for the gym",
    form: "email",
    situation: "You want to join a sports club or gym. Write to ask for information.",
    points: [
      pf("Greet them", "Buongiorno, … .", "buongiorno", "gentili"),
      pf("Say which sport you want to do", "Vorrei fare … .", "vorrei", "fare"),
      pf("Say your level", "Gioco da … anni. / Sono principiante.", "principiante", "anni"),
      pf("Ask when the classes are", "Quando ci sono gli allenamenti / i corsi?", "quando", "allenamenti", "corsi"),
      pf("Ask what it costs", "Quanto costa al mese?", "costa", "mese"),
      pf("Ask if you can try a lesson", "Posso fare una lezione di prova?", "prova"),
    ],
    model:
      "Buongiorno, vorrei fare un corso di nuoto nella vostra piscina. Abito da poco a Verona, vicino al parco. Nuoto da cinque anni, ma non sono molto veloce. Mi piace nuotare con altre persone. Quando ci sono i corsi per adulti? Lavoro di giorno, quindi la sera è meglio. Quanto costa al mese, o all'anno? Bisogna avere un certificato medico? Posso fare una lezione di prova? Ho già il costume e la cuffia, ma non gli occhialini. Grazie in anticipo. Cordiali saluti, Ivan",
  }),

  // ---------- People ----------
  t("People", {
    id: "auguri-amica",
    title: "Buon compleanno!",
    titleTranslation: "Happy birthday!",
    form: "message",
    situation: "An Italian friend has a birthday. Write a message for their card.",
    points: [
      pf("Wish them happy birthday", "Tanti auguri di buon compleanno!", "auguri", "compleanno"),
      pf("Say something nice about them", "Sei … .", "sei"),
      pf("Say what you wish them", "Ti auguro … .", "auguro"),
      pf("Remember something you did together", "Ti ricordi … ?", "ricordi"),
      pf("Suggest doing something", "Perché non … ?", "perché"),
      pf("Close the card", "Un abbraccio, … / Baci, …", "abbraccio", "baci"),
    ],
    model:
      "Cara Francesca, tanti auguri di buon compleanno! Trent'anni, che vecchia! Sei la mia prima amica italiana e mi aiuti sempre con la lingua. Ti auguro un anno bellissimo, con tanto sole, buoni amici e cose buone da mangiare. Ti ricordi la nostra gita in bici al lago? Eravamo così stanche e bagnate! Perché non ci torniamo il mese prossimo, quando fa più caldo? Porto io la torta. Spero che oggi passi una bella giornata con la tua famiglia. Un abbraccio, Carla",
  }),
  t("People", {
    id: "nuovo-collega",
    title: "Un nuovo collega",
    titleTranslation: "A new colleague",
    form: "message",
    situation: "A new colleague starts on Monday. Write them a short welcome message.",
    points: [
      pf("Welcome them", "Benvenuto / Benvenuta in … !", "benvenuto", "benvenuta"),
      pf("Say who you are and what you do", "Sono … e lavoro come … .", "sono", "lavoro"),
      pf("Say what time people start", "Di solito cominciamo alle … .", "cominciamo"),
      pf("Give one useful tip", "Un consiglio: … .", "consiglio"),
      pf("Say where people have lunch", "Di solito pranziamo … .", "pranziamo"),
      pf("Offer help", "Se hai una domanda, chiedi pure!", "domanda", "chiedi"),
    ],
    model:
      "Ciao Noah, benvenuto nella nostra squadra! Sono Selin e lavoro come grafica, alla scrivania vicino alla finestra. Di solito cominciamo alle nove, ma nessuno arriva proprio puntuale. Un consiglio: porta la tua tazza, perché in cucina non ce ne sono mai abbastanza. Di solito pranziamo all'una, insieme, nel bar qui sotto. Il venerdì a volte c'è la torta per tutti. Se hai una domanda, chiedi pure! Sono alla mia scrivania tutto il giorno e ti aiuto volentieri. Benvenuto ancora! A lunedì!",
  }),
  t("People", {
    id: "migliore-amica",
    title: "Il mio migliore amico o la mia migliore amica",
    titleTranslation: "My best friend",
    form: "description",
    situation: "Write about your best friend for a class blog.",
    points: [
      pf("Say their name and age", "Il mio migliore amico / La mia migliore amica si chiama … e ha … anni.", "chiama", "anni"),
      pf("Say where you met", "Ci conosciamo da … .", "conosciamo"),
      pf("Describe how they look", "Ha i capelli … e … .", "capelli"),
      pf("Describe what they're like", "È … .", "simpatica", "simpatico", "divertente", "gentile", "intelligente"),
      pf("Say what you do together", "Insieme … .", "insieme"),
      pf("Say why they're your best friend", "È il mio migliore amico / la mia migliore amica perché … .", "perché"),
    ],
    model:
      "La mia migliore amica si chiama Daria e ha ventiquattro anni. Ci conosciamo dalla scuola superiore, a Kiev. Adesso lei abita a Berlino e io in Italia. Ha i capelli lunghi e neri e gli occhi castani, e porta sempre le scarpe rosse. È divertente e molto intelligente. Insieme cuciniamo, ridiamo tanto e parliamo per ore al telefono. È la mia migliore amica perché mi ascolta sempre. Il mese prossimo viene in Italia e le faccio vedere la mia città.",
  }),

  // ---------- Everyday life ----------
  t("Everyday life", {
    id: "il-tempo",
    title: "Il tempo qui",
    titleTranslation: "The weather here",
    form: "message",
    situation: "Your family back home asks about the weather in Italy. Send them a message.",
    points: [
      pf("Say what the weather is like today", "Oggi … .", "oggi"),
      pf("Say how warm or cold it is", "Ci sono … gradi.", "gradi"),
      pf("Say what you're wearing", "Porto … .", "porto"),
      pf("Say what Italians do in this weather", "Gli italiani … .", "italiani"),
      pf("Compare with home", "Da noi invece … .", "noi"),
      pf("Say what you like or miss", "Mi manca … .", "manca"),
    ],
    model:
      "Ciao mamma! Oggi a Roma c'è il sole, come quasi tutti i giorni. Non c'è vento e il cielo è blu. Ci sono ventotto gradi, ed è ottobre! Porto una maglietta e i pantaloni corti. Gli italiani invece portano già la giacca, perché per loro è autunno. Al pomeriggio tutti cercano l'ombra o prendono un gelato. Da noi invece adesso piove e fa freddo, vero? Mi mancate voi, ma la pioggia non mi manca per niente. Vi mando una foto del cielo.",
  }),
  t("Everyday life", {
    id: "diario",
    title: "Il mio diario",
    titleTranslation: "My diary",
    form: "diary",
    situation: "Write a diary entry about today: what you did, who you saw and how you feel.",
    points: [
      pf("Say what day it is and how you feel", "Oggi è … . Sono … .", "oggi", "sono"),
      pf("Say what you did in the morning", "Stamattina … .", "stamattina"),
      pf("Say who you saw", "Ho visto … .", "visto"),
      pf("Say what was new or difficult", "La cosa nuova / difficile è stata … .", "nuova", "difficile"),
      pf("Say what you learned in Italian", "Ho imparato la parola … .", "imparato", "parola"),
      pf("Say what you'll do tomorrow", "Domani … .", "domani"),
    ],
    model:
      "Oggi è martedì. Sono stanca, ma contenta. Stamattina ho fatto la spesa da sola, tutta in italiano. La cassiera mi ha chiesto se volevo un sacchetto, e ho capito! Ho visto anche il mio vicino Gino. Ha un cane nuovo, piccolo e marrone, che si chiama Pippo. La cosa difficile è stata l'autobus: ho preso quello sbagliato. Ho imparato la parola 'fermata'. Domani vado in biblioteca e imparo venti parole nuove. Le scrivo in un piccolo quaderno blu, che porto sempre nella borsa.",
  }),
  t("Everyday life", {
    id: "borsa-persa",
    title: "Ho perso la borsa",
    titleTranslation: "I've lost my bag",
    form: "message",
    situation: "You left your bag on the train. Fill in the lost-property message on the rail company's website.",
    points: [
      pf("Say what you lost", "Ho perso la mia … .", "perso"),
      pf("Describe it", "È una borsa … , di … .", "borsa", "zaino"),
      pf("Say what is in it", "Dentro c'è … .", "dentro"),
      pf("Say which train and when", "Ero sul treno da … a … , alle … .", "treno"),
      pf("Say where you sat", "Ero nella carrozza … , vicino al finestrino.", "carrozza", "finestrino"),
      pf("Give your contact details", "Potete chiamarmi al … .", "chiamarmi"),
    ],
    model:
      "Buongiorno, ho perso il mio zaino sul treno. È uno zaino blu, di stoffa, non molto grande, con un portachiavi rosso. Dentro c'è il mio computer, un libro, una sciarpa nera e le chiavi di casa. Ero sul treno da Firenze a Bologna, alle quattro e mezza di ieri pomeriggio. Ero nella carrozza numero tre, vicino al finestrino. Sono scesa a Bologna e ho dimenticato lo zaino sul sedile. Potete chiamarmi al 340 112 2334, o scrivermi una email. Il computer è molto importante per il mio lavoro. Grazie!",
  }),
];
