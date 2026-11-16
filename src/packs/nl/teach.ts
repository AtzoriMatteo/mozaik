import type { TaughtWord } from "@/core/coherence";

/**
 * Words each unit teaches directly, in its Words section, because the unit's
 * writing or speaking needs them and its texts don't use them. Every one
 * comes with an example sentence, so it's taught, not just listed.
 */
const t = (word: string, meaning: string, text: string, translation: string): TaughtWord => ({ word, meaning, text, translation });

export const teachNl: Record<string, TaughtWord[]> = {
  "a1-basis": [
    t("maandag", "Monday", "Op maandag heb ik les.", "On Monday I have class."),
    t("dinsdag", "Tuesday", "Dinsdag is goed.", "Tuesday is fine."),
    t("woensdag", "Wednesday", "Woensdag is niet goed.", "Wednesday isn't good."),
    t("donderdag", "Thursday", "Tot donderdag!", "See you on Thursday!"),
    t("vrijdag", "Friday", "Vandaag is het vrijdag.", "Today is Friday."),
    t("zaterdag", "Saturday", "Zaterdag en zondag zijn het weekend.", "Saturday and Sunday are the weekend."),
    t("zondag", "Sunday", "Op zondag ben ik jarig.", "My birthday is on Sunday."),
    t("lievelingsseizoen", "favourite season", "Mijn lievelingsseizoen is de zomer.", "My favourite season is summer."),
    t("lievelingsmaand", "favourite month", "Mijn lievelingsmaand is mei.", "My favourite month is May."),
    t("lievelingskleur", "favourite colour", "Mijn lievelingskleur is blauw.", "My favourite colour is blue."),
    t("groen", "green", "Mijn lievelingskleur is groen.", "My favourite colour is green."),
    t("vinden", "to find; to think (an opinion)", "Ik vind de lente mooi.", "I think spring is beautiful."),
    t("mooi", "beautiful, nice", "Ik vind november niet mooi.", "I don't like November."),
    t("groeten", "greetings; regards (to end a note)", "Tot ziens! Groeten, Luca", "Goodbye! Regards, Luca"),
    t("buurman", "(male) neighbour", "Ik ben uw nieuwe buurman.", "I'm your new neighbour."),
    t("buurvrouw", "(female) neighbour", "Ik ben uw nieuwe buurvrouw.", "I'm your new neighbour."),
  ],
  "a1-kennismaken": [
    t("huisgenoot", "housemate", "Noor en Bram zijn mijn huisgenoten.", "Noor and Bram are my housemates."),
  ],
};
