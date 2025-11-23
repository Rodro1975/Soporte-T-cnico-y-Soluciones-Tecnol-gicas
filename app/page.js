"use client";

import React from "react";
import CarouselServices from "./components/CarouselServs";
import Counters from "./components/Counters";
import Clients from "./components/Clients";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section
        className="relative py-48 text-center bg-fixed bg-cover bg-center mt-8"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Soporte técnico y soluciones tecnológicas personalizadas
          </h2>
          <p className="text-lg mb-6 text-white drop-shadow-lg">
            Mantenimiento, implementación e integración de soluciones IT para
            empresas, oficinas y proyectos especiales.
          </p>
          <a
            href="/contact"
            className="bg-yellow-500 text-black py-4 px-6 rounded inline-block font-bold hover:bg-yellow-400 transition duration-300"
          >
            Contáctame
          </a>
        </div>
      </section>

      {/* Services Section */}
      <CarouselServices />

      {/* About / Counters */}
      <Counters />

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 text-center">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8">
            ¿Listo para mejorar tu infraestructura tecnológica?
          </h3>
          <p className="text-lg mb-6">
            Puedo ayudarte a planear, implementar y mantener soluciones IT
            alineadas a tus necesidades reales, sin humo ni choro.
          </p>
          <a
            href="/contact"
            className="bg-black text-white py-2 px-6 rounded inline-block font-bold hover:bg-gray-800 transition duration-300"
          >
            Escríbeme
          </a>
        </div>
      </section>

      {/* Clients Section */}
      <Clients />
    </div>
  );
}
