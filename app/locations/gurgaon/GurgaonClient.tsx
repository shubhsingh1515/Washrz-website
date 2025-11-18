"use client"

import { LocationHero } from "@/components/location-hero"
import { LocationServices } from "@/components/location-services"
import { LocationTestimonials } from "@/components/location-testimonials"
import { CtaSection } from "@/components/cta-section"

export default function GurgaonPage() {
  return (
    <div className="space-y-0">
      <LocationHero
        location="Gurgaon"
        subtitle="Professional Dry Cleaning Services in Gurgaon"
        highlights={["24-Hour Express Service", "Premium Shoe Spa", "Corporate Packages"]}
      />
      <LocationServices location="Gurgaon" />
      <LocationTestimonials location="Gurgaon" />
      <CtaSection />
    </div>
  )
}
