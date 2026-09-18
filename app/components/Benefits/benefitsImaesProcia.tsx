import Image from "next/image";

export function BenefitsImages() {
    return (
        <>
            <Image
                src="/benefits_letter_0.png"
                alt="llego la"
                width={440}
                height={300}
                className="absolute z-10 -translate-y-53 -translate-x-30 -rotate-3"
            />
            <Image
                src="/benefits_letter_1.png"
                alt="llego la"
                width={130}
                height={300}
                className="absolute -translate-y-55 translate-x-50 rotate-4"
            />
            <Image
                src="/benefits_letter_2.png"
                alt="Nueva"
                width={400}
                height={300}
                className="absolute z-10 -translate-y-15 translate-x-20 -rotate-3"
            />
            <Image
                src="/benefits_letter_3.png"
                alt="era"
                width={180}
                height={300}
                className="absolute translate-y-15 translate-x-55 -rotate-10"
            />
            <Image
                src="/benefits_letter_4.png"
                alt="era"
                width={50}
                height={300}
                className="absolute translate-y-35 translate-x-75 rotate-15"
            />
            <Image
                src="/logo.png"
                alt="era"
                width={450}
                height={300}
                className="absolute translate-y-55 translate-x-75 -rotate-2"
            />
            <Image
                src="/pollo_2.png"
                alt="polo frito"
                width={50}
                height={300}
                className="absolute translate-y-25 translate-x-95 rotate-10 scale-x-[-1]"
            />
            <Image
                src="/papas_1.png"
                alt="papas fritas"
                width={50}
                height={300}
                className="absolute translate-y-18 translate-x-85 rotate-50 scale-x-[-1]"
            />
            <Image
                src="/coca_cola_2.png"
                alt="coca cola"
                width={100}
                height={300}
                className="absolute translate-y-34 translate-x-30 -rotate-10"
            />
            <Image
                src="/perro_caliente_3.png"
                alt="perro caliente"
                width={780}
                height={300}
                className="absolute translate-y-0 -translate-x-70 rotate-10 scale-x-[-1]"
            />
        </>
    );
}
