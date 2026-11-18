import type { Checkpoint } from "@/core/content";
import { line, s } from "./units/helpers";

/** Checkpoints for the first Italian units. Customs appear as hints in the scene, not explained. */
export const checkpointsIt: Record<string, Checkpoint> = {
  "it-a1-ciao": {
    title: "Buonasera alle tre?",
    titleTranslation: "Good evening at three?",
    text: [
      [
        s("Sono le tre del pomeriggio. Emma incontra la signora Rita sulle scale.", "It's three in the afternoon. Emma meets Signora Rita on the stairs."),
        s("Emma dice: Buongiorno, signora! Rita risponde: Buonasera, cara!", "Emma says: Good morning, madam! Rita answers: Good evening, dear!"),
        s("Emma ride. Buonasera alle tre? Va bene: buonasera, signora!", "Emma laughs. Good evening at three? All right: good evening, madam!"),
      ],
    ],
    textTasks: [
      { kind: "truefalse", statement: "Rita dice buongiorno a Emma.", translation: "Rita says good morning to Emma.", answer: false },
      { kind: "choice", prompt: "What time is it?", options: ["Three in the afternoon", "Three in the morning", "Nine in the evening"], answer: 0 },
      { kind: "choice", prompt: "What does Emma say in the end?", options: ["Buonasera", "Buongiorno", "Buonanotte"], answer: 0 },
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
      ride: { meaning: "laughs", base: "ridere" },
      bene: { meaning: "well (va bene = all right)" },
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
        s("Imola è a trenta chilometri da Bologna. Ma per lui è un'altra città!", "Imola is thirty kilometres from Bologna. But for him it's another town!"),
        s("Emma ride e dice: Scusi! Allora, Lei è di Imola.", "Emma laughs and says: Sorry! So, you're from Imola."),
      ],
    ],
    textTasks: [
      { kind: "choice", prompt: "How far is Imola from Bologna?", options: ["Thirty kilometres", "Three kilometres", "Three hundred kilometres"], answer: 0 },
      { kind: "truefalse", statement: "Il signore è di Bologna.", translation: "The man is from Bologna.", answer: false },
      { kind: "choice", prompt: "What does Emma do?", options: ["Laughs and apologises", "Leaves the bar", "Gets angry"], answer: 0 },
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
      scusi: { meaning: "sorry, excuse me (with Lei)" },
      allora: { meaning: "so, well then" },
      ride: { meaning: "laughs", base: "ridere" },
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
        s("Al pranzo della domenica ci sono tre Giovanni: il nonno, lo zio e il bambino.", "At Sunday lunch there are three Giovannis: grandpa, the uncle and the baby."),
        s("La nonna chiama: Giovanni, a tavola! E tutti e tre rispondono.", "Grandma calls: Giovanni, lunch is ready! And all three answer."),
      ],
    ],
    textTasks: [
      { kind: "choice", prompt: "Who is the baby named after?", options: ["His grandfather", "His father", "His uncle"], answer: 0 },
      { kind: "truefalse", statement: "Al pranzo della domenica c'è solo un Giovanni.", translation: "At Sunday lunch there's only one Giovanni.", answer: false },
      { kind: "choice", prompt: "What happens when grandma calls Giovanni?", options: ["All three answer", "Nobody answers", "The baby cries"], answer: 0 },
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
      zio: { meaning: "uncle" },
      tavola: { meaning: "table (a tavola! = food's ready!)" },
      tutti: { meaning: "all, everyone", base: "tutto" },
      tre: { meaning: "three" },
      rispondono: { meaning: "answer", base: "rispondere" },
      nonna: { meaning: "grandma" },
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
