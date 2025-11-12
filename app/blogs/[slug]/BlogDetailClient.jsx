"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function BlogDetailClient({ blog }) {
  if (!blog) return null // ✅ safety check

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-card to-background py-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.img
          src={blog.image}
          alt={blog.title}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="rounded-3xl shadow-xl w-full h-[28rem] object-cover mb-10"
        />

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fade}
          className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
        >
          {blog.title}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fade}
          className="text-center text-foreground/60 mb-10"
        >
          <span className="text-sm bg-primary/10 px-3 py-1 rounded-full text-primary font-medium">
            {blog.date}
          </span>
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fade}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none text-foreground/80 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <div className="mt-12 text-center">
          <Link
            href="/blogs"
            className="text-primary font-medium hover:underline transition-colors"
          >
            ← Back to All Blogs
          </Link>
        </div>
      </div>
    </section>
  )
}
