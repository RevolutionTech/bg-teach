import { keyBy, sortBy } from "lodash";

import Calico from "url:./calico.md";
import CaptainSonar from "url:./captain-sonar.md";
import CastlesOfBurgundy from "url:./castles-of-burgundy.md";
import CosmicEncounter from "url:./cosmic-encounter.md";
import DeadOfWinter from "url:./dead-of-winter.md";
import DeadlyDowagers from "url:./deadly-dowagers.md";
import Downforce from "url:./downforce.md";
import ForgottenWaters from "url:./forgotten-waters.md";
import GalaxyTrucker from "url:./galaxy-trucker.md";
import LostRuinsOfArnak from "url:./lost-ruins-of-arnak.md";
import Mariposas from "url:./mariposas.md";
import NyctophobiaVampire from "url:./nyctophobia-vampire.md";
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
      teachId: "forgotten-waters",
      title: "Forgotten Waters",
      notes: ForgottenWaters,
    },
    {
      teachId: "galaxy-trucker",
      title: "Galaxy Trucker",
      notes: GalaxyTrucker,
    },
    {
      teachId: "lost-ruins-of-arnak",
      title: "Lost Ruins of Arnak",
      notes: LostRuinsOfArnak,
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
