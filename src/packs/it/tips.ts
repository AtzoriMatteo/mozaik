import type { LearningTip } from "@/core/tips";

/** Tips about Italian itself: patterns that save hours, and how to fit in. */
export const tips: readonly LearningTip[] = [
  { id: "it-zione", text: "English -tion is Italian -zione: nation → nazione, station → stazione, information → informazione. They're all feminine.", places: ["review", "read", "home"] },
  { id: "it-ta", text: "English -ty is often Italian -tà: city → città, university → università, quality → qualità. They don't change in the plural: le città.", places: ["review", "read"] },
  { id: "it-oso", text: "English -ous is Italian -oso: famous → famoso, curious → curioso, delicious → delizioso.", places: ["review", "read"] },
  { id: "it-mente", text: "English -ly is Italian -mente, added to the feminine: rapida → rapidamente, vera → veramente.", places: ["review", "write"] },
  { id: "it-false-friends", text: "False friends: camera = room, parenti = relatives (parents are genitori), libreria = bookshop, simpatico = nice, morbido = soft.", places: ["review", "read", "home"] },
  { id: "it-prego", text: "Prego does four jobs: you're welcome; please, go ahead; can I help you? (in shops); and sorry, what? (Prego?)", places: ["home", "listen"] },
  { id: "it-cappuccino", text: "Cappuccino is for the morning. After lunch or dinner, order un caffè: a milky coffee after a meal looks strange to most Italians.", places: ["home", "course"] },
  { id: "it-drop-io", text: "Drop io, tu and lui: the verb ending already says who. Sono Emma sounds more natural than Io sono Emma, unless you're stressing the I.", places: ["write", "read"] },
  { id: "it-gender", text: "A noun ending in -o is almost always masculine, in -a almost always feminine. In -e it can be either: learn it with its article, il pane, la notte.", places: ["review", "write"] },
  { id: "it-doubles", text: "Double letters change the word: pena (pain) and penna (pen), nono (ninth) and nonno (grandpa). Hold them a moment longer.", places: ["listen", "home"] },
  { id: "it-ciao", text: "Ciao comes from Venetian s'ciavo, 'your servant'. Use it with friends; with strangers, say buongiorno or buonasera.", places: ["home", "course"] },
  { id: "it-dialect", text: "If an older person answers in dialect, ask: \"Può parlare in italiano, per favore?\" They'll switch, and probably smile.", places: ["listen", "home"] },
  { id: "it-bar-practice", text: "The easiest daily practice: order at the same bar every morning, in Italian. The barista will soon know you, and correct you kindly.", places: ["home", "course"] },
  { id: "it-spelling", text: "Italian is written as it's spoken. Learn the rules for c, g, sc and gli once, and you can read any word aloud.", places: ["read", "listen"] },
  { id: "it-lei-capital", text: "In a polite email, many people still write Lei, La and Sua with a capital: La ringrazio = thank you (to you, formally).", places: ["write"] },
];
