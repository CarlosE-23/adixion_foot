import Image from "next/image";
import type { NavbarLogoProps } from "./NavbarLogo.types";

export function NavbarLogo({ logo, isAtTop }: NavbarLogoProps) {
  return (
    <div>
      <Image
        src={logo.src}
        alt={logo.alt}
        width={isAtTop ? logo.width.atTop : logo.width.scrolled}
        height={isAtTop ? logo.width.atTop : logo.width.scrolled}
        className={logo.className}
      />
    </div>
  );
}
