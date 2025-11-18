"use client"
import { LocationHero } from "@/components/location-hero"
import { LocationServices } from "@/components/location-services"
import { LocationTestimonials } from "@/components/location-testimonials"
import { CtaSection } from "@/components/cta-section"

export default function DelhiPage() {
  return (
    <div className="space-y-0">
      <LocationHero
        location="Delhi"
        subtitle="Premium Dry Cleaning & Shoe Spa across Delhi"
        highlights={["24-Hour Service", "Free Pickup & Delivery", "Eco-Friendly Solvents"]}
      />
      <LocationServices location="Delhi" />
      <LocationTestimonials location="Delhi" />
      <CtaSection />
    </div>
  )
}
