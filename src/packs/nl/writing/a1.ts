import type { WritingPoint, WritingTask } from "@/core/writing";

/**
 * A1 writing topics, three per unit. Each has six points: a short text
 * covers the first two, a medium one four, a long one all six. The model
 * answer is the long version. Cues are words that show a point is covered.
 */

const p = (prompt: string, ...cues: string[]): WritingPoint => ({ prompt, cues });

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
        p("Say hello and give your first name and surname", "naam", "heet", "achternaam"),
        p("Say how you spell your surname", "spel", "spelt", "letter", "letters"),
        p("Give your age", "jaar"),
        p("Give your phone number", "telefoonnummer", "nummer"),
        p("Say which day of the week is good for you", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"),
        p("Thank the teacher and say goodbye", "dank", "groeten", "ziens"),
      ],
      model:
        "Goedemiddag! Mijn naam is Luca Bianchi. Mijn voornaam is Luca en mijn achternaam is Bianchi. Ik spel mijn achternaam zo: B, I, A, N, C, H, I. Mijn achternaam heeft zeven letters. Ik ben drieëntwintig jaar en ik ben student in Leiden. Ik woon op de Oude Vest nummer twaalf. Ik spreek Italiaans en Engels. Mijn telefoonnummer is nul zes, achtendertig, vijftien, zevenenveertig. Dinsdag en donderdag zijn goed voor mij. Op maandag en woensdag heb ik les aan de universiteit. Dank u wel en tot ziens!",
    },
    {
      id: "w-mijn-jaar",
      title: "Mijn jaar",
      titleTranslation: "My year",
      form: "description",
      situation: "Write about the months and seasons you like, for a class wall poster.",
      points: [
        p("Say which season you like best and why", "lente", "zomer", "herfst", "winter"),
        p("Say in which month your birthday is", "jarig", "verjaardag"),
        p("Say what the weather is like in that season", "warm", "koud", "regent", "zon", "weer"),
        p("Name a month you don't like and why", "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"),
        p("Say what you do in the summer", "zomer"),
        p("Say which colours you see in autumn or spring", "geel", "rood", "groen", "oranje", "bruin", "roze", "paars", "blauw"),
      ],
      model:
        "Ik vind de lente het mooiste seizoen. Dan worden de dagen langer en zijn er overal bloemen. Ik ben jarig op twaalf mei, dus in de lente. In de lente is het niet te warm en niet te koud. Soms regent het, maar vaak schijnt de zon. Ik vind november niet leuk. Dan is het grijs, nat en vroeg donker. In de zomer ga ik naar Italië en zwem ik in de zee. In de herfst zie ik gele, rode en bruine bladeren. Dat vind ik ook mooi.",
    },
    {
      id: "w-hallo-zeggen",
      title: "Hallo en dank je wel",
      titleTranslation: "Hello and thank you",
      form: "message",
      situation: "A new neighbour helped you carry a box upstairs. Write them a short note.",
      points: [
        p("Greet your neighbour", "hallo", "goedemiddag", "goedemorgen", "goedenavond", "beste"),
        p("Say thank you for the help", "dank", "bedankt"),
        p("Say who you are and where you live in the building", "ik", "woon", "verdieping", "nummer"),
        p("Say sorry for the noise", "sorry"),
        p("Invite them for a coffee or tea", "koffie", "thee"),
        p("Say goodbye", "groeten", "ziens", "doei"),
      ],
      model:
        "Goedemiddag! Dank u wel voor uw hulp met de doos vandaag. Ik ben Luca en ik woon hier nu een week. Mijn huisgenoten heten Noor en Bram. Ik woon op de tweede verdieping, op nummer twaalf. De trap is heel steil, dus uw hulp was heel fijn. Sorry voor het lawaai van gisteren. Ik bouw een kast en dat is niet makkelijk! Wilt u een keer koffie of thee bij mij drinken? Zaterdag ben ik thuis. Tot ziens en nogmaals bedankt. Groeten van Luca.",
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
        p("Say your name and where you're from", "naam", "heet", "kom", "uit"),
        p("Say how old you are", "jaar"),
        p("Say where you live now", "woon"),
        p("Say what you do: study or work", "student", "studeer", "werk"),
        p("Say which languages you speak", "spreek", "nederlands", "engels"),
        p("Say why you're learning Dutch", "leer", "want", "omdat"),
      ],
      model:
        "Hallo! Mijn naam is Luca en ik kom uit Italië. Ik kom uit een klein dorp bij Turijn. Ik ben drieëntwintig jaar. Ik woon nu twee maanden in Nederland. Ik woon in Leiden, in een oud huis in het centrum. Ik woon daar met twee huisgenoten. Ik ben student en ik studeer biologie aan de universiteit. Ik spreek Italiaans en Engels, en nu ook een beetje Nederlands. Ik leer Nederlands, want ik wil hier wonen en werken. Ik vind de taal moeilijk, maar ook leuk.",
    },
    {
      id: "w-antwoord-sanne",
      title: "Een bericht aan Sanne",
      titleTranslation: "A message to Sanne",
      form: "message",
      situation: "Reply to Sanne's language-buddy profile (from the text Een taalmaatje).",
      points: [
        p("Greet Sanne and say who you are", "hoi", "hallo", "ik"),
        p("Say where you're from and what you do", "kom", "uit", "student", "werk"),
        p("Say which language you can help her with", "italiaans", "spaans", "engels", "help", "helpen"),
        p("Say what you like doing (a hobby)", "graag", "hobby", "hobby's"),
        p("Suggest a day and time to meet", "dag", "uur", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"),
        p("Suggest a place and say goodbye", "café", "bibliotheek", "groeten", "doei"),
      ],
      model:
        "Hoi Sanne, ik ben Luca. Ik kom uit Italië en ik ben student in Leiden. Ik studeer biologie. Ik lees je profiel en ik wil graag je taalmaatje zijn! Ik kan je helpen met Italiaans, want dat is mijn taal. Ik leer nu Nederlands, maar ik spreek nog niet zo goed. Ik kook graag, net als jij, en ik fiets ook graag. Kun je op donderdag om vier uur? Dan kunnen we koffie drinken in een café bij het station. Groeten, Luca",
    },
    {
      id: "w-mijn-huisgenoten",
      title: "Mijn huisgenoten",
      titleTranslation: "My housemates",
      form: "description",
      situation: "Describe the people you live with (or friends, if you live alone).",
      points: [
        p("Say who you live with", "woon", "met"),
        p("Give their names and where they're from", "heet", "uit"),
        p("Say what they study or what work they do", "studeert", "werkt"),
        p("Say how old they are", "jaar"),
        p("Say what they're like", "aardig", "leuk", "grappig", "lief", "rustig"),
        p("Say what you do together", "samen"),
      ],
      model:
        "Ik woon in een huis met twee huisgenoten. Ze heten Noor en Bram. Noor komt uit Groningen en Bram komt uit Leiden. Noor studeert geneeskunde en ze werkt ook in het ziekenhuis. Bram werkt in een café in de Breestraat. Noor is eenentwintig jaar en Bram is vierentwintig. Noor is heel aardig en ze helpt me met mijn Nederlands. Bram is grappig, maar soms een beetje lui. Op woensdag koken we samen en op vrijdag gaan we samen naar het café.",
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
        p("Say how big your family is", "familie"),
        p("Say who is in it: parents, brothers, sisters", "vader", "moeder", "broer", "zus", "ouders"),
        p("Give their names and ages", "heet", "jaar"),
        p("Say where they live", "wonen", "woont"),
        p("Say what they do", "werkt", "studeert", "school"),
        p("Say how often you see or call them", "bel", "zie", "elke", "week", "maand"),
      ],
      model:
        "Mijn familie is niet groot. Ik heb een vader, een moeder, een broer en een zus. Mijn vader heet Marco en hij is zesenvijftig jaar. Mijn moeder heet Anna. Mijn zus Giulia is negentien en mijn broer Paolo is dertig. Mijn ouders en mijn zus wonen in een dorp in Italië. Paolo woont in Turijn met zijn vrouw en twee kinderen. Mijn vader is leraar en mijn moeder werkt in een winkel. Ik bel elke zondag met mijn moeder en ik ga twee keer per jaar naar huis.",
    },
    {
      id: "w-mail-aan-giulia",
      title: "Een mail aan Giulia",
      titleTranslation: "An email to Giulia",
      form: "email",
      situation: "Answer Giulia's email (from the text Een mail van Giulia).",
      points: [
        p("Greet Giulia and say how you are", "hoi", "lieve", "gaat"),
        p("React to her news about her boyfriend", "matteo", "vriend"),
        p("Say something about your room", "kamer"),
        p("Say something about your housemates", "noor", "bram", "huisgenoten"),
        p("Ask about Leo and Sofia", "leo", "sofia"),
        p("Say when you're coming home and say goodbye", "december", "kom", "liefs", "groeten"),
      ],
      model:
        "Lieve Giulia, dank je voor je mail! Met mij gaat het goed. Ik ben een beetje moe, maar Leiden is heel leuk. Wat leuk, een vriend! Is Matteo aardig? Speelt hij goed gitaar? Mijn kamer is klein, maar ik heb een groot raam en een mooi uitzicht op de tuin. Ik stuur je een foto. Mijn huisgenoten heten Noor en Bram. Ze zijn heel aardig en we koken vaak samen. Hoe gaat het met Leo en Sofia? Slaapt Sofia al beter? In december kom ik naar huis. Veel liefs, Luca",
    },
    {
      id: "w-een-familiefeest",
      title: "Een familiefeest",
      titleTranslation: "A family party",
      form: "story",
      situation: "Describe a family celebration you like: a birthday, a holiday, a Sunday lunch.",
      points: [
        p("Say what the party is and when it is", "feest", "verjaardag", "zondag", "kerst"),
        p("Say where the family meets", "bij", "huis", "thuis"),
        p("Say who comes", "opa", "oma", "tante", "oom", "familie", "ouders"),
        p("Say what you eat and drink", "eten", "eet", "drinken", "drinkt", "taart"),
        p("Say what you do after the meal", "daarna", "spelen", "praten", "lopen"),
        p("Say why you like it", "leuk", "gezellig", "mooi", "fijn"),
      ],
      model:
        "Elke zondag is er een klein feest bij mijn oma thuis. Dan komt de hele familie naar haar huis in het dorp. Mijn ouders komen, mijn zus Giulia, mijn broer Paolo met zijn kinderen en soms ook mijn tante. Mijn oma kookt pasta en we eten aan een lange tafel in de tuin. We drinken water en een glas rode wijn. Daarna spelen de kinderen buiten en praten de anderen aan tafel. Opa slaapt op de bank. Ik vind het heel gezellig. Dat mis ik nu in Nederland.",
    },
  ]),

  "a1-eten": a1([
    {
      id: "w-boodschappenlijst",
      title: "Boodschappen voor het weekend",
      titleTranslation: "Shopping for the weekend",
      form: "message",
      situation: "Write a message to your housemates: you're going shopping for a dinner together.",
      points: [
        p("Say you're going to the supermarket or market", "supermarkt", "markt", "ga"),
        p("Say what you want to cook", "kook", "koken", "maak", "maken"),
        p("List what you need", "nodig", "kilo", "stuk"),
        p("Ask if they need anything", "nodig", "willen", "wil"),
        p("Say how much it costs and how to share it", "euro", "kost", "betalen"),
        p("Say when dinner is ready", "uur", "klaar", "eten"),
      ],
      model:
        "Hoi Noor en Bram! Ik ga om twee uur naar de markt. Vanavond wil ik pasta met tomatensaus koken, net als mijn oma. Ik heb een kilo tomaten, twee uien, olie en een stuk oude kaas nodig. Brood en wijn hebben we nog. Ik neem ook een fles water mee. Hebben jullie ook iets nodig? Stuur me een berichtje! Het kost ongeveer vijftien euro. Kunnen we samen betalen? Dan betaalt iedereen vijf euro. Om half zeven is het eten klaar. Tot straks! Luca",
    },
    {
      id: "w-mijn-ontbijt",
      title: "Wat eet jij?",
      titleTranslation: "What do you eat?",
      form: "description",
      situation: "Compare what you eat in a normal day with what Dutch people eat.",
      points: [
        p("Say what you eat for breakfast", "ontbijt"),
        p("Say what you drink in the morning", "koffie", "thee", "melk", "drink"),
        p("Say what you eat for lunch", "lunch", "boterham", "broodje"),
        p("Say what you eat in the evening and at what time", "avond", "avonds", "uur"),
        p("Say what's different in the Netherlands", "nederland", "nederlanders", "anders"),
        p("Say what Dutch food you like or don't like", "lekker", "vind", "hagelslag", "kaas", "kibbeling"),
      ],
      model:
        "In Italië eet ik als ontbijt een croissant en drink ik een kleine koffie. Hier in Leiden eet ik brood met kaas. Ik drink 's ochtends koffie met melk, zonder suiker. Als lunch eet ik twee boterhammen in de kantine. 's Avonds kook ik om acht uur, vaak pasta of rijst met groente. In Nederland is alles anders. Nederlanders eten al om zes uur warm, en hun lunch is heel klein. Ik vind kibbeling op de markt heel lekker. Hagelslag op brood vind ik raar, maar mijn huisgenoten eten het elke dag.",
    },
    {
      id: "w-in-het-restaurant",
      title: "Een avond uit eten",
      titleTranslation: "An evening eating out",
      form: "story",
      situation: "Tell a friend about a meal in a café or restaurant.",
      points: [
        p("Say where you went and with whom", "café", "restaurant", "met"),
        p("Say what you ordered to drink", "drinken", "drink", "bier", "wijn", "water", "thee"),
        p("Say what you ate", "eet", "eten", "pasta", "vis", "soep"),
        p("Say if it was tasty", "lekker", "heerlijk"),
        p("Say how much it cost", "euro", "kost", "betaal"),
        p("Say if you want to go back", "terug", "weer", "volgende"),
      ],
      model:
        "Vrijdag ga ik met Fatima naar een klein restaurant bij de gracht. Het is gezellig en niet heel druk. Fatima drinkt thee met munt en ik neem een glas rode wijn. Als eten neem ik vis met aardappels en groente. Fatima eet soep en een broodje met kaas. Het eten is heel lekker, vooral de vis. Na het eten delen we een stuk appeltaart met slagroom. Samen betalen we vierendertig euro. Dat is niet duur. Ik wil volgende maand terug, want ik wil de pasta proberen.",
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
        p("Say when you get up", "sta", "op", "uur"),
        p("Say what you do in the morning", "ochtends", "ontbijt", "douche"),
        p("Say how you get to school or work", "fiets", "bus", "trein", "loop"),
        p("Say what you do in the afternoon", "middags", "middag"),
        p("Say what you do in the evening", "avonds", "avond"),
        p("Say when you go to bed", "bed", "slaap"),
      ],
      model:
        "Ik sta elke dag om half acht op. Eerst ga ik douchen en daarna eet ik ontbijt: brood met kaas en een kopje koffie. Om half negen fiets ik naar de universiteit. Het is tien minuten fietsen. Als het hard regent, neem ik de bus. 's Ochtends heb ik les. 's Middags ga ik naar de bibliotheek, want daar is het rustig. Om vijf uur doe ik boodschappen. 's Avonds kook ik en dan kijk ik een film of lees ik een boek. Om elf uur ga ik naar bed.",
    },
    {
      id: "w-een-afspraak-maken",
      title: "Een afspraak maken",
      titleTranslation: "Making an appointment",
      form: "message",
      situation: "Write to a classmate to practise Dutch together this week.",
      points: [
        p("Ask if they want to practise together", "oefenen", "samen"),
        p("Say which days you can't and why", "kan", "niet", "moet"),
        p("Suggest a day", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"),
        p("Suggest a time", "uur", "half", "kwart"),
        p("Suggest a place", "bibliotheek", "café", "station"),
        p("Ask them to answer and say goodbye", "laat", "weten", "groeten", "tot"),
      ],
      model:
        "Hoi Fatima! Zullen we deze week samen Nederlands oefenen? Op maandag en woensdag kan ik niet, want dan heb ik les tot vijf uur. Donderdag kan ik ook niet, dan heb ik voetbal. Dinsdag is goed voor mij. Kun jij om kwart over vier? Dan heb jij geen werk meer, toch? We kunnen in de grote bibliotheek bij het station zitten. Daar is het rustig en er is koffie. Ik neem mijn boek mee. Laat je het even weten? Tot dinsdag, groeten van Luca",
    },
    {
      id: "w-mijn-weekend",
      title: "Mijn weekend",
      titleTranslation: "My weekend",
      form: "diary",
      situation: "Write a diary entry about your plans for next weekend.",
      points: [
        p("Say what you do on Saturday morning", "zaterdag", "ochtends"),
        p("Say what you do on Saturday afternoon or evening", "middags", "avonds"),
        p("Say what you do on Sunday", "zondag"),
        p("Say who you see", "met", "vrienden", "familie"),
        p("Say at what time things happen", "uur", "half", "kwart"),
        p("Say what you're looking forward to most", "leuk", "zin", "graag"),
      ],
      model:
        "Zaterdag ga ik om tien uur naar het café, want ik werk daar tot vier uur. Het is altijd heel druk. 's Avonds ga ik met Noor en Bram naar een feestje bij een vriend van Bram. Het begint om negen uur. Zondag sta ik laat op. Ik ontbijt rustig en ik bel om twaalf uur met mijn moeder. 's Middags ga ik met Fatima wandelen in het park. 's Avonds kook ik en lees ik een boek. Ik heb het meeste zin in het feestje, want ik ken daar nog niemand.",
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
        p("Say where you live and in what kind of house", "woon", "huis", "appartement"),
        p("Say how big your room is", "groot", "klein", "meter"),
        p("Say what's in your room", "bed", "bureau", "kast", "stoel", "lamp"),
        p("Say where things are: on, under, next to", "op", "onder", "naast", "achter", "tussen"),
        p("Say what you see from your window", "raam", "zie"),
        p("Say what you like or don't like about it", "vind", "fijn", "leuk", "mooi"),
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
        p("Say from where they start", "station"),
        p("Give the first direction", "rechtdoor", "links", "rechts"),
        p("Mention a bridge, square or shop on the way", "brug", "plein", "winkel", "kerk"),
        p("Give the next directions", "dan", "daarna"),
        p("Say how far it is", "minuten", "ver", "dichtbij"),
        p("Give your address and house number", "adres", "nummer"),
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
        p("Greet the landlord politely and say who you are", "geachte", "beste", "goedemiddag", "ik"),
        p("Say what is broken", "kapot"),
        p("Say since when", "sinds", "dagen", "week"),
        p("Say why it's a problem", "kan", "niet", "probleem"),
        p("Ask when someone can come", "wanneer", "kan", "komen"),
        p("Say when you're home and close politely", "thuis", "groet", "groeten"),
      ],
      model:
        "Beste meneer De Groot, ik ben Luca Bianchi en ik woon op de Oude Vest nummer twaalf. Ik schrijf u over de douche in de badkamer. De douche is kapot. Er komt geen warm water meer. Het probleem is er al sinds zondag. Dat is lastig, want we zijn met drie studenten en we hebben maar één badkamer. Kan er deze week iemand komen? Ik ben thuis op dinsdag en donderdag, de hele dag. U kunt mij ook bellen. Met vriendelijke groet, Luca Bianchi",
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
        p("Say what you study or what work you do", "studeer", "werk", "student"),
        p("Say where", "universiteit", "school", "kantoor", "bij", "in"),
        p("Say which days and hours", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "uur"),
        p("Say what you do there", "doe", "leer", "maak"),
        p("Say what you like about it", "leuk", "vind", "interessant"),
        p("Say what's difficult", "moeilijk"),
      ],
      model:
        "Ik studeer biologie aan de universiteit van Leiden. Ik ben nu in mijn eerste jaar. Ik heb les van maandag tot en met vrijdag, meestal van negen tot vier uur. In de les leer ik over planten, dieren en het menselijk lichaam. Twee dagen per week werk ik in het laboratorium. Daar doe ik kleine experimenten met een groep. Ik vind mijn studie heel leuk, want ik ben graag buiten in de natuur. Scheikunde vind ik moeilijk. En alles is in het Engels, dus ik spreek weinig Nederlands op de universiteit.",
    },
    {
      id: "w-een-sollicitatie",
      title: "Een bijbaan zoeken",
      titleTranslation: "Looking for a side job",
      form: "email",
      situation: "A café is looking for weekend staff. Write a short email to apply.",
      points: [
        p("Greet the boss and say who you are", "beste", "ik", "naam"),
        p("Say which job you want", "baan", "bijbaan", "werken"),
        p("Say what experience you have", "ervaring"),
        p("Say which languages you speak", "spreek"),
        p("Say which days you can work", "kan", "zaterdag", "zondag", "weekend"),
        p("Give your phone number and close politely", "telefoonnummer", "nummer", "groet"),
      ],
      model:
        "Beste Kees, mijn naam is Luca Bianchi. Ik ben student in Leiden en ik zoek een bijbaan. Op internet lees ik dat u iemand zoekt voor het weekend. Ik wil graag in uw café werken. Ik heb ervaring, want in Italië werk ik elke zomer in een bar. Ik kan heel goed koffie maken. Ik spreek Italiaans en Engels, en een beetje Nederlands. Ik kan op zaterdag en op zondag werken. Mijn telefoonnummer is nul zes, achtendertig, vijftien, zevenenveertig. Met vriendelijke groet, Luca Bianchi",
    },
    {
      id: "w-mijn-taalles",
      title: "Mijn taalles",
      titleTranslation: "My language class",
      form: "description",
      situation: "Describe your Dutch class for a student who wants to join.",
      points: [
        p("Say when the class is", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "uur"),
        p("Say where it is", "school", "universiteit", "in", "bij"),
        p("Say who's in the class", "studenten", "klas"),
        p("Describe the teacher", "lerares", "leraar"),
        p("Say what you do in class", "leren", "lezen", "spreken", "schrijven"),
        p("Say how much homework there is", "huiswerk"),
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
        p("Greet your teacher", "beste", "hallo", "goedemorgen"),
        p("Say you're ill and can't come", "ziek", "kan", "niet"),
        p("Say what's wrong", "pijn", "koorts", "griep", "hoofdpijn", "buikpijn", "keelpijn"),
        p("Say since when", "sinds", "gisteren"),
        p("Say what the doctor says or what you're doing", "huisarts", "dokter", "rusten", "bed", "paracetamol"),
        p("Ask about the homework and say when you'll be back", "huiswerk", "volgende", "week"),
      ],
      model:
        "Beste Ingrid, ik ben ziek en ik kan vandaag niet naar de les komen. Ik heb hoofdpijn en buikpijn en ik heb ook koorts. Ik voel me sinds gisteren niet goed. Vanmiddag heb ik een afspraak bij de huisarts. Ik denk dat het griep is. Nu blijf ik in bed, ik drink veel thee en ik neem paracetamol. Wat is het huiswerk voor deze week? Kan Fatima het misschien aan mij geven? Volgende week ben ik weer in de les, denk ik. Met vriendelijke groet, Luca",
    },
    {
      id: "w-gezond-leven",
      title: "Gezond leven",
      titleTranslation: "Living healthily",
      form: "description",
      situation: "Write about what you do to stay healthy, and what you'd like to change.",
      points: [
        p("Say what sport or exercise you do", "sport", "voetbal", "fiets", "wandel", "zwem"),
        p("Say how often", "keer", "week", "elke", "dag"),
        p("Say what healthy food you eat", "groente", "fruit", "eet"),
        p("Say how much you sleep", "slaap", "uur"),
        p("Say what's not so healthy", "niet", "te", "veel", "friet", "bier"),
        p("Say what you want to change", "wil", "minder", "meer"),
      ],
      model:
        "Ik fiets elke dag naar de universiteit en terug. Dat is twintig minuten per dag. Op zaterdag speel ik voetbal met vrienden en op zondag ga ik soms zwemmen. Ik eet elke dag groente en fruit, en ik kook bijna altijd zelf. Ik slaap meestal zeven uur. Maar ik ga vaak te laat naar bed, want ik kijk 's avonds te lang op mijn telefoon. Ik drink ook veel koffie, soms vijf kopjes per dag. Ik wil minder koffie drinken en eerder slapen. Dat is mijn plan voor deze maand.",
    },
    {
      id: "w-bij-de-dokter",
      title: "Bij de dokter",
      titleTranslation: "At the doctor's",
      form: "story",
      situation: "Tell a friend about a visit to the doctor or the pharmacy.",
      points: [
        p("Say why you went", "ziek", "pijn", "koorts", "keelpijn"),
        p("Say how you made the appointment", "bel", "afspraak"),
        p("Say what the doctor asks or does", "vraagt", "kijkt", "luistert"),
        p("Say what the doctor says it is", "zegt", "griep", "verkoudheid", "niets"),
        p("Say what medicine or advice you get", "medicijn", "paracetamol", "tabletten", "rusten", "drinken"),
        p("Say how you feel now", "voel", "beter", "goed"),
      ],
      model:
        "Ik heb al drie dagen veel keelpijn en een beetje koorts. Op dinsdag bel ik om acht uur de huisarts. Ik krijg een afspraak om tien over elf. De huisarts is een vriendelijke vrouw. Ze vraagt wat mijn klachten zijn. Dan kijkt ze in mijn mond en luistert ze naar mijn longen. Het is griep, zegt ze. Niets ernstigs. Ik krijg geen medicijn, alleen het advies: veel rusten, veel thee met honing drinken en paracetamol nemen als ik pijn heb. Nu voel ik me weer beter.",
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
        p("Say what you like doing", "graag", "hobby", "vind"),
        p("Say how often and when", "week", "keer", "zaterdag", "zondag", "avond", "avonds"),
        p("Say who you do it with", "met", "alleen", "samen"),
        p("Say where", "in", "bij", "park", "thuis"),
        p("Say why you like it", "leuk", "fijn", "want"),
        p("Say something you'd like to try", "wil", "graag", "proberen"),
      ],
      model:
        "In mijn vrije tijd speel ik graag voetbal. Ik speel elke zaterdag met een team van de universiteit. We spelen op een veld bij het park. Ik vind het leuk, want ik ben dan buiten en ik praat Nederlands met mijn teamgenoten. Ik kijk ook graag films, het liefst Italiaanse films. Dat doe ik op zondagavond met Noor en Bram, thuis op de bank. Ik wil graag een keer schaatsen proberen, als het in de winter vriest. Dat is typisch Nederlands, zegt Bram.",
    },
    {
      id: "w-het-weer",
      title: "Het weer vandaag",
      titleTranslation: "The weather today",
      form: "message",
      situation: "Write to a friend in another country about the weather here, and your plans.",
      points: [
        p("Say what the weather is like today", "weer", "regent", "zon", "wind", "koud", "warm"),
        p("Say how warm or cold it is", "graden"),
        p("Say what you wear", "jas", "trui", "draag"),
        p("Say what the weather will do tomorrow", "morgen", "wordt", "gaat"),
        p("Say what you plan to do because of the weather", "ga", "blijf", "thuis"),
        p("Ask about the weather where your friend lives", "bij", "jou", "jullie", "hoe"),
      ],
      model:
        "Hoi Giulia! Hier in Leiden is het weer vandaag typisch Nederlands. Het regent en er is veel wind. Het is maar acht graden. Ik draag een dikke trui en mijn nieuwe winterjas. Op de fiets word ik toch nat. Morgen wordt het beter: de zon schijnt en het wordt twaalf graden. Dan ga ik met Noor naar het strand in Katwijk. We gaan niet zwemmen, alleen wandelen. Vandaag blijf ik thuis met een boek en een kopje thee. Hoe is het weer bij jullie in Italië? Groeten, Luca",
    },
    {
      id: "w-een-uitnodiging",
      title: "Een uitnodiging",
      titleTranslation: "An invitation",
      form: "message",
      situation: "Invite your friends to your birthday party.",
      points: [
        p("Say why you're writing: your birthday", "jarig", "verjaardag", "feest", "feestje"),
        p("Say the day and time", "uur", "zaterdag", "vrijdag"),
        p("Say where the party is", "bij", "thuis", "café", "adres"),
        p("Say what there is to eat and drink", "eten", "drinken", "taart", "bier"),
        p("Say what to bring", "neem", "mee"),
        p("Ask them to let you know if they're coming", "laat", "weten", "komen", "kom"),
      ],
      model:
        "Hallo allemaal! Volgende week ben ik jarig en ik geef een feestje. Het feest is op zaterdag, om acht uur 's avonds. Het is bij ons thuis, op de Oude Vest nummer twaalf. Er is taart, pizza en natuurlijk bier en wijn. Bram maakt zijn beroemde kaas met mosterd. Neem gerust een vriend of vriendin mee. Cadeaus zijn niet nodig! Muziek is wel welkom: neem je favoriete muziek mee. Laat je even weten of je komt? Dan weet ik hoeveel pizza ik moet kopen. Tot zaterdag! Luca",
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
        p("Say what you're wearing today", "draag", "vandaag"),
        p("Say the colours", "blauw", "zwart", "wit", "grijs", "rood", "groen", "bruin", "geel"),
        p("Say what you wear when it's cold or warm", "koud", "warm", "winter", "zomer"),
        p("Describe your favourite piece of clothing", "favoriete", "liefst", "mooiste"),
        p("Say where you buy clothes", "winkel", "online", "markt"),
        p("Say what you wear for a party or work", "feest", "werk", "net", "nette"),
      ],
      model:
        "Vandaag draag ik een spijkerbroek, een grijze trui en witte sportschoenen. Over mijn trui draag ik mijn nieuwe zwarte winterjas. In de winter draag ik altijd een dikke trui, want het is hier vaak koud en nat. In de zomer draag ik een korte broek en een T-shirt. Mijn favoriete kledingstuk is een blauwe trui van mijn oma. Ze maakt hem zelf. Ik koop mijn kleren meestal in de uitverkoop, of soms op de markt. Voor een feest draag ik een nette broek en een wit overhemd.",
    },
    {
      id: "w-terugsturen",
      title: "Iets terugsturen",
      titleTranslation: "Sending something back",
      form: "email",
      situation: "You ordered something online and it's not right. Write to the shop.",
      points: [
        p("Greet the shop and say what you ordered", "bestel", "besteld", "schoenen", "jas", "trui"),
        p("Say when it arrived", "pakket", "gisteren", "vandaag"),
        p("Say what's wrong with it", "te", "klein", "groot", "kapot", "kleur"),
        p("Say what you want: another size or your money back", "maat", "geld", "terug"),
        p("Ask how to send it back", "terugsturen", "hoe"),
        p("Give your order number or name and close politely", "nummer", "naam", "groet"),
      ],
      model:
        "Beste klantenservice, ik heb een probleem met mijn bestelling: bruine schoenen van uw website, in maat achtendertig. Het pakket is er sinds gisteren. Maar de schoenen zijn te klein: mijn tenen doen pijn. De kleur is wel mooi en de kwaliteit is goed. Ik wil graag dezelfde schoenen in maat negenendertig. Als dat niet kan, wil ik graag mijn geld terug. Hoe kan ik de schoenen terugsturen? Is terugsturen gratis? Mijn bestelnummer is vierhonderdtwaalf. Met vriendelijke groet, Fatima El Amrani",
    },
    {
      id: "w-in-de-winkel",
      title: "Shoppen",
      titleTranslation: "Shopping",
      form: "story",
      situation: "Tell about a day of clothes shopping.",
      points: [
        p("Say where you went and with whom", "stad", "winkel", "met"),
        p("Say what you were looking for", "zoek", "nodig"),
        p("Say what you tried on and how it fit", "pas", "past", "maat", "te"),
        p("Say how much things cost", "euro", "kost", "duur", "goedkoop"),
        p("Say what you bought", "koop", "neem"),
        p("Say if you're happy with it", "blij", "mooi", "vind"),
      ],
      model:
        "Zaterdag ga ik met Noor naar de stad. Ik heb een echte winterjas nodig, want mijn jas uit Italië is te dun. In de eerste winkel zijn de jassen mooi, maar heel duur: honderdvijftig euro! In de tweede winkel is er uitverkoop. Ik pas een donkerblauwe jas in maat M, maar de mouwen zijn te lang. Dan pas ik een zwarte jas. Die past perfect. Eerst kost hij negentig euro, nu nog maar zestig. Ik neem hem meteen. Ik ben heel blij met mijn nieuwe jas, want hij is warm en mooi.",
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
        p("Say which holiday it is and when", "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"),
        p("Say what people celebrate", "vieren", "viert", "feest"),
        p("Say what people eat", "eten", "eet"),
        p("Say what people do", "gaan", "zingen", "dansen", "geven", "kerk", "brengt", "hangen"),
        p("Compare it with a Dutch holiday", "nederland", "koningsdag", "sinterklaas", "net", "anders"),
        p("Say what you like about it", "leuk", "gezellig", "mooi", "mis"),
      ],
      model:
        "In Italië vieren we op zes januari de Befana. De Befana is een oude vrouw op een bezem. Die dag eten we veel snoep. In de nacht brengt ze snoep voor kinderen die lief zijn, en kolen voor kinderen die niet lief zijn. De kinderen hangen een sok op bij de deur. 's Ochtends zit er snoep in, of zwarte suiker die lijkt op kolen. Het is een beetje zoals Sinterklaas in Nederland, maar zonder paard en zonder gedichten. Ik vind het een leuke traditie. Dit jaar mis ik het, want ik ben in Leiden.",
    },
    {
      id: "w-sinterklaasgedicht",
      title: "Een gedicht voor Sinterklaas",
      titleTranslation: "A Sinterklaas poem",
      form: "story",
      situation: "You drew a classmate's name. Write a short, friendly Sinterklaas poem for them.",
      points: [
        p("Start with the person's name", "voor"),
        p("Say something they like", "houdt", "graag", "van"),
        p("Say something funny about them", "altijd", "nooit", "soms"),
        p("Say what the present is (without giving it away)", "cadeau", "pakje"),
        p("Make at least two lines rhyme"),
        p("End with a greeting from Sinterklaas", "sinterklaas", "groet", "groeten"),
      ],
      model:
        "Voor Fatima, uit de taalles:\nze zingt elke week in een koor,\nen heel Leiden is dan één groot oor.\nMaar 's ochtends komt ze vaak te laat:\nde trein uit Den Haag, die altijd staat!\nZe fietst door de regen en door de wind,\nen ze lacht altijd, net als een kind.\nIn dit pakje zit iets voor haar oor,\nvoor in de trein en voor het koor.\nHaar Nederlands wordt elke week beter,\ndaarom krijgt ze ook een chocoladeletter!\nVeel groeten van Sinterklaas en zijn paard.",
    },
    {
      id: "w-goede-voornemens",
      title: "Mijn goede voornemens",
      titleTranslation: "My New Year's resolutions",
      form: "diary",
      situation: "Write your resolutions for the new year.",
      points: [
        p("Say what you did on New Year's Eve", "oudejaarsavond", "oud", "nieuw"),
        p("Give your first resolution", "ga", "wil", "voornemen"),
        p("Say why", "want"),
        p("Give a second resolution", "ook", "meer", "minder"),
        p("Say how you'll do it", "elke", "dag", "week", "keer"),
        p("Say what you're looking forward to this year", "zin", "graag", "jaar"),
      ],
      model:
        "Oudejaarsavond vier ik met Noor en Bram. Bram bakt oliebollen en om twaalf uur kijken we naar het vuurwerk. Dit jaar heb ik twee goede voornemens. Mijn eerste voornemen: ik ga elke dag een half uur Nederlands leren. Dat wil ik, want ik wil na mijn studie in Nederland blijven. Ik lees elke dag een tekst en ik leer tien nieuwe woorden. Mijn tweede voornemen: ik wil meer sporten. Ik ga twee keer per week zwemmen. Ik heb veel zin in dit jaar, vooral in de zomer. Dan komt mijn familie naar Leiden!",
    },
  ]),
};
