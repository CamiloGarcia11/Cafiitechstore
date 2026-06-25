import { ShoppingBag, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <>
            {/* Los fondos estéticos y degradados originales */}
            <motion.div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none"
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
            </motion.div>

            <motion.section className="flex flex-col items-center">
                {/* Pequeño Tag de confianza arriba */}
                <motion.div className="flex items-center gap-3 mt-32 bg-white/5 border border-white/10 backdrop-blur-md py-1.5 px-4 rounded-full text-xs text-violet-300 font-medium tracking-wide shadow-lg"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <ShieldCheck className="size-4 text-violet-400" />
                    <span>Garantía Real y Envío Seguro</span>
                </motion.div>

                {/* Título Principal */}
                <motion.h1 className="text-center text-4xl/13 md:text-6xl/19 mt-5 font-bold tracking-tight max-w-3xl bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    Eleva tu música con AirPods Premium en CAFii<span className="text-violet-500">TECH</span>
                </motion.h1>

                {/* Descripción enfocada en la confianza y el catálogo */}
                <motion.p className="text-center text-gray-300 text-base/7 max-w-lg mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    Descubre la máxima fidelidad de audio. Contamos con AirPods de 2da y 3ra generación con cancelación de ruido, batería de larga duración y la mejor tecnología del mercado. 
                </motion.p>

                {/* Botones de acción hacia las ventas */}
                <motion.div className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-3 mt-8 mb-20"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <a href="#airpods-2" className="btn max-md:w-full bg-violet-600 text-white hover:bg-violet-700 font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-violet-600/30 transition duration-300">
                        <ShoppingBag className="size-4.5" />
                        Ver AirPods 2da Gen
                    </a>
                    
                    <a href="#airpods-3" className="btn max-md:w-full bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur-md font-semibold px-6 py-3 rounded-full flex items-center justify-center transition duration-300">
                        Explorar 3ra Gen
                    </a>
                </motion.div>
            </motion.section>
        </>
    );
}