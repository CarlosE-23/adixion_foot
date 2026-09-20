"use client";

import Image from "next/image";
import { benefits } from "./Benefits.data";
import { cn } from "@/utils";

export function Benefits() {
    return (
        <section className="min-h-screen xl:min-h-min flex justify-center items-center relative bg-background overflow-hidden">
            {/* Font */}
            <Image
                src="/benefits_background.png"
                alt="benefits background"
                width={1280}
                height={860}
                className="hidden lg:block w-full h-1/2 object-fill absolute z-0 left-0 -translate-y-1/2 top-1/2"
            />

            {/* Pink blob - top right */}
            <div
                className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20 pointer-events-none hidden lg:block"
                style={{
                    background:
                        "radial-gradient(circle, #e91e8c 0%, transparent 70%)",
                }}
            />

            <div className="w-full mx-auto px-4 sm:px-6 lg:px-16 py-16 lg:py-24 relative z-10 justify-center">
                <div className="grid lg:grid-cols-[3fr_2fr] 2xl:grid-cols-[3.5fr_2fr] gap-12 lg:gap-16 items-center">
                    {/* Left column - Promo composition */}
                    <div className="relative w-full flex justify-center items-center h-full">
                        <Image
                            src="/benefits_image.png"
                            alt="llego la"
                            width={440}
                            height={300}
                            className="z-10 w-full object-contain"
                        />
                        <Image
                            src="/benefits_background.png"
                            alt="benefits background"
                            width={1280}
                            height={860}
                            className="max-w-none lg:hidden w-12/10 h-3/4 object-fill absolute z-0 left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2"
                        />
                    </div>

                    {/* Right column - Benefits panel */}
                    <div className="bg-primary-50 border-4 border-primary rounded-[2.8rem] p-4 lg:p-10 2xl:p-18 2xl:px-8 shadow-solid">
                        <div className="flex flex-col gap-4 lg:gap-4 2xl:gap-14">
                            {benefits.map((benefit) => {
                                return (
                                    <div
                                        key={benefit.title}
                                        className="flex gap-4 items-start"
                                    >
                                        <div className="shrink-0 w-2/10">
                                            <Image
                                                src={benefit.icon}
                                                alt={benefit.title}
                                                width={250}
                                                height={250}
                                                className={cn(
                                                    "object-contain animate-rotation",
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-lg lg:text-2xl text-primary font-heading">
                                                {benefit.title}
                                            </h4>
                                            <p className="text-sm lg:text-lg text-text-tertiary font-medium font-header">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
