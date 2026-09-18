import { CardProps } from "./Card.types";

const paddings = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={`
        bg-surface rounded-[var(--card-radius)] shadow-card
        ${hover ? "hover:shadow-card-hover transition-shadow duration-300" : ""}
        ${paddings[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
