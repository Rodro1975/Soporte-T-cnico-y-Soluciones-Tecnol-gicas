"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const capabilities = [
  {
    number: "01",
    title: "Infraestructura y operación IT/OT",
    summary:
      "Continuidad operativa para entornos corporativos e industriales.",
    description:
      "Infraestructura entendida como parte de la operación: desde la conectividad y los accesos hasta los espacios técnicos que mantienen el negocio en marcha.",
    areas: [
      "Redes, endpoints y accesos",
      "Datacenter, IDF e infraestructura técnica",
      "Integración IT/OT, BMS y seguridad física",
    ],
    image: "/capabilities/infrastructure.webp",
    imageAlt: "Infraestructura de red y cableado estructurado",
    label: "Operación conectada",
    imageClass: "object-cover",
  },
  {
    number: "02",
    title: "Software y soluciones internas",
    summary:
      "Aplicaciones construidas alrededor de procesos y necesidades reales.",
    description:
      "Software para organizar información, automatizar tareas y dar visibilidad a la operación sin imponer procesos que no corresponden al negocio.",
    areas: [
      "Aplicaciones web y plataformas SaaS",
      "Bases de datos e integraciones",
      "Automatización de procesos",
    ],
    image: "/capabilities/suma-dashboard.webp",
    imageAlt: "Panel beta de la plataforma Suma",
    label: "Suma · MVP beta",
    imageClass: "object-contain object-top",
  },
  {
    number: "03",
    title: "Proyectos técnicos y Smart Hands",
    summary:
      "Intervenciones en sitio coordinadas con equipos locales y remotos.",
    description:
      "Ejecución técnica para diagnósticos, despliegues y levantamientos que requieren contexto, comunicación clara y manos confiables en sitio.",
    areas: [
      "Diagnóstico y soporte especializado",
      "Implementaciones y levantamientos",
      "Coordinación con equipos remotos",
    ],
    image: "/capabilities/smart-hands.webp",
    imageAlt: "Rodrigo en un entorno de infraestructura tecnológica",
    label: "Experiencia en sitio",
    imageClass: "object-cover",
  },
];

function CapabilityVisual({ capability }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl shadow-slate-950/20">
      <div className="relative aspect-[16/10]">
        <Image
          key={capability.image}
          src={capability.image}
          alt={capability.imageAlt}
          fill
          sizes="(max-width: 1023px) 100vw, 58vw"
          className={`${capability.imageClass} animate-capability-reveal`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300/80 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-yellow-300 sm:text-xs">
            {capability.label}
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base">
            {capability.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {capability.areas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[0.68rem] text-slate-100 backdrop-blur-md sm:text-xs"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Capabilities() {
  const [active, setActive] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || hasInteracted) return undefined;

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % capabilities.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [hasInteracted]);

  const selectCapability = (index) => {
    setActive(index);
    setHasInteracted(true);
  };

  return (
    <div className="w-full">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-500 md:text-sm">
          Qué resolvemos
        </p>
        <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 text-balance sm:text-4xl md:text-5xl">
          Tecnología conectada con la operación.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
          Rodro integra infraestructura, operación técnica y desarrollo de
          software para atender necesidades que no se resuelven desde una sola
          especialidad.
        </p>
      </div>

      <div className="mt-10 grid items-start gap-6 lg:mt-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">
        <div
          className="grid gap-3"
          role="tablist"
          aria-label="Capacidades de Rodro"
        >
          {capabilities.map((capability, index) => {
            const isActive = active === index;

            return (
              <button
                key={capability.number}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="capability-panel"
                onClick={() => selectCapability(index)}
                className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition duration-300 sm:p-6 ${
                  isActive
                    ? "border-slate-900 bg-slate-950 text-white shadow-xl shadow-slate-950/15"
                    : "border-slate-200 bg-white text-slate-950 hover:border-yellow-300 hover:shadow-lg"
                }`}
              >
                <span
                  className={`text-xs font-bold tracking-[0.18em] ${
                    isActive ? "text-yellow-300" : "text-yellow-500"
                  }`}
                >
                  {capability.number}
                </span>
                <h3 className="mt-2 text-lg font-bold leading-snug sm:text-xl">
                  {capability.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-5 ${
                    isActive ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {capability.summary}
                </p>

                {isActive && !hasInteracted && (
                  <span
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-yellow-400 motion-safe:animate-capability-progress"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div id="capability-panel" role="tabpanel" aria-live="polite">
          <CapabilityVisual capability={capabilities[active]} />
        </div>
      </div>

      <style jsx global>{`
        @keyframes capability-reveal {
          from {
            opacity: 0.45;
            transform: scale(1.025);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes capability-progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-capability-reveal {
          animation: capability-reveal 550ms ease-out both;
        }

        .animate-capability-progress {
          animation: capability-progress 6500ms linear both;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-capability-reveal,
          .animate-capability-progress {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
