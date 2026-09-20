"use client";

import { useState, useMemo } from "react";
import { MenuHero } from "./components/MenuHero";
import { MenuCategories, categories } from "./components/MenuCategories";
import { MenuItemCard, menuItems } from "./components/MenuItemCard";
import { Footer } from "../../components/Footer";
import { WhatsAppButton } from "../../components/WhatsAppButton";

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredItems = useMemo(() => {
        if (activeCategory === "all") return menuItems;
        return menuItems.filter((item) => item.category === activeCategory);
    }, [activeCategory]);

    const groupedItems = useMemo(() => {
        if (activeCategory !== "all") return null;
        const groups: Record<string, typeof menuItems> = {};
        menuItems.forEach((item) => {
            if (!groups[item.category]) groups[item.category] = [];
            groups[item.category].push(item);
        });
        return groups;
    }, [activeCategory]);

    const categoryLabels: Record<string, string> = {
        hotdogs: "Hot Dogs",
        burgers: "Burgers",
        pollo: "Pollo Frito",
        entradas: "Entradas",
        bebidas: "Bebidas",
    };

    return (
        <>
            <MenuHero />

            <main className="flex-1 rounded-[2.8rem] -translate-y-12 bg-background">
                <MenuCategories
                    categories={categories}
                    activeCategory={activeCategory}
                    onSelect={setActiveCategory}
                />
                <section className="py-12 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {activeCategory === "all" && groupedItems ? (
                            Object.entries(groupedItems).map(
                                ([category, items]) => (
                                    <div
                                        key={category}
                                        className="mb-12 last:mb-0"
                                    >
                                        <h2 className="text-3xl font-bold text-text mb-6 font-heading uppercase tracking-wide border-b-2 border-primary pb-2">
                                            {categoryLabels[category] ||
                                                category}
                                        </h2>
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            {items.map((item) => (
                                                <MenuItemCard
                                                    key={item.id}
                                                    item={item}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ),
                            )
                        ) : (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                {filteredItems.map((item) => (
                                    <MenuItemCard key={item.id} item={item} />
                                ))}
                            </div>
                        )}

                        {filteredItems.length === 0 && (
                            <div className="text-center py-16">
                                <p className="text-text-muted text-lg">
                                    No hay productos en esta categoría.
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
