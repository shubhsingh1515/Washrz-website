"use client"

import { motion } from "framer-motion"

interface LocationTestimonialsProps {
  location: string
}

const testimonialsByLocation = {
  Delhi: [
    { name: "Rajesh K.", text: "Best dry cleaning service in Delhi! My suits look brand new every time.", rating: 5 },
    { name: "Priya M.", text: "The shoe spa service is incredible. My sneakers look fresh out of the box!", rating: 5 },
    { name: "Amit S.", text: "Fast, reliable, and affordable. WhatsApp booking is super convenient.", rating: 5 },
  ],
  Gurgaon: [
    {
      name: "Vikram P.",
      text: "Perfect for busy professionals. They pick up from office and deliver next day.",
      rating: 5,
    },
    { name: "Neha T.", text: "Corporate bulk orders are handled so professionally. Highly recommended!", rating: 5 },
    { name: "Arjun L.", text: "Premium quality at affordable rates. Best service in Gurgaon!", rating: 5 },
  ],
  Noida: [
    { name: "Rahul D.", text: "Great prices and excellent quality. My family uses them regularly!", rating: 5 },
    {
      name: "Sneha G.",
      text: "Stain removal experts! Got coffee stains out of my favorite shirt perfectly.",
      rating: 5,
    },
    { name: "Karan N.", text: "Bulk discounts are amazing. Worth every penny!", rating: 5 },
  ],
  Ghaziabad: [
    { name: "Suresh M.", text: "Most affordable option without compromising on quality. Love it!", rating: 5 },
    { name: "Anjali R.", text: "As a student, the discounts help a lot. Great service overall!", rating: 5 },
    { name: "Rohit S.", text: "Quick service and they're always on time. Highly satisfied!", rating: 5 },
  ],
}

export function LocationTestimonials({ location }: LocationTestimonialsProps) {
  const testimonials =
    testimonialsByLocation[location as keyof typeof testimonialsByLocation] || testimonialsByLocation.Delhi

  return (
    <section className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">Loved in {location}</h2>
          <p className="text-sm text-foreground/70">Hear from our happy customers in {location}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-background border border-border rounded-2xl p-8 overflow-hidden relative"
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-lg"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
                <p className="text-sm text-foreground/80 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <p className="text-sm font-semibold text-foreground">— {testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
