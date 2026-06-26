'use client';
import React from 'react';
import { ShieldCheck, MapPin, Calendar, ArrowRight, Star } from 'lucide-react';

export default function ConocenosPage() {
  return (
    <div className="relative min-h-screen bg-transparent w-full text-white pb-24">
      
      {/* DEGRADADO LUMINOSO DE FONDO */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none z-0" />

      {/* ENCABEZADO PRINCIPAL */}
      <div className="py-16 px-6 max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-4">
          <ShieldCheck className="size-4 text-violet-400" />
          <span className="text-[10px] uppercase font-bold tracking-widest text-gray-300">Nuestra Trayectoria</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase">
          Quiénes Somos en <span className="text-violet-500">CAFiiTECH</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base font-medium">
          Conoce la historia detrás de tu tienda tecnológica de confianza y nuestro compromiso inquebrantable con la calidad premium.
        </p>
      </div>

      {/* BLOQUE DE HISTORIA Y VALORES */}
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        
        {/* TARJETA 1: HISTORIA & TRAYECTORIA */}
        <div className="border border-white/5 rounded-3xl bg-neutral-900/40 backdrop-blur-md p-6 relative overflow-hidden group hover:border-violet-500/20 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 bg-violet-600/20 rounded-xl flex items-center justify-center text-violet-400">
              <Calendar className="size-5" />
            </div>
            <div>
              <span className="text-[9px] uppercase font-bold text-violet-400 tracking-widest block">Desde 2024</span>
              <h2 className="text-xl font-black text-white tracking-tight">Nuestra Historia</h2>
            </div>
          </div>
          {/* Corregido: Uso de strong en lugar de asteriscos */}
          <p className="text-gray-300 text-sm leading-relaxed font-medium">
            CAFiiTECH nació oficialmente en el año <strong className="text-white font-black">2024</strong> con un objetivo claro: revolucionar el mercado tecnológico local trayendo alternativas de audio e innovación verdaderamente premium. 
          </p>
          <p className="text-gray-400 text-xs leading-relaxed font-medium mt-3">
            Cansados de ver cómo se vendían productos de baja calidad bajo promesas falsas, nos propusimos seleccionar minuciosamente hardware impecable, garantizando un sonido nítido, empaques perfectos y una autonomía real que supere las expectativas de nuestros usuarios.
          </p>
        </div>

        {/* TARJETA 2: UBICACIÓN Y ALCANCE */}
        <div className="border border-white/5 rounded-3xl bg-neutral-900/40 backdrop-blur-md p-6 relative overflow-hidden group hover:border-violet-500/20 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 bg-fuchsia-600/20 rounded-xl flex items-center justify-center text-fuchsia-400">
              <MapPin className="size-5" />
            </div>
            <div>
              <span className="text-[9px] uppercase font-bold text-fuchsia-400 tracking-widest block">Sede Oficial</span>
              <h2 className="text-xl font-black text-white tracking-tight">¿Dónde estamos?</h2>
            </div>
          </div>
          {/* Corregido: Uso de strong en lugar de asteriscos */}
          <p className="text-gray-300 text-sm leading-relaxed font-medium">
            Estamos orgullosamente ubicados en <strong className="text-white font-black">Cúcuta, Norte de Santander</strong>, la capital fronteriza desde donde gestionamos todas nuestras operaciones y despachos.
          </p>
          <p className="text-gray-400 text-xs leading-relaxed font-medium mt-3">
            Desde la Perla del Norte brindamos atención inmediata a nuestros clientes locales y coordinamos una red logística robusta con Envíos Flex y transportadoras nacionales aseguradas. Así, logramos que tus dispositivos viajen protegidos y lleguen directo a tus manos en cualquier rincón de Colombia.
          </p>
        </div>

      </div>

      {/* FOOTER INTERACTIVO DE INSTAGRAM PARA CONECTAR MÁS */}
      <div className="max-w-2xl mx-auto px-6 mt-12 text-center relative z-10">
        <div className="bg-gradient-to-br from-neutral-900/50 via-neutral-900/20 to-transparent border border-white/5 rounded-3xl p-8 flex flex-col items-center">
          <div className="flex items-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
          </div>
          <h3 className="text-lg font-black tracking-tight mb-2">¡Síguenos en nuestra comunidad!</h3>
          <p className="text-gray-400 text-xs max-w-sm mb-6 font-medium">
            Publicamos contenido interactivo, pruebas de sonido reales de nuestros AirPods y soporte continuo todos los días.
          </p>
          
          <a
            href="https://instagram.com/cafiitechstore" // <-- Cambiado al usuario de tu pasarela de pagos
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-black text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all hover:bg-violet-600 hover:text-white group"
          >
            Ver Nuestro Instagram
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

    </div>
  );
}