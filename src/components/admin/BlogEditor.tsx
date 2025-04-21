import React, { useState } from 'react';
import { useImageUpload } from '../../hooks/useImageUpload';
import { ImageUploader } from './ImageUploader';
import { BlogPost } from '../../types/blog';

interface BlogEditorProps {
  post?: BlogPost;
  onSave: (post: Omit<BlogPost, 'id'>) => Promise<void>;
}

export function BlogEditor({ post, onSave }: BlogEditorProps) {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    excerpt: post?.excerpt || '',
    content: post?.content || '',
    imageUrl: post?.imageUrl || '',
    category: post?.category || 'tips',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave({
      ...formData,
      author: 'Cynie',
      date: new Date().toLocaleDateString(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Excerpt</label>
        <textarea
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          rows={2}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          rows={6}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value as BlogPost['category'] })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        >
          <option value="bridal">Bridal</option>
          <option value="trends">Trends</option>
          <option value="tutorial">Tutorial</option>
          <option value="tips">Tips</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
        {formData.imageUrl && (
          <img src={formData.imageUrl} alt="Preview" className="w-32 h-32 object-cover rounded-lg mb-4" />
        )}
        <ImageUploader
          onUpload={(url) => setFormData({ ...formData, imageUrl: url })}
          folder="blog-images"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
      >
        Save Post
      </button>
    </form>
  );
}