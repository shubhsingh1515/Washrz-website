import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Washrz - 24 Hour Dry Cleaning & Shoe Spa | Delhi NCR",
  description:
    "India's only 24-hour dry cleaning and shoe spa service across Delhi, Gurgaon, Noida, Ghaziabad. Free pickup & delivery. Eco-friendly cleaning.",
  keywords: "dry cleaning, shoe spa, laundry, Delhi, Gurgaon, Noida, Ghaziabad, 24 hour service",
  openGraph: {
    title: "Washrz - 24 Hour Dry Cleaning & Shoe Spa",
    description: "Get your clothes cleaned in just 24 hours with eco-friendly solvents",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
