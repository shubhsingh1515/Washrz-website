"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function AboutUsClient() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const values = [
    { title: "Quality", description: "Premium service every time", icon: "⭐" },
    { title: "Reliability", description: "48-hour guaranteed delivery", icon: "✅" },
    { title: "Sustainability", description: "100% electric fleet", icon: "♻️" },
    { title: "Innovation", description: "WhatsApp-first service", icon: "🚀" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-r from-primary to-accent text-white py-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ backgroundPosition: "200% 0" }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 15, ease: "linear" }}
          style={{ backgroundImage: 'url("/repeating-geometric-pattern.png")' }}
        />
        <motion.div className="max-w-6xl mx-auto relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About Washrz
          </motion.h1>
          <motion.p
            className="text-xl text-slate-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Revolutionizing laundry and dry cleaning through innovation, sustainability, and exceptional service.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              Washrz is on a mission to permanently change the way people approach cleaning and maintenance of their
              apparel and accessories.
            </p>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              We're the first WhatsApp-only service providing dry clean services directly within the WhatsApp. We
              believe that an additional laundry app is unnecessary on your smartphone.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We collect, clean, and deliver your things to your doorstep. When and where you need us, we will be there.
            </p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl overflow-hidden shadow-2xl h-96"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Image src="/images/artboard.png" alt="Our Mission" className="w-full h-full object-cover" width={600} height={400} loading="lazy"/>
          </motion.div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-50">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-center text-slate-900 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-xl bg-white shadow-lg border-2 border-transparent hover:border-emerald-500 transition-colors"
                variants={itemVariants}
                whileHover={{ translateY: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ delay: index * 0.1, duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-cyan-50">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl overflow-hidden shadow-2xl h-96 order-2 md:order-1"
            whileHover={{ scale: 1.02 }}
          >
           <Image src="/images/img1.jpg" alt="Sustainability" className="w-full h-full object-cover" width={600} height={400} loading="lazy"/>
          </motion.div>
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">We Protect Our Environment</h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              Social and environmental sustainability is at the heart of what we do. We're building one of the largest
              fleets of electric delivery vehicles.
            </p>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              We are committed to reducing water, electricity consumption, and the amount of packaging we use. Together,
              we can make a difference.
            </p>
            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-emerald-100 p-6 rounded-lg flex-1">
                <div className="text-3xl font-bold text-emerald-600">100%</div>
                <p className="text-slate-600 text-sm">Electric Fleet</p>
              </div>
              <div className="bg-cyan-100 p-6 rounded-lg flex-1">
                <div className="text-3xl font-bold text-cyan-600">-50%</div>
                <p className="text-slate-600 text-sm">Water Usage</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
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
            Our Team
          </motion.h2>
          <motion.p
            className="text-center text-lg text-slate-600 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            A dedicated team of professionals committed to delivering excellence in every pickup and delivery.
          </motion.p>
          <Image
            src="/images/team.webp"
            alt="Our Team"
            width={1200}
            height={800}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>
      </section>

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
            Experience the Washrz Difference
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
