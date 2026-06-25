'use client';

// Importamos solo las secciones del contenido
import HeroSection from '@/sections/hero-section'; 
import Features from '@/sections/features';         
import Testimonials from '@/sections/testimonials'; 
import FaqSection from '@/sections/faq-section';     
import CallToAction from '@/sections/call-to-action'; 

export default function Page() {
    return (
        <main className='min-h-screen font-sans overflow-hidden'>
            {/* Portada con sus degradados estéticos originales */}
            <HeroSection />
            
            {/* Beneficios */}
            <Features />
            
            {/* Testimonios */}
            <Testimonials />
            
            {/* Dudas Frecuentes */}
            <FaqSection />
            
            {/* Cierre de venta */}
            <CallToAction />
        </main>
    );
}