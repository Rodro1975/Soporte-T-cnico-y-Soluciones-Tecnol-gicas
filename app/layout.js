// app/layout.js
import "./globals.css";
import "leaflet/dist/leaflet.css";

export const metadata = {
  title: "Soporte Técnico y Soluciones Tecnológicas",
  description:
    "Soporte técnico, infraestructura y soluciones tecnológicas personalizadas para empresas y proyectos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
