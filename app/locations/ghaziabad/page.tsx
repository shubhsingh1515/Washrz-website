import { Metadata } from "next";
import GhaziabadClient from "./GhaziabadClient";

export const metadata: Metadata = {
  title: "Dry Cleaning in Ghaziabad | Washrz",
  description:
    "24-hour premium dry cleaning, laundry and shoe spa services in Ghaziabad. Free pickup & delivery in Indirapuram, Vaishali, Kaushambi & more.",
  keywords:
    "dry cleaning Ghaziabad, laundry Ghaziabad, shoe spa Ghaziabad, 24 hour laundry Ghaziabad",
  openGraph: {
    title: "Dry Cleaning in Ghaziabad | Washrz",
    description:
      "Fast, eco-friendly dry cleaning and laundry in Ghaziabad with 24-hour delivery.",
    url: "https://washrz.com/locations/ghaziabad",
    type: "website",
  },
};

export default function GhaziabadPage() {
  return <GhaziabadClient />;
}
