'use client';
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 md:px-16 lg:px-24 bg-transparent backdrop-blur-md border-b border-white/5">
      
      {/* =========================================================
          LOGO DE CAFiiTECH CON EFECTO ESPEJO DINÁMICO
          ========================================================= */}
      <Link href="/" className="flex items-center gap-2 group cursor-pointer">
        {/* Tu imagen de logo oficial */}
        <img 
          src="/icon.png" 
          alt="CAFiiTECH" 
          className="size-8 object-contain transition-transform duration-500 group-hover:rotate-[10deg]" 
        />
        
        {/* Texto del Logo */}
        <span className="text-xl md:text-2xl font-black tracking-tighter text-white flex items-center">
          CAFii
          {/* Contenedor del efecto espejo en TECH */}
          <span className="relative ml-0.5 overflow-hidden inline-block select-none">
            {/* Palabra TECH con gradiente de Cromo/Metal */}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-400 to-violet-500 font-black px-0.5 block">
              TECH
            </span>
            
            {/* DESTELLO DE LUZ INTERNO (El reflejo de espejo que cruza) */}
            <span className="absolute inset-0 block h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 animate-mirror-shimmer" />
          </span>
        </span>
      </Link>

      {/* =========================================================
          ENLACES DE NAVEGACIÓN (Tus links reales)
          ========================================================= */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
          Inicio
        </Link>
        <Link href="#" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
          Conócenos
        </Link>
        <Link href="/pagos" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
          Métodos de Pago
        </Link>
      </div>

      {/* =========================================================
          BOTÓN DE ACCIÓN LLAMATIVO (Ver Catálogo)
          ========================================================= */}
      <div>
        <Link 
          href="/catalogo" 
          className="inline-flex items-center justify-center bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Ver Catálogo
        </Link>
      </div>

      {/* =========================================================
          ESTILOS CSS NATIVOS PARA EL EFECTO ESPEJO
          ========================================================= */}
      <style jsx global>{`
        @keyframes mirror-shimmer {
          0% {
            transform: translateX(-150%);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          15% {
            transform: translateX(250%);
            opacity: 0;
          }
          100% {
            transform: translateX(250%);
            opacity: 0;
          }
        }

        .animate-mirror-shimmer {
          /* Hace que el destello pase velozmente cada 4 segundos de forma infinita */
          animation: mirror-shimmer 4s infinite ease-in-out;
        }
      `}</style>

    </nav>
  );
}