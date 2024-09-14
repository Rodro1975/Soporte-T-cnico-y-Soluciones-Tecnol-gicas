// app/layout.js
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

export const metadata = {
  title: "Home", // Este título es para la página principal
  description: "Soporte técnico y soluciones tecnológicas personalizadas.",
  icons: {
    icon: "/favicon.ico",
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
