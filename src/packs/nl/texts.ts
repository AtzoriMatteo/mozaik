import type { ReadingText } from "@/core/content";

/**
 * A1 starter texts. Short, everyday, and connected: the same two people
 * (Sanne and Daan) appear across texts so vocabulary repeats naturally.
 */
export const texts: readonly ReadingText[] = [
  {
    id: "hallo-ik-ben-sanne",
    level: "A1",
    title: "Hallo, ik ben Sanne",
    titleTranslation: "Hello, I'm Sanne",
    paragraphs: [
      [
        { text: "Hallo!", translation: "Hello!" },
        { text: "Ik ben Sanne.", translation: "I'm Sanne." },
        { text: "Ik ben vijfentwintig jaar.", translation: "I'm twenty-five." },
        {
          text: "Ik woon in Leiden, in een klein huis bij het station.",
          translation: "I live in Leiden, in a small house near the station.",
        },
        { text: "Ik werk in een café.", translation: "I work in a café." },
      ],
      [
        { text: "Mijn vriend heet Daan.", translation: "My boyfriend is called Daan." },
        { text: "Hij komt uit Utrecht.", translation: "He's from Utrecht." },
        {
          text: "Wij spreken Nederlands en een beetje Engels.",
          translation: "We speak Dutch and a bit of English.",
        },
      ],
      [
        { text: "En jij?", translation: "And you?" },
        { text: "Hoe heet jij?", translation: "What's your name?" },
        { text: "Waar woon jij?", translation: "Where do you live?" },
      ],
    ],
  },
  {
    id: "in-de-supermarkt",
    level: "A1",
    title: "In de supermarkt",
    titleTranslation: "At the supermarket",
    paragraphs: [
      [
        { text: "Het is zaterdag.", translation: "It's Saturday." },
        {
          text: "Sanne gaat naar de supermarkt.",
          translation: "Sanne goes to the supermarket.",
        },
        {
          text: "Ze heeft een lijstje: brood, kaas, melk en appels.",
          translation: "She has a little list: bread, cheese, milk and apples.",
        },
        { text: "De kaas is niet duur.", translation: "The cheese isn't expensive." },
        { text: "De appels zijn heel lekker.", translation: "The apples are really tasty." },
      ],
      [
        {
          text: "Bij de kassa vraagt de man: \"Wilt u een tas?\"",
          translation: "At the checkout the man asks: \"Would you like a bag?\"",
        },
        {
          text: "\"Nee, dank u wel,\" zegt Sanne.",
          translation: "\"No, thank you,\" says Sanne.",
        },
        { text: "\"Ik heb een tas.\"", translation: "\"I have a bag.\"" },
        {
          text: "Ze betaalt met haar pinpas.",
          translation: "She pays with her debit card.",
        },
      ],
    ],
  },
  {
    id: "met-de-trein",
    level: "A1",
    title: "Met de trein",
    titleTranslation: "By train",
    paragraphs: [
      [
        {
          text: "Daan gaat met de trein naar Amsterdam.",
          translation: "Daan takes the train to Amsterdam.",
        },
        {
          text: "De trein vertrekt om negen uur.",
          translation: "The train leaves at nine o'clock.",
        },
        {
          text: "Daan koopt geen kaartje.",
          translation: "Daan doesn't buy a ticket.",
        },
        {
          text: "Hij checkt in met zijn bankpas.",
          translation: "He checks in with his bank card.",
        },
      ],
      [
        {
          text: "De trein is vol, maar hij vindt een plek bij het raam.",
          translation: "The train is full, but he finds a spot by the window.",
        },
        {
          text: "Hij kijkt naar buiten: koeien, molens en veel water.",
          translation: "He looks outside: cows, windmills and lots of water.",
        },
        {
          text: "Na veertig minuten is hij in Amsterdam.",
          translation: "After forty minutes he's in Amsterdam.",
        },
      ],
    ],
    words: {
      zijn: { meaning: "his", local: "zijn also means 'are': ze zijn = they are" },
    },
  },
  {
    id: "het-weer",
    level: "A1",
    title: "Het weer",
    titleTranslation: "The weather",
    paragraphs: [
      [
        { text: "Het regent weer.", translation: "It's raining again." },
        { text: "Typisch Nederland!", translation: "Typical Netherlands!" },
        { text: "Sanne kijkt uit het raam.", translation: "Sanne looks out of the window." },
        {
          text: "Het is grijs en koud, en er is veel wind.",
          translation: "It's grey and cold, and there's a lot of wind.",
        },
      ],
      [
        {
          text: "Maar morgen schijnt de zon, zegt de weerman.",
          translation: "But tomorrow the sun will shine, says the weatherman.",
        },
        {
          text: "Sanne pakt haar jas en haar fiets.",
          translation: "Sanne grabs her coat and her bike.",
        },
        {
          text: "Een beetje regen is geen probleem.",
          translation: "A bit of rain is no problem.",
        },
      ],
    ],
  },
  {
    id: "mijn-huis",
    level: "A1",
    title: "Mijn huis",
    titleTranslation: "My house",
    paragraphs: [
      [
        { text: "Dit is mijn huis.", translation: "This is my house." },
        {
          text: "Het is oud en smal, zoals veel huizen in Leiden.",
          translation: "It's old and narrow, like many houses in Leiden.",
        },
        { text: "Beneden is de keuken.", translation: "Downstairs is the kitchen." },
        { text: "De trap is heel steil.", translation: "The stairs are very steep." },
        {
          text: "Boven zijn twee slaapkamers en een badkamer.",
          translation: "Upstairs there are two bedrooms and a bathroom.",
        },
      ],
      [
        {
          text: "Mijn kamer is klein, maar ik heb een groot raam.",
          translation: "My room is small, but I have a big window.",
        },
        {
          text: "Ik zie de gracht en de fietsen.",
          translation: "I see the canal and the bikes.",
        },
        { text: "Ik vind het een fijn huis.", translation: "I think it's a nice house." },
      ],
    ],
  },
];
