"use client";

import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-10"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-accent  rounded-3xl p-12 md:p-16 border border-primary/20 shadow-2xl overflow-hidden"
        >
          <motion.div
            animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0 opacity-20"
          />
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready for the 24-Hour Difference?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Book your first order today and get{" "}
              <span className="font-bold">Flat 20% OFF!</span> Don't miss this
              exclusive offer.
            </motion.p>

            <motion.a
              href="https://api.whatsapp.com/send/?phone=919717953316&text=Hi&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.92 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white text-primary text-sm md:text-base px-8 md:px-12 py-3 md:py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-xl"
            >
              Get 20% Off - Book Now on WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
