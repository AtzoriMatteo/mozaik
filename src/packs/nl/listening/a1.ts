import type { ListeningItem } from "@/core/content";

/**
 * A1 listening material, one item per unit (keyed by unit id). Written to be
 * heard: short turns, everyday situations, real Dutch routines (station
 * announcements, voicemails, the weather forecast).
 */
export const listeningA1: Record<string, ListeningItem[]> = {
  "a1-kennismaken": [
  ],
  "a1-familie": [
    {
      id: "noor-over-haar-familie",
      level: "A1",
      title: "Noor over haar familie",
      titleTranslation: "Noor about her family",
      kind: "monologue",
      situation: "Noor shows Luca a photo and tells him about her family.",
      grammar: ["possessives", "time-numbers", "plurals"],
      lines: [
        { speaker: "Noor", text: "Kijk, dit is mijn familie.", translation: "Look, this is my family." },
        { speaker: "Noor", text: "Dit zijn mijn ouders. Mijn vader heet Henk en mijn moeder heet Ellen.", translation: "These are my parents. My father is called Henk and my mother is called Ellen." },
        { speaker: "Noor", text: "Ze wonen in Groningen, in een huis met een grote tuin.", translation: "They live in Groningen, in a house with a big garden." },
        { speaker: "Noor", text: "Mijn vader is huisarts, net als ik straks.", translation: "My father is a GP, like I'll be soon." },
        { speaker: "Noor", text: "Dit is mijn broer Thijs. Hij is zestien en hij zit nog op school.", translation: "This is my brother Thijs. He's sixteen and he's still at school." },
        { speaker: "Noor", text: "Hij speelt heel veel voetbal.", translation: "He plays a lot of football." },
        { speaker: "Noor", text: "En dit is onze hond, Bolletje. Hij is al twaalf jaar oud.", translation: "And this is our dog, Bolletje. He's already twelve years old." },
        { speaker: "Noor", text: "Ik mis ze soms, maar ik ga elke maand naar huis.", translation: "I miss them sometimes, but I go home every month." },
      ],
      gist: {
        prompt: "What is Noor talking about?",
        options: ["Her studies", "Her family", "Her holiday"],
        answer: 1,
      },
      details: [
        {
          prompt: "What does Noor's father do?",
          options: ["He's a teacher", "He's a GP", "He works in a shop"],
          answer: 1,
        },
        {
          prompt: "How old is her brother?",
          options: ["Twelve", "Sixteen", "Twenty"],
          answer: 1,
        },
        {
          prompt: "How often does Noor go home?",
          options: ["Every week", "Every month", "Every summer"],
          answer: 1,
        },
      ],
      dictation: [0, 5],
    },
  ],
  "a1-eten": [
    {
      id: "bij-de-bakker",
      level: "A1",
      title: "Bij de bakker",
      titleTranslation: "At the baker's",
      kind: "dialogue",
      situation: "Luca buys bread at the bakery on a Saturday morning.",
      grammar: ["modal-verbs", "time-numbers", "questions"],
      lines: [
        { speaker: "Bakker", text: "Goedemorgen! Wie is er aan de beurt?", translation: "Good morning! Who's next?" },
        { speaker: "Luca", text: "Ik, denk ik. Ik wil graag een bruin brood.", translation: "Me, I think. I'd like a brown loaf." },
        { speaker: "Bakker", text: "Heel of half?", translation: "Whole or half?" },
        { speaker: "Luca", text: "Een half, alstublieft. Gesneden, graag.", translation: "Half, please. Sliced, please." },
        { speaker: "Bakker", text: "Anders nog iets?", translation: "Anything else?" },
        { speaker: "Luca", text: "Ja, vier croissants. Wat kosten die?", translation: "Yes, four croissants. How much are they?" },
        { speaker: "Bakker", text: "Een euro vijfentwintig per stuk.", translation: "One euro twenty-five each." },
        { speaker: "Luca", text: "Oké. Dat was het.", translation: "Okay. That's all." },
        { speaker: "Bakker", text: "Dat wordt dan zeven euro vijftig. U kunt pinnen.", translation: "That'll be seven euros fifty. You can pay by card." },
      ],
      gist: {
        prompt: "Where is Luca?",
        options: ["At the market", "At the bakery", "At a café"],
        answer: 1,
      },
      details: [
        {
          prompt: "What kind of bread does Luca buy?",
          options: ["A whole white loaf", "Half a brown loaf, sliced", "A whole brown loaf, unsliced"],
          answer: 1,
        },
        {
          prompt: "How many croissants does he buy?",
          options: ["Two", "Four", "Six"],
          answer: 1,
        },
        {
          prompt: "How much does he pay in total?",
          options: ["€5.00", "€7.50", "€12.50"],
          answer: 1,
        },
      ],
      dictation: [4, 7],
      words: {
        dat: { meaning: "that", local: "Dat was het = that's all (at a counter)" },
      },
    },
  ],
  "a1-dag-en-tijd": [
    {
      id: "op-het-perron",
      level: "A1",
      title: "Op het perron",
      titleTranslation: "On the platform",
      kind: "announcement",
      situation: "Fatima is waiting at Den Haag Centraal for the train to Leiden.",
      grammar: ["time-numbers", "prepositions"],
      lines: [
        { speaker: "Omroep", text: "Dames en heren, de intercity naar Leiden Centraal van tien over drie vertrekt van spoor vijf.", translation: "Ladies and gentlemen, the 3:10 intercity to Leiden Centraal departs from platform five." },
        { speaker: "Omroep", text: "Deze trein heeft ongeveer tien minuten vertraging.", translation: "This train is delayed by about ten minutes." },
        { speaker: "Omroep", text: "De sprinter naar Leiden Centraal van kwart over drie vertrekt van spoor zeven.", translation: "The 3:15 sprinter to Leiden Centraal departs from platform seven." },
        { speaker: "Omroep", text: "Deze trein stopt op alle stations.", translation: "This train stops at all stations." },
        { speaker: "Omroep", text: "Wij wensen u een goede reis.", translation: "We wish you a good journey." },
      ],
      gist: {
        prompt: "What is this?",
        options: [
          "A message from a friend",
          "An announcement at a train station",
          "A weather forecast",
        ],
        answer: 1,
      },
      details: [
        {
          prompt: "Which platform does the intercity leave from?",
          options: ["Platform five", "Platform seven", "Platform ten"],
          answer: 0,
        },
        {
          prompt: "What's the problem with the intercity?",
          options: ["It's cancelled", "It's about ten minutes late", "It's full"],
          answer: 1,
        },
        {
          prompt: "Which train stops at every station?",
          options: ["The intercity", "The sprinter", "Both"],
          answer: 1,
        },
      ],
      dictation: [1, 3],
    },
  ],
  "a1-wonen": [
    {
      id: "een-voicemail",
      level: "A1",
      title: "Een voicemail",
      titleTranslation: "A voicemail",
      kind: "voicemail",
      situation: "Luca listens to a voicemail from the landlord.",
      grammar: ["time-numbers", "modal-verbs", "separable-verbs"],
      lines: [
        { speaker: "Verhuurder", text: "Hallo, met Peter de Groot, de verhuurder.", translation: "Hello, this is Peter de Groot, the landlord." },
        { speaker: "Verhuurder", text: "Ik bel over de kapotte douche in de badkamer.", translation: "I'm calling about the broken shower in the bathroom." },
        { speaker: "Verhuurder", text: "De loodgieter komt donderdag om half tien.", translation: "The plumber is coming on Thursday at half past nine." },
        { speaker: "Verhuurder", text: "Is er iemand thuis? Hij moet in het huis kunnen.", translation: "Will someone be home? He needs to be able to get into the house." },
        { speaker: "Verhuurder", text: "Tussen tien en twaalf is er geen water.", translation: "Between ten and twelve there's no water." },
        { speaker: "Verhuurder", text: "Kunt u mij even terugbellen? Mijn nummer is zes, twaalf, vierendertig, zesenvijftig, achtenzeventig.", translation: "Could you call me back? My number is six, twelve, thirty-four, fifty-six, seventy-eight." },
        { speaker: "Verhuurder", text: "Dank u wel, tot ziens.", translation: "Thank you, goodbye." },
      ],
      gist: {
        prompt: "Why is the landlord calling?",
        options: [
          "The rent is going up",
          "Someone is coming to fix the shower",
          "There's a party next door",
        ],
        answer: 1,
      },
      details: [
        {
          prompt: "When is the plumber coming?",
          options: ["Thursday at 9:30", "Thursday at 10:30", "Tuesday at 9:30"],
          answer: 0,
        },
        {
          prompt: "When will there be no water?",
          options: ["All day", "Between 10 and 12", "In the evening"],
          answer: 1,
        },
        {
          prompt: "What should Luca do?",
          options: ["Send an email", "Call the landlord back", "Go to the town hall"],
          answer: 1,
        },
      ],
      dictation: [2, 4],
    },
  ],
  "a1-werk-en-studie": [
    {
      id: "de-eerste-werkdag",
      level: "A1",
      title: "De eerste werkdag",
      titleTranslation: "The first day at work",
      kind: "dialogue",
      situation: "It's Luca's first Saturday at café De Burcht. Kees explains the job.",
      grammar: ["imperative", "modal-verbs", "time-numbers"],
      lines: [
        { speaker: "Kees", text: "Welkom, Luca! Hier is je schort.", translation: "Welcome, Luca! Here's your apron." },
        { speaker: "Kees", text: "We gaan om tien uur open. Eerst zet je de stoelen buiten.", translation: "We open at ten. First you put the chairs outside." },
        { speaker: "Luca", text: "Oké. En dan?", translation: "Okay. And then?" },
        { speaker: "Kees", text: "Dan maak je de koffiemachine klaar. Dat kun jij vast goed.", translation: "Then you get the coffee machine ready. I'm sure you're good at that." },
        { speaker: "Luca", text: "Ja hoor. Hoe laat heb ik pauze?", translation: "Sure. What time is my break?" },
        { speaker: "Kees", text: "Om één uur, een half uur. Je mag gratis lunchen.", translation: "At one, for half an hour. You can have lunch for free." },
        { speaker: "Luca", text: "Fijn! Moet ik ook afwassen?", translation: "Great! Do I have to do the dishes too?" },
        { speaker: "Kees", text: "Nee, dat doet Bram. Jij werkt achter de bar.", translation: "No, Bram does that. You work behind the bar." },
      ],
      gist: {
        prompt: "What is Kees doing?",
        options: [
          "Ordering a coffee",
          "Explaining Luca's tasks at work",
          "Asking Luca for a job",
        ],
        answer: 1,
      },
      details: [
        {
          prompt: "What does Luca do first?",
          options: ["Wash the dishes", "Put the chairs outside", "Make coffee for Kees"],
          answer: 1,
        },
        {
          prompt: "When is his break?",
          options: ["At twelve", "At one", "At two"],
          answer: 1,
        },
        {
          prompt: "Who does the dishes?",
          options: ["Luca", "Kees", "Bram"],
          answer: 2,
        },
      ],
      dictation: [2, 7],
    },
  ],
  "a1-gezondheid": [
    {
      id: "bij-de-apotheek",
      level: "A1",
      title: "Bij de apotheek",
      titleTranslation: "At the pharmacy",
      kind: "dialogue",
      situation: "Luca still has a sore throat and goes to the pharmacy.",
      grammar: ["questions", "imperative", "modal-verbs"],
      lines: [
        { speaker: "Apotheker", text: "Goedemiddag. Kan ik u helpen?", translation: "Good afternoon. Can I help you?" },
        { speaker: "Luca", text: "Ja, ik heb keelpijn. Heeft u iets voor mijn keel?", translation: "Yes, I have a sore throat. Do you have something for my throat?" },
        { speaker: "Apotheker", text: "Hoe lang heeft u al keelpijn?", translation: "How long have you had a sore throat?" },
        { speaker: "Luca", text: "Drie dagen. Ik heb ook een beetje koorts.", translation: "Three days. I also have a bit of a fever." },
        { speaker: "Apotheker", text: "Neem deze tabletten. Twee keer per dag, na het eten.", translation: "Take these tablets. Twice a day, after eating." },
        { speaker: "Apotheker", text: "En drink veel thee met honing.", translation: "And drink lots of tea with honey." },
        { speaker: "Luca", text: "Wat kost het?", translation: "How much is it?" },
        { speaker: "Apotheker", text: "Vier euro negentig. Beterschap!", translation: "Four euros ninety. Get well soon!" },
      ],
      gist: {
        prompt: "What does Luca need?",
        options: ["Something for his throat", "A new appointment", "Something for his stomach"],
        answer: 0,
      },
      details: [
        {
          prompt: "How long has he been ill?",
          options: ["One day", "Three days", "A week"],
          answer: 1,
        },
        {
          prompt: "How often should he take the tablets?",
          options: ["Once a day", "Twice a day, after eating", "Three times a day, before eating"],
          answer: 1,
        },
        {
          prompt: "What else does the pharmacist advise?",
          options: ["Tea with honey", "Lots of sleep", "Cold water"],
          answer: 0,
        },
      ],
      dictation: [3, 6],
    },
  ],
  "a1-vrije-tijd": [
    {
      id: "het-weerbericht",
      level: "A1",
      title: "Het weerbericht",
      titleTranslation: "The weather forecast",
      kind: "announcement",
      situation: "Bram listens to the weather forecast on the radio on Friday morning.",
      grammar: ["het-subject", "time-numbers", "gaan-future"],
      lines: [
        { speaker: "Weervrouw", text: "Goedemorgen! Hier is het weerbericht voor het weekend.", translation: "Good morning! Here's the weather forecast for the weekend." },
        { speaker: "Weervrouw", text: "Vandaag is het grijs en het regent af en toe.", translation: "Today it's grey and it rains now and then." },
        { speaker: "Weervrouw", text: "Het wordt twaalf graden.", translation: "It'll be twelve degrees." },
        { speaker: "Weervrouw", text: "Morgen, zaterdag, schijnt de zon en het wordt warmer: achttien graden.", translation: "Tomorrow, Saturday, the sun shines and it gets warmer: eighteen degrees." },
        { speaker: "Weervrouw", text: "Zondag krijgen we veel wind uit het westen.", translation: "On Sunday we get a lot of wind from the west." },
        { speaker: "Weervrouw", text: "Aan de kust kan het stormen. Pas op op de fiets!", translation: "On the coast there may be a storm. Be careful on your bike!" },
        { speaker: "Weervrouw", text: "Volgende week wordt het kouder. Maandag is het bewolkt, en 's ochtends is er mist.", translation: "Next week it gets colder. On Monday it's cloudy, and in the morning there's fog." },
        { speaker: "Weervrouw", text: "Op dinsdag kan er onweer komen.", translation: "On Tuesday there may be thunderstorms." },
      ],
      gist: {
        prompt: "What is this about?",
        options: ["Traffic jams", "The weather this weekend", "A football match"],
        answer: 1,
      },
      details: [
        {
          prompt: "What's the weather like today?",
          options: ["Sunny and warm", "Grey with some rain", "Snow"],
          answer: 1,
        },
        {
          prompt: "Which day is best for the beach?",
          options: ["Friday", "Saturday", "Sunday"],
          answer: 1,
        },
        {
          prompt: "What's the warning for Sunday?",
          options: ["Very hot", "Strong wind on the coast", "Ice on the roads"],
          answer: 1,
        },
      ],
      dictation: [2, 4],
    },
  ],
};
