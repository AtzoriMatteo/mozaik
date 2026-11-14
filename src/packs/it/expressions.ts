import type { Expression } from "@/core/content";

/**
 * Fixed Italian expressions in the course. Tapping any of their words shows
 * the whole expression, and it can be saved as one card.
 * phrase | meaning | other forms (;-separated) | note
 */
const RAW = `
a casa | at home; home | | Vado a casa = I'm going home
a domani | see you tomorrow
a stasera | see you tonight
a volte | sometimes
alla fine | in the end, at the end
buona giornata | have a nice day | | A little warmer than buongiorno when you leave
che bello | how lovely, how nice
ci vediamo | see you | | Ci vediamo dopo / domani / stasera
come si chiama | what's your name? (Lei); what's it called? | | To a friend: come ti chiami?
come si dice | how do you say | | Come si dice 'spoon' in italiano?
come si scrive | how do you spell it
come sta | how are you? (Lei)
come stai | how are you? (tu)
come ti chiami | what's your name? (tu)
così così | so-so
dare del tu | to use tu with someone | diamoci del tu; ci diamo del tu | Diamoci del tu! = Let's use tu!
di solito | usually
ecco qua | here you are, there you go | ecco a lei
fare colazione | to have breakfast | fanno colazione; faccio colazione
in centro | in town, in the centre
in mezzo | in the middle
in piedi | standing (up) | | Al banco si beve in piedi
in tutto | altogether, in total | | In tutto quattro euro
ma dai | come on!, no way! | | Surprise or friendly disbelief
non lo so | I don't know
per esempio | for example
per favore | please
per me | for me (when ordering); in my opinion | | Per me un caffè = A coffee for me
piacere mio | the pleasure's mine | | The answer to Piacere!
piano piano | little by little, slowly
più o meno | more or less, about
prima volta | (the) first time | per la prima volta
quanti anni hai | how old are you? | quanti anni ha | Answer: Ho … anni
su e giù | up and down
sono a dieta | I'm on a diet | a dieta
tocca a | it's (someone's) turn | tocca a te; tocca a me | Poi tocca a Emma = Then it's Emma's turn
un po' | a bit, a little | un po' di | un po' di latte = a bit of milk
va bene | OK, all right | | The most useful two words in Italian
vuol dire | means | che cosa vuol dire | Che cosa vuol dire? = What does it mean?
`;

export const expressions: readonly Expression[] = RAW.trim()
  .split("\n")
  .map((row) => {
    const [phrase, meaning, forms, local] = row.split(/\s*\|\s*/);
    return {
      phrase,
      meaning,
      forms: [phrase, ...(forms ? forms.split(/\s*;\s*/) : [])],
      ...(local ? { local } : {}),
    };
  });
