"use client";
import { useState } from "react";
import Image from "next/image";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Technical Support",
      description:
        "Comprehensive support for your hardware and software issues, ensuring minimal downtime.",
      details: `
        <ul>
          <li>Hardware diagnostics and repair</li>
          <li>Software installation and troubleshooting</li>
          <li>Network setup and management</li>
          <li>System performance optimization</li>
          <li>Virus and malware removal</li>
          <li>Backup and disaster recovery solutions</li>
          <li>Remote support</li>
          <li>Operating system updates and patch management</li>
          <li>Device configuration</li>
          <li>Security audits and improvements</li>
          <li>User training and support</li>
          <li>Email and communication system troubleshooting</li>
        </ul>
      `,
      image: "/images/service1.jpg",
    },
    {
      title: "IT Infrastructure Management",
      description:
        "Expert management and optimization of your IT infrastructure to ensure smooth operations.",
      details: `
        <ul>
          <li>Server setup and maintenance</li>
          <li>Cloud services management</li>
          <li>Network optimization</li>
          <li>Database management</li>
          <li>System monitoring and alerting</li>
          <li>Data storage solutions</li>
          <li>Infrastructure scaling</li>
          <li>Disaster recovery planning</li>
          <li>IT asset management</li>
          <li>Performance tuning</li>
        </ul>
      `,
      image: "/images/service2.jpg",
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Protect your business from cyber threats with our robust security solutions.",
      details: `
        <ul>
          <li>Firewall installation and management</li>
          <li>Threat detection and response</li>
          <li>Vulnerability assessments</li>
          <li>Intrusion prevention systems</li>
          <li>Security audits and compliance</li>
          <li>Encryption and data protection</li>
          <li>Incident response planning</li>
          <li>Security awareness training</li>
          <li>Penetration testing</li>
          <li>Endpoint protection</li>
        </ul>
      `,
      image: "/images/service3.jpg",
    },
    {
      title: "Web Development",
      description:
        "We create customized software solutions to meet your specific needs, guaranteeing optimal results tailored to your business.",
      details: `
        <ul>
          <li>Custom website design and development</li>
          <li>Responsive and mobile-friendly design</li>
          <li>E-commerce solutions</li>
          <li>Content management systems</li>
          <li>API integrations</li>
          <li>Performance optimization</li>
          <li>SEO best practices</li>
          <li>Website maintenance and support</li>
          <li>User experience (UX) design</li>
          <li>Web application development</li>
        </ul>
      `,
      image: "/images/service4.jpg",
    },
  ];

  const closeModal = () => setSelectedService(null);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <section className="py-16 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 text-center">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Explore Our Services</h2>
          <p className="text-lg mb-8">
            We offer a variety of services to meet your needs. Explore the
            options below to find out more.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <main className="bg-white py-12 relative">
        <div className="container mx-auto p-6 relative z-10">
          <section className="py-16">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-[800px] mx-auto transition-transform transform hover:scale-105"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={500}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="absolute inset-0 bg-white opacity-30"></div>
                    <div className="relative p-6 z-10 text-center">
                      <h3 className="text-3xl font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white mb-4">{service.description}</p>
                      <button
                        onClick={() => setSelectedService(service)}
                        className="text-white font-semibold underline"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-primary to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
