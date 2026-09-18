import type { NavbarContext, NavItem } from "../types";

export interface NavbarMobileMenuProps {
  ctx: Pick<NavbarContext, "isMobileMenuOpen" | "closeMobileMenu">;
  items: NavItem[];
}
