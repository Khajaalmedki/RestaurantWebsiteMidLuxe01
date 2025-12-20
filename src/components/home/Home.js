"use client"

import HeroSection from "./HeroSection"
import BestSellingDishes from "./BestSellingDishes"
import ChefStory from "./ChefStory"
import MenuPreview from "./MenuPreview"
import InstagramFeed from "./InstagramFeed"
import Testimonials from "./Testimonials"
import Awards from "./Awards"
import AddressContact from "./AddressContact"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BestSellingDishes />
      <ChefStory />
      <MenuPreview />
      <InstagramFeed />
      <Testimonials />
      <Awards />
      <AddressContact />
    </div>
  )
}
