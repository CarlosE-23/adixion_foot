"use client";

import { useScrollProgress } from "@/hooks";
import Image from "next/image";
import { useRef } from "react";
import { HeroContainer } from "../HeroContainer";

export function Hero() {
    const refBanner = useRef<HTMLDivElement | null>(null);
    const { progress } = useScrollProgress(refBanner);

    const textStyle = {
        transform: `translateX(${-(progress - 100)}px)`,
        opacity: progress / 100,
    };

    const imageStyle = {
        transform: `translateX(${-(progress - 100)}%)`,
    };

    return (
        <HeroContainer refBanner={refBanner}>
            <div className="w-full h-full flex flex-col lg:flex-row items-center relative overflow-hidden justify-center">
                <div
                    style={textStyle}
                    className="w-[80%]relative z-10 flex justify-end items-center flex-col h-8/10 md:h-full px-2 lg:px-8 lg:justify-center lg:items-start"
                >
                    <h1 className="text-text-secondary text-6xl md:text-7xl lg:text-9xl font-black mb-8 font-heading text-center lg:text-left">
                        DESCUBRE LO QUE MAS TE GUSTA
                    </h1>
                    <button className="bg-background rounded-[2.8rem] p-4 md:p-6 px-12 text-2xl md:text-3xl text-text font-black font-heading">
                        ¡ORDENA AHORA!
                    </button>
                </div>
                <div className="w-full relative h-1/2 md:h-full">
                    <Image
                        src={"/banner_image_1.png"}
                        alt="pollo frito"
                        width={1500}
                        height={1000}
                        className="block max-w-none absolute bottom-0 right-0 md:right-1/2 lg:-right-36 md:translate-x-1/2 lg:translate-x-0 xl:right-0  ease-in-out transition-all duration-600 w-120 md:w-220 h-90 md:h-110 lg:w-[1500] lg:lg:h-[600] xl:h-[700] object-contain"
                        style={imageStyle}
                    />
                </div>
            </div>
        </HeroContainer>
    );
}
