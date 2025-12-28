import { BlogPost } from '../../types/blog';
import { PortfolioItem } from '../../types/portfolio';
import { blogStorage, portfolioStorage } from '../../utils/localStorage';

/**
 * Admin API using localStorage
 * Replaces Supabase admin API
 */
export const adminApi = {
  // Blog Management
  async createBlogPost(post: Omit<BlogPost, 'id' | 'date'>): Promise<any> {
    const newPost: BlogPost = {
      ...post,
      id: `blog-${Date.now()}-${Math.random().toString(36).substring(2)}`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    };
    
    blogStorage.add(newPost);
    return {
      id: newPost.id,
      title: newPost.title,
      excerpt: newPost.excerpt,
      content: newPost.content,
      image_url: newPost.imageUrl,
      author: newPost.author,
      category: newPost.category,
      created_at: new Date().toISOString(),
    };
  },

  async updateBlogPost(id: string, post: Partial<BlogPost>): Promise<any> {
    const updated = blogStorage.update(id, post);
    if (!updated) throw new Error('Blog post not found');
    
    return {
      id: updated.id,
      title: updated.title,
      excerpt: updated.excerpt,
      content: updated.content,
      image_url: updated.imageUrl,
      author: updated.author,
      category: updated.category,
      updated_at: new Date().toISOString(),
    };
  },

  async deleteBlogPost(id: string): Promise<void> {
    blogStorage.delete(id);
  },

  // Portfolio Management
  async createPortfolioItem(item: Omit<PortfolioItem, 'id'>): Promise<any> {
    const newItem: PortfolioItem = {
      ...item,
      id: `portfolio-${Date.now()}-${Math.random().toString(36).substring(2)}`,
    };
    
    portfolioStorage.add(newItem);
    return {
      id: newItem.id,
      title: newItem.title,
      description: newItem.description,
      category: newItem.category,
      image_url: newItem.imageUrl,
      before_image: newItem.beforeImage,
      products: newItem.products,
      testimonial: newItem.testimonial,
    };
  },

  async updatePortfolioItem(id: string, item: Partial<PortfolioItem>): Promise<any> {
    const updated = portfolioStorage.update(id, item);
    if (!updated) throw new Error('Portfolio item not found');
    
    return {
      id: updated.id,
      title: updated.title,
      description: updated.description,
      category: updated.category,
      image_url: updated.imageUrl,
      before_image: updated.beforeImage,
      products: updated.products,
      testimonial: updated.testimonial,
      updated_at: new Date().toISOString(),
    };
  },

  async deletePortfolioItem(id: string): Promise<void> {
    portfolioStorage.delete(id);
  },

  // Image Upload - No-op since we're using Imgur as read-only CDN
  async uploadImage(file: File, path: string): Promise<string> {
    // Return a placeholder - in production, this should upload to Imgur or another service
    // For now, we'll return a data URL as a temporary solution
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  },

  // Image Delete - No-op since we're using Imgur as read-only CDN
  async deleteImage(url: string): Promise<void> {
    // No-op - images are managed externally
    console.log('Image deletion not supported with read-only CDN');
  },
};

