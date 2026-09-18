"use client";

import { Menu } from "lucide-react";
import { useNavbar } from "@/hooks";
import { navItems, logo } from "@/components/Navbar";
import { NavbarLogo } from "@/components/Navbar/NavbarLogo";
import { NavbarNavLink } from "@/components/Navbar/NavbarNavLink";
import { NavbarOverlay } from "@/components/Navbar/NavbarOverlay";
import { NavbarMobileMenu } from "@/components/Navbar/NavbarMobileMenu";
import { cn } from "@/utils";
import type { NavbarMenuProps } from "./NavbarMenu.types";
import Image from "next/image";

export function NavbarMenu({ className }: NavbarMenuProps) {
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
                    "fixed top-0 left-0 right-0  transition-all duration-500 ease-in-out bg-background-alt",
                    isAtTop ? "pt-2 z-800" : "pt-0 z-950",
                    !isNavbarVisible && !isAtTop
                        ? "-translate-y-full opacity-0"
                        : "translate-y-0 opacity-100",
                    className,
                )}
            >
                <div className="relative">
                    {/* background */}
                    <Image
                        src="/navbar_background_2.png"
                        alt="fondo de la barra de busqueda"
                        height={200}
                        width={1280}
                        className="rotate-180 absolute top-99/100 left-0 w-full h-full"
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
