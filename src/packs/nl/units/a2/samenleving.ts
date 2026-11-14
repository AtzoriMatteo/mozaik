import type { Unit } from "@/core/content";
import { a2, gaps, heard, line, mc, order, p, pairs, s, tf } from "./helpers";

/** A2 unit 7: taking part in Dutch society. om … te, separable verbs in the past. */
export const samenleving: Unit = {
  id: "a2-samenleving",
  level: "A2",
  title: "Meedoen",
  titleTranslation: "Taking part",
  look: { motif: "crown", glaze: "iron" },
  canDo: [
    "Arrange things at the town hall: registering, a BSN, an appointment",
    "Say why you do something, with om … te",
    "Offer to volunteer or join a club, and ask what it involves",
    "Understand how rubbish and recycling work in your street",
  ],
  texts: [
    {
      id: "vrijwilliger-bij-de-voedselbank",
      level: "A2",
      title: "Vrijwilliger bij de voedselbank",
      titleTranslation: "Volunteering at the food bank",
      grammar: ["om-te", "separable-past", "perfect-hebben"],
      paragraphs: [
        [
          s("Amal komt uit Syrië en woont sinds drie jaar in Tilburg. Ze heeft een cursus Nederlands gedaan, maar ze vond het moeilijk om de taal echt te spreken.", "Amal is from Syria and has lived in Tilburg for three years. She did a Dutch course, but she found it hard to really speak the language."),
          s("\"Op de cursus sprak ik alleen met andere cursisten,\" zegt ze. \"Ik wilde Nederlanders ontmoeten.\"", "\"On the course I only spoke with other students,\" she says. \"I wanted to meet Dutch people.\""),
        ],
        [
          s("Haar buurvrouw gaf haar een idee: word vrijwilliger. In Nederland doet bijna de helft van de mensen vrijwilligerswerk, bijvoorbeeld bij een sportclub, een school of in een verzorgingshuis.", "Her neighbour gave her an idea: become a volunteer. In the Netherlands almost half the people do voluntary work, for example at a sports club, a school or in a care home."),
          s("Amal belde de voedselbank op en vroeg of ze hulp nodig hadden. Een week later begon ze al.", "Amal phoned the food bank and asked whether they needed help. A week later she had already started."),
        ],
        [
          s("Elke woensdag pakt ze met een groep vrijwilligers pakketten in voor gezinnen die weinig geld hebben.", "Every Wednesday she packs parcels with a group of volunteers for families who have little money."),
          s("Ze ruimt de dozen op, zet koffie en praat met de mensen die hun pakket ophalen.", "She tidies up the boxes, makes coffee and talks with the people who come to collect their parcel."),
          s("\"Ik ga er niet alleen heen om te helpen,\" lacht ze. \"Ik ga er ook heen om Nederlands te praten. Mijn collega's verbeteren me altijd.\"", "\"I don't just go there to help,\" she laughs. \"I also go there to speak Dutch. My colleagues always correct me.\""),
        ],
        [
          s("Vorige maand nodigde een van haar collega's haar uit voor een verjaardag. Daar zat ze in een kring met twintig Nederlanders.", "Last month one of her colleagues invited her to a birthday party. There she sat in a circle with twenty Dutch people."),
          s("\"Ik heb de hele avond Nederlands gesproken,\" zegt ze trots. \"Drie jaar geleden was dat onmogelijk.\"", "\"I spoke Dutch all evening,\" she says proudly. \"Three years ago that was impossible.\""),
        ],
      ],
      tasks: [
        mc("Why did Amal want to volunteer?", ["To meet Dutch people and speak Dutch", "To earn money", "Because her course asked her to"], 0),
        tf("In Nederland doet bijna de helft van de mensen vrijwilligerswerk.", "In the Netherlands almost half the people do voluntary work.", true),
        order("Put Amal's story in order.", "She does a Dutch course", "Her neighbour gives her an idea", "She phones the food bank", "She packs parcels every Wednesday", "She goes to a birthday party"),
        pairs("Match the separable verbs.", "opbellen=to phone | opruimen=to tidy up | ophalen=to collect | uitnodigen=to invite", true),
        tf("Amals collega's verbeteren haar nooit.", "Amal's colleagues never correct her.", false),
      ],
    },
    {
      id: "naar-de-gemeente",
      level: "A2",
      title: "Naar de gemeente",
      titleTranslation: "To the town hall",
      grammar: ["om-te", "separable-past", "modal-verbs"],
      paragraphs: [
        [
          s("Als je in Nederland komt wonen, moet je eerst naar de gemeente. De gemeente is het bestuur van je stad of dorp, en het kantoor heet vaak het stadhuis of het gemeentehuis.", "When you come to live in the Netherlands, you first have to go to the gemeente. The gemeente is the council of your town or village, and the office is often called the town hall."),
          s("Daar schrijf je je in op je adres. Dat moet binnen vijf dagen nadat je bent verhuisd.", "There you register at your address. You have to do that within five days of moving."),
        ],
        [
          s("Om je in te schrijven, maak je eerst een afspraak, meestal online. Neem je paspoort mee, en je huurcontract of een brief van de persoon bij wie je woont.", "To register, you first make an appointment, usually online. Take your passport with you, and your rental contract or a letter from the person you're living with."),
          s("Na de inschrijving krijg je een BSN: een burgerservicenummer. Dat nummer heb je overal voor nodig.", "After registering you get a BSN: a citizen service number. You need that number for everything."),
          s("Je hebt het nodig om te werken, om een bankrekening te openen en om naar de huisarts te gaan.", "You need it to work, to open a bank account and to go to the GP."),
        ],
        [
          s("Daarna vraag je een DigiD aan. Dat is een soort digitale sleutel. Met je DigiD log je in op websites van de overheid, bijvoorbeeld om je belasting te betalen.", "After that you apply for a DigiD. That's a kind of digital key. With your DigiD you log in to government websites, for example to pay your tax."),
          s("Een tip: schrijf je BSN ergens op een veilige plek op. Geef het nooit zomaar aan iemand die je niet kent.", "A tip: write your BSN down somewhere safe. Never just give it to someone you don't know."),
        ],
        [
          s("De gemeente doet nog veel meer. Ze haalt het afval op, ze onderhoudt de parken en ze regelt je nieuwe paspoort.", "The council does a lot more. It collects the rubbish, it maintains the parks and it arranges your new passport."),
          s("En ben je getrouwd in Nederland? Dan is dat ook bij de gemeente gebeurd, vaak in een mooie zaal in het stadhuis.", "And did you get married in the Netherlands? Then that happened at the council too, often in a beautiful room in the town hall."),
        ],
      ],
      tasks: [
        mc("When do you have to register at your address?", ["Within five days of moving", "Within a year", "Only if you work"], 0),
        pairs("Match.", "BSN=your citizen service number | DigiD=a digital key for government websites | gemeente=the town council | huurcontract=rental contract", true),
        tf("Je hebt je BSN nodig om een bankrekening te openen.", "You need your BSN to open a bank account.", true),
        mc("What should you do with your BSN?", ["Keep it somewhere safe", "Put it on social media", "Give it to every shop"], 0),
        order("Put the steps in order.", "Make an appointment online", "Register at the town hall", "Get your BSN", "Apply for a DigiD"),
      ],
    },
    {
      id: "polderen",
      level: "A2",
      title: "Polderen",
      titleTranslation: "Polder-style compromise",
      grammar: ["om-te", "subordinate-order", "imperfect-irregular"],
      paragraphs: [
        [
          s("Een groot deel van Nederland ligt onder de zeespiegel. Dat land heet een polder: vroeger was het water, en nu is het droog land.", "A large part of the Netherlands lies below sea level. That land is called a polder: it used to be water, and now it's dry land."),
          s("Om een polder droog te houden, moet je steeds het water wegpompen. Vroeger deden molens dat werk.", "To keep a polder dry, you constantly have to pump the water away. In the past windmills did that work."),
        ],
        [
          s("Eeuwen geleden konden boeren dat niet alleen. Als één boer zijn dijk niet goed onderhield, kwam het water bij iedereen binnen.", "Centuries ago farmers couldn't do that alone. If one farmer didn't maintain his dyke properly, the water came in for everyone."),
          s("Dus moesten ze samenwerken, ook met buren die ze niet aardig vonden.", "So they had to work together, even with neighbours they didn't like."),
        ],
        [
          s("Veel mensen denken dat de Nederlanders daar iets van hebben geleerd. Ze noemen het polderen: praten tot iedereen een beetje tevreden is.", "Many people think the Dutch learned something from that. They call it polderen: talking until everyone is a bit satisfied."),
          s("Je ziet het overal. Op het werk is er veel overleg, en ook de baas vraagt wat jij ervan vindt.", "You see it everywhere. At work there's a lot of discussion, and even the boss asks what you think about it."),
          s("De regering bestaat altijd uit een paar partijen samen, omdat geen enkele partij genoeg stemmen heeft.", "The government always consists of a few parties together, because no single party has enough votes."),
        ],
        [
          s("Polderen heeft voordelen: iedereen mag meepraten, en grote ruzies zijn zeldzaam.", "Polderen has advantages: everyone gets a say, and big fights are rare."),
          s("Maar het duurt soms erg lang. Sommige nieuwkomers zijn verbaasd over de vele vergaderingen. \"Waarom vergaderen we drie keer om één ding te beslissen?\"", "But it sometimes takes a very long time. Some newcomers are surprised by all the meetings. \"Why do we meet three times to decide one thing?\""),
        ],
      ],
      tasks: [
        mc("What is a polder?", ["Land that used to be water", "A type of windmill", "A Dutch meeting"], 0),
        tf("Boeren konden een polder vroeger makkelijk alleen droog houden.", "In the past, farmers could easily keep a polder dry on their own.", false),
        mc("What does 'polderen' mean?", ["Talking until everyone is a bit satisfied", "Pumping water away", "Voting for one big party"], 0),
        pairs("Match.", "dijk=dyke | overleg=discussion, consultation | vergadering=meeting | partij=political party", true),
        mc("What is a disadvantage of polderen?", ["It sometimes takes very long", "Nobody gets a say", "There are many big fights"], 0),
      ],
    },
    {
      id: "afval-scheiden",
      level: "A2",
      title: "Afval scheiden",
      titleTranslation: "Sorting your rubbish",
      grammar: ["separable-verbs", "om-te", "imperative"],
      paragraphs: [
        [
          s("In Nederland gooi je niet al je afval in één bak. Je scheidt het: papier, glas, plastic, gft en restafval.", "In the Netherlands you don't throw all your rubbish in one bin. You sort it: paper, glass, plastic, organic waste and other waste."),
          s("Dat doen we om grondstoffen opnieuw te gebruiken. Van oud papier maken fabrieken bijvoorbeeld weer nieuwe dozen.", "We do that to reuse raw materials. From old paper, for example, factories make new boxes again."),
        ],
        [
          s("Gft betekent groente-, fruit- en tuinafval. Schillen, koffiedik en bladeren gaan in de groene bak. Daar maken ze compost van.", "Gft means vegetable, fruit and garden waste. Peel, coffee grounds and leaves go in the green bin. They make compost from it."),
          s("Glas breng je naar de glasbak in de straat. Let op: wit, groen en bruin glas gaan soms in aparte gaten.", "You take glass to the bottle bank in the street. Watch out: clear, green and brown glass sometimes go into separate holes."),
          s("Lege flessen en blikjes kun je terugbrengen naar de supermarkt. Je krijgt dan je statiegeld terug.", "Empty bottles and cans you can take back to the supermarket. You then get your deposit back."),
        ],
        [
          s("Elke gemeente heeft andere regels. Op de afvalkalender of in de app van je gemeente zie je wanneer welke bak wordt opgehaald.", "Every council has different rules. On the rubbish calendar or in your council's app you can see when each bin is collected."),
          s("Zet de bak de avond ervoor buiten, of vroeg in de ochtend. Is je bak niet geleegd? Bel dan de gemeente.", "Put the bin out the evening before, or early in the morning. Has your bin not been emptied? Then call the council."),
        ],
        [
          s("Een grote kast of een oude bank mag je niet zomaar op straat zetten. Je kunt een afspraak maken om grof afval te laten ophalen.", "You can't just put a big cupboard or an old sofa out on the street. You can make an appointment to have bulky waste collected."),
          s("Of je zet het op Marktplaats. Wat voor jou afval is, vindt een ander misschien een schat.", "Or you put it on Marktplaats. What's rubbish to you may be a treasure to someone else."),
        ],
      ],
      tasks: [
        pairs("Where does it go?", "schillen=de groene bak | een lege jampot=de glasbak | een blikje=terug naar de supermarkt | een oude bank=een afspraak voor grof afval", true, true),
        tf("Elke gemeente heeft dezelfde regels voor afval.", "Every council has the same rules for rubbish.", false),
        mc("Why do the Dutch sort their rubbish?", ["To reuse raw materials", "Because bins are small", "To pay less rent"], 0),
        mc("What is statiegeld?", ["A deposit you get back for bottles and cans", "A fine for wrong sorting", "The price of a bin"], 0),
        tf("Je kunt een oude bank gewoon op straat zetten.", "You can just put an old sofa on the street.", false),
      ],
    },
  ],
  listening: [
    {
      id: "aan-de-balie-van-de-gemeente",
      level: "A2",
      title: "Aan de balie van de gemeente",
      titleTranslation: "At the town hall desk",
      kind: "dialogue",
      situation: "Rafael has just moved to Haarlem and comes to register.",
      grammar: ["separable-past", "questions", "modal-verbs"],
      lines: [
        line("Medewerker", "Goedemorgen. U heeft een afspraak om tien uur?", "Good morning. You have an appointment at ten?"),
        line("Rafael", "Ja, ik wil me inschrijven. Ik ben vorige week verhuisd.", "Yes, I want to register. I moved last week."),
        line("Medewerker", "Heeft u uw paspoort en uw huurcontract meegenomen?", "Have you brought your passport and your rental contract?"),
        line("Rafael", "Ja, alstublieft. Ik heb het contract gisteren uitgeprint.", "Yes, here you are. I printed the contract out yesterday."),
        line("Medewerker", "Dank u. Komt u uit een ander land, of uit een andere gemeente?", "Thank you. Are you coming from another country, or from another municipality?"),
        line("Rafael", "Uit Brazilië. Ik woon voor het eerst in Nederland.", "From Brazil. It's my first time living in the Netherlands."),
        line("Medewerker", "Dan krijgt u vandaag een BSN. U krijgt het nummer ook binnen een paar weken per post.", "Then you'll get a BSN today. You'll also get the number by post within a few weeks."),
        line("Rafael", "Moet ik nog iets anders regelen?", "Do I need to arrange anything else?"),
        line("Medewerker", "Vraag daarna een DigiD aan, en zoek een huisarts. Op deze folder staat alles nog een keer.", "After that, apply for a DigiD, and find a GP. Everything is on this leaflet again."),
      ],
      gist: { prompt: "Why is Rafael at the town hall?", options: ["To register at his new address", "To get married", "To pay a fine"], answer: 0 },
      details: [
        { prompt: "What did Rafael do yesterday?", options: ["He printed his contract", "He moved house", "He applied for a DigiD"], answer: 0 },
        { prompt: "Where is Rafael from?", options: ["Portugal", "Brazil", "Spain"], answer: 1 },
      ],
      tasks: [
        heard(3, ["uitgeprint", "opgehaald", "ingevuld"], 0),
        tf("Rafael woonde eerst in een andere Nederlandse stad.", "Rafael first lived in another Dutch town.", false),
        gaps(1, "inschrijven", "verhuisd"),
      ],
      dictation: [1, 7],
      words: {
        uitgeprint: { meaning: "printed out", base: "uitprinten" },
        folder: { meaning: "leaflet", local: "A Dutch folder is a leaflet, not a file folder (that's a map)" },
      },
    },
    {
      id: "je-eerste-dag-als-vrijwilliger",
      level: "A2",
      title: "Je eerste dag als vrijwilliger",
      titleTranslation: "Your first day as a volunteer",
      kind: "monologue",
      situation: "Coordinator Wim welcomes new volunteers at the food bank.",
      grammar: ["om-te", "separable-verbs", "imperative"],
      lines: [
        line("Wim", "Welkom allemaal! Fijn dat jullie er zijn. Ik ben Wim, en ik coördineer de vrijwilligers.", "Welcome everyone! Great that you're here. I'm Wim, and I coordinate the volunteers."),
        line("Wim", "We beginnen om negen uur. Eerst laden we de vrachtwagen uit, en daarna pakken we de pakketten in.", "We start at nine. First we unload the lorry, and then we pack the parcels."),
        line("Wim", "Om half twaalf komen de eerste klanten om hun pakket op te halen.", "At half past eleven the first clients come to pick up their parcel."),
        line("Wim", "Wees vriendelijk, en stel niet te veel vragen. Veel mensen schamen zich om hier te komen.", "Be friendly, and don't ask too many questions. Many people are ashamed to come here."),
        line("Wim", "Om één uur ruimen we samen op. Dan drinken we koffie en eten we een broodje.", "At one o'clock we tidy up together. Then we have coffee and a sandwich."),
        line("Wim", "Heb je een vraag? Vraag het mij of Henny, zij werkt hier al vijftien jaar.", "Got a question? Ask me or Henny, she's been working here for fifteen years."),
      ],
      gist: { prompt: "What is Wim doing?", options: ["Explaining the day to new volunteers", "Asking for money", "Ordering food for the food bank"], answer: 0 },
      details: [
        { prompt: "What do they do first?", options: ["Unload the lorry", "Pack the parcels", "Drink coffee"], answer: 0 },
        { prompt: "Why shouldn't you ask too many questions?", options: ["Many people are ashamed to come", "There's no time", "The clients don't speak Dutch"], answer: 0 },
      ],
      tasks: [
        heard(1, ["vrachtwagen", "vliegtuig", "vuilniszak"], 0),
        tf("Henny werkt hier pas een week.", "Henny has only been working here a week.", false),
        gaps(4, "ruimen", "op"),
      ],
      dictation: [2, 4],
      words: {
        "coördineer": { meaning: "coordinate", base: "coördineren" },
        schamen: { meaning: "be ashamed", local: "zich schamen = to be ashamed; Schaam je! = Shame on you!" },
      },
    },
    {
      id: "de-afvalkalender",
      level: "A2",
      title: "De afvalkalender",
      titleTranslation: "The rubbish calendar",
      kind: "voicemail",
      situation: "A voicemail from the council's waste service to a new resident.",
      grammar: ["separable-verbs", "time-numbers", "imperative"],
      lines: [
        line("Medewerker", "Goedemiddag, u spreekt met Esra van de afvaldienst van de gemeente Arnhem.", "Good afternoon, this is Esra from Arnhem council's waste service."),
        line("Medewerker", "U had gebeld omdat uw groene bak niet is geleegd.", "You called because your green bin wasn't emptied."),
        line("Medewerker", "In uw straat halen we het gft op dinsdag op, niet op maandag. Daarom stond uw bak er een dag te vroeg.", "In your street we collect the organic waste on Tuesday, not on Monday. That's why your bin was out a day too early."),
        line("Medewerker", "Het papier halen we om de vier weken op, op vrijdag. Plastic mag in dezelfde bak als het restafval.", "We collect paper every four weeks, on Friday. Plastic can go in the same bin as the other waste."),
        line("Medewerker", "Download onze app, dan krijgt u de avond ervoor een berichtje.", "Download our app, then you'll get a message the evening before."),
        line("Medewerker", "Nog vragen? Bel ons tussen negen en vijf. Fijne dag!", "Any more questions? Call us between nine and five. Have a nice day!"),
      ],
      gist: { prompt: "Why wasn't the green bin emptied?", options: ["It was put out on the wrong day", "The bin was too full", "The lorry broke down"], answer: 0 },
      details: [
        { prompt: "When is organic waste collected in this street?", options: ["Monday", "Tuesday", "Friday"], answer: 1 },
        { prompt: "Where does plastic go here?", options: ["In the green bin", "In the same bin as the other waste", "To the supermarket"], answer: 1 },
      ],
      tasks: [
        heard(4, ["app", "brief", "folder"], 0),
        tf("Het papier wordt elke week opgehaald.", "Paper is collected every week.", false),
        gaps(1, "groene", "geleegd"),
      ],
      dictation: [1, 5],
      words: {
        afvaldienst: { meaning: "waste service", closer: "afval (rubbish) + dienst (service)" },
      },
    },
    {
      id: "lid-worden-van-de-hockeyclub",
      level: "A2",
      title: "Lid worden van de hockeyclub",
      titleTranslation: "Joining the hockey club",
      kind: "dialogue",
      situation: "Chen wants his daughter Mei to join a hockey club and talks to someone from the club.",
      grammar: ["om-te", "separable-verbs", "questions"],
      lines: [
        line("Chen", "Goedenavond. Mijn dochter is negen en ze wil graag hockeyen. Kan ze lid worden?", "Good evening. My daughter is nine and she'd like to play hockey. Can she become a member?"),
        line("Clublid", "Leuk! Ze mag eerst drie keer gratis meetrainen, om te kijken of ze het leuk vindt.", "Great! She can first join in three training sessions for free, to see whether she likes it."),
        line("Chen", "Wanneer zijn de trainingen?", "When are the training sessions?"),
        line("Clublid", "Op woensdagmiddag om vier uur. Op zaterdag spelen de teams wedstrijden.", "On Wednesday afternoons at four. On Saturdays the teams play matches."),
        line("Chen", "En wat kost het lidmaatschap?", "And how much is the membership?"),
        line("Clublid", "Voor de jeugd is het 220 euro per jaar. Is dat te veel? Dan kan de gemeente soms helpen.", "For young players it's 220 euros a year. Is that too much? Then the council can sometimes help."),
        line("Clublid", "O, en nog iets: ouders helpen ook mee. Ze rijden naar uitwedstrijden en ze draaien twee keer per jaar een bardienst.", "Oh, and one more thing: parents help out too. They drive to away matches and they do a bar shift twice a year."),
        line("Chen", "Een bardienst? Dat heb ik nog nooit gedaan!", "A bar shift? I've never done that!"),
        line("Clublid", "Geen zorgen, dat leer je snel. En zo leer je meteen de andere ouders kennen.", "Don't worry, you learn it fast. And that way you get to know the other parents straight away."),
      ],
      gist: { prompt: "What do they talk about?", options: ["Mei joining the hockey club", "Chen playing hockey", "A hockey match on TV"], answer: 0 },
      details: [
        { prompt: "How can Mei try it out?", options: ["Three free training sessions", "One free match", "A free month"], answer: 0 },
        { prompt: "What do parents do?", options: ["Drive to away matches and do bar shifts", "Train the children", "Clean the field"], answer: 0 },
      ],
      tasks: [
        heard(3, ["wedstrijden", "weken", "winkels"], 0),
        tf("Het lidmaatschap is gratis.", "The membership is free.", false),
        gaps(4, "kost", "lidmaatschap"),
      ],
      dictation: [2, 8],
      words: {
        bardienst: { meaning: "bar shift (at a club)", local: "At Dutch sports clubs volunteers, often parents, run the bar" },
        uitwedstrijden: { meaning: "away matches", closer: "uit (away) + wedstrijden (matches)" },
        meetrainen: { meaning: "join in training", closer: "mee (along) + trainen" },
      },
    },
  ],
  writing: [
    a2({
      id: "w-vrijwilliger-worden",
      title: "Vrijwilliger worden",
      titleTranslation: "Becoming a volunteer",
      form: "email",
      situation: "You'd like to volunteer somewhere: a food bank, a library, a sports club or a care home. Write an email to offer your help.",
      points: [
        p("Greet the organisation", "beste", "geachte", "hallo"),
        p("Introduce yourself", "ben", "heet", "woon", "kom"),
        p("Say why you want to volunteer, with om … te", "om", "te"),
        p("Say what you can do", "kan", "goed", "ervaring", "helpen"),
        p("Say when you're free", "dag", "middag", "ochtend", "avond", "tijd", "vrij", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"),
        p("Ask what the next step is, and close", "vraag", "graag", "hoor", "groet", "groeten"),
      ],
      model:
        "Beste mevrouw Hendriks, Mijn naam is Arash Karimi. Ik kom uit Iran en ik woon sinds een jaar in Leiden. Ik las op uw website dat de bibliotheek vrijwilligers zoekt voor het taalcafé. Ik wil graag komen helpen. Ik doe vrijwilligerswerk om nieuwe mensen te ontmoeten en om mijn Nederlands te verbeteren. Ik wil ook graag iets terugdoen, want toen ik hier net woonde, hebben veel mensen mij geholpen. In Iran was ik leraar op een basisschool. Ik kan dus goed met groepen werken, en ik ben geduldig. Ik spreek Perzisch, Engels en een beetje Arabisch. Ik heb op dinsdagavond en op zaterdagochtend tijd. Wat is de volgende stap? Moet ik een formulier invullen of kan ik een keer langskomen? Ik hoor graag van u. Met vriendelijke groet, Arash Karimi",
    }),
    a2({
      id: "w-mijn-eerste-weken",
      title: "Mijn eerste weken",
      titleTranslation: "My first weeks",
      form: "story",
      situation: "Write about the first weeks in a new town or country: what did you have to arrange, and how did it go?",
      points: [
        p("Say when and where you arrived", "kwam", "aan", "aangekomen", "verhuisd", "geleden"),
        p("Say what you had to arrange", "moest", "regelen", "inschrijven", "gemeente", "bank", "huisarts"),
        p("Use separable verbs in the past", "ingeschreven", "opgebeld", "belde", "aangevraagd", "vroeg", "uitgepakt", "opgehaald"),
        p("Say what was difficult", "moeilijk", "lastig", "begreep", "probleem"),
        p("Say who helped you", "hielp", "geholpen", "buurman", "buurvrouw", "collega", "vriend"),
        p("Say how you feel about it now", "nu", "voel", "thuis", "blij"),
      ],
      model:
        "Twee jaar geleden kwam ik in Groningen aan, met twee koffers en een fiets. De eerste weken moest ik heel veel regelen. Eerst heb ik me bij de gemeente ingeschreven. Daarna heb ik een bankrekening geopend en een DigiD aangevraagd. Een huisarts vinden was het moeilijkst. Ik heb wel tien praktijken opgebeld, maar ze waren allemaal vol. Ook begreep ik de brieven van de belastingdienst niet. Gelukkig hielp mijn buurvrouw Ria me. Zij las de brieven met mij, en ze belde haar eigen huisarts op. Die had nog plek voor mij. Ria nodigde me ook uit voor koffie, en ze legde uit hoe de afvalkalender werkt. Nu voel ik me echt thuis in Groningen. Ik heb nog steeds elke week koffie met Ria, maar nu lees ik de brieven zelf.",
    }),
    a2({
      id: "w-lid-worden",
      title: "Lid worden van een club",
      titleTranslation: "Joining a club",
      form: "email",
      situation: "You want to join a club: sports, music, a choir or something else. Write an email with your questions.",
      points: [
        p("Greet the club", "beste", "hallo", "geachte"),
        p("Say who you are and which club or group you mean", "ben", "heet", "club", "vereniging", "koor", "team"),
        p("Say why you want to join, with om … te or omdat", "om", "te", "omdat", "want"),
        p("Say what experience you have", "ervaring", "vroeger", "jaar", "speelde", "zong", "nooit"),
        p("Ask about times and costs", "wanneer", "hoe", "laat", "kost", "kosten", "contributie", "lidmaatschap"),
        p("Ask whether you can try it first, and close", "proberen", "proefles", "meedoen", "groet", "groeten"),
      ],
      model:
        "Beste mensen van zangkoor De Lijster, Mijn naam is Sarah Okafor en ik woon sinds kort in Amersfoort. Op de markt zag ik jullie folder, en ik wil graag lid worden van het koor. Ik zoek een koor om weer te zingen en om mensen in mijn nieuwe stad te leren kennen. In Nigeria zong ik tien jaar in het koor van onze kerk, dus ik heb wel wat ervaring. Noten lezen kan ik helaas niet zo goed. Ik heb een paar vragen. Op welke avond repeteren jullie, en hoe laat begint de repetitie? Hoeveel kost het lidmaatschap per jaar? En moet ik eerst een auditie doen? Ik zou graag een keer komen meezingen om te kijken of het koor bij mij past. Kan dat volgende week al? Ik hoor graag van jullie. Hartelijke groeten, Sarah Okafor",
    }),
  ],
  speaking: {
    sounds: ["g", "w-v"],
    shadowing: [
      { text: "Ja, ik wil me inschrijven. Ik ben vorige week verhuisd.", translation: "Yes, I want to register. I moved last week." },
      { text: "Moet ik nog iets anders regelen?", translation: "Do I need to arrange anything else?" },
      { text: "Mijn dochter is negen en ze wil graag hockeyen.", translation: "My daughter is nine and she'd like to play hockey." },
      { text: "Een bardienst? Dat heb ik nog nooit gedaan!", translation: "A bar shift? I've never done that!" },
    ],
  },
};
