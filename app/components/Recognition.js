"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Recognition() {
  return (
    <section className="relative min-h-screen w-screen py-24 bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 overflow-visible left-1/2 -translate-x-1/2">
      {/* Glows decorativos */}
      <div className="pointer-events-none absolute -right-32 -top-24 w-64 h-64 rounded-full bg-yellow-400/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 w-56 h-56 rounded-full bg-yellow-200/40 blur-3xl" />

      {/* Corte curvo inferior grande */}
      <div className="pointer-events-none absolute -bottom-36 left-1/2 -translate-x-1/2 w-[220vw] h-52 bg-background rounded-t-[999px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center gap-16">
        {/* Bloque imágenes vertical */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }} // 🔁 ahora se activa cada vez que entra
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 md:w-1/2 w-full"
        >
          <div className="relative w-full max-w-md aspect-[3/4] shadow-2xl">
            <Image
              src="/images/reconocimientoIff.jpg"
              alt="Reconocimiento IFF Colombia"
              fill
              className="object-contain"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            <div className="relative h-40 shadow-lg hidden md:block">
              <Image
                src="/images/fraganciasIff.jpg"
                alt="Instalaciones IFF Colombia"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 shadow-lg">
              <Image
                src="/images/megaport.jpg"
                alt="Infraestructura y conectividad"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Bloque texto fluido */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }} // 🔁 igual aquí
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base text-gray-800 leading-relaxed space-y-4 md:w-1/2 w-full"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-gray-900 text-balance">
            Reconocimiento en infraestructura IT
          </h2>
          <p>
            Lideré la implementación tecnológica y de BMS en la planta de IFF
            Colombia, desde la coordinación técnica a la puesta en marcha.
          </p>
          <ul className="list-disc list-inside space-y-1 ml-1">
            <li>
              <span className="font-semibold">BMS</span> y control de
              instalaciones.
            </li>
            <li>
              <span className="font-semibold">CCTV</span> y sistemas de
              seguridad.
            </li>
            <li>
              <span className="font-semibold">Supresión de incendios</span> para
              data center.
            </li>
            <li>
              Iluminación inteligente{" "}
              <span className="font-semibold">(KNX)</span>.
            </li>
          </ul>
          <p>
            Estos proyectos no sólo son diplomas: reflejan cómo integro
            tecnología y operación para generar valor real.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
