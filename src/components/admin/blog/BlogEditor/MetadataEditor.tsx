import React from 'react';
import { BlogCategory } from '../../../../types/blog';

interface MetadataEditorProps {
  data: {
    title: string;
    category: BlogCategory;
  };
  onChange: (data: Partial<MetadataEditorProps['data']>) => void;
}

export function MetadataEditor({ data, onChange }: MetadataEditorProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => onChange({ title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={data.category}
          onChange={(e) => onChange({ category: e.target.value as BlogCategory })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        >
          <option value="bridal">Bridal</option>
          <option value="trends">Trends</option>
          <option value="tutorial">Tutorial</option>
          <option value="tips">Tips</option>
        </select>
      </div>
    </div>
  );
}