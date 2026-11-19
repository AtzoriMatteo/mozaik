import type { Checkpoint, ListeningLine, Sentence } from "@/core/content";

const s = (text: string, translation: string): Sentence => ({ text, translation });
const l = (speaker: string, text: string, translation: string): ListeningLine => ({ speaker, text, translation });

/**
 * Checkpoints for the units that aren't story units yet. A custom may show
 * up in the scene as a hint, never as an explanation (Matteo, 19 Nov 2026:
 * culture is a handful of texts per level, not every unit).
 */
export const checkpointsNl: Record<string, Checkpoint> = {
  /* ---------------- A1 ---------------- */
  "a1-basis": {
    title: "De verjaardagskalender",
    titleTranslation: "The birthday calendar",
    text: [
      [
        s("Mevrouw De Vries geeft Priya een cadeau: een verjaardagskalender.", "Mrs De Vries gives Priya a present: a birthday calendar."),
        s("Die hang je op de wc, zegt ze. Priya lacht, maar ze doet het.", "You hang it in the toilet, she says. Priya laughs, but she does it."),
        s("Nu ziet ze hem elke dag, dus ze vergeet geen verjaardag.", "Now she sees it every day, so she won't forget a birthday."),
        s("Priya schrijft de eerste naam: mevrouw De Vries, zeventien juni.", "Priya writes the first name: Mrs De Vries, the seventeenth of June."),
      ],
    ],
    textTasks: [
      { kind: "truefalse", statement: "De verjaardagskalender hangt in de keuken van Priya.", translation: "The birthday calendar hangs in Priya's kitchen.", answer: false },
      { kind: "choice", prompt: "Where does Mrs De Vries tell her to hang it?", options: ["In the toilet", "In the kitchen", "By the front door"], answer: 0 },
      { kind: "choice", prompt: "When is Mrs De Vries's birthday?", options: ["17 June", "7 June", "17 July"], answer: 0 },
    ],
    listening: {
      situation: "The library leaves Priya a voice message.",
      lines: [
        l("Medewerker", "Goedemiddag, met de bibliotheek.", "Good afternoon, this is the library."),
        l("Medewerker", "Uw pasje is klaar.", "Your card is ready."),
        l("Medewerker", "U kunt het ophalen van maandag tot vrijdag, van tien tot vijf uur.", "You can collect it Monday to Friday, from ten to five."),
        l("Medewerker", "Tot ziens!", "Goodbye!"),
      ],
      questions: [
        { prompt: "What is ready?", options: ["Her library card", "A book", "Her passport"], answer: 0 },
        { prompt: "When can she collect it?", options: ["Monday to Friday, 10 to 5", "Only on Saturday", "Every day until 10"], answer: 0 },
      ],
    },
    write: {
      situation: "Fill in your details for the library, in sentences.",
      points: [
        { prompt: "Say your name and spell it", frame: "Mijn naam is … . Dat is … ." },
        { prompt: "Give your phone number", frame: "Mijn telefoonnummer is … ." },
        { prompt: "Say when your birthday is", frame: "Ik ben jarig op … ." },
      ],
      model: "Mijn naam is Priya Shah. Dat is S, H, A, H. Mijn telefoonnummer is nul zes, twaalf, vierendertig, zesenvijftig, negentig. Ik ben jarig op drie oktober.",
      modelTranslation: "My name is Priya Shah. That's S, H, A, H. My phone number is 06 12 34 56 90. My birthday is on 3 October.",
    },
    words: {
      verjaardagskalender: { meaning: "birthday calendar", closer: "verjaardag + kalender" },
      wc: { meaning: "toilet (say 'wee-say')" },
      hangt: { meaning: "hangs", base: "hangen" },
      hang: { meaning: "(you) hang", base: "hangen" },
      vergeet: { meaning: "forget(s)", base: "vergeten" },
      priya: { meaning: "Priya (a name)" },
      pasje: { meaning: "card (library card, bank card)" },
      ophalen: { meaning: "to pick up, to collect" },
    },
  },

  "a1-gezondheid": {
    title: "Een kaartje voor Bram",
    titleTranslation: "A card for Bram",
    text: [
      [
        s("Donderdag ligt er een kaart in de brievenbus van nummer twaalf. Op de kaart staat een grote zon en één woord: Beterschap!", "On Thursday there's a card in the letterbox of number twelve. On the card there's a big sun and one word: Get well soon!"),
        s("De kaart is van de collega's van Bram in het café. Iedereen schrijft iets: Kom snel terug! Het café is saai zonder jou!", "The card is from Bram's colleagues at the café. Everyone writes something: Come back soon! The café is boring without you!"),
        s("Ook Ruth en Jayden schrijven iets. Jayden tekent een grote kop koffie.", "Ruth and Jayden write something too. Jayden draws a big cup of coffee."),
        s("Bram zet de kaart op de tafel. Hij voelt zich al een beetje beter.", "Bram puts the card on the table. He already feels a bit better."),
      ],
    ],
    textTasks: [
      { kind: "truefalse", statement: "De kaart is van de familie van Bram.", translation: "The card is from Bram's family.", answer: false },
      { kind: "choice", prompt: "What does \"Beterschap!\" mean?", options: ["Get well soon!", "Congratulations!", "Good luck!"], answer: 0 },
      { kind: "choice", prompt: "Why does Bram feel a bit better?", options: ["His colleagues miss him and wrote to him", "He took paracetamol", "The doctor called"], answer: 0 },
    ],
    listening: {
      situation: "The GP's assistant leaves Bram a voice message.",
      lines: [
        l("Assistente", "Goedemorgen, met de huisartsenpraktijk.", "Good morning, this is the GP's practice."),
        l("Assistente", "Dit is een bericht voor Bram de Jong.", "This is a message for Bram de Jong."),
        l("Assistente", "De dokter wil u volgende week nog een keer zien. Kunt u op maandag om tien uur komen?", "The doctor wants to see you once more next week. Can you come on Monday at ten?"),
        l("Assistente", "Bel ons even terug, alstublieft. Dag!", "Please call us back. Bye!"),
      ],
      questions: [
        { prompt: "When is the new appointment?", options: ["Monday at ten", "Tuesday at ten", "Monday at two"], answer: 0 },
        { prompt: "What does Bram have to do?", options: ["Call back", "Go to the chemist's", "Nothing"], answer: 0 },
      ],
    },
    write: {
      situation: "Bram writes a short thank-you message to his colleagues.",
      points: [
        { prompt: "Thank them", frame: "Bedankt voor … !" },
        { prompt: "Say how you are", frame: "Ik voel me … ." },
        { prompt: "Say when you're back", frame: "Ik kom … weer werken." },
      ],
      model: "Bedankt voor de mooie kaart! Het gaat al goed, maar ik ben nog moe. Ik kom volgende week weer werken.",
      modelTranslation: "Thanks for the lovely card! I'm already doing well, but I'm still tired. I'll be back at work next week.",
    },
    words: {
      brievenbus: { meaning: "letterbox", closer: "brieven (letters) + bus (box)" },
      beterschap: { meaning: "get well soon" },
      ruth: { meaning: "Ruth (a name)" },
      jayden: { meaning: "Jayden (a name)" },
      beterschapskaart: { meaning: "get-well card" },
      saai: { meaning: "boring" },
      tekent: { meaning: "signs; draws", base: "tekenen" },
      team: { meaning: "team" },
      huisartsenpraktijk: { meaning: "GP's practice" },
      jong: { meaning: "young; De Jong (a surname)" },
    },
  },

  "a1-vrije-tijd": {
    title: "Buienradar",
    titleTranslation: "The rain radar",
    text: [
      [
        s("Zaterdag wil Kwame met Noor naar het strand. Maar eerst kijkt Noor op haar telefoon.", "On Saturday Kwame wants to go to the beach with Noor. But first Noor looks at her phone."),
        s("Ze kijkt op Buienradar. Op die app zie je precies waar het regent, en wanneer.", "She looks at Buienradar. On that app you can see exactly where it's raining, and when."),
        s("Kwame lacht. In Ghana kijk ik gewoon naar de lucht, zegt hij.", "Kwame laughs. In Ghana I just look at the sky, he says."),
        s("Om twee uur regent het, zegt Noor. Om drie uur schijnt de zon weer. We gaan om kwart over drie.", "At two it rains, says Noor. At three the sun shines again. We'll go at quarter past three."),
      ],
    ],
    textTasks: [
      { kind: "choice", prompt: "What is Buienradar?", options: ["An app that shows where and when it rains", "A weather station", "A TV programme"], answer: 0 },
      { kind: "truefalse", statement: "Ze gaan om twee uur naar het strand.", translation: "They're going to the beach at two.", answer: false },
      { kind: "choice", prompt: "What does Kwame do in Ghana?", options: ["He just looks at the sky", "He uses Buienradar too", "He watches the weather on TV"], answer: 0 },
    ],
    listening: {
      situation: "Noor leaves Kwame a voice message on Saturday afternoon.",
      lines: [
        l("Noor", "Hoi Kwame, met Noor!", "Hi Kwame, it's Noor!"),
        l("Noor", "De zon schijnt! Het is twintig graden.", "The sun's shining! It's twenty degrees."),
        l("Noor", "Ik ben al bij het station, met de fiets.", "I'm already at the station, with my bike."),
        l("Noor", "Neem je zwembroek mee, en een trui. Aan zee is het vaak koud!", "Bring your swimming trunks, and a jumper. By the sea it's often cold!"),
      ],
      questions: [
        { prompt: "Where is Noor?", options: ["At the station", "At the beach", "At home"], answer: 0 },
        { prompt: "Why should Kwame bring a jumper?", options: ["It's often cold by the sea", "It's going to rain", "The train is cold"], answer: 0 },
      ],
    },
    write: {
      situation: "Answer Noor: say you're coming, when, and what you're bringing.",
      points: [
        { prompt: "Say you're coming", frame: "Hoi Noor, ik … !" },
        { prompt: "Say when you'll be there", frame: "Ik ben er om … ." },
        { prompt: "Say what you're bringing", frame: "Ik neem … mee." },
      ],
      model: "Hoi Noor, ik kom! Ik ben er om half vier. Ik neem een trui en een fles water mee.",
      modelTranslation: "Hi Noor, I'm coming! I'll be there at half past three. I'll bring a jumper and a bottle of water.",
    },
    words: {
      buienradar: { meaning: "Buienradar ('shower radar', the Dutch rain app)", closer: "buien (showers) + radar" },
      app: { meaning: "app" },
      precies: { meaning: "exactly" },
      nederlander: { meaning: "Dutch person" },
      nat: { meaning: "wet" },
      zwembroek: { meaning: "swimming trunks", closer: "zwem (swim) + broek (trousers)" },
      zee: { meaning: "sea" },
      graden: { meaning: "degrees", base: "graad" },
      kwame: { meaning: "Kwame (a name)" },
    },
  },

  "a1-kleren": {
    title: "Koopavond",
    titleTranslation: "Late-night shopping",
    text: [
      [
        s("Op de deur van de kledingwinkel van Yusuf hangt een briefje: Donderdag koopavond, open tot negen uur!", "On the door of Yusuf's clothes shop there's a note: Thursday late-night shopping, open until nine!"),
        s("Om zes uur gaan de andere winkels in de straat dicht, maar Yusuf is nog open. Het is druk: veel mensen komen na hun werk.", "At six the other shops in the street close, but Yusuf is still open. It's busy: lots of people come after work."),
        s("Fatima komt op donderdag om half acht. Na haar werk heeft ze eindelijk tijd voor een nieuwe jurk.", "Fatima comes on Thursday at half past seven. After work she finally has time for a new dress."),
      ],
    ],
    textTasks: [
      { kind: "truefalse", statement: "Op koopavond is de winkel open tot zes uur.", translation: "On late-night shopping evening the shop is open until six.", answer: false },
      { kind: "choice", prompt: "Why does Fatima come on Thursday evening?", options: ["The shop is open late, so she can come after work", "It's cheaper", "Yusuf asks her"], answer: 0 },
      { kind: "choice", prompt: "Why is the shop busy?", options: ["Lots of people come after work", "There's a sale", "It's Saturday"], answer: 0 },
    ],
    listening: {
      situation: "Yusuf leaves Kwame a voice message.",
      lines: [
        l("Yusuf", "Hoi Kwame, met Yusuf van de winkel.", "Hi Kwame, it's Yusuf from the shop."),
        l("Yusuf", "De warme trui in maat S is binnen.", "The warm jumper in size S has come in."),
        l("Yusuf", "Hij kost vijftig euro, maar voor jou veertig.", "It costs fifty euros, but for you forty."),
        l("Yusuf", "Kom je donderdag op koopavond? Tot dan!", "Are you coming on Thursday for late-night shopping? See you then!"),
      ],
      questions: [
        { prompt: "What has come in?", options: ["The warm jumper in size S", "Shoes in size 42", "A winter coat"], answer: 0 },
        { prompt: "How much does Kwame pay?", options: ["Forty euros", "Fifty euros", "Thirty euros"], answer: 0 },
      ],
    },
    write: {
      situation: "Answer Yusuf: say thanks, say when you'll come, and ask something.",
      points: [
        { prompt: "Say thanks", frame: "Dank je wel, … !" },
        { prompt: "Say when you'll come", frame: "Ik kom op … ." },
        { prompt: "Ask a question", frame: "… ?" },
      ],
      model: "Dank je wel, Yusuf! Ik kom op donderdag om acht uur. Kan ik met pin betalen?",
      modelTranslation: "Thanks, Yusuf! I'll come on Thursday at eight. Can I pay by card?",
    },
    words: {
      koopavond: { meaning: "late-night shopping", closer: "koop (buy) + avond (evening)" },
      kledingwinkel: { meaning: "clothes shop" },
      briefje: { meaning: "a note", base: "brief" },
      s: { meaning: "S (size small)" },
      yusuf: { meaning: "Yusuf (a name)" },
      meeste: { meaning: "most", base: "meest" },
      pas: { meaning: "only (not before); just" },
      binnen: { meaning: "in, inside (is binnen = has come in)" },
      kwame: { meaning: "Kwame (a name)" },
    },
  },

  "a1-nederland": {
    title: "Een kaart uit Texel",
    titleTranslation: "A card from Texel",
    text: [
      [
        s("Marta stuurt een ansichtkaart aan mevrouw De Vries.", "Marta sends Mrs De Vries a postcard."),
        s("Lieve mevrouw De Vries, ik ben op Texel, een eiland in het noorden. Hier zijn meer schapen dan mensen! Elke dag fiets ik door de duinen.", "Dear Mrs De Vries, I'm on Texel, an island in the north. There are more sheep than people here! Every day I cycle through the dunes."),
        s("Morgen ga ik wadlopen, met een gids. Ik vind het een beetje spannend!", "Tomorrow I'm going mudflat walking, with a guide. I find it a bit exciting!"),
        s("Groetjes, ook aan uw kat! Marta", "Best wishes, to your cat too! Marta"),
      ],
    ],
    textTasks: [
      { kind: "choice", prompt: "What is Marta doing tomorrow?", options: ["Mudflat walking with a guide", "Swimming to another island", "Going home"], answer: 0 },
      { kind: "truefalse", statement: "Op Texel zijn meer mensen dan schapen.", translation: "On Texel there are more people than sheep.", answer: false },
      { kind: "choice", prompt: "Who else does Marta greet?", options: ["Mrs De Vries's cat", "Her sister", "The guide"], answer: 0 },
    ],
    listening: {
      situation: "An announcement on the train back from Den Helder.",
      lines: [
        l("Omroep", "Dames en heren, door een storing rijdt deze trein niet verder dan Alkmaar.", "Ladies and gentlemen, because of a fault this train doesn't go further than Alkmaar."),
        l("Omroep", "Reizigers naar Leiden stappen in Alkmaar over.", "Passengers for Leiden change in Alkmaar."),
        l("Omroep", "De trein naar Leiden vertrekt van spoor vier.", "The train to Leiden leaves from platform four."),
        l("Omroep", "Onze excuses voor het ongemak.", "We apologise for the inconvenience."),
      ],
      questions: [
        { prompt: "Where does Marta have to change?", options: ["In Alkmaar", "In Den Helder", "In Leiden"], answer: 0 },
        { prompt: "Which platform?", options: ["Four", "Two", "Fourteen"], answer: 0 },
      ],
    },
    write: {
      situation: "Write a short postcard from a place you like.",
      points: [
        { prompt: "Say where you are", frame: "Ik ben in … ." },
        { prompt: "Say what it's like", frame: "Het is … ." },
        { prompt: "Say what you're going to do", frame: "Morgen ga ik … ." },
      ],
      model: "Ik ben in Maastricht, in het zuiden. Het is een oude stad met mooie pleinen. Morgen ga ik naar het museum.",
      modelTranslation: "I'm in Maastricht, in the south. It's an old city with beautiful squares. Tomorrow I'm going to the museum.",
    },
    words: {
      ansichtkaart: { meaning: "postcard (with a picture)" },
      texel: { meaning: "Texel (the biggest Wadden island)" },
      schapen: { meaning: "sheep (plural)", base: "schaap" },
      gefietst: { meaning: "cycled", base: "fietsen" },
      duinen: { meaning: "dunes", base: "duin" },
      wadlopen: { meaning: "mudflat walking", closer: "wad (mudflat) + lopen (walk)" },
      gids: { meaning: "guide" },
      laag: { meaning: "low" },
      bodem: { meaning: "bottom, floor" },
      nergens: { meaning: "nowhere" },
      wereld: { meaning: "world" },
      groetjes: { meaning: "best wishes, love" },
      storing: { meaning: "fault, breakdown" },
      verder: { meaning: "further" },
      alkmaar: { meaning: "Alkmaar (a town in North Holland)" },
      reizigers: { meaning: "passengers", base: "reiziger" },
      stappen: { meaning: "step (overstappen = to change trains)", base: "stappen" },
      over: { meaning: "over; about" },
      vertrekt: { meaning: "leaves, departs", base: "vertrekken" },
      spoor: { meaning: "platform, track" },
      excuses: { meaning: "apologies" },
      ongemak: { meaning: "inconvenience" },
      helder: { meaning: "clear (Den Helder, a port town)" },
    },
  },

  "a1-feestdagen": {
    title: "Sint-Maarten",
    titleTranslation: "St Martin's Day",
    text: [
      [
        s("Op elf november gaat om zes uur 's avonds de bel bij mevrouw De Vries.", "On the eleventh of November at six in the evening the bell rings at Mrs De Vries's."),
        s("Voor de deur staan Jayden, Emre en Defne, met lampionnen. Ze zingen een liedje over Sint-Maarten.", "At the door are Jayden, Emre and Defne, with paper lanterns. They sing a song about St Martin."),
        s("Ze zingen nog een keer, en mevrouw De Vries geeft ze snoep en een mandarijn.", "They sing once more, and Mrs De Vries gives them sweets and a tangerine."),
        s("Ze heeft een grote schaal met snoep klaar. Ze vindt het elk jaar weer prachtig.", "She has a big bowl of sweets ready. She loves it every year."),
      ],
    ],
    textTasks: [
      { kind: "truefalse", statement: "Op Sint-Maarten zingen kinderen bij de deur.", translation: "On St Martin's Day children sing at the door.", answer: true },
      { kind: "choice", prompt: "What do the children carry?", options: ["Paper lanterns", "Presents", "Orange flags"], answer: 0 },
      { kind: "choice", prompt: "What do the children get?", options: ["Sweets and a tangerine", "Money", "A lantern"], answer: 0 },
    ],
    listening: {
      situation: "Ruth leaves Mrs De Vries a voice message.",
      lines: [
        l("Ruth", "Hallo mevrouw De Vries, met Ruth.", "Hello Mrs De Vries, it's Ruth."),
        l("Ruth", "Dank u wel voor het snoep! Jayden heeft een hele tas vol.", "Thank you for the sweets! Jayden has a whole bag full."),
        l("Ruth", "Hij zingt het liedje nu al voor de tiende keer.", "He's singing the song for the tenth time already."),
        l("Ruth", "Morgen breng ik u een brood van de bakkerij. Fijne avond!", "Tomorrow I'll bring you a loaf from the bakery. Have a nice evening!"),
      ],
      questions: [
        { prompt: "What does Jayden have?", options: ["A whole bag of sweets", "A new lantern", "A loaf of bread"], answer: 0 },
        { prompt: "What will Ruth bring tomorrow?", options: ["A loaf from the bakery", "Sweets", "A tangerine"], answer: 0 },
      ],
    },
    write: {
      situation: "Write a short message about a festival from your country or town.",
      points: [
        { prompt: "Say which festival and when", frame: "Op … vieren we … ." },
        { prompt: "Say what people do", frame: "Dan … ." },
        { prompt: "Say what you like about it", frame: "Ik vind het … , want … ." },
      ],
      model: "Op zes januari vieren we Driekoningen. Dan krijgen de kinderen cadeautjes. Ik vind het leuk, want de hele familie komt.",
      modelTranslation: "On 6 January we celebrate Epiphany. Then the children get presents. I like it, because the whole family comes.",
    },
    words: {
      november: { meaning: "November" },
      sint: { meaning: "Saint (Sint-Maarten = St Martin)" },
      maarten: { meaning: "Martin (Sint-Maarten, 11 November)" },
      ruth: { meaning: "Ruth (a name)" },
      jayden: { meaning: "Jayden (a name)" },
      emre: { meaning: "Emre (a name)" },
      defne: { meaning: "Defne (a name)" },
      lampionnen: { meaning: "paper lanterns", base: "lampion" },
      zingen: { meaning: "to sing" },
      liedje: { meaning: "song", base: "lied" },
      donker: { meaning: "dark" },
      langs: { meaning: "along, past (langs de deuren = door to door)" },
      mandarijn: { meaning: "tangerine" },
      steden: { meaning: "towns, cities", base: "stad" },
      dorpen: { meaning: "villages", base: "dorp" },
      schaal: { meaning: "bowl" },
      prachtig: { meaning: "lovely, wonderful" },
      vol: { meaning: "full" },
      zingt: { meaning: "sings", base: "zingen" },
      tiende: { meaning: "tenth" },
    },
  },

  /* ---------------- A2 ---------------- */
  "a2-verleden": {
    title: "Twee minuten stilte",
    titleTranslation: "Two minutes' silence",
    text: [
      [
        s("Op vier mei om acht uur 's avonds is het in heel Nederland twee minuten stil.", "On 4 May at eight in the evening, the whole of the Netherlands is silent for two minutes."),
        s("Dan herdenken de Nederlanders de mensen die in de Tweede Wereldoorlog en daarna in oorlogen zijn gestorven.", "Then the Dutch remember the people who died in the Second World War and in wars since."),
        s("De treinen stoppen, de trams staan stil, en ook op straat blijft iedereen staan.", "The trains stop, the trams stand still, and people in the street stand still too."),
        s("Vorig jaar was Joris in de supermarkt om acht uur. Alle klanten stonden twee minuten stil tussen de schappen. Niemand zei iets.", "Last year Joris was in the supermarket at eight o'clock. All the customers stood still between the shelves for two minutes. Nobody said a word."),
        s("De volgende dag ging Joris naar een festival in Haarlem, want het was vijf mei.", "The next day Joris went to a festival in Haarlem, because it was the fifth of May."),
      ],
    ],
    textTasks: [
      { kind: "choice", prompt: "What happens on 4 May at eight in the evening?", options: ["Two minutes of silence across the country", "Fireworks", "A big festival"], answer: 0 },
      { kind: "truefalse", statement: "Op 5 mei is het ook stil in Nederland.", translation: "On 5 May it's also silent in the Netherlands.", answer: false },
      { kind: "choice", prompt: "What did the customers in the supermarket do?", options: ["They stood still and said nothing", "They went home", "They sang"], answer: 0 },
    ],
    listening: {
      situation: "Jesse leaves Joris a voice message on 5 May.",
      lines: [
        l("Jesse", "Hoi, met Jesse!", "Hi, it's Jesse!"),
        l("Jesse", "Ik ben vandaag naar het Bevrijdingsfestival in Haarlem geweest.", "Today I went to the Liberation Festival in Haarlem."),
        l("Jesse", "Er waren duizenden mensen, en het was gratis.", "There were thousands of people, and it was free."),
        l("Jesse", "Volgend jaar moet je echt meegaan!", "Next year you really have to come!"),
      ],
      questions: [
        { prompt: "Where did Jesse go?", options: ["To the Liberation Festival in Haarlem", "To a museum", "To the beach"], answer: 0 },
        { prompt: "How much did it cost?", options: ["Nothing", "Ten euros", "Five euros"], answer: 0 },
      ],
    },
    write: {
      situation: "Write about a memorial day or a national day in your country, in the past tense.",
      points: [
        { prompt: "Say which day and what it's for", frame: "Op … herdenken / vieren we … ." },
        { prompt: "Say what you did last year", frame: "Vorig jaar heb ik … ." },
        { prompt: "Say how it felt", frame: "Het was … ." },
      ],
      model: "Op elf november herdenken we in mijn land het einde van de Eerste Wereldoorlog. Vorig jaar heb ik met mijn opa naar de televisie gekeken. Het was stil en heel mooi.",
      modelTranslation: "On 11 November in my country we remember the end of the First World War. Last year I watched it on TV with my grandpa. It was quiet and very beautiful.",
    },
    words: {
      festival: { meaning: "festival" },
      herdenken: { meaning: "to remember, to commemorate" },
      tweede: { meaning: "second" },
      wereldoorlog: { meaning: "world war", closer: "wereld (world) + oorlog (war)" },
      oorlogen: { meaning: "wars", base: "oorlog" },
      gestorven: { meaning: "died", base: "sterven" },
      schappen: { meaning: "shelves (in a shop)", base: "schap" },
      bevrijdingsdag: { meaning: "Liberation Day (5 May)" },
      vrijheid: { meaning: "freedom" },
      festivals: { meaning: "festivals", base: "festival" },
      bevrijdingsfestival: { meaning: "Liberation Festival (on 5 May, in many cities)" },
      haarlem: { meaning: "Haarlem (a city near Amsterdam)" },
      duizenden: { meaning: "thousands" },
      meegaan: { meaning: "to come along" },
      joris: { meaning: "Joris (a name)" },
      jesse: { meaning: "Jesse (a name)" },
    },
  },

  "a2-werk": {
    title: "Vakantiegeld",
    titleTranslation: "Holiday pay",
    text: [
      [
        s("In mei krijgt Esther een verrassing: haar salaris is veel hoger dan normaal.", "In May Esther gets a surprise: her salary is much higher than usual."),
        s("Is het een fout?", "Is it a mistake?"),
        s("Haar collega Ruud lacht: nee hoor, dat is je vakantiegeld! Esther boekt meteen een reis naar Portugal.", "Her colleague Ruud laughs: no, that's your holiday pay! Esther books a trip to Portugal straight away."),
      ],
    ],
    textTasks: [
      { kind: "choice", prompt: "Who tells Esther what the money is?", options: ["Her colleague Ruud", "Her boss", "Her bank"], answer: 0 },
      { kind: "truefalse", statement: "Het vakantiegeld is een fout van de baas.", translation: "The holiday pay is the boss's mistake.", answer: false },
      { kind: "choice", prompt: "What does Esther do with it?", options: ["Books a trip to Portugal", "Saves it", "Buys a bike"], answer: 0 },
    ],
    listening: {
      situation: "Arjun leaves Esther a voice message at work.",
      lines: [
        l("Arjun", "Hoi Esther, met Arjun.", "Hi Esther, it's Arjun."),
        l("Arjun", "Vrijdag is er weer een vrijdagmiddagborrel, om vijf uur in de kantine.", "On Friday there's another Friday afternoon drinks, at five in the canteen."),
        l("Arjun", "Het is ook mijn laatste dag, dus ik trakteer op bitterballen.", "It's also my last day, so the bitterballen are on me."),
        l("Arjun", "Kom je ook?", "Are you coming too?"),
      ],
      questions: [
        { prompt: "When are the Friday drinks?", options: ["Friday at five", "Friday at three", "Thursday at five"], answer: 0 },
        { prompt: "Why is Arjun treating everyone?", options: ["It's his last day", "It's his birthday", "He got holiday pay"], answer: 0 },
      ],
    },
    write: {
      situation: "Answer Arjun: say whether you're coming and say something about his last day.",
      points: [
        { prompt: "Say yes or no", frame: "Hoi Arjun, … !" },
        { prompt: "Say something about his last day", frame: "Ik vind het … ." },
        { prompt: "Ask about his new job", frame: "Waar … ?" },
      ],
      model: "Hoi Arjun, ik kom zeker! Ik vind het niet leuk, want je bent een goede collega. Waar ga je straks werken?",
      modelTranslation: "Hi Arjun, I'll definitely come! I'm sad about it, because you're a good colleague. Where are you going to work?",
    },
    words: {
      verrassing: { meaning: "surprise" },
      salaris: { meaning: "salary" },
      vakantiegeld: { meaning: "holiday pay", closer: "vakantie + geld" },
      werknemers: { meaning: "employees", base: "werknemer" },
      procent: { meaning: "percent" },
      zomervakantie: { meaning: "summer holiday" },
      buitenlanders: { meaning: "foreigners", base: "buitenlander" },
      verrast: { meaning: "surprised" },
      boekt: { meaning: "books", base: "boeken" },
      portugal: { meaning: "Portugal" },
      vrijdagmiddagborrel: { meaning: "Friday afternoon drinks (at work)", closer: "vrijdagmiddag + borrel" },
      kantine: { meaning: "canteen" },
      trakteer: { meaning: "(I) treat", base: "trakteren" },
      bitterballen: { meaning: "bitterballen (deep-fried meat balls, a borrel snack)", base: "bitterbal" },
      esther: { meaning: "Esther (a name)" },
      arjun: { meaning: "Arjun (a name)" },
    },
  },

  "a2-wonen": {
    title: "Grofvuil",
    titleTranslation: "Bulky rubbish",
    text: [
      [
        s("Op dinsdagavond zet Linda een oude stoel en een lamp op de stoep. Woensdag komt de gemeente het grofvuil ophalen.", "On Tuesday evening Linda puts an old chair and a lamp on the pavement. On Wednesday the council comes to collect the bulky rubbish."),
        s("Maar om negen uur 's avonds staat de stoel er al niet meer. En de lamp ook niet.", "But at nine in the evening the chair is already gone. And so is the lamp."),
        s("Linda lacht. Iemand wil ze dus nog graag hebben. Prima!", "Linda laughs. So someone still wants them. Fine!"),
        s("De volgende dag ziet Linda haar lamp. Hij staat in het raam van de buren, en hij brandt.", "The next day Linda sees her lamp. It's in the neighbours' window, switched on."),
      ],
    ],
    textTasks: [
      { kind: "truefalse", statement: "De gemeente haalt de stoel op dinsdagavond op.", translation: "The council collects the chair on Tuesday evening.", answer: false },
      { kind: "choice", prompt: "What happened to the lamp?", options: ["The neighbours took it from the pavement", "The council took it", "It broke"], answer: 0 },
      { kind: "choice", prompt: "Where is the lamp now?", options: ["In the neighbours' window", "With the rubbish", "Back with Linda"], answer: 0 },
    ],
    listening: {
      situation: "The council's phone line about bulky rubbish.",
      lines: [
        l("Omroep", "Welkom bij de gemeente. U belt over grofvuil.", "Welcome to the council. You're calling about bulky rubbish."),
        l("Omroep", "U kunt uw grofvuil gratis laten ophalen. Maak eerst een afspraak op de website.", "You can have your bulky rubbish collected for free. First make an appointment on the website."),
        l("Omroep", "Zet uw spullen pas de avond voor de afspraak buiten, na acht uur.", "Put your things outside only the evening before the appointment, after eight."),
        l("Omroep", "Elektrische apparaten mag u ook naar de milieustraat brengen.", "You can also take electrical appliances to the recycling centre."),
      ],
      questions: [
        { prompt: "How much does collection cost?", options: ["Nothing", "Ten euros", "It depends"], answer: 0 },
        { prompt: "When can you put things outside?", options: ["The evening before, after eight", "Any time", "In the morning"], answer: 0 },
      ],
    },
    write: {
      situation: "Write a short message for your street's group chat: you're giving something away.",
      points: [
        { prompt: "Say what you're giving away", frame: "Ik geef … weg." },
        { prompt: "Describe it", frame: "Het is … ." },
        { prompt: "Say how to get it", frame: "Je kunt het … ophalen." },
      ],
      model: "Ik geef een kleine boekenkast weg. Het is een witte kast, nog in goede staat. Je kunt hem vanavond na zeven uur ophalen op nummer acht.",
      modelTranslation: "I'm giving away a small bookcase. It's a white bookcase, still in good condition. You can pick it up tonight after seven at number eight.",
    },
    words: {
      linda: { meaning: "Linda (a name)" },
      stoep: { meaning: "pavement" },
      grofvuil: { meaning: "bulky rubbish", closer: "grof (coarse, big) + vuil (rubbish)" },
      spullen: { meaning: "stuff, things" },
      stoepvondst: { meaning: "a find on the pavement", closer: "stoep + vondst (find)" },
      brandt: { meaning: "is on (a lamp); burns", base: "branden" },
      elektrische: { meaning: "electrical", base: "elektrisch" },
      apparaten: { meaning: "appliances, devices", base: "apparaat" },
      milieustraat: { meaning: "recycling centre", closer: "milieu (environment) + straat" },
      website: { meaning: "website" },
    },
  },

  "a2-gezondheid": {
    title: "De kraamzorg",
    titleTranslation: "Maternity care",
    text: [
      [
        s("Mariana heeft een dochtertje gekregen. Ze heet Lila.", "Mariana has had a little daughter. She's called Lila."),
        s("Mariana is niet in het ziekenhuis bevallen, maar thuis.", "Mariana didn't give birth in hospital, but at home."),
        s("De volgende dag komt er een kraamverzorgster. Ze komt een week lang, elke dag een paar uur.", "The next day a maternity nurse comes. She comes for a week, a few hours every day."),
        s("Ze helpt met de baby, ze controleert of moeder en kind gezond zijn, en ze zet zelfs koffie voor het bezoek.", "She helps with the baby, she checks that mother and child are healthy, and she even makes coffee for the visitors."),
        s("En het bezoek krijgt beschuit met muisjes: roze voor een meisje, blauw voor een jongen.", "And the visitors get rusks with aniseed sprinkles: pink for a girl, blue for a boy."),
      ],
    ],
    textTasks: [
      { kind: "choice", prompt: "What does the kraamverzorgster do?", options: ["Helps at home for a week after the birth", "Delivers the baby in hospital", "Cleans the house once"], answer: 0 },
      { kind: "truefalse", statement: "Voor een jongen eet je beschuit met roze muisjes.", translation: "For a boy you eat rusks with pink sprinkles.", answer: false },
      { kind: "choice", prompt: "Where was Lila born?", options: ["At home", "In hospital", "At the GP's"], answer: 0 },
    ],
    listening: {
      situation: "Mariana's sister leaves her a voice message.",
      lines: [
        l("Isabel", "Mariana, gefeliciteerd! Ik heb de foto's gezien. Wat een mooi meisje!", "Mariana, congratulations! I've seen the photos. What a beautiful girl!"),
        l("Isabel", "Ik kom zaterdag op kraamvisite, om drie uur.", "I'm coming to see the baby on Saturday, at three."),
        l("Isabel", "Ik blijf niet lang, beloofd. Je moet rusten!", "I won't stay long, promise. You need to rest!"),
        l("Isabel", "En ik neem de muisjes mee. Roze, natuurlijk!", "And I'll bring the sprinkles. Pink, of course!"),
      ],
      questions: [
        { prompt: "When is Isabel coming?", options: ["Saturday at three", "Sunday at three", "Saturday at two"], answer: 0 },
        { prompt: "Why won't she stay long?", options: ["Mariana needs to rest", "She has to work", "The baby is asleep"], answer: 0 },
      ],
    },
    write: {
      situation: "Write a short card to congratulate a friend on a new baby.",
      points: [
        { prompt: "Congratulate them", frame: "Gefeliciteerd met … !" },
        { prompt: "Say something nice", frame: "Wat … !" },
        { prompt: "Say when you'll visit", frame: "Ik kom … langs." },
      ],
      model: "Gefeliciteerd met jullie dochter! Wat een mooie naam, Lila. Ik kom volgende week langs met een cadeautje.",
      modelTranslation: "Congratulations on your daughter! What a beautiful name, Lila. I'll come round next week with a little present.",
    },
    words: {
      mariana: { meaning: "Mariana (a name)" },
      lila: { meaning: "Lila (a name)" },
      dochtertje: { meaning: "little daughter", base: "dochter" },
      bevallen: { meaning: "given birth (is bevallen = has given birth)", base: "bevallen" },
      verloskundige: { meaning: "midwife" },
      kraamverzorgster: { meaning: "maternity nurse (at home)", closer: "kraam (childbirth) + verzorgster (carer)" },
      controleert: { meaning: "checks", base: "controleren" },
      zelfs: { meaning: "even" },
      bezoek: { meaning: "visitors; visit" },
      beschuit: { meaning: "Dutch rusk (round, dry, crispy)" },
      muisjes: { meaning: "aniseed sprinkles ('little mice')", base: "muisje" },
      kraamvisite: { meaning: "visit to see a new baby" },
      beloofd: { meaning: "promised", base: "beloven" },
      rusten: { meaning: "to rest" },
      isabel: { meaning: "Isabel (a name)" },
    },
  },

  "a2-reizen": {
    title: "De stiltecoupé",
    titleTranslation: "The quiet carriage",
    text: [
      [
        s("Kofi zit in de trein van Utrecht naar Groningen. Hij belt zijn moeder in Ghana, lekker hard, want de verbinding is slecht.", "Kofi is on the train from Utrecht to Groningen. He's calling his mother in Ghana, nice and loud, because the connection is bad."),
        s("Een vrouw tegenover hem wijst naar een bordje boven het raam: Stilte.", "A woman opposite him points to a sign above the window: Silence."),
        s("Kofi zit in de stiltecoupé. Daar mag je niet bellen.", "Kofi is in the quiet carriage. You're not allowed to phone there."),
        s("Kofi zegt zachtjes sorry en loopt naar het balkon van de trein. Daar mag het wel.", "Kofi quietly says sorry and walks to the vestibule of the train. There it's allowed."),
      ],
    ],
    textTasks: [
      { kind: "choice", prompt: "Why does the woman point at the sign?", options: ["Kofi is phoning in the quiet carriage", "She wants the window open", "It's her seat"], answer: 0 },
      { kind: "truefalse", statement: "In de stiltecoupé mag je bellen als het kort is.", translation: "In the quiet carriage you may phone if it's short.", answer: false },
      { kind: "choice", prompt: "Where can Kofi phone?", options: ["In the vestibule", "In the quiet carriage, quietly", "Nowhere on the train"], answer: 0 },
    ],
    listening: {
      situation: "An announcement on Kofi's train.",
      lines: [
        l("Omroep", "Goedemiddag, dames en heren. Welkom in deze trein naar Groningen.", "Good afternoon, ladies and gentlemen. Welcome on this train to Groningen."),
        l("Omroep", "Het volgende station is Amersfoort.", "The next station is Amersfoort."),
        l("Omroep", "Vergeet niet uit te checken met uw OV-chipkaart of bankpas.", "Don't forget to check out with your public transport card or bank card."),
        l("Omroep", "In de eerste en de laatste coupé vindt u de stiltecoupé.", "You'll find the quiet carriage in the first and the last carriage."),
      ],
      questions: [
        { prompt: "What's the next station?", options: ["Amersfoort", "Groningen", "Utrecht"], answer: 0 },
        { prompt: "What must you not forget?", options: ["To check out with your card", "Your luggage", "To buy a ticket"], answer: 0 },
      ],
    },
    write: {
      situation: "Write a short tip for a friend coming to the Netherlands: how to travel by train.",
      points: [
        { prompt: "Say what card to use", frame: "Je kunt … gebruiken." },
        { prompt: "Say what you must not forget", frame: "Vergeet niet … ." },
        { prompt: "Mention the quiet carriage", frame: "In de stiltecoupé … ." },
      ],
      model: "Je kunt gewoon je bankpas gebruiken. Vergeet niet in te checken en uit te checken. In de stiltecoupé mag je niet bellen, dus pas op!",
      modelTranslation: "You can just use your bank card. Don't forget to check in and check out. In the quiet carriage you can't phone, so watch out!",
    },
    words: {
      stilte: { meaning: "silence" },
      kofi: { meaning: "Kofi (a Ghanaian name)" },
      verbinding: { meaning: "connection" },
      wijst: { meaning: "points", base: "wijzen" },
      bordje: { meaning: "sign", base: "bord" },
      stiltecoupé: { meaning: "quiet carriage", closer: "stilte (silence) + coupé (carriage)" },
      coupé: { meaning: "carriage, compartment" },
      kiezen: { meaning: "to choose" },
      zachtjes: { meaning: "quietly, softly" },
      balkon: { meaning: "vestibule (of a train); balcony" },
      amersfoort: { meaning: "Amersfoort (a city)" },
      ov: { meaning: "public transport (openbaar vervoer)" },
      chipkaart: { meaning: "chip card (OV-chipkaart = public transport card)" },
      bankpas: { meaning: "bank card" },
      uit: { meaning: "out (uitchecken = check out)" },
    },
  },

  "a2-media": {
    title: "Pagina 101",
    titleTranslation: "Page 101",
    text: [
      [
        s("Opa Wim leest het nieuws niet op zijn telefoon. Hij zet de televisie aan en drukt op de knop van Teletekst.", "Grandpa Wim doesn't read the news on his phone. He turns on the television and presses the Teletext button."),
        s("Op pagina honderdeen staat het belangrijkste nieuws, zegt hij altijd.", "Page 101 has the most important news, he always says."),
        s("Zijn kleindochter Noa lacht. Maar als haar wifi kapot is, kijkt zij ook op pagina honderdeen.", "His granddaughter Noa laughs. But when her wifi is broken, she looks at page 101 too."),
      ],
    ],
    textTasks: [
      { kind: "choice", prompt: "Where does Wim read the news?", options: ["On the TV, on Teletekst", "On his phone", "In the paper"], answer: 0 },
      { kind: "truefalse", statement: "Opa Wim leest het nieuws op zijn telefoon.", translation: "Grandpa Wim reads the news on his phone.", answer: false },
      { kind: "choice", prompt: "When does Noa use it?", options: ["When her wifi is broken", "Every morning", "Never"], answer: 0 },
    ],
    listening: {
      situation: "The start of a radio news bulletin.",
      lines: [
        l("Nieuwslezer", "Het is acht uur. Het nieuws.", "It's eight o'clock. The news."),
        l("Nieuwslezer", "In het noorden van het land is vannacht veel sneeuw gevallen.", "In the north of the country a lot of snow fell last night."),
        l("Nieuwslezer", "Op veel wegen staan files. Neem vandaag liever de trein.", "There are traffic jams on many roads. Better take the train today."),
        l("Nieuwslezer", "Vanmiddag wordt het droog, maar het blijft koud.", "This afternoon it'll be dry, but it stays cold."),
      ],
      questions: [
        { prompt: "What happened last night?", options: ["Snow fell in the north", "A storm in the south", "A train strike"], answer: 0 },
        { prompt: "What advice does the newsreader give?", options: ["Take the train", "Stay at home", "Drive slowly"], answer: 0 },
      ],
    },
    write: {
      situation: "Write how you follow the news, and how your parents or grandparents do.",
      points: [
        { prompt: "Say how you follow the news", frame: "Ik lees het nieuws … ." },
        { prompt: "Say how an older family member does", frame: "Mijn … ." },
        { prompt: "Say which you prefer and why", frame: "Ik vind … beter, want … ." },
      ],
      model: "Ik lees het nieuws meestal op mijn telefoon, in de trein. Mijn oma kijkt elke avond naar het journaal om acht uur. Ik vind de televisie eigenlijk beter, want dan kijk je samen.",
      modelTranslation: "I usually read the news on my phone, on the train. My grandma watches the eight o'clock news every evening. I actually think TV is better, because then you watch together.",
    },
    words: {
      wim: { meaning: "Wim (a name)" },
      drukt: { meaning: "presses", base: "drukken" },
      knop: { meaning: "button" },
      honderdeen: { meaning: "one hundred and one" },
      negentienhonderdtachtig: { meaning: "nineteen eighty" },
      teletekst: { meaning: "Teletext (text news on TV)" },
      bestaat: { meaning: "exists", base: "bestaan" },
      achtergrond: { meaning: "background" },
      belangrijkste: { meaning: "most important", base: "belangrijk" },
      verrassend: { meaning: "surprisingly" },
      genoeg: { meaning: "enough" },
      miljoen: { meaning: "million" },
      kleindochter: { meaning: "granddaughter" },
      noa: { meaning: "Noa (a name)" },
      wifi: { meaning: "wifi" },
      pagina: { meaning: "page" },
      gevallen: { meaning: "fallen", base: "vallen" },
      files: { meaning: "traffic jams", base: "file" },
      droog: { meaning: "dry" },
    },
  },

  "a2-samenleving": {
    title: "Burendag",
    titleTranslation: "Neighbours' Day",
    text: [
      [
        s("Zaterdag is het Burendag in de straat van Samir.", "On Saturday it's Neighbours' Day in Samir's street."),
        s("Dan maken de buren samen de speeltuin schoon en planten ze bloemen. Daarna is er een lange tafel op straat, en iedereen neemt eten mee.", "Then the neighbours clean up the playground together and plant flowers. Afterwards there's a long table in the street, and everyone brings food."),
        s("Samir woont er al drie jaar, maar veel buren kende hij nog niet. Nu weet hij hoe ze heten, wat ze doen, en wie er een ladder heeft.", "Samir has lived there for three years, but he didn't know many neighbours yet. Now he knows their names, what they do, and who has a ladder."),
        s("Sinds Burendag is er ook een buurtapp. Vandaag staat erin: Wie heeft er een boormachine? Drie mensen reageren binnen vijf minuten.", "Since Neighbours' Day there's also a neighbourhood chat. Today someone wrote: Who has a drill? Three people reply within five minutes."),
      ],
    ],
    textTasks: [
      { kind: "choice", prompt: "What do the neighbours do first?", options: ["Clean the playground and plant flowers", "Have a party", "Paint the houses"], answer: 0 },
      { kind: "truefalse", statement: "Samir kende al zijn buren al goed.", translation: "Samir already knew all his neighbours well.", answer: false },
      { kind: "choice", prompt: "What changed after Burendag?", options: ["Neighbours help each other through a chat group", "Samir moved", "The street got a new playground"], answer: 0 },
    ],
    listening: {
      situation: "A neighbour leaves Samir a voice message.",
      lines: [
        l("Annemiek", "Hoi Samir, met Annemiek van nummer zestien.", "Hi Samir, it's Annemiek from number sixteen."),
        l("Annemiek", "Bedankt voor de boormachine! Ik breng hem morgen terug.", "Thanks for the drill! I'll bring it back tomorrow."),
        l("Annemiek", "Wil je dan ook een stuk taart? Ik heb gisteren te veel gebakken.", "Would you like a piece of cake then too? I baked too much yesterday."),
        l("Annemiek", "Tot morgen!", "See you tomorrow!"),
      ],
      questions: [
        { prompt: "What did Annemiek borrow?", options: ["A drill", "A ladder", "A cake tin"], answer: 0 },
        { prompt: "What does she offer?", options: ["A piece of cake", "Coffee", "Money"], answer: 0 },
      ],
    },
    write: {
      situation: "Write a message for the neighbourhood chat: ask to borrow something.",
      points: [
        { prompt: "Greet everyone", frame: "Hoi buren, … !" },
        { prompt: "Ask for something", frame: "Heeft iemand … ?" },
        { prompt: "Say when you'll give it back", frame: "Ik breng het … terug." },
      ],
      model: "Hoi buren, ik heb een vraag! Heeft iemand een ladder voor zaterdag? Ik breng hem zondag terug, met een stuk taart.",
      modelTranslation: "Hi neighbours, I have a question! Does anyone have a ladder for Saturday? I'll bring it back on Sunday, with a piece of cake.",
    },
    words: {
      burendag: { meaning: "Neighbours' Day", closer: "buren (neighbours) + dag" },
      speeltuin: { meaning: "playground", closer: "speel (play) + tuin (garden)" },
      planten: { meaning: "to plant; plants" },
      samir: { meaning: "Samir (a name)" },
      kende: { meaning: "knew", base: "kennen" },
      ladder: { meaning: "ladder" },
      buurtapp: { meaning: "neighbourhood chat group", closer: "buurt (neighbourhood) + app" },
      boormachine: { meaning: "drill", closer: "boor (drill bit) + machine" },
      reageren: { meaning: "to reply, to react" },
      annemiek: { meaning: "Annemiek (a name)" },
      zestien: { meaning: "sixteen" },
      gebakken: { meaning: "baked", base: "bakken" },
    },
  },

  "a2-uitgaan": {
    title: "Een rondje",
    titleTranslation: "A round",
    text: [
      [
        s("Vrijdagavond zitten Ruben, Grace en Hiroshi in de kroeg. Ruben staat op en zegt: ik haal een rondje.", "On Friday evening Ruben, Grace and Hiroshi are sitting in the pub. Ruben stands up and says: I'll get a round."),
        s("Hij betaalt voor iedereen. Daarna haalt Grace het volgende rondje, en dan Hiroshi.", "He pays for everyone. Then Grace gets the next round, and then Hiroshi."),
        s("Maar als ze daarna samen gaan eten, is het anders. Dan betaalt iedereen zijn eigen eten, of iemand stuurt een Tikkie.", "But when they go and eat together afterwards, it's different. Then everyone pays for their own food, or someone sends a Tikkie."),
        s("Hiroshi vindt dat in het begin raar. In Japan betaalt vaak de oudste. Nu vindt hij het eigenlijk wel handig.", "At first Hiroshi finds that strange. In Japan the oldest person often pays. Now he actually finds it quite practical."),
      ],
    ],
    textTasks: [
      { kind: "choice", prompt: "How do they pay for drinks in the pub?", options: ["In rounds: each person pays one round", "Everyone pays for themselves", "The oldest pays"], answer: 0 },
      { kind: "truefalse", statement: "In het restaurant betaalt Ruben voor iedereen.", translation: "In the restaurant Ruben pays for everyone.", answer: false },
      { kind: "choice", prompt: "What's a Tikkie?", options: ["A payment request you send by phone", "A small beer", "A tip for the waiter"], answer: 0 },
    ],
    listening: {
      situation: "Grace leaves Hiroshi a voice message on Saturday.",
      lines: [
        l("Grace", "Hoi Hiroshi, met Grace!", "Hi Hiroshi, it's Grace!"),
        l("Grace", "Ik heb je net een Tikkie gestuurd voor het eten van gisteren: veertien euro vijftig.", "I've just sent you a Tikkie for yesterday's dinner: fourteen fifty."),
        l("Grace", "En volgende week gaan we naar het museum. Neem je je museumkaart mee?", "And next week we're going to the museum. Will you bring your museum card?"),
        l("Grace", "Dan is het gratis. Doei!", "Then it's free. Bye!"),
      ],
      questions: [
        { prompt: "How much is the Tikkie?", options: ["€14.50", "€40.50", "€4.50"], answer: 0 },
        { prompt: "Why bring the museum card?", options: ["Then the museum is free", "To show your age", "For the coffee"], answer: 0 },
      ],
    },
    write: {
      situation: "Explain to a Dutch friend how people pay when they go out in your country.",
      points: [
        { prompt: "Say how people pay for drinks", frame: "In mijn land … ." },
        { prompt: "Say how people pay for a meal", frame: "In een restaurant … ." },
        { prompt: "Say what you think of the Dutch way", frame: "Ik vind dat … ." },
      ],
      model: "In mijn land betaalt vaak één persoon voor iedereen, en de volgende keer betaalt een ander. In een restaurant betaalt ook één persoon. Ik vind dat in Nederland eerlijk, maar een beetje koud.",
      modelTranslation: "In my country one person often pays for everyone, and next time someone else pays. In a restaurant one person pays too. I find the Dutch way fair, but a bit cold.",
    },
    words: {
      ruben: { meaning: "Ruben (a name)" },
      grace: { meaning: "Grace (a name)" },
      hiroshi: { meaning: "Hiroshi (a name)" },
      kroeg: { meaning: "pub, bar" },
      rondje: { meaning: "a round (of drinks)", base: "ronde" },
      eigen: { meaning: "own" },
      tikkie: { meaning: "Tikkie (a payment request app)" },
      begin: { meaning: "beginning (in het begin = at first)" },
      oudste: { meaning: "oldest", base: "oud" },
      japan: { meaning: "Japan" },
      museumkaart: { meaning: "museum card (free entry to most Dutch museums for a year)" },
      gestuurd: { meaning: "sent", base: "sturen" },
      doei: { meaning: "bye (casual)" },
    },
  },

  "a2-koken": {
    title: "Gourmetten",
    titleTranslation: "Gourmetten",
    text: [
      [
        s("Op eerste kerstdag staat er bij de familie van Pieter een vreemd apparaat op tafel: een gourmetstel.", "On Christmas Day at Pieter's family there's a strange appliance on the table: a gourmet set."),
        s("Het is een soort kleine grill met pannetjes. Iedereen bakt zijn eigen stukjes vlees, groente en ei, aan tafel.", "It's a kind of small grill with little pans. Everyone fries their own pieces of meat, vegetables and egg, at the table."),
        s("Het duurt uren, want je bakt steeds een klein beetje.", "It takes hours, because you only fry a little at a time."),
        s("Zainab, de vriendin van Pieter, is voor het eerst bij zijn familie. Na drie uur zegt ze: dit is geen eten, dit is een spel!", "Zainab, Pieter's girlfriend, is with his family for the first time. After three hours she says: this isn't a meal, it's a game!"),
      ],
    ],
    textTasks: [
      { kind: "choice", prompt: "What is gourmetten?", options: ["Frying small pieces of food yourself at the table", "A Christmas cake", "A restaurant meal"], answer: 0 },
      { kind: "truefalse", statement: "Gourmetten gaat heel snel.", translation: "Gourmetten is very quick.", answer: false },
      { kind: "choice", prompt: "What does Zainab mean: \"dit is een spel\"?", options: ["It's slow and fun, more like a game than a meal", "She doesn't like it", "She wants to play cards"], answer: 0 },
    ],
    listening: {
      situation: "Pieter's mother calls him before Christmas.",
      lines: [
        l("Moeder", "Pieter, met mama. Komt Zainab ook met kerst?", "Pieter, it's Mum. Is Zainab coming at Christmas too?"),
        l("Moeder", "Eet ze vlees? Ik koop vlees voor het gourmetten.", "Does she eat meat? I'm buying meat for the gourmetten."),
        l("Moeder", "Als ze geen varkensvlees eet, koop ik kip en vis.", "If she doesn't eat pork, I'll buy chicken and fish."),
        l("Moeder", "Bel me even terug, schat!", "Call me back, love!"),
      ],
      questions: [
        { prompt: "Why does Pieter's mum call?", options: ["To ask what Zainab eats", "To cancel Christmas", "To ask for a recipe"], answer: 0 },
        { prompt: "What will she buy if Zainab doesn't eat pork?", options: ["Chicken and fish", "Only vegetables", "Beef"], answer: 0 },
      ],
    },
    write: {
      situation: "Pieter answers his mother. Write his message.",
      points: [
        { prompt: "Say Zainab is coming", frame: "Ja, Zainab … ." },
        { prompt: "Say what she eats or doesn't eat", frame: "Ze eet geen … , maar wel … ." },
        { prompt: "Offer to bring something", frame: "Zullen wij … meenemen?" },
      ],
      model: "Ja, Zainab komt ook! Ze eet geen varkensvlees, maar wel kip en vis. Zullen wij het toetje meenemen?",
      modelTranslation: "Yes, Zainab's coming too! She doesn't eat pork, but she does eat chicken and fish. Shall we bring the dessert?",
    },
    words: {
      kerstdag: { meaning: "Christmas Day (eerste kerstdag = 25 Dec, tweede = 26 Dec)" },
      pieter: { meaning: "Pieter (a name)" },
      vreemd: { meaning: "strange" },
      apparaat: { meaning: "appliance, device" },
      gourmetstel: { meaning: "gourmet set (a table grill with little pans)" },
      grill: { meaning: "grill" },
      pannetjes: { meaning: "little pans", base: "pan" },
      gourmetten: { meaning: "cooking little portions at the table on a gourmet set" },
      populair: { meaning: "popular" },
      zainab: { meaning: "Zainab (a name)" },
      spel: { meaning: "game" },
      varkensvlees: { meaning: "pork", closer: "varken (pig) + vlees (meat)" },
      schat: { meaning: "darling, love (lit. treasure)" },
    },
  },

  "a2-natuur": {
    title: "De Elfstedentocht",
    titleTranslation: "The Eleven Cities Tour",
    text: [
      [
        s("Elke winter vraagt Nederland zich hetzelfde af: komt er dit jaar een Elfstedentocht?", "Every winter the Netherlands asks the same question: will there be an Eleven Cities Tour this year?"),
        s("Opa Jelle heeft hem in negentienhonderdzevenennegentig zelf geschaatst: tweehonderd kilometer, op natuurijs.", "Grandpa Jelle skated it himself in 1997: two hundred kilometres, on natural ice."),
        s("Sindsdien is het nooit meer koud genoeg geweest.", "Since then it has never been cold enough again."),
        s("Toch staan zijn schaatsen altijd klaar. Je weet maar nooit, zegt hij elke winter.", "Even so, his skates are always ready. You never know, he says every winter."),
      ],
    ],
    textTasks: [
      { kind: "truefalse", statement: "De laatste Elfstedentocht was vorig jaar.", translation: "The last Eleven Cities Tour was last year.", answer: false },
      { kind: "choice", prompt: "Why hasn't there been one since 1997?", options: ["It has never been cold enough", "It's forbidden", "Nobody wants to skate"], answer: 0 },
      { kind: "choice", prompt: "Why does Jelle keep his skates ready?", options: ["Maybe one winter it will be cold enough", "He skates every week", "He sells them"], answer: 0 },
    ],
    listening: {
      situation: "The weather forecast on a cold January morning.",
      lines: [
        l("Weervrouw", "Goedemorgen! Het heeft vannacht flink gevroren: min acht graden in Friesland.", "Good morning! It froze hard last night: minus eight in Friesland."),
        l("Weervrouw", "De komende dagen blijft het koud.", "The next few days it'll stay cold."),
        l("Weervrouw", "Op sloten en kleine meren ligt al ijs, maar het is nog niet dik genoeg.", "There's ice on ditches and small lakes already, but it isn't thick enough yet."),
        l("Weervrouw", "Ga dus nog niet schaatsen!", "So don't go skating yet!"),
      ],
      questions: [
        { prompt: "How cold was it in Friesland?", options: ["Minus eight", "Minus eighteen", "Plus eight"], answer: 0 },
        { prompt: "What's the advice?", options: ["Don't go skating yet", "Go skating now", "Stay at home all week"], answer: 0 },
      ],
    },
    write: {
      situation: "Write about the weather or a nature tradition in your country.",
      points: [
        { prompt: "Say what the winters or summers are like", frame: "In mijn land … ." },
        { prompt: "Describe a tradition linked to the weather", frame: "Als het … , dan … ." },
        { prompt: "Say if you've done it", frame: "Ik heb … ." },
      ],
      model: "In mijn land zijn de zomers heel heet. Als het in augustus heel warm is, dan gaat bijna iedereen naar de zee. Ik ben vorig jaar twee weken aan zee geweest.",
      modelTranslation: "In my country summers are very hot. When it's very warm in August, almost everyone goes to the sea. Last year I spent two weeks by the sea.",
    },
    words: {
      geschaatst: { meaning: "skated", base: "schaatsen" },
      elfstedentocht: { meaning: "Eleven Cities Tour", closer: "elf (eleven) + steden (cities) + tocht (tour)" },
      schaatstocht: { meaning: "skating tour" },
      friesland: { meaning: "Friesland (a province in the north)" },
      natuurijs: { meaning: "natural ice", closer: "natuur + ijs" },
      ijs: { meaning: "ice" },
      minstens: { meaning: "at least" },
      dik: { meaning: "thick" },
      centimeter: { meaning: "centimetre" },
      tweehonderd: { meaning: "two hundred" },
      negentienhonderdzevenennegentig: { meaning: "nineteen ninety-seven" },
      tocht: { meaning: "tour, trip" },
      sindsdien: { meaning: "since then" },
      friezen: { meaning: "Frisians", base: "Fries" },
      schaatsen: { meaning: "skates; to skate" },
      jelle: { meaning: "Jelle (a Frisian name)" },
      flink: { meaning: "hard, a lot" },
      gevroren: { meaning: "frozen", base: "vriezen" },
      komende: { meaning: "coming, next", base: "komend" },
      sloten: { meaning: "ditches", base: "sloot" },
      meren: { meaning: "lakes", base: "meer" },
      min: { meaning: "minus" },
    },
  },
};
