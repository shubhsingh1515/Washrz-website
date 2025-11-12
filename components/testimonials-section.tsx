"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Kritikesh",
    text: "I was in a hurry and needed my clothes done quickly. In addition to picking up my order, they returned it the next day just as promised. Amazing service!",
    rating: 5,
  },
  {
    name: "Shruti",
    text: "Very professional team. There is no petrol smell in the clothes, which is a plus. The clothes are nicely packed and delivered on time.",
    rating: 5,
  },
  {
    name: "Srankhla",
    text: "A fantastic service! Great customer support from beginning to end. The team is really supportive and the quality is outstanding.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-card/50 relative overflow-hidden">
      <motion.div
        className="absolute top-10 right-1/4 text-6xl opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      >
        😊
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-1/3 text-6xl opacity-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      >
        👍
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-foreground mb-2">Loved by 7,000+ in Delhi NCR</h2>
          <p className="text-lg text-foreground/70">Hear from our happy customers</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="bg-background border border-border rounded-2xl p-8 cursor-pointer relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                whileHover={{ opacity: 0.1 }}
              />

              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-2xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
              <p className="text-base text-foreground/80 mb-6 leading-relaxed italic relative z-10">
                "{testimonial.text}"
              </p>
              <p className="text-base font-semibold text-foreground relative z-10">— {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
