import { mc, order, pairs, s, tf } from "./helpers";
import type { UnitContent } from "./types";

/** Unit 9: clothes and shops. Unit 10: Dutch holidays through the year. */

export const kleren: UnitContent = {
  id: "a1-kleren",
  level: "A1",
  title: "Kleren en winkels",
  titleTranslation: "Clothes and shops",
  look: { motif: "clog", glaze: "copper" },
  canDo: [
    "Ask for a size, a colour and the price in a shop",
    "Say what you wear and what you like",
    "Order something online and send it back",
  ],
  texts: [
    {
      id: "een-winterjas",
      level: "A1",
      title: "Een winterjas",
      titleTranslation: "A winter coat",
      grammar: ["comparatives", "adjective-e", "demonstratives", "questions"],
      paragraphs: [
        [
          s("Het is november en het is koud.", "It's November and it's cold."),
          s("Luca heeft alleen een dunne jas uit Italië.", "Luca only has a thin coat from Italy."),
          s("\"Je hebt een echte winterjas nodig,\" zegt Noor.", "\"You need a real winter coat,\" says Noor."),
          s("Op zaterdag gaan ze samen naar de stad.", "On Saturday they go into town together."),
        ],
        [
          s("In de eerste winkel zijn de jassen mooi, maar heel duur.", "In the first shop the coats are nice, but very expensive."),
          s("In de tweede winkel is er uitverkoop.", "In the second shop there's a sale."),
          s("Luca ziet een donkerblauwe jas met een capuchon.", "Luca sees a dark blue coat with a hood."),
          s("\"Heeft u deze jas in maat M?\" vraagt hij aan de verkoopster.", "\"Do you have this coat in size M?\" he asks the shop assistant."),
          s("\"Even kijken. Ja, hier is hij. De paskamer is achterin.\"", "\"Let me check. Yes, here it is. The fitting room is at the back.\""),
        ],
        [
          s("Luca past de jas. Hij is warm en zacht, maar de mouwen zijn te lang.", "Luca tries on the coat. It's warm and soft, but the sleeves are too long."),
          s("\"Heeft u hem ook in maat S?\"", "\"Do you have it in size S too?\""),
          s("\"Nee, sorry. Maar deze zwarte jas is ook mooi, en hij is ook in de aanbieding.\"", "\"No, sorry. But this black coat is nice too, and it's also on offer.\""),
          s("De zwarte jas past perfect.", "The black coat fits perfectly."),
        ],
        [
          s("\"Wat kost deze jas?\" \"Eerst negentig euro, nu zestig.\"", "\"How much is this coat?\" \"It was ninety euros, now sixty.\""),
          s("\"Die neem ik!\" Luca betaalt en houdt de jas meteen aan.", "\"I'll take it!\" Luca pays and keeps the coat on straight away."),
          s("Buiten begint het te regenen, maar Luca heeft het lekker warm.", "Outside it starts to rain, but Luca is nice and warm."),
        ],
      ],
      tasks: [
        mc("Why does Luca need a new coat?", ["His coat is broken", "He only has a thin coat", "It's his birthday"], 1),
        tf("De blauwe jas past goed.", "The blue coat fits well.", false),
        mc("What's wrong with the blue coat?", ["It's too expensive", "The sleeves are too long", "It's too small"], 1),
        mc("How much does Luca pay?", ["€90", "€60", "€30"], 1),
        order("Put it in order.", "Noor says he needs a winter coat", "The first shop is too expensive", "Luca tries on the blue coat", "He buys the black coat"),
      ],
    },
    {
      id: "online-bestellen",
      level: "A1",
      title: "Online bestellen",
      titleTranslation: "Ordering online",
      grammar: ["separable-verbs", "time-numbers", "object-pronouns"],
      paragraphs: [
        [
          s("Fatima heeft nieuwe schoenen nodig voor haar werk.", "Fatima needs new shoes for her work."),
          s("Ze heeft geen tijd om naar de winkel te gaan, dus ze bestelt ze online.", "She has no time to go to the shop, so she orders them online."),
          s("Op een website ziet ze bruine schoenen van vijfenveertig euro.", "On a website she sees brown shoes for forty-five euros."),
          s("Ze kiest maat achtendertig en betaalt met haar pinpas.", "She chooses size thirty-eight and pays with her bank card."),
        ],
        [
          s("De volgende dag krijgt ze een berichtje: \"Uw pakket komt vandaag tussen twee en vier uur.\"", "The next day she gets a message: \"Your parcel is coming today between two and four.\""),
          s("Maar Fatima is om drie uur niet thuis.", "But Fatima isn't home at three."),
          s("De bezorger geeft het pakket af bij de buren.", "The delivery person drops the parcel off with the neighbours."),
          s("'s Avonds haalt ze het op. \"Dank u wel!\" \"Graag gedaan, hoor.\"", "In the evening she picks it up. \"Thank you!\" \"You're welcome.\""),
        ],
        [
          s("Thuis maakt ze de doos open en past ze de schoenen.", "At home she opens the box and tries on the shoes."),
          s("Ze zijn te klein! Haar tenen doen pijn.", "They're too small! Her toes hurt."),
          s("Gelukkig kun je ze binnen dertig dagen gratis terugsturen.", "Luckily you can send them back for free within thirty days."),
          s("Ze stopt ze weer in de doos en brengt ze naar het postkantoor in de supermarkt.", "She puts them back in the box and takes them to the post office in the supermarket."),
        ],
        [
          s("Een week later heeft ze haar geld terug.", "A week later she has her money back."),
          s("Ze bestelt dezelfde schoenen opnieuw, nu in maat negenendertig.", "She orders the same shoes again, now in size thirty-nine."),
          s("Ze passen. Eindelijk!", "They fit. Finally!"),
        ],
      ],
      tasks: [
        tf("Fatima koopt de schoenen in een winkel.", "Fatima buys the shoes in a shop.", false),
        mc("Where does the parcel go?", ["Back to the shop", "To the neighbours", "To her work"], 1),
        mc("What's wrong with the shoes?", ["They're too big", "They're the wrong colour", "They're too small"], 2),
        tf("Terugsturen is gratis.", "Sending back is free.", true),
        mc("Which size fits?", ["37", "38", "39"], 2),
      ],
    },
    {
      id: "wat-trek-ik-aan",
      level: "A1",
      title: "Wat trek ik aan?",
      titleTranslation: "What shall I wear?",
      grammar: ["graag-liever", "separable-verbs", "possessives", "adjective-e"],
      paragraphs: [
        [
          s("Morgen heeft Luca een gesprek voor een stage bij een laboratorium.", "Tomorrow Luca has an interview for an internship at a lab."),
          s("Hij staat voor zijn kast en twijfelt.", "He stands in front of his wardrobe and hesitates."),
          s("\"Wat trek ik aan?\" vraagt hij aan Bram.", "\"What shall I wear?\" he asks Bram."),
        ],
        [
          s("\"Een pak? Met een stropdas?\"", "\"A suit? With a tie?\""),
          s("Bram lacht. \"Nee joh, dit is Nederland. Niemand draagt hier een stropdas.\"", "Bram laughs. \"No way, this is the Netherlands. Nobody wears a tie here.\""),
          s("\"Trek gewoon een nette broek aan, met een wit overhemd.\"", "\"Just put on smart trousers, with a white shirt.\""),
          s("\"En je schoenen? Niet je oude sportschoenen!\"", "\"And your shoes? Not your old trainers!\""),
        ],
        [
          s("Luca pakt een grijze broek, een wit overhemd en een blauwe trui.", "Luca takes grey trousers, a white shirt and a blue jumper."),
          s("Zijn zwarte schoenen staan onder het bed.", "His black shoes are under the bed."),
          s("Hij trekt alles aan en kijkt in de spiegel.", "He puts everything on and looks in the mirror."),
          s("\"En?\" \"Prima! Je ziet er goed uit,\" zegt Bram. \"Netjes, maar niet te netjes.\"", "\"Well?\" \"Great! You look good,\" says Bram. \"Smart, but not too smart.\""),
        ],
        [
          s("De volgende dag fietst Luca in de regen naar het laboratorium.", "The next day Luca cycles to the lab in the rain."),
          s("Zijn broek is nat en zijn haar ook.", "His trousers are wet and so is his hair."),
          s("Maar de vrouw van het laboratorium draagt een spijkerbroek. Ze lacht: \"Welkom! Wil je een handdoek?\"", "But the woman from the lab is wearing jeans. She laughs: \"Welcome! Would you like a towel?\""),
        ],
      ],
      tasks: [
        mc("Why does Luca need nice clothes?", ["For a party", "For an internship interview", "For a wedding"], 1),
        tf("Bram zegt: draag een stropdas.", "Bram says: wear a tie.", false),
        pairs("What does Luca wear?", "trousers=grey | shirt=white | jumper=blue | shoes=black"),
        tf("De vrouw van het laboratorium draagt een pak.", "The woman from the lab is wearing a suit.", false),
        mc("Why does Luca arrive wet?", ["He falls in a canal", "He cycles in the rain", "He spills coffee"], 1),
      ],
    },
  ],
};

export const feestdagen: UnitContent = {
  id: "a1-feestdagen",
  level: "A1",
  title: "Feestdagen",
  titleTranslation: "Holidays",
  look: { motif: "crown", glaze: "ochre" },
  canDo: [
    "Talk about Dutch holidays and what people do",
    "Wish someone a happy holiday or a happy new year",
    "Understand dates and simple plans for a celebration",
  ],
  texts: [
    {
      id: "koningsdag",
      level: "A1",
      title: "Koningsdag",
      titleTranslation: "King's Day",
      grammar: ["time-numbers", "er-is", "plurals"],
      paragraphs: [
        [
          s("Op zevenentwintig april is het Koningsdag.", "On the twenty-seventh of April it's King's Day."),
          s("Dan is de koning jarig.", "That's the king's birthday."),
          s("Veel mensen zijn vrij en heel Nederland is oranje.", "Lots of people have the day off and the whole country is orange."),
        ],
        [
          s("Waarom oranje? De familie van de koning heet Van Oranje-Nassau.", "Why orange? The king's family is called Van Oranje-Nassau (of Orange-Nassau)."),
          s("Mensen dragen oranje kleren, oranje hoeden en soms zelfs een oranje pruik.", "People wear orange clothes, orange hats and sometimes even an orange wig."),
        ],
        [
          s("Overal in de stad is er vrijmarkt.", "All over town there's a free market."),
          s("Op de stoep verkopen mensen hun oude spullen: boeken, speelgoed, kleren en lampen.", "On the pavement people sell their old things: books, toys, clothes and lamps."),
          s("Kinderen spelen muziek of verkopen zelfgemaakte koekjes.", "Children play music or sell home-made biscuits."),
          s("Alles is goedkoop. Je kunt een boek kopen voor één euro.", "Everything is cheap. You can buy a book for one euro."),
        ],
        [
          s("Luca gaat met Noor en Bram naar de vrijmarkt.", "Luca goes to the free market with Noor and Bram."),
          s("Bram verkoopt zijn oude cd's, maar niemand wil ze hebben.", "Bram sells his old CDs, but nobody wants them."),
          s("Luca koopt een lamp voor zijn kamer voor drie euro.", "Luca buys a lamp for his room for three euros."),
          s("'s Middags is er muziek op de grachten en op de pleinen.", "In the afternoon there's music on the canals and in the squares."),
          s("Het is druk, het is gezellig en iedereen is oranje.", "It's busy, it's cosy and everyone is orange."),
        ],
      ],
      tasks: [
        mc("When is King's Day?", ["5 December", "27 April", "1 January"], 1),
        mc("Why is everything orange?", ["The king's family is called Van Oranje-Nassau", "It's the colour of spring", "Orange is cheap"], 0),
        tf("Op de vrijmarkt is alles duur.", "At the free market everything is expensive.", false),
        tf("Bram verkoopt veel cd's.", "Bram sells a lot of CDs.", false),
        mc("What does Luca buy?", ["A book", "A lamp", "An orange hat"], 1),
      ],
    },
    {
      id: "sinterklaas",
      level: "A1",
      title: "Sinterklaas",
      titleTranslation: "Sinterklaas",
      grammar: ["diminutives", "possessives", "het-subject"],
      paragraphs: [
        [
          s("Op vijf december vieren de Nederlanders Sinterklaas.", "On the fifth of December the Dutch celebrate Sinterklaas."),
          s("Sinterklaas is een oude man met een lange witte baard, een rode mantel en een hoge rode hoed.", "Sinterklaas is an old man with a long white beard, a red cloak and a tall red hat."),
          s("Hij komt in november met de boot uit Spanje, met een wit paard.", "He comes by boat from Spain in November, with a white horse."),
        ],
        [
          s("Kinderen zetten 's avonds hun schoen bij de deur.", "In the evening children put their shoe by the door."),
          s("Ze zingen liedjes en leggen een wortel in de schoen, voor het paard.", "They sing songs and put a carrot in the shoe, for the horse."),
          s("De volgende ochtend zit er een cadeautje of een chocoladeletter in.", "The next morning there's a little present or a chocolate letter in it."),
        ],
        [
          s("Volwassenen vieren het vaak met lootjes.", "Adults often celebrate it by drawing names."),
          s("Je trekt een naam en je koopt een cadeau voor die persoon.", "You draw a name and you buy a present for that person."),
          s("Bij het cadeau schrijf je een gedicht. Het gedicht is grappig, en soms een beetje gemeen.", "With the present you write a poem. The poem is funny, and sometimes a bit mean."),
        ],
        [
          s("Luca viert Sinterklaas bij Noor thuis in Groningen.", "Luca celebrates Sinterklaas at Noor's home in Groningen."),
          s("Hij heeft de naam van Thijs, de broer van Noor.", "He has drawn Thijs, Noor's brother."),
          s("Hij koopt een voetbal en schrijft een kort gedicht: \"Voor Thijs een bal, want hij speelt voetbal, altijd en overal!\"", "He buys a football and writes a short poem: \"For Thijs a ball, because he plays football, always and everywhere!\""),
          s("Iedereen lacht. \"Het is kort,\" zegt Noor, \"maar het rijmt!\"", "Everyone laughs. \"It's short,\" says Noor, \"but it rhymes!\""),
        ],
      ],
      tasks: [
        mc("Where does Sinterklaas come from?", ["Spain", "Italy", "Turkey"], 0),
        tf("Kinderen leggen een wortel in hun schoen.", "Children put a carrot in their shoe.", true),
        order("Put the children's evening in order.", "They put their shoe by the door", "They sing songs", "In the morning there's a present in the shoe"),
        mc("What do adults write with a present?", ["A card", "A poem", "A list"], 1),
        pairs("Luca's Sinterklaas: connect.", "where=at Noor's home in Groningen | whose name=Thijs | present=a football | poem=short, but it rhymes"),
      ],
    },
    {
      id: "oud-en-nieuw",
      level: "A1",
      title: "Oud en nieuw",
      titleTranslation: "New Year's Eve",
      grammar: ["gaan-future", "conjunctions", "modal-verbs"],
      paragraphs: [
        [
          s("Op eenendertig december is het oudejaarsavond.", "The thirty-first of December is New Year's Eve."),
          s("In de keuken bakt Bram oliebollen: ronde bollen van deeg, gebakken in olie, met poedersuiker.", "In the kitchen Bram is frying oliebollen: round balls of dough, fried in oil, with icing sugar."),
          s("Het huis ruikt naar olie, maar de oliebollen zijn heerlijk.", "The house smells of oil, but the oliebollen are delicious."),
        ],
        [
          s("Om acht uur kijken ze televisie. Er is een grappige show over het oude jaar.", "At eight they watch TV. There's a funny show about the old year."),
          s("Ze praten over hun goede voornemens voor het nieuwe jaar.", "They talk about their New Year's resolutions."),
          s("Noor wil meer sporten. Bram wil stoppen met roken.", "Noor wants to do more sport. Bram wants to stop smoking."),
          s("En Luca? \"Ik ga elke dag een half uur Nederlands leren,\" zegt hij.", "And Luca? \"I'm going to study Dutch for half an hour every day,\" he says."),
        ],
        [
          s("Om twaalf uur is het nieuwjaar.", "At twelve it's the new year."),
          s("Iedereen geeft elkaar drie zoenen en zegt: \"Gelukkig nieuwjaar!\"", "Everyone gives each other three kisses and says: \"Happy new year!\""),
          s("Buiten is er overal vuurwerk. Het is heel lawaaiig en de lucht is rood en groen.", "Outside there are fireworks everywhere. It's very noisy and the sky is red and green."),
          s("De kat van de buren zit bang onder de bank.", "The neighbours' cat sits scared under the sofa."),
        ],
        [
          s("Op één januari slaapt iedereen lang.", "On the first of January everyone sleeps in."),
          s("Maar sommige mensen gaan om twaalf uur in de koude zee zwemmen: de nieuwjaarsduik.", "But some people go swimming in the cold sea at twelve: the New Year's dive."),
          s("\"Gaan we ook?\" vraagt Noor. \"Nee,\" zegt Luca. \"Dat is mijn voornemen niet!\"", "\"Are we going too?\" asks Noor. \"No,\" says Luca. \"That's not my resolution!\""),
        ],
      ],
      tasks: [
        mc("What are oliebollen?", ["Fried balls of dough with icing sugar", "Chocolate letters", "Small pancakes"], 0),
        pairs("Their resolutions: connect.", "Noor=do more sport | Bram=stop smoking | Luca=study Dutch every day"),
        tf("Om twaalf uur geven ze elkaar twee zoenen.", "At twelve they give each other two kisses.", false),
        mc("What is the nieuwjaarsduik?", ["A swim in the cold sea on 1 January", "A New Year's party", "A TV show"], 0),
        tf("Luca gaat in de zee zwemmen.", "Luca goes swimming in the sea.", false),
      ],
    },
  ],
};
