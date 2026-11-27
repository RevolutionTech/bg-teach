import { readdir, readFile, writeFile } from "node:fs/promises";
import { setTimeout as sleep } from "node:timers/promises";
import { XMLParser } from "fast-xml-parser";

const TEACHES_DIR = new URL("../src/teaches/", import.meta.url);
const BGG_FILE = new URL("bgg.json", TEACHES_DIR);
const API_URL = "https://boardgamegeek.com/xmlapi2";
// BGG rejects `thing` requests that ask for more IDs than this.
const IDS_PER_REQUEST = 20;
// BGG asks clients to space out requests, and answers 429 when they do not.
const REQUEST_DELAY_MS = 5000;
const MAX_ATTEMPTS = 5;
const CANDIDATES_TO_SHOW = 5;

interface BggEntry {
  bggId: number;
  thumbnailUrl?: string;
}

type BggEntries = Record<string, BggEntry>;

interface Teach {
  teachId: string;
  title: string;
}

interface SearchResult {
  bggId: number;
  name: string;
  year: string;
}

const xmlParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
  htmlEntities: true,
  isArray: (tagName) => tagName === "item" || tagName === "name",
});

const token = process.env.BGG_API_TOKEN;
if (!token) {
  console.error("Set BGG_API_TOKEN in .env. See .env.example.");
  process.exit(1);
}

const fetchXml = async (path: string) => {
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    await sleep(REQUEST_DELAY_MS);
    const response = await fetch(`${API_URL}${path}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // 202 means BGG queued the request and wants the client to ask again.
    if (response.status === 202 || response.status === 429) {
      continue;
    }
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText} for ${path}`);
    }
    return xmlParser.parse(await response.text());
  }
  throw new Error(`No answer after ${MAX_ATTEMPTS} attempts for ${path}`);
};

const readTeaches = async (): Promise<Teach[]> => {
  const fileNames = (await readdir(TEACHES_DIR)).filter((fileName) =>
    fileName.endsWith(".md"),
  );
  return Promise.all(
    fileNames.map(async (fileName) => {
      const notes = await readFile(new URL(fileName, TEACHES_DIR), "utf8");
      const title = notes.match(/^# (.+)$/m)?.[1];
      if (title == null) {
        throw new Error(`${fileName} has no "# " heading`);
      }
      return { teachId: fileName.replace(/\.md$/, ""), title };
    }),
  );
};

const readBggEntries = async (): Promise<BggEntries> => {
  try {
    return JSON.parse(await readFile(BGG_FILE, "utf8"));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return {};
    }
    throw error;
  }
};

const search = async (title: string, exact: boolean) => {
  const query = new URLSearchParams({ query: title, type: "boardgame" });
  if (exact) {
    query.set("exact", "1");
  }
  const parsed = await fetchXml(`/search?${query}`);
  const items: {
    id: string;
    name: { type: string; value: string }[];
    yearpublished?: { value: string };
  }[] = parsed.items?.item ?? [];
  return items.map(
    (item): SearchResult => ({
      bggId: Number(item.id),
      name: (item.name.find((name) => name.type === "primary") ?? item.name[0])
        .value,
      year: item.yearpublished?.value ?? "?",
    }),
  );
};

const formatSearchResult = (result: SearchResult) =>
  `${result.bggId} ${result.name} (${result.year}) https://boardgamegeek.com/boardgame/${result.bggId}`;

const findBggId = async (teach: Teach) => {
  const exactResults = await search(teach.title, true);
  if (exactResults.length === 1) {
    console.log(
      `MATCHED  ${teach.teachId} -> ${formatSearchResult(exactResults[0])}`,
    );
    return exactResults[0].bggId;
  }
  const candidates =
    exactResults.length > 0 ? exactResults : await search(teach.title, false);
  console.log(`UNSURE   ${teach.teachId} ("${teach.title}"). Candidates:`);
  for (const candidate of candidates.slice(0, CANDIDATES_TO_SHOW)) {
    console.log(`           ${formatSearchResult(candidate)}`);
  }
  return undefined;
};

const fetchThumbnailUrls = async (bggIds: number[]) => {
  const thumbnailUrlByBggId = new Map<number, string>();
  for (let start = 0; start < bggIds.length; start += IDS_PER_REQUEST) {
    const batch = bggIds.slice(start, start + IDS_PER_REQUEST);
    const parsed = await fetchXml(`/thing?id=${batch.join(",")}`);
    const items: { id: string; thumbnail?: string }[] =
      parsed.items?.item ?? [];
    for (const item of items) {
      if (item.thumbnail) {
        thumbnailUrlByBggId.set(Number(item.id), item.thumbnail.trim());
      }
    }
  }
  return thumbnailUrlByBggId;
};

const teaches = await readTeaches();
const oldEntries = await readBggEntries();
const bggIdByTeachId = new Map<string, number>();
for (const teach of teaches) {
  const bggId = oldEntries[teach.teachId]?.bggId ?? (await findBggId(teach));
  if (bggId != null) {
    bggIdByTeachId.set(teach.teachId, bggId);
  }
}

const thumbnailUrlByBggId = await fetchThumbnailUrls([
  ...new Set(bggIdByTeachId.values()),
]);
const newEntries: BggEntries = {};
for (const [teachId, bggId] of [...bggIdByTeachId].sort(([a], [b]) =>
  a.localeCompare(b),
)) {
  newEntries[teachId] = { bggId, thumbnailUrl: thumbnailUrlByBggId.get(bggId) };
  if (newEntries[teachId].thumbnailUrl == null) {
    console.log(`NO IMAGE ${teachId} (BGG ID ${bggId})`);
  }
}
await writeFile(BGG_FILE, `${JSON.stringify(newEntries, null, 2)}\n`);

const unmatchedCount = teaches.length - bggIdByTeachId.size;
console.log(
  `Wrote ${bggIdByTeachId.size} entries to src/teaches/bgg.json. ${unmatchedCount} teaches have no BGG ID.`,
);
if (unmatchedCount > 0) {
  console.log(
    'Add { "bggId": <id> } for each UNSURE teach to bgg.json, then run this again.',
  );
}
