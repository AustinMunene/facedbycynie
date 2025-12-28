import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Category } from '../../types/portfolio';
import { portfolioItems } from '../../data/portfolio';
import { CategoryFilter } from './CategoryFilter';
import { PortfolioCard } from './PortfolioCard';

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  const slides = filteredItems.map(item => ({
    src: item.imageUrl,
    alt: item.title,
    title: item.title,
    description: item.description,
  }));

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </motion.div>
      
      <div className="relative">
        <motion.div
          layout
          className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto flex sm:flex-none overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 scrollbar-hide"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="hover:scale-105 transition-all duration-300 flex-shrink-0 w-[85vw] sm:w-auto snap-center"
              >
                <PortfolioCard
                  item={item}
                  onClick={() => setSelectedItemIndex(filteredItems.indexOf(item))}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Scroll indicator for mobile */}
        {filteredItems.length > 1 && (
          <div className="flex justify-center gap-2 mt-6 sm:hidden">
            {filteredItems.slice(0, Math.min(filteredItems.length, 10)).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-neutral-300 transition-all duration-300"
              />
            ))}
            {filteredItems.length > 10 && (
              <div className="text-xs text-neutral-500 ml-1">+{filteredItems.length - 10}</div>
            )}
          </div>
        )}
      </div>

      <Lightbox
        open={selectedItemIndex !== null}
        close={() => setSelectedItemIndex(null)}
        index={selectedItemIndex || 0}
        slides={slides}
      />
    </div>
  );
}