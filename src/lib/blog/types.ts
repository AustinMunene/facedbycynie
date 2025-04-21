import { BlogPost } from '../../types/blog';

export interface BlogPostDTO {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string;
  author: string;
  category: string;
  created_at: string;
}

export function mapBlogPostFromDTO(dto: BlogPostDTO): BlogPost {
  return {
    id: dto.id,
    title: dto.title,
    excerpt: dto.excerpt,
    content: dto.content,
    imageUrl: dto.image_url,
    author: dto.author,
    date: new Date(dto.created_at).toLocaleDateString(),
    category: dto.category as BlogPost['category']
  };
}