import { Link } from "react-router";

import type { TeachInfo } from "../teaches/teaches";
import Thumbnail from "./Thumbnail";

const TeachCard = ({ teach }: { teach: TeachInfo }) => (
  <li data-testid={`teach-card-${teach.teachId}`}>
    <Link
      to={`/teach/${teach.teachId}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <Thumbnail thumbnailUrl={teach.thumbnailUrl} />
      <span className="border-t border-line px-3 py-2 font-semibold leading-tight group-hover:text-accent">
        {teach.title}
      </span>
    </Link>
  </li>
);

export default TeachCard;
