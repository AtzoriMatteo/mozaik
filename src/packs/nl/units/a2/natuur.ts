import type { Unit } from "@/core/content";
import { a2, gaps, heard, line, mc, order, p, pairs, s, tf } from "./helpers";

/** A2 unit 10: water, weather and nature. The future with zullen; time, manner, place. */
export const natuur: Unit = {
  id: "a2-natuur",
  level: "A2",
  title: "Water, weer en natuur",
  titleTranslation: "Water, weather and nature",
  look: { motif: "windmill", glaze: "cobalt" },
  canDo: [
    "Understand how the Dutch live with water, and why",
    "Talk about the weather, and what it will do later",
    "Talk about plans and promises with zullen and gaan",
    "Put time, manner and place in the right order: morgen met de trein naar Texel",
  ],
  texts: [
    {
      id: "leven-met-water",
      level: "A2",
      title: "Leven met water",
      titleTranslation: "Living with water",
      grammar: ["zullen-future", "imperfect-irregular", "word-order-tmp"],
      paragraphs: [
        [
          s("In de nacht van 31 januari op 1 februari 1953 stormde het heel hard. Het water van de Noordzee kwam hoger dan ooit.", "In the night of 31 January to 1 February 1953 there was a very heavy storm. The water of the North Sea came higher than ever."),
          s("In Zeeland en Zuid-Holland braken de dijken op tientallen plekken. Het water stroomde 's nachts de dorpen in, terwijl de mensen sliepen.", "In Zeeland and South Holland the dykes broke in dozens of places. The water flowed into the villages at night, while people were asleep."),
        ],
        [
          s("Bij de Watersnoodramp stierven 1836 mensen. Duizenden mensen verloren hun huis, hun dieren en hun land.", "In the flood disaster 1,836 people died. Thousands of people lost their homes, their animals and their land."),
          s("Nederland besloot: dit mag nooit meer gebeuren. Zo begonnen de Deltawerken: een systeem van dammen, dijken en grote deuren in het water.", "The Netherlands decided: this must never happen again. That's how the Delta Works began: a system of dams, dykes and big gates in the water."),
          s("Het laatste deel, de Maeslantkering bij Rotterdam, was in 1997 klaar. Bij een zware storm gaan de enorme deuren automatisch dicht.", "The last part, the Maeslant barrier near Rotterdam, was finished in 1997. In a severe storm the enormous gates close automatically."),
        ],
        [
          s("Maar de zeespiegel stijgt, en hij zal de komende eeuw nog verder stijgen. Ook de rivieren zullen vaker veel water brengen.", "But the sea level is rising, and it will rise even further over the coming century. The rivers too will more often bring a lot of water."),
          s("Daarom bouwt Nederland niet alleen hogere dijken. Het geeft het water ook meer ruimte. Langs sommige rivieren mogen de weilanden bij hoog water onderlopen.", "That's why the Netherlands isn't only building higher dykes. It's also giving the water more room. Along some rivers the meadows are allowed to flood when the water is high."),
        ],
        [
          s("Veel Nederlanders denken er niet elke dag aan dat ze onder de zeespiegel wonen. Toch merk je het overal: aan de dijken, de gemalen en de waterschappen.", "Many Dutch people don't think every day about living below sea level. Yet you notice it everywhere: in the dykes, the pumping stations and the water boards."),
          s("Een waterschap is een van de oudste vormen van bestuur in Nederland. Sommige zijn ouder dan het land zelf.", "A water board is one of the oldest forms of government in the Netherlands. Some are older than the country itself."),
        ],
      ],
      tasks: [
        mc("What happened in 1953?", ["A storm broke the dykes and many people died", "The Delta Works were finished", "A new dyke was built in Zeeland"], 0),
        order("Put the history in order.", "The flood disaster", "The Delta Works begin", "The Maeslant barrier is finished"),
        tf("De zee zal in de toekomst lager worden.", "In the future the sea will get lower.", false),
        mc("How does the Netherlands give water 'more room'?", ["Some meadows may flood when the water is high", "They build more houses on the water", "They pump the sea away"], 0),
        pairs("Match.", "dijk=dyke | dam=dam | gemaal=pumping station | waterschap=water board", true),
      ],
    },
    {
      id: "wadlopen",
      level: "A2",
      title: "Wadlopen",
      titleTranslation: "Mudflat walking",
      grammar: ["word-order-tmp", "perfect-hebben", "perfect-zijn"],
      paragraphs: [
        [
          s("In het noorden van Nederland ligt de Waddenzee. Het is een bijzondere zee: twee keer per dag loopt hij voor een groot deel leeg.", "In the north of the Netherlands lies the Wadden Sea. It's a special sea: twice a day a large part of it empties."),
          s("Bij eb kun je over de bodem van de zee lopen. Dat heet wadlopen. Sinds 2009 staat de Waddenzee op de Werelderfgoedlijst van UNESCO.", "At low tide you can walk across the bottom of the sea. That's called mudflat walking. Since 2009 the Wadden Sea has been on UNESCO's World Heritage List."),
        ],
        [
          s("Vorige zomer ben ik met mijn dochter van zestien gaan wadlopen. We vertrokken om zes uur 's ochtends met een groep van twintig mensen vanuit Pieterburen.", "Last summer I went mudflat walking with my sixteen-year-old daughter. We left Pieterburen at six in the morning with a group of twenty people."),
          s("De gids vertelde eerst de regels. Je mag nooit zonder gids het wad op gaan, want het water komt snel en onverwacht terug.", "The guide first explained the rules. You must never go onto the mudflats without a guide, because the water comes back fast and unexpectedly."),
        ],
        [
          s("Het eerste uur liepen we door zachte modder. Bij elke stap zakten we tot onze knieën in de grond. Mijn dochter lachte zo hard dat ze bijna viel!", "For the first hour we walked through soft mud. With every step we sank up to our knees. My daughter laughed so hard that she almost fell!"),
          s("Daarna moesten we door een geul. Het water kwam tot aan ons middel, en het was koud.", "After that we had to go through a channel. The water came up to our waist, and it was cold."),
        ],
        [
          s("Halverwege stopte de gids. \"Kijk, daar!\" Op een zandbank lagen tientallen zeehonden in de zon.", "Halfway the guide stopped. \"Look, over there!\" On a sandbank dozens of seals lay in the sun."),
          s("Na vier uur kwamen we moe en vies op het eiland Schiermonnikoog aan. We zijn met de boot teruggegaan.", "After four hours we arrived tired and dirty on the island of Schiermonnikoog. We went back by boat."),
          s("Mijn dochter zegt nu tegen iedereen dat het de beste dag van haar zomer was. Volgend jaar gaan we samen naar Ameland lopen.", "My daughter now tells everyone it was the best day of her summer. Next year we're going to walk to Ameland together."),
        ],
      ],
      tasks: [
        mc("What is wadlopen?", ["Walking across the sea bottom at low tide", "Swimming in the Wadden Sea", "Sailing between the islands"], 0),
        tf("Je mag alleen het wad op gaan als je goed kunt zwemmen.", "You may go onto the mudflats alone if you can swim well.", false),
        order("Put the walk in order.", "They leave at six in the morning", "The guide explains the rules", "They walk through soft mud", "They see seals", "They arrive on Schiermonnikoog"),
        pairs("Match.", "eb=low tide | vloed=high tide | modder=mud | zeehond=seal", true),
        mc("How did they get back?", ["By boat", "They walked back", "By bus"], 0),
      ],
    },
    {
      id: "praten-over-het-weer",
      level: "A2",
      title: "Praten over het weer",
      titleTranslation: "Talking about the weather",
      grammar: ["zullen-future", "gaan-future", "comparatives"],
      paragraphs: [
        [
          s("Nederlanders praten graag over het weer. Bij de bakker, op het werk of bij de bushalte: het weer is altijd een goed begin van een gesprek.", "The Dutch love talking about the weather. At the baker's, at work or at the bus stop: the weather is always a good way to start a conversation."),
          s("\"Lekker weertje, hè?\" of \"Wat een rotweer!\" Met zo'n zin maak je snel contact.", "\"Nice weather, isn't it?\" or \"What awful weather!\" With a sentence like that you quickly make contact."),
        ],
        [
          s("Er is ook een goede reden voor: het weer in Nederland verandert steeds. 's Ochtends schijnt de zon, 's middags regent het, en 's avonds waait het hard.", "There's also a good reason for it: the weather in the Netherlands keeps changing. In the morning the sun shines, in the afternoon it rains, and in the evening it's very windy."),
          s("Nederlanders zeggen soms dat ze vier seizoenen op één dag hebben.", "The Dutch sometimes say they have four seasons in one day."),
        ],
        [
          s("Daarom kijkt bijna iedereen op Buienradar voordat hij op de fiets stapt. Die app laat precies zien waar de regen is en waar hij straks zal zijn.", "That's why almost everyone looks at Buienradar before getting on their bike. That app shows exactly where the rain is and where it will be soon."),
          s("\"Over tien minuten gaat het regenen,\" zegt je collega dan. \"Ik wacht nog even.\"", "\"It's going to rain in ten minutes,\" your colleague then says. \"I'll wait a bit.\""),
        ],
        [
          s("Een bekend Nederlands gezegde is: \"Er bestaat geen slecht weer, alleen slechte kleding.\"", "A well-known Dutch saying is: \"There's no such thing as bad weather, only bad clothing.\""),
          s("Dus koop een goede regenjas, en geen paraplu. Bij harde wind gaat die toch kapot.", "So buy a good raincoat, and not an umbrella. In a strong wind it will break anyway."),
          s("En als de zon schijnt? Dan zitten binnen een uur alle terrassen vol. Nederlanders weten nooit hoe lang het mooie weer zal blijven.", "And when the sun shines? Then within an hour all the terraces are full. The Dutch never know how long the nice weather will last."),
        ],
      ],
      tasks: [
        mc("Why do the Dutch talk about the weather so much?", ["It changes all the time", "It's always sunny", "It's a school subject"], 0),
        tf("Buienradar laat zien waar de regen straks zal zijn.", "Buienradar shows where the rain will be soon.", true),
        mc("What does the text advise you to buy?", ["A good raincoat", "A big umbrella", "Winter boots"], 0),
        pairs("Match.", "Lekker weertje, hè?=Nice weather, isn't it? | Wat een rotweer!=What awful weather! | Het gaat regenen.=It's going to rain.", true),
        tf("Als de zon schijnt, blijven Nederlanders binnen.", "When the sun shines, the Dutch stay indoors.", false),
      ],
    },
    {
      id: "een-stad-die-water-vasthoudt",
      level: "A2",
      title: "Een stad die water vasthoudt",
      titleTranslation: "A city that holds on to water",
      grammar: ["zullen-future", "relative-clauses", "word-order-tmp"],
      paragraphs: [
        [
          s("In de toekomst zal het in Nederland vaker heel hard regenen, maar ook vaker lang droog zijn. Steden moeten zich daarop voorbereiden.", "In the future it will more often rain very hard in the Netherlands, but also more often be dry for a long time. Cities have to prepare for that."),
          s("Rotterdam is daar al jaren mee bezig.", "Rotterdam has been working on that for years."),
        ],
        [
          s("Op het Benthemplein ligt een plein dat er op een normale dag uitziet als een sportveld met trappen. Jongeren skaten er en spelen er basketbal.", "On Benthemplein there's a square that on a normal day looks like a sports ground with steps. Young people skate and play basketball there."),
          s("Maar als het hard regent, loopt het plein langzaam vol. Het water blijft er een tijdje staan, en daarna stroomt het rustig weg.", "But when it rains hard, the square slowly fills up. The water stays there for a while, and then it flows away calmly."),
          s("Zo'n plein heet een waterplein. Het zorgt ervoor dat de straten en kelders in de buurt droog blijven.", "A square like that is called a water square. It makes sure that the streets and cellars nearby stay dry."),
        ],
        [
          s("Ook op de daken gebeurt er veel. Rotterdam heeft steeds meer groene daken, met planten die het regenwater opnemen.", "A lot is happening on the roofs too. Rotterdam has more and more green roofs, with plants that absorb the rainwater."),
          s("Een groen dak houdt het gebouw in de zomer koeler, en er komen bijen en vlinders op af.", "A green roof keeps the building cooler in summer, and bees and butterflies come to it."),
        ],
        [
          s("Je kunt zelf ook iets doen. Haal de tegels uit je tuin en zet er planten in. Dan zakt het water in de grond, en niet in het riool.", "You can do something yourself too. Take the paving tiles out of your garden and put plants in. Then the water sinks into the ground, and not into the sewer."),
          s("Er is zelfs een wedstrijd tussen steden: het NK Tegelwippen. De stad die de meeste tegels weghaalt, wint.", "There's even a competition between cities: the Dutch Tile-Flipping Championship. The city that removes the most tiles wins."),
        ],
      ],
      tasks: [
        mc("What does a water square do?", ["It fills up with rain so the streets stay dry", "It's a swimming pool", "It pumps water into the sea"], 0),
        tf("Op een droge dag spelen jongeren op het Benthemplein.", "On a dry day young people play on Benthemplein.", true),
        mc("What are the advantages of a green roof?", ["It absorbs rain and keeps the building cool", "It makes the building taller", "It produces electricity"], 0),
        pairs("Match.", "tegel=paving tile | riool=sewer | dak=roof | regenwater=rainwater", true),
        mc("Who wins the NK Tegelwippen?", ["The city that removes the most tiles", "The city with the most rain", "The city with the biggest square"], 0),
      ],
    },
  ],
  listening: [
    {
      id: "de-regels-van-de-gids",
      level: "A2",
      title: "De regels van de gids",
      titleTranslation: "The guide's rules",
      kind: "monologue",
      situation: "Before a mudflat walk, guide Jelle explains the rules to his group.",
      grammar: ["imperative", "word-order-tmp", "zullen-future"],
      lines: [
        line("Jelle", "Goedemorgen allemaal! Ik ben Jelle, en ik ben vandaag jullie gids.", "Good morning everyone! I'm Jelle, and I'm your guide today."),
        line("Jelle", "We lopen straks in vier uur over het wad naar Schiermonnikoog.", "In a moment we'll walk across the mudflats to Schiermonnikoog, in four hours."),
        line("Jelle", "Blijf altijd achter mij, en loop nooit alleen een andere kant op.", "Always stay behind me, and never walk off alone in another direction."),
        line("Jelle", "Draag hoge sokken en oude sportschoenen. Met blote voeten snijd je je aan de schelpen.", "Wear long socks and old trainers. With bare feet you'll cut yourself on the shells."),
        line("Jelle", "Halverwege zullen we door een geul lopen. Het water komt dan tot je middel, dus doe je telefoon in een plastic zak.", "Halfway we'll walk through a channel. The water then comes up to your waist, so put your phone in a plastic bag."),
        line("Jelle", "Op het eiland wacht er een boot. Die brengt ons om vier uur terug naar het vasteland.", "On the island a boat will be waiting. It'll take us back to the mainland at four."),
      ],
      gist: { prompt: "What is Jelle doing?", options: ["Explaining the rules before a mudflat walk", "Selling boat tickets", "Telling the history of the island"], answer: 0 },
      details: [
        { prompt: "Why shouldn't you walk barefoot?", options: ["You'll cut yourself on shells", "The mud is too cold", "It's forbidden"], answer: 0 },
        { prompt: "How will they get back?", options: ["By boat", "On foot", "By bus"], answer: 0 },
      ],
      tasks: [
        heard(3, ["schelpen", "stenen", "schepen"], 0),
        tf("Je mag een andere kant op lopen als je wilt.", "You may walk off in another direction if you want.", false),
        gaps(4, "geul", "middel"),
      ],
      dictation: [2, 5],
      words: {
        vasteland: { meaning: "mainland", closer: "vast (solid, fixed) + land" },
        geul: { meaning: "channel (in the mudflats)", local: "A deeper stream on the wad that stays full even at low tide" },
      },
    },
    {
      id: "gaat-het-regenen",
      level: "A2",
      title: "Gaat het regenen?",
      titleTranslation: "Is it going to rain?",
      kind: "dialogue",
      situation: "Two colleagues, Wouter and Eva, are about to cycle home.",
      grammar: ["gaan-future", "zullen-future", "als-wanneer-toen"],
      lines: [
        line("Eva", "Ga jij nu ook naar huis, Wouter?", "Are you going home now too, Wouter?"),
        line("Wouter", "Ik wilde gaan, maar kijk eens naar buiten. Het wordt helemaal donker.", "I wanted to, but look outside. It's getting completely dark."),
        line("Eva", "Even op Buienradar kijken. O jee. Over vijf minuten begint het te gieten.", "Let me check Buienradar. Oh dear. In five minutes it'll start pouring."),
        line("Wouter", "Hoe lang zal het duren?", "How long will it last?"),
        line("Eva", "Ongeveer een kwartier. Daarna wordt het weer droog.", "About a quarter of an hour. After that it'll be dry again."),
        line("Wouter", "Dan wacht ik even. Zullen we nog een kop thee drinken?", "Then I'll wait a bit. Shall we have another cup of tea?"),
        line("Eva", "Goed plan. Als we nu gaan, zijn we binnen een minuut doornat.", "Good plan. If we go now, we'll be soaked within a minute."),
        line("Wouter", "Typisch Nederland. Vanochtend was het nog zo mooi weer.", "Typical Netherlands. This morning the weather was still so nice."),
      ],
      gist: { prompt: "Why do Wouter and Eva wait?", options: ["A heavy shower is coming", "They have more work", "Their bikes are broken"], answer: 0 },
      details: [
        { prompt: "How long will the rain last?", options: ["Five minutes", "About a quarter of an hour", "All evening"], answer: 1 },
        { prompt: "What will they do while they wait?", options: ["Drink tea", "Have a meeting", "Call a taxi"], answer: 0 },
      ],
      tasks: [
        heard(2, ["gieten", "gaan", "groeien"], 0),
        tf("Het weer was vanochtend slecht.", "The weather was bad this morning.", false),
        gaps(6, "minuut", "doornat"),
      ],
      dictation: [3, 7],
      words: {
        gieten: { meaning: "to pour (with rain)", local: "Het giet = it's pouring; also used for pouring water" },
        doornat: { meaning: "soaked through", closer: "door (through) + nat (wet)" },
      },
    },
    {
      id: "de-boswachter",
      level: "A2",
      title: "De boswachter",
      titleTranslation: "The forest ranger",
      kind: "monologue",
      situation: "Ranger Annemiek takes a group on a walk through the Veluwe, the biggest forest area in the Netherlands.",
      grammar: ["word-order-tmp", "superlatives", "zullen-future"],
      lines: [
        line("Annemiek", "Welkom op de Veluwe! Dit is het grootste natuurgebied van Nederland.", "Welcome to the Veluwe! This is the biggest nature area in the Netherlands."),
        line("Annemiek", "Hier leven edelherten, reeën en wilde zwijnen. Met een beetje geluk zien we er vandaag een paar.", "Red deer, roe deer and wild boar live here. With a bit of luck we'll see a few of them today."),
        line("Annemiek", "De beste tijd om dieren te zien is vroeg in de ochtend of laat in de avond.", "The best time to see animals is early in the morning or late in the evening."),
        line("Annemiek", "In september en oktober hoor je 's avonds in het bos de edelherten roepen. Dat heet burlen.", "In September and October you hear the red deer calling in the forest in the evening. That's called rutting."),
        line("Annemiek", "Wees dus stil, en blijf op het pad. Wilde zwijnen zijn meestal rustig, maar niet als ze jongen hebben.", "So be quiet, and stay on the path. Wild boar are usually calm, but not when they have young."),
        line("Annemiek", "Straks lopen we langzaam naar de heide. Daar zullen we even pauzeren.", "In a moment we'll walk slowly to the heath. We'll take a break there."),
      ],
      gist: { prompt: "What is the ranger telling the group?", options: ["About the animals and rules in the Veluwe", "How to plant trees", "Where to buy a map"], answer: 0 },
      details: [
        { prompt: "When is the best time to see animals?", options: ["Early morning or late evening", "At midday", "At night only"], answer: 0 },
        { prompt: "When are wild boar not calm?", options: ["When they have young", "When it rains", "In winter"], answer: 0 },
      ],
      tasks: [
        heard(1, ["zwijnen", "zwanen", "zeehonden"], 0),
        tf("De Veluwe is het kleinste natuurgebied van Nederland.", "The Veluwe is the smallest nature area in the Netherlands.", false),
        gaps(5, "heide", "pauzeren"),
      ],
      dictation: [0, 2],
      words: {
        edelherten: { meaning: "red deer", base: "edelhert", closer: "edel (noble) + hert (deer, hart)" },
        burlen: { meaning: "to bellow (of deer in autumn)", local: "People drive to the Veluwe in autumn just to hear it" },
        reeën: { meaning: "roe deer", base: "ree" },
      },
    },
    {
      id: "wat-ga-je-hierna-doen",
      level: "A2",
      title: "Wat ga je hierna doen?",
      titleTranslation: "What are you going to do after this?",
      kind: "dialogue",
      situation: "On the last evening of their Dutch course, Ahmed and Julia talk about their plans.",
      grammar: ["zullen-future", "gaan-future", "word-order-tmp"],
      lines: [
        line("Julia", "Ik kan het bijna niet geloven. Een jaar geleden kon ik alleen hallo zeggen!", "I can hardly believe it. A year ago I could only say hello!"),
        line("Ahmed", "Ik ook niet. Wat ga je hierna doen? Ga je verder met Nederlands?", "Me neither. What are you going to do after this? Are you going on with Dutch?"),
        line("Julia", "Ja, ik ga in januari met de B1-cursus beginnen. En jij?", "Yes, I'm going to start the B1 course in January. And you?"),
        line("Ahmed", "Ik ga eerst solliciteren. Ik wil volgend jaar weer als ingenieur werken, het liefst in Delft.", "I'm going to apply for jobs first. I want to work as an engineer again next year, ideally in Delft."),
        line("Julia", "Dat zal je zeker lukken. Je Nederlands is echt goed geworden.", "You'll definitely manage that. Your Dutch has got really good."),
        line("Ahmed", "Dank je. Zullen we in de zomer met de groep een dag naar het strand gaan?", "Thanks. Shall we go to the beach for a day with the group in the summer?"),
        line("Julia", "Leuk! Ik zal een datum in de groepsapp zetten.", "Nice! I'll put a date in the group chat."),
        line("Ahmed", "En we spreken af: we praten alleen Nederlands. Ook als het moeilijk wordt!", "And we agree: we only speak Dutch. Even when it gets hard!"),
      ],
      gist: { prompt: "What are they talking about?", options: ["Their plans after the course", "A problem with the course", "Their holidays last year"], answer: 0 },
      details: [
        { prompt: "What will Julia do in January?", options: ["Start the B1 course", "Move to Delft", "Look for a job"], answer: 0 },
        { prompt: "What does Julia promise to do?", options: ["Put a date in the group chat", "Help Ahmed with his CV", "Book a hotel"], answer: 0 },
      ],
      tasks: [
        heard(3, ["ingenieur", "leraar", "kok"], 0),
        tf("Ahmed wil volgend jaar in Delft werken.", "Ahmed wants to work in Delft next year.", true),
        gaps(6, "zal", "datum"),
      ],
      dictation: [1, 7],
      words: {
        ingenieur: { meaning: "engineer", local: "The ie is said like ee in 'see'; the g like the French je" },
      },
    },
  ],
  writing: [
    a2({
      id: "w-mijn-plannen",
      title: "Mijn plannen",
      titleTranslation: "My plans",
      form: "description",
      situation: "Write about your plans for the coming year: work, study, Dutch and free time.",
      points: [
        p("Say what you're going to do with your Dutch", "nederlands", "cursus", "leren", "b1", "taal"),
        p("Say what you'll do for work or study", "werk", "baan", "studie", "studeren", "solliciteren"),
        p("Use zullen for a promise or a prediction", "zal", "zullen", "zult"),
        p("Use gaan for a plan", "ga", "gaan", "gaat"),
        p("Use time, manner and place in one sentence", "met", "naar", "volgend", "volgende", "in"),
        p("Say what you're most looking forward to, and why", "verheug", "zin", "omdat", "want"),
      ],
      model:
        "Volgend jaar wordt een belangrijk jaar voor mij. Na de zomer ga ik met de B1-cursus beginnen, want ik wil mijn Nederlands nog veel beter maken. Ik ga ook elke week een uur met een taalmaatje praten. In het voorjaar ga ik solliciteren. In mijn eigen land was ik verpleegkundige, en ik wil dat werk hier ook graag doen. Eerst moet mijn diploma erkend worden, en dat zal wel een paar maanden duren. Mijn vriendin heeft gezegd dat ze me zal helpen met mijn brief. In mijn vrije tijd ga ik eindelijk leren zwemmen. In juli gaan we met de trein naar Texel, met de hele familie. Ik verheug me het meest op mijn eerste werkdag, omdat ik dan weer zal doen wat ik het liefst doe: mensen helpen.",
    }),
    a2({
      id: "w-een-dag-in-de-natuur",
      title: "Een dag in de natuur",
      titleTranslation: "A day in nature",
      form: "story",
      situation: "Tell the story of a day you spent outside: a walk, a bike ride, a day at the sea or in the mountains.",
      points: [
        p("Say when, where and with whom", "vorige", "vorig", "geleden", "met", "naar"),
        p("Say how you got there", "trein", "auto", "fiets", "fietsten", "reden", "liepen", "bus"),
        p("Use time, manner and place in one sentence", "om", "uur", "met", "naar"),
        p("Describe what you saw", "zag", "zagen", "bos", "zee", "strand", "dieren", "bloemen"),
        p("Describe the weather", "weer", "zon", "regen", "regende", "wind", "koud", "warm"),
        p("Say how the day ended, and how you felt", "moe", "blij", "eind", "daarna", "thuis"),
      ],
      model:
        "Vorige maand ben ik met twee vrienden naar de Hoge Veluwe gegaan. We vertrokken om acht uur met de trein naar Ede, en daar hebben we fietsen gehuurd. In het park kun je gratis witte fietsen gebruiken, maar die waren al allemaal weg. Het was een koude, heldere ochtend, en er hing nog mist boven de heide. Na een uur fietsen zagen we opeens drie reeën tussen de bomen. We stopten en waren heel stil. Ze keken ons even aan en renden toen weg. 's Middags gingen we naar het museum in het park, want daar hangen veel schilderijen van Van Gogh. Daarna begon het te regenen, dus we fietsten snel terug naar het station. In de trein dronken we warme chocolademelk. We waren moe en nat, maar heel blij. Het was een van de mooiste dagen van de herfst.",
    }),
    a2({
      id: "w-het-weer-bij-ons",
      title: "Het weer bij ons",
      titleTranslation: "The weather where I'm from",
      form: "description",
      situation: "A Dutch friend asks what the weather and seasons are like where you come from. Write them a message.",
      points: [
        p("Greet your friend", "hoi", "hallo", "lieve", "beste"),
        p("Describe the seasons where you come from", "zomer", "winter", "lente", "herfst", "seizoen", "seizoenen"),
        p("Compare it with the Netherlands", "warmer", "kouder", "droger", "natter", "meer", "minder", "dan"),
        p("Say what people do in that weather", "gaan", "zitten", "blijven", "doen", "dragen"),
        p("Say what you think of the Dutch weather, with omdat or want", "omdat", "want", "vind"),
        p("Say when is the best time to visit, and close", "beste", "tijd", "kom", "groetjes", "liefs"),
      ],
      model:
        "Hoi Merel, Je vroeg hoe het weer in Mexico-Stad is. Het is daar heel anders dan in Nederland! We hebben eigenlijk maar twee seizoenen: een droge tijd en een regentijd. Van november tot april is het droog en zonnig. Overdag is het ongeveer vijfentwintig graden, maar 's nachts kan het koud zijn, want de stad ligt hoog in de bergen. Van juni tot september regent het bijna elke middag. Het regent dan heel hard, maar na een uur is het weer droog. Mensen blijven dan even binnen en wachten. In Nederland regent het minder hard, maar wel veel vaker. Ik vind het Nederlandse weer soms moeilijk, omdat het in de winter zo lang donker is. De beste tijd om te komen is maart: dan is het droog en warm, en overal bloeien de paarse bomen. Groetjes, Diego",
    }),
  ],
  speaking: {
    sounds: ["sch", "g"],
    shadowing: [
      { text: "Over vijf minuten begint het te gieten.", translation: "In five minutes it'll start pouring." },
      { text: "Lekker weertje, hè?", translation: "Nice weather, isn't it?" },
      { text: "Wat ga je hierna doen? Ga je verder met Nederlands?", translation: "What are you going to do after this? Are you going on with Dutch?" },
      { text: "Ik zal een datum in de groepsapp zetten.", translation: "I'll put a date in the group chat." },
    ],
  },
};
