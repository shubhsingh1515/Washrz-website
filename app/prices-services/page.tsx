"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function PricesServices() {
  const [expandedService, setExpandedService] = useState<number | null>(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const services = [
    {
      name: "Premium Laundry",
      price: "AED 5",
      unit: "per kg",
      description: "Full laundry service with washing, drying, and ironing",
      features: ["Hand-picked fabric care", "Professional ironing", "48-hour delivery", "Eco-friendly detergents"],
      icon: "👕",
      color: "from-pink-100 to-pink-50",
      borderColor: "border-pink-300",
    },
    {
      name: "Dry Clean",
      price: "AED 8",
      unit: "per item",
      description: "Professional dry cleaning for delicate garments",
      features: ["Expert dry cleaning", "Stain removal", "Color protection", "Premium finish"],
      icon: "👔",
      color: "from-green-100 to-green-50",
      borderColor: "border-green-300",
    },
    {
      name: "Duvets & Bulky Items",
      price: "AED 15",
      unit: "per item",
      description: "Specialized cleaning for large items",
      features: ["Deep cleaning", "Industrial machines", "Fast drying", "Like-new feel"],
      icon: "🛏️",
      color: "from-blue-100 to-blue-50",
      borderColor: "border-blue-300",
    },
    {
      name: "On-site Services",
      price: "AED 25",
      unit: "per item",
      description: "Furniture and carpet cleaning at your location",
      features: ["Professional equipment", "Deep cleaning", "Stain removal", "Same-day service"],
      icon: "🛋️",
      color: "from-yellow-100 to-yellow-50",
      borderColor: "border-yellow-300",
    },
    {
      name: "Shoe Spa",
      price: "AED 20",
      unit: "per pair",
      description: "Complete shoe cleaning and restoration service",
      features: ["Deep cleaning", "Deodorizing", "Protective coating", "Like-new condition"],
      icon: "👟",
      color: "from-red-100 to-red-50",
      borderColor: "border-red-300",
    },
    {
      name: "Handbag Dry-clean",
      price: "AED 25",
      unit: "per item",
      description: "Expert cleaning for your precious bags",
      features: ["Gentle cleaning", "Leather care", "Interior cleaning", "Protection coating"],
      icon: "👜",
      color: "from-orange-100 to-orange-50",
      borderColor: "border-orange-300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <motion.header
        className="bg-gradient-to-r from-primary to-accent text-white py-16 px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-lg text-emerald-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Schedule a pickup right away. Premium quality, affordable prices.
          </motion.p>
        </div>
      </motion.header>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <motion.div className="max-w-6xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          {/* Desktop Grid */}
          <motion.div
            className="hidden lg:grid grid-cols-3 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${service.color} rounded-2xl border-2 ${service.borderColor} overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300`}
                variants={itemVariants}
                whileHover={{ translateY: -10 }}
              >
                <div className="p-8">
                  <motion.div
                    className="text-6xl mb-4"
                    // animate={{ rotate: 360 }}
                    // transition={{ delay: index * 0.1, duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.name}</h3>
                  <div className="mb-6">
                    {/* <div className="text-4xl font-bold text-slate-900">{service.price}</div> */}
                    {/* <p className="text-slate-600 text-sm">{service.unit}</p> */}
                  </div>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                        <span className="text-emerald-500">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-2 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Accordion */}
          <div className="lg:hidden space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${service.color} rounded-xl border-2 ${service.borderColor} overflow-hidden shadow-lg`}
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-opacity-80 transition-all"
                >
                  <div className="flex items-center gap-4 text-left">
                    <span className="text-4xl">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
                      {/* <div className="text-2xl font-bold text-slate-900">{service.price}</div> */}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedService === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl"
                  >
                    ▼
                  </motion.div>
                </motion.button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedService === index ? "auto" : 0,
                    opacity: expandedService === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden border-t-2 border-current border-opacity-20"
                >
                  <div className="p-6 space-y-4">
                    <p className="text-slate-600">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                          <span className="text-emerald-500">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      className="w-full bg-slate-700 text-white py-2 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View More
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-white/50">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-center text-slate-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Sets Us Apart
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "Free 24h Delivery", icon: "🚗" },
              { title: "No Minimum Order", icon: "📦" },
              { title: "Quality Guaranteed", icon: "⭐" },
              { title: "WhatsApp Booking", icon: "💬" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-200"
                variants={itemVariants}
                whileHover={{ translateY: -5 }}
              >
                <div className="text-5xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-slate-900">{feature.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Table */}
      {/* <section className="py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-center text-slate-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Simple Pricing
          </motion.h2>
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-slate-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-3 gap-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 font-bold">
              <div>Service</div>
              <div>Price</div>
              <div>Unit</div>
            </div>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-3 gap-4 p-6 border-b border-slate-200 hover:bg-slate-50 transition-colors last:border-0"
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
              >
                <div className="font-semibold text-slate-900 flex items-center gap-2">
                  <span>{service.icon}</span> {service.name}
                </div>
                <div className="text-slate-600">{service.price}</div>
                <div className="text-slate-600 text-sm">{service.unit}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section> */}

      {/* CTA */}
      <motion.section
        className="py-16 px-6 bg-gradient-to-r from-primary to-accent text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Ready to Schedule Your Pickup?
          </motion.h2>
          <motion.button
            className="bg-white text-emerald-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book On WhatsApp
          </motion.button>
        </div>
      </motion.section>

      
    </div>
  )
}
