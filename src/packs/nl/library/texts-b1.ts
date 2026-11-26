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
      [
        s("Wie in Nederland komt wonen, moet vaak opnieuw leren fietsen. Niet omdat je het niet kunt, maar omdat er regels zijn die je nergens anders ziet.", "Anyone who comes to live in the Netherlands often has to learn to cycle again. Not because you can't, but because there are rules you don't see anywhere else."),
        s("Je steekt je hand uit als je afslaat, je fietst nooit op de stoep en je let op de haaientanden: witte driehoeken op de weg die betekenen dat je voorrang moet geven.", "You hold out your hand when you turn, you never cycle on the pavement and you watch out for the shark's teeth: white triangles on the road that mean you have to give way."),
      ],
      [
        s("Nederlanders fietsen ook in situaties die buitenlanders verbazen. Ze vervoeren een kast, een kerstboom of drie kinderen op één fiets. Ze fietsen in een pak naar hun werk, en in de regen met een paraplu in hun hand.", "The Dutch also cycle in situations that amaze foreigners. They carry a cupboard, a Christmas tree or three children on one bike. They cycle to work in a suit, and in the rain with an umbrella in their hand."),
        s("Een helm dragen ze bijna nooit. Dat lijkt gevaarlijk, maar omdat er zoveel fietsers zijn, letten automobilisten goed op. Ze zijn er zelf ook vaak één.", "They almost never wear a helmet. That seems dangerous, but because there are so many cyclists, drivers pay close attention. Often they're cyclists themselves too."),
      ],
      [
        s("De laatste jaren rijden er steeds meer elektrische fietsen. Vooral ouderen gebruiken ze, maar ook mensen die verder van hun werk wonen. Daardoor worden de fietspaden drukker en sneller, en daar zijn niet alle fietsers blij mee.", "In recent years more and more electric bikes have appeared. Older people use them most, but also people who live further from work. As a result the cycle paths are getting busier and faster, and not all cyclists are happy about that."),
        s("Toch is de liefde voor de fiets niet veranderd. Op Koningsdag, bij het station of op een zomeravond langs de gracht: overal zie je hetzelfde beeld. Een land op twee wielen.", "Still, the love of the bike hasn't changed. On King's Day, at the station or on a summer evening by the canal: everywhere you see the same picture. A country on two wheels."),
      ],
      [
        s("Ook buitenlandse steden kijken naar Nederland. Delegaties uit Parijs, New York en Bogotá komen naar Utrecht om de grootste fietsenstalling ter wereld te zien, onder het station, met plek voor meer dan twaalfduizend fietsen.", "Foreign cities look to the Netherlands too. Delegations from Paris, New York and Bogotá come to Utrecht to see the world's biggest bike park, under the station, with room for more than twelve thousand bikes."),
        s("Het Nederlandse geheim is volgens experts niet de cultuur, maar de keuzes van de politiek: wie veilige fietspaden bouwt, krijgt fietsers.", "According to experts, the Dutch secret isn't the culture but the choices of politicians: build safe cycle paths and you get cyclists."),
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
      [
        s("Volgens de organisatie van buurtbemiddeling gaat het bij ruzies tussen buren vaak over dezelfde dingen: lawaai, rommel, parkeren, huisdieren en bomen of heggen. Het probleem zelf is meestal klein, maar het wordt groot omdat mensen niet meer met elkaar praten.", "According to the neighbourhood mediation organisation, rows between neighbours are often about the same things: noise, mess, parking, pets and trees or hedges. The problem itself is usually small, but it grows because people stop talking to each other."),
        s("Een boze brief of een bericht in de groepsapp maakt het vaak erger. Wie een brief krijgt, voelt zich aangevallen en schrijft een nog bozere brief terug.", "An angry letter or a message in the group chat often makes it worse. Whoever gets a letter feels attacked and writes an even angrier letter back."),
      ],
      [
        s("Een gesprek met bemiddelaars duurt meestal anderhalf uur. Eerst vertelt de ene buur zijn verhaal, dan de andere. Niemand mag de ander onderbreken. Daarna zoeken ze samen naar afspraken die voor allebei werken.", "A conversation with mediators usually takes an hour and a half. First one neighbour tells their story, then the other. Nobody may interrupt the other. Afterwards they look together for agreements that work for both."),
        s("De bemiddelaars geven geen oordeel en ze geven ook geen advies. Ze stellen vragen, en ze zorgen ervoor dat iedereen rustig blijft.", "The mediators don't give a verdict and they don't give advice either. They ask questions, and they make sure everyone stays calm."),
      ],
      [
        s("In ongeveer zeventig procent van de gevallen vinden de buren een oplossing. Dat is veel goedkoper en sneller dan een rechtszaak, en je blijft daarna gewoon buren.", "In about seventy per cent of cases the neighbours find a solution. That's much cheaper and quicker than a court case, and afterwards you simply stay neighbours."),
        s("Ingrid en Bert drinken nu weer samen koffie op zaterdagochtend, en de tomaten groeien weer. Volgens Ingrid hadden ze het gesprek veel eerder moeten hebben. Twee jaar ruzie, en het ging eigenlijk om een slechte rug.", "Ingrid and Bert have coffee together again on Saturday mornings, and the tomatoes are growing again. According to Ingrid they should have had the conversation much sooner. Two years of rowing, and it was really about a bad back."),
      ],
      [
        s("Buurtbemiddeling bestaat in bijna alle Nederlandse gemeenten. Je kunt je zelf aanmelden, maar ook de politie, de woningbouwvereniging of de huisarts kan je doorsturen.", "Neighbourhood mediation exists in almost all Dutch municipalities. You can sign up yourself, but the police, the housing association or your GP can also refer you."),
        s("Het werkt alleen als beide buren meedoen. Daarom bellen de bemiddelaars altijd eerst allebei op, om uit te leggen wat ze doen en dat het gesprek vertrouwelijk is.", "It only works if both neighbours take part. That's why the mediators always call both first, to explain what they do and that the conversation is confidential."),
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
      [
        s("In Nederland zijn er ruim honderdzeventig voedselbanken. Samen helpen ze elke week tienduizenden mensen. Ongeveer een derde van hen is kind.", "There are more than a hundred and seventy food banks in the Netherlands. Together they help tens of thousands of people every week. About a third of them are children."),
        s("De voedselbanken krijgen geen geld van de overheid. Ze werken bijna helemaal met vrijwilligers en met eten en geld dat bedrijven, kerken, scholen en gewone mensen geven.", "The food banks get no money from the government. They work almost entirely with volunteers and with food and money given by companies, churches, schools and ordinary people."),
      ],
      [
        s("Niet iedereen vindt het goed dat er voedselbanken zijn. Sommige mensen zeggen dat het in een rijk land niet nodig zou moeten zijn. Volgens hen moet de overheid zorgen dat iedereen genoeg geld heeft om eten te kopen.", "Not everyone thinks it's good that there are food banks. Some people say that in a rich country they shouldn't be needed. According to them the government should make sure everyone has enough money to buy food."),
        s("Mohamed begrijpt die kritiek, maar hij ziet ook elke donderdag de mensen in de rij. Zolang zij hulp nodig hebben, blijft hij komen.", "Mohamed understands that criticism, but he also sees the people in the queue every Thursday. As long as they need help, he'll keep coming."),
      ],
      [
        s("Onlangs kwam een vrouw die vroeger klant was, naar de hal. Ze had een nieuwe baan en geen schulden meer. Ze wilde zelf vrijwilliger worden.", "Recently a woman who used to be a client came to the hall. She had a new job and no more debts. She wanted to become a volunteer herself."),
        s("Voor Mohamed was dat de mooiste dag van het jaar. Het laat zien waar de voedselbank voor is: niet alleen eten geven, maar mensen helpen om weer op eigen benen te staan.", "For Mohamed that was the best day of the year. It shows what the food bank is for: not just giving food, but helping people stand on their own two feet again."),
      ],
      [
        s("Steeds meer supermarkten werken mee aan inzamelacties. Bij de ingang staan dan vrijwilligers met een lijst: pasta, rijst, koffie, shampoo en luiers. Klanten kopen iets extra en geven het bij de uitgang af.", "More and more supermarkets take part in collection drives. Volunteers then stand at the entrance with a list: pasta, rice, coffee, shampoo and nappies. Customers buy something extra and hand it in at the exit."),
        s("Mohamed staat daar ook soms. Wat hem opvalt: mensen die zelf weinig hebben, geven vaak het meest.", "Mohamed stands there sometimes too. What strikes him: people who have little themselves often give the most."),
      ],
    ],
    tasks: [
      mc("Where does the food come from?", ["Supermarkets and companies that can't sell it", "The government", "Farmers abroad"], 0),
      tf("Je kunt zo lang klant blijven als je wilt.", "You can stay a client as long as you like.", false),
      mc("Why did Mohamed start volunteering?", ["He retired and was afraid of being bored", "He needed food himself", "His school asked him"], 0),
      tf("Mohamed praat met de klanten omdat veel van hen zich schamen.", "Mohamed chats with the clients because many of them are ashamed.", true),
    ],
  },
];
