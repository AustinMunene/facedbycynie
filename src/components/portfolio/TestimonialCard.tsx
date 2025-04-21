import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  author: string;
  text: string;
  rating: number;
  avatar?: string;
}

export function TestimonialCard({ author, text, rating, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-4 mb-3">
        {avatar && (
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <h4 className="font-semibold">{author}</h4>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}