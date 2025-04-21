import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Category } from '../../types/portfolio';
import { portfolioItems } from '../../data/portfolio';
import { CategoryFilter } from './CategoryFilter';
import { PortfolioCard } from './PortfolioCard';
import { VideoPortfolioCard } from './VideoPortfolioCard';

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  const slides = filteredItems.map(item => ({
    src: item.isVideo ? item.videoUrl! : item.imageUrl,
    alt: item.title,
    title: item.title,
    description: item.description,
  }));

  // Separate videos and images
  const videoItems = filteredItems.filter(item => item.isVideo);
  const imageItems = filteredItems.filter(item => !item.isVideo);

  return (
    <div className="container mx-auto px-4 py-16">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      {/* Videos section - Full width, vertical scrolling */}
      {videoItems.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Videos</h2>
          <div className="h-[calc(100vh-200px)] overflow-y-auto snap-y snap-mandatory">
            {videoItems.map((item) => (
              <VideoPortfolioCard
                key={item.id}
                videoUrl={item.videoUrl!}
                thumbnailUrl={item.videoThumbnailUrl!}
                title={item.title}
                description={item.description}
                onClick={() => setSelectedItemIndex(filteredItems.indexOf(item))}
              />
            ))}
          </div>
        </div>
      )}

      {/* Images grid */}
      {imageItems.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {imageItems.map((item) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  onClick={() => setSelectedItemIndex(filteredItems.indexOf(item))}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      <Lightbox
        open={selectedItemIndex !== null}
        close={() => setSelectedItemIndex(null)}
        index={selectedItemIndex || 0}
        slides={slides}
      />
    </div>
  );
}