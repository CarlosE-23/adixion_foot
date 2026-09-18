import Image from "next/image";
import Link from "next/link";
import { footerData } from "./Footer.data";
import { FaInstagram, FaTiktok, FaFacebook, FaWhatsapp } from "react-icons/fa";

function SocialIcon({ platform }: { platform: string }) {
    const icons: Record<string, React.JSX.Element> = {
        instagram: <FaInstagram size={20} className="text-text" />,
        tiktok: <FaTiktok size={20} className="text-text" />,
        facebook: <FaFacebook size={20} className="text-text" />,
    };

    return icons[platform] || null;
}

export function Footer() {
    return (
        <footer className="pt-16 text-center sm:text-start bg-background-alt text-text-secondary relative">
            {/* Wave / curved beige top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg
                    className="relative block w-full h-20 md:h-30"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#F8E7F3"
                        d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,120L0,120Z"
                    />
                </svg>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="space-y-6">
                        <Image
                            src="/logo.png"
                            alt="Adixion Food"
                            width={160}
                            height={52}
                            className="h-12 w-auto brightness-0 invert"
                        />
                        <p className="text-text-secondary">
                            {footerData.address}
                        </p>
                        <p className="text-text-secondary">
                            {footerData.hours}
                        </p>
                        <div className="flex gap-4">
                            {Object.entries(footerData.social).map(
                                ([platform, url]) => (
                                    <Link
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:scale-110 transition-colors"
                                    >
                                        <SocialIcon platform={platform} />
                                    </Link>
                                ),
                            )}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-heading">
                            Contacto
                        </h3>
                        <Link
                            href={footerData.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                        >
                            <FaWhatsapp size={20} />
                            WhatsApp: {footerData.phone}
                        </Link>
                    </div>

                    <div className="sm:col-span-2 lg:col-span-1">
                        <h3 className="text-2xl font-bold mb-4 font-heading">
                            Ubicación
                        </h3>
                        <div className="rounded-[2.8rem] overflow-hidden h-62">
                            <iframe
                                src={footerData.mapEmbed}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-white/60 text-sm">
                    © {new Date().getFullYear()} Adixion Food. Todos los
                    derechos reservados.
                </div>
            </div>
        </footer>
    );
}
