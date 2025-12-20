"use client"

import ContactForm from "./ContactForm"
import MapEmbed from "./MapEmbed"
import ContactInfoCards from "./ContactInfoCards"

export default function Contact() {
  return (
    <div className="min-h-screen bg-primary-dark pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-accent-gold font-accent text-sm tracking-widest uppercase mb-4 inline-block">
            Get In Touch
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-light">
            Contact Us
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out for reservations, group bookings,
            catering inquiries, or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <ContactForm />
          <ContactInfoCards />
        </div>

        <MapEmbed height="500px" />
      </div>
    </div>
  )
}
