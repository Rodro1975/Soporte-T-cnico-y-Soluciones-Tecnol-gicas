"use client";

import Image from "next/image";

const clients = [
  {
    name: "THALES",
    image: "/images/logoThales.png",
    label: "Infraestructura y soporte IT",
  },
  {
    name: "IFF Colombia",
    image: "/images/iff.png",
    label: "Operación y proyectos tecnológicos",
  },
  {
    name: "AVASO Colombia",
    image: "/images/avaso.png",
    label: "Soporte técnico en campo",
  },
  {
    name: "Maxtintas",
    image: "/images/logoMaxtintas.jpg",
    label: "Implementación y mantenimiento de equipos",
  },
  {
    name: "Scopus México",
    image: "/images/logoScopus.jpg",
    label: "Impresión corporativa",
  },
  {
    name: "Compartamos Banco",
    image: "/images/logoCompartamos.jpg",
    label: "Soporte a usuarios",
  },
  {
    name: "Inbursa",
    image: "/images/logoImbursa.jpg",
    label: "Soporte a plataformas internas",
  },
  {
    name: "BMS Support Technology LLC",
    image: "/images/BMS support tech black.png",
    label: "Desarrollo de software y CRM",
  },
];

export default function Clients() {
  // duplicamos la lista para el efecto loop infinito
  const looped = [...clients, ...clients];

  return (
    <div className="w-full space-y-10">
      {/* Encabezado */}
      <div className="space-y-3 text-left">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Clientes y proyectos
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-balance">
          Empresas que han confiado en mi trabajo
        </h2>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          He colaborado con compañías en México y Colombia en soporte técnico,
          infraestructura, proyectos de tecnología y desarrollo de soluciones a
          medida.
        </p>
      </div>

      {/* Marquee 1 */}
      <div className="relative overflow-hidden py-4 border-y border-slate-200">
        <div className="flex gap-10 animate-marquee">
          {looped.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity"
            >
              <div className="relative w-28 h-12 md:w-32 md:h-14">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                  {client.name}
                </span>
                <span className="text-xs text-slate-500">{client.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee 2 - sentido contrario y sin texto para variar */}
      <div className="relative overflow-hidden py-4">
        <div className="flex gap-10 animate-marquee-reverse">
          {looped.map((client, index) => (
            <div
              key={`row2-${client.name}-${index}`}
              className="relative w-24 h-10 md:w-28 md:h-12 opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image
                src={client.image}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Estilos internos para animaciones */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-reverse {
          width: max-content;
          animation: marqueeReverse 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
