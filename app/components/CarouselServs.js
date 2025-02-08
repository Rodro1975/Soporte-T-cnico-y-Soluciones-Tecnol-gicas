"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const services = [
  {
    title: "ADVICE AND CONSULTING",
    description:
      "Strategic IT consulting to align technology with your business goals.",
    image: "/images/support.jpg",
  },
  {
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    description:
      "Tailored software solutions designed to meet your unique business requirements.",
    image: "/images/service2.jpg",
  },
  {
    title: "PREVENTIVE AND CORRECTIVE MAINTENANCE TO SERVERS",
    description:
      "Ensuring optimal server performance and reliability through regular maintenance.",
    image: "/images/service3.jpg",
  },
  {
    title: "VIRTUALIZATION IN HYPER-V",
    description:
      "Efficient virtualization solutions using Hyper-V technology for enhanced resource utilization.",
    image: "/images/service4.jpg",
  },
  {
    title: "SPECIALIZED TECHNICAL SUPPORT",
    description:
      "Expert technical assistance and troubleshooting for complex IT issues.",
    image: "/images/service1.jpg",
  },
  {
    title: "IT Infrastructure Management",
    description:
      "Comprehensive management and optimization of your IT infrastructure for seamless operations.",
    image: "/images/service2.jpg",
  },
];

export default function CarouselServices() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] bg-secondary text-white flex items-center justify-center overflow-hidden">
      {/* Carousel Container */}
      <div
        className="relative w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-full h-full flex-shrink-0 flex items-center justify-center p-8"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              style={{ objectFit: "cover" }}
              className="absolute inset-0 z-0"
            />
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            <div className="relative z-20 text-center">
              <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-lg">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-secondary z-30"></div>
      <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-secondary z-30"></div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              current === index
                ? "bg-yellow-500"
                : "bg-gray-500 hover:bg-yellow-300"
            } transition-colors duration-300`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
