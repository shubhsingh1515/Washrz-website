"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { blogs } from "./data"

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function BlogListPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-card to-background py-20 overflow-hidden">
      {/* Floating ambient background */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl sm:text-6xl font-bold mb-16 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
        >
          The Washrz Blog
        </motion.h1>

        <motion.div variants={container} initial="hidden" animate="visible" className="grid md:grid-cols-2 gap-10">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="bg-white/90 dark:bg-card/80 border border-primary/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg transition-all group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-md">
                  {blog.date}
                </span>
              </div>
              <div className="p-6 flex flex-col justify-between h-52">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-foreground/70">{blog.excerpt}</p>
                </div>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="mt-4 inline-block bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
