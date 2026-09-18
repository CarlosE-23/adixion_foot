import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { About } from "./components/About";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { FrequentlyAskedQuestions } from "./components/FrequentlyAskedQuestions";
import { NavbarHome } from "./components/NavbarHome";

export default function Home() {
    return (
        <>
            <main className="flex-1">
                <NavbarHome />
                <Hero />
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
