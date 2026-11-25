const capabilities = [
  {
    number: "01",
    title: "BMS",
    description: "Gestión, automatización y control de instalaciones.",
  },
  {
    number: "02",
    title: "CCTV",
    description: "Integración de sistemas de seguridad y videovigilancia.",
  },
  {
    number: "03",
    title: "Data center",
    description:
      "Sistemas de supresión de incendios para infraestructura crítica.",
  },
  {
    number: "04",
    title: "KNX",
    description: "Automatización e iluminación inteligente de instalaciones.",
  },
];

export default function Recognition() {
  return (
    <section className="flex items-center bg-white text-neutral-950 lg:min-h-[calc(100svh-80px)]">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 lg:py-12">
        {/* Identificador */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-1 w-9 bg-yellow-400" />

          <p className="text-xs font-bold uppercase tracking-[0.2em]">
            03 / Trayectoria profesional
          </p>
        </div>

        {/* Encabezado */}
        <h2 className="text-[clamp(2.5rem,6.5vw,6.5rem)] font-black uppercase leading-[0.92] tracking-[-0.045em]">
          Experiencia
          <span className="block">
            que respalda
            <span className="text-yellow-400">.</span>
          </span>
        </h2>

        {/* Experiencia y capacidades */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Experiencia corporativa */}
          <div className="space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
              Experiencia corporativa / Colombia
            </p>

            <h3 className="text-4xl font-black md:text-5xl">IFF Colombia</h3>

            <p className="text-xl font-semibold">
              Infraestructura e integración tecnológica.
            </p>

            <p className="text-base leading-relaxed text-neutral-600">
              Experiencia en el liderazgo de implementación tecnológica,
              coordinación técnica y puesta en marcha de sistemas para
              instalaciones corporativas e industriales.
            </p>

            <div className="border-l-4 border-yellow-400 py-2 pl-5">
              <p className="text-lg font-bold">Reconocimiento profesional</p>

              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                Reconocimiento recibido durante la trayectoria profesional en
                IFF Colombia, vinculada a proyectos de infraestructura
                tecnológica.
              </p>
            </div>
          </div>

          {/* Capacidades técnicas */}
          <div>
            {capabilities.map((item) => (
              <div
                key={item.number}
                className="flex items-start gap-5 border-b border-neutral-200 py-4 first:pt-0"
              >
                <span className="text-2xl font-black text-yellow-600">
                  {item.number}.
                </span>

                <div className="space-y-1">
                  <h4 className="text-xl font-bold">{item.title}</h4>

                  <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contexto profesional */}
        <p className="mt-8 border-t border-neutral-200 pt-4 text-xs text-neutral-500">
          Experiencia adquirida durante la trayectoria profesional del fundador
          de Rodro Soluciones Tecnológicas.
        </p>
      </div>
    </section>
  );
}
