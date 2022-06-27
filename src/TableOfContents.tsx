import * as React from "react";

import { TEACHES } from "./teaches/teaches";

const TableOfContents = () => (
  <>
    <h1>Board Game Teach Notes</h1>
    <ul>
      {TEACHES.map((teach) => (
        <li key={teach.teachId}>
          <a href={`teach/${teach.teachId}`}>{teach.title}</a>
        </li>
      ))}
    </ul>
  </>
);

export default TableOfContents;
