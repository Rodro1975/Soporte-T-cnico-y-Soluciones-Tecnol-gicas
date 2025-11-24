"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "archivo-ug",
    title: "Archivo Histórico · Librería UG",
    role: "Fullstack / Arquitectura de solución",
    period: "2024 – 2025",
    description:
      "Plataforma web para consulta, gestión y solicitudes de material editorial de la Universidad de Guanajuato. Construida con enfoque en seguridad (RLS), roles por tipo de usuario y experiencia clara para lectores, editores y administradores.",
    highlights: [
      "Paneles diferenciados por rol (Administrador, Editor, Lector).",
      "Carga y gestión de PDFs, catálogos y fichas bibliográficas.",
      "Reportes, estadísticas y generación de PDFs con jsPDF.",
    ],
    technologies: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    link: "https://archivo-historico-libreria-ug-supabase.vercel.app/",
    imageUrl: "/images/portfolio-archivo.png",
    status: "En producción",
  },
  {
    id: "wattly",
    title: "Wattly · Estaciones de carga VEL",
    role: "Arquitectura, producto y frontend",
    period: "2024 – 2025",
    description:
      "Plataforma para gestionar estaciones de carga para vehículos eléctricos ligeros (VEL): scooters, bicis y carritos de golf. Incluye diseño de kiosko físico, modelo de negocio y panel web en desarrollo para monitoreo, cobro y administración.",
    highlights: [
      "Diseño de app web tipo kiosko para pantallas verticales.",
      "Integración planificada con hardware IoT (Tuya) y medición de energía.",
      "Modelo multi-cliente: universidades, hoteles, gimnasios y espacios públicos.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#", // cuando tengas demo público, lo cambias
    imageUrl: "/images/portfolio-wattly.png",
    status: "En desarrollo",
  },
  {
    id: "stowage",
    title: "Stowage · Gestión de inventario técnico",
    role: "Diseño de módulo / Backend & Frontend",
    period: "2024",
    description:
      "Módulo pensado para control de equipos en resguardo, reparación, instalación y administración. Enfocado a áreas de soporte y proyectos técnicos que necesitan saber qué equipo está dónde, quién lo tiene y en qué estado se encuentra.",
    highlights: [
      "Registro de equipos, estados y responsables.",
      "Pensado para integración con otros módulos de proyectos y contabilidad.",
      "Diseño API-first para poder conectarse con otros sistemas.",
    ],
    technologies: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    link: "#",
    imageUrl: "/images/portfolio-stowage.png",
    status: "En diseño / prototipo",
  },
  {
    id: "aion",
    title: "Aion · Reloj de asistencia por QR",
    role: "Arquitectura frontend / UX · Integración futura con Odoo",
    period: "2024 – 2025",
    description:
      "Reloj de asistencia sin hardware dedicado, basado en QR y geolocalización. Pensado para plantas, oficinas y equipos en campo que necesitan registrar entradas/salidas usando solo el smartphone.",
    highlights: [
      "Escaneo de QR y registro de asistencia con ubicación aproximada.",
      "Diseño pensando en integración con Odoo y otros ERPs.",
      "Flujo pensado para reducir fricción: escanear, validar y registrar.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
    imageUrl: "/images/portfolio-aion.png",
    status: "En desarrollo",
  },
  {
    id: "bms",
    title: "BMS Support Technology · Web + CRM",
    role: "Desarrollo web & CRM a medida",
    period: "2023 – 2024",
    description:
      "Sitio web corporativo y CRM ligero para centralizar clientes, contactos y oportunidades de un negocio de soporte técnico. Diseñado para crecer en módulos según necesidades reales.",
    highlights: [
      "Landing corporativa enfocada en servicios y contacto.",
      "CRM básico para registrar clientes y seguimientos.",
      "Arquitectura preparada para crecer a panel completo.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "MySQL"],
    link: "https://bms-support-technology-llc.vercel.app/",
    imageUrl: "/images/portfolio-bms.png",
    status: "En producción",
  },
  {
    id: "equilibra",
    title: "Equilibra · Agenda & CRM para consultorios",
    role: "Diseño de producto / UI · prototipo",
    period: "2024",
    description:
      "Prototipo de agenda y CRM para psicólogos, dentistas y consultorios pequeños. Enfocado en organizar citas, pacientes y seguimiento, sin la complejidad de un ERP completo.",
    highlights: [
      "Concepto de agenda sencilla para profesionales independientes.",
      "Interfaz pensada para móviles y escritorio.",
      "Estructura lista para conectar con recordatorios y pagos.",
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    link: "#",
    imageUrl: "/images/portfolio-equilibra.png",
    status: "Prototipo",
  },
];

export default function PortfolioPage() {
  const [visible, setVisible] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    if (!sectionRefs.current.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const nextState = {};
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (!id) return;
          // visible true cuando entra, false cuando sale (para que se reinicie)
          nextState[id] = entry.isIntersecting;
        });
        setVisible((prev) => ({ ...prev, ...nextState }));
      },
      {
        threshold: 0.3,
      }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen">
      {/* Intro */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 pt-8 md:pt-12 pb-12 md:pb-16">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
          Portafolio
        </p>
        <h1 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-balance">
          Proyectos donde combino infraestructura, soporte y desarrollo web.
        </h1>
        <p className="mt-4 text-sm md:text-base text-slate-300 max-w-3xl">
          No solo construyo pantallas: diseño soluciones completas que conectan
          usuarios, procesos y tecnología. Estos son algunos proyectos y
          prototipos que representan cómo pienso y desarrollo.
        </p>
      </section>

      {/* Proyectos */}
      <div className="space-y-12 md:space-y-20 pb-20">
        {projects.map((project, index) => {
          const isVisible = visible[project.id];
          const isEven = index % 2 === 0;

          const imageBaseClasses =
            "relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-2xl transition-all duration-700";
          const textBaseClasses =
            "w-full lg:w-1/2 space-y-4 md:space-y-5 transition-all duration-700";

          const imageHidden = isEven
            ? "opacity-0 -translate-x-10"
            : "opacity-0 translate-x-10";
          const imageVisible = "opacity-100 translate-x-0";

          const textHidden = isEven
            ? "opacity-0 translate-x-10"
            : "opacity-0 -translate-x-10";
          const textVisible = "opacity-100 translate-x-0";

          return (
            <section
              key={project.id}
              data-id={project.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="max-w-5xl mx-auto px-4 md:px-6 min-h-[80vh] flex items-center"
            >
              <div
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 lg:gap-12 items-center w-full`}
              >
                {/* Imagen */}
                <div
                  className={`${imageBaseClasses} ${
                    isVisible ? imageVisible : imageHidden
                  }`}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  {project.link && project.link !== "#" && (
                    <div className="absolute inset-x-0 bottom-0 p-4 flex justify-between items-center text-xs md:text-sm text-slate-200 bg-black/40 backdrop-blur">
                      <span>{project.status}</span>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-yellow-300 hover:text-yellow-200"
                      >
                        Ver sitio
                        <span aria-hidden>↗</span>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Texto */}
                <div
                  className={`${textBaseClasses} ${
                    isVisible ? textVisible : textHidden
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-400">
                    <span className="inline-flex items-center rounded-full border border-slate-600 px-3 py-1">
                      {project.role}
                    </span>
                    <span>·</span>
                    <span>{project.period}</span>
                    {project.status && (
                      <>
                        <span>·</span>
                        <span className="text-yellow-300">
                          {project.status}
                        </span>
                      </>
                    )}
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold">
                    {project.title}
                  </h2>

                  <p className="text-sm md:text-base text-slate-200">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 text-xs md:text-sm text-slate-300">
                    {project.highlights.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs md:text-[13px] text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && project.link !== "#" && (
                    <div className="pt-3">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-yellow-300 hover:text-yellow-200"
                      >
                        Ver proyecto en línea
                        <span aria-hidden>↗</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
