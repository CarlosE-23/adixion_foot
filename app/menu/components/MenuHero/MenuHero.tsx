"use client";

import Image from "next/image";

export function MenuHero() {
    return (
        <div className="w-full h-[50vh] lg:h-[70vh] relative z-0">
            <Image
                src="/banner_background_2.png"
                alt="fondo del banner del menu"
                width={1250}
                height={640}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="w-full h-[40vh] lg:h-[60vh] relative">
                <Image
                    src="/banner_letter_2.png"
                    alt="Image de frase Nuestro Menu "
                    width={1200}
                    height={700}
                    className="absolute z-100 w-60 lg:w-150 top-20 lg:top-30 left-0 lg:left-30 object-contain"
                />
                <Image
                    src="/banner_image_2.png"
                    alt="Image de frase Nuestro Menu "
                    width={1200}
                    height={900}
                    className="absolute w-80 lg:w-250 bottom-0 -right-10 lg:right-30 object-contain z-900 rotate-10"
                />
            </div>
        </div>
    );
}
