import React, { useRef } from 'react';
import { Upload, X } from 'lucide-react';
import { useImageUpload } from '../../hooks/useImageUpload';

interface ImageUploaderProps {
  onUpload: (url: string) => void;
  folder: string;
}

export function ImageUploader({ onUpload, folder }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadImage, isUploading, error } = useImageUpload();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const url = await uploadImage(file, folder);
      onUpload(url);
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={isUploading}
        className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
      >
        <Upload size={20} />
        {isUploading ? 'Uploading...' : 'Upload Image'}
      </button>
      {error && (
        <p className="text-red-500 mt-2 flex items-center gap-2">
          <X size={16} />
          {error}
        </p>
      )}
    </div>
  );
}