import type { NavItem, NavbarLogo } from "./types";

export const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Menú", href: "/menu" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "https://wa.me/584146822025", external: true },
];

export const logo: NavbarLogo = {
  src: "/logo.png",
  alt: "ADIXION",
  width: { atTop: 200, scrolled: 170 },
  className:
    "w-33 md:w-50 transition-all duration-500 ease-in-out object-contain",
};
