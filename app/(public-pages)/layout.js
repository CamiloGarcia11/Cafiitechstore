import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata = {
  title: "CAFiiTECH | Tienda de Audífonos",
  description: "Los mejores audífonos y AirPods al detal y al por mayor.",
  icons: {
    icon: "/icon.png", 
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
