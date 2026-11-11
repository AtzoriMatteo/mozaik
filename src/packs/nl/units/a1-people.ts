import type { Unit } from "@/core/content";

/**
 * Cast (recurs through A1): Luca, an Italian student new in Leiden; his
 * housemates Noor (from Groningen, studies medicine) and Bram (from Leiden,
 * works in a café); their neighbour mevrouw De Vries; Fatima, Luca's
 * classmate in Dutch class.
 */

export const kennismaken: Unit = {
  id: "a1-kennismaken",
  level: "A1",
  title: "Kennismaken",
  titleTranslation: "Meeting people",
  canDo: [
    "Say who you are, where you're from and what you do",
    "Ask someone's name and where they live",
    "Choose between jij and u",
  ],
  texts: [
    {
      id: "nieuw-in-leiden",
      level: "A1",
      title: "Nieuw in Leiden",
      titleTranslation: "New in Leiden",
      grammar: ["pronouns-subject", "present-regular", "zijn-hebben", "articles", "adjective-e", "conjunctions"],
      paragraphs: [
        [
          { text: "Hallo!", translation: "Hello!" },
          { text: "Mijn naam is Luca.", translation: "My name is Luca." },
          {
            text: "Ik kom uit Italië, uit een klein dorp bij Turijn.",
            translation: "I'm from Italy, from a small village near Turin.",
          },
          {
            text: "Ik ben drieëntwintig jaar en ik ben student.",
            translation: "I'm twenty-three and I'm a student.",
          },
          {
            text: "Ik studeer biologie aan de universiteit van Leiden.",
            translation: "I study biology at Leiden University.",
          },
        ],
        [
          {
            text: "Ik woon nu twee weken in Nederland.",
            translation: "I've been living in the Netherlands for two weeks now.",
          },
          {
            text: "Ik woon in een oud huis in het centrum, samen met twee andere studenten: Noor en Bram.",
            translation: "I live in an old house in the centre, together with two other students: Noor and Bram.",
          },
          { text: "Noor is Nederlands.", translation: "Noor is Dutch." },
          {
            text: "Ze komt uit Groningen en ze studeert geneeskunde.",
            translation: "She's from Groningen and she studies medicine.",
          },
          { text: "Bram komt uit Leiden.", translation: "Bram is from Leiden." },
          {
            text: "Hij werkt in een café in de Breestraat.",
            translation: "He works in a café on the Breestraat.",
          },
        ],
        [
          { text: "Ik spreek Italiaans en Engels.", translation: "I speak Italian and English." },
          {
            text: "Ik spreek nog niet veel Nederlands, maar ik leer elke dag een beetje.",
            translation: "I don't speak much Dutch yet, but I learn a bit every day.",
          },
          {
            text: "Op maandag en woensdag heb ik les.",
            translation: "On Mondays and Wednesdays I have class.",
          },
          {
            text: "De les is leuk, maar soms ook moeilijk.",
            translation: "The class is fun, but sometimes also difficult.",
          },
        ],
        [
          {
            text: "Mijn kamer is klein, maar ik vind het hier fijn.",
            translation: "My room is small, but I like it here.",
          },
          {
            text: "Leiden is een mooie stad met veel grachten, bruggen en fietsen.",
            translation: "Leiden is a beautiful city with lots of canals, bridges and bikes.",
          },
          { text: "Heel veel fietsen!", translation: "Lots and lots of bikes!" },
        ],
      ],
    },
    {
      id: "in-de-keuken",
      level: "A1",
      title: "In de keuken",
      titleTranslation: "In the kitchen",
      grammar: ["questions", "jij-inversion", "modal-verbs", "demonstratives", "time-numbers", "prepositions"],
      paragraphs: [
        [
          { text: "Het is acht uur 's ochtends.", translation: "It's eight o'clock in the morning." },
          { text: "Luca zit in de keuken.", translation: "Luca is sitting in the kitchen." },
          { text: "Hij drinkt koffie.", translation: "He's drinking coffee." },
          { text: "Dan komt Noor binnen.", translation: "Then Noor comes in." },
        ],
        [
          {
            text: "\"Goedemorgen!\" zegt Noor. \"Ben jij altijd zo vroeg wakker?\"",
            translation: "\"Good morning!\" says Noor. \"Are you always up this early?\"",
          },
          {
            text: "\"Ja, meestal wel,\" zegt Luca. \"Ik heb om negen uur les. Wil je ook koffie?\"",
            translation: "\"Yes, usually,\" says Luca. \"I have class at nine. Do you want coffee too?\"",
          },
          {
            text: "\"Nee, dank je. Ik drink liever thee. Waar is de thee?\"",
            translation: "\"No, thanks. I prefer tea. Where's the tea?\"",
          },
          {
            text: "\"In de kast, naast het brood.\"",
            translation: "\"In the cupboard, next to the bread.\"",
          },
        ],
        [
          {
            text: "Noor pakt een kopje. \"Hoe gaat het met je Nederlands?\"",
            translation: "Noor grabs a cup. \"How's your Dutch going?\"",
          },
          {
            text: "\"Goed, denk ik. Maar de woorden zijn soms zo lang! En jij? Wat doe je vandaag?\"",
            translation: "\"Good, I think. But the words are sometimes so long! And you? What are you doing today?\"",
          },
          {
            text: "\"Ik werk vandaag in het ziekenhuis. Ik ben student, maar ik werk ook twee dagen per week.\"",
            translation: "\"I'm working at the hospital today. I'm a student, but I also work two days a week.\"",
          },
        ],
        [
          { text: "Dan gaat de bel.", translation: "Then the doorbell rings." },
          {
            text: "\"Wie is dat?\" vraagt Noor. \"Ik weet het niet. Ik doe wel open.\"",
            translation: "\"Who's that?\" asks Noor. \"I don't know. I'll get it.\"",
          },
          {
            text: "Er staat een oudere vrouw voor de deur.",
            translation: "There's an older woman at the door.",
          },
          {
            text: "\"Goedemorgen. Ik ben mevrouw De Vries, uw buurvrouw. Bent u de nieuwe student?\"",
            translation: "\"Good morning. I'm Mrs De Vries, your neighbour. Are you the new student?\"",
          },
          {
            text: "\"Ja, dat ben ik. Ik heet Luca. Aangenaam!\"",
            translation: "\"Yes, that's me. My name is Luca. Nice to meet you!\"",
          },
          {
            text: "\"Aangenaam. Welkom in de straat, Luca! Wonen jullie hier met z'n drieën?\"",
            translation: "\"Nice to meet you. Welcome to the street, Luca! Do the three of you live here?\"",
          },
          {
            text: "\"Ja, met Noor en Bram. Zij zijn ook student.\" \"Noor ken ik al. Maar jou ken ik nog niet!\"",
            translation: "\"Yes, with Noor and Bram. They're students too.\" \"I already know Noor. But I don't know you yet!\"",
          },
          {
            text: "Later zegt Noor: \"Dat is onze buurvrouw. Haar man, onze buurman, is ook heel aardig.\"",
            translation: "Later Noor says: \"That's our neighbour. Her husband, our other neighbour, is very nice too.\"",
          },
        ],
      ],
    },
  ],
};

export const familie: Unit = {
  id: "a1-familie",
  level: "A1",
  title: "Familie",
  titleTranslation: "Family",
  canDo: [
    "Talk about your family: who they are, their age, what they do",
    "Say whose something is (mijn, jouw, zijn, haar…)",
    "Have a simple phone call with someone close",
  ],
  texts: [
    {
      id: "mijn-familie",
      level: "A1",
      title: "Mijn familie",
      titleTranslation: "My family",
      grammar: ["possessives", "plurals", "time-numbers", "negation", "adjective-e"],
      paragraphs: [
        [
          { text: "Mijn familie woont in Italië.", translation: "My family lives in Italy." },
          {
            text: "Mijn vader heet Marco en mijn moeder heet Anna.",
            translation: "My father is called Marco and my mother is called Anna.",
          },
          {
            text: "Mijn vader is zesenvijftig. Hij is leraar op een school.",
            translation: "My father is fifty-six. He's a teacher at a school.",
          },
          {
            text: "Mijn moeder werkt in een winkel in het dorp. Ze verkoopt kleding.",
            translation: "My mother works in a shop in the village. She sells clothes.",
          },
        ],
        [
          {
            text: "Ik heb één zus en één broer.",
            translation: "I have one sister and one brother.",
          },
          {
            text: "Mijn zus heet Giulia. Ze is negentien en ze woont nog thuis.",
            translation: "My sister is called Giulia. She's nineteen and she still lives at home.",
          },
          {
            text: "Mijn broer Paolo is dertig. Hij is getrouwd en hij heeft twee kinderen, een zoon en een dochter.",
            translation: "My brother Paolo is thirty. He's married and he has two children, a son and a daughter.",
          },
          {
            text: "Hun namen zijn Leo en Sofia.",
            translation: "Their names are Leo and Sofia.",
          },
          {
            text: "Leo is een jongen van vier en Sofia is pas acht maanden. Ze is nog een baby.",
            translation: "Leo is a boy of four and Sofia is only eight months old. She's still a baby.",
          },
        ],
        [
          {
            text: "Mijn opa en oma wonen ook in het dorp, in een huis met een grote tuin.",
            translation: "My grandpa and grandma also live in the village, in a house with a big garden.",
          },
          {
            text: "Opa is tachtig, maar hij voelt zich nog jong. Hij wil honderd worden!",
            translation: "Grandpa is eighty, but he still feels young. He wants to reach a hundred!",
          },
          {
            text: "Mijn oma kookt elke zondag voor de hele familie.",
            translation: "My grandma cooks for the whole family every Sunday.",
          },
          {
            text: "Dan eten we samen aan een lange tafel.",
            translation: "Then we eat together at a long table.",
          },
          {
            text: "Dat mis ik nu een beetje. Soms ben ik 's avonds verdrietig, zonder mijn familie.",
            translation: "I miss that a bit now. Sometimes I'm sad in the evening, without my family.",
          },
        ],
        [
          {
            text: "Op mijn kamer staat een foto van mijn familie.",
            translation: "There's a photo of my family in my room.",
          },
          {
            text: "\"Jouw familie is groot!\" zegt Bram.",
            translation: "\"Your family is big!\" says Bram.",
          },
          {
            text: "\"Mijn familie is heel klein. Ik heb geen broers of zussen. Ik heb alleen mijn moeder.\"",
            translation: "\"My family is really small. I don't have any brothers or sisters. I only have my mother.\"",
          },
          {
            text: "Bram is enig kind, maar hij heeft veel vrienden en een lieve vriendin.",
            translation: "Bram is an only child, but he has lots of friends and a sweet girlfriend.",
          },
        ],
      ],
    },
    {
      id: "bellen-met-mama",
      level: "A1",
      title: "Bellen met mama",
      titleTranslation: "Calling mum",
      grammar: ["object-pronouns", "questions", "jij-inversion", "gaan-future", "imperative"],
      paragraphs: [
        [
          { text: "Het is zondagavond.", translation: "It's Sunday evening." },
          {
            text: "Luca belt zijn moeder met de telefoon op zijn kamer.",
            translation: "Luca calls his mother on the phone in his room.",
          },
        ],
        [
          {
            text: "\"Hoi mama! Hoor je mij?\"",
            translation: "\"Hi mum! Can you hear me?\"",
          },
          {
            text: "\"Ja, ik hoor je goed. Hoe gaat het met je, jongen?\"",
            translation: "\"Yes, I can hear you fine. How are you, son?\"",
          },
          {
            text: "\"Goed! Ik ben een beetje moe, maar het gaat goed.\"",
            translation: "\"Good! I'm a bit tired, but I'm fine.\"",
          },
          {
            text: "\"Alles goed? Eet je wel genoeg?\"",
            translation: "\"Everything okay? Are you eating enough?\"",
          },
          {
            text: "Luca lacht. \"Ja, mama. Ik kook bijna elke dag. Vanavond maak ik soep.\"",
            translation: "Luca laughs. \"Yes, mum. I cook almost every day. Tonight I'm making soup.\"",
          },
        ],
        [
          {
            text: "\"En je huisgenoten? Zijn ze aardig?\"",
            translation: "\"And your housemates? Are they nice?\"",
          },
          {
            text: "\"Heel aardig. Noor helpt me met mijn Nederlands. En Bram neemt soms taart mee uit het café.\"",
            translation: "\"Very nice. Noor helps me with my Dutch. And Bram sometimes brings cake home from the café.\"",
          },
          {
            text: "\"Wanneer kom je naar huis?\"",
            translation: "\"When are you coming home?\"",
          },
          {
            text: "\"In de vakantie, in december. Ik ga met de trein. Dat is goedkoper en beter voor het milieu.\"",
            translation: "\"In the holidays, in December. I'm going by train. That's cheaper and better for the environment.\"",
          },
          {
            text: "\"Dat is nog lang!\"",
            translation: "\"That's still a long time away!\"",
          },
          {
            text: "\"Ja, maar de tijd gaat snel. Misschien kom ik in de lente ook even. Is papa er ook?\"",
            translation: "\"Yes, but time flies. Maybe I'll come for a bit in spring too. Is dad there too?\"",
          },
          {
            text: "\"Nee, hij is bij opa. Hij gaat je morgen bellen.\"",
            translation: "\"No, he's at grandpa's. He'll call you tomorrow.\"",
          },
        ],
        [
          {
            text: "\"Oké. Geef Giulia een kus van mij!\"",
            translation: "\"Okay. Give Giulia a kiss from me!\"",
          },
          {
            text: "\"Doe ik. Doei, lieverd!\"",
            translation: "\"Will do. Bye, sweetheart!\"",
          },
          { text: "\"Doei, mama!\"", translation: "\"Bye, mum!\"" },
        ],
      ],
    },
  ],
};
