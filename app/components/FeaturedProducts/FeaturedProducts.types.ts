export interface FeaturedProduct {
  id: string;
  name: string;
  price: string;
  image: string;
}

export interface FeaturedProductsProps {
  className?: string;
}

export interface UseCarouselReturn {
  activeIndex: number;
  totalCards: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  handlePrev: () => void;
  handleNext: () => void;
  handleDotClick: (index: number) => void;
}
