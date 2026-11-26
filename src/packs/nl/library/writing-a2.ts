import type { WritingPoint, WritingTask } from "@/core/writing";

/**
 * Library writing at A2: the texts people write once daily life gets going
 * (emails to a landlord, a shop or a manager, notes to neighbours, a report
 * form, reviews, diary pages, short stories about the past). Every point has
 * a sentence frame and cue words; every task has a model answer of the long
 * length that covers each point and passes the checker.
 */
const pf = (prompt: string, frame: string, ...cues: string[]): WritingPoint => ({ prompt, frame, cues });
const t = (topic: string, x: Omit<WritingTask, "level" | "topic">): WritingTask => ({ ...x, level: "A2", topic, id: `lib-a2-${x.id}` });

export const writingA2: WritingTask[] = [
  // ---------- About me ----------
  t("About me", {
    id: "toen-ik-klein-was",
    title: "Toen ik klein was",
    titleTranslation: "When I was little",
    form: "story",
    situation: "Your Dutch class is making a magazine about childhood. Write your page.",
    points: [
      pf("Say where you grew up", "Ik ben opgegroeid in … .", "opgegroeid"),
      pf("Describe your house then", "We woonden in een … met … .", "woonden"),
      pf("Say what you played", "Na school speelde ik vaak … .", "speelde"),
      pf("Say who your best friend was", "Mijn beste vriend(in) was … .", "beste"),
      pf("Tell one thing that happened", "Op een dag … .", "dag"),
      pf("Say what's different now", "Nu … ik … , maar vroeger … .", "nu"),
    ],
    model:
      "Ik ben opgegroeid in een klein dorp in het zuiden van Italië, vlak bij de zee. We woonden in een oud huis met een grote tuin en een citroenboom. Ik had twee broers en we sliepen met z'n drieën in één kamer. Na school speelde ik vaak voetbal op straat met de kinderen uit de buurt. Mijn beste vriend was Luca. Hij woonde naast ons en we waren altijd samen. Op een dag gingen we zonder onze ouders naar het strand. We bleven de hele middag weg en mijn moeder was heel boos. Ik moest een week thuisblijven, maar ik vond het toch een mooie dag. Nu woon ik in een flat in Amsterdam en zie ik de zee bijna nooit. Luca woont nog steeds in het dorp. Als ik op vakantie ga, drinken we samen koffie, net als vroeger.",
  }),
  t("About me", {
    id: "eerste-dag-in-nederland",
    title: "Mijn eerste dag in Nederland",
    titleTranslation: "My first day in the Netherlands",
    form: "story",
    situation: "A blog for newcomers asks readers about their first day in the country. Tell yours (real or imagined).",
    points: [
      pf("Say when and how you arrived", "Ik kwam op … aan, met … .", "kwam", "aan"),
      pf("Say what you saw first", "Het eerste wat ik zag, was … .", "zag"),
      pf("Say what was strange", "Ik vond het raar dat … .", "raar", "vreemd"),
      pf("Say what went wrong", "Toen ging er iets mis: … .", "mis"),
      pf("Say who helped you", "Gelukkig hielp … me.", "hielp"),
      pf("Say how you felt at the end of the day", "'s Avonds voelde ik me … .", "voelde"),
    ],
    model:
      "Ik kwam op een regenachtige dinsdag in september aan, met het vliegtuig uit Madrid. Het eerste wat ik zag, was een enorme parkeerplaats vol fietsen bij het station. Ik had nog nooit zoveel fietsen bij elkaar gezien! Ik vond het ook raar dat iedereen om half zes al aan tafel zat en warm at. Toen ging er iets mis: mijn bankpas werkte niet in de automaat voor treinkaartjes. Ik stond daar met mijn koffer en ik wist niet wat ik moest doen. Gelukkig hielp een oudere mevrouw me. Ze legde in het Engels uit hoe ik een kaartje bij de balie kon kopen. Daarna nam ik de trein naar Leiden en vond ik mijn kamer. 's Avonds voelde ik me moe, maar ook blij en een beetje trots. Ik was er!",
  }),
  t("About me", {
    id: "wat-ik-later-wil",
    title: "Over vijf jaar",
    titleTranslation: "In five years",
    form: "description",
    situation: "Your mentor at the language school asks about your plans for the next five years. Write them down.",
    points: [
      pf("Say where you want to live", "Over vijf jaar wil ik in … wonen.", "wonen"),
      pf("Say what work you want to do", "Ik wil graag werken als … , want … .", "werken"),
      pf("Say what you want to learn", "Ik wil eerst … leren.", "leren"),
      pf("Say what you need to do for that", "Daarvoor moet ik … .", "daarvoor"),
      pf("Say what you're afraid of", "Ik ben bang dat … .", "bang"),
      pf("Say what you're looking forward to", "Ik kijk uit naar … .", "kijk"),
    ],
    model:
      "Over vijf jaar wil ik nog steeds in Nederland wonen, maar niet meer in een studentenkamer. Ik droom van een klein huis met een balkon in Utrecht of Haarlem. Ik wil graag werken als verpleegkundige in een ziekenhuis, want ik help graag mensen. In mijn land heb ik die opleiding al gedaan, maar hier is mijn diploma nog niet genoeg. Ik wil eerst goed Nederlands leren, tot niveau B2. Daarvoor moet ik elke dag oefenen en een staatsexamen doen. Ook moet ik nog een paar vakken opnieuw volgen. Ik ben bang dat het lang gaat duren en dat ik het examen niet haal. Maar ik heb ook veel zin in de toekomst. Ik kijk vooral uit naar mijn eerste werkdag, als ik met patiënten in het Nederlands kan praten.",
  }),

  // ---------- People ----------
  t("People", {
    id: "mijn-beste-vriendin",
    title: "Mijn beste vriendin",
    titleTranslation: "My best friend",
    form: "description",
    situation: "A magazine asks readers: tell us about a friend who matters to you.",
    points: [
      pf("Say who it is and how long you've known them", "… is al … jaar mijn beste vriend(in).", "jaar"),
      pf("Say how you met", "We hebben elkaar leren kennen op … .", "kennen"),
      pf("Describe what they look like", "Ze / Hij is … en heeft … .", "heeft"),
      pf("Describe their character", "Ze / Hij is heel … , maar soms … .", "eerlijk", "aardig", "lief"),
      pf("Say what you do together", "Samen … we vaak … .", "samen"),
      pf("Say why they matter to you", "Ze / Hij is belangrijk voor me, omdat … .", "belangrijk"),
    ],
    model:
      "Fatima is al twaalf jaar mijn beste vriendin. We hebben elkaar leren kennen op de middelbare school in Rotterdam. We zaten naast elkaar bij scheikunde en we snapten er allebei niets van. Fatima is klein en heeft lang zwart haar, dat ze meestal in een knot draagt. Ze lacht heel hard, zo hard dat mensen in de trein omkijken. Ze is heel eerlijk en soms een beetje ongeduldig, maar ze vergeet nooit een verjaardag. Samen gaan we vaak op zondag wandelen langs de Maas, en een keer per maand koken we voor elkaar. Zij maakt de beste couscous die ik ken. Ze woont nu in Groningen, dus we bellen veel. Ze is belangrijk voor me, omdat ze me altijd de waarheid zegt, ook als ik die niet wil horen.",
  }),

  // ---------- Daily life ----------
  t("Daily life", {
    id: "een-slechte-dag",
    title: "Een slechte dag",
    titleTranslation: "A bad day",
    form: "diary",
    situation: "Write in your diary about a day when everything went wrong.",
    points: [
      pf("Say what happened in the morning", "Vanochtend … .", "vanochtend"),
      pf("Say what went wrong at work or school", "Op mijn werk / school ging … mis.", "werk", "school"),
      pf("Say how you reacted", "Ik werd heel … .", "werd"),
      pf("Say who you told", "Ik heb het aan … verteld.", "verteld"),
      pf("Say what made it a bit better", "Gelukkig … .", "gelukkig"),
      pf("Say what you'll do differently tomorrow", "Morgen ga ik … .", "morgen"),
    ],
    model:
      "Wat een dag! Vanochtend ging mijn wekker niet af en werd ik pas om half negen wakker. Ik had geen tijd voor ontbijt en ik ben in de regen naar het station gefietst. Natuurlijk was mijn trein net weg. Op mijn werk ging daarna alles mis. Ik was te laat voor een belangrijke vergadering en mijn laptop wilde niet opstarten. Ik werd heel zenuwachtig en ik zei bijna niets. In de pauze heb ik het aan mijn collega Sanne verteld. Zij lachte en zei dat zij zulke dagen ook kent. Gelukkig was de avond beter. Mijn huisgenoot had soep gemaakt en we hebben samen een film gekeken. Morgen ga ik twee wekkers zetten en neem ik een regenjas mee. En ik ga vroeg naar bed!",
  }),
  t("Daily life", {
    id: "klacht-over-een-pakket",
    title: "Een klacht over een pakket",
    titleTranslation: "A complaint about a parcel",
    form: "email",
    situation: "You ordered something online and it arrived broken. Write to the shop's customer service.",
    points: [
      pf("Say what you ordered and when", "Op … heb ik … besteld.", "besteld"),
      pf("Give your order number", "Mijn bestelnummer is … .", "bestelnummer"),
      pf("Say what the problem is", "Helaas … .", "helaas"),
      pf("Say what you already did", "Ik heb al … , maar … .", "al"),
      pf("Say what you want them to do", "Ik wil graag … . Kunt u … ?", "graag"),
      pf("Say how they can reach you", "U kunt me bereiken op … .", "bereiken"),
    ],
    model:
      "Geachte heer, mevrouw, op 3 november heb ik via uw website een koffiezetapparaat besteld. Mijn bestelnummer is 48213. Het pakket zou op 6 november komen, maar het kwam pas een week later. Helaas was de doos nat en het apparaat was kapot: de glazen kan was in drie stukken gebroken. Ik heb al foto's gemaakt en twee keer naar uw klantenservice gebeld, maar ik kreeg geen antwoord. Ik ben daarom erg teleurgesteld. Ik wil graag een nieuw apparaat, of mijn geld terug. Kunt u ook laten weten hoe ik het kapotte apparaat kan terugsturen? Ik wil daar niet voor betalen. U kunt me bereiken op 06 12345678 of op dit e-mailadres. Ik hoop snel iets van u te horen. Met vriendelijke groet, Amir Haddad",
  }),
  t("Daily life", {
    id: "fiets-gestolen",
    title: "Melding: fiets gestolen",
    titleTranslation: "Report: bike stolen",
    form: "form",
    situation: "Your bike was stolen. Fill in the box 'Wat is er gebeurd?' on the online report form, in full sentences.",
    points: [
      pf("Say when and where it happened", "Op … , tussen … en … , stond mijn fiets bij … .", "stond"),
      pf("Describe the bike", "Het is een … fiets van het merk … , met … .", "fiets"),
      pf("Say how it was locked", "De fiets stond op slot met … .", "slot"),
      pf("Say what you found when you came back", "Toen ik terugkwam, … .", "terugkwam"),
      pf("Say whether anyone saw anything", "Niemand heeft iets gezien. / … zag … .", "gezien", "zag"),
      pf("Say what you've done so far", "Ik heb al … .", "al"),
    ],
    model:
      "Op vrijdag 14 november, tussen negen uur en half zes, stond mijn fiets in het fietsenrek bij station Leiden Centraal, aan de kant van het centrum. Het is een zwarte damesfiets van het merk Gazelle, met een rood zadel en een mand voor op het stuur. Achterop zit een sticker van een voetbalclub. De fiets stond op slot met een ringslot en een kettingslot, maar hij stond niet vast aan het rek. Toen ik 's avonds terugkwam, was de fiets weg. Op de grond lag alleen een stuk van de ketting. Niemand heeft iets gezien, denk ik. Ik heb het aan de mensen van de fietsenstalling gevraagd, maar zij wisten van niets. Ik heb al op de website van het Fietsdepot gekeken, maar daar staat mijn fiets niet. Het framenummer is AB123456.",
  }),
  t("Daily life", {
    id: "fietsen-of-rijden",
    title: "Een autovrij centrum?",
    titleTranslation: "A car-free centre?",
    form: "opinion",
    situation: "The local paper asks readers: should the city centre be closed to cars? Write your opinion.",
    points: [
      pf("Say what you think", "Ik vind dat … .", "vind"),
      pf("Give a first reason", "Ten eerste … .", "eerste"),
      pf("Give a second reason", "Ten tweede … . Bovendien … .", "tweede", "bovendien"),
      pf("Say what people on the other side say", "Sommige mensen zeggen dat … .", "sommige"),
      pf("Answer them", "Maar … .", "maar"),
      pf("End with your conclusion", "Daarom … .", "daarom"),
    ],
    model:
      "Ik vind dat het centrum van onze stad autovrij moet worden. Ten eerste is het nu vaak gevaarlijk voor fietsers en kinderen. In de smalle straten rijden auto's en fietsen door elkaar, en dat gaat bijna elke week mis. Ten tweede is de lucht in het centrum vies. Zonder auto's wordt het stiller en gezonder. Bovendien hebben we dan meer ruimte voor bomen, bankjes en terrassen. Sommige mensen zeggen dat winkels klanten verliezen als auto's niet meer in het centrum kunnen komen. Maar in veel steden zie je het omgekeerde: als de straten rustiger zijn, blijven mensen langer en kopen ze meer. Voor ouderen en mensen met een beperking moeten er natuurlijk goede bussen en parkeerplaatsen vlak bij het centrum zijn. Daarom zeg ik: maak het centrum autovrij, maar doe het slim.",
  }),

  // ---------- Home ----------
  t("Home", {
    id: "een-kamer-huren",
    title: "Een kamer huren",
    titleTranslation: "Renting a room",
    form: "email",
    situation: "You found an ad for a room. Write to the landlord.",
    points: [
      pf("Say where you saw the ad", "Ik zag uw advertentie op … .", "advertentie"),
      pf("Say who you are and what you do", "Ik ben … , ik … .", "ben"),
      pf("Say why the room suits you", "De kamer lijkt me … , omdat … .", "omdat"),
      pf("Ask about the rent and costs", "Hoeveel is de huur, inclusief … ?", "huur"),
      pf("Ask one more question", "Mag ik … ? / Moet ik … ?", "mag", "moet"),
      pf("Ask to come and see it", "Kan ik de kamer komen bekijken?", "bekijken"),
    ],
    model:
      "Beste meneer De Vries, ik zag uw advertentie op Kamernet voor de kamer aan de Hoge Rijndijk. Ik ben Sofia, ik ben vierentwintig jaar en ik kom uit Portugal. Ik doe een master Biologie aan de Universiteit Leiden en ik werk twee avonden per week in een café. De kamer lijkt me perfect, omdat hij dicht bij de universiteit ligt en veel licht heeft. Ik ben rustig, ik rook niet en ik houd de keuken graag schoon. Hoeveel is de huur precies, inclusief gas, water en licht? En moet ik een borg betalen? Mag ik ook mijn fiets binnen zetten? Ik heb hem namelijk elke dag nodig. Kan ik de kamer deze week komen bekijken? Ik heb tijd op woensdag en vrijdag na vier uur. Met vriendelijke groet, Sofia Pereira",
  }),
  t("Home", {
    id: "feestje-briefje-buren",
    title: "Een briefje voor de buren",
    titleTranslation: "A note for the neighbours",
    form: "message",
    situation: "You're having a birthday party on Saturday. Write the note you'll put in your neighbours' letterboxes.",
    points: [
      pf("Say who you are", "Wij zijn … van nummer … .", "nummer"),
      pf("Say what's happening and when", "Op … geven we een feestje.", "feestje"),
      pf("Say until what time", "Het duurt tot ongeveer … .", "duurt"),
      pf("Apologise for the noise", "Sorry als het … wordt.", "sorry"),
      pf("Invite them", "Jullie zijn ook welkom!", "welkom"),
      pf("Say what to do if it's too loud", "Is het te hard? Bel dan … .", "bel"),
    ],
    model:
      "Beste buren, wij zijn Tom en Aylin van nummer 12, de bovenste verdieping. Op zaterdag 6 december word ik dertig, en daarom geven we 's avonds een feestje bij ons thuis. Er komen ongeveer twintig mensen. We beginnen om acht uur en het duurt tot ongeveer één uur 's nachts. Daarna gaat de muziek uit, dat beloven we. Sorry als het een beetje druk wordt op de trap en in de straat. We vragen onze vrienden om hun fietsen netjes neer te zetten. Jullie zijn natuurlijk ook welkom! Er is genoeg eten en drinken, en jullie hoeven niets mee te nemen. Is het te hard? Bel dan gewoon aan, of stuur een berichtje naar 06 98765432. Dan zetten we de muziek meteen zachter. Groetjes, Tom en Aylin",
  }),
  t("Home", {
    id: "verhuisdag",
    title: "Verhuisdag",
    titleTranslation: "Moving day",
    form: "diary",
    situation: "You moved into a new place today. Write about the day in your diary.",
    points: [
      pf("Say where you moved from and to", "Vandaag ben ik verhuisd van … naar … .", "verhuisd"),
      pf("Say who helped you", "… hielpen me met … .", "hielpen", "hielp"),
      pf("Say what was hardest", "Het moeilijkste was … .", "moeilijkste"),
      pf("Say what went wrong", "Helaas … .", "helaas"),
      pf("Describe the new place", "Mijn nieuwe … is … , met … .", "nieuwe"),
      pf("Say how you feel tonight", "Nu ben ik … , maar … .", "nu"),
    ],
    model:
      "Vandaag ben ik eindelijk verhuisd, van mijn kleine studentenkamer in Delft naar een appartement in Den Haag. Mijn broer en twee vrienden hielpen me met de verhuizing. We hadden een busje gehuurd en om acht uur 's ochtends begonnen we met de dozen. Het moeilijkste was de bank. Mijn oude kamer was op de derde verdieping en de trap was heel smal. Na een uur lukte het eindelijk. Helaas ging er ook iets mis: een doos met borden viel uit het busje. Mijn nieuwe appartement is licht en rustig, met een kleine keuken en een balkon op het zuiden. Vanuit mijn raam zie ik een park. Nu ben ik moe en zit ik tussen de dozen op de grond, met een pizza. Maar ik ben ook heel blij. Morgen ga ik uitpakken.",
  }),

  // ---------- Food and shops ----------
  t("Food and shops", {
    id: "recept-uit-mijn-land",
    title: "Een recept uit mijn land",
    titleTranslation: "A recipe from my country",
    form: "description",
    situation: "Your Dutch class is making a cookbook. Write down a dish from your country or family.",
    points: [
      pf("Say what the dish is and where it's from", "… is een gerecht uit … .", "gerecht"),
      pf("Say when people eat it", "We eten het vaak … .", "eten"),
      pf("List what you need", "Voor … personen heb je nodig: … .", "nodig"),
      pf("Explain the first steps", "Eerst … je … .", "eerst"),
      pf("Explain how to finish it", "Daarna … . Tot slot … .", "daarna", "slot"),
      pf("Give a tip", "Tip: … .", "tip"),
    ],
    model:
      "Shakshuka is een gerecht uit Noord-Afrika en het Midden-Oosten. Mijn oma kwam uit Tunesië en zij maakte het elke zondag. We eten het vaak als ontbijt of als lunch, met vers brood. Voor vier personen heb je nodig: zes eieren, vier tomaten of een blik tomaten, twee paprika's, een ui, twee teentjes knoflook, olijfolie, komijn, paprikapoeder en zout. Eerst snijd je de ui, de knoflook en de paprika in kleine stukjes. Je bakt ze vijf minuten in olie in een grote pan. Daarna doe je de tomaten en de kruiden erbij en laat je alles tien minuten zachtjes koken. Tot slot maak je zes kuiltjes in de saus en breek je in elk kuiltje een ei. Doe een deksel op de pan en wacht ongeveer acht minuten. Tip: eet het direct uit de pan, met een stuk brood!",
  }),
  t("Food and shops", {
    id: "restaurantrecensie",
    title: "Een restaurantrecensie",
    titleTranslation: "A restaurant review",
    form: "opinion",
    situation: "You ate out last week. Write a review for a restaurant website.",
    points: [
      pf("Say where you went and with whom", "Vorige week ben ik met … naar … geweest.", "geweest"),
      pf("Describe the place", "Het restaurant is … : … .", "restaurant"),
      pf("Say what you ate", "Ik nam als voorgerecht … en als hoofdgerecht … .", "nam"),
      pf("Say what was good", "Het eten was … . De bediening was … .", "lekker", "vriendelijk"),
      pf("Say what could be better", "Minder goed was … .", "minder"),
      pf("Give a score and your advice", "Ik geef het een … , want … .", "geef"),
    ],
    model:
      "Vorige week ben ik met mijn vriendin naar De Smaak geweest, een klein Syrisch restaurant in de Breestraat. Het restaurant is gezellig en niet groot: er zijn maar tien tafels, met kaarsjes en mooie lampen. Er speelde rustige muziek op de achtergrond. Ik nam als voorgerecht hummus met warm brood en als hoofdgerecht kip met rijst en noten. Mijn vriendin koos een vegetarische schotel. Het eten was echt lekker en vers, en de porties waren groot. De bediening was ook heel vriendelijk: de ober legde elk gerecht uit. Minder goed was het wachten. We zaten bijna veertig minuten zonder eten, en de muziek werd later op de avond te hard. Het is ook niet goedkoop: we betaalden zeventig euro samen. Ik geef het een acht, want het eten maakt veel goed. Reserveer wel op tijd!",
  }),
  t("Food and shops", {
    id: "een-jas-ruilen",
    title: "Een jas ruilen",
    titleTranslation: "Exchanging a coat",
    form: "email",
    situation: "You bought a coat online and it doesn't fit. Write to the shop to exchange it.",
    points: [
      pf("Say what you bought and when", "Vorige week heb ik … gekocht.", "gekocht"),
      pf("Say what's wrong with it", "Helaas is hij te … .", "te"),
      pf("Say what you'd like instead", "Ik wil hem graag ruilen voor … .", "ruilen"),
      pf("Ask how to send it back", "Hoe kan ik … terugsturen?", "terugsturen"),
      pf("Ask about the cost", "Moet ik iets betalen voor … ?", "betalen"),
      pf("Thank them and sign off", "Alvast bedankt voor … .", "bedankt"),
    ],
    model:
      "Beste klantenservice, vorige week heb ik in uw webwinkel een blauwe winterjas gekocht, in maat M. Mijn bestelnummer is 77301. De jas is mooi en warm, maar helaas is hij te klein. De mouwen zijn te kort en ik kan hem niet goed dichtdoen als ik een trui draag. Ik wil hem graag ruilen voor dezelfde jas in maat L. Als die maat er niet meer is, wil ik graag mijn geld terug. Hoe kan ik de jas terugsturen? Moet ik zelf een label printen, of krijg ik een label van u? Ik heb de jas niet gedragen en het kaartje zit er nog aan. Moet ik ook iets betalen voor het terugsturen? Op uw website staat daar niets over. Alvast bedankt voor uw hulp. Met vriendelijke groet, Jonas Weber",
  }),

  // ---------- Out and about ----------
  t("Out and about", {
    id: "verdwaald",
    title: "Verdwaald",
    titleTranslation: "Lost",
    form: "story",
    situation: "Write a short story for your class about a time you got lost.",
    points: [
      pf("Say where you were going", "Ik wilde naar … .", "wilde"),
      pf("Say what went wrong", "Maar na … was … .", "maar"),
      pf("Say where you ended up", "Ik stond ineens in … .", "ineens"),
      pf("Say who you asked for help", "Ik vroeg … de weg.", "vroeg"),
      pf("Say how you got there in the end", "Uiteindelijk … .", "uiteindelijk"),
      pf("Say what you do differently since then", "Sindsdien … ik altijd … .", "sindsdien"),
    ],
    model:
      "Vorig jaar wilde ik op een zondag naar de verjaardag van een collega in Rotterdam. Ik kende de stad nog niet goed, maar ik had het adres in mijn telefoon. Maar na tien minuten was mijn batterij leeg. Ik liep verder en ik dacht dat ik de weg nog wist. Na een half uur stond ik ineens in een grote haven, tussen containers en vrachtwagens, en er was niemand. Het begon ook nog te regenen. Bij een bushalte zag ik eindelijk een man met een hond. Ik vroeg hem de weg en hij lachte: ik was helemaal de verkeerde kant op gelopen. Hij bracht me naar de tram en legde uit waar ik moest uitstappen. Uiteindelijk kwam ik anderhalf uur te laat op het feest, nat maar blij. Sindsdien neem ik altijd een powerbank mee.",
  }),
  t("Out and about", {
    id: "uitje-met-collegas",
    title: "Een uitje met collega's",
    titleTranslation: "A day out with colleagues",
    form: "email",
    situation: "You're organising a team day out. Write the email to your colleagues.",
    points: [
      pf("Say what the plan is", "Op … gaan we … .", "gaan"),
      pf("Say where and when you meet", "We verzamelen om … bij … .", "verzamelen"),
      pf("Say what the programme is", "Eerst … . Daarna … .", "eerst", "daarna"),
      pf("Say what people need to bring", "Neem … mee, want … .", "mee"),
      pf("Ask about food wishes", "Eet je geen vlees of heb je een allergie? Laat het me dan weten.", "allergie", "vlees"),
      pf("Ask them to reply by a date", "Wil je voor … laten weten of je komt?", "komt"),
    ],
    model:
      "Hoi allemaal, het is bijna zover: op vrijdag 12 juni gaan we met het hele team een dag op stap! Dit jaar gaan we naar de Biesbosch, een natuurgebied bij Dordrecht. We verzamelen om half tien bij het kantoor. Daar staat een bus klaar, die ons in een uur naar het water brengt. Eerst gaan we twee uur kanoën met een gids. Daarna lunchen we op een terras bij het water, en 's middags maken we een fietstocht door de polder. Rond zes uur zijn we weer terug op kantoor. Neem makkelijke kleren, extra sokken en een regenjas mee, want je wordt waarschijnlijk nat! Eet je geen vlees of heb je een allergie? Laat het me dan weten. Wil je voor 1 juni laten weten of je komt? Ik heb er heel veel zin in! Groetjes, Noor",
  }),
  t("Out and about", {
    id: "ik-ben-te-laat",
    title: "Ik ben te laat",
    titleTranslation: "I'm running late",
    form: "message",
    situation: "Your train is stuck. Send a message to the friend you're meeting for dinner.",
    points: [
      pf("Say where you are and what happened", "Ik zit in de trein bij … , en … .", "trein"),
      pf("Say how late you'll be", "Ik denk dat ik ongeveer … te laat ben.", "laat"),
      pf("Ask them to do something meanwhile", "Wil jij alvast … ?", "alvast"),
      pf("Say what to order for you", "Bestel voor mij maar … .", "bestel"),
      pf("Offer another plan", "Als het te laat wordt, kunnen we ook … .", "als"),
      pf("Apologise and make it up to them", "Sorry! Ik trakteer op … .", "sorry"),
    ],
    model:
      "Hé Lotte, slecht nieuws! Ik zit in de trein bij Schiphol en we staan al twintig minuten stil. Er is een storing bij Amsterdam Centraal, zegt de conducteur, en niemand weet hoe lang het duurt. Ik denk dat ik ongeveer een uur te laat ben, misschien meer. Wil jij alvast naar het restaurant gaan en aan onze tafel gaan zitten? Dan raken we de reservering niet kwijt. Bestel voor mij maar een glas witte wijn en de soep van de dag, die neem ik toch altijd. Als het te laat wordt, kunnen we ook een andere avond afspreken. Dan gaan we bijvoorbeeld volgende week vrijdag. Zeg het maar, ik vind alles goed. Sorry, sorry, sorry! Ik trakteer op het toetje. Ik stuur je een bericht als we weer rijden. Kusjes, Mila",
  }),

  // ---------- Work and study ----------
  t("Work and study", {
    id: "sollicitatie-bijbaan",
    title: "Een sollicitatie voor een bijbaan",
    titleTranslation: "Applying for a part-time job",
    form: "email",
    situation: "A bakery is looking for weekend staff. Write to apply.",
    points: [
      pf("Say which job you're applying for", "Ik reageer op uw vacature voor … .", "vacature"),
      pf("Say who you are", "Ik ben … , ik ben … jaar en ik … .", "ben"),
      pf("Say what experience you have", "Ik heb al … gewerkt als … .", "gewerkt"),
      pf("Say why you want this job", "Ik wil graag bij u werken, omdat … .", "omdat"),
      pf("Say when you can work", "Ik kan werken op … .", "kan"),
      pf("Ask for an interview", "Ik kom graag langs voor een gesprek.", "gesprek"),
    ],
    model:
      "Geachte mevrouw Bakker, ik reageer op uw vacature voor een medewerker in het weekend. Ik zag de advertentie gisteren in het raam van uw bakkerij. Ik ben Diego Fernández, ik ben eenentwintig jaar en ik studeer Bouwkunde in Delft. Ik woon sinds een jaar in Nederland en ik spreek Spaans, Engels en een beetje Nederlands. Ik heb al twee zomers gewerkt als verkoper in een bakkerij in Sevilla. Daar heb ik geleerd hoe je snel en vriendelijk klanten helpt, ook als het druk is. Ik wil graag bij u werken, omdat ik van brood houd en omdat ik zo meer Nederlands kan spreken. Ik kan werken op zaterdag en zondag, en in de vakanties ook doordeweeks. Ik kom graag langs voor een gesprek. U kunt me bellen op 06 11223344. Met vriendelijke groet, Diego Fernández",
  }),
  t("Work and study", {
    id: "vrij-vragen",
    title: "Vrij vragen",
    titleTranslation: "Asking for time off",
    form: "email",
    situation: "Write to your manager to ask for a few days off.",
    points: [
      pf("Say which days you want off", "Ik wil graag vrij van … tot en met … .", "vrij"),
      pf("Give the reason", "Mijn … , en daarom … .", "daarom"),
      pf("Say how your work will be ready", "Mijn werk voor … is dan … .", "klaar"),
      pf("Say who can take over", "… kan … van mij overnemen.", "overnemen"),
      pf("Say whether you're reachable", "Ik ben in die dagen (niet) bereikbaar … .", "bereikbaar"),
      pf("Ask for an answer", "Kun je / Kunt u me laten weten of … ?", "weten"),
    ],
    model:
      "Beste Mark, ik wil graag vrij van donderdag 15 tot en met dinsdag 20 mei. Mijn zus gaat in Marokko trouwen, en daarom wil ik met mijn familie een paar dagen naar Casablanca. Ik heb nog genoeg vakantiedagen over dit jaar. Mijn werk voor het project met de gemeente is dan bijna klaar: het rapport stuur ik voor woensdag 14 mei. De vergadering met de klant op maandag kan Esther van mij overnemen. Zij kent het project goed en ik heb het al met haar besproken. Ik ben in die dagen niet bereikbaar per mail, maar in een noodgeval kun je me bellen of een berichtje sturen. Kun je me deze week laten weten of het goed is? Dan kan ik de tickets boeken. Alvast bedankt! Groet, Youssef",
  }),
  t("Work and study", {
    id: "evaluatie-cursus",
    title: "Evaluatie van de cursus",
    titleTranslation: "Course feedback form",
    form: "form",
    situation: "Your Dutch course is ending. Fill in the open questions of the feedback form.",
    points: [
      pf("Say what you liked most", "Het leukste vond ik … .", "leukste"),
      pf("Say what you learned", "Ik heb geleerd om … .", "geleerd"),
      pf("Say what was difficult", "Moeilijk vond ik … .", "moeilijk"),
      pf("Say what could be better", "Het zou beter zijn als … .", "beter"),
      pf("Say how you'll keep practising", "Na de cursus ga ik … .", "na"),
      pf("Say whether you'd recommend it", "Ik zou de cursus (niet) aanraden, want … .", "aanraden"),
    ],
    model:
      "Het leukste vond ik de gesprekken in kleine groepjes. We praatten over echte dingen, zoals onze buren, ons werk en het Nederlandse eten, en ik durfde steeds meer te zeggen. Ik heb geleerd om een afspraak te maken bij de huisarts, een formulier in te vullen en een mail aan mijn baas te schrijven. Moeilijk vond ik de woordvolgorde, vooral in lange zinnen. Ook de uitspraak van de g en de ui blijft lastig. Het zou beter zijn als we meer luisteroefeningen hadden met gewone mensen, niet alleen met acteurs. Soms gingen de lessen ook te snel. Na de cursus ga ik elke week naar het taalcafé in de bibliotheek en ik lees elke dag een artikel op een nieuwssite. Ik zou de cursus zeker aanraden, want de docent was geduldig en de groep was heel gezellig.",
  }),

  // ---------- Health ----------
  t("Health", {
    id: "afspraak-huisarts",
    title: "Een afspraak bij de huisarts",
    titleTranslation: "An appointment with the GP",
    form: "email",
    situation: "Your knee has hurt for weeks. Write to your GP's practice through their online form to ask for an appointment.",
    points: [
      pf("Say who you are", "Mijn naam is … , geboren op … .", "naam"),
      pf("Say what's wrong", "Ik heb sinds … last van … .", "last"),
      pf("Say how it started and how it is now", "Het is begonnen … . Nu … .", "begonnen"),
      pf("Say what you've tried", "Ik heb al … geprobeerd, maar … .", "geprobeerd"),
      pf("Ask for an appointment", "Kan ik een afspraak maken met … ?", "afspraak"),
      pf("Say when you can come", "Ik kan … .", "kan"),
    ],
    model:
      "Beste assistente, mijn naam is Elena Popescu, geboren op 12 maart 1995. Ik ben patiënt bij dokter Van Dam. Ik heb sinds ongeveer twee weken last van mijn rechterknie. Het is begonnen na een lange wandeling in de duinen. Eerst deed het alleen een beetje pijn, maar nu wordt het erger. Traplopen doet pijn en 's nachts word ik soms wakker van de pijn. De knie is ook een beetje dik. Ik heb al paracetamol geprobeerd en ik heb ijs op mijn knie gelegd, maar het helpt niet genoeg. Ik sport nu ook niet meer. Kan ik een afspraak maken met dokter Van Dam? Het is niet heel dringend, maar ik wil graag weten wat het is. Ik kan elke ochtend voor tien uur, en op vrijdag de hele dag. Met vriendelijke groet, Elena Popescu",
  }),
  t("Health", {
    id: "gezond-leven",
    title: "Gezond leven",
    titleTranslation: "Living healthily",
    form: "description",
    situation: "A health magazine asks readers: what do you do to stay healthy? Write your answer, honestly.",
    points: [
      pf("Say what you eat on a normal day", "Op een gewone dag eet ik … .", "eet"),
      pf("Say how you move", "Ik beweeg vooral door te … .", "beweeg"),
      pf("Say how you sleep", "Ik slaap meestal … , maar … .", "slaap"),
      pf("Say what isn't so healthy", "Niet zo gezond is … .", "gezond"),
      pf("Say how you relax", "Ik ontspan door … .", "ontspan"),
      pf("Say what you want to change", "Vanaf … wil ik … .", "wil"),
    ],
    model:
      "Op een gewone dag eet ik vrij gezond. 's Ochtends neem ik yoghurt met fruit en havermout, en 's middags een boterham met kaas en een salade. 's Avonds kook ik meestal zelf, met veel groente. Ik beweeg vooral door te fietsen: elke dag fiets ik twintig minuten naar mijn werk en weer terug. Op zaterdag zwem ik met een vriendin. Ik slaap meestal zeven uur, maar door de week ga ik vaak te laat naar bed. Niet zo gezond is mijn telefoon. Ik kijk 's avonds in bed nog lang naar filmpjes. Ook drink ik te veel koffie op mijn werk, soms wel vijf koppen. Ik ontspan door te wandelen in het bos of door naar muziek te luisteren. Vanaf volgende maand wil ik mijn telefoon om tien uur uitzetten en meer water drinken.",
  }),

  // ---------- Free time ----------
  t("Free time", {
    id: "mijn-mooiste-vakantie",
    title: "Mijn mooiste vakantie",
    titleTranslation: "My best holiday",
    form: "story",
    situation: "Write about your best holiday ever for the class blog.",
    points: [
      pf("Say where and when you went", "… jaar geleden ging ik naar … .", "geleden"),
      pf("Say who you went with and how", "Ik ging met … , met de … .", "ging"),
      pf("Say where you stayed", "We sliepen in … .", "sliepen"),
      pf("Say what you did", "We hebben veel … .", "hebben"),
      pf("Tell the best moment", "Het mooiste moment was … .", "mooiste"),
      pf("Say why you'll never forget it", "Ik vergeet het nooit, omdat … .", "vergeet"),
    ],
    model:
      "Drie jaar geleden ging ik in de zomer naar Noorwegen. Ik ging met mijn beste vriendin Hanna, met de auto en de boot. We sliepen in een klein tentje op campings, en twee nachten in een houten huisje aan een meer. We hebben veel gewandeld in de bergen en we hebben bijna elke dag in ijskoud water gezwommen. We kookten op een klein gasstelletje en aten heel veel pasta. Het mooiste moment was de laatste avond. We zaten om elf uur 's avonds op een rots boven een fjord en het was nog steeds licht. Er was niemand, alleen wij, de bergen en het water. Hanna en ik zeiden een uur lang niets. Ik vergeet het nooit, omdat ik me daar zo vrij en rustig voelde. Volgend jaar gaan we terug, dat hebben we toen beloofd.",
  }),
  t("Free time", {
    id: "koningsdag",
    title: "Koningsdag",
    titleTranslation: "King's Day",
    form: "diary",
    situation: "It's 27 April. Write in your diary about your first Koningsdag.",
    points: [
      pf("Say where you were and with whom", "Vandaag was ik in … , samen met … .", "samen"),
      pf("Describe what you saw", "Overal … .", "overal"),
      pf("Say what you bought or sold", "Op de vrijmarkt heb ik … .", "vrijmarkt"),
      pf("Say what you ate and drank", "We aten … en we dronken … .", "aten", "dronken"),
      pf("Say what surprised you", "Het verbaasde me dat … .", "verbaasde"),
      pf("Say whether you'll do it again", "Volgend jaar … .", "volgend"),
    ],
    model:
      "Vandaag was ik voor het eerst op Koningsdag in Utrecht, samen met mijn huisgenoten. Overal in de stad was het oranje: mensen droegen oranje hoeden, sjaals en zelfs oranje pruiken, en aan de huizen hingen vlaggen. In de grachten voeren boten met muziek. Op de vrijmarkt heb ik een oude lamp en drie boeken voor vijf euro gekocht. Mijn huisgenoot verkocht haar oude kleren en verdiende bijna veertig euro! We aten poffertjes en tompoezen, en 's middags dronken we een biertje op een terras. Het verbaasde me dat kinderen op straat muziek maakten of spelletjes deden voor geld. Een klein meisje speelde viool, heel mooi. Het verbaasde me ook hoe vriendelijk iedereen was, ondanks de drukte. Volgend jaar ga ik zeker weer, en dan verkoop ik zelf ook spullen!",
  }),
  t("Free time", {
    id: "een-boekentip",
    title: "Een boekentip",
    titleTranslation: "A book tip",
    form: "opinion",
    situation: "A book club website asks readers to recommend a book or film they loved. Write yours.",
    points: [
      pf("Say what it is and who made it", "Mijn tip is … , een boek / film van … .", "boek", "film"),
      pf("Say what it's about", "Het gaat over … .", "gaat"),
      pf("Say who the main character is", "De hoofdpersoon is … .", "hoofdpersoon"),
      pf("Say what you liked", "Ik vond het mooi dat … .", "mooi"),
      pf("Say what you liked less", "Minder leuk vond ik … .", "minder"),
      pf("Say who should read or watch it", "Ik raad het aan voor mensen die … .", "raad"),
    ],
    model:
      "Mijn tip is De Tweeling, een boek van Tessa de Loo. Er is ook een film van gemaakt, maar het boek is beter. Het gaat over twee zussen, een tweeling, die na de dood van hun ouders uit elkaar gaan. Lotte groeit op in Nederland en Anna in Duitsland. Tijdens de oorlog leven ze aan verschillende kanten. Jaren later ontmoeten ze elkaar als oude vrouwen in een hotel in België. De hoofdpersoon is eigenlijk allebei: je leest steeds een stuk van het verhaal van de ene zus en dan van de andere. Ik vond het mooi dat je beide zussen begrijpt, ook als ze boos op elkaar zijn. Minder leuk vond ik het begin. Het is lang en er gebeurt weinig. Ik raad het aan voor mensen die van geschiedenis houden en van lange verhalen over families.",
  }),
];
