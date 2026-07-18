import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <p className="text-[10px] font-sans font-normal tracking-[0.22em] uppercase text-blush-600 mb-3">
        Contact
      </p>
      <h2 className="text-[clamp(1.4rem,2.4vw,1.9rem)] leading-[1.1] mb-5">
        Get in Touch
      </h2>
      <p className="text-warmgray-500 text-[13px] leading-[1.8] mb-8 max-w-md">
        Have questions about my services? Want to book an appointment?
        I would love to hear from you.
      </p>

      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-3 p-4 rounded-xl bg-cream-50 border border-warmgray-200/50">
          <MapPin className="w-4 h-4 text-blush-500 flex-shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-[11px] font-sans font-normal tracking-[0.06em] text-warmgray-900">
              Location
            </p>
            <p className="text-[12px] text-warmgray-500">Nairobi, Kenya</p>
          </div>
        </div>

        <a
          href="tel:0740377992"
          className="flex items-center gap-3 p-4 rounded-xl bg-cream-50 border border-warmgray-200/50 transition-colors duration-280 hover:border-blush-300"
        >
          <Phone className="w-4 h-4 text-blush-500 flex-shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-[11px] font-sans font-normal tracking-[0.06em] text-warmgray-900">
              Phone
            </p>
            <p className="text-[12px] text-blush-600">0740377992</p>
          </div>
        </a>

        <a
          href="mailto:cynthiachiuri@gmail.com"
          className="flex items-center gap-3 p-4 rounded-xl bg-cream-50 border border-warmgray-200/50 transition-colors duration-280 hover:border-blush-300"
        >
          <Mail className="w-4 h-4 text-blush-500 flex-shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-[11px] font-sans font-normal tracking-[0.06em] text-warmgray-900">
              Email
            </p>
            <p className="text-[12px] text-blush-600">cynthiachiuri@gmail.com</p>
          </div>
        </a>
      </div>

      <div className="pt-6 border-t border-warmgray-200/60">
        <p className="text-[10px] font-sans font-normal tracking-[0.22em] uppercase text-warmgray-400 mb-3">
          Follow
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/faced.by_cyniee_makeup?igsh=a2UxdW00ZXU0bngy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warmgray-400 hover:text-blush-600 transition-colors duration-280"
          >
            <Instagram size={16} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.tiktok.com/@faced.bycyniee?_t=8sI7zwEL6HO&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warmgray-400 hover:text-blush-600 transition-colors duration-280"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="currentColor"
            >
              <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
