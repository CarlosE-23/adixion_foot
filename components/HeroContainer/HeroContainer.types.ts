import { ReactNode, Ref } from "react";

export interface HeroContainerProps {
    children: ReactNode;
    refBanner?: Ref<HTMLDivElement>;
}
