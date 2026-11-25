"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Capacidades", href: "/#capabilities" },
  { label: "Portafolio", href: "/portfolio" },
  { label: "Sobre nosotros", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/110153099/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/Rodro1975",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: null,
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: null,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  };

  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 md:pt-12 pb-6">
        {/* Encabezado */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-yellow-400" />

            <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
              México / Colombia
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Volver arriba"
            title="Volver arriba"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-600 text-white hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>

        {/* Identidad monumental */}
        <div className="pb-8 md:pb-10">
          <p className="text-[clamp(5rem,18vw,15rem)] font-black leading-[0.85] tracking-[-0.07em] text-yellow-400">
            RODRO.
          </p>

          <p className="mt-3 text-[clamp(1rem,3.5vw,3rem)] font-extrabold leading-tight tracking-tight text-white">
            SOLUCIONES TECNOLÓGICAS
          </p>
        </div>

        {/* Información y navegación */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 border-y border-white/15 py-8">
          {/* Navegación */}
          <div>
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
              01 / Explora
            </h2>

            <nav aria-label="Navegación del pie de página">
              <ul className="space-y-2.5">
                {navigation.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm md:text-base text-neutral-300 hover:text-yellow-400 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
              02 / Conectemos
            </h2>

            <div className="space-y-4">
              <div>
                <p className="mb-1 text-xs text-neutral-400">México</p>

                <a
                  href="tel:+527711408213"
                  className="flex items-center gap-3 text-sm md:text-base text-neutral-300 hover:text-yellow-400 transition-colors"
                >
                  <FaPhone className="text-xs text-yellow-400" />
                  +52 771 140 8213
                </a>
              </div>

              <div>
                <p className="mb-1 text-xs text-neutral-400">Colombia</p>

                <a
                  href="tel:+573022283964"
                  className="flex items-center gap-3 text-sm md:text-base text-neutral-300 hover:text-yellow-400 transition-colors"
                >
                  <FaPhone className="text-xs text-yellow-400" />
                  +57 302 228 3964
                </a>
              </div>

              <a
                href="mailto:contacto@rodrost.com"
                className="flex items-center gap-3 text-sm md:text-base text-neutral-300 hover:text-yellow-400 transition-colors"
              >
                <FaEnvelope className="text-yellow-400" />
                Correo electrónico
              </a>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
              03 / Comunidad
            </h2>

            <ul className="space-y-3">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <li key={name}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm md:text-base text-neutral-300 hover:text-yellow-400 transition-colors"
                    >
                      <Icon size={19} aria-hidden="true" />
                      {name}
                    </a>
                  ) : (
                    <span
                      title="Próximamente"
                      className="inline-flex items-center gap-3 text-sm md:text-base text-neutral-500"
                    >
                      <Icon size={19} aria-hidden="true" />
                      {name}
                      <span className="sr-only"> — Próximamente</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Firma corporativa y autoría */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-6">
          <div className="space-y-2 text-xs leading-relaxed text-neutral-400">
            <p>© {new Date().getFullYear()} Rodro Soluciones Tecnológicas.</p>

            <p>Diseñado y desarrollado por Ing. Rodrigo Iván Ordóñez Chávez.</p>
          </div>

          <Link
            href="/"
            className="flex shrink-0 flex-col items-center"
            aria-label="Rodro Soluciones Tecnológicas — Inicio"
          >
            <Image
              src="/brand/rodro-wordmark.png"
              alt="Rodro Soluciones Tecnológicas"
              width={480}
              height={228}
              className="h-14 md:h-16 w-auto select-none"
            />

            <span className="text-[10px] tracking-[0.15em] text-neutral-400">
              rodrost.com
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
