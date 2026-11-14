import type { GrammarPoint } from "@/core/content";
import { build, choice, example, fill, match, slots, sort, spot, table, text, transform } from "./helpers";

/**
 * Grammar the Italian course covers, in teaching order. A1 follows the usual
 * Italian A1 syllabus (Profilo della lingua italiana); every point is quoted
 * from the course and featured by at least one A1 text (checked by tests).
 */
export const grammar: readonly GrammarPoint[] = [
  /* ---------------- Unit 1: Ciao! ---------------- */
  {
    id: "essere",
    level: "A1",
    title: "essere: to be",
    summary: "sono, sei, è, siamo, siete, sono: Sono Emma. È di Bologna.",
    unit: "it-a1-ciao",
    lesson: {
      blocks: [
        text("essere is the most common verb in Italian, and it's irregular. Learn it as a little song: sono, sei, è, siamo, siete, sono."),
        table("essere, present", ["", "", "English"], ["io", "sono", "I am"], ["tu", "sei", "you are"], ["lui / lei / Lei", "è", "he / she is, you are (polite)"], ["noi", "siamo", "we are"], ["voi", "siete", "you are (plural)"], ["loro", "sono", "they are"]),
        text("You usually leave out io, tu, lui: the verb already says who. Sono Emma = I'm Emma. Sei italiana? = Are you Italian? Use the pronoun only to stress or contrast: Io sono irlandese, lui è inglese."),
        slots("Where you're from: essere + di + city", ["Giulia:who | è:verb* | di:from | Bologna", "Giulia is from Bologna."], ["Sono:verb* | di:from | Dublino", "I'm from Dublin."]),
        text("Careful with the accent: è (is) and e (and) are different words. Sono is both 'I am' and 'they are'; the context tells you which."),
      ],
      examples: [
        example("Emma è irlandese.", "Emma is Irish.", "è"),
        example("Sì, sono io! Tu sei Giulia?", "Yes, it's me! Are you Giulia?", "sono", "sei"),
        example("Karim è di Torino e studia ingegneria.", "Karim is from Turin and studies engineering.", "è di"),
        example("Sono qui da ottant'anni!", "I've been here for eighty years!", "Sono"),
      ],
      exercises: [
        fill("Emma ", " irlandese.", "è", "Emma is Irish."),
        fill("Io ", " di Dublino.", "sono", "I'm from Dublin."),
        fill("Tu ", " Giulia?", "sei", "Are you Giulia?"),
        fill("Noi ", " a Bologna.", "siamo", "We are in Bologna."),
        choice("Giulia e Karim ", " coinquilini.", ["sono", "siete", "è"], 0, "Giulia and Karim are flatmates."),
        choice("Voi ", " italiani?", ["siete", "siamo", "sono"], 0, "Are you (all) Italian?"),
        match("Match the person to the form.", "io=sono | tu=sei | lei=è | noi=siamo | voi=siete", "essere in the present."),
        spot("Karim e di Torino.", "e", "è", "Karim is from Turin."),
      ],
    },
  },
  {
    id: "tu-lei",
    level: "A1",
    title: "tu or Lei",
    summary: "tu with friends and family; Lei (with the verb's lui/lei form) with strangers: Come stai? / Come sta?",
    unit: "it-a1-ciao",
    lesson: {
      blocks: [
        text("Italian has two ways to say 'you' to one person. tu is informal: friends, family, children, people your age. Lei is polite: strangers, older people, shops, offices."),
        text("Lei takes the same verb form as lui and lei (he, she): Lei è italiana? = Are you Italian? That's why it often has a capital L in writing, to tell it from lei (she)."),
        table("The same question, two ways", ["tu (informal)", "Lei (polite)", "English"], ["Come stai?", "Come sta?", "How are you?"], ["Come ti chiami?", "Come si chiama?", "What's your name?"], ["Di dove sei?", "Di dov'è?", "Where are you from?"], ["Quanti anni hai?", "Quanti anni ha?", "How old are you?"], ["Ciao!", "Buongiorno! / Arrivederci!", "Hello! / Goodbye!"]),
        text("When someone says Diamoci del tu! or Ci diamo del tu?, they're inviting you to switch to tu. Older people often switch first; follow their lead."),
      ],
      examples: [
        example("Ciao, Giulia! Come stai?", "Hi, Giulia! How are you?", "stai"),
        example("Buongiorno! Come si chiama?", "Good morning! What's your name?", "si chiama"),
        example("Buongiorno! Lei è la nuova ragazza del terzo piano?", "Good morning! Are you the new girl on the third floor?", "Lei è"),
        example("Io sono Marco, e da oggi ci diamo del tu!", "I'm Marco, and from today we use tu!", "ci diamo del tu"),
      ],
      exercises: [
        choice("To your flatmate: Ciao, come ", "?", ["stai", "sta"], 0, "Hi, how are you?"),
        choice("To an older neighbour: Buongiorno, come ", "?", ["sta", "stai"], 0, "Good morning, how are you?"),
        transform("Make it polite (Lei).", "Come ti chiami?", "Come si chiama?", "What's your name?"),
        transform("Make it polite (Lei).", "Di dove sei?", ["Di dov'è?", "Di dove è?"], "Where are you from?"),
        transform("Make it informal (tu).", "Lei è inglese?", ["Sei inglese?", "Tu sei inglese?"], "Are you English?"),
        sort("tu or Lei?", ["tu", "Lei"], "Ciao, come stai?=0 | Buongiorno, come sta?=1 | Arrivederci, signora!=1 | Come ti chiami?=0 | Scusi!=1 | Scusa!=0", "Informal or polite?"),
        spot("Buongiorno, signora! Come stai?", "stai", "sta", "Good morning, madam! How are you?"),
      ],
    },
  },
  {
    id: "gender",
    level: "A1",
    title: "Masculine and feminine",
    summary: "Every noun is masculine or feminine: -o is usually masculine (il libro), -a feminine (la casa), -e either (il cane, la classe).",
    unit: "it-a1-ciao",
    lesson: {
      blocks: [
        text("Every Italian noun is masculine or feminine, even things. The ending is a strong clue."),
        table("The endings", ["Ending", "Usually", "Examples"], ["-o", "masculine", "il ragazzo, il giorno, il numero"], ["-a", "feminine", "la ragazza, la casa, la strada"], ["-e", "either: learn it", "il cane, il nome / la classe, la stazione"], ["-tà, -zione", "feminine", "la città, la stazione"], ["accented or foreign", "mostly masculine", "il caffè, il bar, il computer"]),
        text("A few famous exceptions: la mano (hand) is feminine, la foto and la moto too (short for fotografia, motocicletta)."),
        text("Adjectives follow the noun's gender: un ragazzo alto, una ragazza alta. Adjectives in -e stay the same: irlandese, inglese, grande."),
        slots("The adjective agrees", ["Giulia:she | è:is | alta:feminine*", "Giulia is tall."], ["il:the | cane:dog (m) | è:is | piccolo:masculine*", "The dog is small."]),
      ],
      examples: [
        example("Giulia è alta e simpatica.", "Giulia is tall and friendly.", "alta", "simpatica"),
        example("una strada vecchia e bella, con tanti bar", "an old, pretty street with lots of bars", "strada", "vecchia", "bella"),
        example("Il nono è il numero nove", "Nono is ninth", "il numero"),
      ],
      exercises: [
        sort("Masculine or feminine?", ["masculine", "feminine"], "ragazzo=0 | casa=1 | strada=1 | giorno=0 | stazione=1 | città=1 | caffè=0 | numero=0", "Look at the ending."),
        choice("Karim è ", ".", ["alto", "alta"], 0, "Karim is tall."),
        choice("Giulia è ", ".", ["simpatica", "simpatico"], 0, "Giulia is friendly."),
        choice("Emma è ", ".", ["irlandese", "irlandesa"], 0, "Emma is Irish (-e: the same for both)."),
        fill("Via del Pratello è una strada ", ".", "vecchia", "Via del Pratello is an old street.", "vecchio"),
        transform("Make it feminine.", "Il ragazzo è italiano.", "La ragazza è italiana.", "The girl is Italian."),
        spot("La mano è piccolo.", "piccolo", "piccola", "The hand is small (la mano is feminine!)."),
      ],
    },
  },

  /* ---------------- Unit 2: Piacere! ---------------- */
  {
    id: "avere",
    level: "A1",
    title: "avere: to have",
    summary: "ho, hai, ha, abbiamo, avete, hanno. Age uses avere: Ho ventisei anni.",
    unit: "it-a1-piacere",
    lesson: {
      blocks: [
        text("avere is the other key irregular verb. The h is never pronounced: ho sounds like 'o', hanno like 'anno'. It's only there to tell the words apart: ho (I have) vs o (or), ha (has) vs a (to)."),
        table("avere, present", ["", "", "English"], ["io", "ho", "I have"], ["tu", "hai", "you have"], ["lui / lei / Lei", "ha", "he / she has, you have"], ["noi", "abbiamo", "we have"], ["voi", "avete", "you have (plural)"], ["loro", "hanno", "they have"]),
        text("Where English uses 'to be', Italian often uses avere: age and feelings in your body."),
        table("avere, not 'to be'", ["Italian", "English"], ["Ho ventisei anni.", "I'm twenty-six."], ["Ho fame.", "I'm hungry."], ["Ho sete.", "I'm thirsty."], ["Ho freddo. / Ho caldo.", "I'm cold. / I'm hot."], ["Ho ragione.", "I'm right."]),
      ],
      examples: [
        example("Ho ventisei anni. E tu?", "I'm twenty-six. And you?", "Ho", "anni"),
        example("Non lavoro: ho tre figli!", "I don't work: I have three children!", "ho"),
        example("Emma, hai un numero italiano?", "Emma, do you have an Italian number?", "hai"),
        example("Ha fame!", "They're hungry!", "Ha fame"),
      ],
      exercises: [
        fill("Io ", " ventisei anni.", "ho", "I'm twenty-six."),
        fill("Karim ", " ventitré anni.", "ha", "Karim is twenty-three."),
        fill("Tu ", " un numero italiano?", "hai", "Do you have an Italian number?"),
        choice("Noi ", " due coinquilini.", ["abbiamo", "avete", "hanno"], 0, "We have two flatmates."),
        choice("Quanti anni ", " i gemelli?", ["hanno", "ha", "avete"], 0, "How old are the twins?"),
        spot("Sono ventisei anni.", "Sono", "Ho", "I'm twenty-six (age uses avere)."),
        transform("Say it in Italian, with avere.", "I'm hungry.", "Ho fame.", "Ho fame."),
        match("Match.", "io=ho | tu=hai | lui=ha | noi=abbiamo | loro=hanno", "avere in the present."),
      ],
    },
  },
  {
    id: "articles",
    level: "A1",
    title: "The articles: il, lo, la, l', un, una",
    summary: "il ragazzo, lo studente, l'amico, la casa; i, gli, le in the plural; un, uno, una, un'.",
    unit: "it-a1-piacere",
    lesson: {
      blocks: [
        text("Italian 'the' changes with gender, number, and the sound the next word starts with. It looks like a lot, but there's a clear system."),
        table("the", ["", "Singular", "Plural", "When"], ["masculine", "il", "i", "most consonants: il libro, i libri"], ["masculine", "lo", "gli", "s + consonant, z, gn, ps, y: lo studente, gli studenti"], ["masculine", "l'", "gli", "a vowel: l'amico, gli amici"], ["feminine", "la", "le", "consonants: la casa, le case"], ["feminine", "l'", "le", "a vowel: l'amica, le amiche"]),
        table("a, an", ["", "Article", "Example"], ["masculine", "un", "un caffè, un amico (no apostrophe!)"], ["masculine", "uno", "uno studente, uno zio"], ["feminine", "una", "una casa"], ["feminine, before a vowel", "un'", "un'amica, un'altra ragione"]),
        text("Italian uses 'the' more than English: for things in general (Gli italiani parlano con le mani), and before languages and possessives (l'italiano, la mia casa)."),
      ],
      examples: [
        example("Lunedì Emma comincia il corso di italiano.", "On Monday Emma starts her Italian course.", "il corso"),
        example("L'insegnante si chiama Lucia Bianchi.", "The teacher is called Lucia Bianchi.", "L'"),
        example("Gli italiani parlano con la voce, ma anche con le mani.", "Italians speak with their voice, but with their hands too.", "Gli", "la", "le"),
        example("Il primo è un ragazzo giapponese.", "The first is a Japanese man.", "un ragazzo"),
        example("Un'altra ragione è la televisione", "Another reason is television", "Un'"),
      ],
      exercises: [
        choice("", " studente è giapponese.", ["Lo", "Il", "La"], 0, "The student is Japanese."),
        choice("", " insegnante si chiama Lucia.", ["L'", "La", "Lo"], 0, "The teacher is called Lucia."),
        choice("", " italiani parlano con le mani.", ["Gli", "I", "Le"], 0, "Italians speak with their hands."),
        choice("Emma ha ", " amica a Bologna.", ["un'", "un", "una"], 0, "Emma has a (female) friend in Bologna."),
        choice("Vorrei ", " spritz.", ["uno", "un", "una"], 0, "I'd like a spritz."),
        sort("il or lo?", ["il", "lo"], "corso=0 | studente=1 | numero=0 | zio=1 | bar=0 | scontrino=1", "Look at the first sound."),
        fill("", " cappuccino è buono.", ["Il", "il"], "The cappuccino is good."),
        spot("Il studente è tedesco.", "Il", "Lo", "The student is German."),
      ],
    },
  },
  {
    id: "numbers",
    level: "A1",
    title: "Numbers 0–100",
    summary: "Tens first, then units, in one word: ventitré, trentun anni, quarantacinque.",
    unit: "it-a1-piacere",
    lesson: {
      blocks: [
        text("Learn 0–20 by heart, then the tens: venti, trenta, quaranta, cinquanta, sessanta, settanta, ottanta, novanta, cento."),
        table("Building numbers", ["Rule", "Example"], ["tens + units, one word", "venti + due = ventidue"], ["before uno and otto, drop the last vowel", "ventuno, ventotto, trentuno"], ["tre at the end gets an accent", "ventitré, trentatré"], ["before a noun, uno → un", "trentun anni"], ["before anni (a vowel), you can drop the vowel", "vent'anni, ottant'anni"]),
        text("Phone numbers are said in small groups of digits: tre quattro sette, uno due otto. Prices: un euro e venti = €1.20."),
      ],
      examples: [
        example("Mi chiamo Hiro, ho trentun anni e sono ingegnere.", "My name's Hiro, I'm thirty-one and I'm an engineer.", "trentun"),
        example("Ho quarantacinque anni.", "I'm forty-five.", "quarantacinque"),
        example("Io ho ventitré anni.", "I'm twenty-three.", "ventitré"),
        example("L'abbonamento costa quaranta euro al mese.", "Membership costs forty euros a month.", "quaranta"),
      ],
      exercises: [
        fill("23 = ", "", "ventitré", "twenty-three"),
        fill("21 = ", "", "ventuno", "twenty-one"),
        fill("45 = ", "", "quarantacinque", "forty-five"),
        fill("18 = ", "", "diciotto", "eighteen"),
        choice("Hiro ha ", " anni.", ["trentun", "trentuno", "trentauno"], 0, "Hiro is thirty-one."),
        match("Match.", "venti=20 | trenta=30 | quaranta=40 | cinquanta=50 | cento=100", "The tens."),
        spot("Karim ha ventitre anni.", "ventitre", "ventitré", "Karim is twenty-three (don't forget the accent)."),
      ],
    },
  },
  {
    id: "negation",
    level: "A1",
    title: "Saying no: non",
    summary: "Put non right before the verb: Non sono inglese. Non lavoro.",
    unit: "it-a1-piacere",
    lesson: {
      blocks: [
        text("To make a sentence negative, put non directly before the verb. Nothing else changes: no 'do' like in English."),
        slots(undefined, ["Non:not* | sono:verb | inglese", "I'm not English."], ["Ana:who | non:not* | lavora:verb", "Ana doesn't work."]),
        text("With mai (never) and niente (nothing), Italian keeps non too: Non mi annoio mai. Non capisco niente. Two negatives make a stronger 'no', not a 'yes'."),
        text("Answering: No, non sono inglese. The first no answers the question; non makes the verb negative."),
      ],
      examples: [
        example("No, non sono inglese, sono irlandese!", "No, I'm not English, I'm Irish!", "non sono"),
        example("Non lavoro: ho tre figli!", "I don't work: I have three children!", "Non lavoro"),
        example("I dialetti non sono un italiano sbagliato", "Dialects aren't wrong Italian", "non sono"),
        example("Il lavoro è faticoso, ma parlo con tutti e non mi annoio mai.", "The work is tiring, but I talk to everyone and I'm never bored.", "non", "mai"),
      ],
      exercises: [
        transform("Make it negative.", "Sono inglese.", "Non sono inglese.", "I'm not English."),
        transform("Make it negative.", "Ana lavora.", "Ana non lavora.", "Ana doesn't work."),
        transform("Make it negative.", "Karim studia medicina.", "Karim non studia medicina.", "Karim doesn't study medicine."),
        build("Emma | non | è | inglese", "Emma isn't English."),
        build("Non | mi | annoio | mai", "I'm never bored."),
        choice("I dialetti ", " un italiano sbagliato.", ["non sono", "sono non", "no sono"], 0, "Dialects aren't wrong Italian."),
        transform("Fix the word order.", "Io sono non italiana.", ["Io non sono italiana.", "Non sono italiana."], "I'm not Italian (non goes before the verb)."),
      ],
    },
  },

  /* ---------------- Unit 3: La famiglia ---------------- */
  {
    id: "possessives",
    level: "A1",
    title: "My, your, his: mio, tuo, suo",
    summary: "Possessives agree with the thing owned and take the article: la mia famiglia. Not with one family member: mio padre.",
    unit: "it-a1-famiglia",
    lesson: {
      blocks: [
        text("Italian possessives agree with the thing you own, not with the owner, and they usually come with the article: il mio cane, la mia casa."),
        table("Possessives", ["", "m. sing.", "f. sing.", "m. plural", "f. plural"], ["my", "il mio", "la mia", "i miei", "le mie"], ["your (tu)", "il tuo", "la tua", "i tuoi", "le tue"], ["his / her / your (Lei)", "il suo", "la sua", "i suoi", "le sue"], ["our", "il nostro", "la nostra", "i nostri", "le nostre"], ["your (voi)", "il vostro", "la vostra", "i vostri", "le vostre"], ["their", "il loro", "la loro", "i loro", "le loro"]),
        text("The family rule: with one family member in the singular, drop the article: mio padre, mia sorella, sua madre. In the plural, or with loro, it comes back: i miei fratelli, la loro madre. Mamma and papà usually keep it: la mia mamma."),
        text("suo means his and her: il suo ragazzo = her boyfriend or his boyfriend. The context tells you who."),
      ],
      examples: [
        example("Questa è la mia famiglia.", "This is my family.", "la mia"),
        example("Questo signore con la barba è mio padre, Paolo.", "This man with the beard is my father, Paolo.", "mio padre"),
        example("Sono i miei fratelli, Luca e Pietro.", "They're my brothers, Luca and Pietro.", "i miei"),
        example("È mia sorella Siobhan. Abita a Londra con il suo ragazzo.", "That's my sister Siobhan. She lives in London with her boyfriend.", "mia sorella", "il suo"),
      ],
      exercises: [
        choice("Questa è ", " famiglia.", ["la mia", "mia", "il mio"], 0, "This is my family."),
        choice("Questo è ", " padre.", ["mio", "il mio", "la mia"], 0, "This is my father."),
        choice("Sono ", " fratelli.", ["i miei", "miei", "le mie"], 0, "They're my brothers."),
        choice("Le ", " sorelle sono simpatiche.", ["mie", "miei", "mia"], 0, "My sisters are nice."),
        fill("Siobhan abita con il ", " ragazzo.", "suo", "Siobhan lives with her boyfriend."),
        transform("Say it with a possessive (my).", "la casa di Emma (Emma speaking)", "la mia casa", "my house"),
        transform("Drop the article where Italian does.", "La mia madre è infermiera.", "Mia madre è infermiera.", "My mother is a nurse."),
      ],
    },
  },
  {
    id: "adjective-agreement",
    level: "A1",
    title: "Adjective endings",
    summary: "Adjectives agree with the noun: alto, alta, alti, alte; grande, grandi. They usually come after it.",
    unit: "it-a1-famiglia",
    lesson: {
      blocks: [
        text("Adjectives change their ending to match the noun: masculine or feminine, singular or plural. Most come after the noun: una casa piccola, i capelli corti."),
        table("Two kinds of adjective", ["", "m. sing.", "f. sing.", "m. plural", "f. plural"], ["-o adjectives", "alto", "alta", "alti", "alte"], ["-e adjectives", "grande", "grande", "grandi", "grandi"]),
        text("Mixed groups use the masculine plural: Luca e Giulia sono simpatici. Adjectives in -co often go -ci for boys and -che for girls: simpatici, simpatiche."),
        text("A few short, common adjectives can go before the noun: una bella città, un piccolo bar, una grande famiglia."),
      ],
      examples: [
        example("Sono simpatici, ma un po' pigri!", "They're nice, but a bit lazy!", "simpatici", "pigri"),
        example("Le mie sorelle sono simpatiche, ma molto rumorose!", "My sisters are nice, but very loud!", "simpatiche", "rumorose"),
        example("È piccolo e grasso, come un tortellino!", "He's small and round, like a tortellino!", "piccolo", "grasso"),
        example("in una casa piccola con un giardino grande", "in a small house with a big garden", "piccola", "grande"),
      ],
      exercises: [
        choice("Le sorelle di Karim sono ", ".", ["rumorose", "rumorosi", "rumorosa"], 0, "Karim's sisters are loud."),
        choice("I gemelli sono ", ".", ["pigri", "pigre", "pigro"], 0, "The twins are lazy."),
        choice("La nonna è ", ".", ["attiva", "attivo", "attive"], 0, "Grandma is active."),
        fill("Gli affitti sono molto ", ".", "cari", "The rents are very expensive.", "caro"),
        fill("Le città italiane sono ", ".", "grandi", "Italian cities are big.", "grande"),
        transform("Make it plural.", "Il ragazzo è simpatico.", "I ragazzi sono simpatici.", "The boys are nice."),
        sort("Which noun does it fit?", ["il cane", "la casa"], "piccolo=0 | piccola=1 | vecchia=1 | grasso=0 | bella=1 | nero=0", "Masculine or feminine ending?"),
      ],
    },
  },
  {
    id: "plurals",
    level: "A1",
    title: "Plurals",
    summary: "-o → -i (libro, libri), -a → -e (casa, case), -e → -i (padre, padri). Accented and foreign words don't change.",
    unit: "it-a1-famiglia",
    lesson: {
      blocks: [
        text("Italian plurals change the last vowel. No -s!"),
        table("Plural endings", ["Singular", "Plural", "Examples"], ["-o", "-i", "il nonno → i nonni"], ["-a", "-e", "la sorella → le sorelle"], ["-e", "-i", "il genitore → i genitori, la lezione → le lezioni"], ["accented vowel", "no change", "la città → le città, il caffè → i caffè"], ["foreign word", "no change", "il bar → i bar, il computer → i computer"]),
        text("Spelling keeps the sound: amica → amiche, collega → colleghi (h keeps it hard). Some -co words go soft: amico → amici, simpatico → simpatici."),
        text("A few irregulars to learn: l'uomo → gli uomini, la mano → le mani, il dito → le dita, l'uovo → le uova."),
      ],
      examples: [
        example("Tutta la famiglia va a casa dei nonni: genitori, figli, zii e cugini.", "The whole family goes to the grandparents' house: parents, children, aunts and uncles, cousins.", "nonni", "genitori", "figli", "zii", "cugini"),
        example("Gli affitti nelle grandi città, come Milano, Roma o Bologna, sono molto cari.", "Rents in the big cities, like Milan, Rome or Bologna, are very expensive.", "affitti", "città", "cari"),
        example("le dita sono unite e la mano va su e giù", "the fingertips are together and the hand moves up and down", "dita"),
      ],
      exercises: [
        fill("un nonno, due ", "", "nonni", "one grandfather, two grandfathers"),
        fill("una sorella, due ", "", "sorelle", "one sister, two sisters"),
        fill("un genitore, due ", "", "genitori", "one parent, two parents"),
        fill("una città, due ", "", "città", "one city, two cities"),
        choice("Ci sono due ", " in via del Pratello.", ["bar", "bari", "bars"], 0, "There are two bars in Via del Pratello."),
        sort("Does it change in the plural?", ["changes", "stays the same"], "ragazzo=0 | caffè=1 | casa=0 | università=1 | computer=1 | strada=0", "Accented and foreign words don't change."),
        spot("Le amice di Giulia sono simpatiche.", "amice", "amiche", "Giulia's friends are nice."),
        transform("Make it plural.", "la mano", "le mani", "the hands"),
      ],
    },
  },

  /* ---------------- Unit 4: Al bar ---------------- */
  {
    id: "present-are",
    level: "A1",
    title: "Present tense: -are verbs",
    summary: "parlare → parlo, parli, parla, parliamo, parlate, parlano. Most Italian verbs end in -are.",
    unit: "it-a1-al-bar",
    lesson: {
      blocks: [
        text("Italian verbs fall into three groups by their infinitive: -are, -ere, -ire. The -are group is the biggest and the most regular. Take off -are and add the endings."),
        table("parlare (to speak)", ["", "ending", "form"], ["io", "-o", "parlo"], ["tu", "-i", "parli"], ["lui / lei / Lei", "-a", "parla"], ["noi", "-iamo", "parliamo"], ["voi", "-ate", "parlate"], ["loro", "-ano", "parlano"]),
        text("The stress stays on the stem in io, tu, lui and loro: PAR-lo, PAR-la-no. Spelling helps the sound: cercare → cerchi (h keeps the k sound), mangiare → mangi (no double i)."),
        text("The Italian present also covers 'I'm doing' and the near future: Parlo con Marco = I speak / I'm speaking with Marco. Domani lavoro = I'm working tomorrow."),
      ],
      examples: [
        example("Marco prepara il cappuccino e disegna un cuore nella schiuma.", "Marco makes the cappuccino and draws a heart in the foam.", "prepara", "disegna"),
        example("Mi chiamo Marco e lavoro al Bar Margherita da cinque anni.", "My name's Marco and I've been working at Bar Margherita for five years.", "lavoro"),
        example("Il pomeriggio i pensionati giocano a carte e parlano di calcio.", "In the afternoon pensioners play cards and talk about football.", "giocano", "parlano"),
        example("Emma paga alla cassa: due euro e settanta.", "Emma pays at the till: two euros seventy.", "paga"),
      ],
      exercises: [
        fill("Io ", " al bar da cinque anni.", "lavoro", "I've been working at the bar for five years.", "lavorare"),
        fill("Tu ", " inglese?", "parli", "Do you speak English?", "parlare"),
        fill("Marco ", " il cappuccino.", "prepara", "Marco makes the cappuccino.", "preparare"),
        fill("Noi ", " alla cassa.", "paghiamo", "We pay at the till.", "pagare"),
        fill("I pensionati ", " a carte.", "giocano", "The pensioners play cards.", "giocare"),
        choice("Voi ", " italiano?", ["parlate", "parliamo", "parlano"], 0, "Do you (all) speak Italian?"),
        match("Match.", "io=ordino | tu=ordini | lei=ordina | noi=ordiniamo | loro=ordinano", "ordinare (to order)."),
        spot("Tu pagi alla cassa.", "pagi", "paghi", "You pay at the till (keep the hard g)."),
      ],
    },
  },
  {
    id: "vorrei",
    level: "A1",
    title: "Vorrei: I'd like",
    summary: "Order and ask politely with vorrei + a noun or a verb: Vorrei un cappuccino. Vorrei fare l'iscrizione.",
    unit: "it-a1-al-bar",
    lesson: {
      blocks: [
        text("vorrei is the conditional of volere (to want): 'I would like'. It's the polite way to ask for anything, in a bar, a shop or an office. Voglio (I want) can sound rude."),
        slots("vorrei + something, or + a verb", ["Vorrei:I'd like* | un cappuccino", "I'd like a cappuccino."], ["Vorrei:I'd like* | fare:infinitive | l'iscrizione", "I'd like to sign up."]),
        table("Other polite ways to order", ["Italian", "English"], ["Per me un caffè, grazie.", "A coffee for me, thanks."], ["Prendo un cornetto.", "I'll have a croissant."], ["Mi dà uno scontrino?", "Could you give me a receipt?"], ["Posso pagare con la carta?", "Can I pay by card?"]),
        text("Add per favore or grazie and you'll sound perfectly natural."),
      ],
      examples: [
        example("Buongiorno. Vorrei un cappuccino e un cornetto, per favore.", "Good morning. I'd like a cappuccino and a croissant, please.", "Vorrei"),
        example("Io vorrei un cappuccino.", "I'd like a cappuccino.", "vorrei"),
        example("Buonasera. Vorrei fare l'iscrizione.", "Good evening. I'd like to sign up.", "Vorrei fare"),
      ],
      exercises: [
        choice("Al bar: ", " un caffè, per favore.", ["Vorrei", "Voglio", "Vuoi"], 0, "I'd like a coffee, please."),
        fill("", " un cornetto alla crema, per favore.", ["Vorrei", "vorrei"], "I'd like a custard croissant, please."),
        transform("Make it polite.", "Voglio un cappuccino.", "Vorrei un cappuccino.", "I'd like a cappuccino."),
        build("Vorrei | pagare | con | la | carta", "I'd like to pay by card."),
        build("Per | me | un | caffè | grazie", "A coffee for me, thanks."),
        choice("Vorrei ", " l'iscrizione.", ["fare", "faccio", "fa"], 0, "I'd like to sign up (vorrei + infinitive)."),
      ],
    },
  },
  {
    id: "questions",
    level: "A1",
    title: "Asking questions",
    summary: "Raise your voice for yes/no (Sei italiana?), or start with a question word: Quanto costa? Che cosa prendi? Dove abiti?",
    unit: "it-a1-al-bar",
    lesson: {
      blocks: [
        text("A yes/no question in Italian is just a statement with a rising voice. The word order doesn't change: Sei italiana? (rising) vs Sei italiana. (falling)."),
        table("Question words", ["Word", "Meaning", "Example"], ["che cosa / cosa / che", "what", "Che cosa prendi?"], ["chi", "who", "Chi è?"], ["dove", "where", "Dove abiti?"], ["quando", "when", "Quando vai al bar?"], ["come", "how", "Come stai?"], ["perché", "why", "Perché studi italiano?"], ["quanto / quanti", "how much / how many", "Quanto costa? Quanti anni hai?"]),
        text("The question word comes first, the verb right after, and the subject (if any) at the end: Quanto costa il caffè? Dove abita Emma?"),
        text("Add vero? or no? at the end to check something: Lei non è italiana, vero? = You're not Italian, are you?"),
      ],
      examples: [
        example("Ciao, ragazzi! Cosa prendete?", "Hi, you two! What are you having?", "Cosa"),
        example("Quanti bar ci sono in Italia? Più di centomila!", "How many bars are there in Italy? More than a hundred thousand!", "Quanti"),
        example("E tu, quando vai al bar? E che cosa ordini?", "And you, when do you go to the bar? And what do you order?", "quando", "che cosa"),
        example("Ecco qua. Lei non è italiana, vero?", "Here you are. You're not Italian, are you?", "vero"),
      ],
      exercises: [
        choice("", " costa il cappuccino? Un euro e cinquanta.", ["Quanto", "Quando", "Come"], 0, "How much is the cappuccino? One fifty."),
        choice("", " abiti? In via del Pratello.", ["Dove", "Chi", "Perché"], 0, "Where do you live? In Via del Pratello."),
        choice("", " è il barista? Marco.", ["Chi", "Che", "Quanto"], 0, "Who's the barista? Marco."),
        choice("", " anni hai? Ventisei.", ["Quanti", "Quanto", "Quando"], 0, "How old are you? Twenty-six."),
        build("Che | cosa | prendi", "What are you having?"),
        build("Quanto | costa | il | caffè", "How much is the coffee?"),
        match("Match the question to the answer.", "Come stai?=Bene, grazie. | Di dove sei?=Di Napoli. | Quanto costa?=Due euro. | Chi è?=È Giulia.", "Questions and answers."),
      ],
    },
  },
];
