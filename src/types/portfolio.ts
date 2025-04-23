export type Category = 'all' | 'bridal' | 'editorial' | 'casual' | 'special-effects' | 'tutorial';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<Category, 'all'>;
  imageUrl: string;
  description: string;
  products?: string[];
  beforeImage?: string;
  isVideo?: boolean;
  videoUrl?: string;
  videoThumbnailUrl?: string;
  testimonial?: {
    author: string;
    text: string;
    rating: number;
    avatar?: string;
  };
}

export interface ShareOptions {
  url: string;
  title: string;
  description: string;
}