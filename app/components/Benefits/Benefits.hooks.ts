"use client";

import { useScrollProgress } from "@/hooks";
import { useRef, useMemo } from "react";

export function useBenefitsAnimations() {
    const refSection = useRef<HTMLDivElement | null>(null);
    const { progress } = useScrollProgress(refSection, {
        threshold: 0.05,
        direction: "top",
    });

    const titleStyle = useMemo(
        () => ({
            opacity: progress / 100,
            transform: `translateX(${-(progress - 100)}px)`,
        }),
        [progress],
    );

    const imageStyle = useMemo(
        () => ({
            transform: `translateY(${(progress - 100) * 0.5}px)`,
        }),
        [progress],
    );

    const panelStyle = useMemo(
        () => ({
            opacity: progress / 100,
            transform: `translateX(${progress - 100}px)`,
        }),
        [progress],
    );

    const getBenefitStyle = useMemo(() => {
        return (index: number) => ({
            opacity: Math.max(0, (progress - 20 - index * 15) / 60),
            transform: `translateY(${Math.max(0, (progress - 20 - index * 15) * -0.3)}px)`,
        });
    }, [progress]);

    const decorStyle = useMemo(
        () => ({
            opacity: progress / 150,
        }),
        [progress],
    );

    return {
        refSection,
        progress,
        titleStyle,
        imageStyle,
        panelStyle,
        getBenefitStyle,
        decorStyle,
    };
}
