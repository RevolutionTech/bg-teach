import bggEntries from "./bgg.json";

const NOTES_LOADERS = import.meta.glob<string>("./*.md", {
  query: "?raw",
  import: "default",
});

interface TeachEntry {
  teachId: string;
  title: string;
}

export interface TeachInfo extends TeachEntry {
  bggUrl?: string;
  thumbnailUrl?: string;
}

// Written by `pnpm bgg:update`.
const BGG_ENTRIES: Record<string, { bggId: number; thumbnailUrl?: string }> =
  bggEntries;

const TEACH_ENTRIES: TeachEntry[] = [
  {
    teachId: "51st-state",
    title: "51st State",
  },
  {
    teachId: "all-in-predictions",
    title: "All In: Predictions",
  },
  {
    teachId: "atiwa",
    title: "Atiwa",
  },
  {
    teachId: "bacon",
    title: "Bacon",
  },
  {
    teachId: "bang-the-dice-game",
    title: "Bang! The Dice Game",
  },
  {
    teachId: "cafe-baras",
    title: "Café Baras",
  },
  {
    teachId: "calico",
    title: "Calico",
  },
  {
    teachId: "captain-sonar",
    title: "Captain Sonar",
  },
  {
    teachId: "cartographers",
    title: "Cartographers",
  },
  {
    teachId: "castles-of-burgundy",
    title: "The Castles of Burgundy",
  },
  {
    teachId: "clank-in-space",
    title: "Clank! In! Space!",
  },
  {
    teachId: "colt-express",
    title: "Colt Express",
  },
  {
    teachId: "cosmic-encounter",
    title: "Cosmic Encounter",
  },
  {
    teachId: "critter-kitchen",
    title: "Critter Kitchen",
  },
  {
    teachId: "cryptid",
    title: "Cryptid",
  },
  {
    teachId: "dead-of-winter",
    title: "Dead of Winter: A Crossroads Game",
  },
  {
    teachId: "deadly-dowagers",
    title: "Deadly Dowagers",
  },
  {
    teachId: "deep-sea-adventure",
    title: "Deep Sea Adventure",
  },
  {
    teachId: "devils-dice",
    title: "Devil's Dice",
  },
  {
    teachId: "disney-villainous",
    title: "Disney Villainous",
  },
  {
    teachId: "dont-go-in-there",
    title: "Don't Go In There",
  },
  {
    teachId: "downforce",
    title: "Downforce",
  },
  {
    teachId: "draculas-feast",
    title: "Dracula's Feast",
  },
  {
    teachId: "dreadful-meadows",
    title: "Dreadful Meadows",
  },
  {
    teachId: "emberheart",
    title: "Emberheart",
  },
  {
    teachId: "fallout-shelter",
    title: "Fallout Shelter",
  },
  {
    teachId: "flamecraft",
    title: "Flamecraft",
  },
  {
    teachId: "forbidden-island",
    title: "Forbidden Island",
  },
  {
    teachId: "forgotten-waters",
    title: "Forgotten Waters",
  },
  {
    teachId: "formaggio",
    title: "Formaggio",
  },
  {
    teachId: "formula-d",
    title: "Formula D",
  },
  {
    teachId: "french-toast",
    title: "French Toast",
  },
  {
    teachId: "fromage",
    title: "Fromage",
  },
  {
    teachId: "galaxy-trucker",
    title: "Galaxy Trucker",
  },
  {
    teachId: "gutenberg",
    title: "Gutenberg",
  },
  {
    teachId: "girls-vs-ghouls",
    title: "Girls vs Ghouls",
  },
  {
    teachId: "hardback",
    title: "Hardback",
  },
  {
    teachId: "hearts",
    title: "Hearts",
  },
  {
    teachId: "honey-buzz",
    title: "Honey Buzz",
  },
  {
    teachId: "lets-go-to-japan",
    title: "Let's Go! To Japan",
  },
  {
    teachId: "letter-jam",
    title: "Letter Jam",
  },
  {
    teachId: "libertalia-winds-of-galecrest",
    title: "Libertalia: Winds of Galecrest",
  },
  {
    teachId: "lords-of-waterdeep",
    title: "Lords of Waterdeep",
  },
  {
    teachId: "lost-ruins-of-arnak",
    title: "Lost Ruins of Arnak",
  },
  {
    teachId: "manhattan-project",
    title: "Manhattan Project",
  },
  {
    teachId: "mariposas",
    title: "Mariposas",
  },
  {
    teachId: "marvel-champions",
    title: "Marvel Champions",
  },
  {
    teachId: "money",
    title: "Money!",
  },
  {
    teachId: "nyctophobia-vampire",
    title: "Nyctophobia: Vampire Encounter",
  },
  {
    teachId: "off-with-their-heads",
    title: "Off With Their Heads!",
  },
  {
    teachId: "paperback",
    title: "Paperback",
  },
  {
    teachId: "phantom-ink-arcana",
    title: "Phantom Ink: Arcana",
  },
  {
    teachId: "pollen",
    title: "Pollen",
  },
  {
    teachId: "ricochet-robots",
    title: "Ricochet Robots",
  },
  {
    teachId: "robinson-crusoe",
    title: "Robinson Crusoe: Adventures on the Cursed Island",
  },
  {
    teachId: "rum",
    title: "RUM",
  },
  {
    teachId: "sail",
    title: "Sail",
  },
  {
    teachId: "san-juan",
    title: "San Juan",
  },
  {
    teachId: "sandbag",
    title: "Sandbag",
  },
  {
    teachId: "shadows-over-camelot",
    title: "Shadows over Camelot",
  },
  {
    teachId: "silver-and-gold",
    title: "Silver & Gold",
  },
  {
    teachId: "stardew-valley",
    title: "Stardew Valley: The Board Game",
  },
  {
    teachId: "steam-park",
    title: "Steam Park",
  },
  {
    teachId: "surfosaurus-max",
    title: "Surfosaurus MAX",
  },
  {
    teachId: "tacta",
    title: "Tacta",
  },
  {
    teachId: "targi",
    title: "Targi",
  },
  {
    teachId: "tea-garden",
    title: "Tea Garden",
  },
  {
    teachId: "tea-witches",
    title: "Tea Witches",
  },
  {
    teachId: "the-fox-experiment",
    title: "The Fox Experiment",
  },
  {
    teachId: "the-grimm-masquerade",
    title: "The Grimm Masquerade",
  },
  {
    teachId: "the-shipwreck-arcana",
    title: "The Shipwreck Arcana",
  },
  {
    teachId: "toy-battle",
    title: "Toy Battle",
  },
  {
    teachId: "tragedy-looper",
    title: "Tragedy Looper",
  },
  {
    teachId: "turing-machine",
    title: "Turing Machine",
  },
  {
    teachId: "tzolkin",
    title: "Tzolk'in: The Mayan Calendar",
  },
  {
    teachId: "vagrantsong",
    title: "Vagrantsong",
  },
  {
    teachId: "vantage",
    title: "Vantage",
  },
  {
    teachId: "vivo",
    title: "Vivo",
  },
  {
    teachId: "voyages",
    title: "Voyages",
  },
  {
    teachId: "waypoints",
    title: "Waypoints",
  },
  {
    teachId: "western-legends",
    title: "Western Legends",
  },
];

// "The Castles of Burgundy" sorts with the Cs, as in a library catalog.
const sortKey = (title: string) => title.replace(/^The\s+/, "");

export const TEACHES: TeachInfo[] = TEACH_ENTRIES.map((teach) => {
  const bggEntry = BGG_ENTRIES[teach.teachId];
  return {
    ...teach,
    bggUrl: bggEntry && `https://boardgamegeek.com/boardgame/${bggEntry.bggId}`,
    thumbnailUrl: bggEntry?.thumbnailUrl,
  };
}).sort((a, b) => sortKey(a.title).localeCompare(sortKey(b.title)));

// A Map, unlike a plain object, has no inherited keys such as "constructor" to match a URL.
export const TEACH_BY_ID = new Map(
  TEACHES.map((teach) => [teach.teachId, teach]),
);

export const loadNotes = (teachId: string) =>
  NOTES_LOADERS[`./${teachId}.md`]();
