"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const services = [
  {
    title: "Consultoría y asesoría IT",
    description:
      "Diagnóstico experto de tu entorno tecnológico, identificación de riesgos y propuestas claras para mejorar infraestructura, soporte y continuidad operativa.",
    cta: "Solicita tu análisis gratuito",
    image: "/images/support.jpg",
  },
  {
    title: "Desarrollo de software a medida",
    description:
      "Aplicaciones web eficientes con Next.js, Node.js y bases de datos modernas, pensadas para automatizar procesos y dar visibilidad a tu negocio.",
    cta: "Descubre tu solución personalizada",
    image: "/images/fotis.jpg",
  },
  {
    title: "Mantenimiento de servidores",
    description:
      "Diagnóstico, mantenimiento preventivo y correctivo para servidores físicos o virtuales. Mejoro rendimiento, seguridad y disponibilidad.",
    cta: "Agenda tu revisión técnica",
    image: "/images/it.jpg",
  },
  {
    title: "Virtualización con Hyper-V",
    description:
      "Diseño y administración de entornos virtualizados, optimizando recursos y facilitando la recuperación ante fallas.",
    cta: "Cotiza tu entorno virtual",
    image: "/images/service4.jpg",
  },
  {
    title: "Soporte técnico especializado",
    description:
      "Resolución de incidencias complejas, troubleshooting avanzado y soporte dedicado para ambientes corporativos exigentes.",
    cta: "Contacta soporte experto",
    image: "/images/software.jpg",
  },
];

export default function CarouselServices() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((i) => (i + 1) % services.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const service = services[current];

  return (
    <div className="w-full grid gap-10 lg:gap-12 lg:grid-cols-[1.05fr_1.4fr] items-stretch">
      {/* Lado texto / lista */}
      <div className="flex flex-col justify-between gap-8">
        <div className="space-y-3">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-yellow-500">
            Servicios
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight text-balance">
            ¿En qué puedo ayudarte?
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-xl">
            Integro infraestructura y desarrollo, combinando soporte, redes y
            software para resolver problemas reales de operación, con una visión
            integral de negocio.
          </p>
        </div>

        {/* Lista de servicios: campo más compacto, no a todo lo ancho */}
        <div className="flex flex-col gap-2 max-w-md">
          {services.map((s, index) => (
            <button
              key={s.title}
              onClick={() => setCurrent(index)}
              className={`w-full text-left text-sm md:text-base px-3 py-2 rounded-lg border transition duration-200 ease-in-out
                ${
                  index === current
                    ? "bg-yellow-50 border-yellow-400 text-slate-900 font-semibold shadow-sm"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              aria-current={index === current ? "true" : "false"}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Indicadores de slide */}
        <div className="flex gap-2 justify-start md:justify-center pt-2">
          {services.map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition
                ${i === current ? "bg-yellow-400" : "bg-slate-300"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lado imagen / detalle del servicio actual */}
      <div className="relative flex flex-col justify-center">
        <div className="relative h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover shadow-xl"
            priority
          />

          {/* Overlay de detalle del servicio sobre la imagen */}
          <div className="absolute inset-x-4 bottom-4 md:bottom-6 bg-black/75 backdrop-blur-md rounded-2xl border border-white/10 px-4 py-4 md:px-6 md:py-5">
            <p className="text-[0.65rem] md:text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300">
              Detalle del servicio
            </p>
            <h3 className="mt-1 text-base md:text-lg font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-xs md:text-sm text-gray-200">
              {service.description}
            </p>
            <button className="mt-3 md:mt-4 inline-flex items-center px-4 py-2 rounded-lg bg-yellow-400 text-slate-900 text-xs md:text-sm font-bold hover:bg-yellow-500 transition focus:outline-none focus:ring-2 focus:ring-yellow-400/80">
              {service.cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
