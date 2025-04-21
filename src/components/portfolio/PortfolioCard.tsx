import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { PortfolioItem } from '../../types/portfolio';

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
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg">
        <div className="aspect-[3/4] cursor-pointer" onClick={onClick}>
          <img
            src={item.imageUrl}
            alt={item.title}
            className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-200">{item.description}</p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/faced.by_cyniee_makeup?igsh=a2UxdW00ZXU0bngy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-200 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@faced.bycyniee?_t=8sI7zwEL6HO&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-200 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}