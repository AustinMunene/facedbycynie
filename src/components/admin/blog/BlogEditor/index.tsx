import React, { useState } from 'react';
import { BlogPost } from '../../../../types/blog';
import { MetadataEditor } from './MetadataEditor';
import { ContentEditor } from './ContentEditor';
import { ImageUploader } from './ImageUploader';
import { useAdminDashboard } from '../../../../hooks/useAdminDashboard';
import { LoadingSpinner } from '../../../ui/LoadingSpinner';
import { ErrorMessage } from '../../../ui/ErrorMessage';

interface BlogEditorProps {
  post?: BlogPost;
  onSave: (post: BlogPost) => void;
}

const defaultPost: Omit<BlogPost, 'id' | 'date'> = {
  title: '',
  excerpt: '',
  content: '',
  imageUrl: '',
  author: 'Cynie',
  category: 'tips'
};

export function BlogEditor({ post, onSave }: BlogEditorProps) {
  const [formData, setFormData] = useState<Omit<BlogPost, 'id' | 'date'>>(
    post || defaultPost
  );
  const { handleImageUpload, handleBlogPost, handleUpdateBlogPost, isLoading, error } = useAdminDashboard();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (post?.id) {
        const updatedPost = await handleUpdateBlogPost(post.id, formData);
        onSave({ ...updatedPost, date: new Date().toLocaleDateString() });
      } else {
        const newPost = await handleBlogPost(formData);
        onSave({ ...newPost, date: new Date().toLocaleDateString() });
      }
    } catch (err) {
      console.error('Failed to save post:', err);
    }
  };

  const handleImageChange = async (file: File) => {
    try {
      const url = await handleImageUpload(file, 'blog-images');
      setFormData(prev => ({ ...prev, imageUrl: url }));
    } catch (err) {
      console.error('Failed to upload image:', err);
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && <ErrorMessage message={error} />}

      <MetadataEditor
        data={formData}
        onChange={(data) => setFormData({ ...formData, ...data })}
      />
      
      <ImageUploader
        currentImage={formData.imageUrl}
        onImageChange={handleImageChange}
      />
      
      <ContentEditor
        data={formData}
        onChange={(data) => setFormData({ ...formData, ...data })}
      />

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
      >
        {post ? 'Update Post' : 'Create Post'}
      </button>
    </form>
  );
}