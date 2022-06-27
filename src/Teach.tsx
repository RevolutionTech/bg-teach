import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface TeachProps {
  markdown: string;
}

const Teach = (props: TeachProps) => (
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
    {props.markdown}
  </ReactMarkdown>
);

export default Teach;
