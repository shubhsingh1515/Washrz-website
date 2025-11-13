"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";

// Import your Lottie JSON animations
import step1Anim from "@/public/lottie/step2.json";
import step2Anim from "@/public/lottie/step2.json";
import step3Anim from "@/public/lottie/step3.json";

// Steps with Lottie animations
const steps = [
  {
    number: 1,
    title: "Book on Chat",
    description: "Tap the button to schedule your free pickup. No calls, no hassle.",
    icon: "💬",
    animation: step1Anim,
  },
  {
    number: 2,
    title: "We Collect & Clean",
    description: "Our rider collects from your doorstep. We use 100% eco-friendly solvents (no petrol smell!).",
    icon: "🚗",
    animation: step2Anim,
  },
  {
    number: 3,
    title: "24-Hour Delivery",
    description: "Your fresh, clean items are delivered back within 24 hours. Guaranteed.*",
    icon: "📦",
    animation: step3Anim,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Your 24-Hour Clean, in 3 Simple Steps
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience the easiest way to get your clothes and shoes cleaned
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

          {/* Horizontal Line Animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent origin-left"
          />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-shadow relative overflow-hidden"
              >

                {/* ⭐ Lottie Background Illustration */}
                <Lottie
                  animationData={step.animation}
                  loop
                  autoplay
                  className="absolute inset-0 w-full h-full opacity-40 scale-150 pointer-events-none z-0"
                  style={{ objectFit: "contain" }}
                />

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                />

                {/* Card Animation Extras */}
                {idx === 1 && (
                  <motion.div
                    className="absolute top-2 right-2 text-3xl z-20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                  
                  </motion.div>
                )}

                {idx === 2 && (
                  <motion.div
                    className="absolute top-2 right-2 text-3xl z-20"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    🚚
                  </motion.div>
                )}

                {/* CONTENT */}
                <div className="relative z-30">
                  
                  {/* emoji icon */}
                  {/* <motion.div
                    className="text-7xl mb-4 inline-block"
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.icon}
                  </motion.div> */}

                  {/* Step Number Bubble */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: idx * 0.2 + 0.2 }}
                    className="absolute -top-4   transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold shadow-lg"
                  >
                    {step.number}
                  </motion.div>

                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>

                  <p className="text-base text-foreground/70">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center text-base text-foreground/60"
        >
          *Standard laundry & dry cleaning. Specialty items like leather, handbags, and shoes may take 48-72 hours.
        </motion.div>

      </div>
    </section>
  );
}
