'use client';
import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Truck, CreditCard, Headphones, Users } from 'lucide-react';

export default function FaqSection() {
  // Estado para saber cuál pregunta está abierta (-1 significa ninguna)
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Estructura de las 5 preguntas principales con respuestas persuasivas
  const faqs = [
    {
      question: "¿Cómo funcionan los envíos?",
      icon: <Truck className="size-5 text-violet-400" />,
      answer: "Realizamos envíos a nivel nacional a toda Colombia a través de las mejores agencias de transporte (Servientrega, Interrapidísimo o Envíos Flex). El tiempo estimado de entrega es de 2 a 5 días hábiles, dependiendo de tu ubicación. Además, ofrecemos la opción de Pago Contraentrega para que pagues en efectivo únicamente cuando recibas el producto en tus manos."
    },
    {
      question: "¿Cuáles son los métodos de pago?",
      icon: <CreditCard className="size-5 text-violet-400" />,
      answer: "Manejamos alternativas 100% confiables: puedes pagar en efectivo al recibir tu pedido gracias a nuestro servicio de contraentrega. También recibimos transferencias bancarias directas a nuestra cuenta de ahorros Bancolombia o Nequi. Si prefieres pagar desde cualquier otro banco, puedes escanear de forma express e inmediata nuestro código QR interoperable de la red Bre-B."
    },
    {
      question: "¿Qué calidad tienen los audífonos?",
      icon: <Headphones className="size-5 text-violet-400" />,
      answer: "En CAFiiTECH nos especializamos en tecnología de calidad Premium 1:1. Esto significa que nuestros AirPods replican de forma exacta el peso, diseño anatómico, materiales y empaque del modelo clásico. Incluyen características de alta fidelidad como audio espacial tridimensional adaptativo, sensores de fuerza funcionales, chip de conexión ultra rápida H1 y una cancelación de ruido brutal para aislarte del exterior."
    },
    {
      question: "¿Cómo funciona la garantía?",
      icon: <ShieldCheck className="size-5 text-violet-400" />,
      answer: "Tu tranquilidad es nuestra prioridad. Todos nuestros dispositivos tecnológicos cuentan con una garantía de respaldo oficial ante cualquier tipo de falla técnica de fábrica. Si tu equipo presenta algún inconveniente de conectividad, carga o audio, cuentas con soporte directo e inmediato a través de nuestra línea de atención en WhatsApp para gestionar el cambio o revisión."
    },
    {
      question: "¿Venden al por mayor y cómo son los precios?",
      icon: <Users className="size-5 text-violet-400" />,
      answer: "¡Claro que sí! Si buscas emprender o necesitas compras corporativas, manejamos precios especiales mayoristas a partir de 3 unidades en adelante. Puedes ponerte en contacto directamente con nuestro equipo de soporte por WhatsApp solicitando nuestro catálogo mayorista actualizado para conocer las escalas de descuentos vigentes."
    }
  ];

  return (
    <section className="relative w-full bg-transparent py-20 px-6 z-10">
      
      <div className="max-w-3xl mx-auto">
        
        {/* TÍTULO DE LA SECCIÓN */}
        <div className="text-center mb-12">
          <div className="inline-flex p-3 rounded-full bg-white/5 border border-white/10 mb-4">
            <HelpCircle className="size-6 text-violet-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
            Preguntas <span className="text-violet-500">Frecuentes</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2 font-medium">
            Todo lo que necesitas saber antes de asegurar tus próximos AirPods.
          </p>
        </div>

        {/* CONTENEDOR DE LAS PREGUNTAS */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className="border border-white/5 rounded-2xl bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-violet-500/30"
              >
                {/* BOTÓN / PREGUNTA */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-white font-bold text-base md:text-lg gap-4 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex items-center gap-3">
                    {faq.icon}
                    <span>{faq.question}</span>
                  </div>
                  
                  <ChevronDown 
                    className={`size-5 text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-violet-400' : ''
                    }`}
                  />
                </button>

                {/* RESPUESTA ANIMADA POR ALTURA */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] opacity-100 border-t border-white/5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 text-gray-400 text-sm md:text-base leading-relaxed font-medium bg-black/20">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}