"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "archivo-ug",
    title: "Archivo Histórico · Librería UG",
    role: "Fullstack / Arquitectura de solución",
    status: "En producción",
    description:
      "Plataforma web para consulta, gestión y solicitudes de material editorial de la Universidad de Guanajuato. Enfoque fuerte en seguridad con RLS, roles por tipo de usuario y reportes operativos.",
    highlights: [
      "Paneles diferenciados por rol (Administrador, Editor, Lector).",
      "Carga y gestión de PDFs, catálogos y fichas bibliográficas.",
      "Reportes, estadísticas y generación de PDFs con jsPDF.",
    ],
    technologies: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    link: "https://archivo-historico-libreria-ug-supabase.vercel.app/",
    imageUrl: "/images/screenshotArchivoHistorico.png",
  },
  {
    id: "wattly",
    title: "Wattly · Estaciones de carga VEL",
    role: "Arquitectura, producto y frontend",
    status: "En desarrollo",
    description:
      "Solución integral para estaciones de carga de vehículos eléctricos ligeros (VEL). Incluye diseño de kiosko físico, panel web tipo dashboard y modelo de negocio para universidades, hoteles y espacios públicos.",
    highlights: [
      "App tipo kiosko pensada para pantallas verticales.",
      "Integración planificada con hardware IoT (Tuya) y medición de energía.",
      "Modelo marca blanca para múltiples clientes (Javeriana, hoteles, gimnasios, etc.).",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
    imageUrl: "/images/screenshotWattly.png",
  },
  {
    id: "stowage",
    title: "Stowage · Gestión de inventario técnico",
    role: "Backend & Frontend / Módulo inventario",
    status: "SaaS en desarrollo",
    description:
      "Módulo diseñado para controlar equipos en resguardo, reparación, instalación y stock técnico. Pensado para integrarse con proyectos, soporte y contabilidad.",
    highlights: [
      "Registro de equipos, estados, movimientos y responsables.",
      "Diseño API-first para integrarse con otros módulos.",
      "Base para control real de equipos en campo y laboratorio.",
    ],
    technologies: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    link: "https://stowage.vercel.app/",
    imageUrl: "/images/screenshotStowage.png",
  },
  {
    id: "aion",
    title: "Aion · Reloj de asistencia por QR",
    role: "Arquitectura frontend / UX",
    status: "En desarrollo",
    description:
      "Reloj de asistencia sin hardware dedicado, basado en QR y geolocalización. Pensado para plantas, oficinas y equipos en campo, con futura integración a Odoo u otros ERPs.",
    highlights: [
      "Registro de entradas/salidas con escaneo de QR.",
      "Uso de geolocalización para validar ubicación aproximada.",
      "Flujo pensado para reducir fricción: escanear, validar y registrar.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://aion-sigma.vercel.app/",
    imageUrl: "/images/screenshotAion.png",
  },
  {
    id: "bms",
    title: "BMS Support Technology · Web + CRM",
    role: "Desarrollo web & CRM a medida",
    status: "En producción",
    description:
      "Sitio web corporativo y CRM ligero para centralizar clientes, contactos y oportunidades de un negocio de soporte técnico.",
    highlights: [
      "Landing corporativa enfocada en servicios y contacto.",
      "CRM básico para registrar clientes y seguimientos.",
      "Arquitectura preparada para crecer por módulos.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "MySQL"],
    link: "https://bms-support-technology-llc.vercel.app/",
    imageUrl: "/images/screenshotBms.png",
  },
  {
    id: "qr-maker",
    title: "QR Maker · Generador de códigos QR gratuito",
    role: "Producto propio / Herramienta web",
    status: "En producción",
    description:
      "Herramienta web para generar códigos QR de forma rápida y gratuita. Pensada como utilidad simple pero útil para comercios, proyectos personales y pruebas técnicas.",
    highlights: [
      "Generación de QR para URLs en segundos.",
      "Interfaz limpia y enfocada en una sola tarea.",
      "Desplegada en producción como herramienta pública.",
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://qr-maker-five.vercel.app/",
    imageUrl: "/images/screenshotQr.png",
  },
  {
    id: "avisotep",
    title: "AvisoTepeapulco · Directorio local",
    role: "Diseño de MVP / Desarrollo web",
    status: "MVP",
    description:
      "Directorio local pensado para negocios de Tepeapulco. Un experimento para dar presencia digital simple a comercios y servicios de la zona.",
    highlights: [
      "Listado de negocios y servicios locales.",
      "Diseño pensado para ser consumido rápido desde móvil.",
      "Base para futuras funciones de anuncios y promociones.",
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://avisotepeapulco.vercel.app/",
    imageUrl: "/images/screenshotAviso.png",
  },
  {
    id: "equilibra",
    title: "Equilibra · Agenda & CRM para consultorios",
    role: "Diseño de producto / Prototipo",
    status: "Prototipo",
    description:
      "Prototipo de agenda y CRM para psicólogos, dentistas y consultorios pequeños. Orientado a ordenar citas, pacientes y seguimiento sin la complejidad de un ERP completo.",
    highlights: [
      "Agenda simple para profesionales independientes.",
      "Interfaz adaptable a escritorio y móvil.",
      "Estructura lista para conectar recordatorios y pagos.",
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://equilibra-five.vercel.app/",
    imageUrl: "/images/screenshotEquilibra.png",
  },
];

export default function PortfolioPage() {
  const [visible, setVisible] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    if (!sectionRefs.current.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const updates = {};
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (!id) return;
          updates[id] = entry.isIntersecting;
        });
        setVisible((prev) => ({ ...prev, ...updates }));
      },
      {
        threshold: 0.35,
      }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen pb-20">
      {/* Intro */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 pt-8 md:pt-12 pb-10">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-yellow-500">
          Portafolio
        </p>
        <h1 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-balance">
          Proyectos que conectan tecnología y resultados reales.
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-900 max-w-3xl">
          Soluciones robustas y funcionales para cada reto. Infraestructura,
          soporte y desarrollo a tu medida.
        </p>
      </section>

      {/* Proyectos */}
      <div className="space-y-12 md:space-y-20">
        {projects.map((project, index) => {
          const isVisible = visible[project.id];
          const reversed = index % 2 === 1;

          const imageBase =
            "relative w-full md:w-1/2 h-64 sm:h-80 lg:h-[380px] overflow-hidden border border-white/10 bg-slate-900/80 shadow-2xl transition-all duration-700";
          const textBase =
            "w-full md:w-1/2 space-y-3 md:space-y-4 transition-all duration-700";

          const imageHidden = reversed
            ? "opacity-0 translate-x-8 translate-y-4"
            : "opacity-0 -translate-x-8 translate-y-4";
          const imageVisible = "opacity-100 translate-x-0 translate-y-0";

          const textHidden = reversed
            ? "opacity-0 -translate-x-8 translate-y-4"
            : "opacity-0 translate-x-8 translate-y-4";
          const textVisible = "opacity-100 translate-x-0 translate-y-0";

          return (
            <section
              key={project.id}
              data-id={project.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="max-w-5xl mx-auto px-4 md:px-6 min-h-[70vh] flex items-center"
            >
              <div
                className={`flex flex-col items-center gap-8 md:gap-10 lg:gap-12 w-full ${
                  reversed ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Imagen */}
                <div
                  className={`${imageBase} ${
                    isVisible ? imageVisible : imageHidden
                  }`}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                  {project.link && project.link !== "#" && (
                    <div className="absolute bottom-0 inset-x-0 p-3 flex justify-between items-center text-xs md:text-sm text-slate-200 bg-black/50 backdrop-blur">
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
                  className={`${textBase} ${
                    isVisible ? textVisible : textHidden
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-400">
                    <span className="inline-flex items-center border border-slate-600 px-3 py-1">
                      {project.role}
                    </span>
                    {project.status && (
                      <>
                        <span>·</span>
                        <span className="text-yellow-500">
                          {project.status}
                        </span>
                      </>
                    )}
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold">
                    {project.title}
                  </h2>

                  <p className="text-sm md:text-base text-slate-600">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 text-xs md:text-sm text-slate-400">
                    {project.highlights.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs md:text-[13px] text-slate-100"
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
                        className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-yellow-400 hover:text-yellow-300"
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
