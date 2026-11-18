import type { UnitContent } from "./types";
import { martaCheckpoint, martaIsNieuw, martaTexts } from "../stories/marta-is-nieuw";

/**
 * Cast (recurs through A1): Luca, an Italian student new in Leiden; his
 * housemates Noor (from Groningen, studies medicine) and Bram (from Leiden,
 * works in a café); their neighbour mevrouw De Vries; Fatima, Luca's
 * classmate in Dutch class.
 */

export const kennismaken: UnitContent = {
  id: "a1-kennismaken",
  level: "A1",
  title: "Kennismaken",
  titleTranslation: "Meeting people",
  canDo: [
    "Say who you are, where you're from and what you do",
    "Ask someone's name and where they live",
    "Choose between jij and u",
  ],
  // One street, a different lead each unit (Matteo, 18 Nov 2026): Marta moves in.
  story: martaIsNieuw,
  texts: martaTexts,
  sequence: [
    "marta-1-nieuw-in-leiden", "de-eerste-les", "pronouns-subject",
    "marta-2-de-buren", "bij-de-balie", "zijn-hebben",
    "marta-3-een-taalmaatje", "marta-en-sanne", "present-regular",
    "waar-kom-je-vandaan", "write", "marta-4-een-pakketje", "op-een-feestje", "words", "check",
  ],
  checkpoint: martaCheckpoint,
};

export const familie: UnitContent = {
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
            text: "Luca belt zijn moeder vanuit zijn kamer.",
            translation: "Luca calls his mother from his room.",
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
