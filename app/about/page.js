import Image from "next/image";
import Recognition from "../components/Recognition";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      {/* SOBRE NOSOTROS / FUNDADOR */}
      <section className="flex items-center bg-neutral-950 text-white lg:min-h-[calc(100svh-80px)]">
        <div className="mx-auto w-full max-w-7xl px-5 py-6 md:px-10 lg:py-5">
          {/* Identidad */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] md:text-xs">
            <span className="text-yellow-400">
              Tecnología / Experiencia / Visión
            </span>

            <span className="text-neutral-400">México — Colombia</span>
          </div>

          {/* Título monumental */}
          <h1 className="my-5 whitespace-nowrap text-center text-[clamp(1.8rem,7.5vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.045em]">
            Sobre nosotros
            <span className="text-yellow-400">.</span>
          </h1>

          {/* Presentación del fundador */}
          <div className="grid items-center gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:gap-12">
            {/* Columna izquierda */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="h-1 w-9 bg-yellow-400" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                  01 / Nuestro origen
                </p>
              </div>

              <h2 className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl lg:text-4xl">
                Experiencia que se transforma en{" "}
                <span className="text-yellow-400">soluciones.</span>
              </h2>

              <div className="space-y-2">
                <h3 className="text-xl font-bold md:text-2xl">
                  Rodrigo Iván Ordóñez Chávez
                </h3>

                <p className="text-xs font-semibold uppercase tracking-wider text-yellow-400">
                  Fundador · Ingeniero en Desarrollo de Software
                </p>
              </div>

              <p className="text-sm leading-relaxed text-neutral-300 md:text-base">
                Rodro Soluciones Tecnológicas nace de una trayectoria
                profesional construida entre México y Colombia, integrando
                infraestructura tecnológica, operaciones IT y desarrollo de
                software para ofrecer soluciones útiles, confiables y adaptadas
                a las necesidades reales de negocios y empresas.
              </p>

              <a
                href="https://www.linkedin.com/in/rodrigo-iv%C3%A1n-ordo%C3%B1ez-ch%C3%A1vez-788127189/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-yellow-400"
              >
                Conocer trayectoria profesional
                <span className="text-yellow-400">↗</span>
              </a>
            </div>

            {/* Columna derecha */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 lg:aspect-[5/4]">
              <Image
                src="/images/fundador-rodro.webp"
                alt="Retrato de Rodrigo Iván Ordóñez Chávez, fundador de Rodro Soluciones Tecnológicas"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NUESTRA FILOSOFÍA */}
      <section className="flex items-center bg-yellow-400 text-neutral-950 lg:min-h-[calc(100svh-80px)]">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 lg:py-12">
          {/* Identificador */}
          <div className="mb-8 flex items-center gap-3">
            <span className="h-1 w-9 bg-black" />

            <p className="text-xs font-bold uppercase tracking-[0.2em]">
              02 / Nuestra filosofía
            </p>
          </div>

          {/* Declaración principal */}
          <h2 className="text-[clamp(2.5rem,6.5vw,6.5rem)] font-black uppercase leading-[0.92] tracking-[-0.045em]">
            La tecnología
            <span className="block">debe resolver,</span>
            <span className="block">no complicar.</span>
          </h2>

          {/* Introducción */}
          <p className="mt-7 max-w-3xl text-lg font-medium leading-relaxed md:text-xl">
            Creemos en soluciones que aportan valor real, simplifican la
            operación y evolucionan con las necesidades de cada negocio.
          </p>

          {/* Principios */}
          <div className="mt-10 grid gap-8 border-t border-black/30 pt-8 md:grid-cols-3 md:gap-12">
            <div className="space-y-3">
              <span className="text-4xl font-black">01.</span>

              <h3 className="text-2xl font-bold">Practicidad</h3>

              <p className="text-base leading-relaxed">
                Desarrollamos e implementamos soluciones útiles, enfocadas en
                resolver necesidades concretas, sin añadir complejidad
                innecesaria.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-4xl font-black">02.</span>

              <h3 className="text-2xl font-bold">Operación real</h3>

              <p className="text-base leading-relaxed">
                Entendemos que la tecnología debe funcionar más allá de la
                teoría, adaptándose a los procesos y desafíos del día a día.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-4xl font-black">03.</span>

              <h3 className="text-2xl font-bold">Evolución inteligente</h3>

              <p className="text-base leading-relaxed">
                Apostamos por soluciones flexibles que puedan adaptarse, mejorar
                y crecer junto con las necesidades de cada negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRAYECTORIA PROFESIONAL */}
      <Recognition />

      {/* EXPERIENCIA INTERNACIONAL */}
      <section className="flex items-center bg-neutral-950 text-white lg:min-h-[calc(100svh-80px)]">
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 lg:py-8">
          {/* Identificador */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-1 w-9 bg-yellow-400" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
              04 / Experiencia internacional
            </p>
          </div>

          {/* Encabezado */}
          <h2 className="text-[clamp(2rem,5.5vw,5.5rem)] font-black uppercase leading-[0.92] tracking-[-0.045em]">
            Dos países.
            <span className="block">
              Una misma visión
              <span className="text-yellow-400">.</span>
            </span>
          </h2>

          {/* Países */}
          <div className="mt-7 grid gap-8 md:grid-cols-2 md:gap-10">
            {/* México */}
            <article className="space-y-3">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/mexico-commercial.webp"
                  alt="Paseo de la Reforma y Ángel de la Independencia en Ciudad de México"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
              </div>

              <h3 className="text-4xl font-black uppercase tracking-tight">
                México<span className="text-yellow-400">.</span>
              </h3>

              <p className="text-xs font-bold uppercase tracking-wider text-yellow-400">
                Tecnología y operación
              </p>

              <p className="text-sm leading-relaxed text-neutral-300 md:text-base">
                Soporte técnico, infraestructura, desarrollo de software y
                soluciones digitales para negocios y empresas.
              </p>
            </article>

            {/* Colombia */}
            <article className="space-y-3">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/colombia-commercial.webp"
                  alt="Panorámica urbana de Bogotá, Colombia"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
              </div>

              <h3 className="text-4xl font-black uppercase tracking-tight">
                Colombia<span className="text-yellow-400">.</span>
              </h3>

              <p className="text-xs font-bold uppercase tracking-wider text-yellow-400">
                Experiencia y colaboración
              </p>

              <p className="text-sm leading-relaxed text-neutral-300 md:text-base">
                Experiencia corporativa, integración tecnológica y colaboración
                comercial en proyectos empresariales.
              </p>
            </article>
          </div>

          {/* Cierre */}
          <p className="mt-6 border-t border-white/15 pt-4 text-sm text-neutral-400">
            Conectamos experiencia, conocimiento y oportunidades más allá de las
            fronteras.
          </p>
        </div>
      </section>
      {/* CONSTRUYAMOS JUNTOS */}
      <section className="bg-yellow-400 text-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 lg:py-20">
          {/* Identificador */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-1 w-9 bg-black" />

            <p className="text-xs font-bold uppercase tracking-[0.2em]">
              05 / Construyamos juntos
            </p>
          </div>

          {/* Encabezado */}
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-black uppercase leading-[0.92] tracking-[-0.045em]">
            El futuro se
            <span className="block">construye juntos.</span>
          </h2>

          {/* Mensaje comercial */}
          <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed md:text-xl">
            Cada negocio tiene desafíos diferentes. Transformemos los tuyos en
            oportunidades a través de la tecnología.
          </p>

          {/* CTA */}
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-5 rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-neutral-800"
          >
            Empecemos a colaborar
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
