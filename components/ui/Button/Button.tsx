import { forwardRef } from "react";
import { ButtonProps } from "./Button.types";

const variantStyles = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-button hover:shadow-lg",
  secondary:
    "bg-primary-100 text-primary-dark hover:bg-primary-200",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "text-primary hover:bg-primary-50",
  whatsapp:
    "bg-whatsapp text-white hover:bg-green-600 shadow-lg",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      as = "button",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const classes = [
      "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 cursor-pointer font-[family-name:var(--font-heading)]",
      variantStyles[variant],
      sizeStyles[size],
      fullWidth ? "w-full" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    if (as === "a") {
      const { href, ...anchorProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} {...anchorProps}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
