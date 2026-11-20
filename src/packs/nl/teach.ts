import type { TaughtWord } from "@/core/coherence";

/**
 * Words each unit teaches directly, in its Words section, because the unit's
 * writing or speaking needs them and its texts don't use them. Every one
 * comes with an example sentence, so it's taught, not just listed.
 */
const t = (word: string, meaning: string, text: string, translation: string): TaughtWord => ({ word, meaning, text, translation });
/** A set phrase or a form taught ahead of its grammar: listed under Expressions, not a flashcard. */
const ph = (word: string, meaning: string, text: string, translation: string): TaughtWord => ({ word, meaning, text, translation, phrase: true });

export const teachNl: Record<string, TaughtWord[]> = {
  "a1-basis": [
    t("maandag", "Monday", "Op maandag heb ik les.", "On Monday I have class."),
    t("dinsdag", "Tuesday", "Dinsdag is goed.", "Tuesday is fine."),
    t("woensdag", "Wednesday", "Woensdag is niet goed.", "Wednesday isn't good."),
    t("donderdag", "Thursday", "Tot donderdag!", "See you on Thursday!"),
    t("vrijdag", "Friday", "Vandaag is het vrijdag.", "Today is Friday."),
    t("zaterdag", "Saturday", "Zaterdag en zondag zijn het weekend.", "Saturday and Sunday are the weekend."),
    t("zondag", "Sunday", "Op zondag ben ik jarig.", "My birthday is on Sunday."),
    ph("lievelings-", "favourite (before a noun)", "Mijn lievelingseten is pasta.", "My favourite food is pasta."),
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
  "a1-familie": [
    t("gezellig", "cosy, fun, nice to be together", "De verjaardag van oma is altijd heel gezellig.", "Grandma's birthday is always really nice and cosy."),
  ],
  "a1-eten": [
    t("nodig", "needed (iets nodig hebben = to need something)", "Ik heb melk en brood nodig.", "I need milk and bread."),
    t("gerecht", "dish (a cooked meal)", "Stamppot is een typisch Nederlands gerecht.", "Stamppot is a typical Dutch dish."),
    t("zoals", "like, as", "Ik kook pasta, zoals mijn oma.", "I'm cooking pasta, like my grandma."),
  ],
  "a1-dag-en-tijd": [
    ph("zin hebben in", "to look forward to; to feel like", "Ik heb zin in het weekend!", "I'm looking forward to the weekend!"),
  ],
  "a1-wonen": [
    t("beste", "dear (to start a letter or email)", "Beste meneer De Groot,", "Dear Mr De Groot,"),
    t("vriendelijk", "friendly, kind", "Met vriendelijke groet, Luca Bianchi", "Kind regards, Luca Bianchi"),
    ph("Met vriendelijke groet", "Kind regards (to end a formal letter)", "Met vriendelijke groet,", "Kind regards,"),
  ],
  "a1-kleren": [
    t("kleren", "clothes", "Ik koop mijn kleren meestal op de markt.", "I usually buy my clothes at the market."),
    t("bestelling", "order (something you ordered)", "Mijn bestelling is er nog niet.", "My order hasn't arrived yet."),
    t("klantenservice", "customer service", "Beste klantenservice, ik heb een probleem.", "Dear customer service, I have a problem."),
  ],
  "a2-verleden": [
    ph("was", "was (past of zijn: ik/hij/zij was)", "Het weekend was heel leuk.", "The weekend was really nice."),
    ph("waren", "were (past of zijn: wij/jullie/zij waren)", "De mensen waren heel aardig.", "The people were very kind."),
    ph("had", "had (past of hebben: ik/hij/zij had)", "Ik had geen tijd.", "I didn't have time."),
    ph("vond", "found; thought (past of vinden: ik vond het leuk)", "Ik vond het een mooie dag.", "I thought it was a lovely day."),
    t("geleden", "ago", "Drie jaar geleden ben ik naar Nederland gekomen.", "Three years ago I came to the Netherlands."),
    t("verkeerd", "wrong", "Ik ben in de verkeerde trein gestapt.", "I got on the wrong train."),
  ],
  "a2-werk": [
    t("ideaal", "ideal", "Mijn ideale baan is gids in een museum.", "My ideal job is a museum guide."),
  ],
  "a2-wonen": [
    t("huurder", "tenant", "Ik ben een rustige huurder: ik rook niet.", "I'm a quiet tenant: I don't smoke."),
    t("lekken", "to leak", "De kraan in de keuken lekt.", "The kitchen tap is leaking."),
  ],
  "a2-reizen": [
    t("tweepersoonskamer", "double room", "We willen graag een tweepersoonskamer voor twee nachten.", "We'd like a double room for two nights."),
    t("alvast", "in advance, already", "Alvast bedankt voor uw antwoord!", "Thanks in advance for your answer!"),
  ],
  "a2-samenleving": [
    t("opbellen", "to call (up), to phone", "Ik heb tien huisartsen opgebeld.", "I phoned ten GPs."),
    t("afzeggen", "to cancel (an appointment)", "Ik moet mijn afspraak afzeggen.", "I have to cancel my appointment."),
  ],
  "a2-media": [
    t("reactie", "reaction; comment (under an article)", "Ik schrijf een reactie onder het nieuwsbericht.", "I'm writing a comment under the news story."),
  ],
  "a2-uitgaan": [
    t("recensie", "review", "Ik schrijf een korte recensie over de film.", "I'm writing a short review of the film."),
    t("favoriet", "favourite (= lievelings-)", "Mijn favoriete plek is een klein café aan de gracht.", "My favourite place is a small café on the canal."),
    t("ster", "star", "Ik geef de film vier sterren.", "I give the film four stars."),
  ],
  "a2-koken": [
    t("paprika", "pepper (the vegetable)", "Snijd de rode paprika in kleine stukjes.", "Cut the red pepper into small pieces."),
    t("knoflook", "garlic", "Doe er een beetje knoflook bij.", "Add a little garlic."),
  ],
  "a2-natuur": [
    t("beloven", "to promise", "Ik zal je morgen bellen, dat beloof ik.", "I'll call you tomorrow, I promise."),
  ],
  "a1-kennismaken": [
    t("huisgenoot", "housemate", "Noor en Bram zijn mijn huisgenoten.", "Noor and Bram are my housemates."),
  ],
};
