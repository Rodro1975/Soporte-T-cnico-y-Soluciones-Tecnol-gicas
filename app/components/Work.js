"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Work() {
  const titleRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!titleRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 border-t border-white/5 w-full flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        {/* Columna texto */}
        <div className="flex-1 space-y-4 md:space-y-5">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-yellow-500 text-center md:text-left">
            Cómo trabajo
          </p>

          {/* TITULO ANIMADO */}
          <h2
            ref={titleRef}
            className={`text-2xl md:text-3xl lg:text-3xl font-bold text-balance text-center md:text-left transition-all duration-700
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }
            `}
          >
            <span className="block">Mi trabajo es que tu operación</span>
            <span className="block text-yellow-500">no se detenga.</span>
          </h2>

          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto md:mx-0 text-center md:text-left">
            Escucho tu necesidad y diseño algo útil, claro y confiable.
            Soluciones que realmente funcionan y crecen contigo.
          </p>

          <div className="space-y-3 text-sm md:text-base text-gray-700 max-w-xl mx-auto md:mx-0">
            <div>
              <h3 className="font-semibold text-yellow-600">· Practicidad</h3>
              <p>
                Respondo con claridad, priorizo lo importante y te ayudo a
                avanzar sin rodeos.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-600">
                · Operación real
              </h3>
              <p>
                Construyo para el uso diario, pensando en quienes de verdad lo
                van a operar.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-600">
                · Evolución inteligente
              </h3>
              <p>
                Empiezo con bases sólidas y mejoro lo que de verdad aporta
                valor.
              </p>
            </div>
          </div>

          {/* tu texto igual */}
        </div>

        {/* círculo visual con órbita */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-500/15 via-yellow-300/5 to-transparent blur-3xl" />

            {/* aro externo girando */}
            <div className="absolute inset-4 rounded-full border border-yellow-400/60 animate-spin-slow" />

            {/* aro interior fijo */}
            <div className="absolute inset-10 rounded-full border border-gray-300/40" />

            {/* NÚCLEO */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center text-center px-6">
              <p className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-yellow-300">
                Integración total
              </p>
            </div>

            {/* ORBITA CON BOLITAS */}
            <div className="absolute inset-0 animate-spin-very-slow">
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_18px_rgba(250,204,21,0.9)]" />
              <span className="absolute bottom-4 right-3 w-2.5 h-2.5 rounded-full bg-yellow-300 shadow-[0_0_14px_rgba(250,204,21,0.7)]" />
              <span className="absolute top-10 left-4 w-2 h-2 rounded-full bg-yellow-200 shadow-[0_0_12px_rgba(254,240,138,0.7)]" />
            </div>

            <style jsx>{`
              @keyframes spin-slow {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
              @keyframes spin-very-slow {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
              .animate-spin-slow {
                animation: spin-slow 18s linear infinite;
              }
              .animate-spin-very-slow {
                animation: spin-very-slow 26s linear infinite;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
