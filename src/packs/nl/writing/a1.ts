import type { WritingPoint, WritingTask } from "@/core/writing";

/**
 * A1 writing topics, three per unit. Each has six points: a short text
 * covers the first two, a medium one four, a long one all six. The model
 * answer is the long version. Cues are words that show a point is covered.
 */

const p = (prompt: string, ...cues: string[]): WritingPoint => ({ prompt, cues });
/** A point with a sentence frame: "…" marks the learner's own words. */
const pf = (prompt: string, frame: string, ...cues: string[]): WritingPoint => ({ prompt, frame, cues });

type Draft = Omit<WritingTask, "level">;
const a1 = (tasks: Draft[]): WritingTask[] => tasks.map((t) => ({ ...t, level: "A1" }));

export const writingA1: Record<string, WritingTask[]> = {
  "a1-basis": a1([
    {
      id: "w-mijn-gegevens",
      title: "Mijn gegevens",
      titleTranslation: "My details",
      form: "form",
      situation: "You sign up for a Dutch course. Write a short note to the teacher with your details.",
      points: [
        pf("Say hello and give your name", "Goedemiddag! Mijn naam is … .", "naam", "voornaam", "achternaam"),
        pf("Spell your surname", "Mijn achternaam is …: … .", "achternaam", "letters"),
        pf("Give your age", "Ik ben … jaar.", "jaar"),
        pf("Give your phone number", "Mijn telefoonnummer is … .", "telefoonnummer", "nummer"),
        pf("Say which days are good for you", "… en … zijn goed.", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"),
        pf("Thank the teacher and say goodbye", "Dank u wel en tot ziens! Groeten, …", "dank", "groeten", "ziens"),
      ],
      model:
        "Goedemiddag! Mijn naam is Priya Shah. Mijn voornaam is Priya en mijn achternaam is Shah: S, H, A, H. Mijn achternaam heeft vier letters. Ik ben eenendertig jaar. Mijn telefoonnummer is nul zes, eenenveertig, negentien, tweeëntachtig, dertig. Dinsdag en donderdag zijn goed. Maandag is niet goed. Dank u wel en tot ziens! Groeten, Priya",
    },
    {
      id: "w-mijn-jaar",
      title: "Mijn jaar",
      titleTranslation: "My year",
      form: "description",
      situation: "Write about your favourite season, month and colour, for a class wall poster.",
      points: [
        pf("Say which season is your favourite", "Mijn lievelingsseizoen is de … .", "lievelingsseizoen", "lente", "zomer", "herfst", "winter"),
        pf("Say when your birthday is", "Ik ben jarig op … .", "jarig", "verjaardag"),
        pf("Say what it's like in your favourite season", "In de … is het … .", "warm", "koud", "donker", "bloemen", "waait"),
        pf("Name a month you like and a month you don't", "Ik vind … mooi, maar ik vind … niet mooi.", "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"),
        pf("Say when you have a holiday", "In … heb ik vakantie.", "vakantie"),
        pf("Say what your favourite colour is", "Mijn lievelingskleur is … .", "lievelingskleur", "geel", "rood", "groen", "oranje", "bruin", "roze", "paars", "blauw"),
      ],
      model:
        "Mijn lievelingsseizoen is de lente. In de lente zijn er overal bloemen. Ik ben jarig op twaalf mei, in de lente. In de lente is het niet warm en niet koud. Ik vind mei mooi, maar ik vind november niet mooi. In november is het koud en om vijf uur is het al donker. In juli en augustus heb ik vakantie. Mijn lievelingskleur is geel. In april zijn er overal gele tulpen.",
    },
    {
      id: "w-hallo-zeggen",
      title: "Hallo, buren!",
      titleTranslation: "Hello, neighbours!",
      form: "message",
      situation: "You've just moved in. Write a short note to your new neighbours to say hello.",
      points: [
        pf("Greet your neighbours", "Goedemiddag! / Hallo!", "hallo", "goedemiddag", "goedemorgen", "goedenavond"),
        pf("Say who you are", "Mijn naam is … .", "naam", "ben"),
        pf("Say your house number", "Ik woon op nummer … .", "nummer", "huisnummer", "woon"),
        pf("Say which languages you speak", "Ik spreek … en een beetje Nederlands.", "spreek", "nederlands", "engels"),
        pf("Give your phone number", "Mijn telefoonnummer is … .", "telefoonnummer"),
        pf("Say goodbye", "Tot ziens! Groeten, …", "groeten", "ziens", "doei"),
      ],
      model:
        "Goedemiddag! Mijn naam is Daniel Ortiz en ik ben uw nieuwe buurman. Ik woon sinds vorige week op nummer zeven. Ik kom uit Mexico. Ik spreek Spaans, Engels en een beetje Nederlands. Mijn telefoonnummer is nul zes, zevenentwintig, vijftig, dertien, achtentachtig. En u? Wat is uw naam en wat is uw huisnummer? Tot ziens! Groeten, Daniel",
    },
  ]),

  "a1-kennismaken": a1([
    {
      id: "w-over-mij",
      title: "Over mij",
      titleTranslation: "About me",
      form: "description",
      situation: "Write a short introduction about yourself for your Dutch class.",
      points: [
        pf("Say your name and where you're from", "Mijn naam is … en ik kom uit … .", "naam", "heet", "kom", "uit"),
        pf("Say how old you are", "Ik ben … jaar.", "jaar"),
        pf("Say where you live now", "Ik woon nu in … .", "woon"),
        pf("Say what you do: study or work", "Ik ben … . / Ik werk in … .", "student", "studeer", "werk"),
        pf("Say which languages you speak", "Ik spreek … en een beetje Nederlands.", "spreek", "nederlands", "engels"),
        pf("Say why you're learning Dutch", "Ik leer Nederlands, want … .", "leer", "want"),
      ],
      model:
        "Hallo! Mijn naam is Ana en ik kom uit Brazilië. Ik kom uit een klein dorp bij Rio. Ik ben zevenentwintig jaar. Ik woon nu twee weken in Nederland. Ik woon in Leiden, in een oud huis in het centrum, met twee huisgenoten. Ik ben student en ik studeer biologie aan de universiteit. Ik spreek Portugees en Engels, en nu ook een beetje Nederlands. Ik leer Nederlands, want ik wil hier wonen en werken. Ik vind de taal moeilijk, maar ook leuk.",
    },
    {
      id: "w-antwoord-sanne",
      title: "Een antwoord aan Sanne",
      titleTranslation: "A reply to Sanne",
      form: "message",
      situation: "Reply to Sanne's language-buddy profile (from the text Een taalmaatje).",
      points: [
        pf("Greet Sanne and say who you are", "Hoi Sanne, ik ben … .", "hoi", "hallo", "ben"),
        pf("Say where you're from and what you do", "Ik kom uit … en ik ben … .", "kom", "uit", "student", "werk"),
        pf("Say which language you speak", "Ik spreek … .", "spreek", "pools", "engels", "spaans"),
        pf("Say what you like doing", "Ik … graag.", "graag", "hobby"),
        pf("Suggest a day and time to meet", "Kun je op … om … uur?", "uur", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"),
        pf("Suggest a place and say goodbye", "Dan kunnen we koffie drinken in … . Groeten, …", "café", "bibliotheek", "groeten", "doei"),
      ],
      model:
        "Hoi Sanne, ik ben Ana. Ik kom uit Brazilië en ik ben student in Leiden. Ik wil graag je taalmaatje zijn! Ik spreek Portugees, Engels en een beetje Spaans. Ik leer nu Nederlands, maar ik spreek nog niet veel. Ik kook graag en ik fiets ook graag. Kun je op donderdag om vier uur? Dan kunnen we koffie drinken in een café bij het station. Groeten, Ana",
    },
    {
      id: "w-mijn-huisgenoten",
      title: "Mijn huisgenoten",
      titleTranslation: "My housemates",
      form: "description",
      situation: "Describe the people you live with (or friends, if you live alone).",
      points: [
        pf("Say who you live with", "Ik woon met … .", "woon", "met", "huisgenoten"),
        pf("Give their names and where they're from", "Ze heten … . … komt uit … .", "heten", "heet", "uit"),
        pf("Say what they study or what work they do", "… studeert … . / … werkt in … .", "studeert", "werkt"),
        pf("Say how old they are", "… is … jaar.", "jaar"),
        pf("Say what they're like", "… is heel aardig.", "aardig", "leuk", "lief", "lui"),
        pf("Say what you do together", "Op … … we samen.", "samen"),
      ],
      model:
        "Ik woon in een huis met twee huisgenoten. Ze heten Noor en Bram. Noor komt uit Groningen en Bram komt uit Leiden. Noor studeert geneeskunde en ze werkt ook in het ziekenhuis. Bram werkt in een café in de Breestraat. Noor is eenentwintig jaar en Bram is vierentwintig. Noor is heel aardig en ze helpt me met mijn Nederlands. Bram is leuk, maar soms een beetje lui. Op woensdag koken we samen en op vrijdag gaan we samen naar het café.",
    },
  ]),

  "a1-familie": a1([
    {
      id: "w-mijn-familie",
      title: "Mijn familie",
      titleTranslation: "My family",
      form: "description",
      situation: "Write about your family for a photo you're sharing with your class.",
      points: [
        pf("Say how big your family is", "Mijn familie is … .", "familie"),
        pf("Say who is in it: parents, brothers, sisters", "Ik heb een … en een … .", "vader", "moeder", "broer", "zus", "ouders"),
        pf("Give their names and ages", "Mijn … heet … en hij/ze is … jaar.", "heet", "jaar"),
        pf("Say where they live", "Mijn … wonen in … .", "wonen", "woont"),
        pf("Say what they do", "Mijn vader is … en mijn moeder werkt in … .", "werkt", "studeert", "school"),
        pf("Say how often you see or call them", "Ik bel elke … met mijn … .", "bel", "zie", "elke", "week", "maand"),
      ],
      model:
        "Mijn familie is niet groot. Ik heb een vader, een moeder, een broer en een zus. Mijn vader heet Paulo en hij is zesenvijftig jaar. Mijn moeder heet Rosa. Mijn zus Bia is negentien en mijn broer Rafael is dertig. Mijn ouders en mijn zus wonen in een dorp in Brazilië. Rafael woont in Rio met zijn vrouw en twee kinderen. Mijn vader is leraar en mijn moeder werkt in een winkel. Ik bel elke zondag met mijn moeder en ik ga twee keer per jaar naar huis.",
    },
    {
      id: "w-een-familiefeest",
      title: "Een familiefeest",
      titleTranslation: "A family party",
      form: "story",
      situation: "Describe a family celebration you like: a birthday, a holiday, a Sunday lunch.",
      points: [
        pf("Say what the party is and when it is", "Elke … is er een feest bij … .", "feest", "verjaardag", "zondag", "kerst"),
        pf("Say where the family meets", "De familie komt naar … .", "bij", "huis", "thuis"),
        pf("Say who comes", "Mijn … en mijn … komen ook.", "opa", "oma", "tante", "oom", "familie", "ouders"),
        pf("Say what you eat and drink", "We eten … en we drinken … .", "eten", "eet", "drinken", "drinkt", "taart"),
        pf("Say what you do after the meal", "Daarna … de kinderen en … we aan tafel.", "daarna", "spelen", "praten", "gitaar"),
        pf("Say why you like it", "Ik vind het heel … .", "leuk", "gezellig", "mooi", "fijn"),
      ],
      model:
        "Elke zondag is er een klein feest bij mijn oma thuis. Dan komt de hele familie naar haar huis in het dorp. Mijn ouders komen, mijn zus Bia, mijn broer Rafael met zijn kinderen en soms ook mijn tante. Mijn oma kookt en we eten samen aan een lange tafel in de tuin. Na het eten drinken we koffie met taart. Daarna spelen de kinderen in de tuin en praten de anderen aan tafel. Opa speelt soms gitaar. Ik vind het heel gezellig. Dat mis ik nu in Nederland.",
    },
  ]),

  "a1-eten": a1([
    {
      id: "w-boodschappenlijst",
      title: "Een boodschappenlijst",
      titleTranslation: "A shopping list",
      form: "message",
      situation: "Write a message to your housemates: you're going shopping for a dinner together.",
      points: [
        pf("Say you're going to the supermarket or market", "Ik ga om … naar de … .", "supermarkt", "markt", "ga"),
        pf("Say what you want to cook", "Vanavond wil ik … koken.", "kook", "koken", "maak", "maken"),
        pf("Say what you need", "Ik heb … en … nodig.", "nodig", "kilo", "stuk"),
        pf("Ask if they need anything", "Hebben jullie ook iets nodig?", "nodig", "willen", "wil"),
        pf("Say how much it costs and how to share it", "Het kost … euro. Dan betaalt iedereen … euro.", "euro", "kost", "betalen", "betaalt"),
        pf("Say when dinner is ready", "Om … is het eten klaar.", "uur", "klaar", "eten"),
      ],
      model:
        "Hoi Noor en Bram! Ik ga om twee uur naar de markt. Vanavond wil ik pasta met tomatensaus koken, zoals mijn oma. Ik heb een kilo tomaten, twee uien, olie en een stuk oude kaas nodig. Brood en wijn hebben we nog. Ik neem ook een fles water mee. Hebben jullie ook iets nodig? Stuur me een berichtje! Het kost vijftien euro. Kunnen we samen betalen? Dan betaalt iedereen vijf euro. Om half zeven is het eten klaar. Tot straks! Luca",
    },
    {
      id: "w-mijn-ontbijt",
      title: "Wat eet ik op een dag?",
      titleTranslation: "What I eat in a day",
      form: "description",
      situation: "Compare what you eat in a normal day with what Dutch people eat.",
      points: [
        pf("Say what you eat for breakfast", "Als ontbijt eet ik … .", "ontbijt"),
        pf("Say what you drink in the morning", "'s Ochtends drink ik … .", "koffie", "thee", "melk", "drink"),
        pf("Say what you eat for lunch", "Als lunch eet ik … .", "lunch", "boterham", "broodje"),
        pf("Say what you eat in the evening and at what time", "'s Avonds eet ik om … uur … .", "avond", "avonds", "uur"),
        pf("Say what Dutch people eat", "Nederlanders eten … .", "nederland", "nederlanders", "anders"),
        pf("Say what Dutch food you like or don't like", "Ik vind … lekker, maar … vind ik raar.", "lekker", "vind", "hagelslag", "kaas", "kibbeling"),
      ],
      model:
        "In Spanje eet ik als ontbijt brood met tomaat en drink ik een kleine koffie. Hier in Leiden eet ik brood met kaas. Ik drink 's ochtends koffie met melk. Als lunch eet ik twee boterhammen op mijn werk. 's Avonds kook ik om acht uur, vaak pasta of rijst met groente. In Nederland is het eten anders. Nederlanders eten al om zes uur warm, en hun lunch is kort en simpel. Ik vind kibbeling op de markt heel lekker. Hagelslag op brood vind ik raar, maar mijn huisgenoten eten het elke dag.",
    },
    {
      id: "w-in-het-restaurant",
      title: "In het café",
      titleTranslation: "In the café",
      form: "message",
      situation: "You're in a café with a friend. Write a message to another friend about it.",
      points: [
        pf("Say where you are and with whom", "Ik zit met … in een café bij … .", "café", "met"),
        pf("Say what you're drinking", "Ik drink … en … drinkt … .", "drinken", "drink", "drinkt", "bier", "wijn", "water", "thee"),
        pf("Say what you're eating", "Ik eet … .", "eet", "eten", "pasta", "vis", "soep", "taart"),
        pf("Say if it's tasty", "Het is heel … !", "lekker"),
        pf("Say how much it costs", "Het kost … euro.", "euro", "kost", "betaal"),
        pf("Invite your friend to come next time", "Kom je de volgende keer ook?", "volgende", "keer", "kom"),
      ],
      model:
        "Hoi Noor! Ik zit met Fatima in een klein café bij de gracht. Het is gezellig en niet heel druk. Fatima drinkt thee met munt en ik drink een cappuccino. Ik eet soep met een broodje en Fatima neemt vis met aardappels en groente. Het eten is heel lekker! Daarna nemen we samen een stuk appeltaart met slagroom. Samen betalen we vierendertig euro. Dat is niet duur. Kom je de volgende keer ook? Dan gaan we met z'n drieën. Tot straks! Marta",
    },
  ]),

  "a1-dag-en-tijd": a1([
    {
      id: "w-mijn-dag",
      title: "Een gewone dag",
      titleTranslation: "An ordinary day",
      form: "description",
      situation: "Describe a normal weekday, from morning to night.",
      points: [
        pf("Say when you get up", "Ik sta om … uur op.", "sta", "op", "uur"),
        pf("Say what you do in the morning", "Eerst … ik en daarna eet ik … .", "ochtends", "ontbijt", "douchen"),
        pf("Say how you get to school or work", "Om … fiets ik naar … .", "fiets", "bus", "trein"),
        pf("Say what you do in the afternoon", "'s Middags ga ik naar … .", "middags", "middag"),
        pf("Say what you do in the evening", "'s Avonds … ik.", "avonds", "avond"),
        pf("Say when you go to bed", "Om … uur ga ik naar bed.", "bed", "slaap"),
      ],
      model:
        "Ik sta elke dag om half acht op. Eerst ga ik douchen en daarna eet ik ontbijt: brood met kaas en een kopje koffie. Om half negen fiets ik naar de universiteit. Het is tien minuten fietsen. Regent het hard? Dan neem ik de bus. 's Ochtends heb ik les. 's Middags ga ik naar de bibliotheek, want daar is het rustig. Om vijf uur doe ik boodschappen. 's Avonds kook ik en dan kijk ik een film of lees ik een boek. Om elf uur ga ik naar bed.",
    },
    {
      id: "w-een-afspraak-maken",
      title: "Een afspraak maken",
      titleTranslation: "Making an appointment",
      form: "message",
      situation: "Write to a classmate to practise Dutch together this week.",
      points: [
        pf("Ask if they want to practise together", "Hoi …! Zullen we samen Nederlands oefenen?", "oefenen", "samen"),
        pf("Say which days you can't and why", "Op … kan ik niet, want dan … .", "kan", "niet", "moet"),
        pf("Suggest a day", "… is goed voor mij.", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"),
        pf("Suggest a time", "Kun jij om … ?", "uur", "half", "kwart"),
        pf("Suggest a place", "We kunnen in … zitten.", "bibliotheek", "café", "station"),
        pf("Ask them to answer and say goodbye", "Laat je het even weten? Tot …, groeten van …", "laat", "weten", "groeten", "tot"),
      ],
      model:
        "Hoi Fatima! Zullen we deze week samen Nederlands oefenen? Op maandag en woensdag kan ik niet, want dan heb ik les tot vijf uur. Donderdag kan ik ook niet, dan heb ik voetbal. Dinsdag is goed voor mij. Kun jij om kwart over vier? Dan heb jij geen werk meer, toch? We kunnen in de grote bibliotheek bij het station zitten. Daar is het rustig en er is koffie. Ik neem mijn boek mee. Laat je het even weten? Tot dinsdag, groeten van Marta",
    },
    {
      id: "w-mijn-weekend",
      title: "Mijn weekend",
      titleTranslation: "My weekend",
      form: "diary",
      situation: "Write a diary entry about your plans for next weekend.",
      points: [
        pf("Say what you do on Saturday morning", "Zaterdag ga ik om … uur naar … .", "zaterdag", "ochtends"),
        pf("Say what you do on Saturday afternoon or evening", "'s Avonds ga ik met … naar … .", "middags", "avonds"),
        pf("Say what you do on Sunday", "Zondag … ik.", "zondag"),
        pf("Say who you see", "Ik zie … .", "met", "vrienden", "familie"),
        pf("Say at what time things happen", "Het begint om … uur.", "uur", "half", "kwart"),
        pf("Say what you're looking forward to most", "Ik heb veel zin in … , want … .", "leuk", "zin", "graag"),
      ],
      model:
        "Zaterdag ga ik om tien uur naar het café, want ik werk daar tot vier uur. Het is altijd heel druk. 's Avonds ga ik met Noor en Bram naar een feestje bij een vriend van Bram. Het begint om negen uur. Zondag sta ik laat op. Ik ontbijt rustig en ik bel om twaalf uur met mijn moeder. 's Middags ga ik met Fatima wandelen in de stad. 's Avonds kook ik en lees ik een boek. Ik heb veel zin in het feestje, want de vrienden van Bram zijn altijd leuk.",
    },
  ]),

  "a1-wonen": a1([
    {
      id: "w-mijn-kamer",
      title: "Mijn kamer",
      titleTranslation: "My room",
      form: "description",
      situation: "Describe your room or home to a friend abroad.",
      points: [
        pf("Say where you live and in what kind of house", "Ik woon in een … huis in … .", "woon", "huis"),
        pf("Say how big your room is", "Mijn kamer is … : … vierkante meter.", "groot", "klein", "meter"),
        pf("Say what's in your room", "In mijn kamer staan een … en een … .", "bed", "bureau", "kast", "stoel", "lamp"),
        pf("Say where things are: on, under, next to", "Op het bureau staat … . Onder het bed liggen … .", "op", "onder", "naast", "achter", "tussen"),
        pf("Say what you see from your window", "Uit mijn raam zie ik … .", "raam", "zie"),
        pf("Say what you like or don't like about it", "Ik vind mijn kamer … , want … .", "vind", "fijn", "leuk", "mooi"),
      ],
      model:
        "Ik woon in een oud huis aan een gracht in Leiden. Mijn kamer is op de eerste verdieping. Hij is niet groot: twaalf vierkante meter. In mijn kamer staan een bed, een bureau, een stoel en een kast. Op het bureau staan mijn computer en een lamp. Onder het bed liggen mijn schoenen en naast de deur hangt mijn jas. Uit mijn raam zie ik een kleine tuin met een groene boom. Ik vind mijn kamer fijn, want hij is licht en rustig. Alleen de trap is heel steil.",
    },
    {
      id: "w-de-weg",
      title: "De weg naar mijn huis",
      titleTranslation: "The way to my house",
      form: "message",
      situation: "A friend is coming from the station to your house. Explain the way.",
      points: [
        pf("Say from where they start", "Kom uit het station en ga naar … .", "station"),
        pf("Give the first direction", "Loop rechtdoor tot … .", "rechtdoor", "links", "rechts"),
        pf("Mention a bridge, square or shop on the way", "Ga over de brug en dan … .", "brug", "plein", "winkel", "kerk"),
        pf("Give the next directions", "Bij … ga je … .", "dan", "daarna"),
        pf("Say how far it is", "Het is … minuten lopen.", "minuten", "ver", "dichtbij"),
        pf("Give your address and house number", "Mijn adres is … nummer … .", "adres", "nummer"),
      ],
      model:
        "Hoi Jonas! Het is niet moeilijk. Kom uit het station en ga naar links. Loop rechtdoor tot de brug. Ga over de brug en dan rechts. Dat is de Breestraat. Loop langs de kerk en het plein. Bij de kledingwinkel ga je links. Dan zie je de gracht. Ons huis is het derde huis aan de rechterkant, met een blauwe deur. Het is ongeveer tien minuten lopen. Mijn adres is Oude Vest nummer twaalf. Bel even als je er bent! Tot straks, Luca",
    },
    {
      id: "w-aan-de-verhuurder",
      title: "Een bericht aan de verhuurder",
      titleTranslation: "A message to the landlord",
      form: "email",
      situation: "Something in your room is broken. Write to your landlord.",
      points: [
        pf("Greet the landlord politely and say who you are", "Beste meneer …, ik ben … en ik woon op … .", "beste", "goedemiddag", "ik"),
        pf("Say what is broken", "De … is kapot.", "kapot"),
        pf("Say since when", "Het probleem is er al sinds … .", "sinds", "dagen", "week"),
        pf("Say why it's a problem", "Dat is een probleem, want … .", "kan", "niet", "probleem"),
        pf("Ask when someone can come", "Kan er deze week iemand komen?", "wanneer", "kan", "komen"),
        pf("Say when you're home and close politely", "Ik ben thuis op … . Met vriendelijke groet, …", "thuis", "groet", "groeten"),
      ],
      model:
        "Beste meneer De Groot, ik ben Sara Gómez en ik woon in de Breestraat, nummer acht. Ik schrijf u over de douche in de badkamer. De douche is kapot. Er komt geen warm water meer. Het probleem is er al sinds zondag. Dat is een probleem, want we zijn met drie studenten en we hebben maar één badkamer. Kan er deze week iemand komen? Ik ben thuis op dinsdag en donderdag, de hele dag. U kunt mij ook bellen. Met vriendelijke groet, Sara Gómez",
    },
  ]),

  "a1-werk-en-studie": a1([
    {
      id: "w-mijn-studie",
      title: "Mijn studie of werk",
      titleTranslation: "My studies or work",
      form: "description",
      situation: "Tell your Dutch class about your studies or your job.",
      points: [
        pf("Say what you study or what work you do", "Ik studeer … . / Ik werk als … .", "studeer", "werk", "student"),
        pf("Say where", "Ik … aan de universiteit van … .", "universiteit", "school", "kantoor", "bij", "in"),
        pf("Say which days and hours", "Ik heb les van … tot … , van … tot … uur.", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "uur"),
        pf("Say what you do there", "'s Ochtends … ik. 's Middags … ik.", "doe", "leer", "maak"),
        pf("Say what you like about it", "Ik vind mijn studie leuk, want … .", "leuk", "vind", "interessant"),
        pf("Say what's difficult", "… vind ik moeilijk.", "moeilijk"),
      ],
      model:
        "Ik studeer biologie aan de universiteit van Leiden. Ik ben nu in mijn eerste jaar. Ik heb les van maandag tot en met vrijdag, meestal van negen tot vier uur. 's Ochtends heb ik biologie en scheikunde. 's Middags ga ik naar de bibliotheek. Daar lees ik en schrijf ik. Op zaterdag werk ik in een café. Ik vind mijn studie heel leuk, want ik leer elke dag iets nieuws. Scheikunde vind ik moeilijk. En alles is in het Engels, dus ik spreek niet veel Nederlands op de universiteit.",
    },
    {
      id: "w-een-sollicitatie",
      title: "Een bijbaan zoeken",
      titleTranslation: "Looking for a side job",
      form: "email",
      situation: "A café is looking for weekend staff. Write a short email to apply.",
      points: [
        pf("Greet the boss and say who you are", "Beste …, mijn naam is … .", "beste", "ik", "naam"),
        pf("Say which job you want", "Ik zoek een bijbaan. Ik wil graag in uw … werken.", "baan", "bijbaan", "werken"),
        pf("Say what experience you have", "Ik heb ervaring, want … .", "ervaring"),
        pf("Say which languages you speak", "Ik spreek … .", "spreek"),
        pf("Say which days you can work", "Ik kan op … werken.", "kan", "zaterdag", "zondag", "weekend"),
        pf("Give your phone number and close politely", "Mijn telefoonnummer is … . Met vriendelijke groet, …", "telefoonnummer", "nummer", "groet"),
      ],
      model:
        "Beste Kees, mijn naam is Tomás Ruiz. Ik ben student in Leiden en ik zoek een bijbaan. Bram zegt: u zoekt iemand voor het weekend. Ik wil graag in uw café werken. Ik heb ervaring, want in Spanje werk ik elke zomer in een bar. Ik kan heel goed koffie maken. Ik spreek Spaans en Engels, en een beetje Nederlands. Ik kan op zaterdag en op zondag werken. Mijn telefoonnummer is nul zes, dertig, negentig, vierenveertig, twaalf. Met vriendelijke groet, Tomás Ruiz",
    },
    {
      id: "w-mijn-taalles",
      title: "Mijn taalles",
      titleTranslation: "My language class",
      form: "description",
      situation: "Describe your Dutch class for a student who wants to join.",
      points: [
        pf("Say when the class is", "Mijn taalles is op … , van … tot … uur.", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "uur"),
        pf("Say where it is", "De les is in … .", "school", "universiteit", "in", "bij"),
        pf("Say who's in the class", "In de klas zitten … studenten uit … .", "studenten", "klas"),
        pf("Describe the teacher", "De lerares heet … . Ze is … .", "lerares", "leraar"),
        pf("Say what you do in class", "In de les … we.", "leren", "lezen", "spreken", "schrijven"),
        pf("Say how much homework there is", "Na elke les krijgen we … huiswerk.", "huiswerk"),
      ],
      model:
        "Mijn taalles is op maandag en woensdag, van zeven tot negen uur 's avonds. De les is in een school bij het station. In de klas zitten twaalf studenten uit tien verschillende landen. De lerares heet Ingrid. Ze is aardig, maar ook streng: in de les spreken we alleen Nederlands. We lezen korte teksten, we leren nieuwe woorden en we spreken veel met elkaar. Soms schrijven we ook een kort verhaal. Na elke les krijgen we huiswerk, ongeveer een uur. Ik vind de les leuk en ik leer veel.",
    },
  ]),

  "a1-gezondheid": a1([
    {
      id: "w-ziek-melden",
      title: "Ik ben ziek",
      titleTranslation: "I'm ill",
      form: "message",
      situation: "You're ill and can't come to class. Write to your teacher.",
      points: [
        pf("Greet your teacher", "Beste …,", "beste", "hallo", "goedemorgen"),
        pf("Say you're ill and can't come", "Ik ben ziek en ik kan vandaag niet naar de les komen.", "ziek", "kan", "niet"),
        pf("Say what's wrong", "Ik heb … en … .", "pijn", "koorts", "griep", "hoofdpijn", "buikpijn", "keelpijn"),
        pf("Say since when", "Ik voel me sinds … niet goed.", "sinds", "gisteren"),
        pf("Say what the doctor says or what you're doing", "Nu blijf ik in bed en ik drink … .", "huisarts", "dokter", "rusten", "bed", "paracetamol"),
        pf("Ask about the homework and say when you'll be back", "Wat is het huiswerk? Volgende week ben ik weer in de les.", "huiswerk", "volgende", "week"),
      ],
      model:
        "Beste Ingrid, ik ben ziek en ik kan vandaag niet naar de les komen. Ik heb hoofdpijn en buikpijn en ik heb ook koorts. Ik voel me sinds gisteren niet goed. Vanmiddag heb ik een afspraak bij de huisarts. Het is griep, denk ik. Nu blijf ik in bed, ik drink veel thee en ik neem paracetamol. Wat is het huiswerk voor deze week? Kan Fatima het misschien aan mij geven? Volgende week ben ik weer in de les, denk ik. Met vriendelijke groet, Marta",
    },
    {
      id: "w-gezond-leven",
      title: "Gezond leven",
      titleTranslation: "Living healthily",
      form: "description",
      situation: "Write about what you do to stay healthy, and what you'd like to change.",
      points: [
        pf("Say what sport or exercise you do", "Op … … ik.", "sport", "voetbal", "fiets", "wandel"),
        pf("Say how often", "Ik … … keer per week.", "keer", "week", "elke", "dag"),
        pf("Say what healthy food you eat", "Ik eet elke dag … .", "groente", "fruit", "eet"),
        pf("Say how much you sleep", "Ik slaap meestal … uur.", "slaap", "uur"),
        pf("Say what's not so healthy", "Maar ik … te veel … .", "niet", "te", "veel", "friet", "bier"),
        pf("Say what you want to change", "Ik wil minder … en meer … .", "wil", "minder", "meer"),
      ],
      model:
        "Ik fiets elke dag naar de universiteit en terug. Dat is twintig minuten per dag. Op zaterdag speel ik voetbal met vrienden en op zondag ga ik soms wandelen. Ik eet elke dag groente en fruit, en ik kook bijna altijd zelf. Ik slaap meestal zeven uur. Maar ik ga vaak te laat naar bed, want ik kijk 's avonds te lang op mijn telefoon. Ik drink ook veel koffie, soms vijf kopjes per dag. Ik wil minder koffie drinken en op tijd naar bed gaan. Dat wil ik deze maand proberen.",
    },
    {
      id: "w-bij-de-dokter",
      title: "Bij de dokter",
      titleTranslation: "At the doctor's",
      form: "story",
      situation: "Tell a friend about a visit to the doctor or the pharmacy.",
      points: [
        pf("Say why you went", "Ik heb al … dagen … .", "ziek", "pijn", "koorts", "keelpijn"),
        pf("Say how you made the appointment", "Op … bel ik de huisarts.", "bel", "afspraak"),
        pf("Say what the doctor asks or does", "De huisarts kijkt in mijn … .", "vraagt", "kijkt", "luistert"),
        pf("Say what the doctor says it is", "Het is … , zegt ze.", "zegt", "griep", "niets"),
        pf("Say what medicine or advice you get", "Ik moet veel … en … .", "medicijn", "paracetamol", "tabletten", "rusten", "drinken"),
        pf("Say how you feel now", "Nu voel ik me weer … .", "voel", "beter", "goed"),
      ],
      model:
        "Ik heb al drie dagen veel keelpijn en een beetje koorts. Op dinsdag bel ik om acht uur de huisarts. Ik krijg een afspraak om tien over elf. De huisarts is een vriendelijke vrouw. Ze vraagt: ‘Wat zijn uw klachten?’ Dan kijkt ze in mijn mond en luistert ze naar mijn longen. Het is griep, zegt ze. Niets ernstigs. Ik krijg geen medicijn. Ik moet veel rusten, veel thee met honing drinken en paracetamol nemen bij pijn. Nu voel ik me weer goed.",
    },
  ]),

  "a1-vrije-tijd": a1([
    {
      id: "w-mijn-hobby",
      title: "Mijn vrije tijd",
      titleTranslation: "My free time",
      form: "description",
      situation: "Answer the student newspaper's question: what do you do in your free time?",
      points: [
        pf("Say what you like doing", "In mijn vrije tijd … ik graag.", "graag", "vrije", "vind"),
        pf("Say how often and when", "Ik … elke … .", "week", "keer", "zaterdag", "zondag", "avond", "avonds"),
        pf("Say who you do it with", "Ik doe het met … .", "met", "alleen", "samen"),
        pf("Say where", "Ik … in … .", "in", "bij", "thuis"),
        pf("Say why you like it", "Ik vind het leuk, want … .", "leuk", "fijn", "want"),
        pf("Say something you'd like to try", "Ik wil graag een keer … proberen.", "wil", "graag", "proberen"),
      ],
      model:
        "In mijn vrije tijd speel ik graag voetbal. Ik speel elke zaterdag met vrienden van de universiteit. We spelen op een veld bij het park. Ik vind het leuk, want ik ben dan buiten en ik praat Nederlands met mijn vrienden. Ik kijk ook graag films, het liefst oude films. Dat doe ik op zondagavond met mijn huisgenoten, thuis op de bank. In de winter vriest het soms. Dan wil ik graag een keer schaatsen proberen. Dat is typisch Nederlands, zegt mijn huisgenoot.",
    },
    {
      id: "w-het-weer",
      title: "Het weer vandaag",
      titleTranslation: "The weather today",
      form: "message",
      situation: "Write to a friend in another country about the weather here, and your plans.",
      points: [
        pf("Say what the weather is like today", "Hier is het weer vandaag … . Het regent / De zon schijnt.", "weer", "regent", "zon", "wind", "koud", "warm"),
        pf("Say how warm or cold it is", "Het is … graden.", "graden"),
        pf("Say what you wear", "Ik draag … .", "jas", "trui", "draag"),
        pf("Say what the weather will do tomorrow", "Morgen is het … .", "morgen", "wordt", "gaat"),
        pf("Say what you plan to do because of the weather", "Dan ga ik … . / Vandaag blijf ik thuis.", "ga", "blijf", "thuis"),
        pf("Ask about the weather where your friend lives", "Hoe is het weer bij jullie?", "bij", "jou", "jullie", "hoe"),
      ],
      model:
        "Hoi Ania! Hier in Leiden is het weer vandaag typisch Nederlands. Het regent en er is veel wind. Het is maar acht graden. Ik draag een dikke trui en mijn nieuwe winterjas. Op de fiets word ik toch nat. Morgen schijnt de zon en het wordt twaalf graden. Dan ga ik met Noor naar het strand in Katwijk. We gaan niet zwemmen, alleen wandelen. Vandaag blijf ik thuis met een boek en een kopje thee. Hoe is het weer bij jullie in Polen? Groeten, Marta",
    },
    {
      id: "w-een-uitnodiging",
      title: "Een uitnodiging",
      titleTranslation: "An invitation",
      form: "message",
      situation: "Invite your friends to your birthday party.",
      points: [
        pf("Say why you're writing: your birthday", "Volgende week ben ik jarig en ik geef een feestje.", "jarig", "verjaardag", "feest", "feestje"),
        pf("Say the day and time", "Het feest is op … , om … uur.", "uur", "zaterdag", "vrijdag"),
        pf("Say where the party is", "Het is bij … , op … nummer … .", "bij", "thuis", "café", "adres"),
        pf("Say what there is to eat and drink", "Er is … en … .", "eten", "drinken", "taart", "bier"),
        pf("Say what to bring", "Neem … mee.", "neem", "mee"),
        pf("Ask them to let you know if they're coming", "Kom je ook? Laat het even weten!", "laat", "weten", "komen", "kom"),
      ],
      model:
        "Hallo allemaal! Volgende week ben ik jarig en ik geef een feestje. Het feest is op zaterdag, om acht uur 's avonds. Het is bij ons thuis, op de Oude Vest nummer twaalf. Er is taart, kaas met mosterd en natuurlijk bier en wijn. Neem ook een vriend of vriendin mee. Na het eten gaan we dansen in de woonkamer. Cadeaus zijn niet nodig! Muziek is wel welkom: neem je lievelingsmuziek mee. Kom je ook? Laat het even weten! Tot zaterdag! Noor",
    },
  ]),

  "a1-kleren": a1([
    {
      id: "w-wat-draag-ik",
      title: "Wat draag ik?",
      titleTranslation: "What am I wearing?",
      form: "description",
      situation: "Describe what you're wearing today and your favourite clothes.",
      points: [
        pf("Say what you're wearing today", "Vandaag draag ik … .", "draag", "vandaag"),
        pf("Say the colours", "Mijn … is … en mijn … zijn … .", "blauw", "zwart", "wit", "grijs", "rood", "groen", "bruin", "geel"),
        pf("Say what you wear when it's cold or warm", "In de winter draag ik … . In de zomer draag ik … .", "koud", "warm", "winter", "zomer"),
        pf("Describe your favourite piece of clothing", "Mijn lievelings… is … .", "lievelingstrui", "lievelingsjas", "lievelingsbroek", "mooi"),
        pf("Say where you buy clothes", "Ik koop mijn kleren meestal … .", "winkel", "online", "markt"),
        pf("Say what you wear for a party or work", "Voor een feest draag ik … .", "feest", "werk", "net", "nette"),
      ],
      model:
        "Vandaag draag ik een spijkerbroek, een grijze trui en witte sportschoenen. Over mijn trui draag ik mijn nieuwe zwarte winterjas. In de winter draag ik altijd een dikke trui, want het is hier vaak koud en nat. In de zomer draag ik een korte broek. Mijn lievelingstrui is een blauwe trui van mijn oma. Ze maakt hem zelf. Ik koop mijn kleren meestal in de uitverkoop, of soms op de markt. Voor een feest draag ik een nette broek en een wit overhemd.",
    },
    {
      id: "w-terugsturen",
      title: "Iets terugsturen",
      titleTranslation: "Sending something back",
      form: "email",
      situation: "You ordered something online and it's not right. Write to the shop.",
      points: [
        pf("Greet the shop and say what you ordered", "Beste klantenservice, ik heb een probleem met mijn bestelling: … .", "bestel", "besteld", "schoenen", "jas", "trui"),
        pf("Say when it arrived", "Het pakket is er sinds … .", "pakket", "gisteren", "vandaag"),
        pf("Say what's wrong with it", "Maar de … zijn te … .", "te", "klein", "groot", "kapot", "kleur"),
        pf("Say what you want: another size or your money back", "Ik wil graag … in maat … .", "maat", "geld", "terug"),
        pf("Ask how to send it back", "Hoe kan ik … terugsturen?", "terugsturen", "hoe"),
        pf("Give your order number or name and close politely", "Het is bestelling nummer … . Met vriendelijke groet, …", "nummer", "naam", "groet"),
      ],
      model:
        "Beste klantenservice, ik heb een probleem met mijn bestelling: bruine schoenen van uw website, in maat achtendertig. Het pakket is er sinds gisteren. Maar de schoenen zijn te klein: mijn tenen doen pijn. De kleur is wel mooi en de kwaliteit is goed. Ik wil graag dezelfde schoenen in maat negenendertig. Kan dat niet? Dan wil ik graag mijn geld terug. Hoe kan ik de schoenen terugsturen? Is terugsturen gratis? Het is bestelling nummer vierhonderdtwaalf. Met vriendelijke groet, Fatima El Amrani",
    },
    {
      id: "w-in-de-winkel",
      title: "Shoppen",
      titleTranslation: "Shopping",
      form: "story",
      situation: "Tell a friend about your clothes shopping on Saturday.",
      points: [
        pf("Say where you go and with whom", "Zaterdag ga ik met … naar … .", "stad", "winkel", "met"),
        pf("Say what you need", "Ik heb … nodig, want … .", "zoek", "nodig"),
        pf("Say what you try on and how it fits", "Ik pas een … in maat … , maar … .", "pas", "past", "maat", "te"),
        pf("Say how much things cost", "Eerst kost hij … euro, nu … .", "euro", "kost", "duur", "goedkoop"),
        pf("Say what you buy", "Ik neem … .", "koop", "neem"),
        pf("Say if you're happy with it", "Ik ben heel blij met … , want … .", "blij", "mooi", "vind"),
      ],
      model:
        "Zaterdag ga ik met Noor naar de stad. Ik heb een echte winterjas nodig, want mijn jas uit Brazilië is te dun. In de eerste winkel zijn de jassen mooi, maar heel duur: honderdvijftig euro! In de tweede winkel is er uitverkoop. Ik pas een donkerblauwe jas in maat M, maar de mouwen zijn te lang. Dan pas ik een zwarte jas. Die past perfect. Eerst kost hij negentig euro, nu nog maar zestig. Ik neem hem meteen. Ik ben heel blij met mijn nieuwe jas, want hij is warm en mooi.",
    },
  ]),

  "a1-feestdagen": a1([
    {
      id: "w-een-feestdag",
      title: "Een feestdag uit mijn land",
      titleTranslation: "A holiday from my country",
      form: "description",
      situation: "Explain a holiday from your country to Dutch classmates.",
      points: [
        pf("Say which holiday it is and when", "In … vieren we op … de … .", "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"),
        pf("Say what people celebrate", "Dan vieren we … .", "vieren", "viert", "feest"),
        pf("Say what people eat", "Die dag eten we … .", "eten", "eet"),
        pf("Say what people do", "'s Avonds … de kinderen … .", "gaan", "zingen", "dansen", "geven", "kerk", "zetten", "schoen"),
        pf("Compare it with a Dutch holiday", "Het is een beetje zoals … in Nederland, maar … .", "nederland", "koningsdag", "sinterklaas", "net", "anders"),
        pf("Say what you like about it", "Ik vind mijn studie leuk, want … .", "leuk", "gezellig", "mooi", "mis"),
      ],
      model:
        "In Mexico vieren we op zes januari Driekoningen. Dan komen de drie koningen, net als in het verhaal van Jezus. 's Avonds zetten de kinderen hun schoen bij de deur, net als bij Sinterklaas. In de nacht komen de drie koningen. Lieve kinderen krijgen snoep en cadeautjes. 's Ochtends kijken de kinderen meteen in hun schoen. Die dag eten we veel snoep. Het is een beetje zoals Sinterklaas in Nederland, maar zonder paard en zonder gedichten. Ik vind het een leuk feest. Dit jaar mis ik het, want ik ben in Leiden.",
    },
    {
      id: "w-sinterklaasgedicht",
      title: "Een gedicht voor Sinterklaas",
      titleTranslation: "A Sinterklaas poem",
      form: "story",
      situation: "You drew a classmate's name. Write a short, friendly Sinterklaas poem for them.",
      points: [
        pf("Start with the person's name", "Voor …, uit de taalles:", "voor"),
        pf("Say something they like", "… houdt van … .", "houdt", "graag", "van"),
        pf("Say something funny about them", "Maar 's ochtends … altijd … .", "altijd", "nooit", "soms"),
        pf("Say what the present is (without giving it away)", "In dit pakje zit iets voor … .", "cadeau", "pakje"),
        p("Make at least two lines rhyme"),
        pf("End with a greeting from Sinterklaas", "Veel groeten van Sinterklaas en zijn paard.", "sinterklaas", "groet", "groeten"),
      ],
      model:
        "Voor Fatima, uit de taalles:\nze zingt elke week in een koor,\nen dan luistert de hele kerk, hoor!\nMaar 's ochtends komt ze vaak te laat:\nhaar trein uit Den Haag heeft vertraging, en zij wacht op straat.\nZe fietst door de regen en door de wind,\nen ze lacht altijd, net als een kind.\nIn dit pakje zit iets voor in de trein,\nwant wachten op de trein is niet fijn.\nHaar Nederlands wordt elke week beter,\ndaarom krijgt ze ook een chocoladeletter!\nVeel groeten van Sinterklaas en zijn paard.",
    },
    {
      id: "w-goede-voornemens",
      title: "Mijn goede voornemens",
      titleTranslation: "My New Year's resolutions",
      form: "diary",
      situation: "Write your resolutions for the new year.",
      points: [
        pf("Say how you celebrate New Year's Eve", "Oudejaarsavond vier ik met … .", "oudejaarsavond", "oud", "nieuw"),
        pf("Give your first resolution", "Mijn eerste voornemen: ik ga … .", "ga", "wil", "voornemen"),
        pf("Say why", "Dat wil ik, want … .", "want"),
        pf("Give a second resolution", "Mijn tweede voornemen: ik wil meer … .", "ook", "meer", "minder"),
        pf("Say how you'll do it", "Ik ga … keer per week … .", "elke", "dag", "week", "keer"),
        pf("Say what you're looking forward to this year", "Ik heb veel zin in … .", "zin", "graag", "jaar"),
      ],
      model:
        "Oudejaarsavond vier ik met Noor en Bram. Bram bakt oliebollen en om twaalf uur kijken we naar het vuurwerk. Dit jaar heb ik twee goede voornemens. Mijn eerste voornemen: ik ga elke dag een half uur Nederlands leren. Dat wil ik, want ik wil na mijn studie in Nederland blijven. Ik lees elke dag een tekst en ik leer tien nieuwe woorden. Mijn tweede voornemen: ik wil meer sporten. Ik ga twee keer per week zwemmen. Ik heb veel zin in dit jaar en in de zomer: dan komt mijn familie naar Leiden!",
    },
  ]),
};
