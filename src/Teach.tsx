import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const useMarkdownString = (url: string) => {
  const [markdown, setMarkdown] = React.useState<string>("");
  React.useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((md) => setMarkdown(md));
  }, [url, setMarkdown]);
  return markdown;
};

interface TeachProps {
  notes: string;
}

const Teach = (props: TeachProps) => {
  const markdown = useMarkdownString(props.notes);
  return (
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
  );
};

export default Teach;
