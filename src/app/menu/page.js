import Menu from "@/components/menu/Menu"
import { RESTAURANT_INFO } from "@/data/config"

export const metadata = {
  title: `${RESTAURANT_INFO.name} | Menu & Prices`,
  description:
    "Browse our full Arabian mandi menu with lamb, chicken, rice platters, grills, starters, desserts, and beverages in Hyderabad.",
  keywords: [
    "mandi menu",
    "Arabian menu",
    "lamb mandi price",
    "chicken mandi",
    "Hyderabad restaurant menu"
  ],
  openGraph: {
    title: `${RESTAURANT_INFO.name} | Menu & Prices`,
    description:
      "Browse our full Arabian mandi menu with lamb, chicken, rice platters, grills, starters, desserts, and beverages in Hyderabad.",
    url: "https://your-restaurant.vercel.app/menu",
    siteName: RESTAURANT_INFO.name,
    images: [
      {
        url: "/images/lamb-mandi.png",
        width: 1200,
        height: 630,
        alt: "Arabian Lamb Mandi"
      }
    ],
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <Menu />
}
