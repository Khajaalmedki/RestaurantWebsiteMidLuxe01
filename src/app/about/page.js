import About from "@/components/about/About"
import { RESTAURANT_INFO } from "@/data/config"

/* ---------- JSON-LD Schemas ---------- */

// AboutPage schema
const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `${RESTAURANT_INFO.name} – About Us`,
  url: "https://your-restaurant.vercel.app/about",
  description: `${RESTAURANT_INFO.name} brings traditional Arabian mandi to Hyderabad with slow-cooked meats, fragrant rice, and warm hospitality.`,
  about: {
    "@type": "Restaurant",
    name: RESTAURANT_INFO.name,
    servesCuisine: "Arabian",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressCountry: "IN"
    }
  }
}

// Restaurant entity (light version)
const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: RESTAURANT_INFO.name,
  url: "https://your-restaurant.vercel.app",
  servesCuisine: "Arabian"
}

export const metadata = {
  title: `${RESTAURANT_INFO.name} | About & Our Story`,
  description: `${RESTAURANT_INFO.name} brings traditional Arabian mandi to Hyderabad with slow-cooked meats, fragrant rice, and a focus on authentic flavors and hospitality.`,
  keywords: [
    "about restaurant",
    "Arabian mandi story",
    "chef philosophy",
    "authentic Arabian cuisine Hyderabad"
  ],
  openGraph: {
    title: `${RESTAURANT_INFO.name} | About & Our Story`,
    description: `${RESTAURANT_INFO.name} brings traditional Arabian mandi to Hyderabad with slow-cooked meats and authentic flavors.`,
    url: "https://your-restaurant.vercel.app/about",
    images: [
      {
        url: "/images/about-hero.jpg",
        width: 1200,
        height: 630,
        alt: "About Authentic Arabian Mandi"
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
  return (
    <>
      {/* Restaurant entity */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />

      {/* About page schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />

      <About />
    </>
  )
}
