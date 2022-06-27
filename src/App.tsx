import * as React from "react";

import Teach from "./Teach";
import TragedyLooper from "url:./teaches/tragedy-looper.md";
import Tzolkin from "url:./teaches/tzolkin.md";
import WesternLegends from "url:./teaches/western-legends.md";
import useMarkdownString from "./useMarkdownString";

const App = () => {
  const westernLegends = useMarkdownString(WesternLegends);
  const tzolkin = useMarkdownString(Tzolkin);
  const tragedyLooper = useMarkdownString(TragedyLooper);

  return (
    <>
      <Teach markdown={westernLegends} />
      <Teach markdown={tzolkin} />
      <Teach markdown={tragedyLooper} />
    </>
  );
};

export default App;
