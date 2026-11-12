import type { UnitContent } from "./types";

export const eten: UnitContent = {
  id: "a1-eten",
  level: "A1",
  title: "Eten en boodschappen",
  titleTranslation: "Food and shopping",
  canDo: [
    "Buy food at a market or shop and ask what it costs",
    "Understand prices and amounts",
    "Follow and give simple cooking instructions",
  ],
  texts: [
    {
      id: "op-de-markt",
      level: "A1",
      title: "Op de markt",
      titleTranslation: "At the market",
      grammar: ["er-is", "demonstratives", "time-numbers", "plurals", "modal-verbs", "diminutives"],
      paragraphs: [
        [
          {
            text: "Op zaterdag is er markt in Leiden.",
            translation: "On Saturdays there's a market in Leiden.",
          },
          {
            text: "De markt is groot en heel druk.",
            translation: "The market is big and very busy.",
          },
          {
            text: "Er zijn kramen met groente, fruit, vis, kaas, brood en bloemen.",
            translation: "There are stalls with vegetables, fruit, fish, cheese, bread and flowers.",
          },
          {
            text: "Luca gaat met Bram naar de markt.",
            translation: "Luca goes to the market with Bram.",
          },
          {
            text: "Ze hebben een lijstje: aardappels, uien, tomaten, bananen en een stuk kaas.",
            translation: "They have a little list: potatoes, onions, tomatoes, bananas and a piece of cheese.",
          },
        ],
        [
          {
            text: "Bij de groenteman kopen ze een kilo aardappels en drie uien.",
            translation: "At the greengrocer's they buy a kilo of potatoes and three onions.",
          },
          {
            text: "\"Hoeveel kosten deze tomaten?\" vraagt Luca.",
            translation: "\"How much are these tomatoes?\" asks Luca.",
          },
          {
            text: "\"Twee euro vijftig per kilo,\" zegt de man.",
            translation: "\"Two euros fifty a kilo,\" says the man.",
          },
          {
            text: "\"En die tomaten daar?\"",
            translation: "\"And those tomatoes over there?\"",
          },
          {
            text: "\"Die zijn duur, maar heel lekker.\"",
            translation: "\"Those are expensive, but really tasty.\"",
          },
          {
            text: "\"Waarom zijn ze duur?\" \"Ze komen uit de kas van mijn broer. Geen supermarkt heeft deze prijs en deze kwaliteit!\"",
            translation: "\"Why are they expensive?\" \"They come from my brother's greenhouse. No supermarket has this price and this quality!\"",
          },
          {
            text: "Luca neemt de goedkope tomaten. Hij heeft niet veel geld.",
            translation: "Luca takes the cheap tomatoes. He doesn't have much money.",
          },
        ],
        [
          {
            text: "Dan gaan ze naar de kaaskraam.",
            translation: "Then they go to the cheese stall.",
          },
          {
            text: "Er liggen grote, gele kazen op de tafel.",
            translation: "There are big yellow cheeses on the table.",
          },
          {
            text: "\"Wilt u even proeven?\" vraagt de vrouw.",
            translation: "\"Would you like a taste?\" asks the woman.",
          },
          {
            text: "Luca proeft een stukje oude kaas.",
            translation: "Luca tastes a little piece of aged cheese.",
          },
          {
            text: "\"Mmm, lekker! Mag ik een stuk van deze kaas, alstublieft?\"",
            translation: "\"Mmm, delicious! Could I have a piece of this cheese, please?\"",
          },
          {
            text: "\"Natuurlijk. Is dit goed?\" \"Ja, prima.\"",
            translation: "\"Of course. Is this alright?\" \"Yes, fine.\"",
          },
          {
            text: "\"Dat is dan zes euro twintig. Wilt u pinnen?\" \"Ja, graag.\"",
            translation: "\"That'll be six euros twenty. Would you like to pay by card?\" \"Yes, please.\"",
          },
          {
            text: "Op de markt is er geen kassa: je kunt betalen met je pinpas of met geld.",
            translation: "At the market there's no checkout: you can pay with your bank card or with cash.",
          },
        ],
        [
          {
            text: "Bram koopt nog een zakje kibbeling: kleine stukjes gebakken vis.",
            translation: "Bram also buys a little bag of kibbeling: small pieces of fried fish.",
          },
          {
            text: "\"Dat moet je proberen,\" zegt hij. \"Het is typisch Nederlands.\"",
            translation: "\"You have to try this,\" he says. \"It's typically Dutch.\"",
          },
          {
            text: "Ze eten de vis op een bank bij de gracht.",
            translation: "They eat the fish on a bench by the canal.",
          },
          {
            text: "Luca heeft honger, en de vis is warm en lekker.",
            translation: "Luca is hungry, and the fish is warm and tasty.",
          },
          {
            text: "Hun tassen zijn vol en hun portemonnee is bijna leeg. Een goede zaterdag!",
            translation: "Their bags are full and their wallet is almost empty. A good Saturday!",
          },
        ],
      ],
    },
    {
      id: "samen-koken",
      level: "A1",
      title: "Samen koken",
      titleTranslation: "Cooking together",
      grammar: ["imperative", "separable-verbs", "modal-verbs", "object-pronouns", "negation"],
      paragraphs: [
        [
          { text: "Het is woensdagavond.", translation: "It's Wednesday evening." },
          {
            text: "Luca kookt voor zijn huisgenoten. Hij maakt pasta met tomatensaus, net als zijn oma.",
            translation: "Luca is cooking for his housemates. He's making pasta with tomato sauce, just like his grandma.",
          },
          { text: "Noor helpt hem.", translation: "Noor helps him." },
        ],
        [
          {
            text: "\"Wat moet ik doen?\" vraagt Noor.",
            translation: "\"What should I do?\" asks Noor.",
          },
          {
            text: "\"Snijd eerst de uien, alsjeblieft. Klein, niet groot!\"",
            translation: "\"Cut the onions first, please. Small, not big!\"",
          },
          {
            text: "Noor pakt een mes en begint. \"Au, mijn ogen!\"",
            translation: "Noor grabs a knife and starts. \"Ow, my eyes!\"",
          },
          {
            text: "Luca zet een grote pan met water op het vuur.",
            translation: "Luca puts a big pan of water on the stove.",
          },
          {
            text: "\"Doe er een beetje zout in. Niet te veel!\"",
            translation: "\"Put a bit of salt in it. Not too much!\"",
          },
          {
            text: "Dan bakt hij de uien in olie en doet hij de tomaten erbij.",
            translation: "Then he fries the onions in oil and adds the tomatoes.",
          },
        ],
        [
          { text: "Om half zeven komt Bram thuis.", translation: "At half past six Bram comes home." },
          {
            text: "\"Wat ruikt het hier lekker! Ik heb zo'n honger.\"",
            translation: "\"It smells so good in here! I'm so hungry.\"",
          },
          {
            text: "\"Over tien minuten is het eten klaar. Wil jij de tafel dekken?\"",
            translation: "\"Dinner's ready in ten minutes. Will you set the table?\"",
          },
          {
            text: "\"Ja hoor. Wil je iets drinken? Ik heb dorst. Water? Bier?\"",
            translation: "\"Sure. Do you want something to drink? I'm thirsty. Water? Beer?\"",
          },
          {
            text: "\"Ik wil graag een glas rode wijn. Er staat een fles in de kast.\"",
            translation: "\"I'd like a glass of red wine. There's a bottle in the cupboard.\"",
          },
        ],
        [
          {
            text: "Om zeven uur zitten ze aan tafel. \"Eet smakelijk!\" zegt Noor.",
            translation: "At seven they sit down at the table. \"Enjoy your meal!\" says Noor.",
          },
          {
            text: "Bram neemt een hap. \"Dit is de beste pasta van Leiden!\"",
            translation: "Bram takes a bite. \"This is the best pasta in Leiden!\"",
          },
          {
            text: "Na het eten ruimt Bram de tafel op en wast Noor af.",
            translation: "After dinner Bram clears the table and Noor does the dishes.",
          },
          {
            text: "Luca hoeft niets te doen. Dat is de regel in hun huis: de kok mag op de bank zitten.",
            translation: "Luca doesn't have to do anything. That's the rule in their house: the cook gets to sit on the sofa.",
          },
        ],
        [
          {
            text: "Bij Noor thuis in Groningen eten ze anders.",
            translation: "At Noor's home in Groningen they eat differently.",
          },
          {
            text: "Om zes uur warm eten: aardappels, groente en vlees.",
            translation: "A hot meal at six: potatoes, vegetables and meat.",
          },
          {
            text: "En als ontbijt en lunch een boterham met kaas of hagelslag. Rijst of pasta eten ze bijna nooit.",
            translation: "And for breakfast and lunch a slice of bread with cheese or chocolate sprinkles. They hardly ever eat rice or pasta.",
          },
          {
            text: "\"Hagelslag? Op brood?\" Luca vindt dat raar, maar hij wil het morgen proberen.",
            translation: "\"Sprinkles? On bread?\" Luca thinks that's weird, but he wants to try it tomorrow.",
          },
        ],
      ],
    },
  ],
};

export const dagEnTijd: UnitContent = {
  id: "a1-dag-en-tijd",
  level: "A1",
  title: "Dag en tijd",
  titleTranslation: "Days and time",
  canDo: [
    "Describe your daily routine",
    "Tell the time, including Dutch 'half' times",
    "Make an appointment: suggest a day, time and place",
  ],
  texts: [
    {
      id: "een-gewone-dag",
      level: "A1",
      title: "Een gewone dag",
      titleTranslation: "An ordinary day",
      grammar: ["separable-verbs", "verb-second", "time-numbers", "present-regular", "conjunctions"],
      paragraphs: [
        [
          {
            text: "Luca staat elke dag om zeven uur op. Opstaan is niet makkelijk, want hij is geen ochtendmens.",
            translation: "Luca gets up at seven every day. Getting up isn't easy, because he isn't a morning person.",
          },
          {
            text: "Eerst gaat hij douchen. Daarna eet hij ontbijt: brood met boter en kaas, een ei en een kopje koffie met melk, zonder suiker.",
            translation: "First he has a shower. Then he has breakfast: bread with butter and cheese, an egg and a cup of coffee with milk, no sugar.",
          },
          {
            text: "Om half negen fietst hij naar de universiteit.",
            translation: "At half past eight he cycles to the university.",
          },
          {
            text: "Het is tien minuten fietsen. Als het hard regent, neemt hij de bus. Die stopt bijna voor de deur.",
            translation: "It's a ten-minute bike ride. If it's raining hard, he takes the bus. It stops almost outside the door.",
          },
        ],
        [
          {
            text: "'s Ochtends heeft hij les. Het eerste uur is biologie, het tweede uur is scheikunde.",
            translation: "In the morning he has class. The first hour is biology, the second hour is chemistry.",
          },
          {
            text: "Om twaalf uur eet hij met andere studenten in de kantine.",
            translation: "At twelve he eats with other students in the canteen.",
          },
          {
            text: "Veel Nederlandse studenten nemen hun lunch van huis mee: twee boterhammen en een appel.",
            translation: "Many Dutch students bring their lunch from home: two sandwiches and an apple.",
          },
          {
            text: "Luca vindt dat een beetje saai, maar hij doet het nu ook. Het is goedkoop!",
            translation: "Luca finds that a bit boring, but he does it now too. It's cheap!",
          },
        ],
        [
          {
            text: "'s Middags gaat hij naar de bibliotheek. Daar leest hij en schrijft hij.",
            translation: "In the afternoon he goes to the library. There he reads and writes.",
          },
          {
            text: "Om vijf uur komt hij thuis. Soms doet hij eerst boodschappen.",
            translation: "At five he comes home. Sometimes he does the shopping first.",
          },
          {
            text: "'s Avonds kookt hij, kijkt hij een film of belt hij met zijn familie.",
            translation: "In the evening he cooks, watches a film or calls his family.",
          },
          {
            text: "Om elf uur gaat hij naar bed. Hij is dan meestal heel moe, en hij slaapt de hele nacht.",
            translation: "At eleven he goes to bed. By then he's usually very tired, and he sleeps through the night.",
          },
        ],
        [
          {
            text: "Op vrijdag is het anders.",
            translation: "On Fridays it's different.",
          },
          {
            text: "Dan gaat hij met vrienden naar het café van Bram.",
            translation: "Then he goes to Bram's café with friends.",
          },
          {
            text: "Ze drinken een biertje en praten tot laat.",
            translation: "They have a beer and talk until late.",
          },
          {
            text: "En op zaterdag? Dan staat hij nooit vroeg op!",
            translation: "And on Saturdays? Then he never gets up early!",
          },
        ],
      ],
    },
    {
      id: "een-afspraak",
      level: "A1",
      title: "Een afspraak",
      titleTranslation: "An appointment",
      grammar: ["modal-verbs", "questions", "time-numbers", "gaan-future", "separable-verbs"],
      paragraphs: [
        [
          {
            text: "Fatima zit naast Luca in de taalles.",
            translation: "Fatima sits next to Luca in Dutch class.",
          },
          {
            text: "Ze komt uit Marokko en ze woont al een jaar in Den Haag.",
            translation: "She's from Morocco and she's been living in The Hague for a year.",
          },
          {
            text: "Na de les praten ze nog even.",
            translation: "After class they chat for a bit.",
          },
        ],
        [
          {
            text: "\"Zullen we samen Nederlands oefenen?\" vraagt Fatima.",
            translation: "\"Shall we practise Dutch together?\" asks Fatima.",
          },
          {
            text: "\"Goed idee! Wanneer kun jij?\"",
            translation: "\"Good idea! When can you do it?\"",
          },
          {
            text: "\"Ik kan op dinsdag of donderdag. Op maandag en woensdag moet ik werken.\"",
            translation: "\"I can do Tuesday or Thursday. On Mondays and Wednesdays I have to work.\"",
          },
          {
            text: "\"Donderdag kan ik niet, dan heb ik voetbal. Dinsdag is goed. Hoe laat?\"",
            translation: "\"I can't do Thursday, I have football then. Tuesday is good. What time?\"",
          },
          {
            text: "\"Om kwart over vier? Na mijn werk.\"",
            translation: "\"At quarter past four? After my work.\"",
          },
          {
            text: "\"Prima. Waar spreken we af?\"",
            translation: "\"Fine. Where shall we meet?\"",
          },
          {
            text: "\"In de bibliotheek? Daar is het rustig.\"",
            translation: "\"In the library? It's quiet there.\"",
          },
          {
            text: "\"Welke bibliotheek? Er zijn er twee.\" \"De grote, bij het station. Ik kom met de tram uit Den Haag. Ik heb een kaartje voor de hele maand.\"",
            translation: "\"Which library? There are two.\" \"The big one, by the station. I'm coming by tram from The Hague. I have a ticket for the whole month.\"",
          },
          { text: "\"Oké, tot dinsdag dan!\"", translation: "\"Okay, see you Tuesday then!\"" },
        ],
        [
          {
            text: "Thuis schrijft Luca de afspraak in zijn agenda: dinsdag 14 januari, kwart over vier, bibliotheek, Fatima.",
            translation: "At home Luca writes the appointment in his diary: Tuesday 14 January, quarter past four, library, Fatima.",
          },
          {
            text: "Hij wil het niet vergeten.",
            translation: "He doesn't want to forget it.",
          },
        ],
        [
          {
            text: "Op dinsdag is Luca te vroeg. Hij is er al om vier uur.",
            translation: "On Tuesday Luca is too early. He's already there at four.",
          },
          {
            text: "Hij wacht en wacht. Om half vijf belt hij Fatima.",
            translation: "He waits and waits. At half past four he calls Fatima.",
          },
          {
            text: "\"Waar ben je?\" \"Sorry! Mijn trein heeft vertraging. Ik ben er over tien minuten.\"",
            translation: "\"Where are you?\" \"Sorry! My train is delayed. I'll be there in ten minutes.\"",
          },
          {
            text: "\"Geen probleem. Ik wacht op je. Tot straks!\"",
            translation: "\"No problem. I'll wait for you. See you in a bit!\"",
          },
          {
            text: "Typisch Nederland, denkt Luca: de trein is weer te laat.",
            translation: "Typical Netherlands, Luca thinks: the train is late again.",
          },
        ],
      ],
    },
  ],
};
