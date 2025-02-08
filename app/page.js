"use client";

import CarouselServices from "./components/CarouselServs";
import Counters from "./components/Counters";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section
        className="relative py-48 text-center bg-fixed bg-cover bg-center mt-8"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10 container mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Welcome to Our Support Services
          </h2>
          <p className="text-lg mb-6 text-white drop-shadow-lg">
            Providing expert technical support and solutions for all your
            technology needs.
          </p>
          <a
            href="/contact"
            className="bg-yellow-500 text-black py-4 px-6 rounded inline-block font-bold hover:bg-yellow-400 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Services Section */}
      <CarouselServices />

      {/* About Us Section */}
      <Counters />

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 text-center">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
          <p className="text-lg mb-6">
            Need assistance or have questions? Reach out to us and we will be
            happy to help!
          </p>
          <a
            href="/contact"
            className="bg-black text-white py-2 px-6 rounded inline-block font-bold hover:bg-gray-800 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
