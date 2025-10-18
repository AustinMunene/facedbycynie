import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioGrid } from '../components/portfolio/PortfolioGrid';
import { PageTransition } from '../components/layout/PageTransition';
import { Camera, Palette, Sparkles } from 'lucide-react';

export function PortfolioPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-4">
                <Camera className="w-10 h-10 text-pink-600 mr-3" />
                <Palette className="w-8 h-8 text-purple-600 mr-3" />
                <Sparkles className="w-6 h-6 text-pink-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-light mb-4 text-neutral-900">
                My
                <span className="block gradient-text">Portfolio</span>
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Explore my collection of stunning makeup transformations and artistic creations. 
                From bridal beauty to creative editorial looks, discover the artistry of Faced by Cynie.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="bg-gradient-to-b from-white to-neutral-50">
          <PortfolioGrid />
        </div>
      </div>
    </PageTransition>
  );
}
