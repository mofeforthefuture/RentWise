import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { getWhatsAppUrl } from "../lib/whatsapp";

export function FloatingWhatsAppButton() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-2xl md:hidden"
      aria-label="Message us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
}