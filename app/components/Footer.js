import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/images/logoRodro.png"
              alt="Technical Support Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="flex items-center justify-center">
              <FaPhone className="mr-2 text-yellow-500" />
              <a href="tel:+573022283964">+57 302 2283964</a>
            </p>
            <p className="flex items-center justify-center">
              <FaEnvelope className="mr-2 text-yellow-500" />
              <a href="mailto:rodrigoivanordonezchavez@gmail.com">
                rodrigoivanordonezchavez@gmail.com
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Social Media</h3>
            <div className="flex items-center justify-center space-x-4">
              <Link
                href="https://www.linkedin.com/in/rodrigo-iv%C3%A1n-ordo%C3%B1ez-ch%C3%A1vez-788127189/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-300 transition-colors duration-200"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://github.com/Rodro1975"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-300 transition-colors duration-200"
              >
                <FaGithub size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">
            © 2025 Rodro Technical Support. All rights reserved.
          </p>
          <p className="text-xs mt-1">
            Designed by Rodrigo Iván Ordoñez Chávez
          </p>
        </div>
      </div>

      {/* Visual Effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 blur-2xl"
          style={{ opacity: 0.3 }}
        ></div>
      </div>
    </footer>
  );
}
