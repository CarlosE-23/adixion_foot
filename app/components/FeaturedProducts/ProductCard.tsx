import Image from "next/image";
import { FeaturedProduct } from "./FeaturedProducts.types";

interface ProductCardProps {
    product: FeaturedProduct;
    isLast: boolean;
}

export function ProductCard({ product, isLast }: ProductCardProps) {
    return (
        <div className="shrink-0 max-h-100 lg:max-h-129 w-full md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] rounded-2xl overflow-hidden shadow-secundary transition-shadow duration-300 snap-start flex flex-col relative">
            <div className="relative h-[60%] bg-surface flex items-center justify-center p-4">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={240}
                    height={200}
                    className="object-contain h-full w-auto"
                    priority={false}
                />
            </div>
            <div className="bg-primary-100 px-5 py-4 h-[40%] flex flex-col justify-between">
                <h3 className="text-primary-dark text-xl font-heading">
                    {product.name}
                </h3>
                <div className="flex items-center justify-between mt-3">
                    <a
                        href={`https://wa.me/584146822025?text=Hola, quiero pedir ${product.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-surface px-8 py-3 rounded-full text-2xl hover:bg-primary-dark transition-colors duration-200 font-heading"
                    >
                        Comprar
                    </a>
                    <span className="text-primary font-bold font-display text-xl">
                        {product.price}
                    </span>
                </div>
            </div>

            {isLast && (
                <div
                    className="absolute inset-y-0 right-0 pointer-events-none"
                    style={{
                        width: "15%",
                        background:
                            "linear-gradient(to right, transparent, rgba(28, 16, 23, 0.45))",
                    }}
                />
            )}
        </div>
    );
}
