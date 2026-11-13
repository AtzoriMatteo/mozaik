import type { ReadingText } from "@/core/content";
import { mc, pairs, s, tf } from "./helpers";

/**
 * Culture texts added to existing units (November 2026): the people you
 * meet in a Dutch street, what the Dutch really eat, and life on the bike.
 */

export const waarKomJeVandaan: ReadingText = {
  id: "waar-kom-je-vandaan",
  level: "A1",
  title: "Waar kom je vandaan?",
  titleTranslation: "Where are you from?",
  grammar: ["questions", "pronouns-subject", "er-is", "separable-verbs"],
  paragraphs: [
    [
      s("In de Lindenstraat is vandaag een buurtfeest.", "There's a street party in the Lindenstraat today."),
      s("Er staan tafels op straat, er is muziek en iedereen neemt iets te eten mee.", "There are tables in the street, there's music and everyone brings something to eat."),
      s("Mevrouw De Vries woont al veertig jaar in de straat. Ze kent bijna iedereen.", "Mrs De Vries has lived in the street for forty years. She knows almost everyone."),
    ],
    [
      s("\"En wie bent u?\" vraagt ze aan een man met een baby.", "\"And who are you?\" she asks a man with a baby."),
      s("\"Ik ben Oleksandr, en dit is mijn dochter Mila. We komen uit Oekraïne.\"", "\"I'm Oleksandr, and this is my daughter Mila. We're from Ukraine.\""),
      s("\"Welkom! Hoelang bent u al in Nederland?\" \"Drie maanden.\"", "\"Welcome! How long have you been in the Netherlands?\" \"Three months.\""),
      s("\"Spreekt u al een beetje Nederlands?\"", "\"Do you speak a little Dutch already?\""),
      s("\"Een beetje. Ik spreek Oekraïens en Engels, en nu leer ik Nederlands.\"", "\"A little. I speak Ukrainian and English, and now I'm learning Dutch.\""),
    ],
    [
      s("Naast hen staat Amira. Zij komt uit Marokko, maar ze woont al tien jaar in Nederland.", "Next to them stands Amira. She's from Morocco, but she's lived in the Netherlands for ten years."),
      s("Ze heeft een grote schaal met koekjes. \"Proef maar!\"", "She has a big plate of biscuits. \"Go on, try one!\""),
      s("Haar man Kees is Nederlander. Thuis praten ze Nederlands en Arabisch.", "Her husband Kees is Dutch. At home they speak Dutch and Arabic."),
    ],
    [
      s("Dan komen Wei en Lin, twee studenten uit China. Ze wonen boven de bakker.", "Then Wei and Lin arrive, two students from China. They live above the baker's."),
      s("En Diego is Mexicaan. Hij kookt vandaag voor de hele straat.", "And Diego is Mexican. Today he's cooking for the whole street."),
      s("Mevrouw De Vries lacht. \"Zoveel landen in één straat! Dit is de hele wereld.\"", "Mrs De Vries laughs. \"So many countries in one street! This is the whole world.\""),
    ],
    [
      s("Dan vraagt Diego: \"En u, mevrouw De Vries? Waar komt u vandaan?\"", "Then Diego asks: \"And you, Mrs De Vries? Where are you from?\""),
      s("\"Ik? Uit Friesland! Ik spreek ook Fries. Dat is ook een moeilijke taal, hoor.\"", "\"Me? From Friesland! I speak Frisian too. That's a difficult language as well, you know.\""),
    ],
  ],
  tasks: [
    pairs(
      "Who comes from where?",
      "Oleksandr=Ukraine | Amira=Morocco | Wei and Lin=China | Diego=Mexico | Mevrouw De Vries=Friesland",
    ),
    tf("Amira woont al tien jaar in Nederland.", "Amira has lived in the Netherlands for ten years.", true),
    mc("Which languages do Amira and Kees speak at home?", ["Dutch and French", "Dutch and Arabic", "Arabic and English"], 1),
    tf("Mevrouw De Vries spreekt alleen Nederlands.", "Mrs De Vries only speaks Dutch.", false),
    mc("What does \"Proef maar!\" mean?", ["Go on, try it!", "Be careful!", "Help yourself to a drink!"], 0),
  ],
};

export const watEtenNederlanders: ReadingText = {
  id: "wat-eten-nederlanders",
  level: "A1",
  title: "Wat eten Nederlanders?",
  titleTranslation: "What do the Dutch eat?",
  grammar: ["graag-liever", "comparatives", "imperative", "plurals"],
  paragraphs: [
    [
      s("Carlos komt uit Brazilië en woont sinds maart in Utrecht.", "Carlos is from Brazil and has lived in Utrecht since March."),
      s("Op zijn blog schrijft hij over het Nederlandse eten.", "On his blog he writes about Dutch food."),
    ],
    [
      s("\"Nederlanders eten twee keer per dag brood: bij het ontbijt en bij de lunch.", "\"The Dutch eat bread twice a day: at breakfast and at lunch."),
      s("Op hun brood doen ze kaas, pindakaas of hagelslag.", "On their bread they put cheese, peanut butter or hagelslag."),
      s("Hagelslag is chocola in kleine stukjes. Ook volwassenen eten het!", "Hagelslag is chocolate in tiny pieces. Adults eat it too!"),
      s("De lunch is kort en simpel: een broodje kaas en een glas melk.", "Lunch is short and simple: a cheese sandwich and a glass of milk."),
    ],
    [
      s("Het avondeten is vroeg, om zes uur.", "Dinner is early, at six."),
      s("In de winter eten ze graag stamppot: aardappels met groente, en een rookworst erbij. Die koop je bij de slager.", "In winter they like to eat stamppot: potatoes mashed with vegetables, with a smoked sausage on the side. You buy that at the butcher's."),
      s("Erwtensoep is ook typisch. De soep is zo dik dat je lepel erin blijft staan.", "Pea soup is typical too. The soup is so thick that your spoon stands up in it."),
    ],
    [
      s("Op straat kun je haring kopen: rauwe vis met uitjes. De nieuwe haring komt in juni.", "In the street you can buy herring: raw fish with onions. The new herring arrives in June."),
      s("Ik vind het… interessant.", "I find it… interesting."),
      s("Veel lekkerder vind ik poffertjes: kleine pannenkoekjes met boter en poedersuiker.", "I find poffertjes much tastier: tiny pancakes with butter and icing sugar."),
      s("En stroopwafels! Leg een stroopwafel op je kopje koffie. Dan wordt hij warm en zacht.", "And stroopwafels! Put a stroopwafel on top of your cup of coffee. Then it gets warm and soft."),
    ],
    [
      s("Op vrijdag gaan mijn collega's na het werk naar de kroeg voor een borrel.", "On Fridays my colleagues go to the pub after work for drinks."),
      s("Ze drinken een biertje en eten bitterballen. Pas op: die zijn vanbinnen heel heet!", "They have a beer and eat bitterballen. Careful: they're very hot inside!"),
      s("Alleen drop begrijp ik nog niet. Ik heb echt een hekel aan zoute drop!\"", "Only liquorice I still don't understand. I really hate salty liquorice!\""),
    ],
  ],
  tasks: [
    mc("How often do the Dutch eat bread, according to Carlos?", ["Once a day", "Twice a day", "Three times a day"], 1),
    tf("Hagelslag is alleen voor kinderen.", "Hagelslag is only for children.", false),
    pairs(
      "Match the food.",
      "stamppot=potatoes mashed with vegetables | haring=raw fish with onions | poffertjes=tiny pancakes | bitterballen=hot snacks with a drink",
      true,
    ),
    mc("What's the stroopwafel tip?", ["Eat it cold", "Put it on your coffee cup", "Eat it with cheese"], 1),
    tf("Carlos vindt zoute drop lekker.", "Carlos likes salty liquorice.", false),
  ],
};

export const opDeFiets: ReadingText = {
  id: "nederland-op-de-fiets",
  level: "A1",
  title: "Nederland op de fiets",
  titleTranslation: "The Netherlands by bike",
  grammar: ["modal-verbs", "comparatives", "negation", "separable-verbs"],
  paragraphs: [
    [
      s("In Nederland zijn er meer fietsen dan mensen: ongeveer drieëntwintig miljoen.", "In the Netherlands there are more bikes than people: about twenty-three million."),
      s("Kinderen fietsen naar school, volwassenen fietsen naar hun werk, en opa en oma fietsen naar de markt.", "Children cycle to school, adults cycle to work, and grandpa and grandma cycle to the market."),
    ],
    [
      s("Er zijn overal fietspaden, vaak met een rode kleur.", "There are bike paths everywhere, often coloured red."),
      s("Weinig mensen dragen een helm, maar er zijn wel regels.", "Few people wear a helmet, but there are rules."),
      s("In het donker moet je licht hebben, voor en achter.", "In the dark you must have lights, front and back."),
      s("En je mag niet fietsen met je telefoon in je hand.", "And you're not allowed to cycle with your phone in your hand."),
    ],
    [
      s("Hanna komt uit Duitsland en woont in Groningen.", "Hanna is from Germany and lives in Groningen."),
      s("Ze heeft twee sloten op haar fiets.", "She has two locks on her bike."),
      s("\"In Nederland stelen mensen veel fietsen,\" zegt ze.", "\"In the Netherlands people steal a lot of bikes,\" she says."),
      s("Daarom zet ze haar fiets altijd in een fietsenstalling.", "That's why she always puts her bike in a bike park."),
    ],
    [
      s("Het waait vaak hard in Nederland. Met wind tegen is fietsen zwaar.", "It's often very windy in the Netherlands. With a headwind, cycling is hard work."),
      s("Daarom hebben veel mensen nu een elektrische fiets.", "That's why many people now have an electric bike."),
      s("En als het regent? Dan trek je een regenjas aan en fiets je gewoon door.", "And when it rains? Then you put on a raincoat and just keep cycling."),
      s("Nederlanders zeggen: \"Je bent toch niet van suiker!\"", "The Dutch say: \"You're not made of sugar, are you!\""),
    ],
  ],
  tasks: [
    tf("In Nederland zijn er meer fietsen dan mensen.", "In the Netherlands there are more bikes than people.", true),
    mc("What colour are bike paths often?", ["Green", "Red", "Blue"], 1),
    mc("What's not allowed?", ["Cycling without a helmet", "Cycling with your phone in your hand", "Cycling in the rain"], 1),
    mc("Why does Hanna have two locks?", ["Many bikes get stolen", "Her bike is very expensive", "It's the law"], 0),
    mc("\"Je bent toch niet van suiker!\" means:", ["A bit of rain won't hurt you", "Don't eat so much sugar", "You're very sweet"], 0),
  ],
};

/* ---- A1 gap fillers (survival phrases, body and emergencies, jobs) ---- */

export const kuntUDatHerhalen: ReadingText = {
  id: "kunt-u-dat-herhalen",
  level: "A1",
  title: "Kunt u dat herhalen?",
  titleTranslation: "Could you repeat that?",
  grammar: ["questions", "modal-verbs", "negation", "prepositions"],
  paragraphs: [
    [
      s("Kenji komt uit Japan. Hij woont pas een week in Nederland.", "Kenji is from Japan. He has only lived in the Netherlands for a week."),
      s("Hij spreekt Japans en Engels, en een klein beetje Nederlands.", "He speaks Japanese and English, and a tiny bit of Dutch."),
      s("Vandaag gaat hij alleen naar de bakker.", "Today he goes to the baker's on his own."),
    ],
    [
      s("\"Goedemorgen! Zeg het maar,\" zegt de bakker.", "\"Good morning! What can I get you?\" says the baker."),
      s("\"Eh… goedemorgen. Een bruin brood, alstublieft.\"", "\"Er… good morning. A brown loaf, please.\""),
      s("\"Heel of half? Gesneden?\" De bakker praat heel snel.", "\"Whole or half? Sliced?\" The baker talks very fast."),
      s("\"Sorry, ik begrijp het niet. Kunt u dat herhalen? Langzamer, alstublieft.\"", "\"Sorry, I don't understand. Could you repeat that? More slowly, please.\""),
      s("De bakker lacht en zegt het nog een keer, heel langzaam.", "The baker laughs and says it again, very slowly."),
    ],
    [
      s("Dan ziet Kenji iets op de toonbank. \"Wat betekent krentenbol?\"", "Then Kenji sees something on the counter. \"What does krentenbol mean?\""),
      s("\"Een broodje met rozijnen. Proef maar!\"", "\"A bun with raisins. Go on, try one!\""),
      s("\"Dank u wel! Hoe zeg je 'free' in het Nederlands?\" \"Gratis. Dit broodje is gratis!\"", "\"Thank you! How do you say 'free' in Dutch?\" \"Gratis. This bun is free!\""),
    ],
    [
      s("Daarna moet hij naar het station, maar hij weet de weg niet. Een taxi is te duur.", "After that he has to go to the station, but he doesn't know the way. A taxi is too expensive."),
      s("\"Excuseer, spreekt u Engels?\" vraagt hij aan een vrouw.", "\"Excuse me, do you speak English?\" he asks a woman."),
      s("\"Ja, natuurlijk. Maar zullen we het in het Nederlands proberen?\"", "\"Yes, of course. But shall we try it in Dutch?\""),
      s("\"Graag! Waar is het station?\" \"Rechtdoor en dan links, tegenover de kerk.\"", "\"I'd like that! Where's the station?\" \"Straight on and then left, opposite the church.\""),
    ],
    [
      s("Op het station moet Kenji naar de wc. \"Neem me niet kwalijk, waar is het toilet?\"", "At the station Kenji needs the loo. \"Excuse me, where's the toilet?\""),
      s("\"Daar, achter de kiosk. Je betaalt met je pinpas.\"", "\"Over there, behind the kiosk. You pay with your bank card.\""),
      s("Kenji is moe, maar blij: zijn eerste gesprekken in het Nederlands!", "Kenji is tired but happy: his first conversations in Dutch!"),
    ],
  ],
  tasks: [
    tf("Kenji woont al een jaar in Nederland.", "Kenji has lived in the Netherlands for a year.", false),
    mc("What does Kenji say when the baker talks too fast?", ["Kunt u dat herhalen? Langzamer, alstublieft.", "Hoe laat is het?", "Waar is het station?"], 0),
    mc("What is a krentenbol?", ["A bun with raisins", "A cheese sandwich", "A biscuit"], 0),
    pairs(
      "Match the question and what it's for.",
      "Wat betekent…?=asking what a word means | Hoe zeg je…?=asking for a Dutch word | Spreekt u Engels?=checking if someone speaks English | Waar is het toilet?=finding the toilet",
      true,
    ),
    tf("De vrouw wil Nederlands praten met Kenji.", "The woman wants to speak Dutch with Kenji.", true),
  ],
};

export const auMijnKnie: ReadingText = {
  id: "au-mijn-knie",
  level: "A1",
  title: "Au, mijn knie!",
  titleTranslation: "Ouch, my knee!",
  grammar: ["possessives", "imperative", "separable-verbs", "comparatives"],
  paragraphs: [
    [
      s("Daan is zestien en speelt op zaterdag voetbal.", "Daan is sixteen and plays football on Saturdays."),
      s("Vandaag valt hij op het veld. Au! Zijn knie doet pijn, en zijn arm ook.", "Today he falls on the pitch. Ouch! His knee hurts, and his arm too."),
      s("De trainer kijkt naar zijn been en zijn voet. \"Kun je lopen?\" \"Ja, een beetje.\"", "The coach looks at his leg and his foot. \"Can you walk?\" \"Yes, a bit.\""),
    ],
    [
      s("Thuis is zijn moeder niet boos, maar ze maakt zich wel zorgen.", "At home his mother isn't angry, but she is worried."),
      s("\"Leg je been omhoog en doe er ijs op,\" zegt ze.", "\"Put your leg up and put ice on it,\" she says."),
      s("\"En neem een paracetamol. Die koop je bij de drogist.\"", "\"And take a paracetamol. You buy those at the drugstore.\""),
    ],
    [
      s("In Nederland is er een verschil tussen de drogist en de apotheek.", "In the Netherlands there's a difference between the drugstore and the pharmacy."),
      s("Bij de drogist koop je paracetamol, pleisters, shampoo en tandpasta.", "At the drugstore you buy paracetamol, plasters, shampoo and toothpaste."),
      s("Bij de apotheek haal je medicijnen met een recept van de dokter.", "At the pharmacy you collect medicine with a prescription from the doctor."),
    ],
    [
      s("Op maandag doet de knie nog steeds pijn, dus Daan belt de huisarts.", "On Monday the knee still hurts, so Daan calls the GP."),
      s("\"Sinds wanneer doet het pijn?\" \"Sinds eergisteren.\"", "\"Since when has it hurt?\" \"Since the day before yesterday.\""),
      s("De huisarts kijkt naar zijn knie en zijn schouder. \"Niets gebroken. Twee weken geen voetbal.\"", "The GP looks at his knee and his shoulder. \"Nothing broken. No football for two weeks.\""),
      s("Zijn neus is ook een beetje dik, maar dat is niet erg.", "His nose is a bit swollen too, but that's nothing serious."),
    ],
    [
      s("Bij een ongeluk op straat bel je 112. Dan komen de politie, de brandweer of de ambulance.", "After an accident in the street you call 112. Then the police, the fire brigade or the ambulance come."),
      s("Maar met een pijnlijke knie ga je gewoon naar de huisarts.", "But with a sore knee you just go to the GP."),
      s("En na twee weken op de bank? Dan doet zijn rug pijn. Voetbal is gezonder!", "And after two weeks on the sofa? Then his back hurts. Football is healthier!"),
    ],
  ],
  tasks: [
    mc("What happens to Daan?", ["He falls during football", "He falls off his bike", "He has the flu"], 0),
    tf("Daans moeder is boos.", "Daan's mother is angry.", false),
    mc("Where do you get medicine with a prescription?", ["At the drogist", "At the apotheek", "At the supermarket"], 1),
    mc("What does the GP say?", ["Nothing is broken: no football for two weeks", "He needs an operation", "He can play on Saturday"], 0),
    tf("Bij een ongeluk bel je 112.", "After an accident you call 112.", true),
    mc("Why does his back hurt in the end?", ["From football", "From lying on the sofa", "From the ambulance"], 1),
  ],
};

export const watVoorWerk: ReadingText = {
  id: "wat-voor-werk-doet-u",
  level: "A1",
  title: "Wat voor werk doet u?",
  titleTranslation: "What work do you do?",
  grammar: ["present-regular", "zijn-hebben", "conjunctions", "time-numbers"],
  paragraphs: [
    [
      s("Op de markt vraagt een journaliste van de lokale radio aan zes mensen: \"Wat voor werk doet u?\"", "At the market a reporter from local radio asks six people: \"What work do you do?\""),
    ],
    [
      s("Peter (66): \"Ik ben gepensioneerd. Ik heb nu veel tijd voor mijn tuin en mijn kleinkinderen.\"", "Peter (66): \"I'm retired. I now have lots of time for my garden and my grandchildren.\""),
      s("Yasmin (29): \"Ik ben kapper. Ik heb een eigen kapsalon in deze straat.", "Yasmin (29): \"I'm a hairdresser. I have my own salon in this street."),
      s("Ik werk van dinsdag tot zaterdag. Op maandag zijn veel kappers dicht.\"", "I work from Tuesday to Saturday. Lots of hairdressers are closed on Mondays.\""),
    ],
    [
      s("Tom (35): \"Ik ben programmeur. Ik werk drie dagen thuis en twee dagen op kantoor.", "Tom (35): \"I'm a programmer. I work three days at home and two days at the office."),
      s("Mijn partner is verpleegkundige en werkt vaak 's nachts.\"", "My partner is a nurse and often works nights.\""),
      s("Joanna (44): \"Ik ben schoonmaker in een groot ziekenhuis. Het werk is zwaar, maar mijn collega's zijn heel aardig.", "Joanna (44): \"I'm a cleaner in a big hospital. The work is hard, but my colleagues are very nice."),
      s("Ik begin om zes uur. Dan is alles nog vies, en om twaalf uur is alles schoon.\"", "I start at six. Then everything is still dirty, and by twelve everything is clean.\""),
    ],
    [
      s("Sven (23): \"Ik ben monteur. Ik repareer auto's. Mijn handen zijn altijd zwart!\"", "Sven (23): \"I'm a mechanic. I repair cars. My hands are always black!\""),
      s("Ricardo (51): \"Op dit moment ben ik werkloos. Ik zoek een baan als verkoper.", "Ricardo (51): \"At the moment I'm unemployed. I'm looking for a job as a salesperson."),
      s("Ik spreek Spaans, Engels en Nederlands. Misschien in een winkel voor toeristen?\"", "I speak Spanish, English and Dutch. Maybe in a shop for tourists?\""),
    ],
    [
      s("De journaliste bedankt iedereen.", "The reporter thanks everyone."),
      s("\"En u?\" vraagt Ricardo. \"Wat voor werk doet u?\" Ze lacht: \"Dit!\"", "\"And you?\" asks Ricardo. \"What work do you do?\" She laughs: \"This!\""),
    ],
  ],
  tasks: [
    pairs("Who does what?", "Yasmin=hairdresser | Tom=programmer | Joanna=cleaner | Sven=mechanic | Ricardo=looking for work"),
    tf("Peter werkt nog vijf dagen per week.", "Peter still works five days a week.", false),
    mc("Why does Yasmin start on Tuesday?", ["She has the children on Mondays", "Lots of hairdressers are closed on Mondays", "Her salon is new"], 1),
    mc("Where does Tom work?", ["Only at the office", "At home and at the office", "In a hospital"], 1),
    tf("Ricardo spreekt drie talen.", "Ricardo speaks three languages.", true),
  ],
};
