import { Link } from "react-router";

const SiteHeader = () => (
  <header className="border-b border-line bg-card">
    <div className="mx-auto flex max-w-5xl items-center px-4 py-3">
      <Link
        to="/"
        data-testid="site-home-link"
        className="flex items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-accent"
      >
        <img src="/logo.png" alt="" className="h-10 w-10" />
        <span className="text-2xl font-bold tracking-tight">BG Teach</span>
      </Link>
    </div>
  </header>
);

export default SiteHeader;
