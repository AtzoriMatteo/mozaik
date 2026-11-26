import type { ReadingText } from "@/core/content";
import { mc, s, tf } from "../units/helpers";

type LibraryText = ReadingText & { topic: string };

/** Library texts at B1: no unit, any order. Articles and stories without dialogue. */
export const textsB1: LibraryText[] = [
  {
    id: "lib-b1-de-fiets-als-familielid",
    level: "B1",
    topic: "Dutch life",
    title: "De fiets als familielid",
    titleTranslation: "The bike as a member of the family",
    grammar: [],
    paragraphs: [
      [
        s("In Nederland zijn er meer fietsen dan mensen. Gemiddeld heeft iedere Nederlander er meer dan één: een oude fiets voor het station, een goede fiets voor lange tochten en soms nog een bakfiets voor de kinderen.", "In the Netherlands there are more bikes than people. On average every Dutch person has more than one: an old bike for the station, a good bike for long rides and sometimes a cargo bike for the children."),
        s("Dat is geen toeval. Het land is plat, de afstanden zijn klein en bijna elke stad heeft brede fietspaden, apart van de auto's.", "That's no coincidence. The country is flat, distances are short and almost every town has wide cycle paths, separate from the cars."),
      ],
      [
        s("Toch was het niet altijd zo. In de jaren zeventig werden er steeds meer auto's verkocht, en in de steden gebeurden veel ongelukken. Vooral kinderen waren slachtoffer.", "Still, it wasn't always like this. In the seventies more and more cars were sold, and there were many accidents in the cities. Children above all were the victims."),
        s("Ouders gingen de straat op en protesteerden. Daarna begonnen gemeenten met het bouwen van veilige fietspaden. Zo werd de fiets langzaam weer het belangrijkste vervoermiddel in de stad.", "Parents took to the streets and protested. After that, local councils started building safe cycle paths. That way the bike slowly became the most important way to get around town again."),
      ],
      [
        s("Voor veel Nederlanders is hun fiets bijna een familielid. Je leert fietsen voordat je kunt lezen, je fietst naar school, ook als het regent, en op je achttiende fiets je nog steeds.", "For many Dutch people their bike is almost a member of the family. You learn to cycle before you can read, you cycle to school, even when it rains, and at eighteen you're still cycling."),
        s("Er zijn ook minder leuke kanten. Elk jaar worden er honderdduizenden fietsen gestolen, en rond de grote stations is het vaak moeilijk om een plek te vinden.", "There are less pleasant sides too. Every year hundreds of thousands of bikes are stolen, and around the big stations it's often hard to find a space."),
        s("Daarom hebben de meeste mensen twee sloten, en een fiets die er niet te mooi uitziet.", "That's why most people have two locks, and a bike that doesn't look too nice."),
      ],
    ],
    tasks: [
      mc("Why does the Netherlands suit cycling?", ["It's flat, distances are short and there are cycle paths", "Cars are forbidden in towns", "Bikes are free"], 0),
      tf("In de jaren zeventig waren er weinig auto's in de steden.", "In the seventies there were few cars in the cities.", false),
      mc("What did parents do in the seventies?", ["They protested in the streets", "They sold their cars", "They moved to the countryside"], 0),
      tf("Veel mensen hebben een fiets die er niet te mooi uitziet, zodat hij niet gestolen wordt.", "Many people have a bike that doesn't look too nice, so it won't get stolen.", true),
    ],
  },
  {
    id: "lib-b1-ruzie-over-de-heg",
    level: "B1",
    topic: "Neighbours",
    title: "Ruzie over de heg",
    titleTranslation: "A row about the hedge",
    grammar: [],
    paragraphs: [
      [
        s("Ingrid en Bert wonen al twintig jaar naast elkaar in een rustige straat in Zwolle. Lang ging het goed: ze groetten elkaar en hielpen elkaar met de boodschappen als iemand ziek was.", "Ingrid and Bert have lived next door to each other for twenty years on a quiet street in Zwolle. For a long time it went well: they said hello and helped each other with the shopping when someone was ill."),
        s("Maar twee jaar geleden begon het probleem. Bert plantte een heg tussen de twee tuinen, en de heg groeide en groeide.", "But two years ago the problem started. Bert planted a hedge between the two gardens, and the hedge grew and grew."),
      ],
      [
        s("Nu is hij bijna drie meter hoog. In de middag komt er geen zon meer in de tuin van Ingrid, en haar tomaten willen niet meer groeien.", "Now it's almost three metres high. In the afternoon no sun gets into Ingrid's garden any more, and her tomatoes won't grow."),
        s("Ze vroeg Bert een paar keer of hij de heg wilde knippen. Hij zei steeds dat hij het zou doen, maar er gebeurde niets. Op een dag schreef ze een boze brief, en sindsdien praten ze niet meer met elkaar.", "She asked Bert a few times if he would trim the hedge. He kept saying he would, but nothing happened. One day she wrote an angry letter, and since then they haven't spoken to each other."),
      ],
      [
        s("Een andere buurvrouw gaf Ingrid een tip: buurtbemiddeling. Dat is gratis, en de bemiddelaars zijn vrijwilligers die geen kant kiezen. Ze luisteren naar allebei de buren en helpen hen om zelf een oplossing te vinden.", "Another neighbour gave Ingrid a tip: neighbourhood mediation. It's free, and the mediators are volunteers who don't take sides. They listen to both neighbours and help them find a solution themselves."),
        s("Bij het gesprek bleek dat Bert een slechte rug heeft. Hij kon de heg niet meer knippen, maar schaamde zich om dat te zeggen.", "In the conversation it turned out that Bert has a bad back. He couldn't trim the hedge any more, but was ashamed to say so."),
        s("De oplossing was simpel: de zoon van Ingrid knipt de heg twee keer per jaar, en Bert betaalt de koffie.", "The solution was simple: Ingrid's son trims the hedge twice a year, and Bert pays for the coffee."),
      ],
    ],
    tasks: [
      mc("What is the problem with the hedge?", ["It takes the sun from Ingrid's garden", "It's dead", "It's on Ingrid's land"], 0),
      tf("Bert knipte de heg meteen toen Ingrid het vroeg.", "Bert trimmed the hedge straight away when Ingrid asked.", false),
      mc("What is buurtbemiddeling?", ["Free help from volunteers who don't take sides", "A court for neighbours", "A paid lawyer"], 0),
      mc("Why didn't Bert trim the hedge?", ["He has a bad back and was ashamed to say so", "He wanted to annoy Ingrid", "He had no time"], 0),
    ],
  },
  {
    id: "lib-b1-vrijwilliger-bij-de-voedselbank",
    level: "B1",
    topic: "Society",
    title: "Vrijwilliger bij de voedselbank",
    titleTranslation: "Volunteering at the food bank",
    grammar: [],
    paragraphs: [
      [
        s("Elke donderdagochtend staat Mohamed om acht uur in een grote, koude hal in Rotterdam. Hij is vrijwilliger bij de voedselbank, net als ongeveer veertig andere mensen in zijn wijk.", "Every Thursday morning Mohamed is in a big, cold hall in Rotterdam at eight o'clock. He's a volunteer at the food bank, like about forty other people in his neighbourhood."),
        s("Supermarkten en bedrijven geven eten dat ze niet meer kunnen verkopen, bijvoorbeeld omdat de datum bijna voorbij is. De vrijwilligers sorteren alles en maken er pakketten van.", "Supermarkets and companies give food they can no longer sell, for example because the date has almost passed. The volunteers sort everything and make it into parcels."),
      ],
      [
        s("In de middag komen de klanten: gezinnen die te weinig geld hebben voor eten, omdat ze schulden hebben of omdat hun werk niet genoeg betaalt.", "In the afternoon the clients come: families who don't have enough money for food, because they have debts or because their work doesn't pay enough."),
        s("Je mag maar drie jaar klant zijn. In die tijd krijgen mensen ook hulp om hun schulden op te lossen, zodat ze daarna zelf weer boodschappen kunnen doen.", "You can only be a client for three years. In that time people also get help to sort out their debts, so that afterwards they can do their own shopping again."),
      ],
      [
        s("Mohamed begon vijf jaar geleden, toen hij met pensioen ging. Hij was bang dat hij zich zou vervelen. Nu heeft hij het druk, maar hij vindt het werk belangrijk.", "Mohamed started five years ago, when he retired. He was afraid he'd be bored. Now he's busy, but he finds the work important."),
        s("Wat hem het meest raakt, is dat veel klanten zich schamen. Daarom maakt hij altijd een praatje en vraagt hij hoe het met de kinderen gaat.", "What touches him most is that many clients are ashamed. That's why he always has a chat and asks how the children are."),
        s("Volgens hem kan het iedereen overkomen: een ziekte, een scheiding of een baan die verdwijnt, en je hebt hulp nodig.", "According to him it can happen to anyone: an illness, a divorce or a job that disappears, and you need help."),
      ],
    ],
    tasks: [
      mc("Where does the food come from?", ["Supermarkets and companies that can't sell it", "The government", "Farmers abroad"], 0),
      tf("Je kunt zo lang klant blijven als je wilt.", "You can stay a client as long as you like.", false),
      mc("Why did Mohamed start volunteering?", ["He retired and was afraid of being bored", "He needed food himself", "His school asked him"], 0),
      tf("Mohamed praat met de klanten omdat veel van hen zich schamen.", "Mohamed chats with the clients because many of them are ashamed.", true),
    ],
  },
  {
    id: "lib-b1-mijn-eerste-werkweek",
    level: "B1",
    topic: "Work",
    title: "Mijn eerste werkweek",
    titleTranslation: "My first working week",
    grammar: [],
    paragraphs: [
      [
        s("Vorige maand begon Lucía als verpleegkundige in een ziekenhuis in Utrecht. Ze komt uit Valencia en woont pas een jaar in Nederland. Haar Nederlands is goed, maar die eerste week was toch spannend.", "Last month Lucía started as a nurse at a hospital in Utrecht. She's from Valencia and has only lived in the Netherlands for a year. Her Dutch is good, but that first week was still nerve-racking."),
        s("Op maandag kreeg ze een rondleiding en een pasje. Iedereen noemde haar meteen bij haar voornaam, ook de artsen. In Spanje was dat anders.", "On Monday she got a tour and an ID badge. Everyone called her by her first name straight away, even the doctors. In Spain that was different."),
      ],
      [
        s("Het moeilijkste was niet het werk, maar de taal tussen collega's. Ze praten snel, gebruiken veel afkortingen en maken grapjes die ze niet altijd begreep.", "The hardest part wasn't the work, but the language between colleagues. They talk fast, use a lot of abbreviations and make jokes she didn't always understand."),
        s("Ook de patiënten waren een uitdaging. Een oudere meneer sprak zwaar dialect, en ze moest hem drie keer vragen om iets te herhalen. Gelukkig vond hij dat niet erg; hij lachte en praatte daarna langzamer.", "The patients were a challenge too. An older gentleman spoke a strong dialect, and she had to ask him three times to repeat something. Luckily he didn't mind; he laughed and spoke more slowly after that."),
      ],
      [
        s("Wat haar opviel, was hoe direct haar collega's zijn. Als iets niet goed gaat, zeggen ze het meteen. In het begin voelde dat onvriendelijk, maar ze merkte dat het helpt: je weet altijd waar je staat.", "What struck her was how direct her colleagues are. If something isn't going well, they say so right away. At first that felt unfriendly, but she noticed it helps: you always know where you stand."),
        s("Op vrijdag nam de afdeling taart mee, omdat een collega jarig was. Lucía bleef na haar dienst nog even zitten. Voor het eerst voelde ze zich echt een deel van het team.", "On Friday the ward brought cake, because a colleague had a birthday. Lucía stayed on a little after her shift. For the first time she really felt part of the team."),
      ],
    ],
    tasks: [
      mc("What was hardest for Lucía?", ["The language between colleagues", "The work itself", "Finding the hospital"], 0),
      tf("In het ziekenhuis gebruiken de artsen ook voornamen.", "In the hospital the doctors use first names too.", true),
      mc("How did the older patient react?", ["He laughed and spoke more slowly", "He got angry", "He asked for another nurse"], 0),
      tf("Lucía vindt de directe manier van praten nog steeds onvriendelijk.", "Lucía still finds the direct way of talking unfriendly.", false),
    ],
  },
];
