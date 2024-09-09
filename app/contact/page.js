"use client"; // Indicamos que es un Client Component

import Link from "next/link";
import { useState } from "react";
import emailjs from "emailjs-com";

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
          <h1 className="text-xl font-light">
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

      <footer className="py-4 bg-black text-white text-center">
        <p>
          &copy; {new Date().getFullYear()} Soporte Técnico. All rights
          reserved.
        </p>
        <p>Contact us at: rodrigoivanordonezchavez@gmail.com</p>
      </footer>
    </div>
  );
}
