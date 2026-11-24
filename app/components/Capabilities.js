"use client";

import { useState } from "react";

const capabilities = [
  {
    number: "01",
    title: "Infraestructura y operación IT/OT",
    description:
      "Conectamos infraestructura, sistemas y operación para mantener tu negocio funcionando.",
    areas: [
      "Redes, endpoints y accesos",
      "Datacenter e infraestructura técnica",
      "Integración IT/OT y BMS",
    ],
  },
  {
    number: "02",
    title: "Soporte y servicios tecnológicos",
    description:
      "Soluciones prácticas para las necesidades tecnológicas de personas, comercios y empresas.",
    areas: [
      "Diagnóstico y reparación",
      "Mantenimiento preventivo",
      "Soporte técnico especializado",
    ],
  },
  {
    number: "03",
    title: "Desarrollo web y software",
    description:
      "Construimos experiencias digitales y aplicaciones que responden a necesidades reales.",
    areas: [
      "Diseño y desarrollo web",
      "Aplicaciones y plataformas SaaS",
      "Automatización e integraciones",
    ],
  },
  {
    number: "04",
    title: "Field Services & Smart Hands",
    description:
      "Capacidad técnica en sitio para proyectos que requieren coordinación, precisión y experiencia.",
    areas: [
      "Implementaciones y despliegues",
      "Diagnósticos y levantamientos",
      "Coordinación con equipos remotos",
    ],
  },
];

export default function Capabilities() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative w-full text-neutral-950">
      {/* Encabezado editorial */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="h-1 w-10 bg-black" />
          <p className="text-xs font-bold uppercase tracking-[0.3em] md:text-sm">
            Nuestras capacidades
          </p>
        </div>
      </div>

      {/* Composición principal */}
      <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Mensaje principal */}
        <div>
          <h2 className="text-[clamp(2.6rem,5vw,5.5rem)] font-black uppercase leading-[0.95] tracking-[-0.065em]">
            <span className="block">Conectamos.</span>
            <span className="block">Construimos.</span>
            <span className="block">Resolvemos.</span>
          </h2>

          <p className="mt-8 max-w-md text-lg font-medium leading-relaxed md:text-xl">
            Distintas especialidades.
            <br />
            Una misma visión tecnológica.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-4 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Hablemos de tu proyecto
          </a>
        </div>

        {/* Capacidades interactivas */}
        <div className="border-b border-black/30">
          {capabilities.map((capability, index) => {
            const isActive = active === index;

            return (
              <div key={capability.number} className="border-t border-black/30">
                <h3>
                  <button
                    type="button"
                    id={`capability-button-${index}`}
                    aria-expanded={isActive}
                    aria-controls={`capability-content-${index}`}
                    onClick={() => setActive(isActive ? -1 : index)}
                    className="group flex w-full items-center gap-4 py-5 text-left transition hover:opacity-70 md:py-6"
                  >
                    <span className="text-xs font-bold tabular-nums">
                      {capability.number}
                    </span>

                    <span className="flex-1 text-lg font-bold leading-tight md:text-xl">
                      {capability.title}
                    </span>

                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center text-2xl font-light"
                    >
                      {isActive ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                <div
                  id={`capability-content-${index}`}
                  role="region"
                  aria-labelledby={`capability-button-${index}`}
                  aria-hidden={!isActive}
                  className={`grid transition-all duration-500 motion-reduce:transition-none ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6 pl-8 pr-3">
                      <p className="text-sm font-medium leading-relaxed md:text-base">
                        {capability.description}
                      </p>

                      <ul className="mt-4 flex flex-wrap gap-2">
                        {capability.areas.map((area) => (
                          <li
                            key={area}
                            className="rounded-full border border-black/25 px-3 py-1 text-xs font-medium"
                          >
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navegación */}
      <div className="mt-12 flex justify-center">
        <a
          href="#projects"
          aria-label="Continuar a experiencia empresarial"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-black transition hover:bg-black hover:text-yellow-400"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
