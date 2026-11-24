"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const MESSAGE = "Rodro · Soluciones Tecnológicas";
const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback) {
  const mediaQuery = window.matchMedia(MOTION_QUERY);

  mediaQuery.addEventListener("change", callback);

  return () => mediaQuery.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(MOTION_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

export default function HeroType() {
  const [text, setText] = useState("");

  const reducedMotion = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const displayText = reducedMotion ? MESSAGE : text;
  const isTyping = displayText.length < MESSAGE.length;

  useEffect(() => {
    if (reducedMotion || text.length >= MESSAGE.length) {
      return;
    }

    const timeout = setTimeout(() => {
      setText(MESSAGE.substring(0, text.length + 1));
    }, 75);

    return () => clearTimeout(timeout);
  }, [text, reducedMotion]);

  return (
    <p className="text-sm font-semibold tracking-[0.22em] uppercase text-yellow-400">
      {displayText}
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
