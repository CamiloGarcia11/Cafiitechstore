import Link from 'next/link';
import { Instagram, MessageCircle, Headphones } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-transparent py-12 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* NOMBRE DE LA EMPRESA */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2">
            <Headphones className="size-6 text-violet-500" />
            <h2 className="text-2xl font-black tracking-tighter text-white">
              CAFii<span className="text-violet-500">TECH</span>
            </h2>
          </div>
          <p className="text-gray-400 text-xs mt-2 tracking-wide font-medium">
            TIENDA DE AUDÍFONOS
          </p>
        </div>

        {/* LINKS DE NAVEGACIÓN EN LÍNEA */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
          <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">
            Inicio
          </Link>
          <Link href="/catalogo" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">
            Catálogo
          </Link>
          <Link href="/pagos" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">
            Métodos de Pago
          </Link>
        </nav>

        {/* REDES SOCIALES (Únicamente WhatsApp e Instagram oficiales) */}
        <div className="flex items-center gap-6 mb-10">
          {/* WHATSAPP */}
          <a 
            href="https://wa.me/573052311490?text=¡Hola%20CAFiiTECH!%20👋%20Vengo%20desde%20la%20página%20web%20y%20me%20gustaría%20recibir%20más%20información." 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110 duration-200"
          >
            <MessageCircle className="size-6" />
          </a>
          
          {/* INSTAGRAM */}
          <a 
            href="https://www.instagram.com/cafiitechstore?igsh=Z2pwcms4NWlhM2dr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition-colors transform hover:scale-110 duration-200"
          >
            <Instagram className="size-6" />
          </a>
        </div>

        {/* LÍNEA FINAL Y COPYRIGHT */}
        <div className="w-full pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-[11px] font-medium tracking-wide">
            CAFiiTECH — Tecnología al alcance de tu oído.
          </p>
          <p className="text-gray-500 text-[11px] font-medium tracking-wide">
            © {new Date().getFullYear()} CAFiiTECH. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}