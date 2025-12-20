"use client"

import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"
import Button from "@/components/common/Button"
import MenuNavigation from "./MenuNavigation"
import MenuCategory from "./MenuCategory"
import { MENU_CATEGORIES, MENU_ITEMS } from "@/data/menuData"

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id)

  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/lamb-mandi.png')" }}
        >
          <div className="absolute inset-0 gradient-overlay" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-sm font-accent tracking-widest text-accent-gold uppercase mb-4 inline-block animate-fade-in">
            Culinary Excellence
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-text-light mb-6 animate-slide-in">
            Our Menu
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in">
            A journey through authentic Arabian flavors
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FiChevronDown className="text-accent-gold" size={32} />
        </div>
      </section>

      {/* Sticky Navigation */}
      <MenuNavigation
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Menu Categories */}
      <div className="container-custom py-8">
        {MENU_CATEGORIES.map((category) => (
          <MenuCategory
            key={category.id}
            category={category}
            dishes={MENU_ITEMS[category.id] || []}
          />
        ))}

        {/* CTA */}
        <div className="text-center py-16 mt-12 border-t border-glass-white">
          <h3 className="text-3xl font-heading text-text-light mb-4">
            Ready to Experience Authentic Arabian Cuisine?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Reserve your table now and embark on a culinary journey to the Arabian Peninsula.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button text="Reserve Table" variant="primary" size="lg" to="/bookings" />
            <Button
              text="Download Menu"
              variant="secondary"
              size="lg"
              onClick={() => alert("Menu PDF coming soon")}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
