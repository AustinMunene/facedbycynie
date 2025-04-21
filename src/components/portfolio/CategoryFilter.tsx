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
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onCategoryChange(value)}
          className={clsx(
            'px-4 py-2 rounded-full text-sm font-medium transition-colors',
            selectedCategory === value
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}