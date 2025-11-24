"use client";

import { useState, useEffect, useRef } from "react";

const keywords = [
  "Next.js",
  "Node.js",
  "Windows Server",
  "PostgreSQL",
  "VS Code",
  "Tailwind CSS",
  "MySQL",
  "Linux",
  "Hyper-V",
  "HTML & CSS",
  "React",
  "javaScript",
];

export default function Counters() {
  const [count, setCount] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null); // 👈 importante: sin genérico TS

  const maxCount = 20;

  // Detecta si el bloque está en pantalla
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setCount(0); // reinicia contador cada vez que entra a pantalla
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.4, // ~40% visible
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Contador de experiencia (solo cuando está visible)
  useEffect(() => {
    if (!isInView) return;
    if (count >= maxCount) return;

    const timeout = setTimeout(() => {
      setCount((c) => c + 1);
    }, 80);

    return () => clearTimeout(timeout);
  }, [count, isInView]);

  // Efecto de escritura y borrado (loop infinito)
  useEffect(() => {
    const word = keywords[wordIndex];
    let charIndex = isDeleting ? word.length : 0;
    let speed = isDeleting ? 40 : 90;

    const typeEffect = setInterval(() => {
      if (!isDeleting) {
        if (charIndex < word.length) {
          setCurrentWord(word.substring(0, charIndex + 1));
          charIndex++;
        } else {
          setTimeout(() => setIsDeleting(true), 900);
          clearInterval(typeEffect);
        }
      } else {
        if (charIndex > 0) {
          setCurrentWord(word.substring(0, charIndex - 1));
          charIndex--;
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % keywords.length);
          clearInterval(typeEffect);
        }
      }
    }, speed);

    return () => clearInterval(typeEffect);
  }, [wordIndex, isDeleting]);

  return (
    <div
      ref={containerRef}
      className="w-full grid gap-10 md:gap-14 md:grid-cols-2 md:items-center"
    >
      {/* Años de experiencia */}
      <div className="space-y-4 text-left">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
          Experiencia
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-white text-balance">
          Más de <span className="text-yellow-400">{count}+</span> años
          trabajando con infraestructura, soporte corporativo y soluciones IT.
        </h3>
        <p className="text-sm md:text-base text-gray-300 max-w-xl">
          He liderado operaciones y soporte tecnológico en entornos
          multinacionales, garantizando la continuidad del negocio, la
          estabilidad de las plataformas y una atención efectiva a los usuarios
          en toda LATAM.
        </p>
      </div>

      {/* Tecnologías / typing */}
      <div className="space-y-4 text-left md:text-right">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
          Stack &amp; herramientas
        </p>
        <div className="text-2xl md:text-3xl font-bold text-yellow-300 tracking-wide">
          {currentWord}
          <span className="inline-block animate-blink">|</span>
        </div>
        <p className="text-xs md:text-sm text-gray-400 md:ml-auto md:max-w-md">
          Experiencia integrando stacks modernos (Next.js, Supabase, Tailwind)
          con infraestructura tradicional (Windows, Linux, redes y bases de
          datos) para desarrollar soluciones completas y sostenibles, más allá
          del código.
        </p>
      </div>

      <style jsx>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 0.8s infinite;
        }
      `}</style>
    </div>
  );
}
