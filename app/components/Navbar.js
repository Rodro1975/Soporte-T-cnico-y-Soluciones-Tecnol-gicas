"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/portfolio", label: "Portafolio" },
  { href: "/about", label: "Sobre mí" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10"
          : "bg-gradient-to-b from-black/55 via-black/25 to-transparent"
      }`}
    >
      <nav className="relative max-w-5xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logoRodro.png"
            alt="Rodro Solutions Logo"
            width={100}
            height={100}
            className="object-contain select-none"
            priority
          />
        </Link>

        {/* NAV Desktop */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-200 text-sm font-medium tracking-wide">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-yellow-300 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón móvil */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 text-gray-100 backdrop-blur-sm transition hover:bg-white/10"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">
            {isOpen ? "Cerrar navegación" : "Abrir navegación"}
          </span>
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

      {/* Menú móvil */}
      {isOpen && (
        <ul
          id="mobile-navigation"
          className="md:hidden mx-3 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 px-3 py-3 text-gray-100 shadow-2xl shadow-black/30 backdrop-blur-xl"
        >
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/10 hover:text-yellow-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
