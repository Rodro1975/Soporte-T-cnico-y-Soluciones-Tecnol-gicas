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
    image: "/images/service1.jpg",
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
    <section className="w-full h-screen min-h-[520px] flex items-center justify-center">
      <div className="relative w-full max-w-5xl h-[70vh] md:h-[80vh] lg:h-[90vh] border border-slate-200 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr] overflow-hidden">
        {/* Lado texto / lista */}
        <div className="flex flex-col justify-between px-6 py-6 md:px-8 md:py-12 border-b md:border-b-0 md:border-r border-slate-200 bg-white">
          <div className="space-y-3">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Servicios
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              ¿En qué puedo ayudarte?
            </h2>
            <p className="text-sm md:text-base text-slate-600">
              Integro infraestructura y desarrollo, combinando soporte, redes y
              software para resolver problemas reales de operación.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            {services.map((s, index) => (
              <button
                key={s.title}
                onClick={() => setCurrent(index)}
                className={`w-full rounded-lg text-left text-sm md:text-base px-3 py-2 border transition duration-200 ease-in-out
                  ${
                    index === current
                      ? "bg-yellow-100 border-yellow-400 text-slate-900 font-semibold shadow-sm"
                      : "bg-transparent text-slate-600 hover:bg-slate-100"
                  }`}
                aria-current={index === current ? "true" : "false"}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Indicadores de slide */}
          <div className="mt-6 flex gap-2 justify-center">
            {services.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full border transition
                  ${
                    i === current
                      ? "bg-yellow-400 border-yellow-400"
                      : "bg-slate-200 border-slate-300"
                  }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Lado imagen / detalle del servicio actual */}
        <div className="relative overflow-hidden flex flex-col md:flex-row bg-slate-50 h-full">
          <div className="relative flex-1 min-h-[220px] md:min-h-[260px] lg:min-h-[360px] h-full border-b md:border-b-0 border-slate-200">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-300 scale-105 hover:scale-110"
              priority
            />
          </div>
          <div className="flex-1 px-6 py-6 md:px-8 md:py-12 flex items-center bg-white">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Detalle del servicio
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 leading-tight">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-slate-700">
                {service.description}
              </p>
              <button className="mt-4 px-4 py-2 rounded-lg bg-yellow-400 text-slate-900 font-bold shadow hover:bg-yellow-500 transition focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm md:text-base">
                {service.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
