import * as React from "react";

import Teach from "./Teach";

const WESTERN_LEGENDS = `
# Western Legends

- [ ] Theme & Vibe
  - [ ] Sandbox
  - [ ] Outlaws: rob bank, rustle cattle, steal
  - [ ] Marshals: fight bandits, wrangle cattle, arrest Wanted players
- [ ] Objective: most legendary points (LP)
- [ ] Game end: penultimate round when 15/20/25 LPs reached
- [ ] Poker cards
  - [ ] Used directly for effects, used in fights, and playing poker
  - [ ] Each card has action, reaction, or bonus
`;

const App = () => (
  <>
    <Teach markdown={WESTERN_LEGENDS} />
  </>
);

export default App;
