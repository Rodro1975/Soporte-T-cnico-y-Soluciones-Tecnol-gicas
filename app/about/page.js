"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Recognition from "../components/Recognition";
import Bio from "../components/Bio";

export default function About() {
  return (
    <div className="bg-warm-light text-gray-800">
      {/* Header Section */}
      <header className="relative py-16 text-center mt-20">
        {" "}
        {/* Added mt-20 to push header down */}
        <Image
          src="/images/warm.jpg"
          alt="Warm Background"
          fill
          style={{ objectFit: "cover", zIndex: -1 }}
          className="absolute inset-0"
        />
        <div className="container mx-auto px-4 relative">
          <div className="relative w-48 h-24 mx-auto mb-8"> </div>
          <h2 className="text-white text-4xl font-bold uppercase drop-shadow-md">
            Why Choose Us
          </h2>
        </div>
      </header>

      {/* Bio Section */}
      <section>
        <Bio />
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              About Rodro Support and Technological Solutions
            </h2>
            <p className="text-lg mb-4">
              We are dedicated to providing innovative and reliable IT solutions
              that empower businesses to thrive. Our expertise ensures tailored
              services that address today’s technology challenges.
            </p>
            <p className="text-lg">
              With a client-centric approach, we become your trusted partner in
              navigating IT complexities.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/web.jpg"
              alt="Team Collaboration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values Section */}
      <section className="mt-20 py-16 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 text-center">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              text: "To deliver exceptional IT support and solutions that enhance productivity and efficiency.",
            },
            {
              title: "Our Vision",
              text: "To be a leader in IT solutions, recognized for excellence, innovation, and customer satisfaction.",
            },
            {
              title: "Core Values",
              text: "Innovation, Integrity, Excellence, Customer Focus, Collaboration.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-warm-dark">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        {/* Recognition Section */}
        <Recognition />
      </section>

      {/* Geographic Presence Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Presence</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                country: "Mexico",
                image: "/images/mexico.jpg",
                text: "Strong presence in Mexico, serving various industries with top-tier IT solutions.",
              },
              {
                country: "Colombia",
                image: "/images/colombia.jpg",
                text: "Committed to delivering exceptional technological solutions in Colombia.",
              },
            ].map((location, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg w-full max-w-sm mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-64">
                  <Image
                    src={location.image}
                    alt={`${location.country} - IT Solutions`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <p className="text-white text-lg font-bold text-center">
                    {location.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
