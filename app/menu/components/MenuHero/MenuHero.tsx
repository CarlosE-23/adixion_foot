"use client";

import Image from "next/image";
import { useRef } from "react";

import { HeroContainer } from "@/components/HeroContainer";
import { useScrollProgress } from "@/hooks";

export function MenuHero() {
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
            <div className="w-full h-full flex flex-row items-center relative overflow-hidden justify-end">
                <div
                    style={textStyle}
                    className="w-8/10  xl:w-5/10 relative z-10 flex flex-col h-8/10 md:h-full px-2 lg:px-8 xl:px-20 justify-center lg:items-start"
                >
                    <h1 className="text-text-secondary text-6xl md:text-7xl lg:text-9xl font-black mb-2 font-heading text-left">
                        DESCUBRE NUESTRO MENÚ
                    </h1>
                    <button className="bg-background rounded-[2.8rem] p-2 md:p-6 px-4 text-2xl md:text-3xl text-text font-black font-heading w-fit">
                        ¡ORDENA AHORA!
                    </button>
                </div>
                <div className="relative w-2/10 md:w-5/10 h-1/2 md:h-full">
                    <Image
                        src={"/banner_image_2.png"}
                        alt="pollo frito"
                        width={1500}
                        height={1000}
                        className="block max-w-none absolute top-15 md:top-40 xl:top-0 -right-5 md:right-1/2 xl:-right-10 md:translate-x-4/10 xl:translate-x-0 ease-in-out transition-all duration-600 w-70 md:w-220 xl:w-[1700] h-80 md:h-110 lg:h-[600] xl:h-[900] md:object-contain"
                        style={imageStyle}
                    />
                </div>
            </div>
        </HeroContainer>
    );
}
