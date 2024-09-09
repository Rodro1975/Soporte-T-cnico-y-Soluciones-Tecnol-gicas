// app/layout.js
import WhatsAppButton from "./components/WhatsAppButton";
import localFont from "next/font/local";
import "./globals.css";
import "leaflet/dist/leaflet.css"; // Importa el CSS de Leaflet
// Configuración de fuentes locales
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

// Nueva API de Metadata
export const metadata = {
  title: "Home/Services",
  description:
    "Servicios profesionales de soporte técnico y soluciones tecnológicas.",
  icons: {
    icon: "/favicon.ico", // Ruta favicon
  },
  openGraph: {
    title: "Soporte Técnico y Soluciones Tecnológicas",
    description:
      "Ofrecemos soporte técnico, mantenimiento y soluciones tecnológicas personalizadas.",
    url: "https://www.tu-sitio.com",
    siteName: "Soporte Técnico",
    images: [
      {
        url: "https://www.tu-sitio.com/imagen-og.jpg",
        width: 800,
        height: 600,
        alt: "Soporte Técnico y Soluciones Tecnológicas",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
