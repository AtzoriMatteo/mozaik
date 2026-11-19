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
telefono tempo tesoro tipo tè uomo vino zio natale mammone insegnante pomeriggio ufficio taxi kiwi yogurt
lunedì estero mezzo pane burro viaggio favore tortellino euro
abbraccio accento aereo albero allenamento appello appuntamento architetto ascensore avversario baccalà bagno balcone
basket calciatore calendario camerino camice campanello canestro capitone capo capodanno carbone cartello cece centimetro
chilo chilometro cinema cioccolato cocco cognato colloquio colpo compleanno concerto corridoio cortile cotechino curriculum
diario divano dottore etto film foglio fondo formaggio frisbee gatto gelato giovanotto ingresso inverno jazz laboratorio
lago legno libro litro liutaio manifesto mare master mercatino mercato messaggio mezzogiorno miele mondo muro museo
occhio olio ombrello onomastico orario orecchio pacchetto pacco paio pandoro panettone parco pasto pastore pepe pezzo
picnic portfolio portico portone postino presepe prodotto profumo progetto programma pudding pupazzo regalo rimedio
riscaldamento ritardo ritorno sacco sale sarto scaffale semaforo significato silenzio simbolo sindaco soggiorno sole
sport stomaco studio successo supermercato tacchino treno turno uovo vassoio venditore vestito viaggiatore video violino
voto weekend zenzero zucchero ragù vaticano vesuvio
appartamento palazzo frigo ospedale cameriere avvocato aeroporto cucchiaio pomodoro braccio ginocchio`;

const F = `acqua amica arte attenzione avventura barba borsa bottiglia calma camera carne carta casa cassa città classe
colazione commedia crema cucina cugina dieta ditta domenica donna età famiglia fame fine foto frutta giornata grafica
grappa guancia iscrizione infermiera lasagna lettera lingua macchina madre mamma mano marmellata matematica mattina
medicina montagna moto nazionalità nonna oliva palla pala pancia parola pasta patata pausa persona piazza politica
ragazza ragione regione scuola sera sorella spalla stazione storia strada studentessa tabaccheria tavola televisione
terra tessera università verdura verità via voce volta zona coinquilina vicina zia figlia schiuma metà doppia
maiuscola spremuta arancia fila signora ingegneria
anguilla architetta architettura aria attesa aula biancheria biblioteca bici bicicletta calza camicia candela cantina
caramella carota carrozzina cartolina cassetta cena chiave chiesa cipolla coperta copertina croce differenza discussione
dottoressa emergenza erba fabbrica farmacia febbre felicità festa finestra fortuna fragola frittata gente giacca gola
idea influenza laurea lavagna lenticchia lezione libreria lista luce maglia mail mela menta messa mezzanotte moka multa
musica notizia notte offerta osteria pagina palestra pallina panchina partenza partita paura penna pentola pianta pioggia
pizza posta radio ricetta riunione sala sartoria scala scatola sciarpa scopa scrivania sedia segretaria settimana
sfogliatella signorina smorfia spezia squadra stagione stanza statua statuina tazza testa tombola torta tovaglia
tradizione trattoria uva valigia valle vigilia visita vongola zucchina befana epifania pasqua
cameriera professoressa cannella estate primavera busta vita sveglia doccia`;

/** Nouns the course uses in the plural only. */
const PLURAL: Record<string, string> = {
  tagliatelle: "le", occhiali: "gli", jeans: "i", patatine: "le", lasagne: "le", capelli: "i",
  pantaloni: "i", soldi: "i", spaghetti: "gli", canditi: "i", struffoli: "gli",
};

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
