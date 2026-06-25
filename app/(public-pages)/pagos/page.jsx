'use client';

import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, ShieldCheck, QrCode, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PagosPage() {
    const [copiedId, setCopiedId] = useState(null);

    // Configura aquí tus cuentas bancarias reales
    const cuentasBancarias = [
        {
            id: "cuenta-1",
            banco: "Bancolombia", // O el banco de tu país (Nequi, Daviplata, BBVA, etc.)
            tipo: "Cuenta de Ahorros",
            numero: "912-662633-31", // Pon tu número real aquí
            titular: "CAFiiTECH S.A.S / Edwin Camilo Garcia",
            color: "from-amber-500/20 to-black"
        },
        {
            id: "cuenta-2",
            banco: "Nequi / Daviplata",
            tipo: "Depósito Celular",
            numero: "3052311490", // Pon tu número real aquí
            titular: "EDWIN GARCIA",
            color: "from-fuchsia-500/20 to-black"
        }
    ];

    // Configura aquí tus códigos QR de pago rápido
    const codigosQR = [
        {
            banco: "QR Bancolombia",
            image: "/assets/qr-bancolombia.png", // Guarda la imagen de tu QR en public/assets/
            instrucciones: "Escanea desde la app de tu banco e ingresa el valor de tus AirPods."
        },
        {
            banco: "QR Nequi",
            image: "/assets/qr-nequi.png", // Guarda la imagen de tu QR en public/assets/
            instrucciones: "Escanea directo desde tu celular para una transferencia inmediata."
        }
    ];

    // Función práctica para que el cliente pueda copiar el número de cuenta con un solo clic
    const copiarAlPortapapeles = (texto, id) => {
        navigator.clipboard.writeText(texto);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <main className="min-h-screen bg-black text-white px-4 md:px-16 lg:px-24 py-12 relative overflow-hidden font-sans">
            
            {/* Fondo estético con tus luces de colores de marca */}
            <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                <div className="absolute rounded-full top-20 right-10 size-130 bg-[#2E08CF] blur-[120px] opacity-40" />
                <div className="absolute rounded-full top-80 left-0 size-130 bg-[#D10A8A] blur-[120px] opacity-30" />
                <div className="absolute rounded-full -top-40 left-1/3 size-130 bg-[#F26A06] blur-[120px] opacity-20" />
            </div>

            {/* Cabecera de la página */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-8 mx-auto max-w-5xl">
                <div>
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition mb-4 group">
                        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                        Volver al inicio
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Métodos de Pago <span className="text-violet-500">Oficiales</span>
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base mt-2">
                        Realiza tus transferencias de forma transparente y segura. Reporta tu comprobante por WhatsApp.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-12 space-y-12">
                
                {/* 💳 SECCIÓN 1: CUENTAS BANCARIAS */}
                <div>
                    <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                        <CreditCard className="text-violet-400 size-5" />
                        Transferencias Bancarias
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cuentasBancarias.map((cta) => (
                            <motion.div
                                key={cta.id}
                                className={`glass border border-white/10 rounded-2xl p-6 bg-gradient-to-br ${cta.color} relative overflow-hidden group`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{cta.tipo}</span>
                                        <h3 className="text-2xl font-black tracking-tight text-white mt-0.5">{cta.banco}</h3>
                                    </div>
                                    <ShieldCheck className="size-5 text-emerald-400" />
                                </div>

                                <div className="mt-6 p-3 bg-black/40 border border-white/5 rounded-xl flex items-center justify-between gap-4">
                                    <div>
                                        <span className="text-[10px] text-white/40 block uppercase font-bold">Número de cuenta</span>
                                        <span className="text-lg font-mono font-bold text-white tracking-wider">{cta.numero}</span>
                                    </div>
                                    <button 
                                        onClick={() => copiarAlPortapapeles(cta.numero, cta.id)}
                                        className="p-2.5 rounded-lg bg-white/5 hover:bg-white text-gray-400 hover:text-black transition-all duration-200"
                                        title="Copiar número"
                                    >
                                        {copiedId === cta.id ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />}
                                    </button>
                                </div>

                                <div className="mt-4 text-xs text-gray-400">
                                    <span className="font-medium block text-white/50">Titular autorizado:</span>
                                    <span className="text-white font-semibold">{cta.titular}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 📱 SECCIÓN 2: CÓDIGOS QR */}
                <div className="pt-6 border-t border-white/10">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                        <QrCode className="text-violet-400 size-5" />
                        Códigos QR de Pago Rápido
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {codigosQR.map((qr, index) => (
                            <motion.div
                                key={index}
                                className="glass border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 hover:border-violet-500/20 transition-colors"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {/* Contenedor del QR */}
                                <div className="size-36 bg-white rounded-xl p-2 shrink-0 shadow-lg flex items-center justify-center overflow-hidden border border-white/10 relative group">
                                    <img 
                                        src={qr.image} 
                                        alt={qr.banco} 
                                        className="size-32 object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                    <span className="hidden text-black/40 text-[10px] font-bold text-center uppercase">[ QR Imagen ]</span>
                                </div>

                                {/* Info del QR */}
                                <div className="text-center sm:text-left space-y-2">
                                    <h3 className="text-lg font-bold text-white tracking-tight">{qr.banco}</h3>
                                    <p className="text-xs text-gray-400 leading-relaxed">{qr.instrucciones}</p>
                                    <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase mt-2">
                                        Escanear y Pagar
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 💡 AVISO FINAL PARA CERRAR LA CONFIANZA */}
                <div className="bg-gradient-to-r from-violet-950/20 to-black border border-violet-500/20 rounded-2xl p-6 text-center max-w-3xl mx-auto space-y-2">
                    <p className="text-sm font-semibold text-white">¿Ya realizaste tu transferencia?</p>
                    <p className="text-xs text-gray-400">
                        Por favor toma una captura de pantalla del comprobante exitoso y envíala a nuestro WhatsApp oficial junto con tus datos de envío para procesar tu orden de inmediato.
                    </p>
                </div>

            </div>
        </main>
    );
}