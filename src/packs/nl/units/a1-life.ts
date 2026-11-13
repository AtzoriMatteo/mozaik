import type { UnitContent } from "./types";

export const gezondheid: UnitContent = {
  id: "a1-gezondheid",
  level: "A1",
  title: "Gezondheid",
  titleTranslation: "Health",
  canDo: [
    "Say how you feel and where it hurts",
    "Call the GP's practice and make an appointment",
    "Understand simple advice from a doctor",
  ],
  texts: [
    {
      id: "ziek",
      level: "A1",
      title: "Ziek",
      titleTranslation: "Ill",
      grammar: ["reflexive", "zijn-hebben", "negation", "modal-verbs", "object-pronouns", "conjunctions"],
      paragraphs: [
        [
          {
            text: "Het is maandagochtend. Luca wordt wakker, maar hij voelt zich niet goed.",
            translation: "It's Monday morning. Luca wakes up, but he doesn't feel well.",
          },
          {
            text: "Hij heeft hoofdpijn en buikpijn, en hij is heel moe.",
            translation: "He has a headache and stomach ache, and he's very tired.",
          },
          {
            text: "Hij heeft het koud, maar zijn hoofd is warm.",
            translation: "He feels cold, but his head is hot.",
          },
          {
            text: "Gisteren was hij nog gezond. Vandaag is hij ziek.",
            translation: "Yesterday he was still healthy. Today he's ill.",
          },
        ],
        [
          {
            text: "Noor klopt op de deur. \"Luca? Je bent laat. Heb je geen les?\"",
            translation: "Noor knocks on the door. \"Luca? You're late. Don't you have class?\"",
          },
          {
            text: "\"Ik ben ziek. Ik kan niet naar de les.\"",
            translation: "\"I'm ill. I can't go to class.\"",
          },
          {
            text: "Noor komt binnen en kijkt naar hem. \"Je hebt koorts, denk ik. Blijf vandaag in bed.\"",
            translation: "Noor comes in and looks at him. \"You have a fever, I think. Stay in bed today.\"",
          },
          {
            text: "\"Moet ik naar de dokter?\"",
            translation: "\"Do I have to go to the doctor?\"",
          },
          {
            text: "\"Nu nog niet. Drink veel water en slaap. Als je morgen nog ziek bent, bel je de huisarts.\"",
            translation: "\"Not yet. Drink lots of water and sleep. If you're still ill tomorrow, call the GP.\"",
          },
        ],
        [
          {
            text: "Noor gaat naar de supermarkt en haalt soep en sinaasappels voor hem.",
            translation: "Noor goes to the supermarket and gets soup and oranges for him.",
          },
          {
            text: "Ze brengt hem een glas water en een kopje thee.",
            translation: "She brings him a glass of water and a cup of tea.",
          },
          {
            text: "Ze geeft hem ook een paracetamol.",
            translation: "She also gives him a paracetamol.",
          },
          {
            text: "\"Dank je, Noor. Jij bent echt een goede huisgenoot.\"",
            translation: "\"Thanks, Noor. You're a really good housemate.\"",
          },
          {
            text: "\"Ik ben bijna dokter, hè,\" lacht ze. \"Beterschap!\"",
            translation: "\"I'm almost a doctor, you know,\" she laughs. \"Get well soon!\"",
          },
        ],
        [
          {
            text: "Luca stuurt Ingrid een berichtje: hij is ziek en hij komt niet naar de les.",
            translation: "Luca sends Ingrid a message: he's ill and he's not coming to class.",
          },
          {
            text: "Dan slaapt hij de hele dag.",
            translation: "Then he sleeps all day.",
          },
        ],
      ],
    },
    {
      id: "bij-de-huisarts",
      level: "A1",
      title: "Bij de huisarts",
      titleTranslation: "At the GP's",
      grammar: ["questions", "imperative", "modal-verbs", "time-numbers", "possessives"],
      paragraphs: [
        [
          {
            text: "Dinsdag is Luca nog steeds ziek. Om acht uur belt hij de huisarts.",
            translation: "On Tuesday Luca is still ill. At eight he calls the GP.",
          },
          {
            text: "\"Huisartsenpraktijk Oude Vest, goedemorgen.\"",
            translation: "\"Oude Vest GP practice, good morning.\"",
          },
          {
            text: "\"Goedemorgen. Ik wil graag een afspraak maken. Ik ben ziek.\"",
            translation: "\"Good morning. I'd like to make an appointment. I'm ill.\"",
          },
          {
            text: "\"Wat is uw naam en uw geboortedatum?\"",
            translation: "\"What's your name and date of birth?\"",
          },
          {
            text: "\"Luca Bianchi, twaalf mei tweeduizend drie.\"",
            translation: "\"Luca Bianchi, the twelfth of May two thousand and three.\"",
          },
          {
            text: "\"Kunt u om tien over elf komen?\" \"Ja, dat is goed.\"",
            translation: "\"Can you come at ten past eleven?\" \"Yes, that's fine.\"",
          },
        ],
        [
          {
            text: "De huisarts is een vriendelijke vrouw van ongeveer vijftig.",
            translation: "The GP is a friendly woman of about fifty.",
          },
          {
            text: "\"Goedemorgen, meneer Bianchi. Wat zijn uw klachten?\"",
            translation: "\"Good morning, Mr Bianchi. What are your symptoms?\"",
          },
          {
            text: "\"Ik heb sinds zondag koorts en mijn hoofd doet pijn. Mijn buik ook.\"",
            translation: "\"I've had a fever since Sunday and my head hurts. My stomach too.\"",
          },
          {
            text: "\"Doe uw mond open, alstublieft. Zeg eens 'aaa'.\"",
            translation: "\"Open your mouth, please. Say 'aaa'.\"",
          },
          {
            text: "Ze kijkt in zijn mond en luistert naar zijn longen.",
            translation: "She looks in his mouth and listens to his lungs.",
          },
        ],
        [
          {
            text: "\"Het is griep, denk ik. Niets ernstigs. U moet veel rusten en veel drinken.\"",
            translation: "\"It's flu, I think. Nothing serious. You need to rest a lot and drink a lot.\"",
          },
          {
            text: "\"Krijg ik een medicijn?\"",
            translation: "\"Do I get any medicine?\"",
          },
          {
            text: "\"Nee, dat is niet nodig. Neem paracetamol als u pijn hebt, maximaal drie keer per dag.\"",
            translation: "\"No, that's not necessary. Take paracetamol if you're in pain, at most three times a day.\"",
          },
          {
            text: "\"Bel ons als het over een week niet beter is.\"",
            translation: "\"Call us if it isn't better in a week.\"",
          },
          {
            text: "Luca fietst langzaam naar huis. Paracetamol, denkt hij. In Nederland is het antwoord altijd paracetamol.",
            translation: "Luca cycles home slowly. Paracetamol, he thinks. In the Netherlands the answer is always paracetamol.",
          },
        ],
      ],
    },
  ],
};

export const vrijeTijd: UnitContent = {
  id: "a1-vrije-tijd",
  level: "A1",
  title: "Vrije tijd en weer",
  titleTranslation: "Free time and weather",
  canDo: [
    "Talk about the weather and what to wear",
    "Talk about your hobbies and weekend plans",
    "Know what to say at a Dutch birthday party",
  ],
  texts: [
    {
      id: "het-weer",
      level: "A1",
      title: "Het weer",
      titleTranslation: "The weather",
      grammar: ["het-subject", "adjective-e", "gaan-future", "conjunctions", "verb-second"],
      paragraphs: [
        [
          {
            text: "In Nederland praten mensen veel over het weer. Dat is logisch, want het weer verandert vaak.",
            translation: "In the Netherlands people talk a lot about the weather. That makes sense, because the weather changes often.",
          },
          {
            text: "'s Ochtends schijnt de zon, 's middags regent het en 's avonds is er veel wind.",
            translation: "In the morning the sun shines, in the afternoon it rains and in the evening there's a lot of wind.",
          },
          {
            text: "Luca heeft altijd een regenjas in zijn tas.",
            translation: "Luca always has a raincoat in his bag.",
          },
        ],
        [
          {
            text: "In de winter is het koud en donker. Het is soms maar twee of drie graden.",
            translation: "In winter it's cold and dark. Sometimes it's only two or three degrees.",
          },
          {
            text: "Sneeuw is er niet vaak, maar soms vriest het en kun je schaatsen. Slecht weer is normaal: regen, regen en nog eens regen.",
            translation: "There isn't often snow, but sometimes it freezes and you can skate. Bad weather is normal: rain, rain and more rain.",
          },
          {
            text: "Dan draagt Luca een dikke trui, een warme jas en zijn zwarte schoenen.",
            translation: "Then Luca wears a thick jumper, a warm coat and his black shoes.",
          },
          {
            text: "In de zomer is het lekker warm, soms vijfentwintig graden. Dan draagt hij een korte broek.",
            translation: "In summer it's nice and warm, sometimes twenty-five degrees. Then he wears shorts.",
          },
        ],
        [
          {
            text: "Vandaag is het zaterdag en het is mooi weer: een blauwe lucht, weinig wind en twintig graden.",
            translation: "Today is Saturday and the weather is lovely: a blue sky, little wind and twenty degrees.",
          },
          {
            text: "Luca speelt op zaterdag meestal voetbal, en Noor gaat graag wandelen. Maar vandaag willen ze niet sporten.",
            translation: "On Saturdays Luca usually plays football, and Noor likes to go walking. But today they don't want to do sport.",
          },
          {
            text: "\"Zullen we naar het strand gaan?\" vraagt Bram. \"Katwijk is maar twintig minuten fietsen.\"",
            translation: "\"Shall we go to the beach?\" asks Bram. \"Katwijk is only a twenty-minute bike ride.\"",
          },
          {
            text: "Ze fietsen samen naar de zee. Op het strand is het druk.",
            translation: "They cycle to the sea together. The beach is busy.",
          },
          {
            text: "Bram gaat zwemmen, maar het water is koud: maar zestien graden!",
            translation: "Bram goes for a swim, but the water is cold: only sixteen degrees!",
          },
          {
            text: "Luca blijft liever op het zand. Hij leest een boek en luistert naar muziek.",
            translation: "Luca prefers to stay on the sand. He reads a book and listens to music.",
          },
          {
            text: "Na een uur hebben ze dorst. Bram haalt twee ijsjes en twee flesjes water.",
            translation: "After an hour they're thirsty. Bram gets two ice creams and two little bottles of water.",
          },
        ],
        [
          {
            text: "Om vijf uur worden de wolken grijs. \"Kijk,\" zegt Bram. \"Het gaat zo regenen.\"",
            translation: "At five the clouds turn grey. \"Look,\" says Bram. \"It's about to rain.\"",
          },
          {
            text: "Ze fietsen snel naar huis, maar ze zijn te laat. Ze worden helemaal nat.",
            translation: "They cycle home fast, but they're too late. They get completely wet.",
          },
          {
            text: "\"Typisch Nederlands weer,\" zegt Bram. Luca lacht. Hij begint eraan te wennen.",
            translation: "\"Typical Dutch weather,\" says Bram. Luca laughs. He's starting to get used to it.",
          },
        ],
      ],
    },
    {
      id: "een-verjaardag",
      level: "A1",
      title: "Een verjaardag",
      titleTranslation: "A birthday",
      grammar: ["diminutives", "possessives", "imperative", "questions", "pronouns-subject"],
      paragraphs: [
        [
          {
            text: "Volgende week is Noor jarig. Op haar verjaardag wordt ze tweeëntwintig.",
            translation: "Next week it's Noor's birthday. On her birthday she's turning twenty-two.",
          },
          {
            text: "Ze geeft een feestje bij hen thuis, op vrijdagavond om acht uur.",
            translation: "She's having a little party at their house, on Friday evening at eight.",
          },
          {
            text: "Luca wil een cadeau voor haar kopen, maar wat?",
            translation: "Luca wants to buy her a present, but what?",
          },
          {
            text: "\"Ze houdt van lezen,\" zegt Bram. \"Koop een boek voor haar.\"",
            translation: "\"She loves reading,\" says Bram. \"Buy her a book.\"",
          },
        ],
        [
          {
            text: "Het feest begint om acht uur. De familie van Noor komt uit Groningen: haar ouders, haar opa en haar tante.",
            translation: "The party starts at eight. Noor's family comes from Groningen: her parents, her grandpa and her aunt.",
          },
          {
            text: "Alle gasten zitten in een grote kring in de woonkamer.",
            translation: "All the guests sit in a big circle in the living room.",
          },
          {
            text: "Bram legt het uit: \"Je geeft iedereen een hand en je zegt 'gefeliciteerd'.\"",
            translation: "Bram explains: \"You shake everyone's hand and say 'congratulations'.\"",
          },
          {
            text: "\"Iedereen? Ook mensen die ik niet ken?\" \"Ja, iedereen. Ook de buren.\"",
            translation: "\"Everyone? Even people I don't know?\" \"Yes, everyone. The neighbours too.\"",
          },
        ],
        [
          {
            text: "Luca loopt de kring rond. \"Gefeliciteerd met je dochter,\" zegt hij tegen de moeder van Noor.",
            translation: "Luca goes round the circle. \"Congratulations on your daughter,\" he says to Noor's mother.",
          },
          {
            text: "\"Dank je wel! Wil je koffie en een stukje taart?\"",
            translation: "\"Thank you! Would you like coffee and a piece of cake?\"",
          },
          {
            text: "Iedereen krijgt één kopje koffie en één stukje taart. Niet twee!",
            translation: "Everyone gets one cup of coffee and one piece of cake. Not two!",
          },
          {
            text: "Dan opent Noor haar cadeautjes. Van haar tante krijgt ze een lelijke trui, maar ze is heel blij met het boek van Luca.",
            translation: "Then Noor opens her presents. From her aunt she gets an ugly jumper, but she's very happy with Luca's book.",
          },
        ],
        [
          {
            text: "Later op de avond zet Bram muziek aan. Er is bier, wijn en kaas met mosterd.",
            translation: "Later in the evening Bram puts music on. There's beer, wine and cheese with mustard.",
          },
          {
            text: "De opa van Noor vraagt Luca: \"Wat vind jij van Nederland?\"",
            translation: "Noor's grandpa asks Luca: \"What do you think of the Netherlands?\"",
          },
          {
            text: "\"Ik vind het hier leuk. Alleen het weer niet!\"",
            translation: "\"I like it here. Just not the weather!\"",
          },
          {
            text: "Iedereen lacht. Het is een gezellig feest.",
            translation: "Everyone laughs. It's a cosy, fun party.",
          },
        ],
      ],
    },
  ],
};
