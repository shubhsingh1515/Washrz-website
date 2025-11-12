"use client"

import { motion } from "framer-motion"

const features = [
  {
    title: "India's Only 24-Hour Service",
    description:
      "We are the only dry cleaner in the country with the technology and logistics to guarantee a 24-hour turnaround on your standard orders.",
    icon: "⚡",
    gradient: "from-primary to-accent",
  },
  {
    title: "100% Eco-Friendly",
    description:
      "Say goodbye to the harsh petrol smell. We use skin-safe, green solvents better for your clothes, family, and the planet.",
    icon: "🌱",
    gradient: "from-accent to-secondary",
  },
  {
    title: "The Ultimate Shoe Spa",
    description:
      "Don't throw away your old sneakers! Our 5-step shoe spa process restores your favorite pair—from canvas to leather—to like new condition.",
    icon: "👟",
    gradient: "from-secondary to-primary",
  },
  {
    title: "Seamless WhatsApp Support",
    description:
      "From booking to delivery updates to 24/7 support, everything is managed on WhatsApp. You'll never wonder where your order is.",
    icon: "💬",
    gradient: "from-primary to-secondary",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="py-24 bg-gradient-to-br from-background via-card/20 to-background relative overflow-hidden"
    >
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs text-primary font-semibold">WHY CHOOSE US</span>
          <h2 className="text-3xl font-bold text-foreground mb-4 mt-2">Why We're Delhi NCR's Top-Rated Dry Cleaner</h2>
          <p className="text-sm text-foreground/70">Industry-leading service with cutting-edge technology</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants} whileHover={{ y: -8 }} className="group relative">
              <div className="relative bg-card border border-border rounded-2xl p-8 overflow-hidden h-full transition-all hover:border-primary/50">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                />

                <div className="relative flex gap-6">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl flex-shrink-0 shadow-lg`}
                  >
                    {feature.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">{feature.description}</p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      className={`mt-4 h-0.5 bg-gradient-to-r ${feature.gradient}`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-8 text-center"
        >
          {[
            { number: "7000+", label: "Happy Customers" },
            { number: "24-Hour", label: "Guaranteed Service" },
            { number: "4.8★", label: "Average Rating" },
          ].map((stat, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-card border border-border rounded-xl p-6">
              <motion.div className="text-2xl font-bold text-primary mb-1">{stat.number}</motion.div>
              <div className="text-xs text-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
