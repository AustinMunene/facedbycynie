import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-8 space-y-8"
    >
      <div>
        <h2 className="text-3xl font-light mb-6">Get in Touch</h2>
        <p className="text-gray-600 leading-relaxed">
          Have questions about my services? Want to book an appointment? I'd
          love to hear from you😃 Reach out through any of these channels:
        </p>
      </div>

      <div className="grid gap-6">
        <div className="flex items-center p-4 bg-purple-50 rounded-xl transition-colors hover:bg-purple-100">
          <MapPin className="w-6 h-6 text-purple-600 mr-4" />
          <div>
            <h3 className="font-medium text-gray-900">Location</h3>
            <p className="text-gray-600">Nairobi, Kenya</p>
          </div>
        </div>

        <a
          href="tel:0740377992"
          className="flex items-center p-4 bg-purple-50 rounded-xl transition-colors hover:bg-purple-100"
        >
          <Phone className="w-6 h-6 text-purple-600 mr-4" />
          <div>
            <h3 className="font-medium text-gray-900">Phone</h3>
            <p className="text-purple-600">0740377992</p>
          </div>
        </a>

        <a
          href="mailto:cynthiachiuri@gmail.com"
          className="flex items-center p-4 bg-purple-50 rounded-xl transition-colors hover:bg-purple-100"
        >
          <Mail className="w-6 h-6 text-purple-600 mr-4" />
          <div>
            <h3 className="font-medium text-gray-900">Email</h3>
            <p className="text-purple-600">cynthiachiuri@gmail.com</p>
          </div>
        </a>
      </div>

      <div className="pt-6 border-t">
        <h3 className="font-medium mb-4">Follow Me</h3>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/faced.by_cyniee_makeup?igsh=a2UxdW00ZXU0bngy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-purple-600"
          >
            <Instagram size={24} className="mr-2" />
            <span></span>
          </a>

          <a
            href="https://www.tiktok.com/@faced.bycyniee?_t=8sI7zwEL6HO&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-lg text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 mr-2"
              fill="currentColor"
            >
              <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
            </svg>{' '}
            <span></span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
