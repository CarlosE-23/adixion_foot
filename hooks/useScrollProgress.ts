"use client";

import { useState, useEffect } from "react";

interface UseScrollProgressOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number;
    direction?: "top" | "bottom";
}

interface UseScrollProgressReturn {
    progress: number;
    isVisible: boolean;
    intersectionRatio: number;
}

const THRESHOLD_STEPS = 100;

export function useScrollProgress(
    ref: React.RefObject<HTMLElement | null>,
    options: UseScrollProgressOptions = {},
): UseScrollProgressReturn {
    const {
        root = null,
        rootMargin = "0px",
        threshold = 0.5,
        direction,
    } = options;

    const [state, setState] = useState<UseScrollProgressReturn>({
        progress: 0,
        isVisible: false,
        intersectionRatio: 0,
    });

    useEffect(() => {
        if (typeof window === "undefined") return;
        const currentRef = ref.current;

        if (!currentRef) return;

        const steps = Array.from(
            { length: THRESHOLD_STEPS + 1 },
            (_, i) => i / THRESHOLD_STEPS,
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const ratio = entry.intersectionRatio;
                    const isVisible = ratio > 0;

                    let progress = 0;
                    if (ratio >= threshold) {
                        progress =
                            ((ratio - threshold) / (1 - threshold)) * 100;
                        progress = Math.min(100, Math.max(0, progress));
                    }

                    if (!direction) {
                        setState({
                            progress,
                            isVisible,
                            intersectionRatio: ratio,
                        });
                        return;
                    }

                    const scrollY = window.scrollY;
                    const viewportBottom = scrollY + window.innerHeight;
                    const rect = currentRef.getBoundingClientRect();

                    const elementAbsoluteTop = rect.top + scrollY;
                    const elementAbsoluteBottom = rect.bottom + scrollY;

                    if (direction === "top") {
                        // El borde superior del elemento ya pasó por encima del viewport
                        const passed = elementAbsoluteTop < scrollY;

                        setState({
                            progress: passed ? 100 : progress,
                            isVisible: passed ? true : isVisible,
                            intersectionRatio: ratio,
                        });
                        return;
                    }

                    if (direction === "bottom") {
                        // El borde inferior del elemento ya pasó por debajo del viewport
                        const passed = elementAbsoluteBottom > viewportBottom;

                        setState({
                            progress: passed ? 100 : progress,
                            isVisible: passed ? true : isVisible,
                            intersectionRatio: ratio,
                        });
                        return;
                    }
                });
            },
            {
                root,
                rootMargin,
                threshold: steps,
            },
        );

        observer.observe(currentRef);

        return () => {
            observer.unobserve(currentRef);
            observer.disconnect();
        };
    }, [ref, root, rootMargin, threshold, direction]);

    return state;
}
