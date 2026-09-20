"use client";

import { Menu } from "lucide-react";
import { useNavbar } from "@/hooks";
import { navItems, logo } from "./Navbar.data";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarNavLink } from "./NavbarNavLink";
import { NavbarOverlay } from "./NavbarOverlay";
import { NavbarMobileMenu } from "./NavbarMobileMenu";
import { cn } from "@/utils";
import type { NavbarProps } from "./Navbar.types";
import Image from "next/image";

export function Navbar({ className }: NavbarProps) {
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
                    "z-950 fixed top-0 left-0 right-0  transition-all duration-500 ease-in-out bg-background-alt",
                    isAtTop ? "pt-2  bg-transparent" : "pt-0",
                    !isNavbarVisible && !isAtTop
                        ? "-translate-y-full opacity-0"
                        : "translate-y-0 opacity-100",
                    className,
                )}
            >
                <div className="relative">
                    {/* background */}
                    <Image
                        src="/shape_divider_3.png"
                        alt="fondo de la barra de busqueda"
                        height={200}
                        width={1280}
                        className={cn(
                            "transition-all duration-500 rotate-180 absolute top-99/100 left-0 w-full h-full fill",
                            isAtTop && "opacity-0",
                        )}
                    />

                    <div className="relative  px-4 flex items-center md:p-1 gap-25">
                        <NavbarLogo logo={logo} isAtTop={isAtTop} />

                        <nav className="hidden text-xl text-text-secondary font-semibold font-header md:flex gap-8">
                            {navItems.map((link) => (
                                <NavbarNavLink key={link.label} item={link} />
                            ))}
                        </nav>

                        <button
                            onClick={toggleMobileMenu}
                            className="flex md:hidden ml-auto text-text-secondary p-2 cursor-pointer"
                            aria-label={
                                isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"
                            }
                            aria-expanded={isMobileMenuOpen}
                        >
                            <Menu size={28} />
                        </button>

                        <NavbarOverlay
                            isOpen={isMobileMenuOpen}
                            onClose={closeMobileMenu}
                        />
                        <NavbarMobileMenu
                            ctx={{ isMobileMenuOpen, closeMobileMenu }}
                            items={navItems}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
