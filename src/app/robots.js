export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://your-restaurant.vercel.app/sitemap.xml",
  }
}
