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
            className="relative w-full h-125 flex items-center justify-center z-10"
        >
            <Image
                src="/hamburguesa/hamburguesa_1.png"
                alt="Hamburguesa"
                width={550}
                height={550}
                className="absolute w-90 md:w-125 object-contain z-20 translate-x-24 md:translate-x-50 -translate-y-26 md:translate-y-20 drop-shadow-2xl duration-500"
                style={hamburguesaStyle}
            />
            <Image
                src="/perro_caliente/perro_caliente_1.png"
                alt="Perro caliente"
                width={500}
                height={500}
                className="absolute w-80 md:w-125 z-10 translate-x-30 md:translate-x-36 translate-y-27 md:-translate-y-38 drop-shadow-2xl duration-500"
                style={perroCalienteStyle}
            />
            <Image
                src="/pollo/pollo_1.png"
                alt="Pollo frito"
                width={580}
                height={580}
                className="absolute w-90 md:w-125 z-30 -translate-x-30 md:-translate-x-60 drop-shadow-2xl duration-500"
                style={polloStyle}
            />
        </div>
    );
}
