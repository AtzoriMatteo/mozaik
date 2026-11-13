import { mc, order, pairs, s, tf } from "./helpers";
import type { UnitContent } from "./types";

/**
 * Unit 11: the Netherlands itself. Where it lies, its cities and water, a
 * day in Amsterdam, and postcards from around the country. Every fact here
 * is one a newcomer actually runs into.
 */

export const nederland: UnitContent = {
  id: "a1-nederland",
  level: "A1",
  title: "Nederland ontdekken",
  titleTranslation: "Discovering the Netherlands",
  look: { motif: "bridge", glaze: "cobalt" },
  canDo: [
    "Say where a country or city lies: in the north, south, east or west",
    "Name the big Dutch cities and what they're known for",
    "Plan a day out and buy a train ticket",
    "Write a postcard, from friendly to formal",
  ],
  texts: [
    {
      id: "nederland-in-het-klein",
      level: "A1",
      title: "Nederland in het klein",
      titleTranslation: "The Netherlands in a nutshell",
      grammar: ["er-is", "comparatives", "prepositions", "plurals"],
      paragraphs: [
        [
          s("Nederland is een klein land in het noordwesten van Europa.", "The Netherlands is a small country in the north-west of Europe."),
          s("Er wonen bijna achttien miljoen mensen.", "Almost eighteen million people live there."),
          s("In het zuiden ligt België en in het oosten ligt Duitsland.", "Belgium lies to the south and Germany to the east."),
          s("In het noorden en het westen ligt de Noordzee.", "To the north and west lies the North Sea."),
        ],
        [
          s("Nederland heeft twaalf provincies, zoals Noord-Holland, Utrecht en Limburg.", "The Netherlands has twelve provinces, such as North Holland, Utrecht and Limburg."),
          s("De hoofdstad is Amsterdam, maar de regering zit in Den Haag.", "The capital is Amsterdam, but the government sits in The Hague."),
          s("Daar woont ook de koning.", "The king lives there too."),
          s("Rotterdam heeft de grootste haven van Europa.", "Rotterdam has the biggest port in Europe."),
        ],
        [
          s("Nederland is heel plat.", "The Netherlands is very flat."),
          s("Het hoogste punt ligt in Limburg en is maar 322 meter hoog.", "The highest point is in Limburg and is only 322 metres high."),
          s("Ongeveer een kwart van het land ligt onder de zeespiegel.", "About a quarter of the country lies below sea level."),
          s("Daarom zijn er overal dijken, kanalen en molens.", "That's why there are dykes, canals and windmills everywhere."),
        ],
        [
          s("Het land is klein, dus je reist snel van de ene stad naar de andere.", "The country is small, so you travel quickly from one city to the next."),
          s("Met de trein ben je in tweeënhalf uur van Amsterdam in Maastricht.", "By train you get from Amsterdam to Maastricht in two and a half hours."),
          s("Ook Frankrijk en Engeland zijn dichtbij: met de trein ben je in ongeveer drie uur in Parijs en in vier uur in Londen.", "France and England are close too: by train you're in Paris in about three hours and in London in four."),
          s("En de taal? In Nederland spreken mensen Nederlands.", "And the language? In the Netherlands people speak Dutch."),
          s("In Friesland spreken veel mensen ook Fries.", "In Friesland many people also speak Frisian."),
          s("In het noorden van België spreken ze ook Nederlands, in het zuiden Frans.", "In the north of Belgium they speak Dutch too, in the south French."),
        ],
      ],
      tasks: [
        mc("Which country lies to the east of the Netherlands?", ["Belgium", "Germany", "France"], 1),
        tf("De koning woont in Amsterdam.", "The king lives in Amsterdam.", false),
        mc("Where does the government sit?", ["Amsterdam", "Rotterdam", "The Hague"], 2),
        tf("Een kwart van Nederland ligt onder de zeespiegel.", "A quarter of the Netherlands lies below sea level.", true),
        pairs(
          "Match the place and the fact.",
          "Rotterdam=the biggest port in Europe | Limburg=the highest point | Friesland=a second language | Den Haag=the government",
        ),
      ],
    },
    {
      id: "een-dagje-amsterdam",
      level: "A1",
      title: "Een dagje Amsterdam",
      titleTranslation: "A day in Amsterdam",
      grammar: ["modal-verbs", "comparatives", "time-numbers", "separable-verbs"],
      paragraphs: [
        [
          s("Priya komt uit India en woont nu in Eindhoven.", "Priya is from India and now lives in Eindhoven."),
          s("Haar ouders zijn twee weken op bezoek.", "Her parents are visiting for two weeks."),
          s("Op zaterdag gaan ze met de trein naar Amsterdam.", "On Saturday they take the train to Amsterdam."),
          s("De reis duurt ongeveer anderhalf uur.", "The journey takes about an hour and a half."),
        ],
        [
          s("Ze komen aan op Amsterdam Centraal, een groot en mooi station.", "They arrive at Amsterdam Centraal, a big, beautiful station."),
          s("Buiten zien ze meteen fietsen, trams, toeristen en water.", "Outside they immediately see bikes, trams, tourists and water."),
          s("\"Kijk uit!\" roept Priya. \"Dat is een fietspad. Daar mag je niet lopen.\"", "\"Watch out!\" Priya shouts. \"That's a bike path. You can't walk there.\""),
          s("Ze lopen naar de Dam. Daar staat het Koninklijk Paleis.", "They walk to the Dam. The Royal Palace stands there."),
        ],
        [
          s("Daarna maken ze een rondvaart door de grachten.", "After that they take a boat tour through the canals."),
          s("De huizen aan het water zijn smal en hoog, en veel huizen zijn bijna vierhonderd jaar oud.", "The houses on the water are narrow and tall, and many are almost four hundred years old."),
          s("Haar vader maakt honderd foto's.", "Her father takes a hundred photos."),
        ],
        [
          s("Om twee uur gaan ze naar het Rijksmuseum.", "At two o'clock they go to the Rijksmuseum."),
          s("Daar hangt De Nachtwacht van Rembrandt, een heel groot schilderij.", "The Night Watch by Rembrandt hangs there, a very big painting."),
          s("Het Anne Frank Huis is ook beroemd, maar daar koop je de kaartjes online, en vandaag zijn ze op.", "The Anne Frank House is famous too, but you buy the tickets online there, and today they're sold out."),
          s("\"Volgende keer,\" zegt Priya. \"Ik koop de kaartjes nu al.\"", "\"Next time,\" says Priya. \"I'll buy the tickets right now.\""),
        ],
        [
          s("'s Avonds eten ze Indonesisch: een rijsttafel met heel veel kleine gerechten.", "In the evening they eat Indonesian: a rijsttafel with lots of small dishes."),
          s("Haar moeder vindt het lekker, maar minder pittig dan in India.", "Her mother thinks it's tasty, but less spicy than in India."),
          s("Moe en blij nemen ze de laatste trein terug naar Eindhoven.", "Tired and happy, they take the last train back to Eindhoven."),
          s("Over twee weken nemen haar ouders op Schiphol, het grote vliegveld bij Amsterdam, het vliegtuig terug naar India.", "In two weeks her parents take the plane back to India from Schiphol, the big airport near Amsterdam."),
        ],
      ],
      tasks: [
        tf("Priya woont in Amsterdam.", "Priya lives in Amsterdam.", false),
        mc("Why does Priya shout \"Kijk uit!\"?", ["A tram is coming", "They're walking on a bike path", "Her father drops his camera"], 1),
        mc("What hangs in the Rijksmuseum?", ["The Night Watch by Rembrandt", "Anne Frank's diary", "A map of the canals"], 0),
        mc("Why don't they visit the Anne Frank House?", ["It's closed on Saturday", "The tickets are sold out", "It's too expensive"], 1),
        order(
          "Put the day in order.",
          "They arrive at Amsterdam Centraal",
          "They see the Royal Palace on the Dam",
          "They take a canal boat tour",
          "They visit the Rijksmuseum",
          "They eat a rijsttafel",
        ),
      ],
    },
    {
      id: "groeten-uit",
      level: "A1",
      title: "Groeten uit…",
      titleTranslation: "Greetings from…",
      grammar: ["comparatives", "er-is", "present-regular", "time-numbers"],
      paragraphs: [
        [
          s("Lieve oma,", "Dear Grandma,"),
          s("Groeten van Texel! Texel is een eiland in het noorden.", "Greetings from Texel! Texel is an island in the north."),
          s("We gaan met de boot van Den Helder naar Texel. Dat duurt maar twintig minuten.", "We take the boat from Den Helder to Texel. That only takes twenty minutes."),
          s("Er zijn hier meer schapen dan mensen!", "There are more sheep than people here!"),
          s("Elke dag fietsen we naar het strand. Het waait altijd.", "Every day we cycle to the beach. It's always windy."),
          s("Veel liefs, Sem en Lotte", "Lots of love, Sem and Lotte"),
        ],
        [
          s("Hoi Ahmed,", "Hi Ahmed,"),
          s("Vandaag zijn we in Kinderdijk, vlak bij Rotterdam.", "Today we're in Kinderdijk, close to Rotterdam."),
          s("Hier staan negentien oude molens naast elkaar.", "Nineteen old windmills stand here side by side."),
          s("Ze pompen al bijna driehonderd jaar water uit de polder.", "They've been pumping water out of the polder for almost three hundred years."),
          s("In een paar molens wonen nog mensen. Twee molens kun je van binnen bekijken.", "People still live in a few of the mills. You can look inside two of them."),
          s("Tot gauw, Youssef", "See you soon, Youssef"),
        ],
        [
          s("Beste collega's,", "Dear colleagues,"),
          s("Hartelijke groeten uit Maastricht, helemaal in het zuiden!", "Warm greetings from Maastricht, right down in the south!"),
          s("Hier is Nederland niet plat: er zijn heuvels!", "Here the Netherlands isn't flat: there are hills!"),
          s("De stad is heel oud en de mensen praten met een zachte g.", "The city is very old and people speak with a soft g."),
          s("Elke middag drinken we koffie op het Vrijthof, een groot plein, en we eten Limburgse vlaai.", "Every afternoon we have coffee on the Vrijthof, a big square, and we eat Limburg tart."),
          s("Tot maandag! Marieke", "See you on Monday! Marieke"),
        ],
      ],
      tasks: [
        pairs("Who writes from where?", "Sem and Lotte=Texel | Youssef=Kinderdijk | Marieke=Maastricht"),
        tf("Op Texel zijn er meer schapen dan mensen.", "On Texel there are more sheep than people.", true),
        mc("How many windmills stand at Kinderdijk?", ["Nine", "Nineteen", "Ninety"], 1),
        mc("What's different about Maastricht?", ["It has hills", "It's an island", "It's the capital"], 0),
        mc("Which opening is the most formal?", ["Lieve oma", "Hoi Ahmed", "Beste collega's"], 2),
      ],
    },
  ],
};
