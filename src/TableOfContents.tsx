import { useSearchParams } from "react-router";

import Header from "./molecules/Header";
import TeachCard from "./molecules/TeachCard";
import { TEACHES } from "./teaches/teaches";

// Strip accents so that "cafe" finds "Café Baras".
const normalizeForSearch = (text: string) =>
  text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();

const TableOfContents = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const normalizedQuery = normalizeForSearch(query);
  const matchingTeaches = TEACHES.filter((teach) =>
    normalizeForSearch(teach.title).includes(normalizedQuery),
  );

  const updateQuery = (newQuery: string) =>
    // Replace, so that each keystroke does not add a browser history entry.
    setSearchParams(newQuery === "" ? {} : { q: newQuery }, { replace: true });

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <Header>Board Game Teach Notes</Header>
        <input
          type="search"
          data-testid="teach-search"
          aria-label="Search games"
          placeholder="Search games…"
          value={query}
          onChange={(event) => updateQuery(event.target.value)}
          className="w-full rounded-lg border border-line bg-card px-3 py-2 text-lg shadow-sm placeholder:text-ink-muted focus:border-accent focus:outline-2 focus:outline-accent/30 sm:w-72"
        />
      </div>
      {matchingTeaches.length === 0 ? (
        <p data-testid="no-teaches-match" className="text-lg text-ink-muted">
          No games match “{query}”.
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {matchingTeaches.map((teach) => (
            <TeachCard key={teach.teachId} teach={teach} />
          ))}
        </ul>
      )}
    </>
  );
};

export default TableOfContents;
