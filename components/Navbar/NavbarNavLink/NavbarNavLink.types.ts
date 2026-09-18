import type { NavItem } from "../types";

export interface NavbarNavLinkProps {
  item: NavItem;
  onClick?: () => void;
  className?: string;
}
