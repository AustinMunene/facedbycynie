import React from 'react';
import { Category } from '../../types/portfolio';
import clsx from 'clsx';

interface CategoryFilterProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'bridal', label: 'Bridal' },
  { value: 'editorial', label: 'Editorial' },
  { value: 'casual', label: 'Casual' },
  { value: 'special-effects', label: 'Special Effects' },
];

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2.5 mb-10">
      {categories.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onCategoryChange(value)}
          className={clsx(
            'px-5 py-2 rounded-full text-[11px] font-sans tracking-[0.12em] uppercase transition-all duration-280',
            selectedCategory === value
              ? 'bg-[#ce7690] text-white shadow-[0_8px_20px_-8px_rgba(206,118,144,0.55)]'
              : 'bg-white text-warmgray-600 border border-warmgray-200/70 hover:border-blush-300 hover:text-blush-600'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}