import Contact from "@/components/contact/Contact"
import { RESTAURANT_INFO } from "@/data/config"

/* ---------- JSON-LD Schemas ---------- */

// LocalBusiness / Restaurant schema
const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: RESTAURANT_INFO.name,
  url: "https://your-restaurant.vercel.app",
  telephone: RESTAURANT_INFO.phone,
  servesCuisine: "Arabian",
  address: {
    "@type": "PostalAddress",
    streetAddress: RESTAURANT_INFO.address,
    addressLocality: "Hyderabad",
    addressRegion: "TG",
    addressCountry: "IN"
  }
}

// ContactPage schema
const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `${RESTAURANT_INFO.name} Contact`,
  url: "https://your-restaurant.vercel.app/contact",
  description: `Contact ${RESTAURANT_INFO.name} in Hyderabad for reservations, catering, and support.`,
  about: {
    "@type": "Restaurant",
    name: RESTAURANT_INFO.name
  }
}

export const metadata = {
  title: `${RESTAURANT_INFO.name} | Contact & Reservations`,
  description: `Contact ${RESTAURANT_INFO.name} in Hyderabad for table reservations, private events, catering, and customer support. View our location and phone number.`,
  keywords: [
    "contact restaurant",
    "table booking",
    "reservations",
    "Arabian mandi Hyderabad",
    "restaurant phone number"
  ],
  openGraph: {
    title: `${RESTAURANT_INFO.name} | Contact & Reservations`,
    description: `Contact ${RESTAURANT_INFO.name} in Hyderabad for reservations, catering, and support.`,
    url: "https://your-restaurant.vercel.app/contact",
    images: [
      {
        url: "/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Authentic Arabian Mandi"
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

      {/* Contact page schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />

      <Contact />
    </>
  )
}
