// components/WhatsAppButton.js
import Image from "next/image"; // Importa el componente Image

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {" "}
      {/* Asegura que el z-index sea alto */}
      <a
        href="https://wa.me/573022283964" // Cambia este enlace a tu número de WhatsApp
        target="_blank"
        className="bg-primary text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-500 transition duration-300"
        aria-label="Contact us on WhatsApp"
        rel="noopener noreferrer" // Asegura seguridad con enlaces externos
      >
        <Image
          src="/images/whatsapp-icon.svg"
          alt="WhatsApp Icon"
          width={32} // Ajusta el tamaño según sea necesario
          height={32} // Ajusta el tamaño según sea necesario
        />
      </a>
    </div>
  );
}
