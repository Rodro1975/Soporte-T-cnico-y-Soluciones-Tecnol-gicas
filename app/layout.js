// app/layout.js
import "./globals.css";
import "leaflet/dist/leaflet.css";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Soporte Técnico y Soluciones Tecnológicas",
  description:
    "Soporte técnico, infraestructura y soluciones tecnológicas personalizadas para empresas y proyectos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-background text-foreground">
        <Navbar />
        {/* padding-top para que el contenido no quede debajo del navbar fijo */}
        <main className="pt-16 md:pt-20">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
