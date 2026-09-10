const capabilities = [
  {
    number: "01",
    title: "Infraestructura y operación IT/OT",
    description:
      "Continuidad operativa para entornos corporativos e industriales donde la tecnología debe responder todos los días.",
    areas: [
      "Redes, endpoints y accesos",
      "Datacenter, IDF e infraestructura técnica",
      "Integración IT/OT, BMS y seguridad física",
    ],
  },
  {
    number: "02",
    title: "Software y soluciones internas",
    description:
      "Aplicaciones construidas alrededor del proceso real para organizar información, automatizar tareas y dar visibilidad a la operación.",
    areas: [
      "Aplicaciones web y plataformas SaaS",
      "Bases de datos e integraciones",
      "Automatización de procesos",
    ],
  },
  {
    number: "03",
    title: "Proyectos técnicos y Smart Hands",
    description:
      "Ejecución y coordinación en sitio para diagnósticos, despliegues e intervenciones que requieren manos técnicas confiables.",
    areas: [
      "Diagnóstico y soporte especializado",
      "Implementaciones y levantamientos",
      "Coordinación con equipos remotos",
    ],
  },
];

export default function Capabilities() {
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

      <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
        {capabilities.map((capability) => (
          <article
            key={capability.number}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-xl hover:shadow-slate-900/10 md:p-7"
          >
            <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100" />

            <span className="text-sm font-bold tracking-[0.18em] text-yellow-500">
              {capability.number}
            </span>
            <h3 className="mt-5 text-xl font-bold leading-snug text-slate-950 md:text-2xl">
              {capability.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-600 md:text-base">
              {capability.description}
            </p>

            <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
              {capability.areas.map((area) => (
                <li
                  key={area}
                  className="flex gap-3 text-sm leading-5 text-slate-700"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400"
                    aria-hidden="true"
                  />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
