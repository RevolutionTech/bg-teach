import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./NotFound";
import TableOfContents from "./TableOfContents";
import Teach from "./Teach";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableOfContents />} />
        <Route path="teach/:teachId" element={<Teach />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
