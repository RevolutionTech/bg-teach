import * as React from "react";

import Teach from "./Teach";
import TragedyLooper from "url:./teaches/tragedy-looper.md";
import Tzolkin from "url:./teaches/tzolkin.md";
import WesternLegends from "url:./teaches/western-legends.md";

const App = () => (
  <>
    <Teach notes={WesternLegends} />
    <Teach notes={Tzolkin} />
    <Teach notes={TragedyLooper} />
  </>
);

export default App;
