"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const steps = [
    {
      number: "1",
      title: "Schedule Your Collection",
      description: "Book through WhatsApp or our app. Choose your preferred time - we offer weekend and evening slots.",
      icon: "📱",
      color: "from-emerald-100 to-emerald-50",
    },
    {
      number: "2",
      title: "Pack Your Clothes",
      description:
        "Simply pack your dirty clothes. Our riders will bring their own collection bags - no need to count or weigh.",
      icon: "👕",
      color: "from-cyan-100 to-cyan-50",
    },
    {
      number: "3",
      title: "We Clean & Deliver",
      description:
        "Our professional team cleans your items and delivers them back within 24 hours, fresh and ready to wear.",
      icon: "🚗",
      color: "from-teal-100 to-teal-50",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-cyan-50">
      {/* Header */}
      <motion.header
        className="bg-gradient-to-r from-primary to-accent text-white py-12 px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">How It Works</h1>
          <p className="text-lg text-emerald-50">Three simple steps to fresh, clean clothes delivered to your door</p>
        </div>
      </motion.header>

      {/* Steps */}
      <section className="py-20 px-6">
        <motion.div className="max-w-6xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <motion.div className="flex items-center justify-between mb-16 gap-4">
              {steps.map((step, index) => (
                <motion.div key={index} className="flex-1" variants={itemVariants}>
                  <div className="flex flex-col items-center">
                    <motion.div
                      className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-xl border-4 border-white relative z-10`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-5xl">{step.icon}</span>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">{step.title}</h3>
                    <p className="text-slate-600 text-center text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute top-12 left-1/2 w-1/2 h-1 bg-gradient-to-r from-emerald-400 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div key={index} className="flex gap-6" variants={itemVariants}>
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg border-2 border-white flex-shrink-0`}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-3xl">{step.icon}</span>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Why Choose Washrz?</h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "Fast Service", description: "48-hour turnaround guaranteed", icon: "⚡" },
              { title: "Eco-Friendly", description: "Electric vehicles only", icon: "🌱" },
              { title: "WhatsApp Easy", description: "Book anytime via WhatsApp", icon: "💬" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-200 hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ translateY: -5 }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <motion.section
        className="py-16 px-6 bg-gradient-to-r from-primary to-accent text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants}>
            Ready to Get Started?
          </motion.h2>
          <motion.p className="text-lg text-emerald-50 mb-8" variants={itemVariants}>
            Schedule your first pickup today!
          </motion.p>
          <motion.a
            className="bg-white text-emerald-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors"
             href="https://api.whatsapp.com/send/?phone=919717953316&text=Hi&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book On WhatsApp
          </motion.a>
        </div>
      </motion.section>
    </div>
  )
}
