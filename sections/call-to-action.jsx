import React from 'react';
import Link from 'next/link';
import { MessageCircle, Headphones, Sparkles } from 'lucide-react';

export default function ReadyToBuildSection() {
  return (
    <section className="relative w-full bg-transparent py-24 px-6 overflow-hidden flex items-center justify-center">
      
      {/* ANIMACIÓN DE FONDO: Luces de neón orbitando y pulsando */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-fuchsia-500/20 rounded-full blur-[80px] animate-bounce" style={{ animationDuration: '6s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
        
        {/* ELEMENTO CENTRAL: Audífonos flotando con destellos */}
        <div className="relative mb-8 group">
          {/* Aura brillante de fondo */}
          <div className="absolute inset-0 bg-violet-500/50 rounded-full blur-xl scale-75 group-hover:scale-110 transition-all duration-700 opacity-70 animate-ping" style={{ animationDuration: '3s' }} />
          
          {/* Círculo base con animación de flote flotando */}
          <div className="relative bg-white/5 border border-white/10 p-6 rounded-full backdrop-blur-md shadow-2xl animate-[float_4s_ease-in-out_infinite] flex items-center justify-center">
            <Headphones className="size-16 text-white drop-shadow-[0_0_15px_rgba(139,92,246,0.7)]" />
            
            {/* Pequeños destellos titilantes alrededor */}
            <Sparkles className="absolute -top-1 -right-1 size-5 text-fuchsia-400 animate-pulse" />
            <Sparkles className="absolute -bottom-2 -left-2 size-4 text-violet-400 animate-pulse delay-75" />
          </div>
        </div>

        {/* TEXTOS PRINCIPALES */}
        <span className="text-violet-400 text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-ping" />
          ¿Listo para subir de nivel?
        </span>
        
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 max-w-2xl leading-none">
          Lleva tu música al <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">Siguiente Nivel</span>
        </h2>
        
        <p className="text-gray-400 text-base md:text-lg max-w-lg mb-10 font-medium">
          Adquiere tus AirPods Premium con garantía real y envíos seguros a toda Colombia. ¿Qué esperas para pedir los tuyos?
        </p>

        {/* BOTÓN DE ACCIÓN LLAMATIVO */}
        <Link 
          href="https://wa.me/573000000000" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-full overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
        >
          {/* Efecto hover interno de color morado */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          
          <MessageCircle className="size-5 text-black group-hover:text-white transition-colors" />
          <span className="group-hover:text-white transition-colors">Ordenar por WhatsApp</span>
        </Link>

      </div>

      {/* ESTILOS CSS EN LÍNEA para soportar la animación de flote nativa si no quieres tocar el tailwind.config.js */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
}