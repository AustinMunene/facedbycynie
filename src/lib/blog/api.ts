import { BlogPost } from '../../types/blog';
import { blogStorage } from '../../utils/localStorage';
import { blogPosts as defaultBlogPosts } from '../../data/blog';

// Initialize with default data if localStorage is empty
function initializeBlogData() {
  const stored = blogStorage.getAll<BlogPost>();
  if (stored.length === 0) {
    blogStorage.save(defaultBlogPosts);
    return defaultBlogPosts;
  }
  return stored;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const posts = initializeBlogData();
  // Sort by date (newest first)
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

export async function createBlogPost(post: Omit<BlogPost, 'id' | 'date'>): Promise<BlogPost> {
  const newPost: BlogPost = {
    ...post,
    id: `blog-${Date.now()}-${Math.random().toString(36).substring(2)}`,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
  };
  
  blogStorage.add(newPost);
  return newPost;
}

export async function updateBlogPost(id: string, post: Partial<BlogPost>): Promise<BlogPost> {
  const updated = blogStorage.update(id, post);
  if (!updated) throw new Error('Blog post not found');
  return updated as BlogPost;
}

export async function deleteBlogPost(id: string): Promise<void> {
  blogStorage.delete(id);
}