// /app/blogs/[slug]/page.tsx
import { blogs } from "../data"
import { notFound } from "next/navigation"
import BlogDetailClient from "./BlogDetailClient"

interface Props {
  params: Promise<{ slug: string }> // 👈 params is now a Promise in Next.js 14+
}

export default async function BlogDetailPage({ params }: Props) {
  // ✅ Await params to unwrap the Promise
  const { slug } = await params

  const blog = blogs.find((b) => b.slug === slug)
  if (!blog) return notFound()

  return <BlogDetailClient blog={blog} />
}
