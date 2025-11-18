import { Metadata } from "next";
import NoidaClient from "./NoidaClient";

export const metadata: Metadata = {
  title: "Dry Cleaning in Noida | Washrz",
  description:
    "24-hour dry cleaning & laundry services in Noida. Free pickup & delivery across Noida.",
  keywords:
    "dry cleaning Noida, laundry Noida, shoe spa Noida, 24 hour laundry Noida",
  openGraph: {
    title: "Dry Cleaning in Noida | Washrz",
    description:
      "Premium dry cleaning and shoe spa services in Noida with 24-hour turnaround.",
    url: "https://washrz.com/locations/noida",
    type: "website",
  },
};

export default function NoidaPage() {
  return <NoidaClient />;
}
