import { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Us | Washrz",
  description:
    "Learn about Washrz — India's only 24-hour dry cleaning and shoe spa service. Our mission, values and eco-friendly process.",
  openGraph: {
    title: "About Washrz",
    description: "Know more about our 24-hour dry cleaning and shoe spa service.",
    url: "https://washrz.com/about-us",
  },
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
