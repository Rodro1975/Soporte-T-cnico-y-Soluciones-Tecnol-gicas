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
          ? "bg-black/70 backdrop-blur-md border-b border-white/10"
          : "bg-black/40 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
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
          className="md:hidden text-gray-200"
          aria-label="Toggle navigation menu"
        >
          <span className="text-2xl">☰</span>
        </button>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <ul className="md:hidden bg-black/90 backdrop-blur-xl text-center py-6 space-y-4 text-gray-200 text-sm font-medium">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block hover:text-yellow-300 transition-colors"
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
