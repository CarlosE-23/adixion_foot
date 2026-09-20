"use client";

import { useScrollProgress } from "@/hooks";
import { useRef } from "react";
import { useCarousel } from "./FeaturedProducts.hooks";
import { ProductCard } from "./ProductCard";
import { featuredProducts } from "./FeaturedProducts.data";

export function FeaturedProducts() {
    const refSection = useRef<HTMLDivElement | null>(null);
    const { progress } = useScrollProgress(refSection, {
        threshold: 0.05,
        direction: "top",
    });

    const {
        activeIndex,
        totalCards,
        containerRef,
        handlePrev,
        handleNext,
        handleDotClick,
    } = useCarousel(featuredProducts.length);

    const headerStyle = {
        opacity: progress / 100,
        transform: `translatex(${progress - 100}px)`,
    };

    const carouselStyle = {
        transform: `translatey(${-((progress - 100) * 2)}px)`,
    };

    return (
        <section
            ref={refSection}
            className="md:min-h-screen xl:min-h-min relative bg-primary rounded-[2.8rem] overflow-hidden mx-2 lg:mx-8"
        >
            <div className="px-8 md:px-16 py-16 relative z-10">
                {/* Header */}
                <div style={headerStyle}>
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-text-secondary font-heading leading-tight uppercase">
                        Conoce nuestros
                        <br />
                        productos destacados
                    </h2>
                    <div className="flex justify-between items-center">
                        <a
                            href="/menu"
                            className="inline-block text-text-secondary border-b-2 border-text-secondary/50 hover:border-text-secondary transition-colors duration-200 text-lg font-semibold font-heading"
                        >
                            Ver menú
                        </a>
                        {/* Arrow controls */}
                        <div className="flex justify-end gap-3 mb-6">
                            <button
                                onClick={handlePrev}
                                disabled={activeIndex === 0}
                                aria-label="Previous product"
                                className="w-12 h-12 rounded-full bg-background disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 hover:scale-110"
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
                                    className="text-primary"
                                >
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={activeIndex >= totalCards - 4}
                                aria-label="Next product"
                                className="w-12 h-12 rounded-full bg-background hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200"
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
                                    className="text-primary"
                                >
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={containerRef}
                    role="region"
                    aria-label="Featured products carousel"
                    tabIndex={0}
                    className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
                    style={{ scrollbarWidth: "none", ...carouselStyle }}
                >
                    {featuredProducts.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isLast={index === featuredProducts.length - 1}
                        />
                    ))}
                </div>

                {/* Pagination dots */}
                <div
                    className="flex justify-center gap-2 mt-8"
                    role="tablist"
                    aria-label="Carousel pagination"
                >
                    {featuredProducts.map((product, index) => (
                        <button
                            key={product.id}
                            onClick={() => handleDotClick(index)}
                            role="tab"
                            aria-selected={activeIndex === index}
                            aria-label={`Go to ${product.name}`}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                activeIndex === index
                                    ? "bg-surface scale-110"
                                    : "bg-surface/30 hover:bg-surface/50"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
