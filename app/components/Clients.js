"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const clients = [
  {
    client: "THALES",
    title: "LOCAL IT TECHNOLOGY ADMIN",
    description:
      "Managed Support Services: Expert coordination and management of your technical support operations. Proactive IT Infrastructure Administration: Advanced technical support and infrastructure management to ensure business continuity and prevent disruptions.",
    image: "/images/logoThales.png",
  },
  {
    client: "IFF INTERNATIONAL FLAVORS AND FRAGRANCES COLOMBIA",
    title: "LOCAL IT TECHNOLOGY | BMS ADMINISTRATOR",
    description:
      "Technology Project Coordination & Management: Expert coordination and management of technology projects, optimizing operations and improving the efficiency of complex systems.",
    image: "/images/iff.png",
  },
  {
    client: "AVASO COLOMBIA",
    title: "SENIOR ENGINEER OF TECHNICAL SUPPORT",
    description:
      "On-Site Technical Support: Providing expert on-site technical support to ensure the proper functioning of hardware and software.",
    image: "/images/avaso.png",
  },
  {
    client: "MAXTINTAS COLOMBIA",
    title: "SENIOR ENGINEER OF TECHNICAL SUPPORT",
    description:
      "Equipment Installation, Configuration & Maintenance: Executing installations, configurations, testing, and maintenance of equipment to ensure system availability and functionality.",
    image: "/images/logoMaxtintas.jpg",
  },
  {
    client: "SCOPUS MÉXICO",
    title: "CERTIFIED TECHNICIAN IN LEXMARK PRINTING EQUIPMENT",
    description:
      "Lexmark Printer Installation & Configuration: Expert installation and configuration of Lexmark printers, ensuring proper functionality and preventive maintenance.",
    image: "/images/logoScopus.jpg",
  },
  {
    client: "COMPARTAMOS BANCO MÉXICO",
    title: "TECHNICAL SUPPORT AT HELP DESK",
    description:
      "First-Level Technical Support: Providing efficient first-level technical support, managing and resolving incidents effectively.",
    image: "/images/logoCompartamos.jpg",
  },
  {
    client: "GRUPO FINANCIERO INBURSA MÉXICO",
    title: "TECHNICAL SUPPORT AT HELP DESK",
    description:
      "First-Level Technical Support: Providing efficient first-level technical support, managing and resolving incidents effectively.",
    image: "/images/logoImbursa.jpg",
  },
];

export default function Clients() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % clients.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-[90vh] bg-secondary text-white flex items-center justify-center overflow-hidden">
      <div
        className="relative w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {clients.map((client, index) => (
          <div
            key={index}
            className="relative w-full h-full flex-shrink-0 flex items-center justify-center p-8"
          >
            <div className="relative z-20 text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 max-w-xl">
              {/* Client Logo - Using a Square with Aspect Ratio */}
              <div className="w-48 h-32 relative mx-auto mb-4">
                <Image
                  src={client.image}
                  alt={client.client}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-md"
                />
              </div>

              <h3 className="text-2xl font-bold text-yellow-400">
                {client.client}
              </h3>
              <h4 className="text-lg font-semibold mt-2 text-gray-300">
                {client.title}
              </h4>
              <p className="text-md mt-4 text-gray-200">{client.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
