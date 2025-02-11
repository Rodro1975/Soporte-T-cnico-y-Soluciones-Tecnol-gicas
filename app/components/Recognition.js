"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Recognition() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Recognition for IT Infrastructure Contribution
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center space-y-6 md:order-first"
          >
            <div className="relative w-[50%] h-[300px] overflow-hidden rounded-lg shadow-lg border-4 border-yellow-500">
              <Image
                src="/images/reconocimientoIff.jpg"
                alt="Recognition PDF"
                fill
                style={{ objectFit: "contain" }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="relative h-48 overflow-hidden rounded-lg shadow-md border-4 border-yellow-500 hidden md:block">
                <Image
                  src="/images/fraganciasIff.jpg"
                  alt="Office Building"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="relative h-48 overflow-hidden rounded-lg shadow-md border-4 border-yellow-500">
                <Image
                  src="/images/megaport.jpg"
                  alt="Building Exterior"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              We are proud to acknowledge{" "}
              <span className="font-semibold">Rodrigo Iván Ordoñez Chávez</span>{" "}
              for his significant contribution to the successful establishment
              of the IT infrastructure for IFF Colombia, including the{" "}
              <span className="font-semibold">BMS project</span>.
            </p>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              His crucial role involved coordinating the installation of the IT
              infrastructure, encompassing the{" "}
              <span className="font-semibold">
                Building Management System (BMS)
              </span>
              , <span className="font-semibold">Closed-Circuit TV (CCTV)</span>,{" "}
              <span className="font-semibold">Fire Suppression System</span> for
              the data center, and the{" "}
              <span className="font-semibold">
                KNX-based intelligent lighting system
              </span>
              . This comprehensive effort ensured a secure, efficient, and
              energy-conscious operational environment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This recognition highlights our commitment to excellence and our
              ability to deliver impactful solutions in complex technological
              environments.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
