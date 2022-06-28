import * as React from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";

const Link = (props: LinkProps) => (
  <RouterLink className="hover:underline" {...props} />
);

export default Link;
