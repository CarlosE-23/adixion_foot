"use client";

import { useState, useCallback } from "react";
import { AccordionProps } from "./Accordion.types";

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export function Accordion({
  title,
  children,
  defaultOpen = false,
  className = "",
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div
      className={`
        border border-border-light rounded-[var(--card-radius)] overflow-hidden
        ${isOpen ? "shadow-card" : ""}
        ${className}
      `}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-5 text-left bg-surface hover:bg-primary-50 transition-colors duration-200 cursor-pointer"
      >
        <span className="font-semibold text-text pr-4 font-[family-name:var(--font-heading)]">
          {title}
        </span>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <div className="accordion-content" data-open={isOpen}>
        <div>
          <div className="px-5 pb-5 text-text-secondary">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
