"use client"; // Directiva para indicar que es un componente del cliente

import { useState, useEffect } from "react";
import Image from "next/image";
import CountryCard from "../components/CountryCard";

export default function About() {
  // Estado para el contador
  const [count, setCount] = useState(0);
  const maxCount = 20; // Valor máximo para el contador

  //paises para las tarjetas countrycards
  const countries = [
    { name: "Colombia", flagUrl: "/images/colombia.png" },
    { name: "México", flagUrl: "/images/mexico.png" },
    { name: "Argentina", flagUrl: "/images/argentina.png" },
    { name: "Brazil", flagUrl: "/images/brazil.png" },
    { name: "Canada", flagUrl: "/images/canada.png" },
    // Añade más países aquí
  ];

  // Simular el incremento del contador
  useEffect(() => {
    if (count < maxCount) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1); // Incrementa el contador
      }, 100); // Velocidad de incremento (puedes ajustarlo)

      return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }
  }, [count]); // Dependencia en count, para detenerlo al llegar a maxCount

  return (
    <div className="bg-background text-foreground">
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-lg">
            We are a dedicated team of IT professionals committed to providing
            exceptional support and solutions to ensure your technology works
            seamlessly. Our mission is to deliver top-notch services that meet
            the needs of our clients with precision and care.
          </p>
          <p className="text-lg mt-4">
            With years of experience in technical support and IT management, we
            offer a range of services designed to address the unique challenges
            of modern technology. Our goal is to help you maintain smooth and
            efficient operations, providing peace of mind through reliable
            support.
          </p>

          {/* Contador */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold">Years of Experience</h3>
            <p className="text-6xl font-semibold text-primary">{count}+</p>
          </div>
        </div>
      </section>

      <section
        id="values-mission"
        className="py-16 bg-gradient-to-b from-yellow-200 via-gray-200 to-gray-100 text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Values and Mission</h2>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Values</h3>
            <ul className="list-disc list-inside text-left mx-auto max-w-lg">
              <li className="text-lg mb-2">Innovation</li>
              <li className="text-lg mb-2">Integrity</li>
              <li className="text-lg mb-2">Excellence</li>
              <li className="text-lg mb-2">Commitment</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Mission</h3>
            <p className="text-lg leading-relaxed">
              Our mission is to provide innovative and effective technological
              solutions that optimize processes and enhance operational
              efficiency. We are committed to upholding the highest standards of
              integrity and excellence in all our endeavors.
            </p>
          </div>
        </div>
      </section>

      {/* Primera sección */}
      <section className="py-16 bg-white">
        <div className="mt-12 mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            BMS Support technology LLC Partnership
          </h3>
          <p className="text-lg mb-4">
            We are proud to be partners with{" "}
            <strong>BMS Support Technology</strong>, a company that legally
            supports us in our operations. While we are an independent team, BMS
            Support helps us ensure we meet all necessary legal and professional
            standards.
          </p>
          <a
            href="https://www.linkedin.com/company/bms-support-technology-llc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/logoBMS.png"
              alt="BMS Support Logo"
              width={192}
              height={64}
              className="mx-auto"
            />
          </a>
        </div>
      </section>

      {/* Segunda sección con título y tarjetas de países */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Presence</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {countries.map((country) => (
              <CountryCard
                key={country.name}
                country={country.name}
                flagUrl={country.flagUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
