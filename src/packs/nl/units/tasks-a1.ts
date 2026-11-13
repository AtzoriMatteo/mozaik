import type { Task } from "@/core/content";
import { mc, order, pairs, tf } from "./helpers";

/** Comprehension tasks for the A1 texts, keyed by text id. */
export const tasksA1: Record<string, Task[]> = {
  /* ---------- 1 Kennismaken ---------- */
  "nieuw-in-leiden": [
    tf("Luca komt uit een grote stad.", "Luca is from a big city.", false),
    mc("What does Luca study?", ["Medicine", "Biology", "Dutch"], 1),
    pairs("Who is who?", "Luca=studies biology | Noor=studies medicine | Bram=works in a café"),
    tf("Luca spreekt al veel Nederlands.", "Luca already speaks a lot of Dutch.", false),
    mc("What does Luca think of his room?", ["Small, but he likes it", "Big and beautiful", "Too expensive"], 0),
  ],
  "in-de-keuken": [
    tf("Noor drinkt koffie.", "Noor drinks coffee.", false),
    mc("Where is the tea?", ["On the table", "In the cupboard, next to the bread", "In the fridge"], 1),
    mc("Where does Noor work today?", ["In a café", "At the university", "In the hospital"], 2),
    order("Put the morning in order.", "Luca drinks coffee", "Noor comes in", "The doorbell rings", "Mrs De Vries says hello"),
    tf("Mevrouw De Vries kent Luca nog niet.", "Mrs De Vries doesn't know Luca yet.", true),
  ],

  /* ---------- 2 Familie ---------- */
  "mijn-familie": [
    pairs("Who is who in Luca's family?", "Marco=his father | Giulia=his sister | Paolo=his brother | Sofia=his niece, a baby"),
    tf("Luca's moeder werkt in een school.", "Luca's mother works in a school.", false),
    mc("What does Luca's grandmother do every Sunday?", ["She goes to church", "She cooks for the whole family", "She visits Luca"], 1),
    tf("Bram heeft geen broers of zussen.", "Bram has no brothers or sisters.", true),
    mc("How does Luca sometimes feel in the evening?", ["Sad, without his family", "Bored", "Happy and relaxed"], 0),
  ],
  "bellen-met-mama": [
    mc("What is Luca making tonight?", ["Pasta", "Soup", "Cake"], 1),
    tf("Luca gaat met het vliegtuig naar huis.", "Luca is going home by plane.", false),
    mc("When is Luca going home?", ["In the spring", "Next week", "In December, in the holidays"], 2),
    tf("Noor helpt Luca met zijn Nederlands.", "Noor helps Luca with his Dutch.", true),
    mc("Where is Luca's father?", ["At work", "With grandpa", "At the shop"], 1),
  ],

  /* ---------- 3 Eten ---------- */
  "op-de-markt": [
    tf("De markt is op zaterdag.", "The market is on Saturday.", true),
    mc("Why are the expensive tomatoes expensive?", ["They're from Italy", "They come from the greenhouse of the man's brother", "They're organic"], 1),
    tf("Luca koopt de dure tomaten.", "Luca buys the expensive tomatoes.", false),
    mc("What is kibbeling?", ["Small pieces of fried fish", "A kind of cheese", "Dutch bread"], 0),
    order("Put their market morning in order.", "They buy potatoes and onions", "Luca tastes old cheese", "Bram buys kibbeling", "They eat by the canal"),
  ],
  "samen-koken": [
    pairs("Who does what?", "Noor=cuts the onions | Bram=sets the table | Luca=cooks the pasta"),
    tf("Na het eten wast Luca af.", "After dinner Luca does the dishes.", false),
    mc("What is the rule in their house?", ["Everyone cooks once a week", "The cook may sit on the sofa", "No phones at the table"], 1),
    mc("What does Noor's family eat at six o'clock?", ["Pasta with sauce", "Potatoes, vegetables and meat", "Bread with cheese"], 1),
    tf("Luca vindt hagelslag op brood raar.", "Luca thinks sprinkles on bread are strange.", true),
  ],

  /* ---------- 4 Dag en tijd ---------- */
  "een-gewone-dag": [
    order("Put Luca's day in order.", "He takes a shower", "He cycles to university", "He eats lunch in the canteen", "He goes to the library", "He goes to bed"),
    tf("Luca drinkt koffie met suiker.", "Luca drinks coffee with sugar.", false),
    mc("When does Luca take the bus?", ["Every day", "When it rains hard", "On Fridays"], 1),
    mc("What does Luca do on Friday evening?", ["He works", "He goes to Bram's café with friends", "He calls his family"], 1),
    tf("Op zaterdag staat Luca vroeg op.", "On Saturday Luca gets up early.", false),
  ],
  "een-afspraak": [
    tf("Fatima woont in Leiden.", "Fatima lives in Leiden.", false),
    mc("When do they meet?", ["Thursday at four", "Tuesday at quarter past four", "Monday at half past four"], 1),
    mc("Why can't Luca on Thursday?", ["He has football", "He has to work", "He has class"], 0),
    mc("Why is Fatima late?", ["She forgot", "Her train is delayed", "She went to the wrong library"], 1),
    tf("Luca is te vroeg bij de bibliotheek.", "Luca is too early at the library.", true),
  ],

  /* ---------- 5 Wonen ---------- */
  "ons-huis": [
    pairs("Where is it?", "the sofa=in front of the window | the lamp=on the desk | the shoes=under the bed | the park=behind the garden"),
    tf("De keuken is groot.", "The kitchen is big.", false),
    mc("How many bedrooms are upstairs?", ["Two", "Three", "Four"], 1),
    mc("How much is the rent for one room?", ["€400 a month", "€600 a month", "€800 a month"], 1),
    tf("Luca heeft een auto.", "Luca has a car.", false),
  ],
  "de-weg-vragen": [
    mc("Why does Luca go to the town hall?", ["To register his address", "To get a bike", "To meet Bram"], 0),
    order("Put the directions in order.", "Straight on to the bridge", "Over the bridge and left", "Past the church and the square", "On the right, between a bank and a clothes shop"),
    tf("Het stadhuis is ver.", "The town hall is far.", false),
    mc("Who helps Luca at the canal?", ["A policeman", "A girl on a bike", "Mrs De Vries"], 1),
    tf("Luca is te laat voor zijn afspraak.", "Luca is late for his appointment.", false),
  ],

  /* ---------- 6 Werk en studie ---------- */
  "de-taalles": [
    tf("In de les mag je Engels spreken.", "You may speak English in class.", false),
    mc("What new words do they learn today?", ["Words about food", "Words about the body", "Words about the weather"], 1),
    mc("Which word is hard for Luca?", ["verschrikkelijk", "bladzijde", "huiswerk"], 0),
    mc("What is the homework?", ["Read a text", "Write ten sentences about their family", "Learn twenty words"], 1),
    tf("Luca vindt de en het makkelijk.", "Luca finds de and het easy.", false),
  ],
  "een-bijbaan": [
    mc("Why does Luca want a side job?", ["He's bored", "Leiden is expensive", "He wants to practise Dutch"], 1),
    tf("Luca heeft ervaring in een bar.", "Luca has experience in a bar.", true),
    mc("How much does he earn per hour?", ["€10", "€12", "€13"], 2),
    order("Put it in order.", "Luca sends an email", "Kees calls him", "Luca visits the café", "He starts working with Bram"),
    tf("Op zondag is het café altijd open.", "The café is always open on Sunday.", false),
  ],

  /* ---------- 7 Gezondheid ---------- */
  ziek: [
    mc("What's wrong with Luca?", ["A headache and stomach ache", "A broken arm", "Toothache"], 0),
    tf("Luca gaat vandaag naar de dokter.", "Luca goes to the doctor today.", false),
    pairs("What does Noor bring him?", "from the supermarket=soup and oranges | to drink=water and tea | for the pain=a paracetamol"),
    tf("Luca stuurt Ingrid een berichtje.", "Luca sends Ingrid a message.", true),
  ],
  "bij-de-huisarts": [
    mc("When is the appointment?", ["At ten past eleven", "At eight o'clock", "At half past ten"], 0),
    tf("De huisarts is een man.", "The GP is a man.", false),
    mc("What does the doctor think it is?", ["Something serious", "Flu", "An allergy"], 1),
    tf("Luca krijgt een medicijn van de huisarts.", "Luca gets medicine from the GP.", false),
    mc("How often may he take paracetamol?", ["At most three times a day", "Twice a week", "Every hour"], 0),
  ],

  /* ---------- 8 Vrije tijd en weer ---------- */
  "het-weer": [
    tf("Het weer in Nederland verandert vaak.", "The weather in the Netherlands changes often.", true),
    mc("How warm is the sea water?", ["Twenty degrees", "Sixteen degrees", "Twelve degrees"], 1),
    pairs("Who does what at the beach?", "Bram=goes swimming | Luca=reads a book on the sand"),
    order("Put their Saturday in order.", "They cycle to the sea", "Bram goes swimming", "Bram gets ice creams", "The clouds turn grey", "They get soaking wet"),
    tf("Ze zijn op tijd thuis, voor de regen.", "They're home in time, before the rain.", false),
  ],
  "een-verjaardag": [
    mc("What does Luca give Noor?", ["A sweater", "A book", "Flowers"], 1),
    tf("Je geeft op een Nederlands feest alleen je vrienden een hand.", "At a Dutch party you only shake hands with your friends.", false),
    mc("What do you say to the family?", ["Gefeliciteerd", "Beterschap", "Aangenaam"], 0),
    tf("Iedereen krijgt twee stukjes taart.", "Everyone gets two pieces of cake.", false),
    mc("What doesn't Luca like about the Netherlands?", ["The food", "The weather", "The parties"], 1),
  ],
};
