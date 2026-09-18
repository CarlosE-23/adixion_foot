export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export interface AccordionItemProps {
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
}
