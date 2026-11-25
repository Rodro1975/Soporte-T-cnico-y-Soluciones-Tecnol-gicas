"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const CONTACT_EMAIL = "rodrigoivanordonezchavez@gmail.com";

const CONTACTS = [
  {
    country: "México",
    number: "+52 771 140 8213",
    whatsapp: "527711408213",
  },
  {
    country: "Colombia",
    number: "+57 302 228 3964",
    whatsapp: "573022283964",
  },
];

const INITIAL_FORM = {
  name: "",
  email: "",
  message: "",
};

const INPUT_CLASS =
  "w-full rounded-none border-b border-neutral-300 bg-transparent px-0 py-3 text-base text-neutral-950 outline-none transition-colors placeholder:text-neutral-400 focus:border-yellow-600";

emailjs.init("1Z9rEYtD53y4HwJCo");

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");

  const sending = status === "sending";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("idle");
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (sending) return;

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send("service_t0p7qz9", "template_o0tj7iq", payload);

      setFormData(INITIAL_FORM);
      setStatus("success");
    } catch (err) {
      console.error("Error EmailJS:", err.status, err.text);
      setStatus("error");
    }
  };

  return (
    <div className="overflow-x-hidden bg-neutral-950 text-white">
      <section className="flex items-center lg:min-h-[calc(100svh-80px)]">
        <div className="mx-auto w-full max-w-7xl px-5 py-5 md:px-10 lg:py-5">
          {/* Encabezado editorial */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.2em] md:text-xs">
            <span className="text-yellow-400">
              Tecnología / Conexión / Oportunidades
            </span>

            <span className="text-neutral-400">México — Colombia</span>
          </div>

          <h1 className="my-4 whitespace-nowrap text-center text-[clamp(2.5rem,10vw,9rem)] font-black uppercase leading-[0.9] tracking-[-0.035em] md:my-5">
            Contacto<span className="text-yellow-400">.</span>
          </h1>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            {/* Información comercial */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-1 w-9 bg-yellow-400" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                  Estamos para escucharte
                </p>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Las grandes soluciones comienzan con una{" "}
                <span className="text-yellow-400">conversación.</span>
              </h2>

              <p className="max-w-lg text-base leading-relaxed text-neutral-300">
                Cuéntanos qué necesitas. Ya sea soporte técnico,
                infraestructura, desarrollo de software o una nueva idea,
                exploremos juntos cómo la tecnología puede ayudarte.
              </p>

              {/* Canales de contacto */}
              <div className="divide-y divide-white/15 border-y border-white/15">
                {CONTACTS.map((contact, index) => (
                  <a
                    key={contact.country}
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-yellow-400">
                        0{index + 1} / {contact.country}
                      </p>

                      <p className="text-xl font-semibold transition-colors group-hover:text-yellow-400">
                        {contact.number}
                      </p>
                    </div>

                    <FaWhatsapp
                      size={27}
                      className="shrink-0 text-yellow-400 transition-transform group-hover:scale-110"
                      aria-hidden="true"
                    />
                  </a>
                ))}

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  <div className="min-w-0">
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-yellow-400">
                      03 / Correo electrónico
                    </p>

                    <p className="break-all text-sm font-medium transition-colors group-hover:text-yellow-400">
                      {CONTACT_EMAIL}
                    </p>
                  </div>

                  <FaEnvelope
                    size={23}
                    className="shrink-0 text-yellow-400"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <p className="text-xs text-neutral-400">
                Conectamos personas, negocios y tecnología.
              </p>
            </div>

            {/* Formulario */}
            <div className="bg-white p-6 text-neutral-950 md:p-7 lg:px-10 lg:py-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                Contacto directo
              </p>

              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Cuéntanos tu idea
                <span className="text-yellow-500">.</span>
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Completa los siguientes datos y nos pondremos en contacto
                contigo.
              </p>

              <form onSubmit={sendEmail} className="mt-5 space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-bold">
                    Nombre
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={sending}
                    maxLength={120}
                    className={INPUT_CLASS}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-bold">
                    Correo electrónico
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="nombre@empresa.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={sending}
                    maxLength={254}
                    className={INPUT_CLASS}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-bold">
                    ¿Cómo podemos ayudarte?
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Cuéntanos qué necesitas..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={sending}
                    maxLength={3000}
                    className={`${INPUT_CLASS} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="flex w-full items-center justify-between bg-yellow-400 px-6 py-4 text-sm font-bold text-black transition-colors hover:bg-yellow-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Enviando mensaje..." : "Enviar mensaje"}
                  <span aria-hidden="true">↗</span>
                </button>

                <div aria-live="polite">
                  {status === "success" && (
                    <p className="border-l-4 border-green-600 bg-green-50 p-3 text-sm font-medium text-green-800">
                      Gracias por contactarnos. Tu mensaje se ha enviado
                      correctamente.
                    </p>
                  )}

                  {status === "error" && (
                    <p className="border-l-4 border-red-600 bg-red-50 p-3 text-sm font-medium text-red-800">
                      No pudimos enviar tu mensaje. Intenta nuevamente o
                      contáctanos por WhatsApp.
                    </p>
                  )}

                  {status === "invalid" && (
                    <p className="text-sm font-medium text-red-700">
                      Completa todos los campos antes de enviar.
                    </p>
                  )}
                </div>
              </form>

              <p className="mt-4 text-xs leading-relaxed text-neutral-500">
                Utilizaremos tus datos para responder a tu solicitud de
                contacto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
