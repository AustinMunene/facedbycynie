import { BlogPost } from '../../../types/blog';
import { blogStorage } from '../../../utils/localStorage';
import { blogPosts as defaultBlogPosts } from '../../../data/blog';

// Initialize with default data if localStorage is empty
function initializeBlogData() {
  const stored = blogStorage.getAll<BlogPost>();
  if (stored.length === 0) {
    blogStorage.save(defaultBlogPosts);
    return defaultBlogPosts;
  }
  return stored;
}

export const blogService = {
  async getAllPosts() {
    return initializeBlogData();
  },

  async createPost(post: Omit<BlogPost, 'id' | 'date'>) {
    const newPost: BlogPost = {
      ...post,
      id: `blog-${Date.now()}-${Math.random().toString(36).substring(2)}`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    };
    
    blogStorage.add(newPost);
    return newPost;
  },

  async updatePost(id: string, post: Partial<BlogPost>) {
    const updated = blogStorage.update(id, post);
    if (!updated) throw new Error('Blog post not found');
    return updated as BlogPost;
  },

  async deletePost(id: string) {
    blogStorage.delete(id);
  }
};