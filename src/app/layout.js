import "./globals.css"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import Providers from "./providers"
import { RESTAURANT_INFO } from "@/data/config"

/**
 * Global metadata (applies to all pages unless overridden)
 */
export const metadata = {
  title: {
    default: `${RESTAURANT_INFO.name} | Authentic Arabian Mandi in Hyderabad`,
    template: `%s | ${RESTAURANT_INFO.name}`,
  },
  description:
    RESTAURANT_INFO.description ||
    "Experience authentic Arabian mandi in Hyderabad with slow-cooked meats, fragrant rice, and warm hospitality.",
  metadataBase: new URL("https://your-restaurant.vercel.app"),
  openGraph: {
    siteName: RESTAURANT_INFO.name,
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
}

/**
 * Root layout
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* Site wise JSON_LD} */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: RESTAURANT_INFO.name,
              url: "https://your-restaurant.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://your-restaurant.vercel.app/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
