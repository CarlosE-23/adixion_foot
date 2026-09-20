"use client";

import { useScrollProgress } from "@/hooks";
import { useRef, useState } from "react";
import Image from "next/image";
import { faqs } from "./FrequentlyAskedQuestions.data";
import { AccordionItem } from "./AccordionItem";

export function FrequentlyAskedQuestions() {
    const refTitle = useRef<HTMLDivElement | null>(null);
    const refSection = useRef<HTMLDivElement | null>(null);
    const { progress: titleProgress } = useScrollProgress(refTitle, {
        threshold: 0.1,
        direction: "top",
    });
    const { progress: imageProgress } = useScrollProgress(refSection, {
        threshold: 0.3,
        direction: "top",
    });

    const [openIds, setOpenIds] = useState<Set<number>>(new Set());

    const toggleAccordion = (id: number) => {
        setOpenIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    const titleStyle = {
        opacity: titleProgress / 100,
        transform: `translateX(${titleProgress - 100}px)`,
    };

    const hotDogStyle = {
        opacity: imageProgress / 100,
        transform: `translateY(${-(imageProgress - 100)}%)`,
    };

    const chickendStyle = {
        opacity: imageProgress / 100,
        transform: `translateX(${-(imageProgress - 100)}%)`,
    };

    return (
        <section ref={refSection} className="overflow-hidden relative">
            <div className="px-4 md:px-16 py-16 md:py-24 relative z-10">
                <div className="grid xl:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
                    {/* Left column - Title + decorative image */}
                    <div className="relative">
                        <h2
                            ref={refTitle}
                            style={titleStyle}
                            className="text-center lg:text-left text-6xl sm:text-6xl lg:text-8xl font-black font-heading text-text leading-[0.9] uppercase"
                        >
                            PREGUNTAS
                            <br />
                            FRECUENTES
                        </h2>

                        {/* Decorative chicken image */}
                        <div className="relative hidden xl:block">
                            <Image
                                src="/perro_caliente/perro_caliente_3.png"
                                alt="Pieza de perro caliente decorativa"
                                width={620}
                                height={220}
                                style={hotDogStyle}
                                className="relative transition-all duration-700 rotate-10 scale-x-[-1] translate-x-30"
                            />
                            <Image
                                src="/pollo/pollo_3.png"
                                alt="Pieza de pollo frito decorativa"
                                width={620}
                                height={220}
                                style={chickendStyle}
                                className="relative transition-all duration-700 rotate-170 -translate-x-30 -translate-y-40"
                            />
                        </div>
                    </div>

                    {/* Right column - Accordion items */}
                    <div className="flex flex-col gap-8 md:gap-5">
                        {faqs.map((faq) => (
                            <AccordionItem
                                key={faq.id}
                                item={faq}
                                isOpen={openIds.has(faq.id)}
                                onToggle={() => toggleAccordion(faq.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
