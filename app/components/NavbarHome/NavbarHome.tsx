"use client";

import { Menu } from "lucide-react";
import { useNavbar } from "@/hooks";
import { navItems, logo } from "@/components/Navbar";
import { NavbarLogo } from "@/components/Navbar/NavbarLogo";
import { NavbarNavLink } from "@/components/Navbar/NavbarNavLink";
import { NavbarOverlay } from "@/components/Navbar/NavbarOverlay";
import { NavbarMobileMenu } from "@/components/Navbar/NavbarMobileMenu";
import { cn } from "@/utils";
import type { NavbarHomeProps } from "./NavbarHome.types";

export function NavbarHome({ className }: NavbarHomeProps) {
    const {
        isAtTop,
        isNavbarVisible,
        isMobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu,
    } = useNavbar();

    return (
        <>
            <div
                className={cn(
                    "fixed top-0 left-0 right-0 z-950 items-center p-4 md:p-8 px-18 transition-all duration-500 ease-in-out flex gap-25",
                    isAtTop
                        ? "bg-transparent translate-y-0 top-12"
                        : "bg-background-alt/90 backdrop-blur-sm translate-y-0",
                    !isNavbarVisible && !isAtTop
                        ? "-translate-y-full opacity-0"
                        : "translate-y-0 opacity-100",
                    className,
                )}
            >
                <NavbarLogo logo={logo} isAtTop={isAtTop} />

                <nav className="hidden text-xl text-text-secondary font-semibold font-header md:flex gap-8">
                    {navItems.map((link) => (
                        <NavbarNavLink key={link.label} item={link} />
                    ))}
                </nav>

                <button
                    onClick={toggleMobileMenu}
                    className="flex md:hidden ml-auto text-text-secondary p-2 cursor-pointer"
                    aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isMobileMenuOpen}
                >
                    <Menu size={28} />
                </button>
            </div>

            <NavbarOverlay
                isOpen={isMobileMenuOpen}
                onClose={closeMobileMenu}
            />
            <NavbarMobileMenu
                ctx={{ isMobileMenuOpen, closeMobileMenu }}
                items={navItems}
            />
        </>
    );
}
