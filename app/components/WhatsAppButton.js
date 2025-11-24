// components/WhatsAppButton.js
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://wa.me/573022283964"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contáctame por WhatsApp"
        className="w-14 h-14 rounded-full bg-green-500 shadow-lg shadow-black/40 flex items-center justify-center hover:bg-green-400 transition"
      >
        <Image
          src="/images/whatsapp-icon.svg"
          alt="WhatsApp Icon"
          width={30}
          height={30}
        />
      </a>
    </div>
  );
}
