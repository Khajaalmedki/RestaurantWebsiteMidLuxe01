// src/app/page.js
import Home from "@/components/home/Home"
import { RESTAURANT_INFO } from "@/data/config"

export const metadata = {
  title: `${RESTAURANT_INFO.name} | Authentic Arabian Mandi in Hyderabad`,
  description:
    RESTAURANT_INFO.description ||
    "Experience authentic Arabian mandi and luxury dining in Hyderabad with signature lamb, chicken, and biryani specialties.",
  keywords: [
    "Arabian mandi",
    "mandi restaurant Hyderabad",
    "lamb mandi",
    "family restaurant",
    "luxury dining",
    "Arabian cuisine"
  ],
  openGraph: {
    title: `${RESTAURANT_INFO.name} | Authentic Arabian Mandi in Hyderabad`,
    description:
      RESTAURANT_INFO.description ||
      "Experience authentic Arabian mandi and luxury dining in Hyderabad with signature lamb, chicken, and biryani specialties.",
    url: "https://your-restaurant.vercel.app/",
    siteName: RESTAURANT_INFO.name,
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: RESTAURANT_INFO.name
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <Home />
}
