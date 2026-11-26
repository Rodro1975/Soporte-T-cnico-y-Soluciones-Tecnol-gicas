"use client";

import Image from "next/image";
import { FaLinux, FaMicrosoft, FaWindows } from "react-icons/fa";
import {
  SiCisco,
  SiVmware,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiGithub,
  SiVercel,
} from "react-icons/si";

const clients = [
  {
    name: "THALES",
    image: "/images/logoThales.png",
    label: "Infraestructura y soporte IT",
  },
  {
    name: "IFF Colombia",
    image: "/images/iff.png",
    label: "Operación y proyectos tecnológicos",
  },
  {
    name: "AVASO Colombia",
    image: "/images/avaso.png",
    label: "Soporte técnico en campo",
  },
  {
    name: "Maxtintas",
    image: "/images/logoMaxtintas.jpg",
    label: "Implementación y mantenimiento",
  },
  {
    name: "Scopus México",
    image: "/images/logoScopus.jpg",
    label: "Impresión corporativa",
  },
  {
    name: "Compartamos Banco",
    image: "/images/logoCompartamos.jpg",
    label: "Soporte a usuarios",
  },
  {
    name: "Inbursa",
    image: "/images/logoImbursa.jpg",
    label: "Soporte a plataformas internas",
  },
  {
    name: "BMS Support Technology LLC",
    image: "/images/BMS support tech black.png",
    label: "Desarrollo de software y CRM",
  },
];

const technologies = [
  { name: "Microsoft", icon: FaMicrosoft, color: "#737373" },
  { name: "Windows", icon: FaWindows, color: "#0078D4" },
  { name: "Linux", icon: FaLinux, color: "#171717" },
  { name: "Cisco", icon: SiCisco, color: "#049FD9" },
  { name: "VMware", icon: SiVmware, color: "#607078" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React", icon: SiReact, color: "#149ECA" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MySQL", icon: SiMysql, color: "#00758F" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
];

export default function Clients() {
  return (
    <div className="w-full text-neutral-950">
      {/* Encabezado editorial */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-10 bg-neutral-900" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Trayectoria profesional
          </p>
        </div>

        <h2 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-black leading-[0.95] tracking-[-0.055em]">
          EXPERIENCIA QUE
          <span className="block text-neutral-600">GENERA CONFIANZA.</span>
        </h2>

        <p className="mt-4 max-w-2xl text-sm md:text-lg text-neutral-600">
          Trayectoria en entornos corporativos e industriales, conectando
          personas, infraestructura y tecnología.
        </p>
      </div>

      {/* Carrusel empresarial */}
      <div className="border-t border-neutral-200 pt-4">
        <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Experiencia en entornos empresariales
        </p>

        <div className="trajectory-marquee py-5">
          <div className="trajectory-track trajectory-forward">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="trajectory-group"
                aria-hidden={copy === 1 ? true : undefined}
              >
                {clients.map((client) => (
                  <div
                    key={client.name}
                    className="flex w-40 md:w-48 shrink-0 flex-col items-center justify-center gap-2"
                  >
                    <div className="relative h-14 w-32 md:h-16 md:w-40">
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        sizes="(min-width: 768px) 160px, 128px"
                        className="object-contain"
                      />
                    </div>

                    <span className="text-center text-[11px] text-neutral-500">
                      {client.label}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carrusel tecnológico */}
      <div className="border-y border-neutral-200 pt-4">
        <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Tecnologías con las que construimos
        </p>

        <div className="trajectory-marquee py-5">
          <div className="trajectory-track trajectory-reverse">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="trajectory-group"
                aria-hidden={copy === 1 ? true : undefined}
              >
                {technologies.map(({ name, icon: Icon, color }) => (
                  <div
                    key={name}
                    className="flex w-24 md:w-28 shrink-0 flex-col items-center justify-center gap-3"
                  >
                    <Icon
                      className="h-10 w-10 md:h-12 md:w-12"
                      style={{ color }}
                      aria-hidden="true"
                    />

                    <span className="text-xs font-medium text-neutral-600">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cierre editorial */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
        <span>México — Colombia</span>
        <span>Infraestructura + Software</span>
      </div>

      {/* Navegación */}
      <div className="mt-4 flex justify-center">
        <a
          href="#contact"
          aria-label="Continuar a contacto"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-400 hover:bg-black hover:text-white transition-colors"
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
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
