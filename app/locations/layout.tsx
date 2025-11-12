import type { ReactNode } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function LocationLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      {children}
      <Footer />
    </main>
  )
}
