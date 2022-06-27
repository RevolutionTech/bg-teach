import * as React from "react";

import { TEACHES } from "./teaches/teaches";

const TableOfContents = () => (
  <ul>
    {TEACHES.map((teach) => (
      <li key={teach.teachId}>
        <a href={`teach/${teach.teachId}`}>{teach.title}</a>
      </li>
    ))}
  </ul>
);

export default TableOfContents;
