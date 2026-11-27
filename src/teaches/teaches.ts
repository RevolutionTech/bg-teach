import { keyBy, sortBy } from "lodash";

export interface TeachInfo {
  teachId: string;
  title: string;
  loadNotes: () => Promise<{ default: string }>;
}

export const TEACHES: TeachInfo[] = sortBy(
  [
    {
      teachId: "51st-state",
      title: "51st State",
      loadNotes: () => import("./51st-state.md?raw"),
    },
    {
      teachId: "all-in-predictions",
      title: "All In: Predictions",
      loadNotes: () => import("./all-in-predictions.md?raw"),
    },
    {
      teachId: "atiwa",
      title: "Atiwa",
      loadNotes: () => import("./atiwa.md?raw"),
    },
    {
      teachId: "bacon",
      title: "Bacon",
      loadNotes: () => import("./bacon.md?raw"),
    },
    {
      teachId: "bang-the-dice-game",
      title: "Bang! The Dice Game",
      loadNotes: () => import("./bang-the-dice-game.md?raw"),
    },
    {
      teachId: "cafe-baras",
      title: "Café Baras",
      loadNotes: () => import("./cafe-baras.md?raw"),
    },
    {
      teachId: "calico",
      title: "Calico",
      loadNotes: () => import("./calico.md?raw"),
    },
    {
      teachId: "captain-sonar",
      title: "Captain Sonar",
      loadNotes: () => import("./captain-sonar.md?raw"),
    },
    {
      teachId: "cartographers",
      title: "Cartographers",
      loadNotes: () => import("./cartographers.md?raw"),
    },
    {
      teachId: "castles-of-burgundy",
      title: "Castles of Burgundy",
      loadNotes: () => import("./castles-of-burgundy.md?raw"),
    },
    {
      teachId: "clank-in-space",
      title: "Clank! In! Space!",
      loadNotes: () => import("./clank-in-space.md?raw"),
    },
    {
      teachId: "colt-express",
      title: "Colt Express",
      loadNotes: () => import("./colt-express.md?raw"),
    },
    {
      teachId: "cosmic-encounter",
      title: "Cosmic Encounter",
      loadNotes: () => import("./cosmic-encounter.md?raw"),
    },
    {
      teachId: "critter-kitchen",
      title: "Critter Kitchen",
      loadNotes: () => import("./critter-kitchen.md?raw"),
    },
    {
      teachId: "cryptid",
      title: "Cryptid",
      loadNotes: () => import("./cryptid.md?raw"),
    },
    {
      teachId: "dead-of-winter",
      title: "Dead of Winter: A Crossroads Game",
      loadNotes: () => import("./dead-of-winter.md?raw"),
    },
    {
      teachId: "deadly-dowagers",
      title: "Deadly Dowagers",
      loadNotes: () => import("./deadly-dowagers.md?raw"),
    },
    {
      teachId: "deep-sea-adventure",
      title: "Deep Sea Adventure",
      loadNotes: () => import("./deep-sea-adventure.md?raw"),
    },
    {
      teachId: "devils-dice",
      title: "Devil's Dice",
      loadNotes: () => import("./devils-dice.md?raw"),
    },
    {
      teachId: "disney-villainous",
      title: "Disney Villainous",
      loadNotes: () => import("./disney-villainous.md?raw"),
    },
    {
      teachId: "downforce",
      title: "Downforce",
      loadNotes: () => import("./downforce.md?raw"),
    },
    {
      teachId: "draculas-feast",
      title: "Dracula's Feast",
      loadNotes: () => import("./draculas-feast.md?raw"),
    },
    {
      teachId: "dreadful-meadows",
      title: "Dreadful Meadows",
      loadNotes: () => import("./dreadful-meadows.md?raw"),
    },
    {
      teachId: "emberheart",
      title: "Emberheart",
      loadNotes: () => import("./emberheart.md?raw"),
    },
    {
      teachId: "fallout-shelter",
      title: "Fallout Shelter",
      loadNotes: () => import("./fallout-shelter.md?raw"),
    },
    {
      teachId: "flamecraft",
      title: "Flamecraft",
      loadNotes: () => import("./flamecraft.md?raw"),
    },
    {
      teachId: "forbidden-island",
      title: "Forbidden Island",
      loadNotes: () => import("./forbidden-island.md?raw"),
    },
    {
      teachId: "forgotten-waters",
      title: "Forgotten Waters",
      loadNotes: () => import("./forgotten-waters.md?raw"),
    },
    {
      teachId: "formaggio",
      title: "Formaggio",
      loadNotes: () => import("./formaggio.md?raw"),
    },
    {
      teachId: "formula-d",
      title: "Formula D",
      loadNotes: () => import("./formula-d.md?raw"),
    },
    {
      teachId: "french-toast",
      title: "French Toast",
      loadNotes: () => import("./french-toast.md?raw"),
    },
    {
      teachId: "fromage",
      title: "Fromage",
      loadNotes: () => import("./fromage.md?raw"),
    },
    {
      teachId: "galaxy-trucker",
      title: "Galaxy Trucker",
      loadNotes: () => import("./galaxy-trucker.md?raw"),
    },
    {
      teachId: "gutenberg",
      title: "Gutenberg",
      loadNotes: () => import("./gutenberg.md?raw"),
    },
    {
      teachId: "girls-vs-ghouls",
      title: "Girls vs Ghouls",
      loadNotes: () => import("./girls-vs-ghouls.md?raw"),
    },
    {
      teachId: "hardback",
      title: "Hardback",
      loadNotes: () => import("./hardback.md?raw"),
    },
    {
      teachId: "hearts",
      title: "Hearts",
      loadNotes: () => import("./hearts.md?raw"),
    },
    {
      teachId: "honey-buzz",
      title: "Honey Buzz",
      loadNotes: () => import("./honey-buzz.md?raw"),
    },
    {
      teachId: "lets-go-to-japan",
      title: "Let's Go! To Japan",
      loadNotes: () => import("./lets-go-to-japan.md?raw"),
    },
    {
      teachId: "letter-jam",
      title: "Letter Jam",
      loadNotes: () => import("./letter-jam.md?raw"),
    },
    {
      teachId: "liberalia-winds-of-galecrest",
      title: "Libertalia: Winds of Galecrest",
      loadNotes: () => import("./libertalia-winds-of-galecrest.md?raw"),
    },
    {
      teachId: "lords-of-waterdeep",
      title: "Lords of Waterdeep",
      loadNotes: () => import("./lords-of-waterdeep.md?raw"),
    },
    {
      teachId: "lost-ruins-of-arnak",
      title: "Lost Ruins of Arnak",
      loadNotes: () => import("./lost-ruins-of-arnak.md?raw"),
    },
    {
      teachId: "manhattan-project",
      title: "Manhattan Project",
      loadNotes: () => import("./manhattan-project.md?raw"),
    },
    {
      teachId: "mariposas",
      title: "Mariposas",
      loadNotes: () => import("./mariposas.md?raw"),
    },
    {
      teachId: "marvel-champions",
      title: "Marvel Champions",
      loadNotes: () => import("./marvel-champions.md?raw"),
    },
    {
      teachId: "money",
      title: "Money!",
      loadNotes: () => import("./money.md?raw"),
    },
    {
      teachId: "nyctophobia-vampire",
      title: "Nyctophobia: Vampire Encounter",
      loadNotes: () => import("./nyctophobia-vampire.md?raw"),
    },
    {
      teachId: "off-with-their-heads",
      title: "Off With Their Heads!",
      loadNotes: () => import("./off-with-their-heads.md?raw"),
    },
    {
      teachId: "paperback",
      title: "Paperback",
      loadNotes: () => import("./paperback.md?raw"),
    },
    {
      teachId: "phantom-ink-arcana",
      title: "Phantom Ink: Arcana",
      loadNotes: () => import("./phantom-ink-arcana.md?raw"),
    },
    {
      teachId: "pollen",
      title: "Pollen",
      loadNotes: () => import("./pollen.md?raw"),
    },
    {
      teachId: "ricochet-robots",
      title: "Ricochet Robots",
      loadNotes: () => import("./ricochet-robots.md?raw"),
    },
    {
      teachId: "robinson-crusoe",
      title: "Robinson Crusoe: Adventures on the Cursed Island",
      loadNotes: () => import("./robinson-crusoe.md?raw"),
    },
    {
      teachId: "rum",
      title: "RUM",
      loadNotes: () => import("./rum.md?raw"),
    },
    {
      teachId: "sail",
      title: "Sail",
      loadNotes: () => import("./sail.md?raw"),
    },
    {
      teachId: "san-juan",
      title: "San Juan",
      loadNotes: () => import("./san-juan.md?raw"),
    },
    {
      teachId: "sandbag",
      title: "Sandbag",
      loadNotes: () => import("./sandbag.md?raw"),
    },
    {
      teachId: "shadows-over-camelot",
      title: "Shadows over Camelot",
      loadNotes: () => import("./shadows-over-camelot.md?raw"),
    },
    {
      teachId: "silver-and-gold",
      title: "Silver & Gold",
      loadNotes: () => import("./silver-and-gold.md?raw"),
    },
    {
      teachId: "stardew-valley",
      title: "Stardew Valley: The Board Game",
      loadNotes: () => import("./stardew-valley.md?raw"),
    },
    {
      teachId: "steam-park",
      title: "Steam Park",
      loadNotes: () => import("./steam-park.md?raw"),
    },
    {
      teachId: "surfosaurus-max",
      title: "Surfosaurus Max",
      loadNotes: () => import("./surfosaurus-max.md?raw"),
    },
    {
      teachId: "tacta",
      title: "Tacta",
      loadNotes: () => import("./tacta.md?raw"),
    },
    {
      teachId: "targi",
      title: "Targi",
      loadNotes: () => import("./targi.md?raw"),
    },
    {
      teachId: "tea-garden",
      title: "Tea Garden",
      loadNotes: () => import("./tea-garden.md?raw"),
    },
    {
      teachId: "tea-witches",
      title: "Tea Witches",
      loadNotes: () => import("./tea-witches.md?raw"),
    },
    {
      teachId: "the-fox-experiment",
      title: "The Fox Experiment",
      loadNotes: () => import("./the-fox-experiment.md?raw"),
    },
    {
      teachId: "the-grimm-masquerade",
      title: "The Grimm Masquerade",
      loadNotes: () => import("./the-grimm-masquerade.md?raw"),
    },
    {
      teachId: "the-shipwreck-arcana",
      title: "The Shipwreck Arcana",
      loadNotes: () => import("./the-shipwreck-arcana.md?raw"),
    },
    {
      teachId: "toy-battle",
      title: "Toy Battle",
      loadNotes: () => import("./toy-battle.md?raw"),
    },
    {
      teachId: "tragedy-looper",
      title: "Tragedy Looper",
      loadNotes: () => import("./tragedy-looper.md?raw"),
    },
    {
      teachId: "turing-machine",
      title: "Turing Machine",
      loadNotes: () => import("./turing-machine.md?raw"),
    },
    {
      teachId: "tzolkin",
      title: "Tzolk'in: The Mayan Calendar",
      loadNotes: () => import("./tzolkin.md?raw"),
    },
    {
      teachId: "vagrantsong",
      title: "Vagrantsong",
      loadNotes: () => import("./vagrantsong.md?raw"),
    },
    {
      teachId: "vantage",
      title: "Vantage",
      loadNotes: () => import("./vantage.md?raw"),
    },
    {
      teachId: "vivo",
      title: "Vivo",
      loadNotes: () => import("./vivo.md?raw"),
    },
    {
      teachId: "voyages",
      title: "Voyages",
      loadNotes: () => import("./voyages.md?raw"),
    },
    {
      teachId: "waypoints",
      title: "Waypoints",
      loadNotes: () => import("./waypoints.md?raw"),
    },
    {
      teachId: "western-legends",
      title: "Western Legends",
      loadNotes: () => import("./western-legends.md?raw"),
    },
  ],
  "title",
);
export const TEACH_BY_ID = keyBy(TEACHES, "teachId");
