import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';

interface BlogHeaderProps {
  title: string;
  author: string;
  date: string;
  category: string;
}

export function BlogHeader({ title, author, date, category }: BlogHeaderProps) {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            {title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-white">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              {author}
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {date}
            </div>
            <div className="flex items-center">
              <Tag size={16} className="mr-2" />
              {category}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}