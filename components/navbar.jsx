'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Home, Users, CreditCard, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // ENLACES CORREGIDOS: Apuntando a tus carpetas reales en minúsculas y plurales exactos
  const navLinks = [
    { name: 'Inicio', href: '/', icon: <Home className="size-5" /> },
    { name: 'Conócenos', href: '/conocenos', icon: <Users className="size-5" /> },
    { name: 'Métodos de Pago', href: '/pagos', icon: <CreditCard className="size-5" /> }, // <-- Cambiado a /pagos como tu carpeta
  ];

  // Función segura para móviles
  const handleNavigation = (href) => {
    router.push(href);
  };

  return (
    <>
      {/* ==========================================
          1. NAVBAR SUPERIOR (Escritorio y Celulares)
          ========================================== */}
      <nav className="w-full bg-neutral-950/60 backdrop-blur-md border-b border-white/5 fixed top-0 left-0 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* LOGO ORIGINAL */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="size-9 bg-neutral-900 rounded-xl flex items-center justify-center overflow-hidden border border-white/10 group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/assets/icon.png" 
                alt="CAFiiTECH Logo" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }} 
              />
            </div>
            <span className="font-black text-xl tracking-tighter text-white uppercase">
              CAFii<span className="text-violet-500">TECH</span>
            </span>
          </Link>

          {/* Menú para Computadoras (md:flex) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase font-bold tracking-wider transition-colors hover:text-violet-400 ${
                    isActive ? 'text-violet-500' : 'text-gray-400'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Botón de Catálogo de Computadoras */}
          <div className="hidden md:block">
            <Link 
              href="/catalogo" 
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-violet-600/20"
            >
              Ver Catálogo
            </Link>
          </div>

          {/* Botón de Catálogo Superior para Celulares */}
          <div className="md:hidden">
            <Link 
              href="/catalogo" 
              className="bg-violet-600 hover:bg-violet-500 text-white font-black text-[10px] uppercase tracking-wider px-3 py-2 rounded-xl transition-all inline-block"
            >
              Ver Catálogo
            </Link>
          </div>

        </div>
      </nav>

      {/* ==========================================
          2. NAVBAR INFERIOR FLOTANTE (Para Celulares)
          ========================================== */}
      <div className="md:hidden fixed bottom-5 inset-x-4 z-50 flex justify-center">
        <div className="w-full max-w-sm bg-neutral-950/90 backdrop-blur-2xl border border-violet-500/20 px-4 py-3 rounded-2xl shadow-[0_15px_35px_rgba(139,92,246,0.3)] flex items-center justify-around">
          
          {/* Botones del menú tradicional */}
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavigation(link.href)}
                className="flex flex-col items-center justify-center gap-1 flex-1 relative py-0.5 focus:outline-none"
              >
                <div className={`transition-all duration-300 ${isActive ? 'text-violet-400 -translate-y-0.5 scale-110' : 'text-gray-400'}`}>
                  {link.icon}
                </div>
                <span className={`text-[9px] font-black uppercase tracking-tight transition-colors ${isActive ? 'text-white' : 'text-gray-500'}`}>
                  {link.name.split(' ')[0]}
                </span>
                
                {/* Indicador interactivo */}
                {isActive && (
                  <div className="absolute -bottom-1 size-1 bg-violet-500 rounded-full shadow-[0_0_8px_#8b5cf6]" />
                )}
              </button>
            );
          })}

          {/* Botón Flotante Destacado para el Catálogo */}
          <button
            type="button"
            onClick={() => handleNavigation('/catalogo')}
            className={`flex flex-col items-center justify-center gap-1 flex-1 relative focus:outline-none ${
              pathname === '/catalogo' ? 'text-fuchsia-400' : 'text-gray-400'
            }`}
          >
            <div className={`p-2.5 rounded-xl transition-all ${
              pathname === '/catalogo' 
                ? 'bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white -translate-y-3.5 shadow-[0_4px_15px_rgba(139,92,246,0.4)] scale-110' 
                : 'bg-neutral-900 border border-white/5 text-gray-300'
            }`}>
              <ShoppingBag className="size-4" />
            </div>
            <span className={`text-[9px] font-black uppercase tracking-tight absolute -bottom-1 transition-opacity ${
              pathname === '/catalogo' ? 'opacity-100 text-white' : 'opacity-100 text-gray-500'
            }`}>
              Catálogo
            </span>
          </button>

        </div>
      </div>
    </>
  );
}