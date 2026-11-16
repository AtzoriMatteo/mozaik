/**
 * From the second half of A2, writing instructions move into Dutch, with the
 * English underneath (see guidanceFor). Written with words taught by then;
 * the "taught so far" test checks them like any other production text.
 */
export const writingTargetA2: Record<string, { situation: string; prompts: string[] }> = {
  // Unit 6: Nieuws en media
  "w-reactie-op-nieuws": {
    situation: "Jouw stad wil het centrum sluiten voor auto's. Schrijf een reactie onder het nieuwsbericht.",
    prompts: [
      "Zeg waar het nieuws over gaat.",
      "Geef je mening.",
      "Geef een reden, met omdat of want.",
      "Zeg wat je niet weet: Ik vraag me af of …",
      "Vergelijk met vroeger of met een andere stad, met toen of als.",
      "Geef een tip en sluit af.",
    ],
  },
  "w-hoe-volg-ik-het-nieuws": {
    situation: "Een website voor mensen die een taal leren, vraagt: hoe volg jij het nieuws, en hoe was dat toen je jonger was?",
    prompts: [
      "Zeg hoe je nu het nieuws volgt.",
      "Zeg wanneer en hoe vaak.",
      "Zeg hoe het was toen je jonger was, met toen.",
      "Zeg wat je doet als je iets niet begrijpt, met als.",
      "Zeg over welk nieuws je graag leest, met omdat of want.",
      "Zeg of je Nederlands nieuws volgt, en hoe.",
    ],
  },
  "w-bericht-in-de-buurtapp": {
    situation: "Je hebt iets gevonden in je straat, of je hebt hulp nodig van je buren. Schrijf een bericht in de buurtapp.",
    prompts: [
      "Groet je buren.",
      "Zeg wie je bent en waar je woont.",
      "Zeg wat je hebt gevonden of wat het probleem is.",
      "Stel een vraag: Weet iemand of …? Weet iemand van wie …?",
      "Zeg waar mensen je kunnen vinden.",
      "Bedank je buren.",
    ],
  },
  // Unit 7: Meedoen
  "w-vrijwilliger-worden": {
    situation: "Je wilt graag vrijwilliger worden, bij de voedselbank of de bibliotheek. Schrijf een mail: je wilt graag helpen.",
    prompts: [
      "Begin je mail.",
      "Zeg wie je bent.",
      "Zeg waarom je vrijwilliger wilt worden, met om … te.",
      "Zeg wat je kunt doen.",
      "Zeg wanneer je tijd hebt.",
      "Vraag wat de volgende stap is, en sluit af.",
    ],
  },
  "w-mijn-eerste-weken": {
    situation: "Schrijf over je eerste weken in een nieuwe stad of een nieuw land: wat moest je regelen, en hoe ging het?",
    prompts: [
      "Zeg wanneer en waar je aankwam.",
      "Zeg wat je moest regelen.",
      "Gebruik woorden als: ingeschreven, opgebeld, opgehaald.",
      "Zeg wat moeilijk was.",
      "Zeg wie je heeft geholpen.",
      "Zeg hoe je je nu voelt.",
    ],
  },
  "w-lid-worden": {
    situation: "Je wilt lid worden van een team, een koor of iets anders. Schrijf een mail met je vragen.",
    prompts: [
      "Begin je mail.",
      "Zeg wie je bent en over welk team of koor je schrijft.",
      "Zeg waarom je lid wilt worden, met om … te of omdat.",
      "Zeg welke ervaring je hebt.",
      "Vraag naar de tijden en de kosten.",
      "Vraag of je het eerst mag proberen, en sluit af.",
    ],
  },
  // Unit 8: Uit en cultuur
  "w-een-recensie": {
    situation: "Je ging naar een museum, een concert of een film. Schrijf een korte recensie voor een website.",
    prompts: [
      "Zeg waar je naartoe ging, en met wie.",
      "Zeg hoe het was.",
      "Zeg wat het mooiste was, met een woord als mooiste of leukste.",
      "Zeg wat minder goed was.",
      "Geef tips: de prijs, de tijd, hoe je er komt.",
      "Geef het sterren, met omdat of want.",
    ],
  },
  "w-samen-op-stap": {
    situation: "Je wilt iets leuks doen met vrienden of collega's. Schrijf een bericht en nodig ze uit.",
    prompts: [
      "Groet je vrienden.",
      "Zeg wat je wilt doen en waarom het een goed idee is.",
      "Zeg wanneer en waar jullie afspreken.",
      "Vergelijk de plannen, met een woord als goedkoopste of leukste.",
      "Zeg wat mensen moeten meenemen of betalen.",
      "Vraag of mensen het laten weten, en sluit af.",
    ],
  },
  "w-mijn-favoriete-plek": {
    situation: "Beschrijf je favoriete plek in je stad, voor een website voor nieuwe bewoners.",
    prompts: [
      "Zeg welke plek het is en waar die ligt.",
      "Beschrijf hoe het eruitziet.",
      "Zeg waarom het de fijnste plek is, met een woord als fijnste of mooiste.",
      "Zeg wat je daar doet.",
      "Zeg met wie je daar naartoe gaat, met van: de broer van mijn vriendin.",
      "Geef een tip voor bezoekers.",
    ],
  },
  // Unit 9: Koken en uit eten
  "w-mijn-recept": {
    situation: "Je taalcursus maakt een kookboek. Schrijf een simpel recept uit je land of je familie.",
    prompts: [
      "Zeg wat het gerecht is en waar het vandaan komt.",
      "Zeg voor hoeveel personen het is.",
      "Zeg wat je nodig hebt, met er: je hebt er zes nodig.",
      "Geef de stappen: Snijd …, Doe …, Bak …",
      "Zeg hoe lang het duurt.",
      "Zeg wanneer je het eet, en geef een tip.",
    ],
  },
  "w-klacht-bezorging": {
    situation: "Je hebt online eten of boodschappen besteld, maar er ging iets mis. Schrijf een mail naar de winkel.",
    prompts: [
      "Begin je mail.",
      "Zeg wat je hebt besteld, en wanneer.",
      "Zeg wat er misging.",
      "Gebruik er met een getal: er zaten er maar acht in.",
      "Vraag netjes wat de winkel kan doen, met zou.",
      "Sluit netjes af.",
    ],
  },
  "w-eten-bij-ons": {
    situation: "Vergelijk hoe en wanneer mensen eten in jouw land of je familie met wat je in Nederland ziet.",
    prompts: [
      "Zeg wat en wanneer mensen eten in jouw land of je familie.",
      "Zeg hoe het in Nederland anders is.",
      "Vergelijk, met woorden als later, meer of belangrijkste.",
      "Zeg hoe het gaat als je uit eten gaat of gasten hebt.",
      "Geef je mening, met omdat of want.",
      "Zeg wat je nu zelf ook doet, of nooit.",
    ],
  },
  // Unit 10: Water, weer en natuur
  "w-mijn-plannen": {
    situation: "Schrijf over je plannen voor volgend jaar: werk, studie, Nederlands en vrije tijd.",
    prompts: [
      "Zeg wat je met je Nederlands gaat doen.",
      "Zeg wat je gaat doen voor je werk of studie.",
      "Beloof iets, met zal: Ik zal …",
      "Zeg wat je plan is, met gaan.",
      "Zeg wanneer, hoe en waar in één zin.",
      "Zeg waar je de meeste zin in hebt, en waarom.",
    ],
  },
  "w-een-dag-in-de-natuur": {
    situation: "Vertel over een dag buiten: wandelen, fietsen, een dag aan zee of in het bos.",
    prompts: [
      "Zeg wanneer, waar en met wie.",
      "Zeg hoe je daar kwam.",
      "Zeg wanneer, hoe en waar in één zin.",
      "Beschrijf wat je zag.",
      "Beschrijf het weer.",
      "Zeg wat je aan het eind van de dag deed, en hoe je je voelde.",
    ],
  },
  "w-het-weer-bij-ons": {
    situation: "Een Nederlandse vriend vraagt hoe het weer en de seizoenen zijn in jouw land. Schrijf een bericht.",
    prompts: [
      "Groet je vriend.",
      "Beschrijf de seizoenen in jouw land.",
      "Vergelijk met Nederland.",
      "Zeg wat mensen doen bij dat weer.",
      "Zeg wat je van het Nederlandse weer vindt, met omdat of want.",
      "Zeg wanneer je het beste kunt komen, en sluit af.",
    ],
  },
};
