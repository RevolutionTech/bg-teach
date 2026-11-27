import * as React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Header from "./molecules/Header";
import HomeLink from "./molecules/HomeLink";
import NotFound from "./NotFound";
import { TEACH_BY_ID, TeachInfo } from "./teaches/teaches";

const useNotes = (loadNotes: TeachInfo["loadNotes"] | undefined) => {
  const [notes, setNotes] = React.useState<string>("");
  React.useEffect(() => {
    if (loadNotes == null) {
      return;
    }
    // Navigating between teaches can resolve loads out of order.
    let isCurrent = true;
    loadNotes().then((module) => {
      if (isCurrent) {
        setNotes(module.default);
      }
    });
    return () => {
      isCurrent = false;
    };
  }, [loadNotes]);
  return notes;
};

const Teach = () => {
  const { teachId } = useParams();
  const teach = teachId == null ? undefined : TEACH_BY_ID[teachId];
  const markdown = useNotes(teach?.loadNotes);
  if (teach == null) {
    return <NotFound />;
  }

  return (
    <div className="teach">
      <HomeLink />
      <ReactMarkdown
        components={{
          h1: Header,
          h3: (props) => <h3 className="my-2 text-xl" {...props} />,
          ul: ({ className, ...props }) => (
            <ul className={`font-light text-lg ${className}`} {...props} />
          ),
          li: ({ className, ...props }) => (
            <li className={`ml-4 ${className}`} {...props} />
          ),
          input: ({
            type,
            ...props
          }: React.InputHTMLAttributes<HTMLInputElement>) => (
            <input
              type={type}
              {...(type === "checkbox"
                ? { className: "w-5 h-5 align-text-top" }
                : props)}
            />
          ),
        }}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default Teach;
