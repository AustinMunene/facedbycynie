import { useState } from 'react';
import { adminApi } from '../lib/supabase/admin';
import { BlogPost } from '../types/blog';
import { PortfolioItem } from '../types/portfolio';

export function useAdminDashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = async (file: File, path: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const url = await adminApi.uploadImage(file, path);
      return url;
    } catch (err) {
      setError('Failed to upload image');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleBlogPost = async (post: Omit<BlogPost, 'id' | 'date'>) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await adminApi.createBlogPost(post);
      return result;
    } catch (err) {
      setError('Failed to save blog post');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateBlogPost = async (id: string, post: Partial<BlogPost>) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await adminApi.updateBlogPost(id, post);
      return result;
    } catch (err) {
      setError('Failed to update blog post');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handlePortfolioItem = async (item: Omit<PortfolioItem, 'id'>) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await adminApi.createPortfolioItem(item);
      return result;
    } catch (err) {
      setError('Failed to save portfolio item');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdatePortfolioItem = async (id: string, item: Partial<PortfolioItem>) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await adminApi.updatePortfolioItem(id, item);
      return result;
    } catch (err) {
      setError('Failed to update portfolio item');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    handleImageUpload,
    handleBlogPost,
    handleUpdateBlogPost,
    handlePortfolioItem,
    handleUpdatePortfolioItem
  };
}