import { useState, useEffect } from 'react';
import { BlogPost } from '../../types/blog';
import { fetchBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost } from './api';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchBlogPosts();
      setPosts(data);
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

  const addPost = async (post: Omit<BlogPost, 'id' | 'date'>) => {
    try {
      const newPost = await createBlogPost(post);
      setPosts(current => [newPost, ...current]);
      return newPost;
    } catch (err) {
      throw new Error('Failed to create post');
    }
  };

  const editPost = async (id: string, post: Partial<BlogPost>) => {
    try {
      const updatedPost = await updateBlogPost(id, post);
      setPosts(current => 
        current.map(p => p.id === id ? updatedPost : p)
      );
      return updatedPost;
    } catch (err) {
      throw new Error('Failed to update post');
    }
  };

  const removePost = async (id: string) => {
    try {
      await deleteBlogPost(id);
      setPosts(current => current.filter(p => p.id !== id));
    } catch (err) {
      throw new Error('Failed to delete post');
    }
  };

  return {
    posts,
    isLoading,
    error,
    reload: loadPosts,
    addPost,
    editPost,
    removePost
  };
}