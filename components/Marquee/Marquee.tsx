import { marqueeText } from "./Marquee.data";

export function Marquee() {
    const repeatedText = marqueeText.repeat(4);

    return (
        <div className="overflow-hidden my-6">
            <div className="animate-marquee whitespace-nowrap">
                <span className="text-text text-xl md:text-2xl font-bold font-display tracking-wider">
                    {repeatedText}
                </span>
                <span className="text-text text-xl md:text-2xl font-bold font-display tracking-wider">
                    {repeatedText}
                </span>
            </div>
        </div>
    );
}
