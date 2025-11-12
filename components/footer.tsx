"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const footerLinks = [
  {
    title: "Our Services",
    links: [
      { name: "Dry Cleaning", href: "#" },
      { name: "Shoe Spa", href: "#" },
      { name: "Laundry", href: "#" },
      { name: "Handbag Cleaning", href: "#" },
      { name: "Sofa Cleaning", href: "#" },
    ],
  },
  {
    title: "Areas We Serve",
    links: [
      { name: "Dry Cleaning in Delhi", href: "/locations/delhi" },
      { name: "Dry Cleaning in Gurgaon", href: "/locations/gurgaon" },
      { name: "Dry Cleaning in Noida", href: "/locations/noida" },
      { name: "Dry Cleaning in Ghaziabad", href: "/locations/ghaziabad" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Blog", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
]

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-foreground to-foreground/95 text-background py-8 md:py-10 relative overflow-hidden"
    >
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* About */}
          <motion.div variants={itemVariants}>
            <motion.h3 className="text-base font-bold mb-4 text-white">Washrz</motion.h3>
            <p className="text-xs opacity-70 mb-6">India's only 24-hour dry cleaning and shoe spa service.</p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-xs opacity-70 hover:opacity-100 transition-opacity"
              >
                Instagram
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-xs opacity-70 hover:opacity-100 transition-opacity"
              >
                Facebook
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-xs opacity-70 hover:opacity-100 transition-opacity"
              >
                Twitter
              </motion.a>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerLinks.map((section, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h3 className="text-sm font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <motion.li key={linkIdx} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href={link.href} className="text-xs opacity-70 hover:opacity-100 transition-opacity">
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="border-t border-background/30 pt-6">
          <p className="text-xs opacity-60 text-center">Copyright © GYLD Solutions Pvt. Ltd. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
