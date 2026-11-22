import type { Unit } from "@/core/content";
import { a2, gaps, heard, line, mc, order, pf, s, tf } from "./helpers";

/**
 * A2 unit 1: memories. The imperfetto, imperfetto or passato prossimo,
 * sapere or conoscere. Lead: Rita, who shows Emma Via del Pratello as it was
 * in the sixties, and the story of Gino. Culture: the old botteghe, Bologna's
 * porticoes, the South-North migration of the sixties.
 */
export const ricordi: Unit = {
  id: "it-a2-ricordi",
  level: "A2",
  title: "Com'era una volta",
  titleTranslation: "How it used to be",
  look: { motif: "olive", glaze: "manganese" },
  canDo: [
    "Describe how things used to be: da bambina abitavo…, c'erano…",
    "Tell a story with a background and events: ballavo quando è entrato…",
    "Choose between sapere (facts, skills) and conoscere (people, places)",
    "Follow an older person's memories of a city",
  ],
  story: {
    id: "rita-racconta",
    title: "Rita racconta",
    titleTranslation: "Rita's stories",
    intro:
      "A box of black-and-white photos on Rita's table. Via del Pratello in 1960, a dance in the square, a young man called Gino. Emma listens, and Karim goes looking for the rest of the story. The first unit of A2.",
  },
  texts: [
    {
      id: "rita-5-il-pratello-di-una-volta",
      level: "A2",
      title: "Il Pratello di una volta",
      titleTranslation: "The Pratello of the old days",
      grammar: ["imperfetto", "c-e-ci-sono"],
      paragraphs: [
        [
          s("Una domenica pomeriggio Emma porta un caffè a Rita. Sul tavolo c'è una scatola piena di vecchie foto.", "One Sunday afternoon Emma brings Rita a coffee. On the table there's a box full of old photos."),
          s("\"Guarda, questa è via del Pratello nel 1960\", dice Rita. \"Avevo sedici anni.\"", "\"Look, this is Via del Pratello in 1960,\" says Rita. \"I was sixteen.\""),
        ],
        [
          s("\"Com'era la strada?\" chiede Emma.", "\"What was the street like?\" Emma asks."),
          s("\"Era molto diversa. Non c'erano bar per studenti. C'erano tante botteghe: il fornaio, il calzolaio, il fabbro.\"", "\"It was very different. There were no student bars. There were lots of little workshops: the baker, the shoemaker, the blacksmith.\""),
          s("\"Le donne lavavano i panni nel cortile e i bambini giocavano in strada, perché non passavano macchine.\"", "\"The women washed the laundry in the courtyard and the children played in the street, because no cars came by.\""),
          s("\"E lei cosa faceva?\" \"Io andavo a scuola la mattina, e il pomeriggio aiutavo mia madre nel negozio di stoffe.\"", "\"And what did you do?\" \"I went to school in the morning, and in the afternoon I helped my mother in the fabric shop.\""),
        ],
        [
          s("\"Avevate la televisione?\" \"No, cara! Solo il bar aveva la televisione, e il sabato sera tutta la via andava lì a guardare i quiz.\"", "\"Did you have a television?\" \"No, dear! Only the bar had a television, and on Saturday evenings the whole street went there to watch the quiz shows.\""),
          s("Emma ride. \"Allora il Bar Margherita c'era già?\" \"Certo. Ma il caffè costava cinquanta lire!\"", "Emma laughs. \"So Bar Margherita was already there?\" \"Of course. But a coffee cost fifty lire!\""),
        ],
      ],
      tasks: [
        mc("What was the street like in 1960?", ["Full of small workshops and shops", "Full of student bars", "Full of cars"], 0),
        tf("Rita aveva vent'anni nel 1960.", "Rita was twenty in 1960.", false),
        mc("Why did children play in the street?", ["No cars came by", "There was no school", "The courtyard was closed"], 0),
        tf("Il Bar Margherita c'era già nel 1960.", "Bar Margherita was already there in 1960.", true),
      ],
    },
    {
      id: "rita-6-il-ballo",
      level: "A2",
      title: "Il ballo",
      titleTranslation: "The dance",
      grammar: ["imperfetto-passato", "imperfetto", "passato-essere"],
      paragraphs: [
        [
          s("Rita prende un'altra foto: una ragazza con un vestito a fiori balla in una piazza piena di gente.", "Rita takes another photo: a girl in a flowery dress is dancing in a square full of people."),
          s("\"Questa sono io, a diciotto anni. Era la festa del quartiere e c'era un'orchestra in piazza.\"", "\"This is me, at eighteen. It was the neighbourhood festival and there was an orchestra in the square.\""),
        ],
        [
          s("\"Ballavo con mia cugina quando è arrivato un ragazzo alto, con i capelli neri. Si chiamava Gino.\"", "\"I was dancing with my cousin when a tall young man with black hair arrived. His name was Gino.\""),
          s("\"Mi ha guardato e mi ha chiesto: Balla con me, signorina? Io ero molto timida e ho detto di no!\"", "\"He looked at me and asked: Will you dance with me, miss? I was very shy and I said no!\""),
          s("\"Di no?\" chiede Emma. \"Sì. Ma la settimana dopo è venuto al negozio di mia madre e ha comprato tre metri di stoffa. Non sapeva neanche cosa farci!\"", "\"No?\" Emma asks. \"Yes. But the week after he came to my mother's shop and bought three metres of fabric. He didn't even know what to do with it!\""),
        ],
        [
          s("\"Poi passava davanti al negozio ogni giorno. Dopo un mese siamo usciti insieme.\"", "\"Then he walked past the shop every day. After a month we went out together.\""),
          s("\"E poi?\" \"Poi ci siamo sposati, nel 1964. Gino lavorava in ferrovia e cantava sempre. È morto dieci anni fa.\"", "\"And then?\" \"Then we got married, in 1964. Gino worked on the railways and was always singing. He died ten years ago.\""),
          s("Rita guarda la foto per un momento. Poi sorride: \"Ballava malissimo, ma era tanto simpatico.\"", "Rita looks at the photo for a moment. Then she smiles: \"He danced terribly, but he was so nice.\""),
        ],
      ],
      tasks: [
        order("Put the story in order.", "Rita was dancing with her cousin", "Gino asked her to dance", "Gino bought fabric at her mother's shop", "They went out together", "They got married"),
        mc("Why did Gino buy fabric?", ["To see Rita again", "He was a tailor", "His mother needed it"], 0),
        tf("Rita ha ballato con Gino la prima sera.", "Rita danced with Gino the first evening.", false),
        mc("What was Gino like?", ["Bad at dancing, but very nice", "Shy and quiet", "A good dancer"], 0),
      ],
    },
    {
      id: "rita-7-sai-chi-era",
      level: "A2",
      title: "Sai chi era?",
      titleTranslation: "Do you know who he was?",
      grammar: ["sapere-conoscere", "imperfetto"],
      paragraphs: [
        [
          s("Il giorno dopo Emma va in biblioteca con Karim. Vuole sapere di più sulla storia di via del Pratello.", "The next day Emma goes to the library with Karim. She wants to know more about the history of Via del Pratello."),
          s("\"Conosci qualcuno che sa queste cose?\" chiede Emma. \"Io!\" dice Karim. \"Studio ingegneria, ma leggo sempre libri di storia.\"", "\"Do you know anyone who knows these things?\" Emma asks. \"Me!\" says Karim. \"I study engineering, but I'm always reading history books.\""),
        ],
        [
          s("\"Sai perché si chiama Pratello?\" \"Sì, lo so: qui una volta c'era un piccolo prato, fuori dalle mura della città.\"", "\"Do you know why it's called Pratello?\" \"Yes, I know: there used to be a little meadow here, outside the city walls.\""),
          s("\"E conosci la storia dei portici?\" \"Certo. Nel Medioevo le case erano piccole e la gente costruiva stanze sopra la strada. Così sono nati i portici.\"", "\"And do you know the story of the porticoes?\" \"Of course. In the Middle Ages the houses were small and people built rooms over the street. That's how the porticoes were born.\""),
        ],
        [
          s("Emma mostra a Karim una foto di Rita e Gino. \"Conosci questo ragazzo?\"", "Emma shows Karim a photo of Rita and Gino. \"Do you know this young man?\""),
          s("\"No, non lo conosco. Ma so dove cercare: all'archivio della ferrovia!\"", "\"No, I don't know him. But I know where to look: in the railway archive!\""),
          s("\"Tu sai tutto\", ride Emma. \"No. So molte cose, ma conosco poche persone. Tu conosci tutti nella via!\"", "\"You know everything,\" Emma laughs. \"No. I know lots of things, but I know few people. You know everyone in the street!\""),
        ],
      ],
      tasks: [
        mc("Where does the name Pratello come from?", ["A little meadow outside the city walls", "A famous family", "A street market"], 0),
        tf("Karim conosce Gino.", "Karim knows Gino.", false),
        mc("How were the porticoes born?", ["People built rooms over the street", "The city wanted shade", "Shops needed more space"], 0),
        tf("Karim legge sempre libri di storia.", "Karim is always reading history books.", true),
      ],
    },
  ],
  sequence: [
    "rita-5-il-pratello-di-una-volta", "rita-e-franca", "imperfetto",
    "rita-6-il-ballo", "imperfetto-passato", "bologna-com-era",
    "rita-7-sai-chi-era", "sapere-conoscere",
    "write", "words", "check",
  ],
  listening: [
    {
      id: "rita-e-franca",
      level: "A2",
      title: "Ti ricordi?",
      titleTranslation: "Do you remember?",
      kind: "dialogue",
      situation: "Rita's sister Franca calls from Modena.",
      grammar: ["imperfetto"],
      lines: [
        line("Franca", "Pronto, Rita? Sono Franca. Come stai?", "Hello, Rita? It's Franca. How are you?"),
        line("Rita", "Bene! Sai, ieri ho guardato le vecchie foto con la mia vicina irlandese.", "Fine! You know, yesterday I looked at the old photos with my Irish neighbour."),
        line("Franca", "Ti ricordi la casa della nonna in campagna? D'estate andavamo sempre lì.", "Do you remember Grandma's house in the country? In the summer we always went there."),
        line("Rita", "Certo! Raccoglievamo le ciliegie e il nonno ci raccontava le storie della guerra.", "Of course! We picked cherries and Grandpa told us stories about the war."),
        line("Franca", "E tu cadevi sempre dall'albero!", "And you were always falling out of the tree!"),
        line("Rita", "Una volta sola! E tu piangevi perché avevi paura delle galline.", "Only once! And you used to cry because you were scared of the hens."),
      ],
      gist: { prompt: "What are they talking about?", options: ["Their childhood summers", "Franca's new house", "A trip to Modena"], answer: 0 },
      details: [
        { prompt: "Where did they spend their summers?", options: ["At their grandmother's in the country", "At the seaside", "In Modena"], answer: 0 },
        { prompt: "What did their grandfather do?", options: ["Told them stories about the war", "Picked cherries", "Kept hens"], answer: 0 },
      ],
      tasks: [
        tf("Franca aveva paura delle galline.", "Franca was scared of the hens.", true),
        heard(3, ["ciliegie", "ciabatte", "cipolle"], 0),
        gaps(1, "vecchie", "foto"),
      ],
      dictation: [2, 4],
    },
    {
      id: "bologna-com-era",
      level: "A2",
      title: "Bologna com'era",
      titleTranslation: "Bologna as it was",
      kind: "announcement",
      situation: "The audio guide of a photo exhibition about Bologna in the sixties.",
      grammar: ["imperfetto", "imperfetto-passato"],
      lines: [
        line("Guida", "Benvenuti alla mostra Bologna com'era.", "Welcome to the exhibition Bologna as it was."),
        line("Guida", "Negli anni Sessanta la città cambiava velocemente.", "In the sixties the city was changing fast."),
        line("Guida", "Molte famiglie arrivavano dal Sud per lavorare nelle fabbriche.", "Many families were arriving from the South to work in the factories."),
        line("Guida", "Le strade del centro erano piene di biciclette e di Vespe.", "The streets of the centre were full of bikes and Vespas."),
        line("Guida", "In quegli anni molte famiglie hanno comprato la prima lavatrice e la prima televisione.", "In those years many families bought their first washing machine and their first television."),
        line("Guida", "Nella prossima sala potete vedere le foto di via del Pratello.", "In the next room you can see the photos of Via del Pratello."),
      ],
      gist: { prompt: "What is this?", options: ["An audio guide about Bologna in the sixties", "A train announcement", "A radio advert"], answer: 0 },
      details: [
        { prompt: "Where did many families come from?", options: ["From the South", "From abroad", "From the mountains"], answer: 0 },
        { prompt: "What filled the streets?", options: ["Bikes and Vespas", "Cars", "Trams"], answer: 0 },
      ],
      tasks: [
        tf("Negli anni Sessanta la città non cambiava.", "In the sixties the city wasn't changing.", false),
        heard(3, ["biciclette", "bottiglie", "bistecche"], 0),
        gaps(4, "lavatrice", "televisione"),
      ],
      dictation: [1, 3],
    },
  ],
  writing: [
    a2({
      id: "w-quando-ero-piccolo",
      title: "Quando ero piccolo",
      titleTranslation: "When I was little",
      form: "description",
      situation: "Rita asks about your childhood. Describe where you lived and what you did.",
      points: [
        pf("Say where you lived", "Da bambino/a abitavo a … .", "abitavo"),
        pf("Describe the house or the street", "La mia casa era … .", "era"),
        pf("Say what you did every day", "Ogni giorno … .", "ogni"),
        pf("Say what you did in the summer", "D'estate … .", "estate"),
        pf("Say who your best friend was", "Il mio migliore amico / La mia migliore amica si chiamava … .", "chiamava"),
      ],
      model:
        "Da bambina abitavo in un piccolo paese vicino a Cork. La mia casa era vecchia e c'era un giardino con un albero enorme. Ogni giorno andavo a scuola in bicicletta con mio fratello. D'estate andavamo al mare, anche quando pioveva. La mia migliore amica si chiamava Niamh e abitava nella casa di fronte.",
    }),
    a2({
      id: "w-un-incontro",
      title: "Un incontro",
      titleTranslation: "A meeting",
      form: "story",
      situation: "Like Rita, tell how you met someone important: a friend, a partner, a teacher.",
      points: [
        pf("Set the scene: where and when", "Era … e io ero … .", "era", "ero"),
        pf("Say what you were doing", "Io … quando … .", "quando"),
        pf("Say what happened", "È arrivato / è arrivata … .", "arrivato", "arrivata"),
        pf("Say what they were like", "Era … .", "era"),
        pf("Say what happened next", "Dopo … .", "dopo"),
      ],
      model:
        "Era inverno e io ero nuovo a Lisbona. Aspettavo l'autobus sotto la pioggia quando è arrivato un ragazzo con un ombrello enorme. Era alto e molto simpatico. Mi ha chiesto: Vuoi venire sotto l'ombrello? Dopo una settimana eravamo amici.",
    }),
  ],
  checkpoint: {
    title: "Karim trova Gino",
    titleTranslation: "Karim finds Gino",
    text: [
      [
        s("Una settimana dopo Karim torna dall'archivio con una fotocopia.", "A week later Karim comes back from the archive with a photocopy."),
        s("\"Ho trovato Gino! Nel 1965 lavorava alla stazione di Bologna. Era capotreno e sapeva suonare la fisarmonica: c'è una foto della festa dei ferrovieri.\"", "\"I've found Gino! In 1965 he worked at Bologna station. He was a train conductor and he could play the accordion: there's a photo of the railway workers' party.\""),
        s("Emma porta la fotocopia a Rita. Rita la guarda a lungo. \"Non sapevo che c'era questa foto. Grazie, cari.\"", "Emma takes the photocopy to Rita. Rita looks at it for a long time. \"I didn't know there was this photo. Thank you, dears.\""),
      ],
    ],
    textTasks: [
      tf("Gino lavorava alla stazione.", "Gino worked at the station.", true),
      mc("What could Gino do?", ["Play the accordion", "Dance well", "Drive a car"], 0),
      mc("How does Rita feel?", ["Moved and grateful", "Angry", "Bored"], 0),
    ],
    listening: {
      situation: "Rita leaves Karim a voice message.",
      lines: [
        line("Rita", "Karim, sono Rita.", "Karim, it's Rita."),
        line("Rita", "Volevo dirti grazie per la foto di Gino.", "I wanted to say thank you for the photo of Gino."),
        line("Rita", "Quando eravamo giovani, lui suonava la fisarmonica ogni domenica.", "When we were young, he played the accordion every Sunday."),
        line("Rita", "Vieni a cena venerdì? Faccio i tortellini.", "Will you come to dinner on Friday? I'm making tortellini."),
      ],
      questions: [
        { prompt: "Why does Rita call?", options: ["To thank Karim and invite him to dinner", "To ask for a book", "To complain about the noise"], answer: 0 },
        { prompt: "When is the dinner?", options: ["On Friday", "On Sunday", "Tonight"], answer: 0 },
      ],
    },
    write: {
      situation: "Write a short note to Rita: tell her one thing you used to do as a child.",
      points: [
        { prompt: "Greet her", frame: "Cara Rita, … ." },
        { prompt: "Say what you used to do as a child", frame: "Da bambino/a … ." },
        { prompt: "Say goodbye", frame: "A presto, … ." },
      ],
      model: "Cara Rita, grazie per le storie di Gino. Da bambina anch'io ballavo malissimo! A presto, Emma",
      modelTranslation: "Dear Rita, thank you for the stories about Gino. As a child I danced terribly too! See you soon, Emma",
    },
  },
};
