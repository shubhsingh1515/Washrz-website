"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import Image from "next/image";

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
      { name: "About Us", href: "/about-us" },
      { name: "Blog", href: "/blogs" },
      { name: "FAQ", href: "#" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-foreground to-foreground/95 text-background py-8 md:py-10 relative overflow-hidden"
    >
      {/* Soft Glows */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants}>
           <Link
              href="/"
              className="flex items-center gap-2 mb-4 text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              <Image
                src="/washrz.png"
                alt="Washerz Logo"
                width={40}
                height={40}
              />
              Washrz
            </Link>

            <p className="text-sm opacity-70 mb-6 lg:pr-8">
              India&apos;s only 24-hour dry cleaning and shoe spa service.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-4">
              {/* Instagram */}
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 opacity-80 hover:opacity-100 transition"
              >
                <Instagram size={22} strokeWidth={1.8} />
              </motion.a>

              {/* Facebook */}
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 opacity-80 hover:opacity-100 transition"
              >
                <Facebook size={22} strokeWidth={1.8} />
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://api.whatsapp.com/send/?phone=919717953316&text=Hi&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 opacity-80 hover:opacity-100 transition"
              >
                <MessageCircle size={22} strokeWidth={1.8} />
              </motion.a>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerLinks.map((section, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h3 className="text-base font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <motion.li
                    key={linkIdx}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-background/30 pt-6"
        >
          <p className="text-sm opacity-60 text-center">
            Copyright © GYLD Solutions Pvt. Ltd. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
