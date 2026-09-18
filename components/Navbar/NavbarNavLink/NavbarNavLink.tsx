import Link from "next/link";
import { cn } from "@/utils";
import type { NavbarNavLinkProps } from "./NavbarNavLink.types";

export function NavbarNavLink({ item, onClick, className }: NavbarNavLinkProps) {
  return (
    <i className="not-italic">
      <Link
        href={item.href}
        onClick={onClick}
        className={cn(
          "inline-block hover:text-white hover:scale-110 ease-in-out transition-all duration-300",
          className,
        )}
      >
        {item.label}
      </Link>
    </i>
  );
}
