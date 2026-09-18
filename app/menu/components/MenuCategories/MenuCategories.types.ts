export interface Category {
  id: string;
  label: string;
  icon: string;
}

export interface MenuCategoriesProps {
  categories: Category[];
  activeCategory: string;
  onSelect: (categoryId: string) => void;
  className?: string;
}
