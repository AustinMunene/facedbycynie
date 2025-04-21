import React from 'react';
import { motion } from 'framer-motion';

export function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="w-full h-[600px] relative overflow-hidden rounded-lg">
        <img
          src="/faced-by-cyniee-logo.jpg"
          alt="Faced by Cyniee Logo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
    </motion.div>
  );
}