"use client";

import Image from "next/image";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet your unique business needs and drive innovation.",
    image: "/images/software.jpg",
    details: [
      "Bespoke software application development",
      "Web application development",
      "Mobile application development (iOS & Android)",
      "Cloud-based software solutions",
      "Software integration and APIs",
      "Ongoing maintenance and support",
    ],
  },
  {
    title: "Advice and Consulting",
    description:
      "Strategic IT consulting to align technology with your business goals and optimize IT infrastructure.",
    image: "/images/advice.jpg",
    details: [
      "IT strategy development",
      "Technology roadmaps",
      "Business process optimization",
      "Risk assessment and mitigation",
      "Compliance consulting",
    ],
  },
  {
    title: "Preventive & Corrective Server Maintenance",
    description:
      "Ensuring optimal server performance and reliability through proactive maintenance and rapid issue resolution.",
    image: "/images/servers.jpg",
    details: [
      "Regular software updates and patching",
      "Hardware diagnostics and monitoring",
      "Data backups and restoration testing",
      "Security audits and vulnerability assessments",
      "Performance optimization",
      "Corrective maintenance for unexpected failures",
    ],
  },
  {
    title: "Virtualization in Hyper-V",
    description:
      "Efficient virtualization solutions using Hyper-V technology for enhanced resource utilization and business continuity.",
    image: "/images/virtualization.jpg",
    details: [
      "Hyper-V deployment and configuration",
      "Virtual machine management",
      "Resource optimization",
      "Disaster recovery planning",
      "Server consolidation",
    ],
  },
  {
    title: "IT Infrastructure Management",
    description:
      "Comprehensive management and optimization of your IT infrastructure for seamless operations and improved efficiency.",
    image: "/images/managment.jpg",
    details: [
      "Network monitoring and management",
      "Server administration",
      "Data storage management",
      "Cloud infrastructure management",
      "Security management",
      "Help desk support",
    ],
  },
  {
    title: "Building Management System (BMS)",
    description:
      "Integration, maintenance, and optimization of building management systems for efficient facility operations.",
    image: "/images/bms.jpg",
    details: [
      "BMS installation and configuration",
      "System monitoring and control",
      "Energy management",
      "Preventive maintenance",
      "Integration with other building systems",
    ],
  },
  {
    title: "Equipment Destruction Services",
    description:
      "Secure and environmentally responsible destruction of IT equipment, ensuring data security and compliance.",
    image: "/images/destruction.jpg",
    details: [
      "Data sanitization and wiping",
      "Physical destruction of hard drives",
      "Certificate of destruction",
      "Environmentally compliant disposal",
    ],
  },
  {
    title: "IT Equipment Sales and Purchasing",
    description:
      "Sales of reliable new and used IT equipment, and purchasing of surplus equipment.",
    image: "/images/sales.jpg",
    details: [
      "Sales of desktops, laptops, and servers",
      "Purchasing of used IT equipment",
      "Equipment refurbishment and resale",
      "Asset recovery services",
    ],
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Protecting your business from evolving cyber threats with comprehensive security solutions and proactive monitoring.",
    image: "/images/service3.jpg", // Replace with a more relevant image if available
    details: [
      "Vulnerability assessments and penetration testing",
      "Managed firewall and intrusion detection systems",
      "Endpoint protection and antivirus solutions",
      "Security awareness training for employees",
      "Incident response planning and management",
      "Data encryption and loss prevention (DLP)",
      "Compliance assessments (e.g., GDPR, HIPAA)",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="mt-20 py-16 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 text-center">
      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 text-center">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
          <p className="text-lg mb-6">
            Need assistance or have questions? Reach out to us and we will be
            happy to help!
          </p>
          <a
            href="/contact"
            className="bg-black text-white py-2 px-6 rounded inline-block font-bold hover:bg-gray-800 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-12 drop-shadow-lg">
          Our Services
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-yellow-200 transition-transform transform hover:scale-105 bg-white"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>
              <div className="p-6 text-yellow-500">
                <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="text-gray-600 list-disc list-inside space-y-1">
                  {service.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
