import type { TaughtWord } from "@/core/coherence";

/** Words each Italian unit teaches directly (see the Dutch teach list). */
const t = (word: string, meaning: string, text: string, translation: string): TaughtWord => ({ word, meaning, text, translation });

export const teachIt: Record<string, TaughtWord[]> = {
  "it-a1-ciao": [
    t("lavoro", "I work (lavorare = to work)", "Lavoro in un bar.", "I work in a bar."),
    t("presto", "soon; early (a presto = see you soon)", "Ciao, a presto!", "Bye, see you soon!"),
    t("dove", "where (di dove sei? = where are you from?)", "Dove abiti? Di dove sei?", "Where do you live? Where are you from?"),
    t("gentile", "kind; dear (to start a polite note)", "Gentile signora, buongiorno!", "Dear madam, good morning!"),
  ],
  "it-a1-al-bar": [
    t("spremuta", "freshly squeezed juice (spremuta d'arancia = fresh orange juice)", "Una spremuta d'arancia, per favore.", "A fresh orange juice, please."),
    t("arancia", "orange (the fruit)", "Vorrei una spremuta d'arancia.", "I'd like a fresh orange juice."),
    t("pane", "bread", "A colazione mangio pane con burro e marmellata.", "For breakfast I eat bread with butter and jam."),
    t("burro", "butter", "Pane, burro e marmellata: la mia colazione!", "Bread, butter and jam: my breakfast!"),
  ],
  "it-a1-giornata": [
    t("sveglia", "alarm clock (anche: si sveglia = wakes up)", "La sveglia suona alle sei.", "The alarm goes off at six."),
    t("doccia", "shower (fare la doccia = to have a shower)", "La mattina faccio la doccia.", "In the morning I have a shower."),
    t("pranzo", "lunch (a pranzo = at lunch)", "A pranzo mangio un panino.", "At lunch I eat a sandwich."),
    t("cena", "dinner (a cena = at dinner)", "A cena mangiamo alle otto.", "We have dinner at eight."),
    t("comincio", "I start (cominciare = to start)", "Comincio a lavorare alle nove.", "I start work at nine."),
    t("finisco", "I finish (finire = to finish)", "Finisco alle cinque.", "I finish at five."),
    t("presto", "early; soon", "Mi alzo presto.", "I get up early."),
    t("tardi", "late", "La domenica mi alzo tardi.", "On Sundays I get up late."),
    t("ufficio", "office", "Lavoro in un ufficio in centro.", "I work in an office in the centre."),
  ],
  "it-a1-quartiere": [
    t("appartamento", "flat, apartment", "Abito in un appartamento in centro.", "I live in a flat in the centre."),
    t("ascensore", "lift, elevator", "Nel palazzo non c'è l'ascensore.", "There's no lift in the building."),
    t("palazzo", "building, block of flats; palace", "Il mio palazzo ha quattro piani.", "My building has four floors."),
    t("piano", "floor, storey (al primo piano = on the first floor)", "Abito al terzo piano.", "I live on the third floor."),
    t("camera", "room; bedroom (camera da letto)", "La camera da letto è piccola.", "The bedroom is small."),
    t("volentieri", "gladly, I'd love to", "Vieni al cinema? Volentieri!", "Are you coming to the cinema? I'd love to!"),
  ],
  "it-a1-piacere": [
    t("cercare", "to look for", "Cerco amici italiani per parlare.", "I'm looking for Italian friends to talk to."),
    t("spagnolo", "Spanish", "Parlo spagnolo e un po' di inglese.", "I speak Spanish and a little English."),
    t("portoghese", "Portuguese", "Ana è brasiliana e parla portoghese.", "Ana is Brazilian and speaks Portuguese."),
  ],
};
