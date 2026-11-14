import type { Expression } from "@/core/content";

/**
 * Fixed Dutch expressions that appear in the course. Tapping any of their
 * words shows the whole expression, and it can be saved as one card.
 * `forms` lists other shapes it takes in a sentence (first form = phrase).
 */
const RAW = `
af en toe | now and then
aan de beurt | next in line, your turn | | Wie is er aan de beurt? = Who's next? (in shops)
aan de hand | going on; (pushing a bike) by your side | | Wat is er aan de hand? = What's going on?
aan het eind | at the end
als dat jou uitkomt | if that suits you | als dat u uitkomt
bij elkaar | together, in total | | Dat is bij elkaar 26 euro = That's 26 euros altogether
dank je wel | thank you (informal)
dank u wel | thank you (polite)
dat klopt | that's right | klopt dat | Klopt! on its own is a very Dutch "Right!"
dat lukt | that works, I can manage that | lukt dat | Lukt het? = Are you managing?
de afwas doen | do the dishes
de hele dag | all day
de meeste | most (of them)
een afspraak maken | make an appointment
een beetje | a bit, a little
een paar | a few, a couple of
eet smakelijk | enjoy your meal | | Said before eating, like buon appetito
er een nachtje over slapen | sleep on it
even kijken | let me see | | Even = 'just for a moment': it softens everything
geen idee | no idea
geen probleem | no problem
geen zorgen | don't worry
graag gedaan | you're welcome
het gaat goed | it's going well, I'm fine | gaat het goed
het liefst | preferably, most of all | | Ik wil het liefst… = What I'd like most is…
hoe gaat het | how are you
hoe laat | (at) what time | | Hoe laat is het? = What time is it?
in de buurt | nearby, in the neighbourhood
in de file | in a traffic jam
in de spits | in rush hour | buiten de spits
in het begin | at first, in the beginning
in het weekend | at the weekend
in plaats van | instead of
komt eraan | coming right up | | What waiters say when your order is on its way
kwart over | quarter past | | kwart over acht = 8:15
kwart voor | quarter to | | kwart voor negen = 8:45
lekker weertje | nice weather | | Small talk: Lekker weertje, hè?
let op | watch out, pay attention
maakt niet uit | doesn't matter | het maakt niet uit
met de trein | by train | | Dutch uses met for transport: met de bus, met de auto
met vriendelijke groet | kind regards | | The standard way to end a formal email
net als | just like
niet meer | no longer, not any more
nog even | just a little longer; just quickly | | Nog even wachten = Just a little longer
nog niet | not yet
nog nooit | never (yet) | | Ik ben nog nooit in Groningen geweest = I've never been to Groningen
nog steeds | still
om de hoek | around the corner
om half | at half (to the next hour) | | om half negen = at 8:30 (half way to nine)
op bezoek | visiting | | op bezoek gaan bij = go and visit
op de fiets | by bike, on the bike
op dit moment | at the moment
op reis | travelling, on a trip
op tijd | on time
over een week | in a week
over tien minuten | in ten minutes | | over + time = in (the future)
pas op | watch out, careful
pinnen of contant | card or cash | | Pinnen comes from PIN: paying by card
slecht ter been | unsteady on your feet
sorry dat | sorry that | | Sorry dat ik zo laat bel = Sorry for calling so late
steeds meer | more and more
te laat | too late, late
ten eerste | firstly
ten tweede | secondly
ter wereld | in the world
tot morgen | see you tomorrow
tot straks | see you later (today)
tot ziens | goodbye
uit eten | out for dinner | | uit eten gaan = go out for a meal
uit je hoofd | by heart | | uit je hoofd leren = learn by heart
van het huis | on the house | | The restaurant gives it for free
van tevoren | in advance, beforehand
voor het eerst | for the first time
voor het laatst | for the last time
wat een rotweer | what awful weather
wat leuk | how nice
wat stom van mij | how silly of me
wat vervelend | how annoying, what a shame
zeg het maar | what can I get you? | | Literally 'just say it': shops and cafés
zich ziek melden | call in sick | ziek melden | Ik meld me ziek = I'm calling in sick
zin in | feel like, look forward to | | Ik heb zin in koffie = I feel like a coffee
zo snel mogelijk | as soon as possible
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
