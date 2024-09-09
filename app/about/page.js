"use client"; // Directiva para indicar que es un componente del cliente

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import LatamMap from "../components/LatamMap";
export default function About() {
  // Estado para el contador
  const [count, setCount] = useState(0);
  const maxCount = 20; // Valor máximo para el contador

  // Simular el incremento del contador
  useEffect(() => {
    if (count < maxCount) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1); // Incrementa el contador
      }, 100); // Velocidad de incremento (puedes ajustarlo)

      return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }
  }, [count]); // Dependencia en count, para detenerlo al llegar a maxCount

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

          {/* Contador */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold">Years of Experience</h3>
            <p className="text-6xl font-semibold text-primary">{count}+</p>
          </div>
        </div>
      </section>

      <section
        id="values-mission"
        className="py-16 bg-gradient-to-b from-yellow-200 via-gray-200 to-gray-100 text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Values and Mission</h2>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Values</h3>
            <ul className="list-disc list-inside text-left mx-auto max-w-lg">
              <li className="text-lg mb-2">Innovation</li>
              <li className="text-lg mb-2">Integrity</li>
              <li className="text-lg mb-2">Excellence</li>
              <li className="text-lg mb-2">Commitment</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Mission</h3>
            <p className="text-lg leading-relaxed">
              Our mission is to provide innovative and effective technological
              solutions that optimize processes and enhance operational
              efficiency. We are committed to upholding the highest standards of
              integrity and excellence in all our endeavors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        {/* Logo de BMS Support */}
        <div className="mt-12 mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            BMS Support technology LLC Partnership
          </h3>
          <p className="text-lg mb-4">
            We are proud to be partners with{" "}
            <strong>BMS Support Technology</strong>, a company that legally
            supports us in our operations. While we are an independent team, BMS
            Support helps us ensure we meet all necessary legal and professional
            standards.
          </p>

          {/* Logo con enlace */}
          <Link
            href="https://www.linkedin.com/company/bms-support-technology-llc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/logoBMS.png" // Reemplaza con la ruta correcta del logo
              alt="BMS Support Logo"
              width={192} // Reemplaza con el ancho deseado
              height={64} // Reemplaza con la altura deseada
              className="mx-auto"
            />
          </Link>
        </div>
      </section>
      <section className="py-16 bg-gray flex justify-center items-center">
        {/* Mapa interactivo */}
        <LatamMap />
      </section>

      <section id="fortalezas" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Strengths</h2>
          <ul className="flex flex-wrap justify-center gap-8">
            <li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-lg">
              <Image
                src="/images/leadership.png"
                alt="Liderazgo en Tecnología"
                width={48} // Tamaño de la imagen
                height={48} // Tamaño de la imagen
                className="w-12 h-12"
              />
              <span className="text-lg font-medium">Technology Leadership</span>
            </li>
            <li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-lg">
              <Image
                src="/images/inovation.png"
                alt="Desarrollo de Soluciones Innovadoras"
                width={48} // Tamaño de la imagen
                height={48} // Tamaño de la imagen
                className="w-12 h-12"
              />
              <span className="text-lg font-medium">
                Development of Innovative Solutions
              </span>
            </li>
            <li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-lg">
              <Image
                src="/images/multiplatform.png"
                alt="Experiencia Multiplataforma"
                width={48} // Tamaño de la imagen
                height={48} // Tamaño de la imagen
                className="w-12 h-12"
              />
              <span className="text-lg font-medium">
                Multiplatform Experience
              </span>
            </li>
            <li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-lg">
              <Image
                src="/images/certification.png"
                alt="Certificaciones y Capacitación"
                width={48} // Tamaño de la imagen
                height={48} // Tamaño de la imagen
                className="w-12 h-12"
              />
              <span className="text-lg font-medium">
                Certifications and Training
              </span>
            </li>
            <li className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-lg">
              <Image
                src="/images/developer.png"
                alt="Software Developer"
                width={48} // Tamaño de la imagen
                height={48} // Tamaño de la imagen
                className="w-12 h-12"
              />
              <span className="text-lg font-medium">Software Developer</span>
            </li>
          </ul>
        </div>
      </section>
      <section id="experiencia" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">
                IFF International Flavors and Fragrances Colombia
              </h3>
              <p className="text-gray-600 mb-4">
                Local IT Technology | BMS Administrator
              </p>
              <p className="text-gray-600 mb-4">2020 – 2024</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Coordinated and managed technology projects, improving the
                  efficiency of complex systems and optimizing operations.
                </li>
                <li>
                  Administered IT infrastructure, ensuring business continuity
                  and preventive and corrective maintenance of IT and
                  infrastructure.
                </li>
                <li>
                  Directly engaged with suppliers and internal clients to solve
                  problems and implement operational improvements.
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Avaso Colombia</h3>
              <p className="text-gray-600 mb-4">
                Senior Engineer of Technical Support
              </p>
              <p className="text-gray-600 mb-4">2019 – 2022</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Provided on-site technical support and managed the
                  implementation of new technologies, contributing to
                  operational efficiency.
                </li>
                <li>
                  Coordinated the installation and configuration of equipment,
                  ensuring proper functionality and customer satisfaction.
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Maxtintas Colombia</h3>
              <p className="text-gray-600 mb-4">
                Senior Engineer of Technical Support
              </p>
              <p className="text-gray-600 mb-4">2015 – 2019</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Performed preventive and corrective maintenance of equipment
                  and managed technology improvement projects focusing on
                  end-user satisfaction.
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Scopus México</h3>
              <p className="text-gray-600 mb-4">
                Certified Technician in Lexmark Printing Equipment
              </p>
              <p className="text-gray-600 mb-4">2010 – 2015</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Managed maintenance and support of printing equipment,
                  collaborating with technical teams to ensure efficient
                  operations.
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">
                Compartamos Banco México
              </h3>
              <p className="text-gray-600 mb-4">
                Technical Support at Help Desk
              </p>
              <p className="text-gray-600 mb-4">2006 – 2010</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Managed technical incidents and provided user support,
                  coordinating solutions with technology teams.
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">
                Grupo Financiero Inbursa
              </h3>
              <p className="text-gray-600 mb-4">
                Technical Support at Help Desk
              </p>
              <p className="text-gray-600 mb-4">2000 – 2006</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Supervised and managed technical support requests, ensuring
                  effective and timely resolution of incidents.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="case-studies" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Success Stories
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">
              IFF International Flavors and Fragrances Colombia
            </h3>
            <p className="text-gray-600 mb-4">
              Local IT Technology | BMS Administrator
            </p>
            <p className="text-gray-600 mb-4">2020 – 2024</p>
            <p className="text-gray-600 mb-4">
              Successfully managed and oversaw the complete relocation of IFF
              International Flavors and Fragrances to their new 6,000 square
              meter office facility. This complex project involved meticulous
              coordination and supervision of various IT infrastructure
              installations, ensuring a seamless transition to the new site.
            </p>
            <p className="text-gray-600 mb-4">Key accomplishments included:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                Coordinated the installation of IT infrastructure, including
                workstations, data centers, and critical networking components
                to ensure robust operational continuity.
              </li>
              <li>
                Supervised the setup and configuration of CCTV systems for
                comprehensive security surveillance, enhancing safety and
                monitoring capabilities across the facility.
              </li>
              <li>
                Managed the installation of access control systems, facilitating
                secure entry and exit points to safeguard the premises and
                regulate employee access.
              </li>
              <li>
                Directed the implementation of KNX lighting control systems,
                optimizing energy efficiency and user comfort with smart
                lighting solutions.
              </li>
              <li>
                Oversaw the deployment of Building Management Systems (BMS),
                integrating various subsystems for effective monitoring and
                management of building operations.
              </li>
            </ul>
            <p className="text-gray-600">
              This project not only required technical expertise but also
              demanded exceptional project management skills to align with the
              client’s objectives and ensure a smooth operational transition.
              The successful completion of this project underscored the ability
              to manage large-scale IT infrastructure projects and deliver
              comprehensive technological solutions.
            </p>
          </div>
        </div>
      </section>
      <section
        id="team"
        className="py-16 bg-gradient-to-b from-yellow-200 via-gray-200 to-gray-100 text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="team-member bg-white p-6 rounded-lg shadow-lg w-full sm:w-80">
              <h3 className="text-xl font-semibold mb-2">Rodrigo Ordoñez</h3>
              <p className="text-gray-700 mb-4">LATAM</p>
              <p className="text-gray-600">
                As the lead coordinator for Latin America, Rodrigo ensures
                seamless integration and support across various technological
                projects. His expertise in infrastructure management and local
                coordination drives the success of our operations in the region.
              </p>
            </div>
            <div className="team-member bg-white p-6 rounded-lg shadow-lg w-full sm:w-80">
              <h3 className="text-xl font-semibold mb-2">Gabriela Viridiana</h3>
              <p className="text-gray-700 mb-4">NA</p>
              <p className="text-gray-600">
                Gabriela oversees North America operations, focusing on
                optimizing technological implementations and ensuring high
                levels of client satisfaction. His role involves managing
                complex projects and facilitating communication between teams.
              </p>
            </div>
            <div className="team-member bg-white p-6 rounded-lg shadow-lg w-full sm:w-80">
              <h3 className="text-xl font-semibold mb-2">David Best</h3>
              <p className="text-gray-700 mb-4">EMEC y APPAC</p>
              <p className="text-gray-600">
                Coordinating Asia Pacific y Europe, Middle East and Africa
                initiatives, David leads efforts to enhance technological
                solutions and streamline processes. His contributions include
                overseeing project deployments and addressing regional
                challenges effectively.
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
        <p>Contact us at: [rodrigoivanordonezchavez@gmail.com]</p>
      </footer>
    </div>
  );
}
