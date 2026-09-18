import Image from "next/image";
import { MenuItemCardProps } from "./MenuItemCard.types";

export function MenuItemCard({ item }: MenuItemCardProps) {
    return (
        <div className="relative bg-background-card border border-primary-100 rounded-3xl shadow-md overflow-hidden flex items-center h-full">
            {/* Image block */}
            <div className="relative w-2/5 min-h-35 flex items-center justify-center p-4 shrink-0">
                {/* Decorative background */}
                <Image
                    src="/foot_background_2.png"
                    alt=""
                    aria-hidden="true"
                    fill
                    className="object-contain opacity-60 z-0"
                    sizes="(max-width: 768px) 40vw, 20vw"
                />
                {/* Product image */}
                <Image
                    src={item.image}
                    alt={item.name}
                    width={160}
                    height={160}
                    className="relative z-10 w-full max-w-35 h-auto object-contain drop-shadow-lg"
                    sizes="(max-width: 768px) 35vw, 18vw"
                />
            </div>

            {/* Info block */}
            <div className="flex flex-col flex-1 p-4 gap-1.5 min-w-0">
                <h3 className="text-primary font-bold text-lg font-header leading-tight truncate">
                    {item.name}
                </h3>
                <p className="text-text-tertiary text-xs leading-relaxed line-clamp-2">
                    {item.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-2">
                    <span className="text-primary font-light text-2xl font-heading">
                        ${item.price.toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
}
