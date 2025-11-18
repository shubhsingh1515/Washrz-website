import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import FloatingWhatsApp from "@/components/floatWhatsapp"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Washrz",
    template: "%s | Washrz",
  },
  description:
    "24-hour dry cleaning and shoe spa service across Delhi NCR.",
  openGraph: {
    type: "website",
    siteName: "Washrz",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navigation />
        <FloatingWhatsApp />
        {children}
        <Footer />
        </body>
        
    </html>
  )
}
