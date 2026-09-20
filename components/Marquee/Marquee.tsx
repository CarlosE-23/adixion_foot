import Image from "next/image";
import { marqueeItems } from "./Marquee.data";

export function Marquee() {
    return (
        <div className="overflow-hidden mt-16">
            <div className="animate-marquee whitespace-nowrap inline-flex items-center justify-center gap-8 flex-nowrap">
                <div className="flex items-center justify-center gap-8 w-fit">
                    {marqueeItems.map((item, index) => (
                        <div
                            key={index}
                            className="mx-4 flex items-center justify-center gap-4"
                        >
                            <Image
                                src={item.image}
                                alt={item.label}
                                width={50}
                                height={100}
                                className="object-contain"
                            />
                            <span className="text-2xl lg:text-3xl font-black">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-8 w-fit">
                    {marqueeItems.map((item, index) => (
                        <div
                            key={index}
                            className="mx-4 flex items-center justify-center gap-4"
                        >
                            <Image
                                src={item.image}
                                alt={item.label}
                                width={50}
                                height={100}
                                className="object-contain"
                            />
                            <span className="text-2xl lg:text-3xl font-black">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
