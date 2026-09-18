"use client";

import { AccordionItemProps } from "./FrequentlyAskedQuestions.types";

export function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
    const panelId = `faq-panel-${item.id}`;
    const buttonId = `faq-button-${item.id}`;

    return (
        <div
            className={
                "border-4 border-border-dark rounded-3xl transition-all duration-300 shadow-solid"
            }
        >
            <div className="w-full flex items-center justify-between p-5 md:p-6 text-left group">
                <h3 className="text-border-dark lg:font-black text-2xl md:text-5xl font-heading uppercase pr-4 leading-snug">
                    {item.question}
                </h3>
                <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={onToggle}
                    className="cursor-pointer"
                >
                    <span
                        className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#7B1F1F] flex items-center justify-center transition-transform duration-300 shadow-solid ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="#7B1F1F"
                            className="w-5 h-5 md:w-6 md:h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </span>
                </button>
            </div>
            <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="accordion-content"
                data-open={isOpen}
            >
                <div>
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm leading-relaxed sm:text-2xl text-text-tertiary font-medium font-header">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
}
