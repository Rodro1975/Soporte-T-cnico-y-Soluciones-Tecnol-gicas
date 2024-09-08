import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <header className="p-4 bg-secondary text-primary">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Soporte Técnico</h1>
          <ul className="flex space-x-4">
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
        </nav>
      </header>
      {/* Hero Section */}
      <section
        className="relative py-48 text-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10 container mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Welcome to Our Support Services
          </h2>
          <p className="text-lg mb-6 text-white drop-shadow-lg">
            Providing expert technical support and solutions for all your
            technology needs.
          </p>
          <Link
            href="/contact"
            className="bg-yellow-500 text-black py-2 px-6 rounded inline-block font-bold hover:bg-yellow-400 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technical Support Card */}
            <div className="service-card relative p-6 rounded-lg overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                style={{
                  backgroundImage: "url('/images/support.jpg')",
                }}
              ></div>
              <div className="relative z-10 flex flex-col justify-center h-full bg-black bg-opacity-60 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h4 className="text-2xl font-bold mb-4 text-white">
                  Technical Support
                </h4>
                <p className="text-white">
                  Comprehensive support for your hardware and software issues,
                  ensuring minimal downtime.
                </p>
              </div>
            </div>
            {/* IT Infrastructure Management Card */}
            <div className="service-card relative p-6 rounded-lg overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                style={{
                  backgroundImage: "url('/images/it.jpg')",
                }}
              ></div>
              <div className="relative z-10 flex flex-col justify-center h-full bg-black bg-opacity-60 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h4 className="text-2xl font-bold mb-4 text-white">
                  IT Infrastructure Management
                </h4>
                <p className="text-white">
                  Expert management and optimization of your IT infrastructure
                  to ensure smooth operations.
                </p>
              </div>
            </div>
            {/* Cybersecurity Solutions Card */}
            <div className="service-card relative p-6 rounded-lg overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                style={{ backgroundImage: "url('/images/warm.jpg')" }}
              ></div>
              <div className="relative z-10 flex flex-col justify-center h-full bg-black bg-opacity-60 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h4 className="text-2xl font-bold mb-4 text-white">
                  Cybersecurity Solutions
                </h4>
                <p className="text-white">
                  Protect your business from cyber threats with our robust
                  security solutions.
                </p>
              </div>
            </div>
            {/* web development Card */}
            <div className="service-card relative p-6 rounded-lg overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                style={{ backgroundImage: "url('/images/web.jpg')" }}
              ></div>
              <div className="relative z-10 flex flex-col justify-center h-full bg-black bg-opacity-60 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h4 className="text-2xl font-bold mb-4 text-white">
                  Web Development
                </h4>
                <p className="text-white">
                  We create customized software solutions to meet your specific
                  needs, guaranteeing optimal results tailored to your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">About Us</h3>
          <p className="text-lg">
            We are a dedicated team of IT professionals committed to providing
            exceptional support and solutions to ensure your technology works
            seamlessly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 text-center">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
          <p className="text-lg mb-6">
            Need assistance or have questions? Reach out to us and we will be
            happy to help!
          </p>
          <Link
            href="/contact"
            className="bg-black text-white py-2 px-6 rounded inline-block font-bold hover:bg-gray-800 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
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
