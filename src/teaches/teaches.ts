import { keyBy, sortBy } from "lodash";

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
      teachId: "tragedy-looper",
      title: "Tragedy Looper",
      notes: TragedyLooper,
    },
    { teachId: "tzolkin", title: "Tzolk'in", notes: Tzolkin },
    {
      teachId: "western-legends",
      title: "Western Legends",
      notes: WesternLegends,
    },
  ],
  "title"
);
export const TEACH_BY_ID = keyBy(TEACHES, "teachId");