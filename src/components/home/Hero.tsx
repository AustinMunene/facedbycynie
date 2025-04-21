import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParallaxImage } from '../ui/ParallaxImage';

export function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/public/Images/purple1.jpg"
          alt="Elegant makeup look"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl md:text-7xl font-light mb-6 text-white leading-none">
            Makeup
            <br />
            <span className="font-normal">Artist</span>
          </h1>
          <p className="text-lg mb-8 text-neutral-200 max-w-xl">
            Unleash your ultimate glow with Faced By Cyniee. Specializing in
            flawless makeup artistry and stunning lash enhancements, Cyniee is
            your go-to for transforming everyday beauty into extraordinary
            confidence. Every appointment is more than just makeup; it's a
            celebration of YOU. Book with Faced By Cynie today and let your
            beauty shine brighter than ever! 💄💖
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              to="/book"
              className="group inline-flex items-center px-8 py-4 bg-white text-neutral-900 text-lg hover:bg-neutral-100 transition-colors"
            >
              Book Now
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 border border-white text-white text-lg hover:bg-white hover:text-neutral-900 transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}