import type { PictureSpec } from "@/core/content";
import { o, p, pic } from "@/core/pictures";

/**
 * A picture for every Italian text, story episode and checkpoint scene
 * (Matteo, 21 Nov 2026), laid as a mosaic in the Ravenna look. Each one is
 * drawn from its own text; the alt line says what it shows.
 */
export const pictures: Record<string, PictureSpec> = {
  /* ---------------- Unità 1 · Ciao! ---------------- */
  "benvenuta-a-bologna": pic("piazza", "Emma arrives in Bologna with her suitcase; the two towers rise behind the square.", [
    o("towers", 300, 210, { s: 0.9 }),
    p("woman", 150, 214, { c: "copper", hair: "long", pose: "wave" }),
    o("suitcase", 182, 214),
    o("sun", 70, 56),
  ]),
  "tu-o-lei": pic("porticoes", "Two ways to say hello: friends say 'Ciao!' with tu; a young woman says 'Buongiorno' to an older man with Lei.", [
    p("woman", 70, 214, { c: "iron", hair: "ponytail", pose: "wave" }),
    p("man", 130, 214, { c: "copper", flip: true, pose: "wave" }),
    o("bubble", 100, 90, { t: "Ciao!" }),
    p("woman", 260, 214, { c: "cobalt", hair: "long", pose: "hold" }),
    p("oldman", 320, 214, { c: "manganese", flip: true, pose: "hold", glasses: true }),
    o("bubble", 290, 90, { t: "Lei" }),
  ]),
  "come-si-scrive": pic("room", "Italian is read as it's written: the alphabet on the board, with the foreign letters j, k, w, x, y.", [
    o("board", 200, 90, { t: "A B C … J K W X Y" }),
    p("woman", 300, 212, { c: "manganese", pose: "point", flip: true, hair: "bob" }),
  ]),
  "check-it-a1-ciao": pic("room", "Three in the afternoon on the stairs: Emma says 'Buongiorno', Signora Rita answers 'Buonasera'.", [
    o("clock", 330, 50, { t: "3:00" }),
    p("woman", 150, 212, { c: "copper", hair: "long", pose: "wave" }),
    p("oldwoman", 240, 212, { c: "manganese", flip: true, pose: "cane" }),
    o("bubble", 260, 96, { t: "Buonasera!" }),
  ]),

  /* ---------------- Unità 2 · Piacere! ---------------- */
  "la-prima-lezione": pic("room", "The first Italian lesson: the teacher, Lucia Bianchi, and the students round a table.", [
    o("board", 110, 80),
    p("woman", 210, 212, { c: "iron", hair: "bob", pose: "point", flip: true }),
    p("woman", 270, 212, { pose: "sit", c: "copper", hair: "long" }),
    p("man", 330, 212, { pose: "sit", c: "cobalt" }),
    o("longtable", 300, 212, { c: "ochre", s: 0.55 }),
  ]),
  "quante-lingue-in-italia": pic("piazza", "Many languages in Italy: people in a square speak Italian and their dialects.", [
    p("man", 110, 214, { c: "copper", pose: "point" }),
    o("bubble", 130, 96, { t: "Ciao" }),
    p("woman", 200, 214, { c: "iron", flip: true }),
    o("bubble", 210, 80, { t: "Uè!" }),
    p("oldman", 290, 214, { c: "cobalt", flip: true, pose: "cane" }),
    o("bubble", 300, 96, { t: "Bòna!" }),
  ]),
  "le-mani-parlano": pic("piazza", "Hands speak: the famous gesture, fingertips together, hand moving up and down.", [
    o("pursehand", 250, 130, { s: 2.4 }),
    p("man", 110, 214, { c: "iron", pose: "phone" }),
    o("bubble", 150, 96, { t: "?" }),
  ]),
  "check-it-a1-piacere": pic("room", "At the bar Emma asks a man if he's from Bologna. No: he's from Imola!", [
    o("counter", 320, 212, { s: 0.6 }),
    o("espressomachine", 320, 187, { s: 0.7 }),
    p("woman", 130, 212, { c: "copper", hair: "long", pose: "point" }),
    p("man", 220, 212, { c: "cobalt", flip: true, beard: true }),
    o("bubble", 230, 96, { t: "Imola!" }),
  ]),

  /* ---------------- Unità 3 · La famiglia ---------------- */
  "la-famiglia-di-giulia": pic("room", "Giulia shows Emma a family photo taken in the mountains at Christmas.", [
    o("frame", 290, 110, { s: 2.2, v: "portrait" }),
    p("woman", 120, 212, { c: "iron", hair: "bob", pose: "point" }),
    p("woman", 180, 212, { c: "copper", hair: "long" }),
  ]),
  "il-pranzo-della-domenica": pic("room", "Sunday lunch at the grandparents': the whole family round a long table, grandma brings the pasta.", [
    p("oldman", 90, 212, { pose: "sit", c: "cobalt", glasses: true }),
    p("woman", 160, 212, { pose: "sit", c: "iron" }),
    p("boy", 220, 212, { pose: "sit", c: "ochre" }),
    o("longtable", 170, 212, { c: "iron" }),
    o("bowl", 150, 174),
    o("plate", 110, 174),
    o("wine", 200, 174),
    p("oldwoman", 320, 212, { c: "manganese", flip: true, pose: "carry", apron: true }),
    o("pot", 320, 158, { s: 0.7 }),
  ]),
  "a-trentanni-con-mamma-e-papa": pic("kitchen", "Thirty and still at home: a young man at the table while his mother cooks.", [
    o("stove", 330, 200),
    o("steam", 330, 130),
    p("woman", 280, 212, { c: "iron", apron: true, flip: true }),
    p("man", 140, 212, { pose: "sit", c: "cobalt" }),
    o("table", 170, 212),
    o("plate", 170, 174),
  ]),
  "check-it-a1-famiglia": pic("room", "Three Giovannis at Sunday lunch: grandpa, the uncle and the baby; grandma calls and all three answer.", [
    p("oldman", 100, 212, { pose: "sit", c: "cobalt", beard: true }),
    p("man", 180, 212, { pose: "sit", c: "copper" }),
    p("woman", 250, 212, { pose: "sit", c: "iron", hair: "long" }),
    o("baby", 270, 160),
    o("longtable", 175, 212, { c: "iron", s: 0.9 }),
    p("oldwoman", 340, 212, { flip: true, c: "manganese", apron: true, pose: "wave" }),
  ]),

  /* ---------------- Unità 4 · Al bar ---------------- */
  "bar-1-la-nuova-vicina": pic("porticoes", "Bar Margherita, under the porticoes: Marco the barista talks non-stop by the espresso machine.", [
    o("counter", 230, 212, { c: "iron" }),
    o("espressomachine", 260, 170),
    p("man", 200, 212, { c: "cobalt", apron: true, pose: "wave", flip: true }),
    o("espresso", 180, 170),
    p("woman", 80, 214, { c: "copper", hair: "long" }),
  ]),
  "bar-2-le-regole-del-bar": pic("room", "The rules of the bar: Emma, Giulia and Karim at the counter, the till and the receipt.", [
    o("counter", 200, 212, { c: "iron" }),
    o("espressomachine", 280, 170),
    o("note", 120, 158, { s: 0.6 }),
    p("woman", 120, 212, { c: "copper", hair: "long" }),
    p("woman", 170, 212, { c: "iron", hair: "bob" }),
    p("man", 220, 212, { c: "ochre", hair: "curly" }),
  ]),
  "bar-3-un-venerdi-al-bar": pic("room", "Emma studies all day at a table by the bar window, with a cappuccino.", [
    o("bigwindow", 120, 90),
    p("woman", 120, 212, { pose: "write", c: "copper", hair: "long" }),
    o("smalltable", 160, 212),
    o("cup", 150, 176),
    o("openbook", 172, 176, { s: 0.5 }),
    o("counter", 320, 212, { s: 0.6, c: "iron" }),
  ]),
  "bar-4-tanti-auguri-marco": pic("room", "Happy birthday, Marco! A chocolate cake, a card and a little moka pot as a present.", [
    o("counter", 200, 212, { c: "iron" }),
    o("cake", 160, 170, { c: "manganese" }),
    o("card", 210, 160, { c: "ochre" }),
    o("moka", 250, 170),
    p("man", 320, 212, { c: "cobalt", apron: true, pose: "cheer", flip: true }),
    o("lights", 200, 48),
  ]),
  "check-it-a1-al-bar": pic("porticoes", "Monday after the party: a note on the bar's door says it opens at ten. The barista is sleeping!", [
    o("door", 200, 210, { c: "iron" }),
    o("note", 200, 140, { t: "10:00" }),
    o("zzz", 260, 90),
  ]),

  /* ---------------- Unità 5 · La giornata ---------------- */
  "amadou-1-la-sveglia": pic("room", "Six in the morning: the alarm rings and Amadou, the tailor, gets up.", [
    o("window", 320, 80),
    o("bed", 150, 212),
    o("smalltable", 240, 212),
    o("alarmclock", 240, 176, { t: "6:00" }),
    p("man", 300, 212, { c: "ochre", beard: true, hair: "short" }),
  ]),
  "amadou-2-i-jeans-di-emma": pic("room", "In the tailor's shop Amadou measures Emma's jeans; the fitting room is on the right.", [
    o("sewingmachine", 90, 170),
    o("table", 90, 212),
    p("man", 190, 212, { c: "ochre", beard: true, pose: "hold" }),
    o("tape", 230, 150, { s: 0.6 }),
    p("woman", 250, 212, { c: "copper", hair: "long", flip: true }),
    o("curtain", 340, 212),
  ]),
  "amadou-3-una-telefonata": pic("room", "Wednesday evening: Amadou video-calls his daughter Awa in Dakar; two clocks, nine and eight.", [
    o("clock", 90, 50, { t: "9:00" }),
    o("clock", 150, 50, { t: "8:00" }),
    p("man", 160, 212, { pose: "sit", c: "ochre", beard: true }),
    o("table", 210, 212),
    o("laptop", 214, 174, { v: "call" }),
  ], true),
  "amadou-4-il-sabato": pic("kitchen", "Saturday: Amadou cooks thieboudienne with fish and rice, and invites the neighbours.", [
    o("stove", 320, 200),
    o("pot", 320, 144),
    p("man", 250, 212, { c: "ochre", beard: true, apron: true, flip: true }),
    o("table", 110, 212),
    o("fish", 90, 168),
    o("bowl", 130, 174),
  ]),
  "check-it-a1-giornata": pic("porticoes", "A sign on the tailor's door with the opening hours.", [
    o("door", 200, 210, { c: "manganese" }),
    o("note", 200, 130, { t: "8–12", s: 1.2 }),
    p("woman", 300, 214, { c: "copper", hair: "long", flip: true }),
  ]),

  /* ---------------- Unità 6 · Casa e quartiere ---------------- */
  "rita-1-la-casa-di-rita": pic("room", "Signora Rita, eighty-two, invites Emma for coffee in her small, bright flat.", [
    o("bigwindow", 300, 80),
    p("oldwoman", 130, 212, { pose: "sit", c: "manganese" }),
    p("woman", 270, 212, { pose: "sit", c: "copper", hair: "long", flip: true }),
    o("smalltable", 200, 212),
    o("moka", 190, 176),
    o("espresso", 212, 176),
    o("plant", 360, 212),
  ]),
  "rita-2-un-nuovo-vicino": pic("room", "On the stairs Rita meets Hiro, the young violin maker who has moved in.", [
    p("oldwoman", 130, 212, { c: "manganese", pose: "cane" }),
    p("man", 230, 212, { c: "cobalt", flip: true, pose: "hold" }),
    o("violincase", 210, 180, { s: 0.8 }),
  ]),
  "rita-3-sotto-i-portici": pic("porticoes", "Rita and Hiro walk under the porticoes: when it rains, nobody needs an umbrella.", [
    o("raincloud", 340, 56, { s: 0.8 }),
    p("oldwoman", 160, 214, { c: "manganese", pose: "cane" }),
    p("man", 230, 214, { c: "cobalt", flip: true }),
  ]),
  "rita-4-la-festa-nel-cortile": pic("piazza", "A party in the courtyard for Hiro: a long table with a red tablecloth, wine, and every neighbour brings something.", [
    o("lights", 200, 48),
    o("longtable", 200, 214, { c: "iron" }),
    o("wine", 150, 176),
    o("bowl", 200, 176),
    o("bread", 250, 176),
    p("man", 70, 214, { c: "cobalt" }),
    p("oldwoman", 330, 214, { c: "manganese", flip: true }),
  ], true),
  "check-it-a1-quartiere": pic("room", "A thank-you note in the letterbox: Hiro's violin workshop is open to everyone on Saturday.", [
    o("note", 120, 110, { s: 1.4 }),
    o("violin", 260, 180, { s: 1.6 }),
    o("table", 260, 212),
  ]),

  /* ---------------- Unità 7 · La spesa ---------------- */
  "lin-1-il-negozio": pic("room", "'Da Lin', the little grocer's at the end of the street: Lin and Grandpa Wei among the shelves.", [
    o("shelves", 120, 196),
    p("woman", 240, 212, { c: "iron", hair: "bob", apron: true }),
    p("oldman", 310, 212, { c: "cobalt", flip: true, glasses: true }),
    o("counter", 300, 212, { s: 0.5 }),
  ]),
  "lin-2-la-spesa-di-karim": pic("room", "Karim brings a shopping list for his couscous: carrots, courgettes, onions.", [
    o("counter", 200, 212, { c: "ochre" }),
    o("carrots", 160, 170),
    o("onions", 200, 170),
    o("tomatoes", 240, 170),
    p("man", 90, 212, { c: "ochre", hair: "curly", pose: "hold" }),
    o("note", 120, 156, { s: 0.5 }),
    p("woman", 300, 212, { c: "iron", hair: "bob", flip: true }),
  ]),
  "lin-3-al-mercato": pic("porticoes", "At the covered market Lin and Grandpa Wei buy apples, oranges and grapes for the shop.", [
    o("stall", 120, 210, { v: "fruit", c: "ochre" }),
    o("stall", 330, 210, { v: "veg", c: "copper" }),
    p("woman", 220, 214, { c: "iron", hair: "bob", pose: "carry" }),
    p("oldman", 260, 214, { c: "cobalt", glasses: true, flip: true }),
  ]),
  "lin-4-la-cena-di-karim": pic("kitchen", "Karim's dinner: the kitchen full of neighbours, a big pot of couscous on the stove.", [
    o("stove", 320, 200),
    o("pot", 320, 144),
    o("steam", 320, 120),
    p("man", 260, 212, { c: "ochre", hair: "curly", apron: true, flip: true }),
    p("oldwoman", 60, 212, { c: "manganese" }),
    p("man", 110, 212, { c: "cobalt" }),
    p("woman", 160, 212, { c: "iron", hair: "bob" }),
    p("man", 205, 212, { c: "copper", beard: true }),
  ]),
  "check-it-a1-spesa": pic("porticoes", "This week's offers on Lin's door: pasta, apples, fresh milk.", [
    o("door", 120, 210, { c: "copper" }),
    o("poster", 220, 120, { c: "iron", t: "€" }),
    o("pasta", 300, 214),
    o("apples", 340, 214),
    o("milk", 370, 214),
  ]),

  /* ---------------- Unità 8 · Il tempo libero ---------------- */
  "davide-1-cosa-ti-piace": pic("room", "Davide, a graphic designer, at his desk with his posters; he uses a wheelchair.", [
    o("poster", 100, 80, { c: "copper" }),
    o("poster", 170, 80, { c: "iron" }),
    o("table", 280, 212),
    o("laptop", 290, 174),
    { k: "wheelchair", x: 230, y: 212, c: "iron" },
  ]),
  "davide-2-la-partita": pic("hall", "Davide's wheelchair basketball match: his team in red, the opponents in blue.", [
    o("hoop", 360, 200),
    { k: "wheelchair", x: 150, y: 220, c: "iron" },
    o("basketball", 196, 140),
    { k: "wheelchair", x: 260, y: 216, c: "cobalt" },
  ]),
  "davide-3-usciamo-stasera": pic("room", "Davide writes to Giulia: there's a jazz concert tonight in an osteria nearby.", [
    o("phone", 110, 110, { v: "chat", s: 2 }),
    p("man", 240, 212, { c: "ochre", pose: "hold" }),
    o("sax", 270, 170),
    o("notes", 300, 100),
  ], true),
  "davide-4-ai-giardini": pic("park", "Sunday in the Giardini Margherita: a picnic on a big blanket under the trees.", [
    o("bigtree", 70, 200, { s: 0.9 }),
    o("tree", 340, 190),
    o("blanket", 200, 222),
    p("man", 140, 214, { pose: "lounge", c: "ochre", beard: true }),
    p("woman", 260, 214, { pose: "lounge", c: "iron", flip: true, hair: "long" }),
    o("bread", 200, 212),
    o("wine", 225, 214, { c: "copper" }),
    o("sun", 300, 56),
  ]),
  "check-it-a1-tempo-libero": pic("porticoes", "A new poster on Davide's door: an end-of-season party with music and pizza.", [
    o("door", 120, 210, { c: "iron" }),
    o("poster", 220, 110, { c: "iron", t: "13/6" }),
    o("notes", 290, 90),
    o("basketball", 300, 150, { s: 1.5 }),
  ]),

  /* ---------------- Unità 9 · Lavoro e studio ---------------- */
  "ana-1-venti-curriculum": pic("room", "Ana, an architect from Recife, sends twenty CVs from her laptop.", [
    p("woman", 140, 212, { pose: "sit", c: "copper", hair: "curly" }),
    o("table", 200, 212),
    o("laptop", 204, 174, { v: "mail" }),
    o("letter", 300, 100),
    o("letter", 320, 80),
    o("letter", 340, 60),
  ]),
  "ana-2-il-colloquio": pic("room", "The interview at Studio Benassi: Ana, in a blue dress, and Architetto Benassi, a kind man of sixty.", [
    o("easel", 330, 212),
    p("woman", 140, 212, { pose: "sit", c: "cobalt", hair: "curly" }),
    p("oldman", 260, 212, { pose: "sit", c: "manganese", flip: true, glasses: true }),
    o("table", 200, 212),
  ]),
  "ana-3-il-primo-giorno": pic("room", "Ana's first day at the firm: everyone says good morning, shakes her hand and offers coffee.", [
    p("woman", 110, 212, { c: "cobalt", hair: "curly", pose: "hold" }),
    p("man", 180, 212, { c: "iron", flip: true, pose: "hold" }),
    p("woman", 240, 212, { c: "copper", flip: true, hair: "bob" }),
    p("man", 300, 212, { c: "ochre", flip: true, glasses: true }),
    o("espresso", 300, 160),
  ]),
  "ana-4-le-paste-di-ana": pic("room", "End of the first week: Ana brings a big box of pastries to the office.", [
    o("table", 200, 212),
    o("pastries", 200, 174),
    o("pastrybox", 250, 174),
    p("woman", 120, 212, { c: "cobalt", hair: "curly", pose: "cheer" }),
    p("man", 300, 212, { c: "iron", flip: true }),
  ]),
  "check-it-a1-lavoro": pic("room", "A note from Benassi on Ana's desk: thank you for the Brazilian sweets.", [
    o("table", 200, 212),
    o("note", 200, 160, { s: 0.8 }),
    o("easel", 330, 212),
    o("clock", 80, 50, { t: "11:00" }),
  ]),

  /* ---------------- Unità 10 · In viaggio ---------------- */
  "marco-1-il-biglietto": pic("platform", "Bologna Centrale: Marco buys a return ticket to Naples, with Emma.", [
    o("train", 220, 200, { s: 0.8 }),
    p("man", 100, 214, { c: "cobalt", pose: "hold" }),
    o("ticket", 130, 160, { s: 0.8 }),
    p("woman", 160, 214, { c: "copper", hair: "long", flip: true }),
  ], true),
  "marco-2-in-treno": pic("traininside", "On the train to Naples: next to Marco, an elderly lady with an enormous bag full of sandwiches.", [
    p("man", 150, 212, { pose: "sit", c: "cobalt" }),
    p("oldwoman", 250, 212, { pose: "sit", c: "manganese", flip: true }),
    o("backpack", 300, 212, { s: 1.3, c: "ochre" }),
    o("bread", 230, 160, { s: 0.6 }),
  ]),
  "marco-3-napoli": pic("room", "Naples, with Vesuvius in the window: in a bar Marco pays for two coffees, one left waiting for a stranger.", [
    o("bigwindow", 290, 84),
    o("vesuvius", 290, 110, { s: 0.28 }),
    o("counter", 150, 212, { c: "iron", s: 0.9 }),
    o("espressomachine", 110, 170, { s: 0.8 }),
    o("espresso", 160, 174),
    o("espresso", 190, 174),
    p("man", 250, 212, { c: "cobalt", flip: true, pose: "point" }),
  ]),
  "marco-4-il-ritorno": pic("room", "Back in Bologna: a tray of sfogliatelle from Naples on the counter, Mum's treat.", [
    o("counter", 200, 212, { c: "iron" }),
    o("pastries", 200, 170),
    p("man", 300, 212, { c: "cobalt", apron: true, flip: true, pose: "point" }),
    p("oldwoman", 90, 212, { c: "manganese", pose: "cane" }),
  ]),
  "check-it-a1-viaggio": pic("room", "A postcard with Vesuvius arrives at the bar.", [
    o("postcard", 200, 110, { v: "vesuvius", s: 2.2 }),
    o("counter", 200, 212, { c: "iron" }),
  ]),

  /* ---------------- Unità 11 · La salute ---------------- */
  "giulia-1-il-colpo-d-aria": pic("room", "Giulia is ill in bed; Emma takes her temperature: thirty-eight point two.", [
    o("bedperson", 150, 212, { c: "iron" }),
    o("thermometer", 230, 150, { t: "38,2" }),
    p("woman", 280, 212, { c: "copper", hair: "long", flip: true, pose: "hold" }),
  ], true),
  "giulia-2-dal-medico": pic("room", "The doctor's waiting room: a man coughs, a child cries; Giulia waits with Emma.", [
    o("chair", 60, 212),
    o("chair", 120, 212),
    o("chair", 180, 212),
    p("man", 64, 212, { pose: "sit", c: "cobalt" }),
    p("woman", 124, 212, { pose: "sit", c: "iron", hair: "bob" }),
    p("woman", 184, 212, { pose: "sit", c: "copper", hair: "long" }),
    p("boy", 290, 212, { c: "ochre" }),
    o("redcross", 330, 70),
  ]),
  "giulia-3-in-farmacia": pic("porticoes", "Emma at the chemist's with the green cross lit up outside.", [
    o("greencross", 200, 70),
    o("shopfront", 200, 210, { c: "copper" }),
    p("woman", 300, 214, { c: "copper", hair: "long", flip: true }),
  ]),
  "giulia-4-trenta-e-lode": pic("room", "The anatomy exam: Giulia gets thirty cum laude, written in her grade book.", [
    o("table", 200, 212),
    o("book", 200, 174, { c: "iron" }),
    p("woman", 120, 212, { pose: "sit", c: "iron", hair: "bob" }),
    p("oldman", 280, 212, { pose: "sit", c: "cobalt", flip: true, glasses: true }),
    o("note", 200, 80, { t: "30 L", s: 1.4 }),
  ]),
  "check-it-a1-salute": pic("room", "Giulia writes to her grandma about the exam and the street that helped her.", [
    p("woman", 160, 212, { pose: "write", c: "iron", hair: "bob" }),
    o("table", 210, 212),
    o("letter", 220, 168, { s: 0.8 }),
    o("heart", 300, 80),
  ]),

  /* ---------------- Unità 12 · Le feste ---------------- */
  "emma-1-natale-con-i-tuoi": pic("porticoes", "December: lights under the porticoes, and the big debate at the bar: panettone or pandoro?", [
    o("lights", 200, 48),
    o("smalltable", 200, 214),
    o("panettone", 180, 178),
    o("pandoro", 222, 178),
    p("woman", 100, 214, { c: "copper", hair: "long" }),
    p("man", 300, 214, { c: "cobalt", flip: true, pose: "point" }),
  ], true),
  "emma-2-la-vigilia": pic("room", "Christmas Eve at Marco's mum's in Naples: eighteen round the table, and only fish.", [
    o("presepe", 340, 140, { s: 0.8 }),
    p("oldwoman", 60, 212, { pose: "sit", c: "manganese" }),
    p("man", 120, 212, { pose: "sit", c: "cobalt" }),
    p("woman", 180, 212, { pose: "sit", c: "copper", hair: "long" }),
    p("man", 240, 212, { pose: "sit", c: "iron", flip: true }),
    o("longtable", 150, 212, { c: "iron" }),
    o("fish", 130, 172),
    o("wine", 180, 174),
  ], true),
  "emma-3-capodanno": pic("room", "New Year's Eve at Giulia's: lentils and cotechino for luck, fireworks at midnight.", [
    o("bigwindow", 300, 80, { v: "night" }),
    o("fireworks", 290, 70, { s: 0.6 }),
    o("table", 140, 212),
    o("lentils", 140, 174),
    o("glass", 180, 174),
    o("clock", 80, 50, { t: "12:00" }),
  ], true),
  "emma-4-un-anno-fa": pic("room", "Epiphany: the Befana flies on her broom, and Emma finds a stocking of sweets in front of her door.", [
    o("bigwindow", 260, 80, { v: "night" }),
    o("befana", 260, 80, { s: 0.7 }),
    o("door", 90, 200),
    o("stocking", 140, 212),
  ]),
  "check-it-a1-feste": pic("room", "A card from Rita under Emma's door: Rita was the Befana! Emma laughs, remembering her enormous suitcase a year ago.", [
    o("door", 110, 200),
    o("letter", 150, 206, { s: 0.7 }),
    p("woman", 240, 212, { c: "copper", hair: "long", pose: "hold" }),
    o("stocking", 330, 140, { s: 0.8 }),
    o("suitcase", 330, 212),
  ]),

  /* ---------------- A2 · Com'era una volta ---------------- */
  "rita-5-il-pratello-di-una-volta": pic("room", "Sunday afternoon at Rita's: a coffee, and a box of old photos of Via del Pratello on the table.", [
    o("smalltable", 200, 214),
    o("boxes", 200, 176, { s: 0.6 }),
    o("frame", 330, 80),
    o("espresso", 236, 180),
    p("oldwoman", 120, 212, { pose: "sit", c: "manganese" }),
    p("woman", 290, 212, { pose: "sit", c: "copper", hair: "long", flip: true }),
  ]),
  "rita-6-il-ballo": pic("piazza", "1962: the neighbourhood festival, an orchestra in the square, and a tall young man asking Rita to dance.", [
    o("bunting", 200, 40),
    o("violin", 70, 160),
    o("sax", 110, 160),
    p("woman", 210, 214, { c: "ochre", hair: "ponytail", pose: "wave" }),
    p("man", 280, 214, { c: "iron", flip: true, pose: "point" }),
    o("notes", 90, 110),
  ], true),
  "rita-7-sai-chi-era": pic("room", "Emma and Karim in the library, looking at an old photo of Rita and Gino.", [
    o("shelves", 330, 150),
    o("table", 190, 214),
    o("openbook", 170, 176),
    o("frame", 222, 172, { s: 0.6 }),
    p("woman", 110, 212, { pose: "sit", c: "copper", hair: "long" }),
    p("man", 270, 212, { pose: "sit", c: "cobalt", flip: true }),
  ]),
  "check-it-a2-ricordi": pic("platform", "Bologna station, 1965: Gino the train conductor with his accordion at the railway workers' party.", [
    o("train", 120, 170, { s: 0.8 }),
    p("man", 260, 214, { c: "iron", pose: "hold" }),
    o("notes", 300, 120),
  ]),

  /* ---------------- A2 · Una casa nuova ---------------- */
  "ana-5-cerco-casa": pic("room", "The empty two-room flat: Mr Ferri shows Ana the little kitchen with its window over the red roofs.", [
    o("bigwindow", 290, 100),
    o("stove", 120, 200),
    p("man", 200, 212, { c: "iron", pose: "point", glasses: true }),
    p("woman", 330, 212, { c: "ochre", hair: "bun", flip: true }),
  ]),
  "ana-6-il-trasloco": pic("porticoes", "Moving day: boxes on the pavement, Karim and Marco carrying them up, Davide checking the list from his wheelchair.", [
    o("boxes", 90, 200),
    o("plant", 140, 206),
    p("man", 200, 214, { c: "cobalt", pose: "hold" }),
    p("man", 260, 214, { c: "copper", pose: "hold" }),
    o("wheelchair", 340, 214),
    o("note", 340, 150, { s: 0.6 }),
  ]),
  "ana-7-cara-mamma": pic("room", "Ana writes to her mother in Recife: the laptop on the table, the morning sun through the window over the roofs.", [
    o("window", 300, 90),
    o("sun", 300, 70, { s: 0.5 }),
    o("table", 180, 214),
    o("laptop", 180, 176),
    o("plant", 80, 206),
    p("woman", 240, 212, { pose: "sit", c: "ochre", hair: "bun", flip: true }),
  ]),
  "check-it-a2-casa": pic("room", "The housewarming: friends sitting on the floor, Karim with the wine, Rita with the cake.", [
    o("lights", 200, 40),
    o("wine", 120, 190),
    o("cake", 280, 190),
    p("woman", 70, 212, { pose: "sit", c: "ochre", hair: "bun" }),
    p("man", 160, 212, { c: "cobalt", pose: "hold" }),
    p("oldwoman", 320, 212, { c: "manganese", flip: true }),
  ], true),

  /* ---------------- A2 · Progetti ---------------- */
  "emma-5-il-corso-finisce": pic("classroom", "The last weeks of the Italian course: Lucia asks the class what they'll do after June.", [
    o("board", 110, 80, { t: "Cosa farete?" }),
    o("calendar", 330, 70),
    p("woman", 160, 212, { c: "iron", hair: "bob", pose: "point" }),
    p("man", 250, 212, { pose: "sit", c: "cobalt" }),
    p("woman", 320, 212, { pose: "sit", c: "copper", hair: "long", flip: true }),
  ]),
  "emma-6-al-posto-tuo": pic("porticoes", "At Bar Margherita everyone gives Emma advice over a cappuccino.", [
    o("smalltable", 200, 214),
    o("cup", 190, 180),
    o("espresso", 214, 182),
    p("woman", 120, 212, { pose: "sit", c: "copper", hair: "long" }),
    p("oldwoman", 280, 212, { pose: "sit", c: "manganese", flip: true }),
    p("man", 340, 214, { c: "cobalt", flip: true, pose: "point" }),
  ]),
  "emma-7-cosa-stai-facendo": pic("room", "Saturday night: Emma writes her CV on the laptop; a message pops up on her phone.", [
    o("table", 190, 214),
    o("laptop", 180, 176),
    o("phone", 230, 182),
    o("lamp", 90, 120),
    o("moon", 320, 60),
    p("woman", 260, 212, { pose: "sit", c: "copper", hair: "long", flip: true }),
  ], true),
  "check-it-a2-progetti": pic("room", "The interview at the Babele language school: the director reads Emma's CV.", [
    o("table", 200, 214),
    o("letter", 200, 178),
    o("shelves", 340, 150),
    p("man", 130, 212, { pose: "sit", c: "iron", glasses: true }),
    p("woman", 270, 212, { pose: "sit", c: "copper", hair: "long", flip: true }),
  ]),

  /* ---------------- A2 · Il quartiere cambia ---------------- */
  "lin-5-l-avviso": pic("porticoes", "A council notice on the wall of Lin's shop: car park or garden for the little square?", [
    o("shopfront", 120, 150),
    o("poster", 250, 100, { t: "Parcheggio o giardino?" }),
    p("woman", 300, 214, { c: "ochre", hair: "ponytail", pose: "point", flip: true }),
    p("oldman", 350, 214, { c: "manganese", flip: true, pose: "cane" }),
  ]),
  "lin-6-la-riunione": pic("porticoes", "The neighbourhood meeting at Bar Margherita: more people than chairs, and hands up for the garden.", [
    o("lights", 200, 40),
    p("woman", 70, 212, { pose: "sit", c: "ochre", hair: "bun" }),
    o("wheelchair", 140, 214),
    p("oldwoman", 210, 214, { c: "manganese", pose: "point" }),
    p("man", 280, 214, { c: "cobalt", pose: "wave" }),
    p("oldman", 340, 214, { c: "iron", flip: true, pose: "wave" }),
  ], true),
  "lin-7-scriviamo-alla-sindaca": pic("room", "The letter to the mayor: Grandpa Wei signs first, in Italian and in Chinese.", [
    o("table", 200, 214),
    o("letter", 200, 178),
    p("oldman", 130, 212, { pose: "sit", c: "manganese" }),
    p("woman", 270, 212, { c: "ochre", hair: "ponytail", flip: true }),
  ]),
  "check-it-a2-quartiere": pic("park", "Spring: the little square is now a garden, with trees, benches and Grandpa Wei's vegetable patch.", [
    o("bigtree", 80, 150),
    o("bench", 200, 210),
    o("tomatoes", 320, 200),
    p("oldwoman", 200, 212, { pose: "sit", c: "manganese" }),
    p("oldman", 330, 214, { c: "iron", flip: true }),
    o("sun", 330, 50),
  ]),

  /* ---------------- A2 · Arriva Siobhan ---------------- */
  "emma-8-arriva-siobhan": pic("platform", "Bologna station: Siobhan steps off the train from Milan with a huge suitcase, and Emma grabs the other side.", [
    o("train", 110, 170, { s: 0.8 }),
    o("suitcase", 250, 200),
    p("woman", 210, 214, { c: "copper", hair: "long" }),
    p("woman", 290, 214, { c: "ochre", hair: "ponytail", flip: true }),
  ]),
  "emma-9-a-firenze": pic("hall", "The Uffizi: Siobhan stands for half an hour in front of a painting, while a guard watches the room.", [
    o("frame", 200, 90, { s: 1.4 }),
    o("bench", 200, 206),
    p("woman", 170, 214, { c: "ochre", hair: "ponytail" }),
    p("woman", 240, 214, { c: "copper", hair: "long" }),
    p("man", 350, 214, { c: "iron", flip: true }),
  ]),
  "emma-10-il-regalo": pic("room", "A little leather workshop in Florence: the old craftsman wraps the brown bag for the two sisters.", [
    o("counter", 200, 200),
    o("gift", 200, 160),
    p("oldman", 130, 214, { c: "manganese", glasses: true }),
    p("woman", 280, 214, { c: "copper", hair: "long", flip: true }),
    p("woman", 340, 214, { c: "ochre", hair: "ponytail", flip: true }),
  ]),
  "check-it-a2-vacanza": pic("room", "Sunday evening: Emma on the phone to her mum in Dublin, who has the new bag and the card in Italian.", [
    o("phone", 200, 120, { s: 0.8 }),
    o("gift", 300, 196),
    p("woman", 120, 212, { pose: "sit", c: "copper", hair: "long" }),
    p("woman", 290, 214, { c: "cobalt", hair: "bob", flip: true }),
  ]),

  /* ---------------- A2 · La finale ---------------- */
  "davide-5-l-allenamento": pic("hall", "Tuesday training: Karim tries a basketball wheelchair, and his first shot goes in.", [
    o("hoop", 330, 90),
    o("basketball", 300, 70, { s: 0.7 }),
    o("wheelchair", 200, 214),
    o("wheelchair", 110, 214),
    p("woman", 60, 214, { c: "iron", hair: "ponytail", pose: "point" }),
  ]),
  "davide-6-come-si-gioca": pic("porticoes", "At the bar Davide explains the rules to Emma, moving coffee cups around the table like players.", [
    o("smalltable", 200, 214),
    o("espresso", 180, 182),
    o("espresso", 210, 182),
    o("cup", 236, 180),
    o("wheelchair", 120, 214),
    p("woman", 290, 212, { pose: "sit", c: "copper", hair: "long", flip: true }),
  ]),
  "davide-7-la-finale": pic("hall", "The final: a full arena, Grandpa Wei waving a flag, and the cup going up to the stands.", [
    o("hoop", 60, 90),
    o("bunting", 200, 40),
    o("flag", 300, 120),
    o("crown", 200, 120, { s: 0.6 }),
    o("wheelchair", 180, 214),
    p("oldman", 320, 214, { c: "manganese", flip: true, pose: "wave" }),
  ], true),
  "check-it-a2-sport": pic("porticoes", "The day after: the cup shines on the bar counter, and Davide's photo is in the paper.", [
    o("counter", 200, 200),
    o("crown", 170, 160, { s: 0.7 }),
    o("poster", 320, 100, { t: "Bologna campione!" }),
    p("man", 260, 214, { c: "cobalt", pose: "hold", flip: true }),
  ]),

  /* ---------------- A2 · La prof ---------------- */
  "emma-11-il-primo-giorno": pic("classroom", "Emma's first evening class: she arrives soaked from the rain, and a student hands her a tissue.", [
    o("board", 110, 80, { t: "My name is Emma" }),
    o("raincloud", 330, 50, { s: 0.6 }),
    p("woman", 200, 214, { c: "copper", hair: "long" }),
    p("woman", 270, 212, { pose: "sit", c: "cobalt", hair: "bun", flip: true }),
    p("oldman", 340, 212, { pose: "sit", c: "iron", flip: true }),
  ]),
  "emma-12-i-miei-studenti": pic("classroom", "The Tuesday class: Ugo the old cook, Teresa the nurse, and quiet Nicolò singing a U2 song.", [
    o("board", 100, 80, { t: "Your favourite song?" }),
    o("notes", 260, 90),
    p("man", 250, 214, { c: "ochre", pose: "wave" }),
    p("oldman", 170, 212, { pose: "sit", c: "manganese" }),
    p("woman", 330, 212, { pose: "sit", c: "cobalt", hair: "bun", flip: true }),
  ]),
  "emma-13-cosa-ha-detto": pic("porticoes", "At Bar Margherita Emma tells Rita what the director said, and Marco brings two hot chocolates.", [
    o("smalltable", 200, 214),
    o("cup", 186, 180),
    o("cup", 214, 180),
    p("woman", 120, 212, { pose: "sit", c: "copper", hair: "long" }),
    p("oldwoman", 280, 212, { pose: "sit", c: "manganese", flip: true }),
    p("man", 340, 214, { c: "cobalt", flip: true, pose: "hold" }),
  ], true),
  "check-it-a2-lavoro": pic("room", "Rita leafs through a book of old Bologna photographs: Emma's present from her first pay.", [
    o("openbook", 200, 176),
    o("smalltable", 200, 214),
    o("frame", 330, 80),
    p("oldwoman", 130, 212, { pose: "sit", c: "manganese" }),
    p("woman", 280, 214, { c: "copper", hair: "long", flip: true }),
  ]),
  "karim-5-in-onda": pic("room", "Radio Pratello's tiny studio: Karim at the microphone, nervous, Nicolò at the computer, Davide giving a thumbs-up.", [
    o("smalltable", 200, 214),
    o("microphone", 170, 176),
    o("laptop", 250, 180),
    o("lights", 200, 40),
    p("man", 140, 212, { pose: "sit", c: "cobalt" }),
    p("man", 270, 212, { pose: "sit", c: "iron", flip: true }),
    o("wheelchair", 340, 214),
  ]),
  "karim-6-il-notiziario": pic("piazza", "The neighbourhood news: the new garden in the little square, opened by the mayor, with twelve young trees.", [
    o("bigtree", 90, 214, { s: 0.7 }),
    o("bigtree", 310, 214, { s: 0.7 }),
    o("bunting", 200, 50),
    p("woman", 200, 214, { c: "manganese", hair: "bob", pose: "wave" }),
    o("sun", 340, 50),
  ]),
  "karim-7-consigli-per-studenti": pic("room", "In the studio Ana and Emma give advice to new students, and a listener calls in.", [
    o("smalltable", 200, 214),
    o("microphone", 160, 176),
    o("microphone", 240, 176),
    o("phone", 340, 90),
    p("woman", 120, 212, { pose: "sit", c: "ochre", hair: "bun" }),
    p("woman", 280, 212, { pose: "sit", c: "copper", hair: "long", flip: true }),
  ]),
  "check-it-a2-radio": pic("room", "A message from Karim's mum in Turin: his father is proud, but Karim talks too fast.", [
    o("phone", 200, 120),
    o("frame", 330, 80),
    p("man", 120, 214, { c: "cobalt", pose: "hold" }),
  ]),
};
