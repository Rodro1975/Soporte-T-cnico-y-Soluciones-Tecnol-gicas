"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

// Inicializa EmailJS con tu Public Key
emailjs.init("1Z9rEYtD53y4HwJCo"); // OJO: si cambias de cuenta, actualiza aquí

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setSuccess(false);
    setError(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);
    setError(false);

    emailjs
      .send(
        "service_t0p7qz9", // Service ID
        "template_o0tj7iq", // Template ID
        formData
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setSending(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("Error al enviar correo:", err);
          setError(true);
          setSuccess(false);
          setSending(false);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 py-16 px-4">
      <section className="w-full max-w-xl bg-white shadow-2xl rounded-2xl px-8 py-10 md:px-10 md:py-12">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-3 text-gray-900">
          Cuéntame tu idea o reto IT
        </h1>
        <p className="text-sm md:text-base mb-8 text-slate-600">
          Escribe en pocas líneas qué necesitas: soporte, diagnóstico,
          desarrollo o acompañamiento en tu proyecto. Te responderé
          personalmente.
        </p>

        {/* Contact Form */}
        <form
          className="space-y-6"
          onSubmit={sendEmail}
          autoComplete="off"
          noValidate
        >
          {/* Campo Nombre */}
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full border-b-2 border-slate-300 bg-transparent px-0 py-3 text-base text-slate-900 focus:outline-none focus:border-yellow-500 transition"
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-3.5 text-yellow-700 bg-white px-1 text-xs font-bold transition-all duration-200 pointer-events-none
                peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-yellow-700"
            >
              Nombre
            </label>
          </div>

          {/* Campo Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full border-b-2 border-slate-300 bg-transparent px-0 py-3 text-base text-slate-900 focus:outline-none focus:border-yellow-500 transition"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-yellow-700 bg-white px-1 text-xs font-bold transition-all duration-200 pointer-events-none
                peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-yellow-700"
            >
              Correo electrónico
            </label>
          </div>

          {/* Campo Mensaje */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full border-b-2 border-slate-300 bg-transparent px-0 py-3 resize-none text-base text-slate-900 focus:outline-none focus:border-yellow-500 transition"
            />
            <label
              htmlFor="message"
              className="absolute left-0 -top-3.5 text-yellow-700 bg-white px-1 text-xs font-bold transition-all duration-200 pointer-events-none
                peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-yellow-700"
            >
              Mensaje
            </label>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full mt-4 bg-black text-white font-semibold py-3 rounded-lg transition hover:bg-gray-900 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>

        {/* Mensajes de Éxito/Error */}
        {success && (
          <p className="text-sm text-green-600 font-semibold mt-4">
            ✅ Mensaje enviado correctamente. Te responderé en cuanto lo revise.
          </p>
        )}
        {error && (
          <p className="text-sm text-red-600 font-semibold mt-4">
            Ocurrió un error al enviar el mensaje. Intenta nuevamente en unos
            minutos.
          </p>
        )}

        {/* Nota extra */}
        <p className="mt-6 text-[11px] md:text-xs text-slate-500">
          También puedes contactarme por WhatsApp usando el botón flotante o por
          correo directo a{" "}
          <span className="font-semibold">
            rodrigoivanordonezchavez@gmail.com
          </span>
          .
        </p>
      </section>
    </div>
  );
}
