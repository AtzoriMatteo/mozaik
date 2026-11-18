import type { Unit } from "@/core/content";
import { a1, gaps, heard, line, mc, order, pf, s, tf } from "./helpers";

/**
 * A1 unit 9: work and study. Jobs (fa l'architetto), da + time (vivo qui da
 * due anni), the passato prossimo with avere. Lead: Ana, an architect from
 * Recife, looking for her first job in Bologna. Culture: titles (dottore,
 * architetto), bringing pastries to work, the onomastico.
 */
export const lavoro: Unit = {
  id: "it-a1-lavoro",
  level: "A1",
  title: "Lavoro e studio",
  titleTranslation: "Work and study",
  look: { motif: "column", glaze: "cobalt" },
  canDo: [
    "Say what job you do and how long you've done it: lavoro qui da due anni",
    "Answer simple questions in a job interview",
    "Say what you did: ho studiato, ho lavorato, ho mandato",
    "Know a few Italian work customs: titles, pastries, the coffee break",
  ],
  story: {
    id: "ana-cerca-lavoro",
    title: "Ana cerca lavoro",
    titleTranslation: "Ana looks for work",
    intro:
      "Ana came from Recife, in Brazil, to study architecture in Bologna. Now she's finished, and she needs a job. One week: twenty CVs, one interview, a first day and a tray of pastries.",
  },
  texts: [
    {
      id: "ana-1-venti-curriculum",
      level: "A1",
      title: "Venti curriculum",
      titleTranslation: "Twenty CVs",
      grammar: ["passato-prossimo", "da-tempo", "professions"],
      paragraphs: [
        [
          s("Ana ha ventinove anni e viene da Recife, in Brasile.", "Ana is twenty-nine and comes from Recife, in Brazil."),
          s("Vive a Bologna da due anni. Ha studiato architettura all'università e a luglio ha finito il master.", "She's lived in Bologna for two years. She studied architecture at the university and in July she finished her master's."),
          s("Adesso cerca lavoro. Questo mese ha mandato venti curriculum a venti studi di architettura.", "Now she's looking for work. This month she's sent twenty CVs to twenty architecture firms."),
          s("Diciannove studi non hanno risposto.", "Nineteen firms haven't answered."),
        ],
        [
          s("Giulia guarda il curriculum di Ana. \"Ma non c'è la foto!\"", "Giulia looks at Ana's CV. \"But there's no photo!\""),
          s("\"La foto? In Brasile non si mette.\" \"In Italia sì, quasi sempre.\"", "\"The photo? In Brazil you don't put one.\" \"In Italy you do, almost always.\""),
          s("Poi Giulia legge: \"Dottoressa in Architettura.\" Ana ride: \"Dottoressa? Io non sono un medico!\"", "Then Giulia reads: \"Dottoressa in Architecture.\" Ana laughs: \"Dottoressa? I'm not a doctor!\""),
          s("\"In Italia chi ha una laurea è dottore o dottoressa. E un architetto si chiama anche architetto: buongiorno, architetto!\"", "\"In Italy anyone with a degree is dottore or dottoressa. And you can call an architect architetto, too: good morning, architetto!\""),
        ],
        [
          s("Il giorno dopo arriva una mail. È lo Studio Benassi, in via Santo Stefano.", "The next day an email arrives. It's Studio Benassi, on Via Santo Stefano."),
          s("\"Gentile dottoressa, abbiamo letto il suo curriculum. Può venire per un colloquio giovedì alle dieci?\"", "\"Dear Dr Ana, we've read your CV. Can you come for an interview on Thursday at ten?\""),
          s("Ana salta sulla sedia. Poi mette la foto nel curriculum. Per gli altri diciannove studi, non si sa mai.", "Ana jumps up from her chair. Then she puts a photo in her CV. For the other nineteen firms, you never know."),
        ],
      ],
      tasks: [
        mc("Why does Giulia say \"non c'è la foto\"?", ["In Italy CVs usually have a photo", "Ana forgot to print it", "The firm asked for one"], 0),
        tf("Ana vive a Bologna da cinque anni.", "Ana has lived in Bologna for five years.", false),
        mc("Why is Ana \"dottoressa\"?", ["In Italy anyone with a degree is called dottore/dottoressa", "She studied medicine", "She works in a hospital"], 0),
        mc("Why does Ana add the photo at the end?", ["To be ready for the other firms", "Studio Benassi asks for it", "Giulia is angry"], 0),
      ],
    },
    {
      id: "ana-2-il-colloquio",
      level: "A1",
      title: "Il colloquio",
      titleTranslation: "The interview",
      grammar: ["passato-prossimo", "da-tempo", "tu-lei"],
      paragraphs: [
        [
          s("Giovedì alle dieci meno cinque Ana è davanti allo Studio Benassi, con il vestito blu di Giulia.", "On Thursday at five to ten Ana is in front of Studio Benassi, in Giulia's blue dress."),
          s("L'architetto Benassi è un signore di sessant'anni, molto gentile.", "Architetto Benassi is a man of sixty, very kind."),
          s("\"Buongiorno, dottoressa. Da quanto tempo vive in Italia?\" \"Da due anni.\"", "\"Good morning. How long have you lived in Italy?\" \"For two years.\""),
          s("\"E prima? Dove ha lavorato?\" \"Ho lavorato tre anni in uno studio a Recife. Abbiamo progettato una scuola e una biblioteca.\"", "\"And before? Where did you work?\" \"I worked for three years in a firm in Recife. We designed a school and a library.\""),
        ],
        [
          s("\"Parla molto bene l'italiano!\" \"Grazie. Ho studiato tanto, e ho tre coinquilini italiani!\"", "\"You speak Italian very well!\" \"Thank you. I've studied a lot, and I have three Italian flatmates!\""),
          s("Benassi guarda i suoi progetti. \"Le piace lavorare in squadra?\" \"Sì, molto.\"", "Benassi looks at her projects. \"Do you like working in a team?\" \"Yes, very much.\""),
          s("\"Lavoriamo dalle nove alle sei, con la pausa pranzo dall'una alle due e mezza. Va bene?\" \"Benissimo.\"", "\"We work from nine to six, with a lunch break from one to half past two. Is that all right?\" \"Perfect.\""),
        ],
        [
          s("Alla fine Benassi si alza. \"Allora, ci vediamo lunedì alle nove, architetto.\"", "At the end Benassi stands up. \"So, see you on Monday at nine, architetto.\""),
          s("Ana non capisce subito. Poi capisce: ha il lavoro!", "Ana doesn't understand straight away. Then she understands: she's got the job!"),
          s("Fuori chiama sua madre a Recife. \"Mamãe, ho trovato lavoro!\" Parla in portoghese, naturalmente.", "Outside she calls her mother in Recife. \"Mamãe, I've found a job!\" She speaks Portuguese, of course."),
        ],
      ],
      tasks: [
        mc("What did Ana do in Recife?", ["She worked for three years in an architecture firm", "She studied Italian", "She taught at a school"], 0),
        tf("La pausa pranzo è di un'ora.", "The lunch break is one hour.", false),
        mc("How does Ana find out she has the job?", ["Benassi says \"see you on Monday\"", "She gets an email", "Giulia tells her"], 0),
        mc("Why does Benassi call her \"architetto\" at the end?", ["She's now one of his architects", "He forgets her name", "It's a joke"], 0),
      ],
    },
    {
      id: "ana-3-il-primo-giorno",
      level: "A1",
      title: "Il primo giorno",
      titleTranslation: "The first day",
      grammar: ["professions", "passato-prossimo", "time"],
      paragraphs: [
        [
          s("Lunedì Ana arriva allo studio alle nove meno dieci. Ci sono cinque persone: due architetti, un ingegnere, una geometra e la segretaria.", "On Monday Ana arrives at the firm at ten to nine. There are five people: two architects, an engineer, a surveyor and the secretary."),
          s("Tutti dicono: \"Buongiorno!\" Tutti danno la mano. Tutti chiedono: \"Caffè?\"", "Everyone says: \"Good morning!\" Everyone shakes her hand. Everyone asks: \"Coffee?\""),
          s("Alle dieci e mezza c'è la pausa caffè. Non in ufficio: al bar sotto lo studio, tutti insieme.", "At half past ten there's the coffee break. Not in the office: at the bar downstairs, all together."),
        ],
        [
          s("Al bar Stefano, l'ingegnere, offre il caffè a tutti. Poi apre una grande scatola di paste.", "At the bar Stefano, the engineer, buys everyone coffee. Then he opens a big box of pastries."),
          s("\"È il tuo compleanno?\" chiede Ana. \"No, è il mio onomastico. Oggi è Santo Stefano!\"", "\"Is it your birthday?\" Ana asks. \"No, it's my name day. Today is Saint Stephen's day!\""),
          s("Ana non conosce l'onomastico. In molte famiglie italiane il giorno del santo del tuo nome è una piccola festa.", "Ana doesn't know about name days. In many Italian families, the day of the saint with your name is a little celebration."),
          s("E in ufficio, per il compleanno o l'onomastico, non ricevi le paste: le porti tu!", "And at work, for your birthday or name day, you don't get pastries: you bring them!"),
        ],
        [
          s("All'una tutti vanno a pranzo. Ana mangia un panino alla scrivania.", "At one everyone goes to lunch. Ana eats a sandwich at her desk."),
          s("La segretaria la guarda, preoccupata. \"Architetto, la pausa pranzo è sacra! Venga con noi in trattoria.\"", "The secretary looks at her, worried. \"Architetto, the lunch break is sacred! Come with us to the trattoria.\""),
        ],
      ],
      tasks: [
        mc("Why does Stefano bring pastries?", ["It's his name day", "It's his birthday", "Ana's first day"], 0),
        tf("In un ufficio italiano, per il compleanno, i colleghi portano le paste a te.", "In an Italian office, on your birthday, your colleagues bring you pastries.", false),
        mc("Where is the coffee break?", ["At the bar downstairs, all together", "In the office kitchen", "At each person's desk"], 0),
        mc("Why is the secretary worried?", ["Ana is eating at her desk instead of taking a real lunch break", "Ana is late", "Ana doesn't like the food"], 0),
      ],
    },
    {
      id: "ana-4-le-paste-di-ana",
      level: "A1",
      title: "Le paste di Ana",
      titleTranslation: "Ana's pastries",
      grammar: ["passato-prossimo", "da-tempo", "professions"],
      paragraphs: [
        [
          s("Venerdì è la fine della prima settimana. Ana entra in studio con una grande scatola.", "Friday is the end of the first week. Ana comes into the office with a big box."),
          s("\"Cos'è?\" \"Le paste! Questa settimana ho imparato una cosa: le paste le porta chi festeggia. E io festeggio il nuovo lavoro!\"", "\"What's that?\" \"Pastries! This week I learned something: the person celebrating brings the pastries. And I'm celebrating my new job!\""),
          s("Ma nella scatola non ci sono solo paste italiane. Ci sono anche i brigadeiros, i dolci al cioccolato del Brasile.", "But in the box there aren't only Italian pastries. There are brigadeiros too, the chocolate sweets from Brazil."),
          s("Benassi ne mangia tre. \"Architetto, questi sono pericolosi!\"", "Benassi eats three. \"Architetto, these are dangerous!\""),
        ],
        [
          s("La sera Ana scrive a sua madre.", "In the evening Ana writes to her mother."),
          s("\"Cara mamma, questa settimana ho lavorato tanto. Ho disegnato una casa per una famiglia di Modena.", "\"Dear Mum, this week I've worked a lot. I've designed a house for a family from Modena."),
          s("Ho conosciuto i miei colleghi: sono simpatici. Ho mangiato in trattoria tutti i giorni, perché qui la pausa pranzo è sacra.", "I've met my colleagues: they're nice. I've eaten at a trattoria every day, because here the lunch break is sacred."),
          s("E ho portato i brigadeiros in ufficio. Un grande successo! Un bacio, Ana\"", "And I took brigadeiros to the office. A big hit! A kiss, Ana\""),
        ],
      ],
      tasks: [
        mc("Why does Ana bring pastries?", ["She's celebrating her new job, and in Italy the person celebrating brings them", "It's her birthday", "Benassi asks her to"], 0),
        mc("What are brigadeiros?", ["Chocolate sweets from Brazil", "Italian pastries", "A kind of coffee"], 0),
        tf("Ana ha mangiato alla scrivania tutta la settimana.", "Ana ate at her desk all week.", false),
        order("Put Ana's week in order.", "Twenty CVs", "The interview", "The first day", "The pastries"),
      ],
    },
  ],
  sequence: [
    "ana-1-venti-curriculum", "che-lavoro-fai", "professions",
    "ana-2-il-colloquio", "da-tempo",
    "ana-3-il-primo-giorno", "la-telefonata-dello-studio", "passato-prossimo",
    "write", "ana-4-le-paste-di-ana", "words", "check",
  ],
  listening: [
    {
      id: "che-lavoro-fai",
      level: "A1",
      title: "Che lavoro fai?",
      titleTranslation: "What do you do?",
      kind: "dialogue",
      situation: "At Davide's party, Ana meets some people.",
      grammar: ["professions", "da-tempo", "questions"],
      lines: [
        line("Ana", "Piacere, Ana. E tu, che lavoro fai?", "Nice to meet you, I'm Ana. And you, what do you do?"),
        line("Stefano", "Faccio l'ingegnere. Lavoro in una fabbrica di moto, qui vicino.", "I'm an engineer. I work in a motorbike factory near here."),
        line("Ana", "Da quanto tempo?", "For how long?"),
        line("Stefano", "Da sei anni. E tu?", "For six years. And you?"),
        line("Ana", "Sono architetto, ma cerco ancora lavoro.", "I'm an architect, but I'm still looking for work."),
        line("Stefano", "Architetto? Il mio capo cerca un'architetta! Ti do il suo numero.", "An architect? My boss is looking for an architect! I'll give you his number."),
      ],
      gist: { prompt: "What are they talking about?", options: ["Their jobs", "Their families", "The music"], answer: 0 },
      details: [
        { prompt: "How long has Stefano been an engineer?", options: ["Six years", "Two years", "Sixteen years"], answer: 0 },
        { prompt: "Why does Stefano give Ana a number?", options: ["His boss is looking for an architect", "He wants to see her again", "He needs a house"], answer: 0 },
      ],
      tasks: [
        tf("Stefano lavora in una fabbrica di moto.", "Stefano works in a motorbike factory.", true),
        heard(1, ["ingegnere", "infermiere", "insegnante"], 0),
        gaps(3, "sei", "anni"),
      ],
      dictation: [0, 4],
      words: {
        fabbrica: { meaning: "factory", base: "fabbrica" },
        moto: { meaning: "motorbike" },
        capo: { meaning: "boss" },
        architetta: { meaning: "architect (a woman; also architetto)" },
        do: { meaning: "I give", base: "dare" },
      },
    },
    {
      id: "la-telefonata-dello-studio",
      level: "A1",
      title: "La telefonata dello studio",
      titleTranslation: "The call from the firm",
      kind: "dialogue",
      situation: "Wednesday. The secretary of Studio Benassi calls Ana.",
      grammar: ["tu-lei", "time", "passato-prossimo"],
      lines: [
        line("Segretaria", "Pronto, parlo con la dottoressa Ana Lima?", "Hello, am I speaking to Dr Ana Lima?"),
        line("Ana", "Sì, sono io.", "Yes, speaking."),
        line("Segretaria", "Sono la segretaria dello Studio Benassi. Ha ricevuto la nostra mail?", "I'm the secretary of Studio Benassi. Did you receive our email?"),
        line("Ana", "Sì, grazie! Giovedì alle dieci va benissimo.", "Yes, thank you! Thursday at ten is perfect."),
        line("Segretaria", "Perfetto. Porti anche il portfolio, per favore.", "Perfect. Please bring your portfolio too."),
        line("Ana", "Certo. Dov'è lo studio, esattamente?", "Of course. Where exactly is the firm?"),
        line("Segretaria", "È in via Santo Stefano quaranta, al secondo piano. C'è l'ascensore.", "It's at Via Santo Stefano 40, on the second floor. There's a lift."),
      ],
      gist: { prompt: "Why does the secretary call?", options: ["To confirm the interview", "To say no to Ana", "To ask for her CV"], answer: 0 },
      details: [
        { prompt: "What does Ana have to bring?", options: ["Her portfolio", "A photo", "Her passport"], answer: 0 },
        { prompt: "Which floor is the firm on?", options: ["The second floor", "The ground floor", "The fourth floor"], answer: 0 },
      ],
      tasks: [
        tf("Ana non ha ricevuto la mail.", "Ana didn't receive the email.", false),
        heard(4, ["portfolio", "portone", "porta"], 0),
        gaps(3, "dieci", "benissimo"),
      ],
      dictation: [1, 3],
      words: {
        lima: { meaning: "Lima (a Brazilian surname)" },
        ricevuto: { meaning: "received", base: "ricevere" },
        portfolio: { meaning: "portfolio" },
        esattamente: { meaning: "exactly" },
        quaranta: { meaning: "forty" },
      },
    },
  ],
  writing: [
    a1({
      id: "w-il-mio-lavoro",
      title: "Il mio lavoro",
      titleTranslation: "My job",
      form: "description",
      situation: "A new colleague asks about your work or studies. Write a short answer.",
      points: [
        pf("Say what you do", "Faccio il / la … . / Sono studente.", "faccio", "sono", "studio"),
        pf("Say where", "Lavoro / Studio in … .", "lavoro", "studio"),
        pf("Say how long", "… da … anni.", "da", "anni"),
        pf("Say your hours", "Lavoro dalle … alle … .", "dalle", "alle"),
        pf("Say something you did before", "Prima ho lavorato / ho studiato … .", "ho", "lavorato", "studiato"),
        pf("Say what you like about it", "Mi piace … .", "piace"),
      ],
      model:
        "Faccio l'infermiera. Lavoro in un ospedale in centro da quattro anni. Lavoro dalle sette alle tre, ma a volte anche di notte. Prima ho studiato a Lisbona e ho lavorato un anno in Portogallo. Mi piace il mio lavoro, perché aiuto le persone. Non mi piace lavorare di notte!",
    }),
    a1({
      id: "w-una-mail-per-un-lavoro",
      title: "Una mail per un lavoro",
      titleTranslation: "An email for a job",
      form: "email",
      situation: "A café in your street is looking for someone. Write a short email to apply.",
      points: [
        pf("Greet them politely", "Gentile signora / Gentile signore,", "gentile"),
        pf("Say why you're writing", "Scrivo per il lavoro di … .", "scrivo", "lavoro"),
        pf("Say who you are and how long you've lived here", "Mi chiamo … e vivo a … da … .", "chiamo", "vivo", "da"),
        pf("Say what you did before", "Ho lavorato … .", "ho", "lavorato"),
        pf("Say when you can work", "Posso lavorare … .", "posso", "lavorare"),
        pf("Close politely", "Cordiali saluti, …", "saluti", "cordiali"),
      ],
      model:
        "Gentile signora, scrivo per il lavoro di cameriera nel suo bar. Mi chiamo Sara, ho ventiquattro anni e vivo a Bologna da un anno. Ho lavorato due estati in un bar a Valencia: so fare il caffè e parlo spagnolo, inglese e un po' di italiano. Posso lavorare il sabato e la domenica. Cordiali saluti, Sara Gómez",
    }),
  ],
  checkpoint: {
    title: "Il lunedì dopo",
    titleTranslation: "The Monday after",
    text: [
      [
        s("Lunedì mattina sulla scrivania di Ana c'è un biglietto di Benassi.", "On Monday morning there's a note from Benassi on Ana's desk."),
        s("\"Architetto, grazie per i dolci brasiliani: li abbiamo mangiati tutti! Oggi alle undici abbiamo una riunione con la famiglia di Modena. Ho letto il suo progetto: mi piace molto. Può presentarlo lei? Benassi\"", "\"Architetto, thank you for the Brazilian sweets: we ate them all! Today at eleven we have a meeting with the family from Modena. I've read your project: I like it a lot. Can you present it? Benassi\""),
      ],
    ],
    textTasks: [
      tf("La riunione è alle dieci.", "The meeting is at ten.", false),
      mc("What does Benassi ask Ana?", ["To present her project to the family", "To bring more sweets", "To call the family"], 0),
      mc("What does Benassi think of her project?", ["He likes it a lot", "He doesn't like it", "He hasn't read it"], 0),
    ],
    listening: {
      situation: "Giulia leaves Ana a voice message.",
      lines: [
        line("Giulia", "Ciao Ana! Allora, com'è andata la prima settimana?", "Hi Ana! So, how did the first week go?"),
        line("Giulia", "Stasera festeggiamo: Marco ha preparato l'aperitivo per te, alle sette.", "Tonight we're celebrating: Marco has got an aperitivo ready for you, at seven."),
        line("Giulia", "E ricordati: questa volta paga Marco, non tu!", "And remember: this time Marco's paying, not you!"),
      ],
      questions: [
        { prompt: "What's happening tonight?", options: ["An aperitivo for Ana at seven", "A dinner at Ana's", "A party at the office"], answer: 0 },
        { prompt: "Who is paying?", options: ["Marco", "Ana", "Giulia"], answer: 0 },
      ],
    },
    write: {
      situation: "Answer Giulia: say how the week went and say you're coming.",
      points: [
        { prompt: "Say how the week went", frame: "La settimana … !" },
        { prompt: "Say one thing you did", frame: "Ho … ." },
        { prompt: "Say you're coming", frame: "Stasera … !" },
      ],
      model: "La settimana è andata benissimo! Ho disegnato una casa e ho portato i brigadeiros in ufficio. Stasera vengo, ma alle sette e mezza!",
      modelTranslation: "The week went really well! I designed a house and took brigadeiros to the office. I'm coming tonight, but at half past seven!",
    },
    words: {
      riunione: { meaning: "meeting" },
      presentarlo: { meaning: "present it (presentare + lo)", base: "presentare" },
      presentare: { meaning: "to present; to introduce" },
      progetto: { meaning: "project; design" },
      mangiati: { meaning: "eaten", base: "mangiare" },
      letto: { meaning: "read (ho letto = I've read); bed" },
      andata: { meaning: "gone (com'è andata? = how did it go?)", base: "andare" },
      festeggiamo: { meaning: "we're celebrating", base: "festeggiare" },
      preparato: { meaning: "prepared", base: "preparare" },
      ricordati: { meaning: "remember! (to tu)", base: "ricordarsi" },
      volta: { meaning: "time (questa volta = this time)" },
      brigadeiros: { meaning: "brigadeiros (Brazilian chocolate sweets)" },
      brasiliani: { meaning: "Brazilian", base: "brasiliano" },
    },
  },
};
