import { type LinkProps, Link as RouterLink } from "react-router";

const Link = (props: LinkProps) => (
  <RouterLink className="hover:underline" {...props} />
);

export default Link;
