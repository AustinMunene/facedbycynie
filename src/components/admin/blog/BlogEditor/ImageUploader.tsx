import React from 'react';
import { Upload, X } from 'lucide-react';

interface ImageUploaderProps {
  currentImage: string;
  onImageChange: (url: string) => void;
}

export function ImageUploader({ currentImage, onImageChange }: ImageUploaderProps) {
  // For demo purposes, using a mock upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, this would upload to a server
      const mockUrl = URL.createObjectURL(file);
      onImageChange(mockUrl);
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">Featured Image</label>
      
      {currentImage && (
        <div className="relative w-32 h-32">
          <img
            src={currentImage}
            alt="Preview"
            className="w-full h-full object-cover rounded-lg"
          />
          <button
            type="button"
            onClick={() => onImageChange('')}
            className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            <X size={16} />
          </button>
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="image-upload"
      />
      <label
        htmlFor="image-upload"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 cursor-pointer"
      >
        <Upload size={20} />
        Upload Image
      </label>
    </div>
  );
}