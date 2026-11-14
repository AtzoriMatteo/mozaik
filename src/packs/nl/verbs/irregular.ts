/**
 * Dutch irregular and mixed verbs: simple past (singular, plural), past
 * participle and helper for the perfect (h = hebben, z = zijn, hz = both,
 * depending on meaning). Compound verbs (verbinden, opstaan, begrijpen) are
 * made from these by the conjugator, so only the root verb is listed.
 */
const RAW = `
bakken bakte bakten gebakken h
barsten barstte barstten gebarsten z
bederven bedierf bedierven bedorven hz
bedriegen bedroog bedrogen bedrogen h
beginnen begon begonnen begonnen z
bevelen beval bevalen bevolen h
bewegen bewoog bewogen bewogen h
bidden bad baden gebeden h
bieden bood boden geboden h
bijten beet beten gebeten h
binden bond bonden gebonden h
blazen blies bliezen geblazen h
blijken bleek bleken gebleken z
blijven bleef bleven gebleven z
blinken blonk blonken geblonken h
breken brak braken gebroken hz
brengen bracht brachten gebracht h
brouwen brouwde brouwden gebrouwen h
buigen boog bogen gebogen h
denken dacht dachten gedacht h
doen deed deden gedaan h
dragen droeg droegen gedragen h
drijven dreef dreven gedreven hz
dringen drong drongen gedrongen hz
drinken dronk dronken gedronken h
duiken dook doken gedoken hz
dwingen dwong dwongen gedwongen h
eten at aten gegeten h
fluiten floot floten gefloten h
gaan ging gingen gegaan z
gelden gold golden gegolden h
genezen genas genazen genezen hz
genieten genoot genoten genoten h
geven gaf gaven gegeven h
gieten goot goten gegoten h
glijden gleed gleden gegleden hz
graven groef groeven gegraven h
grijpen greep grepen gegrepen h
hangen hing hingen gehangen h
hebben had hadden gehad h
heffen hief hieven geheven h
helpen hielp hielpen geholpen h
heten heette heetten geheten h
houden hield hielden gehouden h
jagen joeg joegen gejaagd h
kiezen koos kozen gekozen h
kijken keek keken gekeken h
klimmen klom klommen geklommen hz
klinken klonk klonken geklonken h
komen kwam kwamen gekomen z
kopen kocht kochten gekocht h
krijgen kreeg kregen gekregen h
krimpen kromp krompen gekrompen z
kruipen kroop kropen gekropen hz
kunnen kon konden gekund h
kwijten kweet kweten gekweten h
lachen lachte lachten gelachen h
laden laadde laadden geladen h
laten liet lieten gelaten h
lezen las lazen gelezen h
liegen loog logen gelogen h
liggen lag lagen gelegen h
lijden leed leden geleden h
lijken leek leken geleken h
lopen liep liepen gelopen hz
malen maalde maalden gemalen h
melken molk molken gemolken h
meten mat maten gemeten h
mijden meed meden gemeden h
moeten moest moesten gemoeten h
mogen mocht mochten gemogen h
nemen nam namen genomen h
prijzen prees prezen geprezen h
raden raadde raadden geraden h
rijden reed reden gereden hz
rijzen rees rezen gerezen z
roepen riep riepen geroepen h
ruiken rook roken geroken h
scheiden scheidde scheidden gescheiden hz
schelden schold scholden gescholden h
schenken schonk schonken geschonken h
scheppen schiep schiepen geschapen h
scheren schoor schoren geschoren h
schieten schoot schoten geschoten h
schijnen scheen schenen geschenen h
schrijven schreef schreven geschreven h
schrikken schrok schrokken geschrokken z
schuiven schoof schoven geschoven hz
slaan sloeg sloegen geslagen h
slapen sliep sliepen geslapen h
slijten sleet sleten gesleten hz
sluipen sloop slopen geslopen hz
sluiten sloot sloten gesloten h
smelten smolt smolten gesmolten z
smijten smeet smeten gesmeten h
snijden sneed sneden gesneden h
spijten speet speten gespeten h
spreken sprak spraken gesproken h
springen sprong sprongen gesprongen hz
spuiten spoot spoten gespoten h
staan stond stonden gestaan h
steken stak staken gestoken h
stelen stal stalen gestolen h
sterven stierf stierven gestorven z
stijgen steeg stegen gestegen z
stinken stonk stonken gestonken h
strijden streed streden gestreden h
strijken streek streken gestreken h
treden trad traden getreden z
treffen trof troffen getroffen h
trekken trok trokken getrokken hz
vallen viel vielen gevallen z
vangen ving vingen gevangen h
varen voer voeren gevaren hz
vechten vocht vochten gevochten h
vergeten vergat vergaten vergeten hz
verliezen verloor verloren verloren h
vinden vond vonden gevonden h
vliegen vloog vlogen gevlogen hz
vragen vroeg vroegen gevraagd h
vreten vrat vraten gevreten h
vriezen vroor vroren gevroren h
wassen waste wasten gewassen h
wegen woog wogen gewogen h
werpen wierp wierpen geworpen h
werven wierf wierven geworven h
weten wist wisten geweten h
wijken week weken geweken z
wijzen wees wezen gewezen h
willen wilde wilden gewild h
winden wond wonden gewonden h
winnen won wonnen gewonnen h
worden werd werden geworden z
wrijven wreef wreven gewreven h
zeggen zei zeiden gezegd h
zenden zond zonden gezonden h
zien zag zagen gezien h
zijn was waren geweest z
zingen zong zongen gezongen h
zinken zonk zonken gezonken z
zitten zat zaten gezeten h
zoeken zocht zochten gezocht h
zuigen zoog zogen gezogen h
zullen zou zouden - h
zwemmen zwom zwommen gezwommen hz
zweren zwoer zwoeren gezworen h
zwijgen zweeg zwegen gezwegen h
`;

export type Irregular = { pastSg: string; pastPl: string; participle: string | null; aux: "h" | "z" | "hz" };

export const IRREGULAR: Readonly<Record<string, Irregular>> = Object.fromEntries(
  RAW.trim()
    .split("\n")
    .map((row) => {
      const [inf, pastSg, pastPl, participle, aux] = row.trim().split(/\s+/);
      return [inf, { pastSg, pastPl, participle: participle === "-" ? null : participle, aux: aux as Irregular["aux"] }];
    }),
);

/** Present tense that doesn't follow the rules: ik, jij, u, hij (wij/jullie/zij use the infinitive). */
export const IRREGULAR_PRESENT: Readonly<Record<string, { ik: string; jij: string; u: string; hij: string; inverted?: string }>> = {
  zijn: { ik: "ben", jij: "bent", u: "bent", hij: "is", inverted: "ben jij" },
  hebben: { ik: "heb", jij: "hebt", u: "hebt / heeft", hij: "heeft", inverted: "heb jij" },
  kunnen: { ik: "kan", jij: "kunt / kan", u: "kunt", hij: "kan", inverted: "kun / kan jij" },
  mogen: { ik: "mag", jij: "mag", u: "mag", hij: "mag", inverted: "mag jij" },
  willen: { ik: "wil", jij: "wilt / wil", u: "wilt", hij: "wil", inverted: "wil jij" },
  zullen: { ik: "zal", jij: "zult / zal", u: "zult", hij: "zal", inverted: "zul / zal jij" },
  komen: { ik: "kom", jij: "komt", u: "komt", hij: "komt", inverted: "kom jij" },
};

/** Verbs whose perfect uses zijn by default, even though they're regular. */
export const ZIJN_REGULAR = new Set(["verhuizen", "opstaan", "aankomen", "weggaan", "meegaan", "uitgaan", "terugkomen", "binnenkomen", "opgroeien", "omvallen", "groeien", "gebeuren", "landen", "trouwen", "verdwijnen", "verschijnen", "slagen", "stijgen", "dalen", "lukken", "mislukken", "vertrekken", "ontstaan", "overlijden", "emigreren", "verhongeren", "sneuvelen", "keren", "terugkeren", "omkomen", "opgroeien", "binnenkomen", "overstappen", "uitstappen", "instappen", "afstappen", "opstappen", "wegrennen", "inslapen", "ontsnappen"]);

/** Regular verbs that take hebben or zijn depending on the meaning (Ik ben veranderd / Ik heb het veranderd). */
export const BOTH_REGULAR = new Set(["veranderen", "verbeteren", "stoppen", "zakken", "landen", "dalen"]);
