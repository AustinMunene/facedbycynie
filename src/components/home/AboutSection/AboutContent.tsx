import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, margin: '-80px' }}
      className="max-w-md lg:pl-6"
    >
      <p className="text-[10px] font-sans font-normal tracking-[0.22em] uppercase text-blush-600 mb-3">
        About
      </p>
      <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1] mb-6">
        The Art of
        <br />
        Beautiful Makeup
      </h2>
      <p className="text-warmgray-600 mb-4 text-[13px] leading-[1.8]">
        Everything has its beauty, but not everyone sees it. As a certified
        makeup artist, I have had the privilege of bringing out the best in
        over 50 clients across bridal looks, editorial shoots, corporate
        portraits, and special events.
      </p>
      <p className="text-warmgray-600 mb-8 text-[13px] leading-[1.8]">
        My approach combines technical expertise with an artistic eye,
        ensuring each client receives a personalized experience that
        highlights their unique features.
      </p>
      <Link
        to="/portfolio"
        className="group inline-flex items-center gap-2 text-[11px] font-sans font-normal tracking-[0.12em] uppercase text-warmgray-900 hover:text-blush-600 transition-colors duration-280"
      >
        Discover More
        <ArrowRight
          size={14}
          strokeWidth={1.5}
          className="group-hover:translate-x-1 transition-transform duration-280"
        />
      </Link>
    </motion.div>
  );
}
