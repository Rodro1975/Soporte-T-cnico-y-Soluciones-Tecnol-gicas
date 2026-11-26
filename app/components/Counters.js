"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Counters() {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    let frame = 0;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(frame);

        if (!entry.isIntersecting) return;

        if (reduceMotion) {
          setCount(20);
          return;
        }

        setCount(0);

        const start = performance.now();
        const duration = 1800;

        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setCount(Math.floor(eased * 20));

          if (progress < 1) {
            frame = requestAnimationFrame(animate);
          }
        };

        frame = requestAnimationFrame(animate);
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-black text-white"
    >
      <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">

        {/* Experiencia */}
        <div className="relative z-10">

          <div className="flex items-center gap-4">
            <span className="h-1 w-10 bg-yellow-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] md:text-sm">
              Experiencia
            </p>
          </div>

          <div
            aria-hidden="true"
            className="mt-6 text-[clamp(7rem,17vw,15rem)] font-black leading-[0.85] tracking-[-0.08em] text-yellow-400 tabular-nums"
          >
            {count}+
          </div>

          <h2 className="mt-6 text-[clamp(1.8rem,3.5vw,3.5rem)] font-black uppercase leading-[1.05] tracking-[-0.045em]">
            <span className="sr-only">Más de 20 </span>
            <span className="block">
              Años resolviendo
            </span>
            <span className="block text-neutral-400">
              retos tecnológicos.
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-neutral-300 md:text-xl">
            Experiencia real. Tecnología aplicada.
            <br />
            Soluciones que trascienden el código.
          </p>

          <div className="mt-8 flex items-center gap-5">
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.25em] text-yellow-400 md:text-sm">
              México — Colombia
            </span>
            <span className="h-px flex-1 bg-neutral-700" />
          </div>

        </div>

        {/* Composición geométrica */}
        <div className="relative flex items-center justify-center">
          <Image
            src="/experience/geometry.webp"
            alt=""
            width={1200}
            height={1000}
            sizes="(max-width: 1023px) 100vw, 45vw"
            className="experience-geometry h-auto w-full max-w-[680px] object-contain"
          />
        </div>

      </div>

      {/* Navegación a la siguiente sección */}
      <div className="mt-8 flex justify-center">
        <a
          href="#capabilities"
          aria-label="Continuar a capacidades"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>

      <style jsx global>{`
        @keyframes experience-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .experience-geometry {
          animation: experience-float 7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .experience-geometry {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
