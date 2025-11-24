"use client";

import { useEffect, useState } from "react";

export default function HeroType() {
  const words = [
    "Rodro · Soluciones IT que funcionan",
    "Rodro · Infraestructura sin interrupciones",
    "Rodro · Desarrollo web real",
    "Rodro · Operación estable, resultados reales",
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.substring(0, text.length + 1));

          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), 800);
          }
        } else {
          setText(current.substring(0, text.length - 1));

          if (text.length === 0) {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 65 : 95
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  return (
    <p className="text-sm font-semibold tracking-[0.22em] uppercase text-yellow-400">
      {text}
      <span className="inline-block animate-blink">|</span>

      <style jsx>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 0.7s infinite;
        }
      `}</style>
    </p>
  );
}
