import type { Checkpoint } from "@/core/content";
import { line, s } from "./units/helpers";

/** Checkpoints for the first Italian units (each built around a custom few learners know). */
export const checkpointsIt: Record<string, Checkpoint> = {
  "it-a1-ciao": {
    title: "Buonasera alle tre?",
    titleTranslation: "Good evening at three?",
    text: [
      [
        s("Sono le tre del pomeriggio. Emma incontra la signora Rita sulle scale.", "It's three in the afternoon. Emma meets Signora Rita on the stairs."),
        s("Emma dice: Buongiorno, signora! Rita risponde: Buonasera, cara!", "Emma says: Good morning, madam! Rita answers: Good evening, dear!"),
        s("Buonasera alle tre? Sì. In Italia buongiorno è per la mattina. Dopo pranzo, molti italiani dicono già buonasera.", "Good evening at three? Yes. In Italy buongiorno is for the morning. After lunch, many Italians already say buonasera."),
        s("E se non sai cosa dire, c'è salve: va bene a ogni ora, con il tu e con il Lei.", "And if you don't know what to say, there's salve: it works at any time, with tu and with Lei."),
      ],
    ],
    textTasks: [
      { kind: "truefalse", statement: "In Italia si dice buonasera solo di sera.", translation: "In Italy you only say buonasera in the evening.", answer: false },
      { kind: "choice", prompt: "What can you say at any time of day?", options: ["Salve", "Buongiorno", "Buonanotte"], answer: 0 },
      { kind: "choice", prompt: "Why does Rita say buonasera at three?", options: ["After lunch many Italians already say buonasera", "She's confused", "She's going to bed"], answer: 0 },
    ],
    listening: {
      situation: "Rita leaves Emma a voice message.",
      lines: [
        line("Rita", "Buonasera, Emma, sono Rita, la vicina del primo piano.", "Good evening, Emma, it's Rita, the neighbour on the first floor."),
        line("Rita", "Domani alle cinque c'è un caffè da me. Vieni?", "Tomorrow at five there's coffee at my place. Are you coming?"),
        line("Rita", "C'è anche Giulia. A domani, cara!", "Giulia's coming too. See you tomorrow, dear!"),
      ],
      questions: [
        { prompt: "When is the coffee?", options: ["Tomorrow at five", "Today at five", "Tomorrow at three"], answer: 0 },
        { prompt: "Who else is coming?", options: ["Giulia", "Marco", "Karim"], answer: 0 },
      ],
    },
    write: {
      situation: "Answer Rita politely, with Lei.",
      points: [
        { prompt: "Greet her", frame: "Buonasera, signora … !" },
        { prompt: "Say yes", frame: "Sì, … ." },
        { prompt: "Thank her", frame: "Grazie … !" },
      ],
      model: "Buonasera, signora Rita! Sì, domani alle cinque vengo. Grazie mille, a domani!",
      modelTranslation: "Good evening, Signora Rita! Yes, I'm coming tomorrow at five. Thank you very much, see you tomorrow!",
    },
    words: {
      salve: { meaning: "hello (neutral, any time, tu or Lei)" },
      buonasera: { meaning: "good evening (from about lunchtime on)" },
      buongiorno: { meaning: "good morning, hello (until about lunchtime)" },
      sai: { meaning: "you know", base: "sapere" },
      ogni: { meaning: "every" },
      ora: { meaning: "hour; time" },
    },
  },

  "it-a1-piacere": {
    title: "Di dove sei, davvero?",
    titleTranslation: "Where are you really from?",
    text: [
      [
        s("Al bar Emma chiede a un signore: Lei è di Bologna? Lui risponde: No, signorina. Sono di Imola!", "At the bar Emma asks a man: Are you from Bologna? He answers: No, miss. I'm from Imola!"),
        s("Imola è a trenta chilometri da Bologna. Ma per lui è un'altra città, e un'altra storia.", "Imola is thirty kilometres from Bologna. But for him it's another town, and another story."),
        s("Questo in Italia si chiama campanilismo: l'amore per la propria città, il proprio campanile.", "In Italy this is called campanilismo: love for your own town, your own bell tower."),
        s("Molti italiani si presentano con la città prima del paese: sono napoletano, sono milanese, sono di Bari.", "Many Italians introduce themselves with their town before the country: I'm from Naples, I'm from Milan, I'm from Bari."),
      ],
    ],
    textTasks: [
      { kind: "choice", prompt: "What is campanilismo?", options: ["Strong love for your own town", "A kind of church music", "A sport"], answer: 0 },
      { kind: "truefalse", statement: "Il signore è di Bologna.", translation: "The man is from Bologna.", answer: false },
      { kind: "choice", prompt: "How do many Italians say where they're from?", options: ["With their town first", "With their country first", "With their region only"], answer: 0 },
    ],
    listening: {
      situation: "Karim leaves Emma a voice message.",
      lines: [
        line("Karim", "Ciao Emma, sono Karim!", "Hi Emma, it's Karim!"),
        line("Karim", "Stasera c'è una festa di studenti. Ci sono ragazzi di Torino, di Palermo e di Bologna.", "Tonight there's a student party. There are guys from Turin, Palermo and Bologna."),
        line("Karim", "Attenzione: non dire a un ragazzo di Torino che è di Milano!", "Careful: don't tell a guy from Turin that he's from Milan!"),
      ],
      questions: [
        { prompt: "What's happening tonight?", options: ["A student party", "A dinner", "A football match"], answer: 0 },
        { prompt: "What should Emma not do?", options: ["Say someone from Turin is from Milan", "Speak English", "Arrive late"], answer: 0 },
      ],
    },
    write: {
      situation: "Introduce yourself to someone at the party: say where you're from, the way Italians do.",
      points: [
        { prompt: "Say your name", frame: "Ciao, sono … ." },
        { prompt: "Say your town and country", frame: "Sono di … , in … ." },
        { prompt: "Ask where they're from", frame: "E tu, di dove … ?" },
      ],
      model: "Ciao, sono Tom. Sono di Leeds, in Inghilterra. E tu, di dove sei?",
      modelTranslation: "Hi, I'm Tom. I'm from Leeds, in England. And you, where are you from?",
    },
    words: {
      imola: { meaning: "Imola (a town near Bologna)" },
      chilometri: { meaning: "kilometres", base: "chilometro" },
      città: { meaning: "town, city" },
      storia: { meaning: "story; history" },
      campanilismo: { meaning: "strong loyalty to your own town (from campanile, bell tower)" },
      amore: { meaning: "love" },
      propria: { meaning: "own", base: "proprio" },
      proprio: { meaning: "own" },
      campanile: { meaning: "bell tower" },
      presentano: { meaning: "introduce (si presentano = introduce themselves)", base: "presentare" },
      paese: { meaning: "country; village" },
      milanese: { meaning: "from Milan" },
      bari: { meaning: "Bari (a city in the south)" },
      torino: { meaning: "Turin" },
      palermo: { meaning: "Palermo (a city in Sicily)" },
      attenzione: { meaning: "careful, attention" },
      dire: { meaning: "to say, to tell" },
      milano: { meaning: "Milan" },
    },
  },

  "it-a1-famiglia": {
    title: "Il nome del nonno",
    titleTranslation: "Grandpa's name",
    text: [
      [
        s("La cugina di Giulia ha un bambino. Si chiama Giovanni, come il nonno.", "Giulia's cousin has a baby boy. He's called Giovanni, like his grandfather."),
        s("In molte famiglie italiane, soprattutto al sud, c'è una vecchia tradizione: il primo figlio ha il nome del nonno paterno.", "In many Italian families, especially in the south, there's an old tradition: the first son gets his paternal grandfather's name."),
        s("La prima figlia ha il nome della nonna paterna. Il secondo figlio ha il nome del nonno materno, e così via.", "The first daughter gets her paternal grandmother's name. The second son gets the maternal grandfather's name, and so on."),
        s("Per questo in una famiglia ci sono spesso tre o quattro Giovanni! Al pranzo della domenica è un problema: chi chiami?", "That's why a family often has three or four Giovannis! At Sunday lunch it's a problem: who are you calling?"),
      ],
    ],
    textTasks: [
      { kind: "choice", prompt: "Who is the first son named after?", options: ["His father's father", "His mother's father", "His father"], answer: 0 },
      { kind: "truefalse", statement: "Questa tradizione c'è solo al nord.", translation: "This tradition is only found in the north.", answer: false },
      { kind: "choice", prompt: "Why is Sunday lunch a problem?", options: ["Several people have the same name", "The family is too big for the table", "Grandpa can't come"], answer: 0 },
    ],
    listening: {
      situation: "Giulia's grandma Pina calls her.",
      lines: [
        line("Nonna", "Giulia, hai visto le foto del bambino?", "Giulia, have you seen the photos of the baby?"),
        line("Nonna", "È bellissimo, e ha gli occhi del nonno.", "He's beautiful, and he has his grandfather's eyes."),
        line("Nonna", "Domenica facciamo una festa. Vieni con le tue amiche?", "On Sunday we're having a party. Are you coming with your friends?"),
      ],
      questions: [
        { prompt: "What does the baby have from his grandfather?", options: ["His eyes", "His hair", "His nose"], answer: 0 },
        { prompt: "What's happening on Sunday?", options: ["A party", "A christening", "A trip"], answer: 0 },
      ],
    },
    write: {
      situation: "Write a short message to congratulate Giulia's cousin.",
      points: [
        { prompt: "Congratulate her", frame: "Auguri per … !" },
        { prompt: "Say something about the name", frame: "Giovanni è … ." },
        { prompt: "Say you'll come on Sunday", frame: "Domenica … ." },
      ],
      model: "Auguri per il bambino! Giovanni è un nome molto bello. Domenica vengo con Giulia.",
      modelTranslation: "Congratulations on the baby! Giovanni is a very nice name. On Sunday I'm coming with Giulia.",
    },
    words: {
      cugina: { meaning: "cousin (a woman)" },
      bambino: { meaning: "baby; child" },
      giovanni: { meaning: "Giovanni (John)" },
      soprattutto: { meaning: "especially" },
      sud: { meaning: "south" },
      tradizione: { meaning: "tradition" },
      paterno: { meaning: "on the father's side" },
      paterna: { meaning: "on the father's side", base: "paterno" },
      materno: { meaning: "on the mother's side" },
      così: { meaning: "so (e così via = and so on)" },
      via: { meaning: "street; away (e così via = and so on)" },
      chiami: { meaning: "you call", base: "chiamare" },
      problema: { meaning: "problem" },
      visto: { meaning: "seen", base: "vedere" },
      bellissimo: { meaning: "very beautiful", base: "bello" },
      facciamo: { meaning: "we're having, we make", base: "fare" },
      tue: { meaning: "your", base: "tuo" },
      amiche: { meaning: "(female) friends", base: "amica" },
    },
  },
};
