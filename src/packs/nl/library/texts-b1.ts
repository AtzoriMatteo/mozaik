import type { ReadingText } from "@/core/content";
import { mc, s, tf } from "../units/helpers";

type LibraryText = ReadingText & { topic: string };

/** Library texts at B1: no unit, any order. Articles and stories without dialogue. */
export const textsB1: LibraryText[] = [
  {
    id: "lib-b1-de-fiets-als-familielid",
    // Here only: in the lexicon, pratend trips the writing checker's verb rules.
    words: { pratend: { meaning: "talking", base: "praten" } },
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
      [
        s("Wie wil begrijpen hoe belangrijk de fiets is, moet op een doordeweekse ochtend om acht uur bij een middelbare school staan. Honderden tieners komen tegelijk aan, in groepjes, pratend, met hun telefoon in de ene hand en hun tas op de bagagedrager.", "Anyone who wants to understand how important the bike is should stand by a secondary school at eight o'clock on a weekday morning. Hundreds of teenagers arrive at once, in groups, talking, with their phone in one hand and their bag on the luggage rack."),
        s("Sommigen fietsen elke dag vijftien kilometer heen en vijftien terug, ook in de winter. Ouders vinden dat normaal. Een kind dat met de auto naar school wordt gebracht, krijgt al snel de naam verwend te zijn.", "Some cycle fifteen kilometres there and fifteen back every day, in winter too. Parents think that's normal. A child who is driven to school soon gets a reputation for being spoilt."),
      ],
      [
        s("Voor nieuwkomers is de fiets ook een manier om erbij te horen. Veel gemeenten en vrijwilligersorganisaties geven fietslessen aan volwassenen, vooral aan vrouwen die in hun land van herkomst nooit hebben leren fietsen.", "For newcomers the bike is also a way to belong. Many municipalities and volunteer organisations give cycling lessons to adults, especially to women who never learned to cycle in their country of origin."),
        s("De lessen beginnen op een rustig plein, met een fiets zonder pedalen, om het evenwicht te oefenen. Na tien lessen fietsen de meeste deelnemers door de stad. Een vrouw uit Eritrea vertelde in een interview dat ze zich voor het eerst echt vrij voelde: ze kon nu zelf naar haar werk, zonder op de bus te wachten.", "The lessons start in a quiet square, on a bike without pedals, to practise balance. After ten lessons most participants can cycle through town. A woman from Eritrea said in an interview that for the first time she felt really free: she could now get to work on her own, without waiting for the bus."),
      ],
      [
        s("Fietsen is ook gezond, en dat blijkt uit onderzoek. Nederlanders leven gemiddeld een half jaar langer doordat ze zoveel fietsen, en het scheelt de gezondheidszorg elk jaar miljarden euro's. Bovendien is het goed voor het klimaat en voor de lucht in de stad.", "Cycling is healthy too, and research shows it. On average the Dutch live half a year longer because they cycle so much, and it saves the health service billions of euros every year. It's also good for the climate and for the air in the city."),
        s("Toch is niet alles perfect. In de grote steden zijn de fietspaden op sommige momenten zo vol dat er files ontstaan. Snelle elektrische fietsen, bezorgers op scooters en toeristen die de regels niet kennen, zorgen voor stress en soms voor ongelukken.", "Still, not everything is perfect. In the big cities the cycle paths are so full at certain times that there are traffic jams. Fast electric bikes, delivery riders on scooters and tourists who don't know the rules cause stress and sometimes accidents."),
      ],
      [
        s("Steden zoeken naar oplossingen. Amsterdam heeft op sommige plekken de auto bijna helemaal weggehaald en de straat aan fietsers en voetgangers gegeven. Utrecht bouwt nog meer stallingen, en in Rotterdam komen er bredere fietspaden langs de rivier.", "Cities are looking for solutions. In some places Amsterdam has almost completely removed cars and given the street to cyclists and pedestrians. Utrecht is building even more bike parks, and in Rotterdam wider cycle paths are coming along the river."),
        s("Over één ding zijn bijna alle Nederlanders het eens: zonder fiets zou het land niet hetzelfde zijn. Of zoals een oude man het zei, toen een journalist hem vroeg waarom hij op zijn negentigste nog fietste: lopen is te langzaam, en de auto is te saai.", "On one thing almost all Dutch people agree: without the bike the country wouldn't be the same. Or as an old man put it, when a journalist asked him why he was still cycling at ninety: walking is too slow, and the car is too boring."),
      ],
      [
        s("Ook de fiets zelf heeft een geschiedenis. De typische Nederlandse fiets, de omafiets, is zwaar, zwart en heeft een rechte zit. Je zit er rechtop op, zoals op een stoel, en je kunt er in een jas of een rok mee rijden. Snelheid is niet belangrijk; comfort wel.", "The bike itself has a history too. The typical Dutch bike, the omafiets ('granny bike'), is heavy, black and has an upright position. You sit up straight on it, as on a chair, and you can ride it in a coat or a skirt. Speed isn't important; comfort is."),
        s("Buitenlanders lachen soms om die oude fietsen, maar ze gaan dertig jaar mee. In veel families gaat een fiets van de ene generatie naar de volgende, met een nieuw zadel en nieuwe banden.", "Foreigners sometimes laugh at those old bikes, but they last thirty years. In many families a bike passes from one generation to the next, with a new saddle and new tyres."),
      ],
      [
        s("En wat gebeurt er met alle fietsen die in de grachten belanden? Amsterdam haalt er elk jaar duizenden uit, met een kraan op een boot. Sommige liggen er al jaren, vol modder en schelpen. Ze worden gerecycled.", "And what happens to all the bikes that end up in the canals? Amsterdam fishes out thousands every year, with a crane on a boat. Some have been there for years, full of mud and shells. They're recycled."),
        s("Het is een beeld dat veel zegt over het land: zoveel fietsen dat je er zelfs onder water nog over struikelt. Wie hier woont, raakt eraan gewend, en na een tijdje fiets je zelf ook met boodschappen aan je stuur door de regen.", "It's an image that says a lot about the country: so many bikes that you trip over them even under water. Anyone who lives here gets used to it, and after a while you too are cycling through the rain with shopping on your handlebars."),
      ],
    ],
    tasks: [
      mc("Why does the Netherlands suit cycling?", ["It's flat, distances are short and there are cycle paths", "Cars are forbidden in towns", "Bikes are free"], 0),
      tf("In de jaren zeventig waren er weinig auto's in de steden.", "In the seventies there were few cars in the cities.", false),
      mc("What did parents do in the seventies?", ["They protested in the streets", "They sold their cars", "They moved to the countryside"], 0),
      tf("Veel mensen hebben een fiets die er niet te mooi uitziet, zodat hij niet gestolen wordt.", "Many people have a bike that doesn't look too nice, so it won't get stolen.", true),
      mc("Who often gets cycling lessons from volunteers?", ["Adult newcomers, especially women", "Tourists", "Children under five"], 0),
      tf("Volgens het onderzoek leven Nederlanders door het fietsen gemiddeld korter.", "According to the research, cycling makes the Dutch live shorter lives on average.", false),
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
      [
        s("Een van de vrijwilligers die Ingrid en Bert hielp, is Anneke, een gepensioneerde lerares van zevenenzestig. Ze doet het werk nu acht jaar en heeft meer dan honderd gesprekken geleid.", "One of the volunteers who helped Ingrid and Bert is Anneke, a retired teacher of sixty-seven. She's been doing the work for eight years and has led more than a hundred conversations."),
        s("Volgens Anneke is de eerste stap altijd het moeilijkst. Mensen schamen zich, of ze denken dat de ander toch niet wil luisteren. Daarom gaat ze eerst bij allebei op bezoek, apart, met een kop koffie en veel tijd.", "According to Anneke the first step is always the hardest. People are ashamed, or they think the other person won't listen anyway. That's why she first visits both of them, separately, with a cup of coffee and plenty of time."),
      ],
      [
        s("Ze heeft van alles meegemaakt. Een man die elke nacht om drie uur zijn wasmachine aanzette, omdat de stroom dan goedkoper was. Een vrouw die boos was omdat de kat van de buren in haar tuin poepte. Twee broers die buren waren en al vijftien jaar niet met elkaar praatten.", "She's seen all sorts. A man who turned on his washing machine every night at three because electricity was cheaper then. A woman who was angry because the neighbours' cat pooed in her garden. Two brothers who were neighbours and hadn't spoken to each other for fifteen years."),
        s("Achter de kleine problemen zit vaak een groter verhaal. De man met de wasmachine had schulden en werkte twee banen. De vrouw met de kat was net weduwe geworden en voelde zich eenzaam. Als mensen dat van elkaar horen, verandert er iets.", "Behind the small problems there's often a bigger story. The man with the washing machine had debts and worked two jobs. The woman with the cat had just been widowed and felt lonely. When people hear that about each other, something changes."),
      ],
      [
        s("Anneke vertelt dat de bemiddelaars een speciale training krijgen. Ze leren hoe je goed luistert, hoe je een vraag stelt zonder iemand te beschuldigen en hoe je een gesprek rustig houdt als iemand boos wordt.", "Anneke explains that the mediators get special training. They learn how to listen well, how to ask a question without accusing anyone and how to keep a conversation calm when someone gets angry."),
        s("Een belangrijke regel is dat de bemiddelaar nooit de oplossing geeft. De buren moeten die zelf bedenken. Als ze dat doen, houden ze zich er veel vaker aan dan aan een oplossing van een ander.", "An important rule is that the mediator never gives the solution. The neighbours have to come up with it themselves. When they do, they stick to it much more often than to a solution from someone else."),
      ],
      [
        s("Niet elk gesprek lukt. Soms wil één buur gewoon gelijk krijgen, en dan kan Anneke niets doen. Bij ernstige problemen, zoals geweld of bedreiging, is buurtbemiddeling ook niet de juiste hulp; dan moet de politie komen.", "Not every conversation works. Sometimes one neighbour just wants to be proved right, and then Anneke can't do anything. For serious problems, such as violence or threats, neighbourhood mediation isn't the right help either; then the police must come."),
        s("Maar als het lukt, is dat het mooiste moment van haar werk. Ze denkt nog vaak aan de twee broers. Aan het einde van het gesprek gaven ze elkaar een hand, voor het eerst in vijftien jaar. Een week later zag ze ze samen in het café zitten.", "But when it works, it's the best moment of her job. She still often thinks of the two brothers. At the end of the conversation they shook hands, for the first time in fifteen years. A week later she saw them sitting together in the café."),
      ],
      [
        s("Ook gemeenten zien het voordeel. Een ruzie tussen buren die uit de hand loopt, kost de politie, de rechtbank en de woningcorporatie veel tijd en geld. Een gesprek met twee vrijwilligers kost bijna niets.", "Municipalities see the advantage too. A row between neighbours that gets out of hand costs the police, the courts and the housing corporation a lot of time and money. A conversation with two volunteers costs almost nothing."),
        s("Daarom betalen veel gemeenten de organisatie die de vrijwilligers opleidt. Onderzoekers hebben berekend dat elke euro die in buurtbemiddeling wordt gestoken, de samenleving meerdere euro's oplevert.", "That's why many municipalities pay for the organisation that trains the volunteers. Researchers have calculated that every euro put into neighbourhood mediation saves society several euros."),
      ],
      [
        s("Anneke heeft een eenvoudig advies voor iedereen die last heeft van de buren: ga eerst zelf praten, op een rustig moment, en niet als je boos bent. Begin met wat je voelt, niet met wat de ander fout doet. Zeg dus niet: jij maakt altijd lawaai, maar: ik slaap slecht als de muziek laat aanstaat.", "Anneke has simple advice for anyone bothered by their neighbours: go and talk yourself first, at a calm moment, and not when you're angry. Start with what you feel, not with what the other person does wrong. So don't say: you always make noise, but: I sleep badly when the music's on late."),
        s("En als dat niet werkt? Dan bel je buurtbemiddeling. Voordat de heg drie meter hoog is.", "And if that doesn't work? Then you call neighbourhood mediation. Before the hedge is three metres high."),
      ],
    ],
    tasks: [
      mc("What is the problem with the hedge?", ["It takes the sun from Ingrid's garden", "It's dead", "It's on Ingrid's land"], 0),
      tf("Bert knipte de heg meteen toen Ingrid het vroeg.", "Bert trimmed the hedge straight away when Ingrid asked.", false),
      mc("What is buurtbemiddeling?", ["Free help from volunteers who don't take sides", "A court for neighbours", "A paid lawyer"], 0),
      mc("Why didn't Bert trim the hedge?", ["He has a bad back and was ashamed to say so", "He wanted to annoy Ingrid", "He had no time"], 0),
      mc("What is an important rule for mediators?", ["They never give the solution themselves", "They always decide who's right", "They call the police first"], 0),
      tf("Achter kleine problemen tussen buren zit vaak een groter verhaal.", "Behind small problems between neighbours there's often a bigger story.", true),
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
      [
        s("Een gewone donderdag begint met de vrachtwagen. Om half negen komt er een levering van het distributiecentrum: kratten met groente, dozen met pasta en rijst, en soms iets bijzonders, zoals honderd chocoladerepen of een pallet met yoghurt die over twee dagen over de datum is.", "An ordinary Thursday starts with the lorry. At half past eight a delivery arrives from the distribution centre: crates of vegetables, boxes of pasta and rice, and sometimes something special, such as a hundred chocolate bars or a pallet of yoghurt that goes past its date in two days."),
        s("De vrijwilligers moeten alles snel sorteren. Wat bederft, gaat in de koelcel. Wat beschadigd is, wordt weggegooid. De rest wordt eerlijk verdeeld, zodat een gezin met vier kinderen meer krijgt dan iemand die alleen woont.", "The volunteers have to sort everything quickly. Whatever spoils goes into the cold store. Whatever is damaged is thrown away. The rest is shared out fairly, so that a family with four children gets more than someone who lives alone."),
      ],
      [
        s("Om bij de voedselbank te komen, moet je eerst een aanvraag doen bij een hulpverlener, bijvoorbeeld van de gemeente of de schuldhulp. Die kijkt naar je inkomen en je vaste lasten. Pas als er na de huur en de rekeningen te weinig overblijft, krijg je een pas.", "To use the food bank, you first have to apply through a social worker, for example from the municipality or debt counselling. They look at your income and your fixed costs. Only if too little is left after the rent and the bills do you get a card."),
        s("Mohamed kent veel van de klanten bij naam. Er is een moeder met drie kinderen die na haar scheiding alleen kwam te staan. Er is een student met een kapotte studieschuld-planning, zoals hij het zelf noemt. En er is een oude meneer die zijn hele leven heeft gewerkt, maar een te klein pensioen heeft.", "Mohamed knows many of the clients by name. There's a mother of three who was left on her own after her divorce. There's a student whose student-debt plan has fallen apart, as he puts it himself. And there's an old gentleman who worked his whole life but has too small a pension."),
      ],
      [
        s("Rond de feestdagen is het extra druk. Scholen en kerken zamelen dan kerstpakketten in, en een supermarkt geeft elk jaar honderd kalkoenen. De vrijwilligers versieren de hal met lampjes, en er staat koffie met speculaas voor wie wil wachten.", "Around the holidays it's extra busy. Schools and churches collect Christmas hampers then, and one supermarket gives a hundred turkeys every year. The volunteers decorate the hall with fairy lights, and there's coffee and speculaas for anyone who wants to wait."),
        s("Juist in die weken ziet Mohamed hoeveel het betekent. Een vader vertelde hem dat zijn kinderen voor het eerst in jaren een echt kerstdiner hadden. Hij had tranen in zijn ogen, en Mohamed ook.", "It's in those weeks that Mohamed sees how much it means. A father told him that his children had a real Christmas dinner for the first time in years. He had tears in his eyes, and so did Mohamed."),
      ],
      [
        s("Het werk is niet altijd makkelijk. Soms is er te weinig eten voor iedereen, en moeten de vrijwilligers kiezen. Soms is een klant boos, omdat hij iets anders verwachtte. Mohamed probeert dan rustig te blijven. Hij weet dat de boosheid meestal niet over hem gaat.", "The work isn't always easy. Sometimes there's too little food for everyone, and the volunteers have to choose. Sometimes a client is angry because they expected something else. Mohamed tries to stay calm then. He knows the anger usually isn't about him."),
        s("Als zijn kleinkinderen vragen waarom hij elke donderdag zo vroeg weggaat, zegt hij: omdat iemand het moet doen. En omdat ik er zelf ook iets voor terugkrijg. Hij bedoelt niet het eten, maar de verhalen, de mensen en het gevoel dat hij nog nodig is.", "When his grandchildren ask why he leaves so early every Thursday, he says: because someone has to do it. And because I get something back too. He doesn't mean the food, but the stories, the people and the feeling that he's still needed."),
      ],
      [
        s("De voedselbank is ook een plek waar mensen uit heel verschillende werelden elkaar ontmoeten. Naast Mohamed werkt een jonge bankmedewerker die een dag per maand vrij krijgt van zijn werkgever om vrijwilliger te zijn. Aan de andere kant van de tafel staat een vrouw uit Suriname die al twintig jaar in de wijk woont en iedereen kent.", "The food bank is also a place where people from very different worlds meet. Next to Mohamed works a young bank employee who gets a day a month off from his employer to volunteer. On the other side of the table stands a woman from Suriname who has lived in the neighbourhood for twenty years and knows everyone."),
        s("Tijdens de koffiepauze praten ze over alles: over voetbal, over de prijzen in de supermarkt, over hun kinderen. Zonder de voedselbank hadden ze elkaar waarschijnlijk nooit gesproken.", "During the coffee break they talk about everything: football, prices in the supermarket, their children. Without the food bank they'd probably never have spoken to each other."),
      ],
      [
        s("Het aantal klanten is de laatste jaren gestegen. Boodschappen, energie en huur zijn duurder geworden, en steeds meer mensen met een baan komen toch niet rond. Dat vindt Mohamed het moeilijkste om te zien: mensen die hard werken en nog steeds hulp nodig hebben.", "The number of clients has risen in recent years. Groceries, energy and rent have become more expensive, and more and more people with a job still can't make ends meet. That's what Mohamed finds hardest to see: people who work hard and still need help."),
        s("Hij hoopt dat de voedselbank ooit niet meer nodig is. Tot die tijd staat hij er elke donderdag, om acht uur, in de koude hal. Met een warme trui aan, en een thermoskan koffie voor de collega's.", "He hopes the food bank will one day no longer be needed. Until then he'll be there every Thursday, at eight, in the cold hall. Wearing a warm jumper, with a thermos of coffee for his colleagues."),
      ],
    ],
    tasks: [
      mc("Where does the food come from?", ["Supermarkets and companies that can't sell it", "The government", "Farmers abroad"], 0),
      tf("Je kunt zo lang klant blijven als je wilt.", "You can stay a client as long as you like.", false),
      mc("Why did Mohamed start volunteering?", ["He retired and was afraid of being bored", "He needed food himself", "His school asked him"], 0),
      tf("Mohamed praat met de klanten omdat veel van hen zich schamen.", "Mohamed chats with the clients because many of them are ashamed.", true),
      mc("How do you become a client of the food bank?", ["You apply through a social worker who checks your income", "You just turn up", "Your employer sends you"], 0),
      tf("Een gezin met vier kinderen krijgt evenveel als iemand die alleen woont.", "A family with four children gets the same as someone who lives alone.", false),
    ],
  },
];
