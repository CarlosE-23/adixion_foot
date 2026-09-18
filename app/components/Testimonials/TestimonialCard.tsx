import Image from "next/image";
import { Testimonial } from "./Testimonials.types";

interface TestimonialCardProps {
    testimonial: Testimonial;
}

function StarIcon({ filled }: { filled: boolean }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-6 h-6 ${filled ? "text-text" : "text-orange-300"}`}
        >
            <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function QuoteIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-text"
        >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Z" />
        </svg>
    );
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <div className="shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-background rounded-3xl p-8 flex flex-col snap-start shadow-lg relative">
            {/* Stars */}
            <div className="flex justify-end gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} filled={i < testimonial.rating} />
                ))}
            </div>

            {/* Quote icon */}
            <QuoteIcon />

            {/* Testimonial text */}
            <p className="text-text-tertiary text-base leading-relaxed mt-4 flex-1 font-medium">
                &ldquo;{testimonial.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 mt-6">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-background-alt shrink-0 relative">
                    <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                    />
                </div>
                <span className="text-[#7B1F1F] font-bold text-lg font-headind">
                    {testimonial.name}
                </span>
            </div>
        </div>
    );
}
