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
    <div className="container mx-auto px-4 py-16">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <PortfolioCard
                item={item}
                onClick={() => setSelectedItemIndex(filteredItems.indexOf(item))}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Lightbox
        open={selectedItemIndex !== null}
        close={() => setSelectedItemIndex(null)}
        index={selectedItemIndex || 0}
        slides={slides}
      />
    </div>
  );
}