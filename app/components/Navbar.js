"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary bg-opacity-70 backdrop-blur-md"
          : "bg-secondary"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logoRodro.png"
            alt="Soporte Técnico Logo"
            height={250}
            width={250}
            className="object-contain"
          />
        </Link>

        {/* Menú principal */}
        <ul className="hidden sm:flex space-x-8 text-primary">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>

        {/* Menú móvil */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-primary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú desplegable móvil */}
      <ul
        className={`sm:hidden absolute top-full left-0 w-full bg-secondary flex flex-col items-center space-y-4 z-40 py-4 px-6 text-primary transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <li>
          <Link href="/" className="hover:underline" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="hover:underline"
            onClick={toggleMenu}
          >
            Services
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline" onClick={toggleMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:underline"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}
