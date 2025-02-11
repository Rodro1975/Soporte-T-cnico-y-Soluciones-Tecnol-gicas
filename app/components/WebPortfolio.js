"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Euler.com.co",
    description: "Website for Euler.com.co",
    imageUrl: "/images/ScreenshotEuler.png",
    link: "https://euler.com.co",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "BMS Support Technology",
    description: "Website and CRM system for BMS Support Technology.",
    imageUrl: "/images/ScreenshotBms.png",
    link: "https://bms-support-technology-llc.vercel.app/",
    technologies: ["JavaScript", "Tailwind CSS", "MySql"],
  },
  {
    title: "Archivo Histórico - Libreria UG",
    description: "Archivo Histórico de la Libreria de la UG.",
    imageUrl: "/images/ScreenshotUg.png",
    link: "https://archivo-historico-libreria-ug-supabase.vercel.app/",
    technologies: ["Vercel", "JavaScript", "Tailwind CSS", "postgreSQL"],
  },
  {
    title: "Soporte y Soluciones Tecnologicas (My Page)",
    description: "Your personal website showcasing your services.",
    imageUrl: "/images/ScreenshotRodro.png",
    link: "https://soporte-t-cnico-y-soluciones-tecnol-gicas-pmoi.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Jardin Infantil",
    description: "Website for Jardin Infantil.",
    imageUrl: "/images/ScreenshotKinder.png",
    link: "https://jardin-infantil.vercel.app/",
    technologies: ["Supabase", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Inventario Thales",
    description: "Inventory management system for Thales.",
    imageUrl: "/images/ScreenshotThales.png",
    link: "https://inventario-it-thales.vercel.app/",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "postgreSQL"],
  },
];

export default function WebPortfolio() {
  return (
    <section className="mt-20 py-16 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 text-center">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          🌐 Web Portfolio
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-full h-52">
                  <Image
                    src={project.imageUrl}
                    alt={`Preview of ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={index < 3} // Prioriza la carga de los primeros 3 proyectos
                  />
                  <div className="absolute inset-0 bg-black opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-800 px-3 py-1 text-sm font-semibold rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
