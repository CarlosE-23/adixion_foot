import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  as?: "button" | "a";
}

export type ButtonProps = ButtonBaseProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string })
  );

export interface ButtonStyles {
  base: string;
  variants: Record<ButtonVariant, string>;
  sizes: Record<ButtonSize, string>;
}
