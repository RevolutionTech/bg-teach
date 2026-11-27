import Header from "./molecules/Header";
import HomeLink from "./molecules/HomeLink";

const NotFound = () => (
  <div className="flex flex-col items-center gap-4 py-16 text-center">
    <img src="/logo.png" alt="" className="h-24 w-24 opacity-60" />
    <Header>404 Not Found!</Header>
    <p className="text-lg text-ink-muted">There is no page at this address.</p>
    <HomeLink />
  </div>
);

export default NotFound;
