import type { Lexicon } from "@/core/content";
import { parseLexicon } from "./parse";

/**
 * Dictionary forms of words the texts only use inflected (lacht, bloemen,
 * gesneden). Cards and word lists show the dictionary form, so it needs its
 * own meaning: "lachen = to laugh", never a meaning built from "laughs".
 * A test checks every inflected word in the course has one.
 */
export const lexiconLemmas: Lexicon = parseLexicon(`
mens | person, human being
lachen | to laugh
getal | number
seizoen | season
bloem | flower
paars | purple
tulp | tulip
blad | leaf; sheet (of paper)
waaien | to blow (of the wind)
snijden | to cut, to slice
betekenen | to mean
rozijn | raisin
studeren | to study
hobby | hobby
trouwen | to marry, to get married
voelen | to feel
missen | to miss
kleinkind | grandchild
neef | cousin (male); nephew
nicht | cousin (female); niece
buur | neighbour
scheiden | to separate; to divorce
kraam | (market) stall
aardappel | potato
ui | onion
tomaat | tomato
banaan | banana
oog | eye
ruiken | to smell
wassen | to wash
hoeven | to need to (with niet: don't have to)
volwassene | adult
rauw | raw
pannenkoek | pancake
croissant | croissant
aardbei | strawberry
sluiten | to close
opruimen | to tidy up
dame | lady
verbinden | to connect, to put through (on the phone)
scholier | school pupil
ieder | every, each
slaapkamer | bedroom
twijfelen | to doubt, to hesitate
vierkant | square
huisdier | pet
letten | to pay attention (op = to)
uitchecken | to check out
verschillend | different, various
zuchten | to sigh
drankje | drink
trekken | to pull; to draw
patiënt | patient
journalist | journalist
lokaal | local
toerist | tourist
bedanken | to thank
bezoeker | visitor
kloppen | to knock; to be right
sinaasappel | orange (fruit)
klacht | complaint; symptom
luisteren | to listen
long | lung
ernstig | serious
vallen | to fall
pleister | plaster, band-aid
breken | to break
pijnlijk | painful, sore
gat | hole; cavity
toetsen | to type in, to press (keys)
beller | caller
veranderen | to change
schijnen | to shine
graad | degree
vriezen | to freeze
wolk | cloud
lelijk | ugly
spel | game
elektrisch | electric
aantrekken | to put on (clothes)
dinosaurus | dinosaur
afspreken | to arrange, to agree (to meet)
dun | thin
donkerblauw | dark blue
mouw | sleeve
teen | toe
laars | boot
provincie | province
kanaal | canal; channel
molen | windmill; mill
schaap | sheep
hartelijk | warm, hearty
heuvel | hill
meubel | piece of furniture
genieten | to enjoy
enkel | single, only; ankle
paal | post, pole
cd | CD
lied | song
lot | lot (in a draw), lottery ticket
rijmen | to rhyme
bol | ball; bun
zoen | kiss
lawaai | noise
donut | doughnut
sneeuwen | to snow
uitslapen | to sleep in, to have a lie-in
ontbijten | to have breakfast
mislukken | to fail, to go wrong
opeten | to eat up
thuisblijven | to stay at home
inpakken | to pack, to wrap up
nazi | Nazi
bezetten | to occupy
gevaarlijk | dangerous
onderduiken | to go into hiding
droom | dream
onderduiker | person in hiding
arresteren | to arrest
sterven | to die
overleven | to survive
weggaan | to go away, to leave
dichtdoen | to close, to shut
bestaan | to exist
beantwoorden | to answer
vakantiedag | day of holiday, day off
volgen | to follow
sollicitatiegesprek | job interview
zwak | weak
werkende | working person
werknemer | employee
zoet | sweet
sterk | strong
uitkomen | to suit (a time); to come out
schrikken | to get a fright
sociaal | social
gordijn | curtain
hopen | to hope
calvinist | Calvinist
verkeerd | wrong
kaars | candle
kraan | tap
vullen | to fill
oordop | earplug
bewoner | resident
excuus | apology; excuse
onderzoeken | to examine, to research
oefening | exercise
bacterie | bacterium
verkoudheid | cold (illness)
europeaan | European
wetenschapper | scientist
wegen | to weigh
meten | to measure
opvallend | striking
snack | snack
hoesten | to cough
overgeven | to be sick, to vomit
stappen | to step, to get (on/in/off)
stiltecoupé | quiet carriage
handelaar | trader, merchant
verenigd | united
specerij | spice
matroos | sailor
zouten | to salt
groeien | to grow
rijk | rich
goud | gold
handelen | to trade
slaaf | slave
verheugen | to look forward (zich verheugen op)
defect | broken, out of order
reiziger | passenger, traveller
presentator | presenter
ondertitel | subtitle
merken | to notice
neerzetten | to put down
oplossen | to solve
verzinnen | to make up, to invent
nieuwssite | news site
verschijnen | to appear
strip | comic (strip)
ontsnappen | to escape
lokken | to lure
apart | separate
fietser | cyclist
voetganger | pedestrian
verstaan | to understand (what is said), to hear clearly
serie | series
cursist | course student
gezin | family (parents and children)
uitnodigen | to invite
digitaal | digital
inloggen | to log in
veilig | safe
onderhouden | to maintain; to keep up
voordeel | advantage
ruzie | quarrel, fight
nieuwkomer | newcomer
gooien | to throw
grondstof | raw material
schil | peel, skin (of fruit)
blikje | can (of a drink)
legen | to empty
uitprinten | to print out
coördineren | to coordinate
downloaden | to download
training | training session
kunstmuseum | art museum
klomp | clog
doordeweeks | weekday, on weekdays
besluiten | to decide
organiseren | to organise
tentoonstelling | exhibition
schilder | painter
zonnebloem | sunflower
overdekt | covered, roofed
romantisch | romantic
hoedje | little hat
tompouce | tompouce (pink-iced custard pastry)
schaatser | skater
olympisch | Olympic
winnen | to win
beschermen | to protect
wegsnijden | to cut away
buitenlander | foreigner
spliterwt | split pea
spoelen | to rinse
erwt | pea
roeren | to stir
branden | to burn
bouwen | to build
stevig | sturdy; hearty
bijzonder | special
ontstaan | to come about, to arise
koloniaal | colonial
indisch | Indo-Dutch (from the former Dutch East Indies)
toko | Asian grocery shop
surinaams | Surinamese
saus | sauce
plak | slice
misgaan | to go wrong
allergie | allergy
noot | nut; (music) note
paddenstoel | mushroom
mandje | little basket
appelflap | apple turnover
rekenen | to calculate, to count (on)
tiental | ten, a group of ten (tientallen = dozens)
stromen | to flow
enorm | enormous
rivier | river
weiland | meadow
gemaal | pumping station
vorm | shape, form
zeehond | seal
teruggaan | to go back
uitzien | to look (like)
jongere | young person
kelder | cellar
koel | cool
vlinder | butterfly
tegel | tile
weghalen | to remove, to take away
sok | sock
bloot | bare
schelp | shell
edelhert | red deer
ree | roe deer
zwijn | wild boar
`);
