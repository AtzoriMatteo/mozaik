/**
 * Gender for the nouns in the course, so flashcards can show "il libro",
 * "lo zio", "l'amica", "la casa". Italian chooses the article by gender and
 * by the sound the noun starts with.
 */

const M = `abbonamento affitto alfabeto amico angolo anno aperitivo autobus bacio bacione bambino banco bar barista
bicchiere biglietto caffè calcio cane capello cappuccino carro centro cliente cognome coinquilino collega computer
consiglio contorno cornetto corso cugino cuore cuscus dialetto dito dolce espresso esempio figlio fiore fratello
gemello genitore gesto giardino giorno ingegnere infermiere impiegato latte lavoro liceo limone medico mese minuto
modo momento negozio nome nonno nord numero ospite padre paese panino papà pensionato pesce piatto piede posto pranzo
professore quartiere ragazzo rito sabato saluto scontrino secondo signore spritz stipendio studente sud tavolo
telefono tempo tesoro tipo tè uomo vino zio natale primo mammone insegnante pomeriggio ufficio taxi kiwi yogurt
lunedì estero mezzo`;

const F = `acqua amica arte attenzione avventura barba borsa bottiglia calma camera carne carta casa cassa città classe
colazione commedia crema cucina cugina dieta ditta domenica donna età famiglia fame fine foto frutta giornata grafica
grappa guancia iscrizione infermiera lasagna lettera lingua macchina madre mamma mano marmellata matematica mattina
medicina montagna moto nazionalità nonna oliva palla pala pancia parola pasta patata pausa persona piazza politica
ragazza ragione regione scuola sera sorella spalla stazione storia strada studentessa tabaccheria tavola televisione
terra tessera università verdura verità via voce volta zona coinquilina vicina zia figlia schiuma metà doppia
maiuscola`;

/** Nouns the course uses in the plural only. */
const PLURAL: Record<string, string> = { tagliatelle: "le", occhiali: "gli", jeans: "i", patatine: "le", lasagne: "le", capelli: "i" };

const MASC = new Set(M.split(/\s+/));
const FEM = new Set(F.split(/\s+/));

/** lo before s + consonant, z, gn, ps, x, y; l' before a vowel or h. */
export function articleFor(lemma: string): string | null {
  const w = lemma.toLowerCase();
  if (PLURAL[w]) return PLURAL[w];
  const vowel = /^[aeiouhàèéìòù]/.test(w);
  if (MASC.has(w)) return vowel ? "l'" : /^(s[^aeiou]|z|gn|ps|pn|x|y)/.test(w) ? "lo" : "il";
  if (FEM.has(w)) return vowel ? "l'" : "la";
  return null;
}

/** The indefinite article: un, uno, una, un'. */
export function indefiniteFor(lemma: string): string | null {
  const w = lemma.toLowerCase();
  const vowel = /^[aeiouhàèéìòù]/.test(w);
  if (MASC.has(w)) return /^(s[^aeiou]|z|gn|ps|pn|x|y)/.test(w) ? "uno" : "un";
  if (FEM.has(w)) return vowel ? "un'" : "una";
  return null;
}
