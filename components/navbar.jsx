'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, CreditCard, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  // Enlaces de navegación con sus respectivos iconos para la versión móvil
  const navLinks = [
    { name: 'Inicio', href: '/', icon: <Home className="size-5" /> },
    { name: 'Conócenos', href: '/conocenos', icon: <Users className="size-5" /> },
    { name: 'Métodos de Pago', href: '/metodos-de-pago', icon: <CreditCard className="size-5" /> },
  ];

  return (
    <>
      {/* ==========================================
          1. NAVBAR SUPERIOR (Para computadoras)
          ========================================== */}
      <nav className="w-full bg-neutral-950/60 backdrop-blur-md border-b border-white/5 fixed top-0 left-0 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo de CAFiiTECH */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="size-8 bg-violet-600 rounded-lg flex items-center justify-center font-black text-sm text-white group-hover:scale-105 transition-transform">
              CF
            </div>
            <span className="font-black text-lg tracking-tighter text-white">
              CAFii<span className="text-violet-500">TECH</span>
            </span>
          </Link>

          {/* Menú de PC - Se oculta en celulares (hidden) y se activa en PC (md:flex) */}
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

          {/* Botón de Catálogo de PC */}
          <div className="hidden md:block">
            <Link 
              href="/catalogo" 
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-violet-600/20"
            >
              Ver Catálogo
            </Link>
          </div>

        </div>
      </nav>

      {/* ==========================================
          2. NAVBAR INFERIOR DINÁMICA (Para Celulares)
          Se oculta en PC (md:hidden) y se activa en móviles
          ========================================== */}
      <div className="md:hidden fixed bottom-4 inset-x-4 z-50 flex justify-center">
        <div className="w-full max-w-md bg-neutral-900/70 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center justify-around">
          
          {/* Mapeo de los links normales con Icono */}
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex flex-col items-center justify-center gap-1 flex-1 relative py-1 transition-all"
              >
                <div className={`transition-transform duration-300 ${isActive ? 'text-violet-400 -translate-y-0.5 scale-110' : 'text-gray-400'}`}>
                  {link.icon}
                </div>
                <span className={`text-[9px] font-black uppercase tracking-tight transition-colors ${isActive ? 'text-white' : 'text-gray-500'}`}>
                  {link.name.split(' ')[0]} {/* Corta a un solo nombre si es largo */}
                </span>
                
                {/* Puntito indicador interactivo abajo del link activo */}
                {isActive && (
                  <div className="absolute bottom-0 size-1 bg-violet-500 rounded-full shadow-[0_0_8px_#8b5cf6]" />
                )}
              </Link>
            );
          })}

          {/* Botón Destacado del Catálogo (Estilo botón central de App Móvil) */}
          <Link
            href="/catalogo"
            className={`flex flex-col items-center justify-center gap-1 flex-1 py-1 relative ${
              pathname === '/catalogo' ? 'text-fuchsia-400' : 'text-gray-400'
            }`}
          >
            <div className={`p-2 rounded-xl transition-all ${
              pathname === '/catalogo' 
                ? 'bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white -translate-y-2.5 shadow-[0_4px_15px_rgba(139,92,246,0.4)] scale-110' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}>
              <ShoppingBag className="size-4.5" />
            </div>
            <span className={`text-[9px] font-black uppercase tracking-tight absolute bottom-1 transition-opacity ${
              pathname === '/catalogo' ? 'opacity-100 text-white' : 'opacity-100 text-gray-500'
            }`}>
              Catálogo
            </span>
          </Link>

        </div>
      </div>
    </>
  );
}