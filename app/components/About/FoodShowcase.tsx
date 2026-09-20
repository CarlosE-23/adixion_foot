"use client";

import { useScrollProgress } from "@/hooks";
import Image from "next/image";
import { useRef } from "react";

export function FoodShowcase() {
    const ref = useRef<HTMLDivElement | null>(null);
    const { progress } = useScrollProgress(ref);

    const hamburguesaStyle = {
        transform: `rotate(${(progress / 100) * 2}deg)`,
    };

    const perroCalienteStyle = {
        transform: `rotate(${(progress / 100) * -15}deg)`,
    };

    const polloStyle = {
        transform: `rotate(${(progress / 100) * -12}deg)`,
    };

    return (
        <div
            ref={ref}
            className="relative w-full h-40 lg:h-125 flex items-center justify-center z-10"
        >
            <Image
                src="/hamburguesa/hamburguesa_1.png"
                alt="Hamburguesa"
                width={550}
                height={550}
                className="absolute hidden xl:block w-35 md:w-125 object-contain z-20 translate-x-24 md:translate-x-50 translate-y-36 duration-1200"
                style={hamburguesaStyle}
            />
            <Image
                src="/perro_caliente/perro_caliente_1.png"
                alt="Perro caliente"
                width={500}
                height={500}
                className="absolute top-0 w-55 md:w-125 z-10 translate-x-26 md:translate-x-50 translate-y-20 md:translate-y-0 xl:-translate-y-26 duration-1200"
                style={perroCalienteStyle}
            />
            <Image
                src="/pollo/pollo_1.png"
                alt="Pollo frito"
                width={580}
                height={580}
                className="absolute md:top-0 xl:top-10 w-55 md:w-125 -translate-x-24 md:-translate-x-60 duration-1200"
                style={polloStyle}
            />
        </div>
    );
}
