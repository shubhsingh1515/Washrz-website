"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [locationsOpen, setLocationsOpen] = useState(false);

  const locations = [
    { name: "Delhi", href: "/locations/delhi" },
    { name: "Gurgaon", href: "/locations/gurgaon" },
    { name: "Noida", href: "/locations/noida" },
    { name: "Ghaziabad", href: "/locations/ghaziabad" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-20">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              <Image
                src="/washrz.png"
                alt="Washerz Logo"
                width={40}
                height={40}
              />
              Washrz
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="/how-it-works"
                className=" text-foreground/70 hover:text-primary transition-colors"
              >
                How it Works
              </a>
              <a
                href="/prices-services"
                className=" text-foreground/70 hover:text-primary transition-colors"
              >
                Services
              </a>
              <div className="relative group">
                <button className="flex items-center gap-1  text-foreground/70 hover:text-primary transition-colors group-hover:text-primary">
                  Locations{" "}
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform"
                  />
                </button>
                <div className="absolute left-0 top-full mt-2 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {locations.map((loc) => (
                    <Link
                      key={loc.href}
                      href={loc.href}
                      className="block px-4 py-2  text-foreground hover:bg-primary/10 hover:text-primary first:rounded-t-lg last:rounded-b-lg transition-colors"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
              <a
                href="/about-us"
                className=" text-foreground/70 hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="/blogs"
                className=" text-foreground/70 hover:text-primary transition-colors"
              >
                Blogs
              </a>
            </div>
          </div>
          <motion.a
            href="https://api.whatsapp.com/send/?phone=919717953316&text=Hi&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs px-4 py-2 rounded-full hover:opacity-90 transition-opacity font-medium"
          >
            Book on WhatsApp
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
