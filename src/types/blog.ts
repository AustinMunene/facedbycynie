export type BlogCategory = 'bridal' | 'trends' | 'tutorial' | 'tips';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  category: BlogCategory;
}