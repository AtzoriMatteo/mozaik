import type { Unit } from "@/core/content";
import { a2, gaps, heard, line, mc, order, pf, s, tf } from "./helpers";

/**
 * A2 unit 6: the tournament. The impersonal si (si gioca, non si può),
 * adverbs in -mente, prima di + infinitive and dopo + aver/essere +
 * participle. Lead: Davide, whose wheelchair basketball team plays the
 * national final in Bologna. Culture: amateur sport, cheering, team dinners.
 */
export const sport: Unit = {
  id: "it-a2-sport",
  level: "A2",
  title: "La finale",
  titleTranslation: "The final",
  look: { motif: "laurel", glaze: "manganese" },
  canDo: [
    "Explain rules and habits with si: si gioca in cinque, non si può…",
    "Say how something is done: velocemente, attentamente, finalmente",
    "Put actions in order: prima di entrare, dopo aver vinto",
    "Follow a sports commentary",
  ],
  story: {
    id: "davide-in-finale",
    title: "Davide in finale",
    titleTranslation: "Davide in the final",
    intro:
      "September. Davide's wheelchair basketball team has reached the national final, and this year it's played in Bologna. Karim trains with them, Emma learns the rules, and Via del Pratello buys tickets.",
  },
  texts: [
    {
      id: "davide-5-l-allenamento",
      level: "A2",
      title: "L'allenamento",
      titleTranslation: "Training",
      grammar: ["avverbi-mente", "frequency"],
      paragraphs: [
        [
          s("Martedì sera Karim va all'allenamento di Davide. In palestra ci sono dieci giocatori, tutti in carrozzina.", "On Tuesday evening Karim goes to Davide's training session. In the gym there are ten players, all in wheelchairs."),
          s("L'allenatrice, Paola, gli dà una carrozzina da basket. È leggera, con le ruote inclinate, molto diversa da quella di tutti i giorni.", "The coach, Paola, gives him a basketball wheelchair. It's light, with slanted wheels, very different from an everyday one."),
          s("\"Siediti e prova. Spingi lentamente, all'inizio.\"", "\"Sit down and try. Push slowly, at first.\""),
        ],
        [
          s("Karim prova, ma la carrozzina gira continuamente a destra. Davide ride: \"Usa le due mani insieme, non una sola!\"", "Karim tries, but the wheelchair keeps turning right. Davide laughs: \"Use both hands together, not just one!\""),
          s("Gli altri giocatori si muovono velocemente e passano la palla precisamente, senza guardare.", "The other players move fast and pass the ball precisely, without looking."),
          s("\"Come fanno?\" chiede Karim. \"Si allenano seriamente, due volte alla settimana, da anni\", risponde Paola.", "\"How do they do it?\" Karim asks. \"They train seriously, twice a week, for years,\" Paola answers."),
        ],
        [
          s("Alla fine Karim tira a canestro. La palla tocca il ferro, gira… ed entra! Tutti battono le mani.", "At the end Karim shoots at the basket. The ball hits the rim, spins… and goes in! Everyone claps."),
          s("\"Finalmente!\" grida Davide. \"Sei pronto per la finale.\" \"Sì, certo\", risponde Karim. \"Come tifoso.\"", "\"At last!\" Davide shouts. \"You're ready for the final.\" \"Yes, of course,\" Karim answers. \"As a fan.\""),
        ],
      ],
      tasks: [
        mc("What problem does Karim have at first?", ["The wheelchair keeps turning right", "He can't catch the ball", "He's too tall"], 0),
        tf("La squadra si allena una volta al mese.", "The team trains once a month.", false),
        mc("What happens with Karim's shot?", ["It goes in", "It misses", "He doesn't shoot"], 0),
        tf("Karim giocherà la finale.", "Karim will play in the final.", false),
      ],
    },
    {
      id: "davide-6-come-si-gioca",
      level: "A2",
      title: "Come si gioca?",
      titleTranslation: "How do you play?",
      grammar: ["si-impersonale", "modal-verbs"],
      paragraphs: [
        [
          s("Emma vuole capire le regole prima della finale. Davide gliele spiega al bar, con le tazzine sul tavolo.", "Emma wants to understand the rules before the final. Davide explains them to her at the bar, with the coffee cups on the table."),
          s("\"Si gioca in cinque contro cinque, come nel basket normale. Il canestro è alto uguale e il campo è lo stesso.\"", "\"You play five against five, like in normal basketball. The basket is just as high and the court is the same.\""),
        ],
        [
          s("\"Con la palla in mano si possono fare due spinte. Poi si deve passare, tirare o far rimbalzare la palla.\"", "\"With the ball in your hands you can push twice. Then you have to pass, shoot or bounce the ball.\""),
          s("\"E non si può alzare dalla carrozzina?\" \"No, mai! Non ci si alza, e non si tocca la carrozzina degli altri con le mani.\"", "\"And you can't get up from the wheelchair?\" \"No, never! You don't stand up, and you don't touch other people's wheelchairs with your hands.\""),
        ],
        [
          s("\"Ogni giocatore ha un punteggio, da uno a quattro e mezzo, secondo il corpo. In campo una squadra non può superare quattordici punti.\"", "\"Every player has a score, from one to four and a half, depending on their body. On court a team can't go over fourteen points.\""),
          s("Emma è sorpresa. \"Quindi si gioca anche con la testa, non solo con le braccia.\" \"Esatto. Si vince insieme, o non si vince.\"", "Emma is surprised. \"So you play with your head too, not just with your arms.\" \"Exactly. You win together, or you don't win.\""),
        ],
      ],
      tasks: [
        mc("How many players per team are on court?", ["Five", "Six", "Four"], 0),
        tf("In campo ci si può alzare dalla carrozzina.", "On court you can stand up from your wheelchair.", false),
        mc("What is the fourteen-point rule about?", ["The total of the players' scores on court", "The final score", "The number of passes"], 0),
        tf("Il canestro è più alto che nel basket normale.", "The basket is higher than in normal basketball.", false),
      ],
    },
    {
      id: "davide-7-la-finale",
      level: "A2",
      title: "La finale",
      titleTranslation: "The final",
      grammar: ["prima-dopo", "passato-prossimo", "imperfetto-passato"],
      paragraphs: [
        [
          s("Sabato il palazzetto è pieno. Dalla via del Pratello sono venuti tutti: Emma, Karim, Rita, Lin, Ana, perfino il nonno Wei con una bandiera.", "On Saturday the arena is full. Everyone has come from Via del Pratello: Emma, Karim, Rita, Lin, Ana, even Grandpa Wei with a flag."),
          s("Prima di entrare in campo Davide chiude gli occhi e ascolta la sua canzone preferita. Lo fa prima di ogni partita.", "Before going out on court Davide closes his eyes and listens to his favourite song. He does it before every match."),
        ],
        [
          s("Il primo tempo va male: Bologna perde di dieci punti. Negli spogliatoi Paola parla poco: \"Giocate come in allenamento. Non pensate al punteggio.\"", "The first half goes badly: Bologna is ten points down. In the changing room Paola says little: \"Play like you do in training. Don't think about the score.\""),
          s("Dopo essere tornati in campo, i giocatori cambiano completamente. Davide passa, corre, tira: tre canestri in due minuti.", "After going back on court, the players change completely. Davide passes, races, shoots: three baskets in two minutes."),
        ],
        [
          s("A dieci secondi dalla fine Bologna è avanti di un punto. L'altra squadra tira… e sbaglia! Il palazzetto esplode.", "With ten seconds to go Bologna is one point ahead. The other team shoots… and misses! The arena explodes."),
          s("Dopo aver ricevuto la coppa, Davide la porta fino alla tribuna e la dà a Rita. \"Questa è anche vostra\", dice.", "After receiving the cup, Davide carries it all the way to the stands and gives it to Rita. \"This is yours too,\" he says."),
        ],
      ],
      tasks: [
        order("Put the final in order.", "Davide listens to his favourite song", "Bologna loses the first half", "Paola talks in the changing room", "Davide scores three baskets", "Davide gives the cup to Rita"),
        tf("Bologna vince il primo tempo.", "Bologna wins the first half.", false),
        mc("What does Davide do before every match?", ["Listens to his favourite song", "Eats a banana", "Calls his mother"], 0),
        mc("Who does Davide give the cup to?", ["Rita", "Paola", "Karim"], 0),
      ],
    },
  ],
  sequence: [
    "davide-5-l-allenamento", "la-radiocronaca", "avverbi-mente",
    "davide-6-come-si-gioca", "si-impersonale", "negli-spogliatoi",
    "davide-7-la-finale", "prima-dopo",
    "write", "words", "check",
  ],
  listening: [
    {
      id: "la-radiocronaca",
      level: "A2",
      title: "La radiocronaca",
      titleTranslation: "The radio commentary",
      kind: "announcement",
      situation: "The last minute of the final, live on a local radio.",
      grammar: ["avverbi-mente", "stare-gerundio"],
      lines: [
        line("Radio", "Ultimo minuto, Bologna è sotto di un punto!", "Last minute, Bologna is one point down!"),
        line("Radio", "Davide prende la palla e avanza rapidamente.", "Davide takes the ball and moves forward quickly."),
        line("Radio", "Passa a Matteo, che tira immediatamente… canestro!", "He passes to Matteo, who shoots straight away… basket!"),
        line("Radio", "Ora l'altra squadra sta attaccando, tirano… e sbagliano!", "Now the other team is attacking, they shoot… and miss!"),
        line("Radio", "È finita! Bologna è campione d'Italia! Il pubblico sta cantando!", "It's over! Bologna are Italian champions! The crowd is singing!"),
      ],
      gist: { prompt: "What is this?", options: ["Live commentary of the final minute", "An interview with the coach", "An advert for tickets"], answer: 0 },
      details: [
        { prompt: "Who scores the basket?", options: ["Matteo", "Davide", "Paola"], answer: 0 },
        { prompt: "How does it end?", options: ["Bologna wins", "Bologna loses", "It's a draw"], answer: 0 },
      ],
      tasks: [
        tf("Alla fine l'altra squadra fa canestro.", "At the end the other team scores.", false),
        heard(1, ["rapidamente", "lentamente", "raramente"], 0),
        gaps(4, "pubblico", "cantando"),
      ],
      dictation: [1, 4],
    },
    {
      id: "negli-spogliatoi",
      level: "A2",
      title: "Negli spogliatoi",
      titleTranslation: "In the changing room",
      kind: "dialogue",
      situation: "Half time. Paola, the coach, talks to the team.",
      grammar: ["si-impersonale", "imperative"],
      lines: [
        line("Paola", "Ragazzi, ascoltatemi. Siamo sotto di dieci punti, ma si può ancora vincere.", "Guys, listen to me. We're ten points down, but we can still win."),
        line("Davide", "Corrono più di noi, Paola.", "They're running more than us, Paola."),
        line("Paola", "Allora si passa di più e si corre di meno. La palla è più veloce della carrozzina.", "Then we pass more and run less. The ball is faster than the wheelchair."),
        line("Matteo", "E in difesa?", "And in defence?"),
        line("Paola", "In difesa si sta vicini, sempre. E non si parla con l'arbitro, chiaro?", "In defence we stay close, always. And nobody talks to the referee, clear?"),
        line("Davide", "Chiaro. Andiamo!", "Clear. Let's go!"),
      ],
      gist: { prompt: "What is Paola doing?", options: ["Giving the team new instructions", "Congratulating the team", "Choosing a new captain"], answer: 0 },
      details: [
        { prompt: "What's Paola's main idea?", options: ["Pass more, run less", "Shoot from far", "Run more"], answer: 0 },
        { prompt: "What mustn't they do?", options: ["Talk to the referee", "Pass the ball", "Stay close in defence"], answer: 0 },
      ],
      tasks: [
        tf("La squadra è avanti di dieci punti.", "The team is ten points ahead.", false),
        heard(2, ["veloce", "vicina", "vecchia"], 0),
        gaps(4, "difesa", "arbitro"),
      ],
      dictation: [2, 4],
    },
  ],
  writing: [
    a2({
      id: "w-il-mio-sport",
      title: "Il mio sport",
      titleTranslation: "My sport",
      form: "description",
      situation: "Explain a sport or game you like to someone who doesn't know it.",
      points: [
        pf("Say what it is and where it's played", "Il … si gioca … .", "si gioca"),
        pf("Say how many people play", "Si gioca in … .", "si gioca"),
        pf("Say one thing you can't do", "Non si può … .", "non si può"),
        pf("Say how you play it", "Io gioco … .", "gioco"),
        pf("Say why you like it", "Mi piace perché … .", "piace"),
      ],
      model:
        "Il basket si gioca in una palestra. Si gioca in cinque contro cinque. Non si può camminare con la palla in mano. Io gioco male, ma sempre volentieri. Mi piace perché dopo la partita si va tutti a mangiare la pizza.",
    }),
    a2({
      id: "w-una-giornata-speciale",
      title: "Una giornata speciale",
      titleTranslation: "A special day",
      form: "story",
      situation: "Tell the story of a match, a race or an exam you'll never forget.",
      points: [
        pf("Say what it was and when", "Era … .", "era"),
        pf("Say what you did before", "Prima di … , … .", "prima di"),
        pf("Say what happened", "Poi … .", "poi"),
        pf("Say what you did after", "Dopo aver … / Dopo essere … , … .", "dopo"),
      ],
      model:
        "Era il mio primo esame all'università. Prima di entrare ho bevuto tre caffè: troppi! Poi ho parlato molto velocemente e il professore rideva. Dopo aver finito, il professore mi ha detto: bravo!",
    }),
  ],
  checkpoint: {
    title: "Il giorno dopo",
    titleTranslation: "The day after",
    text: [
      [
        s("Il giorno dopo la finale, la coppa è sul bancone del Bar Margherita. Marco la pulisce attentamente ogni ora.", "The day after the final, the cup is on the counter at Bar Margherita. Marco carefully cleans it every hour."),
        s("Sul giornale c'è una foto di Davide con la coppa. \"Prima di questa squadra non facevo sport\", dice nell'intervista. \"Adesso nessuno mi ferma.\"", "In the paper there's a photo of Davide with the cup. \"Before this team I didn't do any sport,\" he says in the interview. \"Now there's no stopping me.\""),
        s("Dopo aver letto l'articolo, Rita lo taglia e lo appende al muro, vicino alla foto di Gino.", "After reading the article, Rita cuts it out and hangs it on the wall, next to the photo of Gino."),
      ],
    ],
    textTasks: [
      tf("La coppa è al Bar Margherita.", "The cup is at Bar Margherita.", true),
      mc("What does Rita do with the article?", ["She hangs it next to Gino's photo", "She sends it to Davide's mother", "She throws it away"], 0),
      mc("What did Davide do before the team?", ["No sport", "Football", "Swimming"], 0),
    ],
    listening: {
      situation: "Davide leaves a message in the street's group chat.",
      lines: [
        line("Davide", "Ciao a tutti, sono Davide.", "Hi everyone, it's Davide."),
        line("Davide", "Grazie di cuore: ieri vi ho sentito cantare per tutta la partita.", "Thank you from the bottom of my heart: yesterday I heard you singing all through the match."),
        line("Davide", "Venerdì si festeggia: cena per tutti nel giardino nuovo.", "On Friday we celebrate: dinner for everyone in the new garden."),
        line("Davide", "Si porta qualcosa da mangiare, la musica la porto io!", "Everyone brings something to eat, I'll bring the music!"),
      ],
      questions: [
        { prompt: "Why does Davide thank everyone?", options: ["They sang through the whole match", "They paid for the dinner", "They cleaned the cup"], answer: 0 },
        { prompt: "Where is the dinner?", options: ["In the new garden", "At the bar", "At Davide's"], answer: 0 },
      ],
    },
    write: {
      situation: "Reply to Davide in the group chat.",
      points: [
        { prompt: "Congratulate him", frame: "Bravissimo, Davide! … ." },
        { prompt: "Say what you'll bring", frame: "Venerdì porto … ." },
        { prompt: "Say goodbye", frame: "A venerdì!" },
      ],
      model: "Bravissimo, Davide! Avete giocato benissimo. Venerdì porto le lasagne. A venerdì!",
      modelTranslation: "Well done, Davide! You played brilliantly. On Friday I'll bring lasagne. See you on Friday!",
    },
  },
};
