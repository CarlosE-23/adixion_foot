import Image from "next/image";
import { HeroContainerProps } from "./HeroContainer.types";

export function HeroContainer(props: HeroContainerProps) {
    const { children, refBanner } = props;

    return (
        <div ref={refBanner} className="h-[70vh] lg:h-[90vh] relative">
            <Image
                src="/banner_background_1.png"
                alt="fondo del banner del menu"
                width={1250}
                height={640}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="relative w-full h-full rounded-[2.8rem] rounded-tl-none">
                {children}
            </div>
        </div>
    );
}
