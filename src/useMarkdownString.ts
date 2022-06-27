import { useState, useEffect } from "react";

const useMarkdownString = (url: string) => {
  const [markdown, setMarkdown] = useState<string>("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((md) => setMarkdown(md));
  }, [url, setMarkdown]);
  return markdown;
};

export default useMarkdownString;
