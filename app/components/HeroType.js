"use client";

import { useEffect, useState } from "react";

const MESSAGE = "Rodro · Soluciones Tecnológicas";

export default function HeroType() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(MESSAGE);
      setIsTyping(false);
      return;
    }

    if (text.length === MESSAGE.length) {
      setIsTyping(false);
      return;
    }

    const timeout = setTimeout(() => {
      setText(MESSAGE.substring(0, text.length + 1));
    }, 75);

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <p className="text-sm font-semibold tracking-[0.22em] uppercase text-yellow-400">
      {text}
      {isTyping && <span className="inline-block animate-blink">|</span>}

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
