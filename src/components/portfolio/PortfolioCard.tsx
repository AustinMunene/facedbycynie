import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle, Share2 } from 'lucide-react';
import { PortfolioItem } from '../../types/portfolio';
import { SafeImage } from '../ui/SafeImage';

interface PortfolioCardProps {
  item: PortfolioItem;
  onClick: () => void;
}

export function PortfolioCard({ item, onClick }: PortfolioCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-square cursor-pointer" onClick={onClick}>
          <SafeImage
            src={item.imageUrl}
            alt={item.title}
            className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Overlay with actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showActions ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
          >
            <Heart
              size={24}
              className={`${isLiked ? 'text-red-500 fill-current' : 'text-gray-700'}`}
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
          >
            <MessageCircle size={24} className="text-gray-700" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
          >
            <Share2 size={24} className="text-gray-700" />
          </motion.button>
        </motion.div>
      </div>

      {/* Card footer */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
          <a
            href="https://www.instagram.com/faced.by_cyniee_makeup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
      </div>
    </motion.div>
  );
}