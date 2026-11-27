import { BrowserRouter, Route, Routes } from "react-router";

import SiteFooter from "./molecules/SiteFooter";
import SiteHeader from "./molecules/SiteHeader";
import NotFound from "./NotFound";
import TableOfContents from "./TableOfContents";
import Teach from "./Teach";

const App = () => (
  <BrowserRouter>
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">
        <Routes>
          <Route path="/" element={<TableOfContents />} />
          <Route path="teach/:teachId" element={<Teach />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  </BrowserRouter>
);

export default App;
