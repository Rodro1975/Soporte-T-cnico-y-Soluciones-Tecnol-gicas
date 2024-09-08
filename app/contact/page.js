// app/contact/page.js
import Link from "next/link";

// app/contact/page.js
export const metadata = {
  title: "Contact",
  description:
    "Página de contacto de Soporte Técnico y Soluciones Tecnológicas.",
};

export default function Contact() {
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
          <form className="max-w-lg mx-auto bg-white p-8 rounded shadow-lg">
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
        </div>
      </section>

      <footer className="py-4 bg-black text-white text-center">
        <p>
          &copy; {new Date().getFullYear()} Soporte Técnico. All rights
          reserved.
        </p>
        <p>Contact us at: [rodrigoivanordonezchavez@gmail.com]</p>
      </footer>
    </div>
  );
}
