import * as React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Header from "./molecules/Header";
import HomeLink from "./molecules/HomeLink";
import NotFound from "./NotFound";
import { TEACH_BY_ID } from "./teaches/teaches";

const useMarkdownString = (url: string) => {
  const [markdown, setMarkdown] = React.useState<string>("");
  React.useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((md) => setMarkdown(md));
  }, [url, setMarkdown]);
  return markdown;
};

const Teach = () => {
  const { teachId } = useParams();
  if (teachId == null) {
    return <NotFound />;
  }
  const teach = TEACH_BY_ID[teachId];
  if (teach == null) {
    return <NotFound />;
  }

  const markdown = useMarkdownString(teach.notes);
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
        rehypePlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default Teach;
