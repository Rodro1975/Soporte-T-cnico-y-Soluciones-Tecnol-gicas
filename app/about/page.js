"use client";

import Image from "next/image";
import Bio from "../components/Bio";
import Recognition from "../components/Recognition";
import Work from "../components/Work";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-background text-foreground min-h-screen pb-20">
      {/* HERO CON WARM.JPG */}
      <section className="relative h-[65vh] flex items-center justify-center bg-fixed bg-cover bg-center">
        {/* Imagen de fondo */}
        <Image
          src="/images/warm.jpg"
          alt="Fondo cálido"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay para que el texto se lea bien */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-3xl px-4 text-center space-y-4">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
            Sobre mí
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-balance">
            Web, infraestructura y operación IT.
            <span className="block text-yellow-300 mt-1">
              Experiencia para proyectos que requieren resultados reales.
            </span>
          </h1>
          <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
            Hago que la tecnología funcione para ti y potencie tu día a día.
          </p>
        </div>
      </section>

      {/* BIO */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 border-t border-white/5 w-full">
          <Bio />
        </div>
      </section>

      {/* CÓMO TRABAJO / QUÉ APORTO */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 border-t border-white/5 w-full">
          <Work />
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 border-t border-white/5 w-full">
          <Recognition />
        </div>
      </section>

      {/* PRESENCIA GEOGRÁFICA */}
      <section className="relative min-h-screen w-full flex items-center bg-transparent overflow-visible">
        {/* SIN GLOW DECORATIVO */}
        {/* Corte curvo inferior */}
        <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[180vw] h-40 bg-background rounded-t-[999px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-center mb-4 text-yellow-400"
          >
            Experiencia internacional
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base text-gray-700 text-center max-w-3xl mx-auto mb-12"
          >
            México & Colombia: dos contextos, un mismo enfoque estratégico.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            {/* Mexico */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative shadow-xl overflow-hidden h-[260px] rounded-xl group"
            >
              <Image
                src="/images/mexico.jpg"
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
              <div className="absolute bottom-0 p-6 backdrop-blur-sm bg-black/25 w-full">
                <h3 className="text-yellow-400 font-extrabold text-lg mb-1">
                  México
                </h3>
                <p className="text-gray-100 text-sm">
                  Soporte, despliegues técnicos y liderazgo operativo real.
                </p>
              </div>
            </motion.div>

            {/* Colombia */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative shadow-xl overflow-hidden h-[260px] rounded-xl group"
            >
              <Image
                src="/images/colombia.jpg"
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
              <div className="absolute bottom-0 p-6 backdrop-blur-sm bg-black/25 w-full">
                <h3 className="text-yellow-400 font-extrabold text-lg mb-1">
                  Colombia
                </h3>
                <p className="text-gray-100 text-sm">
                  Proyectos multinacionales con enfoque estratégico y operativo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
