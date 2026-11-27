import type { HTMLAttributes } from "react";

const Header = (props: HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className="my-4 text-3xl" {...props} />
);

export default Header;
