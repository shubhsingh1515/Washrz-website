"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { ServicesSection } from "@/components/services-section"
import { WhyUsSection } from "@/components/why-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LocationsOverview } from "@/components/locations-overview"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePageClient() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorks />
      <ServicesSection />
      <LocationsOverview />
      <WhyUsSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  )
}
