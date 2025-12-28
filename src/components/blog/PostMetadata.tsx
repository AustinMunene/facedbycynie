import { Calendar, User, Tag } from 'lucide-react';

interface PostMetadataProps {
  author: string;
  date: string;
  category: string;
}

export function PostMetadata({ author, date, category }: PostMetadataProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
      <div className="flex items-center gap-1.5">
        <Calendar size={14} />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <User size={14} />
        <span className="font-script">{author}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Tag size={14} />
        <span className="capitalize">{category}</span>
      </div>
    </div>
  );
}