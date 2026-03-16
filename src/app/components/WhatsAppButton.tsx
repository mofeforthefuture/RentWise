import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  text: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function WhatsAppButton({ text, size = "md", className = "" }: WhatsAppButtonProps) {
  const whatsappNumber = "2348000000000"; // Replace with actual WhatsApp number
  const message = encodeURIComponent("Hi Rentwise, I would like to book an apartment inspection.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-full hover:bg-[#20BD5A] transition-all duration-200 font-medium shadow-lg hover:shadow-xl ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {text}
    </a>
  );
}