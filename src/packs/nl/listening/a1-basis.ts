import type { ListeningItem } from "@/core/content";
import { gaps, heard, line, tf } from "../units/helpers";

/** Letter names, as Dutch speakers say them when spelling. */
const LETTERS = {
  b: { meaning: "B, said 'bee' (like 'bay')" },
  i: { meaning: "I, said 'ie' (like 'ee' in 'see')" },
  a: { meaning: "A, said 'aa' (like 'ah')" },
  n: { meaning: "N, said 'en'" },
  c: { meaning: "C, said 'see' (like 'say')" },
  h: { meaning: "H, said 'haa'" },
};

/** Listening for unit 1: spelling, numbers and dates. */
export const listeningBasis: Record<string, ListeningItem[]> = {
  "a1-basis": [
    {
      id: "hoe-spel-je-dat",
      level: "A1",
      title: "Hoe spelt u dat?",
      titleTranslation: "How do you spell that?",
      kind: "dialogue",
      situation: "Luca becomes a member of the library. The man at the desk fills in a form.",
      grammar: ["spelling", "questions", "possessives"],
      words: LETTERS,
      lines: [
        line("Medewerker", "Goedemiddag. Wilt u lid worden van de bibliotheek?", "Good afternoon. Would you like to become a member of the library?"),
        line("Luca", "Ja, graag.", "Yes, please."),
        line("Medewerker", "Wat is uw achternaam?", "What's your surname?"),
        line("Luca", "Bianchi.", "Bianchi."),
        line("Medewerker", "Hoe spelt u dat?", "How do you spell that?"),
        line("Luca", "B-I-A-N-C-H-I.", "B-I-A-N-C-H-I."),
        line("Medewerker", "En uw voornaam?", "And your first name?"),
        line("Luca", "Luca. Met een c.", "Luca. With a c."),
        line("Medewerker", "Wat is uw telefoonnummer?", "What's your phone number?"),
        line("Luca", "Nul zes, achtendertig, vijftien, zevenenveertig.", "Zero six, thirty-eight, fifteen, forty-seven."),
        line("Medewerker", "Dank u wel. Hier is uw pasje. Veel leesplezier!", "Thank you. Here's your card. Enjoy reading!"),
      ],
      gist: { prompt: "What is happening?", options: ["Luca becomes a library member", "Luca buys a book", "Luca opens a bank account"], answer: 0 },
      details: [
        { prompt: "What does the man ask first?", options: ["Luca's first name", "Luca's surname", "Luca's address"], answer: 1 },
        { prompt: "What does Luca get at the end?", options: ["A book", "A card", "A receipt"], answer: 1 },
      ],
      tasks: [
        heard(9, ["veertien", "vijftien", "vijftig"], 1),
        gaps(4, "spelt"),
        tf("Luca schrijft zijn naam met een k.", "Luca writes his name with a k.", false),
      ],
      dictation: [2, 6],
    },
    {
      id: "een-nieuw-nummer",
      level: "A1",
      title: "Een nieuw nummer",
      titleTranslation: "A new number",
      kind: "voicemail",
      situation: "Fatima leaves Luca a voicemail with her new phone number and her address.",
      grammar: ["time-numbers", "possessives", "separable-verbs"],
      lines: [
        line("Fatima", "Hoi Luca, met Fatima.", "Hi Luca, it's Fatima."),
        line("Fatima", "Ik heb een nieuw telefoonnummer.", "I have a new phone number."),
        line("Fatima", "Het is nul zes, vierenveertig, achtentachtig, dertien, zeventig.", "It's zero six, forty-four, eighty-eight, thirteen, seventy."),
        line("Fatima", "Mijn adres is Prinsestraat honderdvijftien, in Den Haag.", "My address is Prinsestraat a hundred and fifteen, in The Hague."),
        line("Fatima", "Kom je zaterdag eten? Om half zeven.", "Will you come for dinner on Saturday? At half past six."),
        line("Fatima", "Bel me even terug. Doei!", "Give me a call back. Bye!"),
      ],
      gist: { prompt: "Why does Fatima call?", options: ["To give her new number and invite Luca", "To cancel a lesson", "To ask for money"], answer: 0 },
      details: [
        { prompt: "What is Fatima's house number?", options: ["105", "115", "150"], answer: 1 },
        { prompt: "When is dinner?", options: ["Friday at 6:30", "Saturday at 6:30", "Saturday at 7:30"], answer: 1 },
      ],
      tasks: [
        gaps(2, "vierenveertig", "achtentachtig"),
        heard(4, ["zes", "zeven", "zestig"], 1),
        tf("Fatima woont in Leiden.", "Fatima lives in Leiden.", false),
      ],
      dictation: [1, 4],
    },
    {
      id: "welke-datum-is-het",
      level: "A1",
      title: "Welke datum is het?",
      titleTranslation: "What's the date?",
      kind: "dialogue",
      situation: "Luca and Bram talk in the kitchen, looking at the calendar.",
      grammar: ["dates-ordinals", "questions", "het-subject"],
      lines: [
        line("Luca", "Bram, welke datum is het vandaag?", "Bram, what's the date today?"),
        line("Bram", "Vrijdag dertien november.", "Friday the thirteenth of November."),
        line("Luca", "Vrijdag de dertiende? Dat is geen goede dag!", "Friday the thirteenth? That's not a good day!"),
        line("Bram", "Ach, ik geloof daar niet in. Wanneer ben jij jarig?", "Oh, I don't believe in that. When's your birthday?"),
        line("Luca", "Op twaalf mei. En jij?", "On the twelfth of May. And you?"),
        line("Bram", "Op drie maart. Dan is het bijna lente.", "On the third of March. Then it's almost spring."),
        line("Luca", "En Noor is volgende week jarig, toch?", "And Noor's birthday is next week, right?"),
        line("Bram", "Ja, op twintig november. Dat is een vrijdag.", "Yes, on the twentieth of November. That's a Friday."),
      ],
      gist: { prompt: "What are they talking about?", options: ["Dates and birthdays", "The weather", "A train timetable"], answer: 0 },
      details: [
        { prompt: "What's the date today?", options: ["Friday 13 November", "Friday 3 November", "Thursday 13 November"], answer: 0 },
        { prompt: "When is Noor's birthday?", options: ["3 March", "12 May", "20 November"], answer: 2 },
      ],
      tasks: [
        heard(5, ["maart", "mei", "november"], 0),
        gaps(1, "dertien", "november"),
        tf("Bram gelooft dat vrijdag de dertiende een slechte dag is.", "Bram believes Friday the thirteenth is a bad day.", false),
      ],
      dictation: [0, 4],
    },
  ],
};
