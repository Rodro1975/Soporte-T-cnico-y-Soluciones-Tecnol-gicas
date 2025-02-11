"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Bio() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg mb-6">
            <Image
              src="/images/rodrigo_photo.jpg"
              alt="Rodrigo Iván Ordoñez Chávez"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Rodrigo Iván Ordoñez Chávez
          </h3>
          <p className="text-md text-gray-700 max-w-lg">
            As the lead IT consultant at{" "}
            <span className="font-semibold">
              Rodro Support and Technological Solutions
            </span>
            , Rodrigo oversees all aspects of service delivery, ensuring client
            satisfaction and technical excellence.
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://www.linkedin.com/in/rodrigoiv%C3%A1n-ordo%C3%B1ezch%C3%A1vez-788127189/"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:rodrigoivanordonezchavez@gmail.com"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
