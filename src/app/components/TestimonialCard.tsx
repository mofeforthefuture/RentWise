import { motion } from "motion/react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  avatar: string;
}

export function TestimonialCard({ quote, author, avatar }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-[var(--rentwise-green)]/20 transition-colors duration-300"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <p className="text-gray-700 mb-4 leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <p className="font-medium text-gray-900">— {author}</p>
      </div>
    </motion.div>
  );
}
