import SectionTitle from "@/components/section-title";
import { Headphones, ShieldCheck, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Features() {
    const refs = useRef([]);

    // Datos estratégicos para construir la confianza del comprador
    const featuresData = [
        {
            icon: Headphones,
            title: "Calidad Premium",
            description: "Disfruta de un audio de alta fidelidad, graves profundos y una conectividad inalámbrica perfecta.",
        },
        {
            icon: ShieldCheck,
            title: "Garantía Total",
            description: "Todos nuestros productos tecnológicos cuentan con respaldo oficial y garantía ante cualquier falla.",
        },
        {
            icon: Truck,
            title: "Envíos Seguros",
            description: "Llevamos tus AirPods directo a tus manos con empaques protegidos y un seguimiento rápido.",
        }
    ];

    return (
        <section id="confianza" className="mt-32">
            <SectionTitle
                title="¿Por qué confiar en CAFiiTECH?"
                description="Nos apasiona la tecnología y nos aseguramos de que tu experiencia de compra sea transparente, segura y con la mejor calidad del mercado."
            />

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 px-6">
                {featuresData.map((feature, index) => (
                    <motion.div
                        key={index}
                        ref={(el) => (refs.current[index] = el)}
                        className="hover:-translate-y-1.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full border border-white/5 hover:border-violet-500/30 transition-all duration-300"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        }}
                        onAnimationComplete={() => {
                            const card = refs.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        {/* Ícono estilizado con el color morado de tu marca */}
                        <feature.icon className="size-8.5 text-violet-400" />
                        <h3 className="text-lg font-semibold text-white">
                            {feature.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}