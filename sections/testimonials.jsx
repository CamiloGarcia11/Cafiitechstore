import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Star, Battery, Radio } from "lucide-react";

export default function Testimonials() {
    const ref = useRef([]);
    
    // Aquí defines los audífonos y productos estrella
    const data = [
        {
            id: "airpods-2",
            name: 'AirPods 2da Generación',
            category: 'Especiales',
            features: 'Diseño clásico y conexión instantánea. Hasta 5 horas de música continua con una sola carga.',
            price: 'Precio Especial', // Puedes cambiar esto por el precio real Ej: "$199.000"
            rating: 5,
            // Reemplaza 'airpods2.png' por el nombre real de tu foto en public/assets/
            image: '/assets/airpods2.png', 
            badge: 'Más Vendido',
            spec: 'Chip H1 - Conexión ultra rápida'
        },
        {
            id: "airpods-3",
            name: 'AirPods 3ra Generación',
            category: 'Premium',
            features: 'Audio espacial personalizado con seguimiento de la cabeza y resistencia al agua/sudor.',
            price: 'Calidad Premium', // Puedes poner el precio real Ej: "$299.000"
            rating: 5,
            // Reemplaza 'airpods3.png' por el nombre real de tu foto en public/assets/
            image: '/assets/airpods3.png', 
            badge: 'Audio Espacial',
            spec: 'Sensor de fuerza - Carga MagSafe'
        },
        {
            id: "tecnologia-top",
            name: 'Otros Accesorios Tech',
            category: 'Próximamente',
            features: 'Lo último en tecnología elegida minuciosamente bajo los estándares de calidad CAFiiTECH.',
            price: 'Nueva Colección',
            rating: 5,
            // Reemplaza 'tech.png' por otra foto de tus productos en public/assets/
            image: '/assets/tech.png', 
            badge: 'Novedades',
            spec: 'Garantía oficial CAFiiTECH'
        },
    ];

    return (
        <section id="catalogo" className="mt-32 flex flex-col items-center">
            <SectionTitle
                title="Explora Nuestro Catálogo"
                description="Equipos premium con empaques impecables, sonido nítido y la autonomía que necesitas para tu día a día."
            />
            
            <div className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 max-w-6xl w-full'>
                {data.map((item, index) => (
                    <motion.div 
                        key={index} 
                        id={item.id}
                        className='w-full space-y-4 rounded-2xl glass p-5 hover:-translate-y-2 border border-white/5 hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between'
                        initial={{ y: 150, opacity: 0 }}
                        ref={(el) => (ref.current[index] = el)}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        onAnimationComplete={() => {
                            const card = ref.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <div>
                            {/* Imagen del Producto y Badge */}
                            <div className="relative w-full h-56 bg-white/5 rounded-xl flex items-center justify-center overflow-hidden border border-white/5 group">
                                <span className="absolute top-3 left-3 bg-violet-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                                    {item.badge}
                                </span>
                                
                                {/* Etiqueta de estrellas */}
                                <div className="absolute top-3 right-3 flex items-center gap-0.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg text-amber-400 text-xs font-semibold">
                                    <Star className="size-3 fill-amber-400 text-amber-400" />
                                    <span>5.0</span>
                                </div>

                                {/* Imagen: Si la foto no existe aún, mostrará el nombre como texto */}
                                <img 
                                    className='max-h-44 w-auto object-contain transition-transform duration-500 group-hover:scale-110' 
                                    src={item.image} 
                                    alt={item.name}
                                    onError={(e) => {
                                        // Esto evita que la página se rompa si la foto aún no está cargada en assets
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="hidden text-white/40 text-xs font-medium uppercase tracking-wider">
                                    [ Añadir Foto en Assets ]
                                </div>
                            </div>

                            {/* Info del Producto */}
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">{item.category}</span>
                                <span className="text-xs text-white/50 flex items-center gap-1">
                                    <Battery className="size-3.5 text-emerald-400" /> {item.spec}
                                </span>
                            </div>

                            <h3 className='text-xl font-bold text-white mt-1'>{item.name}</h3>
                            <p className='text-gray-300 text-sm mt-2 leading-relaxed'>{item.features}</p>
                        </div>

                        {/* Botón de compra y Precio */}
                        <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                            <div>
                                <p className="text-[10px] text-white/50 uppercase font-medium tracking-wider">Disponibilidad</p>
                                <p className="text-base font-bold text-white tracking-tight">{item.price}</p>
                            </div>
                            
                            <a 
                                href="https://wa.me/tu-numero-aqui" // Reemplaza luego con tu enlace de WhatsApp
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-white text-black hover:bg-violet-600 hover:text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors duration-300"
                            >
                                <ShoppingCart className="size-4" />
                                Pedir Info
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}