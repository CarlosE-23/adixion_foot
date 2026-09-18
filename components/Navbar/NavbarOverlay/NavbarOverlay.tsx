import { cn } from "@/utils";
import type { NavbarOverlayProps } from "./NavbarOverlay.types";

export function NavbarOverlay({ isOpen, onClose }: NavbarOverlayProps) {
  return (
    <div
      onClick={onClose}
      className={cn(
        "fixed inset-0 bg-black/60 z-60 transition-opacity duration-300 md:hidden",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible",
      )}
      aria-hidden="true"
    />
  );
}
