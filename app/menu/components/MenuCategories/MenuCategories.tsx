"use client";

import { cn } from "@/utils";
import { MenuCategoriesProps } from "./MenuCategories.types";
import {
    LayoutGrid,
    Sandwich,
    Beef,
    Drumstick,
    UtensilsCrossed,
    CupSoda,
    type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    grid: LayoutGrid,
    hotdog: Sandwich,
    burger: Beef,
    chicken: Drumstick,
    plate: UtensilsCrossed,
    drink: CupSoda,
};

export function MenuCategories({
    categories,
    activeCategory,
    onSelect,
}: MenuCategoriesProps) {
    return (
        <section className="py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={cn(
                        "bg-background-card flex flex-wrap  justify-between lg:justify-center items-center gap-2 py-3 px-2",
                        "rounded-[2.8rem]",
                        "shadow-card overflow-x-auto scrollbar-none",
                    )}
                >
                    {categories.map((category) => {
                        const isActive = activeCategory === category.id;
                        const Icon = iconMap[category.icon];

                        return (
                            <button
                                key={category.id}
                                onClick={() => onSelect(category.id)}
                                aria-pressed={isActive}
                                aria-label={category.label}
                                className={cn(
                                    "inline-flex flex-col justify-center items-center gap-2 shrink-0",
                                    "px-4 py-2 rounded-[100%] aspect-square",
                                    "text-sm font-bold font-header",
                                    "transition-all duration-200 cursor-pointer",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                                    isActive
                                        ? "bg-primary text-text-secondary shadow-button"
                                        : "bg-transparent text-primary",
                                )}
                            >
                                <div
                                    className={cn(
                                        "",
                                        isActive
                                            ? ""
                                            : " border rounded-[100%] p-4 hover:shadow-light",
                                    )}
                                >
                                    {Icon && (
                                        <Icon
                                            size={18}
                                            strokeWidth={2}
                                            className={cn(
                                                "transition-colors duration-200",
                                                isActive
                                                    ? "text-text-secondary"
                                                    : "text-text",
                                            )}
                                        />
                                    )}
                                </div>
                                <span>{category.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
