import type { HTMLAttributes } from "react";

const Header = (props: HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    data-testid="page-title"
    className="text-3xl font-bold tracking-tight sm:text-4xl"
    {...props}
  />
);

export default Header;
