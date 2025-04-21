import React, { useState } from 'react';
import { PortfolioItem } from '../../../types/portfolio';
import { useAdminDashboard } from '../../../hooks/useAdminDashboard';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { ErrorMessage } from '../../ui/ErrorMessage';

interface PortfolioEditorProps {
  item?: PortfolioItem;
  onSave: (item: PortfolioItem) => void;
}

const defaultItem: Omit<PortfolioItem, 'id'> = {
  title: '',
  description: '',
  category: 'bridal',
  imageUrl: '',
};

export function PortfolioEditor({ item, onSave }: PortfolioEditorProps) {
  const [formData, setFormData] = useState<Omit<PortfolioItem, 'id'>>(
    item || defaultItem
  );
  const { handleImageUpload, handlePortfolioItem, handleUpdatePortfolioItem, isLoading, error } = useAdminDashboard();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (item?.id) {
        const updatedItem = await handleUpdatePortfolioItem(item.id, formData);
        onSave(updatedItem as PortfolioItem);
      } else {
        const newItem = await handlePortfolioItem(formData);
        onSave(newItem as PortfolioItem);
      }
    } catch (err) {
      console.error('Failed to save portfolio item:', err);
    }
  };

  const handleImageChange = async (file: File) => {
    try {
      const url = await handleImageUpload(file, 'portfolio-images');
      setFormData(prev => ({ ...prev, imageUrl: url }));
    } catch (err) {
      console.error('Failed to upload image:', err);
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <ErrorMessage message={error} />}

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
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value as PortfolioItem['category'] })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        >
          <option value="bridal">Bridal</option>
          <option value="editorial">Editorial</option>
          <option value="casual">Casual</option>
          <option value="special-effects">Special Effects</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Image</label>
        {formData.imageUrl && (
          <img
            src={formData.imageUrl}
            alt="Preview"
            className="mt-2 w-32 h-32 object-cover rounded-lg"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => e.target.files?.[0] && handleImageChange(e.target.files[0])}
          className="mt-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
      >
        {item ? 'Update Item' : 'Create Item'}
      </button>
    </form>
  );
}