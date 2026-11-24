"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Suma",
    category: "Software SaaS",
    status: "En operación",
    headline: "Más claridad, menos vueltas.",
    description:
      "Plataforma de gestión empresarial que conecta ventas, inventario, servicios y control financiero en un solo lugar.",
    image: "/projects/suma-commercial.webp",
    url: "https://sumayorganiza.com",
    background: "#e4eaff",
  },
  {
    name: "Aion",
    category: "Tecnología empresarial",
    status: "En desarrollo",
    headline: "Asistencia, presencia y permanencia.",
    description:
      "Solución digital para el registro y control de presencia mediante códigos QR y validación de ubicación.",
    image: "/projects/aion.webp",
    url: "https://aion-sigma.vercel.app",
    background: "#e2e8f0",
  },
  {
    name: "Wattly",
    category: "Innovación e IoT",
    status: "Prototipo digital",
    headline: "Energía que conecta.",
    description:
      "Concepto de estaciones inteligentes de carga para vehículos eléctricos ligeros, con gestión y monitoreo de energía.",
    image: "/projects/wattly.png",
    url: "https://wattly.mx",
    background: "#17212e",
  },
  {
    name: "Archivo Histórico UG",
    category: "Digitalización institucional",
    status: "Proyecto de titulación",
    headline: "Preservar para transformar.",
    description:
      "Plataforma de consulta y gestión documental desarrollada para la Universidad de Guanajuato, pendiente de implementación institucional.",
    image: "/projects/archivo-ug.webp",
    url: "https://archivo-historico-libreria-ug-supabase.vercel.app/",
    background: "#e9e4da",
  },
];

export default function FeaturedProjects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <div className="w-full text-neutral-950">
      <div className="flex items-center gap-4 mb-5">
        <span className="w-9 h-1 bg-yellow-400" />
        <p className="text-xs font-bold uppercase tracking-[0.25em]">
          Proyectos seleccionados
        </p>
      </div>

      <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tight">
        Tecnología que
        <span className="block text-neutral-400">toma forma.</span>
      </h2>

      <div
        className="flex flex-wrap gap-2 mt-7 mb-6"
        role="group"
        aria-label="Seleccionar proyecto"
      >
        {projects.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-pressed={active === index}
            onClick={() => setActive(index)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
              active === index
                ? "bg-black text-white border-black"
                : "border-neutral-300 hover:border-black"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div
        key={project.name}
        className="featured-project-enter grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center"
      >
        <div
          className="relative aspect-video rounded-2xl overflow-hidden flex items-center justify-center p-5 md:p-6"
          style={{ backgroundColor: project.background }}
        >
          <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl">
            <Image
              src={project.image}
              alt={`Interfaz de ${project.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-contain"
            />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500">
            {project.category}
          </p>

          <h3 className="text-4xl md:text-5xl font-black">{project.name}</h3>

          <p className="text-xl font-bold">{project.headline}</p>

          <p className="text-neutral-600 leading-relaxed">
            {project.description}
          </p>

          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            {project.status}
          </p>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-neutral-700 transition-colors"
          >
            Conocer proyecto
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 border-t border-neutral-300 pt-3">
        <Link
          href="/portfolio"
          className="text-sm font-bold hover:underline underline-offset-4"
        >
          Explorar portafolio completo
        </Link>

        <span className="text-sm font-semibold tabular-nums text-neutral-500">
          {String(active + 1).padStart(2, "0")} / 04
        </span>
      </div>
    </div>
  );
}
