import { useRef, type ReactNode } from "react";
import { 
  CheckCircle2, 
  X, 
  MessageCircle, 
  Home, 
  Users, 
  FileText, 
  Zap,
  Droplets,
  Hammer,
  CloudRain,
  Shield,
  ClipboardCheck
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";
import { TestimonialCard } from "./components/TestimonialCard";
import logoColor from "../assets/logo-color.png";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

function AnimatedSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

export default function App() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating WhatsApp Button - Mobile Only */}
      <FloatingWhatsAppButton />

      {/* Hero Section */}
      <section ref={heroRef} className="px-4 py-12 md:py-20 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <motion.div
            className="inline-flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={logoColor} alt="Rentwise" className="h-20 md:h-28 w-auto object-contain drop-shadow-sm" />
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Professional Apartment Inspection
            <br />
            <span className="text-[var(--rentwise-primary)]">Before You Pay.</span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Renting in Lagos comes with real risks. We send a trained inspector to check up to 4 apartments and deliver a professional report <strong>before you sign or pay.</strong>
          </motion.p>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <WhatsAppButton text="Contact Us on WhatsApp" size="lg" />
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-700"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[var(--rentwise-green)]" />
              <span>Trusted by Lagos renters</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[var(--rentwise-green)]" />
              <span>Professional inspection report</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[var(--rentwise-green)]" />
              <span>Identify issues before you commit</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="mt-12 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 32 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="https://images.unsplash.com/photo-1753622801504-ffb20809e45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnNwZWN0b3IlMjBjaGVja2luZyUyMGhvbWV8ZW58MXx8fHwxNzczMzQ1MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional apartment inspector checking property"
            className="w-full h-64 md:h-96 object-cover"
          />
        </motion.div>
      </section>

      {/* Problem Section */}
      <AnimatedSection className="px-4 py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            Renting in Lagos Has Real Risks
          </h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: X, text: "Pressure to pay before you can properly view" },
              { icon: X, text: "Hidden plumbing and water supply issues" },
              { icon: X, text: "Flood-prone areas with no upfront disclosure" },
              { icon: X, text: "Unverified landlords and documentation risks" },
              { icon: X, text: "Faulty electrical systems and power supply" },
            ].map((problem, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white p-6 rounded-2xl shadow-md border border-red-100 hover:shadow-lg hover:border-red-200 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <problem.icon className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{problem.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl md:text-2xl text-gray-800 font-medium mb-8">
              We inspect the property for you <strong>before you pay or take possession.</strong>
            </p>
            <WhatsAppButton text="Request an Inspection" size="lg" />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            How It Works
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.15 }}
          >
            {[
              {
                number: "1",
                icon: MessageCircle,
                title: "Contact us on WhatsApp",
                description: "Share the property address. We cover Lagos-wide—Lekki, Ikeja, Ajah, and beyond.",
              },
              {
                number: "2",
                icon: Users,
                title: "We Assign an Inspector",
                description: "Our trained inspector visits the property at a scheduled time.",
              },
              {
                number: "3",
                icon: ClipboardCheck,
                title: "We Inspect Up to 4 Apartments",
                description: "We assess plumbing, electrical, structure, flood risk, and documentation.",
              },
              {
                number: "4",
                icon: FileText,
                title: "You Receive a Detailed Report",
                description: "A clear report with photos and findings. You decide before you pay.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="text-center group"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--rentwise-green)] text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.08 }}
                >
                  {step.number}
                </motion.div>
                <step.icon className="w-12 h-12 text-[var(--rentwise-green)] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <WhatsAppButton text="Book an Inspection" size="lg" />
          </div>
        </div>
      </AnimatedSection>

      {/* What We Inspect Section */}
      <AnimatedSection className="px-4 py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            What We Check For You
          </h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              { icon: Droplets, text: "Water supply and plumbing" },
              { icon: Zap, text: "Electrical systems and wiring" },
              { icon: Hammer, text: "Structural integrity and building condition" },
              { icon: CloudRain, text: "Flood risk and drainage" },
              { icon: Home, text: "Compound and environment" },
              { icon: Shield, text: "Security and neighbourhood" },
              { icon: ClipboardCheck, text: "Landlord and documentation checks" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-[var(--rentwise-green)]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-6 h-6 text-[var(--rentwise-green)] flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            Transparent Pricing
          </h2>

          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-2 border-[var(--rentwise-green)] hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Inspection Fee
              </h3>
              
              <div className="text-center mb-6">
                <span className="text-5xl md:text-6xl font-bold text-gray-900">₦35,000</span>
              </div>
              <p className="text-center text-gray-600 text-sm mb-6">Single fee. Covers up to 4 properties.</p>

              <div className="space-y-3 mb-8">
                <p className="font-medium text-gray-900 mb-4">Included:</p>
                {[
                  "Inspection of up to 4 apartments",
                  "Detailed report with photos",
                  "Clear findings and recommendations",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--rentwise-green)] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <WhatsAppButton text="Book an Inspection" size="lg" className="w-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="px-4 py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp}>
              <TestimonialCard
                quote="Rentwise identified high flood risk on a Lekki property I was considering. The report was clear and helped me avoid a costly mistake. Highly recommend."
                author="Chinedu A., Lekki"
                avatar="https://images.unsplash.com/photo-1668752600261-e56e7f3780b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzczMzQ1MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <TestimonialCard
                quote="The inspector found electrical issues we would never have spotted. We would have moved in and faced expensive repairs. The inspection paid for itself."
                author="Tola O., Ikeja"
                avatar="https://images.unsplash.com/photo-1765648684630-ac9c15ac98d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBwcm9mZXNzaW9uYWwlMjBzbWlsaW5nfGVufDF8fHx8MTc3MzM0NTI2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <TestimonialCard
                quote="Professional and thorough. The report was detailed with photos and clear recommendations. Worth the investment for anyone renting in Lagos."
                author="Blessing M., Ajah"
                avatar="https://images.unsplash.com/photo-1585011191285-8b443579631c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxhZ29zfGVufDF8fHx8MTc3MzM0NTI2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              />
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Why Trust Us Section */}
      <AnimatedSection className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            Why Choose Rentwise
          </h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.15 }}
          >
            {[
              { icon: Users, text: "Trained inspectors with local expertise" },
              { icon: ClipboardCheck, text: "Structured checklist for water, electrical, structure and flood risk" },
              { icon: FileText, text: "Objective, detailed inspection reports" },
              { icon: Zap, text: "Efficient scheduling and turnaround" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-lg hover:border-[var(--rentwise-green)]/30 transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-[var(--rentwise-green)] mx-auto mb-4" />
                <p className="text-gray-700 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
      <motion.section
        className="px-4 py-16 md:py-24 bg-gradient-to-br from-[var(--rentwise-primary)] to-[var(--rentwise-blue-light)]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Inspect Before You Commit
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a professional inspection and make an informed decision before you pay or take possession.
          </p>

          <motion.a
            href="https://wa.me/2348000000000?text=Hi%20Rentwise%2C%20I%20would%20like%20to%20book%20an%20apartment%20inspection."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-[var(--rentwise-primary)] px-8 py-4 text-lg rounded-full font-bold shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <MessageCircle className="w-6 h-6" />
            Contact Rentwise on WhatsApp
          </motion.a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-[var(--rentwise-primary-dark)] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex justify-center mb-4">
            <img src={logoColor} alt="Rentwise" className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-95" />
          </div>
          
          <p className="text-gray-400 mb-6">
            Professional apartment inspection before you pay.
          </p>

          <a
            href="https://wa.me/2348000000000?text=Hi%20Rentwise%2C%20I%20would%20like%20to%20book%20an%20apartment%20inspection."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--rentwise-green)] hover:text-[var(--rentwise-green-dark)] transition-colors mb-8"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Contact us on WhatsApp</span>
          </a>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2026 Rentwise. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}