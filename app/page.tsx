import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { About } from "./components/About";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { FrequentlyAskedQuestions } from "./components/FrequentlyAskedQuestions";
import Image from "next/image";
export default function Home() {
    return (
        <>
            <Hero />
            <main className="flex-1 relative z-10 -translate-y-10">
                <Image
                    src="/shape_divider_2.png"
                    alt="fondo de la barra de busqueda"
                    height={10000}
                    width={1280}
                    className="absolute z-2 bottom-99/100 translate-y-1 left-0 w-full h-38 fill"
                />

                <Marquee />
                <About />
                <FeaturedProducts />
                <Benefits />
                <Testimonials />
                <FrequentlyAskedQuestions />
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
