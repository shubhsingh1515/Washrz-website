"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const locations = [
    { name: "Delhi", href: "/locations/delhi" },
    { name: "Gurgaon", href: "/locations/gurgaon" },
    { name: "Noida", href: "/locations/noida" },
    { name: "Ghaziabad", href: "/locations/ghaziabad" },
  ];

  return (
    <>
      {/* ⭐ NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* LEFT - Logo */}
            <div className="flex items-center gap-20">
              <Link
                href="/"
                className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                <Image src="/washrz.png" alt="Washerz" width={40} height={40} />
                Washrz
              </Link>

              {/* DESKTOP MENU */}
              
            </div>
            <div className="hidden md:flex items-center gap-6">
                <a href="/how-it-works" className="text-foreground/70 hover:text-primary">How it Works</a>
                <a href="/prices-services" className="text-foreground/70 hover:text-primary">Services</a>

                {/* Desktop dropdown */}
                <div className="relative group">
                  <button className="flex items-center gap-1 text-foreground/70 hover:text-primary">
                    Locations <ChevronDown size={14} />
                  </button>
                  <div className="absolute left-0 top-full mt-2 bg-card border rounded-lg shadow-lg invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all">
                    {locations.map((loc) => (
                      <Link
                        key={loc.href}
                        href={loc.href}
                        className="block px-4 py-2 text-foreground hover:bg-primary/10 hover:text-primary"
                      >
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <a href="/about-us" className="text-foreground/70 hover:text-primary">About Us</a>
                <a href="/blogs" className="text-foreground/70 hover:text-primary">Blogs</a>
              </div>

            {/* RIGHT - Buttons */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://api.whatsapp.com/send/?phone=919717953316&text=Hi&type=phone_number"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block bg-gradient-to-r from-primary to-accent text-white text-xs px-4 py-2 rounded-full"
              >
                Book on WhatsApp
              </motion.a>
              <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden p-2 rounded-md border border-border"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ⭐ RIGHT SIDEBAR MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* SLIDING SIDEBAR */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35 }}
              className="fixed top-0 right-0 h-full w-60 bg-background border-l border-border z-50 shadow-xl p-6 flex flex-col"
            >
              {/* Close button */}
              <div className="flex justify-end mb-6">
                <button onClick={() => setMenuOpen(false)}>
                  <X size={26} className="text-foreground/80" />
                </button>
              </div>

              {/* Menu items */}
              <div className="flex flex-col gap-4 text-lg">
                <Link href="/how-it-works" onClick={() => setMenuOpen(false)}>
                  How it Works
                </Link>
                <Link href="/prices-services" onClick={() => setMenuOpen(false)}>
                  Services
                </Link>

                {/* MOBILE LOCATIONS DROPDOWN */}
                <div>
                  <button
                    onClick={() => setLocationsOpen(!locationsOpen)}
                    className="flex items-center justify-between w-full"
                  >
                    Locations
                    <ChevronDown
                      size={16}
                      className={`transform transition ${locationsOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {locationsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="ml-3 mt-2 flex flex-col gap-2"
                      >
                        {locations.map((loc) => (
                          <Link
                            key={loc.href}
                            href={loc.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-foreground/70"
                          >
                            {loc.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/about-us" onClick={() => setMenuOpen(false)}>
                  About Us
                </Link>

                <Link href="/blogs" onClick={() => setMenuOpen(false)}>
                  Blogs
                </Link>

                {/* WhatsApp Button */}
                <a
                  href="https://api.whatsapp.com/send/?phone=919717953316&text=Hi&type=phone_number"
                  className="mt-6 bg-gradient-to-r from-primary to-accent text-white px-4 py-3 rounded-full text-center"
                >
                  Book on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
