'use client';
import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Truck, CreditCard, Headphones, Users } from 'lucide-react';

export default function FaqSection() {
  // Estado para saber cuál pregunta está abierta (-1 significa ninguna)
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Estructura de las 5 preguntas principales
  const faqs = [
    {
      question: "¿Cómo funcionan los envíos?",
      icon: <Truck className="size-5 text-violet-400" />,
      answer: "Aquí va el texto sobre los envíos a toda Colombia, tiempos de entrega y agencias de transporte."
    },
    {
      question: "¿Cuáles son los métodos de pago?",
      icon: <CreditCard className="size-5 text-violet-400" />,
      answer: "Aquí va el texto detallando las transferencias (Bancolombia, etc.), si manejas contraentrega o links de pago."
    },
    {
      question: "¿Qué calidad tienen los audífonos?",
      icon: <Headphones className="size-5 text-violet-400" />,
      answer: "Aquí va el texto explicando el tipo de versión o calidad premium de tus AirPods (si son réplicas 1:1, características que incluyen, etc.)."
    },
    {
      question: "¿Cómo funciona la garantía?",
      icon: <ShieldCheck className="size-5 text-violet-400" />,
      answer: "Aquí va el texto explicando los meses de cobertura y las condiciones para cambios o soporte técnico."
    },
    {
      question: "¿Venden al por mayor y cómo son los precios?",
      icon: <Users className="size-5 text-violet-400" />,
      answer: "Aquí va el texto detallando a partir de cuántas unidades se considera mayorista y cómo pueden solicitar el catálogo de precios especiales."
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
                    isOpen ? 'max-h-60 opacity-100 border-t border-white/5' : 'max-h-0 opacity-0'
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