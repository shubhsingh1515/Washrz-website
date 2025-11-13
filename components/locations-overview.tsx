"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const locations = [
  {
    name: "Delhi",
    description: "Premium service across all Delhi zones",
    highlights: ["24-Hour Service", "Free Pickup & Delivery", "1000+ Happy Customers"],
    color: "from-primary to-accent",
    image: "delhi",
  },
  {
    name: "Gurgaon",
    description: "Professional cleaning for corporate professionals",
    highlights: ["Express Service", "Premium Shoe Spa", "Corporate Packages"],
    color: "from-accent to-primary",
    image: "gurgaon",
  },
  {
    name: "Noida",
    description: "Expert laundry & specialty cleaning",
    highlights: ["Same-Day Available", "Stain Specialists", "Bulk Discounts"],
    color: "from-secondary to-accent",
    image: "noida",
  },
  {
    name: "Ghaziabad",
    description: "Affordable quality dry cleaning",
    highlights: ["Budget Friendly", "Student Discounts", "Quick Service"],
    color: "from-primary to-secondary",
    image: "ghaziabad",
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export function LocationsOverview() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-card/30 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs text-accent font-semibold">SERVING DELHI NCR</span>
          <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">Excellence Across All Cities</h2>
          <p className="text-sm text-foreground/70 max-w-2xl mx-auto">
            Same premium service, personalized for each location. From Delhi to Ghaziabad, we're your trusted cleaning
            partner.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {locations.map((location, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-all"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${location.color} transition-opacity duration-500`}
              />

              <div className="relative p-8 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{location.name}</h3>
                    <p className="text-sm text-foreground/70">{location.description}</p>
                  </div>
                  {/* <motion.div
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${location.color} flex items-center justify-center text-foreground-foreground opacity-80`}
                  >
                    <ArrowRight size={20} />
                  </motion.div> */}
                </div>

                <div className="flex-1 mb-6">
                  <div className="space-y-3">
                    {location.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${location.color}`} />
                        <span className="text-sm text-foreground/80">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/locations/${location.name.toLowerCase()}`}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent  text-sm font-medium text-background hover:shadow-lg transition-all w-fit`}
                >
                  Explore {location.name}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
