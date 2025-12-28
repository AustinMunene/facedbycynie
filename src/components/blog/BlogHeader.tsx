import { Calendar, User, Tag } from 'lucide-react';

interface BlogHeaderProps {
  title: string;
  author: string;
  date: string;
  category: string;
}

export function BlogHeader({ title, author, date, category }: BlogHeaderProps) {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent flex items-end">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 pb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-script font-semibold mb-6 text-white drop-shadow-2xl leading-tight tracking-wide">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-white/90">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <User size={16} className="mr-2" />
              <span className="font-script">{author}</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Calendar size={16} className="mr-2" />
              {date}
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Tag size={16} className="mr-2" />
              <span className="capitalize">{category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}