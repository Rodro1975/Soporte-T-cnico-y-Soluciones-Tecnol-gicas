import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import localFont from "next/font/local";
import "./globals.css";
import "leaflet/dist/leaflet.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export function generateMetadata({ params }) {
  const metadataMap = {
    "": {
      title: "Home",
      description: "Soporte técnico y soluciones tecnológicas personalizadas.",
    },
    services: {
      title: "Services",
      description:
        "Información sobre nuestros servicios en Soporte Técnico y Soluciones Tecnológicas.",
    },
    about: {
      title: "About Us",
      description:
        "Información sobre nosotros en Soporte Técnico y Soluciones Tecnológicas.",
    },
    contact: {
      title: "Contact Us",
      description:
        "Contacta con nosotros en Soporte Técnico y Soluciones Tecnológicas.",
    },
  };

  return metadataMap[params?.slug] || metadataMap[""];
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
