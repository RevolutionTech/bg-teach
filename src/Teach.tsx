import { useEffect, useState } from "react";
import Markdown, { type Components } from "react-markdown";
import { useParams } from "react-router";
import remarkGfm from "remark-gfm";

import Header from "./molecules/Header";
import HomeLink from "./molecules/HomeLink";
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
  h1: ({ node, ...props }) => <Header {...props} />,
  h3: ({ node, ...props }) => <h3 className="my-2 text-xl" {...props} />,
  ul: ({ node, className, ...props }) => (
    <ul className={`font-light text-lg ${className ?? ""}`} {...props} />
  ),
  li: ({ node, className, ...props }) => (
    <li className={`ml-4 ${className ?? ""}`} {...props} />
  ),
  // GFM renders task-list checkboxes as disabled; drop its props so the teacher can tick them.
  input: ({ node, type, ...props }) =>
    type === "checkbox" ? (
      <input type="checkbox" className="w-5 h-5 align-text-top" />
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
    <div className="teach">
      <HomeLink />
      <Markdown components={MARKDOWN_COMPONENTS} remarkPlugins={[remarkGfm]}>
        {markdown}
      </Markdown>
    </div>
  );
};

export default Teach;
