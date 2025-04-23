import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioGrid } from '../components/portfolio/PortfolioGrid';
import { PageTransition } from '../components/layout/PageTransition';

export function PortfolioPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-b from-purple-50 to-white py-16"
        >
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl font-light text-gray-900 mb-6"
            >
              Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 max-w-2xl text-lg"
            >
              Explore my collection of stunning makeup transformations and
              artistic creations. From bridal beauty to creative editorial looks,
              discover the artistry of Faced by Cynie.
            </motion.p>
          </div>
        </motion.div>
        <PortfolioGrid />
      </div>
    </PageTransition>
  );
}
