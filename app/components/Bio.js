"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Bio() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* FOTO */}
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg mb-6">
            <Image
              src="/images/rodrigo_photo.jpg"
              alt="Rodrigo Ivan Ordoñez Chávez"
              fill
              className="object-cover object-top"
            />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-black mb-1">
            Rodrigo Iván Ordoñez Chávez
          </h3>

          <p className="text-sm md:text-base text-gray-600 max-w-xl">
            Consultor IT especializado en infraestructura, soporte corporativo y
            desarrollo web. Coordino soluciones completas para empresas y
            proyectos profesionales.
          </p>

          {/* ICONOS */}
          <div className="mt-5 flex items-center gap-5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rodrigo-iv%C3%A1n-ordo%C3%B1ez-ch%C3%A1vez-788127189/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:scale-110 transition-transform duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>

            {/* Email */}
            <a
              href="mailto:rodrigoivanordonezchavez@gmail.com"
              className="text-red-600 hover:text-red-700 hover:scale-110 transition-transform duration-200"
              aria-label="Email"
            >
              <FaEnvelope size={26} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
