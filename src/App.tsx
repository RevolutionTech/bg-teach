import * as React from "react";

import Teach from "./Teach";
import { TeachInfo, TEACHES } from "./teaches/teaches";

const App = () => (
  <>
    {TEACHES.map((teach: TeachInfo) => (
      <Teach key={teach.title} notes={teach.notes} />
    ))}
  </>
);

export default App;
