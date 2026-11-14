import type { Handbook, HandbookEntry, HandbookTable } from "@/core/handbook";

/** Rows as "italian | english | note" lines. */
const rows = (raw: string): HandbookEntry[] =>
  raw
    .trim()
    .split("\n")
    .map((line) => {
      const [nl, en, note] = line.split(/\s*\|\s*/).map((x) => x.trim());
      return note ? { nl, en, note } : { nl, en };
    });

const table = (t: Omit<HandbookTable, "entries"> & { rows: string }): HandbookTable => {
  const { rows: raw, ...rest } = t;
  return { ...rest, entries: rows(raw) };
};

/* Words by topic. Nouns are written with their article: il, lo, la, l'. */

const topics: HandbookTable[] = [
  table({
    id: "numbers",
    title: "Numbers",
    level: "A1",
    intro: "Tens first, then units, all in one word: ventitré. Before uno and otto the tens drop their last vowel: ventuno, ventotto.",
    rows: `
0 | zero
1 | uno | un before a noun: un caffè
2 | due
3 | tre
4 | quattro
5 | cinque
6 | sei
7 | sette
8 | otto
9 | nove
10 | dieci
11 | undici
12 | dodici
13 | tredici
14 | quattordici
15 | quindici
16 | sedici
17 | diciassette | From 17 on, dieci comes first
18 | diciotto
19 | diciannove
20 | venti
21 | ventuno | venti + uno: the i drops
22 | ventidue
23 | ventitré | An accent on every -tré
28 | ventotto | venti + otto: the i drops
30 | trenta
40 | quaranta
50 | cinquanta
60 | sessanta
70 | settanta
80 | ottanta
90 | novanta
100 | cento
101 | centouno
200 | duecento
1000 | mille
2000 | duemila | mille, but duemila, tremila
2026 | duemilaventisei
1 000 000 | un milione
`,
    tip: "Prices: 1,20 € = un euro e venti. Decimals use a comma, thousands a dot: 1.500 = millecinquecento.",
  }),
  table({
    id: "ordinals",
    title: "First, second, third",
    level: "A1",
    intro: "The first ten are their own words; after that, add -esimo to the number (drop its last vowel).",
    rows: `
1° | primo
2° | secondo
3° | terzo
4° | quarto
5° | quinto
6° | sesto
7° | settimo
8° | ottavo
9° | nono | One n! nonno = grandpa
10° | decimo
11° | undicesimo
20° | ventesimo
100° | centesimo
`,
    tip: "Ordinals agree like adjectives: il primo giorno, la prima volta. Dates use plain numbers (il due maggio), except il primo: il primo maggio.",
  }),
  table({
    id: "time",
    title: "Telling the time",
    level: "A1",
    intro: "Che ore sono? Sono le + the hour (plural!), but È l'una, è mezzogiorno, è mezzanotte.",
    rows: `
1:00 | è l'una
2:00 | sono le due
3:05 | sono le tre e cinque
3:15 | sono le tre e un quarto
3:30 | sono le tre e mezza | Also: e mezzo, e trenta
3:45 | sono le quattro meno un quarto | Also: le tre e quarantacinque
3:50 | sono le quattro meno dieci
12:00 | è mezzogiorno
00:00 | è mezzanotte
20:00 | sono le otto di sera | Timetables say: le venti
`,
    tip: "A che ora? = At what time? Alle due = at two. All'una = at one.",
  }),
  table({
    id: "days",
    title: "Days, months and seasons",
    level: "A1",
    intro: "No capital letters. Days are masculine except la domenica.",
    rows: `
lunedì | Monday | The moon's day
martedì | Tuesday | Mars's day
mercoledì | Wednesday | Mercury's day
giovedì | Thursday | Jupiter's (Giove) day
venerdì | Friday | Venus's day
sabato | Saturday
domenica | Sunday | The Lord's day
gennaio | January
febbraio | February
marzo | March
aprile | April
maggio | May
giugno | June
luglio | July
agosto | August | Ferragosto (15th) is the big summer holiday
settembre | September
ottobre | October
novembre | November
dicembre | December
la primavera | spring
l'estate | summer | Feminine: l'estate calda
l'autunno | autumn
l'inverno | winter
`,
    tip: "lunedì = on Monday; il lunedì = on Mondays (every week). In maggio or a maggio = in May. In estate = in summer.",
  }),
  table({
    id: "when",
    title: "When",
    level: "A1",
    rows: `
oggi | today
ieri | yesterday
domani | tomorrow
dopodomani | the day after tomorrow
adesso / ora | now
subito | straight away
dopo | later, after
prima | before, earlier
sempre | always
spesso | often
a volte | sometimes
mai | never | With non: non bevo mai il latte
di solito | usually
la settimana scorsa | last week
la settimana prossima | next week
fra una settimana | in a week | Also: tra una settimana
una settimana fa | a week ago
`,
  }),
  table({
    id: "colours",
    title: "Colours",
    level: "A1",
    intro: "Colours are adjectives and agree: un vestito rosso, una borsa rossa, scarpe rosse.",
    rows: `
rosso | red
arancione | orange | -e: same for m and f
giallo | yellow
verde | green | -e: verde, verdi
azzurro | (sky) blue | The national colour: la Nazionale = gli Azzurri
blu | (dark) blue | Never changes: occhi blu
viola | purple | Never changes
rosa | pink | Never changes
marrone | brown
nero | black
bianco | white | -co: bianchi, bianche
grigio | grey
`,
    tip: "Blu, rosa and viola never change: una giacca blu, due giacche blu.",
  }),
  table({
    id: "family",
    title: "Family",
    level: "A1",
    intro: "With one family member, no article: mio padre, mia sorella. With plurals or mamma and papà, the article comes back: i miei fratelli, la mia mamma.",
    rows: `
il padre / il papà | father / dad
la madre / la mamma | mother / mum
i genitori | parents | False friend: parenti = relatives
il fratello | brother
la sorella | sister
il figlio | son
la figlia | daughter
i figli | children (sons and daughters)
il nonno | grandfather
la nonna | grandmother
lo zio | uncle | lo before z
la zia | aunt
il cugino / la cugina | cousin
il nipote / la nipote | grandchild; nephew, niece
il marito | husband
la moglie | wife
il ragazzo / la ragazza | boyfriend / girlfriend; boy / girl
`,
    tip: "Hai fratelli? = Do you have brothers or sisters? Sono figlio unico / figlia unica = I'm an only child.",
  }),
  table({
    id: "body",
    title: "Body and health",
    level: "A1",
    rows: `
la testa | head
i capelli | hair | Always plural
l'occhio | eye | Plural: gli occhi
l'orecchio | ear | Plural: le orecchie (feminine!)
il naso | nose
la bocca | mouth
il dente | tooth
la gola | throat
il collo | neck
la spalla | shoulder
il braccio | arm | Plural: le braccia
la mano | hand | Feminine! Plural: le mani
il dito | finger | Plural: le dita
la schiena | back
la pancia | stomach, tummy
la gamba | leg
il ginocchio | knee | Plural: le ginocchia
il piede | foot
il medico | doctor
la farmacia | pharmacy | Look for the green cross
`,
    tip: "Mi fa male la testa = My head hurts. Mi fanno male i piedi = My feet hurt (plural verb).",
  }),
  table({
    id: "food",
    title: "Food and drink",
    level: "A1",
    rows: `
il pane | bread
il formaggio | cheese
il burro | butter
l'uovo | egg | Plural: le uova
il latte | milk
il caffè | coffee (espresso)
il tè | tea
l'acqua | water | naturale (still) or frizzante (sparkling)
la birra | beer
il vino | wine | rosso, bianco
la carne | meat
il pollo | chicken
il pesce | fish
la verdura | vegetables | Usually singular
la frutta | fruit | Usually singular
la mela | apple
la patata | potato
il riso | rice | Also: laughter!
la pasta | pasta
la colazione | breakfast
il pranzo | lunch
la cena | dinner
`,
    tip: "At the bar: Vorrei un caffè. In a restaurant: Per me la pasta, grazie. Il conto, per favore = The bill, please.",
  }),
  table({
    id: "home",
    title: "Home",
    level: "A1",
    rows: `
la casa | house; home
l'appartamento | flat
la stanza / la camera | room
il soggiorno | living room
la cucina | kitchen
la camera da letto | bedroom
il bagno | bathroom; toilet
il giardino | garden
il balcone | balcony
la porta | door
la finestra | window
le scale | stairs
il tavolo | table
la sedia | chair
il letto | bed
il divano | sofa
l'armadio | wardrobe
il frigorifero | fridge | Spoken: il frigo
`,
  }),
  table({
    id: "weather",
    title: "Weather",
    level: "A1",
    intro: "Che tempo fa? = What's the weather like? Italian uses fare for most weather.",
    rows: `
fa bello | it's nice weather
fa brutto | it's bad weather
fa caldo | it's hot
fa freddo | it's cold
c'è il sole | it's sunny
c'è vento | it's windy
c'è la nebbia | it's foggy | The Po valley's famous fog
piove | it's raining
nevica | it's snowing
è nuvoloso | it's cloudy
il temporale | thunderstorm
`,
    tip: "Ho caldo = I'm hot (me). Fa caldo = it's hot (the weather). Don't mix them up!",
  }),
  table({
    id: "jobs",
    title: "Work and jobs",
    level: "A1",
    intro: "No article after sono: Sono medico. With fare, the article is there: Faccio il medico.",
    rows: `
il lavoro | work, job
il/la collega | colleague
l'ufficio | office
l'insegnante | teacher | Same for men and women
il medico | doctor
l'infermiere / l'infermiera | nurse
il cameriere / la cameriera | waiter / waitress
il/la barista | bar person
il cuoco / la cuoca | cook
il commesso / la commessa | shop assistant
l'ingegnere | engineer
l'avvocato / l'avvocata | lawyer
lo studente / la studentessa | student
l'impiegato / l'impiegata | office worker
il/la pensionato/a | pensioner
`,
    tip: "Che lavoro fai? / Che cosa fai? = What do you do? Lavoro in banca. Lavoro da casa.",
  }),
  table({
    id: "countries",
    title: "Countries, people and languages",
    level: "A1",
    intro: "Nationalities and languages take no capital: è inglese, parlo italiano.",
    rows: `
l'Italia | Italy | italiano / italiana; l'italiano
la Francia | France | francese; il francese
la Germania | Germany | tedesco / tedesca; il tedesco
la Spagna | Spain | spagnolo / spagnola; lo spagnolo
il Regno Unito | the UK | britannico; l'inglese
l'Inghilterra | England | inglese
l'Irlanda | Ireland | irlandese
i Paesi Bassi / l'Olanda | the Netherlands | olandese; il neerlandese
la Svizzera | Switzerland | svizzero / svizzera
gli Stati Uniti | the United States | americano / americana
la Cina | China | cinese
il Giappone | Japan | giapponese
il Brasile | Brazil | brasiliano / brasiliana; il portoghese
il Marocco | Morocco | marocchino / marocchina; l'arabo
`,
    tip: "Sono di Dublino (city: di). Vengo dall'Irlanda (country: da + article). Abito in Italia (country: in), a Bologna (city: a).",
  }),
  table({
    id: "questions",
    title: "Question words",
    level: "A1",
    rows: `
chi? | who?
che cosa? / che? / cosa? | what?
dove? | where? | Dov'è…? = Where is…?
di dove? | where from? | Di dove sei?
quando? | when?
come? | how? | Come stai? Come si dice…?
perché? | why? | Also the answer: perché = because
quanto? / quanta? | how much? | Quanto costa?
quanti? / quante? | how many? | Quanti anni hai?
quale? | which? | Plural: quali
a che ora? | at what time?
`,
    tip: "A yes/no question is just the sentence with a rising voice: Sei italiana? Parli inglese?",
  }),
  table({
    id: "places",
    title: "Where things are",
    level: "A1",
    intro: "In the picture: the cat and the box. Many of these take a or di before the noun.",
    picture: ["in", "su", "sotto", "accanto a", "davanti a", "dietro"],
    rows: `
in | in | Il gatto è nella scatola.
su | on | Il gatto è sulla scatola.
sotto | under | Il gatto è sotto il tavolo.
accanto a | next to | Il gatto è accanto alla scatola.
davanti a | in front of | Il gatto è davanti alla scatola.
dietro | behind | Il gatto è dietro la scatola.
tra / fra | between | Il gatto è tra le scatole.
sopra | above, on top of | La lampada è sopra il tavolo.
vicino a | near | Abito vicino alla stazione.
lontano da | far from | Lontano dal centro.
di fronte a | opposite | Il bar è di fronte alla chiesa.
a destra | on the right
a sinistra | on the left
dritto | straight on
`,
  }),
  table({
    id: "articles",
    title: "The articles",
    level: "A1",
    intro: "The article depends on gender and on the sound the next word starts with.",
    rows: `
il libro / i libri | masculine, most consonants
lo studente / gli studenti | masculine, before s + consonant, z, gn, ps, y
l'amico / gli amici | masculine, before a vowel
la casa / le case | feminine
l'amica / le amiche | feminine, before a vowel
un libro, uno studente | a, masculine | un amico: no apostrophe
una casa, un'amica | a, feminine | un'amica: with an apostrophe
`,
    tip: "Look at the word that comes right after the article, not the noun: lo zio, but il mio zio.",
  }),
  table({
    id: "prepositions",
    title: "Prepositions + the",
    level: "A1",
    intro: "a, da, di, in and su join the article: a + il = al. con and per usually don't.",
    rows: `
a + il = al | to the, at the | al bar
a + la = alla | to the | alla stazione
a + l' = all' | to the | all'università
da + il = dal | from the; at (someone's) | dal medico
di + il = del | of the | il centro del paese
di + la = della | of the | la casa della nonna
in + il = nel | in the | nel bar
in + la = nella | in the | nella classe
su + il = sul | on the | sul tavolo
su + la = sulla | on the | sulla sedia
a + i = ai, di + gli = degli… | plurals join too | ai nonni, degli amici
`,
  }),
  table({
    id: "linking",
    title: "Linking words",
    level: "A1",
    rows: `
e / ed | and | ed before a vowel: ed è
ma | but
o / oppure | or
perché | because; why
quindi | so, therefore
allora | so, then | Very common to start a sentence
anche | also, too | Goes before: anche io
però | however, but
quando | when
se | if
poi | then, next
prima… poi… | first… then…
invece | instead, on the other hand
`,
  }),
];

/* Phrases by situation. */

const phrases: HandbookTable[] = [
  table({
    id: "hello",
    title: "Hello and goodbye",
    level: "A1",
    rows: `
Ciao! | Hi! / Bye! | With tu only
Salve! | Hello! | Neutral: when unsure
Buongiorno! | Good morning! / Hello! | Until early afternoon
Buonasera! | Good evening! / Good afternoon! | From mid-afternoon
Buonanotte! | Good night! | Only when going to bed
Come stai? | How are you? | tu
Come sta? | How are you? | Lei
Bene, grazie. E tu? | Fine, thanks. And you?
Piacere! | Nice to meet you! | Answer: Piacere mio!
Arrivederci! | Goodbye! | Very formal: ArrivederLa
A presto! | See you soon!
A domani! | See you tomorrow!
Ci vediamo! | See you!
Buona giornata! | Have a nice day!
`,
  }),
  table({
    id: "please-thanks",
    title: "Please, thanks, sorry",
    level: "A1",
    rows: `
Per favore / per piacere | Please
Grazie (mille)! | Thanks (a lot)!
Prego. | You're welcome. | Also: please go ahead; can I help you?
Di niente. | Don't mention it.
Scusa! | Sorry! / Excuse me! | tu
Scusi! | Sorry! / Excuse me! | Lei
Mi dispiace. | I'm sorry.
Permesso? | May I? / Excuse me | Walking past someone, or entering a home
Con permesso. | Excuse me (as you go through)
`,
    tip: "Entering someone's house, say Permesso? at the door. The answer: Avanti! (Come in!)",
  }),
  table({
    id: "not-understand",
    title: "When you don't understand",
    level: "A1",
    rows: `
Non capisco. | I don't understand.
Può ripetere, per favore? | Could you repeat, please? | Lei
Più piano, per favore. | Slower, please.
Che cosa vuol dire…? | What does … mean?
Come si dice … in italiano? | How do you say … in Italian?
Come si scrive? | How do you spell it?
Parlo solo un po' di italiano. | I only speak a little Italian.
Può parlare in italiano, per favore? | Can you speak Italian, please? | When people switch to English
`,
  }),
  table({
    id: "bar",
    title: "At the bar",
    level: "A1",
    rows: `
Un caffè, per favore. | An espresso, please.
Vorrei un cappuccino. | I'd like a cappuccino.
Per me un cornetto alla crema. | A custard croissant for me.
Quanto costa? / Quant'è? | How much is it?
Posso pagare con la carta? | Can I pay by card?
Lo scontrino, per favore. | The receipt, please.
Al banco o al tavolo? | At the counter or at a table? | The table costs more
Da portare via? | To take away?
`,
    tip: "In busy bars: pay first at la cassa, then give the scontrino to the barista.",
  }),
  table({
    id: "shop",
    title: "In a shop",
    level: "A1",
    rows: `
Buongiorno, posso aiutarLa? | Hello, can I help you?
Sto solo guardando, grazie. | I'm just looking, thanks.
Vorrei… | I'd like…
Avete…? | Do you have…?
Quanto costa? / Quanto costano? | How much is it? / are they?
Posso provare? | Can I try it on?
Che taglia porta? | What size are you? | Lei
Lo prendo. | I'll take it.
Altro? | Anything else?
No, basta così, grazie. | No, that's all, thanks.
`,
  }),
  table({
    id: "restaurant",
    title: "In a restaurant",
    level: "A1",
    rows: `
Un tavolo per due, per favore. | A table for two, please.
Avete un tavolo libero? | Do you have a free table?
Il menù, per favore. | The menu, please.
Per me… | For me…
Da bere? | To drink?
Acqua naturale o frizzante? | Still or sparkling water?
Buon appetito! | Enjoy your meal!
Il conto, per favore. | The bill, please.
`,
    tip: "Il coperto on the bill is a small charge per person for bread and the table: normal, not a tip.",
  }),
  table({
    id: "doctor",
    title: "At the doctor's and the pharmacy",
    level: "A1",
    rows: `
Mi sento male. | I feel ill.
Mi fa male la testa. | My head hurts.
Ho la febbre. | I have a temperature.
Ho il raffreddore. | I have a cold.
Ho la tosse. | I have a cough.
Ha qualcosa per…? | Do you have something for…? | At the pharmacy
Quante volte al giorno? | How many times a day?
Ho bisogno di un medico. | I need a doctor.
`,
    tip: "Emergency: 112. Pharmacies (green cross) give advice on small things.",
  }),
  table({
    id: "phone",
    title: "On the phone",
    level: "A1",
    rows: `
Pronto? | Hello? | Only on the phone
Sono Emma. | It's Emma.
Chi parla? | Who's speaking?
Posso parlare con…? | Can I speak to…?
Un attimo, per favore. | One moment, please.
Può richiamare più tardi? | Can you call back later?
Ti richiamo dopo. | I'll call you back later.
Che numero hai? | What's your number?
`,
  }),
  table({
    id: "emails",
    title: "Emails and messages",
    level: "A1",
    rows: `
Gentile signora Bianchi, | Dear Mrs Bianchi, | Formal
Gentile professore, | Dear professor,
Buongiorno, | Hello, | Neutral, very common in emails
Caro Marco, / Cara Giulia, | Dear Marco, / Dear Giulia, | Friendly
Ciao Karim! | Hi Karim! | Informal
Le scrivo perché… | I'm writing to you because… | Lei
Grazie in anticipo. | Thanks in advance.
Cordiali saluti, | Kind regards, | Formal
Un saluto, | Best wishes, | Neutral
Un abbraccio, / Baci, | Hugs, / Love, | Informal
`,
  }),
  table({
    id: "emergencies",
    title: "Emergencies",
    level: "A1",
    rows: `
Aiuto! | Help!
Chiamate il 112! | Call 112! | The emergency number
Ho bisogno di un medico. | I need a doctor.
C'è stato un incidente. | There's been an accident.
Dov'è l'ospedale? | Where is the hospital?
Mi hanno rubato il portafoglio. | My wallet has been stolen.
Ho perso il passaporto. | I've lost my passport.
`,
  }),
];

/* Spelling and sounds. */

const spelling: HandbookTable[] = [
  table({
    id: "alphabet",
    title: "The alphabet",
    level: "A1",
    intro: "Twenty-one letters, plus five for foreign words. On the phone, Italians spell with cities: R come Roma.",
    rows: `
a | a | A come Ancona
b | bi | B come Bologna
c | ci | C come Como
d | di | D come Domodossola
e | e | E come Empoli
f | effe | F come Firenze
g | gi | G come Genova
h | acca | Always silent
i | i | I come Imola
l | elle | L come Livorno
m | emme | M come Milano
n | enne | N come Napoli
o | o | O come Otranto
p | pi | P come Palermo
q | cu | Q come quadro
r | erre | R come Roma
s | esse | S come Savona
t | ti | T come Torino
u | u | U come Udine
v | vu / vi | V come Venezia
z | zeta | Z come zebra
j | i lunga | Foreign words: jeans
k | cappa | Foreign words: kiwi
w | doppia vu | Foreign words: web
x | ics | Foreign words: taxi
y | ipsilon / i greca | Foreign words: yogurt
`,
  }),
  table({
    id: "c-and-g",
    title: "c and g: hard or soft",
    level: "A1",
    intro: "Before e and i, c and g go soft. To keep them hard, add an h. To make them soft before a, o, u, add an i.",
    rows: `
ca, co, cu | hard k | casa, cosa, cuore
che, chi | hard k | che, chiesa
ce, ci | soft 'ch' | cena, ciao
cia, cio, ciu | soft 'ch' (the i is silent) | ciao, cioccolato
ga, go, gu | hard g | gatto, gola, guancia
ghe, ghi | hard g | spaghetti, colleghi
ge, gi | soft 'j' | gelato, giro
gia, gio, giu | soft 'j' (the i is silent) | giallo, giorno, Giulia
`,
    tip: "That's why amico becomes amici (soft) but cuoco becomes cuochi (hard): the plural keeps the sound, or not.",
  }),
  table({
    id: "special-groups",
    title: "gli, gn, sc",
    level: "A1",
    rows: `
gli | like 'lli' in million | famiglia, figlio, gli
gn | like 'ny' in canyon | signora, bagno, gnocchi
sce, sci | like English 'sh' | pesce, uscire
sca, sco, scu, sche, schi | 'sk' | scuola, schiuma
qu | 'kw' | quando, quattro
z, zz | 'ts' or 'dz' | pizza ('ts'), zero ('dz')
`,
  }),
  table({
    id: "doubles",
    title: "Double consonants",
    level: "A1",
    intro: "Say a double consonant longer, with a tiny stop before it. It changes the meaning.",
    rows: `
pala / palla | spade / ball
caro / carro | dear / cart
nono / nonno | ninth / grandfather
sete / sette | thirst / seven
capello / cappello | a hair / hat
pena / penna | pain / pen
`,
  }),
  table({
    id: "stress",
    title: "Stress and accents",
    level: "A1",
    intro: "Most words stress the second-last syllable. A written accent puts the stress on the last syllable, and some short words need one to be told apart.",
    rows: `
ragazzo, signora, mattina | stress on the second-last syllable
città, caffè, perché | written accent: stress on the end
è / e | is / and
sì / si | yes / oneself
tè / te | tea / you
là / la | there / the
dà / da | gives / from
papà / papa | dad / pope
`,
    tip: "Two accents on e: è (open, as in caffè) and é (closed, as in perché). Typing on a phone: hold the e.",
  }),
];

export const handbook: Handbook = { topics, phrases, spelling };
