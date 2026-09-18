import { BadgeProps } from "./Badge.types";

const variants = {
  primary: "bg-primary text-white",
  secondary: "bg-primary-100 text-primary-dark",
  outline: "border border-primary text-primary bg-transparent",
};

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center rounded-full font-semibold
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
