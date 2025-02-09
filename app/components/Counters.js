"use client";

import { useState, useEffect } from "react";

const keywords = [
  "Next.js",
  "Node.js",
  "Supabase",
  "Windows",
  "PostgreSQL",
  "VS Code",
  "Tailwind CSS",
  "MySQL",
  "Linux",
  "Hyper V",
  "HTML",
];

export default function Counters() {
  const [count, setCount] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const maxCount = 20;

  // Contador de experiencia
  useEffect(() => {
    if (count < maxCount) {
      const timeout = setTimeout(() => setCount(count + 1), 100);
      return () => clearTimeout(timeout);
    }
  }, [count]);

  // Efecto de escritura y borrado
  useEffect(() => {
    const word = keywords[wordIndex];
    let charIndex = isDeleting ? word.length : 0;
    let speed = isDeleting ? 50 : 100;

    const typeEffect = setInterval(() => {
      if (!isDeleting) {
        if (charIndex < word.length) {
          setCurrentWord(word.substring(0, charIndex + 1));
          charIndex++;
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
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
    <section className="relative w-full h-[90vh] flex flex-col items-center justify-center px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-50"></div>

      <div className="relative z-10 container mx-auto text-center space-y-12">
        {/* Contador de años de experiencia */}
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-extrabold text-yellow-400 tracking-wide drop-shadow-lg">
            Years of Experience
          </h3>
          <p className="text-8xl font-bold text-yellow-300 glow">{count}+</p>
        </div>

        {/* Animación de escritura de palabras clave */}
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-extrabold text-yellow-400 tracking-wide drop-shadow-lg">
            Technologies
          </h3>
          <div className="text-5xl font-extrabold text-yellow-300 tracking-wide glow">
            {currentWord}
            <span className="animate-blink">|</span>
          </div>
        </div>
      </div>

      {/* Estilos adicionales */}
      <style jsx>{`
        @keyframes glow {
          0% {
            text-shadow: 0 0 5px #ffd700, 0 0 10px #ffea00;
          }
          50% {
            text-shadow: 0 0 20px #ffd700, 0 0 30px #ffea00;
          }
          100% {
            text-shadow: 0 0 5px #ffd700, 0 0 10px #ffea00;
          }
        }
        .glow {
          animation: glow 1.5s infinite alternate;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          display: inline-block;
          animation: blink 0.8s infinite;
        }
      `}</style>
    </section>
  );
}
