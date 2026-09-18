import { FoodShowcase } from "./FoodShowcase";

export function About() {
    return (
        <section className="overflow-hidden min-h-screen flex flex-col-reverse lg:flex-row justify-center items-center px-2 lg:px-8">
            <div className="w-full">
                <FoodShowcase />
            </div>
            <div className="relative z-100 w-full flex flex-col justify-center items-center lg:items-start gap-2 md:gap-4">
                <h2 className=" text-text text-6xl md:text-7xl lg:text-9xl font-black font-heading text-center lg:text-left">
                    BIENBENIDO <br className="md:hidden lg:block" /> A ADIXION
                </h2>
                <p className="text-xl md:text-2xl text-center lg:text-left text-text-tertiary font-medium font-header">
                    Desde 2025, hemos estado conquistando los corazones y
                    paladares de cada habitante. Hoy, con nuestro restaurante en
                    Coro, seguimos innovando y revolucionando la forma en la que
                    se come y se disfruta la mejor comida rapida.
                </p>
                <button className="w-full md:w-fit bg-background-alt rounded-[2.8rem] p-3 lg:p-6 px-12 text-xl md:text-3xl text-text-secondary font-black font-heading">
                    ¡ORDENA AHORA!
                </button>
            </div>
        </section>
    );
}
