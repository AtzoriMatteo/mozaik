import type { Handbook, HandbookEntry, HandbookTable } from "@/core/handbook";

/** Rows as "nl | en | note" lines. */
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

/* ------------------------------------------------------------------ */
/* Words by topic                                                       */
/* ------------------------------------------------------------------ */

const topics: HandbookTable[] = [
  table({
    id: "numbers",
    title: "Numbers",
    level: "A1",
    intro: "From 21 on, Dutch says the units first: eenentwintig = one-and-twenty.",
    rows: `
0 | nul
1 | een (één) | Written één when it means 'one' and could be read as 'a'
2 | twee
3 | drie
4 | vier
5 | vijf
6 | zes
7 | zeven
8 | acht
9 | negen
10 | tien
11 | elf
12 | twaalf
13 | dertien
14 | veertien | Not viertien
15 | vijftien
16 | zestien
17 | zeventien
18 | achttien
19 | negentien
20 | twintig
21 | eenentwintig
22 | tweeëntwintig | The two dots keep the e's apart: twee-en
30 | dertig | Not drietig
40 | veertig
50 | vijftig
60 | zestig
70 | zeventig
80 | tachtig | The odd one: t-achtig
90 | negentig
100 | honderd
101 | honderdeen
250 | tweehonderdvijftig
1000 | duizend
1250 | twaalfhonderdvijftig | Prices and years over 1100 are usually said in hundreds
2026 | tweeduizend zesentwintig
1 000 000 | een miljoen
`,
    tip: "Write numbers as one word up to a thousand: honderdzevenenveertig. Years: 1985 = negentien vijfentachtig.",
  }),
  table({
    id: "ordinals",
    title: "First, second, third",
    level: "A1",
    intro: "Add -de or -ste. The first three are irregular.",
    rows: `
1e | eerste
2e | tweede
3e | derde
4e | vierde
5e | vijfde
6e | zesde
7e | zevende
8e | achtste | -ste after 8, and from 20 on
9e | negende
10e | tiende
19e | negentiende
20e | twintigste
21e | eenentwintigste
100e | honderdste
`,
    tip: "Dates use the plain number: 5 mei = vijf mei. Ordinals are for 'the fifth floor' (de vijfde verdieping) or 'for the first time' (voor het eerst).",
  }),
  table({
    id: "clock",
    title: "Telling the time",
    level: "A1",
    intro: "Dutch counts towards the next half hour: half negen is half past eight (half on the way to nine).",
    rows: `
8:00 | acht uur
8:05 | vijf over acht
8:10 | tien over acht
8:15 | kwart over acht
8:20 | tien voor half negen | Twenty past: ten before half nine
8:25 | vijf voor half negen
8:30 | half negen | Half past eight!
8:35 | vijf over half negen
8:40 | tien over half negen
8:45 | kwart voor negen
8:50 | tien voor negen
20:00 | acht uur ('s avonds) | Timetables say twintig uur
`,
    tip: "Hoe laat is het? = What time is it? Om hoe laat…? = At what time…?",
  }),
  table({
    id: "days",
    title: "Days, months and seasons",
    level: "A1",
    intro: "No capitals for days and months.",
    rows: `
maandag | Monday
dinsdag | Tuesday
woensdag | Wednesday
donderdag | Thursday | donder = thunder: Thor's day
vrijdag | Friday
zaterdag | Saturday
zondag | Sunday
januari | January
februari | February
maart | March
april | April
mei | May
juni | June
juli | July
augustus | August
september | September
oktober | October
november | November
december | December
de lente | spring | Also het voorjaar
de zomer | summer
de herfst | autumn | Also het najaar
de winter | winter
`,
    tip: "op maandag (on Monday), in mei (in May), in de zomer (in summer), 's ochtends / 's middags / 's avonds / 's nachts (in the morning / afternoon / evening / at night).",
  }),
  table({
    id: "time-words",
    title: "When",
    level: "A1",
    rows: `
vandaag | today
gisteren | yesterday
morgen | tomorrow | Also: de morgen = the morning
eergisteren | the day before yesterday
overmorgen | the day after tomorrow
nu | now
straks | later (today)
meteen | right away
vroeger | in the past, used to
later | later
altijd | always
vaak | often
soms | sometimes
nooit | never
af en toe | now and then
vorige week | last week
volgende week | next week
over een week | in a week
een week geleden | a week ago
`,
  }),
  table({
    id: "colours",
    title: "Colours",
    level: "A1",
    rows: `
rood | red
oranje | orange | The national colour
geel | yellow
groen | green
blauw | blue
paars | purple
roze | pink
bruin | brown
zwart | black
wit | white
grijs | grey
lichtblauw | light blue
donkergroen | dark green
`,
    tip: "Before a de-word or any plural, add -e: de rode jas, rode schoenen. Before an het-word with een: een rood huis.",
  }),
  table({
    id: "family",
    title: "Family",
    level: "A1",
    rows: `
de vader | father
de moeder | mother
de ouders | parents
de broer | brother
de zus | sister
de zoon | son
de dochter | daughter
het kind | child | Plural: de kinderen
de opa | grandad
de oma | grandma
de oom | uncle
de tante | aunt
de neef | nephew; male cousin
de nicht | niece; female cousin
de man | husband; man
de vrouw | wife; woman
de vriend | (boy)friend
de vriendin | (girl)friend
de partner | partner
`,
    tip: "Mijn vriend can mean 'my friend' or 'my boyfriend'. To be clear: een vriend van mij = a friend of mine.",
  }),
  table({
    id: "body",
    title: "Body and health",
    level: "A2",
    rows: `
het hoofd | head
het haar | hair
het oog | eye | Plural: de ogen
het oor | ear
de neus | nose
de mond | mouth
de tand | tooth
de keel | throat
de nek | neck
de schouder | shoulder
de arm | arm
de hand | hand
de vinger | finger
de rug | back
de buik | belly, stomach
het been | leg | Plural: de benen
de knie | knee
de voet | foot
de huisarts | GP
de apotheek | pharmacy
de koorts | fever
de griep | flu
`,
    tip: "Pain: Ik heb hoofdpijn / buikpijn / keelpijn / rugpijn. Or: Mijn knie doet pijn (My knee hurts).",
  }),
  table({
    id: "food",
    title: "Food and drink",
    level: "A1",
    rows: `
het brood | bread
de kaas | cheese
de boter | butter
het ei | egg | Plural: de eieren
de melk | milk
de koffie | coffee
de thee | tea
het water | water
het bier | beer
de wijn | wine
het vlees | meat
de kip | chicken
de vis | fish
de groente | vegetables
het fruit | fruit
de appel | apple
de aardappel | potato | Literally 'earth apple'
de rijst | rice
de soep | soup
het ontbijt | breakfast
de lunch | lunch
het avondeten | dinner
`,
    tip: "Ordering: Ik wil graag een koffie. / Mag ik de rekening? / Voor mij de vis, graag.",
  }),
  table({
    id: "home",
    title: "Home",
    level: "A1",
    rows: `
het huis | house
het appartement | flat
de kamer | room
de woonkamer | living room
de keuken | kitchen
de slaapkamer | bedroom
de badkamer | bathroom
de wc | toilet | Also: het toilet
de tuin | garden
het balkon | balcony
de deur | door
het raam | window
de trap | stairs
de muur | wall
het dak | roof
de tafel | table
de stoel | chair
het bed | bed
de bank | sofa; bank
de kast | cupboard
`,
  }),
  table({
    id: "weather",
    title: "Weather",
    level: "A2",
    rows: `
het weer | weather
de zon | sun
de regen | rain
de wind | wind
de sneeuw | snow
de wolk | cloud
de bui | shower
het onweer | thunderstorm
Het regent. | It's raining.
Het waait. | It's windy.
Het sneeuwt. | It's snowing.
Het vriest. | It's freezing.
De zon schijnt. | The sun is shining.
Het is bewolkt. | It's cloudy.
Het is benauwd. | It's muggy.
Het giet. | It's pouring.
`,
    tip: "Small talk starts here: Lekker weertje, hè? / Wat een rotweer!",
  }),
  table({
    id: "jobs",
    title: "Work and jobs",
    level: "A2",
    rows: `
het werk | work
de baan | job
de collega | colleague
de baas | boss
het kantoor | office
de leraar | teacher (male) | de lerares (female)
de verpleegkundige | nurse
de dokter | doctor
de kok | cook
de ober | waiter
de verkoper | shop assistant | de verkoopster (female)
de ingenieur | engineer
de student | student
de schoonmaker | cleaner
het salaris | salary
de vacature | vacancy
solliciteren | apply for a job
het sollicitatiegesprek | job interview
`,
    tip: "No article before a job: Ik ben verpleegkundige (I'm a nurse).",
  }),
  table({
    id: "countries",
    title: "Countries, people and languages",
    level: "A1",
    rows: `
Nederland | the Netherlands | een Nederlander, Nederlands
België | Belgium | een Belg, Nederlands / Frans
Duitsland | Germany | een Duitser, Duits
Frankrijk | France | een Fransman / Française, Frans
Engeland | England | een Engelsman, Engels
Spanje | Spain | een Spanjaard, Spaans
Italië | Italy | een Italiaan, Italiaans
Polen | Poland | een Pool, Pools
Turkije | Turkey | een Turk, Turks
Marokko | Morocco | een Marokkaan, Arabisch / Berbers
Portugal | Portugal | een Portugees, Portugees
Griekenland | Greece | een Griek, Grieks
China | China | een Chinees, Chinees
Japan | Japan | een Japanner, Japans
India | India | een Indiër, Hindi
Brazilië | Brazil | een Braziliaan, Portugees
de Verenigde Staten | the United States | een Amerikaan, Engels
Suriname | Suriname | een Surinamer, Nederlands
`,
    tip: "Ik kom uit Italië. Ik ben Italiaans (adjective) or Ik ben Italiaan (noun). Ik spreek Italiaans.",
  }),
  table({
    id: "questions",
    title: "Question words",
    level: "A1",
    rows: `
wie | who
wat | what
waar | where
waarheen / waar…naartoe | where to
waarvandaan / waar…vandaan | where from | Waar kom je vandaan?
wanneer | when
hoe | how
hoe laat | (at) what time
hoeveel | how much, how many
waarom | why
welk / welke | which | welk before het-words, welke before de-words and plurals
van wie | whose | Van wie is deze jas?
`,
    tip: "The verb comes straight after the question word: Waar woon jij? Wat doe je?",
  }),
  table({
    id: "places",
    title: "Where things are",
    level: "A1",
    intro: "Prepositions of place. In the picture: the cat and the box.",
    rows: `
in | in | De kat zit in de doos.
op | on | De kat zit op de doos.
onder | under | De kat ligt onder de tafel.
naast | next to | De kat zit naast de doos.
voor | in front of | De kat zit voor de doos.
achter | behind | De kat zit achter de doos.
tussen | between | De kat zit tussen de dozen.
boven | above | De lamp hangt boven de tafel.
bij | at, by | Ik ben bij de bakker.
tegenover | opposite | Het café is tegenover het station.
om de hoek | around the corner
links | (on the) left
rechts | (on the) right
rechtdoor | straight on
`,
  }),
  table({
    id: "connectors",
    title: "Linking words",
    level: "A2",
    intro: "Watch the word order after each one.",
    rows: `
en | and | normal order
maar | but | normal order
of | or | normal order
want | because | normal order: …want ik ben moe
omdat | because | verb to the end: …omdat ik moe ben
dus | so | normal order, or verb after: dus ik blijf / dus blijf ik
als | if, when | verb to the end
toen | when (once, in the past) | verb to the end
dat | that | verb to the end
terwijl | while | verb to the end
daarom | that's why | verb comes next: Daarom blijf ik thuis.
daarna | after that | verb comes next: Daarna ga ik slapen.
eerst | first | verb comes next: Eerst eet ik.
toch | still, anyway | Ik ben moe, toch ga ik.
`,
  }),
];

/* ------------------------------------------------------------------ */
/* Phrases by situation                                                 */
/* ------------------------------------------------------------------ */

const phrases: HandbookTable[] = [
  table({
    id: "greetings",
    title: "Hello and goodbye",
    level: "A1",
    rows: `
Hoi! / Hallo! | Hi! / Hello!
Goedemorgen. | Good morning.
Goedemiddag. | Good afternoon.
Goedenavond. | Good evening.
Hoe gaat het? | How are you?
Goed, en met jou? | Good, and you?
Prima! | Fine!
Leuk je te ontmoeten. | Nice to meet you.
Tot ziens! | Goodbye!
Doei! | Bye! | Very informal
Tot straks! | See you later!
Tot morgen! | See you tomorrow!
Fijne dag! | Have a nice day!
Fijn weekend! | Have a nice weekend!
`,
  }),
  table({
    id: "polite",
    title: "Please, thanks, sorry",
    level: "A1",
    rows: `
Alsjeblieft. | Please; here you are. | Informal
Alstublieft. | Please; here you are. | Polite
Dank je wel. | Thank you. | Informal
Dank u wel. | Thank you. | Polite
Bedankt! | Thanks!
Graag gedaan. | You're welcome.
Geen probleem. | No problem.
Sorry. | Sorry.
Pardon? | Excuse me? / Sorry, what?
Neem me niet kwalijk. | I beg your pardon. | Formal
`,
    tip: "Alsjeblieft does two jobs: 'please' when asking, and 'here you are' when giving something.",
  }),
  table({
    id: "understanding",
    title: "When you don't understand",
    level: "A1",
    rows: `
Ik begrijp het niet. | I don't understand.
Kunt u dat herhalen? | Could you repeat that?
Kunt u wat langzamer praten? | Could you speak a bit slower?
Wat betekent ...? | What does ... mean?
Hoe zeg je ... in het Nederlands? | How do you say ... in Dutch?
Hoe spel je dat? | How do you spell that?
Ik spreek een beetje Nederlands. | I speak a little Dutch.
Mag het in het Nederlands? | Can we do it in Dutch? | When people switch to English
`,
  }),
  table({
    id: "shop",
    title: "In a shop",
    level: "A1",
    rows: `
Zegt u het maar. | What can I get you?
Ik wil graag ... | I'd like ...
Heeft u ook ...? | Do you also have ...?
Hoeveel kost dit? | How much is this?
Verder nog iets? | Anything else?
Nee, dat was het. | No, that's all.
Pinnen of contant? | Card or cash?
Pinnen, graag. | Card, please.
Wilt u de bon? | Would you like the receipt?
Wie is er aan de beurt? | Who's next?
`,
  }),
  table({
    id: "cafe",
    title: "In a café or restaurant",
    level: "A1",
    rows: `
Een tafel voor twee, alstublieft. | A table for two, please.
Mag ik de kaart? | May I see the menu?
Wat wilt u drinken? | What would you like to drink?
Ik neem ... | I'll have ...
Voor mij ..., graag. | ... for me, please.
Ik zou graag ... willen. | I'd like ...
Eet smakelijk! | Enjoy your meal!
Mag ik afrekenen? | Can I pay?
Mag ik de rekening? | Can I have the bill?
Het was heerlijk. | It was delicious.
`,
  }),
  table({
    id: "doctor",
    title: "At the doctor's",
    level: "A2",
    rows: `
Ik wil graag een afspraak maken. | I'd like to make an appointment.
Ik voel me niet lekker. | I don't feel well.
Ik heb pijn in mijn ... | I have pain in my ...
Sinds wanneer? | Since when?
Ik heb koorts. | I have a fever.
Ik hoest al een week. | I've been coughing for a week.
Moet ik iets innemen? | Should I take something?
Hoe vaak per dag? | How many times a day?
Beterschap! | Get well soon!
`,
    tip: "Out of hours: call the huisartsenpost. Emergency: 112.",
  }),
  table({
    id: "phone",
    title: "On the phone",
    level: "A2",
    rows: `
Met Sara. | Sara speaking. | How the Dutch answer the phone
U spreekt met ... | You're speaking to ...
Ik bel over ... | I'm calling about ...
Kan ik ... spreken? | Can I speak to ...?
Een moment, ik verbind u door. | One moment, I'll put you through.
Kunt u mij terugbellen? | Could you call me back?
Ik bel later terug. | I'll call back later.
Wat is uw telefoonnummer? | What's your phone number?
`,
  }),
  table({
    id: "work-messages",
    title: "Emails and messages",
    level: "A2",
    rows: `
Beste Sanne, | Dear Sanne, | Friendly but correct
Geachte heer De Vries, | Dear Mr De Vries, | Formal
Geachte heer of mevrouw, | Dear Sir or Madam,
Hoi Tim! | Hi Tim! | Informal
Ik schrijf u omdat ... | I'm writing to you because ...
Kunt u mij laten weten of ...? | Could you let me know whether ...?
Alvast bedankt. | Thanks in advance.
Met vriendelijke groet, | Kind regards,
Groetjes, | Best wishes, / Cheers, | Informal: friends, family, close colleagues
`,
  }),
  table({
    id: "emergencies",
    title: "Emergencies",
    level: "A1",
    rows: `
Help! | Help!
Bel 112! | Call 112! | The emergency number
Ik heb een dokter nodig. | I need a doctor.
Er is een ongeluk gebeurd. | There's been an accident.
Waar is het ziekenhuis? | Where is the hospital?
Mijn fiets is gestolen. | My bike has been stolen.
Ik ben mijn ... kwijt. | I've lost my ...
`,
  }),
];

/* ------------------------------------------------------------------ */
/* Sounds and spelling                                                  */
/* ------------------------------------------------------------------ */

const spelling: HandbookTable[] = [
  table({
    id: "alphabet",
    title: "The alphabet",
    level: "A1",
    intro: "How to say the letters when you spell your name.",
    rows: `
a | aa
b | bee
c | see
d | dee
e | ee
f | ef
g | gee | The throaty g
h | haa
i | ie
j | jee | Like English 'yay'
k | kaa
l | el
m | em
n | en
o | oo
p | pee
q | kuu
r | er
s | es
t | tee
u | uu | Round your lips and say 'ee'
v | vee
w | wee
x | iks
y | i-grec / ypsilon
z | zet
ij | ei | The 'long ij': written ij, sounds like ei
`,
  }),
  table({
    id: "vowels",
    title: "Long and short vowels",
    level: "A1",
    intro: "One rule explains most Dutch spelling. A long vowel needs two letters only when a consonant closes the syllable.",
    rows: `
man / maan | man / moon | short a, long aa
pen / peen | pen / carrot | short e, long ee
bom / boom | bomb / tree | short o, long oo
bus / buur | bus / neighbour | short u, long uu
maan → manen | moon → moons | open syllable: ma-nen, one a is enough
man → mannen | man → men | double the consonant to keep the a short: man-nen
boom → bomen | tree → trees | bo-men
bus → bussen | bus → buses | bus-sen
`,
    tip: "That's why the verb maken has stem maak, and zetten has stem zet.",
  }),
  table({
    id: "sounds",
    title: "Sounds that need practice",
    level: "A1",
    rows: `
g, ch | the throaty sound | goed, acht, Scheveningen
ui | 'ow' with rounded lips | huis, uit, ui
ij, ei | 'ay' | wijn, trein: same sound, two spellings
eu | 'eu' as in French peu | neus, deur
oe | 'oo' as in 'food' | boek, goed
ou, au | 'ow' | oud, blauw: same sound
ie | 'ee' as in 'see' | fiets, niet
sch | s + throaty g | school, schip
w | between English v and w | water, wat
v | soft, close to f | vis, van
-en | at the end, often just 'e' | lopen sounds like 'lope'
`,
    tip: "Practise these in the Speaking part of each unit: you can record yourself and compare.",
  }),
  table({
    id: "f-v-s-z",
    title: "f/v and s/z",
    level: "A2",
    intro: "Dutch words never end in v or z. They change at the end of a word and come back before a vowel.",
    rows: `
leven → ik leef | live → I live
geven → ik geef | give → I give
reizen → ik reis | travel → I travel
lezen → ik lees | read → I read
de brief → de brieven | letter → letters
het huis → de huizen | house → houses
`,
  }),
];

export const handbook: Handbook = { topics, phrases, spelling };
