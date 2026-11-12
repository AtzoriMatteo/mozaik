import type { UnitContent } from "./types";

export const wonen: UnitContent = {
  id: "a1-wonen",
  level: "A1",
  title: "Wonen en de stad",
  titleTranslation: "Home and town",
  canDo: [
    "Describe your home: rooms, furniture, where things are",
    "Ask for directions and understand simple answers",
    "Understand where places are: links, rechts, naast, tussen…",
  ],
  texts: [
    {
      id: "ons-huis",
      level: "A1",
      title: "Ons huis",
      titleTranslation: "Our house",
      grammar: ["er-is", "prepositions", "adjective-e", "plurals", "articles"],
      paragraphs: [
        [
          {
            text: "Luca, Noor en Bram wonen in een oud huis aan een gracht.",
            translation: "Luca, Noor and Bram live in an old house on a canal.",
          },
          {
            text: "Het huis is hoog en smal, zoals veel huizen in Leiden.",
            translation: "The house is tall and narrow, like many houses in Leiden.",
          },
          {
            text: "Beneden is de woonkamer.",
            translation: "Downstairs is the living room.",
          },
          {
            text: "Er staat een grote bank voor het raam, en er is een oude tafel met vier stoelen.",
            translation: "There's a big sofa in front of the window, and there's an old table with four chairs.",
          },
          {
            text: "Naast de woonkamer is de keuken. De keuken is klein, maar er is een nieuwe koelkast.",
            translation: "Next to the living room is the kitchen. The kitchen is small, but there's a new fridge.",
          },
        ],
        [
          {
            text: "De trap naar boven is heel steil.",
            translation: "The stairs up are very steep.",
          },
          {
            text: "Boven zijn drie slaapkamers en één badkamer.",
            translation: "Upstairs there are three bedrooms and one bathroom.",
          },
          {
            text: "'s Ochtends is het altijd druk in de badkamer!",
            translation: "In the morning the bathroom is always busy!",
          },
          {
            text: "De kamer van Luca ligt tussen de kamer van Noor en de badkamer.",
            translation: "Luca's room is between Noor's room and the bathroom.",
          },
          {
            text: "In zijn kamer staan een bed, een bureau en een kast.",
            translation: "In his room there's a bed, a desk and a wardrobe.",
          },
          {
            text: "Op het bureau staan een lamp en zijn computer. Onder het bed liggen zijn schoenen.",
            translation: "On the desk there's a lamp and his computer. Under the bed are his shoes.",
          },
          {
            text: "Uit zijn raam ziet hij een kleine tuin met een groene boom. Achter de tuin ligt een park.",
            translation: "From his window he sees a small garden with a green tree. Behind the garden there's a park.",
          },
        ],
        [
          {
            text: "Ze huren het huis. De huur is niet goedkoop: zeshonderd euro per maand voor één kamer.",
            translation: "They rent the house. The rent isn't cheap: six hundred euros a month for one room.",
          },
          {
            text: "Maar het huis ligt in het centrum, dichtbij het station en de universiteit.",
            translation: "But the house is in the centre, close to the station and the university.",
          },
          {
            text: "Dat is handig. Luca heeft geen auto nodig, en hij kan ook niet rijden. Hij gaat overal op de fiets.",
            translation: "That's handy. Luca doesn't need a car, and he can't drive anyway. He goes everywhere by bike.",
          },
          {
            text: "Zijn adres is Oude Vest 12. Het is een mooi adres, vindt hij.",
            translation: "His address is Oude Vest 12. It's a nice address, he thinks.",
          },
        ],
      ],
    },
    {
      id: "de-weg-vragen",
      level: "A1",
      title: "De weg vragen",
      titleTranslation: "Asking the way",
      grammar: ["imperative", "demonstratives", "questions", "prepositions", "modal-verbs"],
      paragraphs: [
        [
          {
            text: "Luca moet vandaag naar het stadhuis. Hij heeft daar om tien uur een afspraak.",
            translation: "Luca has to go to the town hall today. He has an appointment there at ten.",
          },
          {
            text: "Alle nieuwe mensen in Leiden moeten hun adres doorgeven.",
            translation: "All new people in Leiden have to register their address.",
          },
          {
            text: "Maar waar is het stadhuis? Luca weet het niet.",
            translation: "But where is the town hall? Luca doesn't know.",
          },
        ],
        [
          {
            text: "Hij vraagt het aan een meneer op straat.",
            translation: "He asks a man on the street.",
          },
          {
            text: "\"Pardon, meneer. Weet u waar het stadhuis is?\"",
            translation: "\"Excuse me, sir. Do you know where the town hall is?\"",
          },
          {
            text: "\"Het stadhuis? Ja hoor. Ga hier rechtdoor tot de brug.\"",
            translation: "\"The town hall? Sure. Go straight on here until the bridge.\"",
          },
          {
            text: "\"Ga over de brug en dan links. Dat is de Breestraat.\"",
            translation: "\"Go over the bridge and then left. That's the Breestraat.\"",
          },
          {
            text: "\"Loop langs de kerk en het plein. Ga niet rechts, maar blijf op de Breestraat.\"",
            translation: "\"Walk past the church and the square. Don't go right, but stay on the Breestraat.\"",
          },
          {
            text: "\"Het stadhuis is aan de rechterkant, tussen een bank en een kledingwinkel.\"",
            translation: "\"The town hall is on the right, between a bank and a clothes shop.\"",
          },
          {
            text: "\"Is het ver?\" \"Nee hoor, het is vijf minuten lopen.\"",
            translation: "\"Is it far?\" \"No, it's a five-minute walk.\"",
          },
          {
            text: "\"Dank u wel!\" \"Graag gedaan.\"",
            translation: "\"Thank you!\" \"You're welcome.\"",
          },
        ],
        [
          {
            text: "Luca loopt rechtdoor, maar bij de gracht twijfelt hij.",
            translation: "Luca walks straight on, but at the canal he hesitates.",
          },
          {
            text: "Is dit de goede brug? Er zijn zo veel bruggen in Leiden!",
            translation: "Is this the right bridge? There are so many bridges in Leiden!",
          },
          {
            text: "Hij vraagt het aan een meisje op een fiets.",
            translation: "He asks a girl on a bike.",
          },
          {
            text: "\"Ja, deze brug is goed. Zie je die witte toren daar? Daar is het.\"",
            translation: "\"Yes, this bridge is right. Do you see that white tower over there? That's it.\"",
          },
          {
            text: "Om vijf voor tien staat Luca voor het stadhuis. Precies op tijd!",
            translation: "At five to ten Luca is standing in front of the town hall. Right on time!",
          },
        ],
      ],
    },
  ],
};

export const werkEnStudie: UnitContent = {
  id: "a1-werk-en-studie",
  level: "A1",
  title: "Werk en studie",
  titleTranslation: "Work and study",
  canDo: [
    "Talk about your studies or job in simple terms",
    "Understand classroom language: questions, answers, instructions",
    "Ask about a simple job: hours, days, pay",
  ],
  texts: [
    {
      id: "de-taalles",
      level: "A1",
      title: "De taalles",
      titleTranslation: "The language class",
      grammar: ["questions", "present-regular", "verb-second", "pronouns-subject", "negation"],
      paragraphs: [
        [
          {
            text: "De taalles is op maandag en woensdag van zeven tot negen uur 's avonds.",
            translation: "The language class is on Mondays and Wednesdays from seven to nine in the evening.",
          },
          {
            text: "In de klas zitten twaalf studenten uit tien verschillende landen.",
            translation: "There are twelve students in the class from ten different countries.",
          },
          {
            text: "De lerares heet Ingrid. Ze is aardig, maar ook streng.",
            translation: "The teacher is called Ingrid. She's nice, but also strict.",
          },
          {
            text: "In de les spreken we alleen Nederlands, zegt ze. Geen Engels!",
            translation: "In class we only speak Dutch, she says. No English!",
          },
        ],
        [
          {
            text: "Vandaag leren ze nieuwe woorden over het lichaam: het hoofd, de hand, de buik.",
            translation: "Today they're learning new words about the body: the head, the hand, the stomach.",
          },
          {
            text: "Ingrid stelt een vraag: \"Fatima, wat doe je met je handen?\"",
            translation: "Ingrid asks a question: \"Fatima, what do you do with your hands?\"",
          },
          {
            text: "Fatima denkt even na. \"Ik schrijf met mijn handen. En ik eet ermee.\"",
            translation: "Fatima thinks for a moment. \"I write with my hands. And I eat with them.\"",
          },
          {
            text: "\"Heel goed! Dat is een goed antwoord.\"",
            translation: "\"Very good! That's a good answer.\"",
          },
        ],
        [
          {
            text: "Dan is het de beurt aan Luca. \"Luca, lees de tekst op bladzijde twintig, alsjeblieft.\"",
            translation: "Then it's Luca's turn. \"Luca, read the text on page twenty, please.\"",
          },
          {
            text: "Luca opent zijn boek en leest langzaam.",
            translation: "Luca opens his book and reads slowly.",
          },
          {
            text: "Het woord \"verschrikkelijk\" is erg moeilijk. Iedereen lacht, ook Luca.",
            translation: "The word \"verschrikkelijk\" is very difficult. Everyone laughs, Luca too.",
          },
          {
            text: "\"Geen probleem,\" zegt Ingrid. \"Nederlands is geen makkelijke taal. Zeg het nog een keer.\"",
            translation: "\"No problem,\" says Ingrid. \"Dutch isn't an easy language. Say it once more.\"",
          },
        ],
        [
          {
            text: "Na de les krijgen ze huiswerk: tien zinnen schrijven over hun familie.",
            translation: "After class they get homework: write ten sentences about their family.",
          },
          {
            text: "Luca schrijft ze die avond nog, aan de keukentafel.",
            translation: "Luca writes them that same evening, at the kitchen table.",
          },
          {
            text: "Noor kijkt mee. \"Hier moet geen 'de' staan, maar 'het'. Het is het kind, niet de kind.\"",
            translation: "Noor looks over his shoulder. \"This shouldn't be 'de', it should be 'het'. It's het kind, not de kind.\"",
          },
          {
            text: "Luca zucht. De en het. Dat is echt het moeilijkste van het Nederlands.",
            translation: "Luca sighs. De and het. That's really the hardest thing about Dutch.",
          },
        ],
      ],
    },
    {
      id: "een-bijbaan",
      level: "A1",
      title: "Een bijbaan",
      titleTranslation: "A part-time job",
      grammar: ["modal-verbs", "questions", "time-numbers", "conjunctions", "object-pronouns"],
      paragraphs: [
        [
          {
            text: "Luca wil graag een bijbaan. Hij wil wat extra geld verdienen, want Leiden is duur.",
            translation: "Luca would like a part-time job. He wants to earn some extra money, because Leiden is expensive.",
          },
          {
            text: "Zijn studie kost veel, de huur is hoog, dus hij heeft niet genoeg geld.",
            translation: "His studies cost a lot, the rent is high, so he doesn't have enough money.",
          },
          {
            text: "Bram werkt in een café. \"Wij zoeken iemand voor het weekend,\" zegt hij. \"Stuur een mail naar mijn baas.\"",
            translation: "Bram works in a café. \"We're looking for someone for the weekend,\" he says. \"Send my boss an email.\"",
          },
          {
            text: "Luca schrijft een korte mail. Twee dagen later belt de baas hem.",
            translation: "Luca writes a short email. Two days later the boss calls him.",
          },
        ],
        [
          {
            text: "\"Goedemiddag, met Kees van café De Burcht. Spreek ik met Luca?\"",
            translation: "\"Good afternoon, this is Kees from café De Burcht. Am I speaking to Luca?\"",
          },
          { text: "\"Ja, daar spreekt u mee.\"", translation: "\"Yes, speaking.\"" },
          {
            text: "\"Je wilt hier graag werken, hè? Heb je ervaring in een café?\"",
            translation: "\"You'd like to work here, right? Do you have experience in a café?\"",
          },
          {
            text: "\"Ja, in Italië werk ik elke zomer in een bar. Ik kan heel goed koffie maken.\"",
            translation: "\"Yes, in Italy I work in a bar every summer. I can make really good coffee.\"",
          },
          {
            text: "\"Een Italiaan die koffie kan maken. Perfect! Kun je op zaterdag en zondag werken?\"",
            translation: "\"An Italian who can make coffee. Perfect! Can you work on Saturdays and Sundays?\"",
          },
          {
            text: "\"Ja, dat kan. Hoeveel uur per week is het?\"",
            translation: "\"Yes, I can. How many hours a week is it?\"",
          },
          {
            text: "\"Twaalf uur, van tien tot vier. Je krijgt dertien euro per uur.\"",
            translation: "\"Twelve hours, from ten to four. You get thirteen euros an hour.\"",
          },
        ],
        [
          {
            text: "\"Kom morgen even langs, dan kunnen we praten. Om twee uur?\"",
            translation: "\"Drop by tomorrow, then we can talk. At two?\"",
          },
          {
            text: "\"Ja, goed. Tot morgen!\"",
            translation: "\"Yes, good. See you tomorrow!\"",
          },
          {
            text: "De volgende dag zit Luca in het kantoor van Kees, achter de bar. Op zondag is het café dicht, dus hij werkt alleen op zaterdag en één zondag per maand.",
            translation: "The next day Luca is sitting in Kees's office, behind the bar. On Sundays the café is closed, so he only works Saturdays and one Sunday a month.",
          },
          {
            text: "Luca is blij. Een baan in een café, met Bram als collega! Dat wordt leuk.",
            translation: "Luca is happy. A job in a café, with Bram as a colleague! That's going to be fun.",
          },
          {
            text: "Maar hij moet nog veel leren: de namen van alle drankjes in het Nederlands.",
            translation: "But he still has a lot to learn: the names of all the drinks in Dutch.",
          },
        ],
      ],
    },
  ],
};
