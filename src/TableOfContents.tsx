import * as React from "react";

import Header from "./molecules/Header";
import Link from "./molecules/Link";
import { TEACHES } from "./teaches/teaches";

const TableOfContents = () => (
  <>
    <Header>Board Game Teach Notes</Header>
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
