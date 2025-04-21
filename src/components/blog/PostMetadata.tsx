import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';

interface PostMetadataProps {
  author: string;
  date: string;
  category: string;
}

export function PostMetadata({ author, date, category }: PostMetadataProps) {
  return (
    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
      <div className="flex items-center">
        <Calendar size={16} className="mr-1" />
        {date}
      </div>
      <div className="flex items-center">
        <User size={16} className="mr-1" />
        {author}
      </div>
      <div className="flex items-center">
        <Tag size={16} className="mr-1" />
        {category}
      </div>
    </div>
  );
}