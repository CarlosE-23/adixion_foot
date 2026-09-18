"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { NavbarContext } from "@/components/Navbar";

export function useNavbar(): NavbarContext {
  const [scrollState, setScrollState] = useState({
    isAtTop: true,
    isNavbarVisible: true,
    scrollY: 0,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prevScrollY = useRef(0);
  const ticking = useRef(false);
  const prevIsAtTop = useRef(true);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const isAtTop = currentScrollY <= 10;
          const isScrollingDown = currentScrollY > prevScrollY.current;
          const isNavbarVisible = isAtTop || !isScrollingDown;

          prevScrollY.current = currentScrollY;

          setScrollState({ isAtTop, isNavbarVisible, scrollY: currentScrollY });

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollState.isAtTop && !prevIsAtTop.current) {
      letterRefs.current.forEach((el) => {
        if (el) {
          el.classList.remove("animate-letter-jump");
          void el.offsetWidth;
          el.classList.add("animate-letter-jump");
        }
      });
    }
    prevIsAtTop.current = scrollState.isAtTop;
  }, [scrollState.isAtTop]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu();
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  return {
    ...scrollState,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
}
