import * as React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { TEACH_BY_ID } from "./teaches/teaches";
import NotFound from "./NotFound";

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
    <>
      <a href="/">Back home</a>
      <ReactMarkdown
        components={{
          input: ({
            type,
            ...props
          }: React.InputHTMLAttributes<HTMLInputElement>) => (
            <input type={type} {...(type === "checkbox" ? {} : props)} />
          ),
        }}
        rehypePlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </>
  );
};

export default Teach;
