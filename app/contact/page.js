"use client"; // Indicamos que es un Client Component

import Link from "next/link";
import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import Image from "next/image";

// Inicializa EmailJS con tu Public Key
emailjs.init("1Z9rEYtD53y4HwJCo"); // Reemplaza con tu Public Key

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const contacts = [
    {
      name: "Gaby",
      zone: "NA",
      phone: "+525583358323",
      icon: "/images/gaby.png",
    },
    {
      name: "David",
      zone: "EMEC y APPAC",
      phone: "+447743315120",
      icon: "/images/david.png",
    },
    {
      name: "Rodrigo",
      zone: "LATAM",
      phone: "+573022283964",
      icon: "/images/rodro.png",
    },
    // Agrega más contactos aquí
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_t0p7qz9", // Reemplaza con tu Service ID
        "template_o0tj7iq", // Reemplaza con tu Template ID
        formData
      )
      .then(
        (result) => {
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setError(true);
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <div className="bg-background text-foreground">
      <header className="p-4 bg-black text-white">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-base font-light">
            SUPPORT AND TECHNOLOGICAL SOLUTIONS
          </h1>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg mb-6">
            Have questions or need assistance? Feel free to reach out to us
            using the contact form below or through any of the methods provided.
          </p>

          {/* Contact Form */}
          <form
            className="max-w-lg mx-auto bg-white p-8 rounded shadow-lg"
            onSubmit={sendEmail}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-left text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-left text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-left text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>

          {/* Success/Error Messages */}
          {success && (
            <p className="text-green-500 mt-4">Message sent successfully!</p>
          )}
          {error && (
            <p className="text-red-500 mt-4">
              Error sending message. Please try again.
            </p>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Contact Us on WhatsApp</h2>
          <p className="text-lg mb-6">
            Click on any of the contacts below to start a chat with them on
            WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="w-full sm:w-80 bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
              >
                <Image
                  src={contact.icon} // Ruta del icono PNG
                  alt="Contact Icon"
                  width={48} // Ancho del icono
                  height={48} // Alto del icono
                  className="w-12 h-12" // Ajusta el tamaño del icono
                />
                <div>
                  <h3 className="text-xl font-semibold">{contact.name}</h3>
                  <p className="text-gray-600">{contact.zone}</p>
                  <a
                    href={`https://wa.me/${contact.phone}?text=Hello%20${contact.name},%20I%20would%20like%20to%20ask%20about...`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary mt-2 inline-block"
                  >
                    Send WhatsApp Message
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-4 bg-black text-white text-center">
        <p>
          &copy; {new Date().getFullYear()} Soporte Técnico. All rights
          reserved.
        </p>
        <p>Contact us at: rodrigoivanordonezchavez@gmail.com</p>
        <a
          href="https://www.flaticon.es/stickers-gratis/personas"
          title="personas stickers"
        >
          People stickers created by Stickers - Flaticon{" "}
        </a>
      </footer>
    </div>
  );
}
