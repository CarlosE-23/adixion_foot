import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export interface CardStyles {
  base: string;
  paddings: Record<string, string>;
}
