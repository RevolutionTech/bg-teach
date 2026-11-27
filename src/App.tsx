import { BrowserRouter, Route, Routes } from "react-router";

import NotFound from "./NotFound";
import TableOfContents from "./TableOfContents";
import Teach from "./Teach";

const App = () => (
  <div className="p-4">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableOfContents />} />
        <Route path="teach/:teachId" element={<Teach />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
