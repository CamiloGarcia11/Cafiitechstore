'use client';
import React from 'react';
import { CreditCard, QrCode, Smartphone, CheckCircle2, MessageCircle, ArrowLeft, ShieldCheck, Copy } from 'lucide-react';
import Link from 'next/link';

export default function PagosPage() {
  
  // Función auxiliar para copiar texto al portapapeles rápidamente
  const copiarAlPortapapeles = (texto) => {
    navigator.clipboard.writeText(texto);
    alert('¡Copiado al portapapeles!');
  };

  return (
    <div className="relative min-h-screen bg-transparent w-full text-white pb-24">
      
      {/* BOTÓN VOLVER AL CATÁLOGO */}
      <div className="max-w-7xl mx-auto px-6 pt-8 relative z-10">
        <Link 
          href="/catalogo" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors text-sm font-bold group"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Volver al Catálogo
        </Link>
      </div>

      {/* ENCABEZADO */}
      <div className="py-12 px-6 max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
          Métodos de <span className="text-violet-500">Pago</span>
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base font-medium">
          Elige la opción que prefieras para realizar tu pago de forma rápida y segura.
        </p>
      </div>

      {/* CONTENIDO PRINCIPAL: CUENTAS + QR ÚNICO */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* LADO IZQUIERDO: INFORMACIÓN DE CUENTAS BANCARIAS */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <CreditCard className="size-6 text-violet-500" />
            <h2 className="text-2xl font-black tracking-tight">Transferencia Bancaria</h2>
          </div>
          
          {/* Tarjeta Cuenta 1: Bancolombia */}
          <div className="border border-white/5 rounded-3xl bg-white/[0.01] backdrop-blur-md p-6 relative overflow-hidden group hover:border-violet-500/20 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-violet-400 block mb-1">Banco Principal</span>
                <h3 className="text-xl font-bold text-white mb-4">Bancolombia</h3>
                <div className="space-y-2">
                  <p className="text-xs text-gray-400">Tipo de cuenta: <span className="text-white font-semibold">Ahorros</span></p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-200">Número: <span className="font-mono text-white font-bold text-base">0092672435</span></p>
                    <button onClick={() => copiarAlPortapapeles('0092672435')} className="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-colors">
                      <Copy className="size-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-400">Titular: <span className="text-white font-semibold">Edwin Garcia</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta Cuenta 2: Nequi */}
          <div className="border border-white/5 rounded-3xl bg-white/[0.01] backdrop-blur-md p-6 relative overflow-hidden group hover:border-violet-500/20 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-violet-400 block mb-1">Plataforma Digital</span>
                <h3 className="text-xl font-bold text-white mb-4">Nequi</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-200">Celular / Llave: <span className="font-mono text-white font-bold text-base">3052311490</span></p>
                    <button onClick={() => copiarAlPortapapeles('3052311490')} className="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-colors">
                      <Copy className="size-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-400">Titular: <span className="text-white font-semibold">Edwin Garcia</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Instrucciones Breves */}
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 space-y-3">
            <div className="flex items-start gap-2 text-xs text-gray-400 font-medium">
              <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Puedes hacer transferencia directa si usas las apps de Bancolombia o Nequi.</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-400 font-medium">
              <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>No olvides guardar el comprobante para reportar tu pedido por WhatsApp.</span>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: SECCIÓN DEL QR ÚNICO INTEROPERABLE (BRE-B) */}
        <div className="flex flex-col items-center justify-center border-l lg:border-l border-white/5 lg:pl-12">
          <div className="text-center lg:text-left w-full mb-6">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <QrCode className="size-6 text-violet-500" />
              <h2 className="text-2xl font-black tracking-tight">Pago Express QR</h2>
            </div>
            <p className="text-sm text-gray-400 font-medium">Escanea de forma interoperable desde cualquier banco usando la nueva red Bre-B.</p>
          </div>

          <div className="relative group">
            {/* Aura de luz violeta */}
            <div className="absolute inset-0 bg-violet-600/15 blur-[100px] rounded-full opacity-60 group-hover:opacity-90 transition-opacity" />
            
            {/* Contenedor del QR Limpio */}
            <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
              <img 
                src="/assets/qrpagos.png" 
                alt="Código QR de Pago Bre-B Nequi CAFiiTECH" 
                className="w-full max-w-[290px] h-auto rounded-3xl object-contain mx-auto"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <ShieldCheck className="size-4 text-emerald-400" />
            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-300">Escanea y Paga Fácil sin Comisiones</span>
          </div>

          {/* BOTÓN WHATSAPP DE REPORTE */}
          <div className="w-full mt-8 max-w-[320px]">
            <a 
              href="https://wa.me/573052311490?text=¡Hola%20CAFiiTECH!%20👋%20Acabo%20de%20realizar%20el%20pago,%20aquí%20tengo%20el%20comprobante%20de%20mi%20pedido." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-white text-black font-black py-4 rounded-2xl hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-xl active:scale-95 text-sm group"
            >
              <MessageCircle className="size-5 transition-transform group-hover:rotate-12" />
              Reportar Pago por WhatsApp
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}