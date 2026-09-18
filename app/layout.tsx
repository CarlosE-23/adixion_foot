import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-heading",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
    variable: "--font-body",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Adixion Food | Comida Rápida en Coro",
    description:
        "Adixion Food - Restaurante de comida rápida en Coro, Edo Falcón. Hot dogs, burgers, pollo frito y más. Sabor que enamora.",
    keywords: [
        "comida rápida",
        "Coro",
        "Falcón",
        "hot dogs",
        "burgers",
        "pollo frito",
        "Adixion Food",
    ],
    openGraph: {
        title: "Adixion Food | Comida Rápida en Coro",
        description: "Hot dogs, burgers, pollo frito y más. Sabor que enamora.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
            <body className="min-h-screen flex flex-col">{children}</body>
        </html>
    );
}
