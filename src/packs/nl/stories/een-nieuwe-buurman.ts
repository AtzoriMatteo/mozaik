import type { Checkpoint, ListeningItem, ListeningLine, ReadingText, Sentence, Story, WordHelp } from "@/core/content";
import type { WritingTask } from "@/core/writing";

const s = (text: string, translation: string): Sentence => ({ text, translation });
const l = (speaker: string, text: string, translation: string): ListeningLine => ({ speaker, text, translation });

/**
 * A1 unit 6 as a story: Kwame from Ghana rents the attic room of Mevrouw De
 * Vries, at number fourteen, next door to Luca, Noor and Bram.
 */
export const eenNieuweBuurman: Story = {
  id: "een-nieuwe-buurman",
  title: "Een nieuwe buurman",
  titleTranslation: "A new neighbour",
  intro:
    "Kwame from Ghana is new in Leiden and needs a room. Mevrouw De Vries has one, up a very steep staircase. One week: the room, moving day, the way to the town hall, and a video call home.",
};

const storyWords: Record<string, WordHelp> = {
  kwame: { meaning: "Kwame (a Ghanaian name)" },
  ghana: { meaning: "Ghana" },
  accra: { meaning: "Accra (the capital of Ghana)" },
  advertentie: { meaning: "advert, ad" },
  zolderkamer: { meaning: "attic room", closer: "zolder (attic) + kamer (room)" },
  zolder: { meaning: "attic" },
  vierkante: { meaning: "square (vierkante meter = square metre)", base: "vierkant" },
  vierhonderdvijftig: { meaning: "four hundred and fifty" },
  huisdieren: { meaning: "pets", base: "huisdier", closer: "huis (house) + dier (animal)" },
  huisdier: { meaning: "pet" },
  roken: { meaning: "to smoke" },
  rookt: { meaning: "smoke(s)", base: "roken" },
  steil: { meaning: "steep" },
  verdieping: { meaning: "floor, storey (eerste verdieping = first floor)" },
  dak: { meaning: "roof" },
  pas: { meaning: "pas op! = watch out!", base: "passen" },
  verhuist: { meaning: "moves house", base: "verhuizen" },
  leent: { meaning: "lends; borrows", base: "lenen" },
  bakfiets: { meaning: "cargo bike", closer: "bak (box) + fiets (bike)", local: "Dutch parents carry kids in them; also great for moving" },
  dozen: { meaning: "boxes", base: "doos" },
  doos: { meaning: "box" },
  leraar: { meaning: "teacher (a man)" },
  leraren: { meaning: "teachers", base: "leraar" },
  taart: { meaning: "cake, pie" },
  welkom: { meaning: "welcome" },
  stadhuis: { meaning: "town hall", closer: "stad (town) + huis (house)" },
  doorgeven: { meaning: "to pass on, to give (your details)" },
  plein: { meaning: "square (in a town)" },
  rechterkant: { meaning: "right-hand side", closer: "rechter (right) + kant (side)" },
  toren: { meaning: "tower" },
  twijfelt: { meaning: "hesitates, isn't sure", base: "twijfelen" },
  bruggen: { meaning: "bridges", base: "brug" },
  precies: { meaning: "exactly" },
  daarboven: { meaning: "above that, up there", closer: "daar (there) + boven (above)" },
  bomen: { meaning: "trees", base: "boom" },
  steile: { meaning: "steep", base: "steil" },
  huren: { meaning: "to rent" },
  vest: { meaning: "Vest (in a street name)" },
  dame: { meaning: "lady" },
  bakt: { meaning: "bakes", base: "bakken" },
  alleen: { meaning: "alone; only" },
  laat: { meaning: "let; laat ... zien = show", base: "laten" },
  ruth: { meaning: "Ruth (a name)" },
  binnen: { meaning: "inside" },
  handig: { meaning: "handy, practical" },
  centrum: { meaning: "centre (of a town)" },
  overal: { meaning: "everywhere" },
  grachten: { meaning: "canals", base: "gracht" },
  langs: { meaning: "along, past" },
  mam: { meaning: "mum" },
};

const story = { level: "A1" as const, words: storyWords };

export const buurmanTexts: ReadingText[] = [
  {
    ...story,
    id: "buurman-1-kamer-te-huur",
    title: "Kamer te huur",
    titleTranslation: "Room for rent",
    grammar: ["plurals", "adjective-e", "prepositions", "er-is"],
    paragraphs: [
      [
        s("Kwame komt uit Ghana. Hij is nieuw in Leiden en hij zoekt een kamer.", "Kwame is from Ghana. He's new in Leiden and he's looking for a room."),
        s("Op het raam van de bakker hangt een advertentie.", "In the baker's window there's an advert."),
        s("Kamer te huur, Oude Vest 14. Een lichte zolderkamer van twaalf vierkante meter, met een groot raam.", "Room for rent, Oude Vest 14. A bright attic room of twelve square metres, with a big window."),
        s("Huur: vierhonderdvijftig euro per maand, met gas, water en licht. Geen huisdieren, niet roken.", "Rent: four hundred and fifty euros a month, with gas, water and electricity. No pets, no smoking."),
        s("Kwame belt meteen. Hij mag om vier uur komen kijken.", "Kwame calls straight away. He can come and look at four."),
      ],
      [
        s("Het huis van mevrouw De Vries is hoog en smal, zoals veel huizen in Leiden.", "Mrs De Vries's house is tall and narrow, like many houses in Leiden."),
        s("Beneden is de woonkamer. Er staat een grote bank voor het raam, en er is een oude tafel met vier stoelen.", "Downstairs is the living room. There's a big sofa in front of the window, and there's an old table with four chairs."),
        s("Naast de woonkamer is de keuken.", "Next to the living room is the kitchen."),
        s("De trap naar boven is heel steil. \"Pas op!\" zegt mevrouw De Vries.", "The stairs up are very steep. \"Watch out!\" says Mrs De Vries."),
        s("Op de eerste verdieping zijn twee slaapkamers en een badkamer. De kamer van Kwame is daarboven, onder het dak.", "On the first floor there are two bedrooms and a bathroom. Kwame's room is above that, under the roof."),
      ],
      [
        s("De kamer is klein, maar licht. Uit het raam ziet Kwame een park met hoge bomen.", "The room is small, but bright. From the window Kwame sees a park with tall trees."),
        s("Het huis ligt in het centrum, dichtbij het station en de universiteit. Dat is handig.", "The house is in the centre, near the station and the university. That's handy."),
        s("\"Heeft u een huisdier?\" vraagt mevrouw De Vries. \"Nee, mevrouw.\" \"Rookt u?\" \"Nee, ook niet.\"", "\"Do you have a pet?\" Mrs De Vries asks. \"No, madam.\" \"Do you smoke?\" \"No, I don't either.\""),
        s("\"Mooi. Dan is de kamer voor u!\"", "\"Good. Then the room is yours!\""),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "Why can Kwame rent the room?", options: ["He has no pets and doesn't smoke", "He offers more money", "He knows Luca"], answer: 0 },
      { kind: "truefalse", statement: "De kamer van Kwame is beneden, naast de keuken.", translation: "Kwame's room is downstairs, next to the kitchen.", answer: false },
      { kind: "choice", prompt: "Why does Mrs De Vries say \"Pas op!\"?", options: ["The stairs are very steep", "The dog bites", "The floor is wet"], answer: 0 },
      { kind: "choice", prompt: "What does Kwame see from his window?", options: ["A park with tall trees", "The station", "A canal with boats"], answer: 0 },
    ],
  },
  {
    ...story,
    id: "buurman-2-verhuizen",
    title: "Verhuizen",
    titleTranslation: "Moving house",
    grammar: ["prepositions", "negation", "plurals", "questions"],
    paragraphs: [
      [
        s("Zaterdag verhuist Kwame.", "On Saturday Kwame moves house."),
        s("Hij heeft geen auto, en hij kan ook niet rijden.", "He hasn't got a car, and he can't drive either."),
        s("Ruth van de bakker leent hem haar bakfiets, en Luca, Noor en Bram helpen ook. Ze wonen naast mevrouw De Vries en ze huren hun huis ook.", "Ruth from the bakery lends him her cargo bike, and Luca, Noor and Bram help too. They live next door to Mrs De Vries, and they rent their house too."),
        s("Ze fietsen drie keer van zijn oude adres naar de Oude Vest. Het is niet ver: tien minuten.", "They cycle three times from his old address to the Oude Vest. It isn't far: ten minutes."),
      ],
      [
        s("Alles moet de steile trap op: een bed, een bureau, een kast, een lamp en twaalf dozen.", "Everything has to go up the steep stairs: a bed, a desk, a wardrobe, a lamp and twelve boxes."),
        s("\"Wat zit er in deze doos?\" vraagt Bram. \"Boeken!\" zegt Kwame.", "\"What's in this box?\" Bram asks. \"Books!\" says Kwame."),
        s("\"Zo veel boeken?\" \"Ik ben leraar. Leraren hebben altijd veel boeken.\"", "\"So many books?\" \"I'm a teacher. Teachers always have lots of books.\""),
      ],
      [
        s("Om vier uur is alles boven.", "At four everything is upstairs."),
        s("Het bed staat onder het raam, en de kast staat tussen de deur en het bureau.", "The bed is under the window, and the wardrobe is between the door and the desk."),
        s("Op het bureau staan een lamp en zijn computer. Onder het bed liggen zijn schoenen.", "On the desk there's a lamp and his computer. Under the bed are his shoes."),
        s("Mevrouw De Vries komt boven met koffie en een grote taart.", "Mrs De Vries comes up with coffee and a big cake."),
        s("\"Welkom in de straat, Kwame!\"", "\"Welcome to the street, Kwame!\""),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "How do they move Kwame's things?", options: ["By bike, with Ruth's cargo bike", "In Kwame's car", "By bus"], answer: 0 },
      { kind: "truefalse", statement: "Het oude adres van Kwame is ver van de Oude Vest.", translation: "Kwame's old address is far from the Oude Vest.", answer: false },
      { kind: "choice", prompt: "Why does Kwame have so many books?", options: ["He's a teacher", "He's a student", "He works in a bookshop"], answer: 0 },
      { kind: "choice", prompt: "Where is the wardrobe?", options: ["Between the door and the desk", "Under the window", "Next to the bed"], answer: 0 },
    ],
  },
  {
    ...story,
    id: "buurman-3-de-weg-vragen",
    title: "De weg vragen",
    titleTranslation: "Asking the way",
    grammar: ["imperative", "prepositions", "modal-verbs"],
    paragraphs: [
      [
        s("Maandag moet Kwame naar het stadhuis. Wie nieuw is in Leiden, moet zijn adres doorgeven.", "On Monday Kwame has to go to the town hall. Anyone new in Leiden has to register their address."),
        s("Hij heeft om tien uur een afspraak. Maar waar is het stadhuis?", "He has an appointment at ten. But where is the town hall?"),
        s("Voor de bakkerij staat Ruth. \"Het stadhuis? Dat is niet ver. Ga hier rechtdoor tot de brug. Ga dan rechts, langs het park.\"", "Ruth is standing outside the bakery. \"The town hall? It isn't far. Go straight on here to the bridge. Then go right, past the park.\""),
        s("\"En dan?\" \"Dan loop je naar het plein. Het stadhuis is aan de rechterkant, met een hoge toren.\"", "\"And then?\" \"Then you walk to the square. The town hall is on the right-hand side, with a tall tower.\""),
      ],
      [
        s("Kwame loopt rechtdoor, maar bij de gracht twijfelt hij.", "Kwame walks straight on, but at the canal he isn't sure."),
        s("Is dit de goede brug? Er zijn zo veel bruggen in Leiden!", "Is this the right bridge? There are so many bridges in Leiden!"),
        s("Hij vraagt het aan een meisje op een fiets.", "He asks a girl on a bike."),
        s("\"Het stadhuis? Ja, deze brug. Ga rechts, dan ziet u de toren al.\"", "\"The town hall? Yes, this bridge. Go right, then you'll already see the tower.\""),
      ],
      [
        s("Om vijf voor tien staat Kwame voor het stadhuis. Precies op tijd!", "At five to ten Kwame is standing outside the town hall. Exactly on time!"),
        s("Binnen vraagt een man: \"Wat is uw nieuwe adres?\"", "Inside a man asks: \"What's your new address?\""),
        s("\"Oude Vest 14. Ik woon op zolder, bij mevrouw De Vries.\"", "\"Oude Vest 14. I live in the attic, at Mrs De Vries's.\""),
        s("De man zet het adres in de computer. Klaar! Nu woont Kwame echt in Leiden.", "The man puts the address into the computer. Done! Now Kwame really lives in Leiden."),
      ],
    ],
    tasks: [
      { kind: "order", prompt: "Put Ruth's directions in order.", items: ["Straight on to the bridge", "Right, past the park", "Walk to the square", "The town hall is on the right"] },
      { kind: "choice", prompt: "Why does Kwame stop at the canal?", options: ["He isn't sure it's the right bridge", "He's tired", "The bridge is closed"], answer: 0 },
      { kind: "truefalse", statement: "Kwame is te laat bij het stadhuis.", translation: "Kwame is late at the town hall.", answer: false },
      { kind: "choice", prompt: "How does Kwame know the town hall from the outside?", options: ["It has a tall tower", "It's next to the bakery", "It's a big red house"], answer: 0 },
    ],
  },
  {
    ...story,
    id: "buurman-4-videobellen",
    title: "Bellen met Accra",
    titleTranslation: "Calling Accra",
    grammar: ["adjective-e", "plurals", "prepositions", "separable-verbs"],
    paragraphs: [
      [
        s("Zondagavond belt Kwame met zijn moeder in Accra.", "On Sunday evening Kwame calls his mother in Accra."),
        s("\"Laat je kamer eens zien!\" zegt ze.", "\"Show me your room!\" she says."),
        s("Kwame loopt met zijn telefoon door de kamer. \"Kijk: hier is mijn bed, onder het raam. Naast de deur staat een oude kast.\"", "Kwame walks round the room with his phone. \"Look: here's my bed, under the window. Next to the door there's an old wardrobe.\""),
        s("\"Een kleine kamer\", zegt zijn moeder. \"Is de huur duur?\"", "\"A small room,\" says his mother. \"Is the rent expensive?\""),
        s("\"Vierhonderdvijftig euro per maand. Voor Leiden is dat niet duur.\"", "\"Four hundred and fifty euros a month. For Leiden that isn't expensive.\""),
      ],
      [
        s("Dan laat hij de straat zien, door het raam.", "Then he shows her the street, through the window."),
        s("\"Alle huizen zijn hoog en smal, en overal zijn grachten en bruggen.\"", "\"All the houses are tall and narrow, and everywhere there are canals and bridges.\""),
        s("\"En de buren?\" \"Heel aardig. Tegenover woont Ruth van de bakker. Naast mij wonen drie studenten: Luca, Noor en Bram.\"", "\"And the neighbours?\" \"Very nice. Across the street lives Ruth from the bakery. Next door there are three students: Luca, Noor and Bram.\""),
        s("\"En ik huur een kamer bij een oude dame. Ze bakt elke zondag een taart.\"", "\"And I rent a room from an old lady. She bakes a cake every Sunday.\""),
      ],
      [
        s("Zijn moeder lacht. \"Dan ben je daar niet alleen.\"", "His mother laughs. \"Then you're not alone there.\""),
        s("\"Nee, mam. Hier ben ik niet alleen.\"", "\"No, Mum. I'm not alone here.\""),
      ],
    ],
    tasks: [
      { kind: "choice", prompt: "What does \"Laat je kamer eens zien!\" mean?", options: ["Show me your room!", "Leave your room!", "Clean your room!"], answer: 0 },
      { kind: "truefalse", statement: "Kwame vindt de huur duur.", translation: "Kwame thinks the rent is expensive.", answer: false },
      { kind: "choice", prompt: "Who lives next door to Kwame?", options: ["Luca, Noor and Bram", "Ruth", "Nobody"], answer: 0 },
      { kind: "choice", prompt: "Why is his mother happy at the end?", options: ["Kwame has kind people around him", "The room is big", "The rent is cheap"], answer: 0 },
    ],
  },
];

/** Listening from the story: Kwame phones about the advert. */
export const buurmanListening: ListeningItem = {
  id: "kwame-belt-over-de-kamer",
  level: "A1",
  title: "Kwame belt over de kamer",
  titleTranslation: "Kwame phones about the room",
  kind: "dialogue",
  situation: "Kwame has just seen the advert in the baker's window and calls the number.",
  grammar: ["questions", "time-numbers", "modal-verbs"],
  lines: [
    l("Mevrouw De Vries", "Met De Vries.", "De Vries speaking."),
    l("Kwame", "Goedemiddag, mevrouw. Ik bel over de kamer. Is hij nog vrij?", "Good afternoon, madam. I'm calling about the room. Is it still free?"),
    l("Mevrouw De Vries", "Ja, hij is nog vrij. Hoe heet u?", "Yes, it's still free. What's your name?"),
    l("Kwame", "Kwame Mensah. Ik ben leraar, en ik werk vanaf maandag in Leiden.", "Kwame Mensah. I'm a teacher, and I start work in Leiden on Monday."),
    l("Mevrouw De Vries", "Wilt u vandaag komen kijken? Om vier uur?", "Would you like to come and look today? At four?"),
    l("Kwame", "Graag. Is het ver van het station?", "Yes please. Is it far from the station?"),
    l("Mevrouw De Vries", "Nee, vijf minuten lopen. Tot straks!", "No, five minutes' walk. See you later!"),
  ],
  gist: { prompt: "Why does Kwame call?", options: ["To ask about the room", "To ask the way", "To order a cake"], answer: 0 },
  details: [
    { prompt: "What's Kwame's job?", options: ["Teacher", "Student", "Baker"], answer: 0 },
    { prompt: "How far is the house from the station?", options: ["Five minutes on foot", "Ten minutes by bike", "Fifteen minutes on foot"], answer: 0 },
  ],
  tasks: [
    { kind: "truefalse", statement: "De kamer is al weg.", translation: "The room is already gone.", answer: false },
    { kind: "heard", line: 3, options: ["leraar", "lezer", "later"], answer: 0 },
    { kind: "gaps", line: 4, words: ["kijken", "vier"] },
  ],
  dictation: [2, 6],
  words: {
    mensah: { meaning: "Mensah (a Ghanaian surname)" },
    kwame: { meaning: "Kwame (a name)" },
  },
};

/** Writing that joins the story: answer an advert of your own. */
export const buurmanWriting: WritingTask = {
  id: "w-reactie-op-de-advertentie",
  level: "A1",
  title: "Een kamer bij mevrouw De Vries",
  titleTranslation: "A room at Mrs De Vries's",
  form: "message",
  situation: "Mrs De Vries has a second room for rent. Write her a message about it.",
  points: [
    { prompt: "Greet her and say why you're writing", frame: "Beste mevrouw De Vries, ik schrijf over de … .", cues: ["kamer", "advertentie"] },
    { prompt: "Say who you are", frame: "Ik heet … en ik kom uit … .", cues: ["heet", "kom"] },
    { prompt: "Say what you do", frame: "Ik ben … .", cues: ["ben", "werk", "student"] },
    { prompt: "Answer the advert about pets", frame: "Ik heb geen … .", cues: ["geen", "huisdieren"] },
    { prompt: "Ask a question about the room", frame: "Is de kamer … ?", cues: ["kamer", "groot", "licht", "huur"] },
    { prompt: "Say when you can come and look", frame: "Ik kan op … om … uur komen kijken.", cues: ["kan", "kijken", "uur"] },
  ],
  model:
    "Beste mevrouw De Vries, ik schrijf over de kamer in de advertentie bij de bakker. Ik heet Sara en ik kom uit Spanje. Ik ben student aan de universiteit van Leiden. Ik heb geen huisdieren, en ik ben een rustige buurvrouw. Is de kamer groot, en is hij licht? Ik kan op woensdag om vier uur komen kijken, na mijn les. Met vriendelijke groet, Sara",
};

/** The end of the unit: a note on Kwame's door. */
export const buurmanCheckpoint: Checkpoint = {
  title: "Een briefje op de deur",
  titleTranslation: "A note on the door",
  text: [
    [
      s("Dinsdag hangt er een briefje op de deur van Kwame.", "On Tuesday there's a note on Kwame's door."),
      s("\"Beste Kwame, het gas en het licht zijn voor de kamer. De wifi ook! Het wachtwoord staat op de koelkast in de keuken. De vuilnisbak: de grijze op maandag, de groene op donderdag. Zaterdag om drie uur is er koffie met taart bij mij beneden. Groetjes, mevrouw De Vries\"", "\"Dear Kwame, the gas and electricity are included with the room. The wifi too! The password is on the fridge in the kitchen. The bins: the grey one on Monday, the green one on Thursday. On Saturday at three there's coffee and cake at mine downstairs. Best wishes, Mrs De Vries\""),
    ],
  ],
  textTasks: [
    { kind: "truefalse", statement: "Kwame moet de wifi nog betalen.", translation: "Kwame still has to pay for the wifi.", answer: false },
    { kind: "choice", prompt: "Where can Kwame find the wifi password?", options: ["On the fridge in the kitchen", "On his door", "At the bakery"], answer: 0 },
    { kind: "choice", prompt: "What happens on Saturday at three?", options: ["Coffee and cake downstairs", "The bin goes out", "Kwame moves"], answer: 0 },
  ],
  listening: {
    situation: "Ruth leaves Kwame a voice message.",
    lines: [
      l("Ruth", "Hoi Kwame, met Ruth van de bakker.", "Hi Kwame, it's Ruth from the bakery."),
      l("Ruth", "Mijn bakfiets staat nog bij jou voor de deur, toch?", "My cargo bike is still outside your door, isn't it?"),
      l("Ruth", "Ik heb hem morgen nodig, om zeven uur 's ochtends.", "I need it tomorrow, at seven in the morning."),
      l("Ruth", "Kun je hem vanavond naar nummer elf brengen?", "Can you bring it to number eleven this evening?"),
      l("Ruth", "Dank je wel! Tot straks!", "Thanks! See you later!"),
    ],
    questions: [
      { prompt: "What does Ruth need?", options: ["Her cargo bike", "Her keys", "A cake"], answer: 0 },
      { prompt: "Where does Kwame have to bring it?", options: ["To number eleven", "To the bakery", "To number fourteen"], answer: 0 },
    ],
  },
  write: {
    situation: "Write a short note back to Mrs De Vries.",
    points: [
      { prompt: "Thank her for something", frame: "Dank u wel voor … !" },
      { prompt: "Say if you're coming on Saturday", frame: "Zaterdag … ." },
      { prompt: "Ask her a question about the house", frame: "… ?" },
    ],
    model: "Dank u wel voor het briefje en voor de wifi! Zaterdag kom ik graag. Waar staat de vuilnisbak?",
    modelTranslation: "Thank you for the note and for the wifi! I'd love to come on Saturday. Where is the bin?",
  },
  words: {
    kwame: { meaning: "Kwame (a name)" },
    wifi: { meaning: "wifi" },
    briefje: { meaning: "a note", base: "brief" },
    wachtwoord: { meaning: "password", closer: "wacht (guard) + woord (word)" },
    vuilnisbak: { meaning: "rubbish bin", closer: "vuilnis (rubbish) + bak (bin)" },
    taart: { meaning: "cake" },
    ruth: { meaning: "Ruth (a name)" },
    bakfiets: { meaning: "cargo bike" },
    brengen: { meaning: "to bring, to take" },
    elf: { meaning: "eleven" },
  },
};
