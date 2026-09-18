import { ReactNode } from "react";

type BadgeVariant = "primary" | "secondary" | "outline";
type BadgeSize = "sm" | "md";

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

export interface BadgeStyles {
  variants: Record<BadgeVariant, string>;
  sizes: Record<BadgeSize, string>;
}
