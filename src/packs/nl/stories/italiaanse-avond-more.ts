import type { Checkpoint, ListeningItem, ListeningLine } from "@/core/content";
import type { WritingTask } from "@/core/writing";

const l = (speaker: string | undefined, text: string, translation: string): ListeningLine => (speaker ? { speaker, text, translation } : { text, translation });

/**
 * Unit 4's listening: scenes from the same week as the story, heard before
 * they're read. In story order: Monday, Tuesday, Tuesday, Saturday.
 */
export const avondListening: ListeningItem[] = [
  {
    id: "voicemail-van-fatima",
    level: "A1",
    title: "Een voicemail van Fatima",
    titleTranslation: "A voicemail from Fatima",
    kind: "voicemail",
    situation: "Monday evening. Fatima answers Luca's invitation with a voice message.",
    lines: [
      l("Fatima", "Hoi Luca, met Fatima.", "Hi Luca, it's Fatima."),
      l("Fatima", "Dank je wel voor je bericht!", "Thanks for your message!"),
      l("Fatima", "Zaterdag kan ik, hoor. Ik kom graag.", "I can make Saturday. I'd love to come."),
      l("Fatima", "Hoe laat is het eten? Om zes uur of om half zeven?", "What time is dinner? At six or half past six?"),
      l("Fatima", "Zaterdagochtend heb ik ook tijd.", "I'm free on Saturday morning too."),
      l("Fatima", "Ik kan met je mee naar de markt, voor de boodschappen.", "I can come with you to the market, for the shopping."),
      l("Fatima", "Bel me even terug, oké?", "Call me back, okay?"),
      l("Fatima", "Tot zaterdag! Doei!", "See you Saturday! Bye!"),
    ],
    gist: { prompt: "Why does Fatima call?", options: ["To say yes to the dinner and offer help", "To say she can't come", "To ask for the recipe"], answer: 0 },
    details: [
      { prompt: "What does Fatima want to know?", options: ["What time dinner is", "What she should bring", "Where Luca lives"], answer: 0 },
      { prompt: "What can she do on Saturday morning?", options: ["Go to the market with Luca", "Cook the pasta", "Buy the wine"], answer: 0 },
    ],
    tasks: [
      { kind: "gaps", line: 2, words: ["kan", "graag"] },
      { kind: "truefalse", statement: "Fatima kan zaterdag niet.", translation: "Fatima can't make Saturday.", answer: false },
    ],
    dictation: [1, 6],
    grammar: [],
    words: {
      voicemail: { meaning: "voicemail" },
      zaterdagochtend: { meaning: "Saturday morning" },
    },
  },
  {
    id: "de-vries-belt",
    level: "A1",
    title: "Mevrouw De Vries belt",
    titleTranslation: "Mrs De Vries calls",
    kind: "dialogue",
    situation: "Tuesday. Mrs De Vries, the neighbour, calls Luca about Saturday.",
    lines: [
      l("Mevrouw De Vries", "Hallo Luca, met mevrouw De Vries, van hiernaast.", "Hello Luca, it's Mrs De Vries, from next door."),
      l("Luca", "Goedemiddag, mevrouw De Vries!", "Good afternoon, Mrs De Vries!"),
      l("Mevrouw De Vries", "Ik heb een vraag over zaterdag. Hoe laat is het eten?", "I have a question about Saturday. What time is dinner?"),
      l("Luca", "Om half zeven.", "At half past six."),
      l("Mevrouw De Vries", "En met hoeveel mensen zijn jullie?", "And how many of you are there?"),
      l("Luca", "Met z'n vijven.", "Five of us."),
      l("Mevrouw De Vries", "Zal ik iets meenemen? Een fles wijn?", "Shall I bring something? A bottle of wine?"),
      l("Luca", "Dat is lief. Een fles wijn is goed.", "That's kind. A bottle of wine is good."),
      l("Mevrouw De Vries", "En een toetje? Ik maak een heel lekkere appeltaart, met slagroom.", "And a dessert? I make a very good apple pie, with whipped cream."),
      l("Luca", "Nee, dank u. Ik maak tiramisu.", "No, thank you. I'm making tiramisu."),
      l("Mevrouw De Vries", "O, dan neem ik iets kleins mee. Tot zaterdag, jongen!", "Oh, then I'll bring something small. See you Saturday, young man!"),
    ],
    gist: { prompt: "Why does Mrs De Vries call?", options: ["To ask about Saturday's dinner", "To invite Luca to her house", "To complain about noise"], answer: 0 },
    details: [
      { prompt: "Why doesn't Luca want the apple pie?", options: ["He's already making a dessert", "He doesn't like apples", "It's too expensive"], answer: 0 },
      { prompt: "What will Mrs De Vries bring, in the end?", options: ["Wine and something small", "An apple pie", "Nothing"], answer: 0 },
    ],
    tasks: [
      { kind: "heard", line: 5, options: ["vijven", "vieren", "zessen"], answer: 0 },
      { kind: "gaps", line: 8, words: ["appeltaart", "slagroom"] },
    ],
    dictation: [3, 7],
    grammar: [],
    words: {
      hiernaast: { meaning: "next door", closer: "hier (here) + naast (next to)" },
      appeltaart: { meaning: "apple pie", local: "The Dutch classic, with whipped cream: appeltaart met slagroom." },
      kleins: { meaning: "small (iets kleins = something small)", base: "klein" },
      lekkere: { meaning: "tasty, nice", base: "lekker" },
      slagroom: { meaning: "whipped cream" },
      vijven: { meaning: "met z'n vijven = the five of us", base: "vijf" },
      tiramisu: { meaning: "tiramisu" },
      toetje: { meaning: "dessert" },
      zal: { meaning: "shall", base: "zullen" },
    },
  },
  {
    id: "omroep-supermarkt",
    level: "A1",
    title: "Omroep in de supermarkt",
    titleTranslation: "Supermarket announcement",
    kind: "announcement",
    situation: "Tuesday. Luca and Noor are shopping when an announcement comes on.",
    lines: [
      l(undefined, "Goedemiddag, beste klanten.", "Good afternoon, dear customers."),
      l(undefined, "Vandaag zijn de aardbeien in de aanbieding.", "Today the strawberries are on offer."),
      l(undefined, "Twee bakjes voor maar vijf euro.", "Two tubs for just five euros."),
      l(undefined, "Bij de kaas: jonge kaas, een pond voor drie euro vijftig.", "At the cheese: young cheese, a pound for three euros fifty."),
      l(undefined, "Met uw bonuskaart is de koffie deze week goedkoper.", "With your loyalty card, coffee is cheaper this week."),
      l(undefined, "Let op: de winkel gaat vandaag om negen uur dicht.", "Please note: the shop closes at nine today."),
      l(undefined, "Dank u wel en nog een fijne dag.", "Thank you and have a nice day."),
    ],
    gist: { prompt: "What is this announcement about?", options: ["Offers and opening hours", "A lost child", "A train that's late"], answer: 0 },
    details: [
      { prompt: "How much do two tubs of strawberries cost?", options: ["Five euros", "Three euros fifty", "Two euros"], answer: 0 },
      { prompt: "Luca wants to come back at half past nine tonight. Can he?", options: ["No: the shop closes at nine", "Yes: it's open until ten", "Yes: it never closes"], answer: 0 },
    ],
    tasks: [
      { kind: "truefalse", statement: "Met een bonuskaart is de koffie goedkoper.", translation: "With a loyalty card the coffee is cheaper.", answer: true },
      { kind: "gaps", line: 2, words: ["bakjes", "vijf"] },
    ],
    dictation: [1, 5],
    grammar: [],
    words: {
      klanten: { meaning: "customers", base: "klant" },
      aardbeien: { meaning: "strawberries", base: "aardbei" },
      bakjes: { meaning: "tubs, punnets", base: "bakje" },
      pond: { meaning: "pound (500 grams)" },
      bonuskaart: { meaning: "loyalty card (Albert Heijn's)" },
      "let op": { meaning: "please note, watch out" },
    },
  },
  {
    id: "bij-de-kaaskraam",
    level: "A1",
    title: "Bij de kaaskraam",
    titleTranslation: "At the cheese stall",
    kind: "dialogue",
    situation: "Saturday morning at the market. Luca buys cheese for the starter.",
    lines: [
      l("Kaasboer", "Goedemorgen! Zeg het maar.", "Good morning! What can I get you?"),
      l("Luca", "Goedemorgen. Ik zoek een kaas voor een etentje.", "Good morning. I'm looking for a cheese for a dinner."),
      l("Kaasboer", "Jong, belegen of oud?", "Young, mature or old?"),
      l("Luca", "Wat is het verschil?", "What's the difference?"),
      l("Kaasboer", "Jonge kaas is zacht. Oude kaas is hard en een beetje zout. Proef maar.", "Young cheese is soft. Old cheese is hard and a bit salty. Have a taste."),
      l("Luca", "Mmm, de oude is lekker. Een pond, alstublieft.", "Mmm, the old one is nice. A pound, please."),
      l("Kaasboer", "Een pond oude kaas. Dat is zeven euro.", "A pound of old cheese. That's seven euros."),
      l("Luca", "Kan ik pinnen?", "Can I pay by card?"),
      l("Kaasboer", "Natuurlijk. Wilt u een tasje?", "Of course. Would you like a bag?"),
      l("Luca", "Nee, dank u. Ik heb een tas.", "No, thank you. I have a bag."),
    ],
    gist: { prompt: "What is Luca doing?", options: ["Buying cheese for the dinner", "Selling cheese", "Asking the way"], answer: 0 },
    details: [
      { prompt: "What's the difference between young and old cheese?", options: ["Young is soft; old is hard and a bit salty", "Young is cheaper; old is from Italy", "There is no difference"], answer: 0 },
      { prompt: "Two pounds would cost…", options: ["Fourteen euros", "Seven euros", "Ten euros"], answer: 0 },
    ],
    tasks: [
      { kind: "gaps", line: 4, words: ["zacht", "zout"] },
      { kind: "heard", line: 2, options: ["belegen", "gebakken", "beleefd"], answer: 0 },
    ],
    dictation: [3, 7],
    grammar: [],
    words: {
      kaasboer: { meaning: "cheese seller" },
      belegen: { meaning: "mature (cheese, between young and old)" },
      verschil: { meaning: "difference" },
      zacht: { meaning: "soft" },
      pond: { meaning: "pound (500 grams)" },
      tasje: { meaning: "a (small) bag", base: "tas" },
      etentje: { meaning: "a dinner (with friends)" },
    },
  },
];

/** A writing topic that joins in on the story. */
export const avondWriting: WritingTask = {
  id: "w-antwoord-aan-luca",
  level: "A1",
  title: "Een antwoord aan Luca",
  titleTranslation: "A reply to Luca",
  form: "message",
  situation: "Luca invites you to his Italian evening on Saturday too. Write him a message back.",
  points: [
    { prompt: "Thank him and say if you can come", frame: "Dank je wel, Luca! Zaterdag … ik.", cues: ["kan", "kom", "dank"] },
    { prompt: "Ask what time dinner is", frame: "Hoe laat is het … ?", cues: ["hoe laat", "uur"] },
    { prompt: "Say what you'll bring", frame: "Ik neem … mee.", cues: ["mee", "neem"] },
    { prompt: "Say something you don't eat or drink", frame: "Ik eet geen … .", cues: ["geen", "eet", "drink"] },
    { prompt: "Offer to help with the shopping", frame: "Zaterdagochtend kan ik met je mee naar de … .", cues: ["markt", "supermarkt", "boodschappen"] },
    { prompt: "Say goodbye", frame: "Tot … !", cues: ["tot", "groetjes"] },
  ],
  model:
    "Hoi Luca! Dank je wel, Luca! Zaterdag kan ik, en ik kom graag. Hoe laat is het eten? Ik neem een fles wijn mee. Ik eet geen vis, maar pasta vind ik heel lekker. Zaterdagochtend kan ik met je mee naar de markt. Dan kopen we samen de groente en de kaas. Tot zaterdag!",
};

/** The end of unit 4: the next morning. */
export const avondCheckpoint: Checkpoint = {
  title: "De volgende ochtend",
  titleTranslation: "The next morning",
  text: [
    [
      { text: "Het is zondagochtend. In de keuken staan nog drie pannen.", translation: "It's Sunday morning. There are still three pans in the kitchen." },
      { text: "Bram is moe, maar blij. Hij zet koffie.", translation: "Bram is tired, but happy. He makes coffee." },
      { text: "Op de tafel ligt een briefje van mevrouw De Vries.", translation: "On the table is a note from Mrs De Vries." },
    ],
    [
      { text: '"Lieve Luca, Noor en Bram. Dank jullie wel voor de lekkere avond!', translation: '"Dear Luca, Noor and Bram. Thank you for the lovely evening!' },
      { text: "Volgende zaterdag kook ik. Er is stamppot met rookworst, en als toetje vla.", translation: "Next Saturday I'm cooking. There's stamppot with smoked sausage, and custard for dessert." },
      { text: 'Neem geen wijn mee. Ik heb nog drie flessen! Groetjes, mevrouw De Vries."', translation: 'Don\'t bring wine. I still have three bottles! Love, Mrs De Vries."' },
    ],
    [
      { text: 'Luca leest het briefje en lacht. "Stamppot? Wat is dat?"', translation: 'Luca reads the note and laughs. "Stamppot? What\'s that?"' },
      { text: '"Aardappels met groente," zegt Noor. "Heel Nederlands. Heel lekker."', translation: '"Potatoes with vegetables," says Noor. "Very Dutch. Very tasty."' },
    ],
  ],
  textTasks: [
    { kind: "choice", prompt: "Why does Mrs De Vries write the note?", options: ["To thank them and invite them back", "To complain about the noise", "To ask for the recipe"], answer: 0 },
    { kind: "choice", prompt: "Why shouldn't they bring wine next Saturday?", options: ["She still has three bottles", "She doesn't drink wine", "Wine is too expensive"], answer: 0 },
    { kind: "truefalse", statement: "Luca weet wat stamppot is.", translation: "Luca knows what stamppot is.", answer: false },
  ],
  listening: {
    situation: "Noor leaves Luca a voice message about next Saturday.",
    lines: [
      { speaker: "Noor", text: "Hoi Luca, met Noor.", translation: "Hi Luca, it's Noor." },
      { speaker: "Noor", text: "Ik ga nu naar de supermarkt. Er is geen koffie meer.", translation: "I'm going to the supermarket now. There's no coffee left." },
      { speaker: "Noor", text: "Heb jij iets nodig? Melk? Brood?", translation: "Do you need anything? Milk? Bread?" },
      { speaker: "Noor", text: "Volgende zaterdag neem ik bloemen mee voor mevrouw De Vries.", translation: "Next Saturday I'll bring flowers for Mrs De Vries." },
      { speaker: "Noor", text: "Stuur me even een berichtje. Doei!", translation: "Send me a message. Bye!" },
    ],
    questions: [
      { prompt: "Why is Noor going to the supermarket?", options: ["There's no coffee left", "To buy flowers", "To buy wine"], answer: 0 },
      { prompt: "What will Noor bring next Saturday?", options: ["Flowers", "Wine", "A dessert"], answer: 0 },
    ],
  },
  write: {
    situation: "Write a short answer to Mrs De Vries's note: thank her and say what you'll bring.",
    points: [
      { prompt: "Thank her for her note", frame: "Dank u wel voor … !" },
      { prompt: "Say you'll come", frame: "Zaterdag kom ik … ." },
      { prompt: "Say what you'll bring", frame: "Ik neem … mee." },
    ],
    model: "Dank u wel voor het briefje, mevrouw De Vries! Zaterdag kom ik graag. Ik neem bloemen mee.",
    modelTranslation: "Thank you for the note, Mrs De Vries! I'd love to come on Saturday. I'll bring flowers.",
  },
  words: {
    briefje: { meaning: "a note", base: "brief" },
    lieve: { meaning: "dear", base: "lief" },
    rookworst: { meaning: "smoked sausage" },
    lekkere: { meaning: "tasty, nice", base: "lekker" },
    toetje: { meaning: "dessert", local: "Everyday word; dessert is the menu word" },
    vla: { meaning: "custard (the Dutch dessert, from a carton)" },
    stamppot: { meaning: "stamppot (mashed potatoes with vegetables)" },
    groetjes: { meaning: "love, best wishes (at the end of a note)" },
    pannen: { meaning: "pans", base: "pan" },
    zondagochtend: { meaning: "Sunday morning" },
  },
};
