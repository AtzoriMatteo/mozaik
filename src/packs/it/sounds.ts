import type { Sound } from "@/core/pronunciation";

/**
 * The Italian sounds learners find hardest, in the order feedback checks them
 * (more specific spellings first). Italian is written as it's spoken, so once
 * these click, any word can be read aloud. Pairs are two real words.
 */
export const sounds: readonly Sound[] = [
  {
    id: "gli",
    title: "gli",
    spellings: ["gli"],
    how: "One sound, not g + l: the middle of your tongue presses flat on the roof of your mouth, like 'lli' in million.",
    examples: ["famiglia", "figlio", "gli", "biglietto", "moglie"],
    pairs: [["figli", "fili"]],
  },
  {
    id: "gn",
    title: "gn",
    spellings: ["gn"],
    how: "Like 'ny' in canyon, or Spanish ñ: the middle of the tongue touches the palate. signora = 'si-NYO-ra'.",
    examples: ["signora", "bagno", "gnocchi", "insegnante", "ogni"],
    pairs: [["sogno", "sono"], ["campagna", "campana"]],
  },
  {
    id: "sc",
    title: "sc",
    spellings: ["sc[ei]", "sch"],
    how: "sc before e or i is English 'sh' (pesce, uscire). Before a, o, u, or written sch, it's 'sk' (scuola, schiuma).",
    examples: ["pesce", "uscire", "conosci", "scuola", "schiuma"],
    pairs: [["pesce", "pesche"]],
  },
  {
    id: "c-ci",
    title: "c and ch",
    spellings: ["c[ei]", "ch"],
    how: "c before e or i is English 'ch' (ciao, cena). Before a, o, u, or written ch, it's 'k' (casa, che, chi).",
    examples: ["ciao", "cena", "che", "chi", "cappuccino", "Marco"],
    pairs: [["ceco", "cieco"]],
  },
  {
    id: "g-gi",
    title: "g and gh",
    spellings: ["g[ei]", "gh"],
    how: "g before e or i is English 'j' (gelato, giorno). Before a, o, u, or written gh, it's a hard 'g' (gatto, spaghetti).",
    examples: ["giorno", "gelato", "Giulia", "spaghetti", "colleghi"],
    pairs: [],
  },
  {
    id: "doubles",
    title: "double consonants",
    spellings: ["(bb|cc|dd|ff|gg|ll|mm|nn|pp|rr|ss|tt|vv|zz)"],
    how: "Hold a double consonant a moment longer, with a tiny pause before it: pal-la, non-no, set-te. It changes the word.",
    examples: ["palla", "nonno", "sette", "cappuccino", "mamma"],
    pairs: [["pala", "palla"], ["nono", "nonno"], ["sete", "sette"], ["caro", "carro"], ["capello", "cappello"]],
  },
  {
    id: "stress",
    title: "stress and accents",
    spellings: ["[àèéìòù]"],
    how: "Most words stress the second-last syllable: ra-GAZ-zo. A written accent moves it to the end: cit-TÀ, caf-FÈ, per-CHÉ.",
    examples: ["città", "caffè", "perché", "università", "papà"],
    pairs: [["papa", "papà"]],
  },
  {
    id: "r",
    title: "r",
    spellings: ["r"],
    how: "A quick tap of the tongue tip just behind the top teeth, like the 'tt' in American 'butter'. rr is a short roll.",
    examples: ["Roma", "tre", "ragazzo", "birra", "caro"],
    pairs: [["caro", "calo"]],
  },
];
