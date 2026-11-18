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
  "it-a1-spesa": [
    t("pomodoro", "tomato (i pomodori)", "La pasta al pomodoro è buonissima.", "Pasta with tomato sauce is delicious."),
    t("pomodori", "tomatoes (il pomodoro)", "Compro un chilo di pomodori.", "I'm buying a kilo of tomatoes."),
    t("patate", "potatoes (la patata)", "Mi servono delle patate.", "I need some potatoes."),
    t("carne", "meat", "Giulia non mangia carne.", "Giulia doesn't eat meat."),
    t("pesce", "fish", "Il venerdì mangio pesce.", "On Fridays I eat fish."),
    t("aspettare", "to wait", "Dobbiamo aspettare dieci minuti.", "We have to wait ten minutes."),
    t("frigo", "fridge", "Il latte è in frigo.", "The milk is in the fridge."),
  ],
  "it-a1-tempo-libero": [
    t("vederci", "to see each other, to meet (vedere + ci)", "Possiamo vederci alle otto?", "Can we meet at eight?"),
    t("ballare", "to dance", "Ti piace ballare?", "Do you like dancing?"),
    t("leggere", "to read", "Mi piace leggere la sera.", "I like reading in the evening."),
    t("nuotare", "to swim", "D'estate nuoto spesso al mare.", "In summer I often swim in the sea."),
    t("televisione", "television (la tv)", "Non guardo mai la televisione.", "I never watch television."),
  ],
  "it-a1-piacere": [
    t("cercare", "to look for", "Cerco amici italiani per parlare.", "I'm looking for Italian friends to talk to."),
    t("spagnolo", "Spanish", "Parlo spagnolo e un po' di inglese.", "I speak Spanish and a little English."),
    t("portoghese", "Portuguese", "Ana è brasiliana e parla portoghese.", "Ana is Brazilian and speaks Portuguese."),
  ],
};
