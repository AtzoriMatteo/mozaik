import type { Unit } from "@/core/content";
import { a2, gaps, heard, line, mc, order, p, pairs, s, tf } from "./helpers";

/** A2 unit 6: news and media. Indirect questions; als, wanneer and toen. */
export const media: Unit = {
  id: "a2-media",
  level: "A2",
  title: "Nieuws en media",
  titleTranslation: "News and media",
  look: { motif: "star", glaze: "cobalt" },
  canDo: [
    "Follow a short news item and a weather forecast",
    "Ask politely without a direct question: Weet jij of…? Ik vraag me af waarom…",
    "Say how things were when you were younger, with toen and als",
    "React to a news story and say what you think about it",
  ],
  texts: [
    {
      id: "het-jeugdjournaal",
      level: "A2",
      title: "Het Jeugdjournaal",
      titleTranslation: "The children's news",
      grammar: ["indirect-questions", "subordinate-order", "want-omdat"],
      paragraphs: [
        [
          s("Elke avond om zeven uur kijken duizenden Nederlandse kinderen naar het Jeugdjournaal. Het bestaat al sinds 1981.", "Every evening at seven o'clock thousands of Dutch children watch the Jeugdjournaal. It has existed since 1981."),
          s("Het is een journaal van ongeveer tien minuten, speciaal voor kinderen tussen acht en twaalf jaar.", "It's a news programme of about ten minutes, especially for children between eight and twelve."),
        ],
        [
          s("Het Jeugdjournaal brengt het echte nieuws, maar in makkelijke woorden. De presentatoren leggen uit wat er gebeurt en waarom het belangrijk is.", "The Jeugdjournaal brings the real news, but in easy words. The presenters explain what is happening and why it's important."),
          s("Gaat het over een verkiezing? Dan vertellen ze eerst wat een verkiezing eigenlijk is.", "Is it about an election? Then they first explain what an election actually is."),
          s("Kinderen mogen ook zelf vragen stellen. Ze willen bijvoorbeeld weten of een oorlog dichtbij is, of hoe een virus werkt.", "Children can also ask questions themselves. For example, they want to know whether a war is close by, or how a virus works."),
        ],
        [
          s("Er is een geheim dat veel mensen niet weten: ook volwassenen kijken graag naar het Jeugdjournaal.", "There's a secret that many people don't know: adults like watching the Jeugdjournaal too."),
          s("Sommigen vinden het gewone journaal te zwaar of te snel. Anderen willen gewoon snel weten wat er in de wereld gebeurt.", "Some find the normal news too heavy or too fast. Others just want to know quickly what's happening in the world."),
        ],
        [
          s("Voor mensen die Nederlands leren, is het Jeugdjournaal perfect. De zinnen zijn kort, de presentatoren praten duidelijk en er zijn ondertitels.", "For people learning Dutch, the Jeugdjournaal is perfect. The sentences are short, the presenters speak clearly and there are subtitles."),
          s("Een tip: kijk elke dag één item, en kijk het een tweede keer zonder ondertitels. Je merkt snel hoeveel je al begrijpt.", "A tip: watch one item every day, and watch it a second time without subtitles. You'll soon notice how much you already understand."),
        ],
      ],
      tasks: [
        mc("Who is the Jeugdjournaal made for?", ["Children between eight and twelve", "Teenagers", "People learning Dutch"], 0),
        tf("Het Jeugdjournaal brengt verzonnen nieuws voor kinderen.", "The Jeugdjournaal brings made-up news for children.", false),
        tf("Ook veel volwassenen kijken naar het Jeugdjournaal.", "Many adults also watch the Jeugdjournaal.", true),
        mc("What is the tip for learners?", ["Watch one item twice, the second time without subtitles", "Watch the whole programme three times", "Only watch the normal news"], 0),
        pairs("Match.", "journaal=news programme | presentator=presenter | ondertitels=subtitles | verkiezing=election", true),
      ],
    },
    {
      id: "weet-iemand-van-wie-deze-fiets-is",
      level: "A2",
      title: "Weet iemand van wie deze fiets is?",
      titleTranslation: "Does anyone know whose bike this is?",
      grammar: ["indirect-questions", "perfect-hebben", "possessives"],
      paragraphs: [
        [
          s("Veel Nederlandse straten hebben een buurtapp: een groep op WhatsApp voor iedereen die er woont. Dit zijn een paar berichten uit de groep van de Bloemstraat.", "Many Dutch streets have a neighbourhood app: a WhatsApp group for everyone who lives there. These are a few messages from the Bloemstraat group."),
        ],
        [
          s("Inge, 08.14: Goedemorgen allemaal! Er staat al een week een rode fiets voor nummer 12. Weet iemand van wie hij is?", "Inge, 08.14: Good morning everyone! A red bike has been standing outside number 12 for a week. Does anyone know whose it is?"),
          s("Farid, 08.31: Geen idee. Misschien is hij gestolen en hier neergezet? Ik weet niet of we de politie moeten bellen.", "Farid, 08.31: No idea. Maybe it was stolen and left here? I don't know whether we should call the police."),
        ],
        [
          s("Marjan, 09.02: Ik vraag me af of het de fiets van de nieuwe buren is. Er is vorige week iemand op nummer 14 komen wonen.", "Marjan, 09.02: I wonder whether it's the new neighbours' bike. Someone moved into number 14 last week."),
          s("Inge, 09.05: O, dat wist ik niet! Weet je ook hoe ze heten?", "Inge, 09.05: Oh, I didn't know that! Do you also know what they're called?"),
          s("Marjan, 09.07: Nee, maar ik ga vanmiddag even aanbellen. Dan kan ik meteen vragen of ze iets nodig hebben.", "Marjan, 09.07: No, but I'll ring their bell this afternoon. Then I can ask right away whether they need anything."),
        ],
        [
          s("Marjan, 16.40: Opgelost! De fiets is van Ana en Joost op nummer 14. Hun fietsenrek was nog niet klaar.", "Marjan, 16.40: Solved! The bike belongs to Ana and Joost at number 14. Their bike rack wasn't ready yet."),
          s("Marjan, 16.41: Ze komen uit Spanje en ze vroegen of er een bakker in de buurt is. Wie weet waar de beste is?", "Marjan, 16.41: They're from Spain and they asked whether there's a baker nearby. Who knows where the best one is?"),
          s("Farid, 16.45: Bakkerij Van Dam op de hoek! Welkom in de straat, Ana en Joost!", "Farid, 16.45: Van Dam bakery on the corner! Welcome to the street, Ana and Joost!"),
        ],
      ],
      tasks: [
        mc("What is a buurtapp?", ["A WhatsApp group for the people in a street", "An app for buying bikes", "A website of the city council"], 0),
        order("Put the messages in order.", "Inge asks about the bike", "Farid thinks it may be stolen", "Marjan thinks of the new neighbours", "Marjan rings the bell", "Farid recommends a bakery"),
        tf("De fiets was gestolen.", "The bike had been stolen.", false),
        mc("Whose bike is it?", ["Ana and Joost's", "Farid's", "Inge's"], 0),
        pairs("Match the questions.", "Weet iemand van wie hij is?=Does anyone know whose it is? | Ik vraag me af of…=I wonder whether… | Weet je hoe ze heten?=Do you know what they're called?", true),
      ],
    },
    {
      id: "is-het-wel-waar",
      level: "A2",
      title: "Is het wel waar?",
      titleTranslation: "Is it actually true?",
      grammar: ["indirect-questions", "imperative", "modal-verbs"],
      paragraphs: [
        [
          s("Op internet lees je elke dag berichten die heel spannend klinken. \"Dokters willen niet dat je dit weet!\" of \"Morgen gaan alle winkels dicht!\"", "On the internet you read messages every day that sound very exciting. \"Doctors don't want you to know this!\" or \"Tomorrow all the shops are closing!\""),
          s("Maar niet alles wat je leest, is waar. Sommige berichten zijn verzonnen, en dat noemen we nepnieuws.", "But not everything you read is true. Some messages are made up, and we call that fake news."),
        ],
        [
          s("Hoe weet je of een bericht echt is? Stel jezelf een paar vragen voordat je het deelt.", "How do you know whether a message is real? Ask yourself a few questions before you share it."),
          s("Kijk eerst wie het heeft geschreven. Is het een bekende krant, of een website waar je nog nooit van hebt gehoord?", "First look at who wrote it. Is it a well-known newspaper, or a website you've never heard of?"),
          s("Kijk dan wanneer het is geschreven. Soms delen mensen een bericht dat al vijf jaar oud is.", "Then look at when it was written. Sometimes people share a message that's already five years old."),
        ],
        [
          s("Zoek daarna of andere nieuwssites hetzelfde schrijven. Als niemand anders het bericht heeft, is dat een slecht teken.", "After that, search whether other news sites write the same thing. If nobody else has the story, that's a bad sign."),
          s("Let ook op hoe je je voelt. Word je heel boos of bang? Dan is dat vaak precies wat de schrijver wil.", "Also notice how you feel. Do you get very angry or scared? Then that's often exactly what the writer wants."),
        ],
        [
          s("Twijfel je nog? Deel het bericht dan niet. Het is beter om even te wachten dan om nepnieuws te verspreiden.", "Still in doubt? Then don't share the message. It's better to wait a moment than to spread fake news."),
          s("En vraag je je af of een foto echt is? Je kunt hem online terugzoeken. Dan zie je waar en wanneer de foto voor het eerst verscheen.", "And are you wondering whether a photo is real? You can do a reverse search online. Then you see where and when the photo first appeared."),
        ],
      ],
      tasks: [
        order("Put the checks in the order of the text.", "Who wrote it?", "When was it written?", "Do other news sites have it?", "How does it make you feel?"),
        tf("Als geen andere site het bericht heeft, is dat een goed teken.", "If no other site has the story, that's a good sign.", false),
        mc("What should you do if you're still in doubt?", ["Don't share it", "Share it with a warning", "Send it to a newspaper"], 0),
        pairs("Match.", "nepnieuws=fake news | delen=to share | verzonnen=made up | twijfelen=to be in doubt", true),
        mc("Why do some writers want you to feel angry or scared?", ["Then you share the message faster", "Then you buy a newspaper", "The text doesn't say"], 0),
      ],
    },
    {
      id: "toen-er-nog-geen-internet-was",
      level: "A2",
      title: "Toen er nog geen internet was",
      titleTranslation: "When there was no internet yet",
      grammar: ["als-wanneer-toen", "imperfect-irregular", "imperfect-regular"],
      paragraphs: [
        [
          s("Oma Truus is 82 jaar. Haar kleindochter Lieke vraagt haar hoe ze vroeger het nieuws volgde.", "Grandma Truus is 82. Her granddaughter Lieke asks her how she used to follow the news."),
          s("\"Toen ik een kind was, hadden we nog geen televisie,\" vertelt oma. \"We hadden alleen een radio in de woonkamer.\"", "\"When I was a child, we didn't have a television yet,\" says Grandma. \"We only had a radio in the living room.\""),
        ],
        [
          s("\"Als er belangrijk nieuws was, moest iedereen stil zijn. Dan zat mijn vader met zijn oor bijna tegen de radio.\"", "\"Whenever there was important news, everyone had to be quiet. Then my father sat with his ear almost against the radio.\""),
          s("\"Elke ochtend viel de krant op de mat. Als mijn vader klaar was met lezen, mocht ik de strips lezen.\"", "\"Every morning the newspaper fell on the doormat. When my father had finished reading, I was allowed to read the comics.\""),
        ],
        [
          s("\"Toen ik vijftien was, kochten mijn ouders een televisie. Er was maar één zender, en het programma begon pas 's avonds.\"", "\"When I was fifteen, my parents bought a television. There was only one channel, and the programmes only started in the evening.\""),
          s("\"De hele straat kwam bij ons kijken. Wanneer er voetbal was, zaten er wel twintig mensen in onze kamer.\"", "\"The whole street came to watch at our house. Whenever there was football on, there were as many as twenty people in our room.\""),
        ],
        [
          s("Lieke lacht. \"En nu? Hoe volg je het nieuws nu?\"", "Lieke laughs. \"And now? How do you follow the news now?\""),
          s("\"Nu lees ik het nieuws op mijn tablet,\" zegt oma trots. \"Maar als ik iets niet begrijp, kijk ik naar het Jeugdjournaal.\"", "\"Now I read the news on my tablet,\" says Grandma proudly. \"But when I don't understand something, I watch the Jeugdjournaal.\""),
        ],
      ],
      tasks: [
        mc("How did Truus's family follow the news when she was a child?", ["On the radio", "On television", "On the internet"], 0),
        tf("Toen Truus vijftien was, kochten haar ouders een televisie.", "When Truus was fifteen, her parents bought a television.", true),
        tf("Er waren veel zenders op de televisie.", "There were lots of channels on television.", false),
        mc("Why did twenty people sit in their room?", ["There was football on TV", "There was a party", "The radio was broken"], 0),
        pairs("Match.", "toen=when (one time in the past) | als=when, if (every time) | wanneer=when (every time, or a question)", true),
      ],
    },
  ],
  listening: [
    {
      id: "weer-voor-het-weekend",
      level: "A2",
      title: "Het weerbericht",
      titleTranslation: "The weather forecast",
      kind: "monologue",
      situation: "The weather forecast on the radio, on a Friday evening.",
      grammar: ["zullen-future", "time-numbers", "comparatives"],
      lines: [
        line("Weervrouw", "Goedenavond. Het weekend begint grijs en nat.", "Good evening. The weekend starts grey and wet."),
        line("Weervrouw", "Morgenochtend valt er in het hele land regen, en aan de kust waait het hard, met windkracht zeven.", "Tomorrow morning it will rain across the whole country, and on the coast there'll be a strong wind, force seven."),
        line("Weervrouw", "In de middag wordt het droger. In het zuiden komt de zon zelfs even tevoorschijn.", "In the afternoon it gets drier. In the south the sun will even come out for a while."),
        line("Weervrouw", "Het wordt niet warm: de temperatuur ligt rond de elf graden.", "It won't get warm: the temperature will be around eleven degrees."),
        line("Weervrouw", "Zondag wordt de mooiste dag van het weekend. Het blijft droog, en het wordt veertien graden.", "Sunday will be the nicest day of the weekend. It will stay dry, and it will be fourteen degrees."),
        line("Weervrouw", "Wilt u fietsen? Doe dat dan op zondag, met de wind in de rug!", "Do you want to cycle? Then do it on Sunday, with the wind behind you!"),
      ],
      gist: { prompt: "What kind of weekend is it going to be?", options: ["A wet Saturday and a dry Sunday", "Warm and sunny", "Snow on both days"], answer: 0 },
      details: [
        { prompt: "Where will the wind be strong?", options: ["On the coast", "In the south", "In the east"], answer: 0 },
        { prompt: "How warm will it be on Sunday?", options: ["Eleven degrees", "Fourteen degrees", "Twenty degrees"], answer: 1 },
      ],
      tasks: [
        heard(1, ["kust", "kerk", "kant"], 0),
        tf("Op zaterdagmiddag wordt het droger.", "On Saturday afternoon it gets drier.", true),
        gaps(4, "mooiste", "droog"),
      ],
      dictation: [0, 3],
      words: {
        windkracht: { meaning: "wind force (Beaufort scale)", local: "windkracht 7 = a strong wind; cycling against it is real work" },
        tevoorschijn: { meaning: "into view", local: "tevoorschijn komen = to appear, come out" },
      },
    },
    {
      id: "het-nieuws-in-het-kort",
      level: "A2",
      title: "Het nieuws in het kort",
      titleTranslation: "The news in brief",
      kind: "announcement",
      situation: "A short local news bulletin on a regional radio station. The stories are made up for this course.",
      grammar: ["perfect-hebben", "perfect-zijn", "time-numbers"],
      lines: [
        line("Nieuwslezer", "Het is twaalf uur. Hier is het nieuws.", "It's twelve o'clock. Here is the news."),
        line("Nieuwslezer", "In Zwolle is vanochtend een koe door de stad gelopen. Het dier was uit een wei ontsnapt.", "In Zwolle a cow walked through the town this morning. The animal had escaped from a meadow."),
        line("Nieuwslezer", "De koe liep een uur lang door het centrum. Een boer heeft haar uiteindelijk met een emmer brood naar huis gelokt.", "The cow walked through the centre for an hour. In the end a farmer lured her home with a bucket of bread."),
        line("Nieuwslezer", "In Deventer is gisteren een nieuwe bibliotheek geopend. Er staan meer dan honderdduizend boeken.", "In Deventer a new library opened yesterday. It holds more than a hundred thousand books."),
        line("Nieuwslezer", "De bibliotheek heeft ook een aparte ruimte voor mensen die Nederlands leren.", "The library also has a separate room for people learning Dutch."),
        line("Nieuwslezer", "En dan het verkeer: op de A28 staat een file van zeven kilometer, door een ongeluk bij Meppel.", "And then the traffic: on the A28 there's a seven-kilometre tailback, because of an accident near Meppel."),
      ],
      gist: { prompt: "What is this?", options: ["A short local news bulletin", "A weather forecast", "An advert"], answer: 0 },
      details: [
        { prompt: "How did the farmer get the cow home?", options: ["With a bucket of bread", "With a tractor", "With a dog"], answer: 0 },
        { prompt: "What is special about the new library?", options: ["It has a room for people learning Dutch", "It's open at night", "It only has children's books"], answer: 0 },
      ],
      tasks: [
        heard(2, ["emmer", "zak", "doos"], 0),
        tf("De nieuwe bibliotheek is in Zwolle.", "The new library is in Zwolle.", false),
        gaps(5, "file", "ongeluk"),
      ],
      dictation: [0, 4],
      words: {
        gelokt: { meaning: "lured", base: "lokken", closer: "lokken ~ to lure" },
        wei: { meaning: "meadow, field (for animals)", local: "Also weiland: the flat green fields full of cows" },
      },
    },
    {
      id: "weet-jij-waarom-de-brug-dicht-is",
      level: "A2",
      title: "Weet jij waarom de brug dicht is?",
      titleTranslation: "Do you know why the bridge is closed?",
      kind: "dialogue",
      situation: "Two neighbours, Bram and Saskia, meet on the street.",
      grammar: ["indirect-questions", "subordinate-order", "zullen-future"],
      lines: [
        line("Bram", "Hoi Saskia! Weet jij waarom de brug dicht is? Ik moest helemaal omfietsen.", "Hi Saskia! Do you know why the bridge is closed? I had to cycle all the way round."),
        line("Saskia", "Ja, ik las het vanochtend in de krant. Ze gaan hem repareren, want hij is te oud.", "Yes, I read it in the paper this morning. They're going to repair it, because it's too old."),
        line("Bram", "Staat er ook in hoe lang het gaat duren?", "Does it also say how long it's going to take?"),
        line("Saskia", "Drie maanden, denk ik. Maar ik weet niet zeker of dat klopt.", "Three months, I think. But I'm not sure whether that's right."),
        line("Bram", "Drie maanden! Dan vraag ik me af hoe de kinderen naar school moeten.", "Three months! Then I wonder how the children are supposed to get to school."),
        line("Saskia", "Er komt een pontje, schreven ze. Voor fietsers en voetgangers.", "There'll be a little ferry, they wrote. For cyclists and pedestrians."),
        line("Bram", "O, dat is leuk. Weet je ook wanneer dat begint?", "Oh, that's nice. Do you also know when that starts?"),
        line("Saskia", "Volgende week maandag, geloof ik. Kijk maar op de website van de gemeente.", "Next Monday, I think. Just look on the council's website."),
      ],
      gist: { prompt: "What are they talking about?", options: ["The bridge that's closed for repairs", "A new school", "A traffic accident"], answer: 0 },
      details: [
        { prompt: "How long will the work take?", options: ["Three weeks", "Three months", "A year"], answer: 1 },
        { prompt: "What will there be instead of the bridge?", options: ["A bus", "A small ferry", "Nothing"], answer: 1 },
      ],
      tasks: [
        heard(5, ["pontje", "busje", "bootje"], 0),
        tf("Saskia weet zeker hoe lang de brug dicht is.", "Saskia knows for sure how long the bridge will be closed.", false),
        gaps(0, "waarom", "dicht"),
      ],
      dictation: [2, 6],
      words: {
        omfietsen: { meaning: "cycle the long way round", closer: "om (around) + fietsen" },
        pontje: { meaning: "small ferry", local: "The pont: free little ferries cross canals and rivers all over the country" },
      },
    },
    {
      id: "leren-met-series",
      level: "A2",
      title: "Leren met series",
      titleTranslation: "Learning with TV series",
      kind: "monologue",
      situation: "In a podcast for learners, Hiroshi tells how he learned Dutch with television.",
      grammar: ["als-wanneer-toen", "imperfect-irregular", "te-infinitive"],
      lines: [
        line("Hiroshi", "Toen ik in Nederland kwam wonen, verstond ik bijna niets. Mensen praatten zo snel!", "When I came to live in the Netherlands, I understood almost nothing. People talked so fast!"),
        line("Hiroshi", "Een collega gaf me een tip: kijk Nederlandse series, met Nederlandse ondertitels.", "A colleague gave me a tip: watch Dutch series, with Dutch subtitles."),
        line("Hiroshi", "In het begin begreep ik misschien tien procent. Maar ik bleef kijken, elke avond één aflevering.", "At first I understood maybe ten per cent. But I kept watching, one episode every evening."),
        line("Hiroshi", "Als ik een leuke zin hoorde, schreef ik hem op. Die zinnen gebruikte ik de volgende dag op mijn werk.", "Whenever I heard a nice sentence, I wrote it down. I used those sentences at work the next day."),
        line("Hiroshi", "Na een half jaar merkte ik opeens dat ik de grappen begreep. Dat was een geweldig moment.", "After half a year I suddenly noticed that I understood the jokes. That was a great moment."),
        line("Hiroshi", "Mijn advies: probeer niet alles te begrijpen. Geniet van het verhaal, en je leert vanzelf.", "My advice: don't try to understand everything. Enjoy the story, and you'll learn by itself."),
      ],
      gist: { prompt: "What is Hiroshi's message?", options: ["Watching series helps you learn, even if you don't understand everything", "Series are too hard for learners", "You should only watch the news"], answer: 0 },
      details: [
        { prompt: "What did he do with nice sentences?", options: ["He wrote them down and used them at work", "He sent them to his colleague", "He forgot them"], answer: 0 },
        { prompt: "What did he notice after half a year?", options: ["He understood the jokes", "He could stop watching", "He spoke without an accent"], answer: 0 },
      ],
      tasks: [
        heard(2, ["aflevering", "artikel", "afspraak"], 0),
        tf("Hiroshi keek series met Engelse ondertitels.", "Hiroshi watched series with English subtitles.", false),
        gaps(5, "advies", "vanzelf"),
      ],
      dictation: [1, 5],
      words: {
        aflevering: { meaning: "episode", closer: "afleveren = deliver: each episode is a delivery" },
      },
    },
  ],
  writing: [
    a2({
      id: "w-reactie-op-nieuws",
      title: "Een reactie op het nieuws",
      titleTranslation: "Reacting to the news",
      form: "opinion",
      situation: "Your town wants to close the city centre to cars. Write a reaction under the news article.",
      points: [
        p("Say what the news is about", "gemeente", "wil", "centrum", "auto", "auto's", "plan"),
        p("Give your opinion", "vind", "denk", "mening"),
        p("Give a reason, with omdat or want", "omdat", "want"),
        p("Say what you wonder about, with an indirect question", "vraag", "af", "weet", "niet", "of", "hoe", "waarom"),
        p("Compare with before or with another town, with toen or als", "toen", "als", "vroeger"),
        p("Give a suggestion and close", "beter", "moet", "zou", "hoop"),
      ],
      model:
        "De gemeente wil het centrum vanaf volgend jaar autovrij maken. Ik vind het eigenlijk een goed plan. Ik fiets elke dag door de stad, en de drukke straten zijn soms echt gevaarlijk. Ook is de lucht in het centrum niet schoon, omdat er zo veel auto's rijden. Maar ik vraag me wel af hoe oudere mensen dan in de stad komen. Mijn buurvrouw is tachtig en kan niet meer fietsen. Ik weet ook niet of de winkels er blij mee zijn. Toen ik in Gent woonde, werd het centrum daar ook autovrij. In het begin was iedereen boos, maar na een jaar vond bijna iedereen het fijn. Als je nu door Gent loopt, hoor je vogels in plaats van auto's. Ik hoop dat de gemeente een gratis busje regelt voor mensen die slecht ter been zijn.",
    }),
    a2({
      id: "w-hoe-volg-ik-het-nieuws",
      title: "Hoe ik het nieuws volg",
      titleTranslation: "How I follow the news",
      form: "description",
      situation: "A website for language learners asks: how do you follow the news, and how was it when you were younger?",
      points: [
        p("Say how you follow the news now", "lees", "kijk", "luister", "app", "krant", "telefoon"),
        p("Say when and how often", "elke", "ochtend", "avond", "dag", "vaak", "soms"),
        p("Say how it was when you were younger, with toen", "toen", "vroeger"),
        p("Say what you do when you don't understand something, with als", "als", "wanneer"),
        p("Say what kind of news you like, with omdat or want", "omdat", "want", "sport", "cultuur", "wetenschap"),
        p("Say whether you follow Dutch news, and how", "nederlandse", "nederlands", "journaal", "nos"),
      ],
      model:
        "Ik volg het nieuws vooral op mijn telefoon. Elke ochtend lees ik in de trein een paar artikelen in een nieuwsapp, en 's avonds luister ik soms naar een podcast. Een papieren krant heb ik niet. Toen ik jong was, was dat heel anders. Mijn ouders hadden een krant, en om acht uur keken we samen naar het journaal. Toen vond ik het nieuws saai, want het ging alleen over politiek. Nu lees ik het liefst over wetenschap en cultuur, omdat ik graag nieuwe dingen leer. Sinds ik in Nederland woon, kijk ik ook naar het Nederlandse nieuws. Ik begin meestal met het Jeugdjournaal, want dat is makkelijker. Als ik een woord niet begrijp, zoek ik het meteen op. Daarna lees ik hetzelfde nieuws nog een keer op de website van de NOS.",
    }),
    a2({
      id: "w-bericht-in-de-buurtapp",
      title: "Een bericht in de buurtapp",
      titleTranslation: "A message in the neighbourhood app",
      form: "message",
      situation: "You've found something in your street, or you need help from your neighbours. Write a message in the buurtapp.",
      points: [
        p("Greet your neighbours", "hoi", "hallo", "goedemorgen", "allemaal", "buren"),
        p("Say who you are and where you live", "woon", "nummer", "ben"),
        p("Say what you found or what the problem is", "gevonden", "kwijt", "vond", "probleem", "staat", "ligt"),
        p("Ask an indirect question", "weet", "iemand", "vraag", "af", "of", "wie", "van"),
        p("Say where people can find you or the thing", "kan", "kunnen", "ophalen", "bellen", "bel", "aanbellen"),
        p("Thank your neighbours", "bedankt", "dank", "alvast"),
      ],
      model:
        "Hoi allemaal! Ik ben Noura, en ik woon sinds twee maanden op nummer 23. Gisteravond vond ik een zwarte kat in onze tuin. Hij is heel lief, maar hij is erg mager en hij heeft geen halsband. Ik denk dat hij al een paar dagen buiten is. Weet iemand van wie de kat is? Of heeft iemand gehoord dat er een kat kwijt is? Ik vraag me ook af of er een dierenarts in de buurt is die kan kijken of hij een chip heeft. Ik heb hem vannacht binnen gehouden en hem wat water en eten gegeven. Mijn kinderen willen hem natuurlijk graag houden, maar hij heeft vast een eigenaar die hem mist. Is het jouw kat? Bel dan even aan op nummer 23, of stuur me een berichtje. Alvast bedankt!",
    }),
  ],
  speaking: {
    sounds: ["ui", "eu"],
    shadowing: [
      { text: "Weet jij waarom de brug dicht is?", translation: "Do you know why the bridge is closed?" },
      { text: "Maar ik weet niet zeker of dat klopt.", translation: "But I'm not sure whether that's right." },
      { text: "Het weekend begint grijs en nat.", translation: "The weekend starts grey and wet." },
      { text: "Geniet van het verhaal, en je leert vanzelf.", translation: "Enjoy the story, and you'll learn by itself." },
    ],
  },
};
