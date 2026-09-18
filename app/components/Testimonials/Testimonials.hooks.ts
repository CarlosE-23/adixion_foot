"use client";

import { useRef, useState, useCallback, useEffect } from "react";

const CARD_GAP = 24;

function getCardStep(container: HTMLDivElement): number {
    const firstCard = container.firstElementChild as HTMLElement | null;
    if (!firstCard) return 0;
    return firstCard.getBoundingClientRect().width + CARD_GAP;
}

export function useCarousel(totalCards: number) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToCard = useCallback((index: number) => {
        if (!containerRef.current) return;
        const step = getCardStep(containerRef.current);
        containerRef.current.scrollTo({
            left: index * step,
            behavior: "smooth",
        });
    }, []);

    const handlePrev = useCallback(() => {
        setActiveIndex((prev) => {
            const next = Math.max(0, prev - 1);
            scrollToCard(next);
            return next;
        });
    }, [scrollToCard]);

    const handleNext = useCallback(() => {
        setActiveIndex((prev) => {
            const container = containerRef.current;
            if (!container) return prev;
            const step = getCardStep(container);
            const visibleCards = Math.floor(container.clientWidth / step) || 1;
            const maxIndex = Math.max(0, totalCards - visibleCards);
            const next = Math.min(maxIndex, prev + 1);
            scrollToCard(next);
            return next;
        });
    }, [scrollToCard, totalCards]);

    const handleDotClick = useCallback(
        (index: number) => {
            setActiveIndex(index);
            scrollToCard(index);
        },
        [scrollToCard],
    );

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const step = getCardStep(container);
            if (step === 0) return;
            const newIndex = Math.round(container.scrollLeft / step);
            const visibleCards = Math.floor(container.clientWidth / step) || 1;
            const maxIndex = Math.max(0, totalCards - visibleCards);
            setActiveIndex(Math.min(maxIndex, Math.max(0, newIndex)));
        };

        container.addEventListener("scroll", handleScroll, { passive: true });
        return () => container.removeEventListener("scroll", handleScroll);
    }, [totalCards]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                e.preventDefault();
                handlePrev();
            } else if (e.key === "ArrowRight") {
                e.preventDefault();
                handleNext();
            }
        };

        container.addEventListener("keydown", handleKeyDown);
        return () => container.removeEventListener("keydown", handleKeyDown);
    }, [handlePrev, handleNext]);

    return {
        activeIndex,
        totalCards,
        containerRef,
        handlePrev,
        handleNext,
        handleDotClick,
    };
}
