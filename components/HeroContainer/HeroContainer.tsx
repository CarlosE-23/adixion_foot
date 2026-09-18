import { HeroContainerProps } from "./HeroContainer.types";

export function HeroContainer(props: HeroContainerProps) {
    const { children, refBanner } = props;

    return (
        <div
            ref={refBanner}
            className="h-screen flex-col flex justify-center items-center p-2 md:p-4 lg:p-8 pt-16 md:pt-16 lg:pt-16 overflow-hidden"
        >
            <div className="relative bg-background-alt w-full h-full rounded-[2.8rem] rounded-tl-none">
                <div className="absolute bottom-99/100 left-0 w-1/2 lg:w-60 h-10 bg-background-alt rounded-t-[2.8rem]"></div>
                {children}
            </div>
        </div>
    );
}
