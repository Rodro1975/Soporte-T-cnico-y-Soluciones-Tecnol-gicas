"use client";

import Image from "next/image";
import Bio from "../components/Bio";
import Recognition from "../components/Recognition";
import Work from "../components/Work";

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
            Soluciones web e infraestructura.{" "}
            <span className="block text-yellow-300 mt-1">
              Opero y desarrollo, todo desde la experiencia IT.
            </span>
          </h1>
          <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
            Más de veinte años resolviendo retos IT, construyendo sistemas
            robustos y aplicaciones web funcionales. Hago que la tecnología deje
            de ser un problema y se convierta en ventaja.
          </p>
        </div>
      </section>

      {/* BIO (tu componente actual) */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 border-t border-white/5 w-full">
          <Bio />
        </div>
      </section>

      {/* CÓMO TRABAJO / QUÉ APORTO (LIGERO) */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 border-t border-white/5 w-full">
          <Work />
        </div>
      </section>

      {/* RECOGNITION (certificaciones, logros, etc.) */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 border-t border-white/5 w-full">
          <Recognition />
        </div>
      </section>

      {/* PRESENCIA GEOGRÁFICA (MÉXICO / COLOMBIA) */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 border-t border-white/5 w-full">
          <h2 className="text-xl md:text-2xl font-extrabold mb-4 text-black">
            Experiencia internacional: México & Colombia
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mb-10">
            Más que ubicación: conecto equipos, tecnología y cultura en
            operaciones reales. Experiencia comprobada en ambientes locales y
            multinacionales, desde el día a día hasta proyectos estratégicos.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* México */}
            <div className="relative group shadow-xl overflow-hidden h-[220px] flex items-end">
              <Image
                src="/images/mexico.jpg"
                alt="México"
                fill
                className="object-cover group-hover:scale-105 transition duration-500 ease-in-out"
                style={{ zIndex: 1 }}
              />
              <div
                className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition duration-300"
                style={{ zIndex: 2 }}
              />
              <div className="relative z-10 px-6 py-6 backdrop-blur-sm bg-black/35 w-full">
                <h3 className="font-extrabold text-yellow-300 text-lg mb-1">
                  México
                </h3>
                <p className="text-gray-200 text-sm">
                  Soporte, despliegues técnicos y liderazgo en planta y oficina.
                  Experiencia real adaptando tecnología a las necesidades del
                  negocio.
                </p>
              </div>
            </div>
            {/* Colombia */}
            <div className="relative group shadow-xl overflow-hidden h-[220px] flex items-end">
              <Image
                src="/images/colombia.jpg"
                alt="Colombia"
                fill
                className="object-cover group-hover:scale-105 transition duration-500 ease-in-out"
                style={{ zIndex: 1 }}
              />
              <div
                className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition duration-300"
                style={{ zIndex: 2 }}
              />
              <div className="relative z-10 px-6 py-6 backdrop-blur-sm bg-black/35 w-full">
                <h3 className="font-extrabold text-yellow-300 text-lg mb-1">
                  Colombia
                </h3>
                <p className="text-gray-200 text-sm">
                  Proyectos regionales y soporte multinacional para compañías
                  líderes. Impulso la continuidad y evolución tecnológica en
                  ambientes complejos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
