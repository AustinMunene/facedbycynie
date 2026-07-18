import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SafeImage } from '../ui/SafeImage';

const features = ['Makeup', 'Lashes', 'Brows', 'Classes'];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-blush-50">
      {/* Full-bleed background portrait */}
      <div className="absolute inset-0">
        <SafeImage
          src="https://images.pexels.com/photos/2535913/pexels-photo-2535913.jpeg"
          alt="Elegant makeup look"
          className="w-full h-full object-cover object-[center_25%]"
        />
        {/* Soft warm scrim — gentle on a light flat-lay image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
        {/* Bottom fade — melts the hero seamlessly into the white section below */}
        <div className="absolute inset-x-0 bottom-0 h-40 lg:h-56 bg-gradient-to-b from-transparent to-[#fbf6f0]" />
      </div>

      {/* Glass card */}
      <div className="relative z-10 w-full container mx-auto px-5 lg:px-8 pt-28 pb-32 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="hce-glass max-w-md p-8 lg:p-11"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="hce-eyebrow mb-5"
          >
            Professional Makeup Artist
          </motion.p>

          <h1 className="font-serif text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[0.98] tracking-[-0.01em] text-warmgray-900 mb-6">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="block"
            >
              Timeless beauty,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="block italic text-blush-600"
            >
              flawless finish
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-[13px] leading-[1.8] text-warmgray-700 mb-8 max-w-sm"
          >
            Specializing in flawless makeup artistry and stunning lash
            enhancements, transforming everyday beauty into extraordinary
            confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link to="/book" className="btn-pill group">
              Book Now
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="group-hover:translate-x-1 transition-transform duration-280"
              />
            </Link>
            <Link to="/portfolio" className="btn-pill-outline">
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Feature bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <div className="container mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-center lg:justify-start gap-6 lg:gap-10 pb-6 pt-4 flex-wrap">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blush-500" />
                <span className="text-[10px] lg:text-[11px] font-sans tracking-[0.16em] uppercase text-warmgray-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
