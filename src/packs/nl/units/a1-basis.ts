import { mc, orderNl, pairs, s, tf } from "./helpers";
import type { UnitContent } from "./types";

/**
 * Unit 1: the fundamentals. Greetings and courtesy, numbers from nul to
 * duizend, the alphabet and spelling, days, months, seasons, dates, colours.
 */
export const basis: UnitContent = {
  id: "a1-basis",
  level: "A1",
  title: "De basis",
  titleTranslation: "The basics",
  look: { motif: "star", glaze: "iron" },
  canDo: [
    "Say hello, goodbye, please, thank you and sorry",
    "Count to a thousand, spell your name and give your phone number",
    "Name the days, months and seasons, and say a date",
  ],
  texts: [
    {
      id: "hallo-en-tot-ziens",
      level: "A1",
      title: "Hallo en tot ziens",
      titleTranslation: "Hello and goodbye",
      grammar: ["pronouns-subject", "imperative", "spelling"],
      paragraphs: [
        [
          s("Nederlanders zeggen vaak \"hallo\" of \"dag\".", "Dutch people often say \"hallo\" or \"dag\"."),
          s("Maar er zijn ook woorden voor een bepaald moment van de dag.", "But there are also words for a particular time of day."),
        ],
        [
          s("'s Ochtends zeg je \"goedemorgen\".", "In the morning you say \"good morning\"."),
          s("Na twaalf uur zeg je \"goedemiddag\" en na zes uur \"goedenavond\".", "After twelve you say \"good afternoon\" and after six \"good evening\"."),
          s("Ga je slapen? Dan zeg je \"welterusten\".", "Going to sleep? Then you say \"good night\"."),
        ],
        [
          s("Tegen vrienden zeg je \"hoi\". Ga je weg? Dan zeg je \"doei\".", "To friends you say \"hi\". Leaving? Then you say \"bye\"."),
          s("Tegen mensen die je niet kent, zeg je \"dag\" of \"tot ziens\".", "To people you don't know, you say \"hello/goodbye\" or \"goodbye\"."),
          s("Zie je iemand morgen weer? Zeg dan \"tot morgen\".", "Will you see someone again tomorrow? Then say \"see you tomorrow\"."),
        ],
        [
          s("Wil je iets hebben? Zeg dan \"alsjeblieft\" tegen vrienden en \"alstublieft\" tegen andere mensen.", "Do you want something? Then say \"please\" to friends and \"please\" (polite) to other people."),
          s("Krijg je iets? Zeg dan \"dank je wel\" of \"dank u wel\".", "Do you get something? Then say \"thank you\" or \"thank you\" (polite)."),
          s("Zegt iemand \"dank je wel\" tegen jou? Dan zeg je \"graag gedaan\".", "Does someone say \"thank you\" to you? Then you say \"you're welcome\"."),
          s("Wil je iets vragen op straat? Begin dan met \"pardon\".", "Do you want to ask something in the street? Then start with \"excuse me\"."),
          s("Doe je iets fout? Zeg dan \"sorry\".", "Do you do something wrong? Then say \"sorry\"."),
        ],
        [
          s("Luca oefent alles op één dag.", "Luca practises it all in one day."),
          s("Bij de bakker zegt hij \"goedemorgen\" en \"dank u wel\".", "At the baker's he says \"good morning\" and \"thank you\"."),
          s("Tegen Noor zegt hij \"hoi\".", "To Noor he says \"hi\"."),
          s("En om negen uur 's avonds zegt hij tegen Bram: \"Welterusten!\"", "And at nine in the evening he says to Bram: \"Good night!\""),
          s("Bram lacht. \"Welterusten? Het is pas negen uur, Luca!\"", "Bram laughs. \"Good night? It's only nine o'clock, Luca!\""),
        ],
      ],
      tasks: [
        pairs("When do you say it?", "goedemorgen=in the morning | goedemiddag=after twelve | goedenavond=after six | welterusten=when you go to sleep"),
        tf("Tegen vrienden zeg je \"alstublieft\".", "To friends you say \"alstublieft\".", false),
        mc("Someone says \"dank je wel\" to you. What do you say?", ["Pardon", "Graag gedaan", "Doei"], 1),
        mc("How do you start a question to a stranger in the street?", ["Hoi", "Pardon", "Welterusten"], 1),
        tf("Bram gaat om negen uur slapen.", "Bram goes to sleep at nine o'clock.", false),
      ],
    },
    {
      id: "overal-getallen",
      level: "A1",
      title: "Overal getallen",
      titleTranslation: "Numbers everywhere",
      grammar: ["time-numbers", "plurals", "present-regular"],
      paragraphs: [
        [
          s("In de taalles oefenen ze vandaag getallen.", "In Dutch class they practise numbers today."),
          s("Ingrid begint met nul.", "Ingrid starts with zero."),
          s("\"Hoeveel is tien min tien?\" vraagt ze. \"Nul!\" roept de klas.", "\"What's ten minus ten?\" she asks. \"Zero!\" the class calls out."),
        ],
        [
          s("Dan tellen ze samen: één, twee, drie, vier, vijf, zes, zeven, acht, negen, tien.", "Then they count together: one, two, three, four, five, six, seven, eight, nine, ten."),
          s("Na tien komen elf en twaalf.", "After ten come eleven and twelve."),
          s("Daarna gaat het makkelijk: dertien, veertien, vijftien, zestien, zeventien, achttien, negentien.", "After that it's easy: thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen."),
          s("Ze lijken op het Engels: dertien en thirteen, veertien en fourteen.", "They look like English: dertien and thirteen, veertien and fourteen."),
        ],
        [
          s("Dan tellen ze met tien tegelijk: twintig, dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig, honderd.", "Then they count in tens: twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, a hundred."),
          s("Fatima telt verder: \"Tweehonderd, driehonderd… duizend!\"", "Fatima keeps counting: \"Two hundred, three hundred… a thousand!\""),
        ],
        [
          s("Het moeilijkste deel komt nu: de getallen tussen twintig en honderd.", "The hardest part comes now: the numbers between twenty and a hundred."),
          s("In het Nederlands zeg je eerst de één en dan de tien.", "In Dutch you say the one first and then the ten."),
          s("Vierentwintig is dus vier-en-twintig, en vijfennegentig is vijf-en-negentig.", "So vierentwintig is four-and-twenty, and vijfennegentig is five-and-ninety."),
          s("Luca denkt even na en zegt: \"Mijn huisnummer is twaalf en mijn telefoonnummer is nul zes, achtendertig, vijftien, zevenenveertig.\"", "Luca thinks for a moment and says: \"My house number is twelve and my phone number is zero six, thirty-eight, fifteen, forty-seven.\""),
        ],
        [
          s("Aan het eind van de les oefenen ze het alfabet.", "At the end of the lesson they practise the alphabet."),
          s("Iedereen spelt zijn voornaam en zijn achternaam, letter voor letter.", "Everyone spells their first name and their surname, letter by letter."),
          s("Luca zegt: \"B, I, A, N, C, H, I. Mijn achternaam heeft zeven letters.\"", "Luca says: \"B, I, A, N, C, H, I. My surname has seven letters.\""),
          s("\"Heel goed!\" zegt Ingrid. \"Nu kun je tellen en spellen. En ik heb je nummer!\"", "\"Very good!\" says Ingrid. \"Now you can count and spell. And I've got your number!\""),
        ],
      ],
      words: {
        b: { meaning: "B, said 'bee' (like 'bay')" },
        i: { meaning: "I, said 'ie' (like 'ee' in 'see')" },
        a: { meaning: "A, said 'aa' (like 'ah')" },
        n: { meaning: "N, said 'en'" },
        c: { meaning: "C, said 'see' (like 'say')" },
        h: { meaning: "H, said 'haa'" },
        thirteen: { meaning: "(English) thirteen" },
        fourteen: { meaning: "(English) fourteen" },
      },
      tasks: [
        mc("What is \"veertien\"?", ["40", "14", "4"], 1),
        pairs("Connect the number and the word.", "0=nul | 17=zeventien | 70=zeventig | 1000=duizend", false, true),
        tf("In het Nederlands zeg je eerst de tien en dan de één.", "In Dutch you say the ten first and then the one.", false),
        mc("What is \"achtendertig\"?", ["83", "38", "48"], 1),
        tf("Luca woont op nummer twaalf.", "Luca lives at number twelve.", true),
      ],
    },
    {
      id: "het-jaar-rond",
      level: "A1",
      title: "Het jaar rond",
      titleTranslation: "All year round",
      grammar: ["dates-ordinals", "het-subject", "adjective-e"],
      paragraphs: [
        [
          s("Een jaar heeft twaalf maanden, vier seizoenen en ongeveer vijftig weken.", "A year has twelve months, four seasons and about fifty weeks."),
          s("In de keuken van Luca, Noor en Bram hangt een grote kalender.", "In Luca, Noor and Bram's kitchen hangs a big calendar."),
          s("Noor schrijft daar alle verjaardagen en feesten op.", "Noor writes all the birthdays and parties on it."),
        ],
        [
          s("De winter is in december, januari en februari.", "Winter is in December, January and February."),
          s("Het is koud en om vijf uur is het al donker.", "It's cold and at five o'clock it's already dark."),
          s("In maart, april en mei is het lente.", "In March, April and May it's spring."),
          s("De dagen worden langer en er zijn overal bloemen: gele, roze en paarse tulpen.", "The days get longer and there are flowers everywhere: yellow, pink and purple tulips."),
        ],
        [
          s("De zomer is in juni, juli en augustus.", "Summer is in June, July and August."),
          s("Dan is het warm en heeft iedereen vakantie.", "Then it's warm and everyone has a holiday."),
          s("In september, oktober en november is het herfst.", "In September, October and November it's autumn."),
          s("De bladeren worden geel, oranje, rood en bruin, en het waait vaak hard.", "The leaves turn yellow, orange, red and brown, and it's often very windy."),
        ],
        [
          s("Maart is de derde maand van het jaar en december is de twaalfde en de laatste.", "March is the third month of the year and December is the twelfth and the last."),
          s("Luca leert de rij: eerste, tweede, derde, vierde, vijfde, zesde, zevende, achtste, negende, tiende.", "Luca learns the order: first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth."),
          s("Op de kalender staan drie datums met een rode cirkel.", "On the calendar there are three dates with a red circle."),
          s("Bram is jarig op drie maart, Luca op twaalf mei en Noor in november.", "Bram's birthday is on the third of March, Luca's on the twelfth of May and Noor's in November."),
          s("\"Vandaag is het vijf november,\" zegt Noor. \"Nog vijftien dagen tot mijn verjaardag. En overmorgen is het weekend!\"", "\"Today it's the fifth of November,\" says Noor. \"Fifteen more days until my birthday. And the day after tomorrow it's the weekend!\""),
        ],
      ],
      tasks: [
        pairs("Which season?", "december=winter | april=lente | juli=zomer | oktober=herfst", true, true),
        mc("Which month is the third month?", ["Februari", "Maart", "April"], 1),
        tf("In de herfst worden de bladeren groen.", "In autumn the leaves turn green.", false),
        mc("When is Bram's birthday?", ["3 March", "12 May", "13 November"], 0),
        orderNl("Put the months in order.", "januari", "april", "juli", "oktober"),
      ],
    },
  ],
};
