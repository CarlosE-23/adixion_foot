import { FoodShowcase } from "./FoodShowcase";

export function About() {
    return (
        <section className="overflow-hidden flex flex-col-reverse xl:flex-row justify-center items-center py-26 px-4 lg:px-8">
            <div className="w-full">
                <FoodShowcase />
            </div>
            <div className="relative z-100 w-full flex flex-col justify-center xl:items-start gap-2 md:gap-4">
                <h2 className="w-full text-text text-6xl md:text-7xl lg:text-9xl tracking-wider font-black font-heading">
                    BIENBENIDOS <br className="md:hidden lg:block" /> A ADIXION
                </h2>
                <p className="text-xl md:text-2xl text-text-tertiary font-medium font-header">
                    Desde 2025, hemos estado conquistando los corazones y
                    paladares de cada habitante. Hoy, con nuestro restaurante en
                    Coro, seguimos innovando y revolucionando la forma en la que
                    se come y se disfruta la mejor comida rapida.
                </p>
                <button className="w-fit mt-4 bg-background-alt rounded-[2.8rem] p-4 lg:p-6 px-24 text-xl md:text-3xl text-text-secondary font-black font-heading">
                    ¡ORDENA AHORA!
                </button>
            </div>
        </section>
    );
}
