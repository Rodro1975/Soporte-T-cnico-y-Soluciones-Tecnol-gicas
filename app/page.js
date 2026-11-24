"use client";

import React from "react";
import Counters from "./components/Counters";
import Clients from "./components/Clients";
import HeroType from "./components/HeroType";
import Capabilities from "./components/Capabilities";
import FeaturedProjects from "./components/FeaturedProjects";

export default function Home() {
  return (
    <div className="home-immersive bg-background text-foreground">
      {/* HERO - pantalla completa */}
      <section
        className="relative -mt-16 min-h-screen pt-16 md:-mt-20 md:pt-20 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
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
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-yellow-400 text-black font-semibold px-8 py-3 text-sm sm:text-base hover:bg-yellow-300 transition duration-200"
            >
              Cuéntame tu necesidad
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-gray-400/60 text-gray-100 px-8 py-3 text-sm sm:text-base hover:bg-white/10 transition duration-200"
            >
              Ver casos destacados
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

      {/* CLIENTS */}
      <section
        id="trajectory"
        className="min-h-screen flex items-center bg-white"
      >
        <div className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24">
          <Clients />
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100">
        {/* overlay sutil */}
        <div className="absolute inset-0 bg-black/5" />

        <div className="relative z-10 max-w-3xl text-center px-6 space-y-8">
          {/* título */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight text-balance">
            Impulsa tu infraestructura IT.
          </h2>

          <p className="text-lg md:text-xl text-gray-800/90 max-w-xl mx-auto text-balance">
            Analicemos tu operación y te ayudo a definir una estrategia clara,
            práctica y sin tecnicismos.
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-black text-white font-semibold px-10 py-4 text-base md:text-lg hover:bg-gray-800 transition duration-200"
            >
              Agendar llamada gratuita
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
