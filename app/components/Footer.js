import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-black">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Logo + descripción corta */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/logoRodro.png"
            alt="Rodro Soporte Técnico"
            width={80}
            height={80}
            className="object-contain"
          />
          <div className="text-xs md:text-sm text-slate-300 space-y-1">
            <p className="font-semibold">
              Rodro · Soporte Técnico &amp; Soluciones Tecnológicas
            </p>
            <p className="text-slate-400">
              Infraestructura, soporte corporativo y desarrollo de soluciones a
              medida para empresas en México y Colombia.
            </p>
          </div>
        </div>

        {/* Contacto + redes */}
        <div className="flex flex-col items-start md:items-end gap-3 text-xs md:text-sm text-slate-300">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <FaPhone className="text-yellow-500" />
              <a href="tel:+573022283964" className="hover:text-yellow-300">
                +57 302 228 3964
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-500" />
              <a
                href="mailto:rodrigoivanordonezchavez@gmail.com"
                className="hover:text-yellow-300"
              >
                rodrigoivanordonezchavez@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-1">
            <Link
              href="https://www.linkedin.com/in/rodrigo-iv%C3%A1n-ordo%C3%B1ez-ch%C3%A1vez-788127189/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-300 transition-colors duration-200"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              href="https://github.com/Rodro1975"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-300 transition-colors duration-200"
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-3 text-[11px] md:text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© 2025 Rodro Technical Support. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado por Rodrigo Iván Ordóñez Chávez.</p>
        </div>
      </div>
    </footer>
  );
}
