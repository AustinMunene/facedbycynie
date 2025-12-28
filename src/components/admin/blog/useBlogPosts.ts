import { useState, useEffect } from 'react';
import { BlogPost } from '../../../types/blog';
import { fetchBlogPosts } from '../../../lib/blog/api';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchBlogPosts();
      setPosts(data || []);
    } catch (err) {
      setError('Failed to load posts');
      console.error('Error loading posts:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return {
    posts,
    isLoading,
    error,
    reload: loadPosts
  };
}