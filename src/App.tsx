import * as React from "react";

import Teach from "./Teach";
import WesternLegends from "url:./teaches/western-legends.md";
import useMarkdownString from "./useMarkdownString";

const App = () => {
  const markdown = useMarkdownString(WesternLegends);
  return (
    <>
      <Teach markdown={markdown} />
    </>
  );
};

export default App;
