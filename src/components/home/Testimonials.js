"use client"

import React, { useState, useEffect } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import SectionHeading from "../common/SectionHeading"
import TestimonialCard from "./TestimonialCard"
import useIntersectionObserver from "@/hooks/useIntersectionObserver"
import { TESTIMONIALS } from "@/data/testimonials"

const getTestimonialsPerPage = (width) => {
  if (width >= 1024) return 3
  if (width >= 768) return 2
  return 1
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(1)

  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 })

  /* ---------- Handle viewport safely ---------- */
  useEffect(() => {
    const updatePerPage = () => {
      setTestimonialsPerPage(getTestimonialsPerPage(window.innerWidth))
    }

    updatePerPage() // initial run
    window.addEventListener("resize", updatePerPage)

    return () => window.removeEventListener("resize", updatePerPage)
  }, [])

  const maxIndex = Math.max(0, TESTIMONIALS.length - testimonialsPerPage)

  /* ---------- Auto play ---------- */
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const visibleTestimonials = TESTIMONIALS.slice(
    currentIndex,
    currentIndex + testimonialsPerPage
  )

  return (
    <section className="section-padding bg-dark-900" ref={ref}>
      <div className="container-custom">
        <SectionHeading subtitle="Testimonials" title="Guest Experiences" />

        <div className="relative">
          {/* Testimonials Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
              hasIntersected
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation */}
          {TESTIMONIALS.length > testimonialsPerPage && (
            <div className="flex justify-center items-center space-x-4 mt-12">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full glass-blur flex items-center justify-center hover:bg-accent-gold hover:text-primary-dark transition-all duration-300"
                aria-label="Previous testimonials"
              >
                <FiChevronLeft size={24} />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrentIndex(index)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? "bg-accent-gold w-8"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to testimonial set ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full glass-blur flex items-center justify-center hover:bg-accent-gold hover:text-primary-dark transition-all duration-300"
                aria-label="Next testimonials"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
