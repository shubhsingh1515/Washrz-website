import { Metadata } from "next";
import DelhiClient from "./DelhiClient";

export const metadata: Metadata = {
  title: "Dry Cleaning in Delhi | Washrz",
  description:
    "24-hour dry cleaning, laundry and shoe spa services across Delhi. Free home pickup and delivery with eco-friendly solvents.",
  keywords:
    "dry cleaning Delhi, laundry Delhi, shoe spa Delhi, Washrz Delhi, 24 hour dry cleaning",
  openGraph: {
    title: "Dry Cleaning in Delhi | Washrz",
    description:
      "Premium 24-hour dry cleaning, laundry and shoe spa across Delhi. Free pickup & delivery.",
    url: "https://washrz.com/locations/delhi",
    type: "website",
  },
};

export default function DelhiPage() {
  return <DelhiClient />;
}
