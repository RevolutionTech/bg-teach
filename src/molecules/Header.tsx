import * as React from "react";

const Header = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className="my-4 text-3xl" {...props} />
);

export default Header;
