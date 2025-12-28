import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SafeImage } from '../ui/SafeImage';

const featuredImages = [
  {
    url: 'https://imgur.com/GXavDU3.jpeg',
    category: 'Editorial',
  },
  {
    url: 'https://imgur.com/YvwrvVW.jpeg',
    category: 'Natural glam',
  },
  {
    url: 'https://imgur.com/C0wE8sm.jpeg',
    category: 'Beauty',
  },
];

export function FeaturedWork() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-4 text-neutral-900">
              Featured
              <span className="block gradient-text">Work</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-md">
              Discover the artistry and precision behind each transformation
            </p>
          </div>
          <Link
            to="/portfolio"
            className="group inline-flex items-center mt-6 md:mt-0 px-6 py-3 border-2 border-neutral-200 text-neutral-700 font-medium rounded-full hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-300"
          >
            <span>View All Work</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
          </Link>
        </motion.div>

        <div className="relative">
          <div className="md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto md:mx-auto flex md:flex-none overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
            {featuredImages.map((image, index) => (
              <motion.div
                key={image.url}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex-shrink-0 w-[85vw] md:w-auto snap-center"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <SafeImage
                    src={image.url}
                    alt={`Featured ${'https://imgur.com/C0wE8sm.jpeg'.category} work`}
                    fallbackSrc="https://i.imgur.com/CoYtKpy.jpeg"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-white">
                    <h3 className="text-2xl font-serif font-medium mb-2">{image.category}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full" />
                  </div>
                </div>

                {/* Floating label */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg border border-neutral-100">
                  <span className="text-sm font-medium text-neutral-700">{image.category}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicator for mobile */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {featuredImages.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-neutral-300 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
