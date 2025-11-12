"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Sparkles, FileText, Lock, Phone } from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function TermsAndConditionsPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-card to-background text-foreground overflow-hidden">
      {/* Floating ambient elements for subtle motion */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />

      {/* Page Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Terms & Conditions
          </motion.h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Transparency, care, and trust are the foundation of every Washrz experience.  
            Please read our terms carefully before availing our services.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="visible" className="space-y-20">
          {/* Delivery Policy */}
          <motion.div variants={item} className="relative rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/5 via-card/10 to-accent/5 p-8 sm:p-12 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-7 h-7 text-primary" />
              <h2 className="text-2xl font-semibold">Delivery Policy</h2>
            </div>
            <ul className="list-disc list-inside space-y-3 text-foreground/80 leading-relaxed">
              <li>Laundry deliveries will be made in <strong>72 hours</strong>.</li>
              <li>Dry Cleaning garments will be delivered in <strong>120 hours</strong>.</li>
              <li>Urgent delivery of garments will be charged at <strong>50% extra</strong>.</li>
              <li>Free pickup & delivery on laundry orders of <strong>6 KG or more</strong>.</li>
              <li>We strive for timely delivery; if delayed, we’ll keep you updated.</li>
              <li>Customers are requested to inspect garments upon delivery.</li>
              <li>We are not responsible for fabric shrinkage, color bleeding, or embellishment damage.</li>
              <li>All garments are cleaned with care, but some stains may be permanent.</li>
              <li>Garments uncollected within <strong>15 days</strong> of delivery may incur storage risk.</li>
              <li>We are not liable for loss due to fire, burglary, or unforeseen circumstances.</li>
            </ul>
          </motion.div>

          {/* Cleaning & Quality Policy */}
          <motion.div variants={item} className="relative rounded-3xl border border-accent/10 bg-gradient-to-br from-accent/5 via-card/10 to-secondary/5 p-8 sm:p-12 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-7 h-7 text-accent" />
              <h2 className="text-2xl font-semibold">Cleaning & Quality Policy</h2>
            </div>
            <ul className="list-disc list-inside space-y-3 text-foreground/80 leading-relaxed">
              <li>We use professional methods such as hydrocarbon, PERC, and soft washes as required.</li>
              <li>Tariff is determined by garment complexity; rates listed are minimal estimates.</li>
              <li>Our technicians assess and choose the safest, most effective cleaning method for each garment.</li>
              <li>All articles are processed at the customer’s risk.</li>
              <li>We may feature cleaned garments in promotional visuals with full discretion.</li>
              <li>All disputes fall under the jurisdiction of <strong>Delhi courts</strong>.</li>
            </ul>
          </motion.div>

          {/* Privacy Policy */}
          <motion.div variants={item} className="relative rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/5 via-card/10 to-accent/5 p-8 sm:p-12 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-7 h-7 text-primary" />
              <h2 className="text-2xl font-semibold">Privacy Policy</h2>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Washrz values your privacy. We collect and protect personal data shared through our stores,
              mobile app, or customer service channels with utmost care and consent.
            </p>
            <p className="mb-4">
              Your data helps us provide customized services like:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Real-time updates about your order</li>
              <li>Information about offers and new services</li>
              <li>Feedback and experience research</li>
            </ul>
            <p className="mt-4">
              Communication methods include phone, WhatsApp, SMS, email, and direct mailers.
            </p>
          </motion.div>

          {/* Cloth Protection Program */}
          <motion.div variants={item} className="relative rounded-3xl border border-secondary/10 bg-gradient-to-br from-secondary/5 via-card/10 to-primary/5 p-8 sm:p-12 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-7 h-7 text-secondary" />
              <h2 className="text-2xl font-semibold">Guaranteed Cloth Protection Program</h2>
            </div>
            <ul className="list-disc list-inside space-y-3 text-foreground/80 leading-relaxed">
              <li>Protection against any damage or loss during cleaning.</li>
              <li>Refund up to <strong>10×</strong> the item’s processing value in case of confirmed loss/damage.</li>
              <li>Free re-processing for quality-related issues.</li>
              <li>Available for orders paid via the Washrz mobile app.</li>
              <li>Claims must be raised within <strong>7 days</strong> of delivery.</li>
              <li>Disputes are subject to Delhi jurisdiction.</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={item}
            className="text-center mt-12 flex flex-col items-center"
          >
            <Phone className="w-8 h-8 text-accent mb-3" />
            <p className="text-lg">
              For any queries, reach us at{" "}
              <a
                href="tel:9717953316"
                className="text-primary font-semibold underline hover:opacity-80 transition"
              >
                +91 9717953316
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
