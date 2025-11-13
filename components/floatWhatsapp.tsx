"use client";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=919717953316&text=Hi&type=phone_number"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50  text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center"
    >
      <img
        src="/icons/whatsapp.gif"
        alt="WhatsApp"
        className="w-10 h-10 rounded-full"
      />
    </a>
  );
}
