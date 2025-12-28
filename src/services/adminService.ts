import { blogStorage, portfolioStorage } from '../utils/localStorage';
import { BlogPost } from '../types/blog';
import { PortfolioItem } from '../types/portfolio';

export const adminService = {
  // Blog Posts
  async saveBlogPost(post: any) {
    if (post.id) {
      const updated = blogStorage.update(post.id, post);
      return updated ? [updated] : [];
    } else {
      const newPost = blogStorage.add(post);
      return [newPost];
    }
  },

  async deleteBlogPost(id: string) {
    blogStorage.delete(id);
  },

  // Services - No-op for now (services are static)
  async saveService(service: any) {
    console.log('Service saving not implemented with localStorage');
    return [service];
  },

  async deleteService(id: string) {
    console.log('Service deletion not implemented with localStorage');
  },

  // Portfolio
  async savePortfolioItem(item: any) {
    if (item.id) {
      const updated = portfolioStorage.update(item.id, item);
      return updated ? [updated] : [];
    } else {
      const newItem = portfolioStorage.add(item);
      return [newItem];
    }
  },

  async deletePortfolioItem(id: string) {
    portfolioStorage.delete(id);
  }
};