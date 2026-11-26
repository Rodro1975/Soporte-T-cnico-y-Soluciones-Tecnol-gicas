"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/portfolio", label: "Portafolio" },
  { href: "/about", label: "Sobre nosotros" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10"
          : "bg-black"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/brand/rodro-wordmark.png"
            alt="Rodro Soluciones Tecnológicas"
            width={480}
            height={228}
            className="h-12 w-auto select-none md:h-14"
            priority
          />
        </Link>

        {/* Navegación de escritorio */}
        <ul className="hidden items-center gap-6 text-sm font-bold uppercase tracking-wide text-white md:flex lg:gap-9 lg:text-lg">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`transition-colors duration-200 hover:text-yellow-400 ${
                    isActive ? "text-yellow-400" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Botón móvil */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-yellow-400 hover:text-yellow-400 md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span className="relative block h-5 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-1 block h-0.5 w-5 bg-current transition duration-200 ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 block h-0.5 w-5 bg-current transition duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 block h-0.5 w-5 bg-current transition duration-200 ${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Navegación móvil */}
      {isOpen && (
        <ul
          id="mobile-navigation"
          className="mx-3 mb-3 overflow-hidden rounded-2xl border border-white/10 bg-black/95 px-3 py-3 shadow-2xl backdrop-blur-xl md:hidden"
        >
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-xl px-4 py-4 text-lg font-bold uppercase tracking-wide transition-colors hover:bg-white/10 hover:text-yellow-400 ${
                    isActive ? "text-yellow-400" : "text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
