"use client"

import StorySection from "./StorySection"
import ValuesGrid from "./ValuesGrid"
import TeamGrid from "./TeamGrid"

export default function About() {
  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/kunafa.png')" }}
        >
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 container-custom text-center">
          <span className="text-accent-gold font-accent text-sm tracking-widest uppercase mb-4 inline-block animate-fade-in">
            About Us
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-text-light mb-6 animate-slide-in">
            Our Story
          </h1>

          <p
            className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Discover the passion, heritage, and craft behind our authentic Arabian
            mandi house in Hyderabad.
          </p>
        </div>
      </section>

      <StorySection />
      <ValuesGrid />
      <TeamGrid />
    </div>
  )
}
