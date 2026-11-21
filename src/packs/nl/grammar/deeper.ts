/**
 * "Going deeper" for every Dutch lesson (Matteo, 21 Nov 2026): the harder
 * cases, exceptions and native habits a textbook puts after the main rule.
 * Optional: the lesson works without them. [title, text] per item.
 */
export const deeper: Record<string, [string, string][]> = {
  "pronouns-subject": [
    ["Stressed and unstressed", "Most pronouns have a full form and a short one: jij/je, zij/ze, wij/we. Natives use the short one unless they stress it: Kom je ook? but: Kom jíj ook? (you, of all people). In writing the short forms are normal too."],
    ["u with the plural verb?", "u takes the jij-form of the verb: u werkt, u bent. With hebben you'll hear both u hebt and u heeft; both are correct."],
    ["Men and je for 'people in general'", "Dutch often uses je for 'one, people': In Nederland fiets je overal. men (one) exists but sounds formal and written."],
  ],
  "present-regular": [
    ["Spelling: one vowel or two?", "The stem is the infinitive minus -en, but keep the vowel sound: lopen → ik loop (double the vowel), zitten → ik zit (drop one t). A stem never ends in two identical consonants."],
    ["v and z at the end", "No Dutch word ends in v or z: leven → ik leef, lezen → ik lees, reizen → ik reis."],
    ["jij after the verb loses its -t", "Jij werkt, but Werk jij? and Morgen werk jij. Only jij/je loses the t, not u or hij: Werkt u? Werkt hij?"],
  ],
  "zijn-hebben": [
    ["Feelings with hebben", "Where English uses 'be', Dutch often uses hebben: Ik heb honger (I'm hungry), dorst (thirsty), het koud (cold), haast (in a hurry), gelijk (right)."],
    ["zijn for being somewhere", "Dutch often prefers a position verb to zijn: Het boek ligt op tafel, De fiets staat buiten. zijn is fine too, just less vivid."],
  ],
  articles: [
    ["Rules of thumb for het", "Always het: diminutives (het meisje, het huisje), infinitives used as nouns (het eten, het leven), words with ge-…-te and most with -um, -isme, -ment: het museum, het toerisme, het moment. Always de: plurals and most words ending in -ing, -heid, -tie, -ij: de woning, de vrijheid, de vakantie."],
    ["Same word, two articles", "A few nouns change meaning with the article: de bal (the ball) vs het bal (the dance), de pad (the toad) vs het pad (the path). Rare, but it's why a dictionary always shows the article."],
    ["de and het in compounds", "The last part decides: het huis, but de huiskamer (de kamer); de fiets, but het fietspad (het pad)."],
  ],
  "indefinite-article": [
    ["een or één?", "Written with accents, één means the number one: Ik heb één broer (just one). Without accents, een is 'a'. In speech: 'un' for a, 'een' (like ain) for one."],
    ["Jobs, nationality and religion", "No een: Ik ben student, Hij is Italiaan. But with an adjective it comes back: Ze is een goede arts."],
    ["geen, not niet een", "Negating een gives geen: Ik heb geen fiets. niet een exists only for 'not a single one', stressed: Ik heb niet één fiets, ik heb er drie!"],
  ],
  plurals: [
    ["-s or -en?", "-en is the default. -s after an unstressed ending: -el, -em, -en, -er, -je (tafels, bezems, jongens, kamers, huisjes), and in many loanwords (computers, trams). Words in a long vowel take 's: auto's, menu's, foto's."],
    ["Spelling changes", "Keep the vowel sound: boom → bomen, man → mannen. f/s at the end often become v/z: brief → brieven, huis → huizen (but: chef → chefs)."],
    ["Irregular ones to learn", "kind → kinderen, ei → eieren, stad → steden, schip → schepen, lid → leden. And a few where a short vowel becomes long: dag → dagen, weg → wegen, glas → glazen."],
  ],
  "verb-second": [
    ["Long first places", "The first place can be long: a whole phrase or even a clause. Op zaterdagochtend om negen uur ga ik… · Als het regent, neem ik de bus. Count places, not words."],
    ["Words that don't count", "ja, nee, maar, en, of, want and dus-with-a-comma stand outside the count: Maar ik ga morgen. Ja, ik kom. (dus without a comma does count: Dus ga ik.)"],
    ["Starting with the object", "For emphasis you can start with the object: Die film heb ik al gezien. The verb still comes second, the subject right after it."],
  ],
  questions: [
    ["Question word + preposition", "English puts the preposition at the end (Who are you talking to?). Dutch keeps it in front: Met wie praat je? Waar kom je vandaan? Waar denk je aan? (waar + preposition for things)."],
    ["Statement questions", "A statement with rising intonation is a real question in speech: Je komt morgen? Adding toch makes it a check: Je komt morgen toch?"],
    ["hoe in many questions", "hoe makes lots of question words: hoelang (how long), hoeveel (how much/many), hoe laat (what time), hoe oud (how old)."],
  ],
  "jij-inversion": [
    ["Only jij and je", "The -t drops only when jij/je comes right after the verb. With u it stays: Woont u hier? With hij too: Woont hij hier?"],
    ["Also after a first place", "It's not only questions: Morgen werk jij, Daar woon je. Whenever jij follows the verb, no -t."],
    ["Verbs whose stem ends in t", "zitten, weten: jij zit, zit jij? Nothing to drop, nothing changes. And with hebben/zijn: jij hebt → heb jij, jij bent → ben jij."],
  ],
  negation: [
    ["niet before or after?", "niet usually goes at the end of the middle field, but before: a describing word (niet mooi), a place or preposition phrase (niet naar huis), and a separable prefix or infinitive (Ik bel je niet op, Ik kan niet komen)."],
    ["Negating one part", "niet goes right before what you deny: Ik ga niet vandaag (but another day), Niet ik, maar Noor."],
    ["nooit, niemand, niets", "Dutch has one negation per idea: Ik zie niemand (not: niet niemand). nergens (nowhere), nooit (never), niets/niks (nothing; niks is spoken)."],
  ],
  possessives: [
    ["Short spoken forms", "In speech: m'n, je, z'n, d'r for mijn, jouw, zijn, haar: Waar is m'n fiets? Write the full forms in anything formal."],
    ["jouw or je?", "je is unstressed, jouw stressed: Is dit je jas? but Is dit jouw jas of de mijne? (yours or mine?)."],
    ["Their: hun", "hun = their: hun huis, hun kinderen. Don't mix it up with ze or hen (them)."],
  ],
  "object-pronouns": [
    ["hem for things", "A de-word thing is hij/hem in Dutch, not het: De fiets? Ik heb hem verkocht. het only for het-words: Het boek? Ik heb het gelezen."],
    ["hun or ze?", "Officially hen after a preposition (met hen) and hun as indirect object (Ik geef hun een boek). Natives mostly say ze, and hun as subject (Hun hebben…) is common but considered wrong. Safe choice: ze."],
    ["Stressed forms", "mij, jou, hem, haar can be stressed; me, je, 'm, d'r are the light forms: Ik zie je morgen. Mij? Nee, jou bedoel ik!"],
  ],
  "adjective-e": [
    ["No -e after een with het-words", "een groot huis, but het grote huis. This is the one case without -e before a noun; also after geen, elk, veel with a het-word: geen groot probleem, veel koud water."],
    ["Materials and -en", "Adjectives of material end in -en and never change: een houten tafel, een gouden ring, de wollen trui."],
    ["Spelling with -e", "Keep the vowel sound: groot → grote, wit → witte, lief → lieve, grijs → grijze. Words ending in -a, -ee or unstressed -er/-el: roze and oranje don't change; donker → donkere."],
  ],
  demonstratives: [
    ["die and dat as pronouns", "Alone, they point back: die for de-words, dat for het-words and for whole ideas: Die jas? Die is te duur. Dat weet ik niet (that = the whole idea)."],
    ["Introducing: dit and dat", "To introduce, it's always dit/dat, even for plurals and people: Dit zijn mijn ouders. Dat is mijn zus."],
    ["zo'n and zulke", "Such a: zo'n (singular), zulke (plural): zo'n mooie fiets, zulke mooie fietsen."],
  ],
  "er-is": [
    ["Position verbs instead of zijn", "Natives often say what position the thing is in: Er staat een kast in de kamer, Er ligt een boek op tafel, Er zit melk in de koelkast, Er hangt een klok aan de muur."],
    ["er is or het is?", "er is introduces something new (Er is een probleem). het is points to something known or the situation (Het is koud, Het is mijn fiets)."],
    ["Er with a definite subject?", "er is goes with indefinite things: Er is een man. With a definite one, leave er out: De man is in de tuin."],
  ],
  "modal-verbs": [
    ["Leaving the verb out", "If the meaning is clear, Dutch drops gaan or doen: Ik moet naar huis. Ik wil naar Italië. Dat kan ik niet."],
    ["kunnen: kun or kan?", "Both jij kunt/kan and u kunt/kan are correct; in questions kun je is the common form."],
    ["mogen and moeten in the negative", "Je mag niet = you're not allowed. Je moet niet = you shouldn't (advice), and for 'don't have to' you need hoeven: Je hoeft niet."],
  ],
  "separable-verbs": [
    ["Stress tells you", "Separable verbs are stressed on the prefix: ÓPbellen, MEEnemen. Verbs stressed on the root don't split: verTÉllen, beGRÍJpen, onderSCHÉIden."],
    ["Same prefix, two verbs", "Some words exist both ways: ÓVERkomen (come over, separable) vs overKÓMen (happen to, not separable): Hij komt morgen over. Dat overkomt iedereen."],
    ["Joined again at the end", "In a subordinate clause and in the infinitive, the verb is whole again: …omdat ik je morgen opbel. Ik ga je opbellen."],
  ],
  "gaan-future": [
    ["Present for the future", "Most of the time Dutch uses the plain present with a time word: Morgen werk ik. Volgend jaar verhuizen we. gaan adds 'plan' or 'about to'."],
    ["gaan + gaan", "Ik ga gaan (I'm going to go/leave) is normal Dutch, not a mistake."],
    ["gaan for starting something", "gaan + an infinitive can also mean 'start to': Ik ga even zitten (I'll sit down). Het gaat regenen (it's about to rain)."],
  ],
  imperative: [
    ["Softening an order", "A bare imperative can sound bossy. Add maar, even or eens: Kom maar binnen. Kijk eens! Geef me even het zout."],
    ["Polite with u", "The formal imperative adds u: Komt u binnen. Gaat u zitten. You'll hear it in shops and from older people."],
    ["Infinitive as an order", "Signs and instructions use the infinitive: Niet roken. Hier wachten. Rechts houden."],
  ],
  conjunctions: [
    ["dus: two word orders", "dus + comma doesn't count as a place: Het regent, dus ik blijf thuis. Without a comma it does: Het regent, dus blijf ik thuis. Both are correct."],
    ["of: or, and whether", "of means 'or' (Wil je koffie of thee?) and also 'whether/if' in indirect questions (Ik weet niet of hij komt). Only the second sends the verb to the end."],
    ["maar for contrast with 'but rather'", "After a negative, maar means 'but rather': Ik ga niet met de auto, maar met de fiets."],
  ],
  "time-numbers": [
    ["Minutes around 'half'", "Between twenty past and twenty to, Dutch counts from the half: 10:25 = vijf voor half elf, 10:35 = vijf over half elf. Officially and in announcements: tien uur vijfentwintig."],
    ["om, rond and tegen", "om acht uur (at eight), rond acht uur (around eight), tegen achten (towards eight, spoken)."],
    ["The 24-hour clock", "Timetables use it (de trein van 17.42), people say it the 12-hour way: kwart voor zes."],
  ],
  prepositions: [
    ["in or op?", "op for flat surfaces and many fixed places: op tafel, op school, op het werk, op het station, op de markt. in for inside something with walls or borders: in de kamer, in Leiden, in de trein."],
    ["Fixed partners", "Many verbs and adjectives come with their own preposition: wachten op, denken aan, kijken naar, trots op, bang voor. Learn them together."],
    ["Times", "om acht uur, op maandag, in juni, in de zomer, 's ochtends (no preposition), over een week (in a week's time), een week geleden (a week ago)."],
  ],
  diminutives: [
    ["Which ending?", "-tje after a vowel or -l, -n, -r after a long vowel: autootje, stoeltje, treintje. -etje after a short vowel + l, m, n, r, ng: balletje, kammetje, ringetje. -pje after -m (long vowel): boompje. -kje after -ing: koninkje. Otherwise -je: huisje."],
    ["Always het", "Every diminutive is a het-word: de tafel → het tafeltje."],
    ["Not always small", "The ending often means 'nice, cosy, informal' rather than 'small': een kopje koffie, een biertje, even een rondje fietsen, een uurtje."],
  ],
  "het-subject": [
    ["Weather and time", "het is the empty subject: Het regent. Het is laat. Het is tien uur. Het wordt koud."],
    ["het for things you already mentioned", "Only for het-words: het huis → het. A de-word is hij: De trein? Hij is te laat."],
    ["het as a stand-in for a clause", "Het is leuk dat je komt. Het valt me op dat… The real subject comes later; het holds the place."],
  ],
  spelling: [
    ["Open and closed syllables", "A syllable ending in a vowel is open: ma-ken (a is long). Closed: man-nen (a is short). That's why one a in maken but aa in maak, and nn in mannen."],
    ["ei and ij", "They sound the same. ij is written ij (or IJ at the start: IJsland, both capitals). Which one? Only memory helps: ijs, wijn, tijd; ei, klein, trein."],
    ["The ‘t kofschip rule", "For past tense and participles: if the stem ends in one of t, k, f, s, ch, p (‘t kofschip), use -te/-t, otherwise -de/-d. Look at the infinitive for v/z: leven → leefde, reizen → reisde."],
  ],
  "dates-ordinals": [
    ["Writing dates", "Dutch writes day-month-year: 5-12-2026 or 5 december 2026. Months and days have no capital letters."],
    ["Short forms", "Ordinals in figures: 1e, 2e, 3e (eerste, tweede, derde). de 21e eeuw (century)."],
    ["Years", "Years before 2000 are said in hundreds: negentienhonderdvijfennegentig (1995). After 2000: tweeduizendzes, or in speech twintig zesentwintig for 2026."],
  ],
  reflexive: [
    ["zich for u", "u takes zich or u: U kunt zich/u hier aanmelden. Both are correct."],
    ["Always reflexive", "Some verbs only exist with zich: zich vergissen (be mistaken), zich schamen (be ashamed), zich herinneren (remember)."],
    ["zichzelf for emphasis", "Hij kijkt naar zichzelf (at himself, not at someone else). With a normal reflexive verb you don't need -zelf: Hij wast zich."],
  ],
  "graag-liever": [
    ["Ordering: graag at the end", "In shops, graag can stand alone at the end: Een koffie, graag. Twee broodjes kaas, graag."],
    ["houden van vs graag", "houden van is stronger and for things and people: Ik hou van mijn moeder. Ik hou van jazz. For activities graag is the everyday way."],
    ["het liefst vs het best", "het liefst = what you like most; het best = what's best: Ik ga het liefst met de trein. Met de trein gaat het best."],
  ],
  comparatives: [
    ["-er after r: -der", "A word ending in r gets -der: duur → duurder, ver → verder, zwaar → zwaarder."],
    ["meer with long words?", "Most Dutch adjectives just take -er, even long ones: interessanter, moeilijker. meer is used with words ending in -e and participles: meer geschikt, meer verrast."],
    ["dan or als?", "Standard: groter dan. In speech you'll hear groter als; it's common but marked as wrong in writing. Equal: even groot als, net zo groot als."],
  ],
  "welk-wat-voor": [
    ["Wat voor een", "In speech, wat voor often gets een with singular nouns: Wat voor een auto heb je? With plurals and uncountables, never een: Wat voor schoenen? Wat voor muziek?"],
    ["Split wat voor", "Natives often split it: Wat heb je voor auto? Wat is dat voor iets?"],
    ["welke alone", "welke and welk can stand alone as 'which one': Ik heb twee jassen. Welke wil je?"],
  ],
  "kennen-weten": [
    ["kennen for skills", "kennen also means knowing something by heart or as a skill: Ik ken het gedicht uit mijn hoofd. Ken je dit liedje?"],
    ["weten van", "weten van = know about: Ik weet niets van auto's. Weet jij ervan?"],
    ["leren kennen", "leren kennen = get to know: Ik heb haar op een feestje leren kennen."],
  ],
  "al-nog-pas": [
    ["pas: 'not until'", "With a time, pas often means 'not until': De winkel gaat pas om tien uur open. Ik kom pas morgen."],
    ["nog + a number", "nog + number = more: nog twee dagen (two more days), nog een keer (once more), nog even (a bit longer)."],
    ["al for things that happen early", "al also stresses 'sooner than expected': Ben je er al? Hij is pas vijf en hij kan al lezen."],
  ],
  "aan-het": [
    ["Only for things in progress", "aan het is for activities that take time: aan het koken, aan het werken. Not with verbs of state: Ik weet het (not: Ik ben het aan het weten)."],
    ["zitten, staan, liggen, lopen + te", "These four make the same meaning with a picture of the body: Ze zit te lezen, Hij staat te wachten, Ik lag te slapen, Hij loopt te zingen. Very common in speech."],
    ["In the past", "Ik was aan het koken toen je belde. The other verb uses the simple past."],
  ],
  "perfect-hebben": [
    ["Participle at the end, always", "However long the sentence, the participle goes last: Ik heb gisteren met mijn moeder in de stad koffie gedronken."],
    ["No extra ge-", "Verbs starting with be-, ge-, her-, ont-, ver-, er- get no extra ge-: betaald, gebeurd, herhaald, ontmoet, vertaald."],
    ["Two infinitives", "With a modal, the perfect uses an infinitive, not a participle: Ik heb moeten werken (not: gemoeten werken). Ik heb niet kunnen komen."],
  ],
  "perfect-zijn": [
    ["Movement with or without a goal", "Many movement verbs take zijn with a destination, hebben without: Ik ben naar Utrecht gefietst. Ik heb de hele dag gefietst."],
    ["Change of state", "zijn goes with verbs of change: worden, sterven, groeien, beginnen, ontstaan, vergeten (in the sense of forgetting something): Ik ben het vergeten."],
    ["blijven and zijn", "Two verbs of 'no change' still take zijn: Ik ben thuis gebleven. Ik ben ziek geweest."],
  ],
  "participles-irregular": [
    ["Vowel patterns", "Many strong verbs follow patterns: ij-ee-e (blijven, bleef, gebleven; schrijven, schreef, geschreven), ie-oo-o (kiezen, koos, gekozen), i-o-o (beginnen, begon, begonnen)."],
    ["Mixed verbs", "Some have a regular past but irregular participle: bakken, bakte, gebakken; lachen, lachte, gelachen; vragen, vroeg/vraagde, gevraagd (that one's the other way round)."],
    ["Learn them in threes", "Always learn infinitive, past and participle together: gaan – ging – gegaan, zien – zag – gezien, doen – deed – gedaan."],
  ],
  "subordinate-order": [
    ["The verb cluster", "With more verbs at the end, the finite verb usually comes first: …omdat ik niet kan komen. The order …omdat ik niet komen kan also exists, especially in Belgium and the south."],
    ["Separable verbs together", "At the end they join up again: …dat hij morgen terugkomt. With a modal: …dat hij morgen terug wil komen / wil terugkomen."],
    ["Starting with the clause", "If the sentence starts with the subordinate clause, it fills the first place: Omdat het regent, blijf ik thuis (verb, then subject)."],
  ],
  "want-omdat": [
    ["Same meaning, different order", "want keeps normal word order (Ik blijf thuis, want ik ben ziek); omdat sends the verb to the end (…omdat ik ziek ben). In speech, want is more common."],
    ["Only omdat at the start", "You can start with omdat (Omdat ik ziek ben, …) but never with want."],
    ["doordat for causes", "doordat gives a cause, not a reason: Doordat de trein te laat was, miste ik de les. omdat would also work; doordat stresses that nobody chose it."],
  ],
  "er-preposition": [
    ["Split or together", "er and the preposition often split: Ik heb er niet aan gedacht. Together in short sentences: Ik denk eraan. Both mean the same."],
    ["Not for people", "For people, keep the pronoun: Ik denk aan hem. er + preposition is only for things and ideas."],
    ["Spelling changes", "met becomes mee and tot becomes toe: ermee, ertoe. Ik ben er blij mee."],
  ],
  "relative-clauses": [
    ["After a preposition: waar-", "For things, preposition + die becomes waar + preposition: de pen waarmee ik schrijf, het huis waarin ik woon. For people: met wie: de vriend met wie ik reis."],
    ["wat after alles, iets, niets", "After alles, iets, niets, veel and a superlative, use wat: alles wat ik weet, iets wat ik niet begrijp, het mooiste wat ik heb gezien."],
    ["The comma", "Dutch writes a comma when the clause adds extra information (Mijn broer, die in Utrecht woont, …) and often none when it tells you which one (De man die daar staat is mijn vader)."],
  ],
  "modal-past": [
    ["zou as a past of zullen", "zou(den) is the past of zullen: Hij zei dat hij zou komen. It's also the polite and the imagining form."],
    ["Perfect with two infinitives", "In the perfect, modals become infinitives: Ik heb moeten wachten, Ze heeft niet kunnen slapen."],
    ["wilde and wou", "wou is a common spoken past of willen: Ik wou je even bellen. In writing, use wilde."],
  ],
  "te-infinitive": [
    ["Without te", "No te after modals (kunnen, moeten, willen, mogen, zullen), and after gaan, komen, blijven, laten, horen, zien, helpen, leren: Ik ga slapen, Ik zie hem komen, Hij leert zwemmen."],
    ["te with separable verbs", "te goes in the middle: op te bellen, mee te nemen, af te maken."],
    ["zitten te, staan te", "Position verbs + te describe what you're doing: Ik zit te eten. In the perfect: Ik heb zitten eten (no te)."],
  ],
  "imperfect-regular": [
    ["The ‘t kofschip rule, again", "If the stem ends in t, k, f, s, ch or p: -te(n), otherwise -de(n). Always look at the stem from the infinitive: leven → leef → leefde (v isn't in kofschip), fietsen → fiets → fietste."],
    ["Doubled t or d", "A stem ending in t gets -te: wachten → wachtte. Ending in d: -de: antwoorden → antwoordde. The double letters are heard as one."],
    ["When to use it", "In stories and descriptions of the past. In everyday conversation about one event, the perfect is more natural."],
  ],
  "imperfect-irregular": [
    ["Plural vowel changes", "Some strong verbs change the vowel length in the plural: ik las, wij lazen; ik gaf, wij gaven; ik at, wij aten; ik sprak, wij spraken."],
    ["The big ones", "zijn – was/waren, hebben – had/hadden, gaan – ging, komen – kwam/kwamen, doen – deed, zien – zag/zagen, zeggen – zei/zeiden, kunnen – kon/konden."],
  ],
  "perfect-or-past": [
    ["Start perfect, continue past", "A story often starts in the perfect and switches: Ik ben gisteren naar Utrecht geweest. Het regende en ik had geen jas."],
    ["Background in the past", "The simple past paints the scene (Het was koud, er waren veel mensen), the perfect reports what happened and still matters now (Mijn fiets is gestolen)."],
  ],
  "indirect-questions": [
    ["Question word + preposition stays together", "Ik weet niet met wie hij praat. Weet jij waar hij op wacht? (waar … op, split)."],
    ["Reporting what someone asked", "Ze vroeg of ik kwam. Hij vroeg waarom ik zo laat was. The tense follows the main verb, like in English."],
    ["of in yes/no questions", "Yes/no questions become of-clauses: Komt hij? → Ik vraag me af of hij komt. Not als."],
  ],
  "als-wanneer-toen": [
    ["als for 'if'", "als also means 'if': Als het regent, blijf ik thuis. Together with dan for the result: Als je moe bent, (dan) moet je slapen."],
    ["wanneer is more formal", "In time clauses, wanneer sounds more written than als. As a question word (Wanneer kom je?) it's the only option."],
    ["toen: also 'then'", "toen in the middle of a sentence means 'then, at that time': Ik was moe. Toen ben ik naar bed gegaan."],
  ],
  "om-te": [
    ["om … te or just te?", "After nouns and adjectives om is often optional: Het is leuk (om) te doen. For purpose ('in order to') you need om: Ik spaar om een fiets te kopen."],
    ["Never voor … te", "English 'for' doesn't become voor here: Ik ga naar de markt om groente te kopen."],
    ["Long middles", "Everything that belongs to the verb goes between om and te: om morgen met de trein naar Utrecht te gaan."],
  ],
  "separable-past": [
    ["Simple past splits too", "In a main clause the past splits like the present: Ik belde hem op. In a subordinate clause it's together: …toen ik hem opbelde."],
    ["Participle: ge in the middle", "op + ge + beld = opgebeld, mee + ge + nomen = meegenomen. Prefixes with be-, ver- etc. inside stay without ge-: voorbereid, aangekomen."],
  ],
  superlatives: [
    ["het + -st for 'the most'", "As an adverb or after a verb, use het: Zij loopt het snelst. Ik vind deze het mooist. Before a noun, use de/het + -ste: de snelste loper."],
    ["Words ending in -s", "Just add -t: vies → het viest, grijs → het grijst."],
    ["meest for long words", "With participles and words in -isch: de meest gebruikte app, het meest logische antwoord."],
  ],
  "possessive-van": [
    ["De mijne", "Without a noun: de mijne / het mijne (mine), de jouwe, de zijne, de hare, de onze / het onze. Die van mij is the everyday alternative."],
    ["Names with 's", "Like English, with names: Theo's brieven, Anna's fiets. Only for names and family words (oma's huis), not for things."],
    ["Spoken z'n", "In speech: Jan z'n fiets, mijn moeder d'r auto. Common, but don't write it."],
  ],
  "er-quantity": [
    ["With veel, weinig, geen", "Not just numbers: Ik heb er veel. Ik heb er geen. Hoeveel heb je er?"],
    ["With a describing word", "Ik heb er een rode (I have a red one). Ik wil er twee grote."],
  ],
  "zou-polite": [
    ["Even more polite", "Stack the softeners: Zou u misschien even willen helpen? Each word makes it softer."],
    ["zou for hearsay", "In the news, zou means 'is said to': De minister zou morgen aftreden (is reportedly going to resign)."],
  ],
  "zullen-future": [
    ["zullen for assurance", "zullen also reassures: Dat zal wel goed komen (it'll be fine). Het zal wel (I suppose so)."],
    ["Suggestions with zullen", "Zullen we…? is the standard way to propose something: Zullen we gaan? Zal ik het raam opendoen? (Shall I…?)."],
    ["Rarely for plain future", "For neutral plans Dutch prefers the present or gaan. zullen for the future sounds formal or emphatic."],
  ],
  "word-order-tmp": [
    ["Pronouns first", "Short pronouns jump ahead of time words: Ik heb hem gisteren gezien (not: gisteren hem)."],
    ["Place with verbs of movement", "A direction (naar Utrecht) sticks to the end, next to the verb: Ik ga morgen met de trein naar Utrecht."],
    ["It's a tendency", "TMP is a strong habit, not a law. Natives move parts for emphasis, but in neutral sentences time-manner-place always sounds right."],
  ],
  hoeven: [
    ["hoeven with 'only'", "hoeven also works with 'only': Je hoeft het maar te zeggen (you only have to say it). Je hoeft alleen te betalen."],
    ["Past and perfect", "Past: hoefde. Perfect with an infinitive: Ik heb niet hoeven werken (no te, no gehoefd)."],
    ["hoeven in questions", "Questions about necessity: Hoef ik niet te betalen? Moet ik betalen? Both are fine."],
  ],
  particles: [
    ["Stacking them", "Natives combine them: Kom maar even binnen. Doe dat nou toch niet! Each one adds a little more softness or emphasis."],
    ["wel as contrast", "wel contradicts a negative: Ik heb geen tijd, maar ik kom wel. Hij is wel aardig (he IS nice, actually)."],
    ["nou and gewoon", "nou adds impatience or emphasis (Kom nou! Nou ja…). gewoon means 'simply, just': Doe gewoon normaal."],
  ],
  laten: [
    ["laten + zich", "Zich laten + infinitive = have yourself…: Ik laat me knippen (I'm having my hair cut)."],
    ["laten weten, laten horen", "Common fixed phrases: Laat het me weten (let me know). Laat iets van je horen (keep in touch)."],
    ["laten = leave (alone)", "Without an infinitive, laten means 'leave': Laat dat! (Leave it!) Ik laat mijn jas hier."],
  ],
  passive: [
    ["Er + passive", "With no clear subject, start with er: Er wordt veel gefietst in Nederland. Er werd geklopt (someone knocked)."],
    ["zijn or worden?", "zijn + participle reports a finished result: Het raam is gerepareerd (it's been repaired, it's fine now). worden + participle is the action: Het raam wordt gerepareerd (someone is repairing it)."],
    ["Active is often better", "Dutch uses the passive less than English in speech. Je kunt hier betalen sounds more natural than Hier kan betaald worden."],
  ],
  "alle-allemaal": [
    ["al de and allebei", "al + de is written as one: alle. Two of them: allebei or beide: We gaan allebei. Beide kinderen zijn ziek."],
    ["heel and hele", "The whole: heel Nederland (no article), het hele land, de hele dag."],
    ["ieder(e)", "ieder and iedere mean the same as elk and elke, slightly more formal."],
  ],
  "iets-lekkers": [
    ["Also with wat", "In speech wat replaces iets: Wil je wat lekkers? Ik heb wat nieuws voor je."],
    ["iets anders", "iets anders (something else) already ends in -s: Wil je iets anders?"],
  ],
  "er-four-jobs": [
    ["Er in passives", "A fifth job: er as an empty subject in passives: Er wordt gebeld (someone's at the door)."],
    ["Er starts the sentence only as 'there is'", "Only the er of 'there is' can start a main clause: Er is een probleem. The other jobs sit after the verb: Ik woon er, Ik denk eraan."],
  ],
  "zou-conditional": [
    ["The past: zou hebben", "Imagining the past: Als ik het had geweten, zou ik gekomen zijn. Natives shorten it: Als ik het had geweten, was ik gekomen."],
    ["Without als", "Start with the verb to make the condition: Had ik tijd, dan zou ik komen (literary). Or with dan: Dan zou ik het niet doen."],
  ],
};
