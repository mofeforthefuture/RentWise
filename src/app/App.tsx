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
  ClipboardCheck,
  Wind,
  Ruler,
  Eye,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";
import { TestimonialCard } from "./components/TestimonialCard";
import { InspectionReportPreview } from "./components/InspectionReportPreview";
import logoColor from "../assets/logo-color.png";
import heroPhoto from "../assets/e37118e8-e920-41df-9192-d6c3b1da6ad6.JPG";
import { getWhatsAppUrl } from "./lib/whatsapp";

const TAGLINE = "Inspect before you rent.";
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
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

function AnimatedSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

const WHAT_WE_CHECK = [
  { icon: Droplets, label: "Plumbing & water pressure" },
  { icon: Zap, label: "Electrical wiring" },
  { icon: Ruler, label: "Walls & ceilings" },
  { icon: Hammer, label: "Structural cracks" },
  { icon: CloudRain, label: "Drainage & flood risk" },
  { icon: Wind, label: "Ventilation" },
  { icon: Home, label: "Compound condition" },
  { icon: Shield, label: "Security" },
  { icon: Eye, label: "General condition" },
  { icon: ClipboardCheck, label: "Landlord & documentation" },
];

export default function App() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.15 });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <FloatingWhatsAppButton />

      {/* ——— 1. HERO ——— */}
      <section ref={heroRef} className="px-4 pt-8 pb-14 md:pt-12 md:pb-20 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <motion.div
            className="inline-flex flex-col items-center gap-2 mb-6"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={logoColor}
              alt="Rentwise"
              className="h-20 md:h-24 w-auto object-contain"
            />
            <p className="text-sm font-medium text-[var(--rentwise-primary)] tracking-wide">
              {TAGLINE}
            </p>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            Inspect Any Apartment
            <br />
            <span className="text-[var(--rentwise-primary)]">Before You Pay.</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Rentwise sends a trained inspector to assess up to 4 apartments and give you a clear report before you commit.
          </motion.p>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <WhatsAppButton text="Inspect an Apartment Now" size="lg" />
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--rentwise-green)]" />
              Trusted by Lagos renters
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--rentwise-green)]" />
              Professional reports
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--rentwise-green)]" />
              Up to 4 apartments checked
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--rentwise-green)]" />
              Fast response
            </span>
          </motion.div>
        </div>

        <motion.div
          className="rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src={heroPhoto}
            alt="Inspector assessing an apartment"
            className="w-full aspect-[4/3] md:aspect-video object-cover"
          />
        </motion.div>
      </section>

      {/* ——— 2. PAIN ——— */}
      <AnimatedSection className="px-4 py-14 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Renting in Lagos is risky.
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Too many people pay before they truly know the apartment. Avoid expensive rental mistakes.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.15 }}
          >
            {[
              "Agents rushing you to pay",
              "Hidden plumbing issues",
              "Flood-prone areas",
              "Bad wiring & power supply",
              "Water and drainage problems",
              "Structural damage",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white p-5 rounded-xl border border-red-100 flex items-center gap-3"
              >
                <X className="w-5 h-5 text-red-500 shrink-0" />
                <p className="text-gray-800 font-medium">{text}</p>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-lg text-gray-800 font-medium mb-8">
            Rentwise inspects the property for you <strong>before you pay rent, caution fees, or agent fees.</strong>
          </p>
          <div className="flex justify-center">
            <WhatsAppButton text="Book an Inspection" size="lg" />
          </div>
        </div>
      </AnimatedSection>

      {/* ——— 3. SOLUTION ——— */}
      <AnimatedSection className="px-4 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Know the apartment before you pay.
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Rentwise helps you inspect apartments before paying rent, so you can decide with confidence.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.12 }}
          >
            {[
              { title: "Hidden defects checked", desc: "Plumbing, electrical, structure, flood risk." },
              { title: "Professional report", desc: "Clear findings, photos, and recommendations." },
              { title: "Faster decisions", desc: "One report for up to 4 apartments." },
              { title: "Local expertise", desc: "Inspectors who know Lagos properties." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-gray-50 border border-gray-100 rounded-xl p-5 text-center"
              >
                <CheckCircle2 className="w-8 h-8 text-[var(--rentwise-green)] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center">
            <WhatsAppButton text="Send Apartment Details" size="lg" />
          </div>
        </div>
      </AnimatedSection>

      {/* ——— 4. WHAT WE CHECK ——— */}
      <AnimatedSection className="px-4 py-14 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            What we check for you
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
            Our inspectors assess these areas so you get a clear picture before you commit.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {WHAT_WE_CHECK.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-3 bg-white py-3 px-4 rounded-lg border border-gray-100"
              >
                <Icon className="w-5 h-5 text-[var(--rentwise-green)] shrink-0" />
                <span className="text-gray-800 font-medium">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-10">
            <WhatsAppButton text="Chat With Us on WhatsApp" size="md" />
          </div>
        </div>
      </AnimatedSection>

      {/* ——— 5. HOW IT WORKS ——— */}
      <AnimatedSection className="px-4 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            How it works
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            Simple, clear process. You decide with confidence.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.12 }}
          >
            {[
              { step: 1, title: "Send us the apartment details", body: "Share the address on WhatsApp. We cover Lagos-wide." },
              { step: 2, title: "We inspect the property", body: "A trained inspector visits and assesses the unit(s)." },
              { step: 3, title: "We send you a clear report", body: "Photos, findings, risk notes, and recommendations." },
              { step: 4, title: "You decide with confidence", body: "Pay and move in only if the report works for you." },
            ].map(({ step, title, body }) => (
              <motion.div key={step} variants={fadeUp} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--rentwise-primary)] text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{body}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center">
            <WhatsAppButton text="Book an Inspection" size="lg" />
          </div>
        </div>
      </AnimatedSection>

      {/* ——— 6. INSPECTION REPORT PREVIEW ——— */}
      <AnimatedSection className="px-4 py-14 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            See what you get
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
            Every inspection includes a clear report with photos, defect notes, risk rating, and recommendations.
          </p>

          <InspectionReportPreview />

          <div className="flex justify-center mt-10">
            <WhatsAppButton text="Get My Report" size="lg" />
          </div>
        </div>
      </AnimatedSection>

      {/* ——— 7. PRICING ——— */}
      <AnimatedSection className="px-4 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Transparent pricing
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
            One fee. Up to 4 apartments. No hidden charges.
          </p>

          <motion.div
            className="max-w-sm mx-auto bg-white rounded-2xl border-2 border-[var(--rentwise-green)] p-8 shadow-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-wide mb-1">
              Inspection fee
            </p>
            <p className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ₦35,000
            </p>
            <ul className="space-y-3 mb-8">
              {["Up to 4 apartments", "Detailed report with photos", "Clear recommendations"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--rentwise-green)] shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <WhatsAppButton text="Book on WhatsApp" size="lg" className="w-full" />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ——— 8. TESTIMONIALS ——— */}
      <AnimatedSection className="px-4 py-14 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Trusted by Lagos renters
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
            Clear inspection reports. Fast turnaround. Local property insight.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={fadeUp}>
              <TestimonialCard
                quote="Rentwise’s report showed flood risk on a Lekki place I was about to take. Saved me from a bad decision. Highly recommend."
                author="Chinedu A., Lekki"
                avatar="https://images.unsplash.com/photo-1668752600261-e56e7f3780b6?w=200&h=200&fit=crop"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <TestimonialCard
                quote="The inspector caught electrical issues we’d never have seen. Would have cost us a lot after moving in. The fee was worth it."
                author="Tola O., Ikeja"
                avatar="https://images.unsplash.com/photo-1765648684630-ac9c15ac98d5?w=200&h=200&fit=crop"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <TestimonialCard
                quote="Professional and thorough. Got a clear report with photos and recommendations. Anyone renting in Lagos should use this."
                author="Blessing M., Ajah"
                avatar="https://images.unsplash.com/photo-1585011191285-8b443579631c?w=200&h=200&fit=crop"
              />
            </motion.div>
          </motion.div>

          <div className="flex justify-center mt-10">
            <WhatsAppButton text="Inspect an Apartment Now" size="md" />
          </div>
        </div>
      </AnimatedSection>

      {/* ——— 9. WHY RENTWISE ——— */}
      <AnimatedSection className="px-4 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Why Rentwise
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
            A trusted inspection service for renters. Not a listing site. Not analytics. Just inspection before you pay.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              { icon: Users, text: "Trained inspectors with local expertise" },
              { icon: FileText, text: "Clear, detailed inspection reports" },
              { icon: Zap, text: "Fast turnaround" },
              { icon: Shield, text: "Reduced rental risk" },
            ].map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col items-center text-center p-5 rounded-xl bg-gray-50 border border-gray-100"
              >
                <Icon className="w-8 h-8 text-[var(--rentwise-green)] mb-3" />
                <span className="font-medium text-gray-800">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ——— 10. FINAL CTA ——— */}
      <motion.section
        className="px-4 py-14 md:py-20 bg-gradient-to-br from-[var(--rentwise-primary)] to-[var(--rentwise-blue-light)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Don’t gamble with your next apartment.
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let Rentwise inspect it before you pay.
          </p>
          <motion.a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-[var(--rentwise-primary)] px-8 py-4 rounded-full font-bold shadow-xl text-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-6 h-6" />
            Book on WhatsApp
          </motion.a>
        </div>
      </motion.section>

      {/* ——— 11. FOOTER ——— */}
      <footer className="px-4 py-12 bg-[var(--rentwise-primary-dark)] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src={logoColor}
            alt="Rentwise"
            className="h-14 md:h-16 w-auto object-contain brightness-0 invert opacity-90 mx-auto mb-3"
          />
          <p className="text-[var(--rentwise-green)] font-medium mb-2">{TAGLINE}</p>
          <p className="text-gray-400 text-sm mb-6">
            Apartment inspection service for Lagos renters.
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--rentwise-green)] hover:text-[var(--rentwise-green-dark)] font-medium"
          >
            <MessageCircle className="w-5 h-5" />
            Contact us on WhatsApp
          </a>
          <div className="border-t border-gray-700 mt-8 pt-8">
            <p className="text-gray-500 text-sm">© 2026 Rentwise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
