import { keyBy, sortBy } from "lodash";

import Calico from "url:./calico.md";
import CaptainSonar from "url:./captain-sonar.md";
import CastlesOfBurgundy from "url:./castles-of-burgundy.md";
import CosmicEncounter from "url:./cosmic-encounter.md";
import CritterKitchen from "url:./critter-kitchen.md";
import Cryptid from "url:./cryptid.md";
import ColtExpress from "url:./colt-express.md";
import DeadOfWinter from "url:./dead-of-winter.md";
import DeadlyDowagers from "url:./deadly-dowagers.md";
import DevilsDice from "url:./devils-dice.md";
import Downforce from "url:./downforce.md";
import DraculasFeast from "url:./draculas-feast.md";
import DreadfulMeadows from "url:./dreadful-meadows.md";
import FalloutShelter from "url:./fallout-shelter.md";
import ForbiddenIsland from "url:./forbidden-island.md";
import ForgottenWaters from "url:./forgotten-waters.md";
import FormulaD from "url:./formula-d.md";
import Fromage from "url:./fromage.md";
import GalaxyTrucker from "url:./galaxy-trucker.md";
import GirlsVsGhouls from "url:./girls-vs-ghouls.md";
import HoneyBuzz from "url:./honey-buzz.md";
import LetterJam from "url:./letter-jam.md";
import LibertaliaWindsOfGalecrest from "url:./libertalia-winds-of-galecrest.md";
import LostRuinsOfArnak from "url:./lost-ruins-of-arnak.md";
import ManhattanProject from "url:./manhattan-project.md";
import Mariposas from "url:./mariposas.md";
import MarvelChampions from "url:./marvel-champions.md";
import NyctophobiaVampire from "url:./nyctophobia-vampire.md";
import OffWithTheirHeads from "url:./off-with-their-heads.md";
import PhantomInkArcana from "url:./phantom-ink-arcana.md";
import Pollen from "url:./pollen.md";
import SanJuan from "url:./san-juan.md";
import Sandbag from "url:./sandbag.md";
import ShadowsOverCamelot from "url:./shadows-over-camelot.md";
import SilverAndGold from "url:./silver-and-gold.md";
import StardewValley from "url:./stardew-valley.md";
import TeaWitches from "url:./tea-witches.md";
import TragedyLooper from "url:./tragedy-looper.md";
import TuringMachine from "url:./turing-machine.md";
import Tzolkin from "url:./tzolkin.md";
import Vagrantsong from "url:./vagrantsong.md";
import WesternLegends from "url:./western-legends.md";

export interface TeachInfo {
  teachId: string;
  title: string;
  notes: string;
}

export const TEACHES: TeachInfo[] = sortBy(
  [
    {
      teachId: "calico",
      title: "Calico",
      notes: Calico,
    },
    {
      teachId: "captain-sonar",
      title: "Captain Sonar",
      notes: CaptainSonar,
    },
    {
      teachId: "castles-of-burgundy",
      title: "Castles of Burgundy",
      notes: CastlesOfBurgundy,
    },
    {
      teachId: "cosmic-encounter",
      title: "Cosmic Encounter",
      notes: CosmicEncounter,
    },
    {
      teachId: "critter-kitchen",
      title: "Critter Kitchen",
      notes: CritterKitchen,
    },
    {
      teachId: "cryptid",
      title: "Cryptid",
      notes: Cryptid,
    },
    {
      teachId: "colt-express",
      title: "Colt Express",
      notes: ColtExpress,
    },
    {
      teachId: "dead-of-winter",
      title: "Dead of Winter: A Crossroads Game",
      notes: DeadOfWinter,
    },
    {
      teachId: "deadly-dowagers",
      title: "Deadly Dowagers",
      notes: DeadlyDowagers,
    },
    {
      teachId: "devils-dice",
      title: "Devil's Dice",
      notes: DevilsDice,
    },
    {
      teachId: "downforce",
      title: "Downforce",
      notes: Downforce,
    },
    {
      teachId: "draculas-feast",
      title: "Dracula's Feast",
      notes: DraculasFeast,
    },
    {
      teachId: "dreadful-meadows",
      title: "Dreadful Meadows",
      notes: DreadfulMeadows,
    },
    {
      teachId: "fallout-shelter",
      title: "Fallout Shelter",
      notes: FalloutShelter,
    },
    {
      teachId: "forbidden-island",
      title: "Forbidden Island",
      notes: ForbiddenIsland,
    },
    {
      teachId: "forgotten-waters",
      title: "Forgotten Waters",
      notes: ForgottenWaters,
    },
    {
      teachId: "formula-d",
      title: "Formula D",
      notes: FormulaD,
    },
    {
      teachId: "fromage",
      title: "Fromage",
      notes: Fromage,
    },
    {
      teachId: "galaxy-trucker",
      title: "Galaxy Trucker",
      notes: GalaxyTrucker,
    },
    {
      teachId: "girls-vs-ghouls",
      title: "Girls vs Ghouls",
      notes: GirlsVsGhouls,
    },
    {
      teachId: "honey-buzz",
      title: "Honey Buzz",
      notes: HoneyBuzz,
    },
    {
      teachId: "letter-jam",
      title: "Letter Jam",
      notes: LetterJam,
    },
    {
      teachId: "liberalia-winds-of-galecrest",
      title: "Libertalia: Winds of Galecrest",
      notes: LitertaliaWindsOfGalecrest,
    },
    {
      teachId: "lost-ruins-of-arnak",
      title: "Lost Ruins of Arnak",
      notes: LostRuinsOfArnak,
    },
    {
      teachId: "manhattan-project",
      title: "Manhattan Project",
      notes: ManhattanProject,
    },
    {
      teachId: "mariposas",
      title: "Mariposas",
      notes: Mariposas,
    },
    {
      teachId: "marvel-champions",
      title: "Marvel Champions",
      notes: MarvelChampions,
    },
    {
      teachId: "nyctophobia-vampire",
      title: "Nyctophobia: Vampire Encounter",
      notes: NyctophobiaVampire,
    },
    {
      teachId: "off-with-their-heads",
      title: "Off With Their Heads!",
      notes: OffWithTheirHeads,
    },
    {
      teachId: "phantom-ink-arcana",
      title: "Phantom Ink: Arcana",
      notes: PhantomInkArcana,
    },
    {
      teachId: "pollen",
      title: "Pollen",
      notes: Pollen,
    },
    {
      teachId: "san-juan",
      title: "San Juan",
      notes: SanJuan,
    },
    {
      teachId: "sandbag",
      title: "Sandbag",
      notes: Sandbag,
    },
    {
      teachId: "shadows-over-camelot",
      title: "Shadows over Camelot",
      notes: ShadowsOverCamelot,
    },
    {
      teachId: "silver-and-gold",
      title: "Silver & Gold",
      notes: SilverAndGold,
    },
    {
      teachId: "stardew-valley",
      title: "Stardew Valley: The Board Game",
      notes: StardewValley,
    },
    {
      teachId: "tea-witches",
      title: "Tea Witches",
      notes: TeaWitches,
    },
    {
      teachId: "tragedy-looper",
      title: "Tragedy Looper",
      notes: TragedyLooper,
    },
    {
      teachId: "turing-machine",
      title: "Turing Machine",
      notes: TuringMachine,
    },
    {
      teachId: "tzolkin",
      title: "Tzolk'in: The Mayan Calendar",
      notes: Tzolkin,
    },
    {
      teachId: "vagrantsong",
      title: "Vagrantsong",
      notes: Vagrantsong,
    },
    {
      teachId: "western-legends",
      title: "Western Legends",
      notes: WesternLegends,
    },
  ],
  "title"
);
export const TEACH_BY_ID = keyBy(TEACHES, "teachId");
