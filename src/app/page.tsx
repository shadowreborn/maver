import type { Metadata } from "next";
import { HomePage } from "@/components/site/HomePage";

export const metadata: Metadata = {
  title: "Rapho Music Agency — Music Growth & Creative",
  description:
    "Rapho Music Agency helps artists grow, distribute and visually define their music through promotion, videos, branding and creative strategy.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rapho Music Agency — Music Growth & Creative",
    description:
      "Music growth, distribution, visuals, branding and artist development — built around your music.",
    type: "website",
    url: "/",
  },
};

export default function Page() {
  return <HomePage />;
}
