import React from 'react';

interface ContentEditorProps {
  data: {
    excerpt: string;
    content: string;
  };
  onChange: (data: Partial<ContentEditorProps['data']>) => void;
}

export function ContentEditor({ data, onChange }: ContentEditorProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Excerpt</label>
        <textarea
          value={data.excerpt}
          onChange={(e) => onChange({ excerpt: e.target.value })}
          rows={2}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          value={data.content}
          onChange={(e) => onChange({ content: e.target.value })}
          rows={6}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>
    </div>
  );
}