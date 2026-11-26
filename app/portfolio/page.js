import Image from "next/image";
import Link from "next/link";


const projects = {
  suma: {
    name: "Suma",
    category: "Software SaaS",
    status: "En operación",
    headline: "Suma a tu negocio.",
    description:
      "Suma es una plataforma de gestión para pequeños negocios que integra ventas, remisiones, inventario, clientes, proveedores y movimientos de Caja en un solo lugar. Ayuda a mantener un control claro de las operaciones diarias, reducir tareas manuales y tomar mejores decisiones.",
    image: "/projects/suma-commercial.webp",
    url: "https://sumayorganiza.com",
    action: "Explorar Suma",
    background: "#e4eaff",
  },
  aion: {
    name: "Aion",
    category: "Software SaaS",
    status: "En evaluación comercial",
    headline: "Control inteligente de presencia.",
    description:
      "Plataforma inteligente de gestión, control y verificación de presencia, asistencia y permanencia, sin necesidad de infraestructura física especializada. Mediante dispositivos móviles y geolocalización, permite registrar entradas y salidas, verificar la presencia durante actividades programadas, generar evidencias y emitir alertas desde un panel administrativo centralizado.",
    note: "Diseñada para evolucionar hacia soluciones híbridas con infraestructura Wi-Fi, tags, aplicaciones móviles nativas e integración con sistemas empresariales.",
    image: "/projects/aion.webp",
    url: "https://aion-sigma.vercel.app",
    action: "Conocer Aion",
    background: "#e2e8f0",
  },
  fe: {
    name: "Field Engineers",
    category: "Software empresarial",
    status: "Desarrollo avanzado",
    headline: "Conecta talento. Coordina operaciones.",
    description:
      "Gestión de ingenieros de campo, clientes, proyectos, asignaciones y operaciones financieras desde una plataforma especializada.",
    image: "/projects/field-engineers.webp",
    url: "https://field-engineers.vercel.app/",
    action: "Explorar Field Engineers",
    background: "#111111",
  },
  wattly: {
    name: "Wattly",
    category: "Innovación e IoT",
    status: "Prototipo digital",
    headline: "Energía que conecta.",
    description:
      "Plataforma tecnológica para la gestión y monitoreo de estaciones inteligentes de carga eléctrica. Su arquitectura adaptable permite configurar el software según las necesidades de diferentes soluciones de movilidad, desde bicicletas y vehículos eléctricos ligeros hasta carros de golf y, potencialmente, automóviles eléctricos.",
    note: "Buscamos aliados estratégicos para llevar la innovación digital a la infraestructura física de carga.",
    image: "/projects/wattly.webp",
    url: "https://wattly.mx",
    action: "Descubrir Wattly",
    background: "#17212e",
  },
  mes: {
    name: "MES industrial",
    category: "Tecnología IT/OT",
    status: "Demostración conceptual",
    headline: "Inteligencia para la operación industrial.",
    description:
      "Concepto de sistema de ejecución de manufactura orientado al monitoreo de líneas de producción, indicadores OEE e integración de infraestructura IT/OT.",
    note: "Datos simulados. Sin conexión a una planta real.",
    image: "/projects/mes-industrial.webp",
    url: null,
    background: "#080e20",
  },
  archivo: {
    name: "Archivo Histórico UG",
    category: "Digitalización institucional",
    status: "Proyecto de titulación",
    headline: "Preservar para transformar.",
    description:
      "Plataforma de consulta y gestión documental desarrollada para la Universidad de Guanajuato, con acceso por roles, administración de material editorial y digitalización de procesos.",
    note: "Pendiente de implementación institucional. Actualmente, solo está disponible la presentación pública del proyecto.",
    image: "/projects/archivo-ug.webp",
    url: "https://archivo-historico-libreria-ug-supabase.vercel.app/",
    action: "Ver presentación",
    background: "#e9e4da",
  },
  qr: {
    name: "QR Maker",
    category: "Herramienta gratuita",
    status: "Disponible",
    headline: "Crea tu QR. Gratis.",
    description:
      "Genera códigos QR para enlaces, WhatsApp, teléfonos y correos electrónicos. Una herramienta sencilla y accesible para todos.",
    image: "/projects/qr-maker.webp",
    url: "https://qr-maker-five.vercel.app/",
    action: "Generar mi código QR",
    background: "#facc15",
  },
  aviso: {
    name: "AvisoTepeapulco",
    category: "Directorio digital",
    status: "Desarrollo completo",
    headline: "Conectando negocios locales.",
    description:
      "Plataforma digital diseñada para dar visibilidad a comercios y servicios de Tepeapulco.",
    image: "/projects/aviso-tepeapulco.webp",
    url: "https://avisotepeapulco.vercel.app/",
    action: "Visitar directorio",
    background: "#f5f5f5",
  },
  stowage: {
    name: "Stowage",
    category: "Inventario técnico",
    status: "Desarrollo pausado",
    headline: "Organización y control de equipos.",
    description:
      "Solución orientada al registro de equipos, movimientos, responsables y estados de inventario técnico.",
    image: "/projects/stowage.webp",
    url: "https://stowage.vercel.app/",
    action: "Explorar proyecto",
    background: "#f5f5f5",
  },
};

function SectionLabel({ number, children, dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-1 w-9 shrink-0 ${dark ? "bg-yellow-400" : "bg-black"}`}
      />
      <p className="text-xs font-bold uppercase tracking-[0.2em]">
        {number} / {children}
      </p>
    </div>
  );
}

function ProjectImage({
  project,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  priority = false,
  ratio = "aspect-[4/3]",
}) {
  return (
    <div
      className={`relative ${ratio} overflow-hidden ${className}`}
      style={{ backgroundColor: project.background }}
    >
      <Image
        src={project.image}
        alt={`Presentación de ${project.name}`}
        fill
        sizes={sizes}
        priority={priority}
        className="object-contain motion-safe:transition-transform motion-safe:duration-700 motion-safe:hover:scale-[1.025]"
      />
    </div>
  );
}

function ProjectLink({ project, dark = false }) {
  if (!project.url) return null;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-4 rounded-full px-6 py-3 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
        dark
          ? "bg-yellow-400 text-black hover:bg-yellow-300"
          : "bg-black text-white hover:bg-neutral-700"
      }`}
    >
      {project.action}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function ProjectInfo({ project, dark = false }) {
  return (
    <div className="space-y-4">
      <div
        className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wider ${
          dark ? "text-neutral-400" : "text-neutral-600"
        }`}
      >
        <span>{project.category}</span>
        <span aria-hidden="true">/</span>
        <span>{project.status}</span>
      </div>

      <h3 className="text-4xl font-black uppercase leading-none tracking-tight md:text-5xl">
        {project.name}.
      </h3>

      <p className="text-xl font-bold">{project.headline}</p>

      <p
        className={`max-w-xl leading-relaxed ${
          dark ? "text-neutral-300" : "text-neutral-600"
        }`}
      >
        {project.description}
      </p>

      {project.note && (
        <p
          className={`text-sm font-medium ${
            dark ? "text-yellow-400" : "text-neutral-600"
          }`}
        >
          {project.note}
        </p>
      )}

      <ProjectLink project={project} dark={dark} />
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="overflow-x-hidden bg-white text-neutral-950">
      {/* 01 — Encabezado y producto principal */}
      <section className="flex items-center bg-neutral-950 text-white lg:min-h-[calc(100svh-80px)]">
        <div className="mx-auto w-full max-w-7xl px-5 py-4 md:px-10 lg:py-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
              Software / Tecnología / Innovación
            </p>

            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              México — Colombia
            </p>
          </div>

          <h1 className="my-4 whitespace-nowrap text-center text-[clamp(2rem,10vw,9rem)] font-black uppercase leading-[0.9] tracking-[-0.035em]">
            Portafolio<span className="text-yellow-400">.</span>
          </h1>

          <div className="space-y-3">
            <SectionLabel number="01" dark>
              Producto propio
            </SectionLabel>

            <ProjectImage
              project={projects.suma}
              priority
              ratio="aspect-[2.7/1]"
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="shadow-2xl"
            />

            <div className="grid items-center gap-3 md:grid-cols-[0.35fr_0.65fr] md:gap-10">
              <div className="space-y-2">
                <h2 className="text-5xl font-black uppercase leading-none tracking-tight md:text-6xl">
                  Suma<span className="text-yellow-400">.</span>
                </h2>

                <p className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                  Software SaaS / En operación
                </p>

                <ProjectLink project={projects.suma} dark />
              </div>

              <div className="space-y-3">
                <p className="text-2xl font-bold">{projects.suma.headline}</p>

                <p className="leading-relaxed text-neutral-300">
                  {projects.suma.description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-neutral-800 pt-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Productos y proyectos seleccionados
            </span>

            <a
              href="#productos"
              aria-label="Explorar más productos"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-neutral-600 text-2xl transition-colors hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              ↓
            </a>
          </div>
        </div>
      </section>

      {/* 02 — Productos empresariales */}
      <section id="productos" className="scroll-mt-24 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionLabel number="02">Productos propios</SectionLabel>

          <h2 className="mt-6 max-w-5xl text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
            Software que
            <span className="block text-neutral-600">impulsa operaciones.</span>
          </h2>

          <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-10">
            <article className="space-y-6">
              <ProjectImage project={projects.aion} ratio="aspect-video" />
              <ProjectInfo project={projects.aion} />
            </article>

            <article className="space-y-6 md:mt-24">
              <ProjectImage project={projects.fe} />
              <ProjectInfo project={projects.fe} />
            </article>
          </div>
        </div>
      </section>

      {/* 03 — Innovación y soluciones especializadas */}
      <section className="bg-neutral-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionLabel number="03" dark>
            Innovación aplicada
          </SectionLabel>

          <h2 className="mt-6 text-5xl font-black uppercase leading-none tracking-tight md:text-8xl">
            Más allá
            <span className="block text-yellow-400">del código.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg text-neutral-400">
            Exploramos nuevas formas de conectar software, infraestructura y
            necesidades reales.
          </p>

          <div className="mt-14 space-y-14 md:space-y-20">
            {[projects.wattly, projects.mes, projects.archivo].map(
              (project, index) => (
                <article
                  key={project.name}
                  className="grid items-center gap-8 border-t border-neutral-800 pt-10 md:grid-cols-2 md:gap-14"
                >
                  <div className={index % 2 ? "md:order-2" : ""}>
                    <ProjectImage
                      project={project}
                      ratio={
                        project.name === "MES industrial"
                          ? "aspect-[4/3]"
                          : "aspect-video"
                      }
                    />
                  </div>

                  <div className={index % 2 ? "md:order-1" : ""}>
                    <ProjectInfo project={project} dark />
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* 04 — QR Maker */}
      <section className="flex items-center bg-yellow-400 py-16 text-black lg:min-h-[calc(100svh-80px)]">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionLabel number="04">Tecnología para todos</SectionLabel>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-widest">
                QR Maker / Herramienta gratuita
              </p>

              <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
                Crea tu QR.
                <span className="block">Gratis.</span>
              </h2>

              <p className="max-w-lg text-lg leading-relaxed">
                {projects.qr.description}
              </p>

              <ProjectLink project={projects.qr} />

              <p className="text-sm font-semibold">
                Una herramienta de Rodro Soluciones Tecnológicas.
              </p>
            </div>

            <ProjectImage project={projects.qr} />
          </div>
        </div>
      </section>

      {/* 05 — Otros desarrollos y cierre comercial */}
      <section className="flex flex-col bg-white lg:min-h-[calc(100svh-80px)]">
        {/* Otros desarrollos */}
        <div className="flex flex-1 items-center py-10 md:py-12">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
            <SectionLabel number="05">Otros desarrollos</SectionLabel>

            <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
              Exploramos.
              <span className="block text-neutral-600">Construimos.</span>
            </h2>

            <div className="mt-7 divide-y divide-neutral-300 border-y border-neutral-300">
              {[projects.aviso, projects.stowage].map((project, index) => (
                <details key={project.name} className="group">
                  <summary className="flex cursor-pointer list-none items-center gap-4 py-4 [&::-webkit-details-marker]:hidden">
                    <span className="text-xs font-bold text-neutral-500">
                      0{index + 1}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="break-words text-xl font-black md:text-3xl">
                        {project.name}
                      </h3>

                      <p className="mt-1 text-sm text-neutral-600">
                        {project.category} / {project.status}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-xl group-open:bg-black group-open:text-white"
                    >
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>

                  <div className="grid items-center gap-8 pb-8 md:grid-cols-2">
                    <ProjectImage project={project} ratio="aspect-video" />

                    <div className="space-y-4">
                      <p className="text-xl font-bold">{project.headline}</p>

                      <p className="leading-relaxed text-neutral-600">
                        {project.description}
                      </p>

                      <ProjectLink project={project} />
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Cierre comercial */}
        <div className="flex flex-1 items-center border-b border-neutral-800 bg-neutral-950 py-10 text-white md:py-12">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
            <div className="flex items-center gap-3">
              <span className="h-1 w-9 shrink-0 bg-yellow-400" />

              <p className="text-xs font-bold uppercase tracking-[0.2em]">
                Construyamos algo juntos
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl">
              Tu idea.
              <span className="block text-yellow-400">Nuestra tecnología.</span>
            </h2>

            <div className="mt-6 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
              <p className="max-w-lg leading-relaxed text-neutral-300">
                Cada proyecto comienza con una necesidad. Conectemos nuestra
                experiencia con tu próximo reto.
              </p>

              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-5 rounded-full bg-yellow-400 px-7 py-4 text-sm font-bold text-black transition-colors hover:bg-yellow-300"
              >
                Hablemos de tu proyecto
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
