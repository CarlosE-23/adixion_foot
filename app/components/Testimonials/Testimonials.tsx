"use client";

import { useCarousel } from "./Testimonials.hooks";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "./Testimonials.data";

export function Testimonials() {
    const { activeIndex, totalCards, containerRef, handlePrev, handleNext } =
        useCarousel(testimonials.length);

    return (
        <section className="min-h-screen relative bg-background-alt overflow-hidden py-20 md:py-28">
            {/* Wave / curved beige top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg
                    className="relative block w-full h-20 md:h-30"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#F8E7F3"
                        d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,120L0,120Z"
                    />
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    className="relative block w-full h-20 md:h-30"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#F8E7F3"
                        d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,120L0,120Z"
                    />
                </svg>
            </div>

            {/* Watermark silhouette */}
            <div className="absolute top-0 right-0 w-75 md:w-md lg:w-137 h-full pointer-events-none opacity-10">
                <svg
                    viewBox="0 0 400 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    <ellipse
                        cx="200"
                        cy="140"
                        rx="90"
                        ry="110"
                        fill="#F5E6C8"
                    />
                    <path
                        d="M100,280 Q100,220 140,200 Q160,190 200,185 Q240,190 260,200 Q300,220 300,280 L300,450 Q300,480 270,480 L130,480 Q100,480 100,450 Z"
                        fill="#F5E6C8"
                    />
                </svg>
            </div>

            <div className="px-6 md:px-16 relative z-10">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-text-secondary font-heading uppercase tracking-wide">
                        TESTIMONIOS
                    </h2>

                    {/* Arrow controls */}
                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            onClick={handlePrev}
                            disabled={activeIndex === 0}
                            aria-label="Anterior testimonio"
                            className="w-14 h-14 rounded-full bg-background disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 hover:scale-110"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-text"
                            >
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={activeIndex >= totalCards - 4}
                            aria-label="Siguiente testimonio"
                            className="w-14 h-14 rounded-full bg-background hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-text"
                            >
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={containerRef}
                    role="region"
                    aria-label="Carrusel de testimonios"
                    tabIndex={0}
                    className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
                    style={{ scrollbarWidth: "none" }}
                >
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
