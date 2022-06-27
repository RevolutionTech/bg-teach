import TragedyLooper from "url:./tragedy-looper.md";
import Tzolkin from "url:./tzolkin.md";
import WesternLegends from "url:./western-legends.md";

export interface TeachInfo {
  title: string;
  notes: string;
}

export const TEACHES: TeachInfo[] = [
  { title: "Western Legends", notes: WesternLegends },
  { title: "Tzolk'in", notes: Tzolkin },
  { title: "Tragedy Looper", notes: TragedyLooper },
];
