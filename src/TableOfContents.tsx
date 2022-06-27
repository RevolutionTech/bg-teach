import * as React from "react";
import { Link } from "react-router-dom";

import { TEACHES } from "./teaches/teaches";

const TableOfContents = () => (
  <>
    <h1>Board Game Teach Notes</h1>
    <ul>
      {TEACHES.map((teach) => (
        <li key={teach.teachId}>
          <Link to={`teach/${teach.teachId}`}>{teach.title}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default TableOfContents;
