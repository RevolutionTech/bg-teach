import { keyBy, sortBy } from "lodash";

import CosmicEncounter from "url:./cosmic-encounter.md";
import DeadOfWinter from "url:./dead-of-winter.md";
import ShadowsOverCamelot from "url:./shadows-over-camelot.md";
import TragedyLooper from "url:./tragedy-looper.md";
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
