import type { WritingPoint, WritingTask } from "@/core/writing";

/**
 * Library writing at A1: real little texts people write in their first months
 * (profiles, notes, messages, postcards, forms, lists with a line). Every
 * point has a sentence frame and cue words; every task has a model answer of
 * the long length that covers each point and passes the checker.
 */
const pf = (prompt: string, frame: string, ...cues: string[]): WritingPoint => ({ prompt, frame, cues });
const t = (topic: string, x: Omit<WritingTask, "level" | "topic">): WritingTask => ({ ...x, level: "A1", topic, id: `lib-a1-${x.id}` });

export const writingA1: WritingTask[] = [
  // ---------- About me ----------
  t("About me", {
    id: "profiel-taalapp",
    title: "Mijn profiel",
    titleTranslation: "My profile",
    form: "description",
    situation: "You've joined a language-exchange app. Write the short profile other people will see.",
    points: [
      pf("Say your name and where you're from", "Ik heet … en ik kom uit … .", "heet", "naam", "kom"),
      pf("Say how old you are and where you live", "Ik ben … jaar en ik woon in … .", "jaar", "woon"),
      pf("Say what you do", "Ik werk als … . / Ik studeer … .", "werk", "studeer", "student"),
      pf("Say which languages you speak", "Ik spreek … en een beetje Nederlands.", "spreek"),
      pf("Say what you like doing", "In mijn vrije tijd … ik graag.", "graag", "vrije"),
      pf("Say what you're looking for", "Ik zoek iemand om Nederlands mee te praten.", "zoek", "praten"),
    ],
    model:
      "Hallo! Ik heet Marco en ik kom uit Italië. Ik ben achtentwintig jaar en ik woon in Utrecht, vlak bij het station. Ik werk als kok in een restaurant in het centrum. Ik spreek Italiaans en Engels, en een beetje Nederlands. In mijn vrije tijd fiets ik graag en ik kook graag voor vrienden. Ik kijk ook veel films, vooral Nederlandse films met ondertitels. Ik zoek iemand om Nederlands mee te praten, een keer per week. Ik kan jou helpen met Italiaans. Tot snel!",
  }),
  t("About me", {
    id: "mijn-familie-foto",
    title: "Een foto van mijn familie",
    titleTranslation: "A photo of my family",
    form: "description",
    situation: "Your Dutch class asks everyone to bring a family photo. Write what people will see on yours.",
    points: [
      pf("Say where and when the photo is from", "Deze foto is van … , in … .", "foto"),
      pf("Say who is on it", "Op de foto zie je mijn … en mijn … .", "zie", "op"),
      pf("Describe one person", "Mijn … heeft … haar en … .", "heeft", "haar", "ogen"),
      pf("Say how old someone is", "Mijn … is … jaar.", "jaar"),
      pf("Say what someone does", "Mijn … werkt in … . / Mijn … zit op school.", "werkt", "school"),
      pf("Say when you see them", "Ik zie mijn familie … .", "zie"),
    ],
    model:
      "Deze foto is van vorige zomer, in de tuin van mijn ouders in Polen. Op de foto zie je mijn vader, mijn moeder, mijn broer en mijn zus. Mijn moeder heeft kort grijs haar en blauwe ogen. Ze lacht altijd. Mijn broer is vijftien jaar en mijn zus is tweeëntwintig. Mijn vader werkt in een fabriek en mijn broer zit nog op school. Mijn zus studeert in Krakau. Ik zie mijn familie twee keer per jaar, met Kerst en in de zomer. Ik mis ze.",
  }),
  t("About me", {
    id: "mijn-week",
    title: "Mijn week",
    titleTranslation: "My week",
    form: "description",
    situation: "A new friend asks what your week looks like. Write it for them.",
    points: [
      pf("Say when you work or study", "Van maandag tot … werk ik / studeer ik.", "maandag", "werk", "studeer"),
      pf("Say what time you start and stop", "Ik begin om … uur en ik stop om … uur.", "uur", "begin"),
      pf("Say what you do on one evening", "Op … avond … ik.", "avond", "maandagavond", "dinsdagavond", "woensdagavond", "donderdagavond", "vrijdagavond"),
      pf("Say what you do at the weekend", "In het weekend … ik.", "weekend"),
      pf("Say which day you like best", "Mijn favoriete dag is … , want … .", "favoriete", "want"),
      pf("Say when you have time to meet", "Ik heb tijd op … .", "tijd"),
    ],
    model:
      "Van maandag tot donderdag werk ik in een kantoor in Rotterdam. Ik begin om negen uur en ik stop om vijf uur. Ik ga met de trein. Op dinsdagavond ga ik naar Nederlandse les, en op donderdagavond sport ik. In het weekend slaap ik lang en ik doe boodschappen op de markt. Op zondag bel ik mijn moeder. Mijn favoriete dag is vrijdag, want dan werk ik niet en ik ga vaak uit eten. Ik heb tijd op vrijdag of zaterdag.",
  }),

  // ---------- Home ----------
  t("Home", {
    id: "mijn-kamer",
    title: "Mijn kamer",
    titleTranslation: "My room",
    form: "description",
    situation: "Your friend abroad wants to know what your new room in the Netherlands is like.",
    points: [
      pf("Say where the room is", "Mijn kamer is in een huis in … .", "kamer", "huis"),
      pf("Say how big it is", "De kamer is … .", "groot", "klein"),
      pf("Say what furniture there is", "Er staat een … en een … .", "staat", "er", "bed", "tafel"),
      pf("Say what's on the wall or by the window", "Aan de muur hangt … . / Bij het raam … .", "muur", "raam", "hangt"),
      pf("Say who you live with", "Ik woon met … .", "woon"),
      pf("Say what you like or don't like", "Ik vind de kamer … , maar … .", "vind", "maar"),
    ],
    model:
      "Mijn kamer is in een oud huis in Leiden, op de tweede verdieping. De kamer is niet groot, maar wel licht. Er staat een bed, een tafel, een stoel en een kleine kast. Bij het raam staat een plant. Aan de muur hangt een foto van mijn stad. Ik woon met drie andere studenten. We delen de keuken en de badkamer. Ik vind de kamer gezellig, maar de trap is heel steil en de douche is vaak koud. Volgend jaar zoek ik een grotere kamer.",
  }),
  t("Home", {
    id: "briefje-buren",
    title: "Een briefje voor de buren",
    titleTranslation: "A note for the neighbours",
    form: "message",
    situation: "You're having a few friends over on Saturday evening. Leave a friendly note in your neighbours' letterbox.",
    points: [
      pf("Greet them and say who you are", "Beste buren, ik ben … van nummer … .", "beste", "buren", "nummer"),
      pf("Say what's happening and when", "Op … avond geef ik een … .", "avond", "feestje", "etentje"),
      pf("Say until when", "Het duurt tot … uur.", "uur", "tot"),
      pf("Say sorry for the noise", "Sorry als het een beetje lawaai is.", "sorry", "lawaai"),
      pf("Give your phone number", "Is het te hard? Bel me: … .", "bel"),
      pf("Close the note", "Groeten, …", "groeten"),
    ],
    model:
      "Beste buren, ik ben Sofia van nummer twaalf. Ik woon hier sinds september. Op zaterdagavond geef ik een klein feestje voor mijn verjaardag. Er komen ongeveer tien vrienden. Het begint om acht uur en het duurt tot ongeveer één uur. Sorry als het een beetje lawaai is. Is het te hard? Bel me of klop gewoon op de deur: 06 12 34 56 78. U bent ook welkom voor een stuk taart! Ik maak hem zelf, met appels uit de markt. Groeten, Sofia",
  }),
  t("Home", {
    id: "iets-kapot",
    title: "Er is iets kapot",
    titleTranslation: "Something is broken",
    form: "message",
    situation: "Something in your rented room is broken. Send a short message to your landlord.",
    points: [
      pf("Greet the landlord and say who you are", "Goedemiddag, ik ben … van … .", "goedemiddag", "ben"),
      pf("Say what is broken", "De … is kapot.", "kapot"),
      pf("Say since when", "Sinds … werkt de … niet.", "sinds", "werkt"),
      pf("Say why it's a problem", "Dat is een probleem, want … .", "probleem", "want"),
      pf("Say when you're home", "Ik ben thuis op … .", "thuis"),
      pf("Ask for help and thank them", "Kunt u iemand sturen? Alvast bedankt.", "kunt", "bedankt"),
    ],
    model:
      "Goedemiddag meneer De Wit, ik ben Ahmed van de kamer op de eerste verdieping. De verwarming in mijn kamer is kapot. Sinds maandag werkt de verwarming niet meer. Dat is een probleem, want het is erg koud en ik werk thuis. Ik slaap nu met twee truien aan en ik drink de hele dag thee. Mijn buurvrouw heeft hetzelfde probleem. Ik ben thuis op woensdag en donderdag, de hele dag. Kunt u iemand sturen om naar de verwarming te kijken? Alvast bedankt. Met vriendelijke groet, Ahmed",
  }),

  // ---------- Food and shops ----------
  t("Food and shops", {
    id: "boodschappenlijst",
    title: "Boodschappen voor het weekend",
    titleTranslation: "Shopping for the weekend",
    form: "message",
    situation: "Your housemate is going to the supermarket. Send a message with what you need for a dinner on Saturday.",
    points: [
      pf("Say why you need things", "Ik kook zaterdag voor … .", "kook", "zaterdag"),
      pf("Ask for vegetables, with amounts", "Wil je … kilo … kopen?", "kilo", "kopen", "gram"),
      pf("Ask for something to drink", "En twee flessen … , graag.", "flessen", "fles", "graag"),
      pf("Say what you don't need", "We hebben nog … , dus dat hoeft niet.", "nog", "hoeft"),
      pf("Say where the money is", "Het geld ligt op … .", "geld", "ligt"),
      pf("Thank them", "Dank je wel!", "dank", "bedankt"),
    ],
    model:
      "Hoi Lotte! Ik kook zaterdag voor mijn ouders, ze komen uit Spanje. Wil je een kilo aardappelen, vier tomaten en een grote ui kopen? En vijfhonderd gram kip, graag. En twee flessen rode wijn, niet te duur. We hebben nog rijst en olie, dus dat hoeft niet. Brood heb ik ook al. Het geld ligt op de tafel in de keuken, twintig euro. Dank je wel! Je mag natuurlijk ook mee-eten. Mijn moeder maakt dan ook haar beroemde soep, met veel knoflook.",
  }),
  t("Food and shops", {
    id: "bij-de-bakker",
    title: "Bestellen bij de bakker",
    titleTranslation: "Ordering at the bakery",
    form: "message",
    situation: "It's a colleague's birthday tomorrow. Order a cake and rolls from the bakery by message.",
    points: [
      pf("Greet the bakery", "Goedemorgen, … .", "goedemorgen", "hallo"),
      pf("Say what you want to order", "Ik wil graag een … bestellen.", "bestellen", "graag"),
      pf("Say for how many people", "Het is voor … personen.", "personen"),
      pf("Say when you'll collect it", "Ik haal het op … om … uur.", "haal", "uur"),
      pf("Ask what it costs", "Hoeveel kost dat?", "kost", "hoeveel"),
      pf("End politely", "Alvast bedankt! Met vriendelijke groet, …", "bedankt", "groet"),
    ],
    model:
      "Goedemorgen, ik wil graag een appeltaart bestellen voor morgen. Het is voor de verjaardag van een collega. Het is voor twaalf personen. Ik wil ook twaalf kleine broodjes, zes witte en zes bruine. Kunt u op de taart 'Gefeliciteerd Ilse' schrijven? Ik haal het morgen op om half negen, voor mijn werk. Hoeveel kost dat? Kan ik met de pin betalen? De taart moet niet te zoet zijn, want mijn collega houdt niet van veel suiker. Ze vindt appels heel lekker. Alvast bedankt! Met vriendelijke groet, Tomás",
  }),
  t("Food and shops", {
    id: "mijn-lievelingsgerecht",
    title: "Mijn lievelingsgerecht",
    titleTranslation: "My favourite dish",
    form: "description",
    situation: "Your class is making a recipe book with dishes from everyone's country. Write about yours.",
    points: [
      pf("Say what the dish is and where it's from", "Mijn lievelingsgerecht is … uit … .", "lievelingsgerecht", "uit"),
      pf("Say what's in it", "Er zit … en … in.", "zit", "in"),
      pf("Say who makes it", "Mijn … maakt het altijd.", "maakt"),
      pf("Say when people eat it", "We eten het … .", "eten"),
      pf("Say how it tastes", "Het is … en … .", "lekker", "zoet", "zout", "pittig", "warm"),
      pf("Say if you can make it yourself", "Ik kan het zelf (niet) maken.", "kan", "maken"),
    ],
    model:
      "Mijn lievelingsgerecht is pierogi uit Polen. Pierogi zijn kleine pakjes van deeg. Er zit aardappel en kaas in, of vlees, of fruit. Mijn oma maakt het altijd met haar handen, wel honderd tegelijk. We eten het vooral met Kerst en op zondag, met boter en ui. Het is warm, zacht en heel lekker. Ik kan het zelf maken, maar het duurt lang en het is nooit zo lekker als bij mijn oma. In Nederland eet ik ze soms in een Pools restaurant.",
  }),

  // ---------- Out and about ----------
  t("Out and about", {
    id: "de-weg-uitleggen",
    title: "De weg naar mijn huis",
    titleTranslation: "The way to my house",
    form: "message",
    situation: "A friend is visiting you for the first time. Send them directions from the station.",
    points: [
      pf("Say how to leave the station", "Neem bij het station de uitgang … .", "station", "uitgang"),
      pf("Say which way to walk", "Ga rechtdoor en dan naar links / rechts.", "rechtdoor", "links", "rechts"),
      pf("Say what they pass", "Je loopt langs een … .", "langs"),
      pf("Say how long it takes", "Het is … minuten lopen.", "minuten"),
      pf("Describe the house", "Mijn huis is nummer … , met een … deur.", "nummer", "deur"),
      pf("Say what to do if they're lost", "Bel me als je het niet vindt.", "bel"),
    ],
    model:
      "Hoi Anna! Neem bij het station de uitgang Centrum. Ga rechtdoor tot de brug en ga dan naar links. Je loopt langs een grote supermarkt en een kerk. Bij het café op de hoek ga je naar rechts. Dat is mijn straat, de Bloemstraat. Het is ongeveer tien minuten lopen. Mijn huis is nummer achttien, met een groene deur en een fiets voor het raam. Bel me als je het niet vindt. Ik kan je ook ophalen bij het station, als je dat wilt. Tot straks!",
  }),
  t("Out and about", {
    id: "afspraak-verzetten",
    title: "Een afspraak verzetten",
    titleTranslation: "Moving an appointment",
    form: "message",
    situation: "You can't make it to coffee with a friend tomorrow. Send a message to change the plan.",
    points: [
      pf("Say sorry and that you can't come", "Sorry, ik kan morgen niet.", "sorry", "kan"),
      pf("Say why", "Ik moet … .", "moet"),
      pf("Suggest another day", "Kun je op … ?", "kun"),
      pf("Suggest a time", "Om … uur?", "uur"),
      pf("Suggest a place", "Zullen we in … afspreken?", "zullen", "afspreken"),
      pf("End warmly", "Tot snel!", "snel", "groetjes"),
    ],
    model:
      "Hoi Kees, sorry, ik kan morgen niet koffie drinken. Ik moet morgen tot zes uur werken, want een collega is ziek. Dat vind ik echt jammer! Kun je op vrijdag? Of op zaterdagochtend? Om tien uur is goed voor mij, of om elf uur. Zullen we in het nieuwe café bij de markt afspreken? Daar hebben ze lekkere appeltaart. Laat je het even weten? Ik betaal deze keer de koffie, want het is mijn schuld. Ik heb al zin in onze koffie. Tot snel! Groetjes, Mira",
  }),
  t("Out and about", {
    id: "een-uitnodiging",
    title: "Een uitnodiging",
    titleTranslation: "An invitation",
    form: "message",
    situation: "You're organising a picnic in the park. Invite a group of classmates.",
    points: [
      pf("Say what you're organising", "Ik organiseer een … .", "organiseer", "picknick"),
      pf("Say when", "Op … om … uur.", "uur"),
      pf("Say where", "In het … , bij de … .", "park", "bij"),
      pf("Say what people should bring", "Neem iets te eten of te drinken mee.", "neem", "mee"),
      pf("Say what happens if it rains", "Als het regent, … .", "regent"),
      pf("Ask them to reply", "Laat je weten of je komt?", "laat", "weten", "komt"),
    ],
    model:
      "Hoi allemaal! Ik organiseer een picknick voor onze klas. Het is op zondag twaalf juni om twee uur. We zitten in het park, bij de grote vijver, naast de speeltuin. Neem iets te eten of te drinken mee, bijvoorbeeld fruit, een salade of iets uit je land. Ik neem een groot kleed en een bal mee. Als het regent, gaan we naar mijn huis. Laat je weten of je komt? Dan weet ik hoeveel mensen er komen. Je mag ook een vriend of vriendin meenemen. Groetjes, Yuki",
  }),

  // ---------- Work and study ----------
  t("Work and study", {
    id: "ziekmelding",
    title: "Ik ben ziek",
    titleTranslation: "I'm ill",
    form: "email",
    situation: "You're ill and can't go to work or your course today. Write a short email.",
    points: [
      pf("Greet the person", "Beste … ,", "beste"),
      pf("Say you're ill", "Ik ben vandaag ziek.", "ziek"),
      pf("Say what's wrong", "Ik heb … .", "heb", "koorts", "hoofdpijn", "griep", "keelpijn"),
      pf("Say what you're doing about it", "Ik blijf thuis en ik … .", "blijf", "thuis"),
      pf("Say when you hope to be back", "Ik hoop dat ik op … weer kom.", "hoop", "weer"),
      pf("Close the email", "Met vriendelijke groet, …", "groet"),
    ],
    model:
      "Beste Marieke, ik ben vandaag ziek. Ik heb koorts en veel hoofdpijn, en ik slaap bijna niet. Ik kan vandaag dus niet naar mijn werk komen. Ik blijf thuis en ik drink veel thee. Morgen ga ik naar de huisarts als het niet beter is. Mijn collega Joris weet wat er vandaag moet gebeuren. Ik hoop dat ik op donderdag weer kom. Ik heb mijn telefoon bij me, dus je kunt me altijd bellen. Sorry voor het probleem. Met vriendelijke groet, Paula",
  }),
  t("Work and study", {
    id: "aanmelden-cursus",
    title: "Aanmelden voor een cursus",
    titleTranslation: "Signing up for a course",
    form: "form",
    situation: "Fill in the sign-up form for a Dutch course. Write each line as a full sentence where you can.",
    points: [
      pf("Give your name", "Naam: … . Ik heet … .", "naam", "heet"),
      pf("Give your address", "Adres: … . Ik woon in de … .", "adres", "woon"),
      pf("Give your phone number and email", "Mijn telefoonnummer is … en mijn e-mail is … .", "telefoonnummer", "e-mail"),
      pf("Say your level and how long you've studied", "Ik leer … maanden Nederlands.", "leer", "maanden"),
      pf("Say which days you can come", "Ik kan op … en … .", "kan"),
      pf("Say why you want to learn", "Ik wil Nederlands leren, want … .", "want", "wil"),
    ],
    model:
      "Naam: Li Wei. Ik heet Li Wei en ik kom uit China. Adres: Kerkstraat 5, Delft. Ik woon in de Kerkstraat, op nummer vijf. Mijn telefoonnummer is 06 98 76 54 32 en mijn e-mail is liwei@mail.nl. Ik leer drie maanden Nederlands, met een app en een boek. Ik kan op maandag en woensdag, na zes uur. Ik wil Nederlands leren, want ik werk hier en ik wil met mijn collega's praten. Ik wil later ook graag de krant lezen en naar de radio luisteren.",
  }),
  t("Work and study", {
    id: "mijn-werkdag",
    title: "Mijn werkdag",
    titleTranslation: "My working day",
    form: "description",
    situation: "Your Dutch teacher asks everyone to describe a normal working or study day.",
    points: [
      pf("Say what your job or study is", "Ik ben … . / Ik studeer … .", "ben", "studeer"),
      pf("Say how you get there", "Ik ga met de … naar mijn werk.", "met", "fiets", "trein", "bus"),
      pf("Say what you do in the morning", "'s Ochtends … ik.", "ochtends"),
      pf("Say where and what you eat for lunch", "Ik eet … in … .", "eet", "lunch"),
      pf("Say what you do in the afternoon", "'s Middags … ik.", "middags"),
      pf("Say what you like about it", "Ik vind mijn werk leuk, want … .", "vind", "want"),
    ],
    model:
      "Ik ben verpleegkundige in een ziekenhuis in Den Haag. Ik ga met de fiets naar mijn werk, het is twintig minuten. 's Ochtends help ik de patiënten met wassen en ontbijt, en ik geef medicijnen. Ik eet een broodje kaas in de kantine met mijn collega's. Dat is gezellig. 's Middags praat ik met de artsen en de familie van de patiënten. Ik vind mijn werk leuk, want ik help mensen. Maar het is ook zwaar, want ik werk soms in de nacht. Dan slaap ik overdag.",
  }),

  // ---------- Free time ----------
  t("Free time", {
    id: "ansichtkaart",
    title: "Een ansichtkaart",
    titleTranslation: "A postcard",
    form: "message",
    situation: "You're on a short trip in the Netherlands. Write a postcard to your Dutch teacher.",
    points: [
      pf("Greet them", "Beste … ,", "beste", "lieve"),
      pf("Say where you are", "Ik ben in … .", "ben"),
      pf("Say who you're with", "Ik ben hier met … .", "met"),
      pf("Say what the weather is like", "Het weer is … .", "weer"),
      pf("Say what you do every day", "Elke dag … we.", "elke", "dag"),
      pf("Say when you're back and close", "Tot volgende week! Groeten, …", "groeten", "tot"),
    ],
    model:
      "Beste Inge, ik ben nu in Maastricht, helemaal in het zuiden van Nederland. Ik ben hier met mijn vriendin. We slapen in een klein hotel bij de rivier. Het weer is mooi: het is zonnig en twintig graden. Elke dag lopen we door de oude stad en we drinken koffie op een terras. Gisteren hebben we vlaai gegeten, heel lekker! De mensen praten hier anders, maar ik begrijp veel. Morgen gaan we met de boot naar België, dat is heel dichtbij. Tot volgende week! Groeten, Leon",
  }),
  t("Free time", {
    id: "mijn-weekend",
    title: "Wat ik in het weekend doe",
    titleTranslation: "What I do at the weekend",
    form: "description",
    situation: "On Monday your class talks about the weekend. Write about a normal weekend for you.",
    points: [
      pf("Say what you do on Saturday morning", "Op zaterdagochtend … ik.", "zaterdagochtend", "zaterdag"),
      pf("Say where you go", "Ik ga naar … .", "ga", "naar"),
      pf("Say who you see", "Ik zie … .", "zie", "vrienden"),
      pf("Say what you do on Sunday", "Op zondag … ik.", "zondag"),
      pf("Say what you like best", "Het leukste is … .", "leukste"),
      pf("Say what you never do", "Ik … nooit in het weekend.", "nooit"),
    ],
    model:
      "Op zaterdagochtend slaap ik lang, tot negen uur. Dan ontbijt ik met eieren en koffie. Daarna ga ik naar de markt en ik koop groente en bloemen. 's Middags zie ik vaak vrienden. We wandelen in het park of we gaan naar de film. Op zondag kook ik voor de hele week en ik bel mijn familie. Het leukste is het ontbijt op zaterdag, want dan heb ik tijd. Ik werk nooit in het weekend. Ik kijk ook bijna nooit op mijn telefoon. Dat vind ik heel rustig.",
  }),
  t("Free time", {
    id: "sportclub-vraag",
    title: "Een vraag aan de sportclub",
    titleTranslation: "A question for the sports club",
    form: "email",
    situation: "You want to join a sports club. Write to ask for information.",
    points: [
      pf("Greet the club", "Beste … ,", "beste"),
      pf("Say which sport you want to do", "Ik wil graag … .", "graag", "wil"),
      pf("Say your level", "Ik … al … jaar. / Ik ben een beginner.", "beginner", "jaar"),
      pf("Ask when the training is", "Wanneer is de training?", "wanneer", "training"),
      pf("Ask what it costs", "Wat kost het per maand?", "kost", "maand"),
      pf("Ask if you can try a lesson", "Mag ik een keer meedoen?", "mag", "meedoen", "proefles"),
    ],
    model:
      "Beste mensen van tennisclub De Linde, ik wil graag tennissen bij jullie club. Ik woon sinds kort in Amersfoort, dicht bij het park. Ik speel al vijf jaar tennis, maar ik ben geen kampioen. Ik speel graag met andere mensen. Wanneer is de training voor volwassenen? Ik werk overdag, dus de avond is beter. Wat kost het per maand of per jaar? Mag ik een keer meedoen voor een proefles? Ik heb een eigen racket, maar geen tas of schoenen. Alvast bedankt. Met vriendelijke groet, Ivan",
  }),

  // ---------- People ----------
  t("People", {
    id: "felicitatie",
    title: "Gefeliciteerd!",
    titleTranslation: "Congratulations!",
    form: "message",
    situation: "A Dutch friend has a birthday. Write a message for their card.",
    points: [
      pf("Congratulate them", "Gefeliciteerd met je verjaardag!", "gefeliciteerd"),
      pf("Say something nice about them", "Je bent … .", "bent"),
      pf("Say what you wish them", "Ik wens je … .", "wens"),
      pf("Remember something you did together", "Weet je nog … ?", "weet", "nog"),
      pf("Suggest doing something", "Zullen we … ?", "zullen"),
      pf("Close the card", "Liefs, … / Groetjes, …", "liefs", "groetjes"),
    ],
    model:
      "Lieve Femke, gefeliciteerd met je verjaardag! Dertig jaar, wat oud! Je bent mijn eerste Nederlandse vriendin en je helpt me altijd met de taal. Ik wens je een heel mooi jaar, met veel zon, goede vrienden en lekker eten. Weet je nog onze fietstocht naar het strand? We waren zo moe en zo nat! Zullen we volgende maand weer gaan, als het warmer is? Ik neem de taart mee. Ik hoop dat je vandaag een fijne dag hebt met je familie. Liefs, Carla",
  }),
  t("People", {
    id: "nieuwe-collega",
    title: "Een nieuwe collega",
    titleTranslation: "A new colleague",
    form: "message",
    situation: "A new colleague starts on Monday. Write them a short welcome message.",
    points: [
      pf("Welcome them", "Welkom bij … !", "welkom"),
      pf("Say who you are and what you do", "Ik ben … en ik werk als … .", "ben", "werk"),
      pf("Say what time people start", "We beginnen om … uur.", "beginnen", "uur"),
      pf("Give one useful tip", "Tip: … .", "tip"),
      pf("Say where people have lunch", "We lunchen meestal … .", "lunchen"),
      pf("Offer help", "Heb je een vraag? Vraag het maar!", "vraag"),
    ],
    model:
      "Hoi Noah, welkom bij ons team! Ik ben Selin en ik werk als ontwerper, aan het bureau naast het raam. We beginnen meestal om half negen uur, maar niemand komt precies op tijd. Tip: neem je eigen mok mee, want er zijn er nooit genoeg. We lunchen meestal om twaalf uur samen in de kantine op de tweede verdieping. Op vrijdag eten we soms taart. Heb je een vraag? Vraag het maar! Ik zit de hele dag aan mijn bureau en ik help je graag. Tot maandag.",
  }),
  t("People", {
    id: "mijn-beste-vriend",
    title: "Mijn beste vriend of vriendin",
    titleTranslation: "My best friend",
    form: "description",
    situation: "Write about your best friend for a class blog.",
    points: [
      pf("Say their name and age", "Mijn beste vriend(in) heet … en is … jaar.", "heet", "jaar"),
      pf("Say where you met", "We kennen elkaar van … .", "kennen", "elkaar"),
      pf("Describe how they look", "Hij / zij heeft … .", "heeft"),
      pf("Describe what they're like", "Hij / zij is … .", "aardig", "grappig", "lief", "rustig", "slim"),
      pf("Say what you do together", "Samen … we.", "samen"),
      pf("Say why they're your best friend", "Hij / zij is mijn beste vriend(in), want … .", "want"),
    ],
    model:
      "Mijn beste vriendin heet Daria en ze is vierentwintig jaar. We kennen elkaar van de middelbare school in Kyiv. Nu woont zij in Berlijn en ik in Nederland. Ze heeft lang zwart haar en bruine ogen, en ze draagt altijd rode schoenen. Ze is grappig en heel slim. Samen koken we, we lachen veel en we praten uren aan de telefoon. Daria is mijn beste vriendin, want ze luistert altijd naar me. Volgende maand komt ze naar Nederland, en dan laat ik haar mijn stad zien.",
  }),

  // ---------- Everyday life ----------
  t("Everyday life", {
    id: "het-weer",
    title: "Het weer hier",
    titleTranslation: "The weather here",
    form: "message",
    situation: "Your family back home asks about the Dutch weather. Send them a message.",
    points: [
      pf("Say what the weather is like today", "Vandaag is het … .", "vandaag"),
      pf("Say how warm or cold it is", "Het is … graden.", "graden"),
      pf("Say what you're wearing", "Ik draag … .", "draag"),
      pf("Say what Dutch people do in the rain", "Nederlanders … gewoon in de regen.", "regen"),
      pf("Compare with home", "Bij ons is het … .", "ons"),
      pf("Say what you like or miss", "Ik mis … .", "mis"),
    ],
    model:
      "Hoi mama! Vandaag is het grijs en het regent, zoals bijna elke dag. Het waait ook hard. Het is maar tien graden, in mei! Ik draag een dikke jas, een sjaal en laarzen. Nederlanders fietsen gewoon in de regen, met een regenjas en zonder paraplu. Ik doe het nu ook. Bij ons is het nu dertig graden en zonnig, toch? Ik mis de zon en jullie, maar als de zon schijnt, is het hier heel mooi. Dan zitten alle mensen buiten op een terras.",
  }),
  t("Everyday life", {
    id: "dagboek",
    title: "Mijn dagboek",
    titleTranslation: "My diary",
    form: "diary",
    situation: "Write a diary entry about today: what you did, who you saw and how you feel.",
    points: [
      pf("Say what day it is and how you feel", "Vandaag is het … . Ik ben … .", "vandaag", "ben"),
      pf("Say what you did in the morning", "Vanochtend … ik.", "vanochtend"),
      pf("Say who you saw", "Ik heb … gezien.", "gezien", "zag"),
      pf("Say what was new or difficult", "Nieuw / moeilijk was … .", "nieuw", "moeilijk"),
      pf("Say what you learned in Dutch", "Ik heb het woord … geleerd.", "geleerd", "woord"),
      pf("Say what you'll do tomorrow", "Morgen … ik.", "morgen"),
    ],
    model:
      "Vandaag is het dinsdag. Ik ben moe, maar blij. Vanochtend heb ik voor het eerst alleen boodschappen gedaan in het Nederlands. De kassière vroeg of ik een tasje wilde, en ik begreep het! Ik heb mijn buurman Henk gezien. Hij heeft een nieuwe hond, een kleine bruine. Moeilijk was de bus: ik nam de verkeerde. Ik heb het woord 'overstappen' geleerd. Morgen ga ik naar de bibliotheek en ik leer twintig nieuwe woorden. Ik schrijf ze in een klein boekje.",
  }),
  t("Everyday life", {
    id: "verloren-tas",
    title: "Ik ben mijn tas kwijt",
    titleTranslation: "I've lost my bag",
    form: "message",
    situation: "You left your bag on the train. Fill in the lost-property message on the rail company's website.",
    points: [
      pf("Say what you lost", "Ik ben mijn … kwijt.", "kwijt"),
      pf("Describe it", "Het is een … tas, van … .", "tas"),
      pf("Say what is in it", "In de tas zit … .", "zit"),
      pf("Say which train and when", "Ik zat in de trein van … naar … , om … uur.", "trein", "uur"),
      pf("Say where you sat", "Ik zat in wagon … , bij het raam.", "zat"),
      pf("Give your contact details", "U kunt me bellen op … .", "bellen"),
    ],
    model:
      "Goedemiddag, ik ben mijn tas kwijt. Het is een blauwe rugtas van stof, niet groot, met een rode sleutelhanger. In de tas zit mijn laptop, een boek, een zwarte sjaal en mijn sleutels. Ik zat in de trein van Amsterdam naar Haarlem, om half vijf. Ik zat in de tweede wagon, bij het raam. Ik ben uitgestapt in Haarlem en ik ben de tas vergeten. U kunt me bellen op 06 11 22 33 44, of een e-mail sturen. De laptop is heel belangrijk voor mijn werk. Dank u wel!",
  }),
];
