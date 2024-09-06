// app/services/page.js
import Link from "next/link"; // Asegúrate de importar Link

export default function Services() {
  return (
    <div className="bg-background text-foreground">
      <header className="p-4 bg-black text-white">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Soporte Técnico</h1>
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
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card bg-black text-white p-6 rounded">
              <h3 className="text-2xl font-bold mb-4">Technical Support</h3>
              <p>
                Comprehensive support for your hardware and software issues,
                ensuring minimal downtime.
              </p>
            </div>
            <div className="service-card bg-black text-white p-6 rounded">
              <h3 className="text-2xl font-bold mb-4">
                IT Infrastructure Management
              </h3>
              <p>
                Expert management and optimization of your IT infrastructure to
                ensure smooth operations.
              </p>
            </div>
            <div className="service-card bg-black text-white p-6 rounded">
              <h3 className="text-2xl font-bold mb-4">
                Cybersecurity Solutions
              </h3>
              <p>
                Protect your business from cyber threats with our robust
                security solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 bg-black text-white text-center">
        <p>
          &copy; {new Date().getFullYear()} Soporte Técnico. All rights
          reserved.
        </p>
        <p>Contact us at: [Your Email]</p>
      </footer>
    </div>
  );
}
