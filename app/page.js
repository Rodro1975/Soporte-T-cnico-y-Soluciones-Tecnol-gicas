
import React from "react";
import Counters from "./components/Counters";
import Clients from "./components/Clients";
import HeroType from "./components/HeroType";
import Capabilities from "./components/Capabilities";
import FeaturedProjects from "./components/FeaturedProjects";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="home-immersive bg-background text-foreground">
      {/* HERO - pantalla completa */}
      <section
        className="relative -mt-16 min-h-screen pt-16 md:-mt-20 md:pt-20 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        {/* Contenido */}
        <div className="relative z-10 max-w-4xl px-5 text-center space-y-6">
          <HeroType />

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white text-balance drop-shadow-lg">
            Infraestructura IT/OT y software
            <span className="block text-yellow-400 mt-2">
              para resolver necesidades reales de tu operación.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-xl text-gray-100/90 text-balance">
            Cada solución parte de entender tu entorno, conectar las áreas
            técnicas y construir lo adecuado para que tu operación funcione
            mejor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center rounded-full bg-yellow-400 text-black font-semibold px-8 py-3 text-sm sm:text-base hover:bg-yellow-300 transition duration-200"
            >
              Encuentra tu solución
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-gray-400/60 text-gray-100 px-8 py-3 text-sm sm:text-base hover:bg-white/10 transition duration-200"
            >
              Explora nuestros proyectos
            </a>
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section
        id="experience"
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-black"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <Counters />
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="flex items-center bg-yellow-400">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-8">
          <Capabilities />
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section
        id="projects"
        className="relative flex items-center bg-neutral-100 text-neutral-950"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <FeaturedProjects />

          <div className="flex justify-center mt-3">
            <a
              href="#trajectory"
              aria-label="Continuar a trayectoria profesional"
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
      </section>

      {/* TRAYECTORIA PROFESIONAL */}
      <section
        id="trajectory"
        className="relative flex items-center bg-white text-neutral-950"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-8">
          <Clients />
        </div>
      </section>

      {/* CONTACT */}

      {/* CONTACTO COMERCIAL */}
      <section
        id="contact"
        className="relative flex items-center bg-yellow-400 text-neutral-950"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-10">
          {/* Encabezado editorial */}
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="h-px w-10 bg-neutral-950" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em]">
              Construyamos algo juntos
            </p>
          </div>

          {/* Mensaje principal */}
          <h2 className="text-[clamp(2.75rem,7.5vw,7.5rem)] font-black leading-[0.92] tracking-[-0.06em]">
            <span className="block">TU SIGUIENTE</span>

            <span className="block">RETO.</span>

            <span className="block mt-2">NUESTRA SOLUCIÓN.</span>
          </h2>

          {/* Conversión comercial */}
          <div className="mt-8 md:mt-10 border-t border-black/30 pt-6 md:pt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-xl space-y-2">
              <p className="text-lg md:text-2xl font-bold">
                Toda solución comienza con una conversación.
              </p>

              <p className="text-sm md:text-lg text-neutral-800">
                Conectemos nuestra experiencia con los retos de tu negocio y
                hagamos que las cosas sucedan.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex self-start lg:self-auto shrink-0 items-center justify-center rounded-full bg-black px-8 py-4 md:px-10 md:py-5 text-sm md:text-base font-semibold text-white hover:bg-neutral-800 transition-colors"
            >
              Pongámonos en contacto
            </a>
          </div>

          {/* Cierre editorial */}
          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-between gap-3 text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em] text-neutral-800">
            <span>México — Colombia</span>
            <span>Tecnología sin fronteras</span>
          </div>
        </div>
      </section>
    </div>
  );
}
