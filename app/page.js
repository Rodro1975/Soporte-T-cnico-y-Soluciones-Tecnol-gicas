"use client";

import React from "react";
import CarouselServices from "./components/CarouselServs";
import Counters from "./components/Counters";
import Clients from "./components/Clients";
import HeroType from "./components/HeroType";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* HERO - pantalla completa */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        {/* Contenido */}
        <div className="relative z-10 max-w-3xl px-4 text-center space-y-6">
          <HeroType />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-balance drop-shadow-lg">
            Haz que tu infraestructura y desarrollo sean una ventaja.
            <span className="block text-yellow-400 mt-2">
              Operación sin límites. Crece sin interrupciones.
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-200/80 text-balance">
            Tecnología robusta, resultados visibles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-yellow-400 text-black font-semibold px-8 py-3 text-sm sm:text-base hover:bg-yellow-300 transition duration-200"
            >
              Agenda una llamada
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-gray-400/60 text-gray-100 px-8 py-3 text-sm sm:text-base hover:bg-white/10 transition duration-200"
            >
              Ver proyectos destacados
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="min-h-screen flex items-center bg-background">
        <div className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24">
          <CarouselServices />
        </div>
      </section>

      {/* COUNTERS / ABOUT */}
      <section className="min-h-screen flex items-center bg-background">
        <div className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24">
          <Counters />
        </div>
      </section>

      {/* CLIENTS */}
      <section
        id="projects"
        className="min-h-screen flex items-center bg-background"
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
            ¿Listo para optimizar tu infraestructura IT y alcanzar el siguiente
            nivel?
          </h2>

          <p className="text-lg md:text-xl text-gray-800/90 max-w-xl mx-auto text-balance">
            Analicemos juntos tu operación, tus objetivos y el estado actual de
            tu infraestructura. Te presentaré una hoja de ruta realista,
            eficiente y libre de tecnicismos innecesarios.
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
