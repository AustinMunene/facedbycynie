import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { PortfolioItem } from '../../types/portfolio';
import { SafeImage } from '../ui/SafeImage';

interface PortfolioCardProps {
  item: PortfolioItem;
  onClick: () => void;
}

export function PortfolioCard({ item, onClick }: PortfolioCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group relative"
    >
      <div className="relative overflow-hidden">
        <div className="aspect-square cursor-pointer" onClick={onClick}>
          <SafeImage
            src={item.imageUrl}
            alt={item.title}
            className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Card footer */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-1.5">
          <h3 className="text-[17px] text-warmgray-900">
            {item.title}
          </h3>
          <a
            href="https://www.instagram.com/faced.by_cyniee_makeup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warmgray-400 hover:text-blush-600 transition-colors duration-280"
          >
            <Instagram size={18} strokeWidth={1.5} />
          </a>
        </div>
        <p className="text-[13px] leading-[1.7] text-warmgray-500 line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
