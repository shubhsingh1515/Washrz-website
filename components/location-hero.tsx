"use client"

import { motion } from "framer-motion"

interface LocationHeroProps {
  location: string
  subtitle: string
  highlights: string[]
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

export function LocationHero({ location, subtitle, highlights }: LocationHeroProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden ">
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-20 right-5 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        className="absolute bottom-20 left-5 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary/10 rounded-full"
      />

      <div className="relative mx-auto max-w-7xl p-4 flex flex-col items-center text-center">
        <motion.div variants={container} initial="hidden" animate="visible" className="w-full max-w-3xl">
          <motion.div variants={item} className="mb-6">
            <span className="inline-block text-xs bg-primary/15 text-primary px-4 py-1.5 rounded-full font-semibold">
              Serving {location} with Excellence
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-5xl sm:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Dry Cleaning{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Perfected
            </span>{" "}
            in {location}
          </motion.h1>

          <motion.p variants={item} className="text-sm text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
             href="https://api.whatsapp.com/send/?phone=919717953316&text=Hi&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all"
            >
              Book Now on WhatsApp
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary/30 text-foreground text-xs px-8 py-3 rounded-full font-medium hover:bg-primary/5 transition-all"
            >
              View Rates
            </motion.button>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 text-xs mb-16">
            {highlights.map((highlight, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2"
              >
                <span className="text-lg animate-pulse">✓</span>
                <span className="text-foreground/80 font-medium">{highlight}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

            {/* ⭐ VIDEO BLOCK */}
       <motion.div variants={item} className="mt-2 w-full max-w-3xl relative group">
         <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
           className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity blur-xl"
         />
       
         <div className="relative h-120 bg-gradient-to-br from-primary/15 to-accent/15 rounded-3xl overflow-hidden border-2 border-primary/20 group-hover:border-accent/40 transition-all">
       
           {/* --- VIDEO --- */}
           <video
             src="/shoe-spa.mp4"
             autoPlay
             loop
             
             playsInline
             className="w-full h-full object-cover"
           ></video>
       
           {/* --- TEXT OVERLAY --- */}
           <div className="absolute inset-0 flex items-start justify-center pt-6">
         <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-3xl font-bold drop-shadow-2xl">
           Shoe Spa Services in Delhi-NCR
         </h2>
       </div>
       
         </div>
       </motion.div>
      </div>
    </section>
  )
}
