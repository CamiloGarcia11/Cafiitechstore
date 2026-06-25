import { Poppins } from 'next/font/google';
import './globals.css';
import LenisScroll from '@/components/lenis-scroll';

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: "CAFiiTECH | Tienda de Audífonos",
  description: "Los mejores audífonos y AirPods al detal y al por mayor.",
  icons: {
    icon: "/icon.png", // Apunta directamente al archivo que guardaste en public
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
    return (
        <html lang='es'> {/* Cambiado a español */}
            <body className={`${poppins.variable} antialiased`}>
                <LenisScroll />
                {children}
            </body>
        </html>
    );
}