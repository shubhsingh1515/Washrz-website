"use client"

import { motion } from "framer-motion"

interface LocationServicesProps {
  location: string
}

const servicesByLocation = {
  Delhi: [
    { title: "Premium Dry Cleaning", desc: "For designer wear & formal attire", icon: "👔" },
    { title: "Shoe Spa Excellence", desc: "All sneaker types & leather", icon: "👟" },
    { title: "Wedding Wear", desc: "Sarees, lehengas, sherwanis", icon: "💎" },
    { title: "Corporate Packages", desc: "Bulk cleaning for offices", icon: "💼" },
    { title: "Sofa & Upholstery", desc: "Professional deep cleaning", icon: "🛋️" },
    { title: "Express Service", desc: "4-hour turnaround available", icon: "⚡" },
  ],
  Gurgaon: [
    { title: "Luxury Care", desc: "Designer & premium brands", icon: "👔" },
    { title: "Sneaker Restoration", desc: "Sports shoes & trainers", icon: "👟" },
    { title: "Corporate Solutions", desc: "Business attire cleaning", icon: "💼" },
    { title: "Leather Specialists", desc: "Jackets & bags", icon: "🧥" },
    { title: "Premium Packaging", desc: "White-glove delivery", icon: "🎁" },
    { title: "Subscription Plans", desc: "Monthly cleaning packages", icon: "📅" },
  ],
  Noida: [
    { title: "Daily Wear Cleaning", desc: "Casual & everyday clothes", icon: "👕" },
    { title: "Shoe Spa", desc: "Affordable sneaker care", icon: "👟" },
    { title: "Wash & Fold", desc: "Flat-rate laundry bags", icon: "🧺" },
    { title: "Stain Removal", desc: "Specialized stain experts", icon: "✨" },
    { title: "Bulk Services", desc: "Discounts on large orders", icon: "📦" },
    { title: "Quick Pickup", desc: "Same-day delivery option", icon: "⚡" },
  ],
  Ghaziabad: [
    { title: "Budget Friendly Cleaning", desc: "Affordable rates for all", icon: "💰" },
    { title: "Student Discounts", desc: "Special rates for students", icon: "🎓" },
    { title: "Family Packages", desc: "Bulk cleaning discounts", icon: "👨‍👩‍👧‍👦" },
    { title: "Quick Service", desc: "Fast turnaround times", icon: "⚡" },
    { title: "Home Service", desc: "Pickup & delivery included", icon: "🏠" },
    { title: "Quality Assured", desc: "100% satisfaction guarantee", icon: "✅" },
  ],
}

export function LocationServices({ location }: LocationServicesProps) {
  const services = servicesByLocation[location as keyof typeof servicesByLocation] || servicesByLocation.Delhi

  return (
    <section className="py-10 bg-gradient-to-br from-card/30 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Services in {location}</h2>
          <p className="text-sm text-foreground/70">Comprehensive cleaning solutions tailored for {location}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-background border border-border rounded-xl p-6 cursor-pointer overflow-hidden transition-all"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
              <div className="relative">
                <motion.div
                  className="text-4xl mb-4 group-hover:scale-125 transition-transform"
                  whileHover={{ rotate: 15 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-foreground/70 mb-4">{service.desc}</p>
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="h-0.5 bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
