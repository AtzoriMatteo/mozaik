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
  "it-a1-piacere": [
    t("cercare", "to look for", "Cerco amici italiani per parlare.", "I'm looking for Italian friends to talk to."),
    t("spagnolo", "Spanish", "Parlo spagnolo e un po' di inglese.", "I speak Spanish and a little English."),
    t("portoghese", "Portuguese", "Ana è brasiliana e parla portoghese.", "Ana is Brazilian and speaks Portuguese."),
  ],
};
