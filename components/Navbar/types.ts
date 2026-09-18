export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavbarLogo {
  src: string;
  alt: string;
  width: { atTop: number; scrolled: number };
  className: string;
}

export interface NavbarScrollState {
  isAtTop: boolean;
  isNavbarVisible: boolean;
  scrollY: number;
}

export interface NavbarContext extends NavbarScrollState {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}
