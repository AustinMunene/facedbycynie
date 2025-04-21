import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Instagram,
  TicketCheckIcon,
  TicketMinusIcon,
  Music2,
} from 'lucide-react';
import { services } from '../data/services';

export function BookingPage() {
  return (
    <div className="pt-20">
      {/* Header Section (Same Styling as Services Page) */}
      <div className="bg-purple-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book an Appointment
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Ready to transform your look? Book your appointment through my
            preferred channels.
          </p>
        </div>
      </div>

      {/* Contact Us Section with Background Image */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/purple1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvcHVycGxlMS5qcGciLCJpYXQiOjE3Mzc0Nzc3MjcsImV4cCI6MjIxMDUxNzcyN30.n_rKBkMGSFcoDm7uuY3o6bkmJdfYKTuOJwv5HgVs1NU&t=2025-01-21T16%3A42%3A07.166Z"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Contact Us Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-lg"
              >
                <h2 className="text-2xl font-semibold mb-6 text-white">
                  Contact Us
                </h2>
                <div className="space-y-4">
                  <a
                    href="tel:0740377992"
                    className="flex items-center text-lg text-white hover:text-neutral-200"
                  >
                    <Phone className="mr-2" size={20} />
                    0740377992
                  </a>
                  <a
                    href="https://www.instagram.com/faced.by_cyniee_makeup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-lg text-white hover:text-neutral-200"
                  >
                    <Instagram className="mr-2" size={20} />
                    faced.by_cyniee_makeup
                  </a>
                  <a
                    href="https://www.tiktok.com/@faced.bycyniee?_t=8sI7zwEL6HO&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-lg text-white hover:text-neutral-200"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 mr-2"
                      fill="white"
                    >
                      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
                    </svg>{' '}
                    <span>faced.bycyniee</span>
                  </a>
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src="https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/Logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvTG9nby5wbmciLCJpYXQiOjE3Mzc0NzQ4MTIsImV4cCI6MjA1MjgzNDgxMn0.gHYMvligOWTnfJFDjr0Vnb8FPHh4uOc-o_OJdgtrcXY&t=2025-01-21T15%3A53%3A32.318Z"
                  alt="Makeup session"
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Services Section (No Background Image) */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <h2 className="text-3xl font-light text-gray-900">
              Available Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-purple-600 font-semibold">
                    {service.price}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
