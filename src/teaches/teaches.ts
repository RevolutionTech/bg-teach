import { keyBy, sortBy } from "lodash";

import Calico from "url:./calico.md";
import CaptainSonar from "url:./captain-sonar.md";
import CastlesOfBurgundy from "url:./castles-of-burgundy.md";
import CosmicEncounter from "url:./cosmic-encounter.md";
import CritterKitchen from "url:./critter-kitchen.md";
import DeadOfWinter from "url:./dead-of-winter.md";
import DeadlyDowagers from "url:./deadly-dowagers.md";
import Downforce from "url:./downforce.md";
import FalloutShelter from "url:./fallout-shelter.md";
import ForbiddenIsland from "url:./forbidden-island.md";
import ForgottenWaters from "url:./forgotten-waters.md";
import Fromage from "url:./fromage.md";
import GalaxyTrucker from "url:./galaxy-trucker.md";
import LetterJam from "url:./letter-jam.md";
import LostRuinsOfArnak from "url:./lost-ruins-of-arnak.md";
import ManhattanProject from "url:./manhattan-project.md";
import Mariposas from "url:./mariposas.md";
import NyctophobiaVampire from "url:./nyctophobia-vampire.md";
import SanJuan from "url:./san-juan.md";
import Sandbag from "url:./sandbag.md";
import ShadowsOverCamelot from "url:./shadows-over-camelot.md";
import TragedyLooper from "url:./tragedy-looper.md";
import TuringMachine from "url:./turing-machine.md";
import Tzolkin from "url:./tzolkin.md";
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
      teachId: "downforce",
      title: "Downforce",
      notes: Downforce,
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
      teachId: "letter-jam",
      title: "Letter Jam",
      notes: LetterJam,
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
      teachId: "nyctophobia-vampire",
      title: "Nyctophobia: Vampire Encounter",
      notes: NyctophobiaVampire,
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
      teachId: "western-legends",
      title: "Western Legends",
      notes: WesternLegends,
    },
  ],
  "title"
);
export const TEACH_BY_ID = keyBy(TEACHES, "teachId");
