import type { ReadingText } from "@/core/content";
import { mc, s, tf } from "../units/helpers";

type LibraryText = ReadingText & { topic: string };

/** Long Library texts at A1 and A2: a whole story in one sitting. */
export const textsA: LibraryText[] = [
  {
    id: "lib-a1-een-dag-in-amsterdam",
    level: "A1",
    topic: "Travel",
    title: "Een dag in Amsterdam",
    titleTranslation: "A day in Amsterdam",
    grammar: [],
    paragraphs: [
      [
        s("Sara woont in Leiden. Ze is drieëntwintig en ze studeert. Op zaterdag gaat ze met de trein naar Amsterdam. De reis duurt veertig minuten.", "Sara lives in Leiden. She's twenty-three and she's a student. On Saturday she takes the train to Amsterdam. The journey takes forty minutes."),
        s("Op het station is het heel druk. Er zijn veel toeristen met grote koffers. Sara loopt naar buiten en ziet het water en de oude huizen.", "At the station it's very busy. There are lots of tourists with big suitcases. Sara walks outside and sees the water and the old houses."),
      ],
      [
        s("Eerst drinkt ze koffie in een klein café aan een gracht. De koffie kost drie euro. Dat is duur, maar het café is mooi en de zon schijnt.", "First she has coffee in a small café by a canal. The coffee costs three euros. That's expensive, but the café is pretty and the sun is shining."),
        s("Dan gaat ze naar het museum. Ze kijkt naar oude schilderijen. Ze vindt de schilderijen van Rembrandt heel mooi, maar het museum is groot en na twee uur is ze moe.", "Then she goes to the museum. She looks at old paintings. She thinks Rembrandt's paintings are very beautiful, but the museum is big and after two hours she's tired."),
      ],
      [
        s("Om één uur heeft ze honger. Ze koopt een broodje kaas en een appel op de markt. Ze eet in het park. Daar zijn veel mensen: kinderen spelen, een man speelt gitaar en twee vrouwen lezen een boek.", "At one o'clock she's hungry. She buys a cheese roll and an apple at the market. She eats in the park. There are lots of people there: children are playing, a man is playing the guitar and two women are reading a book."),
        s("In de middag huurt ze een fiets. Fietsen in Amsterdam is spannend! Er zijn veel fietsen, trams en toeristen op straat.", "In the afternoon she hires a bike. Cycling in Amsterdam is exciting! There are lots of bikes, trams and tourists in the street."),
      ],
      [
        s("Om zeven uur eet ze met haar vriend Tim in een restaurant. Ze eten soep en vis. Tim woont in Amsterdam en hij werkt in een winkel.", "At seven she has dinner with her friend Tim in a restaurant. They eat soup and fish. Tim lives in Amsterdam and he works in a shop."),
        s("Om tien uur zit Sara weer in de trein. Ze is moe, maar blij. Volgende maand gaat ze weer, want ze wil nog veel meer zien.", "At ten o'clock Sara is on the train again. She's tired, but happy. Next month she's going again, because she wants to see a lot more."),
      ],
      [
        s("Een maand later gaat Sara weer naar Amsterdam. Nu wil ze iets anders zien: niet het centrum, maar de stad waar de mensen wonen.", "A month later Sara goes to Amsterdam again. Now she wants to see something different: not the centre, but the city where the people live."),
        s("Tim wacht op haar bij het station. Hij heeft twee fietsen. Samen fietsen ze naar het oosten van de stad, naar een grote markt.", "Tim is waiting for her at the station. He has two bikes. Together they cycle to the east of the city, to a big market."),
      ],
      [
        s("Op de markt is alles goedkoper dan in het centrum. Er is fruit uit Marokko, kaas uit Friesland en vis uit de Noordzee. Sara koopt dadels en een stuk kaas voor haar moeder.", "At the market everything is cheaper than in the centre. There's fruit from Morocco, cheese from Friesland and fish from the North Sea. Sara buys dates and a piece of cheese for her mother."),
        s("Tim koopt twee haringen. Hij eet de haring op de Nederlandse manier: hij houdt de vis aan de staart en eet hem in één keer. Sara vindt het een beetje vies, maar ze probeert het ook.", "Tim buys two herrings. He eats the herring the Dutch way: he holds the fish by the tail and eats it in one go. Sara thinks it's a bit gross, but she tries it too."),
      ],
      [
        s("Daarna gaan ze met de pont naar Amsterdam-Noord. De pont is gratis en gaat elke paar minuten. Op de boot staan veel mensen met fietsen.", "Then they take the ferry to Amsterdam-Noord. The ferry is free and goes every few minutes. There are lots of people with bikes on the boat."),
        s("In Noord zijn oude fabrieken. Nu zijn er cafés, ateliers en een groot filmmuseum. Sara en Tim drinken thee op een terras aan het water. Ze kijken naar de boten en naar het station aan de andere kant.", "In Noord there are old factories. Now there are cafés, studios and a big film museum. Sara and Tim drink tea on a terrace by the water. They look at the boats and at the station on the other side."),
      ],
      [
        s("Om zes uur is Sara moe. Ze heeft vandaag twintig kilometer gefietst! Tim brengt haar naar het station.", "At six Sara is tired. She's cycled twenty kilometres today! Tim takes her to the station."),
        s("In de trein denkt ze: het centrum is mooi, maar dit Amsterdam vind ik nog leuker. Thuis geeft ze de kaas aan haar moeder. Haar moeder vraagt: wanneer ga je weer? Sara lacht: volgende maand, natuurlijk.", "On the train she thinks: the centre is beautiful, but I like this Amsterdam even more. At home she gives the cheese to her mother. Her mother asks: when are you going again? Sara laughs: next month, of course."),
      ],
    ],
    tasks: [
      mc("How long does the train journey take?", ["Forty minutes", "Two hours", "Ten minutes"], 0),
      tf("Sara vindt de koffie goedkoop.", "Sara thinks the coffee is cheap.", false),
      mc("Where does Sara eat lunch?", ["In the park", "In the museum", "On the train"], 0),
      tf("Sara wil volgende maand weer naar Amsterdam.", "Sara wants to go to Amsterdam again next month.", true),
      tf("Sara en Tim gaan met een gratis pont naar Amsterdam-Noord.", "Sara and Tim take a free ferry to Amsterdam-Noord.", true),
      mc("How does Tim eat the herring?", ["He holds it by the tail and eats it in one go", "With bread", "With a knife and fork"], 0),
    ],
  },
  {
    id: "lib-a1-mijn-nieuwe-buurvrouw",
    level: "A1",
    topic: "People",
    title: "Mijn nieuwe buurvrouw",
    titleTranslation: "My new neighbour",
    grammar: [],
    paragraphs: [
      [
        s("Ik heet Pieter en ik woon in een klein huis in Haarlem. Ik ben zeventig jaar. Mijn vrouw is dood en mijn kinderen wonen ver weg, in Groningen en in Spanje.", "My name is Pieter and I live in a small house in Haarlem. I'm seventy. My wife is dead and my children live far away, in Groningen and in Spain."),
        s("Ik woon dus alleen. Soms is dat rustig, soms is het een beetje saai.", "So I live alone. Sometimes that's peaceful, sometimes it's a bit boring."),
      ],
      [
        s("Vorige maand komt er een nieuwe buurvrouw naast mij wonen. Ze heet Amina en ze komt uit Marokko. Ze is dertig en ze heeft twee kinderen: een jongen van vijf en een meisje van acht.", "Last month a new neighbour comes to live next door to me. Her name is Amina and she comes from Morocco. She's thirty and she has two children: a boy of five and a girl of eight."),
        s("De eerste dag help ik met de dozen. Ze zijn zwaar! Amina zegt dank je wel en ze geeft me thee met munt. De thee is heel zoet en heel lekker.", "The first day I help with the boxes. They're heavy! Amina says thank you and gives me mint tea. The tea is very sweet and very nice."),
      ],
      [
        s("Nu zie ik Amina bijna elke dag. Ze werkt in een school in de buurt. In de middag spelen de kinderen in de tuin. Ze maken veel lawaai, maar dat vind ik niet erg. Het is gezellig.", "Now I see Amina almost every day. She works at a school nearby. In the afternoon the children play in the garden. They make a lot of noise, but I don't mind. It's nice to have them around."),
        s("Het meisje heet Nora. Ze leert lezen en ze leest elke dag een boek voor mij. Ik help haar met moeilijke woorden.", "The girl is called Nora. She's learning to read and she reads a book to me every day. I help her with difficult words."),
      ],
      [
        s("Op zondag eten we soms samen. Amina kookt couscous en ik maak appeltaart. Dat is een goede combinatie!", "On Sundays we sometimes eat together. Amina cooks couscous and I make apple pie. That's a good combination!"),
        s("Ik ben niet meer zo vaak alleen. Ik denk: een goede buur is beter dan een verre vriend.", "I'm not alone so often any more. I think: a good neighbour is better than a distant friend."),
      ],
      [
        s("In december wordt Amina ziek. Ze heeft koorts en ze moet een week in bed blijven. De kinderen moeten naar school, maar wie brengt ze?", "In December Amina gets ill. She has a fever and has to stay in bed for a week. The children have to go to school, but who takes them?"),
        s("Ik zeg: dat doe ik. Elke ochtend om acht uur sta ik bij haar deur. Ik loop met Nora en haar broer Yassin naar school. Het is tien minuten lopen.", "I say: I'll do it. Every morning at eight I'm at her door. I walk Nora and her brother Yassin to school. It's a ten-minute walk."),
      ],
      [
        s("Yassin praat de hele weg. Hij vertelt over zijn vrienden, over voetbal en over zijn juf. Nora is stiller. Ze houdt mijn hand vast als we de straat oversteken.", "Yassin talks the whole way. He tells me about his friends, about football and about his teacher. Nora is quieter. She holds my hand when we cross the street."),
        s("Bij de school ken ik niemand, maar na een paar dagen groeten de andere ouders mij. Een moeder vraagt: bent u de opa van Nora? Ik zeg: nee, ik ben de buurman. Ze lacht en zegt: dat is ook mooi.", "At the school I don't know anyone, but after a few days the other parents say hello to me. A mother asks: are you Nora's grandpa? I say: no, I'm the neighbour. She laughs and says: that's lovely too."),
      ],
      [
        s("In de middag kook ik soep voor Amina. Ik ben geen goede kok, maar groentesoep kan ik wel maken. Mijn vrouw leerde het mij, lang geleden.", "In the afternoon I cook soup for Amina. I'm not a good cook, but I can make vegetable soup. My wife taught me, a long time ago."),
        s("Amina zegt dat het de lekkerste soep van Haarlem is. Ik weet dat dat niet waar is, maar ik ben toch blij.", "Amina says it's the tastiest soup in Haarlem. I know that isn't true, but I'm happy all the same."),
      ],
      [
        s("Na een week is Amina weer beter. Ze staat voor mijn deur met een grote doos. In de doos zit een nieuwe sjaal. Ze heeft hem zelf gemaakt, in het blauw, mijn lievelingskleur.", "After a week Amina is better again. She's at my door with a big box. In the box is a new scarf. She made it herself, in blue, my favourite colour."),
        s("Nu draag ik de sjaal elke dag. Mijn zoon belt uit Spanje en vraagt: hoe gaat het, papa? Ik zeg: goed, jongen. Echt heel goed.", "Now I wear the scarf every day. My son calls from Spain and asks: how are you, Dad? I say: good, son. Really very good."),
      ],
    ],
    tasks: [
      mc("Where do Pieter's children live?", ["In Groningen and in Spain", "In Haarlem", "In Morocco"], 0),
      tf("Amina geeft Pieter koffie.", "Amina gives Pieter coffee.", false),
      mc("What does Nora do every day?", ["She reads a book to Pieter", "She cooks", "She plays the guitar"], 0),
      tf("Pieter is nu minder vaak alleen.", "Pieter is alone less often now.", true),
      mc("What does Pieter do when Amina is ill?", ["He takes the children to school", "He calls a doctor", "He goes to Spain"], 0),
      tf("Amina geeft Pieter een sjaal die ze zelf heeft gemaakt.", "Amina gives Pieter a scarf she made herself.", true),
    ],
  },
  {
    id: "lib-a1-op-de-markt",
    level: "A1",
    topic: "Food",
    title: "Op de markt",
    titleTranslation: "At the market",
    grammar: [],
    paragraphs: [
      [
        s("Elke woensdag is er markt in het centrum van Utrecht. Lisa gaat er altijd met haar fiets naartoe. Ze neemt twee grote tassen mee.", "Every Wednesday there's a market in the centre of Utrecht. Lisa always cycles there. She takes two big bags with her."),
        s("De markt begint om acht uur. Om negen uur is het al druk. Er zijn wel honderd kramen met groente, fruit, vis, kaas, brood en bloemen.", "The market starts at eight. At nine it's already busy. There are about a hundred stalls with vegetables, fruit, fish, cheese, bread and flowers."),
      ],
      [
        s("Eerst gaat Lisa naar de groenteboer. Ze koopt aardappels, tomaten, uien en een bloemkool. Alles is vers en niet duur.", "First Lisa goes to the greengrocer. She buys potatoes, tomatoes, onions and a cauliflower. Everything is fresh and not expensive."),
        s("Dan gaat ze naar de kaaskraam. Daar werkt Henk. Hij is altijd vrolijk. Lisa mag een stukje kaas proeven. Ze neemt een half kilo oude kaas.", "Then she goes to the cheese stall. Henk works there. He's always cheerful. Lisa can taste a piece of cheese. She takes half a kilo of mature cheese."),
      ],
      [
        s("Bij de viskraam koopt ze geen vis, maar wel een zakje kibbeling. Kibbeling is gebakken vis met saus. Ze eet het meteen op, want het is warm en lekker.", "At the fish stall she doesn't buy fish, but she does buy a bag of kibbeling. Kibbeling is fried fish with sauce. She eats it straight away, because it's hot and tasty."),
        s("Dan regent het een beetje. Veel mensen gaan naar huis, maar Lisa niet. Ze heeft een jas met een capuchon.", "Then it rains a little. Lots of people go home, but Lisa doesn't. She has a coat with a hood."),
      ],
      [
        s("Als laatste koopt ze bloemen: tien tulpen voor vijf euro. Ze zijn geel en rood.", "Last of all she buys flowers: ten tulips for five euros. They're yellow and red."),
        s("Thuis zet ze de tulpen op tafel. Ze kookt soep met de groente en ze eet een boterham met kaas. Wat een goede dag!", "At home she puts the tulips on the table. She cooks soup with the vegetables and has a slice of bread with cheese. What a good day!"),
      ],
      [
        s("De volgende woensdag is Lisa niet alleen. Haar vriendin Eva gaat mee. Eva komt uit Polen en woont pas twee maanden in Utrecht. Ze kent de markt nog niet.", "The next Wednesday Lisa isn't alone. Her friend Eva comes too. Eva is from Poland and has only lived in Utrecht for two months. She doesn't know the market yet."),
        s("Eva is verbaasd. In Polen is er ook markt, maar niet zo groot. En ze heeft nog nooit zoveel soorten kaas gezien.", "Eva is amazed. There are markets in Poland too, but not so big. And she's never seen so many kinds of cheese."),
      ],
      [
        s("Bij de kaaskraam legt Henk het uit: jonge kaas is zacht, oude kaas is hard en sterk. Hij geeft Eva een stukje van elke kaas. Eva vindt de oude kaas het lekkerst.", "At the cheese stall Henk explains: young cheese is soft, mature cheese is hard and strong. He gives Eva a little piece of each cheese. Eva likes the mature cheese best."),
        s("Henk vraagt waar ze vandaan komt. Hij zegt: mijn opa ging vroeger elk jaar naar Polen. Hij vond het een prachtig land. Eva is blij en ze praten tien minuten.", "Henk asks where she's from. He says: my grandpa used to go to Poland every year. He thought it was a beautiful country. Eva is pleased and they talk for ten minutes."),
      ],
      [
        s("Dan gaan ze naar de bakker. Daar koopt Eva een groot bruin brood en Lisa koopt stroopwafels. De stroopwafels zijn vers en nog warm. Ze eten er meteen twee.", "Then they go to the baker. There Eva buys a big brown loaf and Lisa buys stroopwafels. The stroopwafels are fresh and still warm. They eat two straight away."),
        s("Eva zegt: in Polen eten we ook veel brood, maar dit koekje ken ik niet. Het is heel zoet! Lisa lacht: Nederlanders houden van zoet.", "Eva says: in Poland we eat a lot of bread too, but I don't know this biscuit. It's very sweet! Lisa laughs: the Dutch love sweet things."),
      ],
      [
        s("Thuis koken ze samen. Eva maakt een Poolse soep met bieten, en Lisa maakt een salade. Ze eten aan de tafel met de tulpen.", "At home they cook together. Eva makes a Polish beetroot soup, and Lisa makes a salad. They eat at the table with the tulips."),
        s("Na het eten zegt Eva: volgende week ga ik weer mee. Lisa zegt: goed, maar dan neem jij de tassen. Ze zijn zwaar!", "After dinner Eva says: next week I'm coming again. Lisa says: fine, but then you carry the bags. They're heavy!"),
      ],
    ],
    tasks: [
      mc("When is the market?", ["Every Wednesday", "Every Sunday", "Every day"], 0),
      tf("Lisa koopt vis bij de viskraam.", "Lisa buys fish at the fish stall.", false),
      mc("What is kibbeling?", ["Fried fish with sauce", "A kind of cheese", "A flower"], 0),
      tf("Lisa gaat naar huis als het regent.", "Lisa goes home when it rains.", false),
      tf("Eva vindt de jonge kaas het lekkerst.", "Eva likes the young cheese best.", false),
      mc("What does Eva cook?", ["A Polish beetroot soup", "Kibbeling", "A salad"], 0),
    ],
  },
  {
    id: "lib-a2-een-weekend-op-texel",
    level: "A2",
    topic: "Travel",
    title: "Een weekend op Texel",
    titleTranslation: "A weekend on Texel",
    grammar: [],
    paragraphs: [
      [
        s("Vorig jaar in mei gingen Daan en zijn vriendin Fleur een weekend naar Texel. Texel is het grootste eiland van Nederland, in het noorden, in de Waddenzee.", "Last year in May Daan and his girlfriend Fleur went to Texel for a weekend. Texel is the biggest island in the Netherlands, in the north, in the Wadden Sea."),
        s("Op vrijdagmiddag namen ze de trein naar Den Helder. Daar stapten ze op de boot. De boot doet er maar twintig minuten over, maar je hebt het gevoel dat je naar een ander land gaat.", "On Friday afternoon they took the train to Den Helder. There they got on the boat. The boat only takes twenty minutes, but you feel as if you're going to another country."),
      ],
      [
        s("Ze sliepen in een klein hotel in Den Burg, het grootste dorp van het eiland. De kamer was eenvoudig, maar het ontbijt was geweldig: vers brood, eieren, kaas van het eiland en zelfgemaakte jam.", "They slept in a small hotel in Den Burg, the biggest village on the island. The room was simple, but the breakfast was great: fresh bread, eggs, cheese from the island and homemade jam."),
        s("Op zaterdag huurden ze fietsen. Ze fietsten door de duinen en door het bos naar de vuurtoren. Het waaide hard en soms moesten ze tegen de wind in fietsen. Dat was zwaar, maar de natuur was prachtig.", "On Saturday they hired bikes. They cycled through the dunes and the woods to the lighthouse. It was very windy and sometimes they had to cycle into the wind. That was hard, but the nature was beautiful."),
      ],
      [
        s("Bij de vuurtoren klommen ze honderddertig treden naar boven. Van daar konden ze het hele eiland zien: de zee, het strand, de dorpen en heel veel schapen.", "At the lighthouse they climbed a hundred and thirty steps to the top. From there they could see the whole island: the sea, the beach, the villages and lots and lots of sheep."),
        s("Op Texel wonen ongeveer veertienduizend mensen, maar er zijn meer schapen dan mensen. Van de wol maken ze truien en sokken, en van de melk maken ze kaas.", "About fourteen thousand people live on Texel, but there are more sheep than people. From the wool they make jumpers and socks, and from the milk they make cheese."),
      ],
      [
        s("In de middag gingen ze naar Ecomare, een centrum voor de natuur van de Waddenzee. Daar zagen ze zeehonden. Sommige zeehonden waren ziek of gewond en worden daar geholpen. Als ze weer gezond zijn, gaan ze terug naar zee.", "In the afternoon they went to Ecomare, a centre for the nature of the Wadden Sea. There they saw seals. Some of the seals were ill or injured and are helped there. When they're healthy again, they go back to the sea."),
        s("Daarna liepen ze over het strand. Het was koud, maar Fleur wilde toch even met haar voeten in de zee. Ze gilde: het water was ijskoud!", "Afterwards they walked along the beach. It was cold, but Fleur still wanted to put her feet in the sea for a moment. She screamed: the water was ice-cold!"),
      ],
      [
        s("Op zondag regende het de hele dag. Ze bleven lang in het hotel, speelden spelletjes en lazen een boek. In de middag aten ze pannenkoeken in een oude boerderij.", "On Sunday it rained all day. They stayed in the hotel a long time, played games and read a book. In the afternoon they ate pancakes in an old farmhouse."),
        s("Op de boot terug zei Daan: we komen terug, in de zomer. Fleur lachte en zei: alleen als het water dan warmer is.", "On the boat back Daan said: we'll come back, in the summer. Fleur laughed and said: only if the water's warmer then."),
      ],
      [
        s("Thuis vertelde Daan zijn collega's over het weekend. Een collega zei dat je bij laag water van Texel naar het eiland Vlieland kunt lopen, met een gids. Dat heet wadlopen.", "At home Daan told his colleagues about the weekend. A colleague said that at low tide you can walk from Texel to the island of Vlieland, with a guide. That's called wadlopen (mudflat walking)."),
        s("Daan wil het graag proberen. Fleur niet: ze vindt modder nog erger dan koud water.", "Daan would really like to try it. Fleur wouldn't: she thinks mud is even worse than cold water."),
      ],
      [
        s("In augustus gingen ze echt terug, dit keer met Daans zus Marloes en haar twee kinderen. Ze huurden een klein huisje bij het strand van De Koog, met een tuin en een barbecue.", "In August they really did go back, this time with Daan's sister Marloes and her two children. They rented a little cottage near the beach at De Koog, with a garden and a barbecue."),
        s("In de zomer is Texel heel anders dan in mei. Overal zijn toeristen, vooral Duitsers, en op het strand is het druk. Maar als je een paar kilometer fietst, ben je weer bijna alleen.", "In summer Texel is very different from May. There are tourists everywhere, especially Germans, and the beach is busy. But if you cycle a few kilometres, you're almost alone again."),
      ],
      [
        s("De kinderen, Lotte en Bram, wilden elke dag naar zee. Ze bouwden zandkastelen, zochten schelpen en zwommen in de golven. Het water was nu wel warm genoeg, zelfs voor Fleur.", "The children, Lotte and Bram, wanted to go to the sea every day. They built sandcastles, looked for shells and swam in the waves. The water was warm enough now, even for Fleur."),
        s("Op een middag zagen ze een zeehond op het strand. Hij lag stil in het zand. Bram wilde hem aaien, maar Daan zei: niet doen, hij is wild en hij kan bijten. Ze belden Ecomare, en een medewerker kwam kijken. De zeehond was gelukkig niet ziek, alleen moe.", "One afternoon they saw a seal on the beach. It lay still in the sand. Bram wanted to stroke it, but Daan said: don't, it's wild and it can bite. They called Ecomare, and a member of staff came to look. Luckily the seal wasn't ill, just tired."),
      ],
      [
        s("Daan wilde graag wadlopen, en dit keer ging hij. Met een gids en twintig andere mensen liep hij bij laag water over de bodem van de Waddenzee. Soms zakte hij tot zijn knieën in de modder.", "Daan really wanted to go mudflat walking, and this time he went. With a guide and twenty other people he walked over the bottom of the Wadden Sea at low tide. Sometimes he sank up to his knees in the mud."),
        s("De gids vertelde over de vogels, de wormen en de krabben die daar leven. De Waddenzee is een van de belangrijkste natuurgebieden van Europa. Na drie uur kwam Daan terug: vies, moe en heel tevreden.", "The guide told them about the birds, the worms and the crabs that live there. The Wadden Sea is one of the most important nature areas in Europe. After three hours Daan came back: dirty, tired and very satisfied."),
      ],
      [
        s("Fleur bleef die dag met de kinderen in het dorp. Ze gingen naar een schapenboerderij, waar Lotte een lammetje fles mocht geven. Bram kocht een kleine schapenknuffel met zijn eigen geld.", "Fleur stayed in the village with the children that day. They went to a sheep farm, where Lotte was allowed to bottle-feed a lamb. Bram bought a little toy sheep with his own money."),
        s("De laatste avond aten ze vis op het terras van het huisje. De zon ging laat onder, rood boven de duinen. Marloes zei: volgend jaar weer? En dit keer zei iedereen ja, ook Fleur.", "On the last evening they ate fish on the cottage terrace. The sun set late, red above the dunes. Marloes said: again next year? And this time everyone said yes, even Fleur."),
      ],
    ],
    tasks: [
      mc("How did Daan and Fleur get to Texel?", ["By train and boat", "By car over a bridge", "By plane"], 0),
      tf("Op Texel zijn meer mensen dan schapen.", "There are more people than sheep on Texel.", false),
      mc("What happens at Ecomare?", ["Sick or injured seals are helped", "Cheese is made", "Bikes are hired"], 0),
      tf("Op zondag was het mooi weer.", "On Sunday the weather was nice.", false),
      mc("What did Daan do with a guide?", ["He went mudflat walking", "He sailed to Vlieland", "He visited a sheep farm"], 0),
      tf("In augustus vond Fleur het water nog steeds te koud.", "In August Fleur still found the water too cold.", false),
    ],
  },
  {
    id: "lib-a2-sinterklaas",
    // Here only: in the lexicon, keek trips the writing checker's verb rules.
    words: { keek: { meaning: "looked", base: "kijken" } },
    level: "A2",
    topic: "Dutch life",
    title: "Sinterklaas bij de familie De Boer",
    titleTranslation: "Sinterklaas with the De Boer family",
    grammar: [],
    paragraphs: [
      [
        s("Voor kinderen in Nederland is 5 december de belangrijkste avond van het jaar. Dan is het pakjesavond: Sinterklaas brengt cadeautjes. Kerst is ook leuk, maar Sinterklaas is speciaal.", "For children in the Netherlands, 5 December is the most important evening of the year. That's pakjesavond: Sinterklaas brings presents. Christmas is nice too, but Sinterklaas is special."),
        s("Volgens het verhaal komt Sinterklaas half november met een boot uit Spanje. Hij is een oude man met een lange witte baard, een rode mantel en een hoge hoed. Hij rijdt op een wit paard.", "According to the story, Sinterklaas arrives from Spain by boat in mid-November. He's an old man with a long white beard, a red cloak and a tall hat. He rides a white horse."),
      ],
      [
        s("Bij de familie De Boer in Amersfoort wachten de kinderen, Sem en Julia, al weken op de grote avond. Elke avond zetten ze hun schoen bij de deur. In de schoen leggen ze een wortel voor het paard en een tekening voor Sinterklaas.", "At the De Boer family's in Amersfoort, the children, Sem and Julia, have been waiting weeks for the big evening. Every evening they put their shoe by the door. In the shoe they put a carrot for the horse and a drawing for Sinterklaas."),
        s("De volgende ochtend zit er vaak iets lekkers in de schoen: een chocoladeletter, pepernoten of een klein cadeautje. Sem kreeg de letter S, Julia de letter J.", "The next morning there's often something nice in the shoe: a chocolate letter, pepernoten or a little present. Sem got the letter S, Julia the letter J."),
      ],
      [
        s("Op 5 december komt de hele familie bij elkaar: opa en oma, een tante en een oom en hun kinderen. Ze zingen liedjes en eten pepernoten en speculaas.", "On 5 December the whole family gets together: grandpa and grandma, an aunt and an uncle and their children. They sing songs and eat pepernoten and speculaas."),
        s("Om acht uur wordt er hard op de deur geklopt. Iedereen rent naar de gang, maar er is niemand. Alleen een grote zak vol pakjes!", "At eight o'clock there's a loud knock on the door. Everyone runs into the hall, but there's nobody there. Only a big sack full of presents!"),
      ],
      [
        s("Voor de volwassenen is de avond ook leuk, maar op een andere manier. Zij geven elkaar een surprise: een cadeau in een grappige verpakking, met een gedicht. In het gedicht maak je grapjes over de ander.", "For the adults the evening is fun too, but in a different way. They give each other a surprise: a present in a funny wrapping, with a poem. In the poem you make jokes about the other person."),
        s("Dit jaar kreeg vader een grote kartonnen fiets. In de fiets zaten nieuwe handschoenen, en het gedicht ging over zijn koude handen op de fiets naar zijn werk. Iedereen moest lachen.", "This year Dad got a big cardboard bike. Inside the bike were new gloves, and the poem was about his cold hands on his bike ride to work. Everyone laughed."),
      ],
      [
        s("Laat in de avond liggen Sem en Julia in bed. Ze zijn moe, maar heel blij met hun cadeautjes. Morgen vertrekt Sinterklaas weer naar Spanje.", "Late in the evening Sem and Julia are in bed. They're tired, but very happy with their presents. Tomorrow Sinterklaas leaves for Spain again."),
        s("Julia vraagt: komt hij volgend jaar weer? Haar moeder lacht en zegt: als je lief bent, natuurlijk.", "Julia asks: will he come again next year? Her mother laughs and says: if you're good, of course."),
      ],
      [
        s("Sinterklaas is een oud feest, maar het verandert ook. Vroeger hadden de helpers van Sinterklaas een zwart gezicht. Veel mensen vonden dat racistisch, en na veel discussie hebben de meeste steden en scholen nu helpers met roetvegen, alsof ze door de schoorsteen zijn gekomen.", "Sinterklaas is an old festival, but it's changing too. Sinterklaas's helpers used to have black faces. Many people found that racist, and after much discussion most towns and schools now have helpers with smudges of soot, as if they've come down the chimney."),
        s("Voor Sem en Julia maakt het niet uit. Voor hen gaat het om de spanning, de liedjes en de cadeautjes.", "For Sem and Julia it makes no difference. For them it's about the excitement, the songs and the presents."),
      ],
      [
        s("Een paar weken eerder begon het al. Half november kwam Sinterklaas aan in Nederland, en de intocht was live op tv. Sem en Julia keken samen met de buren naar de boot, de muziek en de duizenden kinderen langs het water.", "It started a few weeks earlier. In mid-November Sinterklaas arrived in the Netherlands, and the arrival was live on TV. Sem and Julia watched the boat, the music and the thousands of children along the water with the neighbours."),
        s("Elk jaar komt hij in een andere stad aan. Daarna komt hij ook in bijna elke stad en elk dorp, op zijn paard, door de straten.", "Every year he arrives in a different town. After that he also comes to almost every town and village, on his horse, through the streets."),
      ],
      [
        s("In Amersfoort kwam hij op een zaterdag. De hele familie De Boer stond op het plein. Julia had een tekening gemaakt van het paard, en ze mocht hem aan Sinterklaas zelf geven.", "In Amersfoort he came on a Saturday. The whole De Boer family stood in the square. Julia had made a drawing of the horse, and she was allowed to give it to Sinterklaas himself."),
        s("Ze was zo zenuwachtig dat ze bijna niets kon zeggen. Sinterklaas vroeg of ze altijd lief was voor haar broer. Julia keek naar Sem en zei heel zacht: meestal.", "She was so nervous she could hardly say anything. Sinterklaas asked if she was always nice to her brother. Julia looked at Sem and said very quietly: mostly."),
      ],
      [
        s("In de weken voor pakjesavond was er op school ook veel te doen. De kinderen zongen liedjes, maakten tekeningen en zetten hun schoen in de klas. Een keer stonden er twee helpers op het schoolplein, die pepernoten gooiden.", "In the weeks before pakjesavond there was a lot going on at school too. The children sang songs, made drawings and put their shoes out in the classroom. Once two helpers stood in the playground, throwing pepernoten."),
        s("Sem is negen, en hij begint te twijfelen. Hoe kan één oude man in één avond bij alle kinderen van Nederland komen? Hij vraagt het aan zijn vader. Zijn vader zegt alleen: wat denk jij?", "Sem is nine, and he's starting to have doubts. How can one old man visit all the children in the Netherlands in one evening? He asks his father. His father just says: what do you think?"),
      ],
      [
        s("Na pakjesavond, op 6 december, is het feest voorbij. In de winkels liggen de chocoladeletters meteen in de aanbieding, en de kerstbomen komen ervoor in de plaats.", "After pakjesavond, on 6 December, the party's over. In the shops the chocolate letters go on sale straight away, and the Christmas trees take their place."),
        s("Op een avond in januari zegt Sem tegen zijn moeder: ik weet het. Jullie zijn het. Zijn moeder glimlacht. Sem zegt: maar ik vertel het niet aan Julia. Volgend jaar help ik jullie. Dan ben ik zelf een beetje Sinterklaas.", "One evening in January Sem says to his mother: I know. It's you. His mother smiles. Sem says: but I won't tell Julia. Next year I'll help you. Then I'll be a bit of Sinterklaas myself."),
      ],
    ],
    tasks: [
      mc("Where does Sinterklaas come from, according to the story?", ["Spain", "Lapland", "Germany"], 0),
      tf("De kinderen leggen een wortel voor het paard in hun schoen.", "The children put a carrot for the horse in their shoe.", true),
      mc("What is a surprise?", ["A present in a funny wrapping with a poem", "A chocolate letter", "A song"], 0),
      tf("Vader kreeg een echte fiets.", "Dad got a real bike.", false),
      mc("What does Sem decide at the end?", ["To keep the secret and help next year", "To tell Julia", "To write to Sinterklaas"], 0),
      tf("Julia mocht haar tekening aan Sinterklaas geven.", "Julia was allowed to give her drawing to Sinterklaas.", true),
    ],
  },
  {
    id: "lib-a2-verhuizen",
    // Here only: in the lexicon, keek trips the writing checker's verb rules.
    words: { keek: { meaning: "looked", base: "kijken" } },
    level: "A2",
    topic: "Home",
    title: "Verhuizen",
    titleTranslation: "Moving house",
    grammar: [],
    paragraphs: [
      [
        s("Kim en haar vriend Joost woonden vier jaar in een klein appartement in het centrum van Den Haag. Het was gezellig, maar te klein: één slaapkamer, een kleine keuken en geen balkon.", "Kim and her boyfriend Joost lived for four years in a small flat in the centre of The Hague. It was cosy, but too small: one bedroom, a small kitchen and no balcony."),
        s("Toen Kim zwanger werd, wisten ze het meteen: ze hadden een groter huis nodig.", "When Kim got pregnant, they knew straight away: they needed a bigger home."),
      ],
      [
        s("Een huis zoeken in Nederland is niet makkelijk. Er zijn weinig huizen en ze zijn duur. Elke avond keken ze op internet. Ze gingen naar wel twintig huizen kijken.", "Looking for a house in the Netherlands isn't easy. There are few houses and they're expensive. Every evening they looked online. They went to see about twenty houses."),
        s("Sommige huizen waren te duur, andere waren te ver van het werk of heel oud. Bij één huis stonden er wel vijftig mensen voor de deur!", "Some houses were too expensive, others were too far from work or very old. At one house there were about fifty people at the door!"),
      ],
      [
        s("Na vijf maanden vonden ze een rijtjeshuis in Delft, vlak bij het station. Het huis heeft drie slaapkamers, een tuin en een schuur voor de fietsen. Het is niet nieuw, maar wel licht en rustig.", "After five months they found a terraced house in Delft, close to the station. The house has three bedrooms, a garden and a shed for the bikes. It's not new, but it is light and quiet."),
        s("Ze tekenden het contract en kregen de sleutel op een vrijdag in maart.", "They signed the contract and got the key on a Friday in March."),
      ],
      [
        s("Eerst moesten ze veel doen. Joost schilderde de muren wit en zijn vader legde een nieuwe vloer in de woonkamer. Kim zocht lampen en gordijnen, want ze mocht niet zwaar tillen.", "First they had a lot to do. Joost painted the walls white and his father laid a new floor in the living room. Kim looked for lamps and curtains, because she wasn't allowed to lift heavy things."),
        s("Op de dag van de verhuizing kwamen zes vrienden helpen. Ze huurden een busje en reden drie keer heen en weer. De bank paste bijna niet door de deur, en de trap was smal. Maar om vier uur stond alles binnen.", "On moving day six friends came to help. They hired a van and drove back and forth three times. The sofa almost didn't fit through the door, and the stairs were narrow. But by four o'clock everything was inside."),
      ],
      [
        s("'s Avonds bestelden ze pizza voor iedereen. Ze zaten op de grond tussen de dozen, want de stoelen waren nog niet uitgepakt.", "In the evening they ordered pizza for everyone. They sat on the floor among the boxes, because the chairs hadn't been unpacked yet."),
        s("De volgende dag stond er een buurvrouw voor de deur met een plant en een kaartje: welkom in de straat! Kim was blij. Het huis was nog niet af, maar het voelde al als thuis.", "The next day a neighbour was at the door with a plant and a card: welcome to the street! Kim was happy. The house wasn't finished yet, but it already felt like home."),
      ],
      [
        s("Twee maanden later werd hun dochter geboren. Ze noemden haar Eva. De kleine kamer naast hun slaapkamer werd haar kamer, met gele muren en een kast vol knuffels van de familie.", "Two months later their daughter was born. They called her Eva. The small room next to their bedroom became her room, with yellow walls and a cupboard full of cuddly toys from the family."),
        s("Kim denkt soms nog aan het appartement in Den Haag, aan de cafés om de hoek en het lawaai van de stad. Maar als ze 's avonds in de tuin zit en alleen de vogels hoort, weet ze: dit was de goede keuze.", "Kim sometimes still thinks of the flat in The Hague, the cafés round the corner and the noise of the city. But when she sits in the garden in the evening and only hears the birds, she knows: this was the right choice."),
      ],
      [
        s("Verhuizen in Nederland betekent ook veel papieren. Kim en Joost moesten zich binnen vijf dagen inschrijven bij de nieuwe gemeente. Dat kon online, met hun DigiD.", "Moving in the Netherlands also means a lot of paperwork. Kim and Joost had to register with the new municipality within five days. They could do that online, with their DigiD."),
        s("Ze moesten ook een nieuw energiecontract regelen, internet aanvragen en hun adres veranderen bij de bank, de zorgverzekering en hun werk. Joost maakte een lijst met wel dertig punten.", "They also had to arrange a new energy contract, apply for internet and change their address at the bank, the health insurance and work. Joost made a list with about thirty points."),
      ],
      [
        s("Het internet werkte de eerste twee weken niet. Joost moest thuiswerken, dus hij ging elke dag met zijn laptop naar de bibliotheek in het centrum van Delft. Daar was het rustig en de koffie was gratis.", "The internet didn't work for the first two weeks. Joost had to work from home, so every day he went to the library in the centre of Delft with his laptop. It was quiet there and the coffee was free."),
        s("Kim vond het leuk om de nieuwe stad te ontdekken. Ze wandelde langs de grachten, keek naar de Nieuwe Kerk op de Markt en kocht verse bloemen op de markt op donderdag.", "Kim enjoyed discovering the new town. She walked along the canals, looked at the Nieuwe Kerk on the Markt and bought fresh flowers at the Thursday market."),
      ],
      [
        s("In de straat leerden ze snel de buren kennen. Naast hen woont een oud echtpaar, Wim en Truus, al veertig jaar. Wim weet alles van de straat: wie er woont, wie er verhuist en wanneer de vuilniswagen komt.", "They quickly got to know the neighbours in the street. Next door lives an old couple, Wim and Truus, who have been there for forty years. Wim knows everything about the street: who lives there, who's moving and when the bin lorry comes."),
        s("Aan de andere kant woont een jong gezin met een baby van een jaar. De moeder, Priya, gaf Kim veel tips: over de verloskundige, het consultatiebureau en de beste kinderopvang in de buurt.", "On the other side lives a young family with a one-year-old baby. The mother, Priya, gave Kim lots of tips: about the midwife, the baby clinic and the best childcare nearby."),
      ],
      [
        s("In de zomer organiseerde de straat een buurtfeest. Iedereen zette tafels op straat en nam iets te eten mee. Kim maakte een grote quiche, Wim bakte vlees op de barbecue en Priya maakte samosa's.", "In the summer the street held a street party. Everyone put tables out in the street and brought something to eat. Kim made a big quiche, Wim grilled meat on the barbecue and Priya made samosas."),
        s("Eva lag in haar kinderwagen en sliep door alle muziek heen. Joost zei die avond: in Den Haag kenden we na vier jaar onze buren niet. Hier kennen we na vier maanden de hele straat.", "Eva lay in her pram and slept through all the music. Joost said that evening: in The Hague we didn't know our neighbours after four years. Here we know the whole street after four months."),
      ],
    ],
    tasks: [
      mc("Why did Kim and Joost need a bigger home?", ["Kim was pregnant", "Joost got a new job", "The flat was sold"], 0),
      tf("Ze vonden het nieuwe huis na een week.", "They found the new house after a week.", false),
      mc("Why didn't Kim lift heavy things?", ["She was pregnant", "She was ill", "She was at work"], 0),
      tf("Een buurvrouw bracht een plant en een kaartje.", "A neighbour brought a plant and a card.", true),
      mc("Why did Joost work in the library?", ["The internet at home didn't work yet", "The library is closer to his office", "He likes books"], 0),
      tf("Na vier maanden kennen ze de hele straat.", "After four months they know the whole street.", true),
    ],
  },
];
