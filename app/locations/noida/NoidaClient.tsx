"use client"

import { LocationHero } from "@/components/location-hero"
import { LocationServices } from "@/components/location-services"
import { LocationTestimonials } from "@/components/location-testimonials"
import { CtaSection } from "@/components/cta-section"

export default function NoidaPage() {
  return (
    <div className="space-y-0">
      <LocationHero
        location="Noida"
        subtitle="Expert Dry Cleaning & Laundry Services in Noida"
        highlights={["Same-Day Service Available", "Stain Removal Specialists", "Bulk Discounts"]}
      />
      <LocationServices location="Noida" />
      <LocationTestimonials location="Noida" />
      <CtaSection />
    </div>
  )
}
