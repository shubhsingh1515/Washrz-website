import { Metadata } from "next";
import GurgaonClient from "./GurgaonClient";

export const metadata: Metadata = {
  title: "Dry Cleaning in Gurgaon | Washrz",
  description:
    "Premium 24-hour dry cleaning & laundry service in Gurgaon. Free pickup across DLF Phase 1–5, MG Road, Golf Course Road & Cyber City.",
  keywords:
    "dry cleaning Gurgaon, laundry Gurgaon, shoe spa Gurgaon, 24 hour laundry Gurgaon",
  openGraph: {
    title: "Dry Cleaning in Gurgaon | Washrz",
    description:
      "Eco-friendly dry cleaning, laundry and shoe spa in Gurgaon with fast 24-hour delivery.",
    url: "https://washrz.com/locations/gurgaon",
    type: "website",
  },
};

export default function GurgaonPage() {
  return <GurgaonClient />;
}
