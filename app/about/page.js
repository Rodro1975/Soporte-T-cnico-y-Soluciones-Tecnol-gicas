// app/about/page.js
import Link from "next/link";

// app/about/page.js
export const metadata = {
  title: "About Us",
  description:
    "Información sobre nosotros en Soporte Técnico y Soluciones Tecnológicas.",
};

export default function About() {
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

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-lg">
            We are a dedicated team of IT professionals committed to providing
            exceptional support and solutions to ensure your technology works
            seamlessly. Our mission is to deliver top-notch services that meet
            the needs of our clients with precision and care.
          </p>
          <p className="text-lg mt-4">
            With years of experience in technical support and IT management, we
            offer a range of services designed to address the unique challenges
            of modern technology. Our goal is to help you maintain smooth and
            efficient operations, providing peace of mind through reliable
            support.
          </p>
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
