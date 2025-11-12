"use client"

import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-card to-background overflow-hidden ">
      <motion.div
        animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-32 right-20 text-8xl opacity-20"
      >
        🧥
      </motion.div>

      <motion.div
        animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        className="absolute bottom-32 left-20 text-8xl opacity-20"
      >
        👟
      </motion.div>

      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-1/3 right-1/4 w-40 h-40 border border-primary/5 rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"
      />

      <div className="relative mx-auto max-w-7xl p-4 flex flex-col items-center text-center">
        <motion.div variants={container} initial="hidden" animate="visible" className="w-full max-w-3xl">
          <motion.div variants={item} className="mb-6">
            <span className="inline-block text-sm bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-4 py-2 rounded-full font-semibold border border-primary/30">
              India's Only 24-Hour Service
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-5xl sm:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Your{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              24-Hour
            </span>{" "}
            Dry Cleaning & Shoe Spa
          </motion.h1>

          <motion.p variants={item} className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get free pickup & delivery, eco-friendly cleaning, and updates on WhatsApp. Experience pristine garments and
            restored sneakers in just one day.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.a
            href="https://api.whatsapp.com/send/?phone=919717953316&text=Hi&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-base px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all shadow-lg"
            >
              Book Your 24-Hr Pickup on WhatsApp
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-foreground/20 text-foreground text-base px-8 py-3 rounded-full font-medium hover:bg-foreground/5 transition-all"
            >
              Check Rates
            </motion.button>
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-6 text-base">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              <span className="text-2xl animate-pulse">⭐</span>
              <span className="text-foreground/70">
                <span className="font-semibold text-foreground">4.8/5</span> Based on 7,000+ Reviews
              </span>
            </motion.div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <span className="text-foreground/70">Serving Delhi, Gurgaon, Noida & Ghaziabad</span>
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="mt-16 w-full max-w-2xl relative group">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity blur-xl"
          />
          <div className="relative h-96 bg-gradient-to-br from-primary/15 to-accent/15 rounded-3xl overflow-hidden border-2 border-primary/20 group-hover:border-accent/40 transition-all">
            <img
              src="/professional-dry-cleaning-service.jpg"
              alt="Washrz dry cleaning service showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
