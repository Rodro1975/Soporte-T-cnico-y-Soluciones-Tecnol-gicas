import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black text-slate-300">
      <div className="max-w-5xl mx-auto px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 md:justify-items-center">
          {" "}
          {/* Identidad corporativa */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/brand/rodro-wordmark.png"
                alt="Rodro Soluciones Tecnológicas"
                width={480}
                height={228}
                className="h-16 w-auto select-none"
              />
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Tecnología, infraestructura y software para impulsar tu negocio.
            </p>

            <p className="text-xs text-slate-400">
              Presencia en México y Colombia.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/rodrigo-iv%C3%A1n-ordo%C3%B1ez-ch%C3%A1vez-788127189/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-yellow-400 transition-colors hover:text-white"
              >
                <FaLinkedin size={22} />
              </Link>

              <Link
                href="https://github.com/Rodro1975"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-yellow-400 transition-colors hover:text-white"
              >
                <FaGithub size={22} />
              </Link>
            </div>
          </div>
          {/* Soluciones */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
              Soluciones
            </h2>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>Infraestructura IT/OT</li>
              <li>Soporte tecnológico</li>
              <li>Desarrollo de software</li>
              <li>Field Services &amp; Smart Hands</li>
            </ul>

            <Link
              href="/portfolio"
              className="inline-block text-sm text-yellow-400 transition-colors hover:text-white"
            >
              Conoce nuestro portafolio →
            </Link>
          </div>
          {/* Contacto */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
              Contacto
            </h2>

            <div className="space-y-4 text-sm">
              <div>
                <p className="mb-1 text-xs font-medium text-slate-400">
                  México
                </p>
                <a
                  href="tel:+527711408213"
                  className="flex items-center gap-2 transition-colors hover:text-yellow-400"
                >
                  <FaPhone className="text-xs text-yellow-400" />
                  +52 771 140 8213
                </a>
              </div>

              <div>
                <p className="mb-1 text-xs font-medium text-slate-400">
                  Colombia
                </p>
                <a
                  href="tel:+573022283964"
                  className="flex items-center gap-2 transition-colors hover:text-yellow-400"
                >
                  <FaPhone className="text-xs text-yellow-400" />
                  +57 302 228 3964
                </a>
              </div>

              <a
                href="mailto:rodrigoivanordonezchavez@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-yellow-400"
              >
                <FaEnvelope className="text-yellow-400" />
                Correo electrónico
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Derechos reservados y autoría */}
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-2 px-6 py-5 text-center text-xs leading-relaxed text-slate-400">
          <p>
            © {new Date().getFullYear()} Rodro Soluciones Tecnológicas. Todos
            los derechos reservados.
          </p>

          <p>Diseño y desarrollo web: Ing. Rodrigo Iván Ordóñez Chávez.</p>
        </div>
      </div>
    </footer>
  );
}
