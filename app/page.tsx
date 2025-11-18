import { Metadata } from "next";
import HomeClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Washrz - 24 Hour Dry Cleaning & Shoe Spa | Delhi NCR",
  description:
    "India's only 24-hour dry cleaning and shoe spa service across Delhi, Gurgaon, Noida, Ghaziabad. Free pickup & delivery. Eco-friendly cleaning.",
  keywords:
    "dry cleaning, shoe spa, laundry, Delhi, Gurgaon, Noida, Ghaziabad, 24 hour service",
  openGraph: {
    title: "Washrz - 24 Hour Dry Cleaning & Shoe Spa",
    description:
      "Get your clothes cleaned in just 24 hours with eco-friendly solvents.",
    url: "https://washrz.com",
    type: "website",
    images: [
      {
        url: "/og/homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Washrz 24-hour dry cleaning",
      },
    ],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
