import type { UnitSpeaking } from "@/core/content";

/** A1 speaking: one or two sounds per unit, then short sentences from the unit to shadow. */
export const speakingA1: Record<string, UnitSpeaking> = {
  "a1-kennismaken": {
    sounds: ["g"],
    shadowing: [
      { text: "Mijn naam is Luca.", translation: "My name is Luca." },
      { text: "Ik spreek Italiaans en Engels.", translation: "I speak Italian and English." },
      { text: "Hoe gaat het met je Nederlands?", translation: "How's your Dutch going?" },
      { text: "Welkom in de straat, Luca!", translation: "Welcome to the street, Luca!" },
    ],
  },
  "a1-familie": {
    sounds: ["ij"],
    shadowing: [
      { text: "Mijn familie woont in Italië.", translation: "My family lives in Italy." },
      { text: "Ik heb één zus en één broer.", translation: "I have one sister and one brother." },
      { text: "Hoe gaat het met je, jongen?", translation: "How are you, son?" },
      { text: "Dat is nog lang!", translation: "That's still a long time away!" },
    ],
  },
  "a1-eten": {
    sounds: ["ui"],
    shadowing: [
      { text: "Hoeveel kosten deze tomaten?", translation: "How much are these tomatoes?" },
      { text: "Mag ik een stuk van deze kaas, alstublieft?", translation: "Could I have a piece of this cheese, please?" },
      { text: "Eet smakelijk!", translation: "Enjoy your meal!" },
      { text: "Ik heb zo'n honger.", translation: "I'm so hungry." },
    ],
  },
  "a1-dag-en-tijd": {
    sounds: ["aa-a"],
    shadowing: [
      { text: "Luca staat elke dag om zeven uur op.", translation: "Luca gets up at seven every day." },
      { text: "Om half negen fietst hij naar de universiteit.", translation: "At half past eight he cycles to the university." },
      { text: "Wanneer kun jij?", translation: "When can you do it?" },
      { text: "Ik wacht op je.", translation: "I'll wait for you." },
    ],
  },
  "a1-wonen": {
    sounds: ["eu"],
    shadowing: [
      { text: "De trap naar boven is heel steil.", translation: "The stairs up are very steep." },
      { text: "Weet u waar het stadhuis is?", translation: "Do you know where the town hall is?" },
      { text: "Is het ver?", translation: "Is it far?" },
      { text: "Dank u wel!", translation: "Thank you!" },
    ],
  },
  "a1-werk-en-studie": {
    sounds: ["oe-u"],
    shadowing: [
      { text: "Ik kan heel goed koffie maken.", translation: "I can make really good coffee." },
      { text: "Hoeveel uur per week is het?", translation: "How many hours a week is it?" },
      { text: "Nederlands is geen makkelijke taal.", translation: "Dutch isn't an easy language." },
      { text: "Wij zoeken iemand voor het weekend", translation: "We're looking for someone for the weekend" },
    ],
  },
  "a1-gezondheid": {
    sounds: ["w-v"],
    shadowing: [
      { text: "Ik ben ziek.", translation: "I'm ill." },
      { text: "Ik wil graag een afspraak maken.", translation: "I'd like to make an appointment." },
      { text: "Ik heb sinds zondag koorts en mijn hoofd doet pijn.", translation: "I've had a fever since Sunday and my head hurts." },
      { text: "Beterschap!", translation: "Get well soon!" },
    ],
  },
  "a1-vrije-tijd": {
    sounds: ["sch", "en"],
    shadowing: [
      { text: "Zullen we naar het strand gaan?", translation: "Shall we go to the beach?" },
      { text: "Typisch Nederlands weer", translation: "Typical Dutch weather" },
      { text: "Gefeliciteerd met je dochter", translation: "Congratulations on your daughter" },
      { text: "Ik vind het hier leuk.", translation: "I like it here." },
    ],
  },
  "a1-kleren": {
    sounds: ["w-v", "eu"],
    shadowing: [
      { text: "Heeft u deze jas in maat M?", translation: "Do you have this coat in size M?" },
      { text: "Wat kost deze jas?", translation: "How much is this coat?" },
      { text: "Dat is te duur.", translation: "That's too expensive." },
      { text: "Je ziet er goed uit", translation: "You look good" },
    ],
  },
  "a1-feestdagen": {
    sounds: ["oe-u", "g"],
    shadowing: [
      { text: "Gelukkig nieuwjaar!", translation: "Happy new year!" },
      { text: "Hoeveel kost dit boek?", translation: "How much is this book?" },
      { text: "Fijne Koningsdag!", translation: "Happy King's Day!" },
      { text: "Wat is je voornemen?", translation: "What's your resolution?" },
    ],
  },
  "a1-basis": {
    sounds: ["aa-a", "ij"],
    shadowing: [
      { text: "Wat is uw achternaam?", translation: "What's your surname?" },
      { text: "Hoe spelt u dat?", translation: "How do you spell that?" },
      { text: "Wat is uw telefoonnummer?", translation: "What's your phone number?" },
      { text: "Dank u wel.", translation: "Thank you." },
    ],
  },
};
