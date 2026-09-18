import { X } from "lucide-react";
import { cn } from "@/utils";
import { NavbarNavLink } from "../NavbarNavLink";
import type { NavbarMobileMenuProps } from "./NavbarMobileMenu.types";

export function NavbarMobileMenu({ ctx, items }: NavbarMobileMenuProps) {
    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            className={cn(
                "fixed top-0 right-0 h-screen w-full z-999 bg-background-alt transition-transform duration-300 ease-in-out md:hidden flex flex-col",
                ctx.isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
            )}
        >
            <div className="flex justify-end p-6">
                <button
                    onClick={ctx.closeMobileMenu}
                    className="text-text-secondary p-2 cursor-pointer"
                    aria-label="Cerrar menú"
                >
                    <X size={28} />
                </button>
            </div>
            <nav className="flex flex-col items-center gap-8 text-2xl text-text-secondary font-semibold font-header">
                {items.map((link) => (
                    <NavbarNavLink
                        key={link.label}
                        item={link}
                        onClick={ctx.closeMobileMenu}
                    />
                ))}
            </nav>
        </div>
    );
}
