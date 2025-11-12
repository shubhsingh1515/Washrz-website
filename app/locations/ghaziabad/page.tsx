"use client"

import { LocationHero } from "@/components/location-hero"
import { LocationServices } from "@/components/location-services"
import { LocationTestimonials } from "@/components/location-testimonials"
import { CtaSection } from "@/components/cta-section"

export default function GhaziabadPage() {
  return (
    <div className="space-y-0">
      <LocationHero
        location="Ghaziabad"
        subtitle="Quality Dry Cleaning in Ghaziabad"
        highlights={["Affordable Pricing", "Student Discounts", "Quick Turnaround"]}
      />
      <LocationServices location="Ghaziabad" />
      <LocationTestimonials location="Ghaziabad" />
      <CtaSection />
    </div>
  )
}
