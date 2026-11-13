import type { ReadingText } from "@/core/content";
import { mc, order, pairs, s, tf } from "./helpers";

/**
 * A third text for each of the first eight A1 units, each a different kind
 * of text: a profile, an email, a shop visit, a diary, a housing ad, a
 * working day, advice, and an interview.
 */

export const fatimasProfiel: ReadingText = {
  id: "een-taalmaatje",
  level: "A1",
  title: "Een taalmaatje",
  titleTranslation: "A language buddy",
  grammar: ["present-regular", "pronouns-subject", "zijn-hebben"],
  paragraphs: [
    [
      s("Luca zoekt een taalmaatje.", "Luca is looking for a language buddy."),
      s("Een taalmaatje is iemand die Nederlands spreekt en met jou wil oefenen.", "A language buddy is someone who speaks Dutch and wants to practise with you."),
      s("Op een website leest hij dit profiel:", "On a website he reads this profile:"),
    ],
    [
      s("Hallo! Ik heet Sanne de Wit.", "Hi! My name is Sanne de Wit."),
      s("Ik ben zesentwintig jaar en ik woon in Leiden, in de buurt van het station.", "I'm twenty-six and I live in Leiden, near the station."),
      s("Ik ben lerares op een basisschool.", "I'm a teacher at a primary school."),
      s("Ik werk met kinderen van zes en zeven jaar.", "I work with children of six and seven."),
    ],
    [
      s("Ik spreek Nederlands, Engels en een beetje Spaans.", "I speak Dutch, English and a bit of Spanish."),
      s("Ik wil graag Italiaans leren, want ik ga in de zomer naar Rome.", "I'd like to learn Italian, because I'm going to Rome in the summer."),
      s("Mijn hobby's zijn koken, lezen en fietsen.", "My hobbies are cooking, reading and cycling."),
      s("Ik heb een kat, Pim. Hij is lui, maar heel lief.", "I have a cat, Pim. He's lazy, but very sweet."),
    ],
    [
      s("Ik zoek iemand voor een uur per week.", "I'm looking for someone for one hour a week."),
      s("Een half uur spreken we Nederlands, een half uur Italiaans.", "Half an hour we speak Dutch, half an hour Italian."),
      s("We kunnen koffie drinken in een café of samen wandelen.", "We can have coffee in a café or go for a walk together."),
      s("Stuur me een bericht!", "Send me a message!"),
    ],
    [
      s("Luca lacht. Perfect, denkt hij.", "Luca smiles. Perfect, he thinks."),
      s("Hij schrijft meteen een bericht: \"Hoi Sanne, ik ben Luca en ik kom uit Italië.\"", "He writes a message straight away: \"Hi Sanne, I'm Luca and I'm from Italy.\""),
    ],
  ],
  tasks: [
    mc("What is a taalmaatje?", ["A Dutch teacher", "Someone to practise a language with", "A school book"], 1),
    tf("Sanne werkt op een universiteit.", "Sanne works at a university.", false),
    mc("Why does Sanne want to learn Italian?", ["She has Italian family", "She's going to Rome in the summer", "For her work"], 1),
    pairs("Sanne's profile: connect.", "age=26 | job=primary school teacher | cat=Pim | hobbies=cooking, reading, cycling"),
    tf("Ze spreken een half uur Nederlands en een half uur Italiaans.", "They speak Dutch for half an hour and Italian for half an hour.", true),
  ],
};

export const mailVanGiulia: ReadingText = {
  id: "een-mail-van-giulia",
  level: "A1",
  title: "Een mail van Giulia",
  titleTranslation: "An email from Giulia",
  grammar: ["possessives", "plurals", "present-regular"],
  paragraphs: [
    [
      s("Luca krijgt een mail van zijn zus. Giulia leert ook een beetje Nederlands, voor de grap.", "Luca gets an email from his sister. Giulia is learning a bit of Dutch too, for fun."),
    ],
    [
      s("Hoi Luca!", "Hi Luca!"),
      s("Hoe gaat het in Leiden?", "How are things in Leiden?"),
      s("Hier is alles goed.", "Everything's fine here."),
      s("Mama werkt veel in de winkel, en papa heeft het druk op school.", "Mum works a lot in the shop, and dad is busy at school."),
      s("Oma kookt nog steeds elke zondag, maar jouw stoel is leeg!", "Grandma still cooks every Sunday, but your chair is empty!"),
    ],
    [
      s("Ik heb nieuws: ik heb een vriend!", "I have news: I have a boyfriend!"),
      s("Hij heet Matteo en hij is twintig.", "His name is Matteo and he's twenty."),
      s("Hij studeert muziek en hij speelt gitaar.", "He studies music and he plays the guitar."),
      s("Mama vindt hem aardig, papa nog niet.", "Mum thinks he's nice, dad not yet."),
    ],
    [
      s("Leo zegt elke dag: \"Waar is oom Luca?\"", "Leo says every day: \"Where's uncle Luca?\""),
      s("Hij is nu bijna vijf en hij kan al tot twintig tellen.", "He's almost five now and he can already count to twenty."),
      s("Sofia heeft twee tanden.", "Sofia has two teeth."),
      s("Ze slaapt nog niet goed, dus Paolo en zijn vrouw zijn altijd moe.", "She doesn't sleep well yet, so Paolo and his wife are always tired."),
    ],
    [
      s("Stuur je een foto van je kamer en je huisgenoten?", "Will you send a photo of your room and your housemates?"),
      s("Ik wil ze zien!", "I want to see them!"),
      s("Veel liefs, je zus Giulia", "Lots of love, your sister Giulia"),
    ],
  ],
  tasks: [
    tf("Giulia heeft een vriend.", "Giulia has a boyfriend.", true),
    mc("What does Matteo study?", ["Biology", "Music", "Dutch"], 1),
    pairs("Who is it about?", "Leo=can count to twenty | Sofia=has two teeth | Paolo=is always tired | Mama=thinks Matteo is nice"),
    tf("Papa vindt Matteo al aardig.", "Dad already thinks Matteo is nice.", false),
    mc("What does Giulia want from Luca?", ["A present", "A photo of his room and housemates", "A phone call on Sunday"], 1),
  ],
};

export const inDeSupermarkt: ReadingText = {
  id: "in-de-supermarkt",
  level: "A1",
  title: "In de supermarkt",
  titleTranslation: "In the supermarket",
  grammar: ["er-is", "demonstratives", "negation", "plurals"],
  paragraphs: [
    [
      s("Het is dinsdag en de koelkast is bijna leeg.", "It's Tuesday and the fridge is almost empty."),
      s("Er is geen melk, geen kaas en geen brood meer.", "There's no milk, no cheese and no bread left."),
      s("Luca pakt een tas en gaat naar de supermarkt om de hoek.", "Luca grabs a bag and goes to the supermarket round the corner."),
    ],
    [
      s("De supermarkt is groot en licht.", "The supermarket is big and bright."),
      s("Vooraan liggen groente en fruit, achteraan staan melk en yoghurt.", "At the front are vegetables and fruit, at the back are milk and yoghurt."),
      s("Luca neemt een liter melk, een pak yoghurt en zes eieren.", "Luca takes a litre of milk, a carton of yoghurt and six eggs."),
      s("Hij zoekt de rijst, maar hij ziet hem niet.", "He looks for the rice, but he doesn't see it."),
    ],
    [
      s("\"Pardon, waar is de rijst?\" vraagt hij aan een jongen in de winkel.", "\"Excuse me, where's the rice?\" he asks a boy who works in the shop."),
      s("\"In gang vier, naast de pasta,\" zegt de jongen.", "\"In aisle four, next to the pasta,\" says the boy."),
      s("Bij de kaas ziet Luca een bordje: twee halen, één betalen.", "By the cheese Luca sees a sign: buy two, pay for one."),
      s("Dat is een goede aanbieding! Hij neemt twee stukken.", "That's a good offer! He takes two pieces."),
    ],
    [
      s("Bij de kassa staan veel mensen, dus hij betaalt zelf bij de zelfscan.", "There are a lot of people at the checkout, so he pays himself at the self-scan."),
      s("\"Heeft u een bonuskaart?\" vraagt het scherm.", "\"Do you have a loyalty card?\" asks the screen."),
      s("Luca heeft geen bonuskaart. Hij pint vijftien euro tachtig.", "Luca doesn't have a loyalty card. He pays fifteen euro eighty by card."),
      s("Thuis ziet hij het: er is nog steeds geen brood. Hij vergeet het brood!", "At home he sees it: there's still no bread. He forgot the bread!"),
    ],
  ],
  tasks: [
    mc("Why does Luca go to the supermarket?", ["He's hungry", "The fridge is almost empty", "Bram asks him to"], 1),
    tf("De rijst ligt naast de pasta.", "The rice is next to the pasta.", true),
    mc("What does 'twee halen, één betalen' mean?", ["Two for one", "Pay twice", "Two euros each"], 0),
    tf("Luca betaalt bij de kassa.", "Luca pays at the checkout.", false),
    mc("What does Luca forget?", ["Milk", "Eggs", "Bread"], 2),
  ],
};

export const lucasWeek: ReadingText = {
  id: "luca-s-week",
  level: "A1",
  title: "Luca's week",
  titleTranslation: "Luca's week",
  grammar: ["time-numbers", "verb-second", "separable-verbs"],
  paragraphs: [
    [s("Luca schrijft elke avond een paar zinnen in een schrift. Zo oefent hij zijn Nederlands.", "Every evening Luca writes a few sentences in a notebook. That's how he practises his Dutch.")],
    [
      s("Maandag: om negen uur heb ik biologie. 's Avonds is de taalles. Ik ben heel moe.", "Monday: at nine I have biology. In the evening there's Dutch class. I'm very tired."),
    ],
    [
      s("Dinsdag: vandaag spreek ik af met Fatima in de bibliotheek. We oefenen een uur.", "Tuesday: today I meet Fatima in the library. We practise for an hour."),
    ],
    [
      s("Woensdag: geen les in de ochtend! Ik slaap tot tien uur. 's Middags doe ik boodschappen en 's avonds kook ik voor mijn huisgenoten.", "Wednesday: no class in the morning! I sleep until ten. In the afternoon I do the shopping and in the evening I cook for my housemates."),
    ],
    [
      s("Donderdag: om half acht 's avonds heb ik voetbal. We verliezen met drie tegen één.", "Thursday: at half past seven in the evening I have football. We lose three to one."),
    ],
    [
      s("Vrijdag: na de les ga ik naar het café van Bram. Ik blijf tot middernacht.", "Friday: after class I go to Bram's café. I stay until midnight."),
    ],
    [
      s("Zaterdag: ik werk van tien tot vier in het café. Het is heel druk. Daarna ruim ik mijn kamer op.", "Saturday: I work in the café from ten to four. It's very busy. Afterwards I tidy my room."),
    ],
    [
      s("Zondag: rustig. Ik bel met mama en ik lees een boek. Morgen begint de week weer.", "Sunday: quiet. I call mum and I read a book. Tomorrow the week starts again."),
    ],
  ],
  tasks: [
    pairs("Which day?", "maandag=biology and Dutch class | woensdag=he sleeps until ten | donderdag=football | zaterdag=he works in the café", true),
    tf("Op woensdag kookt Luca voor zijn huisgenoten.", "On Wednesday Luca cooks for his housemates.", true),
    mc("How does the football match end?", ["They win 3–1", "They lose 3–1", "It's a draw"], 1),
    tf("Op vrijdag gaat Luca vroeg naar bed.", "On Friday Luca goes to bed early.", false),
    mc("Why does Luca write in a notebook?", ["For his biology class", "To practise his Dutch", "For his mother"], 1),
  ],
};

export const kamerTeHuur: ReadingText = {
  id: "kamer-te-huur",
  level: "A1",
  title: "Kamer te huur",
  titleTranslation: "Room for rent",
  grammar: ["adjective-e", "prepositions", "er-is"],
  paragraphs: [
    [
      s("Fatima zoekt een kamer in Leiden.", "Fatima is looking for a room in Leiden."),
      s("Ze wil niet meer elke dag met de trein uit Den Haag komen.", "She doesn't want to come by train from The Hague every day any more."),
      s("Op internet leest ze deze advertentie:", "Online she reads this ad:"),
    ],
    [
      s("Kamer te huur in de Haarlemmerstraat.", "Room for rent on the Haarlemmerstraat."),
      s("Een lichte kamer van vijftien vierkante meter, op de tweede verdieping.", "A bright room of fifteen square metres, on the second floor."),
      s("Er is een groot raam met uitzicht op de gracht.", "There's a big window with a view of the canal."),
      s("Je deelt de keuken en de badkamer met twee studenten.", "You share the kitchen and the bathroom with two students."),
      s("De huur is vijfhonderdvijftig euro per maand, met gas, water en licht.", "The rent is five hundred and fifty euros a month, including gas, water and electricity."),
      s("Geen huisdieren, niet roken.", "No pets, no smoking."),
      s("Vanaf één maart. Bel of mail Mark.", "From the first of March. Call or email Mark."),
    ],
    [
      s("Fatima belt meteen.", "Fatima calls straight away."),
      s("Ze mag zaterdag om elf uur komen kijken.", "She can come and have a look on Saturday at eleven."),
      s("De kamer is mooi, maar de trap is steil en de keuken is vuil.", "The room is nice, but the stairs are steep and the kitchen is dirty."),
      s("De andere studenten zijn wel heel aardig.", "The other students are really nice, though."),
      s("\"Ik wil hem graag,\" zegt ze. \"Een vuile keuken kun je schoonmaken!\"", "\"I'd like it,\" she says. \"You can clean a dirty kitchen!\""),
    ],
  ],
  tasks: [
    mc("Why does Fatima want a room in Leiden?", ["Her house in The Hague is too small", "She doesn't want to take the train every day", "She has a new job"], 1),
    tf("De kamer is op de begane grond.", "The room is on the ground floor.", false),
    tf("Fatima mag een kat meenemen.", "Fatima may bring a cat.", false),
    pairs("The ad: connect.", "size=15 square metres | rent=€550 a month | free from=1 March | view=the canal"),
    mc("What does Fatima think of the dirty kitchen?", ["She doesn't want the room", "You can clean it", "She wants a lower rent"], 1),
  ],
};

export const inHetZiekenhuis: ReadingText = {
  id: "noor-in-het-ziekenhuis",
  level: "A1",
  title: "Noor in het ziekenhuis",
  titleTranslation: "Noor at the hospital",
  grammar: ["modal-verbs", "separable-verbs", "time-numbers"],
  paragraphs: [
    [
      s("Noor studeert geneeskunde. Twee dagen per week werkt ze in het ziekenhuis.", "Noor studies medicine. Two days a week she works at the hospital."),
      s("Ze is nog geen dokter, maar ze leert veel.", "She's not a doctor yet, but she learns a lot."),
    ],
    [
      s("Haar dag begint vroeg. Om half zeven staat ze op, en om half acht is ze in het ziekenhuis.", "Her day starts early. At half past six she gets up, and at half past seven she's at the hospital."),
      s("Eerst trekt ze haar witte jas aan.", "First she puts on her white coat."),
      s("Dan praat ze met de andere artsen over de patiënten.", "Then she talks with the other doctors about the patients."),
    ],
    [
      s("Daarna gaat ze met dokter Visser naar de patiënten.", "After that she goes to the patients with Dr Visser."),
      s("Ze stelt vragen: \"Hoe gaat het vandaag? Heeft u pijn? Kunt u goed slapen?\"", "She asks questions: \"How are you today? Are you in pain? Can you sleep well?\""),
      s("Noor moet alles opschrijven.", "Noor has to write everything down."),
      s("Ze mag nog geen medicijnen geven. Dat doet dokter Visser.", "She's not allowed to give medicine yet. Dr Visser does that."),
    ],
    [
      s("Om twaalf uur heeft ze pauze. Ze eet een broodje in de kantine.", "At twelve she has a break. She eats a roll in the canteen."),
      s("'s Middags is het rustiger. Ze leest en ze leert.", "In the afternoon it's quieter. She reads and studies."),
      s("Om vijf uur fietst ze naar huis. Ze is moe, maar blij.", "At five she cycles home. She's tired, but happy."),
      s("\"Ik wil later huisarts worden,\" zegt ze. \"Net als mijn vader.\"", "\"Later I want to become a GP,\" she says. \"Just like my father.\""),
    ],
  ],
  tasks: [
    order("Put Noor's day in order.", "She gets up at half past six", "She puts on her white coat", "She visits patients with Dr Visser", "She eats a roll in the canteen", "She cycles home"),
    tf("Noor mag medicijnen geven.", "Noor is allowed to give medicine.", false),
    mc("What does Noor have to do during the visits?", ["Write everything down", "Give injections", "Bring food"], 0),
    tf("'s Middags is het druk in het ziekenhuis.", "In the afternoon it's busy at the hospital.", false),
    mc("What does Noor want to become?", ["A surgeon", "A GP, like her father", "A teacher"], 1),
  ],
};

export const gezondLeven: ReadingText = {
  id: "gezond-leven",
  level: "A1",
  title: "Gezond leven",
  titleTranslation: "Living healthily",
  grammar: ["negation", "modal-verbs", "imperative"],
  paragraphs: [
    [
      s("Bram voelt zich niet fit.", "Bram doesn't feel fit."),
      s("Hij slaapt slecht, hij eet veel friet en hij sport nooit.", "He sleeps badly, he eats a lot of chips and he never does sport."),
      s("\"Ik wil gezonder leven,\" zegt hij op een avond. \"Maar hoe?\"", "\"I want to live more healthily,\" he says one evening. \"But how?\""),
    ],
    [
      s("Noor geeft hem tips.", "Noor gives him tips."),
      s("\"Eet elke dag groente en fruit. Drink minder bier en meer water.\"", "\"Eat vegetables and fruit every day. Drink less beer and more water.\""),
      s("\"Ga niet zo laat naar bed, en kijk 's avonds niet op je telefoon.\"", "\"Don't go to bed so late, and don't look at your phone in the evening.\""),
      s("\"En beweeg meer. Je hoeft niet naar de sportschool. Wandelen is ook goed.\"", "\"And move more. You don't have to go to the gym. Walking is good too.\""),
    ],
    [
      s("Luca heeft ook een idee. \"Kom op zaterdag met mij voetballen!\"", "Luca has an idea too. \"Come and play football with me on Saturday!\""),
      s("Bram twijfelt. \"Ik kan niet voetballen.\"", "Bram hesitates. \"I can't play football.\""),
      s("\"Dat maakt niet uit. Het is voor de lol.\"", "\"It doesn't matter. It's for fun.\""),
    ],
    [
      s("Een maand later gaat het beter.", "A month later things are better."),
      s("Bram fietst elke dag naar zijn werk en hij voetbalt op zaterdag.", "Bram cycles to work every day and he plays football on Saturdays."),
      s("Hij eet minder friet, maar niet geen friet. \"Eén keer per week mag het,\" lacht hij.", "He eats fewer chips, but not no chips. \"Once a week is allowed,\" he laughs."),
    ],
  ],
  tasks: [
    tf("Bram sport elke dag.", "Bram does sport every day.", false),
    pairs("Noor's tips: connect.", "eat=vegetables and fruit | drink=more water | in the evening=no phone | move=walking is good too"),
    mc("What does Luca suggest?", ["Going to the gym", "Playing football on Saturday", "Cycling to the sea"], 1),
    tf("Een maand later eet Bram helemaal geen friet meer.", "A month later Bram doesn't eat any chips at all.", false),
    mc("How does Bram go to work now?", ["By bus", "On foot", "By bike"], 2),
  ],
};

export const vrijeTijdText: ReadingText = {
  id: "wat-doe-jij-in-je-vrije-tijd",
  level: "A1",
  title: "Wat doe jij in je vrije tijd?",
  titleTranslation: "What do you do in your free time?",
  grammar: ["gaan-future", "het-subject", "conjunctions"],
  paragraphs: [
    [
      s("De studentenkrant van Leiden vraagt aan vier studenten: wat doe jij in je vrije tijd?", "Leiden's student paper asks four students: what do you do in your free time?"),
    ],
    [
      s("Fatima (24): \"Ik zing in een koor. We oefenen elke donderdag in een oude kerk.", "Fatima (24): \"I sing in a choir. We practise every Thursday in an old church."),
      s("In december gaan we een concert geven. Ik vind het spannend!\"", "In December we're going to give a concert. I find it exciting!\""),
    ],
    [
      s("Jonas (21): \"Ik speel graag spelletjes met vrienden, op de computer of aan tafel.", "Jonas (21): \"I like playing games with friends, on the computer or at the table."),
      s("Op vrijdagavond spelen we vaak tot twee uur 's nachts.\"", "On Friday evenings we often play until two in the morning.\""),
    ],
    [
      s("Noor (21): \"Ik wandel graag, ook als het regent.", "Noor (21): \"I like walking, even when it rains."),
      s("Volgend weekend ga ik met mijn broer langs de zee lopen, van Katwijk naar Noordwijk.\"", "Next weekend I'm going to walk along the sea with my brother, from Katwijk to Noordwijk.\""),
    ],
    [
      s("Luca (23): \"Ik heb niet veel vrije tijd, want ik studeer en ik werk.", "Luca (23): \"I don't have much free time, because I study and I work."),
      s("Maar op zaterdag speel ik voetbal, en ik kijk graag films. Het liefst Italiaanse films, natuurlijk!\"", "But on Saturdays I play football, and I like watching films. Preferably Italian films, of course!\""),
    ],
    [
      s("En jij? Wat doe jij in je vrije tijd? Stuur een mail naar de krant!", "And you? What do you do in your free time? Send an email to the paper!"),
    ],
  ],
  tasks: [
    pairs("Who does what?", "Fatima=sings in a choir | Jonas=plays games with friends | Noor=goes walking | Luca=plays football and watches films"),
    tf("Het koor oefent in een school.", "The choir practises in a school.", false),
    mc("Where is Noor going to walk next weekend?", ["In the woods", "Along the sea", "Through Leiden"], 1),
    tf("Noor wandelt niet als het regent.", "Noor doesn't walk when it rains.", false),
    mc("Why doesn't Luca have much free time?", ["He studies and works", "He's often ill", "He visits Italy"], 0),
  ],
};
