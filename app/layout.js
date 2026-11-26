import "./globals.css";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Navbar from "./components/Navbar";

export const metadata = {
  metadataBase: new URL("https://rodrost.com"),

  title: {
    default: "Rodro Soluciones Tecnológicas | Infraestructura IT/OT y Software",
    template: "%s | Rodro Soluciones Tecnológicas",
  },

  description:
    "Soluciones de infraestructura IT/OT, soporte tecnológico, desarrollo de software y Field Services para empresas y negocios en México y Colombia.",

  applicationName: "Rodro Soluciones Tecnológicas",

  authors: [
    {
      name: "Rodro Soluciones Tecnológicas",
      url: "https://rodrost.com",
    },
  ],

  creator: "Rodro Soluciones Tecnológicas",
  publisher: "Rodro Soluciones Tecnológicas",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: ["es_CO"],
    siteName: "Rodro Soluciones Tecnológicas",
    title: "Rodro Soluciones Tecnológicas | Infraestructura IT/OT y Software",
    description:
      "Conectamos. Construimos. Resolvemos. Soluciones tecnológicas para empresas y negocios en México y Colombia.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rodro Soluciones Tecnológicas",
    description:
      "Infraestructura IT/OT, desarrollo de software y soluciones tecnológicas en México y Colombia.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body className="bg-background text-foreground">
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
