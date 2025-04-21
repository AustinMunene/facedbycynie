import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-xl"
    >
      <h2 className="text-5xl font-light mb-8">About Me</h2>
      <p className="text-neutral-600 mb-6 text-lg">
        Everything has its beauty, but not everyone sees it (Andy Warhol). As a
        certified makeup Artist I have had the privilege of seeing over 50
        smiles over the past one year and as stated very well by Andy I take
        pride in enhancing and bringing out the beauty in different kinds of
        people that need it for different events. This includes Television
        shows, Bridal, birthdays, Corporate shots and special events and I now
        have an extensive portfolio comprising everything beauty.
      </p>
      <p className="text-neutral-600 mb-8 text-lg">
        My approach combines technical expertise with an artistic eye, ensuring
        each client receives a personalized experience that brings out their
        best features.
      </p>
      <Link
        to="/about"
        className="inline-flex items-center text-lg text-neutral-900 hover:text-neutral-600 transition-colors"
      >
        Discover the latest Makeup trends.
        <ArrowRight className="ml-2" size={20} />
      </Link>
    </motion.div>
  );
}
