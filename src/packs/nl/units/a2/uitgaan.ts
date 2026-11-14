import type { Unit } from "@/core/content";
import { a2, gaps, heard, line, mc, order, p, pairs, s, tf } from "./helpers";

/** A2 unit 8: going out, art and culture. Superlatives; whose is it, with van. */
export const uitgaan: Unit = {
  id: "a2-uitgaan",
  level: "A2",
  title: "Uit en cultuur",
  titleTranslation: "Going out and culture",
  look: { motif: "tulip", glaze: "manganese" },
  canDo: [
    "Choose an outing and compare: the cheapest, the nicest, the best",
    "Buy tickets for a concert, a film or a museum",
    "Say whose something is: de jas van Tim, die van mij",
    "Write a short review and invite friends to come along",
  ],
  texts: [
    {
      id: "de-museumkaart",
      level: "A2",
      title: "De Museumkaart",
      titleTranslation: "The Museum Card",
      grammar: ["superlatives", "possessive-van", "comparatives"],
      paragraphs: [
        [
          s("Nederland heeft heel veel musea. Er zijn er meer dan vierhonderd, van grote kunstmusea tot een klein museum over kaas of klompen.", "The Netherlands has a great many museums. There are more than four hundred, from big art museums to a small museum about cheese or clogs."),
          s("Veel Nederlanders hebben daarom een Museumkaart. Met die kaart betaal je één keer per jaar, en daarna ga je zo vaak je wilt naar binnen.", "That's why many Dutch people have a Museum Card. With that card you pay once a year, and after that you go in as often as you like."),
        ],
        [
          s("Het bekendste museum is het Rijksmuseum in Amsterdam. Daar hangt het beroemdste schilderij van Nederland: De Nachtwacht van Rembrandt.", "The best-known museum is the Rijksmuseum in Amsterdam. That's where the most famous painting in the Netherlands hangs: The Night Watch by Rembrandt."),
          s("Het is ook een van de grootste schilderijen in het museum: bijna vier meter hoog en meer dan vier meter breed.", "It's also one of the biggest paintings in the museum: almost four metres high and more than four metres wide."),
        ],
        [
          s("Vlak bij het Rijksmuseum staat het Van Gogh Museum. Het heeft de grootste collectie werk van Vincent van Gogh ter wereld.", "Close to the Rijksmuseum is the Van Gogh Museum. It has the largest collection of Vincent van Gogh's work in the world."),
          s("In Den Haag kun je in het Mauritshuis het Meisje met de parel van Vermeer zien. Veel bezoekers zijn verbaasd hoe klein het is.", "In The Hague you can see Vermeer's Girl with a Pearl Earring in the Mauritshuis. Many visitors are surprised how small it is."),
        ],
        [
          s("Een tip: ga niet op zaterdagmiddag, want dan is het het drukst. Op een doordeweekse ochtend heb je de schilderijen bijna voor jezelf.", "A tip: don't go on a Saturday afternoon, because that's when it's busiest. On a weekday morning you have the paintings almost to yourself."),
          s("En kijk ook eens in de kleinere musea. Daar vind je vaak de leukste verrassingen.", "And have a look in the smaller museums too. That's often where you find the nicest surprises."),
        ],
      ],
      tasks: [
        mc("How does the Museum Card work?", ["You pay once a year and go in as often as you like", "You get one free visit", "It's only for the Rijksmuseum"], 0),
        pairs("Match the painting and the museum.", "De Nachtwacht=het Rijksmuseum | Meisje met de parel=het Mauritshuis | werk van Van Gogh=het Van Gogh Museum", true, true),
        tf("Het Meisje met de parel is een heel groot schilderij.", "The Girl with a Pearl Earring is a very big painting.", false),
        mc("When is it busiest?", ["Saturday afternoon", "Weekday mornings", "Monday evenings"], 0),
        pairs("Match.", "bekend → het bekendst=well-known → best-known | groot → het grootst=big → biggest | druk → het drukst=busy → busiest | leuk → het leukst=nice → nicest", true),
      ],
    },
    {
      id: "vincent-en-zijn-schoonzus",
      level: "A2",
      title: "Vincent en zijn schoonzus",
      titleTranslation: "Vincent and his sister-in-law",
      grammar: ["possessive-van", "imperfect-irregular", "imperfect-regular"],
      paragraphs: [
        [
          s("Vincent van Gogh werd in 1853 geboren in Zundert, een dorp in Brabant. Hij was de zoon van een dominee.", "Vincent van Gogh was born in 1853 in Zundert, a village in Brabant. He was the son of a minister."),
          s("Hij probeerde eerst veel andere banen: hij werkte in een kunsthandel, als leraar en als prediker. Pas toen hij 27 was, begon hij te schilderen.", "He first tried lots of other jobs: he worked at an art dealer's, as a teacher and as a preacher. Only when he was 27 did he start painting."),
        ],
        [
          s("Hij schilderde maar tien jaar, maar in die tijd maakte hij meer dan achthonderd schilderijen.", "He painted for only ten years, but in that time he made more than eight hundred paintings."),
          s("Toch verkocht hij bijna niets. Hij had weinig geld, en zijn broer Theo betaalde vaak zijn huur en zijn verf.", "Yet he sold almost nothing. He had little money, and his brother Theo often paid his rent and his paint."),
          s("Vincent en Theo schreven elkaar honderden brieven. In de brieven van Vincent lees je hoe hij over kleur en licht dacht.", "Vincent and Theo wrote each other hundreds of letters. In Vincent's letters you can read how he thought about colour and light."),
        ],
        [
          s("Vincent stierf in 1890, en Theo een half jaar later. Het werk van Vincent was toen bijna onbekend.", "Vincent died in 1890, and Theo half a year later. Vincent's work was almost unknown then."),
          s("Toen kwam de vrouw van Theo, Jo van Gogh-Bonger. Zij had de schilderijen en de brieven, en ze besloot de wereld over Vincent te vertellen.", "Then came Theo's wife, Jo van Gogh-Bonger. She had the paintings and the letters, and she decided to tell the world about Vincent."),
        ],
        [
          s("Ze organiseerde tentoonstellingen, ze vertaalde de brieven en ze verkocht schilderijen aan musea.", "She organised exhibitions, she translated the letters and she sold paintings to museums."),
          s("Dankzij Jo is Van Gogh nu een van de bekendste schilders van de wereld. Haar naam kennen veel minder mensen. Maar zonder haar zou niemand de zonnebloemen van Vincent kennen.", "Thanks to Jo, Van Gogh is now one of the best-known painters in the world. Far fewer people know her name. But without her, nobody would know Vincent's sunflowers."),
        ],
      ],
      tasks: [
        order("Put Vincent's story in order.", "He is born in Zundert", "He works at an art dealer's", "He starts painting at 27", "He dies in 1890", "Jo organises exhibitions"),
        tf("Vincent verkocht veel schilderijen.", "Vincent sold a lot of paintings.", false),
        mc("Who was Jo van Gogh-Bonger?", ["Theo's wife", "Vincent's mother", "A painter from Paris"], 0),
        mc("How did Jo make Vincent famous?", ["Exhibitions, translating the letters and selling to museums", "She painted copies", "She wrote a film"], 0),
        pairs("Match.", "de broer van Vincent=Theo | de vrouw van Theo=Jo | de vader van Vincent=a minister", true),
      ],
    },
    {
      id: "wat-doen-we-dit-weekend",
      level: "A2",
      title: "Wat doen we dit weekend?",
      titleTranslation: "What shall we do this weekend?",
      grammar: ["superlatives", "comparatives", "time-numbers"],
      paragraphs: [
        [
          s("Dit is de uitagenda van Rotterdam voor het weekend. Er is van alles te doen, voor elk budget.", "This is Rotterdam's what's-on guide for the weekend. There's all sorts to do, for every budget."),
        ],
        [
          s("Vrijdag: Jazz op het dak. Een concert op het dak van een oud kantoorgebouw, met het mooiste uitzicht over de stad. Kaartjes kosten 25 euro.", "Friday: Jazz on the roof. A concert on the roof of an old office building, with the most beautiful view over the city. Tickets cost 25 euros."),
          s("Zaterdag: Markt in de Markthal. De grootste overdekte markt van Nederland, met eten uit de hele wereld. De toegang is gratis, maar je gaat zelden zonder tas vol lekkers naar huis.", "Saturday: Market in the Markthal. The biggest covered market in the Netherlands, with food from all over the world. Entry is free, but you rarely go home without a bag full of treats."),
        ],
        [
          s("Zaterdagavond: Filmnacht. Drie films achter elkaar, van tien uur 's avonds tot vijf uur 's ochtends. Voor de echte filmliefhebber! Een kaartje kost 18 euro, met ontbijt.", "Saturday evening: Film night. Three films in a row, from ten in the evening till five in the morning. For the real film lover! A ticket costs 18 euros, with breakfast."),
          s("Zondag: Wandeling door de haven. Een gids vertelt over de geschiedenis van de grootste haven van Europa. De wandeling duurt twee uur en kost 12 euro.", "Sunday: Walk through the port. A guide tells you about the history of the biggest port in Europe. The walk takes two hours and costs 12 euros."),
        ],
        [
          s("Kun je niet kiezen? Het goedkoopste uitje is de markt. Het spannendste is de filmnacht, als je tenminste wakker blijft.", "Can't choose? The cheapest outing is the market. The most exciting is the film night, if you manage to stay awake, that is."),
          s("En het meest romantische? Dat is natuurlijk het concert op het dak, als het tenminste niet regent.", "And the most romantic? That's the concert on the roof, of course, as long as it doesn't rain."),
        ],
      ],
      tasks: [
        mc("Which outing is free?", ["The market in the Markthal", "The film night", "The walk through the port"], 0),
        pairs("Match.", "Jazz op het dak=het mooiste uitzicht | de Markthal=de grootste overdekte markt | de filmnacht=het spannendste uitje | de havenwandeling=de grootste haven van Europa", true, true),
        tf("De filmnacht duurt tot vijf uur 's ochtends.", "The film night lasts until five in the morning.", true),
        mc("Which is the most expensive?", ["Jazz on the roof", "Film night", "The port walk"], 0),
        tf("De wandeling door de haven duurt vier uur.", "The walk through the port takes four hours.", false),
      ],
    },
    {
      id: "oranjekoorts",
      level: "A2",
      title: "Oranjekoorts",
      titleTranslation: "Orange fever",
      grammar: ["possessive-van", "als-wanneer-toen", "superlatives"],
      paragraphs: [
        [
          s("Als het Nederlands elftal een groot toernooi speelt, verandert het land. Straten hangen vol oranje vlaggen, en in de supermarkt koop je oranje hoedjes en oranje tompouces.", "When the Dutch national team plays a big tournament, the country changes. Streets are full of orange flags, and in the supermarket you can buy orange hats and orange tompouces."),
          s("Nederlanders noemen dat Oranjekoorts.", "The Dutch call that Orange fever."),
        ],
        [
          s("Maar waarom oranje? De vlag van Nederland is toch rood, wit en blauw?", "But why orange? The flag of the Netherlands is red, white and blue, isn't it?"),
          s("Het antwoord ligt in de geschiedenis. In de zestiende eeuw leidde Willem van Oranje de opstand tegen de koning van Spanje.", "The answer lies in history. In the sixteenth century William of Orange led the revolt against the king of Spain."),
          s("De familie van Willem heet nog steeds het Huis van Oranje. Koning Willem-Alexander komt ook uit die familie.", "William's family is still called the House of Orange. King Willem-Alexander also comes from that family."),
        ],
        [
          s("Oranje is dus de kleur van de koninklijke familie, en daarmee de kleur van het hele land.", "So orange is the colour of the royal family, and therefore the colour of the whole country."),
          s("Je ziet het niet alleen bij voetbal. Ook op Koningsdag draagt bijna iedereen iets oranjes, en de schaatsers dragen het op de Olympische Spelen.", "You don't only see it at football. On King's Day too almost everyone wears something orange, and the skaters wear it at the Olympic Games."),
        ],
        [
          s("Toen Nederland in 1988 het Europees kampioenschap won, stonden er in Amsterdam honderdduizenden mensen op straat.", "When the Netherlands won the European Championship in 1988, hundreds of thousands of people stood in the streets of Amsterdam."),
          s("Voor veel oudere Nederlanders is dat nog steeds de mooiste voetbalherinnering. Een wereldkampioenschap heeft het Nederlandse mannenteam nooit gewonnen, maar ze stonden wel drie keer in de finale.", "For many older Dutch people that's still their best football memory. The Dutch men's team has never won a World Cup, but they did reach the final three times."),
        ],
      ],
      tasks: [
        mc("Why is orange the Dutch colour?", ["It's the colour of the royal family, the House of Orange", "It's in the Dutch flag", "Orange is the colour of tulips"], 0),
        tf("De vlag van Nederland is oranje.", "The flag of the Netherlands is orange.", false),
        mc("Who led the revolt against the king of Spain?", ["William of Orange", "Willem-Alexander", "Rembrandt"], 0),
        tf("Het Nederlandse mannenteam heeft nooit een wereldkampioenschap gewonnen.", "The Dutch men's team has never won a World Cup.", true),
        pairs("Match.", "elftal=(football) team | toernooi=tournament | opstand=revolt | finale=final", true),
      ],
    },
  ],
  listening: [
    {
      id: "kaartjes-voor-het-concert",
      level: "A2",
      title: "Kaartjes voor het concert",
      titleTranslation: "Tickets for the concert",
      kind: "dialogue",
      situation: "Isabel calls the box office of a concert hall in Utrecht.",
      grammar: ["superlatives", "questions", "time-numbers"],
      lines: [
        line("Kassa", "TivoliVredenburg, goedemiddag.", "TivoliVredenburg, good afternoon."),
        line("Isabel", "Goedemiddag. Zijn er nog kaartjes voor het concert van zaterdag?", "Good afternoon. Are there still tickets for Saturday's concert?"),
        line("Kassa", "Even kijken. Ja, er zijn nog een paar plaatsen. Hoeveel kaartjes wilt u?", "Let me see. Yes, there are still a few seats. How many tickets would you like?"),
        line("Isabel", "Twee, graag. Wat zijn de beste plaatsen die er nog zijn?", "Two, please. What are the best seats still available?"),
        line("Kassa", "Op het balkon, op de eerste rij. Die kosten 42 euro per stuk.", "On the balcony, in the front row. Those cost 42 euros each."),
        line("Isabel", "Hm, dat is best duur. Zijn er ook goedkopere?", "Hmm, that's quite expensive. Are there cheaper ones too?"),
        line("Kassa", "Achter in de zaal zijn ze 28 euro. Maar daar zie je het podium het slechtst.", "At the back of the hall they're 28 euros. But you see the stage worst from there."),
        line("Isabel", "Dan neem ik toch die op het balkon. Het is een cadeau voor mijn moeder.", "Then I'll take the ones on the balcony after all. It's a present for my mother."),
        line("Kassa", "Wat een mooi cadeau! U krijgt de kaartjes per mail. Wat is uw e-mailadres?", "What a lovely present! You'll get the tickets by email. What's your email address?"),
      ],
      gist: { prompt: "What does Isabel do?", options: ["She buys two concert tickets", "She cancels her tickets", "She asks about the parking"], answer: 0 },
      details: [
        { prompt: "Which seats does she choose?", options: ["On the balcony, front row", "At the back of the hall", "In the middle"], answer: 0 },
        { prompt: "Who is the present for?", options: ["Her mother", "Her sister", "Her friend"], answer: 0 },
      ],
      tasks: [
        heard(4, ["balkon", "podium", "zaal"], 0),
        tf("Isabel krijgt de kaartjes per post.", "Isabel gets the tickets by post.", false),
        gaps(3, "beste", "plaatsen"),
      ],
      dictation: [1, 7],
      words: {
        podium: { meaning: "stage", closer: "podium ~ podium" },
      },
    },
    {
      id: "de-audiotour",
      level: "A2",
      title: "De audiotour",
      titleTranslation: "The audio tour",
      kind: "monologue",
      situation: "The audio guide in front of The Night Watch in the Rijksmuseum.",
      grammar: ["possessive-van", "imperfect-irregular", "superlatives"],
      lines: [
        line("Gids", "U staat nu voor het bekendste schilderij van het museum: De Nachtwacht.", "You are now standing in front of the best-known painting in the museum: The Night Watch."),
        line("Gids", "Rembrandt schilderde het in 1642. Het is een groep schutters: mannen die vroeger de stad beschermden.", "Rembrandt painted it in 1642. It's a group of civic guards: men who used to protect the city."),
        line("Gids", "In het midden ziet u de kapitein, in het zwart, met een rode sjerp. Naast hem loopt zijn luitenant, in het geel.", "In the middle you can see the captain, in black, with a red sash. Next to him walks his lieutenant, in yellow."),
        line("Gids", "Een verrassing: het is helemaal geen nachtscène. Het schilderij werd in de loop van de tijd donkerder, en daarom dachten mensen later dat het nacht was.", "A surprise: it's not a night scene at all. The painting got darker over time, and that's why people later thought it was night."),
        line("Gids", "Kijk ook naar het meisje in het licht, links van het midden. Aan haar riem hangt een kip. Dat was het teken van de schutters.", "Also look at the girl in the light, left of centre. A chicken hangs from her belt. That was the sign of the civic guards."),
        line("Gids", "In 1715 werd het schilderij kleiner gemaakt, om het in een zaal van het stadhuis te laten passen. Aan de linkerkant is een stuk weggesneden.", "In 1715 the painting was made smaller, to make it fit in a hall of the town hall. On the left side a piece was cut away."),
      ],
      gist: { prompt: "What is the audio guide about?", options: ["The Night Watch by Rembrandt", "Van Gogh's sunflowers", "The history of the museum"], answer: 0 },
      details: [
        { prompt: "Why do people call it The Night Watch?", options: ["The painting got darker over time", "Rembrandt painted it at night", "It shows a night patrol"], answer: 0 },
        { prompt: "What hangs from the girl's belt?", options: ["A chicken", "A key", "A bag"], answer: 0 },
      ],
      tasks: [
        heard(2, ["kapitein", "koning", "koopman"], 0),
        tf("De Nachtwacht is een nachtscène.", "The Night Watch is a night scene.", false),
        gaps(1, "schilderde", "1642"),
      ],
      dictation: [0, 1],
      words: {
        schutters: { meaning: "civic guards (militia)", local: "Groups of citizens who guarded the city; rich ones paid to be painted" },
        sjerp: { meaning: "sash", closer: "sjerp ~ sash, scarf" },
        luitenant: { meaning: "lieutenant" },
      },
    },
    {
      id: "wat-zullen-we-zaterdag-doen",
      level: "A2",
      title: "Wat zullen we zaterdag doen?",
      titleTranslation: "What shall we do on Saturday?",
      kind: "dialogue",
      situation: "Tim and his boyfriend Kofi are planning their Saturday.",
      grammar: ["superlatives", "zullen-future", "comparatives"],
      lines: [
        line("Tim", "Wat zullen we zaterdag doen? Ik heb zin in iets leuks.", "What shall we do on Saturday? I feel like doing something fun."),
        line("Kofi", "Zullen we naar de bioscoop gaan? Die nieuwe film schijnt de beste van het jaar te zijn.", "Shall we go to the cinema? That new film is supposed to be the best of the year."),
        line("Tim", "Hm, we zitten de hele week al binnen. Ik wil liever naar buiten.", "Hmm, we've been inside all week. I'd rather go outside."),
        line("Kofi", "Oké. Dan gaan we fietsen naar het strand? Het wordt zaterdag de warmste dag van de week.", "OK. Then shall we cycle to the beach? Saturday is going to be the warmest day of the week."),
        line("Tim", "Goed idee! Maar dan moeten we vroeg vertrekken, anders is het er al te druk.", "Good idea! But then we have to leave early, otherwise it'll already be too busy there."),
        line("Kofi", "Om negen uur? En 's avonds eten we patat op de boulevard.", "At nine? And in the evening we'll eat chips on the promenade."),
        line("Tim", "Perfect. De film zien we dan zondag wel, als het regent.", "Perfect. We'll see the film on Sunday then, if it rains."),
      ],
      gist: { prompt: "What do they decide?", options: ["To cycle to the beach on Saturday", "To go to the cinema on Saturday", "To stay at home"], answer: 0 },
      details: [
        { prompt: "Why does Tim want to go outside?", options: ["They've been inside all week", "The film is bad", "He's sick of the beach"], answer: 0 },
        { prompt: "When will they see the film?", options: ["On Sunday if it rains", "Next week", "Saturday evening"], answer: 0 },
      ],
      tasks: [
        heard(3, ["warmste", "mooiste", "drukste"], 0),
        tf("Ze vertrekken om negen uur.", "They're leaving at nine.", true),
        gaps(0, "zullen", "zaterdag"),
      ],
      dictation: [0, 6],
      words: {
        boulevard: { meaning: "seafront promenade", local: "The boulevard: the street along the beach in Dutch seaside towns" },
        schijnt: { meaning: "is said to, apparently", base: "schijnen", local: "Het schijnt dat… = Apparently…; also: de zon schijnt" },
      },
    },
    {
      id: "van-wie-is-deze-jas",
      level: "A2",
      title: "Van wie is deze jas?",
      titleTranslation: "Whose coat is this?",
      kind: "dialogue",
      situation: "After a party at Nina's house, a few things are left behind. Nina and her friend Lucas tidy up.",
      grammar: ["possessive-van", "demonstratives", "object-pronouns"],
      lines: [
        line("Nina", "Kijk eens wat er allemaal is blijven liggen! Van wie is deze blauwe jas?", "Look at everything that's been left behind! Whose is this blue coat?"),
        line("Lucas", "Die is van Mohammed, denk ik. Hij had een blauwe jas aan.", "That's Mohammed's, I think. He was wearing a blue coat."),
        line("Nina", "En deze sjaal? Is die van jou?", "And this scarf? Is it yours?"),
        line("Lucas", "Nee, die van mij is groen. Volgens mij is hij van de zus van Sanne.", "No, mine is green. I think it belongs to Sanne's sister."),
        line("Nina", "En hier ligt een telefoon onder de bank. Die van mij is het niet.", "And here's a phone under the sofa. It's not mine."),
        line("Lucas", "O! Dat is de telefoon van Bas. Hij zocht hem gisteren overal.", "Oh! That's Bas's phone. He was looking for it everywhere yesterday."),
        line("Nina", "Ik stuur een berichtje in de groepsapp. Dan kunnen ze hun spullen morgen komen ophalen.", "I'll send a message in the group chat. Then they can come and collect their things tomorrow."),
        line("Lucas", "Goed plan. Maar Bas kun je beter bellen. Zijn telefoon ligt hier!", "Good plan. But you'd better call Bas. His phone is here!"),
      ],
      gist: { prompt: "What are Nina and Lucas doing?", options: ["Working out whose things were left behind", "Getting ready for a party", "Buying a new coat"], answer: 0 },
      details: [
        { prompt: "Whose is the blue coat?", options: ["Mohammed's", "Lucas's", "Bas's"], answer: 0 },
        { prompt: "What colour is Lucas's scarf?", options: ["Blue", "Green", "Red"], answer: 1 },
      ],
      tasks: [
        heard(4, ["telefoon", "tas", "trui"], 0),
        tf("De sjaal is van Lucas.", "The scarf is Lucas's.", false),
        gaps(3, "die", "mij"),
      ],
      dictation: [0, 7],
      words: {
        groepsapp: { meaning: "group chat", closer: "groep (group) + app" },
      },
    },
  ],
  writing: [
    a2({
      id: "w-een-recensie",
      title: "Een recensie",
      titleTranslation: "A review",
      form: "opinion",
      situation: "You went to a museum, a concert, a film or a festival. Write a short review for a website.",
      points: [
        p("Say what you went to, where and with whom", "ging", "gingen", "naar", "met", "museum", "concert", "film", "festival"),
        p("Describe what it was like", "was", "zag", "zagen", "hoorde", "hoorden"),
        p("Say what was the best part, with a superlative", "mooiste", "beste", "leukste", "grappigste", "spannendste", "interessantste"),
        p("Say what was less good", "minder", "jammer", "helaas", "niet"),
        p("Give practical tips: price, time, getting there", "kost", "euro", "kaartje", "tip", "vroeg", "trein", "fiets"),
        p("Give a score or a recommendation, with omdat or want", "omdat", "want", "aanraden", "sterren", "punten"),
      ],
      model:
        "Vorige week ging ik met mijn zus naar het Van Gogh Museum in Amsterdam. Ik had het museum nog nooit gezien, en ik was heel benieuwd. Het museum was groter dan ik dacht. We zagen schilderijen uit alle jaren van Van Gogh, van de donkere boeren in Brabant tot de felle kleuren in Frankrijk. Het mooiste vond ik de zonnebloemen. In het echt zijn de kleuren nog veel sterker dan op een foto. Ook de brieven van Vincent aan zijn broer waren erg interessant. Wat minder was: het was erg druk, en bij de bekendste schilderijen kon je bijna niets zien. Een tip: koop je kaartje online, want het museum is vaak uitverkocht. Een kaartje kost ongeveer 25 euro. Ga zo vroeg mogelijk, om negen uur. Ik geef het museum vier sterren, omdat het prachtig is, maar te druk.",
    }),
    a2({
      id: "w-samen-op-stap",
      title: "Een uitnodiging",
      titleTranslation: "An invitation",
      form: "message",
      situation: "You want to organise an outing with friends or colleagues. Write a message to invite them.",
      points: [
        p("Greet your friends", "hoi", "hallo", "lieve", "beste", "allemaal"),
        p("Say what you want to do and why it's a good idea", "wil", "zin", "idee", "leuk"),
        p("Say when and where you'll meet", "zaterdag", "zondag", "vrijdag", "uur", "bij", "station", "ontmoeten", "afspreken"),
        p("Compare the options, with a superlative", "goedkoopste", "beste", "leukste", "mooiste", "makkelijkste"),
        p("Say what people need to bring or pay", "meenemen", "neem", "kost", "betalen", "euro"),
        p("Ask people to let you know, and close", "laat", "weten", "voor", "groetjes", "liefs"),
      ],
      model:
        "Hoi allemaal! Het is alweer drie maanden geleden dat we met z'n allen iets hebben gedaan. Daarom heb ik een idee: zullen we op zaterdag 12 oktober samen naar de Markthal in Rotterdam gaan? Daar kun je eten uit de hele wereld proeven, en het is ook nog gezellig. Ik heb ook andere opties bekeken. Een rondvaart was leuk, maar het goedkoopste is de markt, want de toegang is gratis. En als het regent, zitten we lekker binnen. We kunnen om twaalf uur afspreken bij de ingang aan de kant van het station. Neem genoeg geld mee voor eten, ik denk ongeveer twintig euro per persoon. 's Avonds kunnen we nog iets drinken in een café aan de haven. Laat je me voor woensdag weten of je meegaat? Dan kan ik een tafel reserveren. Groetjes, Lina",
    }),
    a2({
      id: "w-mijn-favoriete-plek",
      title: "Mijn favoriete plek",
      titleTranslation: "My favourite place",
      form: "description",
      situation: "Describe your favourite place in your town or city, for a website for newcomers.",
      points: [
        p("Say which place it is and where it is", "plek", "ligt", "staat", "in", "bij", "naast"),
        p("Describe what it looks like", "groot", "klein", "oud", "nieuw", "mooi", "groen"),
        p("Say why it's the best, with a superlative", "mooiste", "beste", "leukste", "fijnste", "rustigste", "gezelligste"),
        p("Say what you do there", "ga", "lees", "zit", "drink", "wandel", "kijk"),
        p("Say who you go there with, using van", "van", "vriend", "vriendin", "familie", "zus", "broer"),
        p("Give a tip for visitors", "tip", "moet", "zeker", "kom", "probeer"),
      ],
      model:
        "Mijn favoriete plek in Utrecht is een klein café aan de Oudegracht. Het ligt beneden, vlak bij het water, in een oude kelder van wel zevenhonderd jaar oud. Binnen zijn de muren dik en de lampen warm, en buiten staan een paar tafeltjes direct aan de gracht. Voor mij is het de fijnste plek van de stad, omdat het er zo rustig is, terwijl de straat erboven altijd druk is. Op zondagochtend zit ik er vaak met een boek en een kop koffie. Ik kijk dan naar de bootjes en naar de mensen op de fiets. Soms ga ik er met de broer van mijn vriendin heen, want hij woont om de hoek. Hij bestelt altijd de appeltaart, en die is echt de beste van Utrecht. Mijn tip: kom op een doordeweekse ochtend, en neem zeker een stuk appeltaart.",
    }),
  ],
  speaking: {
    sounds: ["aa-a", "ij"],
    shadowing: [
      { text: "Zijn er nog kaartjes voor het concert van zaterdag?", translation: "Are there still tickets for Saturday's concert?" },
      { text: "Wat zullen we zaterdag doen?", translation: "What shall we do on Saturday?" },
      { text: "Nee, die van mij is groen.", translation: "No, mine is green." },
      { text: "Van wie is deze blauwe jas?", translation: "Whose is this blue coat?" },
    ],
  },
};
