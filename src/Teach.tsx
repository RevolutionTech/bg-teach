import { useEffect, useState } from "react";
import Markdown, { type Components } from "react-markdown";
import { useParams } from "react-router";
import remarkGfm from "remark-gfm";

import Header from "./molecules/Header";
import HomeLink from "./molecules/HomeLink";
import Thumbnail from "./molecules/Thumbnail";
import NotFound from "./NotFound";
import { loadNotes, TEACH_BY_ID } from "./teaches/teaches";

const useNotes = (teachId: string | undefined) => {
  const [notes, setNotes] = useState<string>("");
  useEffect(() => {
    if (teachId == null) {
      return;
    }
    // Navigating between teaches can resolve loads out of order.
    let isCurrent = true;
    loadNotes(teachId).then((loadedNotes) => {
      if (isCurrent) {
        setNotes(loadedNotes);
      }
    });
    return () => {
      isCurrent = false;
    };
  }, [teachId]);
  return notes;
};

// react-markdown passes its syntax-tree `node` to every component; it must not reach the DOM.
const MARKDOWN_COMPONENTS: Components = {
  // The page shows the title next to the thumbnail, so the Markdown `#` heading is not shown again.
  h1: () => null,
  // GFM renders task-list checkboxes as disabled; drop its props so the teacher can tick them.
  input: ({ node, type, ...props }) =>
    type === "checkbox" ? (
      <input type="checkbox" />
    ) : (
      <input type={type} {...props} />
    ),
};

const Teach = () => {
  const { teachId } = useParams();
  const teach = teachId == null ? undefined : TEACH_BY_ID.get(teachId);
  const markdown = useNotes(teach?.teachId);
  if (teach == null) {
    return <NotFound />;
  }

  return (
    <article className="mx-auto max-w-3xl">
      <HomeLink />
      <div className="mt-4 mb-6 flex items-center gap-4">
        <Thumbnail
          thumbnailUrl={teach.thumbnailUrl}
          className="w-20 shrink-0 rounded-lg border border-line sm:w-24"
        />
        <div className="flex flex-col gap-1">
          <Header>{teach.title}</Header>
          {teach.bggUrl && (
            <a
              href={teach.bggUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="bgg-link"
              className="text-accent hover:underline"
            >
              View on BoardGameGeek &#x2197;
            </a>
          )}
        </div>
      </div>
      <div
        data-testid="teach-notes"
        className="teach-notes rounded-xl border border-line bg-card p-5 shadow-sm sm:p-8"
      >
        <Markdown components={MARKDOWN_COMPONENTS} remarkPlugins={[remarkGfm]}>
          {markdown}
        </Markdown>
      </div>
    </article>
  );
};

export default Teach;
