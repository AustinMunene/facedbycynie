import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SafeImage } from '../ui/SafeImage';

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <SafeImage
          src="https://i.imgur.com/cpkXDat.jpeg"
          alt="Elegant makeup look"
          className="w-full h-full object-cover scale-105 transition-transform duration-[20s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-lg font-script font-medium tracking-wide">
              Professional Makeup Artist
            </span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light mb-6 md:mb-8 text-white leading-[0.9] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block"
            >
              Makeup
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block font-normal bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
            >
              Artist
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-white/90 max-w-2xl leading-relaxed font-light"
          >
            Unleash your ultimate glow with Faced By Cyniee. Specializing in
            flawless makeup artistry and stunning lash enhancements, transforming
            everyday beauty into extraordinary confidence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <Link
              to="/book"
              className="group relative inline-flex items-center justify-center px-10 py-5 sm:py-5 min-h-[56px] bg-white text-neutral-900 text-lg font-script font-medium tracking-wide rounded-full hover:bg-white/95 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105"
            >
              <span className="relative z-10">Book Now</span>
              <ArrowRight
                className="ml-3 group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              to="/portfolio"
              className="group inline-flex items-center justify-center px-10 py-5 sm:py-5 min-h-[56px] border-2 border-white/30 text-white text-lg font-script font-medium tracking-wide rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              <span>View Portfolio</span>
              <div className="ml-3 w-2 h-2 bg-white/60 rounded-full group-hover:bg-white transition-colors duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </div>
  );
}