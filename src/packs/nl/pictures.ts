import type { PictureSpec } from "@/core/content";
import { o, p, pic } from "@/core/pictures";

/**
 * A picture for every Dutch text, story episode and checkpoint scene (Matteo,
 * 21 Nov 2026). Each one is drawn from its own text: the alt line says what
 * it shows, and tests check every text has one.
 */
export const pictures: Record<string, PictureSpec> = {
  /* ---------------- A1 · De basis ---------------- */
  "hallo-en-tot-ziens": pic("street", "Two neighbours wave hello to each other in a street of tall Dutch houses; the sun is out.", [
    o("sun", 340, 56),
    p("woman", 150, 214, { pose: "wave", c: "iron" }),
    p("man", 250, 214, { pose: "wave", flip: true, c: "copper" }),
  ]),
  "overal-getallen": pic("classroom", "Dutch class: the teacher Ingrid stands by a board with 0 1 2 3; students sit at their tables counting.", [
    o("board", 110, 80, { t: "0 1 2 3" }),
    p("woman", 210, 212, { pose: "point", c: "manganese", hair: "bob", flip: true }),
    p("man", 270, 212, { pose: "sit", c: "cobalt" }),
    p("woman", 340, 212, { pose: "sit", c: "iron", hair: "curly" }),
    o("longtable", 305, 212, { c: "ochre", s: 0.55 }),
  ]),
  "het-jaar-rond": pic("kitchen", "A big calendar hangs on the kitchen wall; Noor writes the birthdays on it.", [
    o("calendar", 120, 90, { s: 1.6 }),
    p("woman", 170, 212, { pose: "write", c: "copper", flip: true, hair: "long" }),
    o("table", 300, 212),
  ]),
  "kunt-u-dat-herhalen": pic("room", "Kenji, new in the Netherlands, stands at the bakery counter; the baker asks what he'd like.", [
    o("shelves", 270, 160, { v: "bread", s: 0.9 }),
    p("man", 280, 212, { apron: true, c: "ochre", pose: "hold", flip: true }),
    o("counter", 280, 212, { s: 0.9 }),
    o("bread", 250, 174),
    p("man", 110, 212, { c: "cobalt", hair: "short" }),
    o("bubble", 150, 96, { t: "?" }),
  ]),
  "check-a1-basis": pic("room", "Mrs De Vries gives Priya a present: a birthday calendar.", [
    o("calendar", 320, 80, { s: 1.2 }),
    p("oldwoman", 150, 212, { pose: "hold", c: "manganese" }),
    o("gift", 186, 165),
    p("woman", 240, 212, { flip: true, c: "iron", hair: "long" }),
  ]),

  /* ---------------- A1 · Kennismaken ---------------- */
  "marta-1-nieuw-in-leiden": pic("canal", "Marta's new street in Leiden: tall old houses on a canal, a bakery below her window and a bike by the water.", [
    o("shopfront", 105, 234, { c: "ochre", s: 0.8 }),
    o("smell", 105, 150),
    o("bike", 250, 234, { c: "iron" }),
    p("woman", 330, 234, { c: "copper", hair: "ponytail" }),
    o("suitcase", 355, 234),
  ]),
  "marta-2-de-buren": pic("street", "Marta rings the bell at number twelve holding a cake; Noor opens the door.", [
    o("door", 230, 210, { t: "12", s: 1.2 }),
    p("woman", 262, 214, { flip: true, c: "cobalt", hair: "long", pose: "wave" }),
    p("woman", 150, 214, { c: "copper", hair: "ponytail", pose: "hold" }),
    o("cake", 184, 162, { s: 0.7 }),
  ]),
  "marta-3-een-taalmaatje": pic("room", "Marta at her table reads a language buddy's profile on her laptop.", [
    o("window", 320, 80),
    p("woman", 180, 212, { pose: "sit", c: "copper", hair: "ponytail" }),
    o("table", 230, 212),
    o("laptop", 230, 174, { v: "call" }),
    o("cup", 266, 174),
  ]),
  "marta-4-een-pakketje": pic("street", "Evening: Marta opens her front door and finds a parcel; the bakery is dark.", [
    o("moon", 340, 56),
    o("door", 200, 210, { c: "cobalt" }),
    p("woman", 240, 214, { c: "copper", hair: "ponytail", flip: true }),
    o("parcel", 190, 214),
  ], true),
  "waar-kom-je-vandaan": pic("street", "A street party on the Oude Vest: a table of food, flags, music; Mrs De Vries talks to a man carrying a baby.", [
    o("bunting", 200, 48),
    o("longtable", 110, 214, { s: 0.7 }),
    o("cake", 80, 187, { s: 0.6 }),
    o("bowl", 126, 187),
    o("radio", 150, 188, { s: 0.6 }),
    p("oldwoman", 240, 214, { c: "manganese", pose: "point" }),
    p("man", 320, 214, { flip: true, c: "copper", pose: "carry" }),
    o("baby", 320, 170),
  ]),
  "check-a1-kennismaken": pic("classroom", "A new student, Daniel, introduces himself in class; Marta sits next to him.", [
    o("board", 90, 70),
    p("man", 190, 212, { pose: "sit", c: "iron", hair: "curly" }),
    p("woman", 260, 212, { pose: "sit", c: "copper", hair: "ponytail" }),
    o("longtable", 225, 212, { c: "ochre", s: 0.55 }),
    o("bubble", 200, 110, { t: "Hoi!" }),
  ]),

  /* ---------------- A1 · Familie ---------------- */
  "familie-1-de-familie-yilmaz": pic("street", "The Yilmaz family in front of Yusuf's clothes shop on the corner: Yusuf, Elif, Emre and Defne.", [
    o("shopfront", 90, 210, { c: "manganese" }),
    p("man", 200, 214, { c: "cobalt", beard: true }),
    p("woman", 250, 214, { c: "copper", hair: "long" }),
    p("boy", 300, 214, { c: "ochre" }),
    p("girl", 335, 214, { c: "iron", hair: "ponytail" }),
  ]),
  "familie-2-hoor-je-mij": pic("room", "Sunday evening: the family sits in front of the laptop to call Ayşe in Istanbul; Defne holds up her drawing.", [
    p("man", 140, 212, { pose: "sit", c: "cobalt", beard: true }),
    p("girl", 200, 214, { c: "iron", hair: "ponytail", pose: "hold" }),
    o("frame", 226, 160, { s: 0.5, v: "portrait" }),
    p("boy", 250, 214, { c: "ochre" }),
    o("table", 300, 212),
    o("laptop", 300, 174, { v: "call", flip: true }),
  ]),
  "familie-3-opa-wordt-tachtig": pic("room", "A circle birthday: chairs round the room, a cake with 80 on it, and Grandpa Ahmet shaking a guest's hand.", [
    o("chair", 40, 212),
    o("chair", 80, 212),
    o("chair", 360, 212, { flip: true }),
    o("smalltable", 120, 212),
    o("cake", 120, 176, { t: "80", s: 0.8 }),
    p("oldman", 200, 212, { c: "cobalt", pose: "hold", glasses: true }),
    p("woman", 260, 212, { flip: true, c: "copper", pose: "hold", hair: "long" }),
  ]),
  "familie-4-een-mail-uit-istanbul": pic("room", "Yusuf reads an email from his sister in Istanbul on his laptop.", [
    o("window", 90, 80),
    p("man", 190, 212, { pose: "sit", c: "cobalt", beard: true }),
    o("table", 240, 212),
    o("laptop", 240, 174, { v: "mail" }),
  ]),
  "check-a1-familie": pic("street", "A note on the door of the clothes shop; Mrs De Vries reads it to Marta.", [
    o("shopfront", 120, 210, { c: "manganese" }),
    o("note", 156, 160, { s: 0.8 }),
    p("oldwoman", 240, 214, { flip: true, c: "manganese", pose: "point" }),
    p("woman", 300, 214, { flip: true, c: "copper", hair: "ponytail" }),
  ]),

  /* ---------------- A1 · Eten en boodschappen ---------------- */
  "avond-1-een-plan": pic("kitchen", "Monday evening: Luca, Noor and Bram sit in the kitchen; the fridge stands open and almost empty.", [
    o("fridge", 60, 200),
    p("man", 160, 212, { pose: "sit", c: "iron" }),
    p("woman", 220, 212, { pose: "sit", c: "cobalt" }),
    p("man", 290, 212, { pose: "sit", c: "ochre", flip: true, hair: "curly" }),
    o("table", 225, 212, { s: 1.2 }),
    o("note", 210, 166, { s: 0.6 }),
  ]),
  "avond-2-in-de-supermarkt": pic("room", "At the supermarket: Luca holds the shopping list, Noor pushes a trolley past shelves of food.", [
    o("shelves", 110, 196),
    o("shelves", 300, 196, { v: "bottles" }),
    p("man", 180, 212, { c: "iron", pose: "hold" }),
    o("note", 210, 162, { s: 0.45 }),
    o("trolley", 250, 212),
    p("woman", 290, 212, { c: "cobalt", pose: "hold", flip: true }),
  ]),
  "avond-3-op-de-markt": pic("street", "Saturday market: stalls with vegetables, fish, cheese and flowers; Luca carries baguettes, Fatima walks with him.", [
    o("stall", 60, 210, { v: "veg" }),
    o("stall", 170, 210, { v: "fish", c: "cobalt" }),
    o("stall", 280, 210, { v: "cheese", c: "ochre" }),
    o("stall", 380, 210, { v: "flowers", c: "copper" }),
    p("man", 200, 228, { c: "iron", pose: "carry" }),
    o("baguettes", 200, 188, { s: 0.8 }),
    p("woman", 250, 228, { c: "copper", hair: "scarf" }),
  ]),
  "avond-4-eet-smakelijk": pic("kitchen", "Dinner time: a pot steams on the stove while Luca cuts onions and Noor sets the table with plates and glasses.", [
    o("stove", 330, 200),
    o("steam", 330, 130),
    p("man", 260, 212, { c: "iron", pose: "hold", flip: true, apron: true }),
    o("onions", 236, 170, { s: 0.6 }),
    p("woman", 80, 212, { c: "cobalt", pose: "hold" }),
    o("table", 150, 212),
    o("plate", 120, 174),
    o("plate", 160, 174),
    o("glass", 186, 174),
  ]),
  "check-a1-eten": pic("kitchen", "Sunday morning: three pans still in the kitchen, a note on the table; Bram, tired but happy, makes coffee.", [
    o("stove", 330, 200),
    o("pan", 300, 160),
    o("pot", 350, 160),
    o("table", 150, 212),
    o("note", 130, 168, { s: 0.6 }),
    o("cup", 170, 174),
    p("man", 240, 212, { c: "ochre", hair: "curly", pose: "hold" }),
  ]),

  /* ---------------- A1 · Dag en tijd ---------------- */
  "week-1-vroeg-op": pic("room", "Half past four in the morning: the alarm goes off and Ruth wakes up; the moon is still in the window.", [
    o("window", 320, 80, { v: "night" }),
    o("moon", 320, 76, { s: 0.6 }),
    o("bedperson", 150, 212, { c: "iron" }),
    o("smalltable", 250, 212),
    o("alarmclock", 250, 176, { t: "4:30" }),
  ], true),
  "week-2-een-afspraak": pic("street", "Evening: Ruth rings Luca's doorbell to ask if he can take Jayden to the dentist on Thursday.", [
    o("moon", 60, 56),
    o("door", 270, 210, { t: "12" }),
    p("man", 238, 214, { c: "iron", flip: true }),
    p("woman", 160, 214, { c: "copper", hair: "curly", pose: "point" }),
    o("calendar", 120, 90, { s: 0.8 }),
  ], true),
  "week-3-half-vier": pic("room", "Thursday at the library: Luca and Jayden read at a table; the clock shows ten past three.", [
    o("shelves", 70, 196, { v: "books" }),
    o("shelves", 330, 196, { v: "books" }),
    o("clock", 200, 50, { t: "3:10" }),
    p("man", 160, 212, { pose: "sit", c: "iron" }),
    p("boy", 240, 212, { pose: "sit", c: "ochre", flip: true }),
    o("table", 200, 212),
    o("openbook", 180, 174, { s: 0.6 }),
    o("openbook", 220, 174, { s: 0.6 }),
  ]),
  "week-4-vrijdagavond": pic("room", "Friday evening in Bram's café: Ruth, Luca and Noor have a beer and talk and laugh.", [
    o("shelves", 330, 150, { v: "bottles", s: 0.7 }),
    p("woman", 120, 212, { pose: "sit", c: "copper", hair: "curly" }),
    p("man", 200, 212, { pose: "sit", c: "iron" }),
    p("woman", 270, 212, { pose: "sit", c: "cobalt", flip: true }),
    o("table", 195, 212, { s: 1.1 }),
    o("beer", 160, 174),
    o("beer", 200, 174),
    o("beer", 235, 174),
  ], true),
  "check-a1-dag-en-tijd": pic("street", "Wednesday morning: a note from Ruth lies under Luca's door; Luca picks it up and laughs.", [
    o("door", 200, 210, { t: "12" }),
    o("note", 230, 200, { s: 0.6 }),
    p("man", 290, 214, { c: "iron", flip: true, pose: "hold" }),
    o("clock", 80, 70, { t: "2:00" }),
  ]),

  /* ---------------- A1 · Wonen en de stad ---------------- */
  "buurman-1-kamer-te-huur": pic("street", "Kwame reads a 'room for rent' advert in the bakery window.", [
    o("shopfront", 170, 210, { c: "ochre" }),
    o("note", 140, 160, { s: 0.9 }),
    p("man", 280, 214, { c: "copper", flip: true, pose: "point" }),
  ]),
  "buurman-2-verhuizen": pic("canal", "Moving day: Kwame rides Ruth's cargo bike full of boxes along the canal; Luca cycles behind.", [
    p("man", 172, 204, { pose: "ride", c: "copper" }),
    o("cargobike", 160, 234, { v: "boxes" }),
    p("man", 300, 204, { pose: "ride", c: "iron" }),
    o("bike", 300, 234, { c: "copper" }),
  ]),
  "buurman-3-de-weg-vragen": pic("street", "Ruth outside the bakery points the way to the town hall; Kwame listens.", [
    o("townhall", 330, 210, { s: 0.9 }),
    o("tree", 250, 210),
    p("woman", 120, 214, { c: "copper", hair: "curly", pose: "point", apron: true }),
    p("man", 190, 214, { c: "copper", flip: true }),
  ]),
  "buurman-4-videobellen": pic("room", "Kwame shows his mother his attic room on a video call: the bed under the window, an old wardrobe by the door.", [
    o("window", 150, 70),
    o("bed", 150, 212),
    o("wardrobe", 330, 212),
    p("man", 250, 214, { c: "copper", pose: "phone" }),
  ]),
  "check-a1-wonen": pic("street", "A note on Kwame's door about the bins; the grey bin and the green bin stand outside.", [
    o("door", 140, 210, { t: "14" }),
    o("note", 140, 160, { s: 0.7 }),
    o("bins", 260, 214),
  ]),

  /* ---------------- A1 · Werk en studie ---------------- */
  "werk-1-in-de-taalles": pic("classroom", "Evening Dutch class: Ingrid at the board, students from many countries at their tables; the clock says seven.", [
    o("board", 110, 80),
    o("clock", 300, 40, { t: "7:00" }),
    p("woman", 210, 212, { c: "manganese", hair: "bob", pose: "point", flip: true }),
    p("woman", 260, 212, { pose: "sit", c: "copper", hair: "scarf" }),
    p("man", 320, 212, { pose: "sit", c: "iron" }),
    p("man", 380, 212, { pose: "sit", c: "copper" }),
    o("longtable", 320, 212, { s: 0.6 }),
  ], true),
  "werk-2-verkoper-gezocht": pic("street", "Fatima cycles up to the bakery; a 'shop assistant wanted' note hangs in the window and the shop is busy.", [
    o("shopfront", 170, 210, { c: "ochre" }),
    o("note", 140, 160, { s: 0.8 }),
    p("woman", 230, 214, { c: "cobalt", flip: true }),
    p("man", 260, 214, { c: "iron", flip: true }),
    o("bike", 340, 214, { c: "copper" }),
  ]),
  "werk-3-het-gesprek": pic("room", "The job interview: Fatima and Ruth sit at a little table in the empty bakery.", [
    o("shelves", 200, 150, { v: "bread", s: 0.8 }),
    p("woman", 150, 212, { pose: "sit", c: "copper", hair: "scarf" }),
    p("woman", 250, 212, { pose: "sit", c: "ochre", hair: "curly", flip: true }),
    o("smalltable", 200, 212),
    o("cup", 190, 176),
    o("cup", 210, 176),
  ]),
  "werk-4-de-eerste-zaterdag": pic("room", "Fatima's first Saturday: in a white apron behind the counter, she serves Mrs De Vries.", [
    o("shelves", 220, 150, { v: "bread", s: 0.8 }),
    p("woman", 230, 212, { c: "copper", hair: "scarf", apron: true, flip: true, pose: "hold" }),
    o("counter", 230, 212, { s: 0.9 }),
    o("rolls", 200, 170, { s: 0.7 }),
    p("oldwoman", 90, 212, { c: "manganese" }),
  ]),
  "wat-voor-werk-doet-u": pic("street", "At the market a radio reporter asks people what work they do; Peter, retired, answers.", [
    o("stall", 340, 210, { v: "veg" }),
    p("woman", 150, 214, { c: "iron", hair: "bob", pose: "hold" }),
    o("microphone", 180, 166),
    p("oldman", 230, 214, { flip: true, c: "copper", beard: true }),
  ]),
  "check-a1-werk-en-studie": pic("room", "Ruth gives Fatima next week's timetable; a basket of rolls stands on the counter.", [
    o("calendar", 320, 80),
    p("woman", 150, 212, { c: "ochre", hair: "curly", pose: "hold", apron: true }),
    o("note", 182, 162, { s: 0.6 }),
    p("woman", 230, 212, { c: "copper", hair: "scarf", flip: true }),
    o("counter", 330, 212, { s: 0.5 }),
    o("rolls", 330, 191, { s: 0.7 }),
  ]),

  /* ---------------- A1 · Gezondheid ---------------- */
  ziek: pic("room", "Monday morning: Bram lies in bed, ill, with a thermometer and a glass of water.", [
    o("window", 320, 80),
    o("bedperson", 160, 212, { c: "copper" }),
    o("smalltable", 260, 212),
    o("thermometer", 252, 176),
    o("glass", 270, 176, { c: "cobalt" }),
  ]),
  "bij-de-huisarts": pic("room", "Bram, still ill, calls the GP's practice at eight o'clock.", [
    o("clock", 300, 50, { t: "8:00" }),
    o("bed", 110, 212),
    o("tissues", 110, 190),
    p("man", 230, 212, { c: "copper", pose: "phone", hair: "curly" }),
  ]),
  "gezond-leven": pic("room", "Bram on the sofa with a bag of chips; Noor gives him tips: an apple, the bike, sleep.", [
    o("sofa", 140, 212),
    p("man", 140, 212, { pose: "lounge", c: "copper", hair: "curly" }),
    o("bowl", 110, 160),
    p("woman", 280, 212, { c: "cobalt", pose: "hold", flip: true }),
    o("apples", 252, 162, { s: 0.5 }),
    o("bike", 360, 212, { s: 0.7 }),
  ]),
  "au-mijn-knie": pic("pitch", "On the football pitch Daan has fallen and holds his knee; the coach bends over him.", [
    o("goal", 320, 170, { s: 0.9 }),
    p("boy", 160, 220, { pose: "lounge", c: "iron" }),
    o("football", 230, 222),
    p("man", 200, 220, { c: "cobalt", pose: "point", flip: true, hair: "cap" }),
  ]),
  "check-a1-gezondheid": pic("street", "A get-well card with a big sun on it lies by the door of number twelve.", [
    o("door", 200, 210, { t: "12" }),
    o("postcard", 270, 150, { s: 1.4 }),
    o("sun", 270, 146, { s: 0.6 }),
  ]),

  /* ---------------- A1 · Vrije tijd en weer ---------------- */
  "het-weer": pic("field", "Dutch weather in one day: sun, rain and wind; Kwame has a raincoat and an umbrella.", [
    o("sun", 80, 56),
    o("raincloud", 220, 56),
    o("wind", 330, 70),
    o("windmill", 330, 150, { s: 0.8 }),
    p("man", 200, 226, { c: "copper", pose: "hold" }),
    o("umbrella", 228, 218),
  ]),
  "een-verjaardag": pic("room", "Kwame wonders what to buy Noor for her birthday; Bram suggests a book.", [
    o("bubble", 150, 70, { t: "?" }),
    p("man", 130, 212, { c: "copper" }),
    p("man", 230, 212, { flip: true, c: "ochre", hair: "curly", pose: "hold" }),
    o("book", 204, 160, { c: "iron" }),
    o("gift", 320, 212),
  ]),
  "wat-doe-jij-in-je-vrije-tijd": pic("room", "Free time: Fatima sings in a choir in an old church, others play games or music.", [
    o("church", 300, 200, { s: 0.9 }),
    p("woman", 110, 212, { c: "copper", hair: "scarf" }),
    o("notes", 134, 110),
    p("man", 180, 212, { pose: "sit", c: "iron" }),
    o("guitar", 196, 190, { s: 0.7 }),
  ]),
  "nederland-op-de-fiets": pic("field", "Everyone cycles: a child to school, an adult to work, grandparents to the market, on a red bike path past a windmill.", [
    o("windmill", 340, 150),
    p("girl", 74, 206, { pose: "ride", c: "iron", hair: "ponytail" }),
    o("bike", 80, 226, { c: "iron", s: 0.75 }),
    p("man", 172, 196, { pose: "ride", c: "cobalt" }),
    o("bike", 180, 226, { c: "ochre" }),
    p("oldwoman", 262, 196, { pose: "ride", c: "manganese" }),
    o("bike", 270, 226, { c: "copper" }),
  ]),
  "check-a1-vrije-tijd": pic("beach", "Before the beach, Noor checks the rain radar on her phone; Kwame looks at the sky.", [
    o("raincloud", 300, 56),
    p("woman", 150, 220, { c: "cobalt", pose: "phone" }),
    o("phone", 70, 80, { v: "radar", s: 1.3 }),
    p("man", 230, 220, { c: "copper", flip: true }),
  ]),

  /* ---------------- A1 · Kleren en winkels ---------------- */
  "een-winterjas": pic("room", "November: Kwame tries on a warm winter coat in a clothes shop; Noor helps him choose.", [
    o("rack", 90, 212),
    o("mirror", 330, 212),
    p("man", 230, 212, { c: "cobalt", flip: true }),
    p("woman", 170, 212, { c: "iron", pose: "point" }),
    o("window", 230, 70),
    o("snow", 230, 70, { s: 0.4 }),
  ]),
  "online-bestellen": pic("room", "Fatima orders brown work shoes online; the parcel arrives.", [
    p("woman", 160, 212, { pose: "sit", c: "copper", hair: "scarf" }),
    o("table", 210, 212),
    o("laptop", 214, 174, { v: "shoe" }),
    o("parcel", 320, 212),
  ]),
  "wat-trek-ik-aan": pic("room", "Before his internship interview, Luca stands at his open wardrobe with a suit and a tie; Bram gives advice.", [
    o("wardrobeopen", 110, 212),
    p("man", 200, 212, { c: "iron", flip: true }),
    p("man", 290, 212, { c: "ochre", hair: "curly", flip: true, pose: "point" }),
  ]),
  "check-a1-kleren": pic("street", "Thursday late-night shopping: the other shops are shut, Yusuf's clothes shop is still lit and busy.", [
    o("moon", 340, 56),
    o("shopfront", 170, 210, { c: "manganese" }),
    o("window", 170, 170, { v: "night", s: 0.6 }),
    p("woman", 270, 214, { c: "copper", hair: "scarf", flip: true }),
    p("man", 320, 214, { c: "cobalt", flip: true }),
  ], true),

  /* ---------------- A1 · Nederland ontdekken ---------------- */
  "nederland-in-het-klein": pic("field", "The Netherlands in a nutshell: flat land, a windmill, tulips, a bike, cheese and the North Sea.", [
    o("windmill", 300, 150),
    o("tulips", 60, 200),
    o("tulips", 100, 205),
    o("bike", 190, 220, { c: "iron" }),
    o("cheese", 370, 220),
  ]),
  "een-dagje-amsterdam": pic("canal", "Priya and her parents on a day trip to Amsterdam, by the canal.", [
    p("woman", 140, 234, { c: "iron", hair: "long", pose: "point" }),
    p("oldman", 210, 234, { c: "cobalt", glasses: true }),
    p("oldwoman", 260, 234, { c: "manganese", hair: "long" }),
    o("boat", 340, 192, { s: 0.8 }),
  ]),
  "groeten-uit": pic("sea", "Greetings from Texel: the ferry from Den Helder, sheep in the dunes and the red lighthouse.", [
    o("ferry", 130, 150, { s: 0.8 }),
    o("lighthouse", 340, 150),
    o("postcard", 230, 205, { v: "sheep", s: 1.2 }),
  ]),
  "check-a1-nederland": pic("beach", "A postcard from Texel: Marta cycles through the dunes; there are more sheep than people.", [
    p("woman", 132, 184, { pose: "ride", c: "copper", hair: "ponytail" }),
    o("bike", 140, 214, { c: "copper" }),
    o("postcard", 300, 200, { v: "sheep", s: 1.3 }),
  ]),

  /* ---------------- A1 · Feestdagen ---------------- */
  koningsdag: pic("street", "King's Day: orange flags, a crown, and people in orange selling things at the street market.", [
    o("bunting", 200, 48, { c: "ochre" }),
    o("crown", 60, 70),
    o("flag", 350, 214, { c: "ochre" }),
    o("smalltable", 120, 214),
    o("book", 110, 178),
    o("cup", 132, 178),
    p("woman", 190, 214, { c: "ochre", pose: "cheer" }),
    p("boy", 250, 214, { c: "ochre", hair: "cap" }),
  ]),
  sinterklaas: pic("room", "Sinterklaas, an old man with a long white beard, a red cloak and a tall hat; a child's shoe waits by the door with a carrot.", [
    o("door", 320, 200),
    o("shoe", 280, 212),
    p("man", 150, 212, { hair: "mitre", beard: true, c: "iron", pose: "cane", s: 1.15 }),
  ]),
  "oud-en-nieuw": pic("room", "New Year's Eve: fireworks outside the window, a bowl of oliebollen and the TV on.", [
    o("bigwindow", 120, 80, { v: "night" }),
    o("fireworks", 104, 66, { s: 0.6 }),
    o("fireworks", 140, 92, { s: 0.4, c: "ochre" }),
    o("table", 120, 212),
    o("bowl", 120, 174, { v: "balls" }),
    o("tv", 300, 212),
  ], true),
  "check-a1-feestdagen": pic("street", "St Martin's evening: Jayden, Emre and Defne sing at Mrs De Vries's door with paper lanterns.", [
    o("moon", 60, 56),
    o("door", 320, 210),
    p("oldwoman", 300, 214, { c: "manganese", flip: true, pose: "hold" }),
    p("boy", 140, 214, { c: "ochre", pose: "hold" }),
    o("lantern", 160, 190, { s: 0.8 }),
    p("boy", 190, 214, { c: "iron", pose: "hold" }),
    o("lantern", 210, 190, { s: 0.8, c: "ochre" }),
    p("girl", 240, 214, { c: "copper", hair: "ponytail", pose: "hold" }),
    o("lantern", 262, 190, { s: 0.8 }),
  ], true),

  /* ---------------- A2 · Wat heb je gedaan? ---------------- */
  "een-druk-weekend": pic("street", "Noor at the market's cheese stall meets an old friend, Joris; her bike basket is full of flowers and fish.", [
    o("stall", 120, 210, { v: "cheese", c: "ochre" }),
    p("woman", 220, 214, { c: "cobalt", pose: "wave" }),
    p("man", 280, 214, { c: "copper", flip: true, beard: true }),
    o("bike", 360, 214),
    o("flowers", 350, 180, { s: 0.6 }),
  ]),
  "mijn-leven-in-het-kort": pic("street", "Mehmet, a bus driver in Rotterdam, tells his daughter Zehra about his life for her school project.", [
    o("bus", 120, 210),
    p("man", 250, 214, { c: "cobalt", beard: true, hair: "cap" }),
    p("girl", 300, 214, { c: "iron", hair: "long", flip: true, pose: "write" }),
  ]),
  verhuisd: pic("room", "Moved! Moving boxes everywhere in the new flat in Utrecht, near the station.", [
    o("window", 300, 80),
    o("boxes", 110, 212),
    o("boxes", 180, 212, { s: 0.8 }),
    o("plant", 360, 212),
    p("woman", 250, 212, { c: "copper", pose: "carry", hair: "bob" }),
    o("parcel", 250, 170, { s: 0.6 }),
  ]),
  "het-dagboek-van-anne-frank": pic("canal", "The house on the Prinsengracht where Anne Frank hid, by the canal with a tall tree, and her diary.", [
    o("canalhouse", 190, 136, { s: 0.85 }),
    o("bigtree", 290, 136, { s: 0.8 }),
    o("openbook", 120, 226, { s: 1.4 }),
  ]),
  "check-a2-verleden": pic("street", "4 May, eight in the evening: everyone stands still for two minutes; a flag at half mast and a wreath.", [
    o("flag", 80, 210, { c: "cobalt", v: "half" }),
    o("wreath", 200, 180),
    p("man", 280, 214, { c: "cobalt" }),
    p("woman", 330, 214, { c: "manganese" }),
  ], true),

  /* ---------------- A2 · Werk zoeken ---------------- */
  "een-vacature": pic("room", "Agnieszka finds a job advert from an online bike shop on her laptop.", [
    p("woman", 150, 212, { pose: "sit", c: "iron", hair: "long" }),
    o("table", 200, 212),
    o("laptop", 204, 174),
    o("wheel", 320, 120),
  ]),
  "de-sollicitatiebrief": pic("room", "Agnieszka writes her application letter.", [
    o("window", 320, 80),
    p("woman", 160, 212, { pose: "write", c: "iron", hair: "long" }),
    o("table", 210, 212),
    o("letter", 220, 168, { s: 0.8 }),
  ]),
  "het-gesprek": pic("room", "Agnieszka practises for her interview with her neighbour Henk, a retired HR manager.", [
    p("woman", 140, 212, { pose: "sit", c: "iron", hair: "long" }),
    p("oldman", 260, 212, { pose: "sit", c: "cobalt", flip: true, glasses: true }),
    o("table", 200, 212),
    o("cup", 186, 174),
    o("cup", 214, 174),
  ]),
  "werken-in-nederland": pic("room", "A Dutch office: part-time work, a free Wednesday on the calendar, and home at five.", [
    o("calendar", 100, 80),
    o("clock", 300, 50, { t: "5:00" }),
    p("woman", 180, 212, { c: "cobalt", pose: "wave", hair: "bob" }),
    o("bike", 300, 212),
  ]),
  "check-a2-werk": pic("room", "May: Esther's holiday pay arrives, and she books a trip to Portugal straight away.", [
    o("plane", 300, 60),
    o("sun", 340, 56, { s: 0.6 }),
    p("woman", 160, 212, { c: "iron", pose: "cheer", hair: "curly" }),
    o("suitcase", 240, 212),
  ]),

  /* ---------------- A2 · Een huis zoeken ---------------- */
  "op-zoek-naar-een-huis": pic("street", "Kofi in Utrecht looks for a flat of his own on his phone.", [
    p("man", 200, 214, { c: "copper", pose: "phone" }),
    o("phone", 300, 80, { s: 1.4 }),
  ]),
  "de-bezichtiging": pic("room", "The viewing: a light room with big windows; the landlady, Mrs Bakker, shows Kofi in.", [
    o("bigwindow", 300, 80),
    o("door", 80, 200),
    p("oldwoman", 130, 212, { c: "manganese", pose: "point" }),
    p("man", 220, 212, { c: "copper", flip: true }),
  ]),
  "een-klacht": pic("room", "Mould in the bathroom: Kofi writes an email to his landlady about it.", [
    o("mould", 320, 120),
    p("man", 150, 212, { pose: "write", c: "copper" }),
    o("table", 200, 212),
    o("laptop", 204, 174, { v: "mail" }),
  ]),
  "kijken-naar-binnen": pic("street", "A Dutch street in the evening: big windows with no curtains, people eating and watching TV inside.", [
    o("moon", 340, 56),
    o("bigwindow", 110, 150, { v: "night" }),
    o("bigwindow", 290, 150, { v: "night" }),
    p("woman", 96, 178, { pose: "sit", c: "iron", s: 0.45 }),
    p("man", 126, 178, { pose: "sit", c: "cobalt", s: 0.45, flip: true }),
    o("tv", 306, 182, { s: 0.5 }),
    p("man", 272, 178, { pose: "sit", c: "copper", s: 0.45 }),
  ], true),
  "check-a2-wonen": pic("street", "Bulky rubbish: Linda puts an old chair and a lamp on the pavement in the evening.", [
    o("moon", 60, 56),
    o("chair", 150, 214),
    o("lamp", 200, 214),
    p("woman", 290, 214, { c: "iron", flip: true, hair: "bob" }),
  ], true),

  /* ---------------- A2 · Zorg in Nederland ---------------- */
  "eerst-naar-de-huisarts": pic("room", "Sofia, with back pain, sees the GP first, not a specialist.", [
    o("redcross", 330, 70),
    p("man", 260, 212, { pose: "sit", c: "cobalt", flip: true, glasses: true }),
    o("table", 200, 212),
    p("woman", 140, 212, { pose: "sit", c: "iron", hair: "long" }),
  ]),
  "neem-maar-een-paracetamol": pic("room", "At the GP's: a sore throat and a fever, and the doctor says to take a paracetamol and rest.", [
    o("redcross", 330, 70),
    p("woman", 260, 212, { pose: "sit", c: "cobalt", flip: true, hair: "bob" }),
    o("table", 200, 212),
    o("pills", 200, 174),
    p("man", 140, 212, { pose: "sit", c: "copper" }),
  ]),
  "ik-moest-in-bed-blijven": pic("room", "Lars, ill for two weeks, writes an email to his sister from bed.", [
    o("bedperson", 160, 212, { c: "cobalt" }),
    o("laptop", 190, 188, { s: 0.6 }),
    o("tissues", 270, 212),
  ]),
  "waarom-zijn-nederlanders-zo-lang": pic("room", "The tallest people in the world: a man and a woman next to a height chart.", [
    o("heightchart", 140, 212),
    p("man", 200, 212, { c: "cobalt", s: 1.1 }),
    p("woman", 260, 212, { c: "iron" }),
    o("milk", 330, 212),
  ]),
  "check-a2-gezondheid": pic("room", "Mariana at home with her new baby, Lila; the maternity nurse visits.", [
    o("sofa", 150, 212),
    p("woman", 150, 212, { pose: "carry", c: "iron", hair: "long" }),
    o("baby", 154, 160),
    p("woman", 280, 212, { c: "cobalt", flip: true, hair: "bob" }),
  ]),

  /* ---------------- A2 · Op reis ---------------- */
  "met-de-trein-door-europa": pic("platform", "Femke, nineteen, travels across Europe by train with an Interrail pass and one backpack.", [
    o("train", 200, 200),
    p("woman", 120, 214, { c: "copper", hair: "ponytail" }),
    o("backpack", 92, 214),
  ]),
  "reizen-met-het-ov": pic("street", "Public transport: a train, a tram and a bus, and a card to check in.", [
    o("tram", 90, 210),
    o("bus", 290, 210),
    o("card", 200, 80, { c: "ochre", s: 1.4 }),
  ]),
  "de-schepen-van-de-voc": pic("sea", "A VOC ship sails to Asia for spices.", [o("sailship", 200, 200), o("cloud", 320, 56)]),
  "alles-ging-mis": pic("street", "Everything went wrong: a traffic jam to Schiphol, a plane already leaving, Koen and Lotte with their suitcases.", [
    o("plane", 320, 60),
    o("car", 80, 210),
    o("car", 180, 210, { c: "iron" }),
    p("man", 270, 214, { c: "cobalt", flip: true }),
    p("woman", 320, 214, { c: "iron", flip: true }),
    o("suitcase", 360, 214),
  ]),
  "check-a2-reizen": pic("traininside", "In the quiet carriage Kofi calls his mother loudly; a woman opposite points at the silence sign.", [
    o("note", 200, 30, { t: "Stilte", s: 0.9 }),
    p("man", 140, 212, { pose: "phone", c: "copper" }),
    p("woman", 270, 212, { pose: "sit", c: "cobalt", flip: true, hair: "bob" }),
  ]),

  /* ---------------- A2 · Nieuws en media ---------------- */
  "het-jeugdjournaal": pic("room", "Seven o'clock: children watch the Jeugdjournaal, the children's news, on TV.", [
    o("clock", 80, 50, { t: "7:00" }),
    o("smalltable", 300, 212),
    o("tv", 300, 176, { v: "news" }),
    o("sofa", 140, 212),
    p("boy", 120, 212, { pose: "lounge", c: "ochre" }),
    p("girl", 165, 212, { pose: "lounge", c: "iron", hair: "ponytail" }),
  ], true),
  "weet-iemand-van-wie-deze-fiets-is": pic("street", "A red bike nobody knows, left by a tree; the neighbourhood app is full of messages about it.", [
    o("tree", 150, 210),
    o("bike", 200, 214, { c: "iron" }),
    o("phone", 320, 110, { v: "chat", s: 1.6 }),
  ]),
  "is-het-wel-waar": pic("room", "An exciting message on a phone, and a magnifying glass to check whether it's true.", [
    o("phone", 160, 120, { v: "alert", s: 2 }),
    o("magnifier", 250, 110, { s: 1.6 }),
  ]),
  "toen-er-nog-geen-internet-was": pic("room", "Grandma Truus tells her granddaughter Lieke how she listened to the news on the radio.", [
    o("smalltable", 200, 212),
    o("radio", 200, 176, { s: 0.8 }),
    p("oldwoman", 130, 212, { pose: "sit", c: "manganese" }),
    p("girl", 270, 212, { c: "iron", flip: true, hair: "long" }),
  ]),
  "check-a2-media": pic("room", "Grandpa Wim reads the news on Teletext, page 101; his granddaughter Noa laughs.", [
    o("smalltable", 290, 212),
    o("tv", 290, 176, { v: "teletext" }),
    p("oldman", 160, 212, { pose: "sit", c: "cobalt", glasses: true }),
    p("girl", 210, 212, { c: "iron", hair: "ponytail", flip: true }),
  ]),

  /* ---------------- A2 · Meedoen ---------------- */
  "vrijwilliger-bij-de-voedselbank": pic("room", "Amal volunteers at the food bank, packing crates of food and speaking Dutch.", [
    o("crates", 200, 212),
    p("woman", 110, 212, { c: "copper", hair: "scarf", pose: "hold" }),
    p("man", 300, 212, { c: "iron", flip: true }),
  ]),
  "naar-de-gemeente": pic("street", "To the town hall to register, with a passport.", [
    o("townhall", 200, 210),
    p("man", 320, 214, { c: "copper", flip: true, pose: "hold" }),
    o("passport", 296, 162, { s: 0.7 }),
  ]),
  polderen: pic("field", "A polder below the sea: the dyke holds the water back, a windmill pumps; people talk until they agree.", [
    o("windmill", 330, 150),
    o("dyke", 120, 150, { s: 0.8 }),
    p("man", 160, 230, { c: "cobalt", pose: "point" }),
    p("woman", 230, 230, { c: "iron", flip: true }),
  ]),
  "afval-scheiden": pic("street", "Sorting rubbish: separate bins for paper, glass, plastic and organic waste.", [
    o("recycling", 200, 214, { s: 1.3 }),
    o("wine", 300, 214, { c: "copper" }),
    o("parcel", 340, 214, { s: 0.7 }),
  ]),
  "check-a2-samenleving": pic("street", "Neighbours' Day: neighbours plant flowers together, then share food at a long table in the street.", [
    o("longtable", 110, 214, { s: 0.7 }),
    o("bowl", 90, 187),
    o("cake", 130, 187, { s: 0.6 }),
    o("tulips", 260, 214),
    p("man", 300, 214, { c: "copper", pose: "hold", flip: true }),
    o("plant", 220, 214),
  ]),

  /* ---------------- A2 · Uit en cultuur ---------------- */
  "de-museumkaart": pic("room", "A museum: paintings on the wall, and a Museum Card in hand.", [
    o("frame", 100, 80),
    o("frame", 200, 70, { v: "portrait", s: 1.2 }),
    o("frame", 300, 80, { c: "cobalt" }),
    p("woman", 200, 212, { c: "iron", pose: "hold", hair: "bob" }),
    o("card", 230, 160, { s: 0.6 }),
  ]),
  "vincent-en-zijn-schoonzus": pic("room", "Vincent van Gogh's easel and a vase of sunflowers; Jo, his sister-in-law, keeps his letters.", [
    o("easel", 140, 212),
    o("sunflowers", 260, 212),
    o("letter", 320, 120),
  ]),
  "wat-doen-we-dit-weekend": pic("street", "Rotterdam's weekend: jazz on a rooftop, with the city below.", [
    p("man", 160, 214, { c: "ochre", pose: "hold" }),
    o("sax", 190, 180),
    p("woman", 240, 214, { c: "iron", hair: "curly" }),
    o("notes", 280, 100),
  ], true),
  oranjekoorts: pic("street", "Orange fever: orange flags, a football, and fans cheering in orange hats.", [
    o("bunting", 200, 48, { c: "ochre" }),
    o("flag", 60, 214, { c: "ochre" }),
    p("man", 160, 214, { c: "ochre", pose: "cheer", hair: "cap" }),
    p("woman", 230, 214, { c: "ochre", pose: "cheer" }),
    o("football", 310, 214),
  ]),
  "check-a2-uitgaan": pic("room", "A round in the pub: Ruben, Grace and Hiroshi take turns buying beers.", [
    p("man", 120, 212, { pose: "sit", c: "cobalt" }),
    p("woman", 200, 212, { pose: "sit", c: "iron", hair: "curly" }),
    p("man", 280, 212, { pose: "sit", c: "copper", flip: true }),
    o("table", 200, 212, { s: 1.1 }),
    o("beer", 160, 174),
    o("beer", 200, 174),
    o("beer", 240, 174),
  ], true),

  /* ---------------- A2 · Koken en uit eten ---------------- */
  "uit-eten-in-nederland": pic("room", "Eating out in the Netherlands: at six the restaurant is already full; afterwards the bill is split.", [
    o("clock", 330, 50, { t: "6:00" }),
    p("man", 130, 212, { pose: "sit", c: "cobalt" }),
    p("woman", 270, 212, { pose: "sit", c: "iron", flip: true, hair: "long" }),
    o("table", 200, 212, { c: "iron" }),
    o("plate", 180, 174),
    o("plate", 220, 174),
    o("phone", 340, 150, { s: 0.8, v: "chat" }),
  ], true),
  "een-pan-erwtensoep": pic("kitchen", "Thick pea soup on a cold day: a spoon stands up in the pan; skates hang by the window.", [
    o("window", 110, 80),
    o("snow", 110, 80, { s: 0.4 }),
    o("skates", 110, 150),
    o("stove", 300, 200),
    o("pot", 300, 144, { v: "spoon" }),
  ]),
  "de-rijsttafel": pic("room", "A rice table: rice with lots of small Indonesian dishes on the table.", [
    p("woman", 80, 212, { pose: "sit", c: "iron", hair: "long" }),
    p("man", 320, 212, { pose: "sit", c: "cobalt", flip: true }),
    o("longtable", 200, 212, { c: "copper" }),
    o("bowl", 200, 174),
    o("dishes", 200, 174, { s: 1.2 }),
  ]),
  "dit-heb-ik-niet-besteld": pic("room", "A busy Italian restaurant: the waiter brings Fatou a dish she didn't order.", [
    p("man", 280, 212, { c: "cobalt", pose: "hold", flip: true, apron: true }),
    o("plate", 252, 158),
    p("woman", 140, 212, { pose: "sit", c: "iron", hair: "curly" }),
    o("table", 190, 212, { c: "iron" }),
    o("bubble", 140, 100, { t: "?" }),
  ]),
  "check-a2-koken": pic("room", "Christmas Day gourmetten: a small grill with little pans on the table, and everyone cooks their own.", [
    o("christmastree", 360, 212, { s: 0.8 }),
    p("man", 110, 212, { pose: "sit", c: "cobalt" }),
    p("woman", 280, 212, { pose: "sit", c: "iron", flip: true }),
    o("table", 195, 212),
    o("grill", 195, 174),
  ], true),

  /* ---------------- A2 · Water, weer en natuur ---------------- */
  "leven-met-water": pic("sea", "Living with water: after the 1953 flood, a storm-surge barrier holds back the sea.", [
    o("barrier", 200, 160),
    o("raincloud", 80, 56),
    o("wind", 320, 56),
  ]),
  wadlopen: pic("mud", "Mudflat walking: a group crosses the bottom of the Wadden Sea at low tide, an island on the horizon.", [
    p("man", 120, 226, { c: "copper", pose: "point", hair: "cap" }),
    p("woman", 190, 222, { c: "iron", pose: "walk" }),
    p("man", 250, 218, { c: "cobalt", pose: "walk" }),
    p("woman", 300, 214, { c: "ochre", pose: "walk", s: 0.9 }),
  ]),
  "praten-over-het-weer": pic("street", "At the bus stop two strangers talk about the weather under a rain cloud.", [
    o("raincloud", 200, 56),
    p("woman", 150, 214, { c: "iron", pose: "hold" }),
    o("umbrella", 176, 206),
    p("man", 240, 214, { c: "copper", flip: true }),
    o("bench", 320, 214),
  ]),
  "een-stad-die-water-vasthoudt": pic("street", "Rotterdam's water square: a sunken square that fills with rain water when it pours.", [
    o("raincloud", 200, 56),
    o("watersquare", 190, 214),
    o("bench", 330, 214),
    o("tree", 70, 210),
  ]),
  "check-a2-natuur": pic("ice", "Grandpa Jelle on skates on a frozen canal, past a windmill, remembering the Eleven Cities Tour.", [
    o("windmill", 320, 140),
    p("oldman", 170, 220, { c: "cobalt", pose: "walk", beard: true }),
    o("skates", 170, 222, { s: 0.6 }),
    o("snow", 100, 50),
  ]),
};
